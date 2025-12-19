import type { IndustryModule } from './types';

export const SaaS_Config: IndustryModule = {
  id: 'SaaS',
  name: 'SaaS',
  type: 'industry',
  content: `## Industry Considerations — SaaS (B2B)

### Target Audience
- B2B decision makers: CTO / VP / Director (budget, risk, adoption cost)
- Day-to-day users: Ops / PM / Engineering / Security (workflow, traceability, permissions, auditability)
- Procurement/Legal: contracts, DPA, data processing responsibility (placeholder statements only)

### Key Decision Drivers (the page must answer these)
- **Time-to-value**: onboarding path and setup steps (describe process, avoid numeric claims)
- **Risk controls**: permissions, audit logs, SSO, encryption, export (placeholder statements only)
- **Integrations**: works with the existing toolchain (present as a logo wall with placeholders)
- **Scalability**: from a small team to multi-department adoption (explain with tiers and governance model)
- **Transparent pricing**: clear limits and disclaimers, no hidden constraints

### Conversion Requirements (must appear on the page)
- Above-the-fold Primary CTA (e.g. "Start free trial") and Secondary CTA (e.g. "Book a demo")
- Clear pricing tiers with plan differences (add a comparison table if needed)
- Multiple CTA touchpoints (Hero / Demo / Pricing / Final CTA)
- Trust modules woven throughout (Integrations / Security / Testimonials / Case Studies)

### Narrative Rules (no fake proof)
- Do not show real customer logos, certifications, or performance metrics; use **placeholders** (e.g. "Integration logo (placeholder)")
- Do not claim specific uptime numbers; use a "Status/Uptime link (placeholder)"
- Replace hype with verifiable mechanisms: encryption, permission model, audit logs, export, SSO — expressed as scannable specs`,
  considerations: `## Industry Constraints & Trust Modules (SaaS)

### Required trust elements (placeholders only)
- **Integrations wall**: a grid of logo placeholders (avoid real brands)
- **Security statements**:
  - Encryption (placeholder)
  - SSO (placeholder)
  - Audit Logs (placeholder)
  - DPA (placeholder)
- **Uptime / Status link**: status page link (placeholder)
- **Testimonials + Case studies**: quote cards + case cards (names/company/outcomes are placeholders)
- **Transparent pricing**: clear plan limits + explicit disclaimers (placeholders)

### Tone
- Confident, precise, non-hype
- Explain "how it works" and "how risk is controlled" before benefits

### Copy guardrails (hard rules)
- No real metrics, customers, or certifications
- Every proof element must be labeled as "placeholder" (or equivalent)
- Avoid long jargon blocks; prefer short sentences and scannable lists`
};
