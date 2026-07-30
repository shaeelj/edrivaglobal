import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { destinations } from "@/data/destinations";
import { services } from "@/data/services";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const standardRoutes = ["", "about", "services", "destinations", "universities", "scholarships", "student-journey", "contact", "privacy-policy", "terms", "disclaimer", ...services.map((service) => `services/${service.slug}`)];
  const standard = standardRoutes.map((route) => ({ url: `${siteConfig.domain}/${route}`, lastModified: new Date(), changeFrequency: (route ? "monthly" : "weekly") as "monthly" | "weekly", priority: route ? .7 : 1 }));
  const countryRoutes = destinations.map((destination) => ({ url: `${siteConfig.domain}/destinations/${destination.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8, images: [`${siteConfig.domain}${destination.image}`] }));
  return [...standard, ...countryRoutes];
}
