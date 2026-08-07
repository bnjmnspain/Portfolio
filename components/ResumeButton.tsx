"use client";

import { useResumeDownload } from "@/hooks/useResumeDownload";

export function ResumeButton({ className }: { className?: string }) {
  const handleDownloadResume = useResumeDownload();

  return (
    <button onClick={handleDownloadResume} className={className}>
      Download Resume
    </button>
  );
}
