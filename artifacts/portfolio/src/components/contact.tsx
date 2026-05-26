import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, ExternalLink, Send, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    <section id="contact" className="py-24 bg-background/95 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary mr-2">06.</span> Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)] mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            Currently open to new security engineering opportunities — feel free to reach out directly.
          </p>
        </motion.div>

        {/* Direct contact strip — recruiter-first */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="tel:+917899169395"
              className="flex items-center gap-4 glass-card p-5 rounded-xl border border-primary/30 hover:border-primary/70 hover:bg-primary/5 transition-all group"
              data-testid="link-phone"
            >
              <div className="p-3 bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-colors flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium text-primary mb-0.5 tracking-wider uppercase">Phone / WhatsApp</p>
                <p className="text-white font-semibold text-lg">+91 78991-69395</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tap to call</p>
              </div>
            </a>

            <a
              href="mailto:udaygopalakrishna@gmail.com"
              className="flex items-center gap-4 glass-card p-5 rounded-xl border border-primary/30 hover:border-primary/70 hover:bg-primary/5 transition-all group"
              data-testid="link-email"
            >
              <div className="p-3 bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-colors flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium text-primary mb-0.5 tracking-wider uppercase">Email</p>
                <p className="text-white font-semibold text-base break-all">udaygopalakrishna@gmail.com</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tap to email</p>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="https://linkedin.com/in/uday-g-"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all group"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-muted-foreground group-hover:text-white transition-colors">LinkedIn</span>
            </a>

            <a
              href="https://udayg.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all group"
              data-testid="link-portfolio"
            >
              <ExternalLink className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-muted-foreground group-hover:text-white transition-colors">Portfolio</span>
            </a>

            <div className="glass-card p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-xs font-medium text-muted-foreground text-center leading-tight">Bengaluru, India</span>
            </div>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl border border-white/5 flex flex-col gap-5">
            <p className="text-sm text-muted-foreground text-center mb-2">Or send a message directly:</p>

            {submitted ? (
              <div className="py-10 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                    <Input
                      id="name"
                      required
                      placeholder="John Doe"
                      className="bg-secondary/50 border-white/10 focus-visible:ring-primary"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="bg-secondary/50 border-white/10 focus-visible:ring-primary"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Hello Uday, I'd like to discuss a security engineering opportunity..."
                    className="min-h-[120px] bg-secondary/50 border-white/10 focus-visible:ring-primary resize-none"
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all"
                  data-testid="button-send-message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
