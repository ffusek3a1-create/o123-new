import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.o123.pl/sitemap.xml",
    host: "https://www.o123.pl",
  };
}