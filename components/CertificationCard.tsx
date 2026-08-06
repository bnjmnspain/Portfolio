import { Award, ExternalLink } from "lucide-react";
import { Certification } from "@/types";
import { Reveal } from "./Reveal";

export function CertificationCard({ cert, delay = 0 }: { cert: Certification; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="border border-line rounded-lg p-6 hover:border-ink transition-colors h-full flex flex-col">
        <Award className="text-sage-dark mb-4" size={22} />
        <h3 className="font-serif text-lg mb-1">{cert.name}</h3>
        <p className="text-sm text-ink-soft mb-1">{cert.issuer}</p>
        <p className="font-mono text-xs text-ink-soft mb-4">{cert.date}</p>
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 text-sm underline underline-offset-4"
          >
            View credential <ExternalLink size={13} />
          </a>
        )}
      </div>
    </Reveal>
  );
}
