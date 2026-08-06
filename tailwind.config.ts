import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        line: "var(--line)",
        navy: "var(--navy)",
        "navy-ink": "var(--navy-ink)",
        sage: "var(--sage)",
        "sage-dark": "var(--sage-dark)",
        sky: "var(--sky)",
        clay: "var(--clay)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drip: {
          "0%": { top: "-100%" },
          "60%": { top: "100%" },
          "100%": { top: "100%" },
        },
      },
      animation: {
        fadeUp: "fadeUp .9s ease forwards",
        drip: "drip 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
