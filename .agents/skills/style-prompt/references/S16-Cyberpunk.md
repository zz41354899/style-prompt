# Style: Cyberpunk (S16)

## Overview
- **ID**: S16
- **Name**: Cyberpunk
- **Industries**: Lifestyle, Tech
- **Category**: Futuristic

## Design DNA
- **Palette Strategy**: Dark background with vibrant neon accents. Cyberpunk aesthetic.
- **Typography**: Modern, tech-focused fonts (e.g., Orbitron, Rajdhani).
- **Radius Policy**: Sharp edges or very minimal rounding.
- **Shadow Policy**: Intense neon glows and bloom effects.
- **Border Language**: Glowing hairline borders.
- **Patterns**: Digital noise, circuit-like lines, glitch effects.
- **Motion**: Fast, jittery, or glitchy transitions.

## Rules
### Do
- Use intense neon colors (Cyan, Magenta, Yellow)
- Apply glowing effects to borders and text
- Use dark or absolute black backgrounds
- Incorporate digital/tech motifs

### Don't
- Don't use soft, natural colors
- Don't use heavy rounded corners
- Don't make it look too clean or corporate
- Don't use slow, smooth easing for all animations

---

## Complete Prompt

# Cyberpunk SaaS Landing Page Prompt (S16)

## Objective
Design and specify a **conversion-focused Full Landing Page** for a **SaaS product** using the **S16 Cyberpunk** style. Output must be **engineering-ready**: tokens, layout specs, components, responsive behavior, and accessibility.

## Inputs
- **Style:** S16 — Cyberpunk
- **Industry:** SaaS
- **Use:** Full Landing Page

## Assumptions
- Product name placeholder: **[Automatic naming]**
- Core value prop placeholder: **[One-line Value Proposition]**
- Primary CTA: **Start free trial**
- Secondary CTA: **Book a demo**
- Target audience: **B2B teams and developers**
- No real metrics, certifications, or customer logos are claimed; all proof uses placeholders
- Target stack: **React + Next.js (App Router) + TypeScript + Tailwind CSS** using **CSS variables** for theming

---

## Style DNA (S16 – Cyberpunk)

### Style Seeds
- **Palette strategy:** Dark background with vibrant neon accents. Cyberpunk aesthetic.
- **Typography:** Modern, tech-focused fonts (e.g., Orbitron, Rajdhani).
- **Radius policy:** Sharp edges or very minimal rounding.
- **Shadow policy:** Intense neon glows and bloom effects.
- **Border language:** Glowing hairline borders.
- **Patterns/textures:** Digital noise, circuit-like lines, glitch effects.
- **Motion:** Fast, jittery, or glitchy transitions.

Tone: confident, precise, non-hype.

---

```yaml
tokens:
  meta:
    style_id: "S16"
    style_name: "Cyberpunk"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#050505"
      secondary: "#0F0F0F"
    text:
      primary: "#FFFFFF"
      secondary: "#00F3FF"
      muted: "#444444"
    brand:
      primary: "#00F3FF"
      secondary: "#FF00FF"
      accent: "#FFFF00"
    border:
      strong: "#00F3FF"
      subtle: "rgba(0, 243, 255, 0.2)"
    focus:
      ring: "#00F3FF"
  radius:
    none: 0
    sm: 2
    md: 4
  border:
    width: { hairline: 1, medium: 2, strong: 3 }
  shadow:
    neon: "0 0 10px rgba(0, 243, 255, 0.8), 0 0 20px rgba(0, 243, 255, 0.4)"
    bloom: "0 0 40px rgba(255, 0, 255, 0.6)"
  layout:
    container: { content: 1120, wide: 1280 }
  motion:
    duration: { fast: 100, normal: 200 }
    easing: "cubic-bezier(0.19, 1, 0.22, 1)"
  typography:
    font:
      sans: { primary: "Rajdhani", fallback: ["Orbitron", "sans-serif"] }
      mono: { primary: "JetBrains Mono", fallback: ["monospace"] }
    scale:
      h1: { size: 64, line: 72, weight: 700, tracking: 0.05 }
      h2: { size: 44, line: 52, weight: 700, tracking: 0.02 }
      body: { size: 16, line: 24, weight: 500, tracking: 0.02 }
  spacing:
    base: 8
    section_py: { mobile: [80, 100], desktop: [120, 160] }
```

---

## Deliverables
- Full hero section with high-impact product visualization
- Multi-column features grid with icon/illustration slots
- Social proof/customer logo strip (using placeholders)
- Pricing table with monthly/annual toggle
- FAQ accordion system
- Final conversion CTA module
- Responsive footer with site map

---

## Accessibility & Responsive
- WCAG AA contrast
- Visible focus rings
- Reduced motion support
- Touch targets ≥ 44px
- Mobile-first layout

---

## Engineering Notes
- CSS variables for all tokens
- Tailwind config mapping tokens
- Use semantic HTML5 elements
- Implement responsive design with mobile-first approach
- Ensure all interactive elements are keyboard accessible
- Include loading states and error handling

---

## Acceptance Checklist
- Clear hierarchy and visual discipline
- Primary CTA visible above the fold
- No fake metrics or certifications
- Trust modules included
- Fully responsive
- Accessible by keyboard
