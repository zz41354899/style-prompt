import type { UseModule } from './types';

export const Onboarding_Config: UseModule = {
  id: 'Onboarding',
  name: 'Onboarding',
  type: 'use',
  content: `## Information Architecture — Onboarding

### Required Sections
1. **Welcome Screen**
   - Brand introduction
   - Value proposition
   - Get started CTA

2. **Setup Steps**
   - Progressive disclosure
   - Step indicators
   - Skip option available

3. **Feature Introduction**
   - Interactive tutorials
   - Tooltips and highlights
   - Try it yourself sections

4. **Profile Setup**
   - User preferences
   - Customization options
   - Privacy settings

5. **Success Confirmation**
   - Completion message
   - Next steps guidance
   - Resource links

### Content Strategy
- Progressive complexity
- Contextual help
- Celebrate milestones
- Reduce cognitive load

### User Flow
- Clear progression path
- Minimal friction
- Optional deep dives
- Quick time to value`,
  architecture: `## Deliverables

### Sections Map (Onboarding)
1. Welcome screen
2. Progress indicator
3. Step-by-step setup
4. Feature highlights
5. Profile configuration
6. Success confirmation
7. Next steps guidance

### Onboarding Components
- Step progress bar
- Interactive tutorials
- Tooltip overlays
- Skip/back navigation
- Celebration animations`
};
