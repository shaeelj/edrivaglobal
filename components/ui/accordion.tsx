"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export function Accordion({ items }: { items: readonly (readonly [string, string])[] }) {
  const [active, setActive] = useState<number | null>(0);
  return <div className="accordion">{items.map(([question, answer], index) => <div className="accordion-item" key={question}><button onClick={() => setActive(active === index ? null : index)} aria-expanded={active === index}><span>{question}</span><Plus className={active === index ? "rotate" : ""} /></button>{active === index && <div className="accordion-panel"><p>{answer}</p></div>}</div>)}</div>;
}
