import type { PromptBlock } from './types';

// Industry-specific Auth Login configurations
const industryAuthConfigs: Record<string, {
  methods: string[];
  securityLevel: 'standard' | 'high' | 'critical';
  specialRequirements: string[];
  sessionPolicy: string;
  additionalFlows: string[];
  backendStack: string;
}> = {
  'SaaS': {
    methods: ['Email/Password', 'OAuth (Google, Microsoft) - optional'],
    securityLevel: 'standard',
    specialRequirements: [
      'Support Workspace/Organization selector (post-login)',
      'Support SSO integration (enterprise customers)',
      'Multi-tenant architecture with workspace isolation',
    ],
    sessionPolicy: 'Standard session (7 days), support remember me (30 days)',
    additionalFlows: ['Workspace invite link login', 'Team member onboarding flow'],
    backendStack: 'Supabase Auth + RLS policies for tenant isolation. JWT tokens with workspace_id claim. Refresh token rotation enabled.',
  },
  'E-commerce': {
    methods: ['Email/Password', 'OAuth (Google, Facebook)', 'Phone OTP - optional'],
    securityLevel: 'standard',
    specialRequirements: [
      'Support Guest Checkout (no login required)',
      'Cart merge on login (merge guest cart with user cart)',
      'Quick login/signup during checkout flow',
      'Order history linked to account',
    ],
    sessionPolicy: 'Standard session (14 days), cart session persists independently',
    additionalFlows: ['Order lookup quick login', 'Loyalty tier display'],
    backendStack: 'Supabase Auth with anonymous sessions for guest checkout. Cart stored in localStorage + synced to DB on login. RLS policies for order access.',
  },
  'Healthcare': {
    methods: ['Email/Password + Mandatory MFA'],
    securityLevel: 'critical',
    specialRequirements: [
      'Mandatory MFA (TOTP or SMS)',
      'First login requires privacy policy and data usage consent',
      'Idle auto-logout (15 minutes)',
      'Anomalous login detection and notification',
      'HIPAA compliance considerations',
      'Audit logging for all auth events',
    ],
    sessionPolicy: 'Short session (4 hours), no remember me, force re-auth for sensitive operations',
    additionalFlows: ['Patient identity verification', 'Emergency access flow (medical staff)'],
    backendStack: 'Supabase Auth with MFA enforced. Short-lived JWTs (15min) with refresh. All auth events logged to audit table. IP-based anomaly detection via Edge Functions.',
  },
  'Finance': {
    methods: ['Email/Password + Mandatory MFA', 'Biometric - optional'],
    securityLevel: 'critical',
    specialRequirements: [
      'Mandatory MFA (TOTP, hardware key)',
      'Device binding and trust management',
      'Anomalous login risk assessment and blocking',
      'Login history and notifications',
      'PCI-DSS / SOC2 compliance considerations',
    ],
    sessionPolicy: 'Short session (1 hour), sensitive ops require re-auth, device trust extends to 24 hours',
    additionalFlows: ['Transaction PIN', 'Account freeze/unfreeze'],
    backendStack: 'Supabase Auth with hardware key support. Device fingerprinting stored in secure table. Risk scoring via Edge Functions. All transactions require step-up auth.',
  },
  'Education': {
    methods: ['Email/Password', 'OAuth (Google Workspace for Education)', 'Student ID login'],
    securityLevel: 'standard',
    specialRequirements: [
      'Support school SSO integration',
      'Student/Teacher/Parent role differentiation',
      'Minor protection notices (COPPA/FERPA compliance)',
      'Classroom mode with extended sessions',
    ],
    sessionPolicy: 'Standard session (7 days), classroom mode can extend',
    additionalFlows: ['Parent account linking', 'Class invite code join'],
    backendStack: 'Supabase Auth with custom claims for role (student/teacher/parent). RLS policies enforce class-based access. Parent-child account linking via junction table.',
  },
  'RealEstate': {
    methods: ['Email/Password', 'OAuth (Google)', 'Phone verification'],
    securityLevel: 'standard',
    specialRequirements: [
      'Agent/Owner/Buyer role differentiation',
      'Property favorites sync across devices',
      'Lead capture and CRM integration',
    ],
    sessionPolicy: 'Standard session (14 days)',
    additionalFlows: ['Viewing appointment quick login', 'Agent QR code login'],
    backendStack: 'Supabase Auth with role-based access. Property favorites stored with user_id FK. Agent dashboard uses separate RLS policies.',
  },
  'Restaurant': {
    methods: ['Email/Password', 'OAuth (Google, Apple)', 'Phone OTP'],
    securityLevel: 'standard',
    specialRequirements: [
      'Support guest ordering (no login required)',
      'Loyalty points/coupon binding',
      'Table-specific session for dine-in',
    ],
    sessionPolicy: 'Long session (30 days), ordering session independent',
    additionalFlows: ['QR code table ordering login', 'Delivery platform account linking'],
    backendStack: 'Supabase Auth with anonymous sessions for guest orders. Loyalty points in separate table with user_id FK. QR-based table sessions via short-lived tokens.',
  },
  'Travel': {
    methods: ['Email/Password', 'OAuth (Google, Facebook, Apple)'],
    securityLevel: 'standard',
    specialRequirements: [
      'Multi-currency/multi-language support',
      'Trip favorites sync',
      'Travel companion data management',
      'Booking confirmation linked to account',
    ],
    sessionPolicy: 'Standard session (14 days)',
    additionalFlows: ['Booking lookup quick login', 'Airline/hotel loyalty linking'],
    backendStack: 'Supabase Auth with locale preferences in user metadata. Bookings table with user_id FK. Companion data stored with encryption at rest.',
  },
  'Fitness': {
    methods: ['Email/Password', 'OAuth (Google, Apple)', 'Apple Health/Google Fit linking'],
    securityLevel: 'standard',
    specialRequirements: [
      'Health data sync authorization',
      'Coach/Member role differentiation',
      'Wearable device pairing',
    ],
    sessionPolicy: 'Long session (30 days), no interruption during workout',
    additionalFlows: ['Wearable device pairing', 'Class check-in'],
    backendStack: 'Supabase Auth with health data OAuth scopes. Workout data synced via Edge Functions. Coach-member relationships in junction table with RLS.',
  },
  'Legal': {
    methods: ['Email/Password + MFA recommended'],
    securityLevel: 'high',
    specialRequirements: [
      'Client data confidentiality notices',
      'Document access logging',
      'Attorney/Client role differentiation',
      'Matter-based access control',
    ],
    sessionPolicy: 'Standard session (8 hours), sensitive documents require re-auth',
    additionalFlows: ['Case invite link', 'Document signing verification'],
    backendStack: 'Supabase Auth with MFA encouraged. Matter-based RLS policies. All document access logged to audit table. Client portal uses separate auth flow.',
  },
  'Agency': {
    methods: ['Email/Password', 'OAuth (Google)'],
    securityLevel: 'standard',
    specialRequirements: [
      'Client/Team member role differentiation',
      'Project-based permission management',
      'Client preview links (no login required)',
    ],
    sessionPolicy: 'Standard session (7 days)',
    additionalFlows: ['Client preview link (no login)', 'Team invite'],
    backendStack: 'Supabase Auth with project-based RLS. Client preview via signed URLs with expiry. Team invites use magic links.',
  },
  'Nonprofit': {
    methods: ['Email/Password', 'OAuth (Google, Facebook)'],
    securityLevel: 'standard',
    specialRequirements: [
      'Donor/Volunteer/Admin role differentiation',
      'Donation history binding',
      'Volunteer hour tracking',
    ],
    sessionPolicy: 'Standard session (14 days)',
    additionalFlows: ['Volunteer signup quick login', 'Donation receipt lookup'],
    backendStack: 'Supabase Auth with role claims. Donation records immutable (no delete). Volunteer hours tracked in separate table with approval workflow.',
  },
};

// Default configuration (when industry not in list)
const defaultAuthConfig = {
  methods: ['Email/Password', 'OAuth (Google) - optional'],
  securityLevel: 'standard' as const,
  specialRequirements: [],
  sessionPolicy: 'Standard session (7 days), support remember me',
  additionalFlows: [],
  backendStack: 'Supabase Auth with default RLS policies. JWT-based sessions with refresh token rotation.',
};

export const authLoginBlock: PromptBlock = {
  id: 'auth.login',
  title: 'Authentication System',
  description: 'Complete user authentication flow including login, signup, password reset, and session management',
  tier: 'free',
  category: 'auth',
  render: (industryId: string) => {
    const config = industryAuthConfigs[industryId] || defaultAuthConfig;
    
    const securityBadge = {
      'standard': '🟢 Standard Security',
      'high': '🟡 High Security',
      'critical': '🔴 Critical Security (MFA Required)',
    }[config.securityLevel];

    return `## Authentication System

### Security Level
${securityBadge}

### Supported Auth Methods
${config.methods.map(m => `- ${m}`).join('\n')}

### Core Flows

#### 1. Sign Up
- Email verification flow
- Password strength validation (min 8 chars, mixed case, numbers)
- Terms of service and privacy policy consent
- Welcome email with onboarding CTA

#### 2. Login
- Email/Password authentication
- Error messages must not reveal account existence
- Rate limiting (5 failed attempts triggers temporary lockout)
- Remember me option (where applicable)

#### 3. Logout
- Clear session/token
- Optional: logout from all devices
- Redirect to appropriate landing page

#### 4. Forgot Password
- Email-based reset link
- Link expiry (1 hour recommended)
- Force re-login after reset
- Notify user of password change

#### 5. Email Verification
- Send verification email on signup
- Resend option with cooldown period
- Graceful handling of expired links

### Session Policy
${config.sessionPolicy}

### Security Requirements
- CSRF protection (if using cookie-based auth)
- Secure, HttpOnly cookies for tokens
- Rate limiting on all auth endpoints
- Audit logging for login attempts
- HTTPS only (no mixed content)${config.securityLevel === 'critical' ? `
- **Mandatory MFA**: All users must enable MFA
- **Anomaly Detection**: Notify on IP/device changes
- **Idle Auto-Logout**: Per industry compliance requirements` : ''}

### Industry-Specific Requirements
${config.specialRequirements.length > 0 
  ? config.specialRequirements.map(r => `- ${r}`).join('\n')
  : '- No special requirements'}

${config.additionalFlows.length > 0 ? `### Additional Flows
${config.additionalFlows.map(f => `- ${f}`).join('\n')}` : ''}

### Backend Architecture
${config.backendStack}

### Database Schema (Supabase)
\`\`\`sql
-- Users table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Users can read their own profile
CREATE POLICY "Users can view own profile" 
  ON public.profiles FOR SELECT 
  USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = id);
\`\`\`

### API Endpoints
- \`POST /auth/signup\` - Create new account
- \`POST /auth/login\` - Authenticate user
- \`POST /auth/logout\` - End session
- \`POST /auth/forgot-password\` - Request reset link
- \`POST /auth/reset-password\` - Set new password
- \`POST /auth/verify-email\` - Verify email address
- \`GET /auth/session\` - Get current session
- \`POST /auth/refresh\` - Refresh access token

### UX States
- Loading states for all async operations
- Clear error messages (without revealing sensitive info)
- Success feedback with next step guidance
- Form validation (inline + on submit)
- Password strength indicator

### Accessibility
- Keyboard navigation support
- Focus management after actions
- Screen reader friendly error messages
- Visible focus indicators
- ARIA labels for form fields

---

### Supabase MCP Integration

> **Important**: If you have access to **Supabase MCP (Model Context Protocol)**, use it to automatically execute the database operations.

#### MCP Tools Available
1. **\`list_projects\`** - List all Supabase projects
2. **\`get_project\`** - Get project details and connection info
3. **\`execute_sql\`** - Execute SQL queries directly
4. **\`apply_migration\`** - Apply database migrations
5. **\`list_tables\`** - List all tables in the database

#### MCP Execution Steps
\`\`\`
Step 1: List projects to find target project
→ Use: list_projects

Step 2: Execute profiles table creation
→ Use: execute_sql with the SQL schema above

Step 3: Apply RLS policies
→ Use: execute_sql with RLS policy SQL

Step 4: Verify tables created
→ Use: list_tables to confirm
\`\`\`

#### Example MCP Workflow
\`\`\`
// 1. First, list available projects
mcp_supabase.list_projects()

// 2. Execute the profiles table SQL
mcp_supabase.execute_sql({
  project_id: "your-project-id",
  query: "CREATE TABLE public.profiles (...)"
})

// 3. Apply RLS policies
mcp_supabase.execute_sql({
  project_id: "your-project-id", 
  query: "ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY; ..."
})
\`\`\``;
  },
};
