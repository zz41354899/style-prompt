import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Rocket, Sparkles, Zap, TrendingUp, Layers, Box, Globe, Shield, Activity, Command } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S80StartupVibrantPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#000212] text-white selection:bg-[#B4F9F8] selection:text-[#000212]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

                .font-startup-display { font-family: 'Space Grotesk', sans-serif; }
                .font-startup-body { font-family: 'Inter', sans-serif; }

                /* Mesh Gradient Animation */
                @keyframes gradient-flow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .mesh-gradient-bg {
                    background: radial-gradient(circle at 15% 50%, rgba(124, 58, 237, 0.15), transparent 25%), 
                                radial-gradient(circle at 85% 30%, rgba(236, 72, 153, 0.15), transparent 25%);
                }
                
                .text-gradient-vibrant {
                    background: linear-gradient(to right, #A78BFA, #F472B6, #60A5FA);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-size: 200% auto;
                    animation: gradient-flow 5s linear infinite;
                }
                
                .btn-glow {
                     box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
                }

                /* Bento Grid Hover Effect */
                .bento-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    transition: all 0.3s ease;
                }
                
                .bento-card:hover {
                    background: rgba(255, 255, 255, 0.06);
                    border-color: rgba(255, 255, 255, 0.1);
                    transform: translateY(-2px);
                }
                
                /* Beam Animation */
                .beam-line {
                    position: absolute;
                    height: 1px;
                    width: 100px;
                    background: linear-gradient(90deg, transparent, #fff, transparent);
                    opacity: 0.3;
                    pointer-events: none;
                }
                
                @keyframes beam {
                    0% { transform: translateX(-100%) translateY(0); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: translateX(100%) translateY(100px); opacity: 0; }
                }
            `}</style>

            {/* Ambient Background */}
            <div className="fixed inset-0 mesh-gradient-bg z-[-1]"></div>

            {/* Grid Overlay */}
            <div className="fixed inset-0 z-[-1]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 border-b border-white/5 bg-[#000212]/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                            <Rocket size={18} className="text-white" />
                        </div>
                        <span className="text-xl font-startup-display font-bold tracking-tight">HyperScale</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Features', 'Integrations', 'Changelog', 'Pricing'].map((item) => (
                                <a key={item} href="#" className="font-startup-body text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                    {item}
                                </a>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-4">
                        {!isMobile && <button className="text-sm font-medium text-slate-400 hover:text-white">Log in</button>}
                        <button className="px-5 py-2 bg-white text-black font-startup-body text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors btn-glow">
                            Join Waitlist
                        </button>
                        {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-400">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="border-t border-white/5 bg-[#000212] p-4">
                        <nav className="flex flex-col gap-4">
                            {['Features', 'Integrations', 'Changelog', 'Pricing'].map((item) => (
                                <div key={item} className="py-2 text-slate-400 font-medium hover:text-white transition-colors">
                                    {item}
                                </div>
                            ))}
                            <button className="w-full py-3 bg-white text-black rounded-full font-bold">Log in</button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-24 lg:py-40 px-6 relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-300 font-startup-body text-xs font-semibold uppercase tracking-wider backdrop-blur-md animate-fade-in-up">
                        <Sparkles size={12} fill="currentColor" /> Public Beta 2.0
                    </div>

                    <h1 className="text-6xl md:text-8xl font-startup-display font-bold mb-8 leading-tight tracking-tight">
                        Experience the <br />
                        <span className="text-gradient-vibrant">next evolution</span>
                    </h1>

                    <p className="font-startup-body text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        A unified workspace for engineering teams. Ship faster, coordinate seamlessly, and automate your workflows with AI.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="px-8 py-4 bg-white text-black font-startup-body font-semibold rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2 group">
                            Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-white/5 text-white font-startup-body font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2">
                            <Command size={18} /> Command Menu
                        </button>
                    </div>
                </div>

                {/* Abstract Background Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            </section>

            {/* Bento Grid Features */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">

                        {/* Large Card */}
                        <div className="md:col-span-2 lg:col-span-2 row-span-1 bento-card rounded-3xl p-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 blur-[50px] rounded-full"></div>
                            <Zap size={32} className="text-yellow-400 mb-6" />
                            <h3 className="text-2xl font-startup-display font-bold mb-2">Lightning Fast</h3>
                            <p className="text-slate-400 font-startup-body mb-8">Optimized for speed. Your workspace loads in under 100ms.</p>

                            {/* Mockup */}
                            <div className="absolute bottom-0 left-8 right-8 h-32 bg-[#0A0A0A] rounded-t-xl border-t border-x border-white/10 p-4">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                                    <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Tall Card */}
                        <div className="md:col-span-1 lg:col-span-1 md:row-span-2 lg:row-span-2 bento-card rounded-3xl p-8 flex flex-col justify-between">
                            <div>
                                <Shield size={32} className="text-emerald-400 mb-6" />
                                <h3 className="text-2xl font-startup-display font-bold mb-2">Secure by Design</h3>
                                <p className="text-slate-400 font-startup-body">SOC2 Type II Certified. End-to-end encryption for all your data.</p>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <div className="w-32 h-32 rounded-full border-4 border-emerald-500/20 flex items-center justify-center p-2 relative">
                                    <div className="absolute inset-0 border-t-4 border-emerald-500 rounded-full animate-spin"></div>
                                    <Shield size={40} className="text-emerald-500" />
                                </div>
                            </div>
                        </div>

                        {/* Small Card 1 */}
                        <div className="md:col-span-1 lg:col-span-1 bento-card rounded-3xl p-8">
                            <TrendingUp size={32} className="text-blue-400 mb-6" />
                            <h3 className="text-xl font-startup-display font-bold mb-2">Real-time Sync</h3>
                            <p className="text-slate-400 text-sm">Collaborate with your team instantly.</p>
                        </div>

                        {/* Small Card 2 */}
                        <div className="md:col-span-1 lg:col-span-1 bento-card rounded-3xl p-8 relative overflow-hidden">
                            <Globe size={32} className="text-fuchsia-400 mb-6" />
                            <h3 className="text-xl font-startup-display font-bold mb-2">Global Edge</h3>
                            <p className="text-slate-400 text-sm">Deployed on 400+ distinct edge nodes.</p>
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        </div>

                        {/* Wide Card */}
                        <div className="md:col-span-2 lg:col-span-2 bento-card rounded-3xl p-8 flex items-center justify-between gap-8">
                            <div className="flex-1">
                                <Layers size={32} className="text-orange-400 mb-6" />
                                <h3 className="text-2xl font-startup-display font-bold mb-2">Infinite Integrations</h3>
                                <p className="text-slate-400 font-startup-body">Connect with GitLab, Slack, Linear, and countless other tools in your stack.</p>
                            </div>
                            <div className="hidden sm:flex gap-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10"></div>
                                ))}
                            </div>
                        </div>

                        {/* Small Card 3 */}
                        <div className="md:col-span-2 lg:col-span-1 bento-card rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                            <div className="text-4xl font-startup-display font-bold text-white mb-2">99.9%</div>
                            <div className="text-slate-400 text-sm">Uptime SLA</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 px-6 relative">
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent top-0"></div>

                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-startup-display font-bold mb-6">Simple, transparent pricing</h2>
                        <p className="text-slate-400 text-lg">No hidden fees. Scale as you grow.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Starter', price: '$0', desc: 'For individuals', features: ['1 Workspace', 'Up to 3 members', 'Community Support'] },
                            { name: 'Pro', price: '$29', desc: 'For startups', features: ['Unlimited Workspaces', 'Up to 20 members', 'Priority Support', 'API Access'], highlight: true },
                            { name: 'Business', price: '$99', desc: 'For scaling teams', features: ['SSO Enforcement', 'Unlimited members', 'Dedicated Manager', 'Custom Contracts'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 rounded-3xl border flex flex-col ${plan.highlight ? 'bg-white/5 border-violet-500/50 shadow-[0_0_30px_rgba(124,58,237,0.1)]' : 'bg-transparent border-white/10'}`}>
                                {plan.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-violet-600 text-white text-xs font-bold rounded-full border border-violet-400">
                                        MOST POPULAR
                                    </div>
                                )}

                                <h3 className="text-xl font-bold font-startup-display mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold font-startup-display mb-4">{plan.price}<span className="text-sm text-slate-500 font-normal">/mo</span></div>
                                <p className="text-slate-400 text-sm mb-8">{plan.desc}</p>

                                <button className={`w-full py-3 rounded-xl font-semibold text-sm mb-8 transition-colors ${plan.highlight ? 'bg-white text-black hover:bg-slate-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                                    {plan.highlight ? 'Start Free Trial' : 'Subscribe'}
                                </button>

                                <ul className="space-y-4 mt-auto">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                                            <Check size={16} className="text-violet-500" />
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
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 blur-[60px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-12 md:p-20">
                        <h2 className="text-4xl md:text-5xl font-startup-display font-bold mb-8">
                            Ready to ship your next big thing?
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-colors">
                                Start Building Now
                            </button>
                            <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-[#000212] pt-16 pb-8 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-10">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                                <Rocket size={12} className="text-white" />
                            </div>
                            <span className="text-lg font-startup-display font-bold">HyperScale</span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs">
                            The platform for modern engineering teams.
                        </p>
                    </div>

                    {['Product', 'Company', 'Resources', 'Legal'].map((col, i) => (
                        <div key={i}>
                            <h4 className="font-bold text-white mb-4 text-sm">{col}</h4>
                            <ul className="space-y-3">
                                {[1, 2, 3].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Link {item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-slate-600 text-sm">
                    © 2025 HyperScale Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
};
