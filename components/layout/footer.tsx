import { Facebook, Instagram, Linkedin, Youtube, Compass } from "lucide-react";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div className="footer-brand"><div className="logo light"><span className="logo-mark"><Compass /></span><span><strong>EDRIVA <b>GLOBAL</b></strong><small>{siteConfig.brandPhrase}</small></span></div><p>Edriva Global supports students seeking international education opportunities through transparent, personalised and professional guidance.</p><div className="socials"><a href="https://facebook.com" aria-label="Facebook"><Facebook /></a><a href="https://instagram.com" aria-label="Instagram"><Instagram /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin /></a><a href="https://youtube.com" aria-label="YouTube"><Youtube /></a></div></div>
    <div><h3>Quick Links</h3><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/destinations">Study Destinations</Link><Link href="/universities">Universities</Link><Link href="/scholarships">Scholarships</Link><Link href="/contact">Contact</Link></div>
    <div><h3>Services</h3>{services.map((item) => <Link key={item.slug} href={`/services/${item.slug}`}>{item.title}</Link>)}</div>
    <div><h3>Destinations</h3>{destinations.map((item) => <Link key={item.slug} href={`/destinations/${item.slug}`}>{item.name}</Link>)}</div>
    <div><h3>Contact</h3><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={`mailto:${siteConfig.admissionsEmail}`}>{siteConfig.admissionsEmail}</a>{siteConfig.phone && <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>}{siteConfig.address && <p>{siteConfig.address}</p>}</div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Edriva Global. All Rights Reserved.</span><div><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link><Link href="/disclaimer">Disclaimer</Link></div></div></footer>;
}
