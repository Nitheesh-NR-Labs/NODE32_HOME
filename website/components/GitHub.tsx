"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle, Bug } from "lucide-react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/site";

export function GitHub() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="glass glow rounded-3xl p-8 text-center sm:p-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Join the Project
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            ESP_HOME is built in the open. Star the repository, open an issue, or
            join the discussions. Every contribution makes the ecosystem better.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button as="a" href={siteConfig.githubUrl} variant="primary" size="lg">
              <Star className="h-5 w-5" />
              Star Repository
            </Button>
            <Button
              as="a"
              href={siteConfig.githubIssues}
              variant="secondary"
              size="lg"
            >
              <Bug className="h-5 w-5" />
              Open Issues
            </Button>
            <Button
              as="a"
              href={siteConfig.githubDiscussions}
              variant="outline"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" />
              Join Discussions
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground/40">
            Licensed under CERN-OHL-S v2 (hardware) and MIT (software).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
