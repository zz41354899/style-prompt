import { useState } from 'react';
import { Menu, X, Check, ArrowRight } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S03Mondrian = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const responsive = useResponsive(deviceMode);

  // Design tokens from S03 specification
  const colors = {
    bg: '#F8F4E3',
    primary: '#1a1a1a',
    red: '#DD0100',
    blue: '#0047AB',
    yellow: '#FADA00',
    white: '#FFFFFF',
  };

  const typography = {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  };

  const spacing = responsive.spacing;

  const border = {
    width: '2px',
    style: 'solid',
    color: '#000000',
  };

  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor: colors.bg,
        color: colors.primary,
        fontFamily: typography.fontFamily,
        fontSize: responsive.fontSize.base,
        lineHeight: 1.6,
      }}
    >
      {/* Top Navigation */}
      <header style={{ 
        padding: `${spacing.md} 0`,
        borderBottom: `${border.width} ${border.style} ${border.color}`,
      }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Mondrian Logo */}
            <div className="flex gap-1">
              <div style={{ width: '12px', height: '12px', backgroundColor: colors.red }} />
              <div style={{ width: '12px', height: '12px', backgroundColor: colors.blue }} />
              <div style={{ width: '12px', height: '12px', backgroundColor: colors.yellow }} />
            </div>
            <span 
              style={{
                fontSize: responsive.fontSize.sm,
                fontWeight: '700',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              DE STIJL
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
            {['Works', 'Philosophy', 'Contact'].map((item) => (
              <span 
                key={item}
                className="cursor-pointer"
                style={{
                  fontSize: responsive.fontSize.xs,
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {item}
              </span>
            ))}
            <button
              style={{
                backgroundColor: colors.primary,
                color: colors.white,
                border: 'none',
                padding: '8px 16px',
                fontSize: responsive.fontSize.xs,
                fontWeight: '700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Start Trial
            </button>
          </nav>

          {/* Mobile Menu Button */}
          {responsive.nav.showMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                padding: '8px',
                cursor: 'pointer',
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
              borderTop: `${border.width} ${border.style} ${border.color}`,
              padding: spacing.md,
              backgroundColor: colors.primary,
              color: colors.white,
            }}
          >
            <div className="max-w-6xl mx-auto px-6 space-y-3">
              {['Works', 'Philosophy', 'Contact'].map((item) => (
                <span 
                  key={item}
                  className="block cursor-pointer"
                  style={{
                    fontSize: responsive.fontSize.xs,
                    fontWeight: '700',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '8px 0',
                  }}
                >
                  {item}
                </span>
              ))}
              <button
                style={{
                  backgroundColor: colors.red,
                  color: colors.white,
                  border: 'none',
                  padding: '8px 16px',
                  fontSize: responsive.fontSize.xs,
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: spacing.sm,
                }}
              >
                Start Trial
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Mondrian Grid */}
      <section style={{ padding: `${spacing.section} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          {/* Desktop Grid */}
          <div className="grid-cols-12 gap-2" style={{ minHeight: '500px', display: deviceMode === 'mobile' ? 'none' : 'grid' }}>
            {/* Large Red Block - Main Content */}
            <div 
              className="col-span-7 row-span-2 flex flex-col justify-center p-8"
              style={{ backgroundColor: colors.red }}
            >
              <div style={{ color: colors.white }}>
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl"
                  style={{
                    fontWeight: '700',
                    lineHeight: 1.1,
                    marginBottom: spacing.lg,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Grid-Based
                  <br />
                  Design System
                </h1>
                <p 
                  className="text-base md:text-lg"
                  style={{
                    lineHeight: 1.6,
                    marginBottom: spacing.xl,
                    maxWidth: '68ch',
                  }}
                >
                  Rational, architectural, and timeless. Transform abstract modernist principles into production-ready UI with geometric precision.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <button
                    style={{
                      backgroundColor: colors.white,
                      color: colors.primary,
                      border: 'none',
                      padding: '12px 24px',
                      fontSize: responsive.fontSize.xs,
                      fontWeight: '700',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: spacing.sm,
                    }}
                  >
                    Start Free Trial
                    <ArrowRight size={16} />
                  </button>
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      color: colors.white,
                      border: `2px solid ${colors.white}`,
                      padding: '12px 24px',
                      fontSize: responsive.fontSize.xs,
                      fontWeight: '700',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </div>

            {/* Blue Block - Visual Element */}
            <div 
              className="col-span-3 row-span-1 flex items-center justify-center"
              style={{ backgroundColor: colors.blue }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl" style={{ 
                color: colors.white,
                fontWeight: '700',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}>
                ART
              </div>
            </div>

            {/* Yellow Block - Stats */}
            <div 
              className="col-span-2 row-span-1 flex flex-col justify-center items-center p-4"
              style={{ backgroundColor: colors.yellow }}
            >
              <div className="text-2xl md:text-3xl" style={{ 
                color: colors.primary,
                fontWeight: '700',
                marginBottom: spacing.sm,
              }}>
                100%
              </div>
              <div style={{ 
                color: colors.primary,
                fontSize: '10px',
                fontWeight: '700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}>
                Grid Aligned
              </div>
            </div>

            {/* Small White Block */}
            <div 
              className="col-span-2 row-span-1 flex items-center justify-center"
              style={{ 
                backgroundColor: colors.white,
                border: `${border.width} ${border.style} ${border.color}`,
              }}
            >
              <div style={{ 
                color: colors.primary,
                fontSize: responsive.fontSize.sm,
                fontWeight: '700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                Since 1917
              </div>
            </div>

            {/* Large Blue Block - Features */}
            <div 
              className="col-span-3 row-span-1 flex flex-col justify-center p-6"
              style={{ backgroundColor: colors.blue }}
            >
              <div style={{ color: colors.white }}>
                <h3 
                  style={{
                    fontSize: responsive.fontSize['2xl'],
                    fontWeight: '700',
                    marginBottom: spacing.md,
                  }}
                >
                  Core Principles
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Geometric Precision', 'Primary Colors', 'Asymmetrical Balance'].map((item) => (
                    <li 
                      key={item}
                      style={{ 
                        marginBottom: spacing.sm,
                        fontSize: responsive.fontSize.sm,
                        display: 'flex',
                        alignItems: 'center',
                        gap: spacing.sm,
                      }}
                    >
                      <Check size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Red Accent Block */}
            <div 
              className="col-span-5 row-span-1 flex items-center justify-center"
              style={{ backgroundColor: colors.red }}
            >
              <div style={{ 
                color: colors.white,
                fontSize: responsive.fontSize.lg,
                fontWeight: '700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}>
                "Less is More"
              </div>
            </div>
          </div>

          {/* Mobile Grid - Stacked Layout */}
          <div className="space-y-2" style={{ display: deviceMode === 'mobile' ? 'block' : 'none' }}>
            {/* Main Content Block */}
            <div 
              className="flex flex-col justify-center p-6"
              style={{ backgroundColor: colors.red }}
            >
              <div style={{ color: colors.white }}>
                <h1 
                  style={{
                    fontSize: responsive.fontSize['3xl'],
                    fontWeight: '700',
                    lineHeight: 1.1,
                    marginBottom: spacing.md,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Grid-Based
                  <br />
                  Design System
                </h1>
                <p 
                  style={{
                    fontSize: responsive.fontSize.base,
                    lineHeight: 1.6,
                    marginBottom: spacing.lg,
                  }}
                >
                  Rational, architectural, and timeless. Transform abstract modernist principles into production-ready UI.
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    style={{
                      backgroundColor: colors.white,
                      color: colors.primary,
                      border: 'none',
                      padding: '12px 24px',
                      fontSize: responsive.fontSize.xs,
                      fontWeight: '700',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: spacing.sm,
                    }}
                  >
                    Start Free Trial
                    <ArrowRight size={16} />
                  </button>
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      color: colors.white,
                      border: `2px solid ${colors.white}`,
                      padding: '12px 24px',
                      fontSize: responsive.fontSize.xs,
                      fontWeight: '700',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </div>

            {/* Blue Block */}
            <div 
              className="flex items-center justify-center p-6"
              style={{ backgroundColor: colors.blue }}
            >
              <div style={{ 
                color: colors.white,
                fontSize: responsive.fontSize['4xl'],
                fontWeight: '700',
                textAlign: 'center',
              }}>
                ART
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-2">
              {/* Yellow Block */}
              <div 
                className="flex flex-col justify-center items-center p-4"
                style={{ backgroundColor: colors.yellow }}
              >
                <div style={{ 
                  color: colors.primary,
                  fontSize: responsive.fontSize['2xl'],
                  fontWeight: '700',
                  marginBottom: spacing.sm,
                }}>
                  100%
                </div>
                <div style={{ 
                  color: colors.primary,
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}>
                  Grid Aligned
                </div>
              </div>

              {/* White Block */}
              <div 
                className="flex items-center justify-center"
                style={{ 
                  backgroundColor: colors.white,
                  border: `${border.width} ${border.style} ${border.color}`,
                }}
              >
                <div style={{ 
                  color: colors.primary,
                  fontSize: responsive.fontSize.xs,
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  Since 1917
                </div>
              </div>
            </div>

            {/* Features Block */}
            <div 
              className="flex flex-col justify-center p-6"
              style={{ backgroundColor: colors.blue }}
            >
              <div style={{ color: colors.white }}>
                <h3 
                  style={{
                    fontSize: responsive.fontSize.xl,
                    fontWeight: '700',
                    marginBottom: spacing.md,
                  }}
                >
                  Core Principles
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Geometric Precision', 'Primary Colors', 'Asymmetrical Balance'].map((item) => (
                    <li 
                      key={item}
                      style={{ 
                        marginBottom: spacing.sm,
                        fontSize: responsive.fontSize.sm,
                        display: 'flex',
                        alignItems: 'center',
                        gap: spacing.sm,
                      }}
                    >
                      <Check size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Red Accent Block */}
            <div 
              className="flex items-center justify-center p-6"
              style={{ backgroundColor: colors.red }}
            >
              <div style={{ 
                color: colors.white,
                fontSize: responsive.fontSize.base,
                fontWeight: '700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}>
                "Less is More"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section style={{ padding: `${spacing.xl} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-2" style={{ gridTemplateColumns: deviceMode === 'mobile' ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}>
            {[
              { value: '5,000+', label: 'Designers', color: colors.red },
              { value: '100%', label: 'Precision', color: colors.blue },
              { value: '3', label: 'Colors', color: colors.yellow },
              { value: '∞', label: 'Possibilities', color: colors.primary },
            ].map((metric, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: metric.color,
                  padding: spacing.lg,
                  textAlign: 'center',
                  color: colors.white,
                }}
              >
                <div 
                  className="text-2xl md:text-3xl"
                  style={{
                    fontWeight: '700',
                    marginBottom: spacing.sm,
                  }}
                >
                  {metric.value}
                </div>
                <div 
                  className="text-xs"
                  style={{
                    fontWeight: '700',
                    letterSpacing: '0.15em',
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

      {/* Features Grid */}
      <section style={{ padding: `${spacing.xl} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-2" style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : 'repeat(12, 1fr)' }}>
            <div 
              style={{ 
                gridColumn: deviceMode === 'mobile' ? 'span 1' : 'span 8', 
                padding: deviceMode === 'mobile' ? '24px' : '32px',
                backgroundColor: colors.white,
                border: `${border.width} ${border.style} ${border.color}`,
              }}
            >
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl"
                style={{
                  fontWeight: '700',
                  lineHeight: 1.2,
                  marginBottom: spacing.lg,
                }}
              >
                Structured Features
              </h2>
              <div className="grid gap-4" style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : 'repeat(3, 1fr)' }}>
                {[
                  { title: 'Grid System', desc: '12-column responsive layout' },
                  { title: 'Color Theory', desc: 'Primary colors only' },
                  { title: 'Typography', desc: 'Helvetica Neue hierarchy' },
                ].map((feature) => (
                  <div key={feature.title}>
                    <h3 
                      style={{
                        fontSize: responsive.fontSize.base,
                        fontWeight: '700',
                        marginBottom: spacing.sm,
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: responsive.fontSize.sm, color: '#666' }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className="flex items-center justify-center"
              style={{ gridColumn: deviceMode === 'mobile' ? 'span 1' : 'span 4', padding: '24px', backgroundColor: colors.blue }}
            >
              <div style={{ 
                color: colors.white,
                fontSize: responsive.fontSize.xl,
                fontWeight: '700',
                textAlign: 'center',
              }}>
                MODERN<br />
                DESIGN
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: `${spacing.xl} ${spacing.md}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl"
              style={{
                fontWeight: '700',
                marginBottom: spacing.lg,
              }}
            >
              Pricing Plans
            </h2>
          </div>
          
          <div className="grid gap-2" style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              {
                name: 'Basic',
                price: '$0',
                color: colors.white,
                features: ['Grid layouts', 'Basic colors', 'Community support'],
              },
              {
                name: 'Professional',
                price: '$29',
                color: colors.blue,
                features: ['Advanced grids', 'Custom colors', 'Priority support'],
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                color: colors.red,
                features: ['Unlimited projects', 'Custom solutions', 'Dedicated support'],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                style={{
                  backgroundColor: plan.color,
                  border: plan.color === colors.white ? `${border.width} ${border.style} ${border.color}` : 'none',
                  padding: spacing.xl,
                  color: plan.color === colors.white ? colors.primary : colors.white,
                }}
              >
                <h3 
                  style={{
                    fontSize: responsive.fontSize.xl,
                    fontWeight: '700',
                    marginBottom: spacing.md,
                  }}
                >
                  {plan.name}
                </h3>
                <div 
                  style={{
                    fontSize: responsive.fontSize['4xl'],
                    fontWeight: '700',
                    marginBottom: spacing.lg,
                  }}
                >
                  {plan.price}
                </div>
                <div style={{ marginBottom: spacing.lg }}>
                  {plan.features.map((feature) => (
                    <div 
                      key={feature}
                      style={{ 
                        marginBottom: spacing.sm,
                        fontSize: responsive.fontSize.sm,
                        display: 'flex',
                        alignItems: 'center',
                        gap: spacing.sm,
                      }}
                    >
                      <Check size={16} />
                      {feature}
                    </div>
                  ))}
                </div>
                <button
                  style={{
                    width: '100%',
                    backgroundColor: plan.color === colors.white ? colors.primary : colors.white,
                    color: plan.color === colors.white ? colors.white : colors.primary,
                    border: 'none',
                    padding: '12px',
                    fontSize: responsive.fontSize.xs,
                    fontWeight: '700',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        style={{
          borderTop: `${border.width} ${border.style} ${border.color}`,
          padding: `${spacing.xl} ${spacing.md}`,
          backgroundColor: colors.white,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            <div className="md:col-span-4 text-center md:text-left">
              <div className="flex gap-1 mb-4 justify-center md:justify-start">
                <div style={{ width: '8px', height: '8px', backgroundColor: colors.red }} />
                <div style={{ width: '8px', height: '8px', backgroundColor: colors.blue }} />
                <div style={{ width: '8px', height: '8px', backgroundColor: colors.yellow }} />
              </div>
              <div style={{ fontSize: responsive.fontSize.xs, fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                DE STIJL
              </div>
            </div>
            <div className="md:col-span-4 text-center">
              <div style={{ fontSize: responsive.fontSize.xs, color: '#666' }}>
                © 2025 Grid Design System
              </div>
            </div>
            <div className="md:col-span-4 text-center md:text-right">
              <div style={{ fontSize: responsive.fontSize.xs, color: '#666' }}>
                Geometric Precision
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
