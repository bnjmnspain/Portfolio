"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail without permissions; the email is still visible to select manually.
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 font-mono text-sm text-ink-soft hover:text-ink transition-colors"
      aria-label="Copy email address"
    >
      {email}
      {copied ? <Check size={14} className="text-sage-dark" /> : <Copy size={14} />}
    </button>
  );
}
