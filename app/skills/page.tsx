import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <div className="px-5 sm:px-10 py-16 max-w-5xl mx-auto">
      <Reveal>
        <div className="section-label mb-6">
          <span>Toolkit</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl mb-16">Skills & expertise</h1>
      </Reveal>
      <SkillsGrid skills={siteConfig.skills} />
    </div>
  );
}
