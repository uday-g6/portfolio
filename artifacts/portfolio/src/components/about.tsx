import { motion } from "framer-motion";

export default function About() {
  const domains = [
    "Banking & Financial Apps",
    "Android Security",
    "REST API Testing",
    "OWASP Standards",
    "CVSS Reporting",
    "Remediation Validation"
  ];

  return (
    <section id="about" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            <span className="mono text-primary text-lg mr-4">// 01</span>
            About
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            <p className="text-2xl md:text-3xl font-medium text-white leading-tight">
              Security Test Engineer with 1+ year of experience.
            </p>
            <p className="text-2xl md:text-3xl font-medium text-white/80 leading-tight">
              Experienced in Android APK reverse engineering, static & dynamic analysis, and Frida-based runtime instrumentation.
            </p>
            <p className="text-2xl md:text-3xl font-medium text-white/60 leading-tight">
              Proficient in Burp Suite-driven web application and API penetration testing aligned with OWASP Top 10 standards.
            </p>
            <p className="text-2xl md:text-3xl font-medium text-primary leading-tight">
              Promoted from intern to full-time within six months based on performance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-12"
          >
            <div>
              <h3 className="mono text-sm text-primary mb-4 border-b border-primary/30 pb-2">Domain Expertise</h3>
              <ul className="flex flex-col gap-3">
                {domains.map((d, i) => (
                  <li key={i} className="text-white/80 text-base">{d}</li>
                ))}
              </ul>
            </div>

            <div className="border border-white/10 p-6">
              <h3 className="mono text-sm text-primary mb-4">Education</h3>
              <p className="text-white font-medium mb-1">B.E. Computer Science</p>
              <p className="text-white/60 text-sm mb-4">Maharaja Institute of Technology</p>
              <div className="flex justify-between items-center text-sm mono text-white/40">
                <span>2021 – 2025</span>
                <span>CGPA 7.2 / 10</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
