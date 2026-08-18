import { ExternalLink, Github } from "lucide-react";
import { GithubRepo } from "@/types";
import { formatRelativeDate } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function ProjectCard({ repo, delay = 0 }: { repo: GithubRepo; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="h-full border border-line rounded-lg p-4 hover:border-ink transition-colors bg-bg flex flex-col group">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-serif text-base leading-snug line-clamp-2">{repo.name}</h3>
          <div className="flex items-center gap-2 shrink-0">
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${repo.name}`}
                className="text-ink-soft hover:text-ink transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            )}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${repo.name} on GitHub`}
              className="text-ink-soft hover:text-ink transition-colors"
            >
              <Github size={14} />
            </a>
          </div>
        </div>
        <p className="text-xs text-ink-soft mb-2 line-clamp-2 group-hover:line-clamp-none group-hover:overflow-visible transition-all duration-300 flex-1">
          {repo.description ?? "No description provided."}
        </p>
        <div className="flex items-center justify-between text-[11px] font-mono text-ink-soft">
          <div className="flex items-center gap-2">
            {repo.language && (
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-dark" />
                {repo.language}
              </span>
            )}
            <span>· updated {formatRelativeDate(repo.pushed_at)}</span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
