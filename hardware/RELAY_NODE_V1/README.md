# Relay Node V1

## Overview

The Relay Node V1 is a companion expansion board designed to interface with the NODE32_HOME Main Board. It provides relay outputs for automation applications while remaining modular and easy to integrate with the ESP_HOME ecosystem.

## Features

- Single-channel relay output (SPST-NO)
- ESP8266-based (ESP-12F) for wireless control via ESP-NOW
- AC-DC power supply via HLK-PM01 module with isolation
- Compatible with NODE32_HOME Main Board
- Modular design for easy integration

## Specifications

| Parameter | Value |
|-----------|-------|
| MCU | ESP8266 (ESP-12F) |
| Relay Type | Electromechanical (SPST-NO) |
| Relay Model | Omron G5CA-1A-E-DC5 |
| Contact Rating | 5 VDC coil, 15 A resistive |
| Control Signal | 3.3 V logic level |
| Power Supply | 5 VDC via HLK-PM01 AC-DC module or external DC input |

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

- Remote appliance control
- Lighting automation
- Motor and pump control
- General-purpose on/off actuation

## Revision History

| Revision | Date | Notes |
|----------|------|-------|
| V1.0 | 2026-04-18 | Initial design. Schematic published. |

## Known Limitations

- Single relay channel (multi-channel expansion required for additional outputs)
- Electromechanical relay (not suitable for high-frequency switching)
- Component placement and PCB layout pending final validation

## Future Improvements

- Multi-channel relay variants
- Solid-state relay option for silent operation
- Current monitoring and feedback
- DIN rail mountable enclosure
- Daisy-chain support for multiple nodes
