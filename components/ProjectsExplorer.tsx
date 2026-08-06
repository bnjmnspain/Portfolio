"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { GithubRepo } from "@/types";
import { ProjectCard } from "./ProjectCard";

type SortKey = "stars" | "recent";

export function ProjectsExplorer({ repos }: { repos: GithubRepo[] }) {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<string>("All");
  const [sort, setSort] = useState<SortKey>("recent");

  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => r.language && set.add(r.language));
    return ["All", ...Array.from(set).sort()];
  }, [repos]);

  const filtered = useMemo(() => {
    let list = repos.filter((r) => {
      const matchesQuery =
        !query.trim() ||
        r.name.toLowerCase().includes(query.toLowerCase()) ||
        (r.description ?? "").toLowerCase().includes(query.toLowerCase());
      const matchesLanguage = language === "All" || r.language === language;
      return matchesQuery && matchesLanguage;
    });

    list = [...list].sort((a, b) =>
      sort === "stars"
        ? b.stargazers_count - a.stargazers_count
        : new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    );

    return list;
  }, [repos, query, language, sort]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <div className="flex items-center gap-2 border border-line rounded-md px-3 py-2 flex-1">
          <Search size={15} className="text-ink-soft shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="w-full bg-transparent outline-none text-sm"
            aria-label="Search projects"
          />
        </div>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          aria-label="Filter by language"
          className="border border-line rounded-md px-3 py-2 text-sm bg-bg text-ink"
        >
          {languages.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          aria-label="Sort projects"
          className="border border-line rounded-md px-3 py-2 text-sm bg-bg text-ink"
        >
          <option value="recent">Most recent</option>
          <option value="stars">Most stars</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-ink-soft">No projects match that search.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((repo, i) => (
            <ProjectCard key={repo.id} repo={repo} delay={Math.min(i, 6) * 0.05} />
          ))}
        </div>
      )}
    </div>
  );
}
