"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { Cpu, CircuitBoard, Code2, Monitor, Globe, Smartphone, BookOpen, Bug } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Embedded Engineering": <Cpu className="h-5 w-5" />,
  "PCB Design": <CircuitBoard className="h-5 w-5" />,
  Firmware: <Code2 className="h-5 w-5" />,
  "Desktop Software": <Monitor className="h-5 w-5" />,
  "Web Development": <Globe className="h-5 w-5" />,
  "Mobile Development": <Smartphone className="h-5 w-5" />,
  Documentation: <BookOpen className="h-5 w-5" />,
  "Testing & QA": <Bug className="h-5 w-5" />,
};

export function Contribute() {
  return (
    <section id="contribute" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Contribute"
          title="Get Involved"
          description="ESP_HOME welcomes contributors at every experience level. Whether you are new to embedded systems or an experienced engineer, there is a place for you."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.contributeAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass glass-hover rounded-2xl p-5"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
                {iconMap[area.title] || <Code2 className="h-5 w-5" />}
              </div>
              <h3 className="text-sm font-semibold">{area.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
