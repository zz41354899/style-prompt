import { useState } from 'react';
import { Menu, X, Check } from 'lucide-react';

export const S18RetroPixelUI = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = deviceMode === 'mobile';
  const isDesktop = deviceMode === 'desktop';

  // Design tokens from the specification
  const colors = {
    background: {
      canvas: '#0B0E14',
      surface: '#11162A',
      surfaceAlt: '#1A2040',
    },
    text: {
      primary: '#E6E9FF',
      secondary: '#AAB0FF',
      muted: '#7A80C2',
      inverse: '#0B0E14',
    },
    accent: {
      primary: '#5CFFB1',
      secondary: '#FF5CAA',
      warning: '#FFD75C',
    },
    border: {
      default: '#2E3570',
      strong: '#5CFFB1',
    },
  };

  const spacing = {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '40px',
    xl: '64px',
    sectionY: '96px',
  };

  const shadows = {
    pixelSm: '2px 2px 0 #000',
    pixelMd: '4px 4px 0 #000',
  };

  // Pixel grid background
  const pixelGridStyle = {
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
    `,
    backgroundSize: '8px 8px',
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ 
        backgroundColor: colors.background.canvas,
        color: colors.text.primary,
        fontFamily: '"Inter", system-ui, sans-serif',
        fontSize: '16px',
        lineHeight: 1.6,
      }}
    >
      {/* Pixel grid background */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={pixelGridStyle}
      />
      
      {/* Scanline overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-6"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '100% 6px',
        }}
      />

      {/* Top Navigation */}
      <header 
        className="relative z-10 sticky top-0 backdrop-blur-sm"
        style={{ 
          backgroundColor: `${colors.background.surface}CC`,
          borderBottom: `1px solid ${colors.border.default}`,
          padding: `${spacing.sm} 0`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div 
              className="flex items-center justify-center"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: colors.background.surfaceAlt,
                border: `1px solid ${colors.border.default}`,
                boxShadow: shadows.pixelSm,
              }}
            >
              <div 
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: colors.accent.primary,
                }}
              />
            </div>
            <div>
              <div 
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  color: colors.text.secondary,
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                PIXEL OPS
              </div>
              <div 
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  letterSpacing: '0.05em',
                  lineHeight: 1,
                }}
              >
                Retro SaaS
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={`${isDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
            {['Features', 'Pricing', 'Docs', 'About'].map((item) => (
              <span 
                key={item}
                className="cursor-pointer hover:text-white transition-colors"
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  color: colors.text.secondary,
                }}
              >
                {item.toUpperCase()}
              </span>
            ))}
            <button
              style={{
                backgroundColor: colors.accent.primary,
                color: colors.background.canvas,
                border: `1px solid ${colors.accent.primary}`,
                boxShadow: shadows.pixelSm,
                padding: '8px 16px',
                fontSize: '10px',
                fontWeight: '900',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'transform 120ms steps(4, end)',
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translate(1px, 1px)';
                target.style.boxShadow = '1px 1px 0 #000';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translate(0, 0)';
                target.style.boxShadow = shadows.pixelSm;
              }}
            >
              Start Free Trial
            </button>
          </nav>

          {/* Mobile Menu Button */}
          {!isDesktop && <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              backgroundColor: colors.background.surface,
              border: `1px solid ${colors.border.default}`,
              boxShadow: shadows.pixelSm,
              padding: '8px',
              cursor: 'pointer',
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>}
        </div>

        {/* Mobile Menu */}
        {menuOpen && !isDesktop && (
          <div
            style={{
              backgroundColor: colors.background.surface,
              borderTop: `1px solid ${colors.border.default}`,
              padding: spacing.sm,
            }}
          >
            <div className="max-w-6xl mx-auto px-6 space-y-3">
              {['Features', 'Pricing', 'Docs', 'About'].map((item) => (
                <span 
                  key={item}
                  className="block cursor-pointer"
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    color: colors.text.secondary,
                    padding: '8px 0',
                  }}
                >
                  {item.toUpperCase()}
                </span>
              ))}
              <button
                style={{
                  backgroundColor: colors.accent.primary,
                  color: colors.background.canvas,
                  border: `1px solid ${colors.accent.primary}`,
                  boxShadow: shadows.pixelSm,
                  padding: '8px 16px',
                  fontSize: '10px',
                  fontWeight: '900',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: spacing.sm,
                }}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={{ padding: `${spacing.xl} ${spacing.sm}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: '32px' }}>
            {/* Left Column - Content */}
            <div style={{ gridColumn: isMobile ? 'span 1' : 'span 7' }}>
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 mb-6"
                style={{
                  backgroundColor: colors.background.surface,
                  border: `1px solid ${colors.border.default}`,
                  boxShadow: shadows.pixelSm,
                  padding: '6px 12px',
                }}
              >
                <span style={{ color: colors.accent.warning, fontSize: '10px', fontWeight: 'bold' }}>
                  NEW
                </span>
                <span style={{ 
                  fontSize: '10px', 
                  letterSpacing: '0.25em',
                  color: colors.text.secondary,
                  textTransform: 'uppercase',
                }}>
                  8-BIT UI · MODERN SAAS
                </span>
              </div>

              {/* Headline */}
              <h1 
                style={{
                  fontSize: 'clamp(32px, 5vw, 56px)',
                  fontWeight: '900',
                  lineHeight: 1.1,
                  marginBottom: spacing.md,
                  letterSpacing: '-0.02em',
                  fontFamily: '"Press Start 2P", monospace',
                }}
              >
                Run your workflows
                <br />
                like a retro game
              </h1>

              {/* Description */}
              <p 
                style={{
                  fontSize: '16px',
                  color: colors.text.secondary,
                  lineHeight: 1.6,
                  marginBottom: spacing.lg,
                  maxWidth: '68ch',
                }}
              >
                Retro Pixel UI visuals with modern SaaS clarity: tasks, events, integrations, and reliability modules in one conversion-ready page.
              </p>

              {/* CTAs */}
              <div className="flex flex-col md:flex-row gap-3">
                <button
                  style={{
                    backgroundColor: colors.accent.primary,
                    color: colors.background.canvas,
                    border: `1px solid ${colors.accent.primary}`,
                    boxShadow: shadows.pixelMd,
                    padding: '12px 24px',
                    fontSize: '10px',
                    fontWeight: '900',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'transform 120ms steps(4, end)',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.transform = 'translate(1px, 1px)';
                    target.style.boxShadow = '3px 3px 0 #000';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.transform = 'translate(0, 0)';
                    target.style.boxShadow = shadows.pixelMd;
                  }}
                >
                  Start Free Trial
                </button>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: colors.text.primary,
                    border: `1px solid ${colors.border.default}`,
                    boxShadow: shadows.pixelMd,
                    padding: '12px 24px',
                    fontSize: '10px',
                    fontWeight: '900',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 120ms steps(4, end)',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = colors.background.surface;
                    target.style.transform = 'translate(1px, 1px)';
                    target.style.boxShadow = '3px 3px 0 #000';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.transform = 'translate(0, 0)';
                    target.style.boxShadow = shadows.pixelMd;
                  }}
                >
                  View Docs
                </button>
              </div>
            </div>

            {/* Right Column - ASCII Art / Pixel Illustration */}
            <div style={{ gridColumn: isMobile ? 'span 1' : 'span 5' }}>
              <div 
                style={{
                  backgroundColor: colors.background.surface,
                  border: `1px solid ${colors.border.default}`,
                  boxShadow: shadows.pixelMd,
                  padding: spacing.lg,
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: '10px',
                  lineHeight: 1.4,
                }}
              >
                <div className="text-center mb-4" style={{ color: colors.text.muted }}>
                  SYSTEM STATUS v1.0
                </div>
                
                {/* ASCII Art Representation */}
                <pre style={{
                  color: colors.accent.primary,
                  margin: '0 0 16px 0',
                  whiteSpace: 'pre',
                  fontSize: '8px',
                  lineHeight: 1,
                }}>
{`╔════════════════════╗
║   ██████╗   ██████╗  ║
║   ██╔══██╗ ██╔════╝  ║
║   ██║  ██║ ██║       ║
║   ██║  ██║ ██║       ║
║   ██████╔╝ ╚██████╗  ║
║   ╚═════╝   ╚═════╝  ║
╚════════════════════╝`}
                </pre>

                {/* Status Items */}
                <div className="space-y-2">
                  {[
                    { label: 'DEPLOY', value: 'READY', color: colors.accent.primary },
                    { label: 'QUEUE', value: '12 JOBS', color: colors.accent.warning },
                    { label: 'ALERTS', value: '0', color: colors.text.secondary },
                  ].map((item) => (
                    <div 
                      key={item.label}
                      className="flex justify-between items-center"
                      style={{
                        backgroundColor: colors.background.canvas,
                        border: `1px solid ${colors.border.default}`,
                        boxShadow: shadows.pixelSm,
                        padding: '8px 12px',
                      }}
                    >
                      <span style={{ 
                        fontSize: '10px', 
                        fontWeight: '600',
                        letterSpacing: '0.1em',
                        color: colors.text.secondary,
                      }}>
                        {item.label}
                      </span>
                      <span style={{ 
                        fontSize: '10px', 
                        fontWeight: '900',
                        letterSpacing: '0.1em',
                        color: item.color,
                      }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Integration Tags */}
                <div style={{ marginTop: spacing.md }}>
                  <div style={{ 
                    fontSize: '10px', 
                    letterSpacing: '0.25em',
                    color: colors.text.muted,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                  }}>
                    INTEGRATIONS
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['API', 'DB', 'CI', 'CD'].map((tag) => (
                      <div
                        key={tag}
                        style={{
                          backgroundColor: colors.background.canvas,
                          border: `1px solid ${colors.border.default}`,
                          boxShadow: shadows.pixelSm,
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '8px',
                          fontWeight: '900',
                          letterSpacing: '0.1em',
                          color: colors.text.primary,
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics / Social Proof */}
      <section style={{ padding: `${spacing.lg} ${spacing.sm}` }}>
        <div className="max-w-6xl mx-auto">
          <div 
            className="grid gap-4"
            style={{
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              backgroundColor: colors.background.surface,
              border: `1px solid ${colors.border.default}`,
              boxShadow: shadows.pixelSm,
              padding: spacing.lg,
            }}
          >
            {[
              { value: '99.9%', label: 'Uptime' },
              { value: '10,000+', label: 'Teams' },
              { value: '< 10ms', label: 'Latency' },
              { value: '24/7', label: 'Support' },
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <div 
                  style={{
                    fontSize: '24px',
                    fontWeight: '900',
                    color: colors.text.primary,
                    fontFamily: '"Press Start 2P", monospace',
                    marginBottom: '4px',
                  }}
                >
                  {metric.value}
                </div>
                <div 
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.25em',
                    color: colors.text.muted,
                    textTransform: 'uppercase',
                  }}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section style={{ padding: `${spacing.lg} ${spacing.sm}` }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ marginBottom: spacing.lg }}>
            <div 
              style={{
                fontSize: '10px',
                letterSpacing: '0.25em',
                color: colors.text.muted,
                textTransform: 'uppercase',
                marginBottom: spacing.sm,
              }}
            >
              CORE FEATURES
            </div>
          </div>
          
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                title: 'Pixel Dashboard',
                desc: 'High signal, low noise. Dense information that still reads cleanly.',
                accent: colors.accent.primary,
                icon: '█▓▒░',
              },
              {
                title: 'Stepped Interactions',
                desc: 'Hover, focus, and active states use pixel shadows and step-based motion.',
                accent: colors.accent.warning,
                icon: '▲▼◄►',
              },
              {
                title: 'SaaS-Ready Layout',
                desc: 'Pricing, integrations, and trust modules included—nostalgic without losing conversion clarity.',
                accent: colors.accent.secondary,
                icon: '⚡⚙️🔧',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                style={{
                  backgroundColor: colors.background.surface,
                  border: `1px solid ${feature.accent}`,
                  boxShadow: shadows.pixelMd,
                  padding: spacing.lg,
                  transition: 'transform 120ms steps(4, end)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.transform = 'translate(1px, 1px)';
                  target.style.boxShadow = '3px 3px 0 #000';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.transform = 'translate(0, 0)';
                  target.style.boxShadow = shadows.pixelMd;
                }}
              >
                {/* Icon */}
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: colors.background.canvas,
                    border: `1px solid ${colors.border.default}`,
                    boxShadow: shadows.pixelSm,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: spacing.md,
                    fontSize: '16px',
                    fontFamily: '"Press Start 2P", monospace',
                    color: feature.accent,
                  }}
                >
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 
                  style={{
                    fontSize: '18px',
                    fontWeight: '900',
                    marginBottom: spacing.sm,
                    letterSpacing: '-0.01em',
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
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section style={{ padding: `${spacing.lg} ${spacing.sm}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: spacing.lg }}>
            <div 
              style={{
                fontSize: '10px',
                letterSpacing: '0.25em',
                color: colors.text.muted,
                textTransform: 'uppercase',
                marginBottom: spacing.sm,
              }}
            >
              INTEGRATIONS
            </div>
            <h2 
              style={{
                fontSize: '24px',
                fontWeight: '900',
                marginBottom: spacing.md,
              }}
            >
              Connects with your stack
            </h2>
          </div>
          
          <div 
            className="grid gap-4"
            style={{
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              backgroundColor: colors.background.surface,
              border: `1px solid ${colors.border.default}`,
              boxShadow: shadows.pixelSm,
              padding: spacing.lg,
            }}
          >
            {[
              'GitHub', 'Slack', 'Jira', 'Notion',
              'Figma', 'AWS', 'Docker', 'K8s'
            ].map((integration) => (
              <div
                key={integration}
                style={{
                  backgroundColor: colors.background.canvas,
                  border: `1px solid ${colors.border.default}`,
                  boxShadow: shadows.pixelSm,
                  padding: spacing.sm,
                  textAlign: 'center',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: colors.text.secondary,
                  cursor: 'pointer',
                  transition: 'all 120ms steps(4, end)',
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.borderColor = colors.border.strong;
                  target.style.transform = 'translate(1px, 1px)';
                  target.style.boxShadow = '1px 1px 0 #000';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.borderColor = colors.border.default;
                  target.style.transform = 'translate(0, 0)';
                  target.style.boxShadow = shadows.pixelSm;
                }}
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section style={{ padding: `${spacing.lg} ${spacing.sm}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: spacing.lg }}>
            <div 
              style={{
                fontSize: '10px',
                letterSpacing: '0.25em',
                color: colors.text.muted,
                textTransform: 'uppercase',
                marginBottom: spacing.sm,
              }}
            >
              PRICING
            </div>
            <h2 
              style={{
                fontSize: '24px',
                fontWeight: '900',
                marginBottom: spacing.md,
              }}
            >
              Simple, transparent pricing
            </h2>
          </div>
          
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                name: 'Starter',
                price: '$0',
                description: 'Perfect for small teams',
                features: ['Up to 5 users', 'Basic features', 'Community support'],
                popular: false,
              },
              {
                name: 'Pro',
                price: '$29',
                description: 'For growing teams',
                features: ['Up to 50 users', 'Advanced features', 'Priority support', 'API access'],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large organizations',
                features: ['Unlimited users', 'Custom features', 'Dedicated support', 'SLA guarantee'],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                style={{
                  backgroundColor: colors.background.surface,
                  border: plan.popular 
                    ? `2px solid ${colors.accent.primary}` 
                    : `1px solid ${colors.border.default}`,
                  boxShadow: shadows.pixelMd,
                  padding: spacing.lg,
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
                      backgroundColor: colors.accent.primary,
                      color: colors.background.canvas,
                      padding: '4px 12px',
                      fontSize: '10px',
                      fontWeight: '900',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Most Popular
                  </div>
                )}
                
                <div style={{ textAlign: 'center', marginBottom: spacing.md, marginTop: plan.popular ? '8px' : '0' }}>
                  <h3 
                    style={{
                      fontSize: '20px',
                      fontWeight: '900',
                      marginBottom: spacing.sm,
                    }}
                  >
                    {plan.name}
                  </h3>
                  <div 
                    style={{
                      fontSize: '32px',
                      fontWeight: '900',
                      color: colors.accent.primary,
                      fontFamily: '"Press Start 2P", monospace',
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
                      style={{ marginBottom: '8px' }}
                    >
                      <Check size={16} style={{ color: colors.accent.primary }} />
                      <span style={{ fontSize: '14px' }}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  style={{
                    width: '100%',
                    backgroundColor: plan.popular 
                      ? colors.accent.primary 
                      : 'transparent',
                    color: plan.popular 
                      ? colors.background.canvas 
                      : colors.text.primary,
                    border: plan.popular 
                      ? `1px solid ${colors.accent.primary}` 
                      : `1px solid ${colors.border.default}`,
                    boxShadow: shadows.pixelSm,
                    padding: '12px',
                    fontSize: '10px',
                    fontWeight: '900',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
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
      <section style={{ padding: `${spacing.lg} ${spacing.sm}` }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center" style={{ marginBottom: spacing.lg }}>
            <div 
              style={{
                fontSize: '10px',
                letterSpacing: '0.25em',
                color: colors.text.muted,
                textTransform: 'uppercase',
                marginBottom: spacing.sm,
              }}
            >
              FAQ
            </div>
            <h2 
              style={{
                fontSize: '24px',
                fontWeight: '900',
                marginBottom: spacing.md,
              }}
            >
              Frequently asked questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: 'What is Retro Pixel UI?',
                answer: 'Retro Pixel UI is an 8-bit inspired design system that combines nostalgic pixel aesthetics with modern SaaS functionality.',
              },
              {
                question: 'Can I customize the colors?',
                answer: 'Yes, the design system is built on CSS variables that can be easily customized to match your brand.',
              },
              {
                question: 'Is it responsive?',
                answer: 'Absolutely. Retro Pixel UI is fully responsive and works seamlessly across all device sizes.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: colors.background.surface,
                  border: `1px solid ${colors.border.default}`,
                  boxShadow: shadows.pixelSm,
                  padding: spacing.md,
                }}
              >
                <h3 
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
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

      {/* Contact */}
      <section style={{ padding: `${spacing.lg} ${spacing.sm}` }}>
        <div className="max-w-4xl mx-auto">
          <div 
            className="text-center"
            style={{
              backgroundColor: colors.background.surface,
              border: `1px solid ${colors.border.default}`,
              boxShadow: shadows.pixelMd,
              padding: `${spacing.xl} ${spacing.lg}`,
            }}
          >
            <h2 
              style={{
                fontSize: '24px',
                fontWeight: '900',
                marginBottom: spacing.md,
              }}
            >
              Ready to get started?
            </h2>
            <p 
              style={{
                color: colors.text.secondary,
                marginBottom: spacing.lg,
                fontSize: '16px',
              }}
            >
              Join thousands of teams already using Retro Pixel UI to build amazing products.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                style={{
                  backgroundColor: colors.accent.primary,
                  color: colors.background.canvas,
                  border: `1px solid ${colors.accent.primary}`,
                  boxShadow: shadows.pixelMd,
                  padding: '12px 24px',
                  fontSize: '10px',
                  fontWeight: '900',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                Start Free Trial
              </button>
              <button
                style={{
                  backgroundColor: 'transparent',
                  color: colors.text.primary,
                  border: `1px solid ${colors.border.default}`,
                  boxShadow: shadows.pixelMd,
                  padding: '12px 24px',
                  fontSize: '10px',
                  fontWeight: '900',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        style={{
          borderTop: `1px solid ${colors.border.default}`,
          padding: `${spacing.lg} ${spacing.sm}`,
          backgroundColor: colors.background.surface,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div style={{ fontSize: '10px', letterSpacing: '0.25em', color: colors.text.muted }}>
              RETRO PIXEL UI · S18
            </div>
            <div style={{ fontSize: '10px', letterSpacing: '0.25em', color: colors.text.muted }}>
              © 2025 Pixel Ops. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
