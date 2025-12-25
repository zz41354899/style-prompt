import { useState } from 'react';
import { LayoutDashboard, TrendingUp, Users, BarChart3, PieChart, Activity, Menu, X, ArrowRight, Check, Zap, Shield } from 'lucide-react';

export const S95DataDashboard = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B] selection:bg-[#3B82F6] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
                .font-ui { font-family: 'Inter', sans-serif; }
            `}</style>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                            <LayoutDashboard size={20} className="text-white" />
                        </div>
                        <span className="font-ui font-bold text-lg">DataPulse</span>
                    </div>

                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8`}>
                        {['Features', 'Pricing', 'Integrations', 'Docs'].map((item) => (
                            <a key={item} href="#" className="font-ui text-sm text-slate-600 hover:text-slate-900 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button className={`${isMobile ? 'hidden' : 'block'} font-ui text-sm text-slate-600 hover:text-slate-900`}>
                            Sign In
                        </button>
                        <button className="font-ui text-sm bg-[#3B82F6] text-white px-5 py-2 rounded-lg hover:bg-[#2563EB] transition-colors">
                            Get Started
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`${isMobile ? 'block' : 'hidden'} p-2 text-slate-600`}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="bg-white border-t border-slate-200 p-4">
                        {['Features', 'Pricing', 'Integrations', 'Docs'].map((item) => (
                            <a key={item} href="#" onClick={() => setMenuOpen(false)} className="block py-3 font-ui text-slate-600 hover:text-slate-900 border-b border-slate-100 last:border-0">
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className={`${isMobile ? 'py-16' : 'py-24'} px-4`}>
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-ui text-[#3B82F6] mb-6">
                        <Zap size={14} /> Real-time Analytics
                    </div>
                    <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-ui font-bold mb-6 leading-tight`}>
                        Transform Data Into<br />
                        <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Actionable Insights</span>
                    </h1>
                    <p className={`font-ui ${isMobile ? 'text-base' : 'text-xl'} text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed`}>
                        The modern analytics platform that helps teams make data-driven decisions faster. Beautiful dashboards, powerful queries, zero complexity.
                    </p>
                    <div className={`flex gap-4 justify-center ${isMobile ? 'flex-col' : ''}`}>
                        <button className="font-ui bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#2563EB] transition-colors">
                            Start Free Trial <ArrowRight size={20} />
                        </button>
                        <button className="font-ui text-slate-700 px-8 py-4 rounded-lg font-semibold border border-slate-300 hover:border-slate-400 transition-colors">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
                        {/* Mini Dashboard */}
                        <div className="p-6 bg-slate-50 border-b border-slate-200">
                            <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} gap-4`}>
                                {[
                                    { label: 'Revenue', value: '$48.2K', change: '+12%', color: 'text-green-600' },
                                    { label: 'Users', value: '2,847', change: '+8%', color: 'text-green-600' },
                                    { label: 'Bounce', value: '32%', change: '-5%', color: 'text-green-600' },
                                    { label: 'Sessions', value: '12.4K', change: '+15%', color: 'text-green-600' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white p-4 rounded-xl border border-slate-100">
                                        <div className="text-xs text-slate-500 font-ui mb-1">{stat.label}</div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold font-ui">{stat.value}</span>
                                            <span className={`text-xs font-semibold ${stat.color}`}>{stat.change}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Chart Area */}
                        <div className="p-6 h-48 flex items-end gap-2">
                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95, 65, 80, 55, 70].map((h, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-[#3B82F6] to-[#8B5CF6] rounded-t opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-ui font-bold text-center mb-4`}>Everything You Need</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-xl mx-auto font-ui">Powerful analytics features designed for modern teams</p>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
                        {[
                            { icon: BarChart3, title: 'Custom Dashboards', desc: 'Build beautiful dashboards with drag-and-drop widgets' },
                            { icon: TrendingUp, title: 'Real-time Data', desc: 'See your metrics update live as events happen' },
                            { icon: Users, title: 'Team Collaboration', desc: 'Share insights and collaborate with your team' },
                            { icon: PieChart, title: 'Advanced Charts', desc: '20+ chart types for any visualization need' },
                            { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 compliant with role-based access control' },
                            { icon: Activity, title: 'Anomaly Detection', desc: 'AI-powered alerts when metrics deviate from normal' },
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-xl border border-slate-200 hover:border-[#3B82F6] hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                                    <item.icon size={24} className="text-[#3B82F6]" />
                                </div>
                                <h3 className="font-ui font-semibold text-lg mb-2">{item.title}</h3>
                                <p className="font-ui text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-ui font-bold text-center mb-12`}>Simple, Transparent Pricing</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                        {[
                            { name: 'Starter', price: '$0', desc: 'For individuals', features: ['5 Dashboards', '10K events/mo', 'Basic charts', 'Email support'] },
                            { name: 'Pro', price: '$49', desc: 'For growing teams', features: ['Unlimited dashboards', '1M events/mo', 'All chart types', 'Priority support', 'API access'], featured: true },
                            { name: 'Enterprise', price: 'Custom', desc: 'For large organizations', features: ['Everything in Pro', 'Unlimited events', 'SSO & SAML', 'Dedicated support', 'SLA guarantee'] },
                        ].map((plan, i) => (
                            <div key={i} className={`rounded-2xl p-8 ${plan.featured ? 'bg-[#3B82F6] text-white ring-4 ring-blue-100' : 'bg-white border border-slate-200'}`}>
                                <h3 className="font-ui font-semibold text-xl mb-1">{plan.name}</h3>
                                <p className={`text-sm mb-4 ${plan.featured ? 'text-blue-100' : 'text-slate-500'}`}>{plan.desc}</p>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-bold font-ui">{plan.price}</span>
                                    {plan.price !== 'Custom' && <span className={plan.featured ? 'text-blue-100' : 'text-slate-500'}>/mo</span>}
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className={`flex items-center gap-3 text-sm font-ui ${plan.featured ? 'text-white/90' : 'text-slate-600'}`}>
                                            <Check size={16} className={plan.featured ? 'text-white' : 'text-[#3B82F6]'} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-ui font-semibold ${plan.featured ? 'bg-white text-[#3B82F6]' : 'bg-[#3B82F6] text-white'} hover:opacity-90 transition-opacity`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-3xl p-12 text-white">
                        <TrendingUp className="w-12 h-12 mx-auto mb-6 opacity-80" />
                        <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-ui font-bold mb-6`}>Start Making Data-Driven Decisions</h2>
                        <p className="text-white/80 mb-8 max-w-lg mx-auto font-ui">Join 10,000+ teams using DataPulse to grow their business.</p>
                        <button className="font-ui bg-white text-[#3B82F6] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors">
                            Start Free — No Credit Card Required
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 bg-white border-t border-slate-200">
                <div className="max-w-6xl mx-auto">
                    <div className={`${isMobile ? 'flex flex-col gap-8' : 'flex justify-between'} mb-8`}>
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                                <LayoutDashboard size={20} className="text-white" />
                            </div>
                            <span className="font-ui font-bold text-lg">DataPulse</span>
                        </div>
                        <div className={`flex ${isMobile ? 'flex-wrap' : ''} gap-6 text-sm text-slate-600 font-ui`}>
                            {['Features', 'Pricing', 'Docs', 'Blog', 'Changelog', 'Status'].map((item) => (
                                <a key={item} href="#" className="hover:text-slate-900 transition-colors">{item}</a>
                            ))}
                        </div>
                    </div>
                    <div className="text-center text-sm text-slate-500 pt-8 border-t border-slate-200 font-ui">
                        © 2024 DataPulse. Analytics made simple.
                    </div>
                </div>
            </footer>
        </div>
    );
};
