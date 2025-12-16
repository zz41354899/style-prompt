# SaaS Full Landing Page — Tech Minimal StylesPrompt

## Objective
Design and specify a **production-ready Full Landing Page** for a SaaS product using a **Tech Minimal** aesthetic. The output must be immediately actionable for UI/UX design and frontend implementation (Tailwind/CSS variables), prioritizing clarity, performance, and conversion.

## Inputs
- **Style:** S01 — Tech Minimal  
- **Industry:** SaaS  
- **Use:** Full Landing Page

## Assumptions
- The product is a B2B SaaS with a free trial or demo-based CTA.
- No real metrics, certifications, or integrations are claimed; all proofs use replaceable placeholders.
- Desktop-first with strong tablet/mobile support.
- Brand tone: neutral, professional, confident.
- Accessibility target: WCAG 2.1 AA baseline.
- Frontend stack assumption: React + Tailwind CSS (or equivalent).

---

## Style DNA (S01 — Tech Minimal)

### Palette Strategy
- Background: near-white / soft neutral
- Primary: cool tech blue or indigo
- Secondary: muted teal or violet
- Text: near-black body text, darker neutral headings
- Borders: light neutral strokes
- Accent: single high-contrast accent reserved for CTAs

### Typography Direction
- Sans-serif only
- Modern grotesk / humanist (Inter, SF Pro, Source Sans 3)

### Radius Policy
- Small, consistent radii
- No decorative rounding

### Shadow Policy
- Extremely subtle elevation
- Prefer borders over shadows

### Border / Line Language
- 1px neutral lines
- Used for layout and card separation

### Pattern / Texture
- None

### Motion Philosophy
- Fast, subtle, functional
- Motion reinforces hierarchy and feedback only

---

## Industry Constraints & Trust Modules (SaaS)

### Required Trust Elements
- Metrics placeholders (e.g. “10,000+ teams”, “99.9% uptime”)
- Integration logo strip (grayscale)
- Security cues with conservative wording (no certification claims)
- Customer logos or testimonials with neutral tone

### Copy Constraints
- Clear value proposition
- Benefits over features
- No exaggerated or unverifiable claims

---

## Deliverables

### Design Tokens (Human-Readable)

#### Color Roles
- Background: default / muted / surface
- Text: primary / secondary
- Border: neutral
- Primary: base / hover
- Accent: CTA only
- Status: success / danger

#### Typography System
- Font family: Inter, system-ui, sans-serif
- Scale: 12 / 14 / 16 / 18 / 24 / 32 / 48
- Line height: 1.6 body, 1.2 headings
- Max line length: 60–72ch

#### Spacing Scale (8pt)
4, 8, 16, 24, 32, 48, 64, 96

#### Radius / Border / Shadow
- Radius: 4px (default), 8px (cards)
- Border: 1px solid neutral
- Shadow: `0 1px 2px rgba(0,0,0,0.04)`

#### Layout Tokens
- Container max width: 1200px
- Grid: 12 columns desktop / 4 columns mobile
- Gutters: 24px desktop / 16px mobile

#### Motion Tokens
- Duration: 120–180ms
- Easing: ease-out
- Hover: subtle translate or opacity

#### Iconography
- Line icons only
- 1.5px stroke
- Rounded caps

#### Texture / Pattern
- None

---

### Design Tokens (YAML)
```yaml
colors:
  bg:
    default: "#FFFFFF"
    muted: "#F7F8FA"
    surface: "#FFFFFF"
  border: "#E5E7EB"
  text:
    primary: "#0F172A"
    secondary: "#475569"
  primary:
    base: "#2563EB"
    hover: "#1D4ED8"
  accent: "#22D3EE"
  success: "#16A34A"
  danger: "#DC2626"

typography:
  fontFamily: "Inter, system-ui, sans-serif"
  scale: [12, 14, 16, 18, 24, 32, 48]
  lineHeight:
    body: 1.6
    heading: 1.2
  maxLineLength: "72ch"

spacing:
  base: 8
  scale: [4, 8, 16, 24, 32, 48, 64, 96]

radius:
  sm: 4
  md: 8

shadow:
  sm: "0 1px 2px rgba(0,0,0,0.04)"

layout:
  container: 1200
  gridDesktop: 12
  gridMobile: 4
  gutterDesktop: 24
  gutterMobile: 16

motion:
  duration: "150ms"
  easing: "ease-out"
```

---

### Sections Map (Full Landing Page)
1. Announcement Bar (optional)
2. Navigation
3. Hero
4. Social Proof
5. Problem → Solution
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
- Value proposition (H1 + supporting copy)
- Product visual or diagram
- Max 2 CTAs (primary + secondary)
- Optional trust cue above the fold

### Features Section
- Card-based layout
- Icon + title + short benefit

### Metrics Section
- Max 3–4 metrics
- Large numerals, small labels

### Pricing Preview
- 2–3 plans
- Highlight recommended plan
- Enterprise uses “Contact sales”

---

### Contact Section (Required)

**Modes**
- Light contact CTA
- Form contact (name, work email, message)

**States**
- Default
- Focus
- Error (inline)
- Success confirmation

**Anti-spam**
- Honeypot field
- No CAPTCHA by default

**Accessibility**
- Proper labels
- Screen-reader friendly errors
- Keyboard navigable

---

### Components & States
- Buttons: primary / secondary / text
- Inputs: default / focus / error / disabled
- Cards: default / hover
- Nav: default / scrolled
- Accordion (FAQ)

---

### Accessibility & Responsive
- Contrast ≥ 4.5:1
- Visible focus states
- No hover-only interactions
- Touch targets ≥ 44px

---

### Engineering Notes
- Use CSS variables for tokens
- Map tokens into Tailwind config
- Avoid hard-coded values
- Prefer semantic HTML
- Optimize hero assets for LCP

---

### Acceptance Checklist
- [ ] Tokens defined and reusable
- [ ] All sections implemented
- [ ] Responsive across breakpoints
- [ ] Accessibility baseline met
- [ ] No unverified claims
- [ ] Clear primary CTA
- [ ] Consistent spacing & typography

---

## Do / Don’t

### Do
- Keep layouts calm and readable
- Use whitespace intentionally
- Emphasize outcomes over features

### Don’t
- Over-animate
- Overuse gradients
- Add decoration without purpose
- Claim real certifications or metrics
