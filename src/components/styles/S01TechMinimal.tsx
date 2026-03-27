import { useState } from 'react';
import { 
  Shield, Zap, ArrowRight, Activity, Server, Globe, Menu, X, Check, 
  Star, Code, Cpu, Lock, ChevronDown, ChevronUp, Github, Twitter, Linkedin,
  Cloud, Terminal, ZapOff, Sparkles, MoveRight
} from 'lucide-react';

export const S01TechMinimal = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[100px] opacity-40" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 relative group cursor-pointer">
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200 group-hover:rotate-6 transition-transform">
              <Server size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">TechFlow</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-8">
              {['Features', 'Developers', 'Pricing', 'Company'].map((item) => (
                <span key={item} className="text-sm font-medium text-slate-500 hover:text-blue-600 cursor-pointer transition-colors">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-slate-500 hover:text-slate-900 cursor-pointer">Sign in</span>
              <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-200 transition-all hover:scale-105 active:scale-95">
                Start for free
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-900">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-100 p-8 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-6">
              {['Features', 'Developers', 'Pricing', 'Company'].map((item) => (
                <span key={item} className="text-lg font-semibold text-slate-900">
                  {item}
                </span>
              ))}
              <hr className="border-slate-50" />
              <button className="w-full px-6 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-100">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full text-xs font-bold text-blue-700 mb-10 border border-blue-100 animate-bounce-subtle">
            <Sparkles size={14} />
            <span>Introducing TechFlow Global v2.0</span>
          </div>
          
          <h1 className={`font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.05] ${isMobile ? 'text-5xl' : 'text-[5.5rem]'}`}>
            The backbone of <br />
            <span className="text-blue-600 relative inline-block">
              modern engineering
              <div className="absolute bottom-4 left-0 w-full h-3 bg-blue-100/50 -z-10 blur-sm" />
            </span>
          </h1>
          
          <p className={`text-slate-500 mb-12 mx-auto leading-relaxed ${isMobile ? 'text-lg' : 'text-xl max-w-2xl'}`}>
            Deploy, monitor, and scale your applications with unprecedented speed. Built for engineers who value precision and reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="group w-full sm:w-auto px-10 py-5 bg-slate-900 text-white text-base font-bold rounded-2xl shadow-2xl shadow-slate-300 transition-all hover:bg-black hover:translate-y-[-2px] flex items-center justify-center gap-3">
              Start Building
              <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 text-base font-bold rounded-2xl transition-all hover:bg-slate-50 flex items-center justify-center gap-2">
              Read Documentation
              <Terminal size={18} className="opacity-40" />
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto mt-20 relative">
          <div className="absolute bg-blue-600/10 blur-[100px] inset-0 -z-10 rounded-full" />
          <div className="aspect-[16/10] bg-white rounded-3xl border border-slate-200 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.08)] overflow-hidden relative group">
             {/* Abstract UI Elements */}
             <div className="absolute top-0 left-0 right-0 h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
             </div>
             <div className="pt-14 p-8 grid grid-cols-12 gap-8 h-full">
                <div className="col-span-3 space-y-4">
                   <div className="h-6 w-full bg-slate-100 rounded-lg animate-pulse" />
                   <div className="h-32 w-full bg-blue-50 rounded-xl" />
                   <div className="h-20 w-full bg-slate-50 rounded-xl" />
                </div>
                <div className="col-span-9 space-y-8">
                   <div className="h-12 w-1/2 bg-slate-100 rounded-xl" />
                   <div className="grid grid-cols-3 gap-6 h-64">
                      <div className="bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center">
                         <Activity className="text-blue-500 opacity-20" size={48} />
                      </div>
                      <div className="bg-slate-50 rounded-2xl border border-slate-100" />
                      <div className="bg-slate-50 rounded-2xl border border-slate-100" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Engineered for the future.</h2>
            <p className="text-slate-500 text-lg max-w-xl">Everything you need to ship products faster without the operational overhead.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cloud, title: 'Global Edge', text: 'Sub-30ms latency across 120+ edge locations worldwide.' },
              { icon: Shield, title: 'Ironclad Security', text: 'End-to-end encryption and automated threat detection.' },
              { icon: Cpu, title: 'Auto-scaling', text: 'Scale with zero configuration as your traffic grows.' },
              { icon: Code, title: 'API-first', text: 'Full programmatic control over every infrastructure detail.' },
              { icon: Activity, title: 'Live Monitoring', text: 'Real-time observability into every request and error.' },
              { icon: Lock, title: 'RBAC Control', text: 'Granular permissions for enterprise-level teams.' }
            ].map((f, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
                <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <f.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 text-yellow-500 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-12 italic">
            "TechFlow has completely redefined our developer experience. We've seen a 40% increase in deployment velocity since making the switch."
          </p>
          <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">JD</div>
             <div className="text-left">
                <p className="font-bold text-slate-900">Jane Doe</p>
                <p className="text-sm text-slate-500 font-medium">Head of Engineering, Unicorn AI</p>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
           <h2 className="text-4xl font-bold tracking-tight mb-4">Transparent Pricing</h2>
           <p className="text-slate-500 text-lg">Start for free and scale with your growth.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { name: 'Starter', price: '$0', feat: ['3 Projects', 'Community Support', 'Basic Metrics'] },
             { name: 'Professional', price: '$49', feat: ['Unlimited Projects', 'Priority Support', 'Advanced Analytics'], popular: true },
             { name: 'Enterprise', price: 'Custom', feat: ['Custom SLA', 'Dedicated Success Rep', 'Dedicated Infrastructure'] }
           ].map((p, i) => (
             <div key={i} className={`p-10 rounded-3xl border ${p.popular ? 'border-blue-600 shadow-2xl shadow-blue-100 relative bg-white' : 'border-slate-100 bg-slate-50/50'}`}>
                {p.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] uppercase font-black px-4 py-1.5 rounded-full">
                    Recommended
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="mb-8">
                   <span className="text-4xl font-bold">{p.price}</span>
                   <span className="text-slate-500 text-xs font-bold uppercase ml-1">/ mo</span>
                </div>
                <ul className="space-y-4 mb-10 text-left">
                   {p.feat.map((f, j) => (
                     <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                        <Check size={16} className="text-blue-600" />
                        {f}
                     </li>
                   ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${p.popular ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'}`}>
                   Choose {p.name}
                </button>
             </div>
           ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-slate-900 text-white rounded-[4rem] mx-4 my-8 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Got Questions?</h2>
          <div className="space-y-4">
            {[
              { q: 'Is there a long-term contract?', a: 'No, all plans are month-to-month and can be cancelled at any time.' },
              { q: 'Can I migrate my existing servers?', a: 'Yes, our migration tool handles 90% of the heavy lifting automatically.' },
              { q: 'What is your uptime guarantee?', a: 'We guarantee 99.99% uptime for all Professional and Enterprise customers.' }
            ].map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm">
                <button 
                  className="w-full p-8 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-lg font-bold">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 text-slate-400 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
         <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-10 text-slate-900">Scale faster on <br />TechFlow.</h2>
         <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-2xl shadow-blue-200 hover:scale-105 transition-transform">
               Get Started for Free
            </button>
            <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-colors">
               Contact Support
            </button>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <Server size={16} className="text-white" />
               </div>
               <span className="text-lg font-bold tracking-tight text-slate-900">TechFlow</span>
            </div>
            <p className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed">
              Accelerating global software delivery through precision infrastructure.
            </p>
            <div className="flex gap-4 mt-8">
               {[Twitter, Github, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all"><Icon size={18} /></a>
               ))}
            </div>
          </div>
          
          {['Product', 'Resources', 'Legal'].map((title, i) => (
            <div key={i}>
              <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-4">
                {['Features', 'Documentation', 'Privacy'].map((item) => (
                  <li key={item}><a href="#" className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
          <p>© 2026 TECHFLOW INC. ALL SYSTEMS NOMINAL.</p>
          <div className="flex items-center gap-2 text-slate-900">
            <Zap size={14} className="text-blue-600" />
            <span>Built by engineers, for engineers</span>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};
