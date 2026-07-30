import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ContentPage } from "@/components/page-shell";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const item = services.find((service) => service.slug === slug); const title = item?.title ?? "Student Support Service"; const description = item ? `${item.description} Get personalised international education guidance from Edriva Global.` : "Explore professional international education support from Edriva Global.";
  return { title, description, alternates: { canonical: `/services/${slug}` }, openGraph: { title, description, url: `/services/${slug}`, type: "website" }, twitter: { card: "summary_large_image", title, description } };
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = services.find((service) => service.slug === slug); if (!item) notFound();
  return <><BreadcrumbSchema items={[{ name: "Home", url: siteConfig.domain }, { name: "Services", url: `${siteConfig.domain}/services` }, { name: item.title, url: `${siteConfig.domain}/services/${item.slug}` }]} /><ContentPage eyebrow="Professional student support" title={item.title} description={item.description} sections={[{ title: "How We Support You", text: item.description + " Every recommendation is shaped around your individual circumstances and current published requirements." }, { title: "What to Expect", text: "A clear conversation, an organised action plan and practical guidance at each relevant step." }, { title: "Start with a Consultation", text: "Tell us about your academic background, preferred destination and intended intake so we can identify the right next step." }]} /></>;
}
