"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TERMINAL_LINES = [
  { type: "prompt", text: "$ whoami" },
  { type: "output", text: "uday@security:~$ role" },
  { type: "output", text: "Security Test Engineer · Product & Mobile Application Security" },
  { type: "prompt", text: "uday@security:~$ focus" },
  { type: "output", text: "Android APK Security Testing" },
  { type: "output", text: "Mobile VAPT · Frida · Reverse Engineering" },
  { type: "output", text: "API Security Testing" },
  { type: "output", text: "Web Application VAPT" },
  { type: "prompt", text: "uday@security:~$ status" },
  { type: "output", text: "[+] Security testing" },
  { type: "output", text: "[+] Reverse engineering" },
  { type: "output", text: "[+] VAPT" },
  { type: "output", text: "[+] Continuous learning" },
  { type: "prompt", text: "uday@security:~$ _" },
];

export default function TerminalVisual({
  className = "",
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(true);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const cursorIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!animate || reducedMotion) {
      setVisibleLines(TERMINAL_LINES.length);
      return;
    }

    let currentLine = 0;
    const lineDelay = 350;
    const initialDelay = 600;

    const typeNextLine = () => {
      if (currentLine < TERMINAL_LINES.length) {
        setVisibleLines(currentLine + 1);
        currentLine += 1;
        animationFrameRef.current = window.setTimeout(typeNextLine, lineDelay);
        return;
      }

      cursorIntervalRef.current = window.setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 530);
    };

    const initialTimeout = window.setTimeout(typeNextLine, initialDelay);

    return () => {
      window.clearTimeout(initialTimeout);
      if (animationFrameRef.current) window.clearTimeout(animationFrameRef.current);
      if (cursorIntervalRef.current) window.clearInterval(cursorIntervalRef.current);
    };
  }, [animate, reducedMotion]);

  return (
    <div
      className={`
        relative w-full aspect-terminal max-w-[520px] mx-auto
        bg-[var(--bg-dark)] border border-[var(--border-thin-dark)]
        overflow-hidden font-mono
        ${className}
      `}
      role="img"
      aria-label="Terminal showing security test engineer profile"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[var(--bg-dark-elevated)] border-b border-[var(--border-thin-dark)]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded bg-[#E86C5A]" />
          <div className="w-3 h-3 rounded bg-[#F0B84C]" />
          <div className="w-3 h-3 rounded bg-[#4CAF50]" />
        </div>
        <div className="flex-1 text-center text-label text-white/40 font-mono">
          ud@security:~
        </div>
      </div>

      {/* Terminal content */}
      <div className="p-4 md:p-6 h-[calc(100%-52px)] overflow-y-auto">
        <div className="flex flex-col gap-1.5">
          {TERMINAL_LINES.map((line, index) => {
            const isVisible = index < visibleLines;
            const isLast = index === TERMINAL_LINES.length - 1;
            const isPrompt = line.type === "prompt";

            return (
              <div
                key={index}
                ref={(el) => {
                  lineRefs.current[index] = el;
                }}
                className={`
                  flex items-start gap-2 min-h-[1.6em]
                  ${isVisible ? "opacity-100" : "opacity-0"}
                  ${reducedMotion || !animate ? "transition-none" : "transition-opacity duration-200"}
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span
                  className={`
                    shrink-0 font-mono text-terminal select-none
                    ${isPrompt ? "text-[var(--accent-lime)]" : "text-white/85"}
                  `}
                >
                  {isPrompt ? "$" : ""}
                </span>
                <span
                  className={`
                    font-mono text-terminal select-none
                    ${isPrompt ? "text-white" : "text-white/85"}
                  `}
                >
                  {line.text}
                  {isLast && isVisible && showCursor && (
                    <span className="animate-terminal-cursor ml-1 text-[var(--accent-lime)]">_</span>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}