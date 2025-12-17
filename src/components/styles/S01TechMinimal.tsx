import { useState } from 'react';
import { Shield, Zap, ArrowRight, Activity, Server, Globe, Menu, X, Check } from 'lucide-react';

export const S01TechMinimal = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Design tokens from S01 specification
  const colors = {
    bg: {
      default: '#FFFFFF',
      muted: '#F7F8FA',
      surface: '#FFFFFF',
    },
    border: '#E5E7EB',
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
    primary: {
      base: '#2563EB',
      hover: '#1D4ED8',
    },
    accent: '#22D3EE',
    success: '#16A34A',
    danger: '#DC2626',
  };

  const spacing = {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
    section: '96px',
  };

  const radius = {
    sm: '4px',
    md: '8px',
  };

  const shadow = '0 1px 2px rgba(0,0,0,0.04)';

  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor: colors.bg.default,
        color: colors.text.primary,
        fontFamily: '"Inter", system-ui, sans-serif',
        fontSize: '16px',
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
                width: '32px',
                height: '32px',
                backgroundColor: colors.primary.base,
                borderRadius: radius.sm,
              }}
            >
              <Server size={18} style={{ color: 'white' }} />
            </div>
            <span 
              style={{
                fontSize: '18px',
                fontWeight: '600',
                letterSpacing: '-0.025em',
              }}
            >
              TechFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Products', 'Solutions', 'About'].map((item) => (
              <span 
                key={item}
                className="cursor-pointer hover:text-blue-600 transition-colors"
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: colors.text.secondary,
                }}
              >
                {item}
              </span>
            ))}
            <button
              style={{
                backgroundColor: colors.primary.base,
                color: 'white',
                border: 'none',
                borderRadius: radius.sm,
                boxShadow: shadow,
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 120ms ease-out',
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.backgroundColor = colors.primary.hover;
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.backgroundColor = colors.primary.base;
              }}
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{
              backgroundColor: 'transparent',
              border: `1px solid ${colors.border}`,
              borderRadius: radius.sm,
              padding: spacing.sm,
              cursor: 'pointer',
              color: colors.text.secondary,
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div 
            style={{
              borderTop: `1px solid ${colors.border}`,
              padding: spacing.md,
              backgroundColor: colors.bg.surface,
            }}
          >
            <div className="max-w-6xl mx-auto px-6 space-y-3">
              {['Products', 'Solutions', 'About'].map((item) => (
                <span 
                  key={item}
                  className="block cursor-pointer"
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: colors.text.secondary,
                    padding: `${spacing.sm} 0`,
                  }}
                >
                  {item}
                </span>
              ))}
              <button
                style={{
                  backgroundColor: colors.primary.base,
                  color: 'white',
                  border: 'none',
                  borderRadius: radius.sm,
                  padding: `${spacing.sm} ${spacing.md}`,
                  fontSize: '14px',
                  fontWeight: '500',
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <div 
                className="inline-flex items-center gap-2 mb-6"
                style={{
                  backgroundColor: colors.bg.muted,
                  border: `1px solid ${colors.border}`,
                  borderRadius: radius.sm,
                  padding: `${spacing.xs} ${spacing.sm}`,
                  fontSize: '12px',
                  fontWeight: '500',
                  color: colors.text.secondary,
                }}
              >
                <Shield size={14} style={{ color: colors.primary.base }} />
                Enterprise-grade security
              </div>

              <h1 
                style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: 1.2,
                  marginBottom: spacing.lg,
                  letterSpacing: '-0.025em',
                  color: colors.text.primary,
                }}
              >
                Infrastructure that
                <br />
                scales with you
              </h1>

              <p 
                style={{
                  fontSize: '18px',
                  color: colors.text.secondary,
                  lineHeight: 1.6,
                  marginBottom: spacing.xl,
                  maxWidth: '72ch',
                }}
              >
                Build, deploy, and scale applications with confidence. Our platform handles the complexity so you can focus on what matters.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  style={{
                    backgroundColor: colors.primary.base,
                    color: 'white',
                    border: 'none',
                    borderRadius: radius.sm,
                    boxShadow: shadow,
                    padding: `${spacing.md} ${spacing.lg}`,
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 120ms ease-out',
                    display: 'flex',
                    alignItems: 'center',
                    gap: spacing.sm,
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = colors.primary.hover;
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = colors.primary.base;
                  }}
                >
                  Start free trial
                  <ArrowRight size={16} />
                </button>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: colors.text.primary,
                    border: `1px solid ${colors.border}`,
                    borderRadius: radius.sm,
                    padding: `${spacing.md} ${spacing.lg}`,
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 120ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = colors.bg.muted;
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                  }}
                >
                  View documentation
                </button>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div 
              style={{
                backgroundColor: colors.bg.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: radius.md,
                boxShadow: shadow,
                padding: spacing.xl,
              }}
            >
              <div className="space-y-4">
                {[
                  { icon: Activity, label: 'Uptime', value: '99.9%', color: colors.success },
                  { icon: Globe, label: 'Regions', value: '12', color: colors.primary.base },
                  { icon: Zap, label: 'Latency', value: '< 50ms', color: colors.accent },
                ].map((stat) => (
                  <div 
                    key={stat.label}
                    className="flex items-center justify-between"
                    style={{
                      backgroundColor: colors.bg.muted,
                      border: `1px solid ${colors.border}`,
                      borderRadius: radius.sm,
                      padding: spacing.md,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <stat.icon size={20} style={{ color: stat.color }} />
                      <span 
                        style={{
                          fontSize: '14px',
                          fontWeight: '500',
                          color: colors.text.secondary,
                        }}
                      >
                        {stat.label}
                      </span>
                    </div>
                    <span 
                      style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: colors.text.primary,
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics / Social Proof */}
      <section style={{ padding: `${spacing.xl} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            style={{
              backgroundColor: colors.bg.muted,
              border: `1px solid ${colors.border}`,
              borderRadius: radius.md,
              padding: spacing.xl,
            }}
          >
            {[
              { value: '10,000+', label: 'Teams' },
              { value: '99.9%', label: 'Uptime' },
              { value: '50ms', label: 'Avg Latency' },
              { value: '24/7', label: 'Support' },
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <div 
                  style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: colors.text.primary,
                    marginBottom: spacing.xs,
                  }}
                >
                  {metric.value}
                </div>
                <div 
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: colors.text.secondary,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
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
      <section style={{ padding: `${spacing.xl} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <h2 
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: spacing.md,
                color: colors.text.primary,
              }}
            >
              Everything you need to succeed
            </h2>
            <p 
              style={{
                fontSize: '16px',
                color: colors.text.secondary,
                maxWidth: '72ch',
                margin: '0 auto',
              }}
            >
              Powerful features designed to help you build and scale with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Auto-scaling',
                description: 'Automatically adjust resources based on demand without manual intervention.',
                icon: Activity,
              },
              {
                title: 'Global CDN',
                description: 'Deliver content faster with edge locations around the world.',
                icon: Globe,
              },
              {
                title: 'Real-time monitoring',
                description: 'Get insights into performance with detailed analytics and alerts.',
                icon: Zap,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                style={{
                  backgroundColor: colors.bg.surface,
                  border: `1px solid ${colors.border}`,
                  borderRadius: radius.md,
                  boxShadow: shadow,
                  padding: spacing.lg,
                  transition: 'all 120ms ease-out',
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.07)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = shadow;
                }}
              >
                <div 
                  className="flex items-center justify-center w-12 h-12 mb-4"
                  style={{
                    backgroundColor: colors.bg.muted,
                    borderRadius: radius.sm,
                  }}
                >
                  <feature.icon size={24} style={{ color: colors.primary.base }} />
                </div>
                
                <h3 
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: spacing.sm,
                    color: colors.text.primary,
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  style={{
                    fontSize: '14px',
                    color: colors.text.secondary,
                    lineHeight: 1.5,
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
      <section style={{ padding: `${spacing.xl} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <h2 
              style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: spacing.md,
                color: colors.text.primary,
              }}
            >
              Integrates with your favorite tools
            </h2>
          </div>
          
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{
              backgroundColor: colors.bg.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: radius.md,
              padding: spacing.lg,
            }}
          >
            {['GitHub', 'Slack', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Jira', 'Notion'].map((integration) => (
              <div
                key={integration}
                style={{
                  backgroundColor: colors.bg.muted,
                  border: `1px solid ${colors.border}`,
                  borderRadius: radius.sm,
                  padding: spacing.md,
                  textAlign: 'center',
                  fontSize: '12px',
                  fontWeight: '500',
                  color: colors.text.secondary,
                  cursor: 'pointer',
                  transition: 'all 120ms ease-out',
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.borderColor = colors.primary.base;
                  target.style.color = colors.primary.base;
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
      <section style={{ padding: `${spacing.xl} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <h2 
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: spacing.md,
                color: colors.text.primary,
              }}
            >
              Simple, transparent pricing
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: '$0',
                description: 'Perfect for small projects',
                features: ['Up to 5 users', 'Basic features', 'Community support'],
                popular: false,
              },
              {
                name: 'Pro',
                price: '$29',
                description: 'For growing teams',
                features: ['Up to 50 users', 'Advanced features', 'Priority support'],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large organizations',
                features: ['Unlimited users', 'Custom features', 'Dedicated support'],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                style={{
                  backgroundColor: colors.bg.surface,
                  border: plan.popular 
                    ? `2px solid ${colors.primary.base}` 
                    : `1px solid ${colors.border}`,
                  borderRadius: radius.md,
                  boxShadow: shadow,
                  padding: spacing.xl,
                  position: 'relative',
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: colors.primary.base,
                      color: 'white',
                      padding: `${spacing.xs} ${spacing.sm}`,
                      fontSize: '12px',
                      fontWeight: '500',
                      borderRadius: radius.sm,
                    }}
                  >
                    Most Popular
                  </div>
                )}
                
                <div style={{ textAlign: 'center', marginBottom: spacing.lg, marginTop: plan.popular ? '8px' : '0' }}>
                  <h3 
                    style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      marginBottom: spacing.sm,
                      color: colors.text.primary,
                    }}
                  >
                    {plan.name}
                  </h3>
                  <div 
                    style={{
                      fontSize: '36px',
                      fontWeight: '700',
                      color: colors.text.primary,
                      marginBottom: spacing.sm,
                    }}
                  >
                    {plan.price}
                  </div>
                  <p style={{ color: colors.text.secondary, fontSize: '14px' }}>
                    {plan.description}
                  </p>
                </div>
                
                <div style={{ marginBottom: spacing.lg }}>
                  {plan.features.map((feature) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-2"
                      style={{ marginBottom: spacing.sm }}
                    >
                      <Check size={16} style={{ color: colors.success }} />
                      <span style={{ fontSize: '14px', color: colors.text.primary }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button
                  style={{
                    width: '100%',
                    backgroundColor: plan.popular 
                      ? colors.primary.base 
                      : 'transparent',
                    color: plan.popular 
                      ? 'white' 
                      : colors.text.primary,
                    border: plan.popular 
                      ? `1px solid ${colors.primary.base}` 
                      : `1px solid ${colors.border}`,
                    borderRadius: radius.sm,
                    padding: `${spacing.md} 0`,
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 120ms ease-out',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    if (plan.popular) {
                      target.style.backgroundColor = colors.primary.hover;
                    } else {
                      target.style.backgroundColor = colors.bg.muted;
                    }
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    if (plan.popular) {
                      target.style.backgroundColor = colors.primary.base;
                    } else {
                      target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {plan.popular ? 'Start free trial' : 'Contact sales'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: `${spacing.xl} ${spacing.md}` }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <h2 
              style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: spacing.md,
                color: colors.text.primary,
              }}
            >
              Frequently asked questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: 'What is TechFlow?',
                answer: 'TechFlow is a modern infrastructure platform that helps you build, deploy, and scale applications with confidence.',
              },
              {
                question: 'Can I change my plan later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.',
              },
              {
                question: 'Do you offer enterprise support?',
                answer: 'Yes, we offer dedicated enterprise support with custom SLAs and priority response times.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: colors.bg.surface,
                  border: `1px solid ${colors.border}`,
                  borderRadius: radius.sm,
                  padding: spacing.lg,
                }}
              >
                <h3 
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: spacing.sm,
                    color: colors.text.primary,
                  }}
                >
                  {faq.question}
                </h3>
                <p style={{ color: colors.text.secondary, fontSize: '14px', lineHeight: 1.5 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: `${spacing.xl} ${spacing.md}` }}>
        <div className="max-w-4xl mx-auto">
          <div 
            className="text-center"
            style={{
              backgroundColor: colors.bg.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: radius.md,
              boxShadow: shadow,
              padding: `${spacing.section} ${spacing.lg}`,
            }}
          >
            <h2 
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: spacing.md,
                color: colors.text.primary,
              }}
            >
              Ready to get started?
            </h2>
            <p 
              style={{
                color: colors.text.secondary,
                marginBottom: spacing.xl,
                fontSize: '16px',
              }}
            >
              Join thousands of teams already using TechFlow to build amazing products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                style={{
                  backgroundColor: colors.primary.base,
                  color: 'white',
                  border: 'none',
                  borderRadius: radius.sm,
                  padding: `${spacing.md} ${spacing.xl}`,
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 120ms ease-out',
                  display: 'flex',
                  alignItems: 'center',
                  gap: spacing.sm,
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = colors.primary.hover;
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = colors.primary.base;
                }}
              >
                Start free trial
                <ArrowRight size={16} />
              </button>
              <button
                style={{
                  backgroundColor: 'transparent',
                  color: colors.text.primary,
                  border: `1px solid ${colors.border}`,
                  borderRadius: radius.sm,
                  padding: `${spacing.md} ${spacing.xl}`,
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 120ms ease-out',
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = colors.bg.muted;
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = 'transparent';
                }}
              >
                Schedule a demo
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
          backgroundColor: colors.bg.surface,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div style={{ fontSize: '14px', color: colors.text.secondary }}>
              © 2025 TechFlow. All rights reserved.
            </div>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Security'].map((item) => (
                <span 
                  key={item}
                  className="cursor-pointer hover:text-blue-600 transition-colors"
                  style={{
                    fontSize: '14px',
                    color: colors.text.secondary,
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
