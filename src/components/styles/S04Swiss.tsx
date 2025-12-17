import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S04Swiss = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const responsive = useResponsive(deviceMode);

  return (
    <div 
      className="min-h-full font-sans relative overflow-x-hidden"
      style={{
        backgroundColor: 'white',
        color: 'black',
        padding: deviceMode === 'mobile' ? '16px' : deviceMode === 'tablet' ? '24px' : '32px',
        fontSize: responsive.fontSize.base,
      }}
    >
      {/* 網格背景提示 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative">
        {/* Header */}
        <header 
          className="flex border-b-2 border-black justify-between items-end"
          style={{
            marginBottom: deviceMode === 'mobile' ? '48px' : '64px',
            paddingBottom: '24px',
            gap: '16px',
          }}
        >
          <div style={{ flex: deviceMode === 'mobile' ? '1' : '2' }}>
            <div 
              style={{
                fontSize: '10px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: '8px',
              }}
            >
              International Typographic Style
            </div>
            <div 
              style={{
                fontSize: deviceMode === 'mobile' ? '30px' : deviceMode === 'tablet' ? '40px' : '50px',
                fontWeight: '900',
                letterSpacing: '-0.02em',
              }}
            >
              Swiss Design
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav 
            className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'}`}
            style={{
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              flex: '1',
            }}
          >
            <div 
              style={{
                display: 'flex',
                gap: '32px',
                fontSize: responsive.fontSize.sm,
                fontWeight: '500',
              }}
            >
              <span className="cursor-default">Works</span>
              <span className="cursor-default">Philosophy</span>
              <span className="cursor-default">Contact</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          {responsive.nav.showMobile && (
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
              style={{
                padding: '8px',
                border: '2px solid black',
                backgroundColor: menuOpen ? 'black' : 'transparent',
                color: menuOpen ? 'white' : 'black',
                transition: 'all 0.2s ease',
              }}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <div 
            className="lg:hidden"
            style={{
              marginBottom: '32px',
              padding: '16px',
              border: '2px solid black',
            }}
          >
            <nav 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: responsive.fontSize.sm,
                fontWeight: '500',
              }}
            >
              <span style={{ padding: '8px 0' }} className="cursor-default">Works</span>
              <span style={{ padding: '8px 0' }} className="cursor-default">Philosophy</span>
              <span style={{ padding: '8px 0' }} className="cursor-default">Contact</span>
            </nav>
          </div>
        )}

        {/* Main Grid */}
        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            marginBottom: '64px',
          }}
        >
          <div 
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: deviceMode === 'mobile' ? 'center' : 'flex-start',
            }}
          >
            <div 
              style={{
                fontSize: deviceMode === 'mobile' ? '50px' : deviceMode === 'tablet' ? '100px' : '180px',
                fontWeight: '900',
                lineHeight: '0.8',
                color: '#E53935',
                letterSpacing: '-0.05em',
              }}
            >
              Aa
            </div>
          </div>
          <div style={{ gridColumn: 'span 12', display: deviceMode === 'mobile' ? 'none' : 'block' }} />
          <div 
            style={{
              gridColumn: 'span 12',
              paddingTop: '16px',
            }}
          >
            <div 
              style={{
                fontSize: '10px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: '24px',
                textAlign: deviceMode === 'mobile' ? 'center' : 'left',
              }}
            >
              Helvetica · Grid · Clarity
            </div>
            <h1 
              style={{
                fontSize: deviceMode === 'mobile' ? '24px' : '32px',
                fontWeight: '700',
                lineHeight: '1.2',
                marginBottom: '24px',
                letterSpacing: '-0.01em',
                textAlign: deviceMode === 'mobile' ? 'center' : 'left',
              }}
            >
              Clear, Objective,<br />
              Function-Driven Design
            </h1>
            <p 
              style={{
                fontSize: responsive.fontSize.sm,
                lineHeight: '1.8',
                color: '#555',
                maxWidth: deviceMode === 'mobile' ? '100%' : '448px',
                margin: deviceMode === 'mobile' ? '0 auto 32px' : '0 0 32px',
                textAlign: deviceMode === 'mobile' ? 'center' : 'left',
              }}
            >
              Swiss International Typographic style emphasizes rigorous grid systems, sans-serif typography,
              and clear information communication. Design should be universal, timeless, and transcultural.
            </p>
            <div 
              style={{
                display: 'flex',
                flexDirection: deviceMode === 'mobile' ? 'column' : 'row',
                gap: deviceMode === 'mobile' ? '8px' : '16px',
                justifyContent: deviceMode === 'mobile' ? 'center' : 'flex-start',
              }}
            >
              <button 
                style={{
                  padding: deviceMode === 'mobile' ? '12px 16px' : '12px 24px',
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#333';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'black';
                }}
              >
                Explore Works
              </button>
              <button 
                style={{
                  padding: deviceMode === 'mobile' ? '12px 16px' : '12px 24px',
                  backgroundColor: 'transparent',
                  color: 'black',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  border: '2px solid black',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'black';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'black';
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Feature blocks */}
        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            marginBottom: '64px',
          }}
        >
          <div 
            style={{
              gridColumn: 'span 12',
              backgroundColor: 'black',
              color: 'white',
              padding: deviceMode === 'mobile' ? '16px' : deviceMode === 'tablet' ? '24px' : '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '200px',
            }}
          >
            <div>
              <div 
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#666',
                  marginBottom: '4px',
                }}
              >
                Principle 01
              </div>
              <div style={{ fontSize: deviceMode === 'mobile' ? '20px' : '24px', fontWeight: '700', marginBottom: '8px' }}>
                Grid System
              </div>
            </div>
            <div style={{ fontSize: '12px', color: '#888', letterSpacing: '0.05em' }}>
              GRID SYSTEM
            </div>
          </div>
          <div 
            style={{
              gridColumn: 'span 12',
              backgroundColor: '#E53935',
              color: 'white',
              padding: deviceMode === 'mobile' ? '16px' : deviceMode === 'tablet' ? '24px' : '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '200px',
            }}
          >
            <div>
              <div 
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '4px',
                }}
              >
                Principle 02
              </div>
              <div style={{ fontSize: deviceMode === 'mobile' ? '20px' : '24px', fontWeight: '700', marginBottom: '8px' }}>
                Sans Serif
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
              SANS-SERIF
            </div>
          </div>
          <div 
            style={{
              gridColumn: 'span 12',
              border: '2px solid black',
              padding: deviceMode === 'mobile' ? '16px' : deviceMode === 'tablet' ? '24px' : '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '200px',
            }}
          >
            <div>
              <div 
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#999',
                  marginBottom: '4px',
                }}
              >
                Principle 03
              </div>
              <div style={{ fontSize: deviceMode === 'mobile' ? '20px' : '24px', fontWeight: '700', marginBottom: '8px' }}>
                Negative Space
              </div>
            </div>
            <div style={{ fontSize: '12px', color: '#999', letterSpacing: '0.05em' }}>
              WHITE SPACE
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            marginBottom: '64px',
            padding: '48px 0',
            borderTop: '2px solid black',
            borderBottom: '2px solid black',
          }}
        >
          <div 
            style={{
              gridColumn: 'span 12',
              marginBottom: deviceMode === 'mobile' ? '32px' : '0',
            }}
          >
            <div 
              style={{
                fontSize: '10px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: '16px',
              }}
            >
              Why Swiss Design
            </div>
            <h2 
              style={{
                fontSize: deviceMode === 'mobile' ? '24px' : '32px',
                fontWeight: '700',
                lineHeight: '1.2',
                marginBottom: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              Universal Design<br />Principles
            </h2>
            <p 
              style={{
                fontSize: responsive.fontSize.sm,
                lineHeight: '1.8',
                color: '#555',
                maxWidth: '448px',
              }}
            >
              Our approach combines mathematical precision with visual clarity, creating designs that transcend cultural boundaries and stand the test of time.
            </p>
          </div>
          <div style={{ gridColumn: 'span 12' }}>
            <div 
              className="grid gap-8"
              style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr' }}
            >
              {[
                {
                  num: '01',
                  title: 'Grid Discipline',
                  desc: 'Every element aligns to a mathematical grid, ensuring visual harmony and structural integrity.',
                },
                {
                  num: '02',
                  title: 'Typography First',
                  desc: 'Clear hierarchy through type scale, weight, and spacing creates instant visual organization.',
                },
                {
                  num: '03',
                  title: 'Objective Clarity',
                  desc: 'Remove subjectivity, focus on function. Design serves content, not ego.',
                },
                {
                  num: '04',
                  title: 'Universal Language',
                  desc: 'Visual communication that works across cultures, languages, and contexts.',
                },
              ].map((item) => (
                <div key={item.num} style={{ display: 'flex', gap: '16px' }}>
                  <div 
                    style={{
                      flexShrink: 0,
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'black',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      fontWeight: '900',
                    }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p 
                      style={{
                        fontSize: responsive.fontSize.sm,
                        lineHeight: '1.6',
                        color: '#555',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            marginBottom: '64px',
          }}
        >
          <div style={{ gridColumn: 'span 12' }}>
            <div 
              style={{
                fontSize: '10px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: '32px',
                textAlign: 'center',
              }}
            >
              Seamless Integrations
            </div>
            <div 
              style={{
                border: '2px solid black',
                padding: '32px',
              }}
            >
              <div 
                className="grid gap-8"
                style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr 1fr' : '1fr 1fr 1fr 1fr' }}
              >
                {['Adobe', 'Figma', 'Sketch', 'XD'].map((tool) => (
                  <div 
                    key={tool} 
                    style={{ textAlign: 'center', cursor: 'pointer' }}
                    onMouseEnter={(e) => {
                      const div = e.currentTarget.querySelector('div');
                      if (div) {
                        (div as HTMLElement).style.color = '#0057FF';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const div = e.currentTarget.querySelector('div');
                      if (div) {
                        (div as HTMLElement).style.color = 'black';
                      }
                    }}
                  >
                    <div 
                      style={{
                        fontSize: '24px',
                        fontWeight: '900',
                        marginBottom: '8px',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {tool}
                    </div>
                    <div 
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: '#999',
                      }}
                    >
                      DESIGN TOOL
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Security */}
        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            marginBottom: '64px',
          }}
        >
          <div style={{ gridColumn: deviceMode === 'mobile' ? 'span 12' : 'span 8' }}>
            <div 
              style={{
                border: '2px solid black',
                padding: '32px',
              }}
            >
              <div 
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: '#999',
                  marginBottom: '16px',
                }}
              >
                Security & Reliability
              </div>
              <h2 
                style={{
                  fontSize: deviceMode === 'mobile' ? '24px' : '32px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  letterSpacing: '-0.01em',
                }}
              >
                Enterprise-Grade Security
              </h2>
              <p 
                style={{
                  fontSize: responsive.fontSize.sm,
                  lineHeight: '1.8',
                  color: '#555',
                  marginBottom: '24px',
                  maxWidth: '672px',
                }}
              >
                Swiss precision extends to our security infrastructure. End-to-end encryption, SOC 2 Type II compliance, and 99.9% uptime guarantee.
              </p>
              <div 
                className="grid gap-6"
                style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr 1fr' }}
              >
                <div>
                  <div style={{ fontSize: '30px', fontWeight: '900', marginBottom: '8px' }}>99.9%</div>
                  <div 
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: '#999',
                    }}
                  >
                    Uptime
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '30px', fontWeight: '900', marginBottom: '8px' }}>256-bit</div>
                  <div 
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: '#999',
                    }}
                  >
                    Encryption
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '30px', fontWeight: '900', marginBottom: '8px' }}>24/7</div>
                  <div 
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: '#999',
                    }}
                  >
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ gridColumn: deviceMode === 'mobile' ? 'span 12' : 'span 4' }}>
            <div 
              style={{
                backgroundColor: '#0057FF',
                color: 'white',
                padding: '32px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div 
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: '4px',
                  }}
                >
                  Compliance
                </div>
                <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>ISO 27001</div>
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
                CERTIFIED
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            marginBottom: '64px',
          }}
        >
          <div style={{ gridColumn: 'span 12' }}>
            <div 
              style={{
                fontSize: '10px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: '32px',
                textAlign: 'center',
              }}
            >
              Simple Pricing
            </div>
            <div 
              className="grid gap-4"
              style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr 1fr' }}
            >
              {[
                { name: 'Starter', price: 'Free', features: ['3 Projects', 'Basic Templates', 'Community Support'] },
                { name: 'Professional', price: '$29/mo', features: ['Unlimited Projects', 'Advanced Templates', 'Priority Support', 'Team Collaboration'], highlighted: true },
                { name: 'Enterprise', price: 'Custom', features: ['Custom Solutions', 'Dedicated Support', 'SLA Guarantee', 'White Label'] }
              ].map((plan, i) => (
                <div 
                  key={i} 
                  style={{
                    border: '2px solid black',
                    backgroundColor: plan.highlighted ? 'black' : 'transparent',
                    color: plan.highlighted ? 'white' : 'black',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div 
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: plan.highlighted ? 'rgba(255,255,255,0.6)' : '#999',
                        marginBottom: '8px',
                      }}
                    >
                      {plan.name.toUpperCase()}
                    </div>
                    <div 
                      style={{
                        fontSize: '30px',
                        fontWeight: '900',
                        marginBottom: '16px',
                      }}
                    >
                      {plan.price}
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {plan.features.map((feature) => (
                        <li 
                          key={feature} 
                          style={{
                            fontSize: responsive.fontSize.sm,
                            marginBottom: '8px',
                          }}
                        >
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    style={{
                      marginTop: '24px',
                      width: '100%',
                      padding: '12px',
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      backgroundColor: plan.highlighted ? 'white' : 'black',
                      color: plan.highlighted ? 'black' : 'white',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (plan.highlighted) {
                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                      } else {
                        e.currentTarget.style.backgroundColor = '#333';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = plan.highlighted ? 'white' : 'black';
                    }}
                  >
                    {plan.highlighted ? 'Start Free Trial' : 'Contact Sales'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div 
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            marginBottom: '64px',
          }}
        >
          <div style={{ 
            gridColumn: deviceMode === 'mobile' ? 'span 12' : 'span 8',
            gridColumnStart: deviceMode === 'mobile' ? 'auto' : '3',
          }}>
            <div 
              style={{
                fontSize: '10px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: '32px',
                textAlign: 'center',
              }}
            >
              Frequently Asked Questions
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { q: 'What makes Swiss design different?', a: 'Swiss design emphasizes clarity, grid systems, and objectivity. It removes decorative elements to focus purely on function and communication.' },
                { q: 'Can I switch plans anytime?', a: 'Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.' },
                { q: 'Do you offer custom templates?', a: 'Professional and Enterprise plans include custom template creation by our design team.' },
                { q: 'Is my data secure?', a: 'We use enterprise-grade security with 256-bit encryption, regular security audits, and full GDPR compliance.' }
              ].map((item, i) => (
                <div 
                  key={i} 
                  style={{
                    border: '2px solid black',
                    padding: '24px',
                  }}
                >
                  <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                    {item.q}
                  </h3>
                  <p 
                    style={{
                      fontSize: responsive.fontSize.sm,
                      lineHeight: '1.6',
                      color: '#555',
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12">
            <div className="border-2 border-black p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-4">Get Started</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-[-0.01em]">
                    Ready to Transform<br />Your Design Process?
                  </h2>
                  <p className="text-sm leading-[1.8] text-[#555] mb-6">
                    Join thousands of teams already using Swiss Design principles to create clearer, more effective communications.
                  </p>
                </div>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS"
                    className="w-full px-4 py-3 border-2 border-black text-sm font-medium placeholder-black/30 focus:outline-none focus:border-[#0057FF]"
                  />
                  <button className="w-full bg-black text-white px-6 py-3 text-xs font-bold tracking-wider uppercase hover:bg-[#333] transition-colors">
                    Start Free Trial
                  </button>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#999] text-center">
                    No credit card required • 14-day free trial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-12 gap-4 mb-12 py-8 border-t-2 border-b-2 border-black">
          {[
            { num: '1950', label: 'Origin Era' },
            { num: '12', label: 'Column Grid' },
            { num: '∞', label: 'Influence' },
            { num: '100%', label: 'Functionality' },
          ].map((item, i) => (
            <div key={i} className="col-span-6 sm:col-span-3 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">{item.num}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#999]">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#999]">
          <span>Basel · Zürich · Switzerland</span>
          <span>© 2024 Swiss Design</span>
        </footer>
      </div>
    </div>
  );
};
