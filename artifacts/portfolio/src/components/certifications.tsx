import { motion } from "framer-motion";

const CERTS = [
  { title: "Learning the OWASP Top 10", issuer: "LinkedIn Learning", year: "2026" },
  { title: "The OWASP API Security Top 10: An Overview", issuer: "LinkedIn Learning", year: "2026" },
  { title: "Penetration Testing and Ethical Hacking", issuer: "LinkedIn Learning", year: "2026" },
  { title: "Ethical Hacking & Cyber Security with CTF", issuer: "IIT (ISM) Dhanbad — ChES", year: "2024" },
  { title: "Cybersecurity Fundamentals", issuer: "IBM", year: "2025" },
  { title: "Mastercard Cybersecurity Job Simulation", issuer: "Forage", year: "2025" },
  { title: "Deloitte Australia — Cyber Job Simulation", issuer: "Forage", year: "2025" },
  { title: "Tata Cybersecurity Analyst Job Simulation", issuer: "Forage", year: "2025" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2025" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="mono text-primary text-lg mr-4">// 05</span>
            Certifications
          </h2>
        </motion.div>

        <div className="border border-white/8">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-3 border-b border-white/8 bg-white/2">
            <span className="mono text-xs text-white/30 uppercase tracking-widest">Certificate</span>
            <span className="mono text-xs text-white/30 uppercase tracking-widest hidden sm:block">Issuer</span>
            <span className="mono text-xs text-white/30 uppercase tracking-widest">Year</span>
          </div>

          {CERTS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="grid grid-cols-[1fr_auto_auto] gap-4 items-center px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors group"
              data-testid={`row-cert-${idx}`}
            >
              <p className="text-white/80 text-sm font-medium leading-snug group-hover:text-white transition-colors">
                {cert.title}
              </p>
              <p className="mono text-xs text-white/40 hidden sm:block shrink-0 group-hover:text-primary transition-colors">
                {cert.issuer}
              </p>
              <p className="mono text-xs text-white/30 shrink-0">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
