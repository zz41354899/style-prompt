// Use-specific Backend Architecture Configurations
// This file contains recommended backend features for each use case/page type

export interface UseBackendConfig {
  use: string;
  // Required database tables
  requiredTables: string[];
  // API endpoints needed
  apiEndpoints: string[];
  // Supabase features
  supabaseFeatures: string[];
  // Edge Functions
  edgeFunctions: string[];
  // Storage needs
  storageNeeds: string[];
  // Realtime features
  realtimeFeatures: string[];
  // Pro-only enhancements
  proEnhancements: string[];
}

export const useBackendConfigs: Record<string, UseBackendConfig> = {
  'FullLandingPage': {
    use: 'Full Landing Page',
    requiredTables: [
      'leads (contact form submissions)',
      'newsletter_subscribers (email signups)',
      'testimonials (customer reviews)',
      'faqs (frequently asked questions)',
    ],
    apiEndpoints: [
      'POST /leads - Submit contact form',
      'POST /newsletter - Subscribe to newsletter',
      'GET /testimonials - Fetch testimonials',
      'GET /faqs - Fetch FAQs',
    ],
    supabaseFeatures: [
      'Anonymous submissions (no auth required)',
      'RLS for admin-only testimonial management',
      'Database triggers for lead notifications',
    ],
    edgeFunctions: [
      'Lead notification email',
      'Newsletter welcome email',
      'CRM integration webhook',
    ],
    storageNeeds: [
      'Hero images',
      'Feature screenshots',
      'Team photos',
      'Logo assets',
    ],
    realtimeFeatures: [
      'Live visitor count (optional)',
      'Social proof notifications',
    ],
    proEnhancements: [
      'A/B testing for hero sections',
      'Personalized content based on referrer',
      'Advanced lead scoring',
      'Multi-step form with progress saving',
      'Chatbot integration',
      'Exit-intent popup triggers',
    ],
  },

  'PricingPage': {
    use: 'Pricing Page',
    requiredTables: [
      'plans (pricing tiers)',
      'plan_features (feature list per plan)',
      'subscriptions (user subscriptions)',
      'coupons (discount codes)',
    ],
    apiEndpoints: [
      'GET /plans - Fetch pricing plans',
      'POST /checkout - Create checkout session',
      'POST /coupons/validate - Validate coupon',
      'GET /subscription - Get current subscription',
    ],
    supabaseFeatures: [
      'RLS for subscription data',
      'Database functions for plan comparison',
      'Triggers for subscription status updates',
    ],
    edgeFunctions: [
      'Stripe checkout session creation',
      'Coupon validation',
      'Subscription webhook handler',
      'Usage-based billing calculation',
    ],
    storageNeeds: [
      'Plan comparison charts',
      'Feature icons',
    ],
    realtimeFeatures: [
      'Live plan availability',
      'Flash sale countdown',
    ],
    proEnhancements: [
      'Dynamic pricing based on usage',
      'Custom enterprise quote generator',
      'Plan comparison calculator',
      'ROI calculator widget',
      'Annual/monthly toggle with savings display',
      'Localized pricing by region',
    ],
  },

  'Dashboard': {
    use: 'Dashboard',
    requiredTables: [
      'user_settings (preferences)',
      'notifications (user alerts)',
      'activity_logs (recent actions)',
      'widgets (dashboard customization)',
    ],
    apiEndpoints: [
      'GET /dashboard/stats - Fetch key metrics',
      'GET /dashboard/activity - Recent activity',
      'GET /notifications - User notifications',
      'PATCH /settings - Update preferences',
    ],
    supabaseFeatures: [
      'RLS for user-specific data',
      'Realtime subscriptions for live updates',
      'Database views for aggregated stats',
      'Row-level subscriptions',
    ],
    edgeFunctions: [
      'Stats aggregation',
      'Report generation',
      'Data export (CSV/PDF)',
      'Scheduled digest emails',
    ],
    storageNeeds: [
      'User avatars',
      'Exported reports',
      'Custom widget assets',
    ],
    realtimeFeatures: [
      'Live metric updates',
      'Real-time notifications',
      'Activity feed streaming',
      'Collaborative presence',
    ],
    proEnhancements: [
      'Customizable widget layout',
      'Advanced data visualization',
      'Custom date range analytics',
      'Scheduled report delivery',
      'Team activity overview',
      'Goal tracking with alerts',
      'API usage monitoring',
    ],
  },

  'Onboarding': {
    use: 'Onboarding',
    requiredTables: [
      'onboarding_progress (step completion)',
      'user_preferences (initial settings)',
      'onboarding_feedback (user input)',
    ],
    apiEndpoints: [
      'GET /onboarding/progress - Get current step',
      'POST /onboarding/step - Complete step',
      'POST /onboarding/skip - Skip onboarding',
      'POST /onboarding/preferences - Save preferences',
    ],
    supabaseFeatures: [
      'RLS for user progress',
      'Database triggers for completion tracking',
      'Auth hooks for new user detection',
    ],
    edgeFunctions: [
      'Welcome email sequence',
      'Onboarding completion webhook',
      'Sample data generation',
    ],
    storageNeeds: [
      'Tutorial videos',
      'Step illustrations',
      'Sample templates',
    ],
    realtimeFeatures: [
      'Progress sync across devices',
    ],
    proEnhancements: [
      'Personalized onboarding paths',
      'Interactive product tours',
      'Video tutorials with progress tracking',
      'Sample data import',
      'Team onboarding coordination',
      'Onboarding analytics (drop-off points)',
    ],
  },

  'AboutPage': {
    use: 'About Page',
    requiredTables: [
      'team_members (staff profiles)',
      'company_milestones (timeline)',
      'press_mentions (media coverage)',
    ],
    apiEndpoints: [
      'GET /team - Fetch team members',
      'GET /milestones - Company timeline',
      'GET /press - Press mentions',
    ],
    supabaseFeatures: [
      'Public read access',
      'Admin-only write access',
    ],
    edgeFunctions: [
      'Team photo optimization',
    ],
    storageNeeds: [
      'Team photos',
      'Office photos',
      'Press logos',
      'Company timeline assets',
    ],
    realtimeFeatures: [],
    proEnhancements: [
      'Interactive company timeline',
      'Team member spotlight rotation',
      'Career page integration',
      'Company culture video gallery',
      'Investor relations section',
    ],
  },

  'ContactPage': {
    use: 'Contact Page',
    requiredTables: [
      'contact_submissions (form entries)',
      'support_tickets (if support included)',
      'office_locations (addresses)',
    ],
    apiEndpoints: [
      'POST /contact - Submit contact form',
      'GET /locations - Office locations',
      'POST /support/ticket - Create support ticket',
    ],
    supabaseFeatures: [
      'Anonymous form submissions',
      'RLS for ticket access',
      'Triggers for notification dispatch',
    ],
    edgeFunctions: [
      'Contact form notification',
      'Auto-responder email',
      'CRM integration',
      'Spam detection',
    ],
    storageNeeds: [
      'Office location maps',
      'Contact form attachments',
    ],
    realtimeFeatures: [
      'Live chat widget',
      'Support ticket updates',
    ],
    proEnhancements: [
      'Smart form routing by topic',
      'Live chat integration',
      'Appointment scheduling',
      'Call-back request system',
      'Multi-language support',
      'SLA tracking for responses',
    ],
  },

  'BlogPage': {
    use: 'Blog / Articles',
    requiredTables: [
      'posts (blog articles)',
      'categories (post categories)',
      'tags (post tags)',
      'comments (reader comments)',
      'authors (writer profiles)',
    ],
    apiEndpoints: [
      'GET /posts - List posts (paginated)',
      'GET /posts/:slug - Single post',
      'GET /categories - List categories',
      'POST /comments - Add comment',
      'GET /posts/:id/comments - Post comments',
    ],
    supabaseFeatures: [
      'Full-text search on posts',
      'RLS for draft/published status',
      'Database views for popular posts',
    ],
    edgeFunctions: [
      'RSS feed generation',
      'Social sharing image generation',
      'Comment moderation',
      'Newsletter digest compilation',
    ],
    storageNeeds: [
      'Post featured images',
      'In-post media',
      'Author avatars',
    ],
    realtimeFeatures: [
      'Live comment updates',
      'View count tracking',
    ],
    proEnhancements: [
      'Advanced SEO tools',
      'Content scheduling',
      'Multi-author workflow',
      'Comment moderation queue',
      'Reading time estimates',
      'Related posts AI suggestions',
      'Newsletter integration',
      'Content analytics (read depth)',
    ],
  },

  'ProductPage': {
    use: 'Product Page',
    requiredTables: [
      'products (product catalog)',
      'product_variants (sizes, colors)',
      'product_images (gallery)',
      'reviews (customer reviews)',
      'inventory (stock levels)',
      'wishlists (saved items)',
    ],
    apiEndpoints: [
      'GET /products/:id - Product details',
      'GET /products/:id/variants - Product variants',
      'GET /products/:id/reviews - Product reviews',
      'POST /cart/add - Add to cart',
      'POST /wishlist/add - Add to wishlist',
    ],
    supabaseFeatures: [
      'RLS for inventory management',
      'Database functions for price calculations',
      'Triggers for low stock alerts',
    ],
    edgeFunctions: [
      'Inventory sync',
      'Review moderation',
      'Price comparison',
      'Recommendation engine',
    ],
    storageNeeds: [
      'Product images (multiple)',
      'Product videos',
      '360° view assets',
      'Size guides',
    ],
    realtimeFeatures: [
      'Live inventory updates',
      'Price drop alerts',
      '"X people viewing" indicator',
    ],
    proEnhancements: [
      'AI-powered recommendations',
      'Dynamic pricing',
      'Inventory forecasting',
      'Review sentiment analysis',
      'Product comparison tool',
      'AR/3D product viewer',
      'Personalized upsells',
    ],
  },

  'PortfolioPage': {
    use: 'Portfolio / Gallery',
    requiredTables: [
      'projects (portfolio items)',
      'project_categories (organization)',
      'project_images (galleries)',
      'testimonials (client feedback)',
    ],
    apiEndpoints: [
      'GET /projects - List projects',
      'GET /projects/:slug - Project details',
      'GET /categories - Project categories',
    ],
    supabaseFeatures: [
      'Public read access',
      'Admin-only management',
      'Full-text search',
    ],
    edgeFunctions: [
      'Image optimization',
      'Thumbnail generation',
      'PDF portfolio export',
    ],
    storageNeeds: [
      'Project images (high-res)',
      'Project videos',
      'Case study PDFs',
      'Client logos',
    ],
    realtimeFeatures: [],
    proEnhancements: [
      'Password-protected projects',
      'Client-specific portfolios',
      'Video case studies',
      'Interactive before/after sliders',
      'Downloadable case study PDFs',
      'Project inquiry forms',
    ],
  },

  'FAQPage': {
    use: 'FAQ Page',
    requiredTables: [
      'faq_categories (organization)',
      'faqs (questions and answers)',
      'faq_feedback (helpfulness votes)',
    ],
    apiEndpoints: [
      'GET /faqs - List FAQs',
      'GET /faqs/search - Search FAQs',
      'POST /faqs/:id/feedback - Submit feedback',
    ],
    supabaseFeatures: [
      'Full-text search',
      'Public read access',
      'Admin management',
    ],
    edgeFunctions: [
      'Search indexing',
      'Feedback aggregation',
    ],
    storageNeeds: [
      'FAQ illustrations',
      'Tutorial screenshots',
    ],
    realtimeFeatures: [],
    proEnhancements: [
      'AI-powered search suggestions',
      'Related questions',
      'Video answers',
      'Chatbot integration',
      'FAQ analytics (most viewed)',
      'User-submitted questions',
    ],
  },

  'LoginSignup': {
    use: 'Login / Signup',
    requiredTables: [
      'profiles (user profiles)',
      'sessions (active sessions)',
      'password_reset_tokens (reset flow)',
      'email_verifications (verification status)',
    ],
    apiEndpoints: [
      'POST /auth/signup - Create account',
      'POST /auth/login - Authenticate',
      'POST /auth/logout - End session',
      'POST /auth/forgot-password - Request reset',
      'POST /auth/reset-password - Set new password',
      'POST /auth/verify-email - Verify email',
    ],
    supabaseFeatures: [
      'Supabase Auth (built-in)',
      'OAuth providers',
      'Email templates',
      'MFA support',
    ],
    edgeFunctions: [
      'Custom email templates',
      'Welcome email sequence',
      'Login notification',
      'Suspicious activity detection',
    ],
    storageNeeds: [
      'User avatars',
    ],
    realtimeFeatures: [
      'Session management',
    ],
    proEnhancements: [
      'SSO/SAML integration',
      'Passwordless login (magic links)',
      'Biometric authentication',
      'Device trust management',
      'Login analytics',
      'Brute force protection',
      'Custom OAuth providers',
    ],
  },
};

// Get backend config for a use case
export const getUseBackendConfig = (useId: string): UseBackendConfig | null => {
  return useBackendConfigs[useId] || null;
};
