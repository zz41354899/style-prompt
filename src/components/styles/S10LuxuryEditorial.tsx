import { ArrowUpRight, Shield, Mail, Gem } from 'lucide-react';

export const S10LuxuryEditorial = () => {
  return (
    <div className="min-h-full bg-[#FAF8F5] text-[#1a1a1a] p-4 md:p-10" style={{ fontFamily: 'Georgia, Times, serif' }}>
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 md:mb-20 pb-6 border-b border-[#e0d5c7]">
        <div className="hidden md:block text-[10px] tracking-[0.5em] uppercase text-[#9a8b7a]">Est. 2024</div>
        <div className="flex items-center gap-4">
          <div className="w-px h-8 bg-[#d4c5b5]" />
          <span className="text-2xl md:text-3xl tracking-[0.15em] font-light">ÉLÉGANCE</span>
          <div className="w-px h-8 bg-[#d4c5b5]" />
        </div>
        <div className="hidden md:block text-[10px] tracking-[0.5em] uppercase text-[#9a8b7a]">Paris</div>
      </header>

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-20">
        <div className="md:col-span-5 flex flex-col justify-center">
          <div className="text-[10px] tracking-[0.4em] uppercase text-[#9a8b7a] mb-6">The Art of Living</div>
          <h1 className="text-4xl md:text-6xl font-light leading-[1.1] mb-6 md:mb-8 tracking-[-0.02em]">
            Luxury<br />
            <em className="font-normal italic text-[#9a8b7a]">Editorial Aesthetics</em>
          </h1>
          <p className="text-[#666] leading-[1.9] mb-10 text-[15px]">
            Discover eternal elegance in the details. Every choice is a display of taste,
            every moment deserves to be cherished. We believe true luxury comes from the relentless pursuit of perfection.
          </p>
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase cursor-default">
            <span className="border-b border-[#1a1a1a] pb-1">
              Explore Collection
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
          <div className="bg-[#e8e2da] aspect-[3/4] relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-[10px] tracking-[0.3em] uppercase">Vol. I</div>
              <div className="text-white text-lg font-light mt-1">Spring Collection</div>
            </div>
          </div>
          <div className="bg-[#d4c5b5] aspect-[3/4] relative group overflow-hidden mt-12">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-[10px] tracking-[0.3em] uppercase">Vol. II</div>
              <div className="text-white text-lg font-light mt-1">Timeless Pieces</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="text-[10px] tracking-[0.4em] uppercase text-[#9a8b7a] mb-6">Our Philosophy</div>
          <h2 className="text-3xl md:text-4xl font-light leading-[1.2] mb-8 tracking-[-0.02em]">
            The Essence of<br />
            <em className="font-normal italic text-[#9a8b7a]">Refined Living</em>
          </h2>
          <p className="text-[#666] leading-[1.9] max-w-3xl mx-auto text-[15px]">
            We believe luxury is not about excess, but about the perfect balance of form and function. 
            Our editorial approach brings timeless elegance to modern digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Understated Excellence', desc: 'True luxury whispers, it never shouts' },
            { title: 'Curated Selection', desc: 'Every piece chosen with intention and care' },
            { title: 'Timeless Appeal', desc: 'Style that transcends seasons and trends' }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 border border-[#e0d5c7]">
              <h3 className="text-lg font-light mb-3">{item.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: 'Editorial Precision', desc: 'Every element meticulously placed for visual harmony', detail: 'Typography, spacing, and rhythm considered down to the pixel' },
            { title: 'Sophisticated Palette', desc: 'Muted tones that speak volumes through restraint', detail: 'Colors chosen to evoke calm and confidence' },
            { title: 'Artisanal Details', desc: 'Small touches that make a significant impact', detail: 'Micro-interactions and transitions crafted with care' },
            { title: 'Intellectual Depth', desc: 'Content that engages and inspires', detail: 'Stories and narratives that resonate with discerning audiences' }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="w-12 h-px bg-[#d4c5b5] mb-6 group-hover:w-full transition-all duration-700" />
              <h3 className="text-xl font-light mb-3">{item.title}</h3>
              <p className="text-[#666] text-sm mb-2">{item.desc}</p>
              <p className="text-[#9a8b7a] text-xs leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 border-t border-b border-[#e0d5c7] mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light tracking-[-0.02em]">Esteemed Partners</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Vogue', 'Harper\'s Bazaar', 'Elle Decor', 'Architectural Digest'].map((item) => (
            <div key={item} className="text-center">
              <div className="text-[10px] tracking-[0.4em] uppercase text-[#9a8b7a] mb-2">Featured In</div>
              <div className="text-sm font-light">{item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '150+', label: 'Editorial Features' },
            { value: '50K', label: 'Discerning Readers' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Concierge Service' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-light text-[#c4b5a5] mb-2">{item.value}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#9a8b7a]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Security */}
      <section className="mb-20">
        <div className="p-12 border border-[#e0d5c7]">
          <div className="flex items-start gap-6">
            <Shield className="w-8 h-8 text-[#c4b5a5] mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-light mb-4">Discretion & Privacy</h2>
              <p className="text-[#666] leading-[1.9] mb-6 text-[15px]">
                Your trust is our most valuable asset. We employ the highest standards of 
                security and confidentiality, ensuring your privacy is protected with 
                the same care we apply to our craft.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'End-to-end encryption',
                  'Strict privacy protocols',
                  ' Confidential guarantee'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#c4b5a5]" />
                    <span className="text-sm text-[#666]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light tracking-[-0.02em] mb-4">Investment Options</h2>
          <p className="text-[#9a8b7a] text-sm">Choose your level of engagement</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Editorial', price: '$2,500', period: 'per feature', features: ['Single editorial feature', 'Basic consultation', 'Standard delivery'] },
            { name: 'Collection', price: '$8,500', period: 'per campaign', features: ['Multi-feature campaign', 'Strategic planning', 'Priority support', 'Analytics report'] },
            { name: 'Atelier', price: 'Custom', period: 'tailored', features: ['Bespoke solutions', 'Dedicated team', 'White-glove service', 'Exclusive access'] }
          ].map((plan) => (
            <div key={plan.name} className="border border-[#e0d5c7] p-8 text-center group hover:border-[#c4b5a5] transition-colors">
              <h3 className="text-lg font-light mb-2">{plan.name}</h3>
              <div className="text-3xl font-light mb-1">{plan.price}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#9a8b7a] mb-6">{plan.period}</div>
              <ul className="space-y-3 mb-8 text-sm text-[#666]">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase cursor-default border-b border-[#1a1a1a] pb-1">
                Inquire Now
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light tracking-[-0.02em]">Common Inquiries</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            { q: 'What distinguishes your editorial approach?', a: 'Our approach combines timeless aesthetics with modern sensibilities, creating content that resonates across generations.' },
            { q: 'How do you maintain such high standards?', a: 'Every piece undergoes rigorous review by our editorial board, ensuring consistency with our luxury ethos.' },
            { q: 'Can you accommodate specific brand requirements?', a: 'We specialize in adapting our editorial style to complement and enhance your unique brand identity.' },
            { q: 'What is your typical timeline?', a: 'Projects typically span 4-8 weeks, though we accommodate expedited timelines for urgent needs.' }
          ].map((item, i) => (
            <div key={i} className="border-b border-[#e0d5c7] pb-8">
              <h3 className="text-lg font-light mb-3">{item.q}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mb-20">
        <div className="p-12 border border-[#e0d5c7] text-center">
          <Mail className="w-8 h-8 text-[#c4b5a5] mx-auto mb-6" />
          <h2 className="text-2xl font-light mb-4">Begin the Conversation</h2>
          <p className="text-[#666] mb-8 max-w-md mx-auto">
            Let us craft an editorial experience that reflects your commitment to excellence.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-[#d4c5b5] text-[#1a1a1a] placeholder-[#9a8b7a] focus:outline-none focus:border-[#c4b5a5]"
              style={{ fontSize: '13px' }}
            />
            <button className="px-8 py-3 border border-[#1a1a1a] text-[10px] tracking-[0.3em] uppercase hover:bg-[#1a1a1a] hover:text-[#FAF8F5] transition-colors">
              Send Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <Gem className="w-8 h-8 text-[#c4b5a5] mx-auto mb-8" />
          <blockquote className="text-3xl font-light italic leading-[1.6] mb-8 text-[#333]">
            "True luxury lies not in possession, but in experiencing every meticulously crafted moment of life."
          </blockquote>
          <cite className="text-[10px] tracking-[0.4em] uppercase text-[#9a8b7a] not-italic">
            — Editorial Philosophy
          </cite>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#9a8b7a] pt-8 border-t border-[#e0d5c7]">
        <span>© MMXXIV Élégance</span>
        <div className="flex items-center gap-6">
          <span className="cursor-default">Instagram</span>
          <span className="cursor-default">Pinterest</span>
        </div>
        <span>Crafted with Excellence</span>
      </footer>
    </div>
  );
};
