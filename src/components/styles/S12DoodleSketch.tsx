import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Pencil, PenTool, Eraser, Lightbulb, Coffee,
  Cloud, Heart, Sparkles, MessageCircle
} from 'lucide-react';

export const S12DoodleSketch = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#2A2A2A] font-serif antialiased selection:bg-[#FFD166] selection:text-black overflow-x-hidden relative p-4 lg:p-12">
      <style dangerouslySetInnerHTML={{ __html: `
        .doodle-border {
          border: 3px solid #000;
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        }
        .doodle-shadow {
          box-shadow: 4px 6px 0px 0px rgba(0,0,0,0.1);
        }
        .sketch-underline {
          background-image: linear-gradient(120deg, #FFD166 0%, #FFD166 100%);
          background-repeat: no-repeat;
          background-size: 100% 0.3em;
          background-position: 0 88%;
        }
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wiggle {
          animation: wiggle 0.3s ease-in-out infinite;
        }
      `}} />

      {/* Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#00C2FF 1px, transparent 1px)', backgroundSize: '100% 30px' }} />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Navigation */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-white doodle-border flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <Pencil size={24} strokeWidth={1.5} />
            </div>
            <span className="text-2xl font-black italic tracking-tight">INKY_FLOW</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 font-bold italic">
              {['Idea', 'Draft', 'Final', 'About'].map((item) => (
                <span key={item} className="hover:sketch-underline cursor-pointer transition-all px-1">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-6">
              <button className="px-6 py-2 bg-white doodle-border text-sm font-bold shadow-sm hover:animate-wiggle transition-all">
                Login
              </button>
              <button className="px-8 py-3 bg-[#FFD166] doodle-border text-sm font-black shadow-md hover:translate-y-[-2px] transition-all">
                 Join Sketch!
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 doodle-border bg-white">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-white doodle-border p-10 z-[100] relative space-y-10 animate-wiggle">
             <div className="flex flex-col gap-8 text-3xl font-black italic">
                {['Idea', 'Draft', 'Final', 'About'].map((item) => (
                   <span key={item} className="border-b-2 border-black border-dashed pb-4">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-4 bg-[#FFD166] doodle-border text-xl font-black italic">
                Get Started
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">
           <div className="space-y-12">
              <div className="rotate-[-2deg] bg-white doodle-border inline-block px-4 py-1 text-sm font-bold italic mb-4">
                 Warning: Rough sketches ahead!
              </div>
              
              <h1 className={`font-black leading-[0.9] tracking-tighter ${isMobile ? 'text-6xl' : 'text-9xl'}`}>
                Thinking <br />
                <span className="sketch-underline">Outside</span> <br />
                the box.
              </h1>
              
              <p className={`text-[#4A4A4A] leading-relaxed italic ${isMobile ? 'text-xl' : 'text-3xl max-w-xl'}`}>
                Digital products don't have to be cold. Let's bring back the <span className="underline decoration-wavy decoration-[#FF6B6B]">soul</span> of the notebook.
              </p>
              
              <div className="flex flex-wrap gap-8">
                 <button className="px-12 py-6 bg-white doodle-border text-2xl font-black italic shadow-xl hover:bg-[#FFD166] transition-all flex items-center gap-4 group">
                    Start Doodling
                    <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                 </button>
                 <div className="hidden sm:flex items-center gap-4 italic opacity-40">
                    <PenTool size={20} />
                    <span className="text-sm font-bold uppercase">Ink v2.04</span>
                 </div>
              </div>
           </div>

           <div className="relative aspect-square">
              <div className="absolute inset-0 bg-[#FFD166] opacity-10 blur-3xl rounded-full" />
              <div className="w-full h-full bg-white doodle-border p-8 lg:p-16 flex items-center justify-center relative rotate-[1deg] group">
                 <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-400 group-hover:animate-pulse" />
                    <div className="w-4 h-4 rounded-full bg-blue-400 group-hover:animate-pulse delay-75" />
                 </div>
                 <div className="text-center space-y-8">
                    <Coffee size={120} strokeWidth={1} className="mx-auto text-black transform group-hover:rotate-12 transition-transform" />
                    <p className="text-2xl font-black italic uppercase tracking-tighter">Draft_01_Final.png</p>
                    <div className="flex justify-center gap-2">
                       {[...Array(12)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-black rounded-full" />)}
                    </div>
                 </div>
                 <div className="absolute bottom-[-20px] right-[-20px] bg-[#FFD166] doodle-border px-4 py-2 text-xs font-black italic rotate-12">
                    SO COOL!
                 </div>
              </div>
           </div>
        </section>

        {/* Features Row */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Lightbulb, color: '#FFD166', title: 'Brainstorm', desc: 'No idea is too messy for our initial draft engine.' },
               { icon: Cloud, color: '#06D6A0', title: 'Cloud Ink', desc: 'Sync your sketches across all your devices instantly.' },
               { icon: Heart, color: '#FF6B6B', title: 'With Soul', desc: 'Handcrafted components with human-like imperfections.' },
               { icon: Sparkles, color: '#118AB2', title: 'AI Magic', desc: 'Turn your rough scribbles into production code.' }
             ].map((f, i) => (
               <div key={i} className="bg-white doodle-border p-10 hover:shadow-xl hover:translate-y-[-4px] transition-all cursor-pointer group">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-10 border-2 border-black border-dashed group-hover:rotate-45 transition-transform" style={{ backgroundColor: f.color + '30' }}>
                     <f.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-black italic mb-4">{f.title}</h3>
                  <p className="text-sm italic font-bold leading-tight opacity-70">{f.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Content Split */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
           <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-black italic leading-[0.9] tracking-tighter uppercase whitespace-pre leading-none">
                 The Art of <br />the <span className="bg-[#FFD166] px-2">Scribble.</span>
              </h2>
              <p className="text-2xl italic leading-tight text-[#4A4A4A]">
                 We've traded clean lines for expressive ones. Perfect alignment is boring. Let's make something that feels alive.
              </p>
              <div className="space-y-6 italic font-bold">
                 {[
                   'Rough SVG Filter Overlays',
                   'Hand-drawn Path Animations',
                   'Non-linear Grid Placements',
                   'Dynamic Scribble Underlines'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-6 group cursor-pointer border-b-2 border-dashed border-black pb-4 hover:pl-4 transition-all">
                      <div className="w-6 h-6 border-2 border-black rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform">
                         <Check size={14} />
                      </div>
                      <span className="text-xl uppercase tracking-tighter">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="relative">
              <div className="absolute top-10 right-10 rotate-12">
                 <Star size={48} fill="#FFD166" className="animate-pulse" />
              </div>
              <div className="bg-[#118AB2]/10 doodle-border p-12 lg:p-20 relative overflow-hidden group">
                 <div className="bg-white doodle-border p-12 shadow-2xl rotate-[-2deg] group-hover:rotate-0 transition-transform duration-700">
                    <div className="w-full flex gap-1 mb-8">
                       {[...Array(8)].map((_, i) => <div key={i} className="h-1 flex-grow bg-black rounded" />)}
                    </div>
                    <p className="text-xl font-bold italic mb-10 leading-relaxed">
                       "To sketch is to see. To see is to understand. This is the foundation of every great product."
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-[#FF6B6B] border-2 border-black" />
                       <div className="text-sm font-black italic">Arthur Inkwell</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing Table */}
        <section className="py-24 px-6 relative bg-white doodle-border rotate-[-1deg]">
           <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#FF6B6B] doodle-border px-8 py-2 text-xl font-black italic text-white rotate-2">
              PRICING!
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              {[
                { name: 'Doodler', price: 'Free', color: '#FFF' },
                { name: 'Artist', price: '$12', color: '#FFD166', best: true },
                { name: 'Genius', price: '$29', color: '#06D6A0' }
              ].map((p, i) => (
                <div key={i} className={`p-10 doodle-border flex flex-col justify-between ${p.best ? 'scale-105 shadow-2xl relative' : 'bg-opacity-50'}`} style={{ backgroundColor: p.color }}>
                   {p.best && <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-1 text-xs font-black italic rotate-12">BEST!</div>}
                   <h3 className="text-4xl font-black italic mb-6 uppercase tracking-tighter underline">{p.name}</h3>
                   <div className="mb-12 border-b-2 border-black border-dashed pb-6">
                      <span className="text-7xl font-black italic tracking-tighter">{p.price}</span>
                      <span className="text-sm font-bold uppercase italic ml-2">/ Life</span>
                   </div>
                   <ul className="space-y-4 mb-12 italic font-bold">
                      {['Pencil Auth', '5 Notebooks', 'Sketch Sync'].map(l => (
                        <li key={l} className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-black rotate-45" />
                           {l}
                        </li>
                      ))}
                   </ul>
                   <button className="w-full py-5 bg-white doodle-border text-xl font-black italic hover:bg-black hover:text-white transition-all">
                      Choose This!
                   </button>
                </div>
              ))}
           </div>
        </section>

        {/* FAQ Area */}
        <section className="py-12">
           <h2 className="text-4xl font-black italic text-center mb-16 underline decoration-wavy decoration-[#118AB2] underline-offset-8">Common Questions?</h2>
           <div className="max-w-2xl mx-auto space-y-6">
              {[
                { q: 'Is it real ink?', a: 'Almost! We use high-fidelity SVG paths to simulate actual ink behavior on paper.' },
                { q: 'Can I export to SVG?', a: 'YES! Every scribble you make is fully vectorized and ready for production.' },
                { q: 'Does it support coffee spills?', a: 'Not yet, but we are working on the "Caffeine Filter" for our next major drop.' }
              ].map((faq, i) => (
                <div key={i} className="doodle-border bg-white overflow-hidden shadow-sm">
                   <button 
                     className="w-full p-8 text-left flex justify-between items-center hover:bg-[#FFF9F2] transition-colors"
                     onClick={() => setOpenFaq(openFaq === i ? null : i)}
                   >
                     <span className="text-xl font-black italic uppercase tracking-tighter">{faq.q}</span>
                     <span className="text-2xl font-black">{openFaq === i ? '−' : '+'}</span>
                   </button>
                   {openFaq === i && (
                     <div className="px-8 pb-8 text-lg italic text-[#4A4A4A] font-bold border-t-2 border-dashed border-black pt-6">
                        {faq.a}
                     </div>
                   )}
                </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-12 bg-white doodle-border relative overflow-hidden rotate-[1deg]">
           <div className="absolute top-0 left-0 w-full h-8 bg-black opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 2px, transparent 2px, transparent 20px)' }} />
           <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 border-b-2 border-black pb-20">
              <div className="col-span-2 space-y-8">
                 <h4 className="text-5xl font-black italic tracking-tighter">INKY_FLOW</h4>
                 <p className="text-2xl italic font-bold text-[#4A4A4A] max-w-sm">Built for the thinkers, the dreamers, and the notebook lovers. Keep sketching.</p>
                 <div className="flex gap-4">
                    {[Github, Twitter, Linkedin].map((Icon, i) => (
                      <div key={i} className="w-14 h-14 bg-[#FFD166] doodle-border flex items-center justify-center hover:animate-wiggle cursor-pointer">
                         <Icon size={28} />
                      </div>
                    ))}
                 </div>
              </div>
              
              {['PAGES', 'LEGAL', 'FUN'].map((title, i) => (
                <div key={i}>
                   <h5 className="text-xl font-black italic mb-10 sketch-underline px-1">{title}</h5>
                   <ul className="space-y-4 text-lg font-bold italic text-[#4A4A4A]">
                      {['About Us', 'Policy', 'Games'].map(l => (
                        <li key={l} className="hover:text-black cursor-pointer hover:pl-2 transition-all">{l}</li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-black italic">
              <p>© 2026 INKY_SKETCH_PROD. ALL DOODLES RESERVED.</p>
              <div className="flex items-center gap-4 bg-[#FF6B6B] text-white px-6 py-2 doodle-border transform rotate-[-2deg]">
                 SO FRESH! <Sparkles size={20} />
              </div>
           </div>
        </footer>
      </div>
    </div>
  );
};
