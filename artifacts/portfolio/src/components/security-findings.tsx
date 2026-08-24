import { Section } from "./section";

const PIPELINE = [
  "DISCOVER",
  "VALIDATE",
  "EVIDENCE",
  "CVSS",
  "CWE",
  "REMEDIATE",
  "RETEST",
  "CLOSE",
];

export function SecurityFindings() {
  return (
    <Section
      id="findings"
      eyebrow="Security Findings"
      index="06 / 09"
      className="py-20"
    >
      <div className="mt-10">
        <h2 className="reveal font-display text-3xl font-700 leading-tight tracking-tight text-[var(--color-ink)] sm:text-4xl">
          From Finding to{" "}
          <span className="text-[var(--color-teal)]">Fix.</span>
        </h2>

        {/* Pipeline */}
        <div className="reveal mt-10 surface-teal grid-texture-teal overflow-x-auto p-5 sm:p-7">
          <ol className="flex min-w-max items-center gap-2">
            {PIPELINE.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="flex flex-col items-start gap-1">
                  <span className="font-mono text-[0.58rem] tracking-widest text-[var(--color-lime)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`border px-2.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider ${
                      i === PIPELINE.length - 1
                        ? "border-[var(--color-lime)] bg-[var(--color-lime)] text-[var(--color-ink)]"
                        : "border-[var(--color-teal-line)] text-[var(--color-paper)]"
                    }`}
                  >
                    {step}
                  </span>
                </span>
                {i < PIPELINE.length - 1 && (
                  <span className="font-mono text-[var(--color-paper)]/40">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
          <p className="reveal text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)] md:col-span-8">
            I have authored 50+ CVSS-rated vulnerability reports containing
            technical evidence, proof-of-concept steps, impact analysis, CWE
            classification, severity assessment, and remediation guidance.
          </p>
          <div className="reveal md:col-span-4">
            <div className="surface p-5">
              <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
                Confidentiality
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                No confidential client vulnerabilities, screenshots, or exploit
                targets are shown here. All examples are sanitized and performed
                only against authorized environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
