import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Landmark, Shield, TrendingUp, Lock, CreditCard, PieChart, DollarSign, RefreshCw, Smartphone, Key } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S82FintechTrustPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-[#00D4AA] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
                
                .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
                
                .mesh-gradient {
                    background-color: #FAFAFA;
                    background-image: radial-gradient(at 100% 0%, hsla(168,74%,88%,1) 0px, transparent 50%),
                                      radial-gradient(at 0% 0%, hsla(252,100%,96%,1) 0px, transparent 50%);
                }
                
                .glass-card-strong {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
                }

                .ticker-slide {
                    animation: ticker 20s linear infinite;
                }

                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-[#00D4AA] shadow-lg">
                            <Landmark size={22} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-extrabold text-slate-900 tracking-tight font-jakarta">Fin<span className="text-[#00D4AA]">Flow</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Banking', 'Payments', 'Cards', 'Enterprise'].map((item) => (
                                <a key={item} href="#" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors font-jakarta">
                                    {item}
                                </a>
                            ))}
                            <div className="flex items-center gap-4">
                                <a href="#" className="text-sm font-semibold text-slate-900 hover:text-[#00D4AA] transition-colors font-jakarta">Log in</a>
                                <button className="px-5 py-2.5 bg-slate-900 hover:bg-black text-white text-sm font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 font-jakarta">
                                    Open Account
                                </button>
                            </div>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
                        {['Banking', 'Payments', 'Cards', 'Enterprise'].map((item) => (
                            <a key={item} href="#" className="text-lg font-bold text-slate-900 py-2 border-b border-slate-50 font-jakarta">
                                {item}
                            </a>
                        ))}
                        <button className="w-full mt-4 py-4 bg-slate-900 text-white font-bold rounded-xl font-jakarta">
                            Open Account
                        </button>
                    </div>
                )}
            </header>

            <main className="font-jakarta">
                {/* Hero Section */}
                <section className="relative pt-24 pb-32 px-6 overflow-hidden mesh-gradient">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-sm font-semibold mb-8">
                                <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse"></span>
                                Now available in 140+ countries
                            </div>

                            <h1 className="text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                                Simply better <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-emerald-600">financial control.</span>
                            </h1>

                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
                                The modern financial platform built for the digital economy. Instant transfers, smart savings, and total security.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-16">
                                <button className="px-8 py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-xl shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 transition-all flex items-center justify-center gap-2 group">
                                    Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-xl border border-slate-200 shadow-sm transition-all">
                                    Contact Sales
                                </button>
                            </div>

                            <div className="flex items-center gap-4 text-sm font-semibold text-slate-500">
                                <Shield size={18} className="text-[#00D4AA]" /> Bank-grade security
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <Check size={18} className="text-[#00D4AA]" /> FDIC Insured
                            </div>
                        </div>

                        <div className="relative">
                            {/* Decorative Blobs */}
                            <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#00D4AA] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                            {/* Main Card */}
                            <div className="relative glass-card-strong rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-[#00D4AA]">
                                        <Landmark size={24} />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-semibold text-slate-400">Current Balance</div>
                                        <div className="text-4xl font-extrabold text-slate-900">$124,592.00</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500">
                                                <DollarSign size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-900">Incoming Transfer</div>
                                                <div className="text-xs font-semibold text-slate-500">Stripe Inc.</div>
                                            </div>
                                        </div>
                                        <div className="font-bold text-emerald-600">+$4,200.00</div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-purple-500">
                                                <Smartphone size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-900">Apple Store</div>
                                                <div className="text-xs font-semibold text-slate-500">Hardware</div>
                                            </div>
                                        </div>
                                        <div className="font-bold text-slate-900">-$1,099.00</div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-100 flex gap-4">
                                    <button className="flex-1 py-3 bg-slate-900 text-white font-bold rounded-xl text-sm">Send Money</button>
                                    <button className="flex-1 py-3 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl text-sm">Add Funds</button>
                                </div>
                            </div>

                            {/* Floating Card */}
                            <div className="absolute top-1/2 -right-8 glass-card-strong p-4 rounded-2xl shadow-xl animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <TrendingUp size={16} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400">Growth</div>
                                        <div className="text-sm font-bold text-slate-900">+12.5%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-[#00D4AA] font-bold uppercase tracking-wider text-sm mb-4">Core Features</h2>
                            <h3 className="text-4xl font-extrabold text-slate-900 mb-6 font-jakarta">Banking without barriers.</h3>
                            <p className="text-xl text-slate-600 font-medium">Everything you need to manage your finances, all in one secure platform.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Shield, title: "Vault Security", desc: "Biometric authentication and real-time fraud monitoring standard on all accounts." },
                                { icon: DollarSign, title: "Instant Payments", desc: "Send money globally in seconds with zero hidden fees and competitive exchange rates." },
                                { icon: CreditCard, title: "Virtual Cards", desc: "Issue unlimited virtual cards for safer online spending and subscription management." },
                                { icon: PieChart, title: "Smart Analytics", desc: "Automatic categorization and spending insights to help you budget better." },
                                { icon: Lock, title: "Data Privacy", desc: "Your data is yours. We never sell your personal information to third parties." },
                                { icon: RefreshCw, title: "Auto-Pilot Savings", desc: "Round up transactions and set recurring transfers to reach your goals faster." }
                            ].map((f, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-100 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-slate-900 group-hover:bg-[#00D4AA] group-hover:text-white transition-colors">
                                        <f.icon size={26} strokeWidth={2.5} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h4>
                                    <p className="text-slate-600 leading-relaxed font-medium">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-slate-900 text-white overflow-hidden">
                    <div className="flex whitespace-nowrap gap-16 ticker-slide">
                        {[1, 2, 3, 4].map(k => (
                            <div key={k} className="flex gap-16 items-center opacity-50 text-2xl font-bold font-jakarta">
                                <span>$50B+ PROCESSED</span>
                                <span className="w-2 h-2 rounded-full bg-[#00D4AA]"></span>
                                <span>2M+ CUSTOMERS</span>
                                <span className="w-2 h-2 rounded-full bg-[#00D4AA]"></span>
                                <span>99.99% UPTIME</span>
                                <span className="w-2 h-2 rounded-full bg-[#00D4AA]"></span>
                                <span>24/7 SUPPORT</span>
                                <span className="w-2 h-2 rounded-full bg-[#00D4AA]"></span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing */}
                <section className="py-24 px-6 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Choose your plan</h2>
                            <p className="text-lg text-slate-600 font-medium">Transparent pricing for every stage of your journey.</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 items-start">
                            {[
                                { name: "Starter", price: "0", desc: "For individuals", features: ["Basic Account", "1 Virtual Card", "Standard Support"] },
                                { name: "Pro", price: "12", desc: "For power users", features: ["Priority Support", "5 Virtual Cards", "No FX Fees", "Analytics Pro"], highlight: true },
                                { name: "Business", price: "29", desc: "For small teams", features: ["Unlimited Cards", "Team Access", "API Access", "Dedicated Manager"] }
                            ].map((plan, i) => (
                                <div key={i} className={`relative p-8 rounded-3xl transition-all duration-300 ${plan.highlight ? 'bg-white shadow-2xl shadow-slate-200/50 border-2 border-[#00D4AA] scale-105 z-10' : 'bg-white border border-slate-200 hover:border-slate-300'}`}>
                                    {plan.highlight && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00D4AA] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-[#00D4AA]/30">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="mb-8">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h3>
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className="text-4xl font-extrabold text-slate-900">${plan.price}</span>
                                            <span className="text-slate-500 font-bold">/mo</span>
                                        </div>
                                        <p className="text-slate-500 text-sm font-medium">{plan.desc}</p>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-[#00D4AA]/10 text-[#00D4AA]' : 'bg-slate-100 text-slate-400'}`}>
                                                    <Check size={14} strokeWidth={3} />
                                                </div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-[#00D4AA] hover:bg-emerald-500 text-white shadow-lg shadow-[#00D4AA]/20' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                                        Choose {plan.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">Common questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: "Is my money safe with FinFlow?", a: "Absolutely. We are fully regulated and your deposits are insured up to $250,000 via our partner banks." },
                                { q: "Can I open an account for my business?", a: "Yes, we offer specialized business accounts with team management features and API access." },
                                { q: "Are there any hidden fees?", a: "Never. We believe in complete transparency. Our fee schedule is simple and available on our pricing page." }
                            ].map((faq, i) => (
                                <div key={i} className="border-b border-slate-100">
                                    <button
                                        className="w-full py-6 text-left flex items-center justify-between group"
                                        onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                    >
                                        <span className="text-lg font-bold text-slate-900 group-hover:text-[#00D4AA] transition-colors">{faq.q}</span>
                                        <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180 text-[#00D4AA]' : ''}`} />
                                    </button>
                                    {expandedFaq === i && (
                                        <div className="pb-6 text-slate-600 leading-relaxed font-medium">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-slate-50 pt-20 pb-10 px-6 border-t border-slate-200">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-[#00D4AA]">
                                <Landmark size={18} strokeWidth={2.5} />
                            </div>
                            <span className="text-lg font-extrabold text-slate-900 font-jakarta">Fin<span className="text-[#00D4AA]">Flow</span></span>
                        </div>

                        <div className="flex gap-8 text-sm font-bold text-slate-600">
                            <a href="#" className="hover:text-[#00D4AA] transition-colors">Privacy</a>
                            <a href="#" className="hover:text-[#00D4AA] transition-colors">Terms</a>
                            <a href="#" className="hover:text-[#00D4AA] transition-colors">Security</a>
                            <a href="#" className="hover:text-[#00D4AA] transition-colors">Contact</a>
                        </div>

                        <div className="text-slate-400 text-sm font-medium">
                            © 2025 FinFlow Inc.
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};
