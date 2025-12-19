// Industry-Use Mapping Configuration
// Defines which uses are suitable for each industry and Supabase compatibility

export interface IndustryUseConfig {
  industryId: string;
  industryName: string;
  // Supabase compatibility score (1-5, 5 being best fit)
  supabaseScore: 1 | 2 | 3 | 4 | 5;
  // Why this industry is good/not good for Supabase
  supabaseReason: string;
  // Recommended uses for this industry
  recommendedUses: string[];
  // Uses that don't make sense for this industry
  excludedUses: string[];
  // Key Supabase features for this industry
  keySupabaseFeatures: string[];
  // Pro-only Supabase features
  proSupabaseFeatures: string[];
}

export const industryUseMappings: Record<string, IndustryUseConfig> = {
  'SaaS': {
    industryId: 'SaaS',
    industryName: 'SaaS Software',
    supabaseScore: 5,
    supabaseReason: 'Perfect fit - Supabase excels at multi-tenant apps with RLS, real-time features, and Auth',
    recommendedUses: [
      'FullLandingPage',
      'PricingPage',
      'Dashboard',
      'Onboarding',
      'AboutPage',
      'ContactPage',
      'BlogPage',
      'FAQPage',
      'LoginSignup',
    ],
    excludedUses: [
      'ProductPage', // E-commerce specific
    ],
    keySupabaseFeatures: [
      'Row Level Security (RLS) for multi-tenant isolation',
      'Supabase Auth with custom claims',
      'Realtime for collaboration',
      'Edge Functions for webhooks',
      'Database triggers for automation',
    ],
    proSupabaseFeatures: [
      'SAML/SSO integration',
      'Advanced audit logging',
      'Usage metering with pg_cron',
      'API key management',
      'Stripe webhook handlers',
    ],
  },

  'Education': {
    industryId: 'Education',
    industryName: 'Education',
    supabaseScore: 5,
    supabaseReason: 'Excellent fit - Perfect for LMS, course platforms, and student portals with role-based access',
    recommendedUses: [
      'FullLandingPage',
      'PricingPage', // Course pricing
      'Dashboard', // Student/Teacher dashboard
      'Onboarding', // Student registration
      'AboutPage',
      'ContactPage',
      'BlogPage',
      'FAQPage',
      'LoginSignup',
      'PortfolioPage', // Student portfolios
    ],
    excludedUses: [
      'ProductPage',
    ],
    keySupabaseFeatures: [
      'Role-based Auth (student/teacher/parent)',
      'RLS for class-based access',
      'Storage for assignments',
      'Realtime for live classes',
      'Database triggers for grades',
    ],
    proSupabaseFeatures: [
      'Parent-child account linking',
      'Assignment submission workflow',
      'Plagiarism check integration',
      'Progress tracking analytics',
      'Certificate generation',
    ],
  },

  'Fitness': {
    industryId: 'Fitness',
    industryName: 'Fitness & Wellness',
    supabaseScore: 5,
    supabaseReason: 'Excellent fit - Member management, class booking, and workout tracking are perfect for Supabase',
    recommendedUses: [
      'FullLandingPage',
      'PricingPage', // Membership plans
      'Dashboard', // Member dashboard
      'Onboarding', // Fitness assessment
      'AboutPage',
      'ContactPage',
      'BlogPage', // Fitness tips
      'FAQPage',
      'LoginSignup',
    ],
    excludedUses: [
      'ProductPage',
      'PortfolioPage',
    ],
    keySupabaseFeatures: [
      'Auth with membership status',
      'RLS for trainer-member access',
      'Realtime for class capacity',
      'Storage for workout videos',
      'Database triggers for bookings',
    ],
    proSupabaseFeatures: [
      'Wearable device sync',
      'Workout plan generator',
      'Progress photo storage',
      'Class scheduling automation',
      'Membership renewal reminders',
    ],
  },

  'Community': {
    industryId: 'Community',
    industryName: 'Community Platform',
    supabaseScore: 5,
    supabaseReason: 'Excellent fit - Real-time discussions, user-generated content, and member management are perfect for Supabase',
    recommendedUses: [
      'FullLandingPage',
      'PricingPage', // Membership tiers
      'Dashboard', // Member dashboard
      'Onboarding', // Member registration
      'AboutPage',
      'ContactPage',
      'BlogPage', // Community updates
      'FAQPage',
      'LoginSignup',
    ],
    excludedUses: [
      'ProductPage',
      'PortfolioPage',
    ],
    keySupabaseFeatures: [
      'Realtime for live discussions',
      'RLS for private groups',
      'Auth with member roles',
      'Storage for user uploads',
      'Full-text search for content',
    ],
    proSupabaseFeatures: [
      'Real-time notifications',
      'Content moderation system',
      'Member analytics',
      'Event management',
      'Newsletter integration',
    ],
  },

  'Booking': {
    industryId: 'Booking',
    industryName: 'Booking Platform',
    supabaseScore: 5,
    supabaseReason: 'Excellent fit - Calendar management, real-time availability, and automated reminders are perfect for Supabase',
    recommendedUses: [
      'FullLandingPage',
      'PricingPage', // Service pricing
      'Dashboard', // Provider dashboard
      'Onboarding', // Provider setup
      'AboutPage',
      'ContactPage',
      'FAQPage',
      'LoginSignup',
    ],
    excludedUses: [
      'ProductPage',
      'BlogPage',
      'PortfolioPage',
    ],
    keySupabaseFeatures: [
      'Realtime for availability updates',
      'RLS for provider-client isolation',
      'Database functions for scheduling',
      'Edge Functions for reminders',
      'Auth for multi-role access',
    ],
    proSupabaseFeatures: [
      'Calendar sync (Google, Outlook)',
      'SMS/Email reminders',
      'Payment integration',
      'No-show tracking',
      'Multi-location support',
    ],
  },

  'ContentPlatform': {
    industryId: 'ContentPlatform',
    industryName: 'Content Platform',
    supabaseScore: 5,
    supabaseReason: 'Excellent fit - Creator tools, subscription management, and media storage are perfect for Supabase',
    recommendedUses: [
      'FullLandingPage',
      'PricingPage', // Creator plans
      'Dashboard', // Creator dashboard
      'Onboarding', // Creator setup
      'AboutPage',
      'ContactPage',
      'BlogPage', // Platform updates
      'FAQPage',
      'LoginSignup',
      'PortfolioPage', // Creator showcase
    ],
    excludedUses: [
      'ProductPage',
    ],
    keySupabaseFeatures: [
      'Storage for media files',
      'RLS for subscriber-only content',
      'Auth with subscription status',
      'Database functions for analytics',
      'Realtime for engagement',
    ],
    proSupabaseFeatures: [
      'Stripe subscription integration',
      'Content scheduling',
      'Analytics dashboard',
      'Newsletter automation',
      'Multi-tier access control',
    ],
  },
};

// Get recommended uses for an industry
export const getRecommendedUses = (industryId: string): string[] => {
  return industryUseMappings[industryId]?.recommendedUses || [];
};

// Check if a use is valid for an industry
export const isUseValidForIndustry = (industryId: string, useId: string): boolean => {
  const config = industryUseMappings[industryId];
  if (!config) return true; // Allow if no config
  return !config.excludedUses.includes(useId);
};

// Get Supabase score for an industry
export const getSupabaseScore = (industryId: string): number => {
  return industryUseMappings[industryId]?.supabaseScore || 3;
};

// Get industries sorted by Supabase compatibility
export const getIndustriesBySupabaseScore = (): { id: string; score: number; name: string }[] => {
  return Object.entries(industryUseMappings)
    .map(([id, config]) => ({
      id,
      score: config.supabaseScore,
      name: config.industryName,
    }))
    .sort((a, b) => b.score - a.score);
};
