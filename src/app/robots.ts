import { MetadataRoute } from "next";

const BASE_URL = "https://tftechnics.be";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*",              allow: "/" },
      { userAgent: "GPTBot",         allow: "/" },
      { userAgent: "ClaudeBot",      allow: "/" },
      { userAgent: "PerplexityBot",  allow: "/" },
      { userAgent: "Googlebot",      allow: "/" },
      { userAgent: "anthropic-ai",   allow: "/" },
      { userAgent: "cohere-ai",      allow: "/" },
      { userAgent: "ChatGPT-User",   allow: "/" },
      { userAgent: "Applebot",       allow: "/" },
      { userAgent: "Gemini",         allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
