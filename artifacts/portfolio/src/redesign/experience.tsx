import { Building2, Briefcase } from "lucide-react";
import { EXPERIENCE } from "./content";
import { Reveal, SectionHeading } from "./primitives";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section bg-[var(--bg-alt)]">
      <div className="container-x">
        <SectionHeading id="experience-title" eyebrow="Experience" title="Professional experience" />

        <ol className="relative flex flex-col gap-8 md:pl-10">
          {/* timeline rail */}
          <span aria-hidden="true" className="absolute left-[11px] top-2 bottom-2 hidden w-px bg-[var(--border-strong)] md:block" />
          {EXPERIENCE.map((job, idx) => (
            <li key={job.role} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-10 top-7 hidden h-[23px] w-[23px] place-items-center rounded-full border-2 md:grid ${
                  idx === 0 ? "border-[var(--teal)] bg-[var(--teal)]" : "border-[var(--border-strong)] bg-[var(--card)]"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${idx === 0 ? "bg-white" : "bg-[var(--border-strong)]"}`} />
              </span>

              <Reveal className="card p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[var(--ink)]">{job.role}</h3>
                    <p className="mt-2 flex items-center gap-2 text-[var(--ink)]">
                      <Building2 size={17} className="text-[var(--teal)]" aria-hidden="true" />
                      <span className="font-semibold">{job.employer}</span>
                      <span className="rounded-full bg-[var(--bg-alt)] px-2 py-0.5 font-mono text-[0.7rem] uppercase tracking-wide text-[var(--ink-3)]">Employer</span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end md:text-right">
                    <span className="chip chip-mono chip-key">{job.period}</span>
                    <span className="chip">{job.type}</span>
                    <span className="chip">{job.location}</span>
                  </div>
                </div>

                {job.client && (
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-[var(--teal-line)] bg-[var(--teal-tint)] px-4 py-3">
                    <Briefcase size={17} className="mt-0.5 shrink-0 text-[var(--teal-strong)]" aria-hidden="true" />
                    <p className="text-[0.95rem] text-[var(--ink)]">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wide text-[var(--teal-strong)]">Client</span>
                      <span className="mx-2 text-[var(--ink-3)]" aria-hidden="true">·</span>
                      {job.client}
                    </p>
                  </div>
                )}

                <div className={`mt-6 grid gap-6 ${job.groups.length > 1 ? "lg:grid-cols-2" : ""}`}>
                  {job.groups.map((g) => (
                    <div key={g.heading || "main"}>
                      {g.heading && (
                        <h4 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--teal-strong)]">{g.heading}</h4>
                      )}
                      <ul className="flex flex-col gap-3">
                        {g.bullets.map((b) => (
                          <li key={b.slice(0, 32)} className="flex gap-3 text-[0.975rem] leading-relaxed text-[var(--ink-2)]">
                            <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--teal)]" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-5" aria-label="Tools used">
                  {job.tools.map((t) => (
                    <li key={t} className="chip chip-mono">{t}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
