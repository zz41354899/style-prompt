import type { UseModule } from './types';

export const ContactPage_Config: UseModule = {
  id: 'ContactPage',
  name: 'Contact Page',
  type: 'use',
  content: `## Information Architecture — Contact Page

### Required Sections
1. **Contact Form**
   - Name and email fields
   - Subject/category selector
   - Message textarea
   - Submit button

2. **Contact Information**
   - Email addresses
   - Phone numbers
   - Physical address

3. **Map Integration**
   - Office location
   - Directions link
   - Multiple locations

4. **Support Options**
   - Live chat
   - FAQ link
   - Help center

5. **Social Links**
   - Social media profiles
   - Community links
   - Newsletter signup

### Content Strategy
- Multiple contact options
- Quick response promise
- Clear expectations
- Accessibility

### User Flow
- Easy form submission
- Alternative contact methods
- Confirmation feedback
- Follow-up expectations`,
  architecture: `## Deliverables

### Sections Map (Contact Page)
1. Hero with contact message
2. Contact form
3. Contact information cards
4. Map integration
5. Support options
6. Social links
7. Footer

### Form Components
- Input fields with validation
- Error/success states
- Submit button with loading
- Confirmation message`
};
