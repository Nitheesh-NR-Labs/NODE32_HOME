import { Github, Heart } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="text-sm font-semibold text-gradient">
            {siteConfig.ecosystem}
          </span>
          <p className="text-xs text-muted-foreground/40">
            Open-source smart home ecosystem
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-muted-foreground/60">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a
            href={siteConfig.githubDiscussions}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Discussions
          </a>
          <a
            href={`${siteConfig.githubUrl}/blob/main/LICENSE`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            License
          </a>
        </div>

        <p className="flex items-center gap-1 text-[11px] text-muted-foreground/30">
          Built by{" "}
          <a
            href={siteConfig.author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground/50"
          >
            {siteConfig.author.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
