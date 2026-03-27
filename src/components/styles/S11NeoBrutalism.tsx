import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Zap, Smile, Heart, AlertCircle, Bookmark, Compass
} from 'lucide-react';

export const S11NeoBrutalism = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#A5B4FC] text-black font-black antialiased selection:bg-[#FACC15] selection:text-black overflow-x-hidden p-4 md:p-8">
      <style dangerouslySetInnerHTML={{ __html: `
        .nb-shadow {
          box-shadow: 8px 8px 0px 0px #000;
        }
        .nb-shadow-hover:hover {
          transform: translate(-4px, -4px);
          box-shadow: 12px 12px 0px 0px #000;
        }
        .nb-shadow-pressed:active {
          transform: translate(4px, 4px);
          box-shadow: 2px 2px 0px 0px #000;
        }
        .nb-border {
          border: 4px solid #000;
        }
      `}} />

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Navigation */}
        <header className="bg-white nb-border nb-shadow px-6 h-20 flex items-center justify-between sticky top-8 z-50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FACC15] nb-border flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
              <Zap size={28} fill="black" />
            </div>
            <span className="text-2xl uppercase tracking-tighter italic">NEO.RAW</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-8 uppercase italic text-sm">
              {['Vibe', 'Core', 'Drop', 'Join'].map((item) => (
                <span key={item} className="hover:text-[#F87171] cursor-pointer transition-colors underline decoration-4 underline-offset-4">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 bg-black text-white uppercase text-xs hover:bg-[#FACC15] hover:text-black transition-colors nb-border">
                Log In
              </button>
              <button className="px-6 py-2 bg-[#F87171] uppercase text-xs nb-border nb-shadow nb-shadow-hover nb-shadow-pressed transition-all">
                Enter
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-white nb-border">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-[#4ADE80] nb-border nb-shadow p-8 z-[60] relative">
            <div className="flex flex-col gap-8 text-4xl italic">
              {['Vibe', 'Core', 'Drop', 'Join'].map((item) => (
                <span key={item} className="border-b-4 border-black pb-4">
                  {item}
                </span>
              ))}
              <button className="w-full px-6 py-6 bg-[#FACC15] text-black text-2xl nb-border nb-shadow uppercase">
                Jump In
              </button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-8 bg-[#FBBF24] nb-border nb-shadow p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-5 -mr-16 -mt-16 rotate-45" />
              <div className="bg-white nb-border inline-block px-4 py-1 text-sm uppercase mb-12 transform -rotate-2">
                Protocol: 011_NEO
              </div>
              
              <h1 className={`uppercase mb-12 leading-[0.85] tracking-tighter ${isMobile ? 'text-6xl' : 'text-[9rem]'}`}>
                UNFILTERED <br />
                <span className="bg-white p-2">INTENT</span> <br />
                <span className="text-[#F87171] italic text-[0.8em]">ONLY.</span>
              </h1>
              
              <p className={`mb-12 leading-none italic max-w-xl ${isMobile ? 'text-xl' : 'text-3xl'}`}>
                WHY POLISH WHEN YOU CAN POP? WE BELIEVE IN HIGH CONTRAST, BOLD SHADOWS, AND ABSOLUTE SPEED.
              </p>
              
              <div className="flex flex-wrap gap-6">
                 <button className="px-10 py-6 bg-black text-white text-2xl nb-border nb-shadow nb-shadow-hover nb-shadow-pressed transition-all flex items-center gap-4">
                    GET STARTED
                    <ArrowRight size={32} strokeWidth={4} />
                 </button>
                 <button className="px-10 py-6 bg-white text-black text-2xl nb-border nb-shadow nb-shadow-hover nb-shadow-pressed transition-all">
                    CORE DOCS
                 </button>
              </div>
           </div>

           <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#4ADE80] nb-border nb-shadow p-8 h-full flex flex-col justify-between group cursor-crosshair text-center sm:text-left">
                 <div className="flex justify-between items-start">
                    <Heart size={48} fill="black" strokeWidth={0} className="group-hover:scale-125 transition-transform" />
                    <span className="text-xs uppercase italic opacity-60">Status: Hot</span>
                 </div>
                 <h2 className="text-5xl uppercase leading-none mt-12 mb-4">LOVE THE <br />CONTRAST.</h2>
                 <p className="text-sm italic">Colors that scream, structures that stand firm. This is the new Brutalism.</p>
              </div>
           </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { color: '#F87171', title: 'SPEED', icon: Zap, text: 'ZERO LATENCY. BOLD EXECUTION.' },
            { color: '#A5B4FC', title: 'CORE', icon: Compass, text: 'STRUCTURED FOR ABSOLUTE GRIT.' },
            { color: '#4ADE80', title: 'VIBE', icon: Smile, text: 'USER EXPERIENCE THAT POPS.' },
            { color: '#FACC15', title: 'DROP', icon: Bookmark, text: 'FRESH ASSETS EVERY WEEK.' }
          ].map((f, i) => (
            <div key={i} className="nb-border nb-shadow p-10 hover:-translate-y-2 transition-transform cursor-pointer" style={{ backgroundColor: f.color }}>
              <div className="w-16 h-16 bg-white nb-border flex items-center justify-center mb-10 group shadow-[4px_4px_0px_#000]">
                 <f.icon size={32} strokeWidth={4} />
              </div>
              <h3 className="text-4xl uppercase mb-4 italic leading-none">{f.title}</h3>
              <p className="text-sm italic font-bold opacity-80">{f.text}</p>
            </div>
          ))}
        </section>

        {/* Content Split */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="bg-white nb-border nb-shadow p-12 lg:p-20 overflow-hidden relative">
              <div className="absolute inset-0 opacity-10 pointer-events-none select-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
              <h2 className="text-6xl md:text-8xl uppercase leading-[0.8] mb-12 italic tracking-tighter">THE POWER <br />OF THE <br /><span className="bg-[#FACC15] px-2 shadow-[8px_8px_0px_#000]">OUTLINE.</span></h2>
              <p className="text-2xl italic leading-tight mb-12 max-w-md">Every element is defined. Every interaction is earned. We don't hide our shadows - we celebrate them.</p>
              <div className="space-y-6">
                 {['HIGH CONTRAST SCALE', 'SHARP BORDER LOGIC', 'POP ART PALETTE', 'DYNAMIC OFFSET'].map(item => (
                   <div key={item} className="flex items-center gap-6 bg-black text-white p-6 nb-border hover:bg-[#4ADE80] hover:text-black transition-colors cursor-pointer">
                      <Check size={32} strokeWidth={5} />
                      <span className="text-2xl uppercase tracking-tighter italic">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="bg-[#A5B4FC] nb-border nb-shadow p-12 lg:p-20 flex flex-col justify-center items-center text-center">
              <div className="w-full aspect-video bg-black nb-border flex items-center justify-center p-8 relative group mb-12">
                 <div className="absolute inset-4 border-2 border-dashed border-white opacity-20 group-hover:opacity-100 transition-opacity" />
                 <span className="text-white text-[10vw] italic tracking-tighter group-hover:scale-110 transition-transform">RAW.</span>
              </div>
              <p className="text-3xl italic font-black uppercase tracking-tighter animate-pulse">SYSTEM_STABLE_011</p>
              <button className="mt-12 w-full py-8 bg-white text-black text-3xl uppercase nb-border nb-shadow nb-shadow-hover transition-all">
                JOIN_THE_GANG
              </button>
           </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#F87171] nb-border nb-shadow p-16 text-center">
           <div className="flex justify-center gap-3 mb-12">
              {[...Array(5)].map((_, i) => <Star key={i} size={48} fill="black" strokeWidth={0} className="hover:scale-125 transition-transform" />)}
           </div>
           <p className="text-4xl md:text-6xl uppercase leading-none italic mb-12 tracking-tighter">
             "THIS SYSTEM DOESN'T JUST WORK. <br />IT SCREAMS QUALITY."
           </p>
           <div className="inline-block bg-white nb-border nb-shadow px-8 py-4 -rotate-2">
              <p className="text-2xl uppercase italic leading-none">@CHIEF_DESIGNER</p>
              <p className="text-xs uppercase font-bold opacity-40 italic mt-2">NEO.RAW CORE TEAM</p>
           </div>
        </section>

        {/* Pricing */}
        <section className="py-12 px-6">
          <h2 className="text-5xl md:text-[8rem] uppercase italic tracking-tighter text-center mb-24 drop-shadow-[4px_4px_0px_#000]">CASH_ONLY.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { name: 'BASIC', price: '$0.00', color: '#FFF' },
              { name: 'PRO', price: '$24.99', color: '#FACC15', popular: true },
              { name: 'GOD', price: '$99.00', color: '#4ADE80' }
            ].map((p, i) => (
              <div key={i} className={`nb-border nb-shadow p-10 flex flex-col ${p.popular ? 'rotate-2' : ''}`} style={{ backgroundColor: p.color }}>
                 <h3 className="text-2xl uppercase italic underline decoration-8 mb-8">{p.name}</h3>
                 <div className="mb-12 border-b-4 border-black pb-4">
                    <span className="text-xs uppercase italic">PER WEEK</span> <br />
                    <span className="text-6xl tracking-tighter italic">{p.price}</span>
                 </div>
                 <ul className="space-y-4 mb-12 flex-grow">
                    {['ALL ASSETS', 'COMMUNITY', 'UPDATES'].map((item, j) => (
                      <li key={j} className="flex justify-between items-center text-sm uppercase italic">
                         <span>{item}</span>
                         <span>[x]</span>
                      </li>
                    ))}
                 </ul>
                 <button className={`w-full py-5 nb-border nb-shadow nb-shadow-hover transition-all text-xl uppercase italic ${p.popular ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    EXECUTE
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Toggle */}
        <section className="bg-white nb-border nb-shadow p-12">
           <h2 className="text-5xl uppercase italic tracking-tighter mb-16 text-center">QUERY.EXE</h2>
           <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: 'WHY SO LOUD?', a: 'SILENCE IS FOR THE WEAK. WE DESIGN FOR THE LOUD.' },
                { q: 'CAN I CHANGE COLORS?', a: 'SURE, IF YOU CAN HANDLE THE GLOW.' },
                { q: 'SUPPORT?', a: 'TICKET ISSUED ON FAILURE. NO REFUNDS EVER.' }
              ].map((faq, i) => (
                <div key={i} className="nb-border bg-[#A5B4FC] overflow-hidden">
                   <button 
                     className="w-full p-8 text-left flex justify-between items-center bg-white hover:bg-[#FACC15] transition-colors"
                     onClick={() => setOpenFaq(openFaq === i ? null : i)}
                   >
                     <span className="text-2xl uppercase italic tracking-tighter">{faq.q}</span>
                     <div className={`transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                        <X size={32} strokeWidth={4} />
                     </div>
                   </button>
                   {openFaq === i && (
                     <div className="p-8 text-xl italic uppercase font-black bg-[#A5B4FC]">
                        {faq.a}
                     </div>
                   )}
                </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white nb-border nb-shadow p-16">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20 border-b-4 border-white pb-20">
              <div className="col-span-2">
                 <h4 className="text-6xl uppercase italic tracking-tighter mb-10 text-[#FACC15]">NEO.RAW</h4>
                 <p className="text-xl italic opacity-60 max-w-md">ESTABLISHED IN THE FUTURE. BUILT TO SURVIVE THE NOISE. ALL SYSTEMS NOMINAL.</p>
                 <div className="flex gap-6 mt-12">
                   {[Github, Twitter, Linkedin].map((Icon, i) => (
                     <div key={i} className="w-16 h-16 bg-white text-black nb-border flex items-center justify-center hover:bg-[#F87171] hover:-translate-y-2 transition-all cursor-pointer">
                        <Icon size={32} strokeWidth={3} />
                     </div>
                   ))}
                 </div>
              </div>
              
              {['MODS', 'DROP', 'LEGAL'].map((title, i) => (
                <div key={i}>
                   <h5 className="text-2xl uppercase italic mb-10 bg-[#FACC15] text-black inline-block px-2">{title}</h5>
                   <ul className="space-y-6 text-xl italic underline decoration-4 underline-offset-8">
                      {['COREV1', 'SHAD_v2', 'EASE_L'].map(l => (
                        <li key={l} className="hover:text-[#F87171] cursor-pointer">{l}</li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm italic uppercase tracking-widest text-[#FACC15]">
              <p>© 2026 NEO.RAW PROTOCOL. NO RIGHTS RESERVED.</p>
              <div className="flex items-center gap-4 bg-white text-black px-6 py-2 nb-border font-black text-xl italic uppercase">
                STAY_LOUD <Check size={24} strokeWidth={5} />
              </div>
           </div>
        </footer>
      </div>
    </div>
  );
};
