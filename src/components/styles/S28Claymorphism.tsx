import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Cloud, Heart, Smile, Zap, Rocket,
  Gift, Coffee, Ghost, Sun
} from 'lucide-react';

export const S28Claymorphism = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#F0F4F8] text-[#475569] font-sans antialiased selection:bg-[#FFD8BE] selection:text-[#475569] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .clay-card {
          background: #F0F4F8;
          border-radius: 40px;
          box-shadow: 16px 16px 32px #D1D9E6, -16px -16px 32px #FFFFFF, 
                      inset 8px 8px 16px rgba(0,0,0,0.02), inset -8px -8px 16px rgba(255,255,255,0.5);
          border: 8px solid #F0F4F8;
        }
        .clay-button {
          background: #3B82F6;
          border-radius: 24px;
          box-shadow: 8px 8px 16px #D1D9E6, -8px -8px 16px #FFFFFF,
                      inset 4px 4px 8px rgba(255,255,255,0.3), inset -4px -4px 8px rgba(0,0,0,0.2);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          color: white;
          border: 4px solid #3B82F6;
        }
        .clay-button:active {
          transform: scale(0.95);
          box-shadow: 4px 4px 8px #D1D9E6, -4px -4px 8px #FFFFFF, 
                      inset 8px 8px 16px rgba(0,0,0,0.2), inset -8px -8px 16px rgba(255,255,255,0.3);
        }
        .clay-input {
          background: #F0F4F8;
          border-radius: 20px;
          box-shadow: inset 6px 6px 12px #D1D9E6, inset -6px -6px 12px #FFFFFF;
          border: none;
        }
        .clay-text-shadow {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.05);
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        .clay-active {
           box-shadow: inset 8px 8px 16px #D1D9E6, inset -8px -8px 16px #FFFFFF;
        }
      `}} />

      <div className="max-w-7xl mx-auto space-y-24 relative p-4 md:p-12">
        {/* Navigation */}
        <header className="flex items-center justify-between py-10 px-12 clay-card">
          <div className="flex items-center gap-5 group cursor-pointer">
            <div className="w-14 h-14 bg-[#FFD8BE] rounded-[22px] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border-4 border-[#FFD8BE] clay-button" style={{ background: '#FFD8BE', borderColor: '#FFD8BE' }}>
               <Smile size={32} className="text-[#475569]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-black tracking-tight text-[#475569] clay-text-shadow">Mallo</span>
               <span className="text-[10px] uppercase tracking-widest text-[#475569]/40 font-black">Squishy Web 3.0</span>
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-12 text-[12px] font-black uppercase tracking-[0.2em] text-[#475569]/40">
              {['Worlds', 'Avatars', 'Puffy', 'Collect'].map((item) => (
                <span key={item} className="hover:text-blue-500 cursor-pointer transition-all">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <button className="px-10 py-4 clay-button text-[12px] font-black uppercase tracking-[0.2em]">
               Hop In!
            </button>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-3 clay-card border-none rounded-2xl">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className=" clay-card p-12 z-[100] relative space-y-12 animate-in zoom-in-95 duration-500 text-center">
             <div className="flex flex-col gap-10 text-xl font-black text-[#475569] uppercase tracking-widest">
                {['Exploration', 'Community', 'Tokens', 'About'].map((item) => (
                   <span key={item} className="clay-card py-4 border-none">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-5 clay-button font-black uppercase tracking-widest text-xs">
                Jump In
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center space-y-12 py-16 relative">
           <div className="inline-flex items-center gap-3 bg-white/50 clay-card px-6 py-3 border-none animate-float-gentle">
              <Sun size={20} className="text-orange-400" />
              <span className="text-[12px] font-black uppercase tracking-widest text-[#475569]">Soft. Squishy. Sustainable.</span>
           </div>
           
           <h1 className={`font-black leading-[1] tracking-tighter text-[#475569] clay-text-shadow ${isMobile ? 'text-6xl px-4' : 'text-[9rem]'}`}>
             The <span className="text-blue-500">Softest</span> <br /> 
             Web on Earth.
           </h1>
           
           <p className={`text-[#475569]/50 font-black leading-relaxed max-w-2xl mx-auto uppercase tracking-wider ${isMobile ? 'text-lg px-6' : 'text-2xl'}`}>
             Experience a more approachable digital world. Built with claymorphism for ultimate tactile delight and playfulness.
           </p>
           
           <div className="flex flex-wrap justify-center gap-10 pt-10">
              <button className="px-16 py-8 clay-button text-2xl font-black rounded-[32px] hover:scale-110 active:scale-95 transition-all flex items-center gap-6 group">
                 Poke It
                 <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform duration-500" strokeWidth={3} />
              </button>
              <button className="px-16 py-8 clay-card border-none text-2xl font-black rounded-[32px] hover:bg-white transition-all text-[#475569]/60">
                 Learn How
              </button>
           </div>
           
           <div className="pt-24 flex justify-center scale-150">
              <div className="w-20 h-20 bg-[#DBEAFE] rounded-full clay-card border-none animate-bounce" />
           </div>
        </section>

        {/* Squishy Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-20 px-4">
          {[
            { icon: Gift, title: 'Tactile Rewards', color: '#D1FAE5', desc: 'Interfaces that feel as good as they look with squishy hover states.' },
            { icon: Coffee, title: 'Morning Brew', color: '#E9D5FF', desc: 'Start your digital day with the most comfortable layout ever designed.' },
            { icon: Ghost, title: 'Floaty Sync', color: '#FDE047', desc: 'Our data clouds are as light as air and always within reach.' }
          ].map((item, i) => (
            <div key={i} className="clay-card p-12 space-y-10 group hover:translate-y-[-15px] transition-all duration-700 cursor-pointer border-none">
               <div className="w-20 h-20 rounded-[28px] flex items-center justify-center text-[#475569] shadow-inner border-4 border-transparent group-hover:scale-110 transition-all" style={{ backgroundColor: item.color, borderColor: item.color }}>
                  <item.icon size={36} strokeWidth={2} />
               </div>
               <h3 className="text-3xl font-black tracking-tight text-[#475569] clay-text-shadow uppercase">{item.title}</h3>
               <p className="text-lg leading-relaxed text-[#475569]/40 font-black italic">
                  {item.desc}
               </p>
               <div className="pt-6">
                  <span className="text-[12px] uppercase tracking-[0.3em] font-black text-blue-500 bg-blue-50 px-6 py-2 rounded-full clay-card border-none">Boing!</span>
               </div>
            </div>
          ))}
        </section>

        {/* Tactile Split Section */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center px-6">
           <div className="lg:col-span-5 space-y-12">
              <span className="text-[12px] font-black uppercase tracking-[0.8em] text-blue-400">The Mallo Philosophy</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#475569] leading-[1] tracking-tighter clay-text-shadow">Designed to <br /> <span className="text-[#FFD8BE]">Be Touched.</span></h2>
              <p className="text-2xl font-black leading-relaxed text-[#475569]/30 italic uppercase tracking-widest">
                 Stop clicking boxes. Start interacting with surfaces. Our design engine mimics physical clay behavior.
              </p>
              
              <div className="space-y-6 pt-10">
                 {[
                   'Elastic Layout Structures',
                   'Squid-Style Micro-interactions',
                   'Pastel Color Harmonies',
                   'Gummy Bear Depth Gradients'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-10 group cursor-pointer hover:pl-6 transition-all duration-500">
                      <div className="w-8 h-8 rounded-full bg-blue-500 clay-button border-none opacity-40 group-hover:opacity-100 transition-all" />
                      <span className="text-xl font-black text-[#475569]/60 group-hover:text-[#475569] transition-colors">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-7">
              <div className="relative group p-4">
                 <div className="absolute inset-0 bg-blue-500/5 rounded-[80px] blur-[100px] pointer-events-none" />
                 <div className="aspect-square clay-card p-12 lg:p-24 flex flex-col items-center justify-center animate-float-gentle border-none relative z-10">
                    <Cloud size={160} className="text-white clay-text-shadow drop-shadow-xl animate-pulse" style={{ animationDuration: '4s' }} />
                    <div className="mt-12 text-center space-y-8">
                       <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-[#475569] clay-text-shadow">99% Air Filled</h3>
                       <p className="text-2xl font-black italic text-[#475569]/20 uppercase">Light as a marshmallow</p>
                       <div className="flex justify-center gap-6">
                          {[1,2,3,4].map(i => (
                             <div key={i} className="w-10 h-10 rounded-xl bg-[#D1FAE5] clay-card border-none" />
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing / Tokens */}
        <section className="py-24 text-center px-4">
           <h2 className="text-[12px] font-black uppercase tracking-[1.5em] text-[#475569] mb-32 opacity-30">Puffy Tiers</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: 'SQUISH', price: 'Free', color: '#D1FAE5' },
              { name: 'BOUNCE', price: '$12', color: '#DBEAFE', featured: true },
              { name: 'MOULD', price: '$42', color: '#E9D5FF' }
            ].map((p, i) => (
              <div key={i} className={`p-16 clay-card flex flex-col items-center gap-12 relative border-none transition-all duration-700 ${p.featured ? 'scale-[1.1] bg-white z-20' : 'hover:scale-[1.05]'}`}>
                 {p.featured && <div className="absolute top-[-35px] bg-orange-400 clay-button border-none px-10 py-3 font-black text-[12px] uppercase tracking-[0.3em] shadow-2xl">SUGAR COATED</div>}
                 <h4 className="text-[14px] font-black uppercase tracking-[0.5em] text-[#475569]/30 italic">{p.name}</h4>
                 <div className="flex flex-col items-center gap-4">
                    <span className="text-7xl font-black tracking-tighter text-[#475569] clay-text-shadow">{p.price}</span>
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#475569]/20">Mallo Points</span>
                 </div>
                 <div className="w-24 h-4 bg-gray-100 clay-active rounded-full" />
                 <ul className="space-y-4 text-xs font-black uppercase tracking-[0.2em] text-[#475569]/40 h-24 italic">
                    <li>3D Avatar Uploads</li>
                    <li>Clay UI Elements</li>
                    <li>Stretchy Layouts</li>
                 </ul>
                 <button className={`w-full py-6 rounded-[28px] font-black text-xl italic transition-all shadow-xl border-none ${p.featured ? 'clay-button bg-[#3B82F6]' : 'clay-card bg-gray-50'}`}>
                    Select!
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* Clay FAQ */}
        <section className="py-24 max-w-4xl mx-auto space-y-20 px-6">
           <h2 className="text-center text-4xl font-black italic tracking-tighter text-[#475569] clay-text-shadow uppercase tracking-widest">Helpful Bubbles.</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { q: 'Is it really squishy?', a: 'Every component is built with CSS inner and outer shadows to mimic the appearance of soft, physical clay surfaces.' },
                { q: 'Why pastels?', a: 'Claymorphism pairs best with soft, cheerful colors to complete the friendly, marshmallow-like aesthetic experience.' },
                { q: 'How do I poke it?', a: 'Just hover or click any element! Our micro-interaction library handles the boing-effect automatically.' },
                { q: 'Is it mobile ready?', a: 'Mallo is fully elastic and stretches to fit any screen size like a rubber band.' }
              ].map((faq, i) => (
                 <div key={i} className="clay-card p-12 group hover:translate-y-[-10px] transition-all duration-500 border-none">
                    <h4 className="text-2xl font-black text-[#475569] mb-6 uppercase tracking-tight clay-text-shadow">{faq.q}</h4>
                    <p className="text-md font-black italic text-[#475569]/30 leading-relaxed uppercase tracking-widest text-[11px]">
                       {faq.a}
                    </p>
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 clay-card border-none space-y-20 text-center relative overflow-hidden">
           <div className="flex justify-center gap-20 mb-10 relative z-10">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <div key={i} className="text-[#475569]/30 hover:text-blue-500 transition-all transform hover:scale-150 duration-700 cursor-pointer">
                   <Icon size={28} strokeWidth={2.5} />
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-center gap-16 text-[10px] font-black uppercase tracking-[0.5em] text-[#475569]/20 relative z-10">
              <span className="hover:text-blue-500 cursor-pointer">Sweet Privacy</span>
              <span className="hover:text-blue-500 cursor-pointer">Elastic Terms</span>
              <span className="hover:text-blue-500 cursor-pointer">Soft Help</span>
           </div>
           
           <div className="flex flex-col items-center gap-12 relative z-10">
              <div className="w-20 h-20 bg-[#FFD8BE] clay-card border-none flex items-center justify-center animate-float-gentle">
                 <Heart size={36} className="text-orange-400" strokeWidth={3} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[1.2em] text-[#475569]/10 px-10 leading-loose max-w-4xl mx-auto">
                 © 2026 MALLO CLAY WORLDWIDE. SQUISHY_BY_DESIGN.
              </p>
           </div>
        </footer>
      </div>
    </div>
  );
};
