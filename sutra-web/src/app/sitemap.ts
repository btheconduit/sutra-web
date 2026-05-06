import type { MetadataRoute } from "next";
import { glossary } from "./data/glossary";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sutra.so";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    ...glossary.map((e) => ({
      url: `${base}/t/${e.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
