# Luxury Editorial (S10) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** using the **Luxury Editorial (S10)** style. The interface should convey restraint, confidence, and premium quality—borrowing from high-end editorial and fashion publishing—while remaining **clear, performant, and conversion-focused**.

---

## Inputs
- Style: S10 — Luxury Editorial
- Industry: SaaS
- Use: Full Landing Page

---

## Assumptions
- B2B or high-value SaaS (finance, analytics, enterprise tools)
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All metrics, logos, and testimonials are placeholders
- Imagery is optional and abstract/editorial (no stock clichés)
- Implementation via modern CSS / Tailwind

---

## Style DNA (S10 — Luxury Editorial)

### Visual Philosophy
- Quiet confidence and negative space
- Hierarchy through typography and proportion
- Minimal color, maximal restraint

### Palette Strategy
- Soft neutral backgrounds (ivory, warm gray)
- Deep ink text (near-black)
- One muted metallic or jewel-tone accent

### Typography Direction
- Serif or high-contrast serif for headlines
- Clean sans-serif for body copy
- Generous leading and margins

### Radius Policy
- Subtle radius (4–6px)

### Shadow Policy
- Extremely subtle, almost imperceptible

### Border / Line Language
- Thin hairlines
- Low-contrast separators

### Pattern / Texture
- None or extremely subtle paper texture

### Motion Philosophy
- Slow, elegant, editorial
- Fades and gentle slides only

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Modules (Placeholders)
- Enterprise client logos (monochrome)
- Performance or reliability metrics
- Security & compliance tone (no claims)

---

## Design Tokens (YAML)

```yaml
color:
  background:
    base: "#F7F6F3"
    surface: "#FFFFFF"
  ink:
    primary: "#111111"
    secondary: "#555555"
  accent:
    gold: "#B8A46A"

typography:
  fontFamily:
    primary: "Playfair Display, Georgia, serif"
    secondary: "Inter, system-ui, sans-serif"
  scale:
    h1:
      size: "54px"
      weight: 600
      lineHeight: 1.15
    h2:
      size: "32px"
      weight: 500
      lineHeight: 1.25
    body:
      size: "16px"
      weight: 400
      lineHeight: 1.7

spacing:
  unit: 8
  scale: [8,16,24,32,48,64,96,128]

radius:
  base: 6

border:
  width: 1
  style: "solid"
  color: "#E0DED8"

shadow:
  enabled: true
  style: "ultra-subtle"

motion:
  duration:
    base: "300ms"
  easing:
    default: "ease-in-out"
```

---

## Sections Map
1. Nav (minimal, editorial)
2. Hero (typography-led)
3. Value Proposition
4. Features (editorial columns)
5. Integrations / Clients
6. Metrics / Social Proof
7. Security & Reliability
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

## Acceptance Checklist
- Visual tone feels premium, never flashy
- Generous whitespace respected
- Typography drives hierarchy
- Trust modules clear and calm
- Fully responsive and accessible

---

## Do / Don’t

**Do**
- Let whitespace breathe
- Use typography as the hero

**Don’t**
- Add loud colors or heavy effects
- Rush transitions or cram