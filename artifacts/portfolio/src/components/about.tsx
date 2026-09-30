import { motion } from "framer-motion";
import TiltCard from "./tilt-card";
import { Fingerprint } from "lucide-react";
import SectionIcon from "./section-icon";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--bg-paper)]">
      <div className="absolute top-0 right-0 w-[35vw] lg:w-[28vw] h-full bg-[var(--bg-paper-dark)] pointer-events-none" aria-hidden="true" />
      <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-[var(--text-ink)]/[0.04] leading-none select-none pointer-events-none" aria-hidden="true">01</div>
      <SectionIcon icon={Fingerprint} />

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto lg:pr-[max(4rem,calc(28vw_-_max(0px,(100vw_-_80rem)/2)))]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-label text-[var(--accent-gold)]">01 — About</span>
          <div className="h-px w-16 bg-[var(--accent-gold-border)]" />
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
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.15] tracking-tight text-[var(--text-ink)] mb-8">
              About Me
            </h2>
            <div className="flex flex-col gap-5 max-w-xl">
              <p className="text-body text-[var(--text-ink-muted)]">
                I'm a Security Test Engineer specializing in Android and mobile application security, Mobile VAPT and API security, with 1+ years of hands-on security testing experience. I've completed 100+ production Android APK security assessments — covering static analysis with MobSF, JADX and Apktool, APK reverse engineering, dynamic/runtime testing and API security testing — and performed Frida-based dynamic testing across 60+ applications.
              </p>
              <p className="text-body text-[var(--text-ink-muted)]">
                I go beyond automated scanning: every finding is validated manually with reproducible PoC steps, CVSS scoring and CWE classification. I've authored 50+ CVSS-rated vulnerability reports and work with 10+ developers daily on remediation, retesting of fixed builds and formal closure.
              </p>
              <p className="text-body text-[var(--text-ink-muted)]">
                I work at Wizzybox Private Limited (employer), testing applications for the client Finacus Solutions Pvt. Ltd. in the banking and financial domain. I'm open to Application Security, Mobile Security and Security Test Engineer roles in Bengaluru or remote.
              </p>
              <div className="mt-2 inline-flex items-center gap-3 border border-[var(--accent-gold-border)] bg-[var(--accent-gold-muted)] px-5 py-3 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                <span className="text-sm text-[var(--accent-gold)] tracking-wide font-medium">
                  Completed a Security Test Engineer internship at Wizzybox Private Limited and later joined the company as a full-time Security Test Engineer.
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
              <p className="text-label text-[var(--accent-gold)] font-medium mb-5">Domain Expertise</p>
              <ul className="flex flex-col">
                {[
                  "Android & Mobile Application Security",
                  "Mobile VAPT",
                  "APK Reverse Engineering",
                  "Frida-Based Dynamic Testing",
                  "API Security Testing",
                  "Web Application Security",
                  "Vulnerability Reporting & Remediation",
                ].map((item, i) => (
                  <li key={i} className="group py-3.5 border-b border-[var(--border-thin)] text-base text-[var(--text-ink-muted)] flex items-center justify-between hover:text-[var(--text-ink)] transition-colors cursor-default">
                    <span>{item}</span>
                    <span className="text-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity text-xs">✦</span>
                  </li>
                ))}
              </ul>
            </div>

            <TiltCard className="card-dark-hover bg-[var(--bg-dark)] text-white p-8">
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[var(--accent-gold-border)]" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[var(--accent-gold-border)]" />
              <p className="text-label text-[var(--accent-gold)] font-medium mb-4">Education</p>
              <p className="text-xl font-medium leading-snug mb-1 text-white">B.E. Computer Science</p>
              <p className="text-sm text-white/70 mb-0.5">Maharaja Institute of Technology, Mysuru</p>
              <p className="text-sm text-white/60 mb-5">Visvesvaraya Technological University</p>
              <div className="flex justify-between items-center text-label text-white/50 tracking-widest uppercase">
                <span>2021 – 2025</span>
                <span className="text-[var(--accent-gold)] font-medium">CGPA 7.2 / 10</span>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}