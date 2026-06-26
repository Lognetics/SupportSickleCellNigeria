import type { MetadataRoute } from "next";
import { navLinks } from "@/lib/site";

const baseUrl = "https://supportsicklecell.ng";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...navLinks.map((l) => l.href), "/donate", "/privacy", "/terms"];
  const unique = Array.from(new Set(routes));

  return unique.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/donate" ? 0.9 : 0.7,
  }));
}
