# Glassmorphism (S14) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** using the **Glassmorphism (S14)** style. The interface should feel light, modern, and spatial—using translucency and blur—while remaining **readable, performant, and production-ready**.

---

## Inputs
- Style: S14 — Glassmorphism
- Industry: SaaS
- Use: Full Landing Page

---

## Assumptions
- B2B or prosumer SaaS with strong visual brand
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All metrics, logos, and testimonials are placeholders
- Backdrop-filter supported with graceful fallbacks
- Implementation via modern CSS / Tailwind

---

## Style DNA (S14 — Glassmorphism)

### Visual Philosophy
- Airy, layered, and spatial
- Depth through translucency, not heavy shadows
- Content clarity always overrides effect

### Palette Strategy
- Soft gradient or image-based background
- Neutral translucent surfaces
- One bright accent color for CTAs

### Typography Direction
- Clean sans-serif
- High contrast for legibility on glass
- Moderate hierarchy

### Radius Policy
- Medium radius (10–14px)

### Shadow Policy
- Soft, diffused shadows
- Secondary to blur

### Border / Line Language
- Thin, light borders
- Frosted edges

### Pattern / Texture
- None
- Rely on blur and transparency

### Motion Philosophy
- Smooth and floating
- Gentle parallax allowed
- Reduced-motion safe

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Modules (Placeholders)
- Metrics with solid text contrast
- Integration logos on opaque fallback cards
- Security & reliability copy on non-transparent surfaces

---

## Design Tokens (YAML)

```yaml
color:
  background:
    base: "linear-gradient(135deg, #E8EDFF, #F9FBFF)"
    surface: "rgba(255, 255, 255, 0.6)"
  ink:
    primary: "#0F172A"
    secondary: "#475569"
  accent:
    primary: "#6366F1"

typography:
  fontFamily:
    primary: "Inter, system-ui, sans-serif"
  scale:
    h1:
      size: "50px"
      weight: 600
      lineHeight: 1.2
    h2:
      size: "30px"
      weight: 500
      lineHeight: 1.3
    body:
      size: "16px"
      weight: 400
      lineHeight: 1.6

spacing:
  unit: 8
  scale: [8,16,24,32,48,64,96]

radius:
  base: 12

border:
  width: 1
  style: "solid"
  color: "rgba(255,255,255,0.4)"

shadow:
  style: "soft"
  value: "0 8px 24px rgba(0,0,0,0.08)"

blur:
  backdrop:
    amount: "12px"
    fallback: "opaque"

motion:
  duration:
    base: "220ms"
  easing:
    default: "ease-out"
```

---

## Sections Map
1. Nav (glass surface)
2. Hero (layered glass cards)
3. Value Proposition
4. Features (glass panels)
5. Integrations
6. Metrics / Social Proof
7. Security & Reliability
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

## Acceptance Checklist
- Glass effects never reduce readability
- Solid fallbacks for unsupported browsers
- Contrast meets WCAG AA
- Motion remains subtle
- Fully responsive and accessible

---

## Do / Don’t

**Do**
- Use blur selectively
- Prioritize text clarity

**Don’t**
- Stack multiple heavy glass layers
- Sacrifice performance for effects

