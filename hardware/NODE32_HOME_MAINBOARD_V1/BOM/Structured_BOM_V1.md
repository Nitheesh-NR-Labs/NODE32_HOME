# NODE32_HOME Mainboard V1 - Structured Bill of Materials

**Date:** 2026-04-18  
**Project:** NODE32_HOME Central Coordinator  
**Revision:** 1.0  
**Status:** Production Ready

---

## 1. Procurement Summary

| Category | Unique Parts | Total Quantity | Key Components |
| :--- | :---: | :---: | :--- |
| **MCU & Wireless** | 1 | 1 | ESP32-WROOM-32E-N16 |
| **Power Management** | 1 | 1 | AP2114HA-3.3TRG1 (LDO) |
| **Passives (Capacitors)** | 7 | 13 | 470uF, 100uF, 22uF, 10uF, 1uF, 100nF |
| **Passives (Resistors)** | 8 | 28 | 100kΩ, 10kΩ, 5.1kΩ, 4.7kΩ, 330Ω, 100Ω, 0Ω |
| **Protection** | 3 | 4 | ESD9B3.3ST5G, TVS, SS34 Schottky, 1812 Fuse |
| **Connectors & UI** | 8 | 10 | USB-C, GPIO Headers, I2C, UART, Tactile Switches |
| **Total** | **28** | **57** | |

---

## 2. Complete Component List

| No. | Qty | Comment | Designator | Footprint | Manufacturer | Supplier Part (LCSC) | Category |
| :--- | :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 1 | AP2114HA-3.3TRG1 | 3V3_REG | SOT-223-3 | DIODES Inc. | C460314 | Power (LDO) |
| 2 | 2 | 10uF | C1,C10 | C0603 | FH(风华) | C70225 | Capacitor |
| 3 | 2 | 1uF | C2,C8 | C0603 | FH(风华) | C93816 | Capacitor |
| 4 | 5 | 100nF | C3,C6,C9,C11,C13 | C0603 | YAGEO | C109474 | Capacitor |
| 5 | 1 | 470uF | C4 | TH_BD6.3 | HYNCDZ | C22447194 | Capacitor (Elec) |
| 6 | 1 | 22uF | C7 | C0603 | SAMSUNG | C2762594 | Capacitor |
| 7 | 1 | 470uF | C12 | SMD_BD10.0 | Nichicon | C340751 | Capacitor (Elec) |
| 8 | 1 | 100uF | C14 | SMD_BD6.3 | NCC | C2162384 | Capacitor (Poly) |
| 9 | 2 | ESD9B3.3ST5G | D1,D2 | SOD-923 | onsemi | C96512 | Protection (ESD) |
| 10 | 1 | TVS | D3 | SOD-123FL | Slkor | C19188355 | Protection (TVS) |
| 11 | 1 | SS34 | D4 | SMA | Slkor | C408258 | Diode (Schottky) |
| 12 | 1 | ESP32-WROOM-32E-N16 | ESP32 | WIFI-SMD | ESPRESSIF | C701343 | MCU/RF |
| 13 | 1 | 1812L075/24DR | FUSE | F1812 | Littelfuse | C207065 | Protection (Fuse) |
| 14 | 1 | HX PM2.54-1x14P ZC | GPIO_HDR | HDR-TH_14P | hanxia | C41417326 | Connector |
| 15 | 1 | FH2.54-09-04PZD | I2C_4PIN | HDR-TH_4P | XUNPU | C7500773 | Connector |
| 16 | 1 | FH2.54-09-06PZD | I2C_6PIN | HDR-TH_6P | XUNPU | C7500775 | Connector |
| 17 | 1 | XL-1608VRC-06 | LED1 | LED0603-RD | XINGLIGHT | C7371906 | LED |
| 18 | 1 | A2541WV-6P | PRGM_HDR | HDR-TH_6P | CJT | C225481 | Connector |
| 19 | 2 | FH2.54-09-03PZD | PWR_HDR,PWR_HDR1 | HDR-TH_3P | XUNPU | C7500772 | Connector |
| 20 | 4 | 10kΩ | R1,R2,R9,R10 | R0805 | YAGEO | C100047 | Resistor |
| 21 | 1 | 0Ω | R3 | R0603 | YAGEO | C95177 | Resistor |
| 22 | 2 | 5.1kΩ | R4,R5 | R0805 | YAGEO | C105874 | Resistor |
| 23 | 2 | 100Ω | R6,R7 | R0805 | YAGEO | C723351 | Resistor |
| 24 | 1 | 330Ω | R8 | R0805 | YAGEO | C144564 | Resistor |
| 25 | 2 | 4.7kΩ | R11,R12 | R0603 | YAGEO | C99782 | Resistor |
| 26 | 2 | 100kΩ | R13,R14 | R0603 | YAGEO | C116674 | Resistor |
| 27 | 14 | 100Ω | R17-R31 (misc) | R0805 | YAGEO | C106949 | Resistor |
| 28 | 2 | TSA010A2518A | SW1_EN,SW2_IO0 | SW-SMD | BZCN | C2888945 | Switch |
| 29 | 1 | U262-161N-4BC21665 | USB_C | USB-TYPE-C | XKB | C2880653 | Connector |

---

## 3. Manufacturing Notes
*   **PCB Finish:** Lead-free HASL or ENIG recommended for SMD components.
*   **Solder Paste:** Type 4 SAC305 recommended for 0603/0805 components.
*   **Pick and Place:** Centroids are provided in the `manufacturing/pick_and_place.csv` file.
