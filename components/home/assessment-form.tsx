"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export function AssessmentForm() {
  const [state, setState] = useState<{ loading: boolean; message: string; error: boolean }>({ loading: false, message: "", error: false });
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState({ loading: true, message: "", error: false });
    const response = await fetch("/api/leads", { method: "POST", body: new FormData(event.currentTarget) });
    const data = await response.json(); setState({ loading: false, message: data.message, error: !response.ok });
    if (response.ok) event.currentTarget.reset();
  }
  return <form className="assessment-form" onSubmit={submit}><div className="form-grid"><label>Full Name<input name="name" required autoComplete="name" /></label><label>Email<input name="email" type="email" required autoComplete="email" /></label><label>WhatsApp Number<input name="whatsapp" required autoComplete="tel" /></label><label>Current Qualification<input name="qualification" required /></label><label>Preferred Country<select name="country" required><option value="">Select country</option><option>Germany</option><option>Italy</option><option>United Kingdom</option><option>United States</option><option>Canada</option><option>Australia</option></select></label><label>Intended Program<input name="program" required /></label><label>Preferred Intake<input name="intake" placeholder="e.g. September 2027" required /></label><label className="full">Message<textarea name="message" rows={4} /></label><label className="honeypot" aria-hidden="true">Company<input name="company" tabIndex={-1} autoComplete="off" /></label><label className="checkbox full"><input type="checkbox" name="consent" value="yes" required /> I agree to the <Link href="/privacy-policy">Privacy Policy</Link>.</label></div><button className="button button-gold" disabled={state.loading}>{state.loading ? "Sending…" : "Request Free Assessment"}</button>{state.message && <p className={`form-status ${state.error ? "error" : ""}`} role="status">{state.message}</p>}</form>;
}
