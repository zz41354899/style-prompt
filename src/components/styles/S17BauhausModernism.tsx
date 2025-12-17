import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export const S17BauhausModernism = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = deviceMode === 'mobile';
  const isDesktop = deviceMode === 'desktop';

  return (
    <div className="min-h-full bg-[#F5F5F5] text-[#1a1a1a] font-sans relative overflow-hidden" style={{ padding: isMobile ? '16px' : '32px' }}>
      {/* 幾何背景元素 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#004E89] rounded-full opacity-10 blur-3xl" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center mb-16 md:mb-24 pb-8 border-b-4 border-[#1a1a1a]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center">
            <div className="w-6 h-6 bg-[#FF6B35]" />
          </div>
          <span className="text-2xl font-black tracking-[0.1em] uppercase">Bauhaus</span>
        </div>

        {/* Desktop Nav */}
        <nav className={`${isDesktop ? 'flex' : 'hidden'} items-center gap-12`}>
          <span className="text-sm font-bold tracking-wider uppercase cursor-default">Design</span>
          <span className="text-sm font-bold tracking-wider uppercase cursor-default">Form</span>
          <span className="text-sm font-bold tracking-wider uppercase cursor-default">Function</span>
          <button className="px-6 py-3 bg-[#1a1a1a] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#333] transition-colors">
           Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        {!isDesktop && <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>}
      </header>

      {/* Mobile Menu */}
      {menuOpen && !isDesktop && (
        <div className="relative z-20 mb-8 p-6 bg-[#1a1a1a] text-white border-4 border-[#1a1a1a]">
          <nav className="flex flex-col gap-4">
            <span className="text-sm font-bold tracking-wider uppercase cursor-default">Design</span>
            <span className="text-sm font-bold tracking-wider uppercase cursor-default">Form</span>
            <span className="text-sm font-bold tracking-wider uppercase cursor-default">Function</span>
            <button className="mt-4 px-6 py-3 bg-[#FF6B35] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#E55A24] transition-colors">
              聯繫我們
            </button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 grid" style={{ marginBottom: isMobile ? '64px' : '96px', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: isMobile ? '24px' : '32px' }}>
        {/* Left Geometric Shape */}
        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 3' }} className="flex items-center justify-center">
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-[#FF6B35] transform rotate-45" />
            <div className="absolute inset-8 bg-[#F5F5F5] transform rotate-45" />
            <div className="absolute inset-16 bg-[#FF6B35] transform rotate-45" />
          </div>
        </div>

        {/* Main Content */}
        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 9' }} className="flex flex-col justify-center">
          <div className="text-xs font-black tracking-[0.3em] uppercase text-[#FF6B35] mb-6">
            Form Follows Function
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tight uppercase">
            Bauhaus<br />Modernism
          </h1>
          <p className="text-lg leading-relaxed text-[#555] max-w-lg mb-10">
            The integration of art, craft, and technology. Pure geometry meets functional design in a harmonious balance of form and purpose.
          </p>
          <div className="flex flex-col gap-4">
            <button className="px-8 py-4 bg-[#1a1a1a] text-white text-xs font-black tracking-wider uppercase hover:bg-[#333] transition-colors">
              Explore Design
            </button>
            <button className="px-8 py-4 border-4 border-[#1a1a1a] text-xs font-black tracking-wider uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="relative z-10 mb-16 md:mb-24">
        <div className="text-xs font-black tracking-[0.3em] uppercase text-[#999] mb-8 md:mb-12">
          Core Principles
        </div>
        <div className="grid" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '16px' : '24px' }}>
          {[
            {
              title: 'Geometry',
              desc: 'Pure geometric forms: circles, squares, triangles',
              icon: '■',
              bg: 'bg-[#1a1a1a]',
              textColor: 'text-white'
            },
            {
              title: 'Functionality',
              desc: 'Design serves purpose, not decoration',
              icon: '●',
              bg: 'bg-[#FF6B35]',
              textColor: 'text-white'
            },
            {
              title: 'Simplicity',
              desc: 'Minimal elements, maximum impact',
              icon: '▲',
              bg: 'bg-[#004E89]',
              textColor: 'text-white'
            },
          ].map((item, i) => (
            <div key={i} className={`${item.bg} ${item.textColor} p-4 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[240px] border-4 border-[#1a1a1a]`}>
              <div>
                <div className="text-5xl font-black mb-6 opacity-60">{item.icon}</div>
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{item.desc}</p>
              </div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-60">
                {item.title.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 grid" style={{ marginBottom: isMobile ? '64px' : '96px', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '24px' : '32px' }}>
        {/* Left Feature */}
        <div className="bg-white border-4 border-[#1a1a1a] p-6 md:p-12 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF6B35] mb-6 md:mb-8" />
            <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">
              Timeless Design
            </h3>
            <p className="text-sm leading-relaxed text-[#555]">
              Bauhaus principles transcend trends. The focus on functionality and geometric purity creates designs that remain relevant across decades.
            </p>
          </div>
          <div className="mt-6 md:mt-8 text-xs font-bold tracking-[0.2em] uppercase text-[#999]">
            Design Philosophy
          </div>
        </div>

        {/* Right Feature with Geometric Pattern */}
        <div className="relative bg-[#1a1a1a] p-6 md:p-12 flex flex-col justify-between border-4 border-[#1a1a1a]">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#FF6B35] opacity-20" />
          <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-[#004E89] opacity-20" />
          <div className="relative">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#004E89] mb-6 md:mb-8" />
            <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight text-white">
              Universal Language
            </h3>
            <p className="text-sm leading-relaxed text-[#ccc]">
              Geometric forms and functional design communicate across cultures and languages, creating a truly universal design system.
            </p>
          </div>
          <div className="mt-6 md:mt-8 text-xs font-bold tracking-[0.2em] uppercase text-[#666]">
            Global Impact
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 mb-16 md:mb-24">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-xs font-black tracking-[0.3em] uppercase text-[#999] mb-6 md:mb-8">
            Design Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6 md:mb-8 tracking-tight uppercase">
            Form Meets<br />
            <span className="text-[#FF6B35]">Function</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#555] max-w-3xl mx-auto px-4">
            Bauhaus design eliminates the unnecessary, focusing on essential elements that serve both aesthetic and practical purposes.
            Every line, shape, and color has meaning.
          </p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '24px' : '32px' }}>
          {[
            { title: 'Radical Simplicity', desc: 'Strip away excess to reveal truth' },
            { title: 'Material Honesty', desc: 'Let materials speak their language' },
            { title: 'Purposeful Design', desc: 'Every element serves a function' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 md:p-8 border-4 border-[#1a1a1a]">
              <h3 className="text-lg md:text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm text-[#555]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 grid" style={{ marginBottom: isMobile ? '64px' : '96px', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '24px' : '32px' }}>
        {[
          { title: 'Asymmetric Balance', desc: 'Dynamic compositions through careful imbalance', detail: 'Visual tension creates interest' },
          { title: 'Primary Colors', desc: 'Red, yellow, blue with black and white', detail: 'Maximum contrast, minimum palette' },
          { title: 'Grid Systems', desc: 'Mathematical precision in layout', detail: 'Underlying structure brings harmony' },
          { title: 'Typography as Form', desc: 'Letters as design elements', detail: 'Text becomes visual architecture' }
        ].map((item, i) => (
          <div key={i} className="bg-[#1a1a1a] text-white p-8 md:p-12 border-4 border-[#1a1a1a]">
            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
            <p className="text-sm mb-2 text-[#ccc]">{item.desc}</p>
            <p className="text-xs text-[#999]">{item.detail}</p>
          </div>
        ))}
      </section>

      {/* Integrations */}
      <section className="relative z-10 mb-16 md:mb-24">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">Design Platforms</h2>
        </div>
        <div className="grid" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '16px' : '24px' }}>
          {['Architecture', 'Industrial', 'Graphic', 'Digital'].map((item) => (
            <div key={item} className="bg-white p-4 md:p-8 text-center border-4 border-[#1a1a1a]">
              <div className="text-sm md:text-lg font-black uppercase tracking-tight">{item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10 mb-16 md:mb-24 bg-[#FF6B35] text-white p-6 md:p-12 border-4 border-[#1a1a1a]">
        <div className="grid" style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '24px' : '32px' }}>
          {[
            { value: '100+', label: 'Years of Influence' },
            { value: '50K+', label: 'Designers' },
            { value: '∞', label: 'Inspiration' },
            { value: '100%', label: 'Relevant' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black mb-2">{item.value}</div>
              <div className="text-[10px] md:text-xs font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase leading-tight">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="relative z-10 mb-16 md:mb-24 bg-white border-4 border-[#1a1a1a] p-6 md:p-12">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#004E89] flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-tight">Design Integrity</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-[#555]">
              Our commitment to Bauhaus principles means uncompromising quality and authenticity.
              Every design maintains the core values of the movement.
            </p>
            <div className="grid" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '16px' : '24px' }}>
              {[
                'Authentic Bauhaus principles',
                'Original design methodology',
                'Certified design process'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FF6B35]" />
                  <span className="text-xs md:text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 mb-16 md:mb-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">Design Plans</h2>
        </div>
        <div className="grid" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '24px' : '32px' }}>
          {[
            { name: 'Basic', price: '$29/mo', features: ['Core principles', 'Basic templates'] },
            { name: 'Professional', price: '$99/mo', features: ['Full methodology', 'Custom projects'] },
            { name: 'Master', price: '$299/mo', features: ['Everything', 'Workshops', 'Certification'] }
          ].map((plan) => (
            <div key={plan.name} className="bg-white p-6 md:p-12 border-4 border-[#1a1a1a]">
              <h3 className="text-lg md:text-xl font-black mb-4 uppercase tracking-tight">{plan.name}</h3>
              <div className="text-2xl md:text-3xl font-black mb-6 md:mb-8">{plan.price}</div>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-sm text-[#555]">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <button className="w-full py-3 md:py-4 bg-[#1a1a1a] text-white text-xs font-black tracking-wider uppercase hover:bg-[#333] transition-colors">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mb-16 md:mb-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
          {[
            { q: 'Is Bauhaus still relevant?', a: 'More than ever. Its focus on functionality and simplicity is timeless.' },
            { q: 'Can I apply it digitally?', a: 'Absolutely. Digital design benefits from Bauhaus clarity and purpose.' },
            { q: 'What makes it unique?', a: 'The strict adherence to form following function without compromise.' },
            { q: 'Where can I learn more?', a: 'Through our workshops, resources, and community of designers.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 md:p-8 border-4 border-[#1a1a1a]">
              <h3 className="text-base md:text-lg font-black mb-3 md:mb-4 uppercase tracking-tight">{item.q}</h3>
              <p className="text-sm text-[#555]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 mb-16 md:mb-24 bg-[#1a1a1a] text-white p-6 md:p-12 border-4 border-[#1a1a1a]">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF6B35] mx-auto mb-6 md:mb-8" />
          <h2 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-tight">Start Your Design Journey</h2>
          <p className="text-base md:text-lg mb-8 md:mb-10 text-[#ccc]">
            Join the movement that changed design forever.
          </p>
          <div className="flex max-w-md mx-auto" style={{ flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '12px' : '16px' }}>
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 md:px-6 py-3 md:py-4 bg-white text-black placeholder-[#999] focus:outline-none text-sm md:text-base"
            />
            <button className="px-6 md:px-8 py-3 md:py-4 bg-[#FF6B35] text-white text-xs font-black tracking-wider uppercase hover:bg-[#E55A24] transition-colors">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex justify-between items-center pt-8 border-t-4 border-[#1a1a1a] text-xs font-bold tracking-[0.2em] uppercase text-[#999]" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
        <span>Bauhaus School · 1919-1933</span>
        <span>© 2024 Modernism Design</span>
      </footer>
    </div>
  );
};
