import Image from "next/image";
import { GithubUser } from "@/types";
import { AnimatedCounter } from "./AnimatedCounter";

interface GithubStatsProps {
  user: GithubUser | null;
  repoCount: number;
  totalStars: number;
}

export function GithubStats({ user, repoCount, totalStars }: GithubStatsProps) {
  if (!user) {
    return (
      <p className="font-mono text-xs text-ink-soft text-center">
        GitHub stats are unavailable right now — check back shortly.
      </p>
    );
  }

  const stats = [
    { label: "Public repos", value: user.public_repos },
    { label: "Followers", value: user.followers },
    { label: "Stars earned", value: totalStars },
    { label: "Active projects", value: repoCount },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
      <Image
        src={user.avatar_url}
        alt={`${user.name ?? user.login}'s GitHub avatar`}
        width={56}
        height={56}
        className="rounded-full border border-line"
      />
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-serif text-2xl sm:text-3xl">
            <AnimatedCounter value={s.value} />
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mt-1">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
