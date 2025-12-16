# Retro 80s / Synthwave (S07) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** using the **Retro 80s / Synthwave (S07)** aesthetic. The experience should channel nostalgic futurism—neon glow, digital horizons, and synth-era energy—while remaining **conversion-focused, readable, and production-ready**.

---

## Inputs
- Style: S07 — Retro 80s (Synthwave)
- Industry: SaaS
- Use: Full Landing Page

---

## Assumptions
- B2B SaaS (AI / data / creator tools)
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All metrics, logos, and claims are placeholders
- Gradients and glow effects allowed but controlled
- Implementation via modern CSS, Tailwind, CSS variables

---

## Style DNA (S07 — Retro 80s)

### Visual Philosophy
- Nostalgic futurism with disciplined structure
- Emotional impact first, chaos avoided
- Clear hierarchy over spectacle

### Palette Strategy
- Dark navy / purple base
- Neon pink, cyan, electric blue accents
- Linear gradients only (no radial noise)

### Typography Direction
- Sans-serif core for readability
- Retro-futuristic display font for hero only
- Optional monospace for metrics

### Radius Policy
- Small radius (4–6px)

### Shadow Policy
- Glow-based shadows only
- No material elevation

### Border / Line Language
- Thin neon strokes
- Occasional gradient borders for emphasis

### Motion Philosophy
- Smooth, cinematic
- Subtle parallax allowed
- Reduced-motion safe

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Modules (Placeholders)
- Usage metrics (teams, uptime)
- Integration logos (monochrome or neon outline)
- Security & reliability copy (calm tone)

---

## Design Tokens (YAML)

```yaml
color:
  background:
    base: "#0B1026"
    surface: "#151A3A"
  ink:
    primary: "#FFFFFF"
    secondary: "#C7C9FF"
  accent:
    pink: "#FF4FD8"
    cyan: "#3CF2FF"
    blue: "#4F6BFF"

typography:
  fontFamily:
    primary: "Inter, system-ui, sans-serif"
    display: "Orbitron, sans-serif"
    mono: "JetBrains Mono, monospace"
  scale:
    h1:
      size: "60px"
      weight: 700
      lineHeight: 1.1
    h2:
      size: "36px"
      weight: 600
      lineHeight: 1.2
    body:
      size: "16px"
      weight: 400
      lineHeight: 1.6

spacing:
  unit: 8
  scale: [8,16,24,32,48,64,96]

radius:
  base: 6

shadow:
  type: "glow"
  glowColor: "rgba(255,79,216,0.35)"

motion:
  duration:
    fast: "120ms"
    base: "220ms"
  easing:
    default: "ease-out"
```

---

## Sections Map
1. Nav (dark, translucent)
2. Hero (gradient sky, neon CTA)
3. Value Proposition
4. Features (glow panels)
5. Integrations
6. Metrics / Social Proof
7. Security & Reliability
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

## Acceptance Checklist
- Neon accents used with restraint
- Text readability preserved on dark backgrounds
- Gradients are directional and intentional
- Fully responsive and accessible

---

## Do / Don’t

**Do**
- Use glow to guide attention
- Keep layout disciplined

**Don’t**
- Overload with neon everywhere
- Sacrifice clarity for nostalgia
