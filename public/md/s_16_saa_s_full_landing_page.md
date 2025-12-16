# Terminal / Hacker (S16) — SaaS Full Landing Page Design Prompt

## Objective
Design a **full SaaS landing page** using the **Terminal / Hacker (S16)** style. The interface should feel command-line–inspired, technical, and trustworthy—prioritizing **clarity, speed, and precision**—while remaining **accessible, responsive, and production-ready**.

---

## Inputs
- Style: S16 — Terminal / Hacker
- Industry: SaaS
- Use: Full Landing Page

---

## Assumptions
- B2B SaaS for developers, infra, security, or data
- Primary CTA: Start Free Trial
- Secondary CTA: Request Demo
- All metrics, logos, and snippets are placeholders
- Dark mode is default with a light-mode fallback
- Implementation via modern CSS / Tailwind / CSS variables

---

## Style DNA (S16 — Terminal / Hacker)

### Visual Philosophy
- Function-first, no ornament
- Familiar terminal metaphors translated to UI
- Confidence through precision and restraint
n### Palette Strategy
- Near-black background
- High-contrast mono text
- One ANSI-style accent (green or cyan)

### Typography Direction
- Monospace primary
- Tight rhythm and consistent columns
- Clear hierarchy via size and weight

### Radius Policy
- 0–2px (mostly sharp)

### Shadow Policy
- None

### Border / Line Language
- Thin mono dividers
- ASCII-like separators allowed

### Pattern / Texture
- None
n### Motion Philosophy
- Instant or near-instant
- Cursor blink or caret emphasis allowed

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Modules (Placeholders)
- Uptime / performance metrics
- CLI / API compatibility examples
- Security & reliability copy (plain, factual)

---

## Design Tokens (YAML)

```yaml
color:
  background:
    base: "#0B0F14"
    surface: "#0F172A"
  ink:
    primary: "#E5E7EB"
    secondary: "#9CA3AF"
  accent:
    ansiGreen: "#22C55E"

typography:
  fontFamily:
    primary: "JetBrains Mono, SFMono-Regular, Menlo, monospace"
  scale:
    h1:
      size: "42px"
      weight: 600
      lineHeight: 1.25
    h2:
      size: "26px"
      weight: 500
      lineHeight: 1.3
    body:
      size: "15px"
      weight: 400
      lineHeight: 1.7

spacing:
  unit: 8
  scale: [8,16,24,32,48,64,96]

radius:
  base: 2

border:
  width: 1
  style: "solid"
  color: "#1F2937"

shadow:
  enabled: false

motion:
  duration:
    fast: "80ms"
  easing:
    default: "linear"
```

---

## Sections Map
1. Nav (text-only, monospace)
2. Hero (terminal-style intro)
3. Value Proposition
4. Features (command blocks)
5. Integrations / API
6. Metrics / Benchmarks
7. Security & Reliability
8. Pricing Preview
9. FAQ
10. Contact
11. Footer

---

## Acceptance Checklist
- High contrast and legibility
- Monospace consistently applied
- No decorative effects
- Fast interactions
- Fully responsive and accessible

---

## Do / Don’t

**Do**
- Use code metaphors carefully
- Keep copy concise and factual

**Don’t**
- Add gradients, blur, or soft UI
- Break terminal rhythm with playful elements
