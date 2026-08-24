import { useEffect, useState } from "react";
import { ArrowDownIcon } from "./icons";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        })
      }
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-40 grid h-10 w-10 place-items-center border border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-lime)] transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowDownIcon width={16} height={16} className="rotate-180" />
    </button>
  );
}
