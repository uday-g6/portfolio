import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certifications() {
  const certifications = [
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

  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            <span className="text-primary mr-3">05.</span> Certifications
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card p-5 rounded-xl border border-white/5 hover:border-primary/40 transition-colors flex items-start gap-4 group"
              data-testid={`card-cert-${idx}`}
            >
              <div className="mt-0.5 p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-white mb-1 leading-snug text-sm">{cert.title}</h3>
                <p className="text-xs text-primary/80 font-medium">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
