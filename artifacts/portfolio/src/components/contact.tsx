import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[#111] text-white relative overflow-hidden">
      <div className="absolute right-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-white/[0.03] leading-none select-none pointer-events-none" aria-hidden="true">06</div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full border border-[#B8892F]/15 pointer-events-none" />

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#B8892F] font-medium">06 — Contact</span>
          <div className="h-px w-16 bg-[#B8892F]/30" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-6">
              Let's talk about your next security engagement.
            </h2>
            <p className="text-white/70 text-base leading-[1.85] mb-12 max-w-sm">
              Available for security engineering roles and VAPT engagements. Fastest response by phone or email.
            </p>

            <div className="flex flex-col gap-0">
              <a href="tel:+917899169395" className="group py-6 border-b border-white/10 hover:border-[#B8892F]/50 transition-colors flex flex-col gap-1">
                <span className="text-[11px] tracking-[0.2em] uppercase text-white/45 font-medium">Phone / WhatsApp</span>
                <span className="text-3xl md:text-4xl font-light text-white group-hover:text-[#B8892F] transition-colors tracking-tight">+91 78991-69395</span>
              </a>
              <a href="mailto:udaygopalakrishna@gmail.com" className="group py-6 border-b border-white/10 hover:border-[#B8892F]/50 transition-colors flex flex-col gap-1">
                <span className="text-[11px] tracking-[0.2em] uppercase text-white/45 font-medium">Email</span>
                <span className="text-xl md:text-2xl font-light text-white group-hover:text-[#B8892F] transition-colors tracking-tight break-all">udaygopalakrishna@gmail.com</span>
              </a>
              <div className="py-6 border-b border-white/10 flex flex-col gap-1">
                <span className="text-[11px] tracking-[0.2em] uppercase text-white/45 font-medium">Location</span>
                <span className="text-xl font-light text-white/80">Bengaluru, India</span>
              </div>
              <div className="pt-6 flex items-center gap-6">
                <a href="https://linkedin.com/in/uday-g-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-[#B8892F] transition-colors text-xs tracking-widest uppercase">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-[#B8892F] transition-colors text-xs tracking-widest uppercase">
                  <SiGithub className="h-3.5 w-3.5" /> GitHub
                </a>
                <a href="https://udayg.netlify.app" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#B8892F] transition-colors text-xs tracking-widest uppercase">
                  Portfolio
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 relative"
          >
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#B8892F]/40" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#B8892F]/40" />

            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center gap-4">
                <span className="text-[#B8892F] text-3xl">✦</span>
                <h3 className="text-2xl font-light text-white">Message sent.</h3>
                <p className="text-white/55 text-sm">I'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { id: "name", label: "Name", type: "text", ph: "Jane Smith" },
                    { id: "email", label: "Email", type: "email", ph: "jane@company.com" },
                  ].map(f => (
                    <div key={f.id} className="flex flex-col gap-2">
                      <label className="text-[11px] tracking-[0.2em] uppercase text-white/50 font-medium">{f.label}</label>
                      <input type={f.type} required placeholder={f.ph} className="border-b border-white/15 bg-transparent py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#B8892F] transition-colors" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.2em] uppercase text-white/50 font-medium">Message</label>
                  <textarea required rows={5} placeholder="Hi Uday, I'm reaching out about..." className="border-b border-white/15 bg-transparent py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#B8892F] transition-colors resize-none" />
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-[#B8892F] text-white text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#D4A84B] transition-colors font-medium disabled:opacity-50">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
