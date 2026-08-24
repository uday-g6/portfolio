import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/animations";
import {
  ArrowDownIcon,
  ArrowIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
} from "./icons";
import { LINKS, mailto } from "@/data/links";

const METRICS = [
  { value: 80, suffix: "+", label: "Android Applications Assessed" },
  { value: 40, suffix: "+", label: "Applications Tested with Frida" },
  { value: 50, suffix: "+", label: "CVSS-Rated Vulnerability Reports" },
  { value: 7, suffix: "+", label: "Development Teams Supported" },
];

function Metric({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, value: count } = useCountUp(value);
  return (
    <div className="border-t border-[var(--color-line)] pt-3">
      <div className="flex items-baseline gap-0.5">
        <span
          ref={ref}
          className="editorial-num text-4xl text-[var(--color-teal)] sm:text-5xl"
        >
          {count}
        </span>
        <span className="editorial-num text-2xl text-[var(--color-lime-deep)] sm:text-3xl">
          {suffix}
        </span>
      </div>
      <p className="mt-1.5 font-mono text-[0.66rem] uppercase tracking-wider leading-tight text-[var(--color-ink-muted)]">
        {label}
      </p>
    </div>
  );
}

const TERMINAL_LINES: { prompt?: string; text: string; cls?: string }[] = [
  { prompt: "$", text: "whoami" },
  { text: "uday@security:~$", prompt: "", cls: "text-[var(--color-lime-deep)]" },
  { text: "Security Engineer" },
  { prompt: "uday@security:~$", text: "role", cls: "text-[var(--color-lime-deep)]" },
  { text: "Security Engineer" },
  { prompt: "uday@security:~$", text: "focus", cls: "text-[var(--color-lime-deep)]" },
  { text: "Application Security" },
  { text: "Mobile Security" },
  { text: "API Security" },
  { text: "Offensive Security" },
  { prompt: "uday@security:~$", text: "status", cls: "text-[var(--color-lime-deep)]" },
  { text: "[+] Security testing", cls: "text-[var(--color-coral-soft)]" },
  { text: "[+] Reverse engineering", cls: "text-[var(--color-coral-soft)]" },
  { text: "[+] VAPT", cls: "text-[var(--color-coral-soft)]" },
  { text: "[+] Continuous learning", cls: "text-[var(--color-coral-soft)]" },
];

function TerminalVisual() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typing, setTyping] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setVisibleLines(TERMINAL_LINES.length);
      setTyping("");
      started.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const typeNext = () => {
            if (i >= TERMINAL_LINES.length) {
              setTyping("");
              return;
            }
            const line = TERMINAL_LINES[i];
            const full = line.prompt
              ? `${line.prompt ? line.prompt + " " : ""}${line.text}`
              : line.text;
            let charIdx = 0;
            setTyping(full.charAt(0));
            const charTimer = setInterval(() => {
              charIdx++;
              if (charIdx >= full.length) {
                clearInterval(charTimer);
                setVisibleLines(i + 1);
                setTyping("");
                i++;
                setTimeout(typeNext, 180);
              } else {
                setTyping(full.slice(0, charIdx + 1));
              }
            }, 28);
          };
          typeNext();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const currentLine =
    visibleLines < TERMINAL_LINES.length ? TERMINAL_LINES[visibleLines] : null;
  const showCaret = visibleLines < TERMINAL_LINES.length;

  return (
    <div ref={containerRef} className="relative">
      {/* Offset shadow layer */}
      <div
        className="absolute inset-0 translate-x-2 translate-y-2 border border-[var(--color-line)] bg-[var(--color-paper-deep)]"
        aria-hidden
      />
      <div className="surface-teal relative overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-[var(--color-teal-line)] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 border border-[var(--color-coral)] bg-[var(--color-coral)]/30" />
            <span className="h-2.5 w-2.5 border border-[var(--color-lime-deep)] bg-[var(--color-lime)]/20" />
            <span className="h-2.5 w-2.5 border border-[var(--color-line)] bg-[var(--color-paper)]/10" />
          </div>
          <span className="font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-paper)]/50">
            uday@security — bash
          </span>
          <span className="font-mono text-[0.62rem] text-[var(--color-lime)]">
            ●
          </span>
        </div>
        {/* Body */}
        <div className="grid-texture-teal min-h-[300px] p-4 font-mono text-[0.78rem] leading-relaxed sm:text-[0.82rem]">
          {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
            <TerminalLine key={i} line={line} />
          ))}
          {currentLine && (
            <div className="whitespace-pre-wrap break-words">
              <span
                className={
                  currentLine.cls ?? "text-[var(--color-paper)]"
                }
              >
                {typing}
              </span>
              {showCaret && <span className="terminal-caret" />}
            </div>
          )}
          {visibleLines === TERMINAL_LINES.length && (
            <div className="mt-1 flex items-center text-[var(--color-lime-deep)]">
              <span className="mr-1">uday@security:~$</span>
              <span className="terminal-caret" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TerminalLine({
  line,
}: {
  line: { prompt?: string; text: string; cls?: string };
}) {
  return (
    <div className="whitespace-pre-wrap break-words">
      {line.prompt && (
        <span className="text-[var(--color-lime-deep)]">{line.prompt} </span>
      )}
      <span className={line.cls ?? "text-[var(--color-paper)]"}>
        {line.text}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36"
    >
      {/* Restrained grid texture */}
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left */}
        <div className="lg:col-span-7">
          <p className="eyebrow-lime reveal">
            Security Engineer / Application Security / Offensive Security
          </p>

          <h1 className="reveal mt-5 font-display text-[2.6rem] font-700 leading-[0.98] tracking-tight text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
            I Break Applications
            <br />
            to Help Build Them
            <br />
            <span className="relative inline-block text-[var(--color-teal)]">
              More Securely.
              <span
                className="absolute -bottom-1 left-0 h-1 w-full bg-[var(--color-lime)]"
                aria-hidden
              />
            </span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-base font-500 leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
            Security Engineer specializing in Application Security, Android &
            Mobile Security, API Security, Web VAPT, Penetration Testing, and
            APK Reverse Engineering.
          </p>

          <p className="reveal mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-ink-muted)] sm:text-[0.95rem]">
            I work across application and mobile security, combining manual
            testing, reverse engineering, dynamic analysis, runtime
            instrumentation, and practical vulnerability validation.
          </p>

          {/* Buttons */}
          <div className="reveal mt-7 flex flex-wrap gap-2.5">
            <a href="#projects" className="btn btn-lime">
              View My Work <ArrowIcon width={14} height={14} />
            </a>
            <a
              href={LINKS.resume}
              className="btn btn-outline"
              aria-label="Download resume"
            >
              <DownloadIcon width={14} height={14} /> Download Resume
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <GithubIcon width={14} height={14} /> GitHub
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <LinkedinIcon width={14} height={14} /> LinkedIn
            </a>
          </div>

          {/* Metrics */}
          <div className="reveal mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {METRICS.map((m) => (
              <Metric key={m.label} {...m} />
            ))}
          </div>
        </div>

        {/* Right — tilted terminal */}
        <div className="lg:col-span-5">
          <div
            className="reveal relative lg:mt-4"
            style={{ transform: "rotate(1.4deg)" }}
          >
            <TerminalVisual />
          </div>
          <p className="reveal mt-4 text-center font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-faint)] lg:text-left">
            // live profile — authorized environments only
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative mx-auto mt-16 flex w-full max-w-6xl items-center gap-3">
        <span className="font-mono text-[0.62rem] uppercase tracking-widest text-[var(--color-ink-faint)]">
          Scroll
        </span>
        <ArrowDownIcon
          width={14}
          height={14}
          className="text-[var(--color-ink-faint)]"
        />
        <span className="section-rule flex-1" />
      </div>
    </section>
  );
}
