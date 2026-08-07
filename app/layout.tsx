import type { Metadata } from "next";
import { Raleway, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { LayoutChrome } from "@/components/LayoutChrome";
import { FloatingBackground } from "@/components/FloatingBackground";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
const sans = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [siteConfig.jobTitle, "software developer", "portfolio", siteConfig.name],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    description: siteConfig.tagline,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    description: siteConfig.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans relative">
        <FloatingBackground />
        <LayoutChrome>{children}</LayoutChrome>
      </body>
    </html>
  );
}
