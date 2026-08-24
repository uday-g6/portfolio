"use client";

import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MetricCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export default function MetricCounter({
  value,
  label,
  suffix = "+",
  prefix = "",
  duration = 1800,
  className = "",
  valueClassName = "",
  labelClassName = "",
}: MetricCounterProps) {
  const reducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      if (reducedMotion) {
        setDisplayValue(value);
        return;
      }

      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * value);
        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, hasAnimated, value, duration, reducedMotion]);

  return (
    <div ref={ref} className={`flex flex-col gap-1 ${className}`}>
      <div className="flex items-end gap-1">
        <span className={`font-display font-light text-[var(--accent-lime)] leading-none ${valueClassName}`}>
          {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
      </div>
      <span className={`font-mono uppercase tracking-widest text-[var(--text-ink-light)] ${labelClassName}`}>
        {label}
      </span>
    </div>
  );
}