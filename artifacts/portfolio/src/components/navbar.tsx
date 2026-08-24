import { useEffect, useState } from "react";
import { GithubIcon, MenuIcon, CloseIcon } from "./icons";
import { LINKS } from "@/data/links";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Offensive Security", href: "#offensive" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0 || typeof IntersectionObserver === "undefined")
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[var(--color-paper)]/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label="Uday G — home"
        >
          <span className="grid h-7 w-7 place-items-center border border-[var(--color-ink)] bg-[var(--color-teal)] font-display text-sm font-bold text-[var(--color-lime)]">
            U
          </span>
          <span className="font-display text-sm font-600 tracking-tight text-[var(--color-ink)]">
            Uday G
            <span className="ml-1.5 hidden font-mono text-[0.6rem] font-400 tracking-widest text-[var(--color-ink-muted)] sm:inline">
              /SEC
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`font-mono text-[0.7rem] uppercase tracking-wider px-2.5 py-1.5 transition-colors ${
                  active === item.href.slice(1)
                    ? "text-[var(--color-teal)]"
                    : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-[var(--color-ink)] bg-[var(--color-ink)] px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-[var(--color-paper)] transition-colors hover:bg-[var(--color-teal)] hover:border-[var(--color-teal)] sm:inline-flex"
          >
            <GithubIcon width={14} height={14} />
            GitHub
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center border border-[var(--color-line)] bg-[var(--color-paper-soft)] text-[var(--color-ink)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-paper)] transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[480px]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-3 sm:px-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-[var(--color-line-soft)] py-2.5 font-mono text-xs uppercase tracking-wider text-[var(--color-ink-soft)]"
              >
                {item.label}
                <span className="text-[var(--color-ink-faint)]">→</span>
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 border border-[var(--color-ink)] bg-[var(--color-ink)] px-3 py-2 font-mono text-[0.7rem] uppercase tracking-wider text-[var(--color-paper)]"
            >
              <GithubIcon width={14} height={14} /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
