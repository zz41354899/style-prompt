import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Award, Shield, Compass, Gem, Briefcase,
  Play, Globe, Zap
} from 'lucide-react';

export const S19Luxury = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1C1C1C] font-serif antialiased selection:bg-[#F7E7CE] selection:text-[#1C1C1C] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .luxury-line {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%);
          opacity: 0.3;
        }
        .gold-gradient {
          background: linear-gradient(135deg, #D4AF37 0%, #F7E7CE 50%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .luxury-shadow {
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.05);
        }
        .refined-border {
          border: 0.5px solid rgba(212, 175, 55, 0.2);
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="max-w-7xl mx-auto space-y-24 relative p-4 md:p-12">
        {/* Navigation */}
        <header className="flex items-center justify-between py-12 border-b border-[#D4AF37]/10">
          <div className="flex items-center gap-10 group cursor-pointer">
             <div className="w-12 h-12 flex items-center justify-center border border-[#D4AF37]/30 transform group-hover:rotate-45 transition-transform duration-1000">
                <Gem size={24} className="text-[#D4AF37]" strokeWidth={1} />
             </div>
             <div className="flex flex-col">
                <span className="text-3xl font-light tracking-[0.4em] uppercase text-[#1C1C1C]">Aethel</span>
                <span className="text-[10px] font-sans tracking-[0.6em] uppercase text-[#D4AF37] mt-1 italic">Maison de Luxe</span>
             </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-12 text-[10px] font-sans tracking-[0.4em] uppercase font-light text-[#1C1C1C]/60">
              {['Portfolio', 'Heritage', 'Private', 'Atelier'].map((item) => (
                <span key={item} className="hover:text-[#D4AF37] cursor-pointer transition-all relative group">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-[0.5px] bg-[#D4AF37] group-hover:w-full transition-all duration-700" />
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-10">
               <button className="px-12 py-4 border border-[#D4AF37] text-[9px] font-sans tracking-[0.5em] uppercase hover:bg-[#D4AF37] hover:text-white transition-all duration-700">
                  Concierge
               </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#D4AF37]">
              {menuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-[#FDFCFB] border border-[#D4AF37]/20 p-16 z-[100] relative text-center space-y-16 animate-in slide-in-from-top-10 duration-700">
             <div className="flex flex-col gap-10 text-xl font-light tracking-[0.5em] uppercase text-[#1C1C1C]">
                {['Portfolio', 'Heritage', 'Private', 'Connect'].map((item) => (
                   <span key={item} className="text-[#1C1C1C]">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-6 bg-[#1C1C1C] text-white text-[10px] font-sans tracking-[0.6em] uppercase">
                Enterprise Login
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center space-y-20 py-16">
           <div className="flex justify-center mb-10">
              <div className="w-[1px] h-32 bg-gradient-to-b from-[#D4AF37] to-transparent" />
           </div>
           
           <div className="animate-fade-up">
              <span className="text-[10px] font-sans tracking-[1em] uppercase text-[#D4AF37] mb-8 block">In Pursuit of Pure Perfection</span>
              <h1 className={`font-light leading-tight tracking-[0.1em] uppercase text-[#1C1C1C] ${isMobile ? 'text-5xl' : 'text-9xl'}`}>
                Quiet <br /> 
                <span className="italic pl-12 lg:pl-32">Confidence</span>
              </h1>
           </div>
           
           <p className={`text-[#1C1C1C]/50 font-sans tracking-[0.2em] max-w-2xl mx-auto leading-relaxed italic ${isMobile ? 'text-sm px-6' : 'text-xl'}`}>
             Redefining the boundaries of elegance. Our mission is to provide an unparalleled experience through refined design and meticulous craftsmanship.
           </p>
           
           <div className="flex flex-wrap justify-center gap-12 pt-12">
              <button className="px-16 py-6 bg-[#1C1C1C] text-white text-[10px] font-sans tracking-[0.5em] uppercase hover:bg-[#D4AF37] transition-all duration-1000 luxury-shadow flex items-center gap-6 group">
                 The Collection
                 <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" strokeWidth={1} />
              </button>
              <button className="px-16 py-6 border border-[#D4AF37]/30 text-[#1C1C1C] text-[10px] font-sans tracking-[0.5em] uppercase hover:bg-[#F7E7CE]/20 transition-all duration-700">
                 Our Heritage
              </button>
           </div>
           
           <div className="pt-32 flex justify-center opacity-20">
              <div className="luxury-line w-full max-w-4xl" />
           </div>
        </section>

        {/* Feature grid */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-[#D4AF37]/10">
          {[
            { icon: Award, title: 'Unrivaled Quality', text: 'Every detail is scrutinized to meet the highest standards of global excellence.' },
            { icon: Shield, title: 'Total Discretion', text: 'Dedicated to maintaining the absolute privacy of our esteemed clientele.' },
            { icon: Compass, title: 'Visionary Reach', text: 'Exploring the future of luxury while staying rooted in timeless tradition.' }
          ].map((item, i) => (
            <div key={i} className="p-20 text-center space-y-12 border-x border-[#D4AF37]/5 first:border-l-0 last:border-r-0 group hover:bg-[#FDFCFB] hover:scale-[1.02] transition-all duration-1000 luxury-shadow">
               <div className="w-16 h-16 border border-[#D4AF37]/20 mx-auto flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-1000">
                  <item.icon size={28} className="text-[#D4AF37] -rotate-45 group-hover:rotate-0 transition-transform duration-1000" strokeWidth={0.5} />
               </div>
               <h3 className="text-xl font-light tracking-[0.3em] uppercase text-[#1C1C1C]">{item.title}</h3>
               <p className="text-[11px] font-sans leading-loose tracking-[0.1em] text-[#1C1C1C]/40 font-light px-4">
                  {item.text}
               </p>
               <div className="pt-8">
                  <span className="text-[9px] font-sans uppercase tracking-[0.6em] text-[#D4AF37] cursor-pointer hover:text-[#1C1C1C] transition-colors pb-1 border-b border-transparent hover:border-[#D4AF37]">Explore Details</span>
               </div>
            </div>
          ))}
        </section>

        {/* Visual Showcase Split */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="relative group">
              <div className="absolute inset-[-40px] border border-[#D4AF37]/10 pointer-events-none" />
              <div className="aspect-[3/4] bg-[#F3F4F6] relative overflow-hidden flex items-center justify-center luxury-shadow animate-fade-up">
                 <div className="w-full h-full bg-[#1C1C1C]/5 absolute inset-0 group-hover:opacity-0 transition-opacity duration-1000" />
                 <Gem size={100} className="text-[#D4AF37]/20" strokeWidth={0.5} />
                 <div className="absolute inset-12 border border-white/30 pointer-events-none" />
                 <div className="absolute bottom-16 left-16 space-y-4">
                    <p className="text-[10px] font-sans tracking-[0.8em] text-[#1C1C1C]/40 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-1000">Objét d'Art</p>
                    <div className="h-[1px] w-12 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                 </div>
              </div>
           </div>
           
           <div className="space-y-16 lg:pl-16">
              <div className="space-y-6">
                 <span className="text-[10px] font-sans uppercase tracking-[0.8em] text-[#D4AF37]">The Philosophy</span>
                 <h2 className="text-5xl md:text-6xl font-light uppercase tracking-[0.1em] leading-tight text-[#1C1C1C]">Simplicity is the <br />Ultimate Sophistication.</h2>
              </div>
              
              <p className="text-lg font-light tracking-tight leading-loose text-[#1C1C1C]/60 border-l border-[#D4AF37] pl-12 italic">
                We believe that true luxury does not shout. It whispers. It is found in the space between the notes, in the tension of a line, and in the purity of a single material.
              </p>
              
              <div className="space-y-10 pt-10">
                 {[
                   'Mathematical Symmetry in Layout',
                   'Minimalist Color Palettes',
                   'Elite Typographic Hierarchy',
                   'Bespoke User Experiences'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-10 group cursor-pointer hover:pl-4 transition-all duration-700">
                      <div className="w-2 h-2 rounded-full border border-[#D4AF37] group-hover:bg-[#D4AF37] transition-all" />
                      <span className="text-[11px] font-sans uppercase tracking-[0.4em] text-[#1C1C1C]/70 group-hover:text-[#1C1C1C] transition-colors">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Pricing tiers / Offerings */}
        <section className="py-24 text-center">
           <h2 className="text-[10px] font-sans uppercase tracking-[1em] text-[#D4AF37] mb-24">Exclusive Access</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Private', price: '$2,500', note: 'Essential Luxury' },
              { name: 'Reserve', price: '$8,000', note: 'Extended Heritage', featured: true },
              { name: 'Elite', price: '$15,000', note: 'Infinite Access' },
              { name: 'Bespoke', price: 'Inquire', note: 'Tailored Vision' }
            ].map((p, i) => (
              <div key={i} className={`p-16 border border-[#D4AF37]/10 flex flex-col items-center gap-10 transition-all duration-1000 ${p.featured ? 'bg-[#1C1C1C] text-white shadow-2xl scale-[1.05]' : 'bg-white hover:border-[#D4AF37]/40'}`}>
                 <h4 className="text-[10px] font-sans uppercase tracking-[0.6em] text-[#D4AF37]">{p.name}</h4>
                 <div className="w-8 h-[0.5px] bg-[#D4AF37]/30" />
                 <div className="py-2">
                    <span className="text-4xl font-light uppercase tracking-tight">{p.price}</span>
                    <span className="block text-[8px] font-sans uppercase tracking-widest text-[#D4AF37] mt-4 opacity-60">per annum subscription</span>
                 </div>
                 <p className="text-[10px] font-sans uppercase tracking-[0.2em] opacity-40 italic h-8">{p.note}</p>
                 <button className={`w-full py-4 text-[9px] font-sans tracking-[0.5em] uppercase transition-all duration-700 ${p.featured ? 'bg-[#D4AF37] text-white' : 'border border-[#D4AF37] text-[#D4AF37]'}`}>
                    Acquire Access
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ - Refined Accordion */}
        <section className="py-24 max-w-3xl mx-auto space-y-16">
           <h2 className="text-center text-xl font-light tracking-[0.5em] uppercase text-[#1C1C1C]">Inquiries</h2>
           <div className="space-y-4">
              {[
                { q: 'How do I join the Aethel community?', a: 'Membership is strictly limited. We review each inquiry personally to ensure a curated experience for our Maison.' },
                { q: 'What is the commitment term?', a: 'All private access suites are secured for a minimum of one fiscal year, ensuring long-term continuity.' },
                { q: 'Can we request customized assets?', a: 'Our Bespoke tier allows for complete structural and visual customization guided by our Master Artisans.' }
              ].map((faq, i) => (
                 <div key={i} className="border-b border-[#D4AF37]/10 group">
                    <button 
                       className="w-full flex justify-between items-center py-10 text-left"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-[11px] font-sans uppercase tracking-[0.4em] text-[#1C1C1C]/70 group-hover:text-[#1C1C1C] transition-colors">{faq.q}</span>
                       <ChevronDown size={18} className={`text-[#D4AF37] transition-transform duration-1000 ${openFaq === i ? 'rotate-180' : ''}`} strokeWidth={0.5} />
                    </button>
                    {openFaq === i && (
                       <div className="pb-12 text-[11px] font-sans tracking-[0.1em] text-[#1C1C1C]/40 leading-loose italic animate-in fade-in duration-1000">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 text-center relative">
           <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <span className="text-[15rem] font-light uppercase tracking-[-0.1em]">LUXE</span>
           </div>
           <div className="relative z-10 space-y-12">
              <h2 className="text-4xl md:text-7xl font-light uppercase tracking-[0.1em] text-[#1C1C1C]">Experience <br /> Transcendence.</h2>
              <button className="px-20 py-8 bg-[#1C1C1C] text-white text-[10px] font-sans tracking-[0.8em] uppercase hover:bg-[#D4AF37] transition-all duration-1000 shadow-2xl">
                 Apply for Concierge
              </button>
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 border-t border-[#D4AF37]/10 text-center space-y-16">
           <div className="flex justify-center gap-20 mb-10">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <div key={i} className="text-[#1C1C1C]/40 hover:text-[#D4AF37] transition-all transform hover:scale-125 duration-700 cursor-pointer">
                   <Icon size={20} strokeWidth={1} />
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-center gap-16 text-[9px] font-sans uppercase tracking-[0.6em] text-[#1C1C1C]/30">
              <span className="hover:text-[#D4AF37] cursor-pointer">Privacy Charter</span>
              <span className="hover:text-[#D4AF37] cursor-pointer">Heritage Trust</span>
              <span className="hover:text-[#D4AF37] cursor-pointer">Legal Terms</span>
           </div>
           
           <div className="flex flex-col items-center gap-10">
              <div className="w-[1px] h-12 bg-[#D4AF37]/30" />
              <p className="text-[8px] font-sans uppercase tracking-[1em] text-[#1C1C1C]/20">
                 © 2026 MAISON AETHEL PRESTIGE. ALL HERITAGE RESERVED.
              </p>
           </div>
        </footer>
      </div>
    </div>
  );
};
