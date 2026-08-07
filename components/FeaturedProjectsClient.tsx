"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectCardSkeleton } from "@/components/LoadingSkeleton";
import { GithubRepo } from "@/types";
import { siteConfig } from "@/lib/config";

function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  return fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    {
      headers: { Accept: "application/vnd.github+json" },
    }
  )
    .then((res) => {
      if (!res.ok) return [];
      return res.json();
    })
    .then((repos: GithubRepo[]) =>
      repos.filter((r) => !r.fork && !r.archived)
    )
    .catch(() => []);
}

export function FeaturedProjectsClient() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubRepos(siteConfig.githubUsername).then((r) => {
      setRepos(r);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:pb-0">
        <div className="min-w-[280px] max-w-[280px] shrink-0 sm:min-w-0 sm:max-w-none">
          <ProjectCardSkeleton />
        </div>
        <div className="min-w-[280px] max-w-[280px] shrink-0 sm:min-w-0 sm:max-w-none">
          <ProjectCardSkeleton />
        </div>
        <div className="min-w-[280px] max-w-[280px] shrink-0 sm:min-w-0 sm:max-w-none">
          <ProjectCardSkeleton />
        </div>
      </div>
    );
  }

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
    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:pb-0">
      {featured.map((repo, i) => (
        <div key={repo.id} className="min-w-[280px] max-w-[280px] shrink-0 sm:min-w-0 sm:max-w-none">
          <ProjectCard repo={repo} delay={i * 0.08} />
        </div>
      ))}
    </div>
  );
}