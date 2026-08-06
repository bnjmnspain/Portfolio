import { GithubRepo, GithubUser } from "@/types";

const API_BASE = "https://api.github.com";

/**
 * All GitHub calls go through this helper so the token (if present) and
 * cache/revalidate behavior stay consistent in one place. GITHUB_TOKEN is
 * read server-side only and is never sent to the browser.
 */
async function githubFetch<T>(path: string): Promise<T | null> {
  const token = process.env.GITHUB_TOKEN;
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      // Revalidate every hour so new repos/stars show up without a full rebuild.
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.error(`GitHub API ${path} failed: ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.error(`GitHub API ${path} error:`, err);
    return null;
  }
}

export async function getGithubUser(username: string): Promise<GithubUser | null> {
  return githubFetch<GithubUser>(`/users/${username}`);
}

export async function getGithubRepos(username: string): Promise<GithubRepo[]> {
  const repos = await githubFetch<GithubRepo[]>(
    `/users/${username}/repos?per_page=100&sort=updated`
  );
  if (!repos) return [];
  return repos.filter((r) => !r.fork && !r.archived);
}

/**
 * Lightweight stand-in for a contribution heatmap. The real contribution
 * calendar isn't exposed by the REST API (it requires GraphQL + auth), so
 * this derives a same-shaped grid from recent public events as a best-effort
 * visualization. Swap in a GraphQL call with a personal token for exact data.
 */
export async function getContributionApprox(
  username: string
): Promise<{ date: string; count: number }[]> {
  const events = await githubFetch<{ created_at: string; type: string }[]>(
    `/users/${username}/events/public?per_page=100`
  );
  if (!events) return [];

  const counts = new Map<string, number>();
  for (const e of events) {
    const day = e.created_at.slice(0, 10);
    counts.set(day, (counts.get(day) ?? 0) + 1);
  }
  return Array.from(counts.entries()).map(([date, count]) => ({ date, count }));
}
