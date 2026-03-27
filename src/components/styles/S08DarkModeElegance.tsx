import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Shield, Zap, Award, Gem, Moon, Eye, Smartphone, Cpu
} from 'lucide-react';

export const S08DarkModeElegance = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] font-sans antialiased selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Subtle Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-[10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] w-[30%] h-[30%] bg-blue-900/5 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between font-serif">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-500">
               <Gem size={18} className="text-white" />
            </div>
            <span className="text-2xl font-light tracking-[0.1em]">LUMIÈRE</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-12 font-sans overflow-hidden">
              {['Collection', 'Essence', 'Registry', 'Contact'].map((item) => (
                <span key={item} className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94A3B8] hover:text-white cursor-pointer transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 group-hover:w-full transition-all duration-500" />
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-8 font-sans">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] cursor-pointer hover:text-white">Account</span>
              <button className="px-8 py-3 bg-white text-[#020617] text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white/90 transition-all">
                The Entry
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#94A3B8]">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="absolute top-20 left-0 right-0 bg-[#020617]/95 border-b border-white/10 p-12 z-50 text-center font-sans backdrop-blur-3xl">
            <div className="flex flex-col gap-10">
              {['Collection', 'Essence', 'Registry', 'Contact'].map((item) => (
                <span key={item} className="text-xs font-bold uppercase tracking-[0.4em] text-[#94A3B8]">
                  {item}
                </span>
              ))}
              <hr className="border-white/5" />
              <button className="w-full px-6 py-4 bg-white text-[#020617] text-xs font-bold uppercase tracking-[0.3em]">
                Begin Experience
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-56 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10 font-serif">
          <div className="inline-block py-1.5 px-6 border border-indigo-500/20 rounded-full text-[10px] font-bold font-sans uppercase tracking-[0.4em] text-indigo-400 mb-12 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
             V_08 Pure Elegance
          </div>
          
          <h1 className={`font-light leading-[1.05] tracking-tight mb-12 ${isMobile ? 'text-5xl' : 'text-9xl'}`}>
            Bespoke <br />
            <span className="italic relative">
              Infrastructure.
              <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
            </span>
          </h1>
          
          <p className={`text-[#94A3B8] mb-16 mx-auto leading-relaxed font-sans ${isMobile ? 'text-sm' : 'text-xl max-w-2xl font-light italic'}`}>
            Experience the pinnacle of digital craftsmanship. We provide seamless, high-performance architectures defined by their quiet strength and absolute precision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 font-sans">
            <button className="w-full sm:w-auto px-12 py-5 bg-white text-[#020617] text-[11px] font-bold uppercase tracking-[0.3em] rounded-sm hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 transition-all">
              Initialize
            </button>
            <button className="group w-full sm:w-auto px-12 py-5 bg-transparent border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-sm hover:border-indigo-500/50 transition-all flex items-center justify-center gap-3">
              Explore Essence
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* Luxury Detail Graphic */}
        <div className="max-w-7xl mx-auto mt-40 relative group">
           <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] rounded-full group-hover:bg-indigo-500/10 transition-colors" />
           <div className="bg-[#0F172A]/40 border border-white/5 rounded-[4rem] aspect-[21/9] flex items-center justify-between p-2 lg:p-4 overflow-hidden shadow-2xl backdrop-blur-3xl group">
              <div className="w-[30%] h-full bg-gradient-to-br from-indigo-500/20 to-transparent flex flex-col justify-center p-12 border-r border-white/5 relative">
                 <div className="absolute top-10 left-10 text-[8px] font-bold text-white/20 uppercase tracking-[0.5em] vertical-text">SEC_01_LUX</div>
                 <Award size={64} strokeWidth={1} className="text-white/40 mb-10 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-1000" />
                 <h3 className="text-2xl font-serif font-light italic mb-2 tracking-wide">Pure Craft</h3>
                 <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-indigo-400/80">Refined v.04</p>
              </div>
              <div className="w-[70%] h-full flex items-center justify-center relative p-8">
                 <div className="grid grid-cols-4 gap-4 w-full h-full p-12">
                     {[...Array(16)].map((_, i) => (
                         <div key={i} className={`h-full bg-white/5 transition-all duration-1000 delay-${i*50} group-hover:bg-indigo-500/10 border border-white/5`}>
                            {i === 5 && <div className="w-full h-full bg-indigo-600 animate-pulse opacity-20" />}
                         </div>
                     ))}
                 </div>
                 <div className="absolute top-10 right-10 flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 bg-[#0F172A]/40 border-y border-white/5 relative">
        <div className="absolute top-0 right-10 text-[15vw] font-serif font-black text-white/[0.02] pointer-events-none select-none italic">ESSENCE</div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 font-sans">
            {[
              { icon: Shield, title: 'Obsidian Integrity', desc: 'Immutable security protocols wrapped in an elegant shell.' },
              { icon: Cpu, title: 'Neural Flow', text: 'Optimized algorithmic structures for effortless data transition.' },
              { icon: Moon, title: 'Nocturnal Speed', text: 'Uncompromised performance, regardless of the environment scale.' }
            ].map((feature, i) => (
              <div key={i} className="group cursor-default">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-10 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-700">
                  <feature.icon size={20} strokeWidth={1} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-[0.2em] mb-6 italic underline decoration-indigo-500/20 underline-offset-8">0{i+1} / {feature.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed text-sm font-medium">{feature.desc || feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Elegant */}
      <section className="py-40 px-6 font-serif underline-offset-[16px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
           <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent border border-white/5 rounded-[4rem] -z-10 translate-x-12 translate-y-12 transition-transform duration-1000 group-hover:translate-x-8 group-hover:translate-y-8" />
              <div className="bg-[#020617] border border-white/10 p-24 rounded-[4rem] aspect-square flex items-center justify-center shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-12 left-12 w-20 h-20 bg-indigo-500/5 rounded-full blur-3xl" />
                 <Eye size={120} strokeWidth={0.5} className="text-white/20 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-1000" />
                 <div className="absolute bottom-12 right-12 text-[8px] font-sans font-black uppercase tracking-[0.6em] text-white/10">VISION_08</div>
              </div>
           </div>
           
           <div className="order-1 lg:order-2 space-y-16">
              <h2 className={`font-light leading-[1.1] tracking-tighter italic ${isMobile ? 'text-4xl' : 'text-7xl'}`}>
                Visualizing <br />the <span className="text-indigo-400">Invisible.</span>
              </h2>
              <p className="font-sans text-[#94A3B8] text-xl leading-relaxed font-light italic opacity-80">
                True elegance lies in the details that most ignore. Every pixel is intentional, every shadow is sculpted for maximum emotional resonance.
              </p>
              <div className="space-y-6 font-sans italic">
                 {[
                   'Sculpted Lighting Effects',
                   'Mathematically Precise Spacing',
                   'Cohesive Color Harmonization',
                   'Motion that Mimics Liquid'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-6 group cursor-pointer border-b border-white/5 pb-6">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-[3] transition-transform duration-500" />
                      <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#94A3B8] group-hover:text-white transition-colors">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-48 px-6 bg-gradient-to-b from-transparent to-[#0F172A]/80 font-serif">
        <div className="max-w-4xl mx-auto text-center">
           <QuoteIcon className="mx-auto mb-16 text-indigo-500/20" size={64} fill="currentColor" />
           <p className="text-3xl md:text-5xl font-light leading-snug italic text-white/90 mb-20 px-4 underline decoration-indigo-500/10">
              "When you reach this level of sophistication, the technology itself disappears, leaving only the experience of absolute control."
           </p>
           <div className="font-sans italic">
              <p className="text-sm font-bold uppercase tracking-[0.4em] mb-2">Julian Vercetti</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#94A3B8]">Creative Director, Obsidian Labs</p>
           </div>
        </div>
      </section>

      {/* Values / Tiers */}
      <section className="py-40 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-xs font-bold font-sans uppercase tracking-[0.6em] text-indigo-400/60 mb-8 italic">The Investment</h2>
             <div className="w-20 h-px bg-white/10 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans px-4">
            {[
              { name: 'Onyx', price: '$0', desc: 'Standard access for distinguished individuals.', accent: false },
              { name: 'Azure', price: '$250', desc: 'Elevated features for core contributors.', accent: true },
              { name: 'Velvet', price: 'Private', desc: 'Individually curated architecture systems.', accent: false }
            ].map((p, i) => (
              <div key={i} className={`p-12 text-center rounded-3xl border transition-all duration-1000 ${p.accent ? 'bg-white text-[#020617] border-white scale-105 shadow-[0_40px_80px_rgba(255,255,255,0.05)] shadow-2xl z-10' : 'bg-[#0F172A]/20 border-white/5 hover:border-white/10'}`}>
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 italic">{p.name} / PER_UNIT</h3>
                <div className="mb-12">
                  <span className="text-7xl font-serif font-light italic tracking-tighter">{p.price}</span>
                </div>
                <p className={`text-[11px] mb-16 h-8 uppercase tracking-widest font-semibold italic ${p.accent ? 'text-[#020617]/40' : 'text-[#94A3B8]'}`}>{p.desc}</p>
                <button className={`w-full py-5 text-[11px] font-bold uppercase tracking-[0.4em] rounded-sm transition-all duration-700 ${p.accent ? 'bg-[#020617] text-white hover:bg-black' : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black'}`}>
                  Access Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-40 px-6 font-sans">
        <div className="max-w-2xl mx-auto">
           <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-center mb-24 text-indigo-400 italic">Common Ground</h2>
           <div className="space-y-4">
              {[
                 { q: 'Is it too dark?', a: 'Darkness is the canvas. It reduces eye fatigue and enhances focus on primary objectives.' },
                 { q: 'Can I change the accent?', a: 'The indigo pulse is scientifically selected for elegance, but the registry supports customization.' },
                 { q: 'What is Obsidian Integrity?', a: 'Our peak standard for security and structural stability in complex digital environments.' }
              ].map((faq, i) => (
                 <div key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors rounded-xl overflow-hidden group">
                    <button 
                       className="w-full p-8 text-left flex justify-between items-center group"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#94A3B8] group-hover:text-white transition-colors">{faq.q}</span>
                       <span className="text-sm opacity-20 group-hover:opacity-100">{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && (
                       <div className="px-8 pb-8 text-[11px] italic text-indigo-400 group-hover:text-white leading-relaxed uppercase tracking-widest animate-in slide-in-from-top-2 duration-500">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-56 px-6 text-center bg-gradient-to-t from-[#020617] to-transparent font-serif overflow-hidden relative">
         <div className="absolute inset-0 bg-indigo-500/5 blur-[160px] -z-10" />
         <h2 className={`font-light italic leading-[0.8] mb-20 tracking-tight ${isMobile ? 'text-6xl' : 'text-[12rem]'}`}>Own the <br />Silent Night.</h2>
         <button className="px-16 py-6 bg-white text-[#020617] text-[10px] font-bold uppercase tracking-[0.4em] rounded-sm hover:-translate-y-1 hover:shadow-2xl transition-all duration-1000">
            Initialize Registry
         </button>
         <div className="mt-24 flex items-center justify-center gap-10 opacity-10 font-sans italic">
            {[Award, Gem, Moon].map((Icon, i) => <Icon key={i} size={48} strokeWidth={1} />)}
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 font-sans italic opacity-60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8 font-serif">
               <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <Gem size={14} strokeWidth={1.5} />
               </div>
               <span className="text-lg font-light tracking-[0.2em] uppercase not-italic">LUMIÈRE</span>
            </div>
            <p className="text-[10px] font-bold text-[#F8FAFC] max-w-xs leading-relaxed uppercase tracking-[0.3em] mb-12">
               The intersection of high fashion and elite engineering. Luxury digital solutions for the discerning world.
            </p>
            <div className="flex gap-10">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-indigo-400 transition-colors"><Icon size={18} strokeWidth={1.5} /></a>
              ))}
            </div>
          </div>
          
          {['Registry', 'Essence', 'Legal'].map((title, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-black text-white mb-8 uppercase tracking-[0.4em] not-italic underline decoration-indigo-500/30 underline-offset-8 decoration-2">{title}</h4>
              <ul className="space-y-4">
                {['Archive', 'Atelier', 'Privacy'].map((item) => (
                  <li key={item}><a href="#" className="text-[10px] text-[#94A3B8] hover:text-white uppercase tracking-[0.2em] transition-colors font-bold not-italic">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] uppercase tracking-[0.4em] font-black not-italic text-[#94A3B8]">
          <p>© 2026 LUMIÈRE SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8 italic">
             <Smartphone size={10} strokeWidth={2} />
             <span>Refinement</span>
             <Award size={10} strokeWidth={2} />
             <span>Excellence</span>
             <Gem size={10} strokeWidth={2} className="text-indigo-500" />
          </div>
        </div>
      </footer>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}} />
    </div>
  );
};

const QuoteIcon = ({ className, size, fill }: { className?: string; size?: number; fill?: string }) => (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={fill} 
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H15.017C13.9124 7 13.017 7.89543 13.017 9V14C13.017 15.1046 12.1216 16 11.017 16H9.017C7.91243 16 7.017 16.8954 7.017 18V21M1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C7.12157 16 8.017 15.1046 8.017 14V9C8.017 7.89543 7.12157 7 6.017 7H2.017C0.91243 7 0.017 7.89543 0.017 9V14C0.017 15.1046 -0.87857 16 -1.98314 16H-3.98314C-5.08771 16 -5.98314 16.8954 -5.98314 18V21" />
    </svg>
);
