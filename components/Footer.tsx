import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 sm:px-10 py-3 flex items-center justify-center font-mono text-[11px] text-ink-soft">
      <span>{siteConfig.location}</span>
    </footer>
  );
}
