"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { HeartHandshake, Shield, Eye, GraduationCap, Puzzle, Wrench } from "lucide-react";

const values = [
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Community-Driven",
    description: "The project belongs to the community. Decisions are made transparently, and everyone is welcome to participate.",
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Transparent",
    description: "Every design decision, component choice, and trade-off is documented. Nothing is hidden.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Educational",
    description: "A platform for learning PCB design, embedded firmware, wireless protocols, and open-source collaboration.",
  },
  {
    icon: <Puzzle className="h-5 w-5" />,
    title: "Modular",
    description: "Each component is independent. Add, remove, or replace parts without affecting the rest of the system.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Developer Friendly",
    description: "PlatformIO-based builds, documented APIs, and clean architecture make it easy to extend.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Safety-First",
    description: "Hardware includes proper isolation, protection circuitry, and fail-safe mechanisms as design requirements.",
  },
];

export function Philosophy() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Philosophy"
          title="Why Open Source?"
          description="Open-source hardware is not just about sharing files. It is about building technology that anyone can trust, understand, and improve."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600/10 text-orange-400">
                {value.icon}
              </div>
              <h3 className="text-base font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
