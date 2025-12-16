# Retro 60s–70s / Print Grain (S08) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** using the **Retro 60s–70s (Print Grain) (S08)** style. The interface should evoke warmth, tactility, and editorial confidence inspired by mid-century print design—while remaining **clear, accessible, and production-ready** for modern SaaS.

---

## Inputs
- Style: S08 — Retro 60s–70s (Print Grain)
- Industry: SaaS
- Use: Full Landing Page

---

## Assumptions
- B2B SaaS with strong narrative positioning
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All metrics, logos, and testimonials are placeholders
- Subtle texture allowed via CSS (no heavy images)
- Implementation via modern CSS / Tailwind

---

## Style DNA (S08 — Retro 60s–70s)

### Visual Philosophy
- Human, warm, and editorial
- Confidence through restraint and proportion
- Print-inspired hierarchy adapted to digital

### Palette Strategy
- Warm off-white or cream backgrounds
- Earthy accent colors (burnt orange, olive, mustard)
- Muted contrast, never harsh

### Typography Direction
- Serif or serif + sans pairing
- Editorial headlines, readable body text
- Comfortable line lengths

### Radius Policy
- Small, soft radius (6–8px)

### Shadow Policy
- Very subtle, print-like depth
- No strong elevation

### Border / Line Language
- Thin rules, low contrast
- Used sparingly for separation

### Pattern / Texture
- Light paper grain / halftone simulation
- Applied globally at very low opacity

### Motion Philosophy
- Slow, calm, editorial
- Gentle fades and slides only

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Modules (Placeholders)
- Customer count or usage metrics
- Logos or wordmarks (muted, monochrome)
- Reliability & security copy in plain language

---

## Design Tokens (YAML)

```yaml
color:
  background:
    base: "#FAF7F2"
    surface: "#F2EDE4"
  ink:
    primary: "#2A2A2A"
    secondary: "#5E5E5E"
  accent:
    burntOrange: "#C65A2E"
    olive: "#6B7A4B"
    mustard: "#D6A84F"

typography:
  fontFamily:
    primary: "Source Serif 4, Georgia, serif"
    secondary: "Inter, system-ui, sans-serif"
  scale:
    h1:
      size: "52px"
      weight: 600
      lineHeight: 1.2
    h2:
      size: "32px"
      weight: 600
      lineHeight: 1.3
    body:
      size: "17px"
      weight: 400
      lineHeight: 1.7

spacing:
  unit: 8
  scale: [8,16,24,32,48,64,96]

radius:
  base: 8

border:
  width: 1
  style: "solid"
  color: "#D8D2C8"

shadow:
  enabled: true
  style: "subtle"

motion:
  duration:
    base: "260ms"
  easing:
    default: "ease-in-out"
```

---

## Sections Map
1. Nav (editorial, calm)
2. Hero (story-led headline)
3. Value Proposition
4. Features (editorial blocks)
5. Integrations / Proof
6. Metrics / Social Proof
7. Security & Reliability
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

## Acceptance Checklist
- Warm, tactile tone without hurting clarity
- Texture extremely subtle
- Comfortable reading rhythm
- Fully responsive and accessible

---

## Do / Don’t

**Do**
- Prioritize narrative flow
- Use color emotionally but sparingly

**Don’t**
- Over-texturize surfaces
- Use sharp, neon-like contrast

