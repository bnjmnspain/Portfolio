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
