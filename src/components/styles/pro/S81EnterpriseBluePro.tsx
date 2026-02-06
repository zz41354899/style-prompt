import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Building, Shield, Globe, Server, BarChart3, Users, Lock, PieChart, TrendingUp, PlayCircle } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S81EnterpriseBluePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                .font-inter { font-family: 'Inter', sans-serif; }
                
                .glass-card {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(226, 232, 240, 0.8);
                }
                
                .hero-pattern {
                    background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
                    background-size: 32px 32px;
                }
            `}</style>

            {/* Background Pattern */}
            <div className="fixed inset-0 hero-pattern opacity-30 z-0 pointer-events-none"></div>

            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                            <Building size={24} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold text-slate-900 tracking-tight font-inter">Global<span className="text-blue-600">Corp</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Platform', 'Solutions', 'Customers', 'Resources'].map((item) => (
                                <a key={item} href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                                    {item}
                                </a>
                            ))}
                            <div className="h-6 w-px bg-slate-200 mx-2"></div>
                            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Sign In</a>
                            <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30">
                                Get Started
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
                        {['Platform', 'Solutions', 'Customers', 'Resources'].map((item) => (
                            <a key={item} href="#" className="text-lg font-medium text-slate-600 hover:text-blue-600 py-2 border-b border-slate-100">
                                {item}
                            </a>
                        ))}
                        <button className="w-full mt-4 py-3 bg-blue-600 text-white font-medium rounded-lg">
                            Get Started
                        </button>
                    </div>
                )}
            </header>

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-24 pb-32 px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                New: Enterprise Cloud 2.0 is live
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight font-inter">
                                Scalable infrastructure for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">global leaders</span>.
                            </h1>

                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                                Secure, reliable, and compliant cloud solutions designed for the Fortune 500. Accelerate your digital transformation today.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2 group">
                                    Start Free Trial <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-lg border border-slate-200 hover:border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2">
                                    <PlayCircle size={18} /> Watch Demo
                                </button>
                            </div>

                            <div className="mt-12 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Trusted by</div>
                                <div className="flex gap-6">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="h-8 w-24 bg-slate-300 rounded overflow-hidden relative">
                                            <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 blur-3xl rounded-full translate-y-12 translate-x-12"></div>
                            <div className="relative glass-card rounded-2xl p-2 shadow-2xl shadow-slate-200 border border-slate-200/60 bg-white">
                                <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
                                    {/* Dashboard Header */}
                                    <div className="h-12 border-b border-slate-200 bg-white flex items-center px-4 justify-between">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                        </div>
                                        <div className="text-xs font-mono text-slate-400">dashboard.globalcorp.com</div>
                                    </div>

                                    {/* Dashboard Content */}
                                    <div className="p-6 grid grid-cols-2 gap-6">
                                        <div className="col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                            <div className="flex justify-between mb-4">
                                                <div>
                                                    <div className="text-sm text-slate-500 font-medium">Total Revenue</div>
                                                    <div className="text-3xl font-bold text-slate-900">$4,293,400</div>
                                                </div>
                                                <div className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-xs font-bold h-fit flex items-center gap-1">
                                                    <TrendingUp size={12} /> +12.5%
                                                </div>
                                            </div>
                                            <div className="h-32 flex items-end gap-2">
                                                {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-blue-100 hover:bg-blue-600 transition-colors rounded-t-sm group relative" style={{ height: `${h}%` }}>
                                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                            ${h}k
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                            <div className="text-sm text-slate-500 font-medium mb-2">Active Users</div>
                                            <div className="text-2xl font-bold text-slate-900 mb-4">128,492</div>
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3, 4].map(i => (
                                                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                                                ))}
                                                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-500">+4k</div>
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center">
                                            <div className="text-sm text-slate-500 font-medium mb-2">Server Status</div>
                                            <div className="flex items-center gap-2 text-emerald-600 font-bold">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                                99.99% Uptime
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 px-6 bg-white border-y border-slate-100">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">Why GlobalCorp?</h2>
                            <h3 className="text-4xl font-bold text-slate-900 mb-6">Enterprise-grade security meets consumer-grade usability.</h3>
                            <p className="text-xl text-slate-600">Everything you need to build, deploy, and scale your applications with confidence.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Shield, title: "Bank-Grade Security", desc: "SOC2 Type II certified infrastructure with end-to-end encryption and advanced threat protection." },
                                { icon: Globe, title: "Global Edge Network", desc: "Deploy your applications to 35+ regions worldwide with a single click for ultra-low latency." },
                                { icon: BarChart3, title: "Real-time Analytics", desc: "Deep insights into your infrastructure performance with granular monitoring and alerts." },
                                { icon: Users, title: "Team Collaboration", desc: "Built for teams with advanced role-based access control, audit logs, and SSO integration." },
                                { icon: Server, title: "Dedicated Hardware", desc: "Run your workloads on isolated, single-tenant hardware for maximum performance and security." },
                                { icon: Lock, title: "Compliance Ready", desc: "Pre-configured compliance controls for GDPR, HIPAA, PCI-DSS, and more." }
                            ].map((f, i) => (
                                <div key={i} className="group p-8 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100">
                                    <div className="w-14 h-14 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <f.icon className="text-blue-600" size={28} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
                                <p className="text-lg text-slate-600">No hidden fees. Scale as you grow.</p>
                            </div>
                            <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                                <button className="px-6 py-2 bg-white text-slate-900 rounded shadow-sm font-medium text-sm">Monthly</button>
                                <button className="px-6 py-2 text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">Yearly (Save 20%)</button>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {[
                                { name: "Starter", price: "0", desc: "Perfect for testing and small projects.", features: ["2 Projects", "Community Support", "1GB Storage", "Shared CPU"] },
                                { name: "Pro", price: "49", desc: "For growing teams and production apps.", features: ["Unlimited Projects", "Priority Support", "100GB Storage", "Dedicated CPU", "Analytics"], highlight: true },
                                { name: "Enterprise", price: "Custom", desc: "For large-scale mission critical workloads.", features: ["Custom SLA", "24/7 Dedicated Support", "Unlimited Storage", "Private Cloud", "Compliance Reports", "SSO"] }
                            ].map((plan, i) => (
                                <div key={i} className={`relative p-8 rounded-2xl border ${plan.highlight ? 'border-blue-600 bg-white ring-4 ring-blue-600/10 shadow-xl' : 'border-slate-200 bg-white shadow-sm hover:shadow-md'} transition-all flex flex-col`}>
                                    {plan.highlight && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="mb-8">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h3>
                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-4xl font-bold text-slate-900">{plan.price === 'Custom' ? 'Contact' : `$${plan.price}`}</span>
                                            {plan.price !== 'Custom' && <span className="text-slate-500 font-medium">/mo</span>}
                                        </div>
                                        <p className="text-slate-600 text-sm">{plan.desc}</p>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-1">
                                        {plan.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200'}`}>
                                        {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently asked questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: "How secure is GlobalCorp's infrastructure?", a: "We maintain the highest security standards including SOC2 Type II, ISO 27001, and HIPAA compliance. All data is encrypted at rest and in transit." },
                                { q: "Can I migrate from another provider?", a: "Yes, our dedicated migration team will help you move your workloads with zero downtime. We provide automated tools and hands-on support." },
                                { q: "Do you offer SLA guarantees?", a: "Yes, we offer a 99.99% uptime SLA for all Pro and Enterprise plans. We provided financial credits if we fail to meet this guarantee." },
                                { q: "How does billing work?", a: "We bill monthly or annually. You can upgrade, downgrade, or cancel your plan at any time. We also offer usage-based billing for compute resources." }
                            ].map((faq, i) => (
                                <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <button
                                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                                        onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                    >
                                        <span className="font-semibold text-slate-900">{faq.q}</span>
                                        <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    {expandedFaq === i && (
                                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-white pt-20 pb-10 px-6 border-t border-slate-200">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
                        <div className="col-span-2 lg:col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
                                    <Building size={18} />
                                </div>
                                <span className="text-lg font-bold text-slate-900 font-inter">Global<span className="text-blue-600">Corp</span></span>
                            </div>
                            <p className="text-slate-500 mb-6 max-w-xs">Making enterprise-grade cloud infrastructure accessible to innovative companies worldwide.</p>
                            <div className="flex gap-4">
                                {['twitter', 'github', 'linkedin'].map((social) => (
                                    <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all">
                                        <span className="sr-only">{social}</span>
                                        <div className="w-4 h-4 bg-current rounded-sm"></div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {[
                            { title: "Product", links: ["Features", "Security", "Enterprise", "Customer Stories", "Pricing"] },
                            { title: "Platform", links: ["Developer API", "Partners", "Atom Integration", "Electron Build", "Desktop View"] },
                            { title: "Company", links: ["About Us", "Careers", "Blog", "Legal", "Contact"] },
                            { title: "Support", links: ["Help Center", "Status", "Report Issue", "Talk to Sales", "SLA"] }
                        ].map((col, i) => (
                            <div key={i} className="col-span-1">
                                <h4 className="font-bold text-slate-900 mb-6">{col.title}</h4>
                                <ul className="space-y-4">
                                    {col.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-slate-500 text-sm">© 2025 GlobalCorp Inc. All rights reserved.</div>
                        <div className="flex gap-8">
                            <a href="#" className="text-slate-500 hover:text-slate-900 text-sm font-medium">Privacy Policy</a>
                            <a href="#" className="text-slate-500 hover:text-slate-900 text-sm font-medium">Terms of Service</a>
                            <a href="#" className="text-slate-500 hover:text-slate-900 text-sm font-medium">Cookies Settings</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};
