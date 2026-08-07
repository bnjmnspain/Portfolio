"use client";

import { useCallback } from "react";
import siteConfig from "@/lib/config";

export function useResumeDownload() {
  return useCallback(async () => {
    try {
      const response = await fetch(siteConfig.resumeUrl);
      if (!response.ok) throw new Error("Failed to fetch resume");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Benjami.Saludes.Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Resume download failed:", error);
      window.open(siteConfig.resumeUrl, "_blank");
    }
  }, []);
}
