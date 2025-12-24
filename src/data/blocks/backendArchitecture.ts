import type { PromptBlock } from './types';
import { industryBackendConfigs } from './industryBackend';

export const backendArchitectureBlock: PromptBlock = {
    id: 'backend.architecture',
    title: 'Backend Architecture',
    description: 'Recommended Supabase schema, architecture and Edge Functions based on industry patterns',
    tier: 'free',
    category: 'backend',
    render: (industryId: string, useId?: string) => {
        const config = industryBackendConfigs[industryId];

        if (!config) {
            return `# Backend Architecture

## Default Configuration
- **Database**: Postgres via Supabase
- **API**: Auto-generated REST + GraphQL
- **Auth**: Supabase Auth
- **Realtime**: Enabled for core tables
`;
        }

        return `# Backend Architecture — ${config.industry}

## Core Database Schema
Recommended tables for this industry:
${config.coreTables.map(t => `- ${t}`).join('\n')}

## Supabase Configurations
### Enabled Features
${config.supabaseFeatures.map(f => `- ${f}`).join('\n')}

### Edge Functions
Recommended server-less functions:
${config.edgeFunctions.map(f => `- ${f}`).join('\n')}

### Third-party Integrations
${config.integrations.map(i => `- ${i}`).join('\n')}

### Realtime Requirements
${config.realtimeFeatures.map(f => `- ${f}`).join('\n')}

---

## Security & Compliance
**Level**: ${config.securityLevel.toUpperCase()}
${config.securityFeatures.map(f => `- ${f}`).join('\n')}
`;
    },
};
