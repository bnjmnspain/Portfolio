import { Star, GitFork, ExternalLink, Github } from "lucide-react";
import { GithubRepo } from "@/types";
import { formatRelativeDate } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function ProjectCard({ repo, delay = 0 }: { repo: GithubRepo; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="h-full flex flex-col justify-between border border-line rounded-lg p-6 hover:border-ink transition-colors bg-bg">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-serif text-lg leading-snug">{repo.name}</h3>
            <div className="flex items-center gap-3 text-ink-soft shrink-0">
              <span className="flex items-center gap-1 text-xs font-mono">
                <Star size={13} /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1 text-xs font-mono">
                <GitFork size={13} /> {repo.forks_count}
              </span>
            </div>
          </div>
          <p className="text-sm text-ink-soft mb-4 line-clamp-3">
            {repo.description ?? "No description provided."}
          </p>
          {repo.topics?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {repo.topics.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-sky/50 text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-line mt-2">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-soft">
            {repo.language && (
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sage-dark" />
                {repo.language}
              </span>
            )}
            <span>· updated {formatRelativeDate(repo.pushed_at)}</span>
          </div>
          <div className="flex items-center gap-3">
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${repo.name}`}
                className="text-ink-soft hover:text-ink transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${repo.name} on GitHub`}
              className="text-ink-soft hover:text-ink transition-colors"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
