import type { Metadata } from "next";
import { Github, Linkedin, MapPin, FileDown } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="px-5 sm:px-10 py-16 max-w-4xl mx-auto grid sm:grid-cols-2 gap-16">
      <Reveal direction="left">
        <div className="section-label mb-6">
          <span>Let&apos;s talk</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl mb-8">
          Have a project in mind?
          <br />
          Let&apos;s work together.
        </h1>

        <ul className="space-y-4 text-sm">
          <li className="flex items-center gap-3">
            <CopyEmailButton email={siteConfig.email} />
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={15} className="text-ink-soft" />
            <span>{siteConfig.location}</span>
          </li>
          <li className="flex items-center gap-3">
            <Github size={15} className="text-ink-soft" />
            <a
              href={`https://github.com/${siteConfig.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4"
            >
              github.com/{siteConfig.githubUsername}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Linkedin size={15} className="text-ink-soft" />
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FileDown size={15} className="text-ink-soft" />
            <a href={siteConfig.resumeUrl} download className="hover:underline underline-offset-4">
              Download résumé
            </a>
          </li>
        </ul>
      </Reveal>
    </div>
  );
}
