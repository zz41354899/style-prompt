import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Sun, Wind, Zap, Globe, Heart, Leaf,
  Battery, Cpu, Cloud
} from 'lucide-react';

export const S21Solarpunk = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#F0FDFA] text-[#065F46] font-sans antialiased selection:bg-[#FDE047] selection:text-[#065F46] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .solar-glass {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 32px rgba(13, 148, 136, 0.05);
        }
        .hex-grid {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cpath fill='%23065f46' fill-opacity='0.03' d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM13.99 0L28 8.1v16.2l-14.01 8.1L0 24.3V8.1L13.99 0z'/%3E%3C/svg%3E");
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        .solar-glow {
          box-shadow: 0 0 40px rgba(253, 224, 71, 0.2);
        }
        .leaf-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
      `}} />

      {/* Background decoration */}
      <div className="fixed inset-0 hex-grid z-0" />
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#FDE047] opacity-10 blur-[120px] rounded-full z-0" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-[#2DD4BF] opacity-10 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10 p-4 md:p-10">
        {/* Navigation */}
        <header className="flex items-center justify-between py-6 px-10 solar-glass rounded-[40px] border-b-4 border-[#2DD4BF]/20">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FDE047] to-[#2DD4BF] p-0.5 shadow-lg group-hover:rotate-90 transition-transform duration-500">
               <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <Sun size={24} className="text-[#0D9488]" />
               </div>
            </div>
            <div className="flex flex-col">
               <span className="text-2xl font-black tracking-tight text-[#0D9488]">AURA</span>
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0D9488]/40">Community Hub</span>
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-[#065F46]/60">
              {['Garden', 'Grid', 'Commons', 'Foundry'].map((item) => (
                <span key={item} className="hover:text-[#0D9488] cursor-pointer transition-all relative group">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#2DD4BF] group-hover:w-full transition-all duration-500 rounded-full" />
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <button className="px-8 py-3 bg-[#0D9488] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#FDE047] hover:text-[#065F46] transition-all shadow-[0_10px_20px_rgba(13,148,136,0.2)]">
               CONNECT_v2.1
            </button>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-3 bg-white rounded-2xl shadow-lg border border-[#2DD4BF]/20">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-white/80 backdrop-blur-xl p-12 z-[100] relative rounded-[50px] shadow-2xl space-y-12 animate-in zoom-in-95 duration-500 border-2 border-[#2DD4BF]/50">
             <div className="flex flex-col gap-10 text-xl font-black text-[#0D9488] text-center uppercase tracking-widest">
                {['The Garden', 'Energy Grid', 'Marketplace', 'Social'].map((item) => (
                   <span key={item} className="border-b-2 border-dashed border-[#2DD4BF]/10 pb-4">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-5 bg-[#0D9488] text-white rounded-full font-black uppercase tracking-widest text-xs">
                OPEN PORTAL
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center space-y-12 py-12 px-6">
           <div className="inline-flex items-center gap-3 bg-white/60 border border-[#2DD4BF]/30 rounded-full px-6 py-2 shadow-sm animate-float">
              <Leaf size={16} className="text-[#10B981]" />
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#0D9488]">Energy positive. People first.</span>
           </div>
           
           <h1 className={`font-black leading-[0.9] tracking-tighter text-[#065F46] ${isMobile ? 'text-6xl text-center' : 'text-[9rem]'}`}>
             Powered by <br /> 
             <span className="bg-gradient-to-r from-[#FDE047] to-[#10B981] bg-clip-text text-transparent italic px-4">The Sun.</span>
           </h1>
           
           <p className={`text-[#0D9488]/60 font-medium leading-relaxed max-w-2xl mx-auto ${isMobile ? 'text-lg text-center' : 'text-3xl'}`}>
             The future isn't dark. It's bright, interconnected, and flourishing. Join the world's most sustainable digital cooperative.
           </p>
           
           <div className="flex flex-wrap justify-center gap-10 pt-10">
              <button className="px-14 py-7 bg-[#FDE047] text-[#065F46] text-xl font-black rounded-[30px] hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(253,224,71,0.3)] flex items-center gap-5 group border-2 border-[#FDE047] hover:bg-white">
                 JACK_IN
                 <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform duration-500" />
              </button>
              <button className="px-14 py-7 border-2 border-[#2DD4BF] bg-white text-[#0D9488] text-xl font-black rounded-[30px] hover:bg-[#F0FDFA] transition-all shadow-lg">
                 THE_COMMONS
              </button>
           </div>
           
           <div className="pt-32 flex justify-center scale-150">
              <div className="relative">
                 <Sun size={80} className="text-[#FDE047] animate-rotate-slow" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#10B981] opacity-20 animate-ping" />
                 </div>
              </div>
           </div>
        </section>

        {/* Ecosystem Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20 px-6">
          {[
            { icon: Battery, title: 'Energy Resilient', color: '#FDE047', desc: 'Stored renewable power for consistent archival up-time.' },
            { icon: Wind, title: 'Wind Nodes', color: '#2DD4BF', desc: 'Decentralized server clusters powered by localized drift.' },
            { icon: Cpu, title: 'Local Compute', color: '#10B981', desc: 'Edge processing harvested from the community foundry.' },
            { icon: Heart, title: 'Mutual Aid', color: '#FB7185', desc: 'Automated wealth redistribution and infrastructure support.' }
          ].map((item, i) => (
            <div key={i} className="solar-glass p-12 space-y-8 group hover:translate-y-[-12px] transition-all duration-700 cursor-pointer border-t-8" style={{ borderTopColor: item.color }}>
               <div className="w-16 h-16 rounded-[20px] bg-white border border-[#2DD4BF]/20 flex items-center justify-center text-[#0D9488] shadow-md group-hover:bg-[#FDE047] group-hover:text-[#065F46] transition-all">
                  <item.icon size={28} strokeWidth={2.5} />
               </div>
               <h3 className="text-2xl font-black tracking-tight text-[#065F46]">{item.title}</h3>
               <p className="text-sm font-bold text-[#0D9488]/50 leading-relaxed italic h-16">
                  {item.desc}
               </p>
               <div className="pt-6 border-t border-[#2DD4BF]/10">
                  <span className="text-[11px] uppercase tracking-widest text-[#0D9488] font-black group-hover:underline">PROTOCOL_EXPLORE_0{i+1}</span>
               </div>
            </div>
          ))}
        </section>

        {/* Community Narrative Section */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center px-6">
           <div className="lg:col-span-12 relative mb-12">
              <div className="luxury-line w-full bg-[#2DD4BF]/20 h-1 rounded-full" />
           </div>
           
           <div className="lg:col-span-5 space-y-12">
              <span className="text-[12px] font-black uppercase tracking-[0.8em] text-[#10B981]">The Cooperativist Vision</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#065F46] leading-[1] tracking-tighter">Everything Is <br /> <span className="bg-[#FDE047] px-4 rounded-3xl inline-block -rotate-2">Sustainable.</span></h2>
              <p className="text-xl font-bold leading-relaxed text-[#0D9488]/60 italic underline decoration-[#2DD4BF] decoration-4 underline-offset-8">
                 We've replaced the exploitative race with a communal walk. No more burnouts. Only blossoming futures.
              </p>
              
              <div className="space-y-6 pt-8">
                 {[
                   'Vertical Server Gardens',
                   'Algae-Cooled Data Bays',
                   'Solar-Mesh Networking',
                   'Holacracy Consensus Engine'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-8 group cursor-pointer hover:pl-6 transition-all duration-500">
                      <div className="w-6 h-6 rounded-lg bg-[#2DD4BF] opacity-40 group-hover:opacity-100 transition-opacity rotate-45" />
                      <span className="text-xl font-black text-[#065F46]/80 group-hover:text-[#0D9488] transition-colors">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-7">
              <div className="relative group">
                 <div className="absolute inset-[-40px] bg-[#10B981] rounded-[100px] opacity-10 blur-[80px]" />
                 <div className="aspect-video bg-white solar-glass border-4 border-[#2DD4BF] rounded-[60px] p-12 lg:p-24 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center animate-sway">
                    <Cloud size={100} className="mx-auto text-[#0D9488] animate-bounce" />
                    <div className="relative z-10 text-center mt-12 space-y-8">
                       <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-[#065F46]">Community Uptime</h3>
                       <p className="text-2xl font-bold italic text-[#0D9488]/50">99.9% Social Reliability Index</p>
                       <div className="flex justify-center gap-4">
                          {[1,2,3,4,5,6].map(i => (
                             <div key={i} className="w-8 h-8 rounded-lg bg-[#2DD4BF]/20 border border-[#2DD4BF] flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing / Energy Exchange */}
        <section className="py-24 text-center px-6">
           <h2 className="text-[12px] font-black uppercase tracking-[1em] text-[#0D9488] mb-24 italic">Contribution Tiers</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'GARDENER', price: '0.00', color: '#10B981' },
              { name: 'ENGINEER', price: '12.50', color: '#FDE047', featured: true },
              { name: 'ARCHITECT', price: '45.00', color: '#2DD4BF' }
            ].map((p, i) => (
              <div key={i} className={`p-16 solar-glass border-4 flex flex-col items-center gap-12 relative rounded-[60px] transition-all duration-700 ${p.featured ? 'border-[#FDE047] scale-[1.05] bg-white' : 'border-white hover:border-[#2DD4BF]'}`}>
                 {p.featured && <div className="absolute top-[-30px] bg-[#FDE047] text-[#065F46] px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-xl solar-glow">MOST IMPACTFUL</div>}
                 <h4 className="text-xs font-black uppercase tracking-[0.5em] opacity-40">{p.name}</h4>
                 <div className="flex flex-col items-center gap-4">
                    <div className="flex items-baseline gap-2">
                       <span className="text-7xl font-black tracking-tighter text-[#065F46]">{p.price}</span>
                       <span className="text-[10px] font-black uppercase opacity-30 tracking-widest text-[#0D9488]">Credits</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#0D9488]/40">Universal Basic Quota</span>
                 </div>
                 <div className="w-24 h-1 bg-current opacity-10 rounded-full" />
                 <ul className="space-y-4 text-xs font-black uppercase tracking-widest opacity-40 h-24 italic">
                    <li>1 Planted Native Tree</li>
                    <li>Shared Grid Bandwidth</li>
                    <li>Collective Voting Rights</li>
                 </ul>
                 <button className={`w-full py-6 rounded-full font-black text-xl italic transition-all shadow-xl ${p.featured ? 'bg-[#0D9488] text-white shadow-[#0D9488]/20' : 'bg-white border-2 border-[#0D9488] text-[#0D9488]'}`}>
                    JOIN_INITIATIVE
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* Solarpunk FAQ */}
        <section className="py-24 max-w-4xl mx-auto space-y-20 px-6">
           <h2 className="text-center text-4xl font-black italic tracking-tight text-[#065F46] uppercase tracking-[0.2em]">Collective Wisdom</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { q: 'Is this solar powered?', a: 'Every bit is calculated using surplus community energy, stored in localized salt-based battery arrays.' },
                { q: 'How do I contribute?', a: 'Joining the Garden collective and sharing your compute-time contributes directly to the digital commons.' },
                { q: 'Who owns Aura?', a: 'We do. You do. The community owns 100% of the nodes, infrastructure, and the underlying protocols.' },
                { q: 'Is it carbon-neutral?', a: 'Beyond neutral. We are a carbon-negative ecosystem, actively regenerating local biomes with every login.' }
              ].map((faq, i) => (
                 <div key={i} className="solar-glass p-12 group hover:border-[#10B981]/50 border-b-8 border-transparent hover:border-b-[#10B981] transition-all duration-500 rounded-[50px]">
                    <h4 className="text-2xl font-black  text-[#065F46] mb-6 uppercase leading-tight">{faq.q}</h4>
                    <p className="text-md font-bold italic text-[#0D9488]/50 leading-relaxed uppercase tracking-widest text-xs">
                       {faq.a}
                    </p>
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 solar-glass border-none rounded-[100px] space-y-20 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2DD4BF]/5 to-transparent pointer-events-none" />
           
           <div className="flex justify-center gap-20 mb-10 relative z-10">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <div key={i} className="text-[#0D9488] hover:text-[#065F46] transition-all transform hover:scale-[1.5] hover:rotate-[360deg] duration-1000 cursor-pointer">
                   <Icon size={24} strokeWidth={3} />
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-center gap-16 text-[10px] font-black uppercase tracking-[0.6em] text-[#0D9488]/40 relative z-10">
              <span className="hover:text-[#FDE047] cursor-pointer">Communal Bylaws</span>
              <span className="hover:text-[#FDE047] cursor-pointer">Ecological Rights</span>
              <span className="hover:text-[#FDE047] cursor-pointer">Grid Status</span>
           </div>
           
           <div className="flex flex-col items-center gap-10 relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#10B981] flex items-center justify-center shadow-lg animate-float">
                 <Sun size={32} className="text-white animate-rotate-slow" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[1em] text-[#065F46]/20 px-10 leading-loose max-w-4xl mx-auto">
                 © 2026 THE AURA SUSTAINABLE DIGITAL COLLECTIVE. REGENERATIVE_BY_DEFAULT.
              </p>
           </div>
        </footer>
      </div>
    </div>
  );
};
