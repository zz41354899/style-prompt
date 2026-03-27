import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Circle, Square, Triangle, Hexagon, Layers
} from 'lucide-react';

export const S06Bauhaus = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-slate-900 font-sans antialiased selection:bg-[#E11D48] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#FFFBEB] border-b-4 border-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
               <div className="w-6 h-6 bg-[#E11D48]" />
               <div className="w-6 h-6 bg-[#2563EB]" />
               <div className="w-6 h-6 bg-[#FBBF24]" />
            </div>
            <span className="text-xl font-bold uppercase tracking-widest">Bauhaus.sys</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-12 font-bold uppercase text-xs tracking-widest">
              {['Structure', 'Function', 'Process', 'Theory'].map((item) => (
                <span key={item} className="hover:text-[#E11D48] cursor-pointer transition-colors">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-6">
              <span className="text-xs font-bold uppercase tracking-widest cursor-pointer">Login</span>
              <button className="px-8 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-[#E11D48] transition-colors">
                Apply
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border-2 border-slate-900">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="absolute top-20 left-0 right-0 bg-[#FFFBEB] border-b-4 border-slate-900 p-8 z-50">
            <div className="flex flex-col gap-8 text-center font-bold uppercase tracking-widest">
              {['Structure', 'Function', 'Process', 'Theory'].map((item) => (
                <span key={item} className="text-sm">
                  {item}
                </span>
              ))}
              <hr className="border-slate-900/10" />
              <button className="w-full px-6 py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-[40%] h-[80%] bg-[#2563EB]/5 skew-x-12 -z-10" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block py-1 px-4 bg-[#FBBF24] border-2 border-slate-900 text-[10px] font-bold uppercase tracking-widest mb-10">
              Est. Dessau 1919 / Reborn 2026
            </div>
            
            <h1 className={`font-black uppercase mb-10 leading-[0.9] tracking-tighter text-slate-900 ${isMobile ? 'text-5xl' : 'text-7xl xl:text-8xl'}`}>
              Art is <br />
              <span className="text-[#E11D48] italic">Engineered.</span>
            </h1>
            
            <p className={`text-slate-600 mb-12 leading-relaxed ${isMobile ? 'text-base' : 'text-xl max-w-xl font-medium'}`}>
              Bridging the gap between manual craftsmanship and industrial functionalism. A system built on geometric purity and functional ruthlessness.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:translate-x-1 hover:translate-y-1 transition-transform">
                Start Process
                <ArrowRight size={16} />
              </button>
              <button className="w-full sm:w-auto px-12 py-5 border-2 border-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                The Manifesto
              </button>
            </div>
          </div>

          <div className="relative aspect-square grid grid-cols-2 grid-rows-2 gap-4">
             <div className="bg-[#E11D48] flex items-center justify-center p-12">
                <Triangle size={120} fill="white" strokeWidth={0} className="text-white drop-shadow-[10px_10px_0px_rgba(0,0,0,0.2)]" />
             </div>
             <div className="bg-[#2563EB] flex items-center justify-center p-12">
                <Circle size={120} fill="white" strokeWidth={0} className="text-white drop-shadow-[5px_5px_0px_rgba(0,0,0,0.2)]" />
             </div>
             <div className="bg-[#FBBF24] flex items-center justify-center p-12">
                <Square size={120} fill="white" strokeWidth={0} className="text-white drop-shadow-[10px_10px_0px_rgba(0,0,0,0.2)]" />
             </div>
             <div className="bg-slate-900 flex items-center justify-center p-12 overflow-hidden relative group">
                <Layers size={100} className="text-[#FFFBEB] group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute bottom-2 right-2 text-[8px] text-[#FFFBEB] font-mono uppercase tracking-widest font-bold">Grid_System_V6</div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 px-6 border-y-4 border-slate-900 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#2563EB]">/ Theory of Form</h2>
            <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Geometric Essentials.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-r-4 border-b-4 border-slate-900">
            {[
              { color: '#E11D48', title: 'Rational', desc: 'Design reduced to its primary functional components.' },
              { color: '#2563EB', title: 'Industrial', desc: 'Repeatable patterns for massive systemic scalability.' },
              { color: '#FBBF24', title: 'Linear', desc: 'Strict horizontal and vertical alignment strategies.' }
            ].map((feature, i) => (
              <div key={i} className="group p-12 bg-[#FFFBEB] border-t-4 border-l-4 border-slate-900 hover:bg-white transition-colors cursor-crosshair">
                <div className="w-10 h-10 border-2 border-slate-900 flex items-center justify-center mb-10 font-black text-xs" style={{ backgroundColor: feature.color, color: i === 2 ? 'black' : 'white' }}>
                    0{i+1}
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4 italic">{feature.title}</h3>
                <p className="text-slate-600 leading-tight text-sm font-bold uppercase tracking-wider">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="absolute inset-0 bg-[#2563EB] translate-x-4 translate-y-4 -z-10" />
             <div className="bg-slate-900 text-white p-12 border-4 border-slate-900 aspect-video flex flex-col justify-center">
                <span className="text-[#FBBF24] font-black text-6xl mb-6 tracking-tighter italic">99.9%</span>
                <p className="text-2xl font-bold uppercase tracking-widest leading-none">Operational <br /><span className="text-[#E11D48]">Efficiency.</span></p>
                <div className="mt-8 flex gap-2">
                   {[...Array(8)].map((_, i) => <div key={i} className="w-3 h-3 bg-[#FFFBEB]/20" />)}
                </div>
             </div>
          </div>
          <div className="space-y-10 order-1 lg:order-2">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">Universal <br />Typography.</h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
               Everything has a place. Everything has a purpose. We followHerbert Bayer's desire for a universal typeface that reflects the clarity of the machine age.
            </p>
            <div className="space-y-px bg-slate-900 border-2 border-slate-900">
              {[
                'Standardized Layout Modules',
                'Color Archetype Integration',
                'Functional Spacing Ratios',
                'Material-agnostic Framework'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-[#FFFBEB] hover:bg-white transition-colors cursor-pointer group">
                  <div className={`w-3 h-3 border-2 border-slate-900 ${i % 3 === 0 ? 'bg-[#E11D48] rounded-full' : i % 3 === 1 ? 'bg-[#2563EB]' : 'bg-[#FBBF24]'}`} />
                  <span className="text-xs font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-[#E11D48] text-[#FFFBEB] text-center">
        <div className="max-w-4xl mx-auto">
          <Star size={48} className="mx-auto mb-16 animate-pulse" fill="currentColor" />
          <p className="text-4xl md:text-6xl font-black uppercase leading-none italic mb-16 tracking-tighter">
            "THE SYSTEM IS THE ART. THE ART IS THE SYSTEM. REPETITION IS THE NEW ORIGINAL."
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-2 bg-[#FBBF24]" />
            <p className="text-xl font-bold uppercase tracking-[0.3em]">Walter Gropius</p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Architect of Theory</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter">The Economy</h2>
            <div className="w-40 h-1 bg-slate-900 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-r-4 border-b-4 border-slate-900">
            {[
              { name: 'Apprentice', price: '$00', color: '#FFFBEB', feat: ['1 Core Module', 'Open Source', 'Static Files'] },
              { name: 'Master', price: '$99', color: '#FBBF24', feat: ['All Modules', 'Priority Access', 'Dynamic Source'], popular: true },
              { name: 'Director', price: 'Fixed', color: '#2563EB', feat: ['Custom Systems', 'Legal License', 'Total Integration'], textWhite: true }
            ].map((p, i) => (
              <div key={i} className={`p-16 border-t-4 border-l-4 border-slate-900 flex flex-col group hover:shadow-inner transition-all ${p.textWhite ? 'text-white' : 'text-slate-900'}`} style={{ backgroundColor: p.color }}>
                <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-12 italic">{p.name}</h3>
                <div className="mb-12 border-b-2 border-slate-900 pb-6 group-hover:translate-x-2 transition-transform">
                  <span className="text-7xl font-black tracking-tighter italic">{p.price}</span>
                  <span className="text-[10px] font-black uppercase italic ml-2">/ Unit</span>
                </div>
                <ul className="space-y-6 mb-12 flex-grow">
                  {p.feat.map((f, j) => (
                    <li key={j} className="text-xs font-bold uppercase tracking-widest flex items-center gap-4">
                       <Check size={16} strokeWidth={3} className={p.textWhite ? 'text-[#FBBF24]' : 'text-[#E11D48]'} />
                       {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-5 font-black text-xs uppercase tracking-[0.3em] border-2 border-current hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] transition-all`}>
                  Execute Acquisition
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black uppercase italic tracking-[0.4em] text-center mb-24 underline decoration-[#E11D48] decoration-4 underline-offset-[20px]">Enquiries</h2>
          <div className="space-y-8 italic font-bold">
            {[
              { q: 'Is it functional?', a: 'Function precedes form. If it is not functional, it is not Bauhaus.' },
              { q: 'Why primary colors?', a: 'Primary colors are the building blocks of reality. We use nothing else.' },
              { q: 'Can I change the font?', a: 'The font is selected for its mathematical purity. Changing it breaks the system.' }
            ].map((faq, i) => (
              <div key={i} className="border-b-2 border-white/10 pb-10">
                <button 
                  className="w-full text-left flex justify-between items-center group mb-6"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-xl md:text-2xl uppercase tracking-tighter group-hover:text-[#FBBF24] transition-colors">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={24} strokeWidth={3} /> : <ChevronDown size={24} strokeWidth={3} />}
                </button>
                {openFaq === i && (
                  <p className="text-[#FFFBEB]/50 leading-tight uppercase tracking-widest text-xs">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 px-6 text-center border-t-8 border-[#2563EB] bg-[#FFFBEB]">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] mb-20 tracking-tighter">Unified <br />Aesthetic <br />Control.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
               <button className="px-16 py-8 bg-[#E11D48] text-white border-4 border-slate-900 font-black text-xl uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-[10px_10px_0px_rgba(0,0,0,1)]">
                  Begin Entry
               </button>
               <button className="px-16 py-8 bg-white text-slate-900 border-4 border-slate-900 font-black text-xl uppercase tracking-[0.2em] shadow-[10px_10px_0px_rgba(37,99,235,1)]">
                  The Documents
               </button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t-4 border-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[#FBBF24]/5 -skew-x-12 -z-10" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-8">
               <div className="flex gap-0.5">
                  <div className="w-4 h-4 bg-[#E11D48]" />
                  <div className="w-4 h-4 bg-[#2563EB]" />
                  <div className="w-4 h-4 bg-[#FBBF24]" />
               </div>
               <span className="text-sm font-black uppercase tracking-[0.5em] italic">Bauhaus.sys</span>
            </div>
            <p className="text-[10px] font-black italic uppercase leading-relaxed text-slate-400 max-w-xs mb-10 tracking-[0.2em]">
               Redefining the industrial landscape through geometric rationalism and functional purity. Since 1919.
            </p>
            <div className="flex gap-6">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"><Icon size={20} /></a>
                ))}
            </div>
          </div>
          
          {['Directory', 'Archive', 'Legal'].map((title, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-[#E11D48] underline decoration-slate-900 decoration-2 underline-offset-8">/{title}</h4>
              <ul className="space-y-4 font-black text-xs italic uppercase tracking-widest text-slate-500">
                {['Genesis', 'Protocols', 'Policy'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-slate-900 transition-colors uppercase">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t-2 border-slate-900/10 flex flex-col md:flex-row justify-between items-center gap-8 font-black text-[10px] tracking-[0.4em] uppercase text-slate-400">
           <p>© 2026 BAUHAUS SYSTEMS AG. INTERNATIONAL COOPERATION.</p>
           <div className="flex gap-10 italic">
              <span className="text-slate-900">Rational</span>
              <span>Objective</span>
              <span>Material</span>
           </div>
        </div>
      </footer>
    </div>
  );
};
