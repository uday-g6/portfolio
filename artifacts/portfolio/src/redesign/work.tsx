import { Check } from "lucide-react";
import { WORK } from "./content";
import { Reveal, SectionHeading } from "./primitives";

export default function Work() {
  const [featured, ...rest] = WORK;
  return (
    <section id="work" aria-labelledby="work-title" className="section bg-[var(--bg-alt)]">
      <div className="container-x">
        <SectionHeading
          id="work-title"
          eyebrow="Assessment work & projects"
          title="Security testing case studies"
          lead="Scope, tools and coverage for each piece of work."
        />

        <Reveal>
          <CaseCard item={featured} wide />
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((w, i) => (
            <Reveal key={w.title} delay={0.06 * (i + 1)} className="h-full">
              <CaseCard item={w} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ item, wide = false }: { item: (typeof WORK)[number]; wide?: boolean }) {
  return (
    <article className="card card-interactive flex h-full flex-col overflow-hidden">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--card-hover)] px-6 py-4 md:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--teal-strong)]">{item.type}</p>
        <p className="font-mono text-xs text-[var(--ink-3)]">
          {[item.context, item.period].filter(Boolean).join(" · ")}
        </p>
      </header>

      <div className={`flex flex-1 flex-col gap-6 p-6 md:p-8 ${wide ? "lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-10" : ""}`}>
        <div className="flex flex-col gap-4">
          <h3 className={`${wide ? "text-2xl md:text-[1.75rem]" : "text-xl"} font-semibold leading-snug tracking-tight text-[var(--ink)]`}>{item.title}</h3>
          <div className="flex flex-col gap-3 text-[0.975rem] leading-relaxed text-[var(--ink-2)]">
            {item.description.map((d) => (
              <p key={d.slice(0, 24)}>{d}</p>
            ))}
          </div>
          {item.tools.length > 0 && (
            <div className="mt-auto">
              <h4 className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--ink-3)]">Tools</h4>
              <ul className="flex flex-wrap gap-2">
                {item.tools.map((t) => (
                  <li key={t} className="chip chip-mono chip-key">{t}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <h4 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--ink-3)]">{item.areasLabel}</h4>
          <ul className={`grid gap-x-6 gap-y-2.5 ${wide ? "sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" : ""}`}>
            {item.areas.map((a) => (
              <li key={a} className="flex gap-2.5 text-[0.95rem] text-[var(--ink)]">
                <Check size={17} className="mt-[0.2rem] shrink-0 text-[var(--teal)]" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
