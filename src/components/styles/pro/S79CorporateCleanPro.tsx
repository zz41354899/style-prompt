import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Building2, Briefcase, BarChart3, Users, Globe, ShieldCheck, Zap, PieChart, ArrowUpRight, ChevronRight, LayoutGrid } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S79CorporateCleanPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-white text-[#0F172A] selection:bg-[#0EA5E9] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

                .font-corp-sans { font-family: 'Inter', sans-serif; }

                /* Dot Pattern Background */
                .dot-pattern {
                    background-image: radial-gradient(#CBD5E1 1px, transparent 1px);
                    background-size: 24px 24px;
                }
                
                /* Gradient Text */
                .text-gradient {
                    background: linear-gradient(135deg, #0F172A 0%, #334155 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .text-gradient-blue {
                    background: linear-gradient(135deg, #0284C7 0%, #0EA5E9 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                /* Subtle Glass */
                .glass-panel {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(226, 232, 240, 0.8);
                }
                
                /* Floating Animation */
                @keyframes float-gentle {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0); }
                }
                .float-card {
                    animation: float-gentle 6s ease-in-out infinite;
                }
                
                /* Logo Ticker */
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .logo-ticker {
                    animation: ticker 30s linear infinite;
                }
            `}</style>

            {/* Background */}
            <div className="fixed inset-0 dot-pattern opacity-40 z-[-1]"></div>
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-sky-100/50 rounded-full blur-3xl opacity-50 z-[-2] -translate-y-1/2 translate-x-1/2"></div>
            <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-3xl opacity-50 z-[-2] translate-y-1/3 -translate-x-1/3"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0F172A] rounded-lg flex items-center justify-center text-white">
                            <LayoutGrid size={18} />
                        </div>
                        <span className="text-xl font-corp-sans font-bold text-[#0F172A] tracking-tight">NexCorp</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Products', 'Solutions', 'Resources', 'Enterprise'].map((item) => (
                                <button key={item} className="font-corp-sans text-sm font-medium text-slate-600 hover:text-[#0F172A] transition-colors flex items-center gap-1">
                                    {item} <ChevronDown size={14} className="opacity-50" />
                                </button>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-4">
                        {!isMobile && (
                            <button className="text-sm font-medium text-slate-600 hover:text-[#0F172A]">Sign in</button>
                        )}
                        <button className="px-5 py-2.5 bg-[#0F172A] text-white font-corp-sans text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl">
                            Get Started
                        </button>
                        {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-600 ml-2">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="border-t border-slate-200 bg-white p-4 shadow-xl">
                        <nav className="flex flex-col gap-4">
                            {['Products', 'Solutions', 'Resources', 'Enterprise'].map((item) => (
                                <div key={item} className="py-2 border-b border-slate-100 text-slate-700 font-medium flex justify-between">
                                    {item} <ChevronRight size={16} />
                                </div>
                            ))}
                            <button className="w-full py-3 bg-slate-100 text-slate-900 rounded-lg font-medium">Sign In</button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 font-corp-sans text-xs font-semibold uppercase tracking-wide">
                            <Zap size={12} fill="currentColor" /> New Release v4.0
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-corp-sans font-bold text-[#0F172A] mb-6 leading-[1.1] tracking-tight">
                            Scale your business with <span className="text-gradient-blue">intelligence.</span>
                        </h1>

                        <p className="font-corp-sans text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            The all-in-one platform designed to help enterprise teams build, deploy, and scale faster than ever before.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-[#0F172A] text-white font-corp-sans font-medium rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2">
                                Start Free Trial <ArrowRight size={18} />
                            </button>
                            <button className="px-8 py-4 bg-white text-slate-700 font-corp-sans font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                Talk to Sales
                            </button>
                        </div>

                        <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
                            <span className="flex items-center gap-2"><Check size={16} className="text-sky-600" /> No credit card</span>
                            <span className="flex items-center gap-2"><Check size={16} className="text-sky-600" /> 14-day trial</span>
                        </div>
                    </div>

                    {/* Dashboard Mockup (CSS Composition) */}
                    <div className="relative">
                        <div className="absolute inset-x-10 top-10 bottom-0 bg-sky-200/50 rounded-[2rem] blur-3xl -z-10 transform translate-y-10"></div>

                        <div className="relative bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200 p-2 float-card">
                            <div className="absolute top-0 left-0 right-0 h-10 bg-slate-50 border-b border-slate-100 rounded-t-xl flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                            </div>

                            <div className="mt-10 p-6 grid grid-cols-2 gap-6">
                                {/* Widget 1 */}
                                <div className="col-span-2 bg-slate-50 rounded-xl p-6 border border-slate-100">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="h-4 w-24 bg-slate-200 rounded"></div>
                                        <div className="h-8 w-16 bg-white rounded border border-slate-200"></div>
                                    </div>
                                    <div className="h-32 flex items-end gap-2">
                                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                            <div key={i} className="flex-1 bg-sky-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Widget 2 */}
                                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm relative overflow-hidden">
                                    <div className="h-4 w-20 bg-slate-200 rounded mb-4"></div>
                                    <div className="text-3xl font-bold text-slate-800 mb-1">84%</div>
                                    <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                                        <ArrowUpRight size={12} /> +12.5%
                                    </div>
                                </div>

                                {/* Widget 3 */}
                                <div className="bg-[#0F172A] rounded-xl p-6 text-white shadow-lg">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Users size={20} /></div>
                                        <div>
                                            <div className="text-sm opacity-60">Active Users</div>
                                            <div className="font-bold">24.5k</div>
                                        </div>
                                    </div>
                                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-sky-400 h-full w-3/4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 float-card" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-semibold uppercase">Security</div>
                                    <div className="text-sm font-bold text-[#0F172A]">SOC2 Certified</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logos */}
            <section className="py-10 border-y border-slate-100 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Trusted by leading enterprises worldwide</p>
                </div>
                <div className="flex w-full overflow-hidden whitespace-nowrap relative">
                    <div className="logo-ticker inline-flex gap-16 px-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Duplicated list for seamless infinite scroll */}
                        {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((i, index) => (
                            <div key={index} className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                                <div className="w-8 h-8 bg-slate-800 rounded"></div>
                                COMPANY {i}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-base font-bold text-sky-600 uppercase tracking-wide mb-3">Core Features</h2>
                        <h3 className="text-4xl font-corp-sans font-bold text-[#0F172A] mb-6">Designed for modern teams.</h3>
                        <p className="text-lg text-slate-600">Everything you need to manage your business operations with clarity and precision.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: BarChart3, title: "Advanced Analytics", desc: "Gain deep insights into your performance metrics with real-time data visualization." },
                            { icon: Globe, title: "Global Infrastructure", desc: "Deploy your applications to edge locations worldwide with a single click." },
                            { icon: ShieldCheck, title: "Enterprise Security", desc: "Bank-grade encryption and compliance standards built directly into the platform." },
                            { icon: Zap, title: "Fast Integration", desc: "Connect with your favorite tools using our pre-built extensive API library." },
                            { icon: Users, title: "Team Collaboration", desc: "Built-in workflows and comments to keep everyone on the same page." },
                            { icon: PieChart, title: "Automated Reports", desc: "Schedule and deliver custom reports directly to stakeholders' inboxes." }
                        ].map((f, i) => (
                            <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-sky-200 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                    <f.icon size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-[#0F172A] mb-3">{f.title}</h4>
                                <p className="text-slate-600 leading-relaxed mb-6">{f.desc}</p>
                                <a href="#" className="text-sky-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn more <ArrowRight size={14} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl font-corp-sans font-bold text-[#0F172A] mb-4">Simple, transparent pricing.</h2>
                            <p className="text-lg text-slate-600">No hidden fees. Change plans anytime.</p>
                        </div>

                        <div className="flex bg-white p-1 rounded-lg border border-slate-200">
                            <button className="px-6 py-2 bg-[#0F172A] text-white text-sm font-medium rounded-md shadow-sm">Monthly</button>
                            <button className="px-6 py-2 text-slate-600 text-sm font-medium rounded-md hover:bg-slate-50">Yearly</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Starter', price: '$29', desc: 'Perfect for individuals and side projects.', features: ['Up to 5 projects', 'Basic Analytics', 'Community Support'] },
                            { name: 'Growth', price: '$79', desc: 'For growing teams and startups.', features: ['Unlimited projects', 'Advanced Analytics', 'Priority Support', 'Team Seats'], highlight: true },
                            { name: 'Enterprise', price: 'Custom', desc: 'For large organizations with specific needs.', features: ['Dedicated Success Manager', 'SLA', 'SSO & Audit Logs', 'Custom Contracts'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 rounded-2xl bg-white border ${plan.highlight ? 'border-sky-500 shadow-2xl scale-105 z-10' : 'border-slate-200'}`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                        MOST POPULAR
                                    </div>
                                )}

                                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{plan.name}</h3>
                                <p className="text-sm text-slate-500 mb-6 h-10">{plan.desc}</p>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-[#0F172A]">{plan.price}</span>
                                    {plan.price !== 'Custom' && <span className="text-slate-500">/mo</span>}
                                </div>

                                <button className={`w-full py-3 rounded-lg font-medium text-sm mb-8 transition-colors ${plan.highlight ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                                    {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                                </button>

                                <ul className="space-y-4 border-t border-slate-100 pt-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                                            <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto bg-[#0F172A] rounded-3xl overflow-hidden relative">
                    {/* Abstract shapes */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rose-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 p-12 md:p-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-corp-sans font-bold text-white mb-6 tracking-tight">
                            Ready to start building?
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                            Join 10,000+ companies already using NexCorp to power their infrastructure.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-white text-[#0F172A] font-bold rounded-lg hover:bg-slate-100 transition-colors">
                                Get Started for Free
                            </button>
                            <button className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border border-white/20 hover:bg-white/10 transition-colors">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-[#0F172A] rounded-lg flex items-center justify-center text-white">
                                <LayoutGrid size={18} />
                            </div>
                            <span className="text-xl font-bold text-[#0F172A]">NexCorp</span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs mb-8">
                            Empowering enterprises with next-generation infrastructure tools and analytics.
                        </p>
                        <div className="flex gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer">
                                    <div className="w-4 h-4 rounded-sm bg-current"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {['Product', 'Company', 'Resources'].map((col, i) => (
                        <div key={i}>
                            <h4 className="font-bold text-[#0F172A] mb-6">{col}</h4>
                            <ul className="space-y-4">
                                {[1, 2, 3, 4].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-slate-500 hover:text-sky-600 transition-colors text-sm">Link Item {item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <div>© 2025 NexCorp Inc. All rights reserved.</div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-slate-900">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-900">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
