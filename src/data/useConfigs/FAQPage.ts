import type { UseModule } from './types';

export const FAQPage_Config: UseModule = {
  id: 'FAQPage',
  name: 'FAQ Page',
  type: 'use',
  content: `## Information Architecture — FAQ Page

### Required Sections
1. **Search Bar**
   - Prominent search
   - Auto-suggestions
   - Popular searches

2. **Category Navigation**
   - Topic categories
   - Quick links
   - Breadcrumbs

3. **Question List**
   - Accordion format
   - Clear questions
   - Concise answers
   - Related links

4. **Contact Support**
   - Still need help?
   - Contact options
   - Live chat
   - Ticket submission

5. **Helpful Resources**
   - Documentation links
   - Video tutorials
   - Community forum

### Content Strategy
- Clear categorization
- Scannable format
- Searchable content
- Helpful tone

### User Flow
- Quick answer finding
- Self-service resolution
- Easy escalation
- Resource discovery`,
  architecture: `## Deliverables

### Sections Map (FAQ Page)
1. Search hero
2. Category tabs
3. FAQ accordion list
4. Contact support section
5. Helpful resources
6. Footer

### FAQ Components
- Search input with suggestions
- Accordion items
- Category filters
- Contact CTA card`
};
