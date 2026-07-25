# NODE32_HOME Project Context

## Project Overview
NODE32_HOME is an open-source, modular smart home platform built around ESP32 and ESP8266 microcontrollers. It leverages the **ESP-NOW** protocol for low-latency, offline-first communication between a central **Mainboard** and distributed **Nodes** (Relays, Sensors, Actuators).

The project is designed for industrial-level reliability, electrical safety, and modular scalability, following the **CERN Open Hardware License v2 - Strongly Reciprocal (CERN-OHL-S v2)**.

### Key Technologies
- **Microcontrollers:** ESP32 (Mainboard), ESP8266/ESP32 (Nodes).
- **Communication:** ESP-NOW (Primary, Peer-to-Peer), Wi-Fi (Secondary, UI/OTA).
- **Firmware Framework:** PlatformIO.
- **Hardware:** Custom PCB designs with integrated power regulation (LDO for 3.3V) and isolation (AC-DC modules for nodes).

---

## Project Status
**Current Phase:** Early Development / Architectural Design.
- **Documentation:** High-level system overview, architecture, and vision are well-defined in `docs/overview/`.
- **Firmware:** The directory structure is established, but many source files (`.cpp`, `.h`, `.ini`) are currently empty placeholders.
- **Hardware:** Schematics and BOM lists are identified in the structure, but some detailed files may still be under development.

---

## Directory Structure
- `docs/`: Comprehensive documentation of system architecture, hardware design, and protocols.
- `firmware/`:
  - `mainboard/`: ESP32 central controller firmware (PlatformIO project).
  - `relay_node/`: ESP8266/ESP32 relay controller firmware (PlatformIO project).
  - `shared/`: Shared protocol definitions and packet structures.
- `hardware/`:
  - `mainboard/`: Schematics, BOM, and manufacturing files for the central controller.
  - `node/`: Designs for various node types (relay, dimmer, sensor, etc.).
- `software/`: Web and mobile applications for system configuration and control.
- `tools/`: Flashing and calibration scripts.

---

## Building and Running
The firmware is managed using **PlatformIO**.

### Commands
- **Build Firmware:**
  ```powershell
  cd firmware/mainboard
  pio run
  ```
  *(Note: Replace `mainboard` with `relay_node` for node firmware)*
- **Upload Firmware:**
  ```powershell
  pio run --target upload
  ```
- **Serial Monitor:**
  ```powershell
  pio device monitor
  ```

---

## Development Conventions
- **License:** All contributions must adhere to **CERN-OHL-S v2**.
- **Offline-First:** No feature should strictly depend on internet connectivity for core operation.
- **Modular Design:** Nodes should be independent and capable of safe fallback behavior if the mainboard is offline.
- **Coding Style:** (To be defined as the codebase grows).
- **Safety:** Prioritize electrical isolation and protection in all hardware-related firmware logic (e.g., relay switching, sensor reading).
