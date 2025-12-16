# Material-ish (S13) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** using a **Material-ish (S13)** system. The interface should feel familiar, structured, and efficient—borrowing from Material principles (layers, elevation logic, motion)—while remaining **brand-flexible and production-ready**.

---

## Inputs
- Style: S13 — Material-ish
- Industry: SaaS
- Use: Full Landing Page

---

## Assumptions
- B2B SaaS with feature depth and dashboards
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All metrics, logos, and testimonials are placeholders
- Implementation via modern CSS / Tailwind / CSS variables

---

## Style DNA (S13 — Material-ish)

### Visual Philosophy
- Clear hierarchy through surfaces and elevation
- Predictable interactions
- Efficiency and clarity over expression

### Palette Strategy
- Light neutral base
- One strong brand primary
- Functional semantic colors

### Typography Direction
- Clean sans-serif
- Consistent scale and rhythm
- UI-first readability

### Radius Policy
- Moderate radius (6–10px)

### Shadow Policy
- Layered, soft elevation
- Clear z-axis logic

### Border / Line Language
- Minimal borders
- Separation via elevation

### Pattern / Texture
- None
- Flat surfaces only

### Motion Philosophy
- Purposeful, responsive
- Ease-out by default
- Motion communicates hierarchy

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Modules (Placeholders)
- Feature depth highlights
- Integration ecosystem
- Reliability & uptime messaging

---

## Design Tokens (YAML)

```yaml
color:
  background:
    base: "#F5F6F8"
    surface: "#FFFFFF"
  ink:
    primary: "#1F2937"
    secondary: "#6B7280"
  accent:
    primary: "#2563EB"
    success: "#16A34A"
    warning: "#F59E0B"
    danger: "#DC2626"

typography:
  fontFamily:
    primary: "Inter, system-ui, sans-serif"
  scale:
    h1:
      size: "48px"
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
  base: 8

shadow:
  elevation:
    level1: "0 1px 2px rgba(0,0,0,0.08)"
    level2: "0 4px 8px rgba(0,0,0,0.10)"
    level3: "0 8px 16px rgba(0,0,0,0.12)"

motion:
  duration:
    fast: "120ms"
    base: "200ms"
  easing:
    default: "cubic-bezier(0.2, 0, 0, 1)"
```

---

## Sections Map
1. Nav (elevated)
2. Hero (clear value proposition)
3. Value Proposition
4. Features (surface cards)
5. Integrations
6. Metrics / Social Proof
7. Reliability & Security
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

## Acceptance Checklist
- Clear elevation hierarchy
- Predictable interactions
- No decorative excess
- Strong usability focus
- Fully responsive and accessible

---

## Do / Don’t

**Do**
- Use elevation intentionally
- Keep interactions consistent

**Don’t**
- Over-layer surfaces
- Use motion without purpose