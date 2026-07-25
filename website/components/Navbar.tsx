"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Hardware", href: "#hardware" },
  { label: "Status", href: "#status" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contribute", href: "#contribute" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <Link
          href="#hero"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="text-gradient text-lg">{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub repository"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>

        <button
          className="flex items-center justify-center rounded-lg p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-white/5 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
