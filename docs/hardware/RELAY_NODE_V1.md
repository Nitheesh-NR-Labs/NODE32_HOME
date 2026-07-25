# Relay Node V1

## Overview

The Relay Node V1 is a companion expansion board for the NODE32_HOME Main Board. It provides a single relay output suitable for controlling AC loads in home automation and laboratory applications.

## Features

- Single-channel relay output (SPST-NO)
- ESP8266-based (ESP-12F) for wireless control via ESP-NOW
- AC-DC power supply via HLK-PM01 module with isolation
- Isolated power design for safety
- Modular form factor for integration with ESP_HOME ecosystem

## Specifications

| Parameter | Value |
|-----------|-------|
| MCU | ESP8266 (ESP-12F) |
| Relay | Omron G5CA-1A-E-DC5 |
| Contact Rating | 5 VDC coil, 15 A resistive |
| Power Input | AC via HLK-PM01 or external 5 VDC |
| Communication | ESP-NOW |

## Pinout

*Documentation coming soon.*

## Power

The Relay Node supports two power options:

- **AC Powered:** HLK-PM01 AC-DC module converts mains voltage to 5 VDC with isolation
- **DC Powered:** Direct 5 VDC input for low-voltage environments

## Programming

*Documentation coming soon.*

## GPIO

*Documentation coming soon.*

## Applications

- Remote appliance on/off control
- Lighting automation
- Motor and pump control
- General actuation tasks

## Revision History

| Revision | Date | Notes |
|----------|------|-------|
| V1.0 | 2026-04-18 | Initial design. Schematic published. |

## Known Limitations

- Single relay channel
- Electromechanical relay (not for high-frequency switching)
- PCB layout pending final validation

## Future Improvements

- Multi-channel variants
- Solid-state relay option
- Current monitoring and feedback
- DIN rail enclosure
- Daisy-chain support
