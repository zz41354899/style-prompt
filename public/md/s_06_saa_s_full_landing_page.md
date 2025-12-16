# Cyberpunk (S06) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** using the **Cyberpunk (S06)** style. The interface should feel futuristic, high-contrast, and technologically intense, while remaining **usable, structured, and production-ready**.

The goal is controlled spectacle: neon energy constrained by a solid layout system.

---

## Inputs
- Style: S06 — Cyberpunk
- Industry: SaaS
- Use: Full Landing Page

---

## Assumptions
- B2B SaaS product in AI / infra / data / security space
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All metrics, logos, and claims are placeholders
- Implementation via modern CSS, Tailwind, CSS variables
- Audience expects advanced, cutting-edge tooling

---

## Style DNA (S06 — Cyberpunk)

### Visual Philosophy
- High-tech, nocturnal, electric
- Dark surfaces with luminous accents
- Visual tension between chaos and control
- Dense but legible

### Palette Strategy
- Dark base (near-black)
- Neon accents (cyan, magenta, purple)
- Text primarily light-on-dark
- Gradients allowed but linear and sharp

### Typography Direction
- Sans-serif + optional monospace pairing
- Condensed or technical grotesk
- Strong contrast in scale

### Radius Policy
- Small radius only (2–4px)

### Shadow Policy
- Glow-based shadows only
- No soft material elevation

### Border / Line Language
- Thin neon strokes
- Occasional dashed or segmented lines

### Pattern / Texture
- Subtle gridlines or scanline effects
- Low-opacity, decorative but restrained

### Motion Philosophy
- Fast, sharp
- Glitch-inspired micro-interactions
- Motion supports hierarchy, not distraction

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Modules (Placeholders)
- Performance metrics (latency, uptime)
- Integration list (API / cloud providers)
- Security & reliability copy (precise, technical tone)

### Tone
- Confident
- Technical
- Forward-looking

---

## Design Tokens (YAML)

```yaml
color:
  background:
    base: "#0B0E14"
    surface: "#131824"
  ink:
    primary: "#E6E9F0"
    secondary: "#9AA4BF"
  accent:
    cyan: "#00F0FF"
    magenta: "#FF2ED1"
    purple: "#7C5CFF"

typography:
  fontFamily:
    primary: "Inter, system-ui, sans-serif"
    mono: "JetBrains Mono, monospace"
  scale:
    h1:
      size: "56px"
      weight: 700
      lineHeight: 1.1
    h2:
      size: "34px"
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
  base: 4

border:
  width: 1
  style: "solid"
  color: "#2A2F45"

shadow:
  type: "glow"
  glowColor: "rgba(0,240,255,0.4)"

layout:
  container:
    maxWidth: "1200px"
  grid:
    columns:
      desktop: 12
      mobile: 4
    gutter: 24

motion:
  duration:
    fast: "120ms"
    base: "200ms"
  easing:
    default: "ease-out"
```

---

## Sections Map
1. Nav (dark, transparent over hero)
2. Hero (neon headline, glow CTA)
3. Value Proposition
4. Features (panels with glow borders)
5. Integrations
6. Metrics / Performance
7. Security & Reliability
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

## Contact Section
- Dark form surface
- High-contrast labels
- Focus states use neon glow
- Clear error messaging

---

## Accessibility & Responsive
- WCAG AA contrast on dark backgrounds
- Reduce motion option
- Mobile reduces glow intensity

---

## Acceptance Checklist
- Dark cyberpunk atmosphere without hurting readability
- Neon accents used with restraint
- Motion feels fast and intentional
- Fully responsive and accessible

---

## Do / Don’t

**Do**
- Use glow to guide attention
- Keep layout disciplined

**Don’t**
- Overuse neon everywhere
- Sacrifice clarity for style

