import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { GithubStats } from "@/components/GithubStats";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ProjectCardSkeleton } from "@/components/LoadingSkeleton";
import { siteConfig } from "@/lib/config";
import { GithubStatsClient } from "@/components/GithubStatsClient";
import { FeaturedProjectsClient } from "@/components/FeaturedProjectsClient";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-5 sm:px-10 py-24 border-t border-line">
        <Reveal>
          <div className="section-label justify-center mb-10">
            <span>GitHub activity</span>
          </div>
        </Reveal>
        <Suspense fallback={<p className="text-center text-sm text-ink-soft">Loading GitHub stats…</p>}>
          <GithubStatsClient />
        </Suspense>
      </section>

      <section className="px-5 sm:px-10 py-24 border-t border-line">
        <div className="flex items-center justify-between mb-10">
          <div className="section-label">
            <span>Selected work</span>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm underline underline-offset-4"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
            </div>
          }
        >
          <FeaturedProjectsClient />
        </Suspense>
      </section>
    </>
  );
}