import { Section } from "./section";

const GROUPS: { title: string; note: string; items: string[] }[] = [
  {
    title: "Application Security",
    note: "web · api · methodology",
    items: [
      "Application Security",
      "Web VAPT",
      "API Security",
      "OWASP Top 10",
      "OWASP API Security Top 10",
      "Authentication",
      "Authorization",
      "BOLA / IDOR",
      "Injection Testing",
      "Session Security",
    ],
  },
  {
    title: "Mobile Security",
    note: "android · runtime · reverse eng",
    items: [
      "Android Security",
      "Mobile Application Security",
      "APK Reverse Engineering",
      "MobSF",
      "JADX",
      "Apktool",
      "Frida",
      "SSL Pinning Testing",
      "Root Detection Testing",
      "Runtime Security",
    ],
  },
  {
    title: "Security Tools",
    note: "interception · scanning · analysis",
    items: [
      "Burp Suite",
      "OWASP ZAP",
      "Postman",
      "Nmap",
      "Nuclei",
      "Wireshark",
      "Android Studio",
    ],
  },
  {
    title: "Programming / Automation",
    note: "known + actively developing",
    items: ["Python", "Bash", "PowerShell", "Java", "Kotlin", "JavaScript"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" index="05 / 09" className="py-20">
      <div className="mt-10">
        <h2 className="reveal font-display text-3xl font-700 leading-tight tracking-tight text-[var(--color-ink)] sm:text-4xl">
          A technical vocabulary,{" "}
          <span className="text-[var(--color-teal)]">not a skill bar.</span>
        </h2>
        <p className="reveal mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-muted)]">
          The tooling and concepts I actually use day to day across application,
          mobile, and offensive security work.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
          {GROUPS.map((g) => (
            <div
              key={g.title}
              className="reveal bg-[var(--color-paper-soft)] p-6 sm:p-7"
            >
              <div className="flex items-baseline justify-between gap-3 border-b border-[var(--color-line)] pb-3">
                <h3 className="font-display text-lg font-600 text-[var(--color-ink)]">
                  {g.title}
                </h3>
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[var(--color-ink-faint)]">
                  {g.note}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li key={item}>
                    <span className="chip">
                      <span className="mr-1.5 text-[var(--color-coral)]">
                        ›
                      </span>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
