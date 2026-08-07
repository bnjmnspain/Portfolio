"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Command, Home } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-3 sm:px-6 py-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest bg-bg/80 backdrop-blur-sm">
        <Link
          href="/"
          aria-label="Home"
          onClick={() => {
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="text-ink"
        >
          <Home size={16} />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative pb-1 text-ink transition-colors after:absolute after:left-0 after:bottom-0 after:h-px after:bg-current after:transition-all",
                  active ? "after:w-full" : "after:w-0 hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPalette}
            aria-label="Open command palette"
            className="hidden sm:flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-ink-soft hover:text-ink hover:border-ink transition-colors normal-case tracking-normal"
          >
            <Command size={13} />
            <span>⌘K</span>
          </button>
          <ThemeToggle />
          <button
            className="lg:hidden text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-bg/95 backdrop-blur-sm border-t border-line px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs uppercase tracking-widest text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
