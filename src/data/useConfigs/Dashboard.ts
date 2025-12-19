import type { UseModule } from './types';

export const Dashboard_Config: UseModule = {
  id: 'Dashboard',
  name: 'Dashboard',
  type: 'use',
  content: `## Information Architecture — Dashboard

### Required Sections
1. **Navigation**
   - Primary navigation menu
   - Quick actions
   - User profile/settings

2. **Overview Widgets**
   - Key metrics at a glance
   - Recent activity feed
   - Quick stats cards

3. **Data Visualization**
   - Charts and graphs
   - Progress indicators
   - Trend analysis

4. **Task Management**
   - To-do lists
   - Pending actions
   - Quick task creation

5. **Notifications**
   - Alert center
   - System updates
   - Message center

### Content Strategy
- Information hierarchy
- Data-driven insights
- Actionable recommendations
- Personalized content

### User Flow
- Quick access to important data
- Efficient task completion
- Clear navigation patterns
- Customizable layout`,
  architecture: `## Deliverables

### Sections Map (Dashboard)
1. Top navigation bar
2. Sidebar navigation
3. Overview metrics cards
4. Primary data visualization
5. Activity feed
6. Quick actions panel
7. Notifications center
8. User profile dropdown

### Widget Components
- Metric cards with trends
- Charts (line, bar, pie)
- Data tables with sorting
- Progress indicators
- Alert banners`
};
