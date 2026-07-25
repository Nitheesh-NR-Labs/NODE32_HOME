"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle } from "lucide-react";

const roadmapSections = [
  { key: "hardware" as const, title: "Hardware" },
  { key: "firmware" as const, title: "Firmware" },
  { key: "software" as const, title: "Software" },
  { key: "documentation" as const, title: "Documentation" },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Roadmap"
          title="What's Next"
          description="The project is in early development. Here is what has been completed and what is planned for the future."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {roadmapSections.map((section, sIdx) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: sIdx * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="mb-4 text-base font-semibold">{section.title}</h3>
              <div className="flex flex-col gap-2">
                {siteConfig.roadmap[section.key].map((item) => (
                  <div
                    key={item.item}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition-colors",
                      item.status === "done"
                        ? "bg-green-500/5 text-green-400"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.status === "done" ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400" />
                    ) : (
                      <Circle className="h-4 w-4 shrink-0 text-muted-foreground/30" />
                    )}
                    <span className={item.status === "done" ? "text-green-300" : ""}>
                      {item.item}
                    </span>
                    {item.status === "done" && (
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-green-500/60">
                        Done
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
