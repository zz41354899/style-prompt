import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Layout, Grid, Type, Compass, ExternalLink, Play, Plus
} from 'lucide-react';

export const S03Swiss = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-[#FF0000] selection:text-white overflow-x-hidden uppercase">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#FF0000] flex items-center justify-center text-white">
              <span className="font-black text-2xl">+</span>
            </div>
            <span className="text-2xl font-black tracking-tighter">SWISS GRID</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10">
              {['Design', 'Archive', 'Index', 'Help'].map((item) => (
                <span key={item} className="text-sm font-black hover:text-[#FF0000] cursor-pointer transition-colors">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-6">
              <span className="text-sm font-black cursor-pointer">Login</span>
              <button className="px-8 py-3 bg-black text-white text-sm font-black hover:bg-[#FF0000] transition-colors translate-y-[-2px] shadow-[4px_4px_0px_#000]">
                Access
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-black text-white">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="absolute top-20 left-0 right-0 bg-white border-b-2 border-black p-8 z-50 text-center">
            <div className="flex flex-col gap-8">
              {['Design', 'Archive', 'Index', 'Help'].map((item) => (
                <span key={item} className="text-2xl font-black italic">
                  {item}
                </span>
              ))}
              <hr className="border-black" />
              <button className="w-full px-6 py-4 bg-[#FF0000] text-white text-xl font-black italic">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-6 border-b-2 border-black overflow-hidden">
        <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-[#FF0000] opacity-5 -z-10 rounded-full" />
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-sm font-black bg-black text-white px-2 py-1">Typeface 03.A</span>
          </div>
          
          <h1 className={`font-black tracking-tighter mb-16 leading-[0.8] ${isMobile ? 'text-6xl' : 'text-[12rem]'}`}>
            FORM <br /> FOLLOWS <br /><span className="text-[#FF0000]">FUNCTION</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <p className={`font-bold leading-none ${isMobile ? 'text-xl' : 'text-3xl max-w-xl'}`}>
               International Typographic Style. <br />
               Structured layouts for clarity in <br />
               communication and architectural <br />
               integrity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex-1 min-w-[240px] px-10 py-6 bg-black text-white text-xl font-black hover:bg-[#FF0000] transition-colors flex items-center justify-between">
                Build 
                <ArrowRight size={24} strokeWidth={3} />
              </button>
              <button className="flex-1 min-w-[240px] px-10 py-6 border-2 border-black text-xl font-black hover:bg-black hover:text-white transition-all flex items-center justify-between">
                Explore
                <Play size={24} strokeWidth={3} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-24 px-6 border-b-2 border-black bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-px bg-black border-2 border-black">
            {[
              { title: 'Alignment', desc: 'Flush left, ragged right for natural eye movement.' },
              { title: 'The Grid', desc: 'Mathematical ratios determining all visual placements.' },
              { title: 'Objective', desc: 'Removing the personal to reveal the universal.' },
              { title: 'Contrast', desc: 'Strategic scaling to indicate information importance.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 hover:bg-[#FF0000] hover:text-white transition-all cursor-crosshair group">
                <div className="mb-12 font-black text-4xl italic opacity-20 group-hover:opacity-100">0{i+1}</div>
                <h3 className="text-2xl font-black mb-4">{feature.title}</h3>
                <p className="font-bold text-sm leading-tight italic">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Content */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-black h-fit">
        <div className="p-16 lg:p-24 border-r-2 border-black flex flex-col justify-center">
            <h2 className="text-5xl md:text-8xl font-black leading-none mb-12">THE POWER <br />OF THE <br />PRIMARY.</h2>
            <div className="w-20 h-2 bg-[#FF0000] mb-12" />
            <p className="text-xl font-bold leading-tight mb-12">
               Universal communication through color, shape, and typography. Every element serves a specific purpose in the narrative flow.
            </p>
            <div className="space-y-4">
                {['Rational Layouts', 'Clear Hierarchy', 'Sans-Serif Unity', 'Objective Data Display'].map(item => (
                    <div key={item} className="flex items-center gap-4 border-b-2 border-black pb-4 hover:bg-zinc-100 transition-colors">
                        <Check size={24} strokeWidth={3} />
                        <span className="font-black italic">{item}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="relative bg-[#FF0000] overflow-hidden group min-h-[500px]">
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-20">
                {[...Array(100)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black" />
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full h-full bg-black flex items-center justify-center transform hover:rotate-2 transition-transform duration-500">
                    <span className="text-white text-[15vw] font-black italic select-none">GRID</span>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 border-b-2 border-black">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-xs font-black bg-black text-white px-4 py-1 inline-block mb-16 italic tracking-widest">ENDORSEMENTS</h2>
           <p className="text-4xl md:text-6xl font-black leading-none italic mb-12">
              "SWISS DESIGN IS NOT JUST AN AESTHETIC, IT IS A SYSTEMIC APPROACH TO CLARITY."
           </p>
           <div className="flex flex-col items-center gap-4">
               <div className="w-12 h-1 bg-[#FF0000]" />
               <p className="text-xl font-black">Josef Müller-Brockmann</p>
               <p className="text-sm font-bold opacity-50 italic">Graphic Consultant</p>
           </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 px-6 bg-zinc-50 border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b-2 border-black pb-4">
            <h2 className="text-4xl md:text-6xl font-black italic leading-none">STRATEGY <br />COSTS.</h2>
            <span className="text-sm font-black italic">PRICING 2026_INDEX</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Basic', price: '00', items: ['Static Grids', 'Free Assets', '1 Domain'] },
              { name: 'Expert', price: '75', items: ['Dynamic Layouts', 'Custom Type', '10 Domains'], accent: true },
              { name: 'Corp', price: '99', items: ['Design Systems', 'Full Source', 'Unlimited'] }
            ].map((p, i) => (
              <div key={i} className={`border-2 border-black p-10 flex flex-col ${p.accent ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <h3 className="text-3xl font-black italic mb-8">{p.name}</h3>
                <div className="mb-12 border-b-2 border-current pb-4">
                    <span className="text-sm font-black italic">CHF / MO</span> <br />
                    <span className="text-7xl font-black tracking-tighter italic">{p.price}</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                    {p.items.map((item, j) => (
                        <li key={j} className="font-black italic text-sm flex items-center gap-2">
                            <div className={`w-2 h-2 ${p.accent ? 'bg-[#FF0000]' : 'bg-black'}`} />
                            {item}
                        </li>
                    ))}
                </ul>
                <button className={`w-full py-5 font-black text-xl italic transition-all ${p.accent ? 'bg-white text-black hover:bg-[#FF0000] hover:text-white' : 'bg-black text-white hover:bg-[#FF0000]'}`}>
                    Execute
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white border-b-2 border-black">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-6xl font-black italic leading-relaxed sticky top-32">FAQ / <br />INF0</h2>
                </div>
                <div className="space-y-12">
                    {[
                        { q: 'Why is it so bold?', a: 'Boldness command attention and forces hierarchical clarity in high-density information environments.' },
                        { q: 'Is red mandatory?', a: 'Red is the signal. It calls the eye to action. Use it sparingly, use it strictly.' },
                        { q: 'Does it scale?', a: 'Systems are built for scale. The Grid is universal.' }
                    ].map((faq, i) => (
                        <div key={i} className="border-b-2 border-black pb-12 cursor-pointer group" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xl font-black italic uppercase group-hover:text-[#FF0000] transition-colors">{faq.q}</span>
                                <div className={`transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                                    <Plus size={24} strokeWidth={3} />
                                </div>
                            </div>
                            {openFaq === i && (
                                <p className="font-bold leading-tight italic text-zinc-600">{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24 pb-24 border-b-2 border-[#FF0000]">
            <div className="col-span-1 lg:col-span-1">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-[#FF0000] flex items-center justify-center">
                        <span className="font-black text-2xl truncate">+</span>
                    </div>
                </div>
                <p className="font-black italic text-sm max-w-xs leading-relaxed">SWISS GRID DESIGN SYSTEM. BUILT FOR UNIVERSAL CLARITY SINCE 2026.</p>
            </div>
            {['Archives', 'Products', 'Legal'].map((title, i) => (
                <div key={i}>
                    <h4 className="font-black italic text-xl mb-8 text-[#FF0000] underline underline-offset-8">/{title}</h4>
                    <ul className="space-y-4 font-black italic text-sm">
                        {['Link Alpha', 'Link Beta', 'Link Gamma'].map(l => <li key={l} className="hover:text-[#FF0000] transition-colors cursor-pointer">{l}</li>)}
                    </ul>
                </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 font-black italic text-xs tracking-[0.3em]">
              <p>© 2026 INTERNATIONAL STYLE SYSTEMS.</p>
              <div className="flex gap-12">
                  <a href="#" className="hover:text-[#FF0000] transition-colors flex items-center gap-2">TWITTER <ExternalLink size={12} /></a>
                  <a href="#" className="hover:text-[#FF0000] transition-colors flex items-center gap-2">GITHUB <ExternalLink size={12} /></a>
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
