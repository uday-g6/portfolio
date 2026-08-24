import { Section } from "./section";

const LEARNING = [
  "Offensive Security",
  "Web & API Pentesting",
  "Active Directory",
  "Windows Security",
  "Linux Privilege Escalation",
  "Network Pentesting",
  "Python for Security Automation",
  "PowerShell",
  "Exploit Development",
  "Advanced Android Security",
];

export function CurrentlyLearning() {
  return (
    <Section
      id="learning"
      eyebrow="Currently Learning"
      index="08 / 09"
      className="py-20"
    >
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 className="reveal font-display text-3xl font-700 leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Currently
            <br />
            <span className="text-[var(--color-teal)]">Leveling Up.</span>
          </h2>
          <p className="reveal mt-6 max-w-md text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
            I'm expanding from application and mobile security into broader
            offensive security, focusing on professional penetration testing,
            Active Directory, privilege escalation, security automation, and
            advanced exploitation.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="reveal grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
            {LEARNING.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-[var(--color-paper-soft)] px-4 py-3.5"
              >
                <span className="font-mono text-[0.62rem] text-[var(--color-ink-faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-1.5 w-1.5 flex-shrink-0 bg-[var(--color-lime-deep)]" />
                <span className="text-[0.9rem] text-[var(--color-ink-soft)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
