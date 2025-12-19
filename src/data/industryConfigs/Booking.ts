import type { IndustryModule } from './types';

export const Booking_Config: IndustryModule = {
  id: 'Booking',
  name: 'Booking',
  type: 'industry',
  content: `## Industry Considerations — Booking Platform

### Target Audience
- Service providers: consultants, therapists, coaches, salons
- Businesses needing appointment scheduling
- Customers seeking easy booking experiences
- Teams managing shared calendars and resources

### Key Decision Drivers (the page must answer these)
- **Availability**: real-time calendar sync, conflict prevention
- **Automation**: reminders, confirmations, follow-ups
- **Flexibility**: rescheduling, cancellation policies, buffer times
- **Integration**: calendar sync (Google, Outlook), payment processing
- **Multi-location**: support for multiple locations or providers

### Conversion Requirements (must appear on the page)
- Above-the-fold Primary CTA (e.g. "Start Booking Free") and Secondary CTA (e.g. "See How It Works")
- Feature showcase: calendar view, booking widget, reminders
- Trust modules: uptime reliability, data security (placeholders)
- Use cases: different industries using booking

### Narrative Rules (no fake proof)
- Do not show real booking volumes or customer counts; use **placeholders**
- Replace hype with verifiable features: real-time sync, automated reminders
- Focus on time-saving and no-show reduction`,
  considerations: `## Industry Constraints & Trust Modules (Booking)

### Required trust elements (placeholders only)
- **Calendar features**: availability management, buffer times, recurring slots
- **Notification system**: email/SMS reminders, confirmations
- **Payment integration**: deposits, full payments, refunds (placeholders)
- **Analytics**: booking trends, no-show rates (placeholders)

### Tone
- Efficient, professional, time-conscious
- Emphasize simplicity and reliability

### Copy guardrails (hard rules)
- No real booking statistics or conversion rates
- Every proof element must be labeled as "placeholder"
- Focus on features that reduce no-shows and save time`
};
