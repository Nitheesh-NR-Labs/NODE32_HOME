"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const layers = siteConfig.ecosystemLayers;

export function Ecosystem() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Ecosystem"
          title="More Than a Board"
          description="ESP_HOME is designed as a complete ecosystem. Each layer is independently useful, but together they form a cohesive platform."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold">{layer.title}</h3>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                    layer.status === "Stable" && "bg-green-500/10 text-green-400",
                    layer.status === "In Development" && "bg-yellow-500/10 text-yellow-400",
                    layer.status === "Planned" && "bg-blue-500/10 text-blue-400",
                    layer.status === "Improving" && "bg-blue-500/10 text-blue-400",
                    layer.status === "Growing" && "bg-purple-500/10 text-purple-400"
                  )}
                >
                  {layer.status}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {layer.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
