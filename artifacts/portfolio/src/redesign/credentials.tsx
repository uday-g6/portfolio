import { Award, GraduationCap } from "lucide-react";
import { CERTIFICATIONS, EDUCATION } from "./content";
import { Reveal, SectionHeading } from "./primitives";

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="section">
      <div className="container-x">
        <SectionHeading id="certifications-title" eyebrow="Certifications" title="Certifications & training" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((c, i) => (
            <li key={c.title} className="h-full">
              <Reveal delay={i * 0.03} className="h-full">
                <article className="card card-interactive flex h-full flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--teal-tint)] text-[var(--teal-strong)]">
                      <Award size={18} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-[var(--ink-3)]">{c.year}</span>
                  </div>
                  <h3 className="mt-4 text-[1rem] font-semibold leading-snug text-[var(--ink)]">{c.title}</h3>
                  <p className="mt-auto pt-3 text-sm text-[var(--ink-3)]">{c.issuer}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section !pt-0">
      <div className="container-x">
        <Reveal>
          <article className="card flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--navy)] text-[var(--signal)]">
                <GraduationCap size={24} aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow">Education</p>
                <h2 id="education-title" className="mt-2 text-xl font-semibold leading-snug text-[var(--ink)]">
                  {EDUCATION.degree}
                </h2>
                <p className="mt-1 text-[var(--ink-2)]">{EDUCATION.institution}</p>
                <p className="text-sm text-[var(--ink-3)]">{EDUCATION.university}</p>
              </div>
            </div>
            <dl className="flex gap-3 md:flex-col md:items-end">
              <div className="chip chip-mono">
                <dt className="sr-only">Period</dt>
                <dd>{EDUCATION.period}</dd>
              </div>
              <div className="chip chip-mono chip-key">
                <dt className="sr-only">Grade</dt>
                <dd>{EDUCATION.cgpa}</dd>
              </div>
            </dl>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
