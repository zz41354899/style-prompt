import type { PromptBlock } from './types';

// Industry-specific Admin Users configurations
const industryAdminConfigs: Record<string, {
  roles: { name: string; description: string }[];
  securityLevel: 'standard' | 'high' | 'critical';
  specialFeatures: string[];
  auditRequirements: string[];
  dangerousActions: string[];
  backendStack: string;
}> = {
  'SaaS': {
    roles: [
      { name: 'Owner', description: 'Workspace owner with full permissions, can transfer ownership' },
      { name: 'Admin', description: 'Administrator, can manage members and settings, cannot delete workspace' },
      { name: 'Member', description: 'Regular member, can use product features' },
      { name: 'Viewer', description: 'Read-only member, can only view (optional)' },
    ],
    securityLevel: 'standard',
    specialFeatures: [
      'Member invitation (email invite links)',
      'Invitation status tracking (pending/accepted/expired)',
      'Bulk invite (CSV import)',
      'Member search and filtering',
      'Owner transfer workflow',
    ],
    auditRequirements: [
      'Member add/remove logs',
      'Role change logs',
      'Invitation sent logs',
    ],
    dangerousActions: [
      'Remove member (requires confirmation)',
      'Downgrade role (requires confirmation)',
      'Transfer ownership (requires password verification)',
    ],
    backendStack: 'Supabase with workspace_members junction table. RLS policies enforce workspace isolation. Invitations stored with expiry timestamps. Audit logs in separate table.',
  },
  'E-commerce': {
    roles: [
      { name: 'Store Owner', description: 'Store owner with full permissions' },
      { name: 'Operations', description: 'Operations staff, manages orders and inventory' },
      { name: 'Customer Support', description: 'Support staff, handles customer issues, can view orders' },
      { name: 'Marketing', description: 'Marketing staff, manages promotions and content' },
    ],
    securityLevel: 'high',
    specialFeatures: [
      'Customer lookup on behalf (requires logging)',
      'Sensitive data masking (credit card, partial address)',
      'Granular order operation permissions',
      'Refund permission controls',
    ],
    auditRequirements: [
      'All order operation logs',
      'Customer data access logs',
      'Refund/cancellation logs',
      'Price change logs',
    ],
    dangerousActions: [
      'Refund operations (requires manager approval or confirmation)',
      'Delete product (soft delete preferred)',
      'Bulk price adjustments',
    ],
    backendStack: 'Supabase with role-based RLS. Orders table with status workflow. Refunds require approval flag. All sensitive operations logged to audit table with actor_id.',
  },
  'Healthcare': {
    roles: [
      { name: 'Clinic Admin', description: 'Clinic administrator, system settings and staff management' },
      { name: 'Doctor', description: 'Physician, can access full patient records' },
      { name: 'Nurse', description: 'Nurse, can access assigned patient data' },
      { name: 'Reception', description: 'Front desk, can only access appointments and basic info' },
    ],
    securityLevel: 'critical',
    specialFeatures: [
      'Least privilege principle (access only necessary data)',
      'Patient data access requires explicit authorization',
      'Emergency access mechanism (requires post-audit)',
      'Data masking (SSN, medical record number partial hide)',
      'Mandatory MFA for all admin users',
    ],
    auditRequirements: [
      'All patient data access logs (who, when, what)',
      'Prescription creation logs',
      'Emergency access usage logs',
      'Permission change logs',
      'Login/logout logs',
    ],
    dangerousActions: [
      'Delete patient data (usually prohibited, soft delete only)',
      'Export patient data (requires special permission + logging)',
      'Change physician permissions',
    ],
    backendStack: 'Supabase with strict RLS. Patient data encrypted at rest. All access logged to immutable audit table. Break-glass emergency access via Edge Function with mandatory justification.',
  },
  'Finance': {
    roles: [
      { name: 'Compliance Officer', description: 'Compliance staff, monitoring and auditing' },
      { name: 'Operations Manager', description: 'Operations manager, approves major operations' },
      { name: 'Support Agent', description: 'Support staff, assists with customer issues' },
      { name: 'System Admin', description: 'System administrator, technical settings' },
    ],
    securityLevel: 'critical',
    specialFeatures: [
      'Four-eyes principle (major operations require dual approval)',
      'Transaction limit management',
      'Real-time anomaly detection notifications',
      'Mandatory MFA + hardware key recommended',
      'IP whitelist (admin access)',
    ],
    auditRequirements: [
      'All transaction operation logs (immutable)',
      'Customer data access logs',
      'Permission change logs',
      'Login logs (with IP, device)',
      'Failed operation logs',
    ],
    dangerousActions: [
      'Large transaction approval (requires manager + compliance)',
      'Account freeze/unfreeze',
      'Customer data modification',
      'Permission elevation',
    ],
    backendStack: 'Supabase with immutable audit logs (no DELETE policy). Dual approval workflow via pending_approvals table. IP whitelist enforced via Edge Functions. All admin actions require step-up auth.',
  },
  'Education': {
    roles: [
      { name: 'School Admin', description: 'School administrator with full system permissions' },
      { name: 'Teacher', description: 'Teacher, manages own courses and students' },
      { name: 'Teaching Assistant', description: 'TA, assists with course management' },
      { name: 'Parent', description: 'Parent, views child learning progress' },
    ],
    securityLevel: 'standard',
    specialFeatures: [
      'Class/course permission isolation',
      'Student data protection (minors)',
      'Parent account linking management',
      'Semester/year data archiving',
    ],
    auditRequirements: [
      'Grade modification logs',
      'Student data access logs',
      'Course setting change logs',
    ],
    dangerousActions: [
      'Delete student data',
      'Bulk grade modifications',
      'Semester data archiving',
    ],
    backendStack: 'Supabase with class-based RLS. Teacher-student relationships in enrollments table. Parent-child linking via guardian_relationships. Grade history preserved in separate table.',
  },
  'RealEstate': {
    roles: [
      { name: 'Agency Owner', description: 'Real estate agency owner' },
      { name: 'Agent', description: 'Real estate agent, manages own listings' },
      { name: 'Assistant', description: 'Assistant, helps with administrative tasks' },
    ],
    securityLevel: 'standard',
    specialFeatures: [
      'Listing permissions (who can edit which properties)',
      'Lead/client assignment',
      'Performance tracking',
    ],
    auditRequirements: [
      'Listing status change logs',
      'Client data access logs',
    ],
    dangerousActions: [
      'Delete listing',
      'Transfer client data',
    ],
    backendStack: 'Supabase with agent-based RLS. Listings table with assigned_agent_id. Leads tracked in separate table with assignment history. Commission calculations via database functions.',
  },
  'Restaurant': {
    roles: [
      { name: 'Owner', description: 'Restaurant owner with full permissions' },
      { name: 'Manager', description: 'Store manager, operations management' },
      { name: 'Staff', description: 'Staff, ordering and serving' },
    ],
    securityLevel: 'standard',
    specialFeatures: [
      'Multi-location permission isolation',
      'Schedule management',
      'Discount/promotion permissions',
    ],
    auditRequirements: [
      'Order cancellation/refund logs',
      'Discount usage logs',
      'Inventory adjustment logs',
    ],
    dangerousActions: [
      'Order cancellation',
      'Price adjustments',
      'Inventory reset',
    ],
    backendStack: 'Supabase with location-based RLS. Staff assigned to locations via junction table. Orders linked to location_id. Inventory tracked per location with adjustment history.',
  },
  'Travel': {
    roles: [
      { name: 'Admin', description: 'System administrator' },
      { name: 'Product Manager', description: 'Product manager, manages trips and pricing' },
      { name: 'Customer Service', description: 'Customer service, handles booking issues' },
    ],
    securityLevel: 'standard',
    specialFeatures: [
      'Multi-currency price management',
      'Supplier integration permissions',
      'Booking reschedule/cancellation permissions',
    ],
    auditRequirements: [
      'Price change logs',
      'Booking modification logs',
      'Refund logs',
    ],
    dangerousActions: [
      'Bulk price adjustments',
      'Booking cancellation refunds',
    ],
    backendStack: 'Supabase with currency conversion via Edge Functions. Bookings table with status workflow. Supplier inventory synced via webhooks. Price history preserved for audit.',
  },
  'Fitness': {
    roles: [
      { name: 'Gym Owner', description: 'Gym owner' },
      { name: 'Coach', description: 'Coach, manages classes and members' },
      { name: 'Front Desk', description: 'Front desk, member check-in and inquiries' },
    ],
    securityLevel: 'standard',
    specialFeatures: [
      'Class scheduling management',
      'Member data management',
      'Coach performance tracking',
    ],
    auditRequirements: [
      'Member status change logs',
      'Class cancellation logs',
    ],
    dangerousActions: [
      'Member refunds',
      'Delete class records',
    ],
    backendStack: 'Supabase with coach-member relationships. Classes table with capacity tracking. Check-ins logged with timestamps. Membership status managed via subscriptions table.',
  },
  'Legal': {
    roles: [
      { name: 'Partner', description: 'Partner with full permissions' },
      { name: 'Associate', description: 'Attorney, manages assigned cases' },
      { name: 'Paralegal', description: 'Paralegal, assists with document processing' },
      { name: 'Secretary', description: 'Secretary, administrative support' },
    ],
    securityLevel: 'high',
    specialFeatures: [
      'Matter-based permission isolation (only assigned staff can access)',
      'Document version control',
      'Client data confidentiality levels',
      'Time tracking and billing records',
    ],
    auditRequirements: [
      'Document access logs',
      'Case data access logs',
      'Billing hours modification logs',
    ],
    dangerousActions: [
      'Delete case documents',
      'Change case assignments',
      'Export client data',
    ],
    backendStack: 'Supabase with matter-based RLS. Documents stored in Supabase Storage with versioning. Time entries linked to matters. Client confidentiality enforced via custom claims.',
  },
  'Agency': {
    roles: [
      { name: 'Agency Owner', description: 'Agency owner' },
      { name: 'Project Manager', description: 'Project manager, manages projects and team' },
      { name: 'Designer', description: 'Designer, executes design work' },
      { name: 'Developer', description: 'Developer, executes development work' },
    ],
    securityLevel: 'standard',
    specialFeatures: [
      'Project-based permission isolation',
      'Client access permissions (preview links)',
      'Time tracking',
    ],
    auditRequirements: [
      'Project status change logs',
      'File upload/delete logs',
    ],
    dangerousActions: [
      'Delete project',
      'Remove team member',
    ],
    backendStack: 'Supabase with project-based RLS. Team members assigned via project_members table. Files in Supabase Storage with project prefixes. Client previews via signed URLs.',
  },
  'Nonprofit': {
    roles: [
      { name: 'Director', description: 'Director with full permissions' },
      { name: 'Coordinator', description: 'Coordinator, manages events and volunteers' },
      { name: 'Volunteer Lead', description: 'Volunteer lead, manages volunteer team' },
    ],
    securityLevel: 'standard',
    specialFeatures: [
      'Donor data protection',
      'Volunteer hour tracking',
      'Event registration management',
    ],
    auditRequirements: [
      'Donation records (immutable)',
      'Volunteer hour logs',
    ],
    dangerousActions: [
      'Delete donation records (usually prohibited)',
      'Export donor data',
    ],
    backendStack: 'Supabase with donor privacy RLS. Donations table is append-only (no UPDATE/DELETE). Volunteer hours tracked with approval workflow. Events managed with registration capacity.',
  },
};

// Default configuration
const defaultAdminConfig = {
  roles: [
    { name: 'Admin', description: 'Administrator with full permissions' },
    { name: 'Member', description: 'Regular member' },
  ],
  securityLevel: 'standard' as const,
  specialFeatures: [],
  auditRequirements: ['Basic operation logs'],
  dangerousActions: ['Delete data', 'Permission changes'],
  backendStack: 'Supabase with role-based RLS. Basic audit logging to separate table.',
};

export const adminUsersBlock: PromptBlock = {
  id: 'admin.users',
  title: 'User Management',
  description: 'Admin panel user/member management with roles, permissions, and invitations',
  tier: 'pro',
  category: 'admin',
  dependencies: ['auth.login'],
  render: (industryId: string) => {
    const config = industryAdminConfigs[industryId] || defaultAdminConfig;
    
    const securityBadge = {
      'standard': '🟢 Standard Security',
      'high': '🟡 High Security',
      'critical': '🔴 Critical Security',
    }[config.securityLevel];

    return `## Admin User Management (Pro Feature)

### Security Level
${securityBadge}

### Role Definitions
| Role | Description |
|------|-------------|
${config.roles.map(r => `| **${r.name}** | ${r.description} |`).join('\n')}

### Core Features

#### 1. User List
- Paginated display (20 per page recommended)
- Search (by name, email)
- Filter (by role, status)
- Sort (by name, created_at, last_login)

#### 2. User Detail / Edit
- Basic info editing
- Role assignment/change
- Account status (active/suspended/pending)
- Last login time display

#### 3. Invite User
- Email invitation flow
- Invite link expiry (7 days recommended)
- Assign initial role
- Invitation status tracking (pending/accepted/expired)
- Resend invitation option

#### 4. Suspend / Remove User
- Suspend account (preserve data, prevent login)
- Remove account (soft delete preferred)
- Requires confirmation

${config.specialFeatures.length > 0 ? `### Industry-Specific Features
${config.specialFeatures.map(f => `- ${f}`).join('\n')}` : ''}

### Audit Requirements
${config.auditRequirements.map(r => `- ${r}`).join('\n')}

### Dangerous Actions (Require Confirmation)
${config.dangerousActions.map(a => `- ⚠️ ${a}`).join('\n')}

### Security Requirements
- Permission checks: All APIs must verify actor permissions
- Cannot self-elevate permissions
- Cannot remove last Admin/Owner
- Sensitive operations require password re-verification${config.securityLevel === 'critical' ? `
- **Mandatory MFA** for all admin users
- **IP Whitelist** (recommended)
- **Dual approval** for major changes` : ''}

### Backend Architecture
${config.backendStack}

### Database Schema (Supabase)
\`\`\`sql
-- Team members table
CREATE TABLE public.team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  workspace_id UUID REFERENCES public.workspaces(id),
  role TEXT NOT NULL DEFAULT 'member',
  status TEXT NOT NULL DEFAULT 'active',
  invited_by UUID REFERENCES auth.users(id),
  invited_at TIMESTAMPTZ,
  accepted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, workspace_id)
);

-- Invitations table
CREATE TABLE public.invitations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  workspace_id UUID REFERENCES public.workspaces(id),
  role TEXT NOT NULL DEFAULT 'member',
  token TEXT UNIQUE NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  invited_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Audit logs table
CREATE TABLE public.audit_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  actor_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id UUID,
  metadata JSONB,
  ip_address INET,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invitations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view team members in their workspace"
  ON public.team_members FOR SELECT
  USING (workspace_id IN (
    SELECT workspace_id FROM public.team_members WHERE user_id = auth.uid()
  ));

CREATE POLICY "Admins can manage team members"
  ON public.team_members FOR ALL
  USING (workspace_id IN (
    SELECT workspace_id FROM public.team_members 
    WHERE user_id = auth.uid() AND role IN ('admin', 'owner')
  ));
\`\`\`

### API Endpoints
- \`GET /admin/users\` - List users
- \`GET /admin/users/:id\` - Get user detail
- \`PATCH /admin/users/:id\` - Update user
- \`POST /admin/users/:id/suspend\` - Suspend user
- \`POST /admin/users/:id/activate\` - Activate user
- \`DELETE /admin/users/:id\` - Remove user (soft delete)
- \`POST /admin/invitations\` - Send invitation
- \`GET /admin/invitations\` - List invitations
- \`POST /admin/invitations/:id/resend\` - Resend invitation
- \`DELETE /admin/invitations/:id\` - Cancel invitation

### UX States
- **Empty state**: No members yet, show invite CTA
- **Loading state**: Skeleton loading
- **Error state**: Clear error message with retry option
- **Success feedback**: Toast notification

### Accessibility
- Keyboard navigation for all actions
- Screen reader announcements for status changes
- Focus management after modal actions
- ARIA labels for role badges and status indicators

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

Step 2: Execute team_members table creation
→ Use: execute_sql with the SQL schema above

Step 3: Execute invitations table creation
→ Use: execute_sql

Step 4: Execute audit_logs table creation
→ Use: execute_sql

Step 5: Apply RLS policies
→ Use: execute_sql with RLS policy SQL

Step 6: Verify tables created
→ Use: list_tables to confirm
\`\`\`

#### Example MCP Workflow
\`\`\`
// 1. First, list available projects
mcp_supabase.list_projects()

// 2. Execute the team_members table SQL
mcp_supabase.execute_sql({
  project_id: "your-project-id",
  query: "CREATE TABLE public.team_members (...)"
})

// 3. Execute the invitations table SQL
mcp_supabase.execute_sql({
  project_id: "your-project-id",
  query: "CREATE TABLE public.invitations (...)"
})

// 4. Execute the audit_logs table SQL
mcp_supabase.execute_sql({
  project_id: "your-project-id",
  query: "CREATE TABLE public.audit_logs (...)"
})

// 5. Apply RLS policies
mcp_supabase.execute_sql({
  project_id: "your-project-id", 
  query: "ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY; ..."
})
\`\`\``;
  },
};
