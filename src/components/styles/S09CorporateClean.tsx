import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  Building2, Users, FileText, BarChart3, ShieldCheck, Globe2,
  Mail, Phone, MapPin, ExternalLink, Cloud
} from 'lucide-react';

export const S09CorporateClean = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-blue-600/10 selection:text-blue-700 overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-md shadow-blue-200 transition-transform group-hover:scale-105">
              <Building2 size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 uppercase">CorpSync</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10">
              {['Solutions', 'Enterprise', 'Scale', 'About'].map((item) => (
                <span key={item} className="text-sm font-semibold text-slate-500 hover:text-blue-600 cursor-pointer transition-colors px-1">
                  {item}
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-6">
              <span className="text-sm font-semibold text-slate-500 hover:text-slate-900 cursor-pointer">Support</span>
              <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                Contact Sales
              </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-500">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 p-8 z-50 shadow-xl transition-all duration-300">
            <div className="flex flex-col gap-6 font-semibold">
              {['Solutions', 'Enterprise', 'Scale', 'About'].map((item) => (
                <span key={item} className="text-slate-700 hover:text-blue-600">
                  {item}
                </span>
              ))}
              <hr className="border-slate-100" />
              <button className="w-full px-6 py-4 bg-blue-600 text-white font-bold rounded shadow-lg">
                Talk to an Expert
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded text-xs font-bold text-blue-700 mb-8 border border-blue-100">
               <ShieldCheck size={14} />
               <span>ISO 27001 Certified Enterprise Solution</span>
            </div>
            
            <h1 className={`font-extrabold tracking-tight text-slate-900 mb-8 leading-tight ${isMobile ? 'text-4xl' : 'text-6xl'}`}>
              Reliability is the <br />
              <span className="text-blue-600">Foundation</span> of Scale.
            </h1>
            
            <p className={`text-slate-500 mb-10 leading-relaxed ${isMobile ? 'text-lg' : 'text-xl max-w-xl font-medium'}`}>
              Bridge the gap between operational complexity and high-speed growth. Our unified platform provides the security, visibility, and control that world-class enterprises demand.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-black text-white text-base font-bold rounded shadow-xl shadow-slate-200 transition-all flex items-center justify-center gap-3">
                Request a Demo
                <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-100 text-slate-700 text-base font-bold rounded transition-all hover:bg-slate-50 hover:border-slate-200">
                View Solutions
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 opacity-40">
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Trusted by Fortune 500</span>
               <div className="h-px bg-slate-200 flex-grow" />
            </div>
          </div>

          <div className="relative group">
             <div className="absolute inset-0 bg-blue-600/5 rounded-3xl -z-10 translate-x-4 translate-y-4" />
             <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 aspect-[4/3] shadow-inner relative overflow-hidden">
                <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-6 w-full h-full">
                   <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                         <div className="w-4 h-4 bg-blue-500 rounded-full" />
                         <span className="text-sm font-bold opacity-60">System Dashboard</span>
                      </div>
                      <div className="h-6 w-24 bg-slate-50 rounded" />
                   </div>
                   <div className="grid grid-cols-2 gap-6 h-full">
                      <div className="space-y-4">
                         <div className="h-32 bg-slate-50 rounded-lg flex items-center justify-center p-4">
                            <BarChart3 className="text-blue-500 opacity-20 w-full h-full" />
                         </div>
                         <div className="h-20 bg-slate-50 rounded-lg" />
                      </div>
                      <div className="space-y-4">
                         <div className="h-12 bg-blue-600 rounded-lg opacity-10" />
                         <div className="h-12 bg-slate-50 rounded-lg" />
                         <div className="h-12 bg-slate-50 rounded-lg" />
                         <div className="h-12 bg-slate-50 rounded-lg" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-12 text-center md:text-left">
           {[
             { label: 'Uptime SLA', value: '99.99%' },
             { label: 'Enterprise Clients', value: '2,400+' },
             { label: 'Managed Assets', value: '$45B+' },
             { label: 'Support Speed', value: '<2 min' }
           ].map((stat, i) => (
             <div key={i} className="space-y-1">
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 italic">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 italic underline decoration-blue-600 decoration-4 underline-offset-8">Engineered for Reliability.</h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed font-sans">
               We provide a unified architecture that eliminates silos and reduces the friction between idea and implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Compliance Ready', text: 'Pre-configured workflows that meet HIPAA, SOC2, and GDPR standards.' },
              { icon: Users, title: 'Team Governance', text: 'Granular RBAC and SSO integration with your existing identity providers.' },
              { icon: FileText, title: 'Strategic Audit', text: 'Every change, every request, every access is logged and archived for review.' },
              { icon: BarChart3, title: 'Advanced Analytics', text: 'Visualize operational bottlenecks with deep-learning powered insights.' },
              { icon: Globe2, title: 'Global Presence', text: 'Redundant infrastructure across multiple regions for absolute continuity.' },
              { icon: Cloud, title: 'Hybrid Deploy', text: 'Seamlessly bridge your on-premise hardware with cloud-native solutions.' }
            ].map((f, i) => (
              <div key={i} className="p-8 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="w-12 h-12 bg-slate-50 text-blue-600 rounded flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-100 shadow-sm">
                  <f.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium font-sans italic">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Professional */}
      <section className="py-24 px-6 bg-slate-100/50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">Structured for <br />Tomorrow's Challenges.</h2>
             <p className="text-lg text-slate-500 leading-relaxed max-w-lg font-medium italic underline decoration-blue-200 underline-offset-4">
                We believe that the best solutions are the ones that work silently in the background, allowing your team to focus on innovation.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { t: 'Security First', d: 'Encrypted by default logic.' },
                  { t: 'Managed Growth', d: 'Predictable cost modeling.' },
                  { t: 'API Ecosystem', d: 'Full SDK integration kits.' },
                  { t: 'Expert Support', d: '24/7 dedicated assistance.' }
                ].map((item, i) => (
                  <div key={i} className="space-y-3 p-4 bg-white border border-slate-200 rounded shadow-sm hover:shadow transition-shadow">
                    <div className="h-1 w-10 bg-blue-500 rounded-full" />
                    <p className="font-bold text-slate-900 text-sm tracking-tight">{item.t}</p>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{item.d}</p>
                  </div>
                ))}
             </div>
             <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform flex items-center gap-3">
                Download Infrastructure Whitepaper
                <ExternalLink size={16} />
             </button>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-blue-600/10 blur-[120px] -z-10" />
             <div className="bg-white border-2 border-slate-200 rounded-2xl p-10 shadow-2xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -z-10 -mr-16 -mt-16 rotate-45 border border-slate-200" />
                <div className="flex flex-col gap-6">
                   <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                      <div className="w-12 h-12 bg-blue-50 rounded-full border border-blue-100 flex items-center justify-center text-blue-600">
                         <Star size={24} fill="currentColor" />
                      </div>
                      <div>
                         <p className="text-lg font-bold">Premier Partnership</p>
                         <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Available Level 5</p>
                      </div>
                   </div>
                   <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex justify-between items-center text-sm font-semibold">
                           <span className="text-slate-500 italic uppercase tracking-widest text-[10px]">Registry_v04.sys</span>
                           <span className="text-green-600 border border-green-100 bg-green-50 px-2 py-0.5 rounded text-[10px] shadow-sm uppercase">Active</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
           <div className="flex justify-center gap-1 text-slate-300">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" className="text-blue-600/20" />)}
           </div>
           <p className="text-2xl md:text-3xl font-bold italic leading-relaxed text-slate-700">
              "The transition to CorpSync was the single most impactful operational decision we made this fiscal year. The reliability gain is immeasurable."
           </p>
           <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-24 bg-slate-100 rounded border border-slate-200 flex items-center justify-center grayscale opacity-60">
                 <Building2 className="text-slate-400" />
              </div>
              <div>
                 <p className="font-bold text-slate-900 tracking-tight uppercase">Arthur Richardson</p>
                 <p className="text-xs font-bold uppercase tracking-widest text-slate-400 italic">Chief Operating Officer, Zenith Global</p>
              </div>
           </div>
        </div>
      </section>

      {/* Tiers / Pricing */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-3xl font-bold uppercase tracking-widest text-slate-400 italic mb-4">The Commitment</h2>
             <div className="h-1 w-12 bg-blue-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xl shadow-slate-200/50">
            {[
              { name: 'Core', price: 'Free', sub: 'For small teams.', accent: false },
              { name: 'Enterprise', price: '$12k', sub: 'Starting per year.', accent: true },
              { name: 'Government', price: 'Custom', sub: 'Highly secure nodes.', accent: false }
            ].map((p, i) => (
              <div key={i} className={`p-16 text-center flex flex-col border-b md:border-b-0 md:border-r border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors ${p.accent ? 'bg-blue-600/5 relative' : ''}`}>
                {p.accent && <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-600" />}
                <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-12 italic text-slate-500">{p.name} / 月</h3>
                <div className="mb-12">
                  <span className="text-5xl font-bold tracking-tight">{p.price}</span>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-16 h-8 italic underline decoration-blue-100 underline-offset-8">{p.sub}</p>
                <button className={`w-full py-5 rounded font-bold text-xs uppercase tracking-[0.3em] transition-all ${p.accent ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20' : 'bg-slate-900 text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
           <h2 className="text-xs font-black uppercase tracking-[0.5em] text-center text-slate-400 italic mb-12">Registry Inquiry</h2>
           <div className="space-y-4">
              {[
                 { q: 'What is the implementation timeline?', a: 'Standard deployment takes 2-4 weeks, depending on existing infrastructure complexity.' },
                 { q: 'Is customer data isolated?', a: 'Yes, we follow a single-tenant architecture by default for Enterprise clusters.' },
                 { q: 'What kind of support is provided?', a: 'All Enterprise clients receive a dedicated Success Manager and 15-minute SLA on Priority 1 tickets.' }
              ].map((faq, i) => (
                 <div key={i} className="border border-slate-200 rounded shadow-sm overflow-hidden group">
                    <button 
                       className="w-full p-8 text-left flex justify-between items-center bg-slate-50/20 group-hover:bg-slate-50 transition-colors"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-700">{faq.q}</span>
                       <span className="text-slate-400">{openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
                    </button>
                    {openFaq === i && (
                       <div className="px-8 pb-8 text-xs italic font-semibold text-slate-500 leading-relaxed uppercase tracking-widest border-t border-slate-100 pt-6 animate-in slide-in-from-top-2 duration-300">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 text-center bg-slate-900 text-white relative overflow-hidden font-sans">
         <div className="absolute top-0 left-0 w-full h-[200%] bg-blue-600/10 -z-10 translate-y-[-50%] blur-[120px] rounded-full" />
         <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-12">Modernize your <br />Enterprise Core.</h2>
         <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-12 py-5 bg-blue-600 text-white text-base font-bold rounded shadow-2xl shadow-blue-500/10 hover:bg-blue-500 transition-all uppercase tracking-widest">
               Talk to an Expert
            </button>
            <button className="px-12 py-5 bg-white/10 text-white backdrop-blur-md border border-white/20 text-base font-bold rounded hover:bg-white/20 transition-all uppercase tracking-widest">
               Explore Solutions
            </button>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <Building2 size={18} className="text-white" />
               </div>
               <span className="text-xl font-bold tracking-tight text-slate-900 uppercase italic underline decoration-blue-600 decoration-2 underline-offset-4">CorpSync</span>
            </div>
            <p className="text-[10px] font-bold text-slate-400 max-w-xs leading-relaxed uppercase tracking-[0.2em] mb-12">
               Enterprise-grade infrastructure solutions built for the world's most demanding organizations. 
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-slate-200 rounded flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all"><Icon size={18} /></a>
              ))}
            </div>
          </div>
          
          {['Registry', 'Enterprise', 'Support'].map((title, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-blue-600 underline decoration-slate-200 underline-offset-8 transition-all hover:decoration-blue-600">{title}</h4>
              <ul className="space-y-4">
                {['Direct Line', 'Audit Log', 'Legal'].map((item) => (
                  <li key={item}><a href="#" className="text-[10px] text-slate-400 hover:text-slate-900 uppercase tracking-[0.2em] transition-colors font-bold">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] font-black text-slate-400">
           <p>© 2026 CORPSYNC WORLDWIDE. ALL RIGHTS RESERVED.</p>
           <div className="flex gap-8 italic font-bold">
              <span>Security</span>
              <span>Continuity</span>
              <span className="text-blue-600">Scale</span>
           </div>
        </div>
      </footer>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-in-top {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
          animation: slide-in-top 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
};
