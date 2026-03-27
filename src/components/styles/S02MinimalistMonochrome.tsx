import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Circle, Square, Triangle, Minus, Plus
} from 'lucide-react';

export const S02MinimalistMonochrome = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-black selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <Square size={16} className="text-white" fill="white" />
            </div>
            <span className="text-xl font-bold tracking-[0.2em] uppercase">MONO</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-12">
              {['Features', 'Work', 'Pricing', 'About'].map((item) => (
                <span key={item} className="text-xs font-bold uppercase tracking-widest hover:opacity-50 cursor-pointer transition-opacity">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-8">
              <span className="text-xs font-bold uppercase tracking-widest cursor-pointer">Login</span>
              <button className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                Join Now
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-black p-8 z-50">
            <div className="flex flex-col gap-8 text-center">
              {['Features', 'Work', 'Pricing', 'About'].map((item) => (
                <span key={item} className="text-sm font-bold uppercase tracking-widest">
                  {item}
                </span>
              ))}
              <hr className="border-black/5" />
              <button className="w-full px-6 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest">
                Join Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block py-1 px-4 border border-black text-[10px] font-bold uppercase tracking-[0.3em] mb-12">
            Edition 2026
          </div>
          
          <h1 className={`font-bold tracking-tighter mb-12 leading-[0.9] uppercase ${isMobile ? 'text-6xl' : 'text-[10rem]'}`}>
            Less <br /> but <br /> better.
          </h1>
          
          <p className={`text-zinc-500 mb-16 mx-auto leading-relaxed ${isMobile ? 'text-base' : 'text-xl max-w-xl font-medium italic'}`}>
            A study in meaningful functionalism. We remove the noise to reveal the essence of your digital experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group w-full sm:w-auto px-12 py-5 bg-black text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all">
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-12 py-5 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Distinction Section */}
      <section className="py-24 border-y border-black/5 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Founded', val: '2012' },
              { label: 'Projects', val: '450+' },
              { label: 'Awards', val: '12' },
              { label: 'Countries', val: '24' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2">{stat.label}</p>
                <p className="text-4xl font-bold tracking-tighter">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center md:text-left">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400 mb-4 font-mono">/ Core Principles</h2>
            <p className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">Built for the <br />discerning eye.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                icon: Triangle,
                title: 'Stark Contrast',
                desc: 'Utilizing absolute blacks and whites to create a visual hierarchy that cannot be ignored.'
              },
              {
                icon: Square,
                title: 'Grid Precision',
                desc: 'Every pixel is placed with mathematical intent, following a strict structural framework.'
              },
              {
                icon: Circle,
                title: 'Eternal Design',
                desc: 'Transcending temporary trends to remain relevant in a constantly evolving digital world.'
              }
            ].map((feature, i) => (
              <div key={i} className={`p-16 border-black/5 ${i !== 2 ? 'md:border-r' : ''} ${isMobile ? 'border-b' : ''}`}>
                <div className="w-12 h-12 border border-black flex items-center justify-center mb-10">
                  <feature.icon size={20} className="text-black" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{feature.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section with Image Placeholder */}
      <section className="py-32 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">Structure <br />is the <br />Soul.</h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-md leading-relaxed">
              We believe that the beauty of a product lies in its architecture. By stripping away the unnecessary, we expose the intelligence of the design.
            </p>
            <div className="space-y-6">
              {[
                'Mathematics-driven layout systems',
                'Type-first communication strategy',
                'Negative space as a primary asset',
                'Minimalist motion for emphasis'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="w-2 h-2 bg-white" />
                  <span className="text-xs font-bold uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square bg-zinc-900 overflow-hidden border border-white/10 group">
             {/* Abstract visual using pure CSS/Lucide */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-2 border-white/20 rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
                <div className="absolute w-20 h-20 bg-white" />
             </div>
             <div className="absolute bottom-8 left-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Visual Artifact 02-B
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-16">
            <Star size={24} fill="black" />
          </div>
          <p className="text-3xl md:text-4xl font-medium italic text-center leading-tight mb-12">
            "Design is a tool to enhance humanity. MONO understands this better than any other agency."
          </p>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest">Dietrich Rams</p>
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Chief Architect, Industrial Flow</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-center mb-16">/ Investments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-black/5 border border-black/5 max-w-5xl mx-auto">
             {[
               { name: 'Essence', price: '$0', desc: 'The base layer for personal explorations.' },
               { name: 'Intelligence', price: '$99', desc: 'The standard for professional creators.' },
               { name: 'Monolith', price: 'Custom', desc: 'Enterprise-grade structural integrity.' }
             ].map((plan, i) => (
               <div key={i} className="bg-white p-12 hover:bg-zinc-50 transition-colors">
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-2">{plan.name}</h3>
                  <div className="mb-8">
                    <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                  </div>
                  <p className="text-zinc-500 text-sm mb-12 leading-relaxed">{plan.desc}</p>
                  <button className={`w-full py-4 text-[10px] font-bold uppercase tracking-widest border transition-all ${i === 1 ? 'bg-black text-white border-black' : 'border-black hover:bg-black hover:text-white'}`}>
                    Select Plan
                  </button>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 border-t border-black/5 bg-zinc-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter uppercase text-center mb-16">Inquiry</h2>
          <div className="space-y-px bg-black/5 border border-black/5">
            {[
              { q: 'Why monochrome?', a: 'Color can distract. Black and white reveal form, contrast, and purpose.' },
              { q: 'Is it too stark?', a: 'Starkness is clarity. We design for focus, not for entertainment.' },
              { q: 'Who is this for?', a: 'Visionaries who appreciate the intersection of technology and art.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white">
                <button 
                  className="w-full p-8 text-left flex justify-between items-center group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-xs font-bold uppercase tracking-widest">{faq.q}</span>
                  {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 pt-0 text-zinc-500 text-sm italic leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-12 leading-none">Ready to <br />Simplify?</h2>
        <button className="px-16 py-6 bg-black text-white text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">
          Establish Contact
        </button>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-black flex items-center justify-center">
                <Square size={12} className="text-white" fill="white" />
              </div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase">MONO</span>
            </div>
            <p className="text-zinc-400 text-xs font-medium max-w-xs leading-relaxed uppercase tracking-widest">
              A minimalist design system for the modern web. Built with precision and intent.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-black mb-6 uppercase tracking-widest">Index</h4>
            <ul className="space-y-4">
              {['Home', 'Lab', 'Notes', 'Legal'].map((item) => (
                <li key={item}><a href="#" className="text-[10px] text-zinc-400 hover:text-black uppercase tracking-widest transition-colors font-bold">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-black mb-6 uppercase tracking-widest">Connect</h4>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Github size={18} /></a>
              <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold">
            © 2026 MONO INDUSTRIAL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4 text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
            <span>Precision</span>
            <div className="w-1 h-1 bg-zinc-300 rounded-full" />
            <span>Intent</span>
            <div className="w-1 h-1 bg-zinc-300 rounded-full" />
            <span>Clarity</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
