import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div className="px-5 sm:px-10 py-16 max-w-3xl mx-auto">
      <Reveal>
        <div className="section-label mb-6">
          <span>Experience</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl mb-16">Where I&apos;ve worked</h1>
      </Reveal>
      <ExperienceTimeline entries={siteConfig.experience} />
    </div>
  );
}
