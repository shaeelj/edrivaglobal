"use client";

import { ChevronDown, Compass, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { destinations } from "@/data/destinations";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <header className={`site-header ${compact ? "is-compact" : ""}`}>
      <div className="header-inner">
        <Link className="logo" href="/" onClick={() => setOpen(false)}>
          <span className="logo-mark"><Compass /></span>
          <span><strong>EDRIVA <b>GLOBAL</b></strong><small>{siteConfig.brandPhrase}</small></span>
        </Link>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <Link href="/">Home</Link>
          <div className="nav-group"><Link href="/destinations">Study Destinations <ChevronDown /></Link><div className="nav-dropdown">{destinations.map((item) => <Link key={item.slug} href={`/destinations/${item.slug}`}>{item.name}</Link>)}</div></div>
          <div className="nav-group"><Link href="/services">Services <ChevronDown /></Link><div className="nav-dropdown">{services.map((item) => <Link key={item.slug} href={`/services/${item.slug}`}>{item.title}</Link>)}</div></div>
          <Link href="/universities">Universities</Link>
          <Link href="/scholarships">Scholarships</Link>
          <Link href="/student-journey">Student Journey</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link className="button button-gold nav-button" href="/contact">Book Free Consultation</Link>
        </nav>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
