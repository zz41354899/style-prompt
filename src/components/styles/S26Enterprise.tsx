import { useState } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  ShieldCheck, BarChart2, Globe2, Building2, Users2,
  Lock, ArrowUpRight, PlayCircle, Layers
} from 'lucide-react';

export const S26Enterprise = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isMobile = deviceMode === 'mobile';

  return (
    <div className="min-h-screen bg-white text-[#1e293b] font-sans antialiased selection:bg-[#2563eb] selection:text-white overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .enterprise-gradient {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        }
        .data-grid {
          background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.2;
        }
        .pro-shadow {
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
        }
        .pro-border {
          border: 1px solid #e2e8f0;
        }
        @keyframes shimmer-slow {
          from { background-position: 200% 0; }
          to { background-position: -200% 0; }
        }
        .animate-shimmer-pro {
          background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.05), transparent);
          background-size: 200% 100%;
          animation: shimmer-slow 8s linear infinite;
        }
      `}} />

      {/* Corporate Grid */}
      <div className="fixed inset-0 data-grid pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10 p-0 md:p-8">
        {/* Navigation */}
        <header className="flex items-center justify-between py-5 px-10 bg-white border-b border-slate-200 md:rounded-2xl pro-shadow relative z-50">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 bg-[#0f172a] rounded flex items-center justify-center p-2 group-hover:bg-[#2563eb] transition-colors">
               <Building2 size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#0f172a]">Nexus Corp</span>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 text-[13px] font-semibold text-slate-500">
              {['Solutions', 'Services', 'Industry', 'Investors'].map((item) => (
                <span key={item} className="hover:text-[#2563eb] cursor-pointer transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#2563eb] group-hover:w-full transition-all duration-300" />
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-5">
               <div className="flex items-center gap-2 text-[12px] font-bold text-slate-400">
                  <Globe2 size={14} />
                  ENG (US)
               </div>
               <button className="px-6 py-2.5 bg-[#0f172a] text-white text-[13px] font-bold rounded hover:bg-slate-800 transition-colors">
                  Contact Sales
               </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-500">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-white border-b border-slate-200 p-12 z-[100] relative space-y-12 animate-in slide-in-from-top-4 duration-300">
             <div className="flex flex-col gap-6 text-xl font-bold text-[#0f172a]">
                {['Solutions', 'Infrastructure', 'About Nexus'].map((item) => (
                   <span key={item} className="border-b border-slate-50 pb-4">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full py-5 bg-[#0f172a] text-white rounded font-bold uppercase tracking-widest text-xs">
                Request Briefing
             </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 px-6 items-center">
           <div className="lg:col-span-12 relative mb-12">
              <div className="h-[1px] w-full bg-slate-200" />
           </div>
           
           <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 bg-slate-100 rounded px-3 py-1">
                 <ShieldCheck size={14} className="text-[#2563eb]" />
                 <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Soc2 Type II Certified Ecosystem</span>
              </div>
              
              <h1 className={`font-black leading-[1.05] tracking-tight text-[#0f172a] ${isMobile ? 'text-5xl text-center' : 'text-8xl'}`}>
                Scale with <br /> 
                <span className="text-[#2563eb]">Confidence.</span>
              </h1>
              
              <p className={`text-slate-500 font-medium leading-relaxed max-w-xl ${isMobile ? 'text-lg text-center' : 'text-xl md:text-2xl'}`}>
                The infrastructure of choice for 92% of the Fortune 500. Secure, performant, and built for the modern enterprise.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4 justify-center lg:justify-start">
                 <button className="px-10 py-5 bg-[#0f172a] text-white text-lg font-bold rounded hover:bg-slate-800 transition-colors shadow-xl flex items-center gap-4 group">
                    Deploy Solution
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                 </button>
                 <button className="px-10 py-5 bg-white border border-slate-300 text-slate-700 text-lg font-bold rounded hover:bg-slate-50 transition-all pro-shadow flex items-center gap-3 font-sans">
                    <PlayCircle size={22} className="text-slate-400" />
                    Whitepaper
                 </button>
              </div>
           </div>

           <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-[#2563eb]/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="aspect-[4/5] bg-[#0f172a] rounded-[24px] p-10 lg:p-12 relative overflow-hidden transition-transform duration-700 group-hover:scale-[1.01] pro-shadow">
                 <div className="absolute inset-0 animate-shimmer-pro pointer-events-none" />
                 <div className="h-full border border-slate-700/50 rounded-xl p-8 flex flex-col justify-between relative z-10">
                    <div className="flex justify-between items-start">
                       <BarChart2 size={32} className="text-[#2563eb]" />
                       <div className="text-right">
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Status</p>
                          <p className="text-lg font-bold text-white tracking-tight uppercase">Operational</p>
                       </div>
                    </div>
                    
                    <div className="space-y-8">
                       {[
                         { l: 'Network Load', v: '14.2 TB/s', p: '92%' },
                         { l: 'Encryption Level', v: 'AES-256', p: '100%' },
                         { l: 'Uptime (YTD)', v: '99.999%', p: 'Active' }
                       ].map((stat, i) => (
                          <div key={i} className="space-y-3">
                             <div className="flex justify-between items-end">
                                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">{stat.l}</span>
                                <span className="text-sm font-bold text-white">{stat.v}</span>
                             </div>
                             <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-[#2563eb]" style={{ width: stat.p === 'Active' ? '100%' : stat.p }} />
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Trusted Partners */}
        <section className="py-24 border-y border-slate-100 text-center space-y-16">
           <div className="flex flex-wrap justify-between gap-12 font-bold text-slate-300 text-2xl uppercase tracking-[0.5em] opacity-40 px-10 grayscale hover:grayscale-0 transition-all duration-700">
              {['Oracle', 'Accenture', 'Intel', 'Cisco', 'IBM'].map(partner => (
                <span key={partner} className="cursor-default">{partner}</span>
              ))}
           </div>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20 px-6">
          {[
            { icon: Lock, title: 'Compliance First', desc: 'Adhering to over 60 global compliance standards including GDPR, HIPAA, and PCI.' },
            { icon: Globe2, title: 'Multi-Region', desc: 'Native support for distributed workloads across 24 zones globally for zero latency.' },
            { icon: Users2, title: 'Identity Mgmt', desc: 'Centralized control for user lifecycles with granular permissions and SSO.' },
            { icon: Layers, title: 'Stack Neutral', desc: 'Seamlessly integrate with your existing infrastructure through unified API gateways.' }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 p-10 space-y-8 group hover:border-[#2563eb]/20 transition-all duration-500 cursor-pointer pro-shadow">
               <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center text-slate-400 group-hover:text-[#2563eb] group-hover:bg-slate-100 transition-all">
                  <item.icon size={28} strokeWidth={1.5} />
               </div>
               <h3 className="text-xl font-bold tracking-tight text-[#0f172a]">{item.title}</h3>
               <p className="text-sm font-medium text-slate-500 leading-relaxed shadow-none">
                  {item.desc}
               </p>
               <div className="pt-4 flex items-center justify-between text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Learn More</span>
                  <ArrowUpRight size={16} />
               </div>
            </div>
          ))}
        </section>

        {/* Corporate Narrative Split */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center px-6">
           <div className="lg:col-span-5 space-y-12">
              <span className="text-[12px] font-bold uppercase tracking-[0.6em] text-[#2563eb]">Institutional Values</span>
              <h2 className="text-5xl md:text-6xl font-black text-[#0f172a] leading-[1.1] tracking-tighter uppercase italic">Reliability <br /> Is Our Only <br /> Metric.</h2>
              <div className="w-24 h-1 bg-[#2563eb] rounded-full" />
              <p className="text-lg font-medium leading-relaxed text-slate-500 border-l-4 border-slate-200 pl-10 flex items-start gap-4 italic grayscale-0">
                 "Nexus provides the bedrock upon which the world's most critical infrastructures are built. We don't just deliver software; we deliver certainty."
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                 {[
                   '99.999% Service Level Agreement',
                   '24/7 Global Incident Response',
                   'Native Multi-Cloud Support',
                   'Zero Trust Network Access'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-all duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] group-hover:scale-150 transition-all" />
                      <span className="text-[11px] font-bold text-slate-600 group-hover:text-[#0f172a] transition-colors">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-[32px] p-12 lg:p-20 relative overflow-hidden group border border-slate-200 pro-shadow">
                 <Globe2 size={400} className="text-[#2563eb]/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                 <div className="relative z-10 space-y-12">
                    <h3 className="text-4xl font-black tracking-tight text-[#0f172a] text-center">Infrastructure At Scale</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                       {[
                         { l: 'Regions', v: '24' },
                         { l: 'Customers', v: '12k+' },
                         { l: 'Uptime', v: '99.9%' },
                         { l: 'Certificates', v: '60+' }
                       ].map((stat, i) => (
                          <div key={i} className="text-center space-y-2">
                             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.l}</div>
                             <div className="text-3xl font-black text-[#2563eb] tracking-tight">{stat.v}</div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Service Tiers */}
        <section className="py-24 text-center px-6">
           <h2 className="text-[12px] font-bold uppercase tracking-[1em] text-slate-400 mb-20 italic">Global Deployment Plans</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 bg-white pro-shadow">
            {[
              { name: 'Core Edition', price: '$499', period: 'mo', items: ['5 Global Regions', 'Standard Support', 'Core API Access'] },
              { name: 'Enterprise V', price: '$2,450', period: 'mo', items: ['Unlimited Regions', '24/7 Dedicated Support', 'White-labeling'], featured: true },
              { name: 'Sovereign', price: 'Custom', items: ['Dedicated On-Premise', 'Hardware Hashing', 'Direct Fiber Uplink'] }
            ].map((p, i) => (
              <div key={i} className={`p-16 flex flex-col items-center gap-10 transition-all duration-700 border-r border-slate-100 last:border-r-0 ${p.featured ? 'bg-slate-50' : 'hover:bg-slate-50/50'}`}>
                 <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 font-sans italic">{p.name}</h4>
                 <div className="flex flex-col items-center gap-2">
                    <div className="flex items-baseline gap-1">
                       <span className="text-6xl font-black tracking-tighter text-[#0f172a]">{p.price}</span>
                       {p.period && <span className="text-slate-400 font-bold uppercase text-[10px]">/{p.period}</span>}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-300 tracking-widest">Base Subscription</span>
                 </div>
                 <ul className="space-y-4 text-xs font-bold text-slate-500 h-24 italic">
                    {p.items.map((item, j) => <li key={j}>{item}</li>)}
                 </ul>
                 <button className={`w-full py-5 font-bold uppercase tracking-widest text-xs transition-all ${p.featured ? 'bg-[#2563eb] text-white shadow-lg' : 'border border-slate-300 text-slate-600 hover:bg-slate-100'}`}>
                    Configure Plan
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* Professional FAQ */}
        <section className="py-24 max-w-4xl mx-auto space-y-16 px-6">
           <div className="text-center space-y-4">
              <h2 className="text-4xl font-black text-[#0f172a] uppercase tracking-tighter italic">Enterprise Inquiry</h2>
              <div className="h-1 w-20 bg-[#2563eb] mx-auto rounded-full" />
           </div>
           
           <div className="space-y-6">
              {[
                { q: 'How does Nexus ensure data sovereignty?', a: 'We allow customers to select specific geographic zones for data residence, ensuring compliance with local laws like GDPR and CCPA.' },
                { q: 'What is the implementation timeline?', a: 'Standard enterprise deployments typically take 4-8 weeks, overseen by our dedicated onboarding engineers.' },
                { q: 'Is on-premise hosting available?', a: 'Our Sovereign tier offers full binary deployment on customer-owned hardware in air-gapped or dedicated data centers.' }
              ].map((faq, i) => (
                 <div key={i} className="bg-white border-b border-slate-200 p-8 group hover:bg-slate-50 transition-colors">
                    <button 
                       className="w-full flex justify-between items-center text-left"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-lg font-bold text-slate-700 tracking-tight group-hover:text-[#2563eb] transition-colors uppercase">{faq.q}</span>
                       <ChevronDown size={20} className={`text-slate-300 transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                       <div className="pt-8 text-md font-medium text-slate-500 leading-relaxed italic animate-in fade-in duration-700">
                          {faq.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </section>

        {/* Footer */}
        <footer className="py-24 bg-[#0f172a] text-white md:rounded-[40px] p-12 lg:p-24 space-y-24 relative overflow-hidden">
           <Globe2 size={600} className="text-white/5 absolute -bottom-1/2 -right-1/4 pointer-events-none" />
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 border-b border-white/10 pb-20">
              <div className="space-y-8">
                 <div className="flex items-center gap-3">
                    <Building2 size={32} className="text-[#2563eb]" />
                    <span className="text-2xl font-black tracking-tight italic">NEXUS</span>
                 </div>
                 <p className="text-slate-400 text-sm font-medium leading-relaxed">Securing the world's most critical digital environments since 2014.</p>
              </div>
              
              {['Infrastructure', 'Company', 'Legal'].map(col => (
                <div key={col} className="space-y-6">
                   <h5 className="text-[12px] font-black uppercase tracking-widest text-[#2563eb]">{col}</h5>
                   <ul className="space-y-4 text-sm font-semibold text-slate-400">
                      <li className="hover:text-white cursor-pointer">SLA Agreement</li>
                      <li className="hover:text-white cursor-pointer">Global Regions</li>
                      <li className="hover:text-white cursor-pointer">Carrier Connectivity</li>
                   </ul>
                </div>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative z-10 text-[11px] font-bold uppercase tracking-widest text-slate-500 italic">
              <p>© 2026 NEXUS CORP INTERNATIONAL. CERTIFIED SOVEREIGN ENTITY.</p>
              <div className="flex gap-10 uppercase">
                 <span className="hover:text-white cursor-pointer">Security</span>
                 <span className="hover:text-white cursor-pointer">Trust Center</span>
                 <span className="hover:text-white cursor-pointer">Latency Lab</span>
              </div>
           </div>
        </footer>
      </div>
    </div>
  );
};
