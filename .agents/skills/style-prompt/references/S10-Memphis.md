# Style: Memphis (S10)

## Overview
- **ID**: S10
- **Name**: Memphis
- **Industries**: Creative, Lifestyle
- **Category**: Artistic

## Design DNA
- **Palette Strategy**: Bold primary colors. White backgrounds. Systematic palette.
- **Typography**: Roboto or similar. Clear hierarchy. Medium weights.
- **Radius Policy**: Consistent (4-8px). Systematic.
- **Shadow Policy**: Elevation system. Multiple levels.
- **Border Language**: Minimal borders. Rely on shadows.
- **Patterns**: Geometric patterns, dots, stripes.
- **Motion**: Responsive animations. Standard curves.

## Rules
### Do
- Use elevation and shadows
- Follow material principles
- Use bold colors with purpose
- Maintain clear hierarchy

### Don't
- Don't use flat design exclusively
- Don't ignore elevation levels
- Don't use too many elevations
- Don't use low-quality icons

---

## Complete Prompt

# Memphis SaaS Landing Page Prompt (S10)

## Objective
Design and specify a **conversion-focused Full Landing Page** for a **SaaS product** using the **S10 Memphis** style. Output must be **engineering-ready**: tokens, layout specs, components, responsive behavior, and accessibility.

## Inputs
- **Style:** S10 — Memphis
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

## Style DNA (S10 – Memphis)

### Style Seeds
- **Palette strategy:** Bold primary colors. White backgrounds. Systematic palette.
- **Typography:** Roboto or similar. Clear hierarchy. Medium weights.
- **Radius policy:** Consistent (4-8px). Systematic.
- **Shadow policy:** Elevation system. Multiple levels.
- **Border language:** Minimal borders. Rely on shadows.
- **Patterns/textures:** Geometric patterns, dots, stripes.
- **Motion:** Responsive animations. Standard curves.

Tone: confident, precise, non-hype.

---

```yaml
tokens:
  meta:
    style_id: "S10"
    style_name: "Memphis"
    industry: "SaaS"
    use_case: "Full Landing Page"
  color:
    bg:
      primary: "#FFFFFF"
      secondary: "#FAFAFA"
      surface: "#FFFFFF"
    text:
      primary: "#212121"
      secondary: "#757575"
      muted: "#9E9E9E"
    brand:
      primary: "#6200EE"
      secondary: "#03DAC6"
      accent: "#FF5722"
    border:
      strong: "#E0E0E0"
      subtle: "#F5F5F5"
    state: { success: "#03DAC6", warning: "#FF5722", error: "#6200EE" }
    focus: { ring: "#6200EE" }
  radius:
    none: 0
    sm: 4
    md: 8
    lg: 16
  border:
    width: { hairline: 1, medium: 2, strong: 3 }
  shadow:
    elevation1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    elevation2: "0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)"
    elevation3: "0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)"
  layout:
    container: { content: 1120, wide: 1280 }
    grid: { desktop: 12, tablet: 8, mobile: 4 }
    gutter: mobile: 16, desktop: 24
  motion:
    duration: { fast: 150, normal: 250 }
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  typography:
    font:
      sans: { primary: "Roboto", fallback: ["Inter", "system-ui", "Segoe UI"] }
      mono: { primary: "JetBrains Mono", fallback: ["ui-monospace"] }
    scale:
      h1: { size: 56, line: 64, weight: 600, tracking: -0.02 }
      h2: { size: 40, line: 48, weight: 600, tracking: -0.01 }
      h3: { size: 28, line: 36, weight: 600, tracking: -0.005 }
      body: { size: 16, line: 24, weight: 450, tracking: 0 }
      small: { size: 14, line: 20, weight: 450, tracking: 0 }
    measure: { hero_max: "48ch", body_max: "72ch" }
  spacing:
    base: 8
    section_py: { mobile: [64, 80], desktop: [112, 128] }
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
