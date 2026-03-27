import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Wind, Leaf, Sun, Moon, Sparkles, MoveRight
} from 'lucide-react';

export const S05JapaneseMinimal = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2D2926] font-serif antialiased selection:bg-[#A04A3B] selection:text-white overflow-x-hidden">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#2D2926 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#2D2926]/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between font-sans">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border border-[#2D2926]/20 flex items-center justify-center">
              <Sun size={16} strokeWidth={1.5} />
            </div>
            <span className="text-lg font-medium tracking-[0.2em] uppercase">Komorebi</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-12">
              {['Concept', 'Zen', 'Gallery', 'Story'].map((item) => (
                <span key={item} className="text-[11px] font-semibold tracking-[0.3em] uppercase hover:text-[#A04A3B] cursor-pointer transition-colors">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-8">
              <span className="text-[11px] font-semibold uppercase tracking-widest cursor-pointer opacity-60">Session</span>
              <button className="px-6 py-2 border border-[#2D2926] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#2D2926] hover:text-white transition-all duration-500">
                Begin
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 opacity-60">
              {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="absolute top-20 left-0 right-0 bg-[#FAF9F6] border-b border-[#2D2926]/10 p-10 z-50 text-center font-sans">
            <div className="flex flex-col gap-10">
              {['Concept', 'Zen', 'Gallery', 'Story'].map((item) => (
                <span key={item} className="text-xs font-bold uppercase tracking-[0.4em]">
                  {item}
                </span>
              ))}
              <button className="w-full px-6 py-4 bg-[#2D2926] text-[#FAF9F6] text-xs font-bold uppercase tracking-[0.3em]">
                Begin Journey
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-48 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             <div className="lg:col-span-8 relative">
                <div className="absolute -top-12 left-0 text-[10px] font-sans font-bold tracking-[0.5em] uppercase text-[#A04A3B] vertical-text hidden sm:block">
                    Aesthetica Japonica
                </div>
                <h1 className={`font-light italic leading-[1.1] mb-12 tracking-tight ${isMobile ? 'text-5xl' : 'text-8xl'}`}>
                    The beauty in <br />
                    <span className="text-[#A04A3B]">imperfection</span> <br />
                    and transience.
                </h1>
                <p className={`text-[#2D2926]/60 leading-relaxed mb-16 font-sans ${isMobile ? 'text-sm' : 'text-xl max-w-xl'}`}>
                   Wabi-sabi is the quintessential Japanese aesthetic. It is a beauty of things imperfect, impermanent, and incomplete. 
                   A beauty of things modest and humble.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center font-sans italic">
                    <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[#2D2926] hover:text-[#A04A3B] transition-colors">
                        Discover Path <MoveRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <div className="h-px w-20 bg-[#2D2926]/10 hidden sm:block" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-sans opacity-40">Est. Kyoto 2026</span>
                </div>
             </div>

             <div className="lg:col-span-4 self-center pt-20 lg:pt-0">
                <div className="relative aspect-[3/4] bg-[#FAF9F6] border border-[#2D2926]/10 p-1">
                   <div className="w-full h-full bg-[#E5E4E2] flex items-center justify-center relative overflow-hidden group">
                      {/* Abstract Zen circle (Enso) */}
                      <div className="w-48 h-48 rounded-full border border-dashed border-[#2D2926]/20 animate-spin-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-24 h-24 bg-[#FAF9F6] rounded-full flex items-center justify-center">
                            <Wind size={40} strokeWidth={1} className="text-[#A04A3B]" />
                         </div>
                      </div>
                      <div className="absolute bottom-6 right-6 font-sans text-[8px] uppercase tracking-[0.4em] opacity-40 italic">
                         Fig 05 / Enso
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-32 px-6 border-y border-[#2D2926]/5 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { icon: Leaf, title: 'Iki', sub: 'Elegance', desc: 'A spontaneous refined simplicity. The art of sophisticated restraint.' },
              { icon: Moon, title: 'Yugen', sub: 'Mystery', desc: 'An awareness of the universe that triggers emotional responses too deep for words.' },
              { icon: Sparkles, title: 'Shibusa', sub: 'Purity', desc: 'Unobtrusive beauty that reveals itself over time. Complexity within simplicity.' }
            ].map((feature, i) => (
              <div key={i} className="group text-center sm:text-left">
                <div className="mb-10 opacity-30 group-hover:opacity-100 group-hover:text-[#A04A3B] transition-all duration-1000">
                  <feature.icon size={32} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-light italic mb-2">{feature.title}</h3>
                <p className="font-sans text-[10px] uppercase tracking-[0.4em] mb-6 opacity-40 italic">{feature.sub}</p>
                <p className="text-sm text-[#2D2926]/60 leading-relaxed max-w-xs mx-auto sm:mx-0 font-sans">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meditative Content */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black opacity-[0.02] pointer-events-none select-none">ZEN</div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="order-2 lg:order-1 relative">
                 <div className="aspect-square bg-[#FAF9F6] border border-[#2D2926]/10 p-12">
                    <div className="w-full h-full border border-dashed border-[#2D2926]/10 flex items-center justify-center italic text-center text-4xl leading-snug p-8 font-light">
                       "Complexity is <br />the enemy of <br />eternal truth."
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2 space-y-12">
                 <h2 className="text-5xl md:text-7xl font-light italic leading-none mb-4">Space as <br />Substance.</h2>
                 <p className="font-sans text-[#2D2926]/60 text-lg leading-relaxed mb-12 italic">
                    In Japanese design, the void (Ma) is not empty. It is a presence that gives meaning to the elements it surrounds.
                 </p>
                 <div className="space-y-8 font-sans">
                    {[
                       'Intentional Negative Space',
                       'Organic Asymmetry',
                       'Harmonious Color Balance',
                       'Sustainable Craftsmanship'
                    ].map((item, i) => (
                       <div key={i} className="flex items-center gap-6 group cursor-pointer border-b border-[#2D2926]/5 pb-6">
                          <span className="text-[10px] font-bold opacity-30 italic">0{i+1}</span>
                          <span className="text-xs uppercase tracking-[0.3em] font-medium group-hover:text-[#A04A3B] transition-colors">{item}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-48 px-6 bg-[#2D2926] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto text-center">
           <div className="w-12 h-12 rounded-full border border-[#FAF9F6]/20 flex items-center justify-center mx-auto mb-16">
              <Star size={16} strokeWidth={1.5} className="text-[#A04A3B]" />
           </div>
           <p className="text-3xl md:text-5xl font-light italic leading-tight mb-20 px-4">
              "To design with soul is to design with silence. This system understands the gravity of the quiet moment."
           </p>
           <div className="font-sans italic">
              <p className="text-sm font-bold uppercase tracking-[0.4em] mb-2">Tadao Ando</p>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">Visionary Architect</p>
           </div>
        </div>
      </section>

      {/* Pricing / Exchange */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-light italic uppercase tracking-widest mb-4">Values</h2>
            <div className="w-12 h-px bg-[#A04A3B] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-[#2D2926]/5 font-sans">
            {[
              { name: 'Seed', price: '$00', desc: 'Cultivate personal thoughts and sketches.', accent: false },
              { name: 'Grown', price: '$85', desc: 'Expand your vision with advanced tools.', accent: true },
              { name: 'Sanctuary', price: 'Fixed', desc: 'Tailored architecture for sacred spaces.', accent: false }
            ].map((p, i) => (
              <div key={i} className={`p-16 text-center transition-colors duration-1000 ${p.accent ? 'bg-white shadow-2xl relative z-10' : 'bg-[#FAF9F6] border border-[#2D2926]/5'}`}>
                <h3 className="text-xs font-bold uppercase tracking-[0.4em] mb-6">{p.name} / 月</h3>
                <div className="mb-8">
                  <span className="text-5xl font-light italic">{p.price}</span>
                </div>
                <p className="text-[11px] text-[#2D2926]/50 mb-12 h-8 uppercase tracking-widest">{p.desc}</p>
                <button className={`w-full py-4 text-[10px] font-bold uppercase tracking-[0.3em] border transition-all duration-700 ${p.accent ? 'bg-[#2D2926] text-white border-[#2D2926]' : 'border-[#2D2926]/30 hover:bg-[#2D2926] hover:text-white'}`}>
                  Initiate
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 border-t border-[#2D2926]/5 bg-[#FAF9F6]">
        <div className="max-w-2xl mx-auto font-sans">
           <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-center mb-20 italic">The Inquiry</h2>
           <div className="space-y-4">
              {[
                 { q: 'Is it too minimal?', a: 'Minimalism is not the absence of things. It is the perfect amount of things.' },
                 { q: 'Why these colors?', a: 'They are drawn from nature—ink, rust, and clay. They ground us.' },
                 { q: 'How is it sustainable?', a: 'We build for longevity. Eternal code is the best way to honor the craft.' }
              ].map((faq, i) => (
                 <div key={i} className="border-b border-[#2D2926]/10">
                    <button 
                       className="w-full py-8 text-left flex justify-between items-center group"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-[11px] font-bold uppercase tracking-[0.3em] group-hover:text-[#A04A3B] transition-colors">{faq.q}</span>
                       <span className="text-sm opacity-40">{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && (
                       <div className="pb-8 text-[11px] italic text-[#2D2926]/60 leading-relaxed uppercase tracking-widest">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-6 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[#A04A3B] opacity-[0.02]" />
         <h2 className="text-5xl md:text-8xl font-light italic leading-none mb-16 tracking-tight">Walk the <br />Quiet Path.</h2>
         <button className="px-16 py-6 bg-[#2D2926] text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#A04A3B] transition-colors duration-1000">
            Establish Harmony
         </button>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-[#2D2926]/5 font-sans italic">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-8 h-8 rounded-full border border-[#2D2926]/20 flex items-center justify-center">
                  <Sun size={14} strokeWidth={1} />
               </div>
               <span className="text-sm font-bold tracking-[0.3em] uppercase not-italic">Komorebi</span>
            </div>
            <p className="text-[11px] font-bold text-[#2D2926]/40 max-w-xs leading-relaxed uppercase tracking-[0.2em] mb-12">
               A homage to traditional aesthetics in a modern digital space. Silence as a feature.
            </p>
            <div className="flex gap-10">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-[#2D2926]/40 hover:text-[#A04A3B] transition-colors"><Icon size={18} strokeWidth={1.5} /></a>
              ))}
            </div>
          </div>
          
          {['Registry', 'Ethics', 'Legal'].map((title, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-bold text-[#2D2926] mb-8 uppercase tracking-[0.3em] not-italic underline decoration-[#A04A3B]/30 underline-offset-8 decoration-2">{title}</h4>
              <ul className="space-y-4">
                {['Genesis', 'Archives', 'Protocol'].map((item) => (
                  <li key={item}><a href="#" className="text-[10px] text-[#2D2926]/40 hover:text-[#2D2926] uppercase tracking-[0.2em] transition-colors font-bold not-italic">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t border-[#2D2926]/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] uppercase tracking-[0.3em] font-bold not-italic opacity-40">
          <p>© 2026 KOMOREBI SYSTEMS. ALL HARMONY MAINTAINED.</p>
          <div className="flex items-center gap-8 italic">
            <span>Intent</span>
            <span>Silent</span>
            <span className="text-[#A04A3B] opacity-100">Eternal</span>
          </div>
        </div>
      </footer>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}} />
    </div>
  );
};
