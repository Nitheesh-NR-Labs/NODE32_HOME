"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { Cpu, Shield, Users, Box, GitFork, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Modular Hardware",
    description:
      "A central controller board plus interchangeable node types that can be mixed and matched for any automation need.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Offline-First",
    description:
      "ESP-NOW communication ensures low-latency operation without cloud dependency. No internet required for core functionality.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Community Driven",
    description:
      "Built by and for the community. Contributions are welcome at every experience level, from PCB design to documentation.",
  },
  {
    icon: <Box className="h-5 w-5" />,
    title: "Open Hardware",
    description:
      "All PCB designs, schematics, and BOMs are fully open under the CERN-OHL-S v2 license. Fork, modify, and build.",
  },
  {
    icon: <GitFork className="h-5 w-5" />,
    title: "Extensible Architecture",
    description:
      "Add nodes, sensors, or actuators without redesigning the system. The architecture scales from a single room to an entire building.",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Professionally Documented",
    description:
      "Schematics, technical references, architectural documentation, and contribution guides are first-class deliverables.",
  },
];

const philosophyPoints = [
  "Transparency — Every design decision is documented and justified.",
  "Repairability — Standard components and accessible layouts ensure long-term maintainability.",
  "Longevity — Designs that can be manufactured years from now without vendor lock-in.",
  "Education — A platform for learning embedded systems, PCB design, and wireless protocols.",
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="About"
          title="What is ESP_HOME?"
          description="ESP_HOME is an open-source smart home ecosystem centered around NODE32_HOME — a modular ESP32-WROOM-32E-N16-based controller board. The ecosystem includes companion hardware like the Relay Node V1, with firmware, software, and documentation all designed to work together."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <SectionTitle
            title="Why Open Source Hardware?"
            description="Open-source hardware matters because hardware locks us into decisions in ways that software does not."
            className="mb-12"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {philosophyPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-5"
              >
                <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
