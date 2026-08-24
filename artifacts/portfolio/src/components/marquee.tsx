const ITEMS = [
  "APPLICATION SECURITY",
  "ANDROID SECURITY",
  "API SECURITY",
  "WEB VAPT",
  "PENETRATION TESTING",
  "FRIDA",
  "APK REVERSE ENGINEERING",
  "BURP SUITE",
  "OWASP",
  "OFFENSIVE SECURITY",
];

export function Marquee() {
  // Duplicate the list once for a seamless -50% translate loop.
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div
      className="relative border-y border-[var(--color-line)] bg-[var(--color-teal)] py-3"
      role="presentation"
      aria-hidden="true"
    >
      <div className="overflow-hidden">
        <div className="marquee-track">
          {loop.map((item, i) => (
            <span
              key={i}
              className="flex items-center font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-paper)]/85"
            >
              {item}
              <span className="mx-5 text-[var(--color-lime)]">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
