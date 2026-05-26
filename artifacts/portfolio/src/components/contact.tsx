import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiGithub } from "react-icons/si";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="mono text-primary text-lg mr-4">// 06</span>
            Contact
          </h2>
          <p className="text-white/50 mt-4 text-base">
            Open to security engineering roles. Reach out directly — fastest response by phone or email.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Direct contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-0"
          >
            {/* Phone */}
            <a
              href="tel:+917899169395"
              className="group flex flex-col gap-1 py-7 border-b border-white/8 hover:border-primary/40 transition-colors"
              data-testid="link-phone"
            >
              <span className="mono text-xs text-white/30 tracking-widest uppercase">Phone / WhatsApp</span>
              <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                +91 78991-69395
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:udaygopalakrishna@gmail.com"
              className="group flex flex-col gap-1 py-7 border-b border-white/8 hover:border-primary/40 transition-colors"
              data-testid="link-email"
            >
              <span className="mono text-xs text-white/30 tracking-widest uppercase">Email</span>
              <span className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight break-all">
                udaygopalakrishna@gmail.com
              </span>
            </a>

            {/* Location */}
            <div className="flex flex-col gap-1 py-7 border-b border-white/8">
              <span className="mono text-xs text-white/30 tracking-widest uppercase">Location</span>
              <span className="text-xl font-bold text-white/80">Bengaluru, India</span>
            </div>

            {/* Social links */}
            <div className="pt-7 flex items-center gap-6">
              <a
                href="https://linkedin.com/in/uday-g-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-primary transition-colors mono text-sm"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-primary transition-colors mono text-sm"
                data-testid="link-github"
              >
                <SiGithub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://udayg.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-primary transition-colors mono text-sm"
                data-testid="link-portfolio"
              >
                udayg.netlify.app
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="border border-white/8 p-8 flex flex-col gap-5">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Sent.</h3>
                    <p className="text-white/50 text-sm mt-1">I will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="mono text-xs text-white/40 tracking-widest uppercase">Name</label>
                      <Input
                        id="name"
                        required
                        placeholder="Jane Smith"
                        className="rounded bg-white/3 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white placeholder:text-white/20"
                        data-testid="input-name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="mono text-xs text-white/40 tracking-widest uppercase">Email</label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="rounded bg-white/3 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white placeholder:text-white/20"
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="mono text-xs text-white/40 tracking-widest uppercase">Message</label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Hi Uday, I'm reaching out about a security engineering role..."
                      className="min-h-[140px] rounded bg-white/3 border-white/10 focus-visible:ring-primary focus-visible:border-primary text-white placeholder:text-white/20 resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded bg-primary hover:bg-primary/90 text-black font-semibold transition-colors"
                    data-testid="button-send"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
