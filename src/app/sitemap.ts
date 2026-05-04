import { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/data/services";
import { getAllCommuneSlugs } from "@/data/communes";
import { ARTICLES } from "@/data/articles";

const BASE_URL = "https://tftechnics.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const communeEntries = getAllCommuneSlugs().map((slug) => ({
    url:             `${BASE_URL}/electricien/${slug}`,
    lastModified:    new Date(),
    changeFrequency: "monthly" as const,
    priority:        0.9,
  }));

  const blogEntries = ARTICLES.map((article) => ({
    url:             `${BASE_URL}/blog/${article.slug}`,
    lastModified:    new Date(article.date),
    changeFrequency: "monthly" as const,
    priority:        0.7,
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
    {
      url:             `${BASE_URL}/depannage-urgence`,
      lastModified:    new Date(),
      changeFrequency: "weekly" as const,
      priority:        0.95,
    },
    {
      url:             `${BASE_URL}/tarifs`,
      lastModified:    new Date(),
      changeFrequency: "monthly" as const,
      priority:        0.85,
    },
    {
      url:             `${BASE_URL}/a-propos`,
      lastModified:    new Date(),
      changeFrequency: "monthly" as const,
      priority:        0.7,
    },
    {
      url:             `${BASE_URL}/blog`,
      lastModified:    new Date(),
      changeFrequency: "weekly" as const,
      priority:        0.75,
    },
    ...serviceEntries,
    ...communeEntries,
    ...blogEntries,
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
