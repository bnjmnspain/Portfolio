"use client";

import { useEffect, useState } from "react";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { ProjectsGridSkeleton } from "@/components/LoadingSkeleton";
import { GithubRepo } from "@/types";
import { siteConfig } from "@/lib/config";

function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  return fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&t=${Date.now()}`,
    {
      cache: "no-store",
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

export function ProjectsListClient() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubRepos(siteConfig.githubUsername).then((r) => {
      setRepos(r);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <ProjectsGridSkeleton />;
  }

  return <ProjectsExplorer repos={repos} />;
}