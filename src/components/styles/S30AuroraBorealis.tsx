import { useState, useEffect } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Mountain, Snowflake, Wind, Compass, Eye,
  Sparkles, Moon, Sun
} from 'lucide-react';

export const S30AuroraBorealis = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans antialiased selection:bg-[#22D3EE] selection:text-[#020617] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes aurora-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .aurora-bg {
          background: linear-gradient(135deg, #0C4A6E 0%, #065F46 25%, #7C3AED 50%, #0E7490 75%, #059669 100%);
          background-size: 400% 400%;
          animation: aurora-shift 15s ease infinite;
        }
        .aurora-glow {
          background: linear-gradient(180deg, rgba(34, 211, 238, 0.15) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%);
        }
        .aurora-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(34, 211, 238, 0.15);
          border-radius: 24px;
          transition: all 0.5s ease;
        }
        .aurora-card:hover {
          border-color: rgba(34, 211, 238, 0.4);
          box-shadow: 0 0 40px rgba(34, 211, 238, 0.1);
        }
        .star-field {
          background-image: radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
                            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.2), transparent),
                            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.4), transparent),
                            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.2), transparent),
                            radial-gradient(2px 2px at 160px 30px, rgba(255,255,255,0.3), transparent);
          background-size: 200px 100px;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .text-aurora {
          background: linear-gradient(90deg, #22D3EE, #10B981, #A78BFA, #22D3EE);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: aurora-shift 6s ease infinite;
        }
      `}} />

      {/* Star field background */}
      <div className="fixed inset-0 star-field pointer-events-none z-0" />
      {/* Aurora glow overlay */}
      <div className="fixed top-0 left-0 right-0 h-[60vh] aurora-glow pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10 p-4 md:p-8">
        {/* Navigation */}
        <header className="flex items-center justify-between py-6 px-10 aurora-card">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl aurora-bg flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
               <Mountain size={24} className="text-white" />
            </div>
            <div className="flex flex-col">
               <span className="text-2xl font-black tracking-tight">Borealis</span>
               <span className="text-[9px] uppercase font-bold text-cyan-400/60 tracking-[0.3em]">Northern Light Studio</span>
            </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 text-[12px] font-bold text-white/40 uppercase tracking-[0.2em]">
              {['Explore', 'Expeditions', 'Gallery', 'Journal'].map((item) => (
                <span key={item} className="hover:text-cyan-400 cursor-pointer transition-all relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-500" />
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <button className="px-8 py-3 aurora-bg text-white text-[12px] font-bold rounded-2xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all uppercase tracking-widest">
               Begin Journey
            </button>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white/60">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="aurora-card p-12 z-[100] relative space-y-10 animate-in zoom-in-95 duration-500">
             <div className="flex flex-col gap-8 text-xl font-bold text-white/60">
                {['Explore', 'Expeditions', 'Gallery', 'Journal'].map((item) => (
                   <span key={item} className="border-b border-white/5 pb-4">{item}</span>
                ))}
             </div>
             <button className="w-full py-5 aurora-bg text-white rounded-2xl font-bold uppercase tracking-widest text-xs">
                Begin Journey
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center space-y-12 py-24 relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] aurora-bg opacity-10 blur-[150px] rounded-full pointer-events-none" />
           
           <div className="inline-flex items-center gap-3 aurora-card px-5 py-2 border-none bg-white/5">
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400/80">Witness the Northern Lights</span>
           </div>
           
           <h1 className={`font-black leading-[1] tracking-tighter ${isMobile ? 'text-6xl px-4' : 'text-[9rem]'}`}>
             <span className="text-aurora">Nature's</span> <br /> 
             <span className="text-white">Light Show.</span>
           </h1>
           
           <p className={`text-white/40 font-medium leading-relaxed max-w-2xl mx-auto ${isMobile ? 'text-lg px-6' : 'text-2xl'}`}>
             Where the sky dances in ribbons of emerald, violet, and cyan. Experience the most breathtaking phenomenon on Earth.
           </p>
           
           <div className="flex flex-wrap justify-center gap-8 pt-10">
              <button className="px-14 py-6 aurora-bg text-white text-xl font-bold rounded-2xl shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center gap-4 group">
                 Explore Now
                 <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-14 py-6 aurora-card border-white/10 text-white/60 text-xl font-bold rounded-2xl hover:border-cyan-500/30 hover:text-white transition-all">
                 View Gallery
              </button>
           </div>

           <div className="pt-20 flex justify-center gap-16">
              {[
                { l: 'Locations', v: '47' },
                { l: 'Expeditions', v: '200+' },
                { l: 'Travelers', v: '12K+' }
              ].map((stat, i) => (
                 <div key={i} className="text-center space-y-2">
                    <p className="text-3xl font-black text-aurora tracking-tight">{stat.v}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">{stat.l}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20 px-4">
          {[
            { icon: Eye, title: 'Live Aurora Forecast', desc: 'Real-time KP index monitoring and geomagnetic storm alerts for optimal viewing windows.' },
            { icon: Compass, title: 'Guided Expeditions', desc: 'Expert-led tours to the most remote and dazzling aurora viewing locations on the planet.' },
            { icon: Snowflake, title: 'Arctic Lodges', desc: 'Glass-roofed igloo cabins where you can watch the aurora dance from the warmth of your bed.' },
            { icon: Wind, title: 'Solar Wind Data', desc: 'Interplanetary magnetic field analysis to predict the color and intensity of tonight\'s display.' },
            { icon: Moon, title: 'Night Photography', desc: 'Professional aurora photography kits and workshops to capture the perfect long-exposure shot.' },
            { icon: Mountain, title: 'Wilderness Treks', desc: 'Backcountry snowshoe adventures beneath the dancing curtains of light in untouched landscapes.' }
          ].map((item, i) => (
            <div key={i} className="aurora-card p-10 space-y-8 group">
               <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400/60 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 transition-all">
                  <item.icon size={28} strokeWidth={1.5} />
               </div>
               <h3 className="text-2xl font-bold tracking-tight text-white">{item.title}</h3>
               <p className="text-sm font-medium text-white/30 leading-relaxed">
                  {item.desc}
               </p>
               <div className="pt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-cyan-400/40 group-hover:text-cyan-400 transition-colors">
                  Discover <ArrowRight size={14} />
               </div>
            </div>
          ))}
        </section>

        {/* Narrative Split */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center px-6">
           <div className="lg:col-span-5 space-y-12">
              <span className="text-[12px] font-bold uppercase tracking-[0.6em] text-cyan-400/60">The Science of Wonder</span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                 Charged <br /> 
                 <span className="text-aurora">Particles,</span> <br />
                 Pure Magic.
              </h2>
              <div className="w-24 h-1 aurora-bg rounded-full" />
              <p className="text-lg font-medium leading-relaxed text-white/30 border-l-2 border-cyan-500/20 pl-8 italic">
                 When solar wind collides with Earth's magnetosphere, atoms in the upper atmosphere illuminate in spectacular ribbons of color that have captivated humanity for millennia.
              </p>
              
              <div className="space-y-6 pt-8">
                 {[
                   'Solar Wind Speed: 400-800 km/s',
                   'Altitude: 100-300 km Above Earth',
                   'Colors: Green, Purple, Red, Cyan',
                   'Best Season: September - March'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-6 group cursor-pointer hover:translate-x-3 transition-all duration-500">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22D3EE] group-hover:shadow-[0_0_16px_#22D3EE] transition-shadow" />
                      <span className="text-sm font-bold text-white/40 group-hover:text-white/80 transition-colors uppercase tracking-widest">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-7">
              <div className="relative group">
                 <div className="absolute inset-[-20px] aurora-bg opacity-10 blur-[80px] rounded-full pointer-events-none" />
                 <div className="aurora-card p-12 lg:p-20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-40 aurora-bg opacity-20 blur-xl pointer-events-none" />
                    <div className="relative z-10 space-y-12">
                       <div className="flex justify-between items-center">
                          <Sun size={32} className="text-yellow-400/60" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Solar Activity Monitor</span>
                       </div>
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                          {[
                            { l: 'KP Index', v: '7.2' },
                            { l: 'Wind Speed', v: '645' },
                            { l: 'Bz Factor', v: '-8.4' },
                            { l: 'Visibility', v: '94%' }
                          ].map((stat, i) => (
                             <div key={i} className="space-y-2">
                                <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{stat.l}</div>
                                <div className="text-3xl font-black text-aurora tracking-tight">{stat.v}</div>
                             </div>
                          ))}
                       </div>
                       <div className="h-32 relative flex items-end gap-1">
                          {Array.from({ length: 24 }).map((_, i) => (
                             <div 
                                key={i} 
                                className="flex-1 rounded-t-sm transition-all duration-700"
                                style={{ 
                                   height: hasMounted ? `${20 + Math.sin(i * 0.5) * 40 + Math.random() * 30}%` : `${20 + Math.sin(i * 0.5) * 40}%`,
                                   background: hasMounted 
                                       ? `linear-gradient(to top, rgba(34, 211, 238, 0.2), rgba(16, 185, 129, ${0.3 + Math.random() * 0.4}))`
                                       : `linear-gradient(to top, rgba(34, 211, 238, 0.2), rgba(16, 185, 129, 0.5))`

                                }}
                             />
                          ))}
                       </div>
                       <button className="w-full py-5 aurora-bg text-white rounded-2xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-cyan-500/20">
                          View Full Forecast
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing / Expedition Tiers */}
        <section className="py-24 text-center px-4">
           <h2 className="text-[12px] font-bold uppercase tracking-[1em] text-white/20 mb-20">Expedition Packages</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Stargazer', price: '$299', items: ['3-Night Stay', 'Group Tours', 'Photo Workshop'] },
              { name: 'Voyager', price: '$899', items: ['7-Night Stay', 'Private Guide', 'Glass Igloo'], featured: true },
              { name: 'Explorer', price: '$2,400', items: ['14-Night Stay', 'Helicopter Tour', 'Full Equipment'] }
            ].map((p, i) => (
              <div key={i} className={`aurora-card p-16 flex flex-col items-center gap-12 relative ${p.featured ? 'border-cyan-500/30 shadow-[0_0_60px_rgba(34,211,238,0.1)]' : ''}`}>
                 {p.featured && <div className="absolute top-[-20px] aurora-bg text-white px-8 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg">Most Popular</div>}
                 <h4 className="text-[12px] font-bold uppercase tracking-[0.4em] text-white/30">{p.name}</h4>
                 <div className="flex flex-col items-center gap-2">
                    <span className="text-6xl font-black tracking-tighter text-white">{p.price}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Per Person</span>
                 </div>
                 <ul className="space-y-4 text-sm font-bold text-white/30 h-24">
                    {p.items.map((item, j) => <li key={j} className="flex items-center gap-3"><Check size={16} className="text-cyan-400/60" /> {item}</li>)}
                 </ul>
                 <button className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${p.featured ? 'aurora-bg text-white shadow-xl shadow-cyan-500/20' : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'}`}>
                    Book Expedition
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 max-w-4xl mx-auto space-y-16 px-6">
           <div className="text-center space-y-4">
              <h2 className="text-4xl font-black tracking-tighter text-white">Traveler Questions</h2>
              <div className="w-20 h-1 aurora-bg mx-auto rounded-full" />
           </div>
           
           <div className="space-y-6">
              {[
                { q: 'When is the best time to see the aurora?', a: 'The optimal viewing season runs from September to March, with peak activity around the equinoxes. Clear, dark skies away from city lights are essential.' },
                { q: 'What should I bring?', a: 'We provide all specialized gear including thermal suits. Bring warm base layers, a good camera with manual settings, and a tripod for long-exposure photography.' },
                { q: 'Can you guarantee aurora sightings?', a: 'While we cannot guarantee nature, our 7+ night packages have a 95% aurora sighting rate. We use real-time solar data to optimize viewing schedules.' }
              ].map((faq, i) => (
                 <div key={i} className="aurora-card p-8 group">
                    <button 
                       className="w-full flex justify-between items-center text-left"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-lg font-bold text-white/80 group-hover:text-cyan-400 transition-colors">{faq.q}</span>
                       <ChevronDown size={20} className={`text-white/20 transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                       <div className="pt-6 text-md font-medium text-white/30 leading-relaxed italic animate-in fade-in duration-700">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 aurora-card border-white/5 p-12 lg:p-20 space-y-20 relative overflow-hidden">
           <div className="absolute top-0 left-0 right-0 h-1 aurora-bg" />
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              <div className="space-y-8">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl aurora-bg flex items-center justify-center">
                       <Mountain size={20} className="text-white" />
                    </div>
                    <span className="text-2xl font-black tracking-tight">Borealis</span>
                 </div>
                 <p className="text-sm text-white/20 font-medium leading-relaxed">Connecting travelers with the most spectacular natural light displays on Earth since 2018.</p>
              </div>
              
              {['Destinations', 'Company', 'Support'].map(col => (
                <div key={col} className="space-y-6">
                   <h5 className="text-[11px] font-bold uppercase tracking-widest text-cyan-400/60">{col}</h5>
                   <ul className="space-y-4 text-sm font-medium text-white/20">
                      <li className="hover:text-white/60 cursor-pointer transition-colors">Iceland</li>
                      <li className="hover:text-white/60 cursor-pointer transition-colors">Norway</li>
                      <li className="hover:text-white/60 cursor-pointer transition-colors">Finland</li>
                   </ul>
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10 pt-12 border-t border-white/5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/10">
                 &copy; 2026 Borealis Northern Light Studio. All rights reserved.
              </p>
              <div className="flex gap-8">
                 {[Github, Twitter, Linkedin].map((Icon, i) => (
                    <Icon key={i} size={18} className="text-white/15 hover:text-cyan-400 cursor-pointer transition-colors" />
                 ))}
              </div>
           </div>
        </footer>
      </div>
    </div>
  );
};
