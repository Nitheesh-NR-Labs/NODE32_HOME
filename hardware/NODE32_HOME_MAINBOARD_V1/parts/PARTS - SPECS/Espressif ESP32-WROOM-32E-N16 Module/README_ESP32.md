## Main Controller Specification

**Module:** Espressif ESP32-WROOM-32E-N16
**Manufacturer:** Espressif Systems

### Processing

* **CPU:** Dual-core Xtensa LX6
* **Clock Frequency:** Up to 240 MHz
* **SRAM:** 520 KB internal SRAM
* **Flash Memory:** 16 MB SPI flash

### Wireless Connectivity

**Wi-Fi**

* Standard: IEEE 802.11 b/g/n (2.4 GHz)
* Data Rate: Up to 150 Mbps
* Security: WPA / WPA2
* Transmit Power: Up to ~20 dBm

**Bluetooth**

* Bluetooth Version: Bluetooth 4.2 BR/EDR + BLE
* BLE Supported Profiles: GATT, GAP
* Use Case in NODE32_HOME: device provisioning, future mobile configuration support

**ESP-NOW Communication**

* Protocol: Espressif proprietary connectionless wireless protocol
* Frequency: 2.4 GHz
* Latency: typically < 10 ms
* Topology: one hub communicating with multiple peer nodes
* Maximum Peers: up to ~20 encrypted peers or ~250 unencrypted peers
* Reliability: high reliability short-packet communication with minimal overhead
* Typical Range: 50–200 m depending on environment and antenna type

### Operating Conditions

* Operating Voltage: 3.0 V – 3.6 V
* Recommended Voltage: 3.3 V
* Operating Temperature: −40 °C to +85 °C

### I/O Capability

* Available GPIO: up to ~26 usable GPIO
* Interfaces Supported:

  * UART
  * SPI
  * I2C
  * I2S
  * PWM
  * ADC
  * DAC
  * Touch sensing

### Role in NODE32_HOME Architecture

The ESP32-WROOM-32E-N16 module serves as the **central hub controller** in the NODE32_HOME system. Its responsibilities include:

* Managing the ESP-NOW wireless network
* Communicating with distributed relay and sensor nodes
* Connecting to the home Wi-Fi network
* Integrating with external smart-home platforms (Alexa / Google Home / cloud services)
* Performing device registry, automation logic, and OTA updates.
