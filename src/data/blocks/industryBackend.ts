// Industry-specific Backend Architecture Configurations
// This file contains recommended backend stacks for each industry

export interface IndustryBackendConfig {
  industry: string;
  // Core database tables needed
  coreTables: string[];
  // Supabase features to enable
  supabaseFeatures: string[];
  // Security requirements
  securityLevel: 'standard' | 'high' | 'critical';
  securityFeatures: string[];
  // Third-party integrations commonly needed
  integrations: string[];
  // Edge Functions recommendations
  edgeFunctions: string[];
  // Storage requirements
  storageNeeds: string[];
  // Real-time features
  realtimeFeatures: string[];
  // Pro-only advanced features
  proFeatures: {
    analytics: string[];
    automation: string[];
    integrations: string[];
    security: string[];
  };
}

export const industryBackendConfigs: Record<string, IndustryBackendConfig> = {
  'SaaS': {
    industry: 'SaaS',
    coreTables: [
      'workspaces (multi-tenant isolation)',
      'workspace_members (user-workspace relationships)',
      'subscriptions (billing status)',
      'invitations (team invites)',
      'audit_logs (activity tracking)',
    ],
    supabaseFeatures: [
      'Row Level Security (RLS) with workspace_id isolation',
      'Auth with custom claims for workspace context',
      'Realtime for collaborative features',
      'Edge Functions for webhook handling',
    ],
    securityLevel: 'standard',
    securityFeatures: [
      'Workspace-based RLS policies',
      'JWT custom claims with workspace_id',
      'API rate limiting per workspace',
      'Audit logging for admin actions',
    ],
    integrations: [
      'Stripe/Paddle for billing',
      'SendGrid/Resend for transactional emails',
      'Segment for analytics',
    ],
    edgeFunctions: [
      'Webhook handlers (Stripe, etc.)',
      'Invitation email sender',
      'Usage metering',
    ],
    storageNeeds: [
      'User avatars',
      'Workspace logos',
      'File attachments (if applicable)',
    ],
    realtimeFeatures: [
      'Presence indicators',
      'Live collaboration cursors',
      'Real-time notifications',
    ],
    proFeatures: {
      analytics: [
        'User engagement tracking',
        'Feature usage heatmaps',
        'Cohort analysis',
        'Custom event tracking',
      ],
      automation: [
        'Workflow automation engine',
        'Scheduled tasks (cron jobs)',
        'Webhook triggers',
        'Email automation sequences',
      ],
      integrations: [
        'SSO/SAML integration',
        'API access with OAuth',
        'Zapier/Make integration',
        'Custom webhook endpoints',
      ],
      security: [
        'Advanced audit logs with export',
        'IP allowlisting',
        'Session management dashboard',
        'Data retention policies',
      ],
    },
  },

  'Education': {
    industry: 'Education',
    coreTables: [
      'schools (institutions)',
      'courses (classes)',
      'enrollments (student-course)',
      'assignments (homework/projects)',
      'submissions (student work)',
      'grades (assessment results)',
      'guardian_relationships (parent-child)',
      'attendance (presence tracking)',
    ],
    supabaseFeatures: [
      'RLS with class-based isolation',
      'Auth with role claims (student/teacher/parent)',
      'Storage for assignment submissions',
      'Realtime for live classes',
    ],
    securityLevel: 'standard',
    securityFeatures: [
      'FERPA/COPPA compliance for minors',
      'Parent-only access to child data',
      'Teacher-student data boundaries',
      'Grade modification audit trail',
    ],
    integrations: [
      'LMS platforms (Canvas, Moodle)',
      'Video conferencing (Zoom)',
      'Google Workspace for Education',
      'Student Information Systems (SIS)',
    ],
    edgeFunctions: [
      'Assignment deadline notifications',
      'Grade calculation',
      'Attendance reporting',
      'Parent notification dispatch',
    ],
    storageNeeds: [
      'Assignment submissions (docs, PDFs)',
      'Course materials',
      'Video recordings',
      'Student portfolios',
    ],
    realtimeFeatures: [
      'Live class participation',
      'Quiz/poll responses',
      'Attendance check-in',
    ],
    proFeatures: {
      analytics: [
        'Student performance tracking',
        'Learning outcome analysis',
        'Engagement metrics',
        'At-risk student identification',
      ],
      automation: [
        'Automated grading (rubrics)',
        'Assignment reminder sequences',
        'Progress report generation',
        'Certificate issuance',
      ],
      integrations: [
        'Full SIS integration',
        'Plagiarism detection (Turnitin)',
        'Proctoring services',
        'Credential verification',
      ],
      security: [
        'Advanced parental controls',
        'Content filtering',
        'Data export for compliance',
        'Audit reporting',
      ],
    },
  },

  'Fitness': {
    industry: 'Fitness & Wellness',
    coreTables: [
      'members (gym members)',
      'memberships (subscription plans)',
      'classes (group sessions)',
      'class_bookings (reservations)',
      'trainers (coaches)',
      'workouts (exercise logs)',
      'check_ins (attendance)',
      'equipment (gym assets)',
    ],
    supabaseFeatures: [
      'RLS for member privacy',
      'Auth with membership status',
      'Realtime for class capacity',
      'Storage for workout media',
    ],
    securityLevel: 'standard',
    securityFeatures: [
      'Health data privacy',
      'Trainer-member boundaries',
      'Payment information security',
    ],
    integrations: [
      'Payment processors',
      'Wearable devices (Fitbit, Apple Watch)',
      'Nutrition tracking apps',
      'Scheduling software',
    ],
    edgeFunctions: [
      'Class reminder notifications',
      'Membership renewal processing',
      'Workout sync from wearables',
      'Achievement calculations',
    ],
    storageNeeds: [
      'Exercise demonstration videos',
      'Progress photos',
      'Workout plan PDFs',
    ],
    realtimeFeatures: [
      'Class availability updates',
      'Live workout tracking',
      'Trainer availability',
    ],
    proFeatures: {
      analytics: [
        'Member retention analysis',
        'Class popularity metrics',
        'Trainer performance',
        'Equipment utilization',
      ],
      automation: [
        'Membership renewal reminders',
        'Workout plan generation',
        'Progress milestone alerts',
        'Re-engagement campaigns',
      ],
      integrations: [
        'Full wearable ecosystem',
        'Nutrition planning apps',
        'Corporate wellness programs',
        'Insurance wellness incentives',
      ],
      security: [
        'Health data compliance',
        'Minor member protections',
        'Trainer certification tracking',
        'Incident reporting',
      ],
    },
  },

  'Community': {
    industry: 'Community Platform',
    coreTables: [
      'members (community members)',
      'posts (discussions/threads)',
      'comments (replies)',
      'groups (sub-communities)',
      'group_members (membership)',
      'events (community events)',
      'reactions (likes/upvotes)',
      'notifications (alerts)',
    ],
    supabaseFeatures: [
      'Realtime for live discussions',
      'RLS for private groups',
      'Auth with member roles',
      'Storage for user uploads',
      'Full-text search for content',
    ],
    securityLevel: 'standard',
    securityFeatures: [
      'Content moderation tools',
      'User blocking/muting',
      'Report system',
      'Privacy settings per user',
    ],
    integrations: [
      'Email providers (SendGrid)',
      'Push notifications',
      'Social login (Google, Discord)',
      'Analytics (Mixpanel)',
    ],
    edgeFunctions: [
      'Content moderation webhooks',
      'Notification dispatch',
      'Digest email generation',
      'Activity feed aggregation',
    ],
    storageNeeds: [
      'User avatars',
      'Post attachments',
      'Event images',
      'Group banners',
    ],
    realtimeFeatures: [
      'Live discussions',
      'Online presence indicators',
      'Notification badges',
      'Activity feed updates',
    ],
    proFeatures: {
      analytics: [
        'Member engagement metrics',
        'Content performance',
        'Growth analytics',
        'Retention analysis',
      ],
      automation: [
        'Welcome sequences',
        'Digest emails',
        'Milestone celebrations',
        'Re-engagement campaigns',
      ],
      integrations: [
        'Discord/Slack sync',
        'Zapier webhooks',
        'CRM integration',
        'Payment for memberships',
      ],
      security: [
        'Advanced moderation AI',
        'Spam detection',
        'Content filtering',
        'Audit logs',
      ],
    },
  },

  'Booking': {
    industry: 'Booking Platform',
    coreTables: [
      'providers (service providers)',
      'services (offered services)',
      'availability (time slots)',
      'bookings (appointments)',
      'customers (clients)',
      'locations (service locations)',
      'reminders (notifications)',
      'reviews (feedback)',
    ],
    supabaseFeatures: [
      'Realtime for availability updates',
      'RLS for provider-client isolation',
      'Database functions for scheduling',
      'Edge Functions for reminders',
      'Auth for multi-role access',
    ],
    securityLevel: 'standard',
    securityFeatures: [
      'Provider-client data isolation',
      'Booking access controls',
      'Payment data security',
      'Calendar privacy',
    ],
    integrations: [
      'Google Calendar',
      'Outlook Calendar',
      'Stripe for payments',
      'Twilio for SMS',
    ],
    edgeFunctions: [
      'Reminder notifications',
      'Calendar sync',
      'Booking confirmations',
      'No-show detection',
    ],
    storageNeeds: [
      'Provider photos',
      'Service images',
      'Location photos',
    ],
    realtimeFeatures: [
      'Availability updates',
      'Booking confirmations',
      'Cancellation alerts',
      'Wait list notifications',
    ],
    proFeatures: {
      analytics: [
        'Booking trends',
        'No-show rates',
        'Revenue per slot',
        'Peak time analysis',
      ],
      automation: [
        'Smart scheduling',
        'Automated reminders',
        'Follow-up sequences',
        'Review requests',
      ],
      integrations: [
        'Multi-calendar sync',
        'Payment processors',
        'Marketing automation',
        'CRM systems',
      ],
      security: [
        'HIPAA considerations',
        'Payment PCI compliance',
        'Data retention policies',
        'Access audit logs',
      ],
    },
  },

  'ContentPlatform': {
    industry: 'Content Platform',
    coreTables: [
      'creators (content creators)',
      'content (posts/articles/videos)',
      'subscriptions (subscriber records)',
      'tiers (membership levels)',
      'payments (transactions)',
      'comments (engagement)',
      'likes (reactions)',
      'analytics (view tracking)',
    ],
    supabaseFeatures: [
      'Storage for media files',
      'RLS for subscriber-only content',
      'Auth with subscription status',
      'Database functions for analytics',
      'Realtime for engagement',
    ],
    securityLevel: 'standard',
    securityFeatures: [
      'Content access control',
      'Creator-subscriber isolation',
      'Payment data security',
      'Media protection',
    ],
    integrations: [
      'Stripe for subscriptions',
      'Video hosting (Mux)',
      'Email marketing',
      'Social media sharing',
    ],
    edgeFunctions: [
      'Subscription webhooks',
      'Content delivery',
      'Analytics aggregation',
      'Newsletter dispatch',
    ],
    storageNeeds: [
      'Video content',
      'Audio files',
      'Images and thumbnails',
      'Downloadable files',
    ],
    realtimeFeatures: [
      'Live comments',
      'View counters',
      'Like notifications',
      'New content alerts',
    ],
    proFeatures: {
      analytics: [
        'Content performance',
        'Subscriber growth',
        'Revenue analytics',
        'Engagement metrics',
      ],
      automation: [
        'Content scheduling',
        'Subscriber onboarding',
        'Milestone notifications',
        'Churn prevention',
      ],
      integrations: [
        'Multiple payment providers',
        'Video transcoding',
        'SEO tools',
        'Affiliate tracking',
      ],
      security: [
        'Content DRM',
        'Download protection',
        'Watermarking',
        'Access logging',
      ],
    },
  },
};

// Get backend config for an industry
export const getIndustryBackendConfig = (industryId: string): IndustryBackendConfig | null => {
  return industryBackendConfigs[industryId] || null;
};
