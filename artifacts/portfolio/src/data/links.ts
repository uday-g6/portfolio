// Single source of truth for real links — never invent URLs.
export const LINKS = {
  github: "https://github.com/uday-g",
  linkedin: "https://linkedin.com/in/uday-g-",
  email: "udaygopalakrishna@gmail.com",
  // Placeholder resume link per user instruction.
  resume: "#resume",
} as const;

export const mailto = `mailto:${LINKS.email}`;
