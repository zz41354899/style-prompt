export const S08Retro70s = () => {
  return (
    <div className="min-h-full p-4 md:p-8 font-serif relative"
      style={{ 
        backgroundColor: '#F7E8D0',
      }}
    >
      {/* 顆粒質感覆蓋層 */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 md:mb-16 pb-6 border-b-[3px] border-[#5D4037]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E65100] flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[#F7E8D0]" />
            </div>
            <span className="text-2xl md:text-3xl font-black text-[#5D4037] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              GROOVY
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-[0.15em] text-[#5D4037] font-sans font-medium">
            <span className="cursor-default">Home</span>
            <span className="cursor-default">Works</span>
            <span className="cursor-default">Contact</span>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-10 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* 復古同心圓 */}
            <div className="md:col-span-4 max-w-[200px] md:max-w-none mx-auto md:mx-0">
              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-full bg-[#E65100]" />
                <div className="absolute inset-[15%] rounded-full bg-[#FF8F00]" />
                <div className="absolute inset-[30%] rounded-full bg-[#FFB300]" />
                <div className="absolute inset-[45%] rounded-full bg-[#5D4037]" />
                <div className="absolute inset-[60%] rounded-full bg-[#F7E8D0]" />
              </div>
            </div>
            <div className="md:col-span-8 text-center md:text-left">
              <div className="text-xs uppercase tracking-[0.3em] text-[#8D6E63] mb-4 font-sans">
                60s-70s Print Aesthetic
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#5D4037] mb-6 leading-[1.1] tracking-tight">
                Retro Print<br />Style Design
              </h1>
              <p className="text-[#6D4C41] max-w-md leading-relaxed mb-8 text-lg">
                Return to the 60s-70s print aesthetics, perfect fusion of warm earth tones, grain texture, and vintage typography.
              </p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <button className="px-8 py-4 bg-[#E65100] text-white font-bold uppercase tracking-wider text-sm hover:bg-[#BF360C] transition-colors rounded-full">
                  Explore Works
                </button>
                <button className="px-8 py-4 border-2 border-[#5D4037] text-[#5D4037] font-bold uppercase tracking-wider text-sm hover:bg-[#5D4037] hover:text-white transition-colors rounded-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mb-10 md:mb-16">
          <div className="text-center mb-8">
            <div className="text-xs uppercase tracking-[0.3em] text-[#8D6E63] mb-4 font-sans">
              Editorial Excellence
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#5D4037] mb-6 leading-[1.1]" style={{ fontFamily: 'Georgia, serif' }}>
              Timeless Design<br/>Modern Purpose
            </h2>
            <p className="text-[#6D4C41] max-w-3xl mx-auto leading-relaxed text-lg">
              Our editorial approach brings warmth and confidence to digital products. 
              Through careful typography and thoughtful composition, we create experiences 
              that feel both familiar and fresh.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Human-Centered', desc: 'Design that speaks to people, not machines' },
              { title: 'Editorial Clarity', desc: 'Clear hierarchy through typography' },
              { title: 'Warm Confidence', desc: 'Trust through restraint and proportion' }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(93,64,55,0.05)' }}>
                <h3 className="text-xl font-bold text-[#5D4037] mb-3">{item.title}</h3>
                <p className="text-[#6D4C41] leading-relaxed">{item.desc}</p>
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
