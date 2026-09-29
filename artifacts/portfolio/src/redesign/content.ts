// Single source of truth for all career content on the page.
// Career facts are copied from the approved resume (Uday_G_Application_Security_Resume.pdf);
// project text is copied from the Projects section of Uday's LinkedIn profile. Do not paraphrase
// metrics, dates, employer or client wording here.

export const RESUME_URL = "/Uday_G_Application_Security_Resume.pdf";
export const RESUME_FILENAME = "Uday_G_Application_Security_Resume.pdf";
export const LINKEDIN_URL = "https://linkedin.com/in/uday-g-";
export const GITHUB_URL = "https://github.com/uday-g6";

export const PROFILE = {
  name: "Uday G",
  title: "Security Test Engineer",
  specialization: "Android & Mobile Application Security",
  focusTags: ["Application Security", "Mobile VAPT", "API Security"],
  location: "Bengaluru, India",
  availability: "Open to Bengaluru and remote application-security roles",
  statement:
    "Security Test Engineer with 1+ years of hands-on experience in Android/mobile application security, Mobile VAPT and API security for banking and financial applications.",
};

export const METRICS = [
  { value: "1+", label: "Years of security testing experience" },
  { value: "100+", label: "Production Android APK security assessments" },
  { value: "60+", label: "Applications tested using Frida" },
  { value: "50+", label: "CVSS-rated vulnerability reports" },
  { value: "10+", label: "Developers worked with daily" },
];

export const SUMMARY = [
  "Security Test Engineer with 1+ years of hands-on experience in Android/mobile application security, Mobile VAPT and API security for banking and financial applications. Completed 100+ production Android APK security assessments and performed Frida-based dynamic testing across 60+ applications.",
  "Own the complete VAPT lifecycle, from testing and vulnerability validation through remediation support, retesting and closure. Authored 50+ CVSS-rated vulnerability reports and work with 10+ developers daily on remediation.",
  "Core toolkit: Burp Suite, Frida, MobSF, JADX and Apktool, with testing aligned to OWASP MASVS/MASTG, the OWASP Mobile Top 10 and the OWASP API Security Top 10.",
];

export const TRANSITION =
  "Completed a Security Test Engineer internship at Wizzybox Private Limited and later joined the company as a full-time Security Test Engineer.";

export const FOCUS_AREAS = [
  "Application Security",
  "Android & Mobile Application Security",
  "Mobile VAPT",
  "API Security",
  "Web Application Security",
  "Vulnerability Validation & Reporting",
];

export const EXPERIENCE = [
  {
    role: "Security Test Engineer",
    employer: "Wizzybox Private Limited",
    client: "Finacus Solutions Pvt. Ltd. — Banking & Financial Domain",
    period: "Jan 2026 – Present",
    type: "Full-time",
    location: "Bengaluru, India",
    groups: [
      {
        heading: "VAPT lifecycle",
        bullets: [
          "Own the complete VAPT lifecycle for production Android banking applications: security testing, vulnerability identification and validation, developer remediation support, retesting and final security assessment reporting.",
          "Completed 100+ production Android APK security assessments covering static analysis with MobSF, JADX and Apktool, APK reverse engineering, dynamic/runtime security testing and API security testing.",
        ],
      },
      {
        heading: "Mobile & runtime testing",
        bullets: [
          "Performed Frida-based dynamic testing across 60+ applications for runtime security testing and validation, covering SSL pinning testing and bypass, root detection, emulator detection, certificate validation and debugging checks.",
          "Reverse-engineered APKs with JADX and Apktool to review application logic, Android component configurations, hardcoded secrets, data storage and cryptographic implementations.",
          "Tested Android runtime security controls including USB and wireless debugging, developer mode, proxy/VPN detection, screen overlay and screen recording protections, app integrity, installation source validation and anti-hooking protections.",
        ],
      },
      {
        heading: "API & web security",
        bullets: [
          "Intercepted API traffic with Burp Suite to test authentication and authorization, BOLA/IDOR, insecure data handling and injection vulnerabilities across banking REST APIs.",
          "Conducted web application VAPT with Burp Suite and OWASP ZAP against OWASP Top 10 risk areas.",
        ],
      },
      {
        heading: "Reporting & remediation",
        bullets: [
          "Validated every finding with reproducible PoC steps, CVSS scoring and CWE classification, and authored 50+ CVSS-rated vulnerability reports with remediation recommendations.",
          "Work with 10+ developers daily on remediation, retesting of fixed builds and formal closure, then deliver the final security assessment report to stakeholders.",
        ],
      },
    ],
    tools: ["MobSF", "JADX", "Apktool", "Frida", "Burp Suite", "OWASP ZAP"],
  },
  {
    role: "Security Test Engineer Intern",
    employer: "Wizzybox Private Limited",
    client: "",
    period: "Apr 2025 – Aug 2025",
    type: "Internship",
    location: "Bengaluru, India",
    groups: [
      {
        heading: "",
        bullets: [
          "Performed Android application security testing using MobSF, JADX, Apktool and Burp Suite, covering static analysis, application configuration review and dynamic security testing.",
          "Identified insecure data storage, hardcoded credentials, exported Android components and misconfigured broadcast receivers, documented with remediation recommendations.",
          "Supported vulnerability verification and security testing activities.",
        ],
      },
    ],
    tools: ["MobSF", "JADX", "Apktool", "Burp Suite"],
  },
];

// Skills exactly as listed under TECHNICAL SKILLS on the resume, regrouped for display.
export const EXPERTISE = [
  {
    id: "mobile",
    title: "Mobile Application Security",
    blurb: "Android APK assessments across static, dynamic and runtime layers.",
    key: ["Android APK Security Testing", "Mobile VAPT", "Frida"],
    skills: [
      "APK Reverse Engineering",
      "Static Analysis",
      "Dynamic Analysis",
      "SSL Pinning Testing",
      "Root Detection Testing",
      "Emulator Detection Testing",
      "Certificate Validation",
      "Android Component Security",
    ],
  },
  {
    id: "api",
    title: "API Security",
    blurb: "Testing the REST APIs behind mobile banking applications.",
    key: ["API Security Testing", "BOLA / IDOR"],
    skills: ["Authentication & Authorization Testing", "JWT Security Testing", "OWASP API Security Top 10"],
  },
  {
    id: "web",
    title: "Web Application Security",
    blurb: "Web application VAPT against OWASP Top 10 risk areas.",
    key: ["Web Application Security Testing", "OWASP Top 10"],
    skills: ["SQL Injection", "XSS", "XXE", "CSRF", "File Upload Security"],
  },
  {
    id: "testing",
    title: "Security Testing & Reporting",
    blurb: "Validated findings, standard scoring and verified closure.",
    key: ["Vulnerability Validation & PoC", "CVSS", "CWE"],
    skills: [
      "OWASP MASVS / MASTG",
      "OWASP Mobile Top 10",
      "Vulnerability Reporting",
      "Retesting & Remediation",
      "Developer Coordination",
      "Security Assessment Reporting",
    ],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    blurb: "Day-to-day testing environment and scripting.",
    key: ["Burp Suite", "MobSF", "JADX"],
    skills: ["Apktool", "OWASP ZAP", "Postman", "Nmap", "Wireshark", "SQLmap", "Android Studio", "ADB", "Kali Linux", "Linux", "Python", "JavaScript", "Bash", "Git"],
  },
];

// "How it's used" lines only restate resume / LinkedIn wording.
export const TOOLKIT = [
  { name: "MobSF", group: "Static analysis", use: "Static analysis of production Android APKs, alongside JADX and Apktool." },
  { name: "JADX", group: "Reverse engineering", use: "Decompiling APKs to review application logic, Android component configurations, hardcoded secrets, data storage and cryptographic implementations." },
  { name: "Apktool", group: "Reverse engineering", use: "Decoding APKs for reverse engineering and application configuration review." },
  { name: "Frida", group: "Runtime testing", use: "Frida-based dynamic testing across 60+ applications — SSL pinning testing and bypass, root detection, emulator detection, certificate validation and debugging checks." },
  { name: "Burp Suite", group: "Traffic & API", use: "Intercepting API traffic to test authentication and authorization, BOLA/IDOR, insecure data handling and injection; web application VAPT." },
  { name: "Postman", group: "Traffic & API", use: "API security testing alongside Burp Suite." },
  { name: "OWASP ZAP", group: "Web testing", use: "Web application VAPT against OWASP Top 10 risk areas." },
  { name: "Android Studio", group: "Android tooling", use: "Android tooling used with MobSF, JADX, Apktool, Frida and Burp Suite when analysing APKs." },
  { name: "Wireshark", group: "Network analysis", use: "Capturing and analysing live HTTP, DNS and FTP traffic (Wireshark Network Traffic Analysis project)." },
  { name: "Nmap", group: "Network analysis", use: "Network and service discovery." },
  { name: "CVSS", group: "Risk scoring", use: "Severity scoring for every validated finding, with CWE classification — 50+ CVSS-rated vulnerability reports." },
];

export const WORK = [
  {
    title: "Android Application Security Testing & APK Reverse Engineering",
    type: "Professional assessment work",
    context: "Wizzybox Private Limited",
    period: "Jan 2026 – Present",
    description: [
      "Performed hands-on Android application security assessments covering static analysis, APK reverse engineering, dynamic analysis, runtime security testing, and vulnerability validation.",
      "Applied OWASP Mobile Security principles and documented validated vulnerabilities with technical evidence, impact, severity, and remediation recommendations.",
    ],
    tools: ["MobSF", "JADX", "Apktool", "Frida", "Burp Suite", "Android Studio"],
    areasLabel: "Key areas tested",
    areas: [
      "APK reverse engineering and code analysis",
      "Android component and configuration security",
      "Insecure data storage and hardcoded secrets",
      "Exported activities, services, receivers, and providers",
      "SSL/TLS and certificate validation",
      "SSL pinning testing",
      "Root and emulator detection",
      "Debugging and anti-hooking controls",
      "Proxy/VPN detection",
      "Application integrity and installation-source validation",
      "Runtime behavior analysis using Frida",
    ],
    featured: true,
  },
  {
    title: "Wireshark Network Traffic Analysis",
    type: "Network traffic analysis project",
    context: "",
    period: "Apr 2025 – May 2025",
    description: [
      "Captured and analyzed live HTTP, DNS, and FTP traffic.",
      "Identified plain-text credentials and unencrypted communication risks.",
      "Demonstrated importance of HTTPS, FTPS, and encrypted DNS.",
    ],
    tools: ["Wireshark"],
    areasLabel: "Protocols analysed",
    areas: ["HTTP", "DNS", "FTP"],
    featured: false,
  },
  {
    title: "5-Phase Ethical Hacking Simulation",
    type: "Penetration testing simulation",
    context: "",
    period: "",
    description: [
      "Simulated real-world penetration testing: recon, scanning, SQLi, session hijack.",
      "Identified outdated services and exploited login bypass on test site.",
    ],
    tools: [],
    areasLabel: "Phases covered",
    areas: ["Recon", "Scanning", "SQLi", "Session hijack"],
    featured: false,
  },
];

// Methodology — each step restates work described on the resume.
export const PROCESS = [
  { title: "Reconnaissance", detail: "Map the application, its Android components and the API surface in scope." },
  { title: "Static Analysis", detail: "MobSF, JADX and Apktool: application logic, component configurations, hardcoded secrets, data storage, cryptography." },
  { title: "Dynamic Analysis", detail: "Frida-based runtime testing: SSL pinning, root and emulator detection, certificate validation, debugging checks." },
  { title: "Traffic Analysis", detail: "Intercept API traffic with Burp Suite to test authentication, authorization, BOLA/IDOR and injection." },
  { title: "Vulnerability Validation", detail: "Confirm every finding with reproducible PoC steps." },
  { title: "Risk Assessment", detail: "CVSS scoring and CWE classification for each validated finding." },
  { title: "Reporting", detail: "CVSS-rated vulnerability reports with remediation recommendations." },
  { title: "Remediation Verification", detail: "Work with developers on fixes, retest fixed builds and formally close findings." },
];

export const CERTIFICATIONS = [
  { title: "Penetration Testing and Ethical Hacking", issuer: "LinkedIn Learning", year: "2026" },
  { title: "OWASP API Security Top 10", issuer: "LinkedIn Learning", year: "2026" },
  { title: "Learning the OWASP Top 10", issuer: "LinkedIn Learning", year: "2026" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2025" },
  { title: "Cybersecurity Fundamentals", issuer: "IBM", year: "2025" },
  { title: "Ethical Hacking & CTF", issuer: "IIT (ISM) Dhanbad — ChES", year: "2024" },
  { title: "Introduction to Critical Infrastructure Protection", issuer: "OPSWAT Academy", year: "2026" },
  { title: "Cybersecurity and Cloud Fundamentals 1.0", issuer: "Fortinet Training Institute", year: "2026" },
];

export const EDUCATION = {
  degree: "Bachelor of Engineering — Computer Science Engineering",
  short: "B.E.",
  institution: "Maharaja Institute of Technology, Mysuru",
  university: "Visvesvaraya Technological University (VTU)",
  period: "2021 – 2025",
  cgpa: "CGPA 7.2 / 10",
};

export const CONTACT = {
  email: "udaygopalakrishna@gmail.com",
  phoneDisplay: "+91 78991-69395",
  phoneHref: "tel:+917899169395",
  location: "Bengaluru, India",
  notice: "Available on a 90-day notice period.",
};
