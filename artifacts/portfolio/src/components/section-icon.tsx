import type { LucideIcon } from "lucide-react";

// Large, faint cybersecurity icon centred in a section's background —
// the same idea as the hero's CYBERSECURITY word. Decorative only.
export default function SectionIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
      <Icon
        strokeWidth={1}
        className="w-[min(82vw,440px)] h-[min(82vw,440px)] lg:w-[min(42vw,640px)] lg:h-[min(42vw,640px)] text-[#7FD6D2] opacity-[0.15]"
      />
    </div>
  );
}
