"use client";

import { motion } from "framer-motion";
import { Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            {siteConfig.ecosystem} Ecosystem
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">{siteConfig.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground/60"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            as="a"
            href={siteConfig.githubUrl}
            variant="primary"
            size="lg"
          >
            <Github className="h-5 w-5" />
            GitHub Repository
          </Button>
          <Button as="a" href={siteConfig.docsUrl} variant="secondary" size="lg">
            Documentation
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button as="a" href="#contribute" variant="outline" size="lg">
            Contribute
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-6 text-xs text-muted-foreground/40"
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
            Hardware Stable
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/60" />
            Firmware in Development
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60" />
            Open Source
          </span>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, repeat: Infinity, duration: 2, repeatType: "reverse" }}
          className="flex flex-col items-center gap-2 text-xs text-muted-foreground/40"
        >
          <span>Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-muted-foreground/20 to-transparent" />
        </motion.a>
      </div>
    </section>
  );
}
