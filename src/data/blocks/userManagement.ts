import type { PromptBlock } from './types';

export const userManagementBlock: PromptBlock = {
    id: 'backend.user_management',
    title: 'User Management',
    description: 'User profiles, RLS policies, and management workflows',
    tier: 'free',
    category: 'backend',
    render: (industryId: string, useId?: string) => {
        return `# User Management System

## Database Schema: \`public.profiles\`
Extends Supabase Auth with application-specific user data.

\`\`\`sql
create table public.profiles (
  id uuid references auth.users(id) on delete cascade not null primary key,
  email text,
  full_name text,
  avatar_url text,
  role text default 'user',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- RLS: Users can view their own profile
create policy "Public profiles are viewable by everyone" 
  on profiles for select using ( true );

-- RLS: Users can insert their own profile
create policy "Users can insert their own profile" 
  on profiles for insert with check ( auth.uid() = id );

-- RLS: Users can update their own profile
create policy "Users can update own profile" 
  on profiles for update using ( auth.uid() = id );
\`\`\`

---

## Core Workflows

### 1. Profile Creation
- **Trigger**: Automatically create a profile entry via Postgres Trigger on \`auth.users\` insert.
- **Alternative**: Create profile on client-side immediately after signup.

### 2. Avatar Management
- **Storage Bucket**: \`avatars\` (public)
- **Path Strategy**: \`{user_id}/{timestamp}.jpg\`
- **Optimization**: Resize logic in Edge Function or client-side to max 500x500px.

### 3. Role-Based Access (RBAC)
- **Implementation**: Use Custom Claims or logic based on \`profiles.role\`.
- **Policy**:
  - \`admin\`: Full access to all tables
  - \`user\`: Access to own data only
  - \`moderator\`: Access to content tables

## Security Considerations
- **PII Protection**: Ensure email and phone numbers are not exposed in public views.
- **Storage Policy**: Restrict \`avatars\` bucket write access to authenticated users only.
`;
    },
};
