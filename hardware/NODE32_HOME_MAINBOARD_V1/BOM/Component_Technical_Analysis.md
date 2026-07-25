# NODE32_HOME Mainboard - Core Component Technical Documentation

This document details the selection rationale, application, and technical specifications of the primary active and protection components used in the NODE32_HOME Mainboard V1.

---

## 1. Microcontroller Module (MCU)
### **Part: ESP32-WROOM-32E-N16**
*   **Manufacturer:** Espressif Systems
*   **Function:** Central System Coordinator & Gateway

| Specification | Details |
| :--- | :--- |
| **Core** | Dual-core Xtensa® 32-bit LX6 |
| **Clock Frequency** | Up to 240 MHz |
| **Flash Memory** | 16 MB (N16 variant) |
| **Wireless** | Wi-Fi 802.11 b/g/n + BT 4.2 / BLE |
| **Operating Voltage** | 3.0V ~ 3.6V |

**Selection Rationale:**
*   **High Flash Capacity:** The 16MB N16 variant was selected to support complex local device registries, high-resolution web interfaces, and robust Dual-Bank OTA updates.
*   **Stability:** The 'E' variant features an improved chip revision (ECO V3) that addresses several hardware errata found in older ESP32 modules.
*   **Protocol Support:** Simultaneous handling of ESP-NOW (for node communication) and standard Wi-Fi (for user interface) requires the dual-core architecture to ensure low-latency performance.

---

## 2. Voltage Regulation (LDO)
### **Part: AP2114HA-3.3TRG1**
*   **Manufacturer:** Diodes Incorporated
*   **Function:** 5V to 3.3V Step-down Regulation

| Specification | Details |
| :--- | :--- |
| **Output Voltage** | 3.3V Fixed |
| **Max Output Current** | 1.0 A |
| **Dropout Voltage** | 450 mV @ 1A |
| **Package** | SOT-223 |

**Selection Rationale:**
*   **Current Margin:** The ESP32 can spike up to 600mA during Wi-Fi transmission. A 1A regulator provides a 40% safety margin.
*   **Thermal Performance:** The SOT-223 package offers better thermal dissipation than SOT-23, which is critical for long-term continuous operation in enclosed smart home environments.

---

## 3. Power Input & Connection
### **Part: U262-161N-4BC21665 (USB-C)**
*   **Manufacturer:** XKB Connection
*   **Function:** Primary Power Input & UART Interface

| Specification | Details |
| :--- | :--- |
| **Type** | USB Type-C 2.0 (16-Pin) |
| **Mounting** | SMD / Mid-mount preferred |
| **Current Rating** | 5.0 A |

**Selection Rationale:**
*   **Durability:** Modern USB-C connectors are rated for higher cycle counts compared to Micro-USB.
*   **Universal Compatibility:** Simplifies power sourcing for users. 16-pin variant provides the necessary CC pins for 5V negotiation without the complexity of a full 24-pin USB 3.0 connector.

---

## 4. Circuit Protection
### **Part: 1812L075/24DR (PPTC Fuse)**
*   **Function:** Overcurrent Protection (Resettable)

| Specification | Details |
| :--- | :--- |
| **Hold Current** | 0.75 A |
| **Trip Current** | 1.50 A |
| **Max Voltage** | 24 V |

**Selection Rationale:**
*   **Self-Healing:** In the event of a transient short circuit during installation, the PPTC resets once the fault is removed, reducing maintenance requirements and improving "product-grade" reliability.

### **Part: ESD9B3.3ST5G**
*   **Function:** ESD Protection for Data Lines (D+/D-)

| Specification | Details |
| :--- | :--- |
| **Working Voltage** | 3.3 V |
| **Clamping Voltage** | 9.0 V @ 1A |
| **Capacitance** | 0.5 pF (Low capacitance) |

**Selection Rationale:**
*   **Signal Integrity:** Low capacitance ensures no degradation of high-speed UART/USB signals while providing high-level protection against human-body electrostatic discharge.

---

## 5. User Interface & Control
### **Part: TSA010A2518A**
*   **Function:** Reset (EN) and Boot (IO0) Switches

| Specification | Details |
| :--- | :--- |
| **Type** | Tactile Switch (SMD) |
| **Operating Force** | 160gf |
| **Life Cycle** | 100,000 Cycles |

**Selection Rationale:**
*   **Reliability:** Selected for high cycle count and tactile feedback to ensure the developer/user can reliably enter bootloader mode.

---

## 6. Status Indication
### **Part: XL-1608VRC-06 (LED)**
*   **Function:** System Status / Heartbeat Monitor

| Specification | Details |
| :--- | :--- |
| **Color** | Red |
| **Package** | 0603 SMD |
| **Luminous Intensity** | 80 mcd |

**Selection Rationale:**
*   **Diagnostics:** Provides immediate visual feedback on power state and firmware execution (heartbeat), essential for field debugging.

---

## Engineering Risks & Recommendations
1.  **Thermal Dissipation:** The SOT-223 LDO regulator requires a minimum of 200mm² copper pour on the PCB for optimal heat sinking when powered from 5V.
2.  **Inrush Current:** The 470uF bulk capacitor provides excellent ripple rejection but requires a slow-trip or higher rated fuse if the LDO does not have internal soft-start.
3.  **RF Performance:** The ESP32 module must be placed at the edge of the PCB with a keep-out zone under the antenna to maintain -90dBm sensitivity for long-range ESP-NOW communication.
