# Bauhaus SaaS Landing Page Prompt (S17)

## Objective
Design and specify a **conversion-focused Full Landing Page** for a **SaaS product** using the **S17 Bauhaus Modernism** style (primary shapes, bold grid, disciplined color system). Output must be **engineering-ready**: tokens, layout specs, components, responsive behavior, and accessibility.

## Inputs
- **Style:** S17 — Bauhaus Modernism (Primary Shapes + Bold Grid)
- **Industry:** SaaS
- **Use:** Full Landing Page

## Assumptions
- Product name placeholder: **[Automatic naming]**
- Core value prop placeholder: **[One-line Value Proposition]**
- Primary CTA: **Start free trial** (replaceable)
- Secondary CTA: **Book a demo** (replaceable)
- Target audience: **B2B teams**
- No real metrics, certifications, or customer logos are claimed; all proof uses placeholders
- Target stack: **Next.js + Tailwind CSS** using **CSS variables** for theming

---

## Style DNA (S17 – Bauhaus Modernism)

### Style Seeds
- **Palette strategy:** Warm off-white base, near-black text, one bold primary color and one accent color. Flat color fields only (no gradients).
- **Typography:** Geometric sans-serif dominant, mono for system/metrics labels. High contrast, grid-driven hierarchy.
- **Radius policy:** Mostly square. Radius limited to 0–8px for usability.
- **Shadow policy:** Minimal. Prefer outlines and stacking. Optional hard shadow for primary CTAs only.
- **Border language:** Thick rules, visible dividers, consistent stroke weights.
- **Patterns/textures:** Optional paper grain or dot grid at very low opacity.
- **Motion:** Mechanical, short, intentional. No spring or playful easing.

---

## Industry Constraints & Trust Modules (SaaS)

Required trust elements (placeholders only):
- Integrations wall with recognizable logo placeholders
- Security statements: Encryption, SSO, Audit Logs, DPA (placeholders only)
- Uptime / status link placeholder
- Testimonials and case-study cards
- Transparent pricing with clear disclaimers

Tone: confident, precise, non-hype.

---

## Deliverables

### Design Tokens (Human-Readable)

**Colors**
- Background primary / secondary
- Text primary / secondary / muted
- Brand primary / accent
- Borders strong / subtle
- State colors: success, warning, error
- Focus ring color (high contrast)

**Typography**
- Sans: Inter / Space Grotesk
- Mono: JetBrains Mono / IBM Plex Mono
- Scale:
  - H1 56/64
  - H2 40/48
  - H3 28/36
  - Body 16/24
  - Small 14/20
- Max line length: 72ch body, 48ch hero

**Spacing**
- 8pt system
- Section padding: 112–128 desktop / 64–80 mobile

**Radius / Border / Shadow**
- Radius: 0 / 4 / 8
- Border: 1 / 2 / 3px
- Shadow: none except optional hard CTA shadow

**Layout**
- Containers: 1120 (content), 1280 (wide)
- Grid: 12 / 8 / 4 columns

**Motion**
- 120–320ms durations
- Cubic-bezier(0.2,0.8,0.2,1)

---

### Design Tokens (YAML)
```yaml
tokens:
  color:
    bg:
      primary: "#F6F2EA"
      secondary: "#EEE7DB"
    text:
      primary: "#0E0F12"
      secondary: "#2C2F36"
      muted: "#5A5F6B"
    brand:
      primary: "#E53935"
      accent: "#FFC400"
    border:
      strong: "#0E0F12"
      subtle: "#C9C2B6"
  radius:
    none: 0
    sm: 4
    md: 8
  layout:
    container:
      content: 1120
      wide: 1280
    grid:
      desktop: 12
      tablet: 8
      mobile: 4
  motion:
    duration:
      micro: 120
      standard: 200
```

---

### Sections Map (Full Landing Page)
1. Top Navigation
2. Hero
3. Logo / Social Proof Row
4. Problem → Solution
5. Key Benefits
6. Product Demo / Screens
7. Integrations
8. Security & Reliability
9. Testimonials / Case Studies
10. Pricing
11. FAQ
12. Final CTA
13. Contact
14. Footer

---

### Contact Section (Required)

**Light Mode**
- Email link
- Calendar booking link

**Form Mode**
- Fields: Name, Work Email, Company, Role, Message
- States: default, focus, error, success
- Anti-spam: honeypot + rate limit
- Accessibility: labels, aria-describedby, keyboard order

---

### Accessibility & Responsive
- WCAG AA contrast
- Visible focus rings
- Reduced motion support
- Touch targets ≥ 44px
- Mobile-first layout

---

### Engineering Notes
- CSS variables for all tokens
- Tailwind config mapping tokens
- SVG for Bauhaus shapes
- No gradients or glass effects

---

### Acceptance Checklist
- Clear hierarchy and grid discipline
- Primary CTA visible above the fold
- No fake metrics or certifications
- Trust modules included
- Fully responsive
- Accessible by keyboard

---

## Do / Don’t

**Do**
- Use bold geometry and rules
- Keep copy concise
- Treat layout like a poster
- Accessibility of text must be considered

**Don’t**
- Don’t use gradients or glassmorphism
- Don’t over-animate
- Don’t round everything
- Don’t make the button text white.