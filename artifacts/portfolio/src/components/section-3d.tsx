import { useEffect, useRef } from "react";

// Scroll-driven 3D security visuals. Each section owns its own canvas (never
// position: fixed): the canvas sits behind that section's content and scrolls
// away with it. As a section scrolls in, its structure morphs out of the
// previous section's structure, so the page reads as one system transforming.
// Canvas 2D + perspective projection — no library, CSP-safe.

export type ShapeId =
  | "sphere" | "core" | "timeline" | "matrix" | "device" | "flow"
  | "graph" | "pipeline" | "constellation" | "badge" | "converge";

const ORDER: ShapeId[] = ["sphere", "core", "timeline", "matrix", "device", "flow", "graph", "pipeline", "constellation", "badge", "converge"];

type V = { x: number; y: number; z: number };
type Shape = { pts: V[]; edges: [number, number][]; hubs: boolean[]; lanes?: number[][]; stages?: number[][] };

const LINE = "127,214,210"; // #7FD6D2
const CORE = "0,100,102"; // #006466

// ---------- preview toggle (demo control) ----------
const PREVIEW_EVENT = "preview3d";
export function preview3dEnabled() {
  try { return localStorage.getItem("preview3d") !== "off"; } catch { return true; }
}
export function setPreview3d(on: boolean) {
  try { localStorage.setItem("preview3d", on ? "on" : "off"); } catch { /* storage unavailable */ }
  window.dispatchEvent(new CustomEvent(PREVIEW_EVENT, { detail: on }));
}

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
  lanes?: number[][]; stages?: number[][];
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
    lanes: b.lanes?.map(remap), stages: b.stages?.map(remap),
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
      const at = (s: number) => ({ x: -1.25 + 2.5 * s, y: 0.2 * Math.sin(s * Math.PI * 2.2), z: 0.35 * Math.cos(s * Math.PI * 1.6) });
      for (let i = 0; i < pathN; i++) { const idx = b.add(at(i / (pathN - 1))); if (path.length) b.link(path[path.length - 1], idx); path.push(idx); }
      const miles = [0.1, 0.37, 0.63, 0.9].map((m) => path[Math.round(m * (pathN - 1))]);
      miles.forEach((m) => (b.hubs[m] = true));
      const per = Math.floor((N - pathN) / miles.length);
      miles.forEach((m) => {
        let prev = m; const o = b.pts[m];
        for (let k = 0; k < per; k++) {
          const a = r() * Math.PI * 2, rad = 0.1 + r() * 0.2;
          const idx = b.add({ x: o.x + (r() - 0.5) * 0.18, y: o.y + Math.cos(a) * rad, z: o.z + Math.sin(a) * rad });
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
    case "device": { // Mobile — device-inspired structure with a scanning plane
      const hw = 0.5, hh = 0.95, cols = N > 80 ? 4 : 3, rows = N > 80 ? 7 : 5;
      const ring = Math.floor((N - cols * rows) / 2);
      const edge = (t: number) => { const a = t * Math.PI * 2, c = Math.cos(a), s = Math.sin(a); return { x: hw * Math.sign(c) * Math.abs(c) ** 0.25, y: hh * Math.sign(s) * Math.abs(s) ** 0.25 }; };
      const faces = [0.07, -0.07].map((z) => { const ids: number[] = []; for (let i = 0; i < ring; i++) { const p = edge(i / ring); ids.push(b.add({ ...p, z })); if (i) b.link(ids[i - 1], ids[i]); } b.link(ids[ring - 1], ids[0]); return ids; });
      for (let i = 0; i < ring; i += Math.max(1, Math.floor(ring / 8))) b.link(faces[0][i], faces[1][i]);
      const grid: number[][] = [];
      for (let y = 0; y < rows; y++) { grid.push([]); for (let x = 0; x < cols; x++) {
        const idx = b.add({ x: -hw + 0.16 + (x / (cols - 1)) * (2 * hw - 0.32), y: -hh + 0.22 + (y / (rows - 1)) * (2 * hh - 0.44), z: 0.07 }, (x + y * 3) % 7 === 0);
        grid[y].push(idx); if (x) b.link(grid[y][x - 1], idx); if (y) b.link(grid[y - 1][x], idx);
      } }
      break;
    }
    case "flow": { // API & web — client ⇄ server data pathways
      const client = b.add({ x: -1.35, y: 0, z: 0 }, true), server = b.add({ x: 1.35, y: 0, z: 0 }, true);
      const L = 4, per = Math.floor((N - 2) / L); b.lanes = [];
      for (let l = 0; l < L; l++) {
        const lane: number[] = [];
        for (let i = 0; i < per; i++) {
          const s = i / (per - 1);
          const idx = b.add({ x: -1.1 + 2.2 * s, y: -0.54 + 0.36 * l + 0.06 * Math.sin(Math.PI * 2 * s + l), z: 0.28 * Math.sin(Math.PI * s * 1.5 + l) });
          if (lane.length) b.link(lane[lane.length - 1], idx); lane.push(idx);
        }
        b.link(client, lane[0]); b.link(lane[lane.length - 1], server);
        b.lanes.push([client, ...lane, server]);
      }
      break;
    }
    case "graph": { // Assessments — clusters that get swept and assessed
      const centres = [{ x: -0.62, y: 0.18, z: 0.1 }, { x: 0.58, y: 0.32, z: -0.22 }, { x: 0.08, y: -0.5, z: 0.3 }].map((c) => b.add(c, true));
      const per = Math.floor((N - 3) / 3);
      centres.forEach((c) => { const o = b.pts[c]; for (let i = 0; i < per; i++) {
        const g = () => (r() + r() + r() - 1.5) * 0.36; b.add({ x: o.x + g(), y: o.y + g(), z: o.z + g() });
      } });
      b.knn(2); b.link(centres[0], centres[1]); b.link(centres[1], centres[2]); break;
    }
    case "pipeline": { // Methodology — six connected stages
      const m = Math.floor((N - 6) / 6); b.stages = []; let prevC = -1;
      for (let s = 0; s < 6; s++) {
        const cx = -1.25 + s * 0.5, c = b.add({ x: cx, y: 0, z: 0 }, true), ring: number[] = [];
        for (let k = 0; k < m; k++) { const a = (2 * Math.PI * k) / m; const idx = b.add({ x: cx, y: 0.2 * Math.cos(a), z: 0.2 * Math.sin(a) }); if (k) b.link(ring[k - 1], idx); if (k % 2 === 0) b.link(c, idx); ring.push(idx); }
        b.link(ring[m - 1], ring[0]); if (prevC >= 0) b.link(prevC, c); prevC = c; b.stages.push([c, ...ring]);
      }
      break;
    }
    case "constellation": { // Projects — a hub with orbiting connected nodes
      const hub = b.add({ x: 0, y: 0, z: 0 }, true), k1 = Math.floor(N * 0.3), k2 = N - 1 - k1;
      const o1: number[] = [], o2: number[] = [];
      for (let i = 0; i < k1; i++) { const a = (i / k1) * Math.PI * 2; o1.push(b.add({ x: Math.cos(a) * 0.45, y: Math.sin(a) * 0.16, z: Math.sin(a) * 0.42 })); if (i) b.link(o1[i - 1], o1[i]); if (i % 3 === 0) b.link(hub, o1[i]); }
      b.link(o1[k1 - 1], o1[0]);
      for (let i = 0; i < k2; i++) { const a = (i / k2) * Math.PI * 2; o2.push(b.add({ x: Math.cos(a) * 0.95, y: -Math.sin(a) * 0.3, z: Math.sin(a) * 0.8 }, i % Math.max(1, Math.floor(k2 / 3)) === 0)); if (i) b.link(o2[i - 1], o2[i]); }
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
    case "converge": { // Contact — network converges into one secure connection
      const c = b.add({ x: 0, y: 0, z: 0 }, true); const M = N - 1, shell: number[] = [];
      for (let i = 0; i < M; i++) { const y = 1 - (i / (M - 1)) * 2, rad = Math.sqrt(1 - y * y), th = i * 2.399963; shell.push(b.add({ x: Math.cos(th) * rad * 0.55, y: y * 0.55, z: Math.sin(th) * rad * 0.55 })); }
      b.knn(2, shell); shell.forEach((i, n) => { if (n % 5 === 0) b.link(c, i); }); break;
    }
  }
  return finalize(b, N, r);
}

const MOTION: Record<ShapeId, { spin: number; tilt: number; scale: number }> = {
  sphere: { spin: 0.0054, tilt: 0.35, scale: 0.42 },
  core: { spin: 0.0028, tilt: 0.3, scale: 0.42 },
  timeline: { spin: 0.0012, tilt: 0.25, scale: 0.36 },
  matrix: { spin: 0.0016, tilt: 0.28, scale: 0.4 },
  device: { spin: 0.0022, tilt: 0.12, scale: 0.4 },
  flow: { spin: 0.0012, tilt: 0.3, scale: 0.35 },
  graph: { spin: 0.002, tilt: 0.3, scale: 0.42 },
  pipeline: { spin: 0.0008, tilt: 0.3, scale: 0.34 },
  constellation: { spin: 0.0024, tilt: 0.45, scale: 0.42 },
  badge: { spin: 0.0018, tilt: 0.2, scale: 0.42 },
  converge: { spin: 0.0026, tilt: 0.3, scale: 0.44 },
};

// ---------- renderer ----------
function mount(wrap: HTMLDivElement, canvas: HTMLCanvasElement, id: ShapeId) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};
  const section = wrap.closest("section") as HTMLElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const small = window.matchMedia("(max-width: 767px)").matches;
  const N = small ? 56 : 120;
  const prevId = ORDER[ORDER.indexOf(id) - 1];
  const from0 = prevId ? build(prevId, N) : null;
  let to = build(id, N);
  let from = from0 ?? to;
  let swapStart = -1, swapFrom: V[] | null = null, swapEdges: [number, number][] = [];
  const cur: V[] = to.pts.map((p) => ({ ...p }));
  const m = MOTION[id];
  let W = 0, H = 0, raf = 0, visible = false, enabled = preview3dEnabled(), t = 0;
  let px = 0, py = 0, tx = 0, ty = 0;
  const packets = Array.from({ length: small ? 5 : 12 }, () => ({ e: 0, u: Math.random(), v: 0.004 + Math.random() * 0.006, dir: Math.random() < 0.5 ? 1 : -1, lane: 0 }));
  packets.forEach((k) => { k.e = (Math.random() * to.edges.length) | 0; k.lane = (Math.random() * (to.lanes?.length ?? 1)) | 0; });
  const dust = Array.from({ length: small ? 18 : 48 }, () => ({ x: (Math.random() * 2 - 1) * 1.8, y: (Math.random() * 2 - 1) * 1.4, z: (Math.random() * 2 - 1) * 1.5, s: 0.0006 + Math.random() * 0.0012 }));
  const pulses: { i: number; a: number }[] = [];
  const assessed = new Map<number, number>();

  const rgba = (c: string, a: number) => `rgba(${c},${clamp(a)})`;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
    const rect = canvas.getBoundingClientRect(); W = rect.width; H = rect.height;
    canvas.width = Math.max(1, Math.round(W * dpr)); canvas.height = Math.max(1, Math.round(H * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!raf) draw();
  };

  function progress() {
    const rect = section.getBoundingClientRect(), vh = window.innerHeight;
    return {
      enter: prevId ? clamp((vh - rect.top) / (vh * 0.75)) : 1,
      through: clamp(-rect.top / Math.max(1, rect.height - vh)),
    };
  }

  function draw() {
    if (!W || !H) return;
    t += 1;
    const { enter, through } = reduced ? { enter: 1, through: 0.5 } : progress();
    const mix = ease(enter);
    px += (tx - px) * 0.04; py += (ty - py) * 0.04;
    const ry = t * m.spin + px * 0.3 + (id === "constellation" || id === "timeline" ? through * 1.2 : 0);
    const rx = m.tilt + py * 0.15;
    const R = Math.min(W, H) * m.scale;
    const cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx);
    const project = (p: V, s = 1) => {
      const x = p.x * cy - p.z * sy; let z = p.x * sy + p.z * cy;
      const y = p.y * cx - z * sx; z = p.y * sx + z * cx;
      const f = 2.6 / (2.6 + z);
      return { x: W / 2 + x * R * f * s, y: H / 2 + y * R * f * s, z, f };
    };

    // in-section category swaps (Skills)
    let swap = 1;
    if (swapFrom) { swap = ease(clamp((performance.now() - swapStart) / 900)); if (swap >= 1) swapFrom = null; }
    for (let i = 0; i < cur.length; i++) {
      const a = swapFrom ? swapFrom[i] : from.pts[i], b = to.pts[i], k = swapFrom ? swap : mix;
      cur[i].x = a.x + (b.x - a.x) * k;
      cur[i].y = a.y + (b.y - a.y) * k;
      cur[i].z = a.z + (b.z - a.z) * k;
    }
    const P = cur.map((p) => project(p));
    ctx!.clearRect(0, 0, W, H);

    for (const d of dust) {
      if (!reduced) { d.y -= d.s; if (d.y < -1.4) d.y = 1.4; }
      const p = project(d);
      ctx!.fillStyle = rgba(LINE, 0.06 + 0.14 * (1 - (p.z + 1.5) / 3));
      ctx!.beginPath(); ctx!.arc(p.x, p.y, 0.8 * p.f, 0, 7); ctx!.fill();
    }

    const drawEdges = (edges: [number, number][], w: number) => {
      if (w <= 0.01) return;
      for (const [i, j] of edges) {
        const a = P[i], b = P[j]; if (!a || !b) continue;
        const depth = 1 - ((a.z + b.z) / 2 + 1) / 2;
        ctx!.strokeStyle = rgba(LINE, (0.05 + 0.22 * depth) * w);
        ctx!.lineWidth = 0.6 + 0.6 * depth;
        ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y); ctx!.stroke();
      }
    };
    if (swapFrom) { drawEdges(swapEdges, 1 - swap); drawEdges(to.edges, swap); }
    else { drawEdges(from.edges, from === to ? 0 : 1 - mix); drawEdges(to.edges, mix); }

    const glow = (x: number, y: number, a: number, rad = 6) => {
      const g = ctx!.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, rgba(LINE, a)); g.addColorStop(1, rgba(LINE, 0));
      ctx!.fillStyle = g; ctx!.beginPath(); ctx!.arc(x, y, rad, 0, 7); ctx!.fill();
    };
    const along = (ids: number[], u: number) => {
      const f = u * (ids.length - 1), i = Math.min(ids.length - 2, Math.floor(f)), k = f - i;
      const a = P[ids[i]], b = P[ids[i + 1]];
      return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k, z: (a.z + b.z) / 2 };
    };

    // section-specific motion (only once the structure has formed)
    const formed = mix > 0.85;
    if (formed && !reduced) {
      if (id === "flow" && to.lanes) {
        for (const k of packets) {
          k.u += k.v * k.dir; if (k.u > 1 || k.u < 0) { k.u = k.dir > 0 ? 0 : 1; k.lane = (Math.random() * to.lanes.length) | 0; }
          const p = along(to.lanes[k.lane], clamp(k.u)); glow(p.x, p.y, 0.55, 7);
        }
      } else if (id === "timeline" && to.lanes) {
        const p = along(to.lanes[0], through); glow(p.x, p.y, 0.7, 10);
      } else if (id === "pipeline" && to.stages) {
        const s = Math.min(5, Math.floor(through * 6)), c = P[to.stages[s][0]];
        glow(c.x, c.y, 0.5, 26);
        const nxt = to.stages[Math.min(5, s + 1)][0], u = (t % 120) / 120, a = P[to.stages[s][0]], b = P[nxt];
        if (s < 5) glow(a.x + (b.x - a.x) * u, a.y + (b.y - a.y) * u, 0.55, 7);
      } else if (id === "device") {
        const sy2 = -0.95 + ((t % 240) / 240) * 1.9;
        const a = project({ x: -0.62, y: sy2, z: 0.07 }), b = project({ x: 0.62, y: sy2, z: 0.07 });
        ctx!.strokeStyle = rgba(LINE, 0.35); ctx!.lineWidth = 1; ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y); ctx!.stroke();
        cur.forEach((q, i) => { if (Math.abs(q.y - sy2) < 0.05) glow(P[i].x, P[i].y, 0.5, 6); });
      } else if (id === "graph") {
        const sweep = ((t * 0.012) % (Math.PI * 2)) - Math.PI;
        cur.forEach((q, i) => { const a = Math.atan2(q.z, q.x); if (Math.abs(a - sweep) < 0.05) assessed.set(i, t); });
        assessed.forEach((at, i) => {
          const age = (t - at) / 150; if (age > 1) { assessed.delete(i); return; }
          ctx!.strokeStyle = rgba(LINE, 0.5 * (1 - age)); ctx!.lineWidth = 1;
          ctx!.beginPath(); ctx!.arc(P[i].x, P[i].y, 4 + 3 * age, 0, 7); ctx!.stroke();
        });
      } else if (id === "sphere" || id === "core" || id === "matrix" || id === "constellation") {
        for (const k of packets) {
          k.u += k.v; if (k.u > 1) { k.u = 0; k.e = (Math.random() * to.edges.length) | 0; }
          const [i, j] = to.edges[k.e], a = P[i], b = P[j];
          glow(a.x + (b.x - a.x) * k.u, a.y + (b.y - a.y) * k.u, 0.45, 6);
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
      ctx!.beginPath(); ctx!.arc(p.x, p.y, 4 + q.a * (id === "converge" ? 60 : 22), 0, 7); ctx!.stroke();
      if (q.a >= 1) pulses.splice(n, 1);
    }

    // nodes, back to front
    const activeStage = id === "pipeline" && to.stages ? new Set(to.stages[Math.min(5, Math.floor(through * 6))]) : null;
    P.map((p, i) => i).sort((a, b) => P[b].z - P[a].z).forEach((i) => {
      const p = P[i], depth = 1 - (p.z + 1) / 2, hub = to.hubs[i] && mix > 0.5;
      const lit = activeStage?.has(i);
      const r = (hub ? 2.6 : 1.5) * p.f * (lit ? 1.4 : 1);
      if (hub) { ctx!.fillStyle = rgba(CORE, 0.9); ctx!.beginPath(); ctx!.arc(p.x, p.y, r + 2.2, 0, 7); ctx!.fill(); }
      ctx!.fillStyle = rgba(LINE, (0.25 + 0.6 * depth) * (activeStage && !lit ? 0.6 : 1));
      ctx!.beginPath(); ctx!.arc(p.x, p.y, r, 0, 7); ctx!.fill();
    });
  }

  const loop = () => { draw(); raf = requestAnimationFrame(loop); };
  const start = () => { if (enabled && visible && !document.hidden && !raf) { if (reduced) draw(); else raf = requestAnimationFrame(loop); } };
  const stop = () => { cancelAnimationFrame(raf); raf = 0; };
  const apply = () => { wrap.style.display = enabled ? "" : "none"; if (enabled) { resize(); start(); } else stop(); };

  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); else stop(); });
  const ro = new ResizeObserver(resize);
  const onVis = () => (document.hidden ? stop() : start());
  const onMove = (e: PointerEvent) => { tx = (e.clientX / window.innerWidth) * 2 - 1; ty = (e.clientY / window.innerHeight) * 2 - 1; };
  const onPreview = (e: Event) => { enabled = (e as CustomEvent<boolean>).detail; apply(); };
  const onScroll = () => { if (reduced && visible && enabled) draw(); };
  const onCategory = (e: Event) => {
    if (id !== "matrix") return;
    swapFrom = cur.map((p) => ({ ...p })); swapEdges = to.edges; swapStart = performance.now();
    to = build("matrix", N, (e as CustomEvent<number>).detail); from = from0 ?? to;
    if (reduced) draw();
  };

  apply();
  io.observe(wrap); ro.observe(canvas);
  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener(PREVIEW_EVENT, onPreview);
  window.addEventListener("skills:category", onCategory);
  document.addEventListener("visibilitychange", onVis);
  return () => {
    stop(); io.disconnect(); ro.disconnect();
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener(PREVIEW_EVENT, onPreview);
    window.removeEventListener("skills:category", onCategory);
    document.removeEventListener("visibilitychange", onVis);
  };
}

// ---------- components ----------
export default function Section3D({ shape, side }: { shape: ShapeId; side: "left" | "right" | "hero" }) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => (wrap.current && canvas.current ? mount(wrap.current, canvas.current, shape) : undefined), [shape]);

  if (side === "hero") {
    return (
      <div ref={wrap} data-3d={shape} aria-hidden="true" className="absolute pointer-events-none left-0 right-0 top-16 h-[46vh] w-full opacity-45 xl:left-auto xl:right-[-6%] xl:w-[46%] xl:h-[min(78vh,680px)] xl:opacity-100">
        <canvas ref={canvas} className="block h-full w-full" />
      </div>
    );
  }
  return (
    <div ref={wrap} data-3d={shape} aria-hidden="true" className={`absolute inset-y-0 pointer-events-none w-full opacity-45 lg:w-1/2 lg:opacity-70 ${side === "left" ? "left-0" : "right-0"}`}>
      <canvas ref={canvas} className="sticky top-0 block w-full" style={{ height: "min(100svh, 100%)" }} />
    </div>
  );
}

export function Preview3DToggle() {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const b = ref.current!; const paint = () => { const on = preview3dEnabled(); b.textContent = `3D Preview: ${on ? "ON" : "OFF"}`; b.setAttribute("aria-pressed", String(on)); };
    paint(); window.addEventListener(PREVIEW_EVENT, paint); return () => window.removeEventListener(PREVIEW_EVENT, paint);
  }, []);
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setPreview3d(!preview3dEnabled())}
      className="fixed bottom-5 left-5 z-[60] border border-[var(--accent-gold)] bg-[var(--bg-dark)]/90 px-4 py-2 text-label text-[var(--accent-gold)] backdrop-blur-sm hover:bg-[var(--accent-gold)] hover:text-white transition-colors"
    >
      3D Preview: ON
    </button>
  );
}
