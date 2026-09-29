import { ShieldCheck } from "lucide-react";
import { FOCUS_AREAS, SUMMARY, TRANSITION } from "./content";
import { Reveal, SectionHeading } from "./primitives";

export default function Summary() {
  return (
    <section id="summary" aria-labelledby="summary-title" className="section">
      <div className="container-x">
        <SectionHeading id="summary-title" eyebrow="Professional summary" title="Application security, tested hands-on." />
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-[var(--ink-2)]">
            {SUMMARY.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="border-l-2 border-[var(--teal)] pl-4 text-[var(--ink)]">{TRANSITION}</p>
          </Reveal>

          <Reveal delay={0.08} className="card p-6 md:p-7 self-start">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--teal-strong)]">Career focus</h3>
            <ul className="mt-4 flex flex-col">
              {FOCUS_AREAS.map((f) => (
                <li key={f} className="flex items-center gap-3 border-b border-[var(--border)] py-3 last:border-0 text-[var(--ink)]">
                  <ShieldCheck size={18} className="shrink-0 text-[var(--teal)]" aria-hidden="true" />
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
