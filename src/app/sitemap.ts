import type { MetadataRoute } from "next";

import { navItems, site } from "@/lib/data";

// Required for `output: export` (GitHub Pages) — emit a static sitemap.xml.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...navItems.map((n) => n.href), "/blog"];
  const unique = Array.from(new Set(routes));

  return unique.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
