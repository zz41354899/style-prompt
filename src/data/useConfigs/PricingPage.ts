import type { UseModule } from './types';

export const PricingPage_Config: UseModule = {
  id: 'PricingPage',
  name: 'Pricing Page',
  type: 'use',
  content: `## Information Architecture — Pricing Page

### Required Sections
1. **Header**
   - Clear page title
   - Brief value statement
   - FAQ or help link

2. **Pricing Tiers**
   - 3-4 clear options
   - Highlighted recommended plan
   - Feature comparison matrix
   - Toggle monthly/annual

3. **Feature Details**
   - Expanded feature descriptions
   - Use cases per tier
   - Limitations and caps

4. **Trust Elements**
   - Money-back guarantee
   - Customer testimonials
   - Enterprise options

5. **FAQ Section**
   - Common pricing questions
   - Billing and payment info
   - Cancellation policy

6. **CTA Section**
   - Plan selection prompts
   - Contact sales for enterprise
   - Free trial option

### Content Strategy
- Transparent pricing structure
- Clear differentiation between tiers
- Value-focused feature descriptions
- Risk-reduction elements (guarantees, trials)

### Conversion Flow
- Easy plan comparison
- Clear value justification
- Minimal friction to upgrade
- Multiple conversion points`,
  architecture: `## Deliverables

### Sections Map (Pricing Page)
1. Header with value statement
2. Pricing toggle (monthly/annual)
3. Pricing tiers (3-4 cards)
4. Feature comparison matrix
5. Enterprise/custom tier
6. Trust elements (guarantees, testimonials)
7. FAQ section
8. Final CTA
9. Footer

### Pricing Card Components
- Plan name and description
- Price with billing period
- Feature list with checkmarks
- CTA button
- Popular/recommended badge (optional)`
};
