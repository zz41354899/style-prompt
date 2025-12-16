# Mondrian / De Stijl (S03) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** using the **Mondrian / De Stijl (S03)** visual system. The interface should translate abstract modernist principles into a **highly structured, grid-driven, production-ready UI**.

The result must feel rational, architectural, and timeless, using **geometry and color planes** instead of decoration.

---

## Inputs
- Style: S03 — Mondrian / De Stijl
- Industry: SaaS
- Use: Full Landing Page

---

## Assumptions
- B2B SaaS product with a clear core value proposition
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All metrics, logos, and integrations are placeholders
- No real certifications or claims
- Implementation via CSS Grid / Tailwind / CSS variables
- Audience: founders, operators, product leaders

---

## Style DNA (S03 — Mondrian / De Stijl)

### Visual Philosophy
- Pure abstraction translated into function
- Asymmetric balance with strict grid discipline
- Hierarchy via geometry, proportion, and color planes
- Zero ornamentation

### Palette Strategy
- White and off-white dominant backgrounds
- Primary colors (red, blue, yellow) used sparingly
- Black as structural ink and divider
- No gradients or transparency

### Typography Direction
- Sans-serif only
- Neutral geometric grotesk
- Hierarchy through scale and weight, not color

### Radius Policy
- 0px only

### Shadow Policy
- None

### Border / Line Language
- Solid black rules (2–4px)
- Used as grid separators, frames, and emphasis

### Pattern / Texture
- None
- Flat color planes only

### Motion Philosophy
- Minimal and structural
- Fast, non-expressive transitions
- Motion should never be decorative

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Modules (Placeholders)
- Metrics row (e.g. teams, uptime)
- Integration logos grid (monochrome placeholders)
- Security & reliability section (neutral wording)
- Pricing transparency language

### Tone
- Precise
- Confident
- Non-hyped

---

## Design Tokens (YAML)

```yaml
color:
  background:
    base: "#FFFFFF"
    muted: "#F5F5F5"
  ink:
    primary: "#000000"
  accent:
    red: "#D60000"
    blue: "#0033CC"
    yellow: "#FFCC00"

typography:
  fontFamily:
    primary: "Inter, Helvetica Now, Neue Haas Grotesk, system-ui, sans-serif"
  scale:
    h1:
      size: "56px"
      weight: 700
      lineHeight: 1.1
      tracking: "-0.01em"
    h2:
      size: "36px"
      weight: 600
      lineHeight: 1.2
    h3:
      size: "24px"
      weight: 600
      lineHeight: 1.3
    body:
      size: "16px"
      weight: 400
      lineHeight: 1.6
  maxLineLength: "68ch"

spacing:
  unit: 8
  scale: [8,16,24,32,48,64,96]
  sectionPadding:
    desktop: 96
    tablet: 64
    mobile: 32

radius:
  base: 0

border:
  width:
    primary: 2
    secondary: 1
  style: "solid"
  color: "#000000"

shadow:
  enabled: false

layout:
  container:
    maxWidth: "1200px"
    paddingX:
      desktop: 24
      mobile: 16
  grid:
    columns:
      desktop: 12
      mobile: 4
    gutter: 24

motion:
  duration:
    fast: "120ms"
    base: "150ms"
  easing:
    default: "linear"

iconography:
  style: "line"
  strokeWidth: 2
  corners: "sharp"

pattern:
  enabled: false
```

---

## Sections Map
1. Global Navigation
2. Hero
3. Value Proposition Grid
4. Product Features
5. Integrations
6. Metrics / Social Proof
7. Security & Reliability
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

## Contact Section

### Modes
- Light contact (CTA + email)
- Form contact (name, work email, company, message)

### States
- Default / Focus / Error / Success
- Error uses red accent, no animation

### Accessibility
- Visible labels
- Keyboard navigable
- ARIA error messaging

### Anti-Spam
- Honeypot field
- Rate limiting note

---

## Accessibility & Responsive
- WCAG AA contrast minimum
- No color-only meaning
- Mobile stacks planes vertically while preserving grid logic

---

## Acceptance Checklist
- No gradients, shadows, or rounded corners
- Color planes align strictly to grid
- Primary colors used sparingly
- SaaS trust modules present (placeholders)
- Fully responsive and accessible

---

## Do / Don’t

**Do**
- Use structure to create hierarchy
- Let grid and whitespace define rhythm

**Don’t**
- Add illustrations or photography
- Introduce decorative animation

