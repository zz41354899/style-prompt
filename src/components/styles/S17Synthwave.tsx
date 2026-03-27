import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Disc, Video, Radio, Music, Sun,
  Gamepad2, Headphones, Tv
} from 'lucide-react';

export const S17Synthwave = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#120458] text-[#FF00E4] font-sans antialiased selection:bg-[#00F3FF] selection:text-[#120458] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .synth-grid {
          background-image: 
            linear-gradient(rgba(0, 243, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 243, 255, 0.2) 1px, transparent 1px);
          background-size: 50px 50px;
          perspective: 500px;
          transform: rotateX(60deg);
          transform-origin: top;
          height: 100vh;
          width: 200vw;
          position: fixed;
          bottom: -50vh;
          left: -50vw;
          z-index: 0;
          animation: grid-move 20s linear infinite;
        }
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        .sunset-bg {
          background: linear-gradient(180deg, #FF00E4 0%, #FF7000 50%, #120458 100%);
        }
        .synth-sun {
          background: linear-gradient(180deg, #FFD300 0%, #FF00E4 100%);
          mask-image: repeating-linear-gradient(0deg, black, black 4px, transparent 4px, transparent 8px);
        }
        .chrome-text {
          background: linear-gradient(180deg, #00F3FF 0%, #FFFFFF 40%, #FF00E4 45%, #FFFFFF 50%, #120458 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 5px rgba(0, 243, 255, 0.5));
        }
        .glow-pink {
          box-shadow: 0 0 20px rgba(255, 0, 228, 0.4);
        }
        .glow-blue {
          box-shadow: 0 0 20px rgba(0, 243, 255, 0.4);
        }
        @keyframes scanlines {
          from { background-position: 0 0; }
          to { background-position: 0 100%; }
        }
        .scanlines {
          background: linear-gradient(to bottom, rgba(18, 4, 88, 0) 50%, rgba(0, 0, 0, 0.1) 50%);
          background-size: 100% 4px;
          animation: scanlines 0.2s linear infinite;
        }
      `}} />

      {/* Retro Grid & Scanlines */}
      <div className="synth-grid pointer-events-none" />
      <div className="fixed inset-0 scanlines pointer-events-none z-[100]" />
      
      {/* Background Glows */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] sunset-bg opacity-10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10 p-4 md:p-8">
        {/* Navigation */}
        <header className="flex items-center justify-between py-8 px-8 border-2 border-[#00F3FF] bg-[#120458]/80 backdrop-blur-md rounded-xl glow-blue">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF00E4] to-[#00F3FF] p-0.5 transform group-hover:rotate-180 transition-transform duration-700">
               <div className="w-full h-full bg-[#120458] rounded-md flex items-center justify-center">
                  <Music size={24} className="text-[#00F3FF]" />
               </div>
            </div>
            <span className="text-3xl font-black italic tracking-widest uppercase chrome-text">OUTRUN</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 text-[10px] font-black italic tracking-[0.3em] uppercase">
              {['Timeline', 'Signals', 'Hardware', 'Arcade'].map((item) => (
                <span key={item} className="text-[#00F3FF] hover:text-[#FF00E4] cursor-pointer transition-all border-b border-transparent hover:border-[#FF00E4]">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <button className="px-8 py-3 bg-[#FF00E4] text-[#120458] font-black italic rounded-md shadow-[0_0_20px_#FF00E4] hover:scale-105 transition-all">
              LOGIN_v8.4
            </button>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border border-[#00F3FF] rounded">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-[#120458] border-2 border-[#FF00E4] p-10 z-[110] relative rounded-2xl glow-pink">
             <div className="flex flex-col gap-8 text-xl font-black italic tracking-widest text-[#FF7000]">
                {['Timeline', 'Signals', 'Hardware', 'Arcade'].map((item) => (
                   <span key={item} className="border-b border-[#FF00E4]/20 pb-4">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full mt-8 py-4 bg-[#00F3FF] text-[#120458] font-black italic rounded-xl glow-blue">
                CONNECT
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center space-y-16 py-12 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full synth-sun opacity-40 blur-[2px] z-0 animate-pulse" />
           
           <div className="relative z-10 space-y-8">
              <h1 className={`font-black tracking-[-0.05em] uppercase leading-[0.8] italic ${isMobile ? 'text-6xl text-[#FF7000]' : 'text-[12rem] chrome-text'}`}>
                Digital <br /> 
                Dreams
              </h1>
              
              <div className="h-1 w-64 bg-gradient-to-r from-transparent via-[#FF00E4] to-transparent mx-auto glow-pink" />
              
              <p className={`text-white font-bold italic max-w-2xl mx-auto leading-relaxed drop-shadow-lg ${isMobile ? 'text-lg' : 'text-3xl tracking-widest'}`}>
                 CRUISING THROUGH THE NEON GRID AT MIDNIGHT. <br /> THE SOUNDTRACK OF THE FUTURE IS ALREADY PLAYING.
              </p>
              
              <div className="flex flex-wrap justify-center gap-10 pt-12">
                 <button className="px-14 py-6 bg-[#00F3FF] text-[#120458] font-black text-2xl italic rounded-xl shadow-[0_0_40px_rgba(0,243,255,0.4)] hover:scale-110 transition-all flex items-center gap-4 group">
                    ENTER_GRID
                    <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                 </button>
                 <button className="px-14 py-6 border-4 border-[#FF00E4] text-[#FF00E4] font-black text-2xl italic rounded-xl hover:bg-[#FF00E4] hover:text-[#120458] transition-all glow-pink">
                    THE_VAULT
                 </button>
              </div>
           </div>
        </section>

        {/* Feature grid */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Gamepad2, title: 'ARCADE_MODE', label: 'Play' },
            { icon: Tv, title: 'VHS_VISION', label: 'Watch' },
            { icon: Headphones, title: 'CHILL_WAVE', label: 'Listen' },
            { icon: Radio, title: 'FM_FREQ', label: 'Tune' }
          ].map((item, i) => (
            <div key={i} className="group bg-[#120458]/60 border-2 border-[#FF00E4]/30 p-10 rounded-2xl hover:border-[#00F3FF] hover:bg-[#120458] transition-all cursor-pointer relative overflow-hidden flex flex-col items-center">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF00E4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="w-20 h-20 rounded-full border-4 border-[#FF00E4] flex items-center justify-center mb-8 group-hover:border-[#00F3FF] group-hover:glow-blue transition-all">
                  <item.icon size={32} className="text-[#FF00E4] group-hover:text-[#00F3FF]" />
               </div>
               <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-[#FF7000] mb-4">{item.label}</h3>
               <h2 className="text-2xl font-black italic tracking-tighter text-white group-hover:chrome-text">{item.title}</h2>
               <div className="mt-8 flex gap-2">
                  {[1,2,3].map(d => <div key={d} className="w-2 h-2 rounded-full bg-[#FF00E4] opacity-20 group-hover:opacity-100 transition-opacity" />)}
               </div>
            </div>
          ))}
        </section>

        {/* 80s Display Card */}
        <section className="py-24">
           <div className="bg-[#120458] border-8 border-[#00F3FF] rounded-[40px] p-2 overflow-hidden shadow-[0_0_60px_rgba(0,243,255,0.2)]">
              <div className="bg-[#120458] border-4 border-[#FF00E4] rounded-[30px] p-12 lg:p-24 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF00E4] via-transparent to-transparent" />
                 
                 <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                       <h2 className="text-5xl md:text-8xl font-black italic leading-none chrome-text">
                          NEO <br /> CASSETTE
                       </h2>
                       <p className="text-xl font-bold italic text-white/60 tracking-widest leading-relaxed">
                          REMASTERED FOR THE NEW AGE. 100% ANALOG FEEL, 100% DIGITAL PRECISION. PURE SYNTHWAVE ENERGY.
                       </p>
                       <ul className="space-y-6">
                          {['High Fidelity Audio', 'Chromium Coating', 'Noise Reduction v4', 'Extended Playtime'].map((t, i) => (
                            <li key={i} className="flex items-center gap-6 group cursor-pointer hover:translate-x-4 transition-transform">
                               <Check size={24} className="text-[#00F3FF] shadow-[0_0_10px_#00F3FF]" />
                               <span className="text-xl font-black italic text-white uppercase tracking-tighter">{t}</span>
                            </li>
                          ))}
                       </ul>
                    </div>
                    
                    <div className="relative flex justify-center">
                       <div className="w-[400px] h-[400px] rounded-full border-[20px] border-[#FF00E4] shadow-[0_0_10px_#FF00E4,inset_0_0_10px_#FF00E4] flex items-center justify-center animate-spin-slow p-12">
                          <Disc size={200} className="text-white/20" strokeWidth={1} />
                       </div>
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                          <span className="text-xs font-black tracking-[1em] text-[#00F3FF]">ROTATING</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Retro Pricing */}
        <section className="py-24 text-center">
           <h2 className="text-xl font-black italic tracking-[0.5em] uppercase text-[#FF00E4] mb-20">GRID_MEMBERSHIP</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { name: 'LEVEL_1', price: '$00', color: '#00F3FF' },
               { name: 'LEVEL_MAX', price: '$29', color: '#FF00E4', featured: true },
               { name: 'GOD_MODE', price: '$99', color: '#FF7000' }
             ].map((p, i) => (
               <div key={i} className={`p-16 border-4 flex flex-col items-center gap-12 bg-[#120458]/80 backdrop-blur-md rounded-3xl transition-all duration-700 ${p.featured ? 'border-[#FF00E4] glow-pink scale-110' : 'border-[#00F3FF]/40'}`}>
                  <h4 className="text-[10px] font-black uppercase tracking-[1em] text-white/40">{p.name}</h4>
                  <div className="flex flex-col gap-2">
                     <span className="text-7xl font-black italic tracking-tighter text-white">{p.price}</span>
                     <span className="text-[10px] block mt-4 font-bold opacity-30">BTC_EQUIVALENT</span>
                  </div>
                  <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-white/50 h-24">
                     <li>Unlimited Bandwidth</li>
                     <li>Retro Icons Pack</li>
                     <li>Global Grid Access</li>
                  </ul>
                  <button className={`w-full py-5 rounded-xl font-black italic tracking-widest uppercase transition-all ${p.featured ? 'bg-[#FF00E4] text-[#120458] glow-pink hover:bg-white' : 'border-2 border-[#00F3FF] text-[#00F3FF] hover:bg-[#00F3FF] hover:text-[#120458]'}`}>
                     UPGRADE
                  </button>
               </div>
             ))}
           </div>
        </section>

        {/* Retro FAQ */}
        <section className="py-24 max-w-4xl mx-auto space-y-12">
           <div className="text-center space-y-4">
              <h2 className="text-5xl font-black italic tracking-tighter text-white">SYSTEM_INFO</h2>
              <div className="h-1 w-20 bg-[#FF00E4] mx-auto" />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { q: 'Is this real life?', a: 'Only if you believe the simulation is reality.' },
                { q: 'What is the frequency?', a: 'We operate at 88.4 MHz, the official outrun channel.' },
                { q: 'Can I go back to the 80s?', a: 'The interface is a bridge, not a time machine. Yet.' },
                { q: 'Where are the lasers?', a: 'Enabled by default on all primary navigation nodes.' }
              ].map((faq, i) => (
                 <div key={i} className="bg-black/40 border-2 border-[#00F3FF]/20 p-8 rounded-2xl hover:border-[#FF00E4] transition-all group">
                    <h4 className="text-lg font-black italic text-[#FF7000] mb-4 uppercase">{faq.q}</h4>
                    <p className="text-sm font-bold italic text-white/40 group-hover:text-white/80 transition-colors uppercase tracking-widest leading-relaxed">
                       {faq.a}
                    </p>
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 border-t-8 border-[#FF00E4] bg-black text-center space-y-16">
           <div className="flex justify-center gap-16">
              {[Github, Video, Linkedin].map((Icon, i) => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-[#00F3FF] flex items-center justify-center text-[#00F3FF] hover:bg-[#00F3FF] hover:text-black transition-all cursor-pointer glow-blue">
                   <Icon size={24} />
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-center gap-12 text-[10px] font-black italic tracking-[0.5em] uppercase text-white/20">
              <span className="hover:text-[#00F3FF] cursor-pointer">Protocol_X</span>
              <span className="hover:text-[#FF00E4] cursor-pointer">Encryption_Key</span>
              <span className="hover:text-[#FF7000] cursor-pointer">Archive_84</span>
           </div>
           
           <div className="flex flex-col items-center gap-8">
              <div className="px-6 py-2 border-2 border-[#00F3FF] rounded-full text-[10px] font-black text-[#00F3FF]">
                 EST. 1984_REMASTERED_2026
              </div>
              <p className="text-[8px] font-black tracking-[1em] opacity-10">
                 © 2026 OUTRUN DIGITAL LTD. ALL WAVELENGTHS RESERVED.
              </p>
           </div>
        </footer>
      </div>
    </div>
  );
};
