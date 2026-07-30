import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/json-ld";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: "Edriva Global | Study Abroad Admissions, Scholarships & Visa Guidance", template: "%s | Edriva Global" },
  description: "Explore international universities, scholarships and study opportunities with personalised admission and student visa guidance from Edriva Global.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "International education consultancy",
  keywords: ["study abroad", "international admissions", "university selection", "scholarship guidance", "student visa guidance", "SOP support", "Edriva Global"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: siteConfig.name, title: "Edriva Global | Your Gateway to Global Education", description: siteConfig.tagline, url: siteConfig.domain, images: ["/images/edvira-campus.png"] },
  twitter: { card: "summary_large_image", title: "Edriva Global", description: siteConfig.tagline, images: ["/images/edvira-campus.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <head><link rel="alternate" type="text/plain" href="/llms.txt" title="Edriva Global LLM guide" /></head>
      <body><Header /><main>{children}</main><Footer /><JsonLd data={{ "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": `${siteConfig.domain}/#organization`, name: siteConfig.name, url: siteConfig.domain, email: siteConfig.email, description: "International education consultancy providing personalised admissions, scholarship, visa documentation and application guidance." }, { "@type": "WebSite", "@id": `${siteConfig.domain}/#website`, url: siteConfig.domain, name: siteConfig.name, description: siteConfig.tagline, publisher: { "@id": `${siteConfig.domain}/#organization` }, inLanguage: "en" }] }} /></body>
    </html>
  );
}
