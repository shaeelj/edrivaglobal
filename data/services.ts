import { Award, FileCheck2, FileText, GraduationCap, Plane, Stamp } from "lucide-react";

export const services = [
  { slug: "university-selection", title: "University Selection", description: "A focused shortlist shaped around your academic profile, goals and budget.", icon: GraduationCap },
  { slug: "application-support", title: "Application Support", description: "Careful guidance through documents, deadlines and university applications.", icon: FileCheck2 },
  { slug: "scholarships", title: "Scholarship Guidance", description: "Help identifying relevant funding opportunities and preparing strong submissions.", icon: Award },
  { slug: "visa-assistance", title: "Visa Assistance", description: "Organised support for student visa documentation and application readiness.", icon: Stamp },
  { slug: "sop-cv", title: "SOP & CV Support", description: "Clear, authentic application documents that communicate your strengths.", icon: FileText },
  { slug: "pre-departure", title: "Pre-Departure Support", description: "Practical preparation for travel, arrival and the transition to student life.", icon: Plane },
] as const;
