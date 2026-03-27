import { useState, useEffect } from 'react';
import { 
  Zap, Shield, Cpu, Terminal, Globe,
  MessageSquare, Share2, Play, Power,
  ChevronRight, AlertTriangle, Activity, Database,
  Disc, Laptop, Lock, Layers, Radio
} from 'lucide-react';

/**
 * S16: Cyberpunk / TRON (Masterpiece Edition)
 * A high-fidelity aesthetic inspired by the digital frontier of TRON Legacy.
 * Features: Central Light Beam, Atmospheric Fog, Recursive Grid, Disc Motifs.
 */
export const S16Cyberpunk = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#000000] text-[#00E5FF] font-sans antialiased selection:bg-[#00E5FF] selection:text-black overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }

        /* Atmospheric Background */
        .bg-atmosphere {
          background: radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.08) 0%, transparent 70%);
        }
        
        .tron-fog {
          mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3FecltNoise type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.15;
          filter: blur(40px);
        }

        /* Central Beam */
        @keyframes beam-glow {
          0%, 100% { opacity: 0.6; filter: blur(20px); }
          50% { opacity: 1; filter: blur(40px); }
        }
        .light-beam {
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #00E5FF, #FFFFFF, #00E5FF, transparent);
          box-shadow: 0 0 40px #00E5FF, 0 0 80px #00E5FF;
          animation: beam-glow 4s infinite ease-in-out;
        }

        /* Perspective Grid */
        .grid-3d {
          perspective: 1000px;
          height: 100%;
          width: 100%;
        }
        .grid-floor {
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: linear-gradient(rgba(0, 229, 255, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 229, 255, 0.2) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: rotateX(75deg);
          mask-image: linear-gradient(to top, black, transparent 80%);
        }

        /* Advanced Lighting */
        .neon-text-glow {
          text-shadow: 0 0 10px #00E5FF, 0 0 20px #00E5FF;
        }
        .neon-border-glow {
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.4), inset 0 0 10px rgba(0, 229, 255, 0.2);
        }

        /* Logo Animation */
        @keyframes pulse-disc {
          from { transform: scale(1); opacity: 0.3; }
          to { transform: scale(1.5); opacity: 0; }
        }
        .disc-pulse::after {
          content: "";
          position: absolute;
          inset: -10px;
          border: 2px solid #00E5FF;
          border-radius: 9999px;
          animation: pulse-disc 2s infinite ease-out;
        }

        /* Digital Dust */
        .dust-container { position: absolute; inset: 0; pointer-events: none; }
        .dust { position: absolute; width: 2px; height: 2px; background: #00E5FF; border-radius: 50%; opacity: 0.4; }
      `}} />

      {/* Layer 0: Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 bg-atmosphere" />
        <div className="absolute inset-0 bg-[#00050A] opacity-80" />
        
        {/* perspective Grid */}
        <div className="grid-3d opacity-30">
          <div className="grid-floor" />
        </div>

        {/* Central Vertical Beam */}
        <div className="absolute left-1/2 top-0 bottom-0 flex justify-center w-px z-10">
           <div className="light-beam" />
           {/* Top Flare */}
           <div className="absolute top-[10%] w-64 h-64 bg-[#00E5FF] rounded-full blur-[100px] opacity-20" />
        </div>

        {/* Clouds/Fog effects */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#00E5FF]/10 to-transparent blur-[80px]" />
        
        {/* Mist mask */}
        <div className="absolute inset-0 tron-fog" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 font-rajdhani">
        {/* Header - Advanced Glassmorphism */}
        <header className="flex items-center justify-between py-8 border-b border-[#00E5FF]/10 backdrop-blur-sm">
          <div className="flex items-center gap-6 group cursor-pointer">
             <div className="relative disc-pulse">
                <div className="w-14 h-14 rounded-full border-2 border-[#00E5FF] flex items-center justify-center bg-black/40 shadow-[0_0_20px_#00E5FF]">
                   <Disc className="text-[#00E5FF] animate-spin-slow" size={24} />
                </div>
                <div className="absolute -inset-1 border border-[#00E5FF]/20 rounded-full" />
             </div>
             <div>
                <span className="text-3xl font-orbitron font-black tracking-[0.2em] text-white italic neon-text-glow">TRON</span>
                <span className="text-[10px] tracking-[0.6em] opacity-40 uppercase block font-bold">DIGITAL_LEGACY v.S16</span>
             </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-14">
              {['Nexus', 'Protocols', 'Identity', 'System'].map((item) => (
                <a key={item} href="#" className="text-sm font-bold uppercase tracking-[0.4em] text-[#00E5FF]/60 hover:text-white transition-all relative group">
                  {item}
                  <span className="absolute -bottom-4 left-0 w-0 h-[3px] bg-white group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#FFF]" />
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-4">
             <button className="px-6 py-2 border border-[#00E5FF]/40 text-[#00E5FF] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#00E5FF] hover:text-black transition-all">
                Access_Link
             </button>
             <button className="p-3 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-full hover:bg-[#00E5FF] hover:text-black transition-all group">
                <Power size={18} className="group-hover:rotate-180 transition-transform duration-500" />
             </button>
          </div>
        </header>

        {/* Hero Section - High Texture */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center relative py-20">
           <div className="space-y-8 max-w-5xl">
              <div className="inline-flex items-center gap-4 px-8 py-2 bg-[#FF9E00]/10 border border-[#FF9E00]/40 text-[#FF9E00] font-bold uppercase tracking-[0.4em] text-[10px] rounded-full mx-auto backdrop-blur-md">
                 <Radio size={14} className="animate-pulse" />
                 Signal_Interception_Confirmed
              </div>
              
              <h1 className="text-8xl md:text-[12rem] font-orbitron font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#00E5FF]/40 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                 A DIGITAL <br /> 
                 <span className="italic">FRONTIER</span>
              </h1>
              
              <div className="relative py-12">
                 <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <span className="text-[15rem] font-orbitron font-black tracking-widest pointer-events-none uppercase">01101</span>
                 </div>
                 <p className="text-2xl md:text-3xl text-[#00E5FF]/80 leading-relaxed font-light tracking-wide italic max-w-3xl mx-auto relative z-10 font-rajdhani">
                    "I had a vision of a world that I thought I'd never see. A digital frontier to shape coders, thinkers, and explorers."
                 </p>
              </div>
              
              <div className="flex flex-wrap gap-8 pt-8 justify-center">
                 <button className="group relative px-14 py-6 bg-white text-black font-orbitron font-black text-2xl tracking-[0.2em] shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all hover:scale-105 overflow-hidden">
                    <span className="relative z-10">INITIALIZE</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                 </button>
                 <button className="px-14 py-6 border-2 border-[#00E5FF] text-[#00E5FF] font-orbitron font-black text-2xl tracking-[0.2em] hover:bg-[#00E5FF]/10 transition-all shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                    DISC_RECORDS
                 </button>
              </div>
           </div>

           {/* Hero Decoration - Light Rings */}
           <div className="absolute bottom-0 left-0 right-0 h-32 flex justify-center items-end opacity-20">
              <div className="w-[120%] h-[200px] border-t-2 border-[#00E5FF] rounded-[100%] blur-md" />
           </div>
        </section>

        {/* Feature Sectors - Enhanced Texture */}
        <section className="py-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: 'ISO_CORE', desc: 'Isomorphic data structures for pure logic processing.', icon: Layers, status: '94%_LOAD' },
             { title: 'PORTAL_v9', desc: 'Near-instantaneous traversal across multi-node lattices.', icon: Globe, status: 'STABLE' },
             { title: 'SENTINEL', desc: 'Advanced defensive protocols for neural protection.', icon: Shield, status: 'ACTIVE' },
             { title: 'UPLINK', desc: 'Direct neural interface with the Master Control.', icon: Zap, status: 'SYNCED' }
           ].map((sector, i) => (
             <div key={i} className="group p-1 bg-gradient-to-b from-[#00E5FF]/30 to-transparent hover:from-[#00E5FF] transition-all duration-700">
                <div className="h-full bg-black/90 p-10 flex flex-col gap-8 relative overflow-hidden backdrop-blur-xl">
                   {/* Background Data Stream */}
                   <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-[80px] font-black group-hover:opacity-10 transition-opacity">
                      {i + 1}
                   </div>
                   
                   <div className="w-16 h-16 border border-[#00E5FF]/40 flex items-center justify-center group-hover:bg-[#00E5FF] transition-all duration-500 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                      <sector.icon size={28} className="text-[#00E5FF] group-hover:text-black" />
                   </div>
                   
                   <div>
                      <h3 className="text-2xl font-orbitron font-bold tracking-widest mb-3 text-white">{sector.title}</h3>
                      <p className="text-sm text-[#00E5FF]/40 font-medium leading-relaxed uppercase tracking-tighter">
                         {sector.desc}
                      </p>
                   </div>
                   
                   <div className="mt-auto flex justify-between items-center text-[10px] font-bold tracking-[0.2em]">
                      <span className="opacity-30">CRC_CHECK_PASS</span>
                      <span className="text-[#00E5FF]">{sector.status}</span>
                   </div>
                </div>
             </div>
           ))}
        </section>

        {/* Cinematic Content Section */}
        <section className="py-40 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
           <div className="relative">
              {/* Decorative Beam Fragment */}
              <div className="absolute -left-10 top-0 bottom-0 w-1 bg-[#FF9E00]/40 shadow-[0_0_20px_#FF9E00] hidden lg:block" />
              
              <div className="space-y-12 pl-4 lg:pl-12">
                 <h2 className="text-6xl md:text-8xl font-orbitron font-black tracking-tight leading-none text-white italic">
                    RECLAIM <br /> THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-white">GRID.</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-[#00E5FF]/60 font-medium leading-relaxed border-l-4 border-[#00E5FF] pl-10 py-4 italic">
                    The system is under investigation. The User is no longer in control. It's time to override the Master Control Program.
                 </p>
                 
                 <div className="space-y-8 pt-8">
                    {['Neural_Link Overclocking', 'Memory Compression v2', 'Synthetic Immune Systems'].map((item, i) => (
                      <div key={i} className="flex items-center gap-6 group cursor-pointer">
                         <div className="w-12 h-12 border border-[#00E5FF]/20 flex items-center justify-center p-3 group-hover:border-[#00E5FF] transition-all">
                            <div className="w-full h-full bg-[#00E5FF]/20 group-hover:bg-[#00E5FF]/60 transition-all rounded-sm" />
                         </div>
                         <span className="text-2xl font-orbitron font-bold tracking-widest uppercase hover:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="relative group">
              {/* High Texture Card */}
              <div className="relative p-[1px] bg-gradient-to-br from-[#00E5FF] via-[#00E5FF]/20 to-transparent shadow-[0_0_80px_rgba(0,229,255,0.15)]">
                 <div className="bg-[#000810] p-12 md:p-20 space-y-12 relative overflow-hidden backdrop-blur-2xl">
                    {/* Interior Scanline */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5FF]/5 to-transparent h-1/4 animate-[scan_6s_infinite] pointer-events-none" />
                    
                    <div className="flex justify-between items-center text-[12px] font-black text-[#FF9E00] tracking-[0.5em] uppercase">
                       <span>Identity_Disc_Scan</span>
                       <span className="flex gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FF9E00] animate-pulse" />
                          <span className="w-2 h-2 rounded-full bg-[#FF9E00] animate-pulse delay-75" />
                          <span className="w-2 h-2 rounded-full bg-[#FF9E00] animate-pulse delay-150" />
                       </span>
                    </div>

                    <div className="aspect-square border border-[#00E5FF]/20 relative flex items-center justify-center p-12 shadow-[inset_0_0_30px_rgba(0,229,255,0.05)]">
                       {/* Nested Disc Detail */}
                       <div className="w-full h-full rounded-full border border-[#00E5FF]/40 flex items-center justify-center p-8 relative">
                          <Disc size={160} className="text-[#00E5FF]/20" />
                          <div className="absolute inset-0 border-[6px] border-[#00E5FF] rounded-full shadow-[0_0_30px_#00E5FF]" />
                          <div className="absolute -inset-4 border border-[#00E5FF]/10 rounded-full" />
                       </div>
                       
                       {/* Floating Data */}
                       <div className="absolute top-10 right-10 flex flex-col gap-2 font-mono text-[8px] text-[#00E5FF]/40">
                          <span>0x8F_02</span>
                          <span>SYS_OK</span>
                       </div>
                    </div>

                    <div className="flex flex-col gap-4">
                       <button className="w-full py-6 bg-[#00E5FF] text-black font-orbitron font-black text-sm tracking-[1em] uppercase hover:bg-white hover:shadow-[0_0_30px_#FFF] transition-all">
                          AUTHORIZE
                       </button>
                       <p className="text-center text-[8px] font-bold uppercase tracking-[0.5em] opacity-30">
                          Encrypted Connection via Sector_9G
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing/Access Levels - Deep Texture */}
        <section className="py-40">
           <div className="mb-24 flex flex-col items-center gap-6">
              <h2 className="text-center text-xs font-bold uppercase tracking-[1em] text-[#FF9E00]">Sector Allocation</h2>
              <div className="h-px w-64 bg-gradient-to-r from-transparent via-[#FF9E00] to-transparent shadow-[0_0_10px_#FF9E00]" />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { name: 'STREET_KID', price: 'FREE', status: '0_UPLINK', features: ['Public Lattice Access', 'Standard Encryption', 'Terminal Read-Only'] },
               { name: 'GRID_RUNNER', price: '24', status: 'UNLIMITED', features: ['Private Node Uplink', 'ISO Shielding', 'Write Permissions', 'Custom Identity'], featured: true },
               { name: 'M_C_P', price: '499', status: 'ADMIN', features: ['Master Control API', 'Infinite Throughput', 'Grid Persistence', 'Sector Ownership'] }
             ].map((plan, i) => (
                <div key={i} className={`group p-12 border border-[#00E5FF]/20 flex flex-col items-center text-center relative overflow-hidden transition-all duration-700 hover:border-[#00E5FF] ${plan.featured ? 'bg-[#00E5FF]/5 border-[#00E5FF]/50 shadow-[0_0_100px_rgba(0,229,255,0.1)]' : 'bg-black/40'}`}>
                   {plan.featured && (
                     <div className="absolute top-0 right-0 bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em]">PRIORITY</div>
                   )}
                   
                   <h4 className="text-2xl font-orbitron font-bold tracking-[0.5em] mb-12 text-white/60 group-hover:text-white transition-colors uppercase italic">{plan.name}</h4>
                   
                   <div className="mb-14 relative">
                      <div className="absolute -inset-8 bg-[#00E5FF]/10 rounded-full blur-2xl group-hover:bg-[#00E5FF]/20 transition-all" />
                      <span className="text-7xl font-orbitron font-black tracking-tighter relative z-10 neon-text-glow">{plan.price}</span>
                      {plan.price !== 'FREE' && <span className="text-sm font-bold opacity-30 ml-3 uppercase">CRD/MO</span>}
                   </div>
                   
                   <div className="w-full h-px bg-[#00E5FF]/10 mb-10" />
                   
                   <ul className="space-y-6 mb-16 text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 w-full text-left font-rajdhani">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-4 group-hover:opacity-100 transition-opacity">
                           <div className="w-1.5 h-1.5 bg-[#00E5FF] shadow-[0_0_5px_#00E5FF]" />
                           {f}
                        </li>
                      ))}
                   </ul>
                   
                   <button className={`w-full py-6 font-orbitron font-black text-sm tracking-[0.6em] transition-all uppercase ${plan.featured ? 'bg-white text-black hover:bg-[#00E5FF] hover:shadow-[0_0_30px_#00E5FF]' : 'border border-white/20 text-white hover:border-white hover:shadow-[0_0_20px_white]'}`}>
                      SELECT_UP
                   </button>
                </div>
             ))}
           </div>
        </section>

        {/* Footer - Atmospheric Conclusion */}
        <footer className="py-32 border-t border-[#00E5FF]/10 relative">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
              <div className="lg:col-span-2 space-y-10">
                 <div className="flex items-center gap-4">
                    <Disc className="text-white shadow-[0_0_20px_white]" size={36} />
                    <span className="text-4xl font-orbitron font-black tracking-[0.4em] text-white italic">TRON_LEGACY</span>
                 </div>
                 <p className="text-[10px] font-bold uppercase tracking-[0.6em] opacity-30 max-w-md leading-loose">
                    DESIGNED BY ENCOM SECTOR_7. ENGINEERED FOR GRID SURVIVAL. 
                    ESTABLISHED 1982. REBORN 2010. PERSISTING 2026.
                 </p>
              </div>
              
              {['LATTICE', 'SYSTEMS', 'IDENTITY'].map((title, i) => (
                <div key={i} className="space-y-8">
                   <h5 className="text-[10px] font-black uppercase tracking-[0.8em] text-[#FF9E00]">{title}</h5>
                   <ul className="space-y-5 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 hover:text-[#00E5FF]/40">
                      {['Protocol_01', 'Memory_Alpha', 'User_Root'].map(link => (
                        <li key={link} className="hover:text-white cursor-pointer transition-colors flex items-center gap-3">
                           <ChevronRight size={10} className="text-[#00E5FF]" /> {link}
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="text-[8px] font-bold uppercase tracking-[1em] opacity-20">
                 © 2026 DIGITAL_FRONTIER_CORP. ENCOM_PROTOCOLS_ACTIVE.
              </div>
              <div className="flex gap-8">
                 {[Terminal, Laptop, Lock, Layers].map((Icon, i) => (
                   <a key={i} href="#" className="p-4 border border-[#00E5FF]/10 hover:border-[#00E5FF] hover:bg-[#00E5FF]/5 transition-all text-[#00E5FF]/40 hover:text-white">
                      <Icon size={18} />
                   </a>
                 ))}
              </div>
           </div>
           
           {/* Final Light Beam Fragment */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-t from-[#00E5FF] to-transparent z-0 opacity-40 shadow-[0_0_20px_#00E5FF]" />
        </footer>
      </div>
    </div>
  );
};

