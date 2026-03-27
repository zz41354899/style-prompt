import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Zap, Rocket, Target, Users, BarChart3,
  Globe, Layout, Smartphone, Play, Sparkles
} from 'lucide-react';

export const S25Startup = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#6366F1] selection:text-white overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .bento-card {
          background: white;
          border-radius: 24px;
          border: 1px solid rgba(99, 102, 241, 0.1);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.02), 0 4px 6px -4px rgba(0, 0, 0, 0.02);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.05), 0 8px 10px -6px rgba(99, 102, 241, 0.05);
          border-color: rgba(99, 102, 241, 0.3);
        }
        .startup-gradient {
          background: linear-gradient(135deg, #6366F1 0%, #A855F7 100%);
        }
        .gradient-text {
          background: linear-gradient(135deg, #6366F1 0%, #A855F7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto space-y-20 relative p-4 md:p-8">
        {/* Navigation */}
        <header className="flex items-center justify-between py-6 px-8 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[28px] shadow-sm relative z-50">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl startup-gradient flex items-center justify-center transform group-hover:rotate-12 transition-transform">
               <Zap size={22} className="text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#1E293B]">Launch.io</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 text-[13px] font-semibold text-[#64748B]">
              {['Product', 'Integrations', 'Pricing', 'Docs'].map((item) => (
                <span key={item} className="hover:text-[#6366F1] cursor-pointer transition-colors">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-4">
               <button className="px-6 py-2.5 text-[13px] font-semibold text-[#64748B] hover:text-[#6366F1] transition-colors">
                  Login
               </button>
               <button className="px-6 py-2.5 startup-gradient text-white text-[13px] font-bold rounded-xl shadow-lg shadow-indigo-500/20 hover:scale-105 transition-transform active:scale-95">
                  Get Started
               </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#64748B]">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-white border border-indigo-50 p-10 z-[100] relative rounded-[32px] shadow-2xl space-y-10 animate-in fade-in zoom-in duration-300">
             <div className="flex flex-col gap-6 text-xl font-bold text-[#1E293B]">
                {['Products', 'Solutions', 'Pricing', 'Community'].map((item) => (
                   <span key={item} className="px-4 py-2 hover:bg-indigo-50 rounded-xl transition-colors">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-4 startup-gradient text-white rounded-2xl font-bold shadow-xl">
                Start Trial
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="text-center space-y-12 py-16 relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-[600px] bg-indigo-500/5 blur-[120px] rounded-full" />
           
           <div className="space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-4 group cursor-pointer hover:bg-indigo-100 transition-colors">
                 <Sparkles size={14} className="text-[#6366F1] animate-sparkle" />
                 <span className="text-[12px] font-bold text-[#6366F1]">New: Version 4.0 is here</span>
                 <ArrowRight size={14} className="text-[#6366F1] group-hover:translate-x-1 transition-transform" />
              </div>
              
              <h1 className={`font-black leading-[1.05] tracking-tight text-[#0F172A] ${isMobile ? 'text-5xl' : 'text-[6.5rem]'}`}>
                Ship your ideas <br /> 
                <span className="gradient-text">faster than ever.</span>
              </h1>
              
              <p className={`text-[#64748B] font-medium leading-relaxed max-w-2xl mx-auto ${isMobile ? 'text-lg px-4' : 'text-2xl'}`}>
                The ultimate development platform for modern teams. Build, deploy, and scale without thinking about infrastructure.
              </p>
           </div>
           
           <div className="flex flex-wrap justify-center gap-6 pt-6">
              <button className="px-10 py-5 startup-gradient text-white text-lg font-bold rounded-2xl shadow-2xl shadow-indigo-500/25 hover:scale-105 transition-transform active:scale-95 flex items-center gap-3">
                 Start Shipping Free
                 <Rocket size={20} />
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-[#0F172A] text-lg font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-sm flex items-center gap-3">
                 <Play size={20} fill="currentColor" />
                 Watch Demo
              </button>
           </div>

           {/* Brand Logos Placeholder */}
           <div className="pt-24 opacity-40">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#64748B] mb-10">Trusted by the next generation</p>
              <div className="flex flex-wrap justify-center gap-12 md:gap-24 grayscale brightness-50">
                 {['ZEPHYR', 'QUARK', 'VERTEX', 'OMNI', 'NEON'].map(brand => (
                    <span key={brand} className="text-2xl font-black tracking-tighter transition-all hover:grayscale-0 hover:brightness-100 cursor-default">{brand}</span>
                 ))}
              </div>
           </div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-6 px-4">
           {/* Main Card */}
           <div className="md:col-span-8 bento-card p-12 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 -mr-20 -mt-20 rounded-full group-hover:scale-150 transition-transform duration-1000" />
              <div className="relative z-10 space-y-6">
                 <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-[#6366F1]">
                    <BarChart3 size={28} />
                 </div>
                 <h3 className="text-4xl font-bold tracking-tight">Real-time Analytics</h3>
                 <p className="text-lg text-[#64748B] max-w-sm font-medium">Deep insights into every user interaction, optimized for speed and clarity.</p>
              </div>
              <div className="relative z-10 pt-10 flex gap-4">
                 <div className="h-2 w-32 bg-indigo-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-3/4 animate-shimmer" />
                 </div>
              </div>
           </div>

           {/* Small Card */}
           <div className="md:col-span-4 bento-card p-10 bg-[#0F172A] text-white border-none group">
              <div className="space-y-6 h-full flex flex-col justify-between">
                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:rotate-45 transition-transform">
                    <Target size={28} />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold mb-3">Global Edge</h3>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">Deploy to 32 regions instantly with 100% automated CI/CD pipelines.</p>
                 </div>
              </div>
           </div>

           {/* Small Card 2 */}
           <div className="md:col-span-4 bento-card p-10 group bg-indigo-50/50 border-indigo-100">
              <div className="space-y-6">
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#6366F1]">
                    <Users size={28} />
                 </div>
                 <h3 className="text-2xl font-bold">Team Focused</h3>
                 <p className="text-[#64748B] text-sm font-medium leading-relaxed">Built-in collaboration tools for seamless handoffs and reviews.</p>
              </div>
           </div>

           {/* Medium Card */}
           <div className="md:col-span-8 bento-card p-10 lg:p-12 group flex items-center justify-between">
              <div className="space-y-6 max-w-md">
                 <h3 className="text-3xl font-bold tracking-tight">Enterprise Infrastructure</h3>
                 <p className="text-slate-500 font-medium">Scalable architecture designed to handle billions of requests without flickering.</p>
                 <button className="flex items-center gap-2 text-[#6366F1] font-bold group-hover:translate-x-2 transition-transform">
                    Explore API Docs <ArrowRight size={18} />
                 </button>
              </div>
              {!isMobile && (
                <div className="w-48 h-32 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center animate-float">
                   <Layout size={40} className="text-slate-300" />
                </div>
              )}
           </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-24 text-center px-4">
           <div className="space-y-6 mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to scale?</h2>
              <p className="text-[#64748B] text-xl font-medium">Simple, transparent pricing for teams of all sizes.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'STARTER', price: '$0', desc: 'For side projects and learning.' },
              { name: 'PRO', price: '$29', desc: 'For growing teams and products.', featured: true },
              { name: 'ENTERPRISE', price: '$99', desc: 'For high-scale mission critical apps.' }
            ].map((p, i) => (
              <div key={i} className={`p-10 bento-card flex flex-col items-center gap-10 border-2 ${p.featured ? 'border-[#6366F1] shadow-2xl scale-[1.03] z-10' : 'border-transparent'}`}>
                 <div className="space-y-2">
                    <h4 className="text-[12px] font-black uppercase tracking-widest text-[#64748B]">{p.name}</h4>
                    <div className="flex items-baseline justify-center gap-1">
                       <span className="text-6xl font-black tracking-tight">{p.price}</span>
                       <span className="text-slate-400 font-bold">/mo</span>
                    </div>
                 </div>
                 <p className="text-[#64748B] font-medium text-sm leading-relaxed h-12">{p.desc}</p>
                 <div className="w-full h-[1px] bg-slate-100" />
                 <ul className="space-y-4 text-sm font-bold text-slate-500 w-full text-left h-40">
                    <li className="flex items-center gap-3"><Check size={18} className="text-indigo-500" /> 10 Personal Projects</li>
                    <li className="flex items-center gap-3"><Check size={18} className="text-indigo-500" /> Community Support</li>
                    <li className="flex items-center gap-3"><Check size={18} className="text-indigo-500" /> Edge Functions (Basic)</li>
                    {p.featured && <li className="flex items-center gap-3"><Check size={18} className="text-indigo-500" /> Team Collaboration</li>}
                 </ul>
                 <button className={`w-full py-4 rounded-xl font-bold transition-all ${p.featured ? 'startup-gradient text-white shadow-xl' : 'bg-slate-100 text-[#0F172A] hover:bg-slate-200'}`}>
                    Choose Plan
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* Clean Startup FAQ */}
        <section className="py-24 max-w-4xl mx-auto space-y-12 px-4">
           <h2 className="text-center text-4xl font-bold tracking-tight">Questions?</h2>
           <div className="space-y-6">
              {[
                { q: 'Is there a free trial for Pro?', a: 'Yes! We offer a 14-day free trial for all new teams on the Pro plan. No credit card required.' },
                { q: 'What happens if we scale quickly?', a: 'Our auto-scaling architecture handles traffic spikes instantly without manual intervention.' },
                { q: 'Can we self-host?', a: 'While we recommend our optimized cloud, we offer a dedicated Private Instance for enterprise customers.' }
              ].map((faq, i) => (
                 <div key={i} className="bento-card p-8 group cursor-pointer hover:border-indigo-200">
                    <button 
                       className="w-full flex justify-between items-center text-left"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-xl font-bold text-[#1E293B] group-hover:text-[#6366F1] transition-colors">{faq.q}</span>
                       <ChevronDown size={20} className={`text-slate-300 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                       <div className="pt-6 font-medium text-[#64748B] leading-relaxed animate-in fade-in duration-500">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 border-t border-slate-200 text-center space-y-20">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-16">
              <div className="col-span-1 md:col-span-1 space-y-6">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg startup-gradient flex items-center justify-center">
                       <Zap size={18} className="text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tighter">Launch.io</span>
                 </div>
                 <p className="text-sm text-[#64748B] font-medium leading-relaxed">Making modern development accessible to every team on the planet.</p>
              </div>
              
              {['Features', 'Resource', 'Company'].map(group => (
                 <div key={group} className="space-y-6">
                    <h5 className="text-[12px] font-black uppercase tracking-widest">{group}</h5>
                    <ul className="space-y-4 text-sm font-semibold text-[#64748B]">
                       <li className="hover:text-[#6366F1] cursor-pointer">Components</li>
                       <li className="hover:text-[#6366F1] cursor-pointer">Templates</li>
                       <li className="hover:text-[#6366F1] cursor-pointer">Change Log</li>
                    </ul>
                 </div>
              ))}
           </div>
           
           <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[12px] font-bold text-[#64748B] uppercase tracking-widest">
              <p>© 2026 LAUNCH IND. ALL RELEASES REGISTERED.</p>
              <div className="flex gap-8">
                 <Twitter size={20} className="hover:text-[#6366F1] cursor-pointer transition-colors" />
                 <Github size={20} className="hover:text-[#6366F1] cursor-pointer transition-colors" />
                 <Linkedin size={20} className="hover:text-[#6366F1] cursor-pointer transition-colors" />
              </div>
           </div>
        </footer>
      </div>
    </div>
  );
};
