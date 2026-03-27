import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Gem, Award, Shield, Compass, Zap
} from 'lucide-react';

export const S13ArtDeco = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F3E5AB] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0F172A] overflow-x-hidden p-4 md:p-8">
      <style dangerouslySetInnerHTML={{ __html: `
        .deco-border {
          border: 1px solid #D4AF37;
          box-shadow: 0 0 0 4px #0F172A, 0 0 0 5px #D4AF37;
        }
        .deco-gold-gradient {
          background: linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .deco-gold-bg {
          background: linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%);
        }
        .deco-pattern {
          background-image: radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0);
          background-size: 24px 24px;
          opacity: 0.1;
        }
        .deco-sunburst {
          background: repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(212, 175, 55, 0.05) 10deg 20deg);
        }
        .deco-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
        }
      `}} />

      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none deco-pattern" />
      <div className="fixed inset-0 pointer-events-none deco-sunburst" />

      <div className="max-w-7xl mx-auto space-y-16 relative">
        {/* Navigation */}
        <header className="flex items-center justify-between py-12 border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-14 h-14 deco-border flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-700">
               <Gem size={28} className="text-[#D4AF37]" strokeWidth={1} />
            </div>
            <div>
               <span className="text-3xl font-light tracking-[0.3em] uppercase deco-gold-gradient">Gatsby</span>
               <div className="h-[1px] w-full bg-[#D4AF37] mt-1" />
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-12 font-light uppercase tracking-[0.2em] text-xs">
              {['Legacy', 'Avenue', 'Gallery', 'Private'].map((item) => (
                <span key={item} className="hover:text-white cursor-pointer transition-all relative group">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-8">
              <button className="px-10 py-3 border border-[#D4AF37] uppercase tracking-[0.2em] text-[10px] hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-500">
                Member Access
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#D4AF37]">
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-[#0F172A] border border-[#D4AF37] p-12 z-[100] relative text-center space-y-12">
             <div className="flex flex-col gap-10 text-xl font-light tracking-[0.4em] uppercase">
                {['Legacy', 'Avenue', 'Gallery', 'Private'].map((item) => (
                   <span key={item} className="text-[#D4AF37]">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-5 deco-gold-bg text-[#0F172A] font-bold uppercase tracking-[0.3em] text-xs shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Inquire Now
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center py-20 space-y-12">
           <div className="flex justify-center items-center gap-8 opacity-40">
              <div className="deco-line flex-grow" />
              <div className="w-3 h-3 border border-[#D4AF37] rotate-45" />
              <div className="deco-line flex-grow" />
           </div>
           
           <h1 className={`font-light tracking-[0.2em] uppercase deco-gold-gradient leading-tight ${isMobile ? 'text-5xl' : 'text-8xl'}`}>
             Elegance <br /> 
             <span className="italic tracking-widest">Redefined</span>
           </h1>
           
           <p className={`text-[#F3E5AB]/60 uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed ${isMobile ? 'text-xs' : 'text-sm'}`}>
             A symphony of geometric precision and opulent details. Built for those who understand that true luxury lies in the geometry of the soul.
           </p>
           
           <div className="flex justify-center gap-12 pt-8">
              <button className="px-12 py-5 deco-gold-bg text-[#0F172A] text-xs font-bold uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(215,175,55,0.2)] hover:scale-105 transition-transform duration-700">
                 Explore Suite
              </button>
              <button className="hidden sm:block px-12 py-5 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-[0.4em] hover:bg-white/5 transition-colors">
                 Our Heritage
              </button>
           </div>
           
           <div className="pt-24 flex justify-center">
              <div className="w-[1px] h-32 bg-gradient-to-b from-[#D4AF37] to-transparent" />
           </div>
        </section>

        {/* Content Section - Symmetric Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#D4AF37]/30">
          {[
            { icon: Award, title: 'Prestigious', text: 'Awarded for architectural excellence and design symmetry world-wide.' },
            { icon: Shield, title: 'Fortified', text: 'Impenetrable security protocols wrapped in layers of golden encryption.' },
            { icon: Compass, title: 'Navigated', text: 'Directed by visionaries who master the balance of form and function.' }
          ].map((item, i) => (
            <div key={i} className="p-16 text-center space-y-10 border-r border-[#D4AF37]/30 last:border-r-0 group hover:bg-[#D4AF37]/5 transition-colors duration-700">
               <div className="w-16 h-16 border border-[#D4AF37] mx-auto flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-700">
                  <item.icon size={24} className="text-[#D4AF37] -rotate-45 group-hover:rotate-0 transition-transform duration-700" strokeWidth={1} />
               </div>
               <h3 className="text-xl font-light tracking-[0.3em] uppercase text-white">{item.title}</h3>
               <p className="text-[10px] leading-loose tracking-[0.2em] uppercase text-[#F3E5AB]/40 font-light">
                  {item.text}
               </p>
               <div className="pt-6">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] cursor-pointer hover:text-white transition-colors">Discover</span>
               </div>
            </div>
          ))}
        </section>

        {/* Art Sequence */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="relative group">
              <div className="absolute inset-[-20px] border border-[#D4AF37]/20 pointer-events-none" />
              <div className="absolute inset-0 bg-[#D4AF37]/5 z-10 group-hover:bg-transparent transition-colors duration-1000" />
              <div className="aspect-[4/5] bg-[#0A0F1D] deco-border p-12 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full deco-sunburst opacity-20" />
                 <div className="relative z-20 h-full border border-[#D4AF37]/40 p-8 flex flex-col justify-end">
                    <p className="text-4xl font-light uppercase tracking-[0.3em] leading-tight deco-gold-gradient mb-8">
                       The <br /> Golden <br /> Standard
                    </p>
                    <div className="h-[2px] w-24 bg-[#D4AF37]" />
                 </div>
              </div>
           </div>
           
           <div className="space-y-12">
              <div className="space-y-4">
                 <span className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37]">Est. 1925</span>
                 <h2 className="text-4xl md:text-5xl font-light uppercase tracking-[0.2em] leading-tight text-white">Symmetry is the <br />Language of Nature.</h2>
              </div>
              
              <p className="text-sm font-light uppercase tracking-[0.2em] leading-relaxed text-[#F3E5AB]/50 border-l-2 border-[#D4AF37] pl-8">
                Every line we draw is a tribute to the era of excess and the pursuit of absolute geometric perfection. We don't just build, we compose.
              </p>
              
              <div className="space-y-8 pt-8">
                 {[
                   'Mathematical Proportions',
                   'Linear Opulence',
                   'Structural Verve',
                   'Chromatic Sophistication'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-6 group">
                      <div className="w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center rotate-45 group-hover:bg-[#D4AF37] group-hover:text-[#0F172A] transition-all duration-500">
                         <Star size={12} className="rotate-[-45deg]" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[#F3E5AB]/80 group-hover:text-[#D4AF37] transition-colors">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Pricing tiers */}
        <section className="py-24 border-y border-[#D4AF37]/30">
          <h2 className="text-xs uppercase tracking-[0.8em] text-center mb-24 deco-gold-gradient">Tier Selection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Silver', price: '2,500', desc: 'Entry level luxury' },
              { name: 'Gold', price: '5,000', desc: 'Standard excellence', featured: true },
              { name: 'Platinum', price: '12,000', desc: 'Unmatched access' },
              { name: 'Diamond', price: 'Custom', desc: 'Infinite possibilities' }
            ].map((p, i) => (
              <div key={i} className={`p-12 border border-[#D4AF37]/30 flex flex-col items-center text-center space-y-8 group ${p.featured ? 'bg-[#D4AF37]/10' : ''}`}>
                 <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#F3E5AB]/40 group-hover:text-white transition-colors">{p.name}</h4>
                 <div className="h-[1px] w-8 bg-[#D4AF37]" />
                 <div className="py-4">
                    <span className="text-4xl font-light uppercase tracking-tighter text-white">{p.price}</span>
                    <span className="block text-[8px] uppercase tracking-widest text-[#D4AF37] mt-2 underline">Tokens per annum</span>
                 </div>
                 <p className="text-[9px] uppercase tracking-[0.2em] text-[#F3E5AB]/30 max-w-[150px] leading-relaxed">{p.desc}</p>
                 <button className={`w-full py-4 uppercase text-[10px] tracking-[0.4em] transition-all duration-700 ${p.featured ? 'deco-gold-bg text-[#0F172A] font-bold shadow-[0_0_20px_rgba(215,175,55,0.2)]' : 'border border-[#D4AF37] text-[#D4AF37]'}`}>
                    Acquire
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ - Accordion style */}
        <section className="py-24 max-w-3xl mx-auto space-y-16">
           <h2 className="text-xl font-light tracking-[0.5em] uppercase text-center deco-gold-gradient">Inquiries</h2>
           <div className="space-y-4">
              {[
                { q: 'What defines the Gatsby standard?', a: 'A rigorous adherence to 1920s geometric principles combined with modern technical reliability.' },
                { q: 'Is the golden tier transferable?', a: 'All acquisitions are strictly bound to the original member for the first three fiscal quarters.' },
                { q: 'Can we request custom geometry?', a: 'Absolutely. Our Diamond tier allows for full structural customisation by our master architects.' }
              ].map((faq, i) => (
                 <div key={i} className="border-b border-[#D4AF37]/20 pb-4">
                    <button 
                       className="w-full flex justify-between items-center py-6 text-left group"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-[10px] uppercase tracking-[0.4em] text-white group-hover:text-[#D4AF37] transition-colors">{faq.q}</span>
                       <ChevronDown size={18} className={`text-[#D4AF37] transition-transform duration-700 ${openFaq === i ? 'rotate-180' : ''}`} strokeWidth={1} />
                    </button>
                    {openFaq === i && (
                       <div className="pb-8 text-[10px] uppercase tracking-[0.2em] text-[#F3E5AB]/40 leading-loose animate-in slide-in-from-top-4 duration-700 italic">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 border-t border-[#D4AF37]/30 text-center space-y-12">
           <div className="flex justify-center gap-16 mb-8">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <div key={i} className="text-[#D4AF37] hover:text-white transition-colors cursor-pointer group">
                   <Icon size={20} className="transform group-hover:scale-125 transition-transform" strokeWidth={1} />
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-center gap-12 text-[9px] uppercase tracking-[0.5em] text-[#F3E5AB]/30">
              <span className="hover:text-[#D4AF37] cursor-pointer">Privacy Charter</span>
              <span className="hover:text-[#D4AF37] cursor-pointer">Geometric Rights</span>
              <span className="hover:text-[#D4AF37] cursor-pointer">Heritage Trust</span>
           </div>
           
           <div className="pt-12">
              <div className="w-12 h-12 deco-border mx-auto flex items-center justify-center rotate-45">
                 <Gem size={20} className="-rotate-45" strokeWidth={1} />
              </div>
              <p className="mt-12 text-[8px] uppercase tracking-[1em] text-[#D4AF37]/40">
                 © 2026 GATSBY ESTATE WORLDWIDE. ALL GEOMETRY RESERVED.
              </p>
           </div>
        </footer>
      </div>
    </div>
  );
};
