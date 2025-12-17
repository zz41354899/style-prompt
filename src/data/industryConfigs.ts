import type { IndustryModule } from './modules';

// Industry module content
export const industryModules: Record<string, IndustryModule> = {
  'SaaS': {
    id: 'SaaS',
    name: 'SaaS',
    type: 'industry',
    content: `## Industry Considerations — SaaS (B2B)

### Target Audience
- B2B decision makers: CTO / VP / Director (budget, risk, adoption cost)
- Day-to-day users: Ops / PM / Engineering / Security (workflow, traceability, permissions, auditability)
- Procurement/Legal: contracts, DPA, data processing responsibility (placeholder statements only)

### Key Decision Drivers (the page must answer these)
- **Time-to-value**: onboarding path and setup steps (describe process, avoid numeric claims)
- **Risk controls**: permissions, audit logs, SSO, encryption, export (placeholder statements only)
- **Integrations**: works with the existing toolchain (present as a logo wall with placeholders)
- **Scalability**: from a small team to multi-department adoption (explain with tiers and governance model)
- **Transparent pricing**: clear limits and disclaimers, no hidden constraints

### Conversion Requirements (must appear on the page)
- Above-the-fold Primary CTA (e.g. "Start free trial") and Secondary CTA (e.g. "Book a demo")
- Clear pricing tiers with plan differences (add a comparison table if needed)
- Multiple CTA touchpoints (Hero / Demo / Pricing / Final CTA)
- Trust modules woven throughout (Integrations / Security / Testimonials / Case Studies)

### Narrative Rules (no fake proof)
- Do not show real customer logos, certifications, or performance metrics; use **placeholders** (e.g. "Integration logo (placeholder)")
- Do not claim specific uptime numbers; use a "Status/Uptime link (placeholder)"
- Replace hype with verifiable mechanisms: encryption, permission model, audit logs, export, SSO — expressed as scannable specs`,
    considerations: `## Industry Constraints & Trust Modules (SaaS)

### Required trust elements (placeholders only)
- **Integrations wall**: a grid of logo placeholders (avoid real brands)
- **Security statements**:
  - Encryption (placeholder)
  - SSO (placeholder)
  - Audit Logs (placeholder)
  - DPA (placeholder)
- **Uptime / Status link**: status page link (placeholder)
- **Testimonials + Case studies**: quote cards + case cards (names/company/outcomes are placeholders)
- **Transparent pricing**: clear plan limits + explicit disclaimers (placeholders)

### Tone
- Confident, precise, non-hype
- Explain "how it works" and "how risk is controlled" before benefits

### Copy guardrails (hard rules)
- No real metrics, customers, or certifications
- Every proof element must be labeled as "placeholder" (or equivalent)
- Avoid long jargon blocks; prefer short sentences and scannable lists`
  },
  'E-commerce': {
    id: 'E-commerce',
    name: 'E-commerce',
    type: 'industry',
    content: `## Industry Considerations — E-commerce

### Target Audience
- Direct consumers (B2C)
- Price-sensitive shoppers
- Product researchers
- Impulse buyers

### Key Messaging Points
- Product benefits and features
- Competitive pricing
- Shipping and returns
- Quality assurance
- Customer reviews

### Conversion Elements
- Add to Cart CTAs
- Product galleries
- Customer reviews
- Shipping information
- Trust badges
- Wishlist functionality

### Technical Considerations
- Product filtering and search
- Mobile-first design
- Checkout optimization
- Payment options
- Inventory display`,
    considerations: `## Industry Constraints & Trust Modules (E-commerce)

Required trust elements (placeholders only):
- Payment security badges (SSL, PCI-DSS compliant)
- Shipping and return policy highlights
- Customer reviews and ratings
- Product authenticity guarantees
- Secure checkout indicators

Tone: friendly, trustworthy, action-oriented.`
  },
  'Healthcare': {
    id: 'Healthcare',
    name: 'Healthcare',
    type: 'industry',
    content: `## Industry Considerations — Healthcare

### Target Audience
- Patients and caregivers
- Healthcare professionals
- Medical institutions
- Insurance providers

### Key Messaging Points
- Patient safety and care quality
- Compliance and accreditation
- Advanced medical technology
- Expert medical staff
- Patient outcomes

### Conversion Elements
- Appointment scheduling
- Patient portal access
- Insurance verification
- Doctor directories
- Telehealth options

### Technical Considerations
- HIPAA compliance
- Accessibility (WCAG 2.1 AA+)
- Secure data handling
- Emergency information display
- Mobile health integration`,
    considerations: `## Industry Constraints & Trust Modules (Healthcare)

Required trust elements (placeholders only):
- HIPAA compliance badges
- Medical certifications and accreditations
- Doctor credentials and qualifications
- Patient privacy statements
- Emergency contact information

Tone: caring, professional, reassuring.`
  },
  'Finance': {
    id: 'Finance',
    name: 'Finance',
    type: 'industry',
    content: `## Industry Considerations — Finance

### Target Audience
- Individual investors
- Business clients
- Financial advisors
- Institutional investors

### Key Messaging Points
- Security and trust
- Financial performance
- Regulatory compliance
- Expert guidance
- Digital innovation

### Conversion Elements
- Account opening
- Portfolio management
- Financial calculators
- Market insights
- Customer support

### Technical Considerations
- Banking-level security
- Real-time data updates
- Compliance reporting
- Multi-factor authentication
- Audit trails`,
    considerations: `## Industry Constraints & Trust Modules (Finance)

Required trust elements (placeholders only):
- Banking-level security certifications
- Regulatory compliance statements (SEC, FINRA)
- Insurance and protection guarantees
- Audit and transparency reports
- Customer support availability

Tone: stable, trustworthy, professional.`
  },
  'Education': {
    id: 'Education',
    name: 'Education',
    type: 'industry',
    content: `## Industry Considerations — Education

### Target Audience
- Students of all ages
- Parents and guardians
- Educators and administrators
- Institutional partners

### Key Messaging Points
- Learning outcomes
- Expert instructors
- Flexible scheduling
- Affordable pricing
- Career advancement

### Conversion Elements
- Course enrollment
- Free trial classes
- Student testimonials
- Certification programs
- Learning paths

### Technical Considerations
- Learning management system
- Video streaming quality
- Progress tracking
- Mobile learning
- Accessibility standards`,
    considerations: `## Industry Constraints & Trust Modules (Education)

Required trust elements (placeholders only):
- Accreditation and certification badges
- Instructor credentials and expertise
- Student success stories and outcomes
- Course completion rates
- Money-back guarantees

Tone: encouraging, supportive, credible.`
  },
  'RealEstate': {
    id: 'RealEstate',
    name: 'Real Estate',
    type: 'industry',
    content: `## Industry Considerations — Real Estate

### Target Audience
- Home buyers and sellers
- Property investors
- Renters
- Real estate agents

### Key Messaging Points
- Property value and location
- Market expertise
- Trusted transactions
- Local knowledge
- Investment potential

### Conversion Elements
- Property search and filters
- Virtual tours
- Agent contact forms
- Mortgage calculators
- Saved listings

### Technical Considerations
- Map integration
- High-quality imagery
- MLS data integration
- Mobile-responsive listings
- Lead capture forms`,
    considerations: `## Industry Constraints & Trust Modules (Real Estate)

Required trust elements (placeholders only):
- Agent licenses and certifications
- Property verification badges
- Market data accuracy statements
- Client testimonials and reviews
- Professional association memberships

Tone: knowledgeable, trustworthy, local.`
  },
  'Restaurant': {
    id: 'Restaurant',
    name: 'Restaurant & Food',
    type: 'industry',
    content: `## Industry Considerations — Restaurant & Food

### Target Audience
- Local diners
- Food enthusiasts
- Event planners
- Delivery customers

### Key Messaging Points
- Menu highlights
- Ambiance and experience
- Fresh ingredients
- Chef expertise
- Customer reviews

### Conversion Elements
- Online reservations
- Menu display
- Order online
- Location and hours
- Special offers

### Technical Considerations
- Mobile ordering
- Delivery integration
- Menu management
- Photo galleries
- Review integration`,
    considerations: `## Industry Constraints & Trust Modules (Restaurant & Food)

Required trust elements (placeholders only):
- Health and safety certifications
- Customer reviews and ratings
- Chef credentials and awards
- Sourcing and ingredient quality
- Delivery partner logos

Tone: appetizing, welcoming, authentic.`
  },
  'Travel': {
    id: 'Travel',
    name: 'Travel & Hospitality',
    type: 'industry',
    content: `## Industry Considerations — Travel & Hospitality

### Target Audience
- Leisure travelers
- Business travelers
- Adventure seekers
- Luxury travelers

### Key Messaging Points
- Unique experiences
- Destination highlights
- Comfort and amenities
- Value for money
- Safety and reliability

### Conversion Elements
- Booking engine
- Destination guides
- Photo galleries
- Customer reviews
- Package deals

### Technical Considerations
- Availability calendars
- Multi-currency support
- Mobile booking
- Map integration
- Review aggregation`,
    considerations: `## Industry Constraints & Trust Modules (Travel & Hospitality)

Required trust elements (placeholders only):
- Travel insurance options
- Verified reviews and ratings
- Secure booking guarantees
- Cancellation policy clarity
- Partner and certification logos

Tone: inspiring, adventurous, trustworthy.`
  },
  'Fitness': {
    id: 'Fitness',
    name: 'Fitness & Wellness',
    type: 'industry',
    content: `## Industry Considerations — Fitness & Wellness

### Target Audience
- Fitness beginners
- Athletes
- Health-conscious individuals
- Wellness seekers

### Key Messaging Points
- Transformation stories
- Expert trainers
- Flexible programs
- Community support
- Results-driven approach

### Conversion Elements
- Class schedules
- Membership signup
- Free trial offers
- Trainer profiles
- Success stories

### Technical Considerations
- Class booking system
- Progress tracking
- Video streaming
- Mobile app integration
- Wearable sync`,
    considerations: `## Industry Constraints & Trust Modules (Fitness & Wellness)

Required trust elements (placeholders only):
- Trainer certifications and credentials
- Member transformation stories
- Safety and hygiene standards
- Satisfaction guarantees
- Professional association memberships

Tone: motivating, energetic, supportive.`
  },
  'Legal': {
    id: 'Legal',
    name: 'Legal Services',
    type: 'industry',
    content: `## Industry Considerations — Legal Services

### Target Audience
- Individuals seeking legal help
- Businesses needing counsel
- Corporate clients
- Referral sources

### Key Messaging Points
- Expertise and experience
- Case success rates
- Client confidentiality
- Personalized service
- Industry recognition

### Conversion Elements
- Free consultation
- Practice area pages
- Attorney profiles
- Case results
- Client testimonials

### Technical Considerations
- Secure contact forms
- Appointment scheduling
- Document portals
- Live chat support
- Accessibility compliance`,
    considerations: `## Industry Constraints & Trust Modules (Legal Services)

Required trust elements (placeholders only):
- Bar association memberships
- Case success rates (placeholders)
- Client confidentiality statements
- Professional awards and recognition
- Industry expertise indicators

Tone: authoritative, trustworthy, approachable.`
  },
  'Agency': {
    id: 'Agency',
    name: 'Creative Agency',
    type: 'industry',
    content: `## Industry Considerations — Creative Agency

### Target Audience
- Marketing directors
- Brand managers
- Startup founders
- Enterprise clients

### Key Messaging Points
- Creative excellence
- Strategic thinking
- Award-winning work
- Client partnerships
- Industry expertise

### Conversion Elements
- Portfolio showcase
- Case studies
- Team profiles
- Contact forms
- RFP submission

### Technical Considerations
- High-quality media
- Smooth animations
- Fast loading
- Mobile optimization
- CMS integration`,
    considerations: `## Industry Constraints & Trust Modules (Creative Agency)

Required trust elements (placeholders only):
- Client logo wall (placeholders)
- Award badges and recognition
- Case study results and metrics
- Team expertise and credentials
- Industry partnership logos

Tone: creative, confident, strategic.`
  },
  'Nonprofit': {
    id: 'Nonprofit',
    name: 'Nonprofit & Charity',
    type: 'industry',
    content: `## Industry Considerations — Nonprofit & Charity

### Target Audience
- Individual donors
- Corporate sponsors
- Volunteers
- Beneficiaries

### Key Messaging Points
- Mission and impact
- Transparency
- Stories of change
- Volunteer opportunities
- Donation efficiency

### Conversion Elements
- Donate buttons
- Volunteer signup
- Impact reports
- Newsletter subscription
- Event registration

### Technical Considerations
- Secure donation processing
- Recurring donation options
- Social sharing
- Accessibility
- Mobile giving`,
    considerations: `## Industry Constraints & Trust Modules (Nonprofit & Charity)

Required trust elements (placeholders only):
- Financial transparency reports
- Charity rating badges (GuideStar, Charity Navigator)
- Impact metrics and stories
- Board and leadership profiles
- Partner organization logos

Tone: inspiring, transparent, mission-driven.`
  },
};
