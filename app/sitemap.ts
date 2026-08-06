import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/about",
    "/skills",
    "/projects",
    "/experience",
    "/certifications",
    "/contact",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  return staticRoutes;
}
