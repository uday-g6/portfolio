import { useState } from "react";
import { Section } from "./section";

const PROGRESSION = [
  "RECON",
  "ENUMERATION",
  "DISCOVERY",
  "EXPLOITATION",
  "PRIVILEGE ESCALATION",
  "LATERAL MOVEMENT",
  "IMPACT",
  "REPORTING",
];

const AREAS = [
  "Web Application Pentesting",
  "API Pentesting",
  "Network Pentesting",
  "Linux Privilege Escalation",
  "Windows Security",
  "Active Directory",
  "Authentication Attacks",
  "Authorization Testing",
  "Vulnerability Research",
  "Security Automation",
];

export function OffensiveSecurity() {
  const [active, setActive] = useState(0);

  return (
    <Section
      id="offensive"
      eyebrow="Offensive Security"
      index="04 / 09"
      className="py-20"
    >
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 className="reveal font-display text-3xl font-700 leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-[2.75rem]">
            Offensive Security
            <br />
            <span className="text-[var(--color-teal)]">Workbench</span>
          </h2>
          <p className="reveal mt-6 max-w-md text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
            My offensive security focus is moving beyond individual
            vulnerabilities toward understanding complete attack paths — from
            reconnaissance and enumeration through exploitation, privilege
            escalation, and impact validation.
          </p>

          <div className="reveal mt-8 border-l-2 border-[var(--color-coral)] pl-4">
            <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
              // authorized scope only
            </p>
            <p className="mt-1 font-display text-base font-600 text-[var(--color-ink)]">
              All offensive security activities are performed only in authorized
              environments.
            </p>
          </div>
        </div>

        {/* Progression */}
        <div className="lg:col-span-7">
          <p className="reveal mb-4 font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
            Attack path progression
          </p>
          <div className="reveal surface-teal grid-texture-teal p-5 sm:p-6">
            <ol className="flex flex-col gap-1.5">
              {PROGRESSION.map((step, i) => {
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <li key={step}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={`flex w-full items-center gap-3 border px-3 py-2 text-left font-mono text-[0.72rem] uppercase tracking-wider transition-colors ${
                        isActive
                          ? "border-[var(--color-lime)] bg-[var(--color-lime)] text-[var(--color-ink)]"
                          : isDone
                          ? "border-[var(--color-teal-line)] bg-transparent text-[var(--color-lime)]"
                          : "border-transparent bg-transparent text-[var(--color-paper)]/70 hover:text-[var(--color-paper)]"
                      }`}
                    >
                      <span className="w-6 text-right">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[var(--color-paper)]/40">
                        {isDone ? "✓" : isActive ? "▸" : "·"}
                      </span>
                      <span className="font-500">{step}</span>
                      {i < PROGRESSION.length - 1 && (
                        <span className="ml-auto text-[var(--color-paper)]/30">
                          →
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Technical areas */}
          <div className="reveal mt-6">
            <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
              Technical areas
            </p>
            <div className="grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
              {AREAS.map((a) => (
                <div
                  key={a}
                  className="flex items-center gap-2 bg-[var(--color-paper-soft)] px-3.5 py-2.5"
                >
                  <span className="h-1.5 w-1.5 bg-[var(--color-coral)]" aria-hidden />
                  <span className="text-[0.85rem] text-[var(--color-ink-soft)]">
                    {a}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
