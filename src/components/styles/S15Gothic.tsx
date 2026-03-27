import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Moon, Flame, Shield, History, Music
} from 'lucide-react';

export const S15Gothic = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-serif antialiased selection:bg-[#7F0000] selection:text-white overflow-x-hidden p-4 md:p-8">
      <style dangerouslySetInnerHTML={{ __html: `
        .gothic-border {
          border: 1px solid #444;
          outline: 1px solid #444;
          outline-offset: 4px;
          position: relative;
        }
        .gothic-border::before {
          content: '';
          position: absolute;
          inset: -8px;
          border: 1px solid #222;
          pointer-events: none;
        }
        .gothic-arch {
          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
        }
        .blood-gradient {
          background: linear-gradient(180deg, #7F0000 0%, #3F0000 100%);
        }
        .gothic-glow {
          box-shadow: 0 0 20px rgba(127, 0, 0, 0.2);
        }
        .ornate-pattern {
          background-image: 
            radial-gradient(circle at 2px 2px, #222 1px, transparent 0),
            linear-gradient(45deg, transparent 48%, #1a1a1a 50%, transparent 52%);
          background-size: 20px 20px, 40px 40px;
        }
        @keyframes flicker {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.9; }
        }
        .animate-flicker {
          animation: flicker 2s ease-in-out infinite;
        }
      `}} />

      {/* Decorative background */}
      <div className="fixed inset-0 pointer-events-none ornate-pattern opacity-30" />
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-20">
        {/* Navigation */}
        <header className="flex items-center justify-between py-12 border-b border-[#333]">
          <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-14 h-20 bg-[#1A1A1A] gothic-border flex items-center justify-center transform group-hover:bg-[#2A2A2A] transition-colors duration-1000">
               <Shield size={28} className="text-[#7F0000] group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
            </div>
            <div className="flex flex-col">
               <span className="text-4xl font-light tracking-[0.2em] uppercase text-[#999]">Cathedral</span>
               <div className="h-[1px] w-full bg-[#7F0000] mt-1 shadow-[0_0_10px_#7F0000]" />
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-12 text-xs uppercase tracking-[0.4em] font-light text-[#666]">
              {['Artifacts', 'Rituals', 'Echoes', 'Sanctum'].map((item) => (
                <span key={item} className="hover:text-[#7F0000] cursor-pointer transition-all relative group">
                  {item}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#7F0000] group-hover:w-full transition-all duration-1000" />
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-8">
              <button className="px-10 py-3 bg-transparent border border-[#555] text-[#999] uppercase tracking-[0.3em] text-[10px] hover:border-[#7F0000] hover:text-[#7F0000] transition-all duration-700">
                Inquire
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#7F0000]">
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-[#0A0A0A] border border-[#333] p-12 z-[100] relative text-center space-y-12 animate-in fade-in duration-1000">
             <div className="flex flex-col gap-10 text-xl font-light tracking-[0.3em] uppercase">
                {['Artifacts', 'Rituals', 'Echoes', 'Sanctum'].map((item) => (
                   <span key={item} className="text-[#666] hover:text-[#7F0000]">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-5 border border-[#7F0000] text-[#7F0000] font-bold uppercase tracking-[0.3em] text-xs">
                Enter Void
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center space-y-16 py-20">
           <div className="flex justify-center flex-col items-center gap-8">
              <div className="w-[1px] h-24 bg-gradient-to-t from-[#7F0000] to-transparent shadow-[0_0_20px_#7F0000]" />
              <div className="w-4 h-4 border border-[#7F0000] rotate-45 flex items-center justify-center p-0.5 animate-flicker">
                 <div className="w-full h-full bg-[#7F0000]" />
              </div>
           </div>
           
           <h1 className={`font-light tracking-[0.1em] uppercase leading-tight ${isMobile ? 'text-5xl' : 'text-9xl'}`}>
             Shadows of <br /> 
             <span className="text-[#7F0000] italic">Eternity</span>
           </h1>
           
           <p className={`text-[#666] uppercase tracking-[0.3em] max-w-3xl mx-auto leading-relaxed ${isMobile ? 'text-xs' : 'text-sm font-light'}`}>
             Step into the depth of monumental design. Where every shadow tells a story and every arch reaches for the infinite. Atmospheric, dramatic, and absolute.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-12 pt-8">
              <button className="px-12 py-5 blood-gradient text-white text-xs font-bold uppercase tracking-[0.5em] shadow-[0_0_40px_rgba(127,0,0,0.3)] hover:scale-105 transition-transform duration-1000">
                 Ascend
              </button>
              <button className="px-12 py-5 border border-[#333] text-[#666] text-xs font-bold uppercase tracking-[0.5em] hover:border-[#7F0000] hover:text-[#7F0000] transition-all duration-700">
                 The Archive
              </button>
           </div>
           
           <div className="pt-24 flex justify-center">
              <div className="w-[1px] h-40 bg-gradient-to-b from-[#7F0000] to-transparent" />
           </div>
        </section>

        {/* Content Section - Monumental Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Moon, title: 'Nocturnal', text: 'Optimized for the deepest dark, where clarity emerges from the void.' },
            { icon: Flame, title: 'Atmospheric', text: 'Dynamic lighting effects that simulate the flicker of ancient flames.' },
            { icon: History, title: 'Heritage', text: 'Tracing the lineage of monumental architecture through digital pixels.' },
            { icon: Music, title: 'Resonant', text: 'Every interaction carries a weight, a deliberate echo of sound and form.' }
          ].map((item, i) => (
            <div key={i} className="group p-12 bg-[#111] gothic-border space-y-10 hover:bg-[#1A1A1A] transition-all duration-1000 cursor-pointer overflow-hidden">
               <div className="w-16 h-24 gothic-arch border border-[#333] mx-auto flex items-center justify-center group-hover:border-[#7F0000] transition-colors duration-1000 relative">
                  <div className="absolute inset-0 bg-[#7F0000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 gothic-arch" />
                  <item.icon size={28} className="text-[#444] group-hover:text-[#7F0000] transition-all duration-1000" strokeWidth={1} />
               </div>
               <div className="text-center space-y-4">
                  <h3 className="text-xl font-light tracking-[0.3em] uppercase text-[#999] group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-[10px] leading-loose tracking-[0.2em] uppercase text-[#555] font-light max-w-[200px] mx-auto group-hover:text-[#777]">
                     {item.text}
                  </p>
               </div>
               <div className="pt-6 flex justify-center">
                  <div className="w-8 h-[1px] bg-[#333] group-hover:w-16 group-hover:bg-[#7F0000] transition-all duration-1000" />
               </div>
            </div>
          ))}
        </section>

        {/* Dramatic Split */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-12">
              <div className="space-y-4">
                 <span className="text-[10px] uppercase tracking-[1em] text-[#7F0000]">The Blackletter Protocol</span>
                 <h2 className="text-5xl md:text-6xl font-light uppercase tracking-[0.1em] leading-tight text-white italic">Beauty in the <br />Crucible of Dark.</h2>
              </div>
              
              <div className="h-[2px] w-24 bg-[#7F0000] shadow-[0_0_20px_#7F0000]" />
              
              <p className="text-sm font-light uppercase tracking-[0.3em] leading-relaxed text-[#666] max-w-lg">
                We believe that the most profound expressions are those that emerge from the shadows. Our design methodology is an invocation of atmosphere, weight, and history.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
                 {[
                   { t: 'Sacred Geometry', d: 'Mathematical Precision' },
                   { t: 'Ornamental Code', d: 'Detailed Implementation' },
                   { t: 'Dramatic Glow', d: 'Visual Depth' },
                   { t: 'Eternal States', d: 'Persistent Logic' }
                 ].map((item, i) => (
                   <div key={i} className="space-y-3 group cursor-pointer border-l border-[#333] pl-6 hover:border-[#7F0000] transition-colors duration-700">
                      <p className="font-light text-white text-md tracking-[0.2em] uppercase">{item.t}</p>
                      <p className="text-[9px] font-light text-[#444] uppercase tracking-[0.3em] group-hover:text-[#7F0000] transition-colors">{item.d}</p>
                   </div>
                 ))}
              </div>
           </div>

           <div className="relative group p-4 lg:p-12">
              <div className="absolute inset-0 bg-[#7F0000]/5 blur-[100px] rounded-full group-hover:bg-[#7F0000]/10 transition-all duration-1000" />
              <div className="bg-[#0D0D0D] border border-[#333] p-2 relative">
                 <div className="border border-[#222] p-8 lg:p-16 h-full flex flex-col justify-center items-center text-center space-y-12">
                    <div className="w-full h-96 gothic-arch bg-[#050505] border border-[#222] relative overflow-hidden group-hover:border-[#7F0000]/30 transition-colors duration-1000">
                       <div className="absolute inset-0 ornate-pattern opacity-10" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 blood-gradient rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity" />
                       <div className="relative z-10 h-full flex items-center justify-center">
                          <History size={120} className="text-[#1A1A1A]" strokeWidth={0.5} />
                       </div>
                    </div>
                    <div className="space-y-4">
                       <p className="text-[10px] uppercase tracking-[0.8em] text-[#7F0000]">Sanctum Log 015</p>
                       <div className="w-12 h-[1px] bg-[#333] mx-auto" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Tiers / Rituals */}
        <section className="py-24">
           <div className="text-center mb-24 space-y-6">
              <h2 className="text-2xl font-light uppercase tracking-[0.6em] text-white">The Offerings</h2>
              <div className="w-12 h-[1px] bg-[#7F0000] mx-auto" />
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#333] bg-[#0A0A0A]">
            {[
              { name: 'Neophyte', price: 'Free', sub: 'The entry into shadow.' },
              { name: 'Acolyte', price: '$66', sub: 'The weight of power.', accent: true },
              { name: 'Elder', price: 'Custom', sub: 'Infinite dark reach.' }
            ].map((p, i) => (
              <div key={i} className={`p-16 text-center flex flex-col items-center gap-12 border-b lg:border-b-0 lg:border-r border-[#333] last:border-0 hover:bg-[#111] transition-all duration-1000 ${p.accent ? 'bg-[#1A0000]/10 border-t-2 border-t-[#7F0000]' : ''}`}>
                <h3 className="text-xs font-light uppercase tracking-[0.8em] text-[#666] italic">{p.name}</h3>
                <div className="flex flex-col gap-2">
                  <span className="text-5xl font-light tracking-tight text-white uppercase italic">{p.price}</span>
                  <div className="w-full h-[1px] bg-[#7F0000]/30" />
                </div>
                <p className="text-[10px] font-light text-[#555] uppercase tracking-[0.3em] font-sans h-8">{p.sub}</p>
                <button className={`w-full py-5 gothic-border uppercase tracking-[0.4em] text-[10px] transition-all duration-1000 ${p.accent ? 'blood-gradient text-white border-none shadow-[0_0_30px_rgba(127,0,0,0.4)]' : 'text-[#666] hover:text-[#7F0000] hover:border-[#7F0000]'}`}>
                  Commence
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Area */}
        <section className="py-24 max-w-4xl mx-auto space-y-20">
           <h2 className="text-xs uppercase tracking-[1em] text-[#7F0000] text-center italic">The Whispered Echoes</h2>
           <div className="space-y-6">
              {[
                { q: 'Is the design system performant?', a: 'Every shadow and ornate detail is optimized for high-speed rendering across all modern vessels.' },
                { q: 'Can we alter the color of the flame?', a: 'The Blood Red is the core protocol, but custom hues are available for our Elder members.' },
                { q: 'What is the philosophy of the arch?', a: 'It represents the transition between states - a monumental frame for your most critical data.' }
              ].map((faq, i) => (
                 <div key={i} className="border border-[#222] p-8 hover:border-[#7F0000]/30 transition-all duration-1000 group">
                    <button 
                       className="w-full flex justify-between items-center text-left"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-sm uppercase tracking-[0.4em] text-[#999] group-hover:text-white transition-colors">{faq.q}</span>
                       <ChevronDown size={20} className={`text-[#333] group-hover:text-[#7F0000] transition-transform duration-1000 ${openFaq === i ? 'rotate-180' : ''}`} strokeWidth={1} />
                    </button>
                    {openFaq === i && (
                       <div className="pt-10 text-[10px] uppercase tracking-[0.3em] text-[#555] leading-relaxed animate-in fade-in slide-in-from-top-4 duration-1000 italic pr-12">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 border-t border-[#333] flex flex-col items-center space-y-20">
           <div className="flex gap-12">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-[#444] hover:text-[#7F0000] transition-all transform hover:scale-125 duration-1000"><Icon size={24} strokeWidth={1} /></a>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-center gap-12 text-[10px] uppercase tracking-[0.5em] text-[#444] font-light text-center">
              <span className="hover:text-white cursor-pointer transition-colors">Obsidian Law</span>
              <span className="hover:text-white cursor-pointer transition-colors">Digital Rites</span>
              <span className="hover:text-white cursor-pointer transition-colors">Altar Logic</span>
              <span className="hover:text-white cursor-pointer transition-colors">Void Security</span>
           </div>
           
           <div className="flex flex-col items-center gap-12">
              <div className="w-10 h-[1px] bg-[#7F0000] shadow-[0_0_10px_#7F0000]" />
              <p className="text-[8px] uppercase tracking-[1em] text-[#333] text-center">
                 © 2026 CATHEDRAL DESIGN WORKS. ALL ECHOES RESERVED.
              </p>
           </div>
        </footer>
      </div>
    </div>
  );
};
