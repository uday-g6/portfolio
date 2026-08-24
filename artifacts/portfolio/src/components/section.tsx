import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  index?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  index,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 px-5 sm:px-8 lg:px-12 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="reveal flex items-center justify-between gap-4 border-b border-[var(--color-line)] pb-3">
          <span className="eyebrow">{eyebrow}</span>
          {index && <span className="eyebrow opacity-60">{index}</span>}
        </div>
        {children}
      </div>
    </section>
  );
}
