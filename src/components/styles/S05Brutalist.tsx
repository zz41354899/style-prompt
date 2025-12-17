import { useState } from 'react';
import { ArrowRight, X, Menu } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S05Brutalist = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const responsive = useResponsive(deviceMode);

  return (
    <div 
      className="min-h-full font-mono"
      style={{
        backgroundColor: '#F5F5F0',
        color: 'black',
        padding: deviceMode === 'mobile' ? '12px' : '16px',
        fontSize: responsive.fontSize.base,
      }}
    >
      {/* Header */}
      <header 
        style={{
          border: '3px solid black',
          backgroundColor: 'white',
          marginBottom: deviceMode === 'mobile' ? '12px' : '16px',
        }}
      >
        <div 
          className="flex justify-between items-center"
          style={{ padding: '16px' }}
        >
          <div className="flex items-center gap-3">
            <div 
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <span 
              style={{
                fontSize: deviceMode === 'mobile' ? '18px' : '20px',
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '-0.05em',
              }}
            >
              BRUTAL
            </span>
          </div>
          
          {/* Desktop Nav */}
          <nav 
            className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-1`}
            style={{ gap: '4px' }}
          >
            {['Home', 'Works', 'About', 'Contact'].map((item, i) => (
              <span 
                key={i}
                className="cursor-default"
                style={{
                  padding: '8px 16px',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                }}
              >
                {item}
              </span>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          {responsive.nav.showMobile && (
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
              style={{
                width: '40px',
                height: '40px',
                border: '3px solid black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: menuOpen ? 'black' : 'transparent',
                color: menuOpen ? 'white' : 'black',
                transition: 'all 0.2s ease',
              }}
            >
              {menuOpen ? <X className="w-5 h-5" strokeWidth={3} /> : <Menu className="w-5 h-5" strokeWidth={3} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div 
            className="lg:hidden"
            style={{
              borderTop: '3px solid black',
            }}
          >
            {['Home', 'Works', 'About', 'Contact'].map((item, i) => (
              <span 
                key={i}
                className="block cursor-default"
                style={{
                  padding: '12px 16px',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <div 
        className="grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          marginBottom: deviceMode === 'mobile' ? '12px' : '16px',
        }}
      >
        <div 
          style={{
            gridColumn: deviceMode === 'mobile' ? 'span 12' : 'span 7',
            border: '3px solid black',
            backgroundColor: '#FF4D4D',
            padding: deviceMode === 'mobile' ? '24px' : '32px',
            minHeight: deviceMode === 'mobile' ? '280px' : '320px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div 
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                fontWeight: '700',
                marginBottom: '16px',
                color: 'rgba(0,0,0,0.6)',
              }}
            >
              [Manifesto 001]
            </div>
            <h1 
              style={{
                fontSize: deviceMode === 'mobile' ? '48px' : '60px',
                fontWeight: '900',
                textTransform: 'uppercase',
                lineHeight: '0.9',
                letterSpacing: '-0.05em',
                marginBottom: '24px',
              }}
            >
              Brutalist<br />Design
            </h1>
          </div>
          <div 
            className="flex items-end justify-between"
            style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}
          >
            <p 
              style={{
                fontSize: responsive.fontSize.sm,
                fontWeight: '700',
                textTransform: 'uppercase',
                maxWidth: '256px',
                lineHeight: '1.5',
              }}
            >
              RAW. HONEST. UNPOLISHED.<br />
              NO BULLSHIT DESIGN.
            </p>
            <ArrowRight 
              style={{ 
                width: deviceMode === 'mobile' ? '40px' : '48px', 
                height: deviceMode === 'mobile' ? '40px' : '48px' 
              }} 
              strokeWidth={3} 
            />
          </div>
        </div>
        
        <div 
          style={{
            gridColumn: deviceMode === 'mobile' ? 'span 12' : 'span 5',
            display: 'flex',
            flexDirection: 'column',
            gap: deviceMode === 'mobile' ? '12px' : '16px',
          }}
        >
          <div 
            style={{
              flex: 1,
              border: '3px solid black',
              backgroundColor: '#00FF66',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '120px',
            }}
          >
            <div 
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                fontWeight: '700',
                color: 'rgba(0,0,0,0.6)',
              }}
            >
              [Function 001]
            </div>
            <div>
              <div 
                style={{
                  fontSize: deviceMode === 'mobile' ? '24px' : '30px',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                No Decoration
              </div>
              <div 
                style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: 'rgba(0,0,0,0.6)',
                }}
              >
                NO DECORATION
              </div>
            </div>
          </div>
          <div 
            style={{
              flex: 1,
              border: '3px solid black',
              backgroundColor: '#FFFF00',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '120px',
            }}
          >
            <div 
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                fontWeight: '700',
                color: 'rgba(0,0,0,0.6)',
              }}
            >
              [Function 002]
            </div>
            <div>
              <div 
                style={{
                  fontSize: deviceMode === 'mobile' ? '24px' : '30px',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                Raw Materials
              </div>
              <div 
                style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: 'rgba(0,0,0,0.6)',
                }}
              >
                RAW MATERIALS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div 
        className="grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          marginBottom: deviceMode === 'mobile' ? '12px' : '16px',
        }}
      >
        <div 
          style={{
            gridColumn: 'span 12',
            border: '3px solid black',
            backgroundColor: 'white',
            padding: deviceMode === 'mobile' ? '24px' : '32px',
          }}
        >
          <div 
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              fontWeight: '900',
              color: 'rgba(0,0,0,0.6)',
              marginBottom: '24px',
            }}
          >
            [VALUE_PROPOSITION_001]
          </div>
          <div 
            className="grid gap-8"
            style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr' }}
          >
            <div>
              <h2 
                style={{
                  fontSize: deviceMode === 'mobile' ? '36px' : '48px',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  lineHeight: '0.9',
                  marginBottom: '24px',
                }}
              >
                NO BULLSHIT<br />DESIGN
              </h2>
              <p 
                style={{
                  fontSize: responsive.fontSize.sm,
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  lineHeight: '1.5',
                  color: 'rgba(0,0,0,0.8)',
                }}
              >
                We strip away the unnecessary. What remains is pure function. 
                No animations. No gradients. No compromises. Just brutal honesty.
              </p>
            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '16px',
              }}
            >
              {[
                { num: '01', text: 'STRUCTURE OVER STYLE' },
                { num: '02', text: 'FUNCTION OVER FORM' },
                { num: '03', text: 'TRUTH OVER TRENDS' },
              ].map((item) => (
                <div 
                  key={item.num}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div 
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: 'black',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '900',
                    }}
                  >
                    {item.num}
                  </div>
                  <span style={{ fontSize: responsive.fontSize.sm, fontWeight: '700' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div 
        className="grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          marginBottom: deviceMode === 'mobile' ? '12px' : '16px',
        }}
      >
        <div 
          style={{
            gridColumn: 'span 12',
            border: '3px solid black',
            backgroundColor: 'white',
            padding: deviceMode === 'mobile' ? '24px' : '32px',
          }}
        >
          <div 
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              fontWeight: '900',
              color: 'rgba(0,0,0,0.6)',
              marginBottom: '24px',
            }}
          >
            [FEATURES_001]
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '30px' : '36px',
              fontWeight: '900',
              textTransform: 'uppercase',
              lineHeight: '0.9',
              marginBottom: '32px',
            }}
          >
            What You Get
          </h2>
          <div 
            className="grid gap-6"
            style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr' }}
          >
            {[
              { title: 'RAW INTERFACE', desc: 'No polish. Just function. Pure unfiltered design.' },
              { title: 'BRUTAL GRIDS', desc: 'Mathematical precision. No exceptions.' },
              { title: 'MONOCHROME ONLY', desc: 'Black. White. Nothing else needed.' },
              { title: 'ZERO ANIMATION', desc: 'Static. Stable. Reliable. No motion sickness.' },
              { title: 'SYSTEM FONTS', desc: 'What you have is what you get. No downloads.' },
              { title: 'INSTANT LOADS', desc: 'No bloat. No waiting. Just content.' }
            ].map((feature, i) => (
              <div 
                key={i} 
                style={{
                  border: '2px solid black',
                  padding: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'black';
                  e.currentTarget.style.color = 'white';
                  const lastDiv = e.currentTarget.querySelector('div:last-child');
                  if (lastDiv) {
                    (lastDiv as HTMLElement).style.color = 'rgba(255,255,255,0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'black';
                  const lastDiv = e.currentTarget.querySelector('div:last-child');
                  if (lastDiv) {
                    (lastDiv as HTMLElement).style.color = 'rgba(0,0,0,0.6)';
                  }
                }}
              >
                <div 
                  style={{
                    fontSize: '18px',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  {feature.title}
                </div>
                <div 
                  style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: 'rgba(0,0,0,0.6)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {feature.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div 
        className="grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          marginBottom: deviceMode === 'mobile' ? '12px' : '16px',
        }}
      >
        <div 
          style={{
            gridColumn: 'span 12',
            border: '3px solid black',
            backgroundColor: '#FF4D4D',
            padding: deviceMode === 'mobile' ? '24px' : '32px',
          }}
        >
          <div 
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              fontWeight: '900',
              color: 'rgba(0,0,0,0.6)',
              marginBottom: '24px',
            }}
          >
            [INTEGRATIONS_001]
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '30px' : '36px',
              fontWeight: '900',
              textTransform: 'uppercase',
              lineHeight: '0.9',
              marginBottom: '32px',
            }}
          >
            We Work With Nothing
          </h2>
          <p 
            style={{
              fontSize: responsive.fontSize.sm,
              fontWeight: '700',
              textTransform: 'uppercase',
              lineHeight: '1.5',
              maxWidth: '672px',
              marginBottom: '32px',
            }}
          >
            NO APIS. NO PLUGINS. NO ECOSYSTEM. STANDALONE FOREVER.
          </p>
          <div 
            className="grid gap-4"
            style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr 1fr' : '1fr 1fr 1fr 1fr' }}
          >
            {['NONE', 'ZERO', 'NULL', 'VOID'].map((item) => (
              <div 
                key={item} 
                style={{
                  border: '2px solid black',
                  backgroundColor: 'white',
                  padding: '16px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: '900' }}>{item}</div>
                <div 
                  style={{
                    fontSize: '10px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: 'rgba(0,0,0,0.6)',
                  }}
                >
                  INTEGRATION
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security */}
      <div 
        className="grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          marginBottom: deviceMode === 'mobile' ? '12px' : '16px',
        }}
      >
        <div 
          style={{
            gridColumn: deviceMode === 'mobile' ? 'span 12' : 'span 8',
            border: '3px solid black',
            backgroundColor: 'white',
            padding: deviceMode === 'mobile' ? '24px' : '32px',
          }}
        >
          <div 
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              fontWeight: '900',
              color: 'rgba(0,0,0,0.6)',
              marginBottom: '24px',
            }}
          >
            [SECURITY_001]
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '30px' : '36px',
              fontWeight: '900',
              textTransform: 'uppercase',
              lineHeight: '0.9',
              marginBottom: '24px',
            }}
          >
            BRUTAL SECURITY
          </h2>
          <p 
            style={{
              fontSize: responsive.fontSize.sm,
              fontWeight: '700',
              textTransform: 'uppercase',
              lineHeight: '1.5',
              marginBottom: '32px',
            }}
          >
            No encryption. No authentication. No protection. 
            If someone wants in, they get in. Total transparency.
          </p>
          <div 
            className="grid gap-4"
            style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: '900', marginBottom: '8px' }}>0%</div>
              <div 
                style={{
                  fontSize: '10px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: 'rgba(0,0,0,0.6)',
                }}
              >
                ENCRYPTION
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: '900', marginBottom: '8px' }}>OPEN</div>
              <div 
                style={{
                  fontSize: '10px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: 'rgba(0,0,0,0.6)',
                }}
              >
                ACCESS
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: '900', marginBottom: '8px' }}>ALL</div>
              <div 
                style={{
                  fontSize: '10px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: 'rgba(0,0,0,0.6)',
                }}
              >
                DATA
              </div>
            </div>
          </div>
        </div>
        <div 
          style={{
            gridColumn: deviceMode === 'mobile' ? 'span 12' : 'span 4',
            border: '3px solid black',
            backgroundColor: 'black',
            color: 'white',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div 
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                fontWeight: '900',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '16px',
              }}
            >
              [COMPLIANCE]
            </div>
            <div className="text-2xl font-black mb-2">NONE</div>
          </div>
          <div className="text-xs font-bold uppercase text-white/60">NO CERTIFICATION</div>
        </div>
      </div>

      {/* Pricing */}
      <div 
        className="grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          marginBottom: deviceMode === 'mobile' ? '12px' : '16px',
        }}
      >
        <div 
          style={{
            gridColumn: 'span 12',
            border: '3px solid black',
            backgroundColor: 'white',
            padding: deviceMode === 'mobile' ? '24px' : '32px',
          }}
        >
          <div 
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              fontWeight: '900',
              color: 'rgba(0,0,0,0.6)',
              marginBottom: '24px',
            }}
          >
            [PRICING_001]
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '30px' : '36px',
              fontWeight: '900',
              textTransform: 'uppercase',
              lineHeight: '0.9',
              marginBottom: '32px',
            }}
          >
            BRUTAL PRICING
          </h2>
          <div 
            className="grid gap-3"
            style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr 1fr' }}
          >
            {[
              { name: 'BASIC', price: 'FREE', features: ['1 Project', 'Black & White', 'No Support'], brutal: false },
              { name: 'BRUTAL', price: '$99', features: ['Infinite Projects', 'Black & White', 'No Support'], brutal: true },
              { name: 'ULTIMATE', price: '$999', features: ['Everything', 'Black & White', 'Still No Support'], brutal: false }
            ].map((plan, i) => (
              <div 
                key={i} 
                style={{
                  border: '3px solid black',
                  backgroundColor: plan.brutal ? 'black' : 'white',
                  color: plan.brutal ? 'white' : 'black',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div 
                    style={{
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      fontWeight: '900',
                      marginBottom: '8px',
                    }}
                  >
                    {plan.name}
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
                          fontSize: '12px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
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
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    backgroundColor: plan.brutal ? 'white' : 'black',
                    color: plan.brutal ? 'black' : 'white',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (plan.brutal) {
                      e.currentTarget.style.backgroundColor = '#f3f4f6';
                    } else {
                      e.currentTarget.style.backgroundColor = '#333';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = plan.brutal ? 'white' : 'black';
                  }}
                >
                  {plan.brutal ? 'PAY NOW' : 'SIGN UP'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div 
        className="grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          marginBottom: deviceMode === 'mobile' ? '12px' : '16px',
        }}
      >
        <div 
          style={{
            gridColumn: 'span 12',
            border: '3px solid black',
            backgroundColor: 'white',
            padding: deviceMode === 'mobile' ? '24px' : '32px',
          }}
        >
          <div 
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              fontWeight: '900',
              color: 'rgba(0,0,0,0.6)',
              marginBottom: '24px',
            }}
          >
            [FAQ_001]
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '30px' : '36px',
              fontWeight: '900',
              textTransform: 'uppercase',
              lineHeight: '0.9',
              marginBottom: '32px',
            }}
          >
            Questions? Too Bad.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: 'WHY SO BRUTAL?', a: 'Because beauty is a lie. Function is truth.' },
              { q: 'NO SUPPORT REALLY?', a: 'Yes. No support. Figure it out yourself.' },
              { q: 'CAN I GET A REFUND?', a: 'No. All sales are final. Forever.' },
              { q: 'WHY NO FEATURES?', a: 'Features are bloat. We offer purity.' }
            ].map((item, i) => (
              <div 
                key={i} 
                style={{
                  border: '2px solid black',
                  padding: '16px',
                }}
              >
                <h3 
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    marginBottom: '8px',
                  }}
                >
                  {item.q}
                </h3>
                <p 
                  style={{
                    fontSize: responsive.fontSize.sm,
                    lineHeight: '1.6',
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
      <div 
        className="grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          marginBottom: deviceMode === 'mobile' ? '12px' : '16px',
        }}
      >
        <div 
          style={{
            gridColumn: 'span 12',
            border: '3px solid black',
            backgroundColor: '#FFFF00',
            padding: deviceMode === 'mobile' ? '24px' : '32px',
          }}
        >
          <div 
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              fontWeight: '900',
              color: 'rgba(0,0,0,0.6)',
              marginBottom: '24px',
            }}
          >
            [CONTACT_001]
          </div>
          <div 
            className="grid gap-8"
            style={{ 
              gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr',
              alignItems: 'center',
            }}
          >
            <div>
              <h2 
                style={{
                  fontSize: deviceMode === 'mobile' ? '30px' : '36px',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  lineHeight: '0.9',
                  marginBottom: '24px',
                }}
              >
                Still Want In?
              </h2>
              <p 
                style={{
                  fontSize: responsive.fontSize.sm,
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  lineHeight: '1.5',
                  color: 'rgba(0,0,0,0.8)',
                }}
              >
                FINE. EMAIL US. MIGHT RESPOND. MIGHT NOT.
                NO GUARANTEES. NO PROMISES. JUST TRY.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid black',
                  backgroundColor: 'white',
                  fontSize: '14px',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  color: 'black',
                }}
              />
              <button 
                style={{
                  width: '100%',
                  backgroundColor: 'black',
                  color: 'white',
                  padding: '12px 24px',
                  fontSize: '12px',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#333';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'black';
                }}
              >
                <span>SUBMIT</span>
                <ArrowRight style={{ width: '16px', height: '16px' }} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div 
        className="grid gap-3"
        style={{
          gridTemplateColumns: deviceMode === 'mobile' ? '1fr 1fr' : '1fr 1fr 1fr 1fr',
          marginBottom: deviceMode === 'mobile' ? '12px' : '16px',
        }}
      >
        {[
          { num: '01', label: 'Concrete', en: 'CONCRETE' },
          { num: '02', label: 'Steel', en: 'STEEL' },
          { num: '03', label: 'Glass', en: 'GLASS' },
          { num: '04', label: 'Truth', en: 'TRUTH' },
        ].map((item, i) => (
          <div 
            key={i} 
            style={{
              border: '3px solid black',
              backgroundColor: 'white',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = 'white';
              const lastDiv = e.currentTarget.querySelector('div:last-child');
              if (lastDiv) {
                (lastDiv as HTMLElement).style.color = 'rgba(255,255,255,0.4)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = 'black';
              const lastDiv = e.currentTarget.querySelector('div:last-child');
              if (lastDiv) {
                (lastDiv as HTMLElement).style.color = 'rgba(0,0,0,0.4)';
              }
            }}
          >
            <div style={{ fontSize: responsive.fontSize['4xl'], fontWeight: '900', marginBottom: '8px' }}>
              {item.num}
            </div>
            <div style={{ fontSize: responsive.fontSize.sm, fontWeight: '900', textTransform: 'uppercase' }}>
              {item.label}
            </div>
            <div 
              style={{
                fontSize: '10px',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.4)',
                marginTop: '4px',
                transition: 'color 0.2s ease',
              }}
            >
              {item.en}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div 
        style={{
          border: '3px solid black',
          backgroundColor: 'black',
          color: 'white',
          padding: deviceMode === 'mobile' ? '16px' : '24px',
          marginBottom: deviceMode === 'mobile' ? '12px' : '16px',
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: deviceMode === 'mobile' ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: deviceMode === 'mobile' ? 'flex-start' : 'center',
            gap: '16px',
          }}
        >
          <div>
            <div 
              style={{
                fontSize: '10px',
                textTransform: 'uppercase',
                fontWeight: '700',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '8px',
              }}
            >
              &gt;&gt; Call to Action_
            </div>
            <div 
              style={{
                fontSize: deviceMode === 'mobile' ? '20px' : '30px',
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '-0.025em',
              }}
            >
              Experience Brutal Beauty Now
            </div>
          </div>
          <button 
            style={{
              border: '3px solid white',
              padding: deviceMode === 'mobile' ? '12px 24px' : '16px 32px',
              fontWeight: '900',
              textTransform: 'uppercase',
              fontSize: '14px',
              letterSpacing: '0.05em',
              backgroundColor: 'transparent',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              width: deviceMode === 'mobile' ? '100%' : 'auto',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            <span>Enter</span>
            <ArrowRight style={{ width: '20px', height: '20px' }} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer 
        style={{
          display: 'flex',
          flexDirection: deviceMode === 'mobile' ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
          fontSize: '10px',
          textTransform: 'uppercase',
          fontWeight: '700',
          color: 'rgba(0,0,0,0.6)',
        }}
      >
        <span>© 2024 BRUTAL.IST</span>
        <span style={{ display: deviceMode === 'mobile' ? 'none' : 'block' }}>
          NO COOKIES · NO TRACKING · NO BS
        </span>
        <span>V.1.0.0</span>
      </footer>
    </div>
  );
};
