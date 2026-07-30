import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";

export function generateStaticParams() { return destinations.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const item = destinations.find((destination) => destination.slug === slug);
  const title = item ? `Study in ${item.name}: Universities, Costs & Guidance` : "Study Destination";
  const description = item ? `Explore study opportunities in ${item.name}, including popular fields, student cities, scholarships, admissions and visa guidance from Edriva Global.` : "Explore international study destinations with Edriva Global.";
  return { title, description, alternates: { canonical: `/destinations/${slug}` }, openGraph: { title, description, url: `/destinations/${slug}`, type: "article", images: item ? [{ url: item.image, alt: `Study in ${item.name}` }] : undefined }, twitter: { card: "summary_large_image", title, description, images: item ? [item.image] : undefined } };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = destinations.find((destination) => destination.slug === slug); if (!item) notFound();
  const sections = [
    ["Why Study in " + item.name, item.description], ["Education System", `Explore the types of institutions, qualifications and teaching approaches available in ${item.name}. Your advisor can help verify current program structures.`], ["Popular Study Fields", item.fields.join(", ") + " are among the fields students commonly explore."], ["Typical Admission Requirements", "Requirements depend on the institution and program. Academic transcripts, qualification certificates, language evidence and a statement of purpose may be requested."], ["English Language Requirements", "Accepted tests and minimum scores vary. Some programs may offer alternatives, subject to official university policy."], ["Estimated Tuition & Living Costs", "Costs vary considerably by city, institution and lifestyle. Current figures should be checked through official university and government sources."], ["Scholarships", "Funding may include university awards, government schemes and subject-specific opportunities. Eligibility and deadlines vary."], ["Application Process", "A typical journey includes program research, document preparation, submission, offer review and enrolment steps."], ["Student Visa Overview", "Visa processes and evidence requirements can change. Use official government guidance and qualified support for your circumstances."], ["Popular Student Cities", item.cities.join(", ") + " are popular starting points for further research."],
  ];
  return <><BreadcrumbSchema items={[{ name: "Home", url: siteConfig.domain }, { name: "Study Destinations", url: `${siteConfig.domain}/destinations` }, { name: item.name, url: `${siteConfig.domain}/destinations/${item.slug}` }]} /><section className="destination-hero"><Image src={item.image} alt={`${item.name} destination`} fill priority sizes="100vw" /><div /><div className="container"><span className="eyebrow gold">International study guide</span><h1>Study in {item.name}</h1><p>{item.description}</p></div></section><section className="section container country-content"><div>{sections.map(([title, text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}<div className="notice"><strong>Please note</strong><p>Requirements can change. Applicants should verify current requirements through official government and university sources.</p></div></div><aside><h2>Explore {item.name}</h2><p>Build a shortlist around your background, budget and goals.</p><Link className="button button-gold" href="/contact">Talk to an Advisor <ArrowRight /></Link></aside></section></>;
}
