import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Cpu, Zap, Globe, Shield, Activity, HardDrive,
  Database, Terminal, Play
} from 'lucide-react';

export const S23Silver = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#374151] font-sans antialiased selection:bg-[#3B82F6] selection:text-white overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .silver-gradient {
          background: linear-gradient(135deg, #E5E7EB 0%, #F9FAFB 50%, #D1D5DB 100%);
        }
        .silver-border {
          border: 1px solid rgba(156, 163, 175, 0.3);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03), inset 0 0 10px rgba(255, 255, 255, 0.5);
        }
        .silver-text {
          background: linear-gradient(180deg, #9CA3AF 0%, #374151 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .brushed-metal {
          background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 10px);
        }
        .precision-grid {
          background-image: linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        @keyframes pulse-blue {
          0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.2); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
        }
        .animate-pulse-blue {
          animation: pulse-blue 3s infinite;
        }
      `}} />

      {/* Background elements */}
      <div className="fixed inset-0 precision-grid z-0" />
      <div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10 p-4 md:p-10">
        {/* Navigation */}
        <header className="flex items-center justify-between py-6 px-10 bg-white/40 backdrop-blur-md silver-border rounded-lg relative overflow-hidden group">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex items-center gap-4 group cursor-pointer relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-200 border border-gray-300 rounded-md flex items-center justify-center shadow-sm group-hover:border-blue-400 transition-colors">
               <Cpu size={24} className="text-gray-500 group-hover:text-blue-500 transition-colors" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
               <span className="text-2xl font-black tracking-tighter silver-text uppercase">ARGENT</span>
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500/60">Digital Lab.v3</span>
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">
              {['Modules', 'Protocols', 'Latency', 'System'].map((item) => (
                <span key={item} className="hover:text-blue-500 cursor-pointer transition-all border-b-2 border-transparent hover:border-blue-500 pb-1">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2 text-[9px] font-bold text-gray-400">
                  <Activity size={12} className="text-blue-500 animate-pulse" />
                  99.9% SYNC
               </div>
               <button className="px-8 py-3 bg-[#374151] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded hover:bg-blue-600 transition-all shadow-lg">
                  Initialize
               </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border border-gray-200 rounded">
              {menuOpen ? <X size={24} className="text-blue-500" /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-white/90 backdrop-blur-xl border border-gray-200 p-12 z-[100] relative rounded-lg shadow-2xl space-y-12 animate-in slide-in-from-top-4 duration-500">
             <div className="flex flex-col gap-10 text-xl font-black text-gray-600 text-center uppercase tracking-widest">
                {['Mod_01', 'Mod_02', 'System_Log', 'Uplink'].map((item) => (
                   <span key={item} className="border-b border-gray-100 pb-4">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-5 bg-blue-500 text-white rounded font-black uppercase tracking-widest text-xs shadow-blue-500/20 shadow-xl">
                BOOT_SYSTEM
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 items-center">
           <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded px-4 py-1 shadow-sm">
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Precision Architecture</span>
              </div>
              
              <h1 className={`font-black leading-[0.9] tracking-tighter text-gray-800 ${isMobile ? 'text-5xl text-center' : 'text-[9.5rem] silver-text uppercase'}`}>
                Digital <br /> 
                <span className="text-blue-500 decoration-gray-300 underline decoration-4 underline-offset-8">Precision.</span>
              </h1>
              
              <p className={`text-gray-400 font-medium leading-relaxed max-w-xl ${isMobile ? 'text-lg text-center' : 'text-3xl italic'}`}>
                Engineering interfaces that defined the new standard of tactile minimalist computational aesthetics. 
              </p>
              
              <div className="flex flex-wrap gap-8 pt-6 justify-center lg:justify-start">
                 <button className="px-12 py-6 bg-white border border-gray-300 text-gray-800 text-xl font-black uppercase tracking-widest hover:border-blue-500 hover:text-blue-500 transition-all shadow-sm flex items-center gap-4 group">
                    Jack_In
                    <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform duration-500" />
                 </button>
                 <button className="px-12 py-6 bg-[#374151] text-white text-xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">
                    Archive_0
                 </button>
              </div>
           </div>

           <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative group">
                 <div className="absolute inset-0 bg-blue-400/10 blur-[100px] pointer-events-none" />
                 <div className="aspect-square bg-white silver-border p-12 lg:p-20 relative overflow-hidden rounded-2xl group-hover:scale-[1.02] transition-transform duration-700 animate-pulse-blue">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 brushed-metal -mr-16 -mt-16 rotate-45 border border-gray-300 shadow-xl" />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                       <div className="flex justify-between items-center pb-8 border-b border-gray-100">
                          <Activity size={32} className="text-blue-500" />
                          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-300">CORE_MODULE_v.9</div>
                       </div>
                       
                       <div className="space-y-6">
                          {[
                            { l: 'LATENCY', v: '0.002ms', c: 'blue' },
                            { l: 'SECURITY', v: 'ENCRYPTED', v2: '100%', c: 'gray' },
                            { l: 'BANDWIDTH', v: 'OPTIMAL', c: 'blue' }
                          ].map((stat, i) => (
                             <div key={i} className="flex justify-between items-end border-b border-gray-100 pb-4">
                                <div className="space-y-1">
                                   <div className="text-[9px] font-bold uppercase tracking-widest text-gray-300">{stat.l}</div>
                                   <div className="text-2xl font-black text-gray-800 tracking-tight uppercase">{stat.v}</div>
                                </div>
                                <div className={`w-8 h-8 rounded-full border-2 border-${stat.c}-500/20 flex items-center justify-center`}>
                                   <div className={`w-2 h-2 rounded-full bg-${stat.c}-500`} />
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Modular Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20">
          {[
            { icon: Shield, title: 'Black Seal', color: 'gray', desc: 'Impermeable encryption protocols for high-fidelity data vaulting.' },
            { icon: Zap, title: 'Flash Sync', color: 'blue', desc: 'Real-time synchronization across all distributed edge modules.' },
            { icon: Database, title: 'Raw Arc', color: 'gray', desc: 'Cold-storage solutions for immutable structural history blocks.' },
            { icon: HardDrive, title: 'Iron Core', color: 'blue', desc: 'Hardware-derived security keys for absolute local validation.' }
          ].map((item, i) => (
            <div key={i} className="bg-white silver-border p-10 space-y-8 group hover:bg-gray-50 transition-all duration-500 cursor-pointer overflow-hidden relative">
               <div className="absolute bottom-0 right-0 w-24 h-24 bg-gray-100/50 -mr-12 -mb-12 rotate-45 group-hover:rotate-0 transition-transform" />
               <div className="w-16 h-16 bg-white border border-gray-300 flex items-center justify-center text-gray-500 group-hover:border-blue-500 group-hover:text-blue-500 transition-all shadow-sm">
                  <item.icon size={28} strokeWidth={1} />
               </div>
               <h3 className="text-2xl font-black tracking-tight text-gray-800 uppercase">{item.title}</h3>
               <p className="text-xs font-bold text-gray-400 leading-relaxed italic h-12">
                  {item.desc}
               </p>
               <div className="pt-6 flex items-center gap-3">
                  <div className={`w-full h-[1px] bg-gray-200 group-hover:bg-blue-400 transition-colors`} />
                  <span className="text-[9px] font-black tracking-widest text-gray-300">0{i+1}</span>
               </div>
            </div>
          ))}
        </section>

        {/* Clinical Split UI */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
           <div className="lg:col-span-12">
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
           </div>
           
           <div className="lg:col-span-7 space-y-12">
              <span className="text-[12px] font-black uppercase tracking-[0.8em] text-gray-400">Engineering.Ethics</span>
              <h2 className="text-5xl md:text-7xl font-black text-gray-800 leading-[1] tracking-tighter silver-text uppercase">Structure <br /> Follows <br /> Purpose.</h2>
              <div className="w-32 h-[4px] bg-blue-500" />
              <p className="text-xl font-bold leading-relaxed text-gray-500 italic border-l border-gray-300 pl-10">
                 Our methodology removes the decorative noise to reveal the clinical beauty of pure data interaction.
              </p>
              
              <div className="grid grid-cols-2 gap-10 pt-8">
                 {[
                   'Zero-Latency DOM Processing',
                   'Structural Type Integrity',
                   'Clinical Grid Mapping',
                   'Cold-Pressed CSS Architecture'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-6 group cursor-pointer hover:translate-x-4 transition-all duration-500">
                      <div className="w-4 h-4 bg-gray-200 group-hover:bg-blue-500 transition-colors" />
                      <span className="text-[11px] font-black text-gray-400 group-hover:text-gray-800 transition-colors uppercase tracking-widest">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-5 relative group">
              <div className="absolute inset-[-40px] bg-blue-400/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-3xl" />
              <div className="bg-white silver-border p-12 lg:p-20 relative overflow-hidden rounded shadow-2xl space-y-12">
                 <div className="flex justify-between items-center">
                    <Terminal size={32} className="text-gray-400" />
                    <div className="text-[8px] font-bold uppercase tracking-widest text-gray-300">SYS_ANALYSIS_MOD</div>
                 </div>
                 
                 <div className="space-y-6">
                    <div className="h-40 border border-gray-100 bg-gray-50 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 precision-grid opacity-20" />
                       <Activity size={80} className="text-blue-500 animate-pulse" strokeWidth={0.5} />
                    </div>
                    <div className="space-y-2">
                       <p className="text-[10px] font-black text-gray-800 uppercase tracking-widest">Calibration_Status: ACTIVE</p>
                       <div className="h-1 w-full bg-gray-100 overflow-hidden">
                          <div className="h-full bg-blue-500 w-3/4 animate-shimmer" />
                       </div>
                    </div>
                 </div>
                 
                 <button className="w-full py-6 bg-white border border-gray-300 text-gray-800 text-xs font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all">
                    Calibrate_v.0
                 </button>
              </div>
           </div>
        </section>

        {/* Pricing columns / Inventory */}
        <section className="py-24 text-center">
           <h2 className="text-[12px] font-black uppercase tracking-[1em] text-gray-400 mb-24">License Inventory</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 bg-white">
            {[
              { name: 'STANDARD', price: '00', color: 'gray' },
              { name: 'TECHNICAL', price: '45', color: 'blue', featured: true },
              { name: 'ENTERPRISE', price: '99', color: 'black' }
            ].map((p, i) => (
              <div key={i} className={`p-16 flex flex-col items-center gap-12 transition-all duration-700 border-r border-gray-100 last:border-r-0 ${p.featured ? 'bg-gray-50' : 'hover:bg-gray-50/50'}`}>
                 <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 italic">{p.name}</h4>
                 <div className="flex flex-col items-center gap-4">
                    <div className="flex items-baseline gap-2">
                       <span className={`text-7xl font-black tracking-tighter silver-text ${p.featured ? 'text-blue-600' : 'text-gray-800'}`}>{p.price}</span>
                       <span className="text-[10px] font-black uppercase opacity-30 tracking-widest">CRD_UNIT</span>
                    </div>
                 </div>
                 <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 h-24 italic">
                    <li>Single Core Processing</li>
                    <li>Localized Protocol Access</li>
                    <li>Basic Support Hash</li>
                 </ul>
                 <button className={`w-full py-5 text-[10px] font-black uppercase tracking-[0.3em] transition-all ${p.featured ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'border border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-white'}`}>
                    ACQUIRE_LIC
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* Clinical FAQ */}
        <section className="py-24 max-w-4xl mx-auto space-y-16">
           <div className="text-center">
              <h2 className="text-3xl font-black silver-text uppercase tracking-widest">Protocol.Manifesto</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { q: 'Is the data immutable?', a: 'Every atomic transaction is written to the local cold-block to ensure zero-point restoration.' },
                { q: 'What is the sync rate?', a: 'Synchronization occurs at sub-millisecond intervals across the localized precision grid.' },
                { q: 'Can I custom compile?', a: 'Our enterprise modules allow for unique functional hashing tailored to specific lab environments.' },
                { q: 'Is technical support included?', a: 'Dedicated lab sessions are available for all technical license holders monthly.' }
              ].map((faq, i) => (
                 <div key={i} className="bg-white silver-border p-10 group hover:border-blue-400 transition-colors">
                    <h4 className="text-[13px] font-black text-gray-800 mb-6 uppercase tracking-wider">{faq.q}</h4>
                    <p className="text-[11px] font-bold italic text-gray-400 leading-relaxed uppercase tracking-widest">
                       {faq.a}
                    </p>
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 bg-white silver-border rounded-lg space-y-16 text-center relative overflow-hidden group">
           <div className="absolute inset-x-0 bottom-0 h-1 bg-gray-200 group-hover:bg-blue-500 transition-colors duration-1000" />
           
           <div className="flex justify-center gap-20 relative z-10">
              {[Github, Linkedin, Globe].map((Icon, i) => (
                <div key={i} className="text-gray-300 hover:text-blue-500 transition-all transform hover:scale-125 duration-700 cursor-pointer">
                   <Icon size={24} strokeWidth={1.5} />
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-center gap-16 text-[10px] font-black uppercase tracking-[0.6em] text-gray-300 relative z-10">
              <span className="hover:text-gray-800 cursor-pointer">Security_Log</span>
              <span className="hover:text-gray-800 cursor-pointer">Privacy_Key</span>
              <span className="hover:text-gray-800 cursor-pointer">Lab_Terms</span>
           </div>
           
           <div className="flex flex-col items-center gap-10 relative z-10">
              <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded flex items-center justify-center shadow-inner group-hover:bg-blue-50 transition-colors">
                 <HardDrive size={24} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
              </div>
              <p className="text-[9px] font-black uppercase tracking-[1em] text-gray-200 px-10 leading-loose max-w-4xl mx-auto">
                 © 2026 ARGENT PRECISION SYSTEMS. AUTHENTICATED_SESSION.
              </p>
           </div>
        </footer>
      </div>
    </div>
  );
};
