# Swiss / International Typographic (S04) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** grounded in the **Swiss / International Typographic Style (S04)**. The result must emphasize clarity, hierarchy, neutrality, and grid discipline, suitable for production-grade frontend implementation.

## Inputs
- Style: S04 — Swiss / International Typographic
- Industry: SaaS
- Use: Full Landing Page

## Assumptions
- B2B SaaS product
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All proof points are placeholders
- Implementation via CSS Grid / Flexbox / Tailwind

## Style DNA (S04)
- Rational, objective, content-first
- Strong grid, left-aligned rhythm
- Neutral color usage
- Typography-driven hierarchy

## Design Tokens (YAML)
```yaml
color:
  background:
    base: "#FFFFFF"
    muted: "#F2F2F2"
  ink:
    primary: "#111111"
    secondary: "#555555"
  accent:
    primary: "#0057FF"

typography:
  fontFamily:
    primary: "Helvetica Neue, Inter, system-ui, sans-serif"
  scale:
    h1: { size: "52px", weight: 700, lineHeight: 1.1 }
    h2: { size: "32px", weight: 600, lineHeight: 1.2 }
    body: { size: "16px", weight: 400, lineHeight: 1.6 }

spacing:
  unit: 8
  scale: [8,16,24,32,48,64,96]

radius: { base: 0 }

border:
  width: 1
  color: "#CCCCCC"

layout:
  grid:
    columns: 12
    gutter: 24
```

## Sections Map
- Nav
- Hero
- Value Proposition
- Features
- Integrations
- Metrics
- Security
- Pricing
- FAQ
- Contact
- Footer

## Acceptance Checklist
- Strict grid alignment
- Typography-first hierarchy
- No decorative elements
- Accessible contrast

---

## Do / Don’t

**Do**
- Use structure to create hierarchy
- Let grid and whitespace lead

**Don’t**
- Add illustrations or expressive animation