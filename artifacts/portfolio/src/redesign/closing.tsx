import { useState } from "react";
import { Download, Mail, MapPin, Phone, Send } from "lucide-react";
import { Linkedin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { CONTACT, GITHUB_URL, LINKEDIN_URL, PROFILE, RESUME_FILENAME, RESUME_URL } from "./content";
import { Reveal, SectionHeading } from "./primitives";

export function ResumeCta() {
  return (
    <section aria-labelledby="cta-title" className="on-navy grid-bg">
      <div className="container-x py-16 md:py-20">
        <Reveal className="panel-navy flex flex-col gap-8 p-7 md:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">For recruiters & hiring managers</p>
            <h2 id="cta-title" className="mt-3 text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-tight tracking-tight text-[var(--on-navy)]">
              Looking for opportunities in Application Security, Mobile Security and Security Testing.
            </h2>
            <p className="mt-3 text-[var(--on-navy-2)]">{PROFILE.availability}. {CONTACT.notice}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:w-64 lg:shrink-0 lg:flex-col lg:[&>a]:w-full">
            <a href={RESUME_URL} download={RESUME_FILENAME} className="btn btn-primary">
              <Download size={18} aria-hidden="true" /> Download Resume
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Linkedin size={18} aria-hidden="true" /> LinkedIn
            </a>
            <a href="#contact" className="btn btn-outline">
              <Mail size={18} aria-hidden="true" /> Contact Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Same Netlify Forms submission as the current site (form-name "contact", honeypot "bot-field").
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
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const rows = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: "Phone", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
    { icon: MapPin, label: "Location", value: CONTACT.location, href: "" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/uday-g-", href: LINKEDIN_URL, external: true },
    { icon: SiGithub, label: "GitHub", value: "github.com/uday-g6", href: GITHUB_URL, external: true },
  ];

  const field = "w-full rounded-lg border border-[var(--border-strong)] bg-[var(--card)] px-3.5 py-2.5 text-[var(--ink)] placeholder:text-[var(--ink-3)] transition-colors hover:border-[var(--ink-3)] focus:border-[var(--teal)] focus:outline-none";

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="container-x">
        <SectionHeading id="contact-title" eyebrow="Contact" title="Get in touch" lead="Reach out directly, or send a message using the form." />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <ul className="card divide-y divide-[var(--border)]">
              {rows.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label} className="flex items-center gap-4 px-5 py-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--teal-tint)] text-[var(--teal-strong)]">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-3)]">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="break-words font-medium text-[var(--ink)] hover:text-[var(--teal-strong)] hover:underline underline-offset-4"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-[var(--ink)]">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card p-6 md:p-8">
              {submitted ? (
                <div role="status" className="flex min-h-[18rem] flex-col items-center justify-center gap-3 text-center">
                  <Send size={28} className="text-[var(--teal)]" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-[var(--ink)]">Message sent.</h3>
                  <p className="text-[var(--ink-3)]">Thanks — I'll be in touch shortly.</p>
                  <button type="button" onClick={() => setSubmitted(false)} className="link-underline mt-2 text-sm">
                    Send another message
                  </button>
                </div>
              ) : (
                <form name="contact" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-sm font-medium text-[var(--ink)]">Name</label>
                      <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Jane Smith" className={field} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-sm font-medium text-[var(--ink)]">Email</label>
                      <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="jane@company.com" className={field} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-sm font-medium text-[var(--ink)]">Message</label>
                    <textarea id="contact-message" name="message" required rows={5} placeholder="Hi Uday, I'm reaching out about..." className={`${field} resize-y`} />
                  </div>
                  {error && (
                    <p role="alert" className="text-sm text-[#B42318]">
                      Something went wrong sending your message — please email me directly instead.
                    </p>
                  )}
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary self-start disabled:opacity-60">
                    <Send size={17} aria-hidden="true" /> {isSubmitting ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="on-navy border-t border-[var(--navy-line)]">
      <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-[var(--on-navy)]">Uday G</p>
          <p className="text-[var(--on-navy-2)]">Security Test Engineer</p>
          <p className="mt-1 font-mono text-xs text-[var(--on-navy-3)]">Application Security | Android & Mobile Security | API Security</p>
        </div>
        <ul className="flex flex-wrap items-center gap-2">
          <li>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline !min-h-10 !py-2 text-sm">
              <Linkedin size={16} aria-hidden="true" /> LinkedIn
            </a>
          </li>
          <li>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline !min-h-10 !py-2 text-sm">
              <SiGithub size={15} aria-hidden="true" /> GitHub
            </a>
          </li>
          <li>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline !min-h-10 !py-2 text-sm">
              Resume
            </a>
          </li>
          <li>
            <a href="#top" className="btn btn-outline !min-h-10 !py-2 text-sm">Back to top ↑</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
