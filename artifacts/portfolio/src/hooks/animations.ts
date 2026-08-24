import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll hook using IntersectionObserver.
 * Adds `is-visible` to elements with the `reveal` class when in view.
 * Respects prefers-reduced-motion (handled in CSS).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>(".reveal")
    );
    if (targets.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Animated count-up that triggers when the element scrolls into view.
 * Falls back to the final value when reduced motion is preferred.
 */
export function useCountUp(target: number, durationMs = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(target);
      started.current = true;
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setValue(target);
      started.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / durationMs, 1);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(target * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { ref, value };
}
