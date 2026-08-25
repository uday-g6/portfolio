const items = [
  "Android APK Security", "Frida Instrumentation", "SSL Pinning Bypass",
  "OWASP Mobile Top 10", "Burp Suite", "VAPT", "Reverse Engineering",
  "BOLA Testing", "IDOR", "CVSS Reporting", "MobSF", "Root Detection Bypass",
  "API Penetration Testing", "Static Analysis", "Dynamic Analysis", "Kali Linux",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[var(--border-thin)] bg-[var(--bg-dark)] py-4 select-none">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="text-label text-white/60 font-medium">
              {item}
            </span>
            <span className="text-[var(--accent-gold)] text-base leading-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}