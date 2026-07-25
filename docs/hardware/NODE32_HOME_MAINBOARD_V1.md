# NODE32_HOME Main Board V1

## Overview

The NODE32_HOME Main Board V1 is the central controller board of the ESP_HOME ecosystem. It is built around the ESP8266 platform and serves as the primary processing and communication hub for distributed node networks.

## Features

- ESP8266-based central controller
- USB-C power input with overcurrent and transient protection
- 3.3V LDO voltage regulation with isolated power rails
- I2C expansion headers (4-pin and 6-pin with interrupt and CS support)
- 14-pin GPIO breakout header
- UART programming and debug interface
- Tactile switches for boot mode selection and reset
- Status indicator LED
- Off-board antenna layout for optimized RF performance

## Specifications

| Parameter | Value |
|-----------|-------|
| Microcontroller | ESP8266 (ESP-12F module) |
| Input Voltage | 5V DC (USB-C) |
| Regulated Output | 3.3V |
| Input Protection | PPTC 750 mA, TVS diode, ESD diodes |
| Expansion I/O | 14-pin GPIO header, I2C bus |
| Programming | UART via 6-pin header |
| Board Dimensions | 89.5 x 54.5 mm |

## Pinout

*Documentation coming soon.*

## Power Architecture

- **Input:** 5V via USB-C (U262-161N)
- **Protection:** PPTC fuse (1812L075/24DR), TVS diode (SOD-123FL), ESD diodes (ESD9B3.3)
- **Regulation:** AP2114HA-3.3TRG1 LDO (1A, SOT-223)
- **Rail Isolation:** Star-point via 0 resistor separating 3V3_MAIN and 3V3_ESP
- **Bulk Decoupling:** 470 uF electrolytic capacitor for radio burst support

## Programming

The board uses a standard UART programming interface:

1. Connect USB-to-UART adapter to the 6-pin programming header
2. Hold IO0 (SW2), press and release EN (SW1), release IO0
3. Flash using PlatformIO or esptool
4. Press EN to reset

## GPIO

| Pin | Function |
|-----|----------|
| IO5 | Status LED |
| IO21 | I2C SDA |
| IO22 | I2C SCL |
| IO1 | UART0 TX |
| IO3 | UART0 RX |
| IO17 | UART2 TX |
| IO16 | UART2 RX |

*Complete GPIO assignment available in the full schematic technical reference.*

## Applications

- Home automation central controller
- ESP-NOW network coordinator
- Wi-Fi to ESP-NOW bridge
- General-purpose embedded control

## Revision History

| Revision | Date | Notes |
|----------|------|-------|
| V1.0 | 2026-04-18 | Initial release. PCB design complete. |

## Known Limitations

- Maximum practical ESP-NOW peers: approximately 20
- 3.3 V logic only (no 5 V tolerant I/O)
- Indoor range: 10-50 meters typical
- Not suitable for high-bandwidth applications

## Future Improvements

- ESP32-based variant for BLE and additional processing
- Integrated USB-to-UART bridge
- Power-over-Ethernet support
- Enclosure design
