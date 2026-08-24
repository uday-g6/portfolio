import { Section } from "./section";

type Role = {
  title: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  promotion?: string;
  highlights: string[];
};

const ROLES: Role[] = [
  {
    title: "Security Test Engineer",
    company: "WizzyBox Private Limited",
    period: "Jan 2026 – Present",
    location: "Bengaluru, Karnataka, India",
    current: true,
    promotion: "Security Test Engineer Intern → Security Test Engineer",
    highlights: [
      "80+ production Android application assessments",
      "40+ applications tested using custom Frida instrumentation",
      "APK reverse engineering using JADX and Apktool",
      "Android security-control testing",
      "Web application VAPT",
      "API security testing",
      "Burp Suite / OWASP ZAP / Postman",
      "OWASP Top 10 testing",
      "50+ CVSS-rated vulnerability reports",
      "7+ development teams supported through remediation and retesting",
    ],
  },
  {
    title: "Security Test Engineer Intern",
    company: "WizzyBox Private Limited",
    period: "Apr 2025 – Aug 2025",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Android application security testing",
      "MobSF",
      "JADX",
      "Apktool",
      "Burp Suite",
      "Static analysis",
      "Security configuration review",
      "Android component testing",
      "Vulnerability documentation",
      "Remediation validation",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" index="02 / 09" className="py-20">
      <div className="mt-10">
        <h2 className="reveal font-display text-3xl font-700 leading-tight tracking-tight text-[var(--color-ink)] sm:text-4xl">
          A timeline of testing, breaking, and{" "}
          <span className="text-[var(--color-teal)]">helping fix.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-0">
          {ROLES.map((role, i) => (
            <article
              key={i}
              className="reveal relative grid grid-cols-1 gap-6 border-t border-[var(--color-line)] py-10 md:grid-cols-12 md:gap-8"
            >
              {/* Left rail: meta + node */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 border ${
                      role.current
                        ? "border-[var(--color-lime-deep)] bg-[var(--color-lime)]"
                        : "border-[var(--color-ink-muted)] bg-transparent"
                    }`}
                    aria-hidden
                  />
                  <span className="font-mono text-[0.7rem] uppercase tracking-wider text-[var(--color-ink-muted)]">
                    {role.period}
                  </span>
                </div>
                {role.current && (
                  <span className="mt-3 inline-flex chip chip-lime">
                    Current
                  </span>
                )}
              </div>

              {/* Middle: title / company */}
              <div className="md:col-span-4">
                <h3 className="font-display text-xl font-600 leading-tight text-[var(--color-ink)] sm:text-2xl">
                  {role.title}
                </h3>
                <p className="mt-1.5 font-mono text-sm text-[var(--color-teal)]">
                  {role.company}
                </p>
                <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-wider text-[var(--color-ink-faint)]">
                  {role.location}
                </p>

                {role.promotion && (
                  <div className="mt-4 border-l-2 border-[var(--color-lime-deep)] pl-3">
                    <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
                      Promotion
                    </p>
                    <p className="mt-0.5 text-sm font-500 text-[var(--color-ink-soft)]">
                      {role.promotion}
                    </p>
                  </div>
                )}
              </div>

              {/* Right: highlights */}
              <div className="md:col-span-4">
                <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
                  Focus areas
                </p>
                <ul className="space-y-1.5">
                  {role.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-[0.88rem] leading-snug text-[var(--color-ink-soft)]"
                    >
                      <span className="mt-1.5 h-px w-3 flex-shrink-0 bg-[var(--color-teal)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
