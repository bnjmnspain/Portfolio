"use client";

import { ReactNode, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import { CommandPalette } from "./CommandPalette";
import { ErrorBoundary } from "./ErrorBoundary";

export function LayoutChrome({ children }: { children: ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  useEffect(() => {
    const existingLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
    existingLinks.forEach((link) => link.remove());

    const href = "/Portfolio/box-bag.png?" + Date.now();

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = href;
    link.type = "image/png";
    document.head.appendChild(link);

    const shortcut = document.createElement("link");
    shortcut.rel = "shortcut icon";
    shortcut.href = href;
    shortcut.type = "image/png";
    document.head.appendChild(shortcut);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(shortcut);
    };
  }, []);

  return (
    <>
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      <ErrorBoundary>
        <main className="relative min-h-screen pt-24">
          {children}
        </main>
      </ErrorBoundary>
      <Footer />
      <BackToTop />
    </>
  );
}
