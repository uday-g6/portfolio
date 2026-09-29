import { Smartphone, Network, Globe, ClipboardCheck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { EXPERTISE } from "./content";
import { Reveal, SectionHeading } from "./primitives";

const ICONS: Record<string, LucideIcon> = {
  mobile: Smartphone,
  api: Network,
  web: Globe,
  testing: ClipboardCheck,
  tools: Wrench,
};

export default function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="section">
      <div className="container-x">
        <SectionHeading
          id="expertise-title"
          eyebrow="Security expertise"
          title="Where I focus"
          lead="Grouped from the technical skills on my resume. Highlighted items are the ones I use most."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {EXPERTISE.map((c, i) => {
            const Icon = ICONS[c.id];
            // First two cards span wider on large screens: 3+3, then 2+2+2.
            const span = i < 2 ? "lg:col-span-3" : "lg:col-span-2";
            return (
              <Reveal key={c.id} delay={i * 0.04} className={`${span} ${i === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}>
                <article className="card card-interactive h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--teal-tint)] text-[var(--teal-strong)]">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-[var(--ink)]">{c.title}</h3>
                  </div>
                  <p className="mt-3 text-[0.95rem] text-[var(--ink-3)]">{c.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {c.key.map((s) => (
                      <li key={s} className="chip chip-key">{s}</li>
                    ))}
                    {c.skills.map((s) => (
                      <li key={s} className="chip">{s}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
