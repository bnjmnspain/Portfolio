"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full border border-line rounded-md px-3 py-2.5 text-sm bg-bg outline-none focus-visible:border-ink"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-line rounded-md px-3 py-2.5 text-sm bg-bg outline-none focus-visible:border-ink"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-line rounded-md px-3 py-2.5 text-sm bg-bg outline-none focus-visible:border-ink resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 font-sans font-semibold text-sm px-7 py-3.5 rounded-sm border border-ink bg-line hover:bg-line/70 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={15} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={15} /> Send message
          </>
        )}
      </button>

      {status === "sent" && (
        <p className="flex items-center gap-2 text-sm text-sage-dark">
          <CheckCircle2 size={15} /> Thanks — I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-clay">
          <AlertCircle size={15} /> Something went wrong. Email me directly instead.
        </p>
      )}
    </form>
  );
}
