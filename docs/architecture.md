# ESP_HOME — System Architecture

## 1. Overview

ESP_HOME is built on a hybrid decentralized architecture designed for reliability, scalability, and offline-first operation.

The system consists of a central controller (mainboard) and multiple distributed nodes that communicate using ESP-NOW. Each node is capable of independent operation while being coordinated by the main controller.

---

## 2. Architectural Model

ESP_HOME follows a **Hybrid Distributed Architecture**:

* **Central Coordination Layer** → Mainboard (ESP32)
* **Distributed Execution Layer** → Nodes (ESP8266 / ESP32)
* **Communication Layer** → ESP-NOW (primary), Wi-Fi (secondary)
* **User Interface Layer** → Mobile/Web App

This model balances:

* Centralized control for coordination
* Decentralized execution for reliability

---

## 3. System Components

### 3.1 Main Controller (Mainboard)

The mainboard acts as the central coordinator of the system.

**Responsibilities:**

* Device registry and identification
* Command routing
* State aggregation
* User interface communication
* OTA update management
* Network supervision

**Characteristics:**

* ESP32-based
* Always powered and active
* Maintains system-wide awareness

---

### 3.2 Nodes (Distributed Devices)

Nodes are independent hardware units responsible for interacting with the physical world.

**Types of Nodes:**

* Relay Nodes (appliance control)
* Sensor Nodes (environment monitoring)
* Actuator Nodes (motors, dimmers)
* Expansion Nodes (custom modules)

**Responsibilities:**

* Execute commands
* Read sensors
* Report state
* Maintain safe fallback behavior

**Key Property:**
Nodes must continue functioning even if the main controller is unavailable.

---

### 3.3 Communication Layer

ESP_HOME uses a dual-layer communication approach:

#### Primary: ESP-NOW

* Low latency
* Peer-to-peer communication
* No Wi-Fi network dependency
* Suitable for real-time control

#### Secondary: Wi-Fi

* Used for user interface access
* OTA updates
* Configuration and debugging

---

### 3.4 User Interface Layer

The system interacts with users via:

* Mobile application
* Web dashboard

**Functions:**

* Device control
* System monitoring
* Configuration
* Firmware updates

---

## 4. Network Topology

The system follows a **star + peer hybrid topology**:

* Mainboard acts as central hub
* Nodes communicate with mainboard
* Optional node-to-node communication supported

This ensures:

* Efficient command distribution
* Reduced latency
* Flexibility for advanced use cases

---

## 5. Data Flow

### 5.1 Command Flow

User → Mainboard → Node → Actuator

* Commands originate from user interface
* Mainboard validates and routes commands
* Node executes action

---

### 5.2 Feedback Flow

Node → Mainboard → User Interface

* Nodes report status and acknowledgments
* Mainboard aggregates system state

---

### 5.3 Discovery Flow

Node → Broadcast → Mainboard

* New nodes announce themselves
* Mainboard registers and assigns identity

---

### 5.4 Peer Interaction (Optional)

Node ↔ Node

* Direct communication for low-latency actions
* Example: motion sensor triggering relay

---

## 6. Power Architecture (High-Level)

* Mainboard: Low-voltage DC regulated supply (USB-C / external DC)
* Nodes: Isolated AC-DC modules (e.g., HLK-PM01) or DC supply

Design priorities:

* Electrical isolation
* Stable voltage regulation
* Long-term reliability

---

## 7. Reliability Strategy

ESP_HOME is designed for continuous long-term operation.

### 7.1 Decentralization

Nodes operate independently without constant controller dependency.

### 7.2 Fail-Safe Behavior

* Nodes retain last known state
* Predefined fallback logic can be implemented

### 7.3 Robust Communication

* ESP-NOW minimizes network failure points
* Retry and acknowledgment mechanisms

### 7.4 Hardware Protection

* Proper grounding strategy
* Decoupling and filtering
* Protection components (TVS, ESD, etc.)

### 7.5 RF Path Reliability

The physical layout prioritizes wireless link stability by utilizing an **Off-Board Antenna** strategy. By positioning the MCU module such that the antenna overhangs the PCB edge, the system achieves maximum theoretical range and minimizes packet loss—critical for the low-latency requirements of the ESP-NOW protocol.

---

## 8. Scalability

The system is designed to scale horizontally:

* Add nodes without system redesign
* No strict upper limit (practical limits depend on ESP-NOW constraints)
* Modular expansion (sensor, relay, motor, etc.)

---

## 9. Security Considerations (High-Level)

* ESP-NOW peer authentication
* Device whitelisting via mainboard
* Controlled pairing process
* Future support for encrypted communication

---

## 10. Design Trade-offs

| Decision            | Benefit                        | Trade-off                             |
| ------------------- | ------------------------------ | ------------------------------------- |
| ESP-NOW over Wi-Fi  | Low latency, offline operation | Limited range vs router-based systems |
| Hybrid architecture | Reliability + control          | Slightly higher complexity            |
| Distributed nodes   | Scalability                    | Requires synchronization logic        |
| Local-first system  | Independence from cloud        | Limited remote access unless extended |

---

## 11. Summary

ESP_HOME combines centralized coordination with distributed execution to create a reliable, scalable, and offline-capable smart system.

The architecture prioritizes:

* Reliability over convenience
* Safety over cost
* Modularity over monolithic design

This makes ESP_HOME suitable for long-term deployment in real-world environments.
