import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certifications() {
  const certifications = [
    { title: "Learning the OWASP Top 10", issuer: "LinkedIn Learning" },
    { title: "OWASP API Security Top 10", issuer: "LinkedIn Learning" },
    { title: "Penetration Testing and Ethical Hacking", issuer: "LinkedIn Learning" },
    { title: "Ethical Hacking & Cyber Security with CTF", issuer: "IIT (ISM) Dhanbad" },
    { title: "Cybersecurity Fundamentals", issuer: "IBM" },
    { title: "Mastercard Cybersecurity Simulation", issuer: "Forage" },
    { title: "Deloitte Cybersecurity Simulation", issuer: "Forage" },
    { title: "Tata Cybersecurity Simulation", issuer: "Forage" },
    { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy" }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/40 transition-colors flex items-start gap-4 group"
            >
              <div className="mt-1 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1 leading-snug">{cert.title}</h3>
                <p className="text-sm text-primary/80">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
