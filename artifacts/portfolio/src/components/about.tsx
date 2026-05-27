import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background accent shape */}
      <div
        className="absolute top-0 right-0 w-[35vw] h-full bg-[#EDE6D6] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-8 right-[calc(35vw+2rem)] w-40 h-40 rounded-full border-2 border-[#B8892F]/20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#B8892F] font-medium">
            01 — About
          </span>
          <div className="h-px w-16 bg-[#B8892F]/30" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-0">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 lg:pr-16"
          >
            {/* Decorative large quote */}
            <div className="serif text-[8rem] leading-none text-[#B8892F]/15 font-bold mb-[-2rem] select-none">
              "
            </div>
            <h2 className="serif font-light text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-tight text-[#111] mb-8">
              Security engineer with a hacker's instinct and an analyst's discipline.
            </h2>
            <div className="flex flex-col gap-5 max-w-xl">
              <p className="text-[#111]/55 text-base leading-[1.9] font-light">
                I specialise in Android APK reverse engineering, static and dynamic analysis, and Frida-based runtime instrumentation — with a focus on banking and financial applications.
              </p>
              <p className="text-[#111]/55 text-base leading-[1.9] font-light">
                On the web side, I run OWASP Top 10-aligned penetration testing and API security assessments using Burp Suite.
              </p>
              {/* Callout pill */}
              <div className="mt-2 inline-flex items-center gap-3 border border-[#B8892F]/30 bg-[#B8892F]/5 px-5 py-3 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8892F]" />
                <span className="text-xs text-[#B8892F] tracking-wide font-medium">
                  Promoted intern → full-time in 6 months
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 lg:pl-12 flex flex-col gap-12"
          >
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8892F] font-medium mb-5">
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
                    className="group py-3.5 border-b border-black/6 text-sm text-[#111]/60 font-light flex items-center justify-between hover:text-[#111] transition-colors cursor-default"
                  >
                    <span>{item}</span>
                    <span className="text-[#B8892F] opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                      ✦
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#111] text-white p-8 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#B8892F]/40" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#B8892F]/40" />
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8892F] font-medium mb-4">
                Education
              </p>
              <p className="serif text-xl font-light leading-snug mb-1 text-white">
                B.E. Computer Science
              </p>
              <p className="text-sm text-white/50 font-light mb-0.5">
                Maharaja Institute of Technology, Mysuru
              </p>
              <p className="text-xs text-white/30 font-light mb-5">
                Visvesvaraya Technological University
              </p>
              <div className="flex justify-between items-center text-xs text-white/30 tracking-widest uppercase">
                <span>2021 – 2025</span>
                <span className="text-[#B8892F]">CGPA 7.2 / 10</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
