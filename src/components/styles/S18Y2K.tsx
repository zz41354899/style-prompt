import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Cloud, Sparkles, Heart, Camera, Smartphone,
  ExternalLink, Maximize2, RefreshCw
} from 'lucide-react';

export const S18Y2K = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#E0F2FE] text-[#1E40AF] font-sans antialiased selection:bg-[#BEF264] selection:text-[#1E40AF] overflow-x-hidden p-4 md:p-8">
      <style dangerouslySetInnerHTML={{ __html: `
        .y2k-glass {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.8);
          box-shadow: 
            0 8px 32px rgba(30, 64, 175, 0.1),
            inset 0 0 20px rgba(255, 255, 255, 0.5);
          border-radius: 30px;
        }
        .y2k-button {
          background: linear-gradient(180deg, #FFFFFF 0%, #E0E7FF 100%);
          border: 2px solid #1E40AF;
          border-radius: 50px;
          box-shadow: 0 4px 0 #1E40AF;
          transition: all 0.1s active;
        }
        .y2k-button:active {
          transform: translateY(2px);
          box-shadow: 0 2px 0 #1E40AF;
        }
        .y2k-blob {
          background: linear-gradient(135deg, #BEF264 0%, #1E40AF 100%);
          filter: blur(40px);
          border-radius: 50%;
        }
        .chrome-card {
          background: linear-gradient(135deg, #f3f4f6 0%, #d1d5db 50%, #f3f4f6 100%);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 
            8px 8px 16px #c5c9d1,
            -8px -8px 16px #ffffff;
        }
        .pixel-text {
          font-family: 'Courier New', Courier, monospace;
          font-weight: bold;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .starburst {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
      `}} />

      {/* Decorative Blobs */}
      <div className="fixed -top-24 -left-24 w-96 h-96 y2k-blob opacity-20 animate-pulse" />
      <div className="fixed -bottom-24 -right-24 w-96 h-96 y2k-blob opacity-20 animate-pulse" style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #F472B6 100%)' }} />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Navigation */}
        <header className="flex items-center justify-between py-6 px-10 y2k-glass">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-14 h-14 bg-[#BEF264] rounded-full border-2 border-[#1E40AF] flex items-center justify-center shadow-[4px_4px_0_#1E40AF] group-hover:bg-[#1E40AF] group-hover:text-white transition-colors animate-float">
               <Sparkles size={28} />
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-black tracking-tight text-[#1E40AF]">K@WAII.co</span>
               <span className="text-[10px] pixel-text uppercase bg-[#BEF264] px-2 self-start rounded">Version_2000.x</span>
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 font-bold text-sm tracking-tight text-[#1E40AF]">
              {['Home_Base', 'The_Portal', 'Bubbles', 'Contact_Me'].map((item) => (
                <span key={item} className="hover:text-[#F472B6] cursor-pointer transition-all flex items-center gap-2 group">
                   <div className="w-2 h-2 rounded-full bg-[#1E40AF] group-hover:bg-[#F472B6] scale-0 group-hover:scale-100 transition-transform" />
                   {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-6">
               <button className="px-8 py-3 y2k-button text-[#1E40AF] font-black text-sm hover:scale-105 transition-transform flex items-center gap-2">
                  <Heart size={18} fill="#F472B6" stroke="none" />
                  Sign_In
               </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-3 bg-[#BEF264] border-2 border-[#1E40AF] rounded-full shadow-[4px_4px_0_#1E40AF]">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-white/80 backdrop-blur-xl border-4 border-[#1E40AF] p-12 z-[100] relative rounded-[50px] shadow-2xl space-y-10 animate-in zoom-in-95 duration-300">
             <div className="flex flex-col gap-8 text-2xl font-black text-[#1E40AF]">
                {['Home_Base', 'The_Portal', 'Bubbles', 'Chat'].map((item) => (
                   <span key={item} className="border-b-2 border-[#1E40AF]/10 pb-4 text-center">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-5 y2k-button text-xl font-black text-[#1E40AF]">
                LET'S GO!
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-10 px-6">
           <div className="space-y-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 bg-[#BEF264] border-2 border-[#1E40AF] rounded-full px-5 py-2">
                 <div className="w-3 h-3 rounded-full bg-[#1E40AF] animate-ping" />
                 <span className="text-[12px] font-black uppercase tracking-widest text-[#1E40AF]">Uplink Active _ 99%</span>
              </div>
              
              <h1 className={`font-black leading-[0.9] tracking-tight text-[#1E40AF] ${isMobile ? 'text-6xl text-center' : 'text-[8.5rem]'}`}>
                Future <br /> 
                <span className="bg-[#BEF264] px-4 rounded-3xl border-4 border-[#1E40AF] shadow-[10px_10px_0_#1E40AF] rotate-[-2deg] inline-block mt-4 text-[#1E40AF]">Ready!</span>
              </h1>
              
              <p className={`text-[#1E40AF]/70 font-bold leading-relaxed max-w-xl ${isMobile ? 'text-lg text-center' : 'text-2xl italic'}`}>
                The bubble is rising! Get ready for a digital revolution that's as bouncy as it is bright. Optimized for 56k modems.
              </p>
              
              <div className="flex flex-wrap gap-8 pt-6 justify-center lg:justify-start">
                 <button className="px-12 py-7 y2k-button text-[#1E40AF] text-2xl font-black rounded-full shadow-[8px_8px_0_#1E40AF] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#1E40AF] transition-all flex items-center gap-4 group">
                    EXPLORE.EXE
                    <Maximize2 size={32} className="group-hover:rotate-45 transition-transform" />
                 </button>
                 <button className="px-12 py-7 border-2 border-[#1E40AF] bg-white text-[#1E40AF] text-2xl font-black rounded-full hover:bg-[#BEF264] transition-all shadow-[8px_8px_0_rgba(30,64,175,0.1)]">
                    HISTORY
                 </button>
              </div>
           </div>

           <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                 <div className="absolute inset-0 bg-[#BEF264] rounded-full blur-[80px] opacity-40 animate-pulse" />
                 <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white border-8 border-[#1E40AF] rounded-full p-4 overflow-hidden shadow-[20px_20px_0_rgba(30,64,175,0.1)] relative">
                    <div className="absolute inset-0 bg-blue-50 opacity-50" />
                    <div className="h-full border-4 border-[#1E40AF] rounded-full flex flex-col items-center justify-center p-12 bg-white/40 backdrop-blur-sm relative z-10 animate-float">
                       <Cloud size={160} className="text-[#60A5FA]" fill="#EFF6FF" strokeWidth={1} />
                       <div className="mt-8 flex gap-4">
                          {[1,2,3,4,5].map(i => (
                             <div key={i} className="w-4 h-4 rounded-full border-2 border-[#1E40AF] bg-[#BEF264] shadow-[2px_2px_0_#1E40AF]" />
                          ))}
                       </div>
                    </div>
                 </div>
                 {/* Decorative elements around circle */}
                 <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#F472B6] border-4 border-[#1E40AF] starburst shadow-[4px_4px_0_#1E40AF] animate-bounce" />
                 <div className="absolute -bottom-5 -left-10 w-32 h-32 bg-[#BEF264] border-4 border-[#1E40AF] rounded-[40px] shadow-[4px_4px_0_#1E40AF] flex items-center justify-center rotate-[-15deg] group-hover:rotate-0 transition-transform">
                    <Smartphone size={40} />
                 </div>
              </div>
           </div>
        </section>

        {/* Feature grid */}
        <section className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { icon: Camera, title: 'Lo-Fi Pixels', color: '#60A5FA', desc: 'Beautifully dithered imagery for that early digital vibe.' },
            { icon: RefreshCw, title: 'Instant Sync', color: '#BEF264', desc: 'Refresh at the speed of thought. No waiting, just loading.' },
            { icon: Maximize2, title: 'Widescreen', color: '#F472B6', desc: 'Fullscreen experiences that pop off your CRT monitor.' },
            { icon: ExternalLink, title: 'Web Portal', color: '#1E40AF', desc: 'Universal entry point to the galaxy of digital wonder.' }
          ].map((item, i) => (
            <div key={i} className="group y2k-glass p-10 hover:translate-y-[-10px] transition-all cursor-pointer border-4 hover:border-[#F472B6]">
               <div className="w-20 h-20 rounded-[25px] flex items-center justify-center mb-8 border-4 border-[#1E40AF] shadow-[6px_6px_0_#1E40AF] group-hover:rotate-6 transition-transform" style={{ backgroundColor: item.color }}>
                  <item.icon size={32} className="text-[#1E40AF]" strokeWidth={2.5} />
               </div>
               <h3 className="text-2xl font-black text-[#1E40AF] mb-4">{item.title}</h3>
               <p className="text-sm font-bold text-[#1E40AF]/50 leading-relaxed italic">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Inflatable Card */}
        <section className="py-24">
           <div className="bg-[#1E40AF] p-3 rounded-[60px] shadow-2xl">
              <div className="bg-white border-4 border-dashed border-[#1E40AF] rounded-[50px] p-12 lg:p-24 relative overflow-hidden text-center lg:text-left">
                 <div className="absolute top-10 right-10 opacity-10 animate-float">
                    <Cloud size={200} fill="#1E40AF" />
                 </div>
                 
                 <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-12">
                       <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-[#1E40AF] mb-12">
                          The <span className="text-[#F472B6] drop-shadow-[4px_4px_0_#1E40AF]">Bubble</span> Protocol.
                       </h2>
                    </div>
                    
                    <div className="lg:col-span-7 space-y-12">
                       <p className="text-2xl md:text-4xl font-black italic text-[#1E40AF]/60 leading-none">
                          Inflatable design meets digital speed. It's safe, it's soft, it's 2000.
                       </p>
                       <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                          {[1,2,3,4].map(idx => (
                             <div key={idx} className="w-12 h-12 bg-white border-4 border-[#1E40AF] rounded-full flex items-center justify-center shadow-[4px_4px_0_#1E40AF] hover:scale-125 transition-transform cursor-pointer overflow-hidden">
                                <div className="w-full h-full bg-[#BEF264] opacity-20" />
                             </div>
                          ))}
                       </div>
                    </div>
                    
                    <div className="lg:col-span-5">
                       <div className="y2k-glass p-12 border-4 border-[#1E40AF] shadow-[15px_15px_0_#1E40AF] rotate-2 hover:rotate-0 transition-transform">
                          <ul className="space-y-6">
                            {['Bubble Layouts', 'Chrome Accents', 'Small Pixel Data', 'Low-Fi Shadows'].map((t, i) => (
                              <li key={i} className="flex items-center gap-6 group">
                                 <div className="w-8 h-8 rounded-full bg-[#BEF264] border-2 border-[#1E40AF] shadow-[3px_3px_0_#1E40AF] flex-shrink-0" />
                                 <span className="text-xl font-black text-[#1E40AF] uppercase tracking-tighter">{t}</span>
                              </li>
                            ))}
                          </ul>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing / Tokens */}
        <section className="py-24 text-center space-y-20">
           <h2 className="text-xl font-black italic tracking-[0.5em] uppercase text-[#F472B6]">Pocket_Change</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
             {[
               { name: 'STARTER', price: '$00', color: '#BEF264' },
               { name: 'POWER_UP', price: '$19', color: '#60A5FA', featured: true },
               { name: 'SUPREME', price: '$99', color: '#F472B6' }
             ].map((p, i) => (
               <div key={i} className={`p-16 border-8 flex flex-col items-center gap-12 relative rounded-[60px] transition-all duration-500 shadow-2xl ${p.featured ? 'bg-white border-[#1E40AF] scale-110' : 'bg-[#E0F2FE]/50 border-white'}`}>
                  {p.featured && <div className="absolute top-[-30px] bg-[#BEF264] border-4 border-[#1E40AF] px-6 py-2 text-md font-black italic rounded-full shadow-[4px_4px_0_#1E40AF]">BEST_VALU!</div>}
                  <h4 className="text-xs font-black uppercase tracking-[0.6em] text-[#1E40AF]/40">{p.name}</h4>
                  <div className="flex flex-col gap-2">
                     <span className="text-8xl font-black tracking-tighter text-[#1E40AF] bg-white border-2 border-[#1E40AF] px-6 rounded-full shadow-[6px_6px_0_#1E40AF]">{p.price}</span>
                     <span className="text-[10px] pixel-text uppercase mt-4">Per_Millennium</span>
                  </div>
                  <ul className="space-y-4 text-[12px] font-black uppercase text-[#1E40AF]/50 italic h-24">
                     <li>+50 Bubble Coins</li>
                     <li>Translucent Profile</li>
                     <li>Custom Cursor Pack</li>
                  </ul>
                  <button className={`w-full py-6 rounded-full font-black text-xl italic transition-all ${p.featured ? 'bg-[#BEF264] text-[#1E40AF] border-4 border-[#1E40AF] shadow-[8px_8px_0_#1E40AF] hover:scale-105' : 'bg-white border-4 border-[#1E40AF] text-[#1E40AF]'}`}>
                     GET_IT!
                  </button>
               </div>
             ))}
           </div>
        </section>

        {/* FAQ Area */}
        <section className="py-24 max-w-4xl mx-auto px-6">
           <div className="bg-[#BEF264] border-4 border-[#1E40AF] p-2 rounded-[50px] shadow-[15px_15px_0_#1E40AF]">
              <div className="bg-white border-4 border-[#1E40AF] p-8 lg:p-16 rounded-[45px] space-y-12">
                 <h2 className="text-4xl font-black text-[#1E40AF] text-center italic">Frequent_Inquiries</h2>
                 <div className="space-y-6">
                    {[
                      { q: 'Is it compatible with Windows 98?', a: 'Fully tested on all systems including SE and ME versions. No BSOD guaranteed.' },
                      { q: 'Where are the save icons?', a: 'They are dithered into the 4th dimension for maximum storage efficiency.' },
                      { q: 'How do I chat?', a: 'Simply open your heart and your portal. The kawaii energy will do the rest.' }
                    ].map((faq, i) => (
                       <div key={i} className="border-b-4 border-dashed border-[#1E40AF]/10 pb-6 group cursor-pointer">
                          <button 
                             className="w-full flex justify-between items-center text-left"
                             onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          >
                             <span className="text-xl font-black text-[#1E40AF] group-hover:text-[#F472B6] transition-colors uppercase">{faq.q}</span>
                             <ChevronDown size={24} className={`text-[#1E40AF] transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} strokeWidth={3} />
                          </button>
                          {openFaq === i && (
                             <div className="pt-6 text-md font-bold text-[#1E40AF]/50 leading-relaxed italic animate-in fade-in slide-in-from-top-4 duration-500">
                                {faq.a}
                             </div>
                          )}
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 y2k-glass border-4 border-[#1E40AF] shadow-[15px_15px_0_#1E40AF] text-center space-y-16">
           <div className="flex justify-center gap-12">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <div key={i} className="w-16 h-16 rounded-full bg-white border-4 border-[#1E40AF] flex items-center justify-center text-[#1E40AF] hover:bg-[#F472B6] hover:scale-110 hover:rotate-12 transition-all cursor-pointer shadow-[4px_4px_0_#1E40AF]">
                   <Icon size={24} strokeWidth={3} />
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-center gap-12 text-[12px] font-black uppercase text-[#1E40AF]/40 italic">
              <span className="hover:text-[#F472B6] cursor-pointer">Privacy_Portal</span>
              <span className="hover:text-[#BEF264] cursor-pointer">Cookie_Jar</span>
              <span className="hover:text-[#60A5FA] cursor-pointer">Admin_Only</span>
           </div>
           
           <div className="flex flex-col items-center gap-8">
              <div className="bg-[#BEF264] border-4 border-[#1E40AF] px-6 py-2 rounded-full font-black text-[#1E40AF] shadow-[4px_4px_0_#1E40AF] animate-bounce">
                 THANK YOU FOR VISITING!
              </div>
              <p className="text-[10px] pixel-text opacity-40 uppercase">
                 © 2000-2026 KAWAII DOT CO WORLDWIDE. BEST VIEWED IN NETSCAPE.
              </p>
           </div>
        </footer>
      </div>
    </div>
  );
};
