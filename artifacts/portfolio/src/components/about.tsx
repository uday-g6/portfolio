import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/8">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#C4973A] font-medium">01 / About</span>
        <div className="h-px flex-1 bg-[#C4973A]/20" />
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Large serif statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          <h2 className="serif font-light text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.02em] text-[#111]">
            Security engineer with a hacker's instinct and an analyst's discipline.
          </h2>
          <p className="text-[#111]/55 text-base md:text-lg leading-[1.85] font-light max-w-xl">
            I specialise in Android APK reverse engineering, static and dynamic analysis, and Frida-based runtime instrumentation — with a focus on banking and financial applications. On the web side, I run OWASP Top 10-aligned penetration testing and API security assessments using Burp Suite.
          </p>
          <p className="text-[#111]/55 text-base leading-[1.85] font-light max-w-xl">
            Promoted from intern to full-time Security Test Engineer within six months based on the quality and depth of findings.
          </p>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-12"
        >
          {/* Domain expertise */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C4973A] font-medium mb-5">
              Domain Expertise
            </p>
            <ul className="flex flex-col">
              {[
                "Android APK Security Testing",
                "Mobile Runtime Instrumentation",
                "REST API Penetration Testing",
                "OWASP Top 10 / Mobile Top 10",
                "Banking & Financial Applications",
                "CVSS Reporting & Remediation",
              ].map((item, i) => (
                <li
                  key={i}
                  className="py-3.5 border-b border-black/6 text-sm text-[#111]/70 font-light tracking-wide flex items-center justify-between group"
                >
                  {item}
                  <span className="text-[#C4973A] opacity-0 group-hover:opacity-100 transition-opacity text-xs">—</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="bg-[#F5F0E8] p-7">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C4973A] font-medium mb-4">
              Education
            </p>
            <p className="serif text-xl font-light text-[#111] leading-snug mb-1">
              B.E. Computer Science
            </p>
            <p className="text-sm text-[#111]/50 font-light mb-1">
              Maharaja Institute of Technology, Mysuru
            </p>
            <p className="text-sm text-[#111]/40 font-light mb-4">
              Visvesvaraya Technological University
            </p>
            <div className="flex justify-between items-center text-xs text-[#111]/40 tracking-widest uppercase">
              <span>2021 – 2025</span>
              <span className="text-[#C4973A]">CGPA 7.2 / 10</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
