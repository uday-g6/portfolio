import { Section } from "./section";

const PARAGRAPHS = [
  "I'm a Security Engineer specializing in Application Security, Android & Mobile Security, API Security, Web Application Security, and VAPT.",
  "I'm passionate about understanding how applications work, thinking like an attacker, finding security weaknesses, and helping engineering teams build more secure products.",
  "My approach combines manual security testing, reverse engineering, static and dynamic analysis, runtime instrumentation, vulnerability validation, and clear technical reporting.",
  "I currently work as a Security Test Engineer at WizzyBox Private Limited, where I perform security assessments for banking and financial applications.",
  "I have assessed 80+ production Android applications, developed and used custom Frida instrumentation across 40+ applications, authored 50+ CVSS-rated vulnerability reports, and worked with 7+ development teams through vulnerability remediation, retesting, and closure.",
  "I believe effective application security is not just about finding vulnerabilities. It is about understanding root causes, communicating risk clearly, collaborating with developers, and helping build more secure products.",
];

export function About() {
  return (
    <Section id="about" eyebrow="About" index="01 / 09" className="py-20">
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 className="reveal font-display text-3xl font-700 leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-[2.75rem]">
            Security is a{" "}
            <span className="text-[var(--color-teal)]">problem-solving</span>{" "}
            discipline.
          </h2>

          <div className="reveal mt-8 surface-teal p-5">
            <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-lime)]">
              // positioning
            </p>
            <p className="mt-2 font-display text-lg font-500 leading-snug text-[var(--color-paper)]">
              Think like an attacker.
              <br />
              Communicate like an engineer.
              <br />
              Build like a defender.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="reveal mb-6 flex items-center gap-3">
            <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
              README.md
            </span>
            <span className="section-rule flex-1" />
          </div>
          <div className="space-y-4">
            {PARAGRAPHS.map((p, i) => (
              <p
                key={i}
                className="reveal text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)] sm:text-base"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
