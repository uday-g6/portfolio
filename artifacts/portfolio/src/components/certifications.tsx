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
    <section id="certifications" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#C4973A] font-medium">05 / Certifications</span>
        <div className="h-px flex-1 bg-[#C4973A]/20" />
      </motion.div>

      <div>
        {/* Header */}
        <div className="grid grid-cols-[1fr_auto_auto] gap-6 pb-3 border-b border-black/8 mb-0">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#111]/25 font-medium">Certificate</span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#111]/25 font-medium hidden sm:block w-40 text-right">Issuer</span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#111]/25 font-medium w-10 text-right">Year</span>
        </div>

        {CERTS.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            className="grid grid-cols-[1fr_auto_auto] gap-6 items-center py-5 border-b border-black/6 last:border-0 group hover:bg-[#F5F0E8] -mx-4 px-4 transition-colors"
          >
            <p className="text-sm text-[#111]/75 font-light group-hover:text-[#111] transition-colors leading-snug">
              {cert.title}
            </p>
            <p className="text-xs text-[#111]/35 font-light hidden sm:block w-40 text-right group-hover:text-[#C4973A] transition-colors">
              {cert.issuer}
            </p>
            <p className="text-xs text-[#111]/30 font-light w-10 text-right">{cert.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
