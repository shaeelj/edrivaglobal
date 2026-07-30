import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
export default function robots(): MetadataRoute.Robots { return { rules: [
  { userAgent: "*", allow: "/", disallow: ["/api/"] },
  { userAgent: ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"], allow: "/", disallow: ["/api/"] },
], sitemap: `${siteConfig.domain}/sitemap.xml` }; }
