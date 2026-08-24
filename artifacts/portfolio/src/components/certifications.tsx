import { Section } from "./section";

const CERTS: { issuer: string; name: string }[] = [
  { issuer: "Fortinet", name: "Cybersecurity and Cloud Fundamentals 1.0" },
  { issuer: "OPSWAT", name: "Introduction to Critical Infrastructure Protection" },
  { issuer: "LinkedIn", name: "Learning the OWASP Top 10" },
  { issuer: "LinkedIn", name: "The OWASP API Security Top 10: An Overview" },
  { issuer: "LinkedIn", name: "Penetration Testing and Ethical Hacking" },
  { issuer: "LinkedIn", name: "Cybersecurity Awareness: Cybersecurity Terminology" },
  { issuer: "IBM", name: "Cybersecurity Fundamentals" },
  { issuer: "Cisco Networking Academy", name: "Introduction to Cybersecurity" },
  { issuer: "Forage", name: "Mastercard Cybersecurity Job Simulation" },
  { issuer: "Forage", name: "Deloitte Australia Cyber Job Simulation" },
  { issuer: "Forage", name: "Tata Cybersecurity Analyst Job Simulation" },
  { issuer: "ChES IIT (ISM) Dhanbad", name: "Ethical Hacking & Cyber Security with CTF" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      index="07 / 09"
      className="py-20"
    >
      <div className="mt-10">
        <h2 className="reveal font-display text-3xl font-700 leading-tight tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Credentials &{" "}
          <span className="text-[var(--color-teal)]">continuous learning.</span>
        </h2>

        <div className="mt-8 border-t border-[var(--color-line)]">
          {CERTS.map((c, i) => (
            <div
              key={i}
              className="reveal grid grid-cols-1 gap-2 border-b border-[var(--color-line)] py-4 sm:grid-cols-12 sm:gap-4"
            >
              <div className="flex items-center gap-3 sm:col-span-1">
                <span className="font-mono text-[0.7rem] text-[var(--color-ink-faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="sm:col-span-4">
                <span className="chip chip-teal">{c.issuer}</span>
              </div>
              <div className="sm:col-span-7">
                <p className="text-[0.95rem] leading-snug text-[var(--color-ink-soft)]">
                  {c.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
