import type { PromptBlock } from './types';
import { getIndustryBackendConfig, type IndustryBackendConfig } from './industryBackend';
import { getUseBackendConfig, type UseBackendConfig } from './useBackend';

// Backend Architecture Block (Pro Feature)
// Generates production-ready Supabase backend architecture following the Backend Architecture & Security Specification

export const backendArchitectureBlock: PromptBlock = {
  id: 'backend.architecture',
  title: 'Backend Architecture',
  description: 'Production-ready Supabase backend architecture with enterprise-grade security, multi-tenant isolation, and audit compliance',
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
  return `# Backend Architecture & Security Specification
Production-Ready · Server-Authoritative · Audit-Grade  
**The Engineering Bible — Authoritative Edition**

---

## Purpose & Authority

This document defines the **authoritative backend architecture, security controls, and engineering practices** for this system.

It serves as the **single source of truth** for:
- Backend system design
- Security enforcement and data protection
- Authentication, authorization, and data access control
- **Webhook handling and external system integrations**
- Development, deployment, and operational practices
- CI-enforced governance

All production systems, services, and contributors **MUST comply** with this specification.

Where ambiguity or conflict exists, the **stricter interpretation always applies**.

This document is:
- Binding for all environments
- Enforced through CI (CI is the final authority)
- Designed for auditability, scalability, and long-term maintainability

---

## Audience
- Backend Engineers
- Frontend Engineers
- DevOps / SRE
- Security Reviewers
- Technical Architects

## Scope
- SaaS / Booking / Subscription / Payment systems
- Supabase / Postgres RLS
- Edge Functions / Webhooks
- Server-authoritative architecture (Frontend is untrusted)

---

# PART I — Core Security & Data Architecture

## 0. Core Security Principle

**Frontend is an untrusted client.**

The frontend may be modified, replayed, automated, or malicious.
All critical business rules MUST be enforced exclusively by the backend and database.

> Backend + Database = **Single Source of Truth**

This architecture explicitly defends against:
- Race conditions
- Price manipulation
- Unauthorized state transitions
- Cross-tenant data leaks
- Replay attacks
- Webhook abuse
- Forged audit logs

---

## 1. System Domain & Multi-Tenant Model

### Mandatory Rule
Every business-critical table MUST include \`workspace_id\`.

Core tables:
- workspaces
- workspace_members
- bookings
- pricing_plans
- price_quotes
- subscriptions
- audit_logs
- webhook_events

---

## 2. Tenant Isolation & RLS (Non-Negotiable)

### Workspace & Membership

\`\`\`sql
CREATE TABLE public.workspaces (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.workspace_members (
  workspace_id UUID REFERENCES public.workspaces(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'member',
  PRIMARY KEY (workspace_id, user_id)
);
\`\`\`

### Membership Primitive (Hardened)

\`\`\`sql
CREATE OR REPLACE FUNCTION public.is_workspace_member(ws_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.workspace_members wm
    WHERE wm.workspace_id = ws_id
      AND wm.user_id = auth.uid()
  );
$$;
\`\`\`

---

## 3. Booking System (Time, Concurrency & Abuse Safety)

\`\`\`sql
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workspace_id UUID NOT NULL,
  resource_id UUID NOT NULL,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_by UUID NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
\`\`\`

### Time Validity Constraint

\`\`\`sql
ALTER TABLE public.bookings
ADD CONSTRAINT valid_booking_time
CHECK (
  end_time > start_time
  AND end_time - start_time <= interval '24 hours'
);
\`\`\`

### Concurrency Protection

\`\`\`sql
ALTER TABLE public.bookings
ADD CONSTRAINT no_overlapping_bookings
EXCLUDE USING gist (
  resource_id WITH =,
  tstzrange(start_time, end_time) WITH &&
)
WHERE (status IN ('pending','confirmed'));
\`\`\`

---

## 4. Pricing & Payments (Server-Authoritative)

### Forbidden
- Client-submitted prices
- Client-calculated discounts
- Trusting frontend totals

\`\`\`sql
CREATE TABLE public.price_quotes (
  id UUID PRIMARY KEY,
  workspace_id UUID NOT NULL,
  user_id UUID NOT NULL,
  amount INT NOT NULL,
  currency TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  used BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);
\`\`\`

Rules:
- Quotes are single-use
- Quotes are expiring
- Payments accept **quote_id only**
- Quote consumption MUST be atomic (\`SELECT … FOR UPDATE\`)

---

## 5. State Transitions (Strict)

Allowed transitions:

\`\`\`
draft → pending → paid → confirmed → completed
\`\`\`

Rules:
- No direct status updates
- Invalid transitions → 403 Forbidden
- All transitions audited
- Webhooks may trigger, never command

---

## 6. Audit Logging (Tamper-Resistant)

\`\`\`sql
CREATE TABLE public.audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workspace_id UUID NOT NULL,
  actor_id UUID,
  action TEXT NOT NULL,
  table_name TEXT NOT NULL,
  record_id UUID,
  old_data JSONB,
  new_data JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);
\`\`\`

### Client Writes Forbidden

\`\`\`sql
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No client insert"
ON public.audit_logs
FOR INSERT
WITH CHECK (false);
\`\`\`

---

## 7. Storage Security

Buckets are private by default.

| Bucket | Public | Purpose |
|------|--------|--------|
| public-assets | true | Marketing |
| avatars | true | User avatars |
| workspace-files | false | Business data |
| private-attachments | false | Sensitive files |

---

## 8. Rate Limiting (Threat-Model Driven)

### Key Structure
\`\`\`
rl:{action}:{workspace_id}:{user_id}:{ip_prefix}
\`\`\`

| Action | Limit | Window | Failure Mode |
|------|------|--------|--------------|
| auth_login | 5 | 1 min | Fail-Closed |
| booking_create | 10 | 10 min | Fail-Closed |
| payment_create | 3 | 10 min | Fail-Closed |

---

## 9. Webhook Security

Webhooks are **untrusted async inputs**.

\`\`\`sql
CREATE TABLE public.webhook_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workspace_id UUID NOT NULL,
  provider TEXT NOT NULL,
  external_event_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  received_at TIMESTAMPTZ DEFAULT now(),
  processed_at TIMESTAMPTZ,
  status TEXT DEFAULT 'received',
  payload_hash TEXT NOT NULL,
  UNIQUE (provider, external_event_id)
);
\`\`\`

---

# PART II — Implementation Guide

## 10. Business Logic Implementation Guide

### 10.1 Pricing Calculation Rules
- All prices are calculated server-side.
- \`pricing_plans\` defines base price and billing period.
- Optional \`discount_codes\` MAY apply percentage or fixed discounts.
- Proration rules apply for subscription changes.
- Tax and currency conversion are server-computed.

### 10.2 Quote Generation Flow
1. Client requests quote intent.
2. Server validates plan, user, workspace.
3. Server calculates final amount.
4. Server issues \`price_quote\` with expiry.
5. Client may only pay using \`quote_id\`.

### 10.3 Webhook Processing Logic
- Verify signature
- Persist webhook_event
- Async verification via provider API
- Atomic quote consumption
- State transition + audit

---

## 11. API Contract Specification

### 11.1 Versioning
All APIs are versioned under \`/api/v1/*\`.

### 11.2 Error Response Schema
\`\`\`json
{
  "error_code": "STRING",
  "message": "Human readable message",
  "request_id": "uuid"
}
\`\`\`

---

## 12. Operations & Secrets Management

### 12.1 Secrets
- Environment variables or secret manager only.
- Never stored in DB or source control.

### 12.2 Backup & DR
- Daily backups
- 30-day retention
- Defined RPO/RTO

---

## 13. Edge Cases & Auxiliary Flows

### 13.1 Workspace Invitation
- Email-based invites
- Expiry tokens
- Audited accept/revoke

### 13.2 Data Retention
| Data | Retention |
|------|----------|
| price_quotes | 90 days |
| webhook_events | 180 days |
| audit_logs | ≥ 3 years |

---

# PART III — Dev Practice & Edge Case Handling (Executable)

## 14. Automated Security Testing (RLS)

### Principle
RLS policies are **code** and MUST be tested with the same rigor as application logic.

### Test Matrix Requirement
Every critical table (e.g. \`bookings\`, \`price_quotes\`) MUST cover:

| Actor | Expected Result |
|------|----------------|
| Owner | Can select / insert own data |
| Member | Can select workspace data |
| Outsider | Query returns **0 rows** (NOT error) |
| System | \`service_role\` bypass allowed |

### Implementation Standard
Tests MUST explicitly switch \`auth.uid()\` context.

\`\`\`sql
-- Example pgTAP-style test
SELECT tests.authenticate_as('user_owner_id');
SELECT is(count(*), 1) FROM bookings;

SELECT tests.authenticate_as('user_outsider_id');
SELECT is(count(*), 0) FROM bookings;
\`\`\`

Failure of any negative test blocks CI.

---

## 15. Transactional Outbox Pattern (Reliability)

### Rule
External APIs (Stripe, Email, Webhook) MUST NOT be called inside request handlers.

### Queue Schema
\`\`\`sql
CREATE TABLE public.job_queue (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT NOT NULL,
  payload JSONB NOT NULL,
  status TEXT DEFAULT 'pending',
  retries INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  locked_until TIMESTAMPTZ
);

CREATE INDEX idx_queue_pending
ON public.job_queue(status, created_at)
WHERE status = 'pending';
\`\`\`

### Worker Logic
- Business transaction INSERTs job into \`job_queue\`
- Async worker polls pending jobs
- Executes side effect
- Updates status → completed / failed / dead

---

## 16. API Standardization (Client Contract)

### Pagination Requirement
All list endpoints MUST follow this envelope:

\`\`\`json
{
  "data": [],
  "meta": {
    "page_size": 20,
    "has_more": true,
    "next_cursor": "cursor_token"
  }
}
\`\`\`

### Query Parameters
- \`?limit=20\` (max 100)
- \`?cursor=xyz\`
- \`?include_deleted=false\` (default)

Offset pagination is forbidden.

---

## 17. Data Privacy & Soft Delete

### Schema Standard
\`\`\`sql
ALTER TABLE public.bookings
ADD COLUMN deleted_at TIMESTAMPTZ;
\`\`\`

### RLS Enforcement
\`\`\`sql
CREATE POLICY "Hide deleted items"
ON public.bookings
FOR SELECT
USING (deleted_at IS NULL);
\`\`\`

### GDPR / PII Rule
On hard user deletion:
- PII fields in audit logs MUST be masked or nulled
- Business records may remain without identifiers

---

## 18. Performance & Indexing Strategy

### Mandatory Indexes
- RLS keys: \`workspace_id\`, \`user_id\`
- Foreign keys
- Sort keys: \`created_at\`

### Composite Index Rule
\`\`\`sql
CREATE INDEX idx_bookings_tenant_time
ON public.bookings (workspace_id, start_time DESC);
\`\`\`

Optimizes tenant-scoped pagination queries.

---

## 19. Edge Case Playbook

| Scenario | Deterministic Outcome |
|--------|----------------------|
| Duplicate webhook | Deduplicated |
| Worker crash | Retried |
| Expired quote | Rejected |
| Concurrent booking | Constraint failure |
| Member removed | Immediate denial |

# PART IV — Security Hardening Appendix 

## 20. service_role Usage Boundary (Critical)

### Threat Model
\`service_role\` bypasses all RLS policies.  
Misuse results in **total data exposure**.

### Allowed Usage (Whitelist)
\`service_role\` MAY ONLY be used in:
- Background workers
- One-off migration scripts
- Explicit admin-only maintenance jobs

### Forbidden Usage (Blacklist)
\`service_role\` MUST NOT be used in:
- Public API routes
- User-triggered request handlers
- Edge functions responding to client requests

### Enforcement Rule
Any code path using \`service_role\` MUST:
- Be reviewed by a senior engineer
- Explicitly scope all queries by \`workspace_id\`
- Be logged and auditable

Violation of this rule is a **security incident**.

---

## 21. Transactional Outbox Worker Locking (Concurrency Safety)

### Threat Model
Concurrent workers or crashes may cause:
- Duplicate execution
- Financial or messaging inconsistencies

### Mandatory Claim Pattern
Workers MUST atomically claim jobs:

\`\`\`sql
UPDATE job_queue
SET status = 'processing',
    locked_until = now() + interval '2 minutes'
WHERE id = :job_id
  AND status = 'pending'
  AND (locked_until IS NULL OR locked_until < now());
\`\`\`

### Retry & Recovery Rules
- Jobs with expired \`locked_until\` are retryable
- Max retries MUST be enforced
- Jobs exceeding retries MUST be marked \`dead\`
- All state transitions MUST be logged

---

## 22. Worker Abuse & Rate Protection

### Threat Model
Workers can be abused indirectly even if API rate limits exist.

### Protection Rules
- Job enqueue MUST respect per-workspace limits
- Job enqueue MUST respect per-job-type limits
- Excess jobs MUST be rejected or delayed

### Minimum Standard
At least one of the following MUST be implemented:
- Token bucket per workspace
- Queue depth hard limit
- Circuit breaker per job_type

---

## 23. Audit Log Safe Schema (Compliance)

### Threat Model
Audit logs may accidentally store:
- Secrets
- Tokens
- PII

### Forbidden Data
\`audit_logs.old_data\` / \`new_data\` MUST NOT contain:
- Raw request bodies
- Authorization headers
- Access tokens or secrets

### Allowed Data
- Domain-level field diffs
- Normalized identifiers (UUIDs)
- Masked PII only

### Masking Rule
\`\`\`text
email: a***@domain.com
phone: ****1234
\`\`\`

Violation constitutes a **compliance incident**.

# PART V — Operational Security Processes (Mandatory)

## 24. Security Incident Playbook

### Definition
A **Security Incident** is any event that:
- Exposes data across tenants
- Leaks PII or credentials
- Bypasses RLS unintentionally
- Uses \`service_role\` outside allowed boundaries
- Executes financial actions incorrectly

---

### Severity Levels

| Level | Description | Example |
|-----|------------|--------|
| P0 | Critical breach | Cross-tenant data leak |
| P1 | High risk | Unauthorized service_role use |
| P2 | Medium risk | Audit log PII exposure |
| P3 | Low risk | Suspicious access attempt |

---

### Mandatory Response Timeline

| Severity | Action |
|--------|-------|
| P0 | Immediate mitigation (< 1h) |
| P1 | Same-day mitigation |
| P2 | Fix within 72h |
| P3 | Log & monitor |

---

### Incident Response Steps
1. Contain (disable access / rotate keys)
2. Assess impact scope
3. Patch root cause
4. Audit affected records
5. Document incident & prevention steps

Failure to execute these steps is a **compliance violation**.

---

## 25. Production Change Approval Flow

### Rule
Any change affecting:
- RLS policies
- \`service_role\` usage
- Pricing / payment logic
- Webhook processing
- Data deletion logic

MUST follow this flow.

---

### Approval Flow

1. Code change + migration PR
2. Automated tests + RLS tests pass
3. Security review by senior engineer
4. Explicit approval (recorded)
5. Deployment

Emergency changes MUST be retroactively reviewed within 24h.

---

### Forbidden
- Direct DB changes in production
- Hotfixes bypassing CI
- Manual RLS edits without PR

---

## 26. CI Enforcement Rules (service_role & Critical Paths)

### Mandatory CI Checks

CI MUST fail if:
- \`service_role\` is referenced in API routes
- \`service_role\` is used in Edge functions
- New RLS policies lack tests
- Migrations modify RLS without test updates

---

### Example Detection Rule (Pseudo)

\`\`\`text
IF path matches /api/*
AND code references service_role
THEN fail build
\`\`\`

---

# PART VI — CI Automation Toolkit (CI is the Final Authority)

> This part turns the **spec into enforcement**.  
> All checks are **fail-closed**: any violation MUST exit non-zero and block merges/deploys.

## 27. Repository Layout (Recommended)

\`\`\`
scripts/
  check-service-role.sh
  check-db-migrations.js
.github/
  workflows/
    security-enforcement.yml
supabase/
  tests/
    rls/
      bookings_test.sql
      price_quotes_test.sql
      workspace_members_test.sql
\`\`\`

---

## 28. Static Analysis — service_role Misuse Scan (Fail-Closed)

### Rule
\`service_role\` MUST NOT appear in:
- API routes (\`src/app/api\`, \`src/api\`)
- User-triggered Edge Functions (\`supabase/functions\`)

### Script: \`scripts/check-service-role.sh\`
\`\`\`bash
#!/bin/bash
# Fail-closed scanner: blocks if service_role is used in forbidden directories.

set -euo pipefail

TARGET_DIRS=("supabase/functions" "src/api" "src/app/api")
FORBIDDEN_KEY="service_role"
EXIT_CODE=0

for DIR in "\${TARGET_DIRS[@]}"; do
  if [ -d "$DIR" ]; then
    # Search for service_role usage; exclude tests and known config files.
    RESULT=$(grep -rnE "$FORBIDDEN_KEY" "$DIR" \\
      --exclude="*.test.ts" --exclude="*.spec.ts" --exclude="config.ts" --exclude-dir="__tests__" || true)

    if [ -n "$RESULT" ]; then
      echo "❌ ERROR: Detected forbidden '$FORBIDDEN_KEY' usage under: $DIR"
      echo "$RESULT"
      EXIT_CODE=1
    fi
  fi
done

if [ $EXIT_CODE -eq 0 ]; then
  echo "✅ service_role misuse scan passed."
fi

exit $EXIT_CODE
\`\`\`

---

## 29. SQL Migration Risk Detector — RLS / Delete / Privilege Changes

### Goal
Identify **high-risk SQL changes** in \`supabase/migrations/\` and force:
- Security Review by senior engineer
- RLS tests to pass
- Optional: hard-block merge when detected

### Script: \`scripts/check-db-migrations.js\`
\`\`\`js
/**
 * Fail-closed high-risk migration detector.
 * - Scans PR diffs for SQL migrations
 * - Detects patterns: RLS policy changes, deletes, privilege escalation
 * - Exits 1 by default when high-risk detected (configurable)
 */

const { execSync } = require("child_process");
const fs = require("fs");

const BASE_REF = process.env.BASE_REF || "origin/main";
const HEAD_REF = process.env.HEAD_REF || "HEAD";
const FAIL_ON_HIGH_RISK = (process.env.FAIL_ON_HIGH_RISK || "true").toLowerCase() === "true";

const HIGH_RISK_PATTERNS = [
  /ENABLE\\s+ROW\\s+LEVEL\\s+SECURITY/i,
  /ALTER\\s+TABLE.*\\s+DISABLE\\s+ROW\\s+LEVEL\\s+SECURITY/i,
  /DROP\\s+POLICY/i,
  /CREATE\\s+POLICY/i,
  /ALTER\\s+POLICY/i,
  /GRANT\\s+/i,
  /REVOKE\\s+/i,
  /\\bSECURITY\\s+DEFINER\\b/i,
  /\\bservice_role\\b/i,
  /\\bdeleted_at\\b/i, // soft delete logic
  /DROP\\s+TABLE/i,
  /TRUNCATE\\s+/i,
];

function run(cmd) {
  return execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] }).toString();
}

function main() {
  const files = run(\`git diff --name-only \${BASE_REF}...\${HEAD_REF}\`)
    .split("\\n")
    .map((s) => s.trim())
    .filter(Boolean);

  const sqlMigrations = files.filter((f) => f.startsWith("supabase/migrations/") && f.endsWith(".sql"));

  if (sqlMigrations.length === 0) {
    console.log("✅ No SQL migrations changed.");
    process.exit(0);
  }

  let highRiskDetected = false;

  for (const file of sqlMigrations) {
    const content = fs.readFileSync(file, "utf8");

    for (const pattern of HIGH_RISK_PATTERNS) {
      if (pattern.test(content)) {
        console.log(\`⚠️ High-risk migration detected: \${file} matches \${pattern}\`);
        highRiskDetected = true;
      }
    }
  }

  if (highRiskDetected) {
    console.log("❗ SECURITY REVIEW REQUIRED: This PR includes high-risk database changes.");
    console.log("   - Ensure RLS tests are updated and passing.");
    console.log("   - Ensure approval flow (Part V) is followed.");
    if (FAIL_ON_HIGH_RISK) {
      console.log("❌ Blocking merge due to FAIL_ON_HIGH_RISK=true");
      process.exit(1);
    }
  }

  console.log("✅ Migration scan completed.");
}

main();
\`\`\`

---

## 30. RLS Test Coverage Gate (pgTAP / Supabase Local)

### Requirement
For each critical table (minimum):
- \`bookings\`
- \`price_quotes\`
- \`workspace_members\`

A corresponding test file MUST exist under:
\`supabase/tests/rls/<table>_test.sql\`

### Minimum Assertions (Per Table)
- Owner access works
- Member access works (per policy)
- Outsider access returns **0 rows** (NOT error)
- service_role path is permitted only where allowed

### Example pgTAP Concept (context switching)
\`\`\`sql
-- Example (conceptual) helpers for switching auth context.
# SELECT tests.authenticate_as('user_owner_id');
# SELECT is((SELECT count(*) FROM bookings), 1, 'Owner sees own bookings');

# SELECT tests.authenticate_as('user_outsider_id');
# SELECT is((SELECT count(*) FROM bookings), 0, 'Outsider sees 0 rows due to RLS');
\`\`\`

---

## 31. Audit Log Protection Gate (Fail-Closed)

### Rule
The \`audit_logs\` RLS MUST continue to enforce:
- No client insert (e.g. \`WITH CHECK (false)\`)
- Insert only via privileged backend path (service role / security definer RPC)

### Optional Script Extension
Add an automated check that fails if any migration:
- Drops/changes the \`audit_logs\` RLS "no client insert" policy
- Disables RLS for \`audit_logs\`

This can be implemented by extending \`HIGH_RISK_PATTERNS\` with:
- \`/audit_logs/i\` scoped checks
- and enforcing \`FAIL_ON_HIGH_RISK=true\`.

---

## 32. GitHub Actions Workflow (Pull Request Gate)

### File: \`.github/workflows/security-enforcement.yml\`
\`\`\`yaml
name: Security Enforcement

on:
  pull_request:

jobs:
  security_enforcement:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Static scan - service_role misuse
        run: |
          chmod +x scripts/check-service-role.sh
          scripts/check-service-role.sh

      - name: Detect high-risk SQL migrations (fail-closed)
        env:
          BASE_REF: origin/main
          HEAD_REF: HEAD
          FAIL_ON_HIGH_RISK: "true"
        run: |
          node scripts/check-db-migrations.js

      - name: Verify RLS test coverage (fail-closed)
        run: |
          for table in bookings price_quotes workspace_members; do
            if [ ! -f "supabase/tests/rls/\${table}_test.sql" ]; then
              echo "❌ Missing RLS test file for table: \${table}"
              exit 1
            fi
          done
          echo "✅ RLS test coverage check passed."

      - name: Run database tests (Supabase CLI)
        run: |
          # Requires Supabase CLI installed in CI image or install step.
          # Install example:
          # npm i -g supabase
          supabase db test
\`\`\`

---

## 33. Fail-Closed Principle (Hard Rule)
All security checks MUST:
- exit \`1\` on violation
- be non-overridable by human approval
- run on every PR affecting code or migrations

**CI is the final authority.**

## Final Enforcement Statement

If a change:
- Violates security processes
- Bypasses CI enforcement
- Skips incident procedures

It MUST NOT reach production.

---

**Version:** 2025/12/25 
**Status:** Engineering Bible (Near-Full Score)`;
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

  let prompt = `# Backend Architecture & Security Specification
Production-Ready · Server-Authoritative · Audit-Grade  
**The Engineering Bible — Authoritative Edition**

---

## Purpose & Authority

This document defines the **authoritative backend architecture, security controls, and engineering practices** for this system.

It serves as the **single source of truth** for:
- Backend system design
- Security enforcement and data protection
- Authentication, authorization, and data access control
- **Webhook handling and external system integrations**
- Development, deployment, and operational practices
- CI-enforced governance

All production systems, services, and contributors **MUST comply** with this specification.

Where ambiguity or conflict exists, the **stricter interpretation always applies**.

This document is:
- Binding for all environments
- Enforced through CI (CI is the final authority)
- Designed for auditability, scalability, and long-term maintainability

---

## Audience
- Backend Engineers
- Frontend Engineers
- DevOps / SRE
- Security Reviewers
- Technical Architects

## Scope
- SaaS / Booking / Subscription / Payment systems
- Supabase / Postgres RLS
- Edge Functions / Webhooks
- Server-authoritative architecture (Frontend is untrusted)

### Industry: ${industry.industry}
### Security Level: ${securityBadge}

---

# PART I — Core Security & Data Architecture

## 0. Core Security Principle

**Frontend is an untrusted client.**

The frontend may be modified, replayed, automated, or malicious.
All critical business rules MUST be enforced exclusively by the backend and database.

> Backend + Database = **Single Source of Truth**

This architecture explicitly defends against:
- Race conditions
- Price manipulation
- Unauthorized state transitions
- Cross-tenant data leaks
- Replay attacks
- Webhook abuse
- Forged audit logs

---

## 1. System Domain & Multi-Tenant Model

### Mandatory Rule
Every business-critical table MUST include \`workspace_id\`.

Core tables:
- workspaces
- workspace_members
- bookings
- pricing_plans
- price_quotes
- subscriptions
- audit_logs
- webhook_events

### Industry-Specific Tables for ${industry.industry}
${industry.coreTables.map(table => `- ${table}`).join('\n')}

${use ? `
### Use-Case Specific Tables for ${use.use}
${use.requiredTables.map(table => `- ${table}`).join('\n')}
` : ''}

---

## 2. Tenant Isolation & RLS (Non-Negotiable)

### Workspace & Membership

\`\`\`sql
CREATE TABLE public.workspaces (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE public.workspace_members (
  workspace_id UUID REFERENCES public.workspaces(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'member',
  PRIMARY KEY (workspace_id, user_id)
);
\`\`\`

### Membership Primitive (Hardened)

\`\`\`sql
CREATE OR REPLACE FUNCTION public.is_workspace_member(ws_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.workspace_members wm
    WHERE wm.workspace_id = ws_id
      AND wm.user_id = auth.uid()
  );
$$;
\`\`\`

---

## 3. Booking System (Time, Concurrency & Abuse Safety)

\`\`\`sql
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workspace_id UUID NOT NULL,
  resource_id UUID NOT NULL,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_by UUID NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
\`\`\`

### Time Validity Constraint

\`\`\`sql
ALTER TABLE public.bookings
ADD CONSTRAINT valid_booking_time
CHECK (
  end_time > start_time
  AND end_time - start_time <= interval '24 hours'
);
\`\`\`

### Concurrency Protection

\`\`\`sql
ALTER TABLE public.bookings
ADD CONSTRAINT no_overlapping_bookings
EXCLUDE USING gist (
  resource_id WITH =,
  tstzrange(start_time, end_time) WITH &&
)
WHERE (status IN ('pending','confirmed'));
\`\`\`

---

## 4. Pricing & Payments (Server-Authoritative)

### Forbidden
- Client-submitted prices
- Client-calculated discounts
- Trusting frontend totals

\`\`\`sql
CREATE TABLE public.price_quotes (
  id UUID PRIMARY KEY,
  workspace_id UUID NOT NULL,
  user_id UUID NOT NULL,
  amount INT NOT NULL,
  currency TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  used BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);
\`\`\`

Rules:
- Quotes are single-use
- Quotes are expiring
- Payments accept **quote_id only**
- Quote consumption MUST be atomic (\`SELECT … FOR UPDATE\`)

---

## 5. State Transitions (Strict)

Allowed transitions:

\`\`\`
draft → pending → paid → confirmed → completed
\`\`\`

Rules:
- No direct status updates
- Invalid transitions → 403 Forbidden
- All transitions audited
- Webhooks may trigger, never command

---

## 6. Audit Logging (Tamper-Resistant)

\`\`\`sql
CREATE TABLE public.audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workspace_id UUID NOT NULL,
  actor_id UUID,
  action TEXT NOT NULL,
  table_name TEXT NOT NULL,
  record_id UUID,
  old_data JSONB,
  new_data JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);
\`\`\`

### Client Writes Forbidden

\`\`\`sql
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No client insert"
ON public.audit_logs
FOR INSERT
WITH CHECK (false);
\`\`\`

---

## 7. Storage Security

Buckets are private by default.

| Bucket | Public | Purpose |
|------|--------|--------|
| public-assets | true | Marketing |
| avatars | true | User avatars |
| workspace-files | false | Business data |
| private-attachments | false | Sensitive files |

---

## 8. Rate Limiting (Threat-Model Driven)

### Key Structure
\`\`\`
rl:{action}:{workspace_id}:{user_id}:{ip_prefix}
\`\`\`

| Action | Limit | Window | Failure Mode |
|------|------|--------|--------------|
| auth_login | 5 | 1 min | Fail-Closed |
| booking_create | 10 | 10 min | Fail-Closed |
| payment_create | 3 | 10 min | Fail-Closed |

---

## 9. Webhook Security

Webhooks are **untrusted async inputs**.

\`\`\`sql
CREATE TABLE public.webhook_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workspace_id UUID NOT NULL,
  provider TEXT NOT NULL,
  external_event_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  received_at TIMESTAMPTZ DEFAULT now(),
  processed_at TIMESTAMPTZ,
  status TEXT DEFAULT 'received',
  payload_hash TEXT NOT NULL,
  UNIQUE (provider, external_event_id)
);
\`\`\`

---

# PART II — Implementation Guide

## 10. Business Logic Implementation Guide

### 10.1 Pricing Calculation Rules
- All prices are calculated server-side.
- \`pricing_plans\` defines base price and billing period.
- Optional \`discount_codes\` MAY apply percentage or fixed discounts.
- Proration rules apply for subscription changes.
- Tax and currency conversion are server-computed.

### 10.2 Quote Generation Flow
1. Client requests quote intent.
2. Server validates plan, user, workspace.
3. Server calculates final amount.
4. Server issues \`price_quote\` with expiry.
5. Client may only pay using \`quote_id\`.

### 10.3 Webhook Processing Logic
- Verify signature
- Persist webhook_event
- Async verification via provider API
- Atomic quote consumption
- State transition + audit

---

## 11. API Contract Specification

### 11.1 Versioning
All APIs are versioned under \`/api/v1/*\`.

### 11.2 Error Response Schema
\`\`\`json
{
  "error_code": "STRING",
  "message": "Human readable message",
  "request_id": "uuid"
}
\`\`\`

---

## 12. Operations & Secrets Management

### 12.1 Secrets
- Environment variables or secret manager only.
- Never stored in DB or source control.

### 12.2 Backup & DR
- Daily backups
- 30-day retention
- Defined RPO/RTO

---

## 13. Edge Cases & Auxiliary Flows

### 13.1 Workspace Invitation
- Email-based invites
- Expiry tokens
- Audited accept/revoke

### 13.2 Data Retention
| Data | Retention |
|------|----------|
| price_quotes | 90 days |
| webhook_events | 180 days |
| audit_logs | ≥ 3 years |

${use ? `

---

## 14. Industry-Specific Implementation (${industry.industry})

### Security Requirements
${industry.securityFeatures.map(f => `- ${f}`).join('\n')}

### Recommended Supabase Features
${industry.supabaseFeatures.map(f => `- ✅ ${f}`).join('\n')}

### Required Edge Functions
${industry.edgeFunctions.map(f => `- \`${f.toLowerCase().replace(/\s+/g, '-')}\``).join('\n')}

### Storage Requirements
${industry.storageNeeds.map(s => `- \`${s.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}\``).join('\n')}

### Third-Party Integrations
${industry.integrations.map(i => `- ${i}`).join('\n')}

---

## 15. Use-Case Specific Implementation (${use.use})

### Required API Endpoints
${use.apiEndpoints.map(e => `- \`${e}\``).join('\n')}

### Supabase Features
${use.supabaseFeatures.map(f => `- ${f}`).join('\n')}

### Edge Functions
${use.edgeFunctions.map(f => `- ${f}`).join('\n')}

### Pro Enhancements
${use.proEnhancements.map(e => `- ⭐ ${e}`).join('\n')}
` : ''}

---

# PART III — Dev Practice & Edge Case Handling (Executable)

## 16. Automated Security Testing (RLS)

### Principle
RLS policies are **code** and MUST be tested with the same rigor as application logic.

### Test Matrix Requirement
Every critical table (e.g. \`bookings\`, \`price_quotes\`) MUST cover:

| Actor | Expected Result |
|------|----------------|
| Owner | Can select / insert own data |
| Member | Can select workspace data |
| Outsider | Query returns **0 rows** (NOT error) |
| System | \`service_role\` bypass allowed |

### Implementation Standard
Tests MUST explicitly switch \`auth.uid()\` context.

\`\`\`sql
-- Example pgTAP-style test
SELECT tests.authenticate_as('user_owner_id');
SELECT is(count(*), 1) FROM bookings;

SELECT tests.authenticate_as('user_outsider_id');
SELECT is(count(*), 0) FROM bookings;
\`\`\`

Failure of any negative test blocks CI.

---

## 17. Transactional Outbox Pattern (Reliability)

### Rule
External APIs (Stripe, Email, Webhook) MUST NOT be called inside request handlers.

### Queue Schema
\`\`\`sql
CREATE TABLE public.job_queue (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT NOT NULL,
  payload JSONB NOT NULL,
  status TEXT DEFAULT 'pending',
  retries INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  locked_until TIMESTAMPTZ
);

CREATE INDEX idx_queue_pending
ON public.job_queue(status, created_at)
WHERE status = 'pending';
\`\`\`

### Worker Logic
- Business transaction INSERTs job into \`job_queue\`
- Async worker polls pending jobs
- Executes side effect
- Updates status → completed / failed / dead

---

## 18. API Standardization (Client Contract)

### Pagination Requirement
All list endpoints MUST follow this envelope:

\`\`\`json
{
  "data": [],
  "meta": {
    "page_size": 20,
    "has_more": true,
    "next_cursor": "cursor_token"
  }
}
\`\`\`

### Query Parameters
- \`?limit=20\` (max 100)
- \`?cursor=xyz\`
- \`?include_deleted=false\` (default)

Offset pagination is forbidden.

---

## 19. Data Privacy & Soft Delete

### Schema Standard
\`\`\`sql
ALTER TABLE public.bookings
ADD COLUMN deleted_at TIMESTAMPTZ;
\`\`\`

### RLS Enforcement
\`\`\`sql
CREATE POLICY "Hide deleted items"
ON public.bookings
FOR SELECT
USING (deleted_at IS NULL);
\`\`\`

### GDPR / PII Rule
On hard user deletion:
- PII fields in audit logs MUST be masked or nulled
- Business records may remain without identifiers

---

## 20. Performance & Indexing Strategy

### Mandatory Indexes
- RLS keys: \`workspace_id\`, \`user_id\`
- Foreign keys
- Sort keys: \`created_at\`

### Composite Index Rule
\`\`\`sql
CREATE INDEX idx_bookings_tenant_time
ON public.bookings (workspace_id, start_time DESC);
\`\`\`

Optimizes tenant-scoped pagination queries.

---

## 21. Edge Case Playbook

| Scenario | Deterministic Outcome |
|--------|----------------------|
| Duplicate webhook | Deduplicated |
| Worker crash | Retried |
| Expired quote | Rejected |
| Concurrent booking | Constraint failure |
| Member removed | Immediate denial |

# PART IV — Security Hardening Appendix 

## 22. service_role Usage Boundary (Critical)

### Threat Model
\`service_role\` bypasses all RLS policies.  
Misuse results in **total data exposure**.

### Allowed Usage (Whitelist)
\`service_role\` MAY ONLY be used in:
- Background workers
- One-off migration scripts
- Explicit admin-only maintenance jobs

### Forbidden Usage (Blacklist)
\`service_role\` MUST NOT be used in:
- Public API routes
- User-triggered request handlers
- Edge functions responding to client requests

### Enforcement Rule
Any code path using \`service_role\` MUST:
- Be reviewed by a senior engineer
- Explicitly scope all queries by \`workspace_id\`
- Be logged and auditable

Violation of this rule is a **security incident**.

---

## 23. Transactional Outbox Worker Locking (Concurrency Safety)

### Threat Model
Concurrent workers or crashes may cause:
- Duplicate execution
- Financial or messaging inconsistencies

### Mandatory Claim Pattern
Workers MUST atomically claim jobs:

\`\`\`sql
UPDATE job_queue
SET status = 'processing',
    locked_until = now() + interval '2 minutes'
WHERE id = :job_id
  AND status = 'pending'
  AND (locked_until IS NULL OR locked_until < now());
\`\`\`

### Retry & Recovery Rules
- Jobs with expired \`locked_until\` are retryable
- Max retries MUST be enforced
- Jobs exceeding retries MUST be marked \`dead\`
- All state transitions MUST be logged

---

## 24. Worker Abuse & Rate Protection

### Threat Model
Workers can be abused indirectly even if API rate limits exist.

### Protection Rules
- Job enqueue MUST respect per-workspace limits
- Job enqueue MUST respect per-job-type limits
- Excess jobs MUST be rejected or delayed

### Minimum Standard
At least one of the following MUST be implemented:
- Token bucket per workspace
- Queue depth hard limit
- Circuit breaker per job_type

---

## 25. Audit Log Safe Schema (Compliance)

### Threat Model
Audit logs may accidentally store:
- Secrets
- Tokens
- PII

### Forbidden Data
\`audit_logs.old_data\` / \`new_data\` MUST NOT contain:
- Raw request bodies
- Authorization headers
- Access tokens or secrets

### Allowed Data
- Domain-level field diffs
- Normalized identifiers (UUIDs)
- Masked PII only

### Masking Rule
\`\`\`text
email: a***@domain.com
phone: ****1234
\`\`\`

Violation constitutes a **compliance incident**.

# PART V — Operational Security Processes (Mandatory)

## 26. Security Incident Playbook

### Definition
A **Security Incident** is any event that:
- Exposes data across tenants
- Leaks PII or credentials
- Bypasses RLS unintentionally
- Uses \`service_role\` outside allowed boundaries
- Executes financial actions incorrectly

---

### Severity Levels

| Level | Description | Example |
|-----|------------|--------|
| P0 | Critical breach | Cross-tenant data leak |
| P1 | High risk | Unauthorized service_role use |
| P2 | Medium risk | Audit log PII exposure |
| P3 | Low risk | Suspicious access attempt |

---

### Mandatory Response Timeline

| Severity | Action |
|--------|-------|
| P0 | Immediate mitigation (< 1h) |
| P1 | Same-day mitigation |
| P2 | Fix within 72h |
| P3 | Log & monitor |

---

### Incident Response Steps
1. Contain (disable access / rotate keys)
2. Assess impact scope
3. Patch root cause
4. Audit affected records
5. Document incident & prevention steps

Failure to execute these steps is a **compliance violation**.

---

## 27. Production Change Approval Flow

### Rule
Any change affecting:
- RLS policies
- \`service_role\` usage
- Pricing / payment logic
- Webhook processing
- Data deletion logic

MUST follow this flow.

---

### Approval Flow

1. Code change + migration PR
2. Automated tests + RLS tests pass
3. Security review by senior engineer
4. Explicit approval (recorded)
5. Deployment

Emergency changes MUST be retroactively reviewed within 24h.

---

### Forbidden
- Direct DB changes in production
- Hotfixes bypassing CI
- Manual RLS edits without PR

---

## 28. CI Enforcement Rules (service_role & Critical Paths)

### Mandatory CI Checks

CI MUST fail if:
- \`service_role\` is referenced in API routes
- \`service_role\` is used in Edge functions
- New RLS policies lack tests
- Migrations modify RLS without test updates

---

### Example Detection Rule (Pseudo)

\`\`\`text
IF path matches /api/*
AND code references service_role
THEN fail build
\`\`\`

---

# PART VI — CI Automation Toolkit (CI is the Final Authority)

> This part turns the **spec into enforcement**.  
> All checks are **fail-closed**: any violation MUST exit non-zero and block merges/deploys.

## 29. Repository Layout (Recommended)

\`\`\`
scripts/
  check-service-role.sh
  check-db-migrations.js
.github/
  workflows/
    security-enforcement.yml
supabase/
  tests/
    rls/
      bookings_test.sql
      price_quotes_test.sql
      workspace_members_test.sql
\`\`\`

---

## 30. Static Analysis — service_role Misuse Scan (Fail-Closed)

### Rule
\`service_role\` MUST NOT appear in:
- API routes (\`src/app/api\`, \`src/api\`)
- User-triggered Edge Functions (\`supabase/functions\`)

### Script: \`scripts/check-service-role.sh\`
\`\`\`bash
#!/bin/bash
# Fail-closed scanner: blocks if service_role is used in forbidden directories.

set -euo pipefail

TARGET_DIRS=("supabase/functions" "src/api" "src/app/api")
FORBIDDEN_KEY="service_role"
EXIT_CODE=0

for DIR in "\${TARGET_DIRS[@]}"; do
  if [ -d "$DIR" ]; then
    # Search for service_role usage; exclude tests and known config files.
    RESULT=$(grep -rnE "$FORBIDDEN_KEY" "$DIR" \\
      --exclude="*.test.ts" --exclude="*.spec.ts" --exclude="config.ts" --exclude-dir="__tests__" || true)

    if [ -n "$RESULT" ]; then
      echo "❌ ERROR: Detected forbidden '$FORBIDDEN_KEY' usage under: $DIR"
      echo "$RESULT"
      EXIT_CODE=1
    fi
  fi
done

if [ $EXIT_CODE -eq 0 ]; then
  echo "✅ service_role misuse scan passed."
fi

exit $EXIT_CODE
\`\`\`

---

## 31. SQL Migration Risk Detector — RLS / Delete / Privilege Changes

### Goal
Identify **high-risk SQL changes** in \`supabase/migrations/\` and force:
- Security Review by senior engineer
- RLS tests to pass
- Optional: hard-block merge when detected

### Script: \`scripts/check-db-migrations.js\`
\`\`\`js
/**
 * Fail-closed high-risk migration detector.
 * - Scans PR diffs for SQL migrations
 * - Detects patterns: RLS policy changes, deletes, privilege escalation
 * - Exits 1 by default when high-risk detected (configurable)
 */

const { execSync } = require("child_process");
const fs = require("fs");

const BASE_REF = process.env.BASE_REF || "origin/main";
const HEAD_REF = process.env.HEAD_REF || "HEAD";
const FAIL_ON_HIGH_RISK = (process.env.FAIL_ON_HIGH_RISK || "true").toLowerCase() === "true";

const HIGH_RISK_PATTERNS = [
  /ENABLE\\s+ROW\\s+LEVEL\\s+SECURITY/i,
  /ALTER\\s+TABLE.*\\s+DISABLE\\s+ROW\\s+LEVEL\\s+SECURITY/i,
  /DROP\\s+POLICY/i,
  /CREATE\\s+POLICY/i,
  /ALTER\\s+POLICY/i,
  /GRANT\\s+/i,
  /REVOKE\\s+/i,
  /\\bSECURITY\\s+DEFINER\\b/i,
  /\\bservice_role\\b/i,
  /\\bdeleted_at\\b/i, // soft delete logic
  /DROP\\s+TABLE/i,
  /TRUNCATE\\s+/i,
];

function run(cmd) {
  return execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] }).toString();
}

function main() {
  const files = run(\`git diff --name-only \${BASE_REF}...\${HEAD_REF}\`)
    .split("\\n")
    .map((s) => s.trim())
    .filter(Boolean);

  const sqlMigrations = files.filter((f) => f.startsWith("supabase/migrations/") && f.endsWith(".sql"));

  if (sqlMigrations.length === 0) {
    console.log("✅ No SQL migrations changed.");
    process.exit(0);
  }

  let highRiskDetected = false;

  for (const file of sqlMigrations) {
    const content = fs.readFileSync(file, "utf8");

    for (const pattern of HIGH_RISK_PATTERNS) {
      if (pattern.test(content)) {
        console.log(\`⚠️ High-risk migration detected: \${file} matches \${pattern}\`);
        highRiskDetected = true;
      }
    }
  }

  if (highRiskDetected) {
    console.log("❗ SECURITY REVIEW REQUIRED: This PR includes high-risk database changes.");
    console.log("   - Ensure RLS tests are updated and passing.");
    console.log("   - Ensure approval flow (Part V) is followed.");
    if (FAIL_ON_HIGH_RISK) {
      console.log("❌ Blocking merge due to FAIL_ON_HIGH_RISK=true");
      process.exit(1);
    }
  }

  console.log("✅ Migration scan completed.");
}

main();
\`\`\`

---

## 32. RLS Test Coverage Gate (pgTAP / Supabase Local)

### Requirement
For each critical table (minimum):
- \`bookings\`
- \`price_quotes\`
- \`workspace_members\`

A corresponding test file MUST exist under:
\`supabase/tests/rls/<table>_test.sql\`

### Minimum Assertions (Per Table)
- Owner access works
- Member access works (per policy)
- Outsider access returns **0 rows** (NOT error)
- service_role path is permitted only where allowed

### Example pgTAP Concept (context switching)
\`\`\`sql
-- Example (conceptual) helpers for switching auth context.
# SELECT tests.authenticate_as('user_owner_id');
# SELECT is((SELECT count(*) FROM bookings), 1, 'Owner sees own bookings');

# SELECT tests.authenticate_as('user_outsider_id');
# SELECT is((SELECT count(*) FROM bookings), 0, 'Outsider sees 0 rows due to RLS');
\`\`\`

---

## 33. Audit Log Protection Gate (Fail-Closed)

### Rule
The \`audit_logs\` RLS MUST continue to enforce:
- No client insert (e.g. \`WITH CHECK (false)\`)
- Insert only via privileged backend path (service role / security definer RPC)

### Optional Script Extension
Add an automated check that fails if any migration:
- Drops/changes the \`audit_logs\` RLS "no client insert" policy
- Disables RLS for \`audit_logs\`

This can be implemented by extending \`HIGH_RISK_PATTERNS\` with:
- \`/audit_logs/i\` scoped checks
- and enforcing \`FAIL_ON_HIGH_RISK=true\`.

---

## 34. GitHub Actions Workflow (Pull Request Gate)

### File: \`.github/workflows/security-enforcement.yml\`
\`\`\`yaml
name: Security Enforcement

on:
  pull_request:

jobs:
  security_enforcement:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Static scan - service_role misuse
        run: |
          chmod +x scripts/check-service-role.sh
          scripts/check-service-role.sh

      - name: Detect high-risk SQL migrations (fail-closed)
        env:
          BASE_REF: origin/main
          HEAD_REF: HEAD
          FAIL_ON_HIGH_RISK: "true"
        run: |
          node scripts/check-db-migrations.js

      - name: Verify RLS test coverage (fail-closed)
        run: |
          for table in bookings price_quotes workspace_members; do
            if [ ! -f "supabase/tests/rls/\${table}_test.sql" ]; then
              echo "❌ Missing RLS test file for table: \${table}"
              exit 1
            fi
          done
          echo "✅ RLS test coverage check passed."

      - name: Run database tests (Supabase CLI)
        run: |
          # Requires Supabase CLI installed in CI image or install step.
          # Install example:
          # npm i -g supabase
          supabase db test
\`\`\`

---

## 35. Fail-Closed Principle (Hard Rule)
All security checks MUST:
- exit \`1\` on violation
- be non-overridable by human approval
- run on every PR affecting code or migrations

**CI is the final authority.**

## Final Enforcement Statement

If a change:
- Violates security processes
- Bypasses CI enforcement
- Skips incident procedures

It MUST NOT reach production.

---

**Version:** 2025/12/25 
**Status:** Engineering Bible (Near-Full Score)  

---

## 36. Supabase MCP Integration

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

## 37. Production Deployment Checklist

### Pre-Launch Security Requirements
- [ ] Enable RLS on ALL tables (non-negotiable)
- [ ] Test all RLS policies with automated tests
- [ ] Set up proper indexes for tenant isolation
- [ ] Configure rate limiting with Redis
- [ ] Set up monitoring/alerts for security events
- [ ] Review service_role usage boundaries
- [ ] Verify audit log protection
- [ ] Test webhook signature verification
- [ ] Run CI security enforcement checks
- [ ] Document incident response procedures

### Environment Variables
\`\`\`env
# Supabase Configuration
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key (server-side only)

# Security Configuration
RATE_LIMIT_REDIS_URL=redis://localhost:6379
WEBHOOK_SECRET_TOKEN=your-webhook-secret
AUDIT_LOG_RETENTION_DAYS=1095  # 3 years

# Feature Flags
ENABLE_ADVANCED_ANALYTICS=true
ENABLE_TRANSACTIONAL_OUTBOX=true
ENABLE_SECURITY_AUDIT_LOGGING=true
\`\`\`

### Performance & Security Optimization
- Add composite indexes for tenant-scoped queries
- Use database views for complex multi-tenant queries
- Implement cursor-based pagination (offset is forbidden)
- Cache frequently accessed data with proper invalidation
- Monitor query performance per workspace
- Set up automated backup verification
- Configure read replicas for analytics queries

---

## 38. Enterprise Support & Maintenance

### 📞 Support Tiers
- **Standard**: Community support + documentation
- **Business**: Email support + 48h response
- **Enterprise**: Dedicated support + 4h response + SLA

### 🔄 Maintenance Schedule
- **Weekly**: Security patch updates
- **Monthly**: RLS policy audits
- **Quarterly**: Penetration testing
- **Annually**: Full security assessment

### 📚 Additional Resources
- Backend Architecture & Security Specification (complete document)
- RLS Testing Guide with pgTAP examples
- CI/CD Security Templates
- Incident Response Playbook templates
- Data Retention Policy templates

---

**This architecture specification ensures your application is built with enterprise-grade security from day one.**`;

  return prompt;
}

// Export for use in other blocks
export { getIndustryBackendConfig, getUseBackendConfig };
