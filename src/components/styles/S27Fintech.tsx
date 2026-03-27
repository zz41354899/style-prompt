import { useState, useEffect } from 'react';
import { 
  ArrowRight, Menu, X, Check, Star, 
  Github, Twitter, Linkedin, ChevronDown, ChevronUp,
  TrendingUp, Wallet, Shield, CreditCard, PieChart,
  ArrowUpRight, ArrowDownLeft, RefreshCcw, DollarSign,
  Activity, BellRing
} from 'lucide-react';

export const S27Fintech = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ticker, setTicker] = useState(42069.24);
  const isMobile = deviceMode === 'mobile';

  // Simple ticker simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTicker(prev => prev + (Math.random() - 0.5) * 10);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#10B981] selection:text-white overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .fintech-card {
          background: white;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }
        .fintech-card:hover {
          border-color: #10B981;
          box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.1);
          transform: translateY(-2px);
        }
        .emerald-gradient {
          background: linear-gradient(135deg, #059669 0%, #10B981 100%);
        }
        .glass-fin {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        @keyframes ticker-slide {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        .animate-ticker {
          animation: ticker-slide 30s linear infinite;
        }
        .numeric {
          font-family: 'JetBrains Mono', monospace;
        }
      `}} />

      {/* Real-time Ticker Bar */}
      <div className="bg-[#0F172A] text-white py-2 overflow-hidden whitespace-nowrap relative z-[60]">
         <div className="flex gap-12 animate-ticker text-[10px] font-bold uppercase tracking-widest px-4">
            {[
              { s: 'BTC', v: '64,231', c: 'green' },
              { s: 'ETH', v: '3,452', c: 'green' },
              { s: 'SOL', v: '142.5', c: 'red' },
              { s: 'USD/EUR', v: '0.92', c: 'green' },
              { s: 'AAPL', v: '182.4', c: 'red' },
              { s: 'TSLA', v: '174.9', c: 'green' }
            ].map((st, i) => (
               <div key={i} className="flex items-center gap-2">
                  <span className="opacity-40">{st.s}</span>
                  <span className="numeric">{st.v}</span>
                  <span className={st.c === 'green' ? 'text-emerald-400' : 'text-rose-400'}>
                     {st.c === 'green' ? '▲' : '▼'}
                  </span>
               </div>
            ))}
         </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-24 relative p-4 md:p-8">
        {/* Navigation */}
        <header className="flex items-center justify-between py-6 px-10 bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl shadow-sm relative z-50">
          <div className="flex items-center gap-3 group cursor-pointer">
             <div className="w-10 h-10 rounded-lg emerald-gradient flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <TrendingUp size={22} className="text-white" />
             </div>
             <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-[#0F172A]">Vertex.fi</span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">Global Asset Exchange</span>
             </div>
          </div>

          {!isMobile && (
            <nav className="flex items-center gap-10 text-[13px] font-bold text-slate-500">
              {['Markets', 'Portfolio', 'Cards', 'Academy'].map((item) => (
                <span key={item} className="hover:text-[#10B981] cursor-pointer transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#10B981] group-hover:w-full transition-all duration-300" />
                </span>
              ))}
            </nav>
          )}

          {!isMobile && (
            <div className="flex items-center gap-4">
               <button className="p-2 text-slate-400 hover:text-[#10B981] transition-colors relative">
                  <BellRing size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
               </button>
               <button className="px-8 py-3 bg-[#0F172A] text-white text-[13px] font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                  Open Account
               </button>
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-400">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </header>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="bg-white border border-slate-200 p-10 z-[100] relative rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300">
             <div className="flex flex-col gap-6 text-xl font-bold text-slate-700">
                {['Trade', 'Assets', 'Security', 'Support'].map((item) => (
                   <span key={item} className="border-b border-slate-50 pb-4">
                      {item}
                   </span>
                ))}
             </div>
             <button className="w-full mt-8 py-4 emerald-gradient text-white rounded-2xl font-bold shadow-xl">
                Sign In
             </button>
          </div>
        )}

        {/* Hero Section - Dashboard Preview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-center px-4">
           <div className="lg:col-span-6 space-y-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-4 py-1.5 border border-emerald-100">
                 <Shield size={14} className="text-[#10B981]" />
                 <span className="text-[11px] font-bold uppercase tracking-widest text-[#10B981]">FDIC Insured Up To $250k</span>
              </div>
              
              <h1 className={`font-black leading-[1.1] tracking-tight text-[#0F172A] ${isMobile ? 'text-5xl text-center' : 'text-7xl'}`}>
                Wealth management <br /> 
                <span className="text-[#10B981]">reimagined.</span>
              </h1>
              
              <p className={`text-slate-500 font-medium leading-relaxed max-w-xl ${isMobile ? 'text-lg text-center' : 'text-2xl'}`}>
                Seamlessly trade assets, manage your portfolio, and earn yields with the world's most trusted financial interface.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-6 justify-center lg:justify-start">
                 <button className="px-12 py-5 emerald-gradient text-white text-lg font-bold rounded-2xl shadow-2xl shadow-emerald-500/30 hover:scale-105 transition-transform flex items-center gap-4 group">
                    Start Trading
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                 </button>
                 <button className="px-12 py-5 bg-white border border-slate-200 text-[#0F172A] text-lg font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-sm flex items-center gap-3">
                    View Pricing
                 </button>
              </div>

              <div className="pt-12 grid grid-cols-3 gap-8">
                 {[
                   { l: 'Transactions', v: '2.4M+' },
                   { l: 'Asset Value', v: '$4.8B' },
                   { l: 'Countries', v: '180+' }
                 ].map((stat, i) => (
                    <div key={i} className="space-y-1">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.l}</p>
                       <p className="text-2xl font-black text-[#0F172A] tracking-tight">{stat.v}</p>
                    </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative group">
                 <div className="absolute inset-[-20px] bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
                 <div className="fintech-card p-10 lg:p-12 relative overflow-hidden bg-[#0F172A] text-white border-slate-800 shadow-2xl">
                    <div className="flex justify-between items-center mb-10">
                       <div className="space-y-1">
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Total Balance</p>
                          <h3 className="text-4xl font-black tracking-tight numeric">${ticker.toFixed(2)}</h3>
                       </div>
                       <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                          <TrendingUp size={24} />
                       </div>
                    </div>
                    
                    <div className="h-40 relative flex items-end gap-2 px-2">
                       {[0.4, 0.6, 0.3, 0.8, 0.5, 0.9, 0.7, 1].map((h, i) => (
                          <div 
                             key={i} 
                             className="flex-1 bg-emerald-500/20 rounded-t-lg transition-all duration-1000 group-hover:bg-emerald-500/40 relative"
                             style={{ height: `${h * 100}%` }}
                          >
                             {i === 7 && <div className="absolute top-0 inset-x-0 h-1 bg-emerald-400 shadow-[0_0_10px_#34d399] rounded-full" />}
                          </div>
                       ))}
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-6">
                       <div className="p-6 bg-slate-800/50 rounded-2xl flex items-center justify-between group/card hover:bg-slate-800 transition-colors">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                                <ArrowDownLeft size={20} />
                             </div>
                             <span className="text-sm font-bold uppercase tracking-widest text-slate-300">Deposit</span>
                          </div>
                       </div>
                       <div className="p-6 bg-slate-800/50 rounded-2xl flex items-center justify-between group/card hover:bg-slate-800 transition-colors">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-rose-500/20 rounded-xl flex items-center justify-center text-rose-400">
                                <ArrowUpRight size={20} />
                             </div>
                             <span className="text-sm font-bold uppercase tracking-widest text-slate-300">Withdraw</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Feature Grid - Services */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20 px-4">
          {[
            { icon: Wallet, title: 'Multi-Asset Wallet', desc: 'Securely store and manage over 200+ different digital and fiat currencies.' },
            { icon: CreditCard, title: 'Virtual Cards', desc: 'Generate instant physical or virtual cards for global spending with zero fees.' },
            { icon: PieChart, title: 'Smart Portfolio', desc: 'Automated rebalancing and yield optimization based on your risk profile.' },
            { icon: RefreshCcw, title: 'Instant Swap', desc: 'Exchange assets at the best market rates with sub-second execution speeds.' }
          ].map((item, i) => (
            <div key={i} className="fintech-card p-10 space-y-8 group">
               <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-[#10B981] transition-all">
                  <item.icon size={28} strokeWidth={1.5} />
               </div>
               <h3 className="text-2xl font-bold tracking-tight text-[#0F172A]">{item.title}</h3>
               <p className="text-sm font-medium text-slate-500 leading-relaxed">
                  {item.desc}
               </p>
               <div className="pt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#10B981] transition-colors">
                  Details <ArrowRight size={14} />
               </div>
            </div>
          ))}
        </section>

        {/* Financial Trust Split */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center px-6">
           <div className="lg:col-span-5 space-y-12">
              <span className="text-[12px] font-bold uppercase tracking-[0.6em] text-[#10B981]">Institutional Grade Security</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] leading-[1.1] tracking-tighter">Your Assets, <br /> <span className="text-[#10B981]">Fortified.</span></h2>
              <div className="w-24 h-2 bg-[#10B981] rounded-full" />
              <p className="text-lg font-medium leading-relaxed text-slate-500 border-l-4 border-slate-100 pl-10 italic">
                 We employ cold-storage protocols, multi-signature authentication, and continuous threat monitoring to ensure your wealth is always protected.
              </p>
              
              <div className="space-y-6 pt-6">
                 {[
                   'Biometric 2FA & Hardware Key Support',
                   'Cold Storage Hardware Vaults',
                   'Real-time AML/Fraud Detection',
                   'Distributed Global Infrastructure'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 group cursor-pointer hover:translate-x-3 transition-transform duration-500">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                      <span className="text-sm font-bold text-slate-600 group-hover:text-[#0F172A] transition-colors uppercase tracking-widest">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-7">
              <div className="fintech-card p-12 lg:p-20 relative overflow-hidden bg-white shadow-2xl space-y-10 group">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-bl-full pointer-events-none" />
                 <div className="flex justify-between items-center pb-10 border-b border-slate-100">
                    <Activity size={32} className="text-[#10B981]" />
                    <span className="text-[12px] font-black text-slate-300 uppercase tracking-[0.2em]">Compliance Check: Passed</span>
                 </div>
                 <div className="grid grid-cols-2 gap-10">
                    <div className="space-y-4">
                       <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active nodes</h4>
                       <div className="flex gap-2">
                          {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-2 bg-emerald-100 rounded-full" />)}
                       </div>
                       <p className="text-2xl font-black text-[#0F172A] numeric">242.0.0.1</p>
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hash Rate</h4>
                       <div className="flex gap-2">
                          {[1,2,3].map(i => <div key={i} className="w-8 h-2 bg-[#0F172A] rounded-full" />)}
                       </div>
                       <p className="text-2xl font-black text-[#0F172A] numeric">1.42 EH/s</p>
                    </div>
                 </div>
                 <button className="w-full py-6 bg-[#0F172A] text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl hover:bg-slate-800 transition-colors">
                    Security Audit Report
                 </button>
              </div>
           </div>
        </section>

        {/* Pricing columns / Asset Tiers */}
        <section className="py-24 text-center px-4">
           <h2 className="text-[12px] font-black uppercase tracking-[1em] text-slate-400 mb-20 italic">Account Varieties</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Standard', price: '$0', items: ['Basic Wallet', 'Virtual Card', 'Standard Support'] },
              { name: 'Priority', price: '$12', items: ['Zero FX Fees', 'Priority Support', 'Metal Card'], featured: true },
              { name: 'Elite', price: '$45', items: ['24/7 Concierge', 'Vault Access', '1% Cashback'] }
            ].map((p, i) => (
              <div key={i} className={`p-16 fintech-card flex flex-col items-center gap-12 relative ${p.featured ? 'border-[#10B981] shadow-2xl scale-[1.03]' : 'border-slate-100'}`}>
                 {p.featured && <div className="absolute top-[-25px] emerald-gradient text-white px-8 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">Best Value</div>}
                 <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-400 italic">{p.name}</h4>
                 <div className="flex flex-col items-center gap-4">
                    <div className="flex items-baseline gap-1">
                       <span className="text-6xl font-black tracking-tight text-[#0F172A] numeric">{p.price}</span>
                       <span className="text-slate-400 font-bold uppercase text-[10px]">/mo</span>
                    </div>
                 </div>
                 <ul className="space-y-4 text-sm font-bold text-slate-500 h-24 italic">
                    {p.items.map((item, j) => <li key={j} className="flex items-center gap-3"><Check size={16} className="text-emerald-500" /> {item}</li>)}
                 </ul>
                 <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${p.featured ? 'emerald-gradient text-white shadow-xl shadow-emerald-500/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                    Select Account
                 </button>
              </div>
            ))}
          </div>
        </section>

        {/* Fintech FAQ */}
        <section className="py-24 max-w-4xl mx-auto space-y-16 px-4">
           <h2 className="text-center text-4xl font-black tracking-tighter text-[#0F172A] uppercase italic">Investor Knowledge</h2>
           <div className="space-y-6">
              {[
                { q: 'Is my data secure?', a: 'Vertex use military-grade AES-256 encryption for all data at rest and TLS 1.3 for data in transit. Your security is our highest priority.' },
                { q: 'What are the withdrawal limits?', a: 'Standard accounts have a $10,000 daily limit, while Elite members enjoy unlimited global withdrawals via the Vertex Private Network.' },
                { q: 'How do virtual cards work?', a: 'Virtual cards are generated instantly through the dashboard. They can be deleted and recreated at any time for enhanced online security.' }
              ].map((faq, i) => (
                 <div key={i} className="fintech-card p-10 group hover:border-[#10B981]">
                    <button 
                       className="w-full flex justify-between items-center text-left"
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                       <span className="text-xl font-bold text-[#0F172A] group-hover:text-[#10B981] transition-colors">{faq.q}</span>
                       <ChevronDown size={24} className={`text-slate-300 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
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
        <footer className="pt-24 pb-12 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-20">
            {/* Logo & Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg emerald-gradient flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <TrendingUp size={22} className="text-white" />
                </div>
                <span className="text-2xl font-black tracking-tighter text-[#0F172A]">Vertex.fi</span>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed max-w-xs">
                The world's most advanced hub for digital asset management. Regulated, secure, and built for the future of finance.
              </p>
              <div className="flex gap-4">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#10B981] hover:border-[#10B981] transition-all">
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-[.2em] text-[#0F172A] mb-8">Exchange</h5>
                <ul className="space-y-4 text-sm font-bold text-slate-400">
                  <li className="hover:text-[#10B981] cursor-pointer transition-colors">Market Data</li>
                  <li className="hover:text-[#10B981] cursor-pointer transition-colors">Spot Trading</li>
                  <li className="hover:text-[#10B981] cursor-pointer transition-colors">Margin Trading</li>
                  <li className="hover:text-[#10B981] cursor-pointer transition-colors">Yield Optimization</li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-[.2em] text-[#0F172A] mb-8">Resources</h5>
                <ul className="space-y-4 text-sm font-bold text-slate-400">
                  <li className="hover:text-[#10B981] cursor-pointer transition-colors">API Documentation</li>
                  <li className="hover:text-[#10B981] cursor-pointer transition-colors">Security Center</li>
                  <li className="hover:text-[#10B981] cursor-pointer transition-colors">Help Academy</li>
                  <li className="hover:text-[#10B981] cursor-pointer transition-colors">Audit Reports</li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-[.2em] text-[#0F172A] mb-8">Company</h5>
                <ul className="space-y-4 text-sm font-bold text-slate-400">
                  <li className="hover:text-[#10B981] cursor-pointer transition-colors">About Mission</li>
                  <li className="hover:text-[#10B981] cursor-pointer transition-colors">Affiliate Program</li>
                  <li className="hover:text-[#10B981] cursor-pointer transition-colors">Terms of Service</li>
                  <li className="hover:text-[#10B981] cursor-pointer transition-colors">Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              © 2026 VERTEX FINANCIAL INC. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-8">
              <span className="text-[10px] font-black text-[#10B981] uppercase tracking-[.3em]">System Status: All Operational</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
