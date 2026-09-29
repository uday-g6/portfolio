const items = [
  "Android APK Security", "Mobile VAPT", "Frida", "SSL Pinning Testing",
  "Root & Emulator Detection", "OWASP MASVS / MASTG", "Postman",
  "APK Reverse Engineering", "JADX", "Apktool", "MobSF", "Burp Suite",
  "API Security Testing", "BOLA / IDOR", "CVSS Reporting", "Static Analysis", "Dynamic Analysis",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div aria-hidden="true" className="relative z-10 overflow-hidden border-y border-[var(--border-thin)] bg-[var(--bg-dark)] py-4 select-none">
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