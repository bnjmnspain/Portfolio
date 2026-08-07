import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { CertificationCard } from "@/components/CertificationCard";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Certificates" };

export default function CertificatesPage() {
  return (
    <div className="px-5 sm:px-10 py-16 max-w-5xl mx-auto">
      <Reveal>
        <div className="section-label mb-6">
          <span>Certificates</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl mb-16">Certificates</h1>
      </Reveal>

      {siteConfig.certifications.length === 0 ? (
        <p className="text-sm text-ink-soft">
          No certifications added yet — add them to{" "}
          <code className="font-mono">certifications</code> in <code>lib/config.ts</code>.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.certifications.map((cert, i) => (
            <CertificationCard key={cert.name} cert={cert} delay={i * 0.06} />
          ))}
        </div>
      )}
    </div>
  );
}
