import type { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/lib/config";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { ProjectsGridSkeleton } from "@/components/LoadingSkeleton";
import { Reveal } from "@/components/Reveal";
import { ProjectsListClient } from "@/components/ProjectsListClient";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="px-5 sm:px-10 py-16 max-w-6xl mx-auto">
      <Reveal>
        <div className="section-label mb-6">
          <span>Projects</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl mb-3">
          Repositories, pulled live from GitHub
        </h1>
        <p className="text-ink-soft mb-12 max-w-xl">
          Everything below is fetched from{" "}
          <code className="font-mono">github.com/{siteConfig.githubUsername}</code> at request
          time — search, filter by language, or sort by stars or recency.
        </p>
      </Reveal>
      <Suspense fallback={<ProjectsGridSkeleton />}>
        <ProjectsListClient />
      </Suspense>
    </div>
  );
}