"use client";

import { FormEvent, useState } from "react";
import { Search } from "lucide-react";
import { programs, type Program } from "@/data/programs";

export function ProgramFinder() {
  const [matches, setMatches] = useState<Program[] | null>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const country = form.get("country"); const field = form.get("field");
    setMatches(programs.filter((program) => (!country || program.country === country) && (!field || program.field === field)));
  }
  return <section className="finder-band" id="program-finder"><div className="container finder-layout"><div><span className="eyebrow">Personalised discovery</span><h2>Find Your Best Study Option</h2><p>Use a few preferences to explore example programs from our local catalogue. An advisor can help you assess current entry requirements.</p></div><div className="finder-box"><form onSubmit={submit} className="finder-form"><label>Current Qualification<select name="qualification"><option value="">Any qualification</option><option>High School</option><option>Bachelor&apos;s</option></select></label><label>Preferred Country<select name="country"><option value="">Any country</option><option>Germany</option><option>Italy</option><option>United Kingdom</option><option>Canada</option><option>Australia</option></select></label><label>Field of Study<select name="field"><option value="">Any field</option><option>Computing</option><option>Engineering</option><option>Business</option><option>Healthcare</option><option>Design</option></select></label><label>Budget Range<select name="budget"><option>Under £15k</option><option>£15k–£25k</option><option>£25k+</option></select></label><label>Preferred Intake<select name="intake"><option>September</option><option>January</option><option>February</option><option>October</option></select></label><label>English Test Status<select name="english"><option>Not started</option><option>Planning</option><option>Completed</option></select></label><button className="button button-gold" type="submit"><Search /> Find Suitable Programs</button></form>{matches && <div className="finder-results" role="status"><strong>{matches.length ? `${matches.length} example option${matches.length > 1 ? "s" : ""}` : "No exact examples found"}</strong>{matches.map((item) => <span key={item.id}>{item.title} · {item.country}</span>)}{!matches.length && <span>Try broadening your country or subject preference.</span>}</div>}</div></div></section>;
}
