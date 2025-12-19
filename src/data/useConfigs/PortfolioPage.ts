import type { UseModule } from './types';

export const PortfolioPage_Config: UseModule = {
  id: 'PortfolioPage',
  name: 'Portfolio / Gallery',
  type: 'use',
  content: `## Information Architecture — Portfolio / Gallery

### Required Sections
1. **Project Grid**
   - Thumbnail images
   - Project titles
   - Category filters
   - Hover effects

2. **Project Detail**
   - Full project images
   - Project description
   - Client information
   - Results/metrics

3. **Filters**
   - Category tabs
   - Industry filters
   - Service type
   - Year/date

4. **Case Studies**
   - Problem statement
   - Solution approach
   - Results achieved
   - Client testimonial

5. **CTA Section**
   - Start a project
   - Contact form
   - Consultation booking

### Content Strategy
- Visual showcase
- Results-focused
- Client success stories
- Easy navigation

### User Flow
- Browse and filter
- Deep dive into projects
- Understand capabilities
- Initiate contact`,
  architecture: `## Deliverables

### Sections Map (Portfolio / Gallery)
1. Hero with intro
2. Filter navigation
3. Project grid
4. Project detail modal/page
5. Case study sections
6. CTA section
7. Footer

### Project Card Components
- Thumbnail with hover effect
- Project title
- Category badge
- View project link`
};
