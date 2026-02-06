import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Triangle, Box, Shapes, Gem, Cpu, Zap, Layers } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S43LowPolyPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#0A0B14] text-white font-sans selection:bg-cyan-500 selection:text-black">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Teko:wght@300;400;500;600;700&display=swap');

                .font-poly-heading { font-family: 'Teko', sans-serif; }
                .font-poly-body { font-family: 'Rajdhani', sans-serif; }

                .poly-bg-mesh {
                    background-image: 
                        linear-gradient(30deg, #13141F 12%, transparent 12.5%, transparent 87%, #13141F 87.5%, #13141F),
                        linear-gradient(150deg, #13141F 12%, transparent 12.5%, transparent 87%, #13141F 87.5%, #13141F),
                        linear-gradient(30deg, #13141F 12%, transparent 12.5%, transparent 87%, #13141F 87.5%, #13141F),
                        linear-gradient(150deg, #13141F 12%, transparent 12.5%, transparent 87%, #13141F 87.5%, #13141F),
                        linear-gradient(60deg, #1A1B2E 25%, transparent 25.5%, transparent 75%, #1A1B2E 75%, #1A1B2E),
                        linear-gradient(60deg, #1A1B2E 25%, transparent 25.5%, transparent 75%, #1A1B2E 75%, #1A1B2E);
                    background-size: 80px 140px;
                    background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
                    opacity: 0.4;
                }

                .clip-poly-button {
                    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
                }
                
                .clip-shard {
                    clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%);
                }
                
                .glass-facet {
                    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    border-right: 1px solid rgba(255,255,255,0.05);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                }
                
                .glass-facet:hover {
                    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%);
                    border-color: rgba(0, 240, 255, 0.5);
                    box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
                }

                .text-glow {
                    text-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
            `}</style>

            <div className="absolute inset-0 poly-bg-mesh pointer-events-none"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/5 bg-[#0A0B14]/80">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 relative">
                            <Triangle className="absolute inset-0 text-cyan-500 fill-cyan-500/20 animate-pulse" size={40} strokeWidth={1.5} />
                            <Triangle className="absolute inset-0 text-white mix-blend-overlay" size={40} strokeWidth={1} style={{ transform: 'rotate(180deg)' }} />
                        </div>
                        <span className="text-3xl font-bold tracking-widest font-poly-heading text-white group-hover:text-cyan-400 transition-colors">POLY<span className="text-cyan-500">UI</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['Explore', 'Marketplace', 'Learn'].map((item) => (
                                <a key={item} href="#" className="text-lg font-medium text-gray-400 hover:text-white font-poly-body tracking-wide transition-colors uppercase decoration-2 underline-offset-4 hover:underline decoration-cyan-500/50">
                                    {item}
                                </a>
                            ))}
                            <button className="px-8 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold font-poly-body uppercase tracking-wider clip-poly-button hover:brightness-110 active:translate-y-0.5 transition-all">
                                Connect Wallet
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white hover:text-cyan-400 transition-colors">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full bg-[#0A0B14] border-b border-white/10 p-6 glass-facet border-t-0">
                        {['Explore', 'Marketplace', 'Learn'].map((item) => (
                            <div key={item} className="py-4 text-xl font-poly-heading tracking-wider border-b border-white/5 text-gray-300">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-cyan-600 text-white font-bold font-poly-body uppercase clip-poly-button">
                            Connect Wallet
                        </button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section className="relative py-20 px-6 lg:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-500/30 bg-cyan-500/5 clip-poly-button mb-8">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
                            <span className="text-cyan-400 font-poly-body font-bold tracking-widest text-sm">V2.0 NOW LIVE</span>
                        </div>

                        <h1 className="text-7xl lg:text-[100px] font-bold leading-[0.8] font-poly-heading mb-8 uppercase tracking-tighter">
                            Render <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-glow">
                                Reality
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-10 max-w-lg font-poly-body leading-relaxed border-l-2 border-cyan-500/30 pl-6">
                            Construct immersive digital experiences with our low-poly asset library. Minimalist geometry meets maximum impact.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-10 py-4 bg-white text-black font-bold font-poly-heading text-2xl uppercase tracking-wide clip-poly-button hover:bg-cyan-50 hover:scale-105 transition-transform flex items-center gap-3">
                                Start Building <ArrowRight size={24} />
                            </button>
                            <button className="px-10 py-4 border border-white/20 text-white font-bold font-poly-heading text-2xl uppercase tracking-wide clip-poly-button hover:bg-white/5 transition-colors">
                                View Demo
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
                        {/* Floating Polygons */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 clip-shard animate-float z-10 flex items-center justify-center">
                            <Box size={100} className="text-white/50" strokeWidth={0.5} />
                        </div>

                        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg border border-white/10 clip-poly-button animate-float" style={{ animationDelay: '1s' }}></div>

                        <div className="absolute bottom-20 left-10 w-56 h-56 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-white/10 clip-shard animate-float" style={{ animationDelay: '2s', transform: 'rotate(180deg)' }}></div>

                        {/* Wireframes */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 500 500">
                            <defs>
                                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#00F0FF" />
                                    <stop offset="100%" stopColor="#7000FF" />
                                </linearGradient>
                            </defs>
                            <path d="M250 50 L450 150 L350 350 L150 350 L50 150 Z" fill="none" stroke="url(#line-grad)" strokeWidth="1" />
                            <circle cx="250" cy="250" r="150" fill="none" stroke="rgba(255,255,255,0.1)" strokeDasharray="5,5" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-8">
                        <h2 className="text-5xl md:text-7xl font-bold font-poly-heading uppercase tracking-tighter">
                            System <span className="text-cyan-500">Modules</span>
                        </h2>
                        <div className="hidden md:block text-right font-poly-body text-gray-400">
                            INITIALIZING...<br />
                            CORE SYSTEMS ONLINE
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shapes, title: "Mesh Generation", desc: "Procedural geometry creation", color: "text-cyan-400" },
                            { icon: Cpu, title: "Optimized Core", desc: "High-performance rendering engine", color: "text-blue-400" },
                            { icon: Layers, title: "Asset Layers", desc: "Multi-level texture management", color: "text-purple-400" }
                        ].map((feature, i) => (
                            <div key={i} className="glass-facet p-10 group transition-all duration-300 hover:-translate-y-2 clip-shard min-h-[300px] flex flex-col justify-between">
                                <div>
                                    <feature.icon className={`w-12 h-12 ${feature.color} mb-6`} strokeWidth={1.5} />
                                    <h3 className="text-3xl font-bold font-poly-heading uppercase tracking-wide mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
                                    <p className="text-gray-400 font-poly-body text-lg leading-relaxed">{feature.desc}</p>
                                </div>
                                <div className="w-full h-1 bg-white/5 mt-8 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-transparent to-cyan-500 group-hover:w-full transition-all duration-700"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="py-24 px-6 bg-[#0E0F1A]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold font-poly-heading uppercase text-center mb-20 tracking-wide">
                        Access <span className="text-purple-500">License</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            { name: 'Initiate', price: '0', accent: 'border-white/20', bg: 'hover:bg-white/5' },
                            { name: 'Architect', price: '29', accent: 'border-cyan-500', bg: 'bg-cyan-900/10 hover:bg-cyan-900/20 shadow-[0_0_30px_rgba(0,240,255,0.1)]' },
                            { name: 'Magister', price: '99', accent: 'border-purple-500', bg: 'bg-purple-900/10 hover:bg-purple-900/20' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-1 ${plan.bg} transition-all duration-300 clip-poly-button`}>
                                <div className={`absolute inset-0 border-2 pointer-events-none clip-poly-button ${plan.accent}`}></div>
                                <div className="p-8 text-center h-full flex flex-col">
                                    <h3 className="text-2xl font-bold font-poly-heading uppercase tracking-widest text-gray-300 mb-4">{plan.name}</h3>
                                    <div className="text-7xl font-bold font-poly-heading mb-2">{plan.price}<span className="text-2xl text-gray-500 align-top ml-1">ETH</span></div>
                                    <p className="text-gray-500 font-poly-body text-sm mb-8 uppercase tracking-widest">Monthly Cycle</p>

                                    <ul className="space-y-4 mb-10 text-left flex-grow pl-4">
                                        {[1, 2, 3, 4].map((_, j) => (
                                            <li key={j} className="flex items-center gap-3 text-gray-400 font-poly-body text-lg">
                                                <div className="w-1.5 h-1.5 bg-current rotate-45"></div> Feature Module 0{j + 1}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 text-xl font-bold font-poly-heading uppercase tracking-widest clip-poly-button transition-all ${i === 1 ? 'bg-cyan-600 text-white hover:bg-cyan-500' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                                        Initialize
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold font-poly-heading uppercase mb-12 flex items-center gap-4">
                        <Zap className="text-yellow-500" /> System Queries
                    </h2>

                    <div className="space-y-4">
                        {[{ q: 'RENDERING PERFORMANCE?', a: 'Optimized via WebGL integration for 60fps on mobile devices.' },
                        { q: 'FILE EXPORT FORMATS?', a: 'Supports OBJ, FBX, GLTF, and optimized SVG vector output.' },
                        { q: 'COMMERCIAL USAGE RIGHTS?', a: 'All Assets created are royalty-free for commercial projects.' }
                        ].map((item, i) => (
                            <div key={i} className="border border-white/10 bg-white/5 clip-poly-button">
                                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold font-poly-body text-xl tracking-wide uppercase">{item.q}</span>
                                    <ChevronDown size={24} className={`text-cyan-500 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-6 pb-6 text-gray-400 font-poly-body text-lg border-t border-white/5 pt-4">
                                        <div className="text-cyan-500 text-sm mb-2 font-mono">ANSWER.LOG &gt;</div>
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-[#06060A] pt-20 pb-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Triangle size={32} className="text-cyan-500" fill="currentColor" />
                                <span className="text-3xl font-bold font-poly-heading text-white tracking-widest">POLYUI</span>
                            </div>
                            <p className="text-gray-500 font-poly-body max-w-xs">
                                Advancing the aesthetic of low-complexity geometry for the next generation of web interfaces.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                            {['Platform', 'Resources', 'Company'].map((col) => (
                                <div key={col}>
                                    <h4 className="font-bold font-poly-heading text-xl uppercase tracking-wider text-white mb-6">{col}</h4>
                                    <ul className="space-y-3 font-poly-body text-gray-400">
                                        {['About', 'Careers', 'Blog', 'Contact'].slice(0, 3).map((link) => (
                                            <li key={link}><a href="#" className="hover:text-cyan-400 transition-colors uppercase text-sm tracking-wide">{link}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 font-poly-body text-sm uppercase tracking-widest">
                        <span>© 2025 PolyUI Systems. All rights reserved.</span>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
