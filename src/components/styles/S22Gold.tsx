import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Award, Shield, Compass, Gem, Briefcase,
  Play, Globe, Zap, Crown
} from 'lucide-react';

export const S22Gold = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D4AF37] font-serif antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0A] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .gold-border {
          border: 1px solid #D4AF37;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.2), inset 0 0 5px rgba(212, 175, 55, 0.1);
        }
        .gold-text {
          background: linear-gradient(135deg, #D4AF37 0%, #F7E7CE 50%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gold-bg {
          background: linear-gradient(135deg, #D4AF37 0%, #F7E7CE 50%, #D4AF37 100%);
        }
        .royal-shadow {
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 1), 0 0 20px rgba(212, 175, 55, 0.05);
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .gold-line {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%);
        }
      `}} />

      {/* Background patterns */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1000px] bg-[#D4AF37] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative p-4 md:p-12">
        {/* Navigation */}
        <header className="flex items-center justify-between py-10 px-12 gold-border bg-black/80 backdrop-blur-xl rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-20" />
          
          <div className="flex items-center gap-6 group cursor-pointer relative z-10">
            <div className="w-14 h-14 border-2 border-[#D4AF37] flex items-center justify-center transform group-hover:rotate-[135deg] transition-transform duration-1000">
               <Crown size={28} className="text-[#D4AF37] -rotate-[135deg] group-hover:rotate-0 transition-transform duration-1000" strokeWidth={1} />
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-bold tracking-[0.3em] uppercase gold-text">AUREUM</span>
               <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mt-1">The Standard of Wealth</span>
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.4em] text-white/50 relative z-10">
              {['Portfolio', 'Vault', 'Assets', 'Reserve'].map((item) => (
                <span key={item} className="hover:text-[#D4AF37] cursor-pointer transition-all relative group">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-700" />
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <button className="px-10 py-4 gold-bg text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-xl relative z-10">
               Entrance
            </button>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#D4AF37] relative z-10">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-black border-2 border-[#D4AF37] p-16 z-[100] relative rounded-3xl text-center space-y-16 animate-in zoom-in-95 duration-700">
             <div className="flex flex-col gap-10 text-xl font-bold tracking-[0.4em] uppercase text-white">
                {['Portfolio', 'Vault', 'Assets', 'Reserve'].map((item) => (
                   <span key={item} className="text-[#D4AF37]">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-6 gold-bg text-black text-[10px] font-bold uppercase tracking-[0.4em]">
                Member Access
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center space-y-20 py-20 relative">
           <div className="flex justify-center mb-10">
              <div className="w-1 h-32 bg-gradient-to-b from-[#D4AF37] to-transparent shadow-[0_0_20px_#D4AF37]" />
           </div>
           
           <div className="space-y-12">
              <h1 className={`font-bold leading-[0.85] tracking-tight uppercase gold-text ${isMobile ? 'text-6xl px-4' : 'text-[10rem]'}`}>
                Prestige <br /> 
                <span className="italic pl-12 lg:pl-32 text-white opacity-80 decoration-[#D4AF37] underline decoration-4 underline-offset-[20px]">Defined.</span>
              </h1>
              
              <div className="gold-line w-64 mx-auto" />
              
              <p className={`text-white font-medium tracking-[0.2em] max-w-2xl mx-auto leading-loose italic opacity-50 ${isMobile ? 'text-lg px-6' : 'text-3xl'}`}>
                 FOR THOSE WHO APPRECIATE THE WEIGHT OF EXCELLENCE. <br /> A LEGACY BUILT ON UNCOMPROMISING PRECISION.
              </p>
              
              <div className="flex flex-wrap justify-center gap-12 pt-16">
                 <button className="px-20 py-8 gold-bg text-black text-2xl font-bold uppercase tracking-widest hover:scale-110 transition-transform shadow-[0_30px_60px_-12px_rgba(212,175,55,0.4)] flex items-center gap-6 group">
                    Jack Pot
                    <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform duration-500" strokeWidth={3} />
                 </button>
                 <button className="px-20 py-8 border-2 border-[#D4AF37] text-[#D4AF37] text-2xl font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all">
                    The Vault
                 </button>
              </div>
           </div>
        </section>

        {/* Feature grid */}
        <section className="py-32 grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-[#D4AF37]/20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent pointer-events-none" />
          {[
            { icon: Award, title: 'Bespoke Quality', text: 'Tailored for the elite, ensuring every interaction is a masterclass in luxury.' },
            { icon: Shield, title: 'Absolute Security', text: 'Military-grade protection for your most valuable digital identifiers.' },
            { icon: Compass, title: 'Global Heritage', text: 'Spanning continents and centuries of design excellence.' }
          ].map((item, i) => (
            <div key={i} className="p-24 text-center space-y-12 border-x border-[#D4AF37]/10 first:border-l-0 last:border-r-0 group hover:bg-[#D4AF37]/5 transition-all duration-1000 cursor-pointer overflow-hidden relative">
               <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity" />
               <div className="w-20 h-20 border-2 border-[#D4AF37] mx-auto flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-1000 shadow-xl">
                  <item.icon size={32} className="text-[#D4AF37] -rotate-45 group-hover:rotate-0 transition-transform duration-1000" strokeWidth={1} />
               </div>
               <h3 className="text-3xl font-bold tracking-[0.3em] uppercase gold-text">{item.title}</h3>
               <p className="text-[12px] leading-loose tracking-[0.2em] text-white/30 font-medium px-4">
                  {item.text}
               </p>
               <div className="pt-10">
                  <span className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-bold pb-2 border-b border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all">EXAMINE ASSETS</span>
               </div>
            </div>
          ))}
        </section>

        {/* Visual Showcase */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="relative group">
              <div className="absolute inset-[-60px] border border-[#D4AF37]/10 pointer-events-none rounded-full" />
              <div className="aspect-square bg-black border-2 border-[#D4AF37] rounded-full p-20 flex flex-col items-center justify-center royal-shadow overflow-hidden relative">
                 <div className="absolute inset-0 opacity-10 animate-shimmer" />
                 <Gem size={200} className="gold-text opacity-40 animate-pulse" strokeWidth={0.5} />
                 <div className="relative z-10 text-center space-y-10">
                    <h3 className="text-6xl font-bold tracking-[0.2em] uppercase gold-text">AUREUM</h3>
                    <p className="text-xs uppercase tracking-[0.8em] text-white/20">The Singularity of Wealth</p>
                 </div>
              </div>
           </div>
           
           <div className="space-y-16">
              <div className="space-y-8">
                 <span className="text-[12px] font-bold uppercase tracking-[1em] text-[#D4AF37]">The Charter</span>
                 <h2 className="text-5xl md:text-7xl font-bold leading-tight uppercase tracking-[0.1em] text-white">True Luxury <br /> <span className="gold-text">Has No Equal.</span></h2>
              </div>
              
              <p className="text-2xl font-light italic leading-loose text-white/50 border-l-4 border-[#D4AF37] pl-12">
                "Our commitment is not to the masses, but to the few who understand that perfection is not an option—it is a requirement."
              </p>
              
              <div className="grid grid-cols-2 gap-10 pt-10">
                 {[
                   { label: 'Asset Value', value: '$4.2B' },
                   { label: 'Member Count', value: '100' },
                   { label: 'Legacy Years', value: '250+' },
                   { label: 'Trust Index', value: '99.9%' }
                 ].map((stat, i) => (
                   <div key={i} className="space-y-3">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-white/20">{stat.label}</span>
                      <div className="text-4xl font-bold gold-text">{stat.value}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Pricing columns / Tiers */}
        <section className="py-24 text-center overflow-hidden">
           <h2 className="text-[12px] font-bold uppercase tracking-[1.5em] text-[#D4AF37] mb-32 opacity-30">Selection Tiers</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-6 relative">
            <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-[#D4AF37]/20 z-0" />
            {[
              { name: 'TITANIUM', price: '$5,000', color: 'White' },
              { name: 'SOLID_GOLD', price: '$25,000', color: 'Gold', featured: true },
              { name: 'ANTHRACITE', price: '$100k+', color: 'Black' }
            ].map((p, i) => (
              <div key={i} className={`p-20 border-2 flex flex-col items-center gap-12 relative transition-all duration-1000 z-10 ${p.featured ? 'bg-black border-[#D4AF37] scale-110 royal-shadow' : 'bg-black border-[#D4AF37]/20 hover:border-[#D4AF37]/60'}`}>
                 {p.featured && <div className="absolute top-[-30px] gold-bg text-black px-10 py-3 text-xs font-bold uppercase tracking-[0.5em] shadow-2xl">LIMITED RESERVE</div>}
                 <h4 className="text-[11px] font-bold uppercase tracking-[0.8em] text-white/50 italic">{p.name}</h4>
                 <div className="w-16 h-[1px] bg-[#D4AF37]/40" />
                 <div className="py-4">
                    <span className="text-7xl font-bold tracking-tighter gold-text">{p.price}</span>
                    <span className="block text-[9px] uppercase tracking-[0.6em] text-white/20 mt-6 italic">Fiscal Commitment</span>
                 </div>
                 <ul className="space-y-6 text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 h-32 italic">
                    <li>24/7 Elite Concierge</li>
                    <li>Private Vault Storage</li>
                    <li>Universal Asset Card</li>
                 </ul>
                 <button className={`w-full py-6 text-[10px] font-bold uppercase tracking-[0.6em] transition-all duration-700 ${p.featured ? 'gold-bg text-black' : 'border border-[#D4AF37] text-[#D4AF37]'}`}>
                    SEIZE ACCESS
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ - Prestige Accordion */}
        <section className="py-24 max-w-4xl mx-auto space-y-20 px-6">
           <div className="text-center space-y-6">
              <h2 className="text-5xl font-bold text-white uppercase tracking-[0.2em]">The Inquest</h2>
              <div className="gold-line w-32 mx-auto" />
           </div>
           
           <div className="space-y-4">
              {[
                { q: 'What is the minimum eligibility?', a: 'Applicants must demonstrate a legacy of excellence and a fiscal portfolio exceeding our Titanium thresholds. Each member is invited personally.' },
                { q: 'Is the vault insured?', a: 'Every asset within the Aureum Vault is backed by our private gold reserve and multi-layer sovereign guarantees.' },
                { q: 'Can access be inherited?', a: 'Our Charter provides specific protocols for lineage transition, ensuring your legacy remains within the Aureum ecosystem.' }
              ].map((faq, i) => (
                 <div key={i} className="border border-[#D4AF37]/10 group hover:border-[#D4AF37]/40 transition-all duration-700">
                    <button 
                       className="w-full flex justify-between items-center p-12 text-left"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-lg font-bold uppercase tracking-[0.2em] text-[#D4AF37]/70 group-hover:text-white transition-colors">{faq.q}</span>
                       <ChevronDown size={24} className={`text-[#D4AF37] transition-transform duration-1000 ${openFaq === i ? 'rotate-180' : ''}`} strokeWidth={1} />
                    </button>
                    {openFaq === i && (
                       <div className="px-12 pb-12 text-md font-medium tracking-[0.1em] text-white/40 leading-loose italic animate-in fade-in duration-1000">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-32 border-t border-[#D4AF37]/20 text-center space-y-24 relative overflow-hidden">
           <div className="absolute bottom-0 left-0 w-full h-[0.5px] gold-bg opacity-20" />
           
           <div className="flex justify-center gap-24 relative z-10">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <div key={i} className="text-white/20 hover:text-[#D4AF37] transition-all transform hover:scale-[1.5] duration-1000 cursor-pointer">
                   <Icon size={28} strokeWidth={1} />
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-center gap-24 text-[10px] font-bold uppercase tracking-[0.8em] text-white/20 relative z-10">
              <span className="hover:text-[#D4AF37] cursor-pointer">Privacy Charter</span>
              <span className="hover:text-[#D4AF37] cursor-pointer">Sovereign Terms</span>
              <span className="hover:text-[#D4AF37] cursor-pointer">Archive Trust</span>
           </div>
           
           <div className="flex flex-col items-center gap-12 relative z-10">
              <div className="w-[1px] h-32 bg-gradient-to-t from-[#D4AF37] to-transparent opacity-30 shadow-[0_0_20px_#D4AF37]" />
              <div className="flex flex-col gap-4">
                 <span className="text-[12px] font-black uppercase tracking-[2em] gold-text">AUREUM</span>
                 <p className="text-[8px] uppercase tracking-[1em] text-white/10 mt-10">
                    © 2026 HOUSE OF AUREUM PRESTIGE. ALL SOVEREIGN RIGHTS RESERVED.
                 </p>
              </div>
           </div>
        </footer>
      </div>
    </div>
  );
};
