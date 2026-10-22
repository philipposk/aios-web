import type { MetadataRoute } from "next";

const SITE_URL = "https://aios.6x7.gr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/"];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.5,
  }));
}
