import { useState } from 'react';

export const S11JapaneseMinimal = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = deviceMode === 'mobile';
  const isTablet = deviceMode === 'tablet';
  const isDesktop = deviceMode === 'desktop';
  
  return (
    <div className="min-h-full bg-[#FAFAF8] text-[#2d2d2d] font-sans relative" style={{ padding: isMobile ? '24px' : '48px' }}>
      {/* 背景裝飾 - 淡墨圓 */}
      <div className="absolute top-1/4 right-12 w-64 h-64 rounded-full bg-[#f0ede8] opacity-60" />
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center" style={{ marginBottom: isMobile ? '64px' : '128px' }}>
        <div className="flex items-center gap-4">
          <div className="text-3xl font-light" style={{ fontFamily: 'serif' }}>Harmony</div>
          <div className="w-px h-6 bg-[#d4d0c8]" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#999]">Wa Design</span>
        </div>
        <nav className={`${deviceMode === 'desktop' ? 'flex' : 'hidden'} gap-12 text-xs tracking-[0.25em]`}>
          <span className="cursor-default">Works</span>
          <span className="cursor-default">Philosophy</span>
          <span className="cursor-default">Contact</span>
        </nav>
        {/* Mobile Menu Button */}
        {(isMobile || isTablet) && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xs tracking-[0.25em] border-b border-[#2d2d2d] pb-1.5 hover:opacity-40 transition-opacity"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        )}
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="relative z-10 mb-16 border-b border-[#e8e4de]">
          <div className="py-8 space-y-4">
            <div className="text-xs tracking-[0.25em] text-[#2d2d2d] cursor-default hover:opacity-40 transition-opacity">
              Works
            </div>
            <div className="text-xs tracking-[0.25em] text-[#2d2d2d] cursor-default hover:opacity-40 transition-opacity">
              Philosophy
            </div>
            <div className="text-xs tracking-[0.25em] text-[#2d2d2d] cursor-default hover:opacity-40 transition-opacity">
              Contact
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="relative z-10 grid" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: isMobile ? '24px' : '32px', marginBottom: isMobile ? '64px' : '96px' }}>
        {!isMobile && <div style={{ gridColumn: 'span 2' }}>
          <div className="text-[140px] font-light text-[#e8e4de] leading-none" style={{ fontFamily: 'serif' }}>
            静
          </div>
        </div>}
        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 6', paddingTop: isMobile ? '16px' : '32px' }}>
          <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-8">Japanese Minimalism</div>
          <h1 style={{ fontSize: isMobile ? '30px' : '36px', marginBottom: isMobile ? '32px' : '40px' }} className="font-light leading-[1.4] tracking-wide">
            Japanese Minimal<br />
            <span className="text-[#a0a0a0]">The Beauty of Empty Space</span>
          </h1>
          <p className="text-sm leading-[2.2] text-[#666] mb-12 max-w-md">
            Find balance in space, discover depth in simplicity.
            Every whitespace is a deliberate breath, allowing the soul to dwell.
            This is an art of living, and also a spiritual practice.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-xs tracking-[0.25em] border-b border-[#2d2d2d] pb-1.5 hover:opacity-40 transition-opacity">
              Explore
            </button>
            <div className="w-8 h-px bg-[#d4d0c8]" />
            <span className="text-xs tracking-[0.2em] text-[#a0a0a0]">Learn More</span>
          </div>
        </div>
        {isDesktop && <div style={{ gridColumn: 'span 4' }} className="flex items-end justify-end">
          <div className="text-right">
            <div className="text-[80px] font-light text-[#f0ede8] leading-none mb-4" style={{ fontFamily: 'serif' }}>
              美
            </div>
            <div className="text-[10px] tracking-[0.3em] text-[#bbb]">BEAUTY</div>
          </div>
        </div>}
      </main>

      {/* Minimal divider */}
      <div className="relative z-10 flex items-center gap-4 mb-20">
        <div className="w-16 h-px bg-[#2d2d2d]" />
        <div className="w-2 h-2 rounded-full bg-[#d4d0c8]" />
      </div>

      {/* Value Proposition */}
      <section className="relative z-10 mb-20">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-8">Philosophy</div>
          <h2 style={{ fontSize: isMobile ? '24px' : '30px' }} className="font-light leading-[1.4] mb-8 tracking-wide">
            The Way of<br />
            <span className="text-[#a0a0a0]">Less is More</span>
          </h2>
          <p className="text-sm leading-[2.2] text-[#666] max-w-2xl mx-auto">
            In the pursuit of minimalism, we discover true abundance. 
            Each element serves a purpose, each space carries meaning.
            This is the essence of Japanese design philosophy.
          </p>
        </div>
        <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
          {[
            { title: 'Clarity', desc: 'Clear mind, clear design' },
            { title: 'Balance', desc: 'Harmony in asymmetry' },
            { title: 'Stillness', desc: 'Finding peace in simplicity' }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-8 h-px bg-[#2d2d2d] mx-auto mb-6 group-hover:w-16 transition-all duration-700" />
              <h3 className="text-sm font-medium mb-2">{item.title}</h3>
              <p className="text-xs text-[#666] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mb-20">
        <div className="grid gap-16" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
          {[
            { title: 'Intentional Whitespace', desc: 'Every space has purpose', detail: 'Breathing room for the mind' },
            { title: 'Natural Materials', desc: 'Connection to nature', detail: 'Wood, stone, and paper textures' },
            { title: 'Subtle Gradients', desc: 'Gentle transitions', detail: 'Soft as morning mist' },
            { title: 'Functional Beauty', desc: 'Purpose in every element', detail: 'Form follows function' }
          ].map((item, i) => (
            <div key={i} className="group">
              <h3 className="text-sm font-medium mb-2">{item.title}</h3>
              <p className="text-xs text-[#666] mb-1">{item.desc}</p>
              <p className="text-[10px] tracking-[0.3em] text-[#999] uppercase">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="relative z-10 py-12 border-t border-[#e8e4de] mb-20">
        <div className="text-center mb-12">
          <h2 className="text-lg font-light tracking-wide">Partners</h2>
        </div>
        <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}>
          {['Muji', 'Uniqlo', 'Issey Miyake', 'Yoshoku'].map((item) => (
            <div key={item} className="text-center">
              <div className="text-xs font-light">{item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10 mb-20">
        <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}>
          {[
            { value: '1000+', label: 'Projects' },
            { value: '50+', label: 'Awards' },
            { value: '99%', label: 'Satisfaction' },
            { value: '24/7', label: 'Support' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-light text-[#666] mb-2">{item.value}</div>
              <div className="text-[10px] tracking-[0.3em] text-[#999] uppercase">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="relative z-10 mb-20">
        <div className="p-12 border border-[#e8e4de]">
          <h2 className="text-lg font-light mb-4 tracking-wide">Privacy & Trust</h2>
          <p className="text-sm leading-[2.2] text-[#666] mb-8 max-w-2xl">
            Your privacy is as important as the air we breathe. 
            We protect your data with the same care we bring to our design.
          </p>
          <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {[
              'End-to-end encryption',
              'GDPR compliant',
              'Regular audits'
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#666]" />
                <span className="text-xs text-[#666]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-lg font-light tracking-wide mb-2">Investment</h2>
          <p className="text-xs text-[#999]">Simple, transparent pricing</p>
        </div>
        <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
          {[
            { name: 'Basic', price: '$29/mo', features: ['Essential features', 'Email support'] },
            { name: 'Professional', price: '$79/mo', features: ['All features', 'Priority support', 'Custom designs'] },
            { name: 'Enterprise', price: 'Custom', features: ['Everything', 'Dedicated team', 'White glove'] }
          ].map((plan) => (
            <div key={plan.name} className="p-8 border border-[#e8e4de] text-center group hover:border-[#d4d0c8] transition-colors">
              <h3 className="text-sm font-medium mb-2">{plan.name}</h3>
              <div className="text-xl font-light mb-4">{plan.price}</div>
              <ul className="space-y-2 mb-6 text-xs text-[#666]">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className="text-xs tracking-[0.25em] border-b border-[#2d2d2d] pb-1 hover:opacity-40 transition-opacity">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-lg font-light tracking-wide">Questions</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-8">
          {[
            { q: 'What is your design philosophy?', a: 'We believe in the power of simplicity and the beauty of empty space.' },
            { q: 'How long does a project take?', a: 'Projects typically take 4-6 weeks, allowing time for thoughtful refinement.' },
            { q: 'Can you work with our brand?', a: 'We adapt our minimal approach to enhance your unique brand identity.' },
            { q: 'What makes you different?', a: 'Our commitment to stillness and purpose in every design decision.' }
          ].map((item, i) => (
            <div key={i} className="border-b border-[#e8e4de] pb-6">
              <h3 className="text-sm font-medium mb-2">{item.q}</h3>
              <p className="text-xs text-[#666] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 mb-20">
        <div className="p-12 border border-[#e8e4de] text-center">
          <h2 className="text-lg font-light mb-4 tracking-wide">Let\'s Talk</h2>
          <p className="text-sm leading-[2.2] text-[#666] mb-8 max-w-md mx-auto">
            Ready to bring minimal elegance to your project?
          </p>
          <div className="flex justify-center gap-4 max-w-md mx-auto" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-[#d4d0c8] text-[#2d2d2d] placeholder-[#999] focus:outline-none focus:border-[#666]"
            />
            <button className="px-8 py-3 text-xs tracking-[0.25em] border border-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-[#FAFAF8] transition-colors">
              Send
            </button>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative z-10 py-12 border-t border-[#e8e4de] mb-16">
        <div className="max-w-lg">
          <blockquote className="text-xl font-light leading-[1.8] text-[#555] italic mb-4">
            "Simplicity is not lack, but the perfect abundance."
          </blockquote>
          <cite className="text-[10px] tracking-[0.3em] text-[#999] not-italic uppercase">
            — Japanese Aesthetics
          </cite>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex justify-between items-center gap-2 text-[10px] tracking-[0.25em] text-[#999]" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
        <span>Kyoto · Tokyo</span>
        <span>© 2024 Harmony Design</span>
        <span>Japan</span>
      </footer>
    </div>
  );
};
