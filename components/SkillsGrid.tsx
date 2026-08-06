import { Skill, SkillCategory } from "@/types";
import { Reveal } from "./Reveal";

const CATEGORY_ORDER: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Mobile",
  "Databases",
  "Cloud",
  "DevOps",
  "Testing",
  "Architecture",
  "AI/LLM Tools",
];

const LEVEL_LABEL: Record<Skill["level"], string> = {
  1: "Familiar",
  2: "Working knowledge",
  3: "Proficient",
  4: "Advanced",
  5: "Expert",
};

export function SkillsGrid({ skills }: { skills: Skill[] }) {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: skills.filter((s) => s.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
      {grouped.map((group, gi) => (
        <Reveal key={group.category} delay={gi * 0.05}>
          <h3 className="font-mono text-xs uppercase tracking-widest text-sage-dark mb-4">
            {group.category}
          </h3>
          <ul className="space-y-4">
            {group.items.map((skill) => (
              <li key={skill.name}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="font-mono text-[11px] text-ink-soft">
                    {LEVEL_LABEL[skill.level]}
                  </span>
                </div>
                <div className="h-1 rounded-full bg-line overflow-hidden">
                  <div
                    className="h-full rounded-full bg-sage-dark"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
