import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><div className="route-grid" aria-hidden="true" /><div className="container"><span className="eyebrow gold">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></section>;
}

export function ContentPage({ eyebrow, title, description, sections }: { eyebrow: string; title: string; description: string; sections: { title: string; text: string }[] }) {
  return <><PageHero eyebrow={eyebrow} title={title} description={description} /><section className="section container content-layout"><div>{sections.map((section) => <article className="content-block" key={section.title}><h2>{section.title}</h2><p>{section.text}</p></article>)}</div><aside><h2>Plan your next step</h2><p>Tell us where you are now and what you want to achieve. We’ll help you organise the options.</p><Link className="button button-gold" href="/contact">Book Free Consultation <ArrowRight /></Link></aside></section></>;
}

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <><PageHero eyebrow="Website information" title={title} description="Important information about using the Edriva Global website and services." /><section className="section container legal-copy">{children}</section></>;
}

export function Checklist({ items }: { items: string[] }) { return <div className="check-list">{items.map((item) => <span key={item}><Check />{item}</span>)}</div>; }
