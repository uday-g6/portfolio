import { useEffect, useRef } from "react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NODES: { id: string; label: string }[] = [
  { id: "frida", label: "Frida" },
  { id: "burp", label: "Burp Suite" },
  { id: "mobsf", label: "MobSF" },
  { id: "jadx", label: "JADX" },
  { id: "apktool", label: "Apktool" },
  { id: "owasp", label: "OWASP" },
  { id: "ssl", label: "SSL Bypass" },
  { id: "api", label: "API Sec" },
  { id: "vapt", label: "VAPT" },
  { id: "nmap", label: "Nmap" },
  { id: "wireshark", label: "Wireshark" },
  { id: "cvss", label: "CVSS" },
  { id: "bola", label: "BOLA" },
  { id: "idor", label: "IDOR" },
];

const EDGES = [
  ["frida", "ssl"], ["frida", "mobsf"], ["burp", "api"],
  ["burp", "vapt"], ["burp", "bola"], ["mobsf", "jadx"],
  ["jadx", "apktool"], ["owasp", "vapt"], ["owasp", "api"],
  ["owasp", "idor"], ["api", "bola"], ["api", "idor"],
  ["cvss", "vapt"], ["nmap", "wireshark"], ["ssl", "api"],
];

export default function SkillGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    nodesRef.current = NODES.map((n) => ({
      ...n,
      x: 50 + Math.random() * (canvas.width - 100),
      y: 50 + Math.random() * (canvas.height - 100),
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const nodeMap: Record<string, Node> = {};
      nodesRef.current.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 40 || n.x > w - 40) n.vx *= -1;
        if (n.y < 40 || n.y > h - 40) n.vy *= -1;
        nodeMap[n.id] = n;
      });

      // Edges
      EDGES.forEach(([sid, tid]) => {
        const s = nodeMap[sid];
        const t = nodeMap[tid];
        if (!s || !t) return;
        const dist = Math.hypot(t.x - s.x, t.y - s.y);
        const alpha = Math.max(0, 1 - dist / 260) * 0.4;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        ctx.strokeStyle = `rgba(249,115,22,${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Nodes
      nodesRef.current.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#F97316";
        ctx.fill();

        ctx.font = "10px 'JetBrains Mono', monospace";
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y + 16);
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      ro.disconnect();
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}
