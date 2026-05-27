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
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-black/8 bg-[#F5F0E8]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#C4973A] font-medium">06 / Contact</span>
        <div className="h-px flex-1 bg-[#C4973A]/20" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="serif font-light text-4xl md:text-5xl text-[#111] leading-[1.15] tracking-tight mb-6">
            Let's talk about your next security engagement.
          </h2>
          <p className="text-[#111]/50 text-sm leading-[1.85] font-light mb-12 max-w-sm">
            Available for security engineering roles, mobile VAPT engagements, and consulting. Fastest response by phone or email.
          </p>

          <div className="flex flex-col gap-0">
            <a
              href="tel:+917899169395"
              className="group py-6 border-b border-black/8 hover:border-[#C4973A]/30 transition-colors flex flex-col gap-1"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#111]/30 font-medium">Phone / WhatsApp</span>
              <span className="serif text-3xl md:text-4xl font-light text-[#111] group-hover:text-[#C4973A] transition-colors tracking-tight">
                +91 78991-69395
              </span>
            </a>

            <a
              href="mailto:udaygopalakrishna@gmail.com"
              className="group py-6 border-b border-black/8 hover:border-[#C4973A]/30 transition-colors flex flex-col gap-1"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#111]/30 font-medium">Email</span>
              <span className="serif text-xl md:text-2xl font-light text-[#111] group-hover:text-[#C4973A] transition-colors tracking-tight break-all">
                udaygopalakrishna@gmail.com
              </span>
            </a>

            <div className="py-6 border-b border-black/8 flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#111]/30 font-medium">Location</span>
              <span className="serif text-xl font-light text-[#111]/70">Bengaluru, India</span>
            </div>

            <div className="pt-6 flex items-center gap-6">
              <a
                href="https://linkedin.com/in/uday-g-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#111]/40 hover:text-[#C4973A] transition-colors text-xs tracking-widest uppercase"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#111]/40 hover:text-[#C4973A] transition-colors text-xs tracking-widest uppercase"
              >
                <SiGithub className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href="https://udayg.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111]/40 hover:text-[#C4973A] transition-colors text-xs tracking-widest uppercase"
              >
                Portfolio
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-white p-8 md:p-10 border border-black/6"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center py-16 text-center gap-4">
              <div className="w-12 h-px bg-[#C4973A] mx-auto mb-4" />
              <h3 className="serif text-2xl font-light text-[#111]">Message sent.</h3>
              <p className="text-[#111]/45 text-sm font-light">I'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#111]/35 font-medium">
                    Name
                  </label>
                  <input
                    required
                    placeholder="Jane Smith"
                    className="border-b border-black/12 bg-transparent py-2.5 text-sm text-[#111] placeholder:text-[#111]/20 focus:outline-none focus:border-[#C4973A] transition-colors font-light"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#111]/35 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="border-b border-black/12 bg-transparent py-2.5 text-sm text-[#111] placeholder:text-[#111]/20 focus:outline-none focus:border-[#C4973A] transition-colors font-light"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#111]/35 font-medium">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Hi Uday, I'm reaching out about..."
                  className="border-b border-black/12 bg-transparent py-2.5 text-sm text-[#111] placeholder:text-[#111]/20 focus:outline-none focus:border-[#C4973A] transition-colors font-light resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 bg-[#111] text-white text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#C4973A] transition-colors font-medium disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
