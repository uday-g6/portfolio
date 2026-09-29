import { useEffect, useRef } from "react";

// Subtle 3D security network for the hero: nodes on a slowly rotating sphere,
// nearest-neighbour links, packets travelling along links and depth particles.
// Canvas 2D with a perspective projection — no library, CSP-safe.
// The canvas is absolutely positioned inside the hero section, so it scrolls
// away with the hero; drawing pauses whenever the hero is out of view.

type Vec = { x: number; y: number; z: number };
type Node = Vec & { hub: boolean; inner?: boolean };

const LINE = "127,214,210"; // light teal
const CORE = "0,100,102"; // stormy teal

function mount(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W = 0, H = 0, raf = 0, visible = false, t = 0;
  let px = 0, py = 0, tx = 0, ty = 0;

  const pts: Node[] = [];
  const N = 110;
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963;
    const j = 0.92 + Math.random() * 0.08;
    pts.push({ x: Math.cos(th) * r * j, y: y * j, z: Math.sin(th) * r * j, hub: Math.random() < 0.08 });
  }
  for (let i = 0; i < 14; i++) {
    const a = Math.random() * Math.PI * 2, b = Math.acos(2 * Math.random() - 1), r = 0.35 + Math.random() * 0.3;
    pts.push({ x: r * Math.sin(b) * Math.cos(a), y: r * Math.cos(b), z: r * Math.sin(b) * Math.sin(a), hub: false, inner: true });
  }
  const edges: [number, number][] = [];
  const seen = new Set<string>();
  pts.forEach((p, i) => {
    pts
      .map((q, j) => [j, (p.x - q.x) ** 2 + (p.y - q.y) ** 2 + (p.z - q.z) ** 2] as const)
      .filter(([j]) => j !== i)
      .sort((a, b) => a[1] - b[1])
      .slice(0, p.inner ? 2 : 3)
      .forEach(([j]) => {
        const k = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (!seen.has(k)) { seen.add(k); edges.push([i, j]); }
      });
  });
  const packets = Array.from({ length: 14 }, () => ({ e: (Math.random() * edges.length) | 0, u: Math.random(), v: 0.004 + Math.random() * 0.006 }));
  const dust = Array.from({ length: 70 }, () => ({ x: (Math.random() * 2 - 1) * 1.8, y: (Math.random() * 2 - 1) * 1.4, z: (Math.random() * 2 - 1) * 1.5, s: 0.0006 + Math.random() * 0.0012 }));
  const pulses: { i: number; a: number }[] = [];

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!visible || reduced) draw();
  };
  const rgba = (c: string, a: number) => `rgba(${c},${a})`;
  const project = (p: Vec, ry: number, rx: number) => {
    const x = p.x * Math.cos(ry) - p.z * Math.sin(ry);
    let z = p.x * Math.sin(ry) + p.z * Math.cos(ry);
    const y = p.y * Math.cos(rx) - z * Math.sin(rx);
    z = p.y * Math.sin(rx) + z * Math.cos(rx);
    const R = Math.min(W, H) * 0.42, f = 2.6 / (2.6 + z);
    return { x: W / 2 + x * R * f, y: H / 2 + y * R * f, z, f };
  };

  function draw() {
    t += 1;
    px += (tx - px) * 0.04; py += (ty - py) * 0.04;
    const ry = t * 0.0054 + px * 0.35, rx = 0.35 + py * 0.2;
    ctx!.clearRect(0, 0, W, H);

    for (const d of dust) {
      if (!reduced) { d.y -= d.s; if (d.y < -1.4) d.y = 1.4; }
      const p = project(d, ry * 0.4, rx * 0.5);
      ctx!.fillStyle = rgba(LINE, 0.08 + 0.18 * (1 - (p.z + 1.5) / 3));
      ctx!.beginPath(); ctx!.arc(p.x, p.y, 0.8 * p.f, 0, 7); ctx!.fill();
    }

    const P = pts.map((p) => project(p, ry, rx));
    for (const [i, j] of edges) {
      const a = P[i], b = P[j], depth = 1 - ((a.z + b.z) / 2 + 1) / 2;
      ctx!.strokeStyle = rgba(LINE, 0.05 + 0.22 * depth);
      ctx!.lineWidth = 0.6 + 0.6 * depth;
      ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y); ctx!.stroke();
    }
    for (const k of packets) {
      if (!reduced) { k.u += k.v; if (k.u > 1) { k.u = 0; k.e = (Math.random() * edges.length) | 0; } }
      const [i, j] = edges[k.e], a = P[i], b = P[j];
      const x = a.x + (b.x - a.x) * k.u, y = a.y + (b.y - a.y) * k.u, depth = 1 - ((a.z + b.z) / 2 + 1) / 2;
      const g = ctx!.createRadialGradient(x, y, 0, x, y, 6);
      g.addColorStop(0, rgba(LINE, 0.55 * depth + 0.15)); g.addColorStop(1, rgba(LINE, 0));
      ctx!.fillStyle = g; ctx!.beginPath(); ctx!.arc(x, y, 6, 0, 7); ctx!.fill();
    }
    P.map((p, i) => [p, pts[i]] as const)
      .sort((a, b) => b[0].z - a[0].z)
      .forEach(([p, s]) => {
        const depth = 1 - (p.z + 1) / 2, r = (s.hub ? 2.6 : 1.5) * p.f;
        if (s.hub) { ctx!.fillStyle = rgba(CORE, 0.9); ctx!.beginPath(); ctx!.arc(p.x, p.y, r + 2.2, 0, 7); ctx!.fill(); }
        ctx!.fillStyle = rgba(LINE, 0.25 + 0.6 * depth);
        ctx!.beginPath(); ctx!.arc(p.x, p.y, r, 0, 7); ctx!.fill();
      });
    if (!reduced && t % 90 === 0) {
      const hubs = pts.map((s, i) => i).filter((i) => pts[i].hub && P[i].z < 0);
      if (hubs.length) pulses.push({ i: hubs[(Math.random() * hubs.length) | 0], a: 0 });
    }
    for (let n = pulses.length - 1; n >= 0; n--) {
      const q = pulses[n], p = P[q.i];
      q.a += 0.012;
      ctx!.strokeStyle = rgba(LINE, 0.45 * (1 - q.a)); ctx!.lineWidth = 1;
      ctx!.beginPath(); ctx!.arc(p.x, p.y, 4 + q.a * 22, 0, 7); ctx!.stroke();
      if (q.a >= 1) pulses.splice(n, 1);
    }
  }

  const loop = () => { draw(); raf = requestAnimationFrame(loop); };
  const start = () => { if (!reduced && visible && !document.hidden && !raf) raf = requestAnimationFrame(loop); };
  const stop = () => { cancelAnimationFrame(raf); raf = 0; };

  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start(); else stop();
  });
  const onVis = () => (document.hidden ? stop() : start());
  const onMove = (e: PointerEvent) => { tx = (e.clientX / window.innerWidth) * 2 - 1; ty = (e.clientY / window.innerHeight) * 2 - 1; };

  resize();
  draw(); // first frame (and the only one with reduced motion)
  io.observe(canvas);
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", onMove, { passive: true });
  document.addEventListener("visibilitychange", onVis);
  return () => {
    stop(); io.disconnect();
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onMove);
    document.removeEventListener("visibilitychange", onVis);
  };
}

export default function HeroNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => (ref.current ? mount(ref.current) : undefined), []);
  return (
    <canvas
      ref={ref}
      data-hero-3d
      aria-hidden="true"
      className="absolute pointer-events-none left-0 right-0 top-16 h-[46vh] w-full opacity-45 xl:left-auto xl:right-[-6%] xl:w-[46%] xl:h-[min(78vh,680px)] xl:opacity-100"
    />
  );
}
