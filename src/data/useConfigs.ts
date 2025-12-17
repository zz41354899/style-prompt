import type { UseModule } from './modules';

// Use module content
export const useModules: Record<string, UseModule> = {
  'FullLandingPage': {
    id: 'FullLandingPage',
    name: 'Full Landing Page',
    type: 'use',
    content: `## Information Architecture — Full Landing Page (Conversion-Focused)

### Goals
- Above-the-fold: instant value comprehension + obvious primary CTA
- Build trust via verifiable mechanisms (integrations, security, reliability, cases)
- Transparent pricing with clear limits and explicit disclaimers

### Required Sections (recommended order)
1. **Top Navigation**
   - Logo + anchor links
   - Primary CTA (e.g. "Start free trial")
   - Secondary CTA (e.g. "Book a demo")

2. **Hero**
   - H1 one-line value proposition (within 48ch)
   - One supporting line (within 72ch)
   - Primary / Secondary CTA
   - Status/Uptime link (placeholder)

3. **Logo / Social Proof Row (placeholders)**
   - Logo wall with neutral placeholder blocks (no real brands)
   - Optional: one-line proof statement (placeholder)

4. **Problem → Solution**
   - Contrast narrative: problem (cost/risk/no traceability) → solution (mechanisms/flow/permissions)

5. **Key Benefits (3–6)**
   - Each card: one benefit line + one mechanism line

6. **Product Demo / Screens (placeholder)**
   - One primary screen (skeleton/placeholder)
   - Three scannable callouts (short, specific)

7. **Integrations (Required, placeholders)**
   - Integrations wall + category labels (placeholder)

8. **Security & Reliability (Required, placeholders)**
   - Encryption / SSO / Audit Logs / DPA (placeholder)
   - Status page link (placeholder)

9. **Testimonials / Case Studies (Required, placeholders)**
   - Quote cards + case cards (no real numbers)

10. **Pricing (Required)**
   - Three tiers + clear disclaimer (placeholder)
   - Comparison table (desktop) / accordion (mobile)

11. **FAQ**
   - 6–8 items covering onboarding, permissions, audits, exports, billing

12. **Final CTA**
   - Reinforce the claim + repeat the primary CTA

13. **Contact (Required)**
   - Email / calendar link (placeholder)
   - Form (anti-spam + accessibility requirements)

14. **Footer**
   - Links (Privacy/Terms/Status placeholders)
   - Disclaimer`,
    architecture: `## Deliverables (Engineering-Ready)

### Sections Map (Full Landing Page)
1. Top Navigation
2. Hero
3. Logo / Social Proof Row
4. Problem → Solution
5. Key Benefits
6. Product Demo / Screens
7. Integrations
8. Security & Reliability
9. Testimonials / Case Studies
10. Pricing
11. FAQ
12. Final CTA
13. Contact
14. Footer

### Responsive (Mobile-first)
- Grid: Desktop 12 / Tablet 8 / Mobile 4
- Hero: Desktop 6/6 split; Mobile stacked vertical
- Pricing comparison: table (desktop); accordion (mobile)
- Touch targets: >= 44px

### Accessibility (WCAG AA)
- All interactive elements must support keyboard navigation and have a high-contrast focus ring
- Support prefers-reduced-motion: remove large motion/entrances; keep essential state changes
- Semantic structure: nav / main / section / footer; single H1

### Contact Section (Required)

**Light Mode**
- Email link (placeholder)
- Calendar booking link (placeholder)

**Form Mode**
- Fields (required): Name, Work Email, Company, Message
- Fields (optional): Role
- States: default, focus, error, success
- Anti-spam: honeypot + rate limit (server/edge)
- Accessibility:
  - Every field must have a label
  - Error messages must map via aria-describedby
  - aria-invalid must be true when invalid
  - Error feedback can use role="alert" (or equivalent)

### Engineering Notes
- All tokens must be CSS variables; Tailwind should only map to variables
- No gradients / glass / fake depth shadows; CTA may use an optional hard shadow
- Any proof module and outcome language must be explicitly labeled as "placeholder"

### Acceptance Checklist
- Above-the-fold: primary CTA visible; value proposition is immediately clear
- Trust modules included: Integrations / Security / Testimonials / Pricing disclaimer
- Responsive, keyboard accessible, AA-level contrast`
  },
  'PricingPage': {
    id: 'PricingPage',
    name: 'Pricing Page',
    type: 'use',
    content: `## Information Architecture — Pricing Page

### Required Sections
1. **Header**
   - Clear page title
   - Brief value statement
   - FAQ or help link

2. **Pricing Tiers**
   - 3-4 clear options
   - Highlighted recommended plan
   - Feature comparison matrix
   - Toggle monthly/annual

3. **Feature Details**
   - Expanded feature descriptions
   - Use cases per tier
   - Limitations and caps

4. **Trust Elements**
   - Money-back guarantee
   - Customer testimonials
   - Enterprise options

5. **FAQ Section**
   - Common pricing questions
   - Billing and payment info
   - Cancellation policy

6. **CTA Section**
   - Plan selection prompts
   - Contact sales for enterprise
   - Free trial option

### Content Strategy
- Transparent pricing structure
- Clear differentiation between tiers
- Value-focused feature descriptions
- Risk-reduction elements (guarantees, trials)

### Conversion Flow
- Easy plan comparison
- Clear value justification
- Minimal friction to upgrade
- Multiple conversion points`,
    architecture: `## Deliverables

### Sections Map (Pricing Page)
1. Header with value statement
2. Pricing toggle (monthly/annual)
3. Pricing tiers (3-4 cards)
4. Feature comparison matrix
5. Enterprise/custom tier
6. Trust elements (guarantees, testimonials)
7. FAQ section
8. Final CTA
9. Footer

### Pricing Card Components
- Plan name and description
- Price with billing period
- Feature list with checkmarks
- CTA button
- Popular/recommended badge (optional)`
  },
  'Dashboard': {
    id: 'Dashboard',
    name: 'Dashboard',
    type: 'use',
    content: `## Information Architecture — Dashboard

### Required Sections
1. **Navigation**
   - Primary navigation menu
   - Quick actions
   - User profile/settings

2. **Overview Widgets**
   - Key metrics at a glance
   - Recent activity feed
   - Quick stats cards

3. **Data Visualization**
   - Charts and graphs
   - Progress indicators
   - Trend analysis

4. **Task Management**
   - To-do lists
   - Pending actions
   - Quick task creation

5. **Notifications**
   - Alert center
   - System updates
   - Message center

### Content Strategy
- Information hierarchy
- Data-driven insights
- Actionable recommendations
- Personalized content

### User Flow
- Quick access to important data
- Efficient task completion
- Clear navigation patterns
- Customizable layout`,
    architecture: `## Deliverables

### Sections Map (Dashboard)
1. Top navigation bar
2. Sidebar navigation
3. Overview metrics cards
4. Primary data visualization
5. Activity feed
6. Quick actions panel
7. Notifications center
8. User profile dropdown

### Widget Components
- Metric cards with trends
- Charts (line, bar, pie)
- Data tables with sorting
- Progress indicators
- Alert banners`
  },
  'Onboarding': {
    id: 'Onboarding',
    name: 'Onboarding',
    type: 'use',
    content: `## Information Architecture — Onboarding

### Required Sections
1. **Welcome Screen**
   - Brand introduction
   - Value proposition
   - Get started CTA

2. **Setup Steps**
   - Progressive disclosure
   - Step indicators
   - Skip option available

3. **Feature Introduction**
   - Interactive tutorials
   - Tooltips and highlights
   - Try it yourself sections

4. **Profile Setup**
   - User preferences
   - Customization options
   - Privacy settings

5. **Success Confirmation**
   - Completion message
   - Next steps guidance
   - Resource links

### Content Strategy
- Progressive complexity
- Contextual help
- Celebrate milestones
- Reduce cognitive load

### User Flow
- Clear progression path
- Minimal friction
- Optional deep dives
- Quick time to value`,
    architecture: `## Deliverables

### Sections Map (Onboarding)
1. Welcome screen
2. Progress indicator
3. Step-by-step setup
4. Feature highlights
5. Profile configuration
6. Success confirmation
7. Next steps guidance

### Onboarding Components
- Step progress bar
- Interactive tutorials
- Tooltip overlays
- Skip/back navigation
- Celebration animations`
  },
  'AboutPage': {
    id: 'AboutPage',
    name: 'About Page',
    type: 'use',
    content: `## Information Architecture — About Page

### Required Sections
1. **Company Story**
   - Mission statement
   - Founding story
   - Company values

2. **Team Section**
   - Leadership profiles
   - Team photos
   - Role descriptions

3. **Milestones**
   - Company timeline
   - Key achievements
   - Growth metrics

4. **Culture**
   - Work environment
   - Benefits and perks
   - Career opportunities

5. **Contact**
   - Office locations
   - Contact information
   - Social media links

### Content Strategy
- Authentic storytelling
- Human-centered approach
- Visual documentation
- Trust building

### User Flow
- Emotional connection
- Brand understanding
- Career exploration
- Easy contact`,
    architecture: `## Deliverables

### Sections Map (About Page)
1. Hero with mission statement
2. Company story/timeline
3. Core values
4. Team section
5. Milestones/achievements
6. Culture showcase
7. Careers CTA
8. Contact section
9. Footer

### Team Components
- Team member cards
- Leadership profiles
- Department filters
- Social links`
  },
  'ContactPage': {
    id: 'ContactPage',
    name: 'Contact Page',
    type: 'use',
    content: `## Information Architecture — Contact Page

### Required Sections
1. **Contact Form**
   - Name and email fields
   - Subject/category selector
   - Message textarea
   - Submit button

2. **Contact Information**
   - Email addresses
   - Phone numbers
   - Physical address

3. **Map Integration**
   - Office location
   - Directions link
   - Multiple locations

4. **Support Options**
   - Live chat
   - FAQ link
   - Help center

5. **Social Links**
   - Social media profiles
   - Community links
   - Newsletter signup

### Content Strategy
- Multiple contact options
- Quick response promise
- Clear expectations
- Accessibility

### User Flow
- Easy form submission
- Alternative contact methods
- Confirmation feedback
- Follow-up expectations`,
    architecture: `## Deliverables

### Sections Map (Contact Page)
1. Hero with contact message
2. Contact form
3. Contact information cards
4. Map integration
5. Support options
6. Social links
7. Footer

### Form Components
- Input fields with validation
- Error/success states
- Submit button with loading
- Confirmation message`
  },
  'BlogPage': {
    id: 'BlogPage',
    name: 'Blog / Articles',
    type: 'use',
    content: `## Information Architecture — Blog / Articles

### Required Sections
1. **Featured Posts**
   - Hero article
   - Editor's picks
   - Trending content

2. **Article Grid**
   - Thumbnail images
   - Title and excerpt
   - Author and date
   - Category tags

3. **Categories**
   - Topic navigation
   - Tag cloud
   - Archive links

4. **Sidebar**
   - Search bar
   - Popular posts
   - Newsletter signup
   - Social follow

5. **Pagination**
   - Load more button
   - Page numbers
   - Infinite scroll option

### Content Strategy
- SEO optimization
- Scannable content
- Visual hierarchy
- Engagement hooks

### User Flow
- Content discovery
- Easy navigation
- Social sharing
- Newsletter conversion`,
    architecture: `## Deliverables

### Sections Map (Blog / Articles)
1. Featured article hero
2. Category navigation
3. Article grid/list
4. Sidebar (search, popular, newsletter)
5. Pagination
6. Footer

### Article Card Components
- Thumbnail image
- Title and excerpt
- Author avatar and name
- Date and read time
- Category tags`
  },
  'ProductPage': {
    id: 'ProductPage',
    name: 'Product Page',
    type: 'use',
    content: `## Information Architecture — Product Page

### Required Sections
1. **Product Hero**
   - Product images/gallery
   - Product title
   - Price and variants
   - Add to cart CTA

2. **Product Details**
   - Description
   - Specifications
   - Size/color options
   - Availability

3. **Reviews**
   - Star ratings
   - Customer reviews
   - Review photos
   - Helpful votes

4. **Related Products**
   - Similar items
   - Frequently bought together
   - Recently viewed

5. **Trust Elements**
   - Shipping info
   - Return policy
   - Secure payment
   - Guarantees

### Content Strategy
- Visual-first approach
- Benefit-focused copy
- Social proof
- Urgency elements

### User Flow
- Quick add to cart
- Easy variant selection
- Review exploration
- Cross-sell discovery`,
    architecture: `## Deliverables

### Sections Map (Product Page)
1. Product image gallery
2. Product info (title, price, variants)
3. Add to cart section
4. Product description tabs
5. Customer reviews
6. Related products
7. Trust badges
8. Footer

### Product Components
- Image carousel/zoom
- Variant selectors
- Quantity picker
- Add to cart button
- Wishlist button`
  },
  'PortfolioPage': {
    id: 'PortfolioPage',
    name: 'Portfolio / Gallery',
    type: 'use',
    content: `## Information Architecture — Portfolio / Gallery

### Required Sections
1. **Project Grid**
   - Thumbnail images
   - Project titles
   - Category filters
   - Hover effects

2. **Project Detail**
   - Full project images
   - Project description
   - Client information
   - Results/metrics

3. **Filters**
   - Category tabs
   - Industry filters
   - Service type
   - Year/date

4. **Case Studies**
   - Problem statement
   - Solution approach
   - Results achieved
   - Client testimonial

5. **CTA Section**
   - Start a project
   - Contact form
   - Consultation booking

### Content Strategy
- Visual showcase
- Results-focused
- Client success stories
- Easy navigation

### User Flow
- Browse and filter
- Deep dive into projects
- Understand capabilities
- Initiate contact`,
    architecture: `## Deliverables

### Sections Map (Portfolio / Gallery)
1. Hero with intro
2. Filter navigation
3. Project grid
4. Project detail modal/page
5. Case study sections
6. CTA section
7. Footer

### Project Card Components
- Thumbnail with hover effect
- Project title
- Category badge
- View project link`
  },
  'FAQPage': {
    id: 'FAQPage',
    name: 'FAQ Page',
    type: 'use',
    content: `## Information Architecture — FAQ Page

### Required Sections
1. **Search Bar**
   - Prominent search
   - Auto-suggestions
   - Popular searches

2. **Category Navigation**
   - Topic categories
   - Quick links
   - Breadcrumbs

3. **Question List**
   - Accordion format
   - Clear questions
   - Concise answers
   - Related links

4. **Contact Support**
   - Still need help?
   - Contact options
   - Live chat
   - Ticket submission

5. **Helpful Resources**
   - Documentation links
   - Video tutorials
   - Community forum

### Content Strategy
- Clear categorization
- Scannable format
- Searchable content
- Helpful tone

### User Flow
- Quick answer finding
- Self-service resolution
- Easy escalation
- Resource discovery`,
    architecture: `## Deliverables

### Sections Map (FAQ Page)
1. Search hero
2. Category tabs
3. FAQ accordion list
4. Contact support section
5. Helpful resources
6. Footer

### FAQ Components
- Search input with suggestions
- Accordion items
- Category filters
- Contact CTA card`
  },
  'LoginSignup': {
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
  },
};
