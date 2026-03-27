import { useState, useEffect } from 'react';
import { 
  Zap, Shield, Cpu, Terminal, Globe,
  MessageSquare, Share2, Play, Power,
  ChevronRight, AlertTriangle, Activity, Database
} from 'lucide-react';

export const S16Cyberpunk = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const isMobile = deviceMode === 'mobile';

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0221] text-[#00F3FF] font-mono antialiased selection:bg-[#FF007F] selection:text-white overflow-x-hidden p-4 md:p-8">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .scanline::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0, 243, 255, 0.05) 50%);
          background-size: 100% 4px;
          pointer-events: none;
        }
        .neon-border {
          border: 1px solid #00F3FF;
          box-shadow: 0 0 10px #00F3FF, inset 0 0 5px #00F3FF;
        }
        .neon-border-pink {
          border: 1px solid #FF007F;
          box-shadow: 0 0 10px #FF007F, inset 0 0 5px #FF007F;
        }
        .glitch-text {
          text-shadow: 2px 0 #FF007F, -2px 0 #00F3FF;
        }
        .cyber-grid {
          background-image: linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .cyber-cut {
          clip-path: polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%);
        }
        @keyframes pulse-neon {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-neon {
          animation: pulse-neon 2s infinite;
        }
      `}} />

      {/* Background scanline & grid */}
      <div className="fixed inset-0 pointer-events-none scanline overflow-hidden z-[100]">
         <div className="w-full h-2 bg-[#00F3FF]/10 absolute animate-[scanline_8s_linear_infinite]" />
      </div>
      <div className="fixed inset-0 pointer-events-none cyber-grid" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Navigation */}
        <header className="flex items-center justify-between py-6 px-8 bg-[#1A0F2E]/80 backdrop-blur-md neon-border border-t-0 border-x-0">
          <div className="flex items-center gap-4 group cursor-pointer">
             <div className="w-10 h-10 bg-[#FF007F] neon-border-pink flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform">
                <Terminal size={20} className="text-white -rotate-45 group-hover:rotate-0 transition-transform" />
             </div>
             <span className={`text-2xl font-black italic tracking-tighter ${glitch ? 'glitch-text' : ''}`}>
                CYBER_NET.v4
             </span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 text-[10px] tracking-[0.2em] uppercase font-bold">
              {['Nexus', 'Protocols', 'Black_Market', 'Uplink'].map((item) => (
                <span key={item} className="hover:text-[#FF007F] cursor-pointer transition-all border-b border-transparent hover:border-[#FF007F] pb-1">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2 text-[8px] text-[#00FF41]">
                  <Activity size={10} className="animate-pulse" />
                  SYSTEM_NOMINAL
               </div>
               <button className="px-6 py-2 bg-transparent neon-border text-[#00F3FF] text-[10px] font-bold uppercase tracking-widest hover:bg-[#00F3FF] hover:text-[#0D0221] transition-all">
                  Initialize
               </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 neon-border">
              {menuOpen ? <Power size={24} className="text-[#FF007F]" /> : <Terminal size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-[#1A0F2E] neon-border p-10 z-[110] relative space-y-10">
             <div className="flex flex-col gap-8 text-xl font-black italic tracking-widest">
                {['Nexus', 'Protocols', 'Market', 'Uplink'].map((item) => (
                   <span key={item} className="border-b border-[#00F3FF]/20 pb-4 hover:text-[#FF007F] transition-colors">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-4 bg-[#FF007F] text-white font-black italic neon-border-pink">
                CONNECT_NOW
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12">
           <div className="lg:col-span-12 relative mb-12">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#00F3FF] opacity-5 blur-[100px] rounded-full" />
              <div className="absolute top-40 right-10 w-96 h-96 bg-[#FF007F] opacity-5 blur-[120px] rounded-full" />
           </div>

           <div className="lg:col-span-7 space-y-12">
              <div className="bg-[#1A0F2E] neon-border-pink inline-block px-4 py-1 text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF007F]">
                 // PRIORITY_LEVEL_ALPHA
              </div>
              
              <h1 className={`font-black leading-[0.85] tracking-tighter ${isMobile ? 'text-6xl text-center' : 'text-[10rem] glitch-text uppercase'}`}>
                High Tech <br /> 
                <span className="text-white">Low Life</span>
              </h1>
              
              <p className={`text-[#00F3FF]/60 font-medium leading-tight max-w-2xl ${isMobile ? 'text-lg text-center' : 'text-3xl italic underline decoration-[#FF007F] decoration-4 underline-offset-8'}`}>
                 The future isn't bright. It's neon. Survive the sprawl with the industry's most advanced neural-interface protocols.
              </p>
              
              <div className="flex flex-wrap gap-8 pt-4 justify-center lg:justify-start">
                 <button className="px-12 py-6 bg-[#00F3FF] text-[#0D0221] font-black text-2xl tracking-tighter hover:bg-white transition-all cyber-cut shadow-[0_0_30px_#00F3FF] flex items-center gap-4 group">
                    JACK_IN
                    <ChevronRight size={32} strokeWidth={4} className="group-hover:translate-x-2 transition-transform" />
                 </button>
                 <button className="px-12 py-6 border-2 border-[#FF007F] text-[#FF007F] font-black text-2xl tracking-tighter hover:bg-[#FF007F] hover:text-white transition-all cyber-cut shadow-[0_0_30px_rgba(255,0,127,0.2)]">
                    BROWSE_DATA
                 </button>
              </div>
           </div>

           <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-[#00F3FF]/10 blur-[100px] group-hover:bg-[#FF007F]/10 transition-all duration-1000" />
              <div className="bg-[#1A0F2E]/60 backdrop-blur-xl neon-border p-8 lg:p-12 relative cyber-cut overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                 <div className="flex justify-between items-center mb-10 pb-4 border-b border-[#00F3FF]/20">
                    <div className="flex items-center gap-3">
                       <Cpu size={24} className="text-[#FF007F] animate-neon" />
                       <span className="text-xs font-bold tracking-widest uppercase">Kernel_v.94</span>
                    </div>
                    <div className="w-12 h-6 bg-[#00FF41]/20 border border-[#00FF41]/40 rounded text-[8px] flex items-center justify-center font-bold">LIVE</div>
                 </div>
                 
                 <div className="space-y-6">
                    {[
                      { l: 'CPU_LOAD', v: '42%', c: '#00F3FF' },
                      { l: 'NEURAL_ERROR', v: '0.04%', c: '#FF007F' },
                      { l: 'BUFFER_FLOW', v: 'Stable', c: '#00FF41' }
                    ].map((s, i) => (
                      <div key={i} className="space-y-2">
                         <div className="flex justify-between text-[10px] font-bold">
                            <span className="opacity-40">{s.l}</span>
                            <span style={{ color: s.c }}>{s.v}</span>
                         </div>
                         <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full rounded-full transition-all duration-1000" style={{ width: s.v === 'Stable' ? '100%' : s.v, backgroundColor: s.c }} />
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="mt-12 p-4 bg-black/40 border border-[#00F3FF]/10 font-mono text-[8px] leading-relaxed opacity-60">
                    <div>{">"} INITIALIZING NEURAL_LINK...</div>
                    <div>{">"} ACCESSING DATABASE.root...</div>
                    <div className="text-[#00FF41]">{">"} CONNECTION_ESTABLISHED.</div>
                 </div>
              </div>
           </div>
        </section>

        {/* Feature grid */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Zap, title: 'OVERDRIVE', color: '#00F3FF', text: 'Accelerate your neural output with liquid-cooled algorithms.' },
            { icon: Shield, title: 'GHOSTWALL', color: '#FF007F', text: 'Invisible protection against black-ice and corporate scrapers.' },
            { icon: Database, title: 'DATA_HEIST', color: '#00FF41', text: 'Quantum tunneling for near-instant archival extraction.' },
            { icon: Globe, title: 'NET_RUN', color: '#FACC15', text: 'Navigate the deep web with pre-scripted evasion routines.' }
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-[#1A0F2E] neon-border hover:border-[#FF007F] hover:shadow-[0_0_20px_rgba(255,0,127,0.3)] transition-all cursor-pointer cyber-cut relative overflow-hidden">
               <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 -mr-10 -mt-10 rotate-45" />
               <div className="w-16 h-16 bg-[#0D0221] border border-[#00F3FF] flex items-center justify-center mb-8 group-hover:border-[#FF007F] group-hover:scale-110 transition-all">
                  <item.icon size={28} style={{ color: item.color }} />
               </div>
               <h3 className="text-2xl font-black italic tracking-tighter mb-4 text-white group-hover:text-[#FF007F] transition-colors">{item.title}</h3>
               <p className="text-[10px] leading-tight font-bold opacity-40 group-hover:opacity-80 transition-opacity">
                  {item.text}
               </p>
               <div className="mt-8 flex items-center gap-2 text-[8px] font-bold opacity-20">
                  <Terminal size={10} />
                  <span>RUN_ACTION_{i+1}</span>
               </div>
            </div>
          ))}
        </section>

        {/* Split UI - Hologram feel */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="relative">
              <div className="absolute inset-0 bg-[#00F3FF]/5 blur-[120px] pointer-events-none" />
              <div className="relative space-y-12">
                 <h2 className="text-6xl md:text-8xl font-black italic leading-[0.8] tracking-tighter uppercase text-white">
                    Upgrade <br /> <span className="text-[#FF007F] glitch-text">Your.</span> <br /> Hardware.
                 </h2>
                 <p className="text-2xl italic font-bold tracking-tighter text-[#00F3FF]/60 underline decoration-[#00FF41] decoration-4 underline-offset-8">
                    Flesh is weak. Digital is eternal. Join 4 million netrunners who have already abandoned the physical realm.
                 </p>
                 <div className="space-y-6">
                    {[
                      'Neural-Link Overclocking',
                      'Memory Compression v2',
                      'Synthetic Immune Systems',
                      'Direct-to-Brain Marketing Block'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-6 group cursor-pointer border-l-4 border-[#00F3FF] pl-8 bg-white/5 p-6 hover:bg-[#FF007F]/10 hover:border-[#FF007F] transition-all">
                         <div className="w-4 h-4 bg-[#00F3FF] transform rotate-45 group-hover:bg-[#FF007F] transition-colors" />
                         <span className="text-xl font-black italic tracking-tighter uppercase">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="relative group">
              <div className="p-2 neon-border-pink cyber-cut transform rotate-2 group-hover:rotate-0 transition-transform duration-700">
                 <div className="bg-black p-12 lg:p-20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none select-none italic text-[4rem] font-black glitch-text leading-none break-all">
                       SYSTEM_FAILURE_ERR_04_NET_LOG_VOID_NULL
                    </div>
                    <div className="relative z-10 text-center space-y-12">
                       <Terminal size={80} className="mx-auto text-[#00FF41] animate-pulse" />
                       <div className="space-y-4">
                          <p className="text-4xl font-black italic tracking-tighter text-white">"THE CORE IS UNSTABLE."</p>
                          <div className="h-1 w-24 bg-[#FF007F] mx-auto shadow-[0_0_20px_#FF007F]" />
                          <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-40">Operator: Ghost_In_Shell</p>
                       </div>
                       <button className="w-full py-6 bg-transparent neon-border text-[#00F3FF] text-xl font-black italic tracking-tighter hover:bg-[#00F3FF] hover:text-black transition-all">
                          STABILIZE_NOW
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing columns */}
        <section className="py-24">
           <h2 className="text-center text-xs font-bold uppercase tracking-[0.8em] mb-20 text-[#FF007F]">Token Exchange</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-0 neon-border border-b-0">
             {[
               { name: 'STREET_KID', price: '0.00', color: '#FFF' },
               { name: 'NOMAD', price: '24.99', color: '#FF007F', featured: true },
               { name: 'CORPO', price: '9,999', color: '#00F3FF' }
             ].map((p, i) => (
               <div key={i} className={`p-16 text-center flex flex-col items-center border-b md:border-b-0 md:border-r neon-border border-t-0 border-l-0 transition-all duration-700 ${p.featured ? 'bg-[#FF007F]/5' : ''}`}>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-12 opacity-40">{p.name} / CRD</h4>
                  <div className="mb-16">
                     <span className={`text-6xl font-black italic tracking-tighter ${p.featured ? 'glitch-text' : ''}`}>{p.price}</span>
                     <span className="text-[10px] block mt-4 font-bold opacity-30">BTC_EQUIVALENT</span>
                  </div>
                  <ul className="space-y-4 mb-16 text-[10px] font-bold uppercase tracking-widest leading-relaxed text-left w-full h-32">
                     <li className="flex justify-between items-center opacity-40"><span>Uplink_Speed</span><span className="text-[#00F3FF]">10_Gbps</span></li>
                     <li className="flex justify-between items-center opacity-40"><span>Proxy_Nodes</span><span className="text-[#FF007F]">04_Regional</span></li>
                     <li className="flex justify-between items-center opacity-40"><span>Neural_Safety</span><span className="text-[#00FF41]">Level_3</span></li>
                  </ul>
                  <button className={`w-full py-5 text-xs font-black italic tracking-[0.3em] transition-all cyber-cut ${p.featured ? 'bg-[#FF007F] text-white shadow-[0_0_30px_#FF007F]' : 'neon-border text-[#00F3FF] hover:bg-[#00F3FF] hover:text-black'}`}>
                     PURCHASE_ENTRY
                  </button>
               </div>
             ))}
           </div>
        </section>

        {/* FAQ - Glitch effect */}
        <section className="py-24 max-w-3xl mx-auto">
           <div className="space-y-8">
              {[
                { q: 'WHAT IS THE LATENCY?', a: 'Sub-neural propagation delays are minimized through our proprietary quantum tunneling protocols.' },
                { q: 'IS THE DATA ENCRYPTED?', a: 'Standard military-grade black-ice encryption is applied to all outgoing packets by default.' },
                { q: 'CAN I LOG OUT?', a: 'Logout procedures are handled via the neural severance package. Please consult your local operator.' }
              ].map((faq, i) => (
                <div key={i} className="bg-[#1A0F2E] neon-border p-6 hover:border-[#FF007F] transition-all cursor-pointer group">
                   <div className="flex justify-between items-center">
                      <h4 className="text-sm font-black italic tracking-widest text-white group-hover:text-[#FF007F] transition-colors">{faq.q}</h4>
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                   <p className="mt-4 text-[10px] font-bold leading-relaxed text-[#00F3FF]/40 hidden group-hover:block uppercase tracking-widest animate-in fade-in duration-500">
                      {faq.a}
                   </p>
                </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 bg-[#0D0221] neon-border border-b-0 border-x-0 relative overflow-hidden">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 px-8">
              <div className="col-span-2 space-y-8">
                 <h4 className="text-4xl font-black italic tracking-tighter glitch-text">CYBER_NET.v4</h4>
                 <p className="text-xs font-bold leading-relaxed text-white/40 max-w-sm uppercase tracking-[0.2em]">Designed in the neo-shibuya sector. Engineered for high-stakes archival survival. Built to last the winter.</p>
                 <div className="flex gap-4">
                    {[Terminal, Share2, Globe].map((Icon, i) => (
                      <div key={i} className="w-12 h-12 neon-border flex items-center justify-center hover:bg-[#FF007F] hover:text-white transition-all cursor-pointer">
                         <Icon size={20} />
                      </div>
                    ))}
                 </div>
              </div>
              
              {['NETWORKS', 'LEGAL', 'UPTIME'].map((title, i) => (
                <div key={i} className="space-y-8">
                   <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF007F]">{title}</h5>
                   <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-[#00F3FF]/40">
                      {['Protocol_09', 'EULA_Void', '99.999%'].map(l => (
                        <li key={l} className="hover:text-white cursor-pointer transition-colors">{">"} {l}</li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
           
           <div className="px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-[8px] font-bold uppercase tracking-[0.8em] opacity-20">
              <p>© 2026 CYBER_NET_HEAVY_IND. ALL NODES REGISTERED.</p>
              <div className="flex items-center gap-4">
                 <span>NEO-SHIBUYA_HQ</span>
                 <div className="w-2 h-2 bg-[#00FF41] rounded-full animate-pulse" />
              </div>
           </div>
        </footer>
      </div>
    </div>
  );
};
