"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="grid place-items-center w-8 h-8 rounded-full border border-line text-ink hover:border-ink transition-colors"
    >
      {mounted && theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
