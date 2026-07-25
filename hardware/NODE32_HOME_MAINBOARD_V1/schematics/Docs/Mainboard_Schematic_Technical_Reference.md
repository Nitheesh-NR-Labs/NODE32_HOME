# NODE32_HOME Mainboard V1 - Detailed Technical Reference

This document provides an exhaustive technical analysis of the NODE32_HOME Mainboard V1 hardware architecture. It serves as the primary reference for hardware validation, thermal analysis, and firmware Hardware Abstraction Layer (HAL) development.

---

## 1. Power Distribution & Integrity

### **1.1 Input Protection Stage (`USB_C_input_5v.png`)**
*   **Connector:** U262-161N 16-pin USB-C. This mid-mount connector provides high mechanical stability.
*   **Source Negotiation:** R4 and R5 (5.1kΩ) pull CC1 and CC2 to ground, signaling to a USB-C Power Delivery (PD) source that this is a "Sink" device requesting 5V.
*   **Overcurrent Protection (F1):** The 1812L075/24DR PPTC has a **Hold Current of 750mA** and a **Trip Current of 1.5A**. This limits the total system draw to 3.75W, protecting the USB host and board traces.
*   **Transient Suppression (D3):** A SOD-123FL TVS diode is placed immediately after the fuse to clamp inductive spikes from long USB cables or poor-quality power adapters.

### **1.2 Voltage Regulation Subsystem (`3V3_REG.png`)**
*   **LDO Regulator (U1):** AP2114HA-3.3TRG1.
    *   **Max Input:** 6V.
    *   **Max Output:** 1.0A (Continuous).
    *   **Dropout Voltage:** ~450mV at 1A load.
*   **Filtering Strategy:**
    *   **Bulk Input:** C7 (22uF) provides low-frequency ripple rejection.
    *   **High-Freq Bypass:** C8 (1uF) and C9 (100nF) are placed close to the U1 input pin to suppress high-frequency switching noise.
*   **The "Clean Rail" Architecture:**
    *   The **0Ω Resistor (R3)** acts as a star-point jumper, isolating the noisy `3V3_ESP` rail from the `3V3_MAIN` rail used for sensitive I2C sensors.
    *   **C4 (470uF Electrolytic):** Specifically sized to provide local energy storage for ESP32 radio bursts (Wi-Fi/ESP-NOW), which can reach instantaneous peaks of 600mA+.

---

## 2. MCU Core & Bootstrapping (`ESP32_MCU_Main.png`)

### **2.1 Bootstrapping Logic (Strapping Pins)**
The ESP32 samples specific GPIOs during the rising edge of the `CHIP_PU` (EN) signal to determine boot mode and voltage levels.

| Pin | Function | Schematic State | Result |
| :--- | :--- | :--- | :--- |
| **IO0** | Boot Mode | Pulled HIGH (R2, 10kΩ) | Normal execution from SPI Flash. |
| **IO2** | Boot Mode | Pulled LOW (R10, 10kΩ) | Required state for entering Download Mode. |
| **IO12** | Flash VDD | Pulled LOW (R13, 100kΩ) | Forces internal Flash to 3.3V (Safety critical for N16 module). |
| **IO15** | Log Output | Not Pulled | Standard UART0 boot log output enabled. |

### **2.2 Reset & Timing**
*   **RC Delay (R1/C5):** The 10kΩ/1uF combination creates a ~10ms delay. This ensures the 3.3V rail has fully stabilized before the ESP32 exits the reset state, preventing "zombie" states or flash corruption during power-up.
*   **Manual Control:** SW1 (EN) and SW2 (IO0) allow for manual "Flash Dance" (Hold IO0 -> Press EN -> Release EN) for firmware recovery.

---

## 3. Communication & Signal Integrity

### **3.1 Primary Programming Interface (`Programming_Header.png`)**
*   **Impedance Matching:** R6 and R7 (100Ω) are series termination resistors. They dampen signal reflections on the UART lines, which is critical when using long jumper wires for flashing.
*   **ESD Guarding:** D1 and D2 (ESD9B3.3) are ultra-low capacitance (<0.5pF) diodes. They protect the ESP32 UART pins from static discharge during connector insertion without distorting the 921,600 baud data signal.

### **3.2 I2C Bus Management**
*   **Pull-ups:** R11 and R12 (4.7kΩ) are connected to `3V3_ESP`.
*   **Bus Connectivity:**
    *   **I2C_6PIN:** Includes `IO4` (Interrupt) and `IO13` (GPIO/CS), allowing for advanced sensors like the BME680 or high-speed IMUs.
    *   **I2C_4PIN:** Standard power + data for simple displays or climate sensors.

---

## 4. Hardware/Software Interface (GPIO Map)

| Peripheral | GPIO | Type | Logic | Description |
| :--- | :---: | :---: | :---: | :--- |
| **Status LED** | IO5 | Output | High | System Heartbeat / Error Indicator |
| **I2C SDA** | IO21 | I/O | Pull-up | Shared Sensor Data Bus |
| **I2C SCL** | IO22 | Output | Pull-up | Shared Sensor Clock Bus |
| **UART0 TX** | IO1 | Output | - | Programming & Debug Console |
| **UART0 RX** | IO3 | Input | - | Programming & Debug Console |
| **UART2 TX** | IO17 | Output | - | Auxiliary/Industrial Interface |
| **UART2 RX** | IO16 | Input | - | Auxiliary/Industrial Interface |

---

## 5. Engineering Reliability Analysis

### **5.1 Thermal Management**
The AP2114 LDO (SOT-223) dissipates heat based on: $P = (V_{in} - V_{out}) \times I_{out}$.
*   With 5V input and 3.3V output at 400mA average load: $P = (5 - 3.3) \times 0.4 = 0.68W$.
*   The SOT-223 package requires a copper thermal pad (GND) of at least 200mm² to maintain a junction temperature below 125°C in a 40°C ambient environment.

### **5.2 EMI/EMC Strategy**
*   **Ground Plane:** The schematic symbols imply a unified ground. For the N16 module, the area directly under the PCB antenna MUST be a "Keep-Out" zone (no copper on any layer).
*   **Decoupling:** Each VDD pin of the ESP32 is decoupled with a 100nF (C3, C6) capacitor placed within 2mm of the pin.
