"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, Code2, Building2 } from "lucide-react";

const iconMap = {
  check: CheckCircle2,
  building: Building2,
  code: Code2,
  clock: Clock,
};

const statusConfig = {
  Stable: { color: "text-green-400", bg: "bg-green-500/10", icon: "check" as const },
  Improving: { color: "text-blue-400", bg: "bg-blue-500/10", icon: "building" as const },
  "Early Development": { color: "text-yellow-400", bg: "bg-yellow-500/10", icon: "code" as const },
  Planned: { color: "text-muted-foreground", bg: "bg-white/5", icon: "clock" as const },
};

export function Status() {
  return (
    <section id="status" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Status"
          title="Current Project State"
          description="Honest transparency about where the project stands today."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.status.map((item, i) => {
            const cfg = statusConfig[item.status];
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass glass-hover flex items-center gap-4 rounded-2xl p-5"
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                    cfg.bg
                  )}
                >
                  <Icon className={cn("h-5 w-5", cfg.color)} />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className={cn("text-xs", cfg.color)}>{item.status}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
