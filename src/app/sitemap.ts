import type { MetadataRoute } from "next";
import { SERVICES } from "./config/services";
import { NAV, SITE_URL } from "./config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...NAV.map((n) => n.href), ...SERVICES.map((s) => `/${s.slug}`)].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
