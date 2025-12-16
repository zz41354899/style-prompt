# Japanese Minimal (S11) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** using the **Japanese Minimal (S11)** style. The interface should feel calm, precise, and intentional—emphasizing emptiness, rhythm, and clarity—while remaining **highly usable, accessible, and production-ready**.

---

## Inputs
- Style: S11 — Japanese Minimal
- Industry: SaaS
- Use: Full Landing Page

---

## Assumptions
- B2B SaaS valuing clarity, trust, and long-term reliability
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All metrics, logos, and testimonials are placeholders
- Imagery is optional, abstract, and quiet
- Implementation via modern CSS / Tailwind

---

## Style DNA (S11 — Japanese Minimal)

### Visual Philosophy
- Ma (間): intentional emptiness
- Calm hierarchy and quiet confidence
- Reduction to essential elements only

### Palette Strategy
- Soft white or warm gray backgrounds
- Charcoal or ink-black text
- One restrained accent color (indigo or moss)

### Typography Direction
- Sans-serif with neutral tone
- Balanced vertical rhythm
- Comfortable reading cadence

### Radius Policy
- Small, subtle radius (2–4px)

### Shadow Policy
- None or extremely subtle

### Border / Line Language
- Thin, low-contrast lines
- Used sparingly

### Pattern / Texture
- None
- Flat, calm surfaces only

### Motion Philosophy
- Slow, gentle, almost imperceptible
- Fades over transforms

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Modules (Placeholders)
- Calm metrics presentation
- Integration list with neutral icons
- Privacy & reliability messaging (plain, reassuring tone)

---

## Design Tokens (YAML)

```yaml
color:
  background:
    base: "#FAFAF9"
    surface: "#FFFFFF"
  ink:
    primary: "#1C1C1C"
    secondary: "#5A5A5A"
  accent:
    indigo: "#2F3E46"

typography:
  fontFamily:
    primary: "Inter, system-ui, sans-serif"
  scale:
    h1:
      size: "48px"
      weight: 600
      lineHeight: 1.2
    h2:
      size: "28px"
      weight: 500
      lineHeight: 1.3
    body:
      size: "16px"
      weight: 400
      lineHeight: 1.7

spacing:
  unit: 8
  scale: [8,16,24,32,48,64,96,128]

radius:
  base: 4

border:
  width: 1
  style: "solid"
  color: "#E5E5E5"

shadow:
  enabled: false

motion:
  duration:
    base: "320ms"
  easing:
    default: "ease-in-out"
```

---

## Sections Map
1. Nav (quiet, minimal)
2. Hero (short headline, generous space)
3. Value Proposition
4. Features (simple list)
5. Integrations
6. Metrics / Social Proof
7. Privacy & Reliability
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

## Acceptance Checklist
- Calm visual rhythm
- Generous whitespace respected
- No visual noise or decoration
- Trust conveyed through restraint
- Fully responsive and accessible

---

## Do / Don’t

**Do**
- Let space speak
- Reduce until essential

**Don’t**
- Add decorative effects
- Rush visual pacing

