import { Play, Radio, Disc3, Sparkles, Zap, Shield, HelpCircle, Mail, ChevronRight, Star, Check, TrendingUp, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const S07Synthwave = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div 
      style={{
        minHeight: '100%',
        color: 'white',
        padding: deviceMode === 'mobile' ? '16px' : '32px',
        fontFamily: 'sans-serif',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #1a0a2e 0%, #16213e 40%, #0f3460 100%)',
      }}
    >
      {/* 太陽 */}
      <div 
        style={{
          position: 'absolute',
          top: '64px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: deviceMode === 'mobile' ? '128px' : '224px',
          height: deviceMode === 'mobile' ? '128px' : '224px',
        }}
      >
        <div 
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            position: 'relative',
            background: 'linear-gradient(180deg, #ff6b6b 0%, #feca57 40%, #ff9ff3 100%)',
            boxShadow: '0 0 80px rgba(255,107,107,0.6), 0 0 120px rgba(255,107,107,0.3)',
          }}
        >
          {/* 太陽條紋 */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                backgroundColor: '#1a0a2e',
                height: `${4 + i * 2}px`,
                bottom: `${15 + i * 18}%`,
                opacity: 0.8,
              }} 
            />
          ))}
        </div>
      </div>

      {/* 透視網格地板 */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '224px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,0,255,0.15) 100%)',
          backgroundImage: `
            linear-gradient(90deg, rgba(255,0,255,0.4) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,0,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 30px',
          transform: 'perspective(300px) rotateX(65deg)',
          transformOrigin: 'bottom',
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
          marginBottom: deviceMode === 'mobile' ? '40px' : '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Disc3 
            style={{ 
              width: deviceMode === 'mobile' ? '24px' : '32px', 
              height: deviceMode === 'mobile' ? '24px' : '32px', 
              color: '#f472b6',
              animation: 'spin 3s linear infinite',
            }} 
          />
          <span 
            style={{
              fontSize: deviceMode === 'mobile' ? '18px' : '24px',
              fontWeight: '900',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textShadow: '0 0 20px #ff6b6b, 0 0 40px #ff6b6b',
            }}
          >
            SYNTHWAVE
          </span>
        </div>
        <nav 
          style={{
            display: deviceMode === 'desktop' ? 'flex' : 'none',
            gap: '32px',
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}
        >
          {['Home', 'Music', 'About'].map((item, i) => (
            <span key={i} style={{ cursor: 'default' }}>
              {item}
            </span>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        {deviceMode === 'mobile' || deviceMode === 'tablet' && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(255,107,107,0.5)',
              borderRadius: '4px',
              padding: '8px',
              cursor: 'pointer',
              color: '#ff6b6b',
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div 
          style={{
            borderBottom: '1px solid rgba(255,107,107,0.3)',
            padding: '16px',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          {['Home', 'Music', 'About'].map((item, i) => (
            <div 
              key={i}
              style={{
                padding: '12px 0',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#ff6b6b',
                cursor: 'default',
                borderBottom: i < 2 ? '1px solid rgba(255,107,107,0.2)' : 'none',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Hero */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          marginBottom: deviceMode === 'mobile' ? '40px' : '80px',
          paddingTop: deviceMode === 'mobile' ? '16px' : '32px',
        }}
      >
        <div 
          style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            color: 'rgba(244,114,182,0.6)',
            marginBottom: '16px',
          }}
        >
          ▲ RETRO FUTURE ▲
        </div>
        <h1 
          style={{
            fontSize: deviceMode === 'mobile' ? '36px' : '84px',
            fontWeight: '900',
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '-0.025em',
            background: 'linear-gradient(90deg, #ff6b6b, #feca57, #ff9ff3, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Retro Future
        </h1>
        <p 
          style={{
            color: 'rgba(216,180,254,0.8)',
            maxWidth: '512px',
            margin: '0 auto',
            marginBottom: '40px',
            lineHeight: '1.6',
          }}
        >
          Return to the 1980s vision of the future, perfect fusion of neon lights and electronic synthesizers.
          Let's drive the DeLorean through time together.
        </p>
        <div 
          style={{
            display: 'flex',
            flexDirection: deviceMode === 'mobile' ? 'column' : 'row',
            justifyContent: 'center',
            gap: deviceMode === 'mobile' ? '12px' : '16px',
          }}
        >
          <button 
            style={{
              padding: deviceMode === 'mobile' ? '12px 24px' : '16px 32px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              background: 'linear-gradient(90deg, #ff6b6b, #ff9ff3)',
              boxShadow: '0 0 30px rgba(255,107,107,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
            }}
            onMouseEnter={(e) => {
              const svg = e.currentTarget.querySelector('svg');
              if (svg) {
                (svg as unknown as HTMLElement).style.transform = 'scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              const svg = e.currentTarget.querySelector('svg');
              if (svg) {
                (svg as unknown as HTMLElement).style.transform = 'scale(1)';
              }
            }}
          >
            <Play 
              style={{ 
                width: '20px', 
                height: '20px', 
                transition: 'transform 0.2s ease',
              }} 
              fill="white" 
            />
            <span>Start Journey</span>
          </button>
          <button 
            style={{
              padding: deviceMode === 'mobile' ? '12px 24px' : '16px 32px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderRadius: '8px',
              border: '2px solid rgba(168,85,247,0.5)',
              color: '#d8b4fe',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(168,85,247,0.2)';
              e.currentTarget.style.borderColor = '#a855f7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)';
            }}
          >
            Explore More
          </button>
        </div>
      </section>

      {/* Value Proposition */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          marginBottom: '48px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div 
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              color: 'rgba(60,242,255,0.6)',
              marginBottom: '16px',
            }}
          >
            ◆ VALUE PROPOSITION ◆
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '24px' : '36px',
              fontWeight: '900',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '-0.025em',
              background: 'linear-gradient(90deg, #3CF2FF, #FF4FD8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Future Proof Your Workflow
          </h2>
          <p 
            style={{
              color: 'rgba(216,180,254,0.8)',
              maxWidth: '1024px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Experience the power of tomorrow's technology today. Our synthwave-inspired platform 
            combines nostalgic aesthetics with cutting-edge performance.
          </p>
        </div>
        <div 
          className="grid gap-6"
          style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr 1fr' }}
        >
          {[
            { icon: <Sparkles style={{ width: '32px', height: '32px' }} />, title: 'Neon Speed', desc: 'Lightning-fast processing with 80s style', color: '#3CF2FF' },
            { icon: <Zap style={{ width: '32px', height: '32px' }} />, title: 'Electric Dreams', desc: 'AI-powered automation', color: '#FF4FD8' },
            { icon: <TrendingUp style={{ width: '32px', height: '32px' }} />, title: 'Retro Growth', desc: 'Scale your business exponentially', color: '#4F6BFF' }
          ].map((item, i) => (
            <div 
              key={i} 
              style={{
                padding: '24px',
                borderRadius: '12px',
                textAlign: 'center',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div 
                style={{
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                  color: item.color,
                  filter: `drop-shadow(0 0 10px ${item.color})`,
                }}
              >
                {item.icon}
              </div>
              <h3 
                style={{
                  fontWeight: '700',
                  fontSize: '18px',
                  marginBottom: '8px',
                }}
              >
                {item.title}
              </h3>
              <p 
                style={{
                  fontSize: '14px',
                  color: 'rgba(216,180,254,0.7)',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          marginBottom: '48px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div 
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              color: 'rgba(244,114,182,0.6)',
              marginBottom: '16px',
            }}
          >
            ◇ INTEGRATIONS ◇
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '24px' : '36px',
              fontWeight: '900',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '-0.025em',
              background: 'linear-gradient(90deg, #ff6b6b, #feca57)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Connect Everything
          </h2>
        </div>
        <div 
          className="grid gap-4"
          style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr 1fr' : '1fr 1fr 1fr 1fr' }}
        >
          {['AWS', 'GCP', 'AZURE', 'ORACLE'].map((item) => (
            <div 
              key={item} 
              style={{
                padding: '16px',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: '700',
                fontSize: '18px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.2)',
                textShadow: '0 0 10px rgba(255,255,255,0.5)',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          marginBottom: '48px',
        }}
      >
        <div 
          className="grid gap-6"
          style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr 1fr' : '1fr 1fr 1fr 1fr' }}
        >
          {[
            { value: '99.9%', label: 'UPTIME', color: '#3CF2FF' },
            { value: '<1ms', label: 'LATENCY', color: '#FF4FD8' },
            { value: '10M+', label: 'USERS', color: '#4F6BFF' },
            { value: '24/7', label: 'SUPPORT', color: '#feca57' }
          ].map((item, i) => (
            <div 
              key={i} 
              style={{
                textAlign: 'center',
                padding: '16px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div 
                style={{
                  fontSize: '30px',
                  fontWeight: '900',
                  marginBottom: '8px',
                  color: item.color,
                  textShadow: `0 0 20px ${item.color}`,
                }}
              >
                {item.value}
              </div>
              <div 
                style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'rgba(216,180,254,0.6)',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          marginBottom: '48px',
        }}
      >
        <div 
          style={{
            padding: '32px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            <Shield 
              style={{ 
                width: '48px', 
                height: '48px', 
                color: '#22d3ee',
                filter: 'drop-shadow(0 0 20px #3CF2FF)',
              }} 
            />
            <div>
              <h2 
                style={{
                  fontSize: '24px',
                  fontWeight: '900',
                  marginBottom: '8px',
                }}
              >
                Quantum Security
              </h2>
              <p 
                style={{
                  color: 'rgba(216,180,254,0.8)',
                }}
              >
                Military-grade encryption meets retro aesthetics
              </p>
            </div>
          </div>
          <div 
            className="grid gap-4"
            style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr 1fr' }}
          >
            {[
              '256-bit AES Encryption',
              'SOC 2 Type II Certified',
              'GDPR Compliant'
            ].map((item) => (
              <div 
                key={item} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Check 
                  style={{ 
                    width: '20px', 
                    height: '20px', 
                    color: '#4ade80',
                  }} 
                />
                <span 
                  style={{
                    fontSize: '14px',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          marginBottom: '48px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div 
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              color: 'rgba(244,114,182,0.6)',
              marginBottom: '16px',
            }}
          >
            ◈ PRICING ◈
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '24px' : '36px',
              fontWeight: '900',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '-0.025em',
              background: 'linear-gradient(90deg, #ff9ff3, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Choose Your Era
          </h2>
        </div>
        <div 
          className="grid gap-6"
          style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr 1fr' }}
        >
          {[
            { name: 'RETRO', price: '$9/mo', features: ['Basic Features', '1 User', '10GB Storage'], highlight: false },
            { name: 'SYNTHWAVE', price: '$29/mo', features: ['All Features', '5 Users', '100GB Storage', 'Priority Support'], highlight: true },
            { name: 'FUTURE', price: '$99/mo', features: ['Everything', 'Unlimited Users', '1TB Storage', 'Dedicated Support'], highlight: false }
          ].map((plan) => (
            <div 
              key={plan.name} 
              style={{
                padding: '24px',
                borderRadius: '12px',
                border: plan.highlight ? '2px solid #3CF2FF' : '1px solid rgba(168,85,247,0.3)',
                background: plan.highlight ? 'rgba(60,242,255,0.1)' : 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3 
                style={{
                  fontSize: '20px',
                  fontWeight: '900',
                  marginBottom: '8px',
                }}
              >
                {plan.name}
              </h3>
              <div 
                style={{
                  fontSize: '30px',
                  fontWeight: '900',
                  marginBottom: '16px',
                  color: plan.highlight ? '#3CF2FF' : '#ffffff',
                }}
              >
                {plan.price}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                {plan.features.map((feature) => (
                  <li 
                    key={feature} 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      marginBottom: '8px',
                    }}
                  >
                    <Star 
                      style={{ 
                        width: '16px', 
                        height: '16px', 
                        color: '#facc15',
                      }} 
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                style={{
                  width: '100%',
                  padding: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  borderRadius: '8px',
                  backgroundColor: plan.highlight ? '#3CF2FF' : 'transparent',
                  color: plan.highlight ? 'black' : 'white',
                  border: plan.highlight ? 'none' : '1px solid rgba(168,85,247,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (plan.highlight) {
                    e.currentTarget.style.backgroundColor = '#67e8f9';
                  } else {
                    e.currentTarget.style.backgroundColor = 'rgba(168,85,247,0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlight) {
                    e.currentTarget.style.backgroundColor = '#3CF2FF';
                  } else {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          marginBottom: '48px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div 
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              color: 'rgba(244,114,182,0.6)',
              marginBottom: '16px',
            }}
          >
            ◉ FAQ ◉
          </div>
          <h2 
            style={{
              fontSize: deviceMode === 'mobile' ? '24px' : '36px',
              fontWeight: '900',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '-0.025em',
              background: 'linear-gradient(90deg, #4F6BFF, #FF4FD8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Questions From The Past
          </h2>
        </div>
        <div 
          style={{
            maxWidth: '1024px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {[
            { q: 'Is this really from the 80s?', a: 'No, but it feels like it should be!' },
            { q: 'Can I use this with modern tools?', a: 'Absolutely! Retro aesthetics, modern power.' },
            { q: 'Do you have a time machine?', a: 'Working on it. DeLorean not included.' },
            { q: 'Can I customize the neon colors?', a: 'Yes! Full RGB spectrum available.' }
          ].map((item, i) => (
            <div 
              key={i} 
              style={{
                padding: '16px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <h3 
                style={{
                  fontWeight: '700',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <HelpCircle 
                  style={{ 
                    width: '16px', 
                    height: '16px', 
                    color: '#22d3ee',
                  }} 
                />
                {item.q}
              </h3>
              <p 
                style={{
                  color: 'rgba(216,180,254,0.8)',
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section 
        style={{
          position: 'relative',
          zIndex: 10,
          marginBottom: '48px',
        }}
      >
        <div 
          style={{
            padding: '32px',
            borderRadius: '12px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255,107,107,0.1), rgba(255,159,243,0.1))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <Mail 
            style={{ 
              width: '48px', 
              height: '48px', 
              margin: '0 auto 16px',
              color: '#f472b6',
              filter: 'drop-shadow(0 0 20px #ff9ff3)',
            }} 
          />
          <h2 
            style={{
              fontSize: '24px',
              fontWeight: '900',
              marginBottom: '16px',
            }}
          >
            Get In Touch
          </h2>
          <p 
            style={{
              color: 'rgba(216,180,254,0.8)',
              marginBottom: '24px',
            }}
          >
            Ready to travel back to the future?
          </p>
          <div 
            style={{
              display: 'flex',
              flexDirection: deviceMode === 'mobile' ? 'column' : 'row',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <input 
              type="email" 
              placeholder="your@email.com"
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(168,85,247,0.3)',
                color: 'white',
              }}
            />
            <button 
              style={{
                padding: '12px 32px',
                fontWeight: '700',
                textTransform: 'uppercase',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'linear-gradient(90deg, #ff6b6b, #ff9ff3)',
                boxShadow: '0 0 30px rgba(255,107,107,0.5)',
                border: 'none',
                cursor: 'pointer',
                color: 'white',
              }}
            >
              Send Message
              <ChevronRight style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: deviceMode === 'mobile' ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
          fontSize: deviceMode === 'mobile' ? '12px' : '14px',
          color: 'rgba(168,85,247,0.6)',
          paddingTop: '24px',
          borderTop: '1px solid rgba(168,85,247,0.2)',
        }}
      >
        <span>© 1985-2024</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Radio style={{ width: '16px', height: '16px' }} />
          <span>SYNTHWAVE DREAMS</span>
        </div>
        <span>MIAMI · TOKYO</span>
      </footer>
    </div>
  );
};
