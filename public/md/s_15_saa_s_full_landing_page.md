# Neumorphism (S15) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** using the **Neumorphism (S15)** style. The interface should feel soft, tactile, and calm—using subtle extrusion and inset effects—while remaining **accessible, legible, and production-ready**.

---

## Inputs
- Style: S15 — Neumorphism
- Industry: SaaS
- Use: Full Landing Page

---

## Assumptions
- B2B or prosumer SaaS emphasizing simplicity and comfort
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All metrics, logos, and testimonials are placeholders
- Neumorphic effects used sparingly and never for core text
- Implementation via modern CSS / Tailwind with fallbacks

---

## Style DNA (S15 — Neumorphism)

### Visual Philosophy
- Soft tactility and calm depth
- Objects appear extruded from the background
- Minimal contrast, high harmony

### Palette Strategy
- Single light base color family
- Low-contrast shadows (light + dark pair)
- One restrained accent for CTAs

### Typography Direction
- Clean sans-serif
- Slightly increased weight for readability
- Comfortable spacing

### Radius Policy
- Large radius (14–18px)

### Shadow Policy
- Dual shadows (light top-left, dark bottom-right)
- Inset shadows for pressed states

### Border / Line Language
- No visible borders
- Separation via shadow only

### Pattern / Texture
- None
- Smooth matte surfaces

### Motion Philosophy
- Gentle and slow
- Press / release interactions only

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Modules (Placeholders)
- Metrics displayed on flat cards
- Integration logos on neutral surfaces
- Security & reliability copy on high-contrast blocks

---

## Design Tokens (YAML)

```yaml
color:
  background:
    base: "#E9EDF2"
    surface: "#E9EDF2"
  ink:
    primary: "#1F2937"
    secondary: "#6B7280"
  accent:
    primary: "#4F46E5"

typography:
  fontFamily:
    primary: "Inter, system-ui, sans-serif"
  scale:
    h1:
      size: "46px"
      weight: 600
      lineHeight: 1.25
    h2:
      size: "28px"
      weight: 500
      lineHeight: 1.3
    body:
      size: "16px"
      weight: 450
      lineHeight: 1.7

spacing:
  unit: 8
  scale: [8,16,24,32,48,64,96]

radius:
  base: 16

shadow:
  neumorphic:
    raised: "8px 8px 16px rgba(0,0,0,0.15), -8px -8px 16px rgba(255,255,255,0.7)"
    inset: "inset 6px 6px 12px rgba(0,0,0,0.15), inset -6px -6px 12px rgba(255,255,255,0.7)"

motion:
  duration:
    base: "260ms"
  easing:
    default: "ease-in-out"
```

---

## Sections Map
1. Nav (flat, soft buttons)
2. Hero (raised cards)
3. Value Proposition
4. Features (neumorphic cards)
5. Integrations
6. Metrics / Social Proof
7. Security & Reliability
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

## Acceptance Checklist
- Neumorphic effects used sparingly
- Text contrast meets WCAG AA
- Clear fallback for accessibility
- Calm, consistent depth
- Fully responsive and accessible

---

## Do / Don’t

**Do**
- Use neumorphism for containers, not text
- Provide clear pressed / active states

**Don’t**
- Overuse inset shadows everywhere
- Sacrifice contrast or clarity
