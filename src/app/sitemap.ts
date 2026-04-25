import { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/data/services";
import { getAllCommuneSlugs } from "@/data/communes";

const BASE_URL = "https://mon-super-site-mu.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const communeEntries = getAllCommuneSlugs().map((slug) => ({
    url:             `${BASE_URL}/electricien/${slug}`,
    lastModified:    new Date(),
    changeFrequency: "monthly" as const,
    priority:        0.9,
  }));

  const serviceEntries = getAllServiceSlugs().map((slug) => ({
    url:              `${BASE_URL}/services/${slug}`,
    lastModified:     new Date(),
    changeFrequency:  "monthly" as const,
    priority:         0.8,
  }));

  return [
    {
      url:             BASE_URL,
      lastModified:    new Date(),
      changeFrequency: "weekly",
      priority:        1,
    },
    {
      url:             `${BASE_URL}/nl`,
      lastModified:    new Date(),
      changeFrequency: "weekly",
      priority:        1,
    },
    ...communeEntries,
    ...serviceEntries,
    {
      url:             `${BASE_URL}/mentions-legales`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.3,
    },
    {
      url:             `${BASE_URL}/politique-confidentialite`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.3,
    },
    {
      url:             `${BASE_URL}/cookies`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.3,
    },
    {
      url:             `${BASE_URL}/conditions-generales`,
      lastModified:    new Date(),
      changeFrequency: "yearly",
      priority:        0.3,
    },
  ];
}
