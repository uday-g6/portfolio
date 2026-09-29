import { PROCESS } from "./content";
import { Reveal, SectionHeading } from "./primitives";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section on-navy">
      <div className="container-x">
        <SectionHeading
          id="process-title"
          eyebrow="Security testing process"
          title="From reconnaissance to verified fix"
          lead="The sequence every assessment follows, end to end."
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <li key={step.title} className="h-full">
              <Reveal delay={i * 0.04} className="h-full">
                <div className="panel-navy group relative flex h-full flex-col p-5 transition-colors hover:border-[#3A4A66]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[var(--signal)]/40 font-mono text-sm font-semibold text-[var(--signal)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[1.05rem] font-semibold leading-tight text-[var(--on-navy)]">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-[var(--on-navy-2)]">{step.detail}</p>
                  {/* connector to the next step (desktop rows) */}
                  {i % 4 !== 3 && i !== PROCESS.length - 1 && (
                    <span aria-hidden="true" className="absolute -right-3 top-1/2 hidden h-px w-2 bg-[var(--signal)]/50 lg:block" />
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
