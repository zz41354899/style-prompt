import type { PromptBlock } from './types';
import { getIndustryBackendConfig, type IndustryBackendConfig } from './industryBackend';
import { getUseBackendConfig, type UseBackendConfig } from './useBackend';

// Backend Architecture Block (Pro Feature)
// Generates comprehensive backend architecture recommendations based on industry + use

export const backendArchitectureBlock: PromptBlock = {
  id: 'backend.architecture',
  title: 'Backend Architecture',
  description: 'Comprehensive Supabase backend architecture with database schema, RLS policies, and API design',
  tier: 'pro',
  category: 'admin',
  render: (industryId: string, useId?: string) => {
    const industryConfig = getIndustryBackendConfig(industryId);
    const useConfig = useId ? getUseBackendConfig(useId) : null;

    if (!industryConfig) {
      return generateDefaultBackendPrompt();
    }

    return generateBackendPrompt(industryConfig, useConfig);
  },
};

function generateDefaultBackendPrompt(): string {
  return `## Backend Architecture (Pro Feature)

### Recommended Stack
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage
- **Edge Functions**: Supabase Edge Functions (Deno)

### Core Database Tables
\`\`\`sql
-- Users profile extension
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

-- Basic RLS policies
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);
\`\`\`

### Security Best Practices
- Enable RLS on all tables
- Use auth.uid() for user identification
- Implement proper role-based access
- Audit sensitive operations

### API Design
- Use RESTful conventions
- Implement proper error handling
- Add rate limiting for public endpoints
- Version your API endpoints`;
}

function generateBackendPrompt(
  industry: IndustryBackendConfig,
  use: UseBackendConfig | null
): string {
  const securityBadge = {
    'standard': '🟢 Standard Security',
    'high': '🟡 High Security',
    'critical': '🔴 Critical Security',
  }[industry.securityLevel];

  let prompt = `## Backend Architecture (Pro Feature)

### Industry: ${industry.industry}
### Security Level: ${securityBadge}

---

## 1. Database Schema

### Core Tables for ${industry.industry}
\`\`\`sql
${industry.coreTables.map(table => `-- ${table}`).join('\n')}
\`\`\`

${use ? `### Additional Tables for ${use.use}
\`\`\`sql
${use.requiredTables.map(table => `-- ${table}`).join('\n')}
\`\`\`
` : ''}

### Recommended Schema Implementation
\`\`\`sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Audit logs (for compliance)
CREATE TABLE public.audit_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  actor_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL,
  table_name TEXT NOT NULL,
  record_id UUID,
  old_data JSONB,
  new_data JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for audit log queries
CREATE INDEX idx_audit_logs_actor ON public.audit_logs(actor_id);
CREATE INDEX idx_audit_logs_table ON public.audit_logs(table_name);
CREATE INDEX idx_audit_logs_created ON public.audit_logs(created_at DESC);
\`\`\`

---

## 2. Row Level Security (RLS)

### Security Requirements
${industry.securityFeatures.map(f => `- ${f}`).join('\n')}

### RLS Policy Examples
\`\`\`sql
-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can only access their own profile
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Audit logs: Only admins can view
CREATE POLICY "Admins can view audit logs"
  ON public.audit_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Audit logs: System can insert (no user restriction)
CREATE POLICY "System can insert audit logs"
  ON public.audit_logs FOR INSERT
  WITH CHECK (true);
\`\`\`

---

## 3. Supabase Features to Enable

${industry.supabaseFeatures.map(f => `- ✅ ${f}`).join('\n')}

---

## 4. Edge Functions

### Recommended Edge Functions
${industry.edgeFunctions.map(f => `- \`${f.toLowerCase().replace(/\s+/g, '-')}\``).join('\n')}

### Example Edge Function Structure
\`\`\`typescript
// supabase/functions/example-function/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // Get user from JWT
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser()
    if (userError) throw userError

    // Your logic here
    const result = { message: 'Success', userId: user?.id }

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
\`\`\`

---

## 5. Storage Configuration

### Storage Buckets Needed
${industry.storageNeeds.map(s => `- \`${s.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}\``).join('\n')}

### Storage Policies
\`\`\`sql
-- Create storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('assets', 'assets', true);

-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'assets' AND
    auth.role() = 'authenticated'
  );

-- Allow public read access
CREATE POLICY "Public read access"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'assets');

-- Users can delete their own uploads
CREATE POLICY "Users can delete own uploads"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'assets' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );
\`\`\`

---

## 6. Realtime Features

${industry.realtimeFeatures.length > 0 ? `### Enable Realtime For
${industry.realtimeFeatures.map(f => `- ${f}`).join('\n')}

### Realtime Configuration
\`\`\`sql
-- Enable realtime for specific tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.notifications;
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;
\`\`\`

### Client-side Subscription Example
\`\`\`typescript
// Subscribe to changes
const subscription = supabase
  .channel('custom-channel')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'notifications' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
\`\`\`` : '- No realtime features required for this configuration'}

---

## 7. Third-Party Integrations

### Recommended Integrations
${industry.integrations.map(i => `- ${i}`).join('\n')}

---

## 8. Pro-Only Advanced Features

### Analytics & Reporting
${industry.proFeatures.analytics.map(a => `- 📊 ${a}`).join('\n')}

### Automation
${industry.proFeatures.automation.map(a => `- ⚡ ${a}`).join('\n')}

### Advanced Integrations
${industry.proFeatures.integrations.map(i => `- 🔗 ${i}`).join('\n')}

### Enhanced Security
${industry.proFeatures.security.map(s => `- 🔒 ${s}`).join('\n')}

${use ? `
---

## 9. Page-Specific Backend (${use.use})

### Required API Endpoints
${use.apiEndpoints.map(e => `- \`${e}\``).join('\n')}

### Supabase Features
${use.supabaseFeatures.map(f => `- ${f}`).join('\n')}

### Edge Functions
${use.edgeFunctions.map(f => `- ${f}`).join('\n')}

### Pro Enhancements for ${use.use}
${use.proEnhancements.map(e => `- ⭐ ${e}`).join('\n')}
` : ''}

---

## 10. Supabase MCP Integration

> **Important**: If you have access to **Supabase MCP (Model Context Protocol)**, use it to automatically execute the database operations below.

### MCP Tools Available
Use the following MCP tools to set up the backend automatically:

1. **\`list_projects\`** - List all Supabase projects
2. **\`get_project\`** - Get project details and connection info
3. **\`execute_sql\`** - Execute SQL queries directly
4. **\`apply_migration\`** - Apply database migrations
5. **\`list_tables\`** - List all tables in the database
6. **\`get_logs\`** - Get project logs for debugging

### MCP Execution Steps
\`\`\`
Step 1: List projects to find target project
→ Use: list_projects

Step 2: Execute schema creation SQL
→ Use: execute_sql with the SQL from sections above

Step 3: Apply RLS policies
→ Use: execute_sql with RLS policy SQL

Step 4: Verify tables created
→ Use: list_tables to confirm

Step 5: Set up storage buckets
→ Use: execute_sql for storage configuration
\`\`\`

### Example MCP Workflow
\`\`\`
// 1. First, list available projects
mcp_supabase.list_projects()

// 2. Execute the schema SQL
mcp_supabase.execute_sql({
  project_id: "your-project-id",
  query: "CREATE TABLE public.profiles (...)"
})

// 3. Apply RLS policies
mcp_supabase.execute_sql({
  project_id: "your-project-id", 
  query: "ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY; ..."
})
\`\`\`

---

## 11. Deployment Checklist

### Pre-Launch
- [ ] Enable RLS on all tables
- [ ] Test all RLS policies
- [ ] Set up proper indexes
- [ ] Configure rate limiting
- [ ] Set up monitoring/alerts
- [ ] Review security settings

### Environment Variables
\`\`\`env
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key (server-side only)
\`\`\`

### Performance Optimization
- Add indexes for frequently queried columns
- Use database views for complex queries
- Implement pagination for large datasets
- Cache frequently accessed data`;

  return prompt;
}

// Export for use in other blocks
export { getIndustryBackendConfig, getUseBackendConfig };
