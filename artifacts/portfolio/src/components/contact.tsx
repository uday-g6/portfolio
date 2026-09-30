import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    const form = e.currentTarget;
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);
      form.reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[var(--bg-dark)] text-white relative overflow-hidden">
      <div className="absolute left-[-1rem] top-1/2 -translate-y-1/2 serif text-[28vw] font-bold text-white/[0.03] leading-none select-none pointer-events-none" aria-hidden="true">10</div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full border border-[var(--accent-gold)]/15 pointer-events-none" />

      <div className="relative z-10 px-6 md:px-16 py-24 md:py-36 max-w-7xl mx-auto lg:pl-[max(4rem,calc(28vw_-_max(0px,(100vw_-_80rem)/2)))]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <p className="text-label text-[var(--accent-gold)]">10 — Contact</p>
          <div className="h-px w-16 bg-[var(--accent-gold-border)]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.1] tracking-tight text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-body text-white/70 mb-12 max-w-sm">
              Hiring for Application Security, Mobile Security, Mobile VAPT or Security Test Engineer roles in Bengaluru or remote? I'm open to connecting with recruiters, security teams and engineering leaders. Available on a 90-day notice period.
            </p>

            <div className="flex flex-col gap-0">
              <a href="tel:+917899169395" className="group py-6 border-b border-white/10 hover:border-[var(--accent-gold)]/50 transition-colors flex flex-col gap-1">
                <span className="text-label text-white/55 font-medium">Phone / WhatsApp</span>
                <span className="font-display font-light text-3xl md:text-4xl text-white group-hover:text-[var(--accent-gold)] transition-colors tracking-tight">+91 78991-69395</span>
              </a>
              <a href="mailto:udaygopalakrishna@gmail.com" className="group py-6 border-b border-white/10 hover:border-[var(--accent-gold)]/50 transition-colors flex flex-col gap-1">
                <span className="text-label text-white/55 font-medium">Email</span>
                <span className="text-xl md:text-2xl font-light text-white group-hover:text-[var(--accent-gold)] transition-colors tracking-tight break-all">udaygopalakrishna@gmail.com</span>
              </a>
              <div className="py-6 border-b border-white/10 flex flex-col gap-1">
                <span className="text-label text-white/55 font-medium">Location</span>
                <span className="text-xl font-light text-white/80">Bengaluru, India</span>
              </div>
              <div className="pt-6 flex items-center gap-6">
                <a href="https://linkedin.com/in/uday-g-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-[var(--accent-gold)] transition-colors text-label tracking-widest uppercase">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
                <a href="https://github.com/uday-g6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-[var(--accent-gold)] transition-colors text-label tracking-widest uppercase">
                  <SiGithub className="h-3.5 w-3.5" /> GitHub
                </a>
                <a href="/Uday_G_Application_Security_Resume.pdf" download="Uday_G_Application_Security_Resume.pdf" className="text-white/50 hover:text-[var(--accent-gold)] transition-colors text-label tracking-widest uppercase">
                  Resume (PDF)
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
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[var(--accent-gold-border)]" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[var(--accent-gold-border)]" />

            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center gap-4">
                <span className="text-[var(--accent-gold)] text-3xl">✦</span>
                <h3 className="font-display font-light text-2xl text-white">Message sent.</h3>
                <p className="text-white/55 text-sm">I'll be in touch shortly.</p>
              </div>
            ) : (
              <form name="contact" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="flex flex-col gap-7">
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { id: "name", label: "Name", type: "text", ph: "Jane Smith" },
                    { id: "email", label: "Email", type: "email", ph: "jane@company.com" },
                  ].map(f => (
                    <div key={f.id} className="flex flex-col gap-2">
                      <label htmlFor={`contact-${f.id}`} className="label-base text-white/60!">{f.label}</label>
                      <input id={`contact-${f.id}`} autoComplete={f.id} name={f.id} type={f.type} required placeholder={f.ph} className="border-b border-white/15 bg-transparent py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--accent-gold)] transition-colors" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="label-base text-white/60!">Message</label>
                  <textarea id="contact-message" name="message" required rows={5} placeholder="Hi Uday, I'm reaching out about..." className="border-b border-white/15 bg-transparent py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--accent-gold)] transition-colors resize-none" />
                </div>
                {error && (
                  <p className="text-sm text-red-400">Something went wrong sending your message — please email me directly instead.</p>
                )}
                <button type="submit" disabled={isSubmitting} className="btn-accent">
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