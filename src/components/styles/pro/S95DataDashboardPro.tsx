import React, { useState } from 'react';
import {
    BarChart3,
    PieChart,
    Activity,
    TrendingUp,
    Users,
    Globe,
    ArrowRight,
    Menu,
    X,
    Search,
    Bell,
    MoreVertical,
    Layers,
    Zap,
    Shield
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S95DataDashboardPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';
    const isTablet = deviceMode === 'tablet';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
            {/* 
        DATA DASHBOARD PRO THEME
        - Background: #020617 (Slate 950)
        - Cards: Glassmorphism with Slate 900/800
        - Accents: Indigo, Violet, Emerald
        - Dense, information-rich layout
      */}

            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
            </div>

            {/* NAVBAR */}
            <nav className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <Activity size={20} className="text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Insight<span className="text-indigo-400">OS</span></span>
                    </div>

                    {!isMobile && !isTablet && (
                        <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
                            {['Platform', 'Solutions', 'Customers', 'Pricing'].map((item) => (
                                <a key={item} href="#" className="hover:text-white transition-colors">
                                    {item}
                                </a>
                            ))}
                            <div className="h-4 w-px bg-slate-800"></div>
                            <a href="#" className="hover:text-white transition-colors">Login</a>
                            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all shadow-lg shadow-indigo-600/20">
                                Get Started
                            </button>
                        </div>
                    )}

                    {(isMobile || isTablet) && (
                        <button
                            className="text-slate-400"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>
            </nav>

            <main className="relative z-10">
                {/* HERO SECTION */}
                <section className="pt-24 pb-32 px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                Real-time Data Intelligence
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                                Turn chaos into <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">clarity.</span>
                            </h1>

                            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
                                The enterprise analytics platform that unifies your data stream. Visualize, analyze, and act on insights in milliseconds.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-2">
                                    Start Free Trial <ArrowRight size={18} />
                                </button>
                                <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-medium rounded-xl border border-slate-700 transition-colors">
                                    View Live Demo
                                </button>
                            </div>

                            <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
                                <span>Trusted by:</span>
                                <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                                    <span className="flex items-center gap-1"><Globe size={16} /> ACME</span>
                                    <span className="flex items-center gap-1"><Zap size={16} /> BOLT</span>
                                    <span className="flex items-center gap-1"><Shield size={16} /> SECURE</span>
                                </div>
                            </div>
                        </div>


                        {/* DASHBOARD VISUALIZATION */}
                        <div className="relative group perspective-1000">
                            {/* Glow behind */}
                            <div className="absolute inset-0 bg-indigo-600/20 filter blur-[80px] rounded-full opacity-50"></div>

                            {/* Main Dashboard Card */}
                            <div className="relative bg-[#0f172a]/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-6 transform rotate-y-[-5deg] rotate-x-[5deg] group-hover:rotate-0 transition-transform duration-700 ease-out">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Marketing Overview</h3>
                                        <p className="text-xs text-slate-400">Last 30 Days</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 hover:bg-slate-700 rounded-lg text-slate-400"><Search size={18} /></button>
                                        <button className="p-2 hover:bg-slate-700 rounded-lg text-slate-400"><Bell size={18} /></button>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {[
                                        { label: 'Total Revenue', val: '$84,320', trend: '+12.5%', color: 'text-emerald-400' },
                                        { label: 'Active Users', val: '2,420', trend: '+5.2%', color: 'text-emerald-400' },
                                        { label: 'Bounce Rate', val: '42.3%', trend: '-2.1%', color: 'text-indigo-400' },
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                                            <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                                            <div className="text-xl font-bold text-white mb-2">{stat.val}</div>
                                            <div className={`text-xs font-medium ${stat.color} flex items-center gap-1`}>
                                                <TrendingUp size={12} /> {stat.trend}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Main Chart (Simulated) */}
                                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 h-64 relative flex items-end justify-between gap-2 overflow-hidden">
                                    <div className="absolute top-4 left-6 text-sm font-bold text-white">Traffic Sources</div>

                                    {/* Bars */}
                                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 65].map((h, i) => (
                                        <div key={i} className="w-full bg-indigo-500/20 rounded-t-sm relative group/bar hover:bg-indigo-500/40 transition-colors" style={{ height: `${h}%` }}>
                                            <div className="absolute bottom-0 left-0 w-full bg-indigo-500 rounded-t-sm transition-all duration-500" style={{ height: `${h * 0.7}%` }}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Card 1 */}
                            <div className="absolute -right-8 top-12 bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-xl w-48 animate-float delay-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                                        <Users size={16} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400">New Leads</div>
                                        <div className="font-bold text-white font-mono">+128</div>
                                    </div>
                                </div>
                                <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full w-[70%] bg-emerald-500"></div>
                                </div>
                            </div>

                            {/* Floating Card 2 */}
                            <div className="absolute -left-8 bottom-24 bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-xl w-48 animate-float delay-300">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-500">
                                        <Zap size={16} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400">Server Load</div>
                                        <div className="font-bold text-white font-mono">34%</div>
                                    </div>
                                </div>
                                <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full w-[34%] bg-violet-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* FEATURES GRID */}
                <section className="py-32 px-6 bg-[#0B1121]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Unified Intelligence</h2>
                            <p className="text-lg text-slate-400">
                                Connect every data source, visualize every metric, and empower every team member with the data they need.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Layers, title: "Data Integration", desc: "Connects with SQL, NoSQL, REST APIs, and GraphQL endpoints instantly." },
                                { icon: BarChart3, title: "Advanced Visualization", desc: "Over 50+ chart types including heatmaps, scatter plots, and geo-maps." },
                                { icon: Shield, title: "Enterprise Security", desc: "SSO, RBAC, and Audit Logs built-in for enterprise compliance." },
                            ].map((feat, i) => (
                                <div key={i} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors group">
                                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <feat.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{feat.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* BIG NUMBERS SECTION */}
                <section className="py-32 px-6 border-y border-slate-800 bg-[#020617]">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { val: "10M+", label: "Queries / Day" },
                            { val: "99.9%", label: "Uptime SLA" },
                            { val: "500+", label: "Integrations" },
                            { val: "24/7", label: "Support" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.val}</div>
                                <div className="text-sm font-medium text-indigo-400 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* CTA */}
                <section className="py-32 px-6 text-center relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to see the big picture?</h2>
                        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                            Join 10,000+ companies using InsightOS to drive growth through data.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/20 transition-all hover:-translate-y-1">
                                Get Started Free
                            </button>
                            <button className="px-10 py-4 bg-white text-[#020617] font-bold rounded-xl hover:bg-slate-200 transition-colors">
                                Talk to Sales
                            </button>
                        </div>
                    </div>
                </section>


                {/* FOOTER */}
                <footer className="bg-[#020617] border-t border-slate-800 py-16 px-6 text-sm text-slate-500">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12">
                        <div className="col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <Activity size={24} className="text-indigo-500" />
                                <span className="text-xl font-bold text-white">InsightOS</span>
                            </div>
                            <p className="max-w-xs mb-6">
                                The complete data intelligence platform for modern teams.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors text-white"><Globe size={14} /></a>
                                <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors text-white"><Users size={14} /></a>
                            </div>
                        </div>

                        {[
                            { head: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
                            { head: "Resources", links: ["Documentation", "API", "Community", "Blog"] },
                            { head: "Company", links: ["About", "Careers", "Legal", "Contact"] },
                        ].map((col, i) => (
                            <div key={i} className="flex flex-col gap-4">
                                <h4 className="font-bold text-white">{col.head}</h4>
                                {col.links.map(link => (
                                    <a key={link} href="#" className="hover:text-indigo-400 transition-colors">{link}</a>
                                ))}
                            </div>
                        ))}
                    </div>
                </footer>
            </main>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
        </div>
    );
}
