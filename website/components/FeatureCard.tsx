"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "glass glass-hover rounded-2xl p-6",
        className
      )}
    >
      {icon && <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">{icon}</div>}
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  );
}
