import { FileText, Mail } from "lucide-react";
import { Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion, useReducedMotion } from "framer-motion";
import { GITHUB_URL, LINKEDIN_URL, METRICS, PROFILE, RESUME_URL } from "./content";

// Coverage lines restate the resume; this panel shows scope, never findings.
const SCOPE = [
  { k: "static", v: "MobSF · JADX · Apktool" },
  { k: "runtime", v: "Frida" },
  { k: "controls", v: "SSL pinning · root · emulator · cert validation" },
  { k: "api", v: "Burp Suite · Postman — AuthN/AuthZ · BOLA/IDOR" },
  { k: "report", v: "PoC · CVSS · CWE · retest" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section id="top" aria-labelledby="hero-title" className="on-navy grid-bg relative overflow-hidden">
      {/* soft accent glow, static */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.12),transparent)]"
      />
      {/* Decorative watermark — very low contrast, centred in the open band under the metrics
          (the container's bottom padding: pb-14 / md:pb-20); 0.474em = half the cap height + baseline offset */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[calc(1.75rem-0.474em)] select-none overflow-hidden whitespace-nowrap text-center font-semibold uppercase leading-none tracking-[0.04em] text-white/[0.035] text-[clamp(2rem,6vw,5.5rem)] md:bottom-[calc(2.5rem-0.474em)]"
      >
        Cybersecurity
      </span>
      <div className="container-x relative pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-[var(--navy-line)] bg-[var(--navy-2)] px-3 py-1.5 font-mono text-xs text-[var(--on-navy-2)]">
              <span className="h-2 w-2 rounded-full bg-[var(--signal)]" aria-hidden="true" />
              {PROFILE.availability}
            </motion.p>

            <motion.h1 {...fade(0.05)} id="hero-title" className="mt-6 text-[clamp(2.75rem,7vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[var(--on-navy)]">
              {PROFILE.name}
            </motion.h1>
            <motion.p {...fade(0.1)} className="mt-4 text-[clamp(1.35rem,2.6vw,1.9rem)] font-semibold leading-tight text-[var(--on-navy)]">
              {PROFILE.title}
            </motion.p>
            <motion.p {...fade(0.14)} className="mt-1 text-[clamp(1.1rem,2vw,1.4rem)] font-medium text-[var(--signal)]">
              {PROFILE.specialization}
            </motion.p>

            <motion.ul {...fade(0.18)} className="mt-5 flex flex-wrap gap-2" aria-label="Focus areas">
              {PROFILE.focusTags.map((t) => (
                <li key={t} className="chip chip-mono !text-[var(--on-navy)]">{t}</li>
              ))}
            </motion.ul>

            <motion.p {...fade(0.22)} className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-[var(--on-navy-2)]">
              {PROFILE.statement}
            </motion.p>

            <motion.div {...fade(0.26)} className="mt-8 flex flex-wrap gap-3">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FileText size={18} aria-hidden="true" /> View Resume
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Linkedin size={18} aria-hidden="true" /> LinkedIn
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <SiGithub size={17} aria-hidden="true" /> GitHub
              </a>
              <a href="#contact" className="btn btn-outline">
                <Mail size={18} aria-hidden="true" /> Contact
              </a>
            </motion.div>
          </div>

          <motion.div {...fade(0.2)} className="terminal overflow-hidden" role="img" aria-label="Assessment scope: static analysis with MobSF, JADX and Apktool; runtime testing with Frida; SSL pinning, root, emulator and certificate validation controls; API testing with Burp Suite and Postman; reporting with PoC, CVSS, CWE and retest.">
            <div className="flex items-center gap-2 border-b border-[var(--navy-line)] px-4 py-3" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4A66]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4A66]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4A66]" />
              <span className="ml-2 text-[0.72rem] text-[var(--on-navy-3)]">assessment-scope.txt</span>
            </div>
            <div className="px-5 py-5 leading-7" aria-hidden="true">
              <p>
                <span className="text-[var(--signal)]">$</span> scope <span className="text-[var(--on-navy-3)]">--target</span> android-apk
              </p>
              <ul className="mt-3">
                {SCOPE.map((s) => (
                  <li key={s.k} className="grid grid-cols-[1.25rem_1fr] gap-x-1 sm:grid-cols-[1.25rem_5.5rem_1fr]">
                    <span className="text-[var(--signal)]">✓</span>
                    <span className="text-[var(--on-navy)]">{s.k}</span>
                    <span className="col-start-2 text-[var(--on-navy-2)] sm:col-start-auto">{s.v}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[var(--on-navy-3)]"># OWASP MASVS / MASTG · Mobile Top 10 · API Top 10</p>
            </div>
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.dl {...fade(0.3)} className="mt-14 grid grid-cols-2 overflow-hidden rounded-[var(--radius)] border border-[var(--navy-line)] bg-[var(--navy-line)] gap-px sm:grid-cols-3 lg:grid-cols-5">
          {METRICS.map((m, i) => (
            <div key={m.label} className={`flex flex-col bg-[var(--navy-2)] px-5 py-5 ${i === METRICS.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}>
              <dt className="order-2 mt-1 text-[0.8125rem] leading-snug text-[var(--on-navy-2)]">{m.label}</dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight text-[var(--on-navy)]">
                {m.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
