# Contributing to ESP_HOME

Thank you for your interest in contributing to ESP_HOME. This project is community-driven and welcomes contributors of all experience levels — from first-time open-source participants to experienced embedded engineers.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Who Can Contribute](#who-can-contribute)
- [Beginner-Friendly Tasks](#beginner-friendly-tasks)
- [How to Contribute](#how-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)
- [Hardware Contributions](#hardware-contributions)
- [Firmware Contributions](#firmware-contributions)
- [Software Contributions](#software-contributions)
- [Documentation Contributions](#documentation-contributions)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Coding Style](#coding-style)
- [Hardware Design Standards](#hardware-design-standards)
- [Getting Help](#getting-help)

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold its terms.

## Who Can Contribute

Anyone with an interest in open-source hardware, embedded systems, or smart home technology can contribute. You do not need to be an expert PCB designer or firmware engineer to make a meaningful impact.

The project benefits from diverse perspectives — whether you are a student learning electronics, a software developer exploring hardware, or an experienced engineer looking to give back to the community.

## Beginner-Friendly Tasks

If you are new to the project or to open-source hardware, here are good places to start:

- **Read the documentation** and suggest improvements where things are unclear
- **Review issue templates** and help triage incoming reports
- **Improve README clarity** or add missing details
- **Test build instructions** and report any gaps
- **Fix typographical errors** in documentation
- **Suggest additional content** for hardware documentation placeholders

## How to Contribute

There are many ways to contribute beyond writing code or designing PCBs:

- **PCB Design** — Review, improve, or extend hardware designs
- **Hardware Testing** — Build and test boards, report issues
- **Firmware Development** — Write or improve microcontroller firmware
- **Driver Development** — Create drivers for sensors, actuators, and peripherals
- **Documentation** — Write guides, tutorials, or API references
- **Desktop Software** — Build configuration and debugging tools
- **Web Development** — Create dashboards and management interfaces
- **Mobile Applications** — Develop Android or iOS companion apps
- **Testing and QA** — Validate functionality and report regressions
- **Security Review** — Identify and address security concerns

## Reporting Bugs

Before reporting a bug, please check the existing issues to avoid duplicates.

When filing a bug report, include:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Hardware version and configuration (e.g., NODE32_HOME Main Board V1, Relay Node V1)
- Firmware version or commit hash
- Photographs or screenshots if applicable
- Any relevant logs or error messages

Use the **Bug Report** issue template.

## Feature Requests

Feature requests are welcome. When submitting a feature request:

- Explain the use case and motivation
- Describe how the feature would work
- Note whether it applies to hardware, firmware, software, or documentation
- Indicate if you are interested in implementing it

Use the **Feature Request** issue template.

## Hardware Contributions

Hardware contributions require extra care due to the cost and complexity of PCB manufacturing.

### Design Guidelines

- Follow the existing design conventions (component selection, layout practices)
- Use the same EDA tool format where possible (EasyEDA / LCSC BOM compatibility)
- Include a bill of materials with manufacturer part numbers
- Provide manufacturing files (Gerber, BOM, pick-and-place)
- Document design decisions and component selection rationale
- License hardware designs under CERN-OHL-S v2

### Submission Process

1. Open a **Hardware Issue** to discuss the proposed design
2. Share schematics and design files for review
3. Iterate based on community feedback
4. Submit a pull request with the final design files

## Firmware Contributions

### Development Setup

1. Install [PlatformIO](https://platformio.org/) for firmware development
2. Clone the repository and set up the appropriate build environment
3. Test your changes on hardware before submitting

### Guidelines

- Maintain compatibility with existing hardware
- Preserve the offline-first architecture
- Do not introduce cloud dependencies for core functionality
- Write clear commit messages following conventional commits

## Software Contributions

The software ecosystem is currently in the planning stage. Contributions are welcome in the following areas:

- **Desktop Tools:** Device manager, firmware flasher, serial monitor
- **Web Dashboard:** Device management, OTA management, network visualization
- **Mobile Apps:** Android and iOS companion applications

Development environments and technology choices will be documented as the software stack is established.

## Documentation Contributions

Documentation is a first-class part of this project. Improvements to clarity, accuracy, and completeness are always appreciated.

- Use Markdown for all documentation
- Place hardware documentation under `docs/hardware/`
- Place firmware documentation under `docs/firmware/`
- Place software documentation under `docs/software/`
- Include diagrams and images where they improve understanding
- Mark incomplete sections clearly with "Documentation coming soon."

## Pull Request Guidelines

1. **Fork the repository** and create a feature branch
2. **Make your changes** following the coding style and conventions
3. **Test your changes** thoroughly
4. **Write or update documentation** as needed
5. **Submit a pull request** using the provided template
6. **Respond to review feedback** promptly

### PR Checklist

- [ ] Changes are limited to a single logical feature or fix
- [ ] Code follows the project's style conventions
- [ ] Documentation has been updated
- [ ] No unrelated changes are included

## Coding Style

*Coding style guidelines will be refined as the codebase grows.*

General principles:

- Use clear, descriptive names for variables, functions, and types
- Comment intent, not mechanics
- Keep functions focused and single-purpose
- Use consistent indentation and formatting within each language
- Follow the established patterns in existing code

## Hardware Design Standards

- Use manufacturer part numbers in BOMs for traceability
- Include protection circuitry (ESD, overcurrent, reverse polarity)
- Design for manufacturing (adequate clearances, standard footprints)
- Document all design decisions and trade-offs

## Getting Help

If you need help getting started or have questions:

- Open a [Discussion](https://github.com/Nitheesh-NR-Labs/NODE32_HOME/discussions)
- Check existing issues and documentation
- Reach out to the community

---

*Thank you for helping make ESP_HOME better.*
