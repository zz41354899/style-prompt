import type { UseModule } from './types';

export const AboutPage_Config: UseModule = {
  id: 'AboutPage',
  name: 'About Page',
  type: 'use',
  content: `## Information Architecture — About Page

### Required Sections
1. **Company Story**
   - Mission statement
   - Founding story
   - Company values

2. **Team Section**
   - Leadership profiles
   - Team photos
   - Role descriptions

3. **Milestones**
   - Company timeline
   - Key achievements
   - Growth metrics

4. **Culture**
   - Work environment
   - Benefits and perks
   - Career opportunities

5. **Contact**
   - Office locations
   - Contact information
   - Social media links

### Content Strategy
- Authentic storytelling
- Human-centered approach
- Visual documentation
- Trust building

### User Flow
- Emotional connection
- Brand understanding
- Career exploration
- Easy contact`,
  architecture: `## Deliverables

### Sections Map (About Page)
1. Hero with mission statement
2. Company story/timeline
3. Core values
4. Team section
5. Milestones/achievements
6. Culture showcase
7. Careers CTA
8. Contact section
9. Footer

### Team Components
- Team member cards
- Leadership profiles
- Department filters
- Social links`
};
