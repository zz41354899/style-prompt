# Memphis (S09) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** using the **Memphis (S09)** style. The interface should feel playful, bold, and expressive—using color, pattern, and geometry—while remaining **clear, structured, and conversion-oriented** for a modern SaaS audience.

---

## Inputs
- Style: S09 — Memphis
- Industry: SaaS
- Use: Full Landing Page

---

## Assumptions
- B2B or prosumer SaaS with strong brand personality
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All metrics, logos, and testimonials are placeholders
- Patterns are vector/CSS-based (no heavy images)
- Implementation via modern CSS / Tailwind / SVG

---

## Style DNA (S09 — Memphis)

### Visual Philosophy
- Playful postmodern expression with strict underlying structure
- Controlled chaos: bold shapes constrained by grid
- Brand-forward, memorable, confident

### Palette Strategy
- Light neutral base (off-white)
- Bright, contrasting accents (teal, pink, yellow, black)
- High saturation used in small doses

### Typography Direction
- Sans-serif, friendly grotesk
- Large headlines with personality
- Clear body text for long-form readability

### Radius Policy
- Medium radius (8–12px)

### Shadow Policy
- Minimal or none
- Flat composition preferred

### Border / Line Language
- Black outlines for shapes and cards
- Decorative zig-zag or dotted lines used sparingly

### Pattern / Texture
- Geometric patterns (dots, squiggles, triangles)
- Used as section backdrops at low density

### Motion Philosophy
- Snappy and joyful
- Small bounces or overshoot allowed on micro-interactions
- Respect reduced-motion preferences

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Modules (Placeholders)
- Metrics row (teams, usage)
- Logo grid (simplified, monochrome option)
- Security & reliability copy kept neutral

---

## Design Tokens (YAML)

```yaml
color:
  background:
    base: "#FFFBF5"
    surface: "#FFFFFF"
  ink:
    primary: "#1A1A1A"
  accent:
    teal: "#00B3A4"
    pink: "#FF4F9A"
    yellow: "#FFD233"
    black: "#000000"

typography:
  fontFamily:
    primary: "Inter, system-ui, sans-serif"
  scale:
    h1:
      size: "58px"
      weight: 700
      lineHeight: 1.1
    h2:
      size: "34px"
      weight: 600
      lineHeight: 1.25
    body:
      size: "16px"
      weight: 400
      lineHeight: 1.6

spacing:
  unit: 8
  scale: [8,16,24,32,48,64,96]

radius:
  base: 10

border:
  width: 2
  style: "solid"
  color: "#000000"

shadow:
  enabled: false

motion:
  duration:
    fast: "140ms"
    base: "220ms"
  easing:
    default: "cubic-bezier(0.2, 1.2, 0.4, 1)"
```

---

## Sections Map
1. Nav (playful accents)
2. Hero (bold headline + shapes)
3. Value Proposition
4. Features (colorful cards)
5. Integrations
6. Metrics / Social Proof
7. Security & Reliability
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

## Acceptance Checklist
- Playful but never confusing
- Strong grid under expressive visuals
- Patterns used sparingly
- SaaS trust modules clearly readable
- Fully responsive and accessible

---

## Do / Don’t

**Do**
- Let brand personality shine
- Use color to guide attention

**Don’t**
- Overcrowd with patterns
- Sacrifice clarity for decoration
