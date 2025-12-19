import type { UseModule } from './types';

export const LoginSignup_Config: UseModule = {
  id: 'LoginSignup',
  name: 'Login / Signup',
  type: 'use',
  content: `## Information Architecture — Login / Signup

### Required Sections
1. **Login Form**
   - Email/username field
   - Password field
   - Remember me option
   - Forgot password link

2. **Signup Form**
   - Name fields
   - Email field
   - Password creation
   - Terms acceptance

3. **Social Auth**
   - Google login
   - Apple login
   - Other providers
   - Divider

4. **Security**
   - Password requirements
   - 2FA option
   - Security badges

5. **Support**
   - Help link
   - Contact support
   - Privacy policy

### Content Strategy
- Minimal friction
- Clear error messages
- Trust signals
- Progressive disclosure

### User Flow
- Quick authentication
- Easy password recovery
- Smooth registration
- Security confidence`,
  architecture: `## Deliverables

### Sections Map (Login / Signup)
1. Brand header/logo
2. Login/Signup toggle
3. Form fields
4. Social auth options
5. Terms and privacy links
6. Support link
7. Footer

### Auth Components
- Email/password inputs
- Social login buttons
- Password strength indicator
- Error/success messages
- Loading states`
};
