# SaaS Full Landing Page — Minimalist Monochrome Design Prompt

## Objective
Design and specify a **production-ready Full Landing Page** for a SaaS product using a **Minimalist Monochrome (Editorial Black & White)** aesthetic. The system should feel calm, authoritative, and content-first, emphasizing typography, spacing, and hierarchy over decoration.

## Inputs
- **Style:** S02 — Minimalist Monochrome (Editorial Black/White)
- **Industry:** SaaS
- **Use:** Full Landing Page

## Assumptions
- B2B SaaS product with trial, demo, or contact-sales CTA.
- No real metrics, certifications, or integrations are claimed; all proof points are placeholders.
- Audience values clarity and trust over visual flair.
- Desktop-first with strong mobile and tablet support.
- Accessibility target: WCAG 2.1 AA.
- Frontend stack: React + Tailwind CSS (or equivalent).
- Brand tone: restrained, editorial, non-hyped.

---

## Style DNA (S02 — Minimalist Monochrome)

### Palette Strategy
- Background: pure white or off-white
- Text primary: near-black
- Text secondary: dark gray
- Accent: grayscale only (no color)
- Borders: light gray
- CTA emphasis through contrast or inversion

### Typography Direction
- Serif + Sans pairing or refined sans-only system
- Editorial feeling (Inter, IBM Plex, Source Serif)

### Radius Policy
- None or very subtle (0–4px)

### Shadow Policy
- None

### Border / Line Language
- Hairline rules (1px)

### Pattern / Texture
- None

### Motion Philosophy
- Nearly static
- Motion only for state changes

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Elements
- Text-based metrics placeholders
- Monochrome customer logos
- Conservative security wording
- Editorial-style testimonials

### Copy Constraints
- Plain language
- Short paragraphs
- Strong headlines
- No buzzwords

---

## Deliverables

### Design Tokens (Human-Readable)

#### Color Roles
- Background: default / inverse
- Text: primary / secondary
- Border: neutral
- Accent: grayscale
- Status: success / danger

#### Typography System
- Primary font: Inter / IBM Plex Sans
- Secondary font (optional): Source Serif
- Scale: 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64
- Line height: 1.6 body, 1.25 headings
- Max line length: 55–68ch

#### Spacing Scale (8pt)
4, 8, 16, 24, 32, 48, 64, 96, 128

#### Radius / Border / Shadow
- Radius: 0–4px
- Border: 1px solid neutral
- Shadow: none

#### Layout Tokens
- Container width: 1200px
- Grid: 12 columns desktop / 4 columns mobile
- Gutters: 24px desktop / 16px mobile

#### Motion Tokens
- Duration: 100–150ms
- Easing: ease-out

#### Iconography
- Line icons or typographic symbols
- Monochrome only

---

### Design Tokens (YAML)
```yaml
colors:
  bg:
    default: "#FFFFFF"
    inverse: "#000000"
  text:
    primary: "#0A0A0A"
    secondary: "#4B4B4B"
  border: "#E0E0E0"
  accent: "#1A1A1A"
  success: "#1F7A3F"
  danger: "#B42318"

typography:
  primaryFont: "Inter, system-ui, sans-serif"
  secondaryFont: "Source Serif 4, serif"
  scale: [12, 14, 16, 18, 24, 32, 48, 64]
  lineHeight:
    body: 1.6
    heading: 1.25
  maxLineLength: "64ch"

spacing:
  base: 8
  scale: [4, 8, 16, 24, 32, 48, 64, 96, 128]

radius:
  none: 0
  sm: 4

layout:
  container: 1200
  gridDesktop: 12
  gridMobile: 4
  gutterDesktop: 24
  gutterMobile: 16

motion:
  duration: "120ms"
  easing: "ease-out"
```

---

### Sections Map (Full Landing Page)
1. Navigation
2. Hero
3. Editorial Value Statement
4. Social Proof
5. Product Principles
6. Core Features
7. How It Works
8. Metrics / Outcomes
9. Integrations
10. Security & Reliability
11. Testimonials
12. Pricing Preview
13. FAQ
14. Contact
15. Footer

---

### Hero Section Rules
- Large editorial headline
- Supporting paragraph (max 3 lines)
- One primary CTA
- Optional secondary text CTA

---

### Contact Section (Required)

**Modes**
- Light contact (email link)
- Form contact (name, work email, message)

**States**
- Default / Focus / Error / Success

**Anti-spam**
- Honeypot field

**Accessibility**
- Explicit labels
- Keyboard navigation
- Screen-reader friendly errors

---

### Components & States
- Buttons: primary / text
- Inputs: default / focus / error / disabled
- Divider rules
- Accordion (FAQ)

---

### Accessibility & Responsive
- Contrast ≥ 7:1 preferred
- Visible focus states
- No color-only meaning
- Touch targets ≥ 44px

---

### Engineering Notes
- CSS variables for tokens
- Tailwind grayscale extension
- Semantic HTML
- No gradients or shadows

---

### Acceptance Checklist
- [ ] Strict monochrome usage
- [ ] Typography-driven hierarchy
- [ ] All sections implemented
- [ ] Responsive layouts
- [ ] Accessibility baseline met
- [ ] Conservative SaaS messaging

---

## Do / Don’t

### Do
- Let typography lead
- Use whitespace aggressively
- Write like an editorial

### Don’t
- Add decorative color
- Over-animate
- Add unnecessary visuals
- Claim real certifications or metrics
