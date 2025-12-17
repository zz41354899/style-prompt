import { useState } from 'react';
import { ArrowUpRight, Menu, X, Check } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S02MinimalistMonochrome = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const responsive = useResponsive(deviceMode);

  // Design tokens from S02 specification
  const colors = {
    bg: {
      default: '#FFFFFF',
      inverse: '#000000',
    },
    text: {
      primary: '#0A0A0A',
      secondary: '#4B4B4B',
    },
    border: '#E0E0E0',
    accent: '#1A1A1A',
    success: '#1F7A3F',
    danger: '#B42318',
  };

  const typography = {
    primaryFont: '"Inter", system-ui, sans-serif',
    secondaryFont: '"Source Serif 4", serif',
  };

  const spacing = responsive.spacing;

  const radius = {
    none: '0',
    sm: '4px',
  };

  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor: colors.bg.default,
        color: colors.text.primary,
        fontFamily: typography.primaryFont,
        fontSize: responsive.fontSize.base,
        lineHeight: 1.6,
      }}
    >
      {/* Top Navigation */}
      <header style={{ 
        padding: `${spacing.lg} 0`,
        borderBottom: `1px solid ${colors.border}`,
      }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div 
              className="flex items-center justify-center"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: colors.text.primary,
                borderRadius: radius.none,
              }}
            />
            <span 
              style={{
                fontSize: responsive.fontSize.xs,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontFamily: typography.primaryFont,
                fontWeight: '400',
              }}
            >
              Studio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-10`}>
            {['Work', 'About', 'Contact'].map((item) => (
              <span 
                key={item}
                className="cursor-pointer"
                style={{
                  fontSize: responsive.fontSize.xs,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontFamily: typography.primaryFont,
                  fontWeight: '400',
                  color: colors.text.secondary,
                  transition: 'color 100ms ease-out',
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = colors.text.primary;
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = colors.text.secondary;
                }}
              >
                {item}
              </span>
            ))}
            <button
              style={{
                backgroundColor: colors.accent,
                color: colors.bg.default,
                border: 'none',
                borderRadius: radius.none,
                padding: `${spacing.sm} ${spacing.md}`,
                fontSize: responsive.fontSize.xs,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: typography.primaryFont,
                fontWeight: '400',
                cursor: 'pointer',
                transition: 'all 100ms ease-out',
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.backgroundColor = colors.text.primary;
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.backgroundColor = colors.accent;
              }}
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          {responsive.nav.showMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                padding: spacing.sm,
                cursor: 'pointer',
                color: colors.text.secondary,
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div 
            style={{
              borderTop: `1px solid ${colors.border}`,
              borderBottom: `1px solid ${colors.border}`,
              padding: spacing.md,
              backgroundColor: colors.bg.default,
            }}
          >
            <div className="max-w-6xl mx-auto px-6 space-y-4">
              {['Work', 'About', 'Contact'].map((item) => (
                <span 
                  key={item}
                  className="block cursor-pointer"
                  style={{
                    fontSize: responsive.fontSize.xs,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontFamily: typography.primaryFont,
                    fontWeight: '400',
                    color: colors.text.secondary,
                    padding: `${spacing.sm} 0`,
                  }}
                >
                  {item}
                </span>
              ))}
              <button
                style={{
                  backgroundColor: colors.accent,
                  color: colors.bg.default,
                  border: 'none',
                  borderRadius: radius.none,
                  padding: `${spacing.sm} ${spacing.md}`,
                  fontSize: responsive.fontSize.xs,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontFamily: typography.primaryFont,
                  fontWeight: '400',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: spacing.sm,
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={{ padding: `${spacing.section} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          <div 
            className="grid gap-8 items-center"
            style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : deviceMode === 'tablet' ? '1fr 1fr' : '2fr 1fr' }}
          >
            {/* Left Column */}
            <div className="md:col-span-8">
              <h1 
                className="text-5xl md:text-7xl lg:text-[88px]"
                style={{
                  fontWeight: '300',
                  lineHeight: 0.85,
                  letterSpacing: '-0.03em',
                  marginBottom: spacing.lg,
                  fontFamily: typography.primaryFont,
                  color: colors.text.primary,
                  maxWidth: '64ch',
                }}
              >
                Minimalist
                <br />
                <span style={{ color: colors.text.secondary }}>
                  Black & White Aesthetics
                </span>
              </h1>

              <p 
                className="text-base md:text-lg"
                style={{
                  color: colors.text.secondary,
                  lineHeight: 1.6,
                  marginBottom: spacing.xl,
                  fontFamily: typography.primaryFont,
                  maxWidth: '64ch',
                }}
              >
                Clarity through restraint. Editorial design principles applied to digital products, where every element serves a purpose and nothing is left to chance.
              </p>

              <div className="flex gap-4" style={{ flexDirection: deviceMode === 'mobile' ? 'column' : 'row' }}>
                <button
                  style={{
                    backgroundColor: colors.accent,
                    color: colors.bg.default,
                    border: 'none',
                    borderRadius: radius.none,
                    padding: `${spacing.md} ${spacing.lg}`,
                    fontSize: responsive.fontSize.xs,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontFamily: typography.primaryFont,
                    fontWeight: '400',
                    cursor: 'pointer',
                    transition: 'all 100ms ease-out',
                    display: 'flex',
                    alignItems: 'center',
                    gap: spacing.sm,
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = colors.text.primary;
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = colors.accent;
                  }}
                >
                  Start Free Trial
                  <ArrowUpRight size={16} />
                </button>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: colors.text.primary,
                    border: `1px solid ${colors.border}`,
                    borderRadius: radius.none,
                    padding: `${spacing.md} ${spacing.lg}`,
                    fontSize: responsive.fontSize.xs,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontFamily: typography.primaryFont,
                    fontWeight: '400',
                    cursor: 'pointer',
                    transition: 'all 100ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = colors.bg.default;
                    target.style.borderColor = colors.text.secondary;
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.borderColor = colors.border;
                  }}
                >
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="md:col-span-4">
              <div 
                style={{
                  border: `1px solid ${colors.border}`,
                  borderRadius: radius.none,
                  padding: spacing.xl,
                  height: '300px',
                  minHeight: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div 
                    className="text-6xl md:text-8xl lg:text-[120px]"
                    style={{
                      fontWeight: '300',
                      lineHeight: 1,
                      color: colors.border,
                      marginBottom: spacing.lg,
                    }}
                  >
                    "
                  </div>
                  <blockquote 
                    className="text-lg md:text-xl lg:text-2xl"
                    style={{
                      fontWeight: '300',
                      lineHeight: 1.4,
                      letterSpacing: '-0.01em',
                      marginBottom: spacing.md,
                      fontFamily: typography.secondaryFont,
                      fontStyle: 'italic',
                      color: colors.text.primary,
                    }}
                  >
                    Design is not about adding more, but removing the unnecessary until only the essence remains.
                  </blockquote>
                  <cite 
                    style={{
                      fontSize: responsive.fontSize.xs,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      fontFamily: typography.primaryFont,
                      fontWeight: '400',
                      color: colors.text.secondary,
                      fontStyle: 'normal',
                    }}
                  >
                    — Design Philosophy
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics / Social Proof */}
      <section style={{ padding: `${spacing.xl} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          <div 
            className="grid gap-8 items-center"
            style={{ gridTemplateColumns: deviceMode === 'mobile' ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}
          >
            {[
              { value: '5,000+', label: 'Clients' },
              { value: '100%', label: 'Uptime' },
              { value: '24h', label: 'Response' },
              { value: '50+', label: 'Countries' },
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <div 
                  className="text-2xl md:text-3xl"
                  style={{
                    fontWeight: '300',
                    color: colors.text.primary,
                    marginBottom: spacing.xs,
                    fontFamily: typography.primaryFont,
                  }}
                >
                  {metric.value}
                </div>
                <div 
                  style={{
                    fontSize: responsive.fontSize.xs,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: colors.text.secondary,
                    fontFamily: typography.primaryFont,
                    fontWeight: '400',
                  }}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: `${spacing.section} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: spacing.section }}>
            <h2 
              className="text-3xl md:text-4xl lg:text-[48px]"
              style={{
                fontWeight: '300',
                lineHeight: 1.25,
                marginBottom: spacing.lg,
                fontFamily: typography.primaryFont,
                color: colors.text.primary,
              }}
            >
              Essential Features
            </h2>
            <p 
              className="text-sm md:text-base"
              style={{
                color: colors.text.secondary,
                fontFamily: typography.primaryFont,
                maxWidth: '64ch',
                margin: '0 auto',
              }}
            >
              Everything you need, nothing you don't. Thoughtfully designed tools that enhance productivity without adding complexity.
            </p>
          </div>
          
          <div 
            className="grid gap-8"
            style={{ gridTemplateColumns: `repeat(${responsive.gridCols.features}, 1fr)` }}
          >
            {[
              {
                title: 'Clean Interface',
                description: 'Distraction-free environment designed for focus and productivity.',
              },
              {
                title: 'Fast Performance',
                description: 'Optimized for speed with minimal load times and smooth interactions.',
              },
              {
                title: 'Reliable Security',
                description: 'Enterprise-grade security with regular updates and monitoring.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                style={{
                  border: `1px solid ${colors.border}`,
                  borderRadius: radius.none,
                  padding: spacing.xl,
                  transition: 'all 100ms ease-out',
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.borderColor = colors.text.secondary;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.borderColor = colors.border;
                }}
              >
                <h3 
                  style={{
                    fontSize: responsive.fontSize.xl,
                    fontWeight: '400',
                    marginBottom: spacing.md,
                    fontFamily: typography.primaryFont,
                    color: colors.text.primary,
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  style={{
                    fontSize: responsive.fontSize.sm,
                    color: colors.text.secondary,
                    lineHeight: 1.6,
                    fontFamily: typography.primaryFont,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section style={{ padding: `${spacing.section} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: spacing.section }}>
            <h2 
              className="text-2xl md:text-3xl lg:text-[32px]"
              style={{
                fontWeight: '300',
                marginBottom: spacing.lg,
                fontFamily: typography.primaryFont,
                color: colors.text.primary,
              }}
            >
              Trusted Integrations
            </h2>
          </div>
          
          <div 
            className="grid gap-6" 
            style={{ 
              gridTemplateColumns: deviceMode === 'mobile' ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
              border: `1px solid ${colors.border}`,
              borderRadius: radius.none,
              padding: spacing.xl,
            }}
          >
            {['GitHub', 'Slack', 'Notion', 'Figma', 'Linear', 'Vercel', 'Stripe', 'AWS'].map((integration) => (
              <div
                key={integration}
                style={{
                  border: `1px solid ${colors.border}`,
                  borderRadius: radius.none,
                  padding: spacing.md,
                  textAlign: 'center',
                  fontSize: responsive.fontSize.xs,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontFamily: typography.primaryFont,
                  fontWeight: '400',
                  color: colors.text.secondary,
                  cursor: 'pointer',
                  transition: 'all 100ms ease-out',
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.borderColor = colors.text.primary;
                  target.style.color = colors.text.primary;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.borderColor = colors.border;
                  target.style.color = colors.text.secondary;
                }}
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: `${spacing.section} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: spacing.section }}>
            <h2 
              className="text-3xl md:text-4xl lg:text-[48px]"
              style={{
                fontWeight: '300',
                lineHeight: 1.25,
                marginBottom: spacing.lg,
                fontFamily: typography.primaryFont,
                color: colors.text.primary,
              }}
            >
              Simple Pricing
            </h2>
          </div>
          
          <div 
            className="grid gap-8"
            style={{ gridTemplateColumns: `repeat(${responsive.gridCols.pricing}, 1fr)` }}
          >
            {[
              {
                name: 'Basic',
                price: '$0',
                description: 'For individuals getting started',
                features: ['Up to 3 projects', 'Basic features', 'Email support'],
                popular: false,
              },
              {
                name: 'Professional',
                price: '$29',
                description: 'For growing teams and agencies',
                features: ['Unlimited projects', 'Advanced features', 'Priority support', 'API access'],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large organizations',
                features: ['Custom solutions', 'Dedicated support', 'SLA guarantee'],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                style={{
                  border: plan.popular 
                    ? `2px solid ${colors.text.primary}` 
                    : `1px solid ${colors.border}`,
                  borderRadius: radius.none,
                  padding: `${spacing.lg} ${spacing.md} ${spacing.xl} ${spacing.md}`,
                  position: 'relative',
                  backgroundColor: plan.popular ? colors.bg.default : 'transparent',
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: colors.text.primary,
                      color: colors.bg.default,
                      padding: `${spacing.xs} ${spacing.sm}`,
                      fontSize: responsive.fontSize.xs,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontFamily: typography.primaryFont,
                      fontWeight: '400',
                    }}
                  >
                    Most Popular
                  </div>
                )}
                
                <div style={{ textAlign: 'center', marginBottom: spacing.xl, marginTop: plan.popular ? '8px' : '0' }}>
                  <h3 
                    className="text-xl md:text-2xl"
                    style={{
                      fontWeight: '400',
                      marginBottom: spacing.sm,
                      fontFamily: typography.primaryFont,
                      color: colors.text.primary,
                    }}
                  >
                    {plan.name}
                  </h3>
                  <div 
                    className="text-3xl md:text-4xl lg:text-[48px]"
                    style={{
                      fontWeight: '300',
                      color: colors.text.primary,
                      marginBottom: spacing.sm,
                      fontFamily: typography.primaryFont,
                    }}
                  >
                    {plan.price}
                  </div>
                  <p className="text-sm" style={{ 
                    color: colors.text.secondary, 
                    fontFamily: typography.primaryFont,
                  }}>
                    {plan.description}
                  </p>
                </div>
                
                <div style={{ marginBottom: spacing.xl }}>
                  {plan.features.map((feature) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-3"
                      style={{ marginBottom: spacing.md }}
                    >
                      <Check size={16} style={{ color: colors.success }} />
                      <span style={{ 
                        fontSize: responsive.fontSize.sm, 
                        color: colors.text.primary,
                        fontFamily: typography.primaryFont,
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button
                  style={{
                    width: '100%',
                    backgroundColor: plan.popular 
                      ? colors.text.primary 
                      : 'transparent',
                    color: plan.popular 
                      ? colors.bg.default 
                      : colors.text.primary,
                    border: plan.popular 
                      ? `1px solid ${colors.text.primary}` 
                      : `1px solid ${colors.border}`,
                    borderRadius: radius.none,
                    padding: `${spacing.md} 0`,
                    fontSize: responsive.fontSize.xs,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontFamily: typography.primaryFont,
                    fontWeight: '400',
                    cursor: 'pointer',
                    transition: 'all 100ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    if (plan.popular) {
                      target.style.backgroundColor = colors.accent;
                      target.style.color = colors.bg.default;
                    } else {
                      target.style.backgroundColor = colors.bg.default;
                      target.style.borderColor = colors.text.secondary;
                    }
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    if (plan.popular) {
                      target.style.backgroundColor = colors.text.primary;
                      target.style.color = colors.bg.default;
                    } else {
                      target.style.backgroundColor = 'transparent';
                      target.style.borderColor = colors.border;
                    }
                  }}
                >
                  {plan.popular ? 'Start Free Trial' : 'Contact Sales'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: `${spacing.section} ${spacing.md}` }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center" style={{ marginBottom: spacing.section }}>
            <h2 
              className="text-2xl md:text-3xl lg:text-[32px]"
              style={{
                fontWeight: '300',
                marginBottom: spacing.lg,
                fontFamily: typography.primaryFont,
                color: colors.text.primary,
              }}
            >
              Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'What makes your approach different?',
                answer: 'We focus on essential functionality and remove unnecessary complexity, resulting in tools that are both powerful and easy to use.',
              },
              {
                question: 'Can I change plans anytime?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.',
              },
              {
                question: 'Do you offer custom solutions?',
                answer: 'Yes, we work with enterprise clients to create custom solutions tailored to their specific needs.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  border: `1px solid ${colors.border}`,
                  borderRadius: radius.none,
                  padding: spacing.xl,
                }}
              >
                <h3 
                  style={{
                    fontSize: responsive.fontSize.lg,
                    fontWeight: '400',
                    marginBottom: spacing.md,
                    fontFamily: typography.primaryFont,
                    color: colors.text.primary,
                  }}
                >
                  {faq.question}
                </h3>
                <p style={{ 
                  color: colors.text.secondary, 
                  fontSize: responsive.fontSize.sm, 
                  lineHeight: 1.6,
                  fontFamily: typography.primaryFont,
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: `${spacing.section} ${spacing.md}` }}>
        <div className="max-w-4xl mx-auto">
          <div 
            className="text-center"
            style={{
              border: `1px solid ${colors.border}`,
              borderRadius: radius.none,
              padding: `${spacing.section} ${spacing.md} ${spacing.section} ${spacing.md}`,
            }}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-[48px]"
              style={{
                fontWeight: '300',
                lineHeight: 1.25,
                marginBottom: spacing.lg,
                fontFamily: typography.primaryFont,
                color: colors.text.primary,
              }}
            >
              Ready to begin?
            </h2>
            <p 
              className="text-sm md:text-base"
              style={{
                color: colors.text.secondary,
                marginBottom: spacing.xl,
                fontFamily: typography.primaryFont,
              }}
            >
              Join thousands of professionals who have embraced minimalist design.
            </p>
            
            <div className="flex gap-4 justify-center" style={{ flexDirection: deviceMode === 'mobile' ? 'column' : 'row' }}>
              <button
                style={{
                  backgroundColor: colors.accent,
                  color: colors.bg.default,
                  border: 'none',
                  borderRadius: radius.none,
                  padding: `${spacing.sm} ${spacing.lg} ${spacing.sm} ${spacing.xl}`,
                  fontSize: responsive.fontSize.xs,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontFamily: typography.primaryFont,
                  fontWeight: '400',
                  cursor: 'pointer',
                  transition: 'all 100ms ease-out',
                  display: 'flex',
                  alignItems: 'center',
                  gap: spacing.sm,
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = colors.text.primary;
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = colors.accent;
                }}
              >
                Start Free Trial
                <ArrowUpRight size={16} />
              </button>
              <button
                style={{
                  backgroundColor: 'transparent',
                  color: colors.text.primary,
                  border: `1px solid ${colors.border}`,
                  borderRadius: radius.none,
                  padding: `${spacing.sm} ${spacing.lg} ${spacing.sm} ${spacing.xl}`,
                  fontSize: responsive.fontSize.xs,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontFamily: typography.primaryFont,
                  fontWeight: '400',
                  cursor: 'pointer',
                  transition: 'all 100ms ease-out',
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = colors.bg.default;
                  target.style.borderColor = colors.text.secondary;
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = 'transparent';
                  target.style.borderColor = colors.border;
                }}
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        style={{
          borderTop: `1px solid ${colors.border}`,
          padding: `${spacing.xl} ${spacing.md}`,
          backgroundColor: colors.bg.default,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div style={{ 
              fontSize: responsive.fontSize.xs, 
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: typography.primaryFont,
              fontWeight: '400',
              color: colors.text.secondary,
            }}>
              © 2025 Studio
            </div>
            <div className="flex gap-8">
              {['Privacy', 'Terms', 'Security'].map((item) => (
                <span 
                  key={item}
                  className="cursor-pointer"
                  style={{
                    fontSize: responsive.fontSize.xs,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontFamily: typography.primaryFont,
                    fontWeight: '400',
                    color: colors.text.secondary,
                    transition: 'color 100ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = colors.text.primary;
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = colors.text.secondary;
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
