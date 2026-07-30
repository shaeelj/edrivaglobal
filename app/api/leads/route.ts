import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "whatsapp", "qualification", "country", "program", "intake", "consent"] as const;

function formspreeMessage(payload: unknown) {
  if (!payload || typeof payload !== "object" || !("errors" in payload) || !Array.isArray(payload.errors)) return "Formspree could not accept the enquiry. Please try again.";
  const messages = payload.errors.map((error) => {
    if (error && typeof error === "object" && "message" in error && typeof error.message === "string") return error.message;
    return null;
  }).filter(Boolean);
  return messages.join(" ") || "Formspree could not accept the enquiry. Please try again.";
}

export async function POST(request: Request) {
  const form = await request.formData();

  if (form.get("company")) return NextResponse.json({ message: "Request rejected." }, { status: 400 });
  if (requiredFields.some((field) => !String(form.get(field) ?? "").trim())) return NextResponse.json({ message: "Please complete all required fields." }, { status: 422 });

  const email = String(form.get("email"));
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ message: "Please enter a valid email address." }, { status: 422 });

  const formId = process.env.FORMSPREE_FORM_ID?.trim();
  if (!formId || formId === "YOUR_FORM_ID_HERE") return NextResponse.json({ message: "Formspree is not configured yet. Add FORMSPREE_FORM_ID to .env.local and restart the development server." }, { status: 503 });

  const submission = new FormData();
  for (const [key, value] of form.entries()) {
    if (key !== "company") submission.append(key, value);
  }
  submission.append("_subject", "New Edriva Global Profile Assessment");
  submission.append("source", "Edriva Global website");

  try {
    const response = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: submission,
      cache: "no-store",
    });
    const payload: unknown = await response.json().catch(() => null);
    if (!response.ok) return NextResponse.json({ message: formspreeMessage(payload) }, { status: response.status });
    return NextResponse.json({ message: "Thank you. Your profile assessment request has been sent successfully." });
  } catch {
    return NextResponse.json({ message: "We could not reach the form service. Please try again shortly." }, { status: 502 });
  }
}
