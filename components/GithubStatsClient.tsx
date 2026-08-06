"use client";

import { useEffect, useState } from "react";
import { GithubStats } from "@/components/GithubStats";
import { GithubRepo, GithubUser } from "@/types";
import { siteConfig } from "@/lib/config";

function fetchGithubUser(username: string): Promise<GithubUser | null> {
  return fetch(`https://api.github.com/users/${username}`, {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((res) => {
      if (!res.ok) return null;
      return res.json();
    })
    .catch(() => null);
}

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

export function GithubStatsClient() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetchGithubUser(siteConfig.githubUsername),
      fetchGithubRepos(siteConfig.githubUsername),
    ]).then(([u, r]) => {
      setUser(u);
      setRepos(r);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p className="text-center text-sm text-ink-soft">Loading GitHub stats…</p>;
  }

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  return <GithubStats user={user} repoCount={repos.length} totalStars={totalStars} />;
}