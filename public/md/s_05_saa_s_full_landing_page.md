# Brutalist (S05) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** using the **Brutalist (S05)** style. The outcome should feel raw, utilitarian, unapologetically functional, and deliberately non-polished—while remaining fully usable, accessible, and production-ready.

The design should communicate honesty, technical confidence, and clarity through **structure over decoration**.

---

## Inputs
- Style: S05 — Brutalist
- Industry: SaaS
- Use: Full Landing Page

---

## Assumptions
- B2B SaaS product, developer- or operator-facing
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All metrics, logos, and integrations are placeholders
- Implementation target: HTML + CSS / Tailwind (low abstraction)
- Audience values transparency over marketing polish

---

## Style DNA (S05 — Brutalist)

### Visual Philosophy
- Raw, structural, intentionally rough
- UI exposes its construction rather than hiding it
- Hierarchy through size, weight, and spacing
- Anti-decoration, anti-skeuomorphism

### Palette Strategy
- White or light gray base
- Black as primary ink
- One harsh accent color (optional, utilitarian)
- No gradients, no softness

### Typography Direction
- System fonts or neo-grotesk
- Large type jumps
- Visible typographic tension

### Radius Policy
- 0px only

### Shadow Policy
- None (or extremely hard offset shadows if used at all)

### Border / Line Language
- Thick borders
- High-contrast dividers
- Visible boxes and outlines

### Pattern / Texture
- None
- Plain backgrounds only

### Motion Philosophy
- Minimal to none
- Abrupt, instant transitions acceptable

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Modules (Placeholders)
- Usage metrics (e.g. teams, uptime)
- Integration list (unstyled logos or text list)
- Reliability & security copy (plain language)

### Tone
- Direct
- Honest
- Slightly blunt

---

## Design Tokens (YAML)

```yaml
color:
  background:
    base: "#FFFFFF"
    muted: "#F0F0F0"
  ink:
    primary: "#000000"
  accent:
    utilitarian: "#FF3B00"

typography:
  fontFamily:
    primary: "system-ui, Arial, sans-serif"
  scale:
    h1:
      size: "64px"
      weight: 800
      lineHeight: 1.05
    h2:
      size: "36px"
      weight: 700
      lineHeight: 1.15
    body:
      size: "16px"
      weight: 400
      lineHeight: 1.6

spacing:
  unit: 8
  scale: [8, 16, 24, 32, 48, 64, 96]

radius:
  base: 0

border:
  width:
    primary: 3
    secondary: 2
  style: "solid"
  color: "#000000"

shadow:
  enabled: false

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
    fast: "0ms"
  easing:
    default: "linear"
```

---

## Sections Map
1. Nav (unstyled, text-heavy)
2. Hero (large headline, boxed CTA)
3. Value Proposition (stacked text blocks)
4. Features (bordered lists)
5. Integrations (text or raw logos)
6. Metrics (big numbers)
7. Reliability & Security
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

## Contact Section
- Plain form
- No placeholders-only fields
- Strong visible labels
- Error states are text-based

---

## Accessibility & Responsive
- WCAG AA contrast
- Keyboard-first navigation
- Mobile stacks vertically without visual tricks

---

## Acceptance Checklist
- UI looks intentionally "unfinished" but usable
- No gradients, blur, or soft UI
- Thick borders visible everywhere
- Copy is clear and direct
- Fully responsive and accessible

---

## Do / Don’t

**Do**
- Expose structure
- Use typography aggressively
- Favor clarity over beauty

**Don’t**
- Add polish, animation, or decorative flair
- Hide layout behind abstracti