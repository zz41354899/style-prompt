import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Sparkles, Cloud, Zap, Shield, Globe, Lock, Activity
} from 'lucide-react';

export const S07Glassmorphism = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans antialiased selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[150px] animate-pulse delay-1000" />
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-pink-600/10 rounded-full blur-[80px]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto h-16 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-8 flex items-center justify-between shadow-2xl shadow-black/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Vitreous</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10">
              {['Features', 'Market', 'Pricing', 'Docs'].map((item) => (
                <span key={item} className="text-sm font-medium text-white/60 hover:text-white cursor-pointer transition-colors px-2">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-white/60 hover:text-white cursor-pointer">Login</span>
              <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-semibold rounded-full backdrop-blur-md transition-all">
                Enter App
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white/60">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="mt-4 mx-2 bg-white/10 backdrop-blur-3xl border border-white/10 p-8 rounded-[2rem] z-50 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-6 text-center">
              {['Features', 'Market', 'Pricing', 'Docs'].map((item) => (
                <span key={item} className="text-lg font-semibold">
                  {item}
                </span>
              ))}
              <hr className="border-white/5" />
              <button className="w-full px-6 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-40 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold text-blue-300 mb-10 shadow-xl">
            <Zap size={14} fill="currentColor" />
            <span>Introducing Glass Engine 2.0</span>
          </div>
          
          <h1 className={`font-black tracking-tight mb-8 leading-[1.05] ${isMobile ? 'text-5xl' : 'text-8xl'}`}>
            Lightweight <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Transparency
            </span>
          </h1>
          
          <p className={`text-white/50 mb-12 mx-auto leading-relaxed ${isMobile ? 'text-lg' : 'text-2xl max-w-3xl font-light'}`}>
            Experience the next dimension of interface design. We combine frosted glass aesthetics with high-performance operational integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-base font-bold rounded-2xl shadow-2xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              Get Unlimited Access
              <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 text-white text-base font-bold rounded-2xl hover:bg-white/10 transition-all shadow-xl">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Floating Cards Mockup */}
        <div className="max-w-5xl mx-auto mt-24 relative grid grid-cols-12 gap-8 px-6">
           <div className="col-span-12 lg:col-span-8 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-12 shadow-[0_32px_64px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl -z-10 group-hover:bg-blue-500/30 transition-colors" />
              <div className="flex flex-col h-full justify-between gap-12">
                 <div className="h-12 w-12 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center">
                    <Cloud className="text-white/60" size={24} />
                 </div>
                 <div>
                    <h3 className="text-3xl font-bold mb-4 italic">Operational Clarity</h3>
                    <p className="text-white/40 text-lg max-w-md font-medium">Transparent metrics and real-time observability at every layer of your stack.</p>
                 </div>
              </div>
           </div>
           
           <div className="col-span-12 lg:col-span-4 space-y-8">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-8 shadow-2xl hover:translate-y-[-8px] transition-transform flex flex-col items-center text-center">
                 <div className="w-14 h-14 bg-blue-500 rounded-full shadow-lg shadow-blue-500/20 mb-6 flex items-center justify-center">
                    <Shield size={24} className="text-white" />
                 </div>
                 <h4 className="font-bold mb-2">Encrypted</h4>
                 <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">End-to-End Protec</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 shadow-2xl">
                 <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 italic">Live Sync</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                 </div>
                 <div className="space-y-4">
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full w-[70%] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                    </div>
                    <div className="h-2 w-[60%] bg-white/5 rounded-full" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
             <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.9]">Crystalline <br />Performance.</h2>
             <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Globe, title: 'Global Edge', text: 'Distributed frosted glass architectures across 200+ edge nodes.' },
              { icon: Zap, title: 'Ultra Fast', text: 'Sub-millisecond rendering times with zero visual overhead.' },
              { icon: Lock, title: 'Secure Vault', text: 'Military-grade transparency for your most sensitive data assets.' }
            ].map((f, i) => (
              <div key={i} className="p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] hover:bg-white/10 hover:border-white/20 transition-all group">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                  <f.icon size={28} className="text-white/80" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-white/40 leading-relaxed font-medium">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Interactive */}
      <section className="py-32 px-6 bg-white/5 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
             <h2 className="text-5xl md:text-[6rem] font-bold tracking-tighter leading-[0.9] italic">Refracting <br />the Norm.</h2>
             <p className="text-xl text-white/50 leading-relaxed max-w-lg font-light">
                Why hide your functionality behind opaque walls? We believe in the beauty of seeing how things work under the glass.
             </p>
             <div className="space-y-4">
                {[
                  'Adaptive Translucency',
                  'Prismatic Light Effects',
                  'Dynamic Layer Stacking',
                  'Soft Shadow Occlusion'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all">
                       <Check size={20} className="text-white/40 group-hover:text-white" />
                    </div>
                    <span className="text-lg font-semibold tracking-tight text-white/60 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
             </div>
          </div>
          <div className="relative aspect-square">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[3rem] blur-2xl -z-10" />
             <div className="w-full h-full bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[4rem] p-16 flex items-center justify-center shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                <Activity size={160} strokeWidth={1} className="text-white/20 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute top-12 left-12 w-20 h-20 bg-white rounded-full blur-2xl opacity-20" />
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <div className="flex justify-center gap-1 text-blue-400 mb-12">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" className="drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />)}
           </div>
           <p className="text-3xl md:text-5xl font-light italic leading-tight text-white/80 mb-16">
              "The most beautiful design system I've ever deployed. It feels light as air yet robust as a diamond stack."
           </p>
           <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 p-1">
                 <div className="w-full h-full bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full" />
              </div>
              <div className="text-left font-sans italic">
                 <p className="font-bold text-white tracking-widest uppercase text-sm">Marcus Sterling</p>
                 <p className="text-white/40 text-xs font-semibold uppercase italic tracking-[0.2em] mt-1">Founding Partner, Glassly</p>
              </div>
           </div>
        </div>
      </section>

      {/* Pricing / Access Plans */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-5xl font-black italic tracking-tighter uppercase underline decoration-blue-500/20 underline-offset-[16px]">Subscription</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto font-sans">
            {[
              { name: 'Glimmer', price: '$0', desc: 'Entry level transparency for single projects.', accent: false },
              { name: 'Crystal', price: '$99', desc: 'The professional standard for refractive work.', accent: true },
              { name: 'Prism', price: '$499', desc: 'Enterprise deep-stack glass architecture.', accent: false }
            ].map((p, i) => (
              <div key={i} className={`p-1px rounded-[3rem] bg-gradient-to-b ${p.accent ? 'from-white/40 to-white/10' : 'from-white/10 to-transparent'}`}>
                <div className={`h-full p-12 rounded-[3rem] flex flex-col items-center text-center ${p.accent ? 'bg-[#141E33] shadow-2xl' : 'bg-white/5 backdrop-blur-xl'}`}>
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-10 text-blue-300">{p.name}</h3>
                  <div className="mb-10">
                    <span className="text-6xl font-black italic tracking-tighter tracking-widest">{p.price}</span>
                  </div>
                  <p className="text-white/40 text-sm mb-12 h-12 flex items-center font-medium italic underline decoration-white/10">{p.desc}</p>
                  <button className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 shadow-xl ${p.accent ? 'bg-blue-600 text-white shadow-blue-500/20 hover:scale-[1.02]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                    Acquire access
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto font-sans">
           <h2 className="text-sm font-black uppercase tracking-[0.5em] text-center mb-20 text-white/30 italic">Common Clarity</h2>
           <div className="space-y-4">
              {[
                 { q: 'Is it performance intensive?', a: 'Nope. We use hardware-accelerated CSS filters and optimized stacking contexts.' },
                 { q: 'Can I change the blur?', a: 'Yes, our blur tokens allow you to adjust the "frostiness" to your liking.' },
                 { q: 'Is it production ready?', a: 'Diamond-standard. Tested across 40+ browser engines for visual consistency.' }
              ].map((faq, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors">
                    <button 
                       className="w-full p-8 text-left flex justify-between items-center group"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-sm font-bold uppercase tracking-[0.3em]">{faq.q}</span>
                       <span className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}><ChevronDown size={20} /></span>
                    </button>
                    {openFaq === i && (
                       <div className="px-8 pb-8 text-white/40 text-xs italic font-semibold leading-relaxed uppercase tracking-widest animate-in slide-in-from-top-2">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 px-6 text-center relative overflow-hidden bg-white/5 rounded-[4rem] mx-4 mb-8 border border-white/10">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] -z-10" />
         <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none mb-16 uppercase">Clear <br />Horizon.</h2>
         <button className="px-16 py-6 bg-white text-slate-900 text-base font-black rounded-full shadow-2xl shadow-white/10 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest">
            Dive into Clarity
         </button>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 font-sans italic relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-10 h-10 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center">
                  <Sparkles size={20} className="text-white/60" />
               </div>
               <span className="text-xl font-bold tracking-tight text-white italic not-italic">Vitreous</span>
            </div>
            <p className="text-xs font-bold text-white/30 max-w-xs leading-relaxed uppercase tracking-[0.2em] mb-12">
               Redefining visual depth through translucent architectures and refractive operational logic.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 hover:text-white transition-all text-white/40"><Icon size={20} /></a>
              ))}
            </div>
          </div>
          
          {['Lab', 'Core', 'Legal'].map((title, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 text-blue-400">{title}</h4>
              <ul className="space-y-4">
                {['Assets', 'Protocol', 'Privacy'].map((item) => (
                  <li key={item}><a href="#" className="text-[10px] text-white/30 hover:text-white uppercase tracking-[0.2em] transition-colors font-bold not-italic">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] font-black not-italic text-white/20">
          <p>© 2026 VITREOUS DESIGN LABS. ALL TRANSPARENCY MAINTAINED.</p>
          <div className="flex items-center gap-8 italic">
            <span>Refract</span>
            <div className="w-1 h-1 bg-white/10 rounded-full" />
            <span>Reflect</span>
            <div className="w-1 h-1 bg-white/10 rounded-full" />
            <span className="text-blue-400 opacity-100">Reveal</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
