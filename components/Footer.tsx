import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

const ICONS = { github: Github, linkedin: Linkedin, mail: Mail } as const;

export function Footer() {
  return (
    <footer className="border-t border-line px-5 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-soft">
      <div className="flex items-center gap-4">
        {siteConfig.socials.map((s) => {
          const Icon = ICONS[s.icon as keyof typeof ICONS];
          if (!Icon) return null;
          return (
            <a
              key={s.label}
              href={s.url}
              target={s.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hover:text-ink transition-colors"
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>
      <span>{siteConfig.location}</span>
    </footer>
  );
}
