# ESP_HOME — System Overview

## 1. Introduction

ESP_HOME is a modular embedded control system designed for distributed automation using ESP-based microcontrollers.

The system consists of:

* A central controller (ESP32 mainboard)
* Multiple distributed nodes (ESP8266 / ESP32)
* A local user interface (mobile/web)
* A low-latency communication layer (ESP-NOW)

The architecture is designed for **offline-first operation**, **long-term reliability**, and **modular scalability**.

---

## 2. System Composition

### 2.1 Mainboard (Central Controller)

The mainboard is built around the ESP32-WROOM-32E module and acts as the system coordinator.

**Core Subsystems:**

* Power regulation (5V → 3.3V via LDO)
* ESP32 MCU core
* GPIO/I2C expansion headers
* Programming and debug interface (UART)
* USB-C power input with protection

**Functions:**

* Maintains device registry
* Routes commands between UI and nodes
* Aggregates system state
* Handles OTA updates
* Supervises network activity

---

### 2.2 Distributed Nodes

Nodes are independent embedded devices connected to loads or sensors.

**Hardware Variants:**

* Relay Node (AC load control via electromechanical relay)
* Sensor Node (environmental monitoring)
* Actuator Node (motor/dimmer control)
* Expansion Nodes (custom modules)

**Key Characteristics:**

* ESP8266 (ESP-12F) or ESP32 based
* Locally powered (AC-DC or DC input)
* Executes commands autonomously
* Reports status periodically or on change

---

### 2.3 Communication Layer

ESP_HOME uses a dual communication strategy:

#### Primary: ESP-NOW

* Peer-to-peer protocol
* Operates without router/internet
* Low latency (~ms-level)
* Supports broadcast and unicast

#### Secondary: Wi-Fi

* Used for UI connectivity
* Configuration and debugging
* OTA firmware delivery

---

### 2.4 User Interface Layer

Provides interaction with the system via:

* Mobile application
* Web dashboard

**Capabilities:**

* Device control (ON/OFF, state change)
* Real-time monitoring
* Node configuration
* Firmware updates

---

## 3. Functional Blocks

### 3.1 Power Domain

* Input: 5V via USB-C or external supply
* Regulation: 3.3V LDO (AP2114 series)
* Filtering: Bulk + high-frequency decoupling
* Protection: Fuse, TVS, ESD

**Outputs:**

* 3V3_MAIN → distributed across board
* 3V3_ESP → filtered rail for MCU

---

### 3.2 Processing Domain

* MCU: ESP32-WROOM-32E
* Clock: Internal oscillator
* Interfaces:

  * UART (programming/debug)
  * I2C (external devices)
  * GPIO (control & sensing)

---

### 3.3 I/O Expansion Domain

* Dedicated headers for:

  * I2C (SDA, SCL, power, GND)
  * GPIO breakout
  * Power distribution (3.3V, 5V)

Supports:

* Sensors
* Displays
* External controllers

---

### 3.4 Programming & Debug Interface

* UART exposed via header
* EN and IO0 control lines for flashing
* ESD protection on communication lines

---

## 4. System Operation

### 4.1 Initialization Sequence

1. Power applied (5V input)
2. LDO regulates to 3.3V
3. ESP32 boots from flash
4. System initializes:

   * GPIO states
   * Communication stack (ESP-NOW)
   * Device registry
5. Mainboard enters operational state

---

### 4.2 Device Discovery

1. Node powers on
2. Node broadcasts identification packet
3. Mainboard receives and validates
4. Node is registered in device table
5. System assigns logical identity

---

### 4.3 Command Execution Flow

1. User issues command via UI
2. Command reaches mainboard (Wi-Fi)
3. Mainboard encodes ESP-NOW packet
4. Packet sent to target node
5. Node executes action (e.g., relay toggle)
6. Node sends acknowledgment

---

### 4.4 State Reporting

* Event-driven (preferred)
* Periodic heartbeat (optional)

Flow:
Node → Mainboard → UI

---

### 4.5 Fail-Safe Operation

If mainboard is unavailable:

* Nodes retain last known state
* Optional local logic continues execution
* No dependency on continuous connection

---

## 5. Network Topology

* Star topology with central coordination
* Optional peer-to-peer links

**Characteristics:**

* Low latency
* Scalable node addition
* Reduced network overhead

---

## 6. Electrical Design Considerations

### 6.1 Power Integrity

* Bulk capacitance near regulator output
* Local decoupling at MCU pins
* Segregated power rails (3V3_MAIN vs 3V3_ESP)

### 6.2 Signal Integrity

* Short trace lengths for high-speed lines
* Proper pull-ups (I2C: 4.7kΩ)
* Series resistors where required

### 6.3 Protection

* TVS diode on input
* ESD diodes on communication lines
* Fuse on power input

### 6.4 RF and Wireless Optimization (New Layout)

The V1.1 hardware revision introduces a high-performance RF layout strategy:

* **Off-Board Antenna Placement:** The ESP32-WROOM-32E module is positioned at the extreme edge of the PCB, with the PCB antenna extending beyond the board perimeter.
* **Ground Plane Keep-Out:** There is zero copper (signal, power, or ground) directly beneath the antenna area.
* **Benefits:**
    * **Enhanced Range:** Minimizes signal attenuation and reflections from the PCB ground plane, significantly increasing ESP-NOW and Wi-Fi range.
    * **Improved Sensitivity:** Reduces internal EMI noise coupling into the receiver, leading to a better Signal-to-Noise Ratio (SNR).
    * **Stable Connectivity:** Ensures reliable Bluetooth and Wi-Fi performance even in dense RF environments.

### 6.5 Physical Component Placement and PCB Floorplan

The Mainboard (V1.0) follows a logical floorplan designed to optimize power flow and minimize signal interference. The board dimensions are approximately **89.5mm x 54.5mm** with rounded corners.

#### **Layout Zones:**
*   **Power Entry Zone (West Edge):** The USB-C input is located on the far left, immediately followed by the input protection stage (TVS, Fuse) and the 3.3V LDO regulator. This keeps high-current power traces short and localized.
*   **MCU & RF Zone (South-Central Edge):** The ESP32-WROOM-32E is center-aligned at the bottom edge. Its antenna is placed **off-board** (overhanging the PCB) to ensure unobstructed wireless propagation.
*   **User Interface Zone (Central & South-East):** Tactile switches for EN and IO0 are placed near the MCU for easy access. SW2 (IO0) is located above the MCU, while SW1 (EN) is at the bottom right corner.
*   **Signal Breakout Zone (East Edge):** The high-density 14-pin GPIO header is positioned on the far right edge, providing a clean interface for external wiring without crossing over power circuitry.
*   **I2C & Programming Zone (North Edge):** Dedicated headers for Programming (UART), I2C (4-pin and 6-pin), and Auxiliary Power are neatly arranged along the top edge of the board.

#### **Technical Design Highlights:**
*   **Clean Rail Isolation:** The 470uF electrolytic reservoir (C4) and the isolation star-point (R3) are placed between the power regulation and MCU zones to maximize decoupling efficiency.
*   **Trace Optimization:** Passive components (resistors/capacitors) are tightly grouped around their respective ICs to reduce parasitic inductance and improve signal integrity.
*   **Diagnostic Visibility:** The status LED is placed near the GPIO header for clear visibility during development and operation.

---

## 7. System Constraints

* ESP-NOW device limit (~20 peers practical)
* Range dependent on environment (~10–50m indoor)
* 3.3V logic only
* Limited bandwidth (suitable for control, not streaming)

---

## 8. Expandability

* Additional nodes can be added without redesign
* Support for future node types:

  * Dimmer modules
  * Motor drivers
  * Advanced sensor arrays

---

## 9. Summary

ESP_HOME is a distributed embedded system that combines:

* Central coordination (ESP32 mainboard)
* Distributed execution (nodes)
* Low-latency communication (ESP-NOW)

The system is engineered for:

* Long-term continuous operation
* Electrical safety
* Modular scalability
* Offline-first functionality
