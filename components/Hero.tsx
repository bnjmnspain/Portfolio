"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { ResumeButton } from "@/components/ResumeButton";

const ICONS = { github: Github, linkedin: Linkedin, mail: Mail } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: "easeOut" },
  }),
};

const WORDS = ["Information Technology", "Software Developer", "Problem Solver", "Automation", "Cloud", "Full-Stack", "Test Automation", "System Design"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between text-center px-5 sm:px-10 overflow-hidden">
      <div className="h-8 invisible" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.1}
        className="flex flex-col items-center space-y-8 max-w-2xl relative"
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft font-bold"
        >
          {siteConfig.jobTitle}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.25}
          className="font-serif font-normal text-[clamp(2.2rem,6vw,4.6rem)] leading-[1.05] max-w-[18ch]"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="text-ink-soft max-w-xl text-[clamp(15px,1.6vw,19px)]"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.55}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="font-sans font-semibold text-sm px-8 py-4 rounded-sm border border-line text-ink-soft hover:text-ink hover:border-ink transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="font-sans font-semibold text-sm px-8 py-4 rounded-sm border border-line text-ink-soft hover:text-ink hover:border-ink transition-colors"
          >
            Contact Me
          </Link>
          <ResumeButton className="font-sans font-semibold text-sm px-8 py-4 rounded-sm border border-line text-ink-soft hover:text-ink hover:border-ink transition-colors" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.7}
          className="flex items-center gap-5"
        >
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
                className="text-ink-soft hover:text-ink transition-colors"
              >
                <Icon size={19} />
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.9 }}
        className="flex flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-soft"
      >
        <span>Scroll</span>
        <span className="scroll-line" />
      </motion.div>
    </section>
  );
}
