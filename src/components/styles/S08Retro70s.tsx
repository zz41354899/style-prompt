import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const S08Retro70s = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div 
      style={{
        minHeight: '100%',
        padding: deviceMode === 'mobile' ? '16px' : '32px',
        fontFamily: 'serif',
        position: 'relative',
        backgroundColor: '#F7E8D0',
      }}
    >
      {/* 顆粒質感覆蓋層 */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div style={{ position: 'relative' }}>
        {/* Header */}
        <header 
          style={{
            display: 'flex',
            flexDirection: deviceMode === 'mobile' ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: deviceMode === 'mobile' ? 'flex-start' : 'center',
            gap: '16px',
            marginBottom: deviceMode === 'mobile' ? '40px' : '64px',
            paddingBottom: '24px',
            borderBottom: '3px solid #5D4037',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#E65100',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div 
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#F7E8D0',
                }}
              />
            </div>
            <span 
              style={{
                fontSize: deviceMode === 'mobile' ? '24px' : '30px',
                fontWeight: '900',
                color: '#5D4037',
                letterSpacing: '-0.025em',
                fontFamily: 'Georgia, serif',
              }}
            >
              GROOVY
            </span>
          </div>
          <nav 
            style={{
              display: deviceMode === 'desktop' ? 'flex' : 'none',
              gap: '32px',
              fontSize: '14px',
              textTransform: 'uppercase',
              fontWeight: '700',
              letterSpacing: '0.15em',
            }}
          >
            {['Home', 'Gallery', 'About'].map((item, i) => (
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
                border: '2px solid #5D4037',
                borderRadius: '4px',
                padding: '8px',
                cursor: 'pointer',
                color: '#5D4037',
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
              borderBottom: '3px solid #5D4037',
              padding: '16px',
              backgroundColor: '#F7E8D0',
            }}
          >
            {['Home', 'Gallery', 'About'].map((item, i) => (
              <div 
                key={i}
                style={{
                  padding: '12px 0',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  color: '#5D4037',
                  cursor: 'default',
                  borderBottom: i < 2 ? '1px solid #D7CCC8' : 'none',
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
            marginBottom: deviceMode === 'mobile' ? '40px' : '64px',
          }}
        >
          <div 
            className="grid"
            style={{ 
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: deviceMode === 'mobile' ? '24px' : '32px',
              alignItems: 'center',
            }}
          >
            {/* 復古同心圓 */}
            <div 
              style={{
                gridColumn: deviceMode === 'mobile' ? 'span 12' : 'span 4',
                maxWidth: deviceMode === 'mobile' ? '200px' : 'none',
                margin: deviceMode === 'mobile' ? '0 auto' : '0',
              }}
            >
              <div 
                style={{
                  position: 'relative',
                  aspectRatio: '1/1',
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    backgroundColor: '#E65100',
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: '15%',
                    borderRadius: '50%',
                    backgroundColor: '#FF8F00',
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: '30%',
                    borderRadius: '50%',
                    backgroundColor: '#FFB300',
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: '45%',
                    borderRadius: '50%',
                    backgroundColor: '#5D4037',
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: '60%',
                    borderRadius: '50%',
                    backgroundColor: '#F7E8D0',
                  }}
                />
              </div>
            </div>
            <div 
              style={{
                gridColumn: deviceMode === 'mobile' ? 'span 12' : 'span 8',
                textAlign: deviceMode === 'mobile' ? 'center' : 'left',
              }}
            >
              <div 
                style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.3em',
                  color: '#8D6E63',
                  marginBottom: '16px',
                  fontFamily: 'sans-serif',
                }}
              >
                60s-70s Print Aesthetic
              </div>
              <h1 
                style={{
                  fontSize: deviceMode === 'mobile' ? '36px' : '60px',
                  fontWeight: '900',
                  color: '#5D4037',
                  marginBottom: '24px',
                  lineHeight: '1.1',
                  letterSpacing: '-0.025em',
                }}
              >
                Retro Print<br />Style Design
              </h1>
              <p 
                style={{
                  color: '#6D4C41',
                  maxWidth: '448px',
                  lineHeight: '1.6',
                  marginBottom: '32px',
                  fontSize: '18px',
                }}
              >
                Return to the 60s-70s print aesthetics, perfect fusion of warm earth tones, grain texture, and vintage typography.
              </p>
              <div 
                style={{
                  display: 'flex',
                  flexDirection: deviceMode === 'mobile' ? 'column' : 'row',
                  gap: deviceMode === 'mobile' ? '12px' : '16px',
                }}
              >
                <button 
                  style={{
                    padding: '16px 32px',
                    backgroundColor: '#E65100',
                    color: 'white',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '14px',
                    border: 'none',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#BF360C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#E65100';
                  }}
                >
                  Explore Works
                </button>
                <button 
                  style={{
                    padding: '16px 32px',
                    border: '2px solid #5D4037',
                    color: '#5D4037',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '14px',
                    backgroundColor: 'transparent',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#5D4037';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#5D4037';
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section 
          style={{
            marginBottom: deviceMode === 'mobile' ? '40px' : '64px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div 
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                color: '#8D6E63',
                marginBottom: '16px',
                fontFamily: 'sans-serif',
              }}
            >
              Editorial Excellence
            </div>
            <h2 
              style={{
                fontSize: deviceMode === 'mobile' ? '30px' : '36px',
                fontWeight: '900',
                color: '#5D4037',
                marginBottom: '24px',
                lineHeight: '1.1',
                fontFamily: 'Georgia, serif',
              }}
            >
              Timeless Design<br/>Modern Purpose
            </h2>
            <p 
              style={{
                color: '#6D4C41',
                maxWidth: '1024px',
                margin: '0 auto',
                lineHeight: '1.6',
                fontSize: '18px',
              }}
            >
              Our editorial approach brings warmth and confidence to digital products. 
              Through careful typography and thoughtful composition, we create experiences 
              that feel both familiar and fresh.
            </p>
          </div>
          <div 
            className="grid gap-6"
            style={{ gridTemplateColumns: deviceMode === 'mobile' ? '1fr' : '1fr 1fr 1fr' }}
          >
            {[
              { title: 'Human-Centered', desc: 'Design that speaks to people, not machines' },
              { title: 'Editorial Clarity', desc: 'Clear hierarchy through typography' },
              { title: 'Warm Confidence', desc: 'Trust through restraint and proportion' }
            ].map((item, i) => (
              <div 
                key={i} 
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(93,64,55,0.05)',
                }}
              >
                <h3 
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#5D4037',
                    marginBottom: '12px',
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  style={{
                    color: '#6D4C41',
                    lineHeight: '1.6',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-10 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Print-Inspired Layouts', desc: 'Editorial design principles adapted for digital', highlight: true },
              { title: 'Comfortable Reading', desc: 'Optimized line lengths and generous leading' },
              { title: 'Muted Color Palette', desc: 'Earthy tones that please the eye' },
              { title: 'Subtle Texture', desc: 'Light grain for tactile warmth' }
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-xl ${item.highlight ? 'border-2 border-[#E65100]' : ''}`} 
                style={{ backgroundColor: item.highlight ? 'rgba(230,81,0,0.05)' : 'rgba(93,64,55,0.05)' }}>
                <h3 className="text-xl font-bold text-[#5D4037] mb-3">{item.title}</h3>
                <p className="text-[#6D4C41] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations */}
        <section className="mb-10 md:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-[#5D4037] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Trusted Partners
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Adobe', 'Sketch', 'Figma', 'InDesign'].map((item) => (
              <div key={item} className="p-6 rounded-xl text-center font-bold text-lg text-[#5D4037]" 
                style={{ backgroundColor: 'rgba(93,64,55,0.05)' }}>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Metrics */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {[
            { num: '50K+', label: 'Happy Readers' },
            { num: '500+', label: 'Publications' },
            { num: '99%', label: 'Satisfaction' },
            { num: '24/7', label: 'Support' }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(93,64,55,0.05)' }}>
              <div className="text-4xl font-black text-[#E65100] mb-2">{item.num}</div>
              <div className="text-xs text-[#8D6E63] uppercase tracking-[0.2em] font-sans">{item.label}</div>
            </div>
          ))}
        </section>

        {/* Security */}
        <section className="mb-10 md:mb-16">
          <div className="p-8 rounded-xl" style={{ backgroundColor: 'rgba(93,64,55,0.05)' }}>
            <h2 className="text-2xl font-black text-[#5D4037] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Privacy & Reliability
            </h2>
            <p className="text-[#6D4C41] mb-6 leading-relaxed">
              Your data deserves the same care as editorial content. We protect it with 
              industry-standard security while maintaining the warm, human touch you expect.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'End-to-end encryption',
                'GDPR compliant',
                'Regular security audits'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E65100]" />
                  <span className="text-[#5D4037]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-10 md:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-[#5D4037] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Simple Pricing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Editorial', price: '$19/mo', features: ['Basic templates', '5 projects', 'Email support'] },
              { name: 'Professional', price: '$49/mo', features: ['All templates', 'Unlimited projects', 'Priority support', 'Custom fonts'] },
              { name: 'Enterprise', price: '$99/mo', features: ['Everything', 'Team collaboration', 'Dedicated support', 'Custom branding'] }
            ].map((plan) => (
              <div key={plan.name} className="p-6 rounded-xl text-center" style={{ backgroundColor: 'rgba(93,64,55,0.05)' }}>
                <h3 className="text-xl font-bold text-[#5D4037] mb-2">{plan.name}</h3>
                <div className="text-3xl font-black text-[#E65100] mb-4">{plan.price}</div>
                <ul className="space-y-2 mb-6 text-[#6D4C41]">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-[#E65100] text-white font-bold uppercase tracking-wider text-sm hover:bg-[#BF360C] transition-colors rounded-full">
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10 md:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-[#5D4037] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Common Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Can I import my existing designs?', a: 'Yes! We support all major design formats.' },
              { q: 'Is there a learning curve?', a: 'Our editorial approach is intuitive for designers.' },
              { q: 'Can I customize templates?', a: 'Every template is fully customizable.' },
              { q: 'Do you offer training?', a: 'We provide comprehensive onboarding for teams.' }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(93,64,55,0.05)' }}>
                <h3 className="text-lg font-bold text-[#5D4037] mb-2">{item.q}</h3>
                <p className="text-[#6D4C41]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-10 md:mb-16">
          <div className="p-8 rounded-xl text-center" style={{ backgroundColor: 'rgba(230,81,0,0.1)' }}>
            <h2 className="text-2xl font-black text-[#5D4037] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Let's Create Together
            </h2>
            <p className="text-[#6D4C41] mb-6">
              Ready to bring editorial excellence to your designs?
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 rounded-full border border-[#D7CCC8] text-[#5D4037] placeholder-[#8D6E63] focus:outline-none focus:border-[#E65100]"
              />
              <button className="px-8 py-3 bg-[#E65100] text-white font-bold uppercase tracking-wider text-sm hover:bg-[#BF360C] transition-colors rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-12 border-t-[3px] border-b-[3px] border-[#5D4037] mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl text-[#E65100]/30 mb-4">"</div>
            <blockquote className="text-3xl italic text-[#5D4037] leading-relaxed mb-6">
              Design is a mirror of the times, reflecting our dreams and aspirations.
            </blockquote>
            <cite className="text-sm text-[#8D6E63] uppercase tracking-[0.2em] not-italic font-sans">
              — Retro Design Philosophy
            </cite>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {[
            { num: '1965', label: 'Golden Era' },
            { num: '∞', label: 'Infinite Creativity' },
            { num: '100%', label: 'Handcrafted' },
            { num: '70s', label: 'Classic Style' },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(93,64,55,0.05)' }}>
              <div className="text-4xl font-black text-[#E65100] mb-2">{item.num}</div>
              <div className="text-xs text-[#8D6E63] uppercase tracking-[0.2em] font-sans">{item.label}</div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs md:text-sm text-[#8D6E63] pt-6 border-t border-[#D7CCC8]">
          <span>© 1970 GROOVY DESIGN CO.</span>
          <span className="uppercase tracking-[0.15em] font-sans">Made with ♥ in California</span>
        </footer>
      </div>
    </div>
  );
};
