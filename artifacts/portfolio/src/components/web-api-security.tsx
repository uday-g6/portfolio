import { motion } from "framer-motion";

const TOPICS = [
  "Web Application Penetration Testing",
  "REST API Security Testing",
  "Authentication & Authorization Testing",
  "BOLA / IDOR & Broken Access Control",
  "Injection & Session Security",
  "PoC-Based Vulnerability Validation",
  "Burp Suite",
  "OWASP ZAP & Postman",
  "OWASP Top 10 & API Security Top 10",
  "CVSS & CWE Reporting",
];

export default function WebApiSecurity() {
  return (
    <section id="web-api-security" className="relative overflow-hidden bg-[var(--bg-paper-darker)]">
      <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[var(--text-ink)]/[0.04] leading-none select-none pointer-events-none" aria-hidden="true">05</div>

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <p className="text-label text-[var(--accent-gold)]">05 — API &amp; Web Application Security</p>
          <div className="h-px w-16 bg-[var(--accent-gold-border)]" />
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.1] tracking-tight text-[var(--text-ink)]">
              API &amp; Web Application Security
            </h2>
            <p className="text-body text-[var(--text-ink-muted)] max-w-xl">
              Alongside Android work, I intercept the API traffic of banking applications with Burp Suite and Postman to test authentication and authorization, BOLA/IDOR, insecure data handling, injection and session handling, and run web application VAPT with Burp Suite and OWASP ZAP against OWASP Top 10 risk areas. Every finding is validated with reproducible PoC steps and reported with CVSS and CWE.
            </p>
            <div className="border border-[var(--accent-gold-border)] bg-[var(--bg-paper)] px-5 py-4 self-start">
              <p className="text-label text-[var(--accent-gold)] font-medium">
                All security testing is performed only in authorized environments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-3 items-stretch"
          >
            {TOPICS.map((topic) => (
              <div
                key={topic}
                className="group h-full border border-[var(--border-thin)] bg-[var(--bg-card)] px-4 py-4 transition-colors card-hover"
              >
                <p className="text-body text-[var(--text-ink-muted)] leading-relaxed">{topic}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}