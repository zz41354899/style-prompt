import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  AlertTriangle, Home, Settings, User, Terminal, HelpCircle,
  Plus, Minus
} from 'lucide-react';

export const S04Brutalist = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black font-mono antialiased selection:bg-[#FFFF00] selection:text-black">
      <style dangerouslySetInnerHTML={{ __html: `
        .brutalist-border {
          border: 4px solid black;
        }
        .brutalist-shadow {
          box-shadow: 10px 10px 0px 0px #000;
        }
        .brutalist-button:hover {
          background-color: #FFFF00;
          transform: translate(-4px, -4px);
          box-shadow: 14px 14px 0px 0px #000;
        }
        .brutalist-button:active {
          transform: translate(4px, 4px);
          box-shadow: 2px 2px 0px 0px #000;
        }
        .brutalist-card:hover {
          background-color: #00FF00;
        }
      `}} />

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#C0C0C0] border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="w-14 h-14 bg-black flex items-center justify-center text-[#FFFF00] brutalist-border">
                <Terminal size={32} strokeWidth={3} />
             </div>
             <span className="text-3xl font-black uppercase tracking-tighter">BRUTAL.JS</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10">
              {['RAW', 'INDEX', 'CORE', 'SUPPORT'].map((item) => (
                <span key={item} className="text-lg font-black underline decoration-4 underline-offset-8 hover:bg-[#FFFF00] cursor-pointer">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-6">
              <button className="px-8 py-3 bg-white brutalist-border brutalist-shadow text-lg font-black uppercase brutalist-button transition-all">
                ENTER
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-3 bg-black text-white brutalist-border">
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="absolute top-24 left-0 right-0 bg-[#0000FF] p-10 z-50 text-white brutalist-border">
            <div className="flex flex-col gap-10 text-4xl font-black italic">
              {['RAW', 'INDEX', 'CORE', 'SUPPORT'].map((item) => (
                <span key={item} className="border-b-4 border-white pb-4 hover:text-[#FFFF00]">
                  {item}
                </span>
              ))}
              <button className="w-full px-6 py-8 bg-[#FFFF00] text-black text-3xl font-black brutalist-border brutalist-shadow uppercase">
                ENTER NOW
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-48 px-6 bg-[#FFFF00] border-b-8 border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-full bg-black opacity-10 skew-x-12 translate-x-12" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-black text-white inline-block px-6 py-2 text-xl font-black uppercase mb-12 transform -rotate-2">
            WARNING: RAW CONTENT
          </div>
          
          <h1 className={`font-black uppercase mb-12 leading-none tracking-tighter ${isMobile ? 'text-6xl' : 'text-[10rem]'}`}>
            NO <br />POLISH <br /><span className="bg-black text-[#FFFF00] px-4">JUST REASON.</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
                <p className={`font-black leading-tight ${isMobile ? 'text-xl' : 'text-4xl'}`}>
                    BRUTALISM IS ABOUT THE EXPOSURE OF TRUTH. NO GRADIENTS. NO RADIUS. NO MERCY.
                </p>
                <div className="flex flex-wrap gap-10">
                    <button className="group px-12 py-8 bg-white text-black text-3xl font-black brutalist-border brutalist-shadow brutalist-button transition-all flex items-center gap-6 group">
                        GET RAW
                        <ArrowRight size={40} strokeWidth={5} className="group-hover:translate-x-4 transition-transform" />
                    </button>
                    <button className="px-12 py-8 bg-black text-white text-3xl font-black brutalist-border brutalist-shadow brutalist-button transition-all">
                        DOCS
                    </button>
                </div>
            </div>
            {/* Abstract Graphic */}
            <div className="relative h-[400px] border-8 border-black bg-white brutalist-shadow hidden lg:block overflow-hidden">
                <div className="absolute inset-0 bg-[#0000FF] opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, #000)' , backgroundSize: '40px 40px' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-black p-4">
                    <div className="w-full h-full border-4 border-white border-dashed flex items-center justify-center text-white text-8xl font-black">!</div>
                </div>
                <div className="absolute bottom-4 left-4 text-xs font-black uppercase bg-black text-white px-2">STRUCT_VER_04_FINAL</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-10">
            <h2 className="text-6xl md:text-9xl font-black uppercase leading-none tracking-tighter italic">CORE.SPEC</h2>
            <div className="max-w-md">
                <p className="text-2xl font-black uppercase italic bg-[#00FF00] p-4 brutalist-border">FUNCTIONALITY IS THE ONLY AESTHETIC THAT MATTERS.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { title: 'HARDWARE', text: 'OPTIMIZED FOR LOW-END RENDERING. ZERO BLOAT.' },
              { title: 'LOGIC', text: 'DIRECT PATH TO USER INTENT. NO DARK PATTERNS.' },
              { title: 'FORCE', text: 'VIBRANT COLORS THAT DEMAND ATTENTION.' }
            ].map((f, i) => (
              <div key={i} className="bg-[#C0C0C0] brutalist-border brutalist-shadow p-12 brutalist-card transition-colors cursor-crosshair">
                <div className="w-20 h-20 bg-black flex items-center justify-center text-white mb-10 brutalist-border">
                    <AlertTriangle size={40} strokeWidth={3} />
                </div>
                <h3 className="text-4xl font-black uppercase mb-6 underline decoration-8">{f.title}</h3>
                <p className="text-xl font-black leading-none">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive Split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b-8 border-black">
        <div className="bg-[#0000FF] text-white p-16 lg:p-32 border-r-8 border-black">
            <h2 className="text-6xl md:text-[8rem] font-black uppercase leading-[0.8] mb-16 italic">RAW <br />POWER.</h2>
            <p className="text-3xl font-black italic mb-16 leading-tight uppercase">
                WE DO NOT HIDE OUR STRUCTURE. WE DO NOT HIDE OUR INTENT. WE ARE THE INTERNET IN ITS PUREST FORM.
            </p>
            <div className="space-y-8">
                {['SYSTEM INTEGRITY', 'BINARY CLARITY', 'HARD CODED', 'RAW ASSETS'].map(item => (
                    <div key={item} className="flex items-center gap-6 bg-white text-black p-6 brutalist-border brutalist-shadow">
                        <Check size={32} strokeWidth={5} />
                        <span className="text-2xl font-black italic">{item}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-[#C0C0C0] p-16 lg:p-32 flex flex-col justify-center">
            <div className="bg-black text-[#00FF00] p-10 brutalist-border brutalist-shadow font-mono text-xl whitespace-pre overflow-x-auto">
                {`> BOOTING SYSTEM...
> LOADING BRUTAL_FLW_0.4
> OK: CORE_INIT [SUCCESS]
> OK: CSS_OVERRIDE [SUCCESS]
> OK: NO_GHOSTING [SUCCESS]
> OK: TOTAL_EXPOSURE [SUCCESS]
> SYSTEM_READY_`}
            </div>
            <div className="mt-20">
                <button className="w-full py-10 bg-[#FFFF00] text-black text-4xl font-black brutalist-border brutalist-shadow uppercase hover:-translate-x-2 hover:-translate-y-2 transition-transform">
                    EXECUTE_COMMAND
                </button>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white border-b-8 border-black text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center gap-2 mb-16">
            {[...Array(5)].map((_, i) => <Star key={i} size={40} fill="black" strokeWidth={0} />)}
          </div>
          <p className="text-4xl md:text-7xl font-black uppercase leading-none italic mb-16">
            "THIS IS THE ONLY DESIGN SYSTEM THAT DOESN'T LIE TO ME."
          </p>
          <div className="inline-block bg-[#00FF00] p-4 brutalist-border brutalist-shadow">
            <p className="text-2xl font-black uppercase">SYSTEM_OPERATOR_01</p>
            <p className="text-lg font-black italic uppercase opacity-60 italic">CYBER_NETWORKS_INTERNAL</p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 px-6 bg-[#C0C0C0] border-b-8 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black uppercase italic text-center mb-24 tracking-tighter">BITRATE_COST</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: 'GUEST', price: '$00', color: '#FFF' },
              { name: 'ADMIN', price: '$49', color: '#FFFF00', best: true },
              { name: 'ROOT', price: '$99', color: '#00FF00' }
            ].map((p, i) => (
              <div key={i} className={`relative flex flex-col brutalist-border brutalist-shadow p-px transition-transform hover:-translate-y-4 ${p.best ? 'lg:-translate-y-8' : ''}`} style={{ backgroundColor: p.color }}>
                {p.best && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 font-black italic text-xl">
                        CORE_CHOICE
                    </div>
                )}
                <div className="p-10 border-b-8 border-black flex justify-between items-end bg-black text-white">
                  <h3 className="text-4xl font-black italic">{p.name}</h3>
                  <div className="text-right">
                    <p className="text-5xl font-black">{p.price}</p>
                    <p className="text-xs font-black uppercase italic">/ PER_NODE</p>
                  </div>
                </div>
                <div className="p-10 flex-grow bg-white text-black font-black uppercase italic space-y-6">
                  {['BINARY ACCESS', 'DATA STORAGE', 'PRIORITY EXEC'].map(item => (
                    <div key={item} className="p-3 border-4 border-black flex justify-between">
                        <span>{item}</span>
                        <span>[x]</span>
                    </div>
                  ))}
                  <div className="pt-10">
                    <button className="w-full py-8 bg-black text-white text-2xl font-black uppercase brutalist-shadow-sm hover:translate-y-[-4px] transition-all">
                        INIT_UPGRADE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white border-b-8 border-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black uppercase italic mb-16 text-center underline decoration-[16px]">SYS_QUERY</h2>
          <div className="space-y-12">
            {[
              { q: 'WHY IS IT LOUD?', a: 'LOUDNESS IS THE RESULT OF RAW DATA EXPOSURE.' },
              { q: 'COMPATIBILITY?', a: 'ALL NODES SUPPORTED. LEGACY HARDWARE PREFERRED.' },
              { q: 'SUPPORT?', a: 'TICKET ISSUED ON FAILURE. NO REFUNDS.' }
            ].map((faq, i) => (
              <div key={i} className="brutalist-border brutalist-shadow bg-white overflow-hidden">
                <button 
                  className="w-full p-10 text-left flex justify-between items-center bg-[#C0C0C0] hover:bg-[#FFFF00] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-3xl font-black italic uppercase tracking-widest">{faq.q}</span>
                  {openFaq === i ? <Minus size={32} strokeWidth={5} /> : <Plus size={32} strokeWidth={5} />}
                </button>
                {openFaq === i && (
                  <div className="p-10 font-black text-2xl italic uppercase bg-white text-black">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0000FF] text-white px-6 text-center border-b-8 border-black">
         <h2 className="text-7xl md:text-[12rem] font-black uppercase leading-[0.7] mb-16 tracking-tighter">DISCONNECT <br />FROM <br />NORMAL.</h2>
         <div className="flex flex-col sm:flex-row justify-center gap-12">
            <button className="px-16 py-10 bg-[#FFFF00] text-black border-8 border-black brutalist-shadow font-black text-4xl uppercase hover:translate-x-2 transition-transform">
                CONNECT_NOW
            </button>
            <button className="px-16 py-10 bg-white text-black border-8 border-black brutalist-shadow font-black text-4xl uppercase">
                READ_MANIFESTO
            </button>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-2">
            <h4 className="text-4xl font-black italic mb-8 underline decoration-white decoration-8">BRUTAL.JS_SYSTEMS</h4>
            <p className="text-xl font-black italic uppercase italic opacity-60 max-w-sm mb-12">BUILT TO LAST IN A WORLD OF TEMPORARY SHINE. RAW DATA. RAW POWER.</p>
            <div className="flex gap-6">
                {[Github, Twitter, Linkedin].map((Icon, i) => (
                    <div key={i} className="w-16 h-16 bg-white text-black brutalist-border flex items-center justify-center hover:bg-[#FFFF00] transition-colors cursor-pointer">
                        <Icon size={32} strokeWidth={3} />
                    </div>
                ))}
            </div>
          </div>
          
          {['NODES', 'SOURCE', 'LAW'].map((title, i) => (
            <div key={i}>
              <h5 className="text-2xl font-black italic mb-10 bg-white text-black inline-block px-2">{title}</h5>
              <ul className="space-y-6 text-xl font-black italic uppercase opacity-80 underline underline-offset-4">
                {['LINK_A', 'LINK_B', 'LINK_C'].map(l => <li key={l} className="hover:text-[#FFFF00] cursor-pointer transition-colors">{l}</li>)}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t-8 border-white flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-lg font-black italic uppercase tracking-widest text-[#FFFF00]">© 2026 BRUTAL.JS_PROTOCOL. NO RIGHTS RESERVED.</p>
            <div className="flex items-center gap-4 bg-white text-black px-6 py-2 brutalist-border font-black text-xl italic uppercase">
                STATUS: NOMINAL <Check size={24} strokeWidth={5} />
            </div>
        </div>
      </footer>
    </div>
  );
};
