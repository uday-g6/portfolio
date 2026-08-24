import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { LINKS, mailto } from "@/data/links";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-paper-soft)] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center border border-[var(--color-ink)] bg-[var(--color-teal)] font-display text-sm font-bold text-[var(--color-lime)]">
                U
              </span>
              <span className="font-display text-base font-600 text-[var(--color-ink)]">
                Uday G
              </span>
            </div>
            <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-wider text-[var(--color-ink-muted)]">
              Security Engineer | Application Security | Offensive Security
            </p>
          </div>

          <div className="md:justify-self-center">
            <p className="font-display text-base font-600 text-[var(--color-ink)]">
              Built with a security-first mindset.
            </p>
            <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-faint)]">
              © {year} Uday G. All rights reserved.
            </p>
          </div>

          <div className="md:justify-self-end">
            <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-muted)]">
              Links
            </p>
            <div className="flex gap-2">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-lime)]"
              >
                <GithubIcon width={15} height={15} />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-lime)]"
              >
                <LinkedinIcon width={15} height={15} />
              </a>
              <a
                href={mailto}
                aria-label="Email"
                className="grid h-9 w-9 place-items-center border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-lime)]"
              >
                <MailIcon width={15} height={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
