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
    <section id="certifications" className="bg-[#F8F5EF] relative overflow-hidden">
      <div className="absolute left-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[#111]/[0.04] leading-none select-none pointer-events-none" aria-hidden="true">05</div>

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#B8892F] font-medium">05 — Certifications</span>
          <div className="h-px w-16 bg-[#B8892F]/30" />
        </motion.div>

        <div className="border-t border-black/10">
          <div className="grid grid-cols-[1fr_auto_auto] gap-6 py-3 border-b border-black/8">
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#111]/45 font-medium">Certificate</span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#111]/45 font-medium hidden sm:block w-44 text-right">Issuer</span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#111]/45 font-medium w-10 text-right">Year</span>
          </div>

          {CERTS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group grid grid-cols-[1fr_auto_auto] gap-6 items-center py-5 border-b border-black/6 last:border-0 hover:bg-[#EDE6D6] -mx-4 px-4 transition-colors"
            >
              <p className="text-sm text-[#111]/85 font-medium group-hover:text-[#111] transition-colors leading-snug">{cert.title}</p>
              <p className="text-xs text-[#111]/55 hidden sm:block w-44 text-right group-hover:text-[#B8892F] transition-colors">{cert.issuer}</p>
              <p className="text-xs text-[#111]/55 w-10 text-right">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
