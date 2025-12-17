import { useState } from 'react';
import { Wifi, AlertTriangle, CreditCard, Cpu, Database, ShieldAlert, Menu, X, ArrowRight } from 'lucide-react';

export const S06Cyberpunk = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div 
      style={{
        minHeight: '100%',
        backgroundColor: '#0a0a12',
        color: 'white',
        padding: deviceMode === 'mobile' ? '16px' : '24px',
        fontFamily: 'monospace',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 掃描線效果 */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.03,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.5) 2px, rgba(0,255,255,0.5) 4px)',
        }}
      />
      
      {/* 霓虹光暈 */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '25%',
          width: '384px',
          height: '384px',
          backgroundColor: 'rgba(6,182,212,0.2)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          right: '25%',
          width: '320px',
          height: '320px',
          backgroundColor: 'rgba(236,72,153,0.2)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }}
      />

      {/* Header */}
      <header 
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: deviceMode === 'mobile' ? '32px' : '40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative' }}>
            <div 
              style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(to bottom right, #22d3ee, #0891b2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              }}
            >
              <Cpu style={{ width: '20px', height: '20px', color: 'black' }} />
            </div>
            <div 
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                width: '12px',
                height: '12px',
                backgroundColor: '#ec4899',
                borderRadius: '50%',
                animation: 'pulse 2s infinite',
              }}
            />
          </div>
          <div>
            <span 
              style={{
                color: '#22d3ee',
                fontSize: '18px',
                fontWeight: '700',
                letterSpacing: '0.05em',
              }}
            >
              NEON//CORP
            </span>
            <div 
              style={{
                fontSize: '10px',
                color: 'rgba(34,211,238,0.5)',
              }}
            >
              SYSTEM v2.077
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav 
          style={{
            display: deviceMode === 'desktop' ? 'flex' : 'none',
            gap: '4px',
          }}
        >
          {[
            { label: '系統', color: 'pink' },
            { label: '資料', color: 'cyan' },
            { label: '連結', color: 'yellow' },
          ].map((item, i) => (
            <span 
              key={i}
              style={{
                padding: '8px 16px',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                border: '1px solid',
                cursor: 'default',
                borderColor: item.color === 'pink' ? 'rgba(236,72,153,0.3)' : item.color === 'cyan' ? 'rgba(34,211,238,0.3)' : 'rgba(250,204,21,0.3)',
                color: item.color === 'pink' ? '#ec4899' : item.color === 'cyan' ? '#22d3ee' : '#facc15',
              }}
            >
              [{item.label}]
            </span>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        {deviceMode === 'mobile' || deviceMode === 'tablet' && (
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'flex',
              padding: '8px',
              border: '1px solid rgba(34,211,238,0.3)',
              color: '#22d3ee',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(34,211,238,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {menuOpen ? <X style={{ width: '20px', height: '20px' }} /> : <Menu style={{ width: '20px', height: '20px' }} />}
          </button>
        )}
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div 
          style={{
            position: 'relative',
            zIndex: 20,
            marginBottom: '24px',
            border: '1px solid rgba(34,211,238,0.3)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {[
            { label: '系統', color: 'pink' },
            { label: '資料', color: 'cyan' },
            { label: '連結', color: 'yellow' },
          ].map((item, i) => (
            <span 
              key={i}
              style={{
                display: 'block',
                padding: '12px 16px',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottom: i < 2 ? '1px solid rgba(34,211,238,0.2)' : 'none',
                cursor: 'default',
                color: item.color === 'pink' ? '#ec4899' : item.color === 'cyan' ? '#22d3ee' : '#facc15',
              }}
            >
              [{item.label}]
            </span>
          ))}
        </div>
      )}

      {/* Hero */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          marginBottom: deviceMode === 'mobile' ? '32px' : '48px',
        }}
      >
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#ec4899',
            fontSize: '12px',
            marginBottom: '16px',
          }}
        >
          <span 
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#ec4899',
              animation: 'pulse 2s infinite',
            }}
          />
          <span 
            style={{
              fontSize: deviceMode === 'mobile' ? '10px' : '12px',
            }}
          >
            // SYSTEM_INITIALIZATION_COMPLETE
          </span>
        </div>
        <h1 
          style={{
            fontSize: deviceMode === 'mobile' ? '36px' : '48px',
            fontWeight: '900',
            marginBottom: '24px',
            lineHeight: '1.2',
          }}
        >
          <span 
            style={{
              color: '#22d3ee',
              filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.5))',
            }}
          >
            CYBER
          </span>
          <span 
            style={{
              color: '#ec4899',
              filter: 'drop-shadow(0 0 10px rgba(236,72,153,0.5))',
            }}
          >
            PUNK
          </span>
          <br />
          <span 
            style={{
              color: '#facc15',
              filter: 'drop-shadow(0 0 10px rgba(250,204,21,0.5))',
            }}
          >
            2077
          </span>
        </h1>
        <p 
          style={{
            color: 'white',
            fontSize: '14px',
            maxWidth: '512px',
            lineHeight: '1.6',
            marginBottom: '32px',
          }}
        >
          In the neon-lit night city, technology and humanity intertwine. High tech, low life.
          Welcome to the future, welcome to the dark.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button 
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(to right, #06b6d4, #22d3ee)',
              color: 'black',
              fontWeight: '700',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #22d3ee, #67e8f9)';
              const lastDiv = e.currentTarget.querySelector('div:last-child');
              if (lastDiv) {
                (lastDiv as HTMLElement).style.transform = 'rotate(90deg)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #06b6d4, #22d3ee)';
              const lastDiv = e.currentTarget.querySelector('div:last-child');
              if (lastDiv) {
                (lastDiv as HTMLElement).style.transform = 'rotate(0deg)';
              }
            }}
          >
            <span>&gt; Enter System</span>
            <div 
              style={{
                width: '16px',
                height: '16px',
                border: '2px solid black',
                transition: 'transform 0.2s ease',
              }}
            />
          </button>
          <button 
            style={{
              padding: '12px 24px',
              border: '1px solid rgba(236,72,153,0.5)',
              color: '#f472b6',
              fontSize: '14px',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(236,72,153,0.2)';
              e.currentTarget.style.borderColor = '#ec4899';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(236,72,153,0.5)';
            }}
          >
            &gt; Learn More_
          </button>
        </div>
      </section>

      {/* Stats Grid */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr 1fr',
          gap: '12px',
          marginBottom: '32px',
        }}
      >
        {[
          { icon: <Wifi style={{ width: '16px', height: '16px' }} />, label: 'Connection', value: 'ONLINE', color: 'emerald', border: 'rgba(16,185,129,0.3)' },
          { icon: <AlertTriangle style={{ width: '16px', height: '16px' }} />, label: 'Threat Level', value: 'HIGH', color: 'red', border: 'rgba(239,68,68,0.3)' },
          { icon: <CreditCard style={{ width: '16px', height: '16px' }} />, label: 'Credits', value: '¥89,420', color: 'yellow', border: 'rgba(250,204,21,0.3)' },
        ].map((item, i) => (
          <div 
            key={i} 
            style={{
              border: `1px solid ${item.border}`,
              padding: '16px',
              backgroundColor: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                color: '#d1d5db',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
            <div 
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: item.color === 'emerald' ? '#34d399' : item.color === 'red' ? '#f87171' : '#facc15',
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </section>

      {/* Value Proposition */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '12px',
          marginBottom: '32px',
        }}
      >
        <div 
          style={{
            gridColumn: 'span 12',
            border: '1px solid rgba(236,72,153,0.2)',
            backgroundColor: 'rgba(236,72,153,0.05)',
            backdropFilter: 'blur(4px)',
            padding: '24px',
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#ec4899',
              fontSize: '12px',
              marginBottom: '24px',
            }}
          >
            <Database style={{ width: '16px', height: '16px' }} />
            <span>// VALUE_PROPOSITION_MATRIX</span>
          </div>
          <div 
            className="grid gap-8"
            style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr' }}
          >
            <div>
              <h2 
                style={{
                  fontSize: deviceMode === 'mobile' ? '30px' : '36px',
                  fontWeight: '900',
                  marginBottom: '24px',
                }}
              >
                <span 
                  style={{
                    color: '#22d3ee',
                    filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.5))',
                  }}
                >
                  FUTURE
                </span>
                <br />
                <span 
                  style={{
                    color: '#ec4899',
                    filter: 'drop-shadow(0 0 10px rgba(236,72,153,0.5))',
                  }}
                >
                  PROOF
                </span>
                <br />
                <span 
                  style={{
                    color: '#facc15',
                    filter: 'drop-shadow(0 0 10px rgba(250,204,21,0.5))',
                  }}
                >
                  SYSTEM
                </span>
              </h2>
              <p 
                style={{
                  color: 'white',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  maxWidth: '512px',
                }}
              >
                Neural networks meet neon dreams. Our quantum-encrypted infrastructure 
                processes data at the speed of thought, protected by military-grade protocols.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'QUANTUM', value: '256-bit', color: 'cyan' },
                { label: 'LATENCY', value: '<1ms', color: 'pink' },
                { label: 'UPTIME', value: '99.99%', color: 'yellow' }
              ].map((item, i) => (
                <div 
                  key={i} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px',
                    border: '1px solid rgba(34,211,238,0.2)',
                    backgroundColor: 'rgba(34,211,238,0.05)',
                  }}
                >
                  <span 
                    style={{
                      color: '#22d3ee',
                      fontSize: '12px',
                      fontFamily: 'monospace',
                    }}
                  >
                    {item.label}
                  </span>
                  <span 
                    style={{
                      fontFamily: 'monospace',
                      fontWeight: '700',
                      color: item.color === 'cyan' ? '#22d3ee' : item.color === 'pink' ? '#ec4899' : '#facc15',
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '12px',
          marginBottom: '32px',
        }}
      >
        <div 
          style={{
            gridColumn: 'span 12',
            border: '1px solid rgba(34,211,238,0.2)',
            backgroundColor: 'rgba(34,211,238,0.05)',
            backdropFilter: 'blur(4px)',
            padding: '24px',
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#22d3ee',
              fontSize: '12px',
              marginBottom: '24px',
            }}
          >
            <Wifi style={{ width: '16px', height: '16px' }} />
            <span>// NEURAL_INTEGRATIONS</span>
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '24px' : '30px',
              fontWeight: '900',
              color: '#22d3ee',
              marginBottom: '32px',
            }}
          >
            Connected Ecosystem
          </h2>
          <div 
            className="grid gap-4"
            style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr 1fr' : '1fr 1fr 1fr 1fr' }}
          >
            {[
              { name: 'AWS', status: 'SYNCED', color: 'yellow' },
              { name: 'Azure', status: 'ONLINE', color: 'emerald' },
              { name: 'GCP', status: 'ACTIVE', color: 'cyan' },
              { name: 'Oracle', status: 'READY', color: 'pink' }
            ].map((item, i) => (
              <div 
                key={i} 
                style={{
                  border: '1px solid rgba(236,72,153,0.2)',
                  backgroundColor: 'rgba(236,72,153,0.05)',
                  padding: '16px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(236,72,153,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(236,72,153,0.05)';
                }}
              >
                <div 
                  style={{
                    fontSize: '18px',
                    fontWeight: '900',
                    color: 'white',
                    marginBottom: '8px',
                  }}
                >
                  {item.name}
                </div>
                <div 
                  style={{
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    color: item.color === 'yellow' ? '#facc15' : item.color === 'emerald' ? '#34d399' : item.color === 'cyan' ? '#22d3ee' : '#ec4899',
                  }}
                >
                  [{item.status}]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '12px',
          marginBottom: '32px',
        }}
      >
        <div 
          style={{
            gridColumn: deviceMode === 'mobile' ? 'span 12' : 'span 8',
            border: '1px solid rgba(250,204,21,0.2)',
            backgroundColor: 'rgba(250,204,21,0.05)',
            backdropFilter: 'blur(4px)',
            padding: '24px',
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#facc15',
              fontSize: '12px',
              marginBottom: '24px',
            }}
          >
            <ShieldAlert style={{ width: '16px', height: '16px' }} />
            <span>// SECURITY_PROTOCOLS</span>
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '24px' : '30px',
              fontWeight: '900',
              color: '#facc15',
              marginBottom: '24px',
            }}
          >
            Quantum Security Layer
          </h2>
          <p 
            style={{
              color: 'white',
              fontSize: '14px',
              lineHeight: '1.6',
              maxWidth: '672px',
              marginBottom: '32px',
            }}
          >
            Military-grade encryption meets quantum computing. Your data is protected 
            by algorithms that don't exist yet. We're already in tomorrow.
          </p>
          <div 
            className="grid gap-6"
            style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr 1fr' }}
          >
            <div>
              <div 
                style={{
                  fontSize: '30px',
                  fontWeight: '900',
                  color: '#22d3ee',
                  marginBottom: '8px',
                }}
              >
                AES-256
              </div>
              <div 
                style={{
                  fontSize: '10px',
                  fontFamily: 'monospace',
                  color: '#d1d5db',
                }}
              >
                ENCRYPTION
              </div>
            </div>
            <div>
              <div 
                style={{
                  fontSize: '30px',
                  fontWeight: '900',
                  color: '#ec4899',
                  marginBottom: '8px',
                }}
              >
                ZERO
              </div>
              <div 
                style={{
                  fontSize: '10px',
                  fontFamily: 'monospace',
                  color: '#d1d5db',
                }}
              >
                TRUST
              </div>
            </div>
            <div>
              <div 
                style={{
                  fontSize: '30px',
                  fontWeight: '900',
                  color: '#facc15',
                  marginBottom: '8px',
                }}
              >
                ∞
              </div>
              <div 
                style={{
                  fontSize: '10px',
                  fontFamily: 'monospace',
                  color: '#d1d5db',
                }}
              >
                PROTECTION
              </div>
            </div>
          </div>
        </div>
        <div 
          style={{
            gridColumn: deviceMode === 'mobile' ? 'span 12' : 'span 4',
            border: '1px solid rgba(236,72,153,0.2)',
            backgroundColor: 'rgba(236,72,153,0.05)',
            backdropFilter: 'blur(4px)',
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
                color: '#f472b6',
                fontFamily: 'monospace',
                marginBottom: '16px',
              }}
            >
              [THREAT_LEVEL]
            </div>
            <div 
              style={{
                fontSize: '24px',
                fontWeight: '900',
                color: '#f87171',
                marginBottom: '8px',
              }}
            >
              CRITICAL
            </div>
          </div>
          <div 
            style={{
              fontSize: '12px',
              color: 'rgba(244,114,182,0.6)',
              fontFamily: 'monospace',
            }}
          >
            ALWAYS_ARMED
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '12px',
          marginBottom: '32px',
        }}
      >
        <div 
          style={{
            gridColumn: 'span 12',
            border: '1px solid rgba(34,211,238,0.2)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            backdropFilter: 'blur(4px)',
            padding: '24px',
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#22d3ee',
              fontSize: '12px',
              marginBottom: '24px',
            }}
          >
            <CreditCard style={{ width: '16px', height: '16px' }} />
            <span>// PRICING_MATRIX</span>
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '24px' : '30px',
              fontWeight: '900',
              color: '#22d3ee',
              marginBottom: '32px',
            }}
          >
            Access Tiers
          </h2>
          <div 
            className="grid gap-4"
            style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr 1fr' }}
          >
            {[
              { name: 'SHADOW', price: '¥9,999', features: ['Basic Access', '1 Core', '100GB Storage'], tier: false },
              { name: 'NEON', price: '¥99,999', features: ['Full Access', '8 Cores', '1TB Storage', 'Priority Support'], tier: true },
              { name: 'CYBER', price: '¥999,999', features: ['God Mode', '∞ Cores', '∞ Storage', 'Dedicated Team'], tier: false }
            ].map((plan, i) => (
              <div 
                key={i} 
                style={{
                  border: plan.tier ? '2px solid #22d3ee' : '1px solid #374151',
                  backgroundColor: plan.tier ? 'rgba(34,211,238,0.1)' : 'rgba(0,0,0,0.5)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div 
                    style={{
                      fontSize: '12px',
                      color: '#22d3ee',
                      fontFamily: 'monospace',
                      marginBottom: '8px',
                    }}
                  >
                    [TIER_{plan.name}]
                  </div>
                  <div 
                    style={{
                      fontSize: '30px',
                      fontWeight: '900',
                      marginBottom: '16px',
                      color: plan.tier ? '#22d3ee' : 'white',
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
                          color: '#d1d5db',
                          fontFamily: 'monospace',
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
                    fontFamily: 'monospace',
                    backgroundColor: plan.tier ? '#22d3ee' : 'transparent',
                    color: plan.tier ? 'black' : 'white',
                    border: plan.tier ? 'none' : '1px solid #4b5563',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (plan.tier) {
                      e.currentTarget.style.backgroundColor = '#67e8f9';
                    } else {
                      e.currentTarget.style.borderColor = '#22d3ee';
                      e.currentTarget.style.color = '#22d3ee';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.tier) {
                      e.currentTarget.style.backgroundColor = '#22d3ee';
                    } else {
                      e.currentTarget.style.borderColor = '#4b5563';
                      e.currentTarget.style.color = 'white';
                    }
                  }}
                >
                  {plan.tier ? '[INITIATE]' : '[UPGRADE]'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '12px',
          marginBottom: '32px',
        }}
      >
        <div 
          style={{
            gridColumn: 'span 12',
            border: '1px solid rgba(236,72,153,0.2)',
            backgroundColor: 'rgba(236,72,153,0.05)',
            backdropFilter: 'blur(4px)',
            padding: '24px',
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#ec4899',
              fontSize: '12px',
              marginBottom: '24px',
            }}
          >
            <AlertTriangle style={{ width: '16px', height: '16px' }} />
            <span>// FREQUENT_QUERIES</span>
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '24px' : '30px',
              fontWeight: '900',
              color: '#ec4899',
              marginBottom: '32px',
            }}
          >
            Data Stream
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { q: 'Is this real?', a: 'Reality is subjective. Our system is objectively superior.' },
              { q: 'Can I trust you?', a: 'Trust is a vulnerability. We offer verifiable results.' },
              { q: 'What about privacy?', a: 'Privacy is obsolete. We offer transparency instead.' },
              { q: 'How do I start?', a: 'You already have. The system detected you before you arrived.' }
            ].map((item, i) => (
              <div 
                key={i} 
                style={{
                  border: '1px solid rgba(34,211,238,0.2)',
                  backgroundColor: 'rgba(34,211,238,0.05)',
                  padding: '16px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(34,211,238,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(34,211,238,0.05)';
                }}
              >
                <h3 
                  style={{
                    fontSize: '14px',
                    fontWeight: '900',
                    color: '#22d3ee',
                    marginBottom: '8px',
                    fontFamily: 'monospace',
                  }}
                >
                  &gt; {item.q}
                </h3>
                <p 
                  style={{
                    fontSize: '12px',
                    color: '#d1d5db',
                    fontFamily: 'monospace',
                    lineHeight: '1.6',
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '12px',
          marginBottom: '32px',
        }}
      >
        <div 
          style={{
            gridColumn: 'span 12',
            border: '2px solid rgba(250,204,21,0.3)',
            backgroundColor: 'rgba(250,204,21,0.05)',
            backdropFilter: 'blur(4px)',
            padding: '24px',
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#facc15',
              fontSize: '12px',
              marginBottom: '24px',
            }}
          >
            <Wifi style={{ width: '16px', height: '16px' }} />
            <span>// ESTABLISH_CONNECTION</span>
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
                  fontSize: deviceMode === 'mobile' ? '24px' : '30px',
                  fontWeight: '900',
                  color: '#facc15',
                  marginBottom: '24px',
                }}
              >
                Join the Network
              </h2>
              <p 
                style={{
                  color: 'white',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                }}
              >
                The matrix is calling. Will you answer? 
                Upload your consciousness. Download the future.
              </p>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  color: '#facc15',
                  fontFamily: 'monospace',
                }}
              >
                <span 
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#facc15',
                    animation: 'pulse 2s infinite',
                  }}
                />
                <span>CONNECTION_ACTIVE</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input 
                type="email" 
                placeholder="NEURAL_ID@MATRIX.NET"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(34,211,238,0.3)',
                  color: '#22d3ee',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                }}
              />
              <button 
                style={{
                  width: '100%',
                  background: 'linear-gradient(to right, #06b6d4, #ec4899)',
                  color: 'black',
                  fontWeight: '900',
                  fontSize: '14px',
                  padding: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #22d3ee, #f472b6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #06b6d4, #ec4899)';
                }}
              >
                <span>[SYNCHRONIZE]</span>
                <ArrowRight style={{ width: '16px', height: '16px' }} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        style={{
          position: 'relative',
          zIndex: 10,
          fontSize: '12px',
          color: '#d1d5db',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(34,211,238,0.2)',
          paddingTop: '16px',
        }}
      >
        <span>NIGHT_CITY.SYS // NODE_7734</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span 
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#22d3ee',
              borderRadius: '50%',
              animation: 'pulse 2s infinite',
            }}
          />
          <span style={{ color: '#22d3ee' }}>CONNECTED</span>
        </div>
      </footer>
    </div>
  );
};
