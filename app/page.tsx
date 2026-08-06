import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { GithubStats } from "@/components/GithubStats";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ProjectCardSkeleton } from "@/components/LoadingSkeleton";
import { siteConfig } from "@/lib/config";
import { getGithubRepos, getGithubUser } from "@/services/github";

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
          <GithubStatsSection />
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
          <FeaturedProjects />
        </Suspense>
      </section>
    </>
  );
}

async function GithubStatsSection() {
  const [user, repos] = await Promise.all([
    getGithubUser(siteConfig.githubUsername),
    getGithubRepos(siteConfig.githubUsername),
  ]);
  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  return <GithubStats user={user} repoCount={repos.length} totalStars={totalStars} />;
}

async function FeaturedProjects() {
  const repos = await getGithubRepos(siteConfig.githubUsername);
  const featured = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3);

  if (featured.length === 0) {
    return (
      <p className="text-sm text-ink-soft">
        No repositories found yet for{" "}
        <code className="font-mono">{siteConfig.githubUsername}</code>. Update{" "}
        <code className="font-mono">githubUsername</code> in <code>lib/config.ts</code>.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {featured.map((repo, i) => (
        <ProjectCard key={repo.id} repo={repo} delay={i * 0.08} />
      ))}
    </div>
  );
}
