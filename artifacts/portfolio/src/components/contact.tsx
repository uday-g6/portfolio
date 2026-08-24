import { LinkedinIcon, MailIcon, GithubIcon } from "./icons";
import { LINKS, mailto } from "@/data/links";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="reveal flex items-center gap-4 border-b border-[var(--color-line)] pb-3">
          <span className="eyebrow">Contact</span>
          <span className="eyebrow opacity-60">09 / 09</span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-700 leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-[3.25rem]">
              Let's find the weak point{" "}
              <span className="text-[var(--color-teal)]">
                before someone else does.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
              Open to conversations around application security, offensive
              security, mobile security, vulnerability research, secure product
              development, and security engineering opportunities.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="surface p-6">
              <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
                // reach out
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full justify-start"
                >
                  <LinkedinIcon width={15} height={15} /> Connect on LinkedIn
                </a>
                <a href={mailto} className="btn w-full justify-start">
                  <MailIcon width={15} height={15} /> Email Me
                </a>
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full justify-start"
                >
                  <GithubIcon width={15} height={15} /> GitHub
                </a>
              </div>
              <p className="mt-5 border-t border-[var(--color-line)] pt-4 font-mono text-[0.62rem] leading-relaxed text-[var(--color-ink-faint)]">
                {LINKS.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
