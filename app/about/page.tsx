import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="px-5 sm:px-10 py-16 max-w-4xl mx-auto">
      <Reveal>
        <div className="section-label mb-6">
          <span>About me</span>
        </div>
        <p className="font-serif text-2xl sm:text-3xl leading-snug max-w-2xl mb-16">
          {siteConfig.bio}
        </p>
      </Reveal>

        <div className="grid sm:grid-cols-3 gap-8 mb-20 border-y border-line py-10">
        <Reveal delay={0.1}>
          <div className="font-serif text-4xl">
            <AnimatedCounter value={siteConfig.experience.length} />
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft mt-1">
            Roles held
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="font-serif text-4xl">
            <AnimatedCounter value={siteConfig.skills.length} />
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft mt-1">
            Skills & tools
          </p>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 gap-12 mb-20">
        <Reveal direction="left">
          <h2 className="font-mono text-xs uppercase tracking-widest text-sage-dark mb-4">
            Career highlights
          </h2>
          <ul className="space-y-3 text-sm">
            {siteConfig.careerHighlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-sage-dark">—</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal direction="right">
          <h2 className="font-mono text-xs uppercase tracking-widest text-sage-dark mb-4">
            Soft skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {siteConfig.softSkills.map((s) => (
              <span
                key={s}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-line text-ink-soft"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="border-t border-line pt-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-sage-dark mb-8">
          Education
        </h2>
        <ul className="space-y-8">
          {siteConfig.education.map((e) => (
            <li key={e.institution}>
              <div className="flex items-baseline justify-between mb-1">
                {e.mapUrl ? (
                  <a
                    href={e.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg underline underline-offset-4 decoration-sage-dark hover:decoration-ink transition-colors inline-flex items-center gap-1.5"
                  >
                    {e.institution}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                ) : (
                  <span className="font-serif text-lg">{e.institution}</span>
                )}
                <span className="font-mono text-xs text-ink-soft">{e.year}</span>
              </div>
              <p className="text-sm text-ink-soft mb-1">{e.degree}</p>
              <p className="text-sm text-ink-soft">{e.location}</p>
              {e.thesis && (
                <p className="text-sm text-ink-soft mt-2">
                  <span className="text-sage-dark font-mono text-[11px] uppercase tracking-widest">Thesis: </span>
                  {e.thesis}
                </p>
              )}
              {e.note && (
                <p className="text-sm text-ink-soft mt-2">{e.note}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
