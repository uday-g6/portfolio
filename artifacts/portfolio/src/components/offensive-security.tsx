import { motion } from "framer-motion";

const TOPICS = [
  "Web Application Penetration Testing",
  "API Security Testing",
  "Network Pentesting",
  "Linux Privilege Escalation",
  "Windows Privilege Escalation",
  "Active Directory",
  "Authentication & Authorization Testing",
  "Vulnerability Discovery & Validation",
  "Burp Suite",
  "Nmap",
  "OWASP ZAP",
  "Nuclei",
];

export default function OffensiveSecurity() {
  return (
    <section id="offensive-security" className="bg-[#F8F5EF] relative overflow-hidden">
      <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[#111]/[0.04] leading-none select-none pointer-events-none" aria-hidden="true">07</div>

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#B8892F] font-medium">07 — Offensive Security</span>
          <div className="h-px w-16 bg-[#B8892F]/30" />
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-4xl md:text-5xl font-light text-[#111] leading-[1.1] tracking-tight">
              Offensive Security
            </h3>
            <p className="text-[#111]/75 text-base leading-[1.9] max-w-xl">
              My offensive security approach focuses on understanding attack surfaces, identifying weaknesses, validating exploitability in authorized environments, and communicating risk clearly.
            </p>
            <div className="border border-[#B8892F]/30 bg-[#B8892F]/8 px-5 py-4 self-start">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#B8892F] font-medium">
                All offensive security activities are performed only in authorized environments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {TOPICS.map((topic, idx) => (
              <div
                key={topic}
                className={`group border border-black/8 bg-white/40 px-4 py-4 transition-colors ${idx % 2 === 0 ? "lg:translate-y-2" : ""}`}
              >
                <p className="text-sm text-[#111]/75 leading-relaxed">{topic}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
