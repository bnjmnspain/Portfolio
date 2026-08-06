import { ExperienceEntry } from "@/types";
import { Reveal } from "./Reveal";

interface ConnectedBulletsProps {
  items: string[];
}

function ConnectedBullets({ items }: ConnectedBulletsProps) {
  if (items.length === 0) return null;

  return (
    <ul className="text-sm space-y-0">
      {items.map((item, i) => (
        <li key={item} className="relative flex gap-3">
          <span className="flex flex-col items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-dark mt-1.5 shrink-0" />
            {i < items.length - 1 && (
              <span className="w-px flex-1 bg-line min-h-[16px]" />
            )}
          </span>
          <span className="text-ink-soft leading-relaxed pb-3">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ExperienceTimeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="relative">
      {entries.map((entry, i) => (
        <li key={`${entry.company}-${entry.start}`} className="mb-14 last:mb-0">
          <Reveal delay={i * 0.08}>
            <span className="font-mono text-xs text-ink-soft uppercase tracking-widest">
              {entry.start} — {entry.end}
            </span>
            <h3 className="font-serif text-xl mt-1">{entry.position}</h3>
            <p className="text-sm text-ink-soft mb-4">
              {entry.company} · {entry.location}
            </p>

            <div className="space-y-5">
              {entry.responsibilities.length > 0 && (
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-2">
                    Responsibilities
                  </p>
                  <ConnectedBullets items={entry.responsibilities} />
                </div>
              )}

              {entry.achievements.length > 0 && (
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-2">
                    Achievements
                  </p>
                  <ConnectedBullets items={entry.achievements} />
                </div>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
