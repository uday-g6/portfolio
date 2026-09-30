import { useEffect, useRef } from "react";

// One continuous, scroll-driven 3D security system for the whole portfolio.
// A single set of nodes morphs through eleven structures (Hero → 01 … 10) as
// the page scrolls: scroll position maps to a continuous state value, so
// scrolling down advances the transformation and scrolling up reverses it.
// The canvas is sticky inside a track that spans Hero → Contact (it is never
// position: fixed) and sits above section backgrounds, below section content.
// Canvas 2D + perspective projection — no library, CSP-safe.

export type ShapeId =
  | "sphere" | "core" | "timeline" | "matrix" | "graph"
  | "constellation" | "badge" | "stack" | "converge";

const ORDER: ShapeId[] = ["sphere", "core", "timeline", "matrix", "graph", "constellation", "badge", "stack", "converge"];

type V = { x: number; y: number; z: number };
type Shape = { pts: V[]; edges: [number, number][]; hubs: boolean[]; lanes?: number[][] };

const LINE = "127,214,210"; // #7FD6D2
const CORE = "0,100,102"; // #006466

// ---------- geometry helpers ----------
function rng(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const d2 = (a: V, b: V) => (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

class Builder {
  pts: V[] = []; hubs: boolean[] = []; edges: [number, number][] = [];
  lanes?: number[][];
  add(v: V, hub = false) { this.pts.push(v); this.hubs.push(hub); return this.pts.length - 1; }
  link(a: number, b: number) { if (a !== b) this.edges.push([a, b]); }
  knn(k: number, only?: number[]) {
    const ids = only ?? this.pts.map((_, i) => i);
    const seen = new Set(this.edges.map(([a, b]) => (a < b ? `${a}-${b}` : `${b}-${a}`)));
    for (const i of ids) {
      ids.filter((j) => j !== i).map((j) => [j, d2(this.pts[i], this.pts[j])] as const)
        .sort((a, b) => a[1] - b[1]).slice(0, k)
        .forEach(([j]) => { const key = i < j ? `${i}-${j}` : `${j}-${i}`; if (!seen.has(key)) { seen.add(key); this.edges.push([i, j]); } });
    }
  }
}

// Exactly N points, sorted top-to-bottom so morphs move points smoothly.
function finalize(b: Builder, N: number, r: () => number): Shape {
  while (b.pts.length < N) {
    const src = (r() * b.pts.length) | 0, p = b.pts[src];
    b.link(src, b.add({ x: p.x + (r() - 0.5) * 0.16, y: p.y + (r() - 0.5) * 0.16, z: p.z + (r() - 0.5) * 0.16 }));
  }
  let keep = b.pts.map((_, i) => i);
  if (keep.length > N) {
    const removable = keep.filter((i) => !b.hubs[i]); const drop = new Set<number>();
    while (keep.length - drop.size > N && removable.length) drop.add(removable.splice((r() * removable.length) | 0, 1)[0]);
    keep = keep.filter((i) => !drop.has(i));
  }
  keep.sort((a, c) => b.pts[a].y - b.pts[c].y || Math.atan2(b.pts[a].z, b.pts[a].x) - Math.atan2(b.pts[c].z, b.pts[c].x));
  const map = new Map(keep.map((old, neu) => [old, neu]));
  const remap = (l: number[]) => l.filter((i) => map.has(i)).map((i) => map.get(i)!);
  return {
    pts: keep.map((i) => b.pts[i]), hubs: keep.map((i) => b.hubs[i]),
    edges: b.edges.filter(([a, c]) => map.has(a) && map.has(c)).map(([a, c]) => [map.get(a)!, map.get(c)!] as [number, number]),
    lanes: b.lanes?.map(remap),
  };
}

// ---------- the eleven structures ----------
function build(id: ShapeId, N: number, variant = 0): Shape {
  const r = rng(7 + ORDER.indexOf(id) * 101 + variant * 13);
  const b = new Builder();
  switch (id) {
    case "sphere": { // Hero — cyber network
      for (let i = 0; i < N; i++) {
        const y = 1 - (i / (N - 1)) * 2, rad = Math.sqrt(1 - y * y), th = i * 2.399963, j = 0.92 + r() * 0.08;
        b.add({ x: Math.cos(th) * rad * j, y: y * j, z: Math.sin(th) * rad * j }, r() < 0.08);
      }
      b.knn(3); break;
    }
    case "core": { // About — identity / security core (icosahedron shell + inner core)
      const P = (1 + Math.sqrt(5)) / 2, s = 0.95 / Math.hypot(1, P);
      const raw = [[0, 1, P], [0, -1, P], [0, 1, -P], [0, -1, -P], [1, P, 0], [-1, P, 0], [1, -P, 0], [-1, -P, 0], [P, 0, 1], [-P, 0, 1], [P, 0, -1], [-P, 0, -1]];
      const v = raw.map(([x, y, z]) => b.add({ x: x * s, y: y * s, z: z * s }, true));
      const per = Math.max(0, Math.floor((N - 21) / 30));
      for (let i = 0; i < 12; i++) for (let j = i + 1; j < 12; j++) {
        if (Math.abs(d2(b.pts[v[i]], b.pts[v[j]]) - 4 * s * s) > 1e-6) continue;
        let prev = v[i];
        for (let k = 1; k <= per; k++) {
          const t = k / (per + 1), a = b.pts[v[i]], c = b.pts[v[j]];
          const idx = b.add({ x: a.x + (c.x - a.x) * t, y: a.y + (c.y - a.y) * t, z: a.z + (c.z - a.z) * t });
          b.link(prev, idx); prev = idx;
        }
        b.link(prev, v[j]);
      }
      const c = b.add({ x: 0, y: 0, z: 0 }, true); const cube: number[] = [];
      for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) cube.push(b.add({ x: x * 0.28, y: y * 0.28, z: z * 0.28 }));
      cube.forEach((i) => { b.link(c, i); cube.forEach((j) => { if (i < j && Math.abs(d2(b.pts[i], b.pts[j]) - 0.3136) < 1e-6) b.link(i, j); }); });
      break;
    }
    case "timeline": { // Experience — network path
      const pathN = Math.floor(N * 0.5), path: number[] = [];
      const at = (s: number) => ({ x: 0.22 * Math.sin(s * Math.PI * 2.2), y: -1.25 + 2.5 * s, z: 0.35 * Math.cos(s * Math.PI * 1.6) });
      for (let i = 0; i < pathN; i++) { const idx = b.add(at(i / (pathN - 1))); if (path.length) b.link(path[path.length - 1], idx); path.push(idx); }
      const miles = [0.1, 0.37, 0.63, 0.9].map((m) => path[Math.round(m * (pathN - 1))]);
      miles.forEach((m) => (b.hubs[m] = true));
      const per = Math.floor((N - pathN) / miles.length);
      miles.forEach((m) => {
        let prev = m; const o = b.pts[m];
        for (let k = 0; k < per; k++) {
          const a = r() * Math.PI * 2, rad = 0.1 + r() * 0.2;
          const idx = b.add({ x: o.x + Math.cos(a) * rad, y: o.y + (r() - 0.5) * 0.18, z: o.z + Math.sin(a) * rad });
          b.link(k % 3 === 0 ? m : prev, idx); prev = idx;
        }
      });
      b.lanes = [path]; break;
    }
    case "matrix": { // Skills — five category clusters; the active one comes forward
      const per = Math.min(27, Math.floor(N / 5));
      const cells: [number, number, number][] = [];
      for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (let k = -1; k <= 1; k++) cells.push([i, j, k]);
      cells.sort((a, c) => a[0] ** 2 + a[1] ** 2 + a[2] ** 2 - (c[0] ** 2 + c[1] ** 2 + c[2] ** 2));
      const centres: number[] = [];
      for (let c = 0; c < 5; c++) {
        const ang = ((c - variant) * 2 * Math.PI) / 5, active = c === variant, sp = active ? 0.2 : 0.12;
        const o = { x: Math.sin(ang) * 0.85, y: active ? 0 : 0.05, z: -Math.cos(ang) * 0.85 };
        const ids = cells.slice(0, per).map(([i, j, k], n) => b.add({ x: o.x + i * sp, y: o.y + j * sp, z: o.z + k * sp }, n === 0));
        ids.forEach((a, x) => ids.forEach((c2, y) => {
          const [i1, j1, k1] = cells[x], [i2, j2, k2] = cells[y];
          if (x < y && Math.abs(i1 - i2) + Math.abs(j1 - j2) + Math.abs(k1 - k2) === 1) b.link(a, c2);
        }));
        centres.push(ids[0]);
      }
      centres.forEach((c, i) => b.link(c, centres[(i + 1) % 5])); break;
    }
    case "graph": { // Assessments — clusters that get swept and assessed
      const centres = [{ x: -0.62, y: 0.18, z: 0.1 }, { x: 0.58, y: 0.32, z: -0.22 }, { x: 0.08, y: -0.5, z: 0.3 }].map((c) => b.add(c, true));
      const per = Math.floor((N - 3) / 3);
      centres.forEach((c) => { const o = b.pts[c]; for (let i = 0; i < per; i++) {
        const g = () => (r() + r() + r() - 1.5) * 0.36; b.add({ x: o.x + g(), y: o.y + g(), z: o.z + g() });
      } });
      b.knn(3); b.link(centres[0], centres[1]); b.link(centres[1], centres[2]); b.link(centres[2], centres[0]); break;
    }
    case "constellation": { // Projects — a hub with orbiting connected nodes
      const hub = b.add({ x: 0, y: 0, z: 0 }, true), k1 = Math.floor(N * 0.3), k2 = N - 1 - k1;
      const o1: number[] = [], o2: number[] = [];
      for (let i = 0; i < k1; i++) { const a = (i / k1) * Math.PI * 2; o1.push(b.add({ x: Math.cos(a) * 0.45, y: Math.sin(a) * 0.42, z: Math.sin(a) * 0.14 })); if (i) b.link(o1[i - 1], o1[i]); if (i % 3 === 0) b.link(hub, o1[i]); }
      b.link(o1[k1 - 1], o1[0]);
      for (let i = 0; i < k2; i++) { const a = (i / k2) * Math.PI * 2; o2.push(b.add({ x: Math.cos(a) * 0.95, y: Math.sin(a) * 0.82, z: -Math.cos(a) * 0.22 }, i % Math.max(1, Math.floor(k2 / 3)) === 0)); if (i) b.link(o2[i - 1], o2[i]); }
      b.link(o2[k2 - 1], o2[0]);
      o1.forEach((i, n) => { if (n % 2) return; let best = o2[0]; o2.forEach((j) => { if (d2(b.pts[i], b.pts[j]) < d2(b.pts[i], b.pts[best])) best = j; }); b.link(i, best); });
      break;
    }
    case "badge": { // Certifications — octagonal credential structure
      const c = b.add({ x: 0, y: 0, z: 0 }, true), sp = Math.max(1, Math.floor((N - 17) / 16));
      const outer = Array.from({ length: 8 }, (_, i) => { const a = (i * Math.PI) / 4; return b.add({ x: Math.cos(a) * 0.9, y: Math.sin(a) * 0.9, z: 0.05 * Math.sin(4 * a) }, true); });
      const inner = Array.from({ length: 8 }, (_, i) => { const a = (i * Math.PI) / 4 + Math.PI / 8; return b.add({ x: Math.cos(a) * 0.52, y: Math.sin(a) * 0.52, z: -0.06 }); });
      const chain = (ids: number[]) => ids.forEach((a, i) => {
        const e = ids[(i + 1) % 8]; let prev = a; const A = b.pts[a], E = b.pts[e];
        for (let k = 1; k <= sp; k++) { const t = k / (sp + 1); const idx = b.add({ x: A.x + (E.x - A.x) * t, y: A.y + (E.y - A.y) * t, z: A.z + (E.z - A.z) * t }); b.link(prev, idx); prev = idx; }
        b.link(prev, e);
      });
      chain(outer); chain(inner);
      inner.forEach((n, i) => { b.link(c, n); b.link(outer[i], n); b.link(n, outer[(i + 1) % 8]); });
      break;
    }
    case "stack": { // Education — layered foundation (four linked hexagonal layers)
      const layers = 4, per = Math.floor((N - layers) / layers), rings: number[][] = [];
      for (let l = 0; l < layers; l++) {
        const y = -0.75 + l * 0.5, rad = 0.9 - l * 0.12, c = b.add({ x: 0, y, z: 0 }, true), ring: number[] = [];
        for (let k = 0; k < per; k++) {
          const a = (k / per) * Math.PI * 2, corner = Math.floor(a / (Math.PI / 3)), f = a / (Math.PI / 3) - corner;
          const a0 = corner * (Math.PI / 3), a1 = a0 + Math.PI / 3; // points along hexagon edges
          const idx = b.add({ x: rad * (Math.cos(a0) + (Math.cos(a1) - Math.cos(a0)) * f), y, z: rad * (Math.sin(a0) + (Math.sin(a1) - Math.sin(a0)) * f) });
          if (k) b.link(ring[k - 1], idx); if (k % Math.max(1, Math.floor(per / 6)) === 0) b.link(c, idx); ring.push(idx);
        }
        b.link(ring[per - 1], ring[0]);
        if (l) { const below = rings[l - 1]; ring.forEach((i, k) => { if (k % Math.max(1, Math.floor(per / 6)) === 0) b.link(i, below[k]); }); }
        rings.push(ring);
      }
      break;
    }
    case "converge": { // Contact — network converges into one secure connection
      const c = b.add({ x: 0, y: 0, z: 0 }, true); const M = N - 1, shell: number[] = [];
      for (let i = 0; i < M; i++) { const y = 1 - (i / (M - 1)) * 2, rad = Math.sqrt(1 - y * y), th = i * 2.399963; shell.push(b.add({ x: Math.cos(th) * rad * 0.55, y: y * 0.55, z: Math.sin(th) * rad * 0.55 })); }
      b.knn(2, shell); shell.forEach((i, n) => { if (n % 5 === 0) b.link(c, i); }); break;
    }
  }
  const shape = finalize(b, N, r);
  // Same visual size for every structure: scale to a unit bounding radius.
  const m = Math.max(...shape.pts.map((p) => Math.hypot(p.x, p.y, p.z))) || 1;
  shape.pts = shape.pts.map((p) => ({ x: p.x / m, y: p.y / m, z: p.z / m }));
  return shape;
}

const MOTION: Record<ShapeId, { spin: number; tilt: number; scale: number }> = {
  sphere: { spin: 0.0054, tilt: 0.35, scale: 0.42 },
  core: { spin: 0.0028, tilt: 0.3, scale: 0.42 },
  timeline: { spin: 0.0012, tilt: 0.25, scale: 0.36 },
  matrix: { spin: 0.0016, tilt: 0.28, scale: 0.4 },
  graph: { spin: 0.002, tilt: 0.3, scale: 0.42 },
  constellation: { spin: 0.0024, tilt: 0.45, scale: 0.42 },
  badge: { spin: 0.0018, tilt: 0.2, scale: 0.42 },
  stack: { spin: 0.0022, tilt: 0.42, scale: 0.42 },
  converge: { spin: 0.0026, tilt: 0.3, scale: 0.44 },
};


// ---------- the journey ----------
const SECTIONS = ["hero", "about", "experience", "skills", "assessments", "projects", "certifications", "education", "contact"];
// Which side each state sits on: the same side as that section's big 01–10 number,
// so the section's information stays on the opposite side.
const SIDE: ("L" | "R")[] = ["R", "R", "L", "R", "L", "R", "L", "R", "L"];

function mount(track: HTMLDivElement, canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const small = window.matchMedia("(max-width: 767px)").matches;
  const N = small ? 72 : 160;
  const shapes: Shape[] = ORDER.map((id) => build(id, N));
  let swap: { from: Shape; start: number } | null = null; // Skills category change
  const cur: V[] = shapes[0].pts.map((p) => ({ ...p }));
  let W = 0, H = 0, raf = 0, visible = false, t = 0, spin = 0;
  let px = 0, py = 0, tx = 0, ty = 0, lastDominant = -1;
  const packets = Array.from({ length: small ? 5 : 12 }, () => ({ e: 0, u: Math.random(), v: 0.004 + Math.random() * 0.006 }));
  const dust = Array.from({ length: small ? 18 : 48 }, () => ({ x: (Math.random() * 2 - 1) * 1.8, y: (Math.random() * 2 - 1) * 1.4, z: (Math.random() * 2 - 1) * 1.5, s: 0.0006 + Math.random() * 0.0012 }));
  const pulses: { i: number; a: number }[] = [];
  const assessed = new Map<number, number>();
  const rgba = (c: string, a: number) => `rgba(${c},${clamp(a)})`;
  // Depth shading inside the palette: back = a 60/40 mix of #7FD6D2 and #006466, front = #7FD6D2.
  const shade = (d: number, a: number) => { d = clamp(d); return `rgba(${Math.round(76 + 51 * d)},${Math.round(168 + 46 * d)},${Math.round(167 + 43 * d)},${clamp(a)})`; };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
    const rect = canvas.getBoundingClientRect(); W = rect.width; H = rect.height;
    canvas.width = Math.max(1, Math.round(W * dpr)); canvas.height = Math.max(1, Math.round(H * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!raf) draw();
  };

  // Scroll → continuous state s ∈ [0, 10]. Each section→next transition runs while
  // the section's bottom travels from 95% to 15% of the viewport height.
  function state() {
    const vh = window.innerHeight, y = window.scrollY;
    let s = 0, prevEnd = -Infinity;
    const through: number[] = [], bottoms: number[] = [];
    SECTIONS.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) { through.push(0); return; }
      const r = el.getBoundingClientRect(), top = r.top + y, bottom = top + r.height;
      through.push(clamp((y - top) / Math.max(1, r.height - vh)));
      bottoms.push(r.bottom);
      if (i === SECTIONS.length - 1) return;
      let a = bottom - vh * 0.95, b = bottom - vh * 0.15;
      if (a < prevEnd) a = prevEnd;
      if (b < a + vh * 0.3) b = a + vh * 0.3;
      s += ease(clamp((y - a) / (b - a))); prevEnd = b;
    });
    const footerH = (document.querySelector("footer") as HTMLElement | null)?.offsetHeight ?? 0;
    return { s: Math.min(s, SECTIONS.length - 1), through, bottoms, footerH };
  }

  // Where the structure sits (and how strong it is) for each state.
  function layout(k: number) {
    if (k === 0) {
      if (W >= 1280) { const w = W * 0.46, h = Math.min(H * 0.78, 680); return { x: W * 1.06 - w / 2, y: 64 + h / 2, R: Math.min(w, h) * 0.38, a: 1 }; }
      const h = H * 0.46; return { x: W / 2, y: 64 + h / 2, R: Math.min(W, h) * 0.42, a: 0.45 };
    }
    // Centred on the section number's zone at the edge; the same screen-based size for every section.
    const right = SIDE[k] === "R";
    if (W >= 1024) return { x: W * (right ? 0.85 : 0.15), y: H / 2, R: Math.min(W * 0.16, H * 0.38), a: 1 };
    return { x: W * (right ? 0.8 : 0.2), y: H / 2, R: Math.min(W * 0.34, H * 0.3), a: 0.4 }; // lighter behind text on small screens
  }

  function pointsOf(k: number): V[] {
    if (k !== 3 || !swap) return shapes[k].pts;
    const u = ease(clamp((performance.now() - swap.start) / 900));
    if (u >= 1) { swap = null; return shapes[3].pts; }
    return shapes[3].pts.map((p, i) => { const q = swap!.from.pts[i]; return { x: q.x + (p.x - q.x) * u, y: q.y + (p.y - q.y) * u, z: q.z + (p.z - q.z) * u }; });
  }

  function draw() {
    if (!W || !H) return;
    if (!reduced) t += 1;
    const st = state(), through = st.through;
    const s = reduced ? Math.round(st.s) : st.s; // reduced motion: static, finished structure per section
    const k = Math.min(SECTIONS.length - 2, Math.floor(s)), e = s - k;
    track.dataset.state = s.toFixed(3); // 0 = Hero … 10 = Contact (inspectable)
    const A = shapes[k], B = shapes[k + 1], pa = pointsOf(k), pb = pointsOf(k + 1);
    const LA = layout(k), LB = layout(k + 1), mA = MOTION[ORDER[k]], mB = MOTION[ORDER[k + 1]];
    // While handing off, the structure rides the boundary between the two sections:
    // it drifts down towards the end of one section and continues up into the next.
    const boundary = clamp(st.bottoms[k] ?? H / 2, H * 0.18, H * 0.82), ride = Math.sin(Math.PI * e);
    const lx = LA.x + (LB.x - LA.x) * e;
    const ly = LA.y + (LB.y - LA.y) * e + (boundary - (LA.y + (LB.y - LA.y) * e)) * ride * 0.9;
    // After 10 Contact it settles (shrinks slightly) and fades out before the footer.
    const end = clamp(((st.bottoms[SECTIONS.length - 1] ?? H) - (H - st.footerH)) / (H * 0.35));
    const R = (LA.R + (LB.R - LA.R) * e) * (0.82 + 0.18 * end);
    if (!reduced) spin += mA.spin + (mB.spin - mA.spin) * e;
    px += (tx - px) * 0.04; py += (ty - py) * 0.04;
    // Flat or long structures sway gently facing the viewer instead of spinning edge-on;
    // the weight blends continuously during transitions so the motion never jumps.
    // Flat or long structures sway facing the viewer at a readable angle instead of turning edge-on;
    // the weight blends continuously during transitions so the motion never jumps.
    const FACING: Partial<Record<ShapeId, number>> = { badge: 0, timeline: 0.35, constellation: 0 };
    const wA = ORDER[k] in FACING ? 1 - e : 0, wB = ORDER[k + 1] in FACING ? e : 0, flat = wA + wB;
    const base = (FACING[ORDER[k]] ?? 0) * wA + (FACING[ORDER[k + 1]] ?? 0) * wB;
    const turn = spin + s * 0.9, sway = base + 0.4 * Math.sin(spin * 1.5);
    const ry = turn * (1 - flat) + sway * flat + px * 0.3, rx = mA.tilt + (mB.tilt - mA.tilt) * e + py * 0.15;
    const cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx);
    const project = (p: V) => {
      const x = p.x * cy - p.z * sy; let z = p.x * sy + p.z * cy;
      const yy = p.y * cx - z * sx; z = p.y * sx + z * cx;
      const f = 2.6 / Math.max(0.3, 2.6 + z); // never divide by ~0 or flip behind the camera
      return { x: lx + x * R * f, y: ly + yy * R * f, z, f };
    };
    for (let i = 0; i < N; i++) {
      cur[i].x = pa[i].x + (pb[i].x - pa[i].x) * e;
      cur[i].y = pa[i].y + (pb[i].y - pa[i].y) * e;
      cur[i].z = pa[i].z + (pb[i].z - pa[i].z) * e;
    }
    const P = cur.map(project);
    ctx!.clearRect(0, 0, W, H);
    // Keep the drawing inside its own section: the formed section only, or — while handing off —
    // the two sections involved. Nothing (including particles and glows) spills into other sections.
    const cRect = canvas.getBoundingClientRect();
    const rectOf = (i: number) => document.getElementById(SECTIONS[i])?.getBoundingClientRect();
    // Near either end of a hand-off the structure has effectively arrived, so clip to that one section.
    const secA = rectOf(e >= 0.97 ? k + 1 : k), secB = rectOf(e <= 0.03 ? k : k + 1);
    const clipTop = clamp((secA?.top ?? 0) - cRect.top, 0, H), clipBottom = clamp((secB?.bottom ?? H) - cRect.top, 0, H);
    ctx!.save();
    ctx!.beginPath(); ctx!.rect(0, clipTop, W, Math.max(0, clipBottom - clipTop)); ctx!.clip();
    ctx!.globalAlpha = (LA.a + (LB.a - LA.a) * e) * end;
    track.dataset.pose = `${lx.toFixed(1)},${ly.toFixed(1)},${R.toFixed(1)},${ctx!.globalAlpha.toFixed(3)}`; // inspectable

    // On-screen vertical extent of everything drawn (node glows reach ~18px beyond a node) — inspectable.
    let extTop = Infinity, extBottom = -Infinity;
    for (const q of P) { extTop = Math.min(extTop, q.y - 18); extBottom = Math.max(extBottom, q.y + 18); }
    for (const d of dust) {
      if (!reduced) { d.y -= d.s; if (d.y < -1.4) d.y = 1.4; }
      const p = project(d);
      extTop = Math.min(extTop, p.y - 2); extBottom = Math.max(extBottom, p.y + 2);
      ctx!.fillStyle = rgba(LINE, 0.06 + 0.14 * (1 - (p.z + 1.5) / 3));
      ctx!.beginPath(); ctx!.arc(p.x, p.y, Math.max(0, 0.8 * p.f), 0, 7); ctx!.fill();
    }
    // Painted extent in page coordinates (after clipping) — inspectable.
    const paintTop = Math.max(extTop, clipTop) + cRect.top, paintBottom = Math.min(extBottom, clipBottom) + cRect.top;
    track.dataset.extent = `${paintTop.toFixed(0)},${paintBottom.toFixed(0)}`;
    const drawEdges = (edges: [number, number][], w: number) => {
      if (w <= 0.01) return;
      for (const [i, j] of edges) {
        const a = P[i], b = P[j]; if (!a || !b) continue;
        const depth = 1 - ((a.z + b.z) / 2 + 1) / 2;
        ctx!.strokeStyle = shade(depth, (0.32 + 0.48 * depth) * w);
        ctx!.lineWidth = 0.8 + 0.9 * depth;
        ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y); ctx!.stroke();
      }
    };
    const skillsU = swap ? ease(clamp((performance.now() - swap.start) / 900)) : 1;
    const edgesOf = (idx: number, w: number) => {
      if (idx === 3 && swap) { drawEdges(swap.from.edges, w * (1 - skillsU)); drawEdges(shapes[3].edges, w * skillsU); }
      else drawEdges(shapes[idx].edges, w);
    };
    edgesOf(k, 1 - e); edgesOf(k + 1, e);

    const glow = (x: number, y: number, a: number, rad = 6) => {
      const g = ctx!.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, rgba(LINE, a)); g.addColorStop(1, rgba(LINE, 0));
      ctx!.fillStyle = g; ctx!.beginPath(); ctx!.arc(x, y, rad, 0, 7); ctx!.fill();
    };
    const along = (ids: number[], u: number) => {
      const f = u * (ids.length - 1), i = Math.min(ids.length - 2, Math.floor(f)), q = f - i;
      const a = P[ids[i]], b = P[ids[i + 1]];
      return { x: a.x + (b.x - a.x) * q, y: a.y + (b.y - a.y) * q };
    };

    // The dominant structure's own motion, once it has (nearly) formed.
    const dom = e < 0.5 ? k : k + 1, strength = e < 0.5 ? 1 - e : e, id = ORDER[dom], to = shapes[dom], thr = through[dom] ?? 0;
    if (dom !== lastDominant) {
      packets.forEach((p) => { p.e = (Math.random() * to.edges.length) | 0; p.u = Math.random(); });
      pulses.length = 0; assessed.clear(); lastDominant = dom;
    }
    if (strength > 0.85 && !reduced) {
      if (id === "timeline" && to.lanes) {
        const q = along(to.lanes[0], thr); glow(q.x, q.y, 0.7, 10);
      } else if (id === "graph") {
        const sweep = ((t * 0.012) % (Math.PI * 2)) - Math.PI;
        cur.forEach((q, i) => { if (Math.abs(Math.atan2(q.z, q.x) - sweep) < 0.05) assessed.set(i, t); });
        assessed.forEach((at, i) => {
          const age = (t - at) / 150; if (age > 1) { assessed.delete(i); return; }
          ctx!.strokeStyle = rgba(LINE, 0.5 * (1 - age)); ctx!.lineWidth = 1;
          ctx!.beginPath(); ctx!.arc(P[i].x, P[i].y, 4 + 3 * age, 0, 7); ctx!.stroke();
        });
      } else if (id === "sphere" || id === "core" || id === "matrix" || id === "constellation") {
        for (const p of packets) {
          p.u += p.v; if (p.u > 1) { p.u = 0; p.e = (Math.random() * to.edges.length) | 0; }
          const edge = to.edges[p.e]; if (!edge) continue;
          const a = P[edge[0]], b = P[edge[1]]; glow(a.x + (b.x - a.x) * p.u, a.y + (b.y - a.y) * p.u, 0.45, 6);
        }
      }
      if ((id === "sphere" || id === "converge" || id === "badge") && t % (id === "converge" ? 150 : 90) === 0) {
        const hubs = to.hubs.map((h, i) => (h ? i : -1)).filter((i) => i >= 0 && P[i].z < 0.3);
        if (hubs.length) pulses.push({ i: id === "sphere" ? hubs[(Math.random() * hubs.length) | 0] : hubs[0], a: 0 });
      }
    }
    for (let n = pulses.length - 1; n >= 0; n--) {
      const q = pulses[n], p = P[q.i]; q.a += 0.012;
      ctx!.strokeStyle = rgba(LINE, 0.45 * (1 - q.a)); ctx!.lineWidth = 1;
      ctx!.beginPath(); ctx!.arc(p.x, p.y, Math.max(0, 4 + q.a * (id === "converge" ? 60 : 22)), 0, 7); ctx!.stroke();
      if (q.a >= 1) pulses.splice(n, 1);
    }

    P.map((_, i) => i).sort((a, b) => P[b].z - P[a].z).forEach((i) => {
      const p = P[i], depth = 1 - (p.z + 1) / 2;
      const hub = (A.hubs[i] ? 1 - e : 0) + (B.hubs[i] ? e : 0);
      const r = Math.max(0, (1.8 + 1.2 * hub) * p.f);
      if (hub > 0.01) {
        glow(p.x, p.y, (0.22 + 0.25 * depth) * hub, r * 5); // soft highlight on key nodes
        ctx!.fillStyle = rgba(CORE, 0.95 * hub); ctx!.beginPath(); ctx!.arc(p.x, p.y, r + 2.4 * hub, 0, 7); ctx!.fill();
      }
      ctx!.fillStyle = shade(depth, 0.7 + 0.3 * depth);
      ctx!.beginPath(); ctx!.arc(p.x, p.y, r, 0, 7); ctx!.fill();
      if (hub > 0.5) { ctx!.fillStyle = `rgba(241,246,247,${0.85 * hub})`; ctx!.beginPath(); ctx!.arc(p.x, p.y, r * 0.45, 0, 7); ctx!.fill(); } // #F1F6F7 centre
    });
    ctx!.restore();
    ctx!.globalAlpha = 1;
  }

  const loop = () => { draw(); raf = requestAnimationFrame(loop); };
  const start = () => { if (visible && !document.hidden && !raf) { if (reduced) draw(); else raf = requestAnimationFrame(loop); } };
  const stop = () => { cancelAnimationFrame(raf); raf = 0; };

  const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) start(); else stop(); });
  const ro = new ResizeObserver(resize);
  const onVis = () => (document.hidden ? stop() : start());
  const onMove = (ev: PointerEvent) => { tx = (ev.clientX / window.innerWidth) * 2 - 1; ty = (ev.clientY / window.innerHeight) * 2 - 1; };
  const onScroll = () => { if (reduced && visible) draw(); }; // reduced motion: redraw the static structure for the current section
  const onCategory = (ev: Event) => {
    swap = { from: shapes[3], start: reduced ? -1e9 : performance.now() };
    shapes[3] = build("matrix", N, (ev as CustomEvent<number>).detail);
    if (reduced) draw();
  };

  resize();
  io.observe(track); ro.observe(canvas);
  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("skills:category", onCategory);
  document.addEventListener("visibilitychange", onVis);
  return () => {
    stop(); io.disconnect(); ro.disconnect();
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("skills:category", onCategory);
    document.removeEventListener("visibilitychange", onVis);
  };
}

// ---------- components ----------
// Place inside a relatively positioned wrapper that spans Hero → Contact.
export default function Journey3D() {
  const track = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => (track.current && canvas.current ? mount(track.current, canvas.current) : undefined), []);
  return (
    <div ref={track} data-3d-track aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5]">
      <canvas ref={canvas} className="sticky top-0 block h-[100svh] w-full" />
    </div>
  );
}
