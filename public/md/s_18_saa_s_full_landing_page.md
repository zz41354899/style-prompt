# Retro Pixel UI SaaS Landing Page — Full Design Prompt

## Objective
Design and specify a **conversion-oriented SaaS full landing page** using a **Retro Pixel UI (8‑bit / dither / pixel grid)** aesthetic. The output should be **design-system–driven, implementation-ready**, and suitable for direct handoff to frontend engineering.

The landing page must balance nostalgic pixel visuals with **modern SaaS clarity, trust, and usability**.

## Inputs
- **Style:** S18 — Retro Pixel UI (8‑bit / Dither / Pixel Grid)
- **Industry:** SaaS
- **Use:** Full Landing Page

## Assumptions
- Product is a B2B SaaS with a free trial CTA
- Target devices: desktop-first, fully responsive to mobile
- No real metrics, certifications, or customer logos are claimed; all proof uses placeholders
- Implementation target: React / Next.js with Tailwind CSS or CSS variables
- Font licensing assumed available (pixel + modern sans fallback)

---

## Style DNA (S18 — Retro Pixel UI)

### Visual Philosophy
- Evoke **8‑bit / early console UI** nostalgia while maintaining modern UX patterns
- Sharp edges, **no soft blur**, no realism
- Visuals feel "game-like" but content feels trustworthy and professional

### Style Seeds
- **Palette strategy:** Dark canvas + high-contrast neon accents, limited color count
- **Type direction:** Pixel display font for headlines + modern sans for body
- **Radius policy:** Hard corners only (0–2px optical pixel rounding)
- **Shadow policy:** 1–2 step pixel shadows, offset only
- **Border language:** 1px solid, high-contrast, grid-aligned
- **Pattern/texture:** Pixel grid, dithering, scanline overlays (very subtle)
- **Motion philosophy:** Stepped easing, frame-based, no smooth bezier animations

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Elements
- Product value explained in first viewport
- Metrics placeholders (e.g. `10,000+ teams`, `99.9% uptime` as replaceable text)
- Integration logos as pixel-styled monochrome icons
- Security & reliability cues ("SOC2-ready", "GDPR-aware" as placeholders, not claims)

### Copy Tone
- Clear, benefit-driven
- Minimal hype, readable at small sizes
- Short lines, high scannability

---

## Deliverables

### 1. Design Tokens (Human-Readable)
- Colors are **named by role**, not by hue
- Spacing uses **8px grid**, snapped to pixel multiples
- Typography prioritizes legibility over nostalgia for long text

### 2. Design Tokens (YAML)

```yaml
color:
  background:
    canvas: "#0B0E14"
    surface: "#11162A"
    surface-alt: "#1A2040"
  text:
    primary: "#E6E9FF"
    secondary: "#AAB0FF"
    muted: "#7A80C2"
    inverse: "#0B0E14"
  accent:
    primary: "#5CFFB1"
    secondary: "#FF5CAA"
    warning: "#FFD75C"
  border:
    default: "#2E3570"
    strong: "#5CFFB1"

 typography:
  fontFamily:
    display: "Press Start 2P, monospace"
    body: "Inter, system-ui, sans-serif"
  scale:
    h1: "32px"
    h2: "24px"
    h3: "20px"
    body: "16px"
    small: "14px"
  lineHeight:
    display: 1.3
    body: 1.6
  maxLineLength: "68ch"

 spacing:
  base: 8
  xs: 8
  sm: 16
  md: 24
  lg: 40
  xl: 64
  sectionY: 96

 radius:
  none: 0
  pixel: 2

 borderWidth:
  default: 1

 shadow:
  pixel-sm: "2px 2px 0 #000"
  pixel-md: "4px 4px 0 #000"

 layout:
  container:
    maxWidth: 1200
    paddingX: 24
  grid:
    columns: 12
    gutter: 24

 motion:
  duration:
    fast: "120ms"
    normal: "200ms"
  easing:
    step: "steps(4, end)"

 iconography:
  style: "pixel-outline"
  stroke: 1

 texture:
  pixelGrid:
    size: 8
    opacity: 0.04
```

---

### 3. Sections Map (Full Landing Page)

1. Top Nav (sticky)
2. Hero (value proposition + CTA)
3. Social Proof / Metrics
4. Core Features (3–4)
5. How It Works
6. Integrations
7. Security & Reliability
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

### 4. Per‑Section Specs

#### Hero
- Two-column layout (stacked on mobile)
- Pixel illustration or ASCII-style diagram on right
- Primary CTA: "Start Free Trial"
- Secondary CTA: "View Docs"
- CTA buttons use pixel border + offset shadow

#### Features
- Card-based layout
- Each card: icon (pixel), short headline, 2-line description
- Hover: shadow offset increases by 1 step

#### Metrics / Proof
- 3–4 stats
- Large pixel numerals + small sans labels
- No animation beyond step-based counter (optional)

#### Pricing Preview
- 2–3 tiers
- Emphasize "Most Popular" using accent border
- No dark patterns

#### Contact Section

**Modes:**
- Light CTA mode: email capture + button
- Full form mode: name / email / message

**States:**
- Default, focus, error, success

**Rules:**
- Labels always visible (no placeholder-only labels)
- Error text in warning color
- Success state replaces form with confirmation message

**Anti-spam:**
- Honeypot field
- Rate-limit hint (copy only)

---

### 5. Components & States
- Buttons: primary / secondary / ghost
- Input fields: default / focus / error / disabled
- Cards: default / hover / active
- Nav links: active state uses bottom pixel underline

---

### 6. Accessibility & Responsive
- Minimum contrast ratio 4.5:1
- Pixel font never used below 14px
- Focus states clearly visible with accent border
- Breakpoints: 360 / 768 / 1024 / 1280

---

### 7. Engineering Notes
- Prefer CSS variables mapped from tokens
- Tailwind: extend theme with token values
- Shadows and borders must align to pixel grid
- Avoid sub-pixel transforms

---

### 8. Acceptance Checklist
- [ ] All colors come from token roles
- [ ] No rounded corners beyond pixel radius
- [ ] All sections responsive
- [ ] CTA visible above the fold
- [ ] No fake claims or certifications

---

## Do / Don’t

**Do**
- Use restraint with nostalgia
- Keep copy modern and clear
- Snap everything to grid

**Don’t**
- Don’t blur or glow excessively
- Don’t animate smoothly
- Don’t overload with colors

---
