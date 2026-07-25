# NODE32_HOME Main Board V1

## Overview

The NODE32_HOME Main Board V1 is the central controller board of the ESP_HOME ecosystem. It serves as the primary processing and communication hub, designed around the ESP8266 platform for flexibility, expansion, and ease of development.

This board is intended to provide a reusable hardware platform for smart home applications rather than a single-purpose device. It acts as the brain of ESP_HOME installations, coordinating communication between nodes, managing automation logic, and providing connectivity to user interfaces.

## Features

- ESP8266-based central controller
- USB-C power input with overcurrent protection (PPTC resettable fuse)
- 3.3V LDO voltage regulation (AP2114 series)
- TVS and ESD protection on all external lines
- I2C expansion headers (4-pin and 6-pin with interrupt and CS support)
- GPIO breakout header (14-pin)
- UART programming and debug interface
- EN and IO0 tactile switches for boot mode selection
- Status indicator LED
- Clean rail architecture with isolated power domains (3V3_MAIN / 3V3_ESP)
- Off-board antenna layout for optimized RF performance

## Specifications

| Parameter | Value |
|-----------|-------|
| Microcontroller | ESP8266 (ESP-12F module) |
| Input Voltage | 5V DC (USB-C) |
| Regulated Output | 3.3V DC |
| Max Input Current | 750 mA (PPTC limited) |
| GPIO Available | 14 via expansion header |
| I2C | 1 bus with 4-pin and 6-pin headers |
| UART | 1 (programming and debug) |
| Board Dimensions | 89.5 mm x 54.5 mm |
| Operating Temperature | -40 C to +85 C |

## Pinout

*Documentation coming soon.*

## Power

The board is powered via USB-C at 5V DC. Power protection includes:

- **PPTC Fuse (1812L075/24DR):** 750 mA hold current, 1.5 A trip current
- **TVS Diode:** Transient suppression on input line
- **ESD Protection:** ESD9B3.3 diodes on communication lines
- **LDO Regulator (AP2114HA-3.3TRG1):** 3.3 V output, 1 A max, SOT-223 package
- **Star-Point Isolation:** 0 resistor separates 3V3_MAIN and 3V3_ESP rails
- **Bulk Capacitance:** 470 uF electrolytic for ESP8266 radio burst support

## Programming

The board exposes a UART interface via a 6-pin programming header. To flash firmware:

1. Connect a USB-to-UART adapter to the programming header
2. Press and hold IO0 (SW2)
3. Press and release EN (SW1)
4. Release IO0
5. Flash firmware using PlatformIO or esptool
6. Press EN to reset and boot

## GPIO

| Pin | Function | Notes |
|-----|----------|-------|
| IO5 | Status LED | Active high |
| IO21 | I2C SDA | Pull-up to 3V3_ESP |
| IO22 | I2C SCL | Pull-up to 3V3_ESP |
| IO1 | UART0 TX | Programming console |
| IO3 | UART0 RX | Programming console |
| IO17 | UART2 TX | Auxiliary interface |
| IO16 | UART2 RX | Auxiliary interface |

*Complete GPIO assignment available in the schematic technical reference.*

## Applications

- Central hub for home automation systems
- ESP-NOW network coordinator
- Protocol bridge between Wi-Fi and ESP-NOW
- Automation logic controller
- Laboratory automation controller

## Revision History

| Revision | Date | Notes |
|----------|------|-------|
| V1.0 | 2026-04-18 | Initial release. PCB design complete. |

## Known Limitations

- Maximum practical ESP-NOW peer count is approximately 20 devices
- 3.3 V logic only (no 5 V tolerant I/O without level shifting)
- Limited to control and sensor applications (not suitable for streaming)
- Wireless range dependent on environment (10-50 meters indoor typical)

## Future Improvements

- ESP32-based revision for expanded capabilities (BLE, additional processing power)
- Integrated USB-to-UART bridge for single-cable programming
- Power-over-Ethernet support
- Enclosure design
- Additional expansion interfaces
