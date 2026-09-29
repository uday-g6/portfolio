import { useRef, useState } from "react";
import { TOOLKIT } from "./content";
import { Reveal, SectionHeading } from "./primitives";

/** Accessible tabs (WAI-ARIA pattern): arrow keys / Home / End move between tools. */
export default function Toolkit() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const tool = TOOLKIT[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const last = TOOLKIT.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown" ? (i === last ? 0 : i + 1)
      : e.key === "ArrowLeft" || e.key === "ArrowUp" ? (i === 0 ? last : i - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="toolkit" aria-labelledby="toolkit-title" className="section on-navy grid-bg">
      <div className="container-x">
        <SectionHeading
          id="toolkit-title"
          eyebrow="Security toolkit"
          title="The tools behind each assessment"
          lead="Select a tool to see how it fits into my testing."
        />

        <Reveal className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div role="tablist" aria-label="Security tools" aria-orientation="horizontal" className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {TOOLKIT.map((t, i) => {
              const selected = i === active;
              return (
                <button
                  key={t.name}
                  ref={(el) => { tabs.current[i] = el; }}
                  role="tab"
                  id={`tool-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="tool-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKey(e, i)}
                  className={`flex min-h-[4.25rem] flex-col items-start justify-center rounded-xl border px-4 py-3 text-left transition-colors ${
                    selected
                      ? "border-[var(--signal)] bg-[var(--navy-3)]"
                      : "border-[var(--navy-line)] bg-[var(--navy-2)] hover:border-[#3A4A66] hover:bg-[var(--navy-3)]"
                  }`}
                >
                  <span className={`font-mono text-[0.95rem] font-semibold ${selected ? "text-[var(--signal)]" : "text-[var(--on-navy)]"}`}>{t.name}</span>
                  <span className="mt-0.5 text-xs text-[var(--on-navy-3)]">{t.group}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="tool-panel"
            aria-labelledby={`tool-tab-${active}`}
            tabIndex={0}
            className="terminal order-first flex min-h-[13rem] flex-col p-6 md:p-8 lg:order-none lg:min-h-[15rem]"
          >
            <p className="text-xs text-[var(--on-navy-3)]">
              <span className="text-[var(--signal)]">$</span> whatis {tool.name.toLowerCase().replace(/\s+/g, "-")}
            </p>
            <h3 className="mt-4 font-sans text-2xl font-semibold text-[var(--on-navy)]">{tool.name}</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-[var(--signal)]">{tool.group}</p>
            <p className="mt-5 font-sans text-[1rem] leading-relaxed text-[var(--on-navy-2)]">{tool.use}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
