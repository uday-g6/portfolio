import type { LucideIcon } from "lucide-react";

// Large, faint cybersecurity icon centred in a section's background —
// the same idea as the hero's CYBERSECURITY word. Decorative only.
export default function SectionIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
      <Icon
        strokeWidth={0.85}
        className="w-[min(70vw,360px)] h-[min(70vw,360px)] lg:w-[min(34vw,520px)] lg:h-[min(34vw,520px)] text-[#7FD6D2] opacity-[0.09]"
      />
    </div>
  );
}
