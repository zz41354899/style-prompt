import type { UseModule } from './types';

export const FullLandingPage_Config: UseModule = {
  id: 'FullLandingPage',
  name: 'Full Landing Page',
  type: 'use',
  content: `## Information Architecture — Full Landing Page (Conversion-Focused)

### Goals
- Above-the-fold: instant value comprehension + obvious primary CTA
- Build trust via verifiable mechanisms (integrations, security, reliability, cases)
- Transparent pricing with clear limits and explicit disclaimers

### Required Sections (recommended order)
1. **Top Navigation**
   - Logo + anchor links
   - Primary CTA (e.g. "Start free trial")
   - Secondary CTA (e.g. "Book a demo")

2. **Hero**
   - H1 one-line value proposition (within 48ch)
   - One supporting line (within 72ch)
   - Primary / Secondary CTA
   - Status/Uptime link (placeholder)

3. **Logo / Social Proof Row (placeholders)**
   - Logo wall with neutral placeholder blocks (no real brands)
   - Optional: one-line proof statement (placeholder)

4. **Problem → Solution**
   - Contrast narrative: problem (cost/risk/no traceability) → solution (mechanisms/flow/permissions)

5. **Key Benefits (3–6)**
   - Each card: one benefit line + one mechanism line

6. **Product Demo / Screens (placeholder)**
   - One primary screen (skeleton/placeholder)
   - Three scannable callouts (short, specific)

7. **Integrations (Required, placeholders)**
   - Integrations wall + category labels (placeholder)

8. **Security & Reliability (Required, placeholders)**
   - Encryption / SSO / Audit Logs / DPA (placeholder)
   - Status page link (placeholder)

9. **Testimonials / Case Studies (Required, placeholders)**
   - Quote cards + case cards (no real numbers)

10. **Pricing (Required)**
    - Three tiers + clear disclaimer (placeholder)
    - Comparison table (desktop) / accordion (mobile)

11. **FAQ**
    - 6–8 items covering onboarding, permissions, audits, exports, billing

12. **Final CTA**
    - Reinforce the claim + repeat the primary CTA

13. **Contact (Required)**
    - Email / calendar link (placeholder)
    - Form (anti-spam + accessibility requirements)

14. **Footer**
    - Links (Privacy/Terms/Status placeholders)
    - Disclaimer`,
  architecture: `## Deliverables (Engineering-Ready)

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

### Responsive (Mobile-first)
- Grid: Desktop 12 / Tablet 8 / Mobile 4
- Hero: Desktop 6/6 split; Mobile stacked vertical
- Pricing comparison: table (desktop); accordion (mobile)
- Touch targets: >= 44px

### Accessibility (WCAG AA)
- All interactive elements must support keyboard navigation and have a high-contrast focus ring
- Support prefers-reduced-motion: remove large motion/entrances; keep essential state changes
- Semantic structure: nav / main / section / footer; single H1

### Contact Section (Required)

**Light Mode**
- Email link (placeholder)
- Calendar booking link (placeholder)

**Form Mode**
- Fields (required): Name, Work Email, Company, Message
- Fields (optional): Role
- States: default, focus, error, success
- Anti-spam: honeypot + rate limit (server/edge)
- Accessibility:
  - Every field must have a label
  - Error messages must map via aria-describedby
  - aria-invalid must be true when invalid
  - Error feedback can use role="alert" (or equivalent)

### Engineering Notes
- All tokens must be CSS variables; Tailwind should only map to variables
- No gradients / glass / fake depth shadows; CTA may use an optional hard shadow
- Any proof module and outcome language must be explicitly labeled as "placeholder"

### Acceptance Checklist
- Above-the-fold: primary CTA visible; value proposition is immediately clear
- Trust modules included: Integrations / Security / Testimonials / Pricing disclaimer
- Responsive, keyboard accessible, AA-level contrast`
};
