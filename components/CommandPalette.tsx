"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

const DESTINATIONS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Certificates", href: "/certifications" },
  { label: "Contact", href: "/contact" },
  { label: "Email me", href: `https://mail.google.com/mail/u/0/?fs=1&to=${siteConfig.email}&tf=cm` },
  { label: "GitHub profile", href: `https://github.com/${siteConfig.githubUsername}` },
];

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const results = useMemo(() => {
    if (!query.trim()) return DESTINATIONS;
    const q = query.toLowerCase();
    return DESTINATIONS.filter((d) => d.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [open, onClose]);

  function go(href: string) {
    onClose();
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      window.open(href, href.startsWith("mailto:") ? "_self" : "_blank");
    } else {
      router.push(href);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-28 px-4 bg-navy/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-xl border border-line bg-bg shadow-xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-line">
              <Search size={16} className="text-ink-soft shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a page only"
                className="w-full bg-transparent outline-none text-sm text-ink placeholder:text-ink-soft"
              />
              <kbd className="text-[10px] font-mono text-ink-soft border border-line rounded px-1.5 py-0.5">
                ESC
              </kbd>
            </div>
            <ul className="max-h-72 overflow-y-auto py-2">
              {results.length === 0 && (
                <li className="px-4 py-3 text-sm text-ink-soft">No matches.</li>
              )}
              {results.map((r) => (
                <li key={r.href}>
                  <button
                    onClick={() => go(r.href)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-ink hover:bg-sky/40 transition-colors"
                  >
                    <span>{r.label}</span>
                    <ArrowRight size={14} className="text-ink-soft" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
