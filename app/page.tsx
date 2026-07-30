import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CircleDollarSign, Landmark, Star } from "lucide-react";
import { destinations } from "@/data/destinations";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { ProgramFinder } from "@/components/home/program-finder";
import { AssessmentForm } from "@/components/home/assessment-form";
import { Accordion } from "@/components/ui/accordion";

const stats = [["500+", "Students Guided"], ["50+", "University Connections"], ["15+", "Study Destinations"], ["95%", "Application Support Success"]];
const process = ["Free Consultation", "Profile Evaluation", "University Shortlisting", "Application & Visa Support", "Begin Your Study Abroad Journey"];
const universities = ["Technical University of Munich", "University of Bologna", "University of Manchester", "University of Toronto", "Monash University", "University of Amsterdam"];

export default function HomePage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <section className="home-hero">
      <div className="route-motif" aria-hidden="true"><i /><i /><i /></div>
      <div className="container hero-grid"><div className="hero-copy"><span className="eyebrow">Your global education journey starts here</span><h1>Your Future<br /><em>Has No Borders.</em></h1><p>Edriva Global helps students discover the right universities, scholarships and international study opportunities with personalised guidance from application to arrival.</p><div className="hero-actions"><Link className="button button-gold" href="/destinations">Explore Study Options <ArrowRight /></Link><Link className="button button-outline-light" href="/contact">Book Free Consultation</Link></div><div className="hero-proof"><span className="stars" aria-label="Five stars"><Star /><Star /><Star /><Star /><Star /></span><span>Trusted by students pursuing opportunities worldwide</span></div></div><div className="hero-visual"><Image src="/images/edvira-campus.png" alt="International students on a university campus" fill priority sizes="(max-width: 900px) 100vw, 52vw" /><span className="photo-label label-one">Germany</span><span className="photo-label label-two">Canada</span><span className="photo-label label-three">Australia</span></div></div>
    </section>

    <section className="stats-bar"><div className="container stats-grid">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>

    <section className="section container" id="destinations"><div className="section-heading"><div><span className="eyebrow">Worldwide possibilities</span><h2>Explore Study Destinations</h2><p>Find the country, university environment and academic opportunity that best matches your ambitions.</p></div><Link href="/destinations">View all destinations <ArrowRight /></Link></div><div className="destination-grid">{destinations.map((destination) => <article className="destination-card" key={destination.slug}><Link href={`/destinations/${destination.slug}`} className="destination-image"><Image src={destination.image} alt={`${destination.name} study destination`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" /></Link><div className="destination-content"><span className="flag-code">{destination.flag}</span><h3>{destination.name}</h3><p>{destination.description}</p><Link href={`/destinations/${destination.slug}`}>Explore Country <ArrowRight /></Link></div></article>)}</div></section>

    <section className="section services-section"><div className="container"><div className="section-heading centered"><div><span className="eyebrow">End-to-end guidance</span><h2>Everything You Need for Your Study Abroad Journey</h2><p>Professional, practical support designed around your goals and timeline.</p></div></div><div className="services-grid">{services.map(({ slug, title, description, icon: Icon }) => <Link href={`/services/${slug}`} className="service-card" key={slug}><Icon /><h3>{title}</h3><p>{description}</p><span>Learn more <ArrowRight /></span></Link>)}</div></div></section>

    <section className="process-section"><div className="route-grid" aria-hidden="true" /><div className="container"><span className="eyebrow gold">A clear, supported process</span><h2>From Ambition to Admission</h2><div className="timeline">{process.map((item, index) => <div className="timeline-step" key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></div>)}</div></div></section>

    <section className="section container split-section"><div className="split-image"><Image src="/images/student-consultation.webp" alt="Students discussing study plans together" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="split-copy"><span className="eyebrow">Guidance that stays personal</span><h2>Why Students Choose Edriva Global</h2><div className="check-list">{["Personalised university recommendations", "Transparent and ethical counselling", "Support throughout the application journey", "Scholarship opportunity guidance", "Student visa documentation support", "SOP and CV assistance", "Clear communication", "International education-focused counselling"].map((item) => <span key={item}><Check />{item}</span>)}</div><Link className="button button-navy" href="/contact">Talk to an Advisor <ArrowRight /></Link></div></section>

    <ProgramFinder />

    <section className="universities-section"><div className="container"><span className="eyebrow">Explore your possibilities</span><h2>Universities Students Explore</h2><p className="section-copy">Examples for discovery only. University names do not imply an official partnership.</p><div className="university-marquee">{[...universities, ...universities].map((name, index) => <span key={`${name}-${index}`}><Landmark />{name}</span>)}</div></div></section>

    <section className="scholarship-section"><Image src="/images/scholarship.webp" alt="University lecture and scholarship opportunities" fill sizes="100vw" /><div className="scholarship-overlay" /><div className="container scholarship-content"><span className="eyebrow gold">Funding your future</span><h2>Make Global Education More Affordable</h2><div className="scholarship-list">{["Merit-Based Scholarships", "Government Scholarships", "University Scholarships", "Tuition Fee Waivers", "Country-Specific Funding Opportunities"].map((item) => <span key={item}><CircleDollarSign />{item}</span>)}</div><Link className="button button-gold" href="/scholarships">Explore Scholarships <ArrowRight /></Link></div></section>

    <section className="section container"><div className="section-heading"><div><span className="eyebrow">Demo content</span><h2>Student Success Stories</h2><p>Sample testimonials showing how verified student stories will appear.</p></div></div><div className="testimonial-grid">{testimonials.map((item, index) => <article className="testimonial-card" key={index}><span className="demo-label">Demo testimonial</span><div className="stars"><Star /><Star /><Star /><Star /><Star /></div><blockquote>“{item.quote}”</blockquote><div><strong>{item.name}</strong><span>{item.program} · {item.country}</span></div></article>)}</div></section>

    <section className="assessment-section"><div className="container assessment-grid"><div><span className="eyebrow gold">Start with your goals</span><h2>Get Your Free Profile Assessment</h2><p>Share your study plans and our team will review the information before discussing sensible next steps.</p><div className="privacy-note"><Check />Your information is used only to respond to your enquiry.</div></div><AssessmentForm /></div></section>

    <section className="section container faq-section"><div><span className="eyebrow">Straight answers</span><h2>Frequently Asked Questions</h2><p>What students commonly ask before starting their international application.</p></div><Accordion items={faqs} /></section>

    <section className="final-cta"><div className="route-grid" aria-hidden="true" /><div className="container"><span className="eyebrow gold">Your next chapter</span><h2>Ready to Start Your Global Education Journey?</h2><p>Speak with an Edriva Global advisor and discover study opportunities suited to your goals, academic background and budget.</p><div><Link className="button button-gold" href="/contact">Book Free Consultation <ArrowRight /></Link></div></div></section>
  </>;
}
