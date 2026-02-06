import React, { useState } from 'react';
import { useResponsive } from '@/hooks/useResponsive';
import {
    Sparkles,
    Crown,
    Infinity,
    Hexagon,
    Zap,
    Globe,
    Menu,
    X,
    Play,
    ArrowRight
} from 'lucide-react';

export const S100TheUltimatePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isStrictMobile = deviceMode === 'mobile';
    const isDesktop = deviceMode === 'desktop';
    const isNavMobile = responsive.nav.showMobile;
    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden relative">
            {/* 
        THE ULTIMATE PRO
        - Theme: Iridescent / Holographic / The Pinnacle
        - Colors: Multi-gradient (Cyan, Fuchsia, Yellow, White)
        - Style: "God Mode", clean but rich, glass, glow
      */}

            {/* Aurora Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-50%] left-[-20%] w-[150vw] h-[150vw] bg-radial-gradient from-indigo-900 via-transparent to-transparent opacity-40 animate-pulse-slow"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[100vw] h-[100vw] bg-purple-900/40 rounded-full blur-[150px]"></div>

                {/* Noise */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            </div>

            {/* Navigation */}
            <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
                <div
                    className="max-w-screen-2xl mx-auto flex items-center justify-between"
                    style={{ padding: `${spacing.md} ${spacing.lg}` }}
                >
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 p-[2px]">
                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                <Zap className="text-white fill-white" size={20} />
                            </div>
                        </div>
                        <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 tracking-tighter">ULTIMATE</span>
                    </div>

                    {!isNavMobile && (
                        <nav className="flex items-center gap-10">
                            {['Ecosystem', 'Vision', 'Genesis'].map((item) => (
                                <a key={item} href="#" className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-500">
                                    {item}
                                </a>
                            ))}
                            <button className="px-8 py-3 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                Enter Portal
                            </button>
                        </nav>
                    )}

                    {isNavMobile && (
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-3 rounded-full bg-white/5 border border-white/10"
                        >
                            {menuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
                        </button>
                    )}
                </div>

                {menuOpen && isNavMobile && (
                    <div className="bg-black/90 backdrop-blur-3xl border-b border-white/10 p-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                        {['Ecosystem', 'Vision', 'Genesis'].map((item) => (
                            <a key={item} href="#" className="block text-lg font-bold uppercase tracking-widest text-white/50">{item}</a>
                        ))}
                        <button className="w-full py-5 rounded-full bg-white text-black font-black uppercase text-sm tracking-widest italic">
                            Enter Portal
                        </button>
                    </div>
                )}
            </header>

            <main>
                {/* Hero Section */}
                <section
                    className="relative min-h-[100vh] flex items-center overflow-hidden"
                    style={{ padding: `${spacing.section} ${spacing.lg}` }}
                >
                    {/* Background Visuals */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] bg-fuchsia-600/20 rounded-full blur-[150px] animate-pulse"></div>
                        <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>

                    <div
                        className="max-w-screen-2xl mx-auto w-full relative z-10 grid gap-16"
                        style={{
                            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                            gap: spacing.xxl
                        }}
                    >
                        <div className="flex flex-col justify-center items-start">
                            <div
                                className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 mb-8 backdrop-blur-sm"
                                style={{ marginBottom: spacing.lg }}
                            >
                                <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_#facc15]"></span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Quantum Edition 2024</span>
                            </div>

                            <h1
                                className="font-black text-white leading-[0.9] tracking-tighter mb-8 italic"
                                style={{
                                    fontSize: isStrictMobile ? responsive.fontSize['4xl'] : responsive.fontSize['5xl'],
                                    marginBottom: spacing.md
                                }}
                            >
                                THE <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400">UNREAL</span> <br />
                                STANDARD.
                            </h1>

                            <p
                                className="text-white/40 max-w-xl font-medium leading-relaxed italic"
                                style={{
                                    fontSize: isStrictMobile ? '1.125rem' : '1.5rem',
                                    marginBottom: spacing.xxl
                                }}
                            >
                                Experience the pinnacle of interactive design. A fusion of holographic aesthetics and high-performance engineering.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                                <button
                                    className="group relative px-10 py-5 rounded-full bg-white text-black font-black uppercase text-sm tracking-widest italic overflow-hidden transition-all hover:scale-105 active:scale-95"
                                    style={{ padding: `${spacing.md} ${spacing.xl}` }}
                                >
                                    <span className="relative z-10">Start Transcending</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </button>
                                <button
                                    className="px-10 py-5 rounded-full bg-transparent border-2 border-white/20 text-white font-black uppercase text-sm tracking-widest italic hover:bg-white/5 transition-all"
                                    style={{ padding: `${spacing.md} ${spacing.xl}` }}
                                >
                                    View Manifest
                                </button>
                            </div>
                        </div>

                        {/* Interactive Visual Element */}
                        <div className="relative group perspective-1000">
                            <div className="relative aspect-square rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-md rotate-3 group-hover:rotate-0 transition-all duration-1000 overflow-hidden shadow-2xl flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/20"></div>
                                <Zap className="text-white/20 w-1/2 h-1/2 animate-bounce" strokeWidth={0.5} />
                                <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10">
                                    <div className="h-2 w-24 bg-white/10 rounded-full mb-3 overflow-hidden">
                                        <div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-pulse"></div>
                                    </div>
                                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest italic">Signal Integrity: 99.4%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TRIFECTA FEATURES */}
                <section className="py-32 px-6">
                    <div
                        className="max-w-7xl mx-auto grid gap-8"
                        style={{ gridTemplateColumns: isStrictMobile ? '1fr' : 'repeat(3, 1fr)', gap: spacing.lg }}
                    >
                        {[
                            {
                                title: "Holographic",
                                subtitle: "Material",
                                desc: "Surfaces that bend light and shift color as you interact.",
                                gradient: "from-cyan-500 to-blue-500"
                            },
                            {
                                title: "Infinite",
                                subtitle: "Performance",
                                desc: "Powered by a quantum engine that scales endlessly.",
                                gradient: "from-fuchsia-500 to-purple-500"
                            },
                            {
                                title: "Ethereal",
                                subtitle: "Experience",
                                desc: "Interactions so smooth they feel like magic.",
                                gradient: "from-yellow-400 to-orange-500"
                            }
                        ].map((card, i) => (
                            <div key={i} className="group relative h-[500px] rounded-[40px] border border-white/10 bg-black overflow-hidden hover:border-white/30 transition-colors duration-500">
                                {/* Hover Glow */}
                                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${card.gradient} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

                                <div className="absolute bottom-0 left-0 p-10 space-y-4" style={{ padding: spacing.xl }}>
                                    <div className="text-sm font-medium uppercase tracking-widest opacity-50">{card.subtitle}</div>
                                    <h2 className="text-4xl font-bold" style={{ fontSize: responsive.fontSize['3xl'] }}>{card.title}</h2>
                                    <p className="text-white/60 leading-relaxed max-w-xs">{card.desc}</p>
                                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        <ArrowRight className="text-white" />
                                    </div>
                                </div>

                                {/* Center Icon Graphic */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                                    <Hexagon size={200} strokeWidth={0.5} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* BIG STATEMENT */}
                <section className="py-40 px-6 relative overflow-hidden">
                    {/* Background Mesh */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    </div>

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <h2
                            className="font-bold tracking-tight mb-12"
                            style={{
                                fontSize: isStrictMobile ? '2.5rem' : '5rem',
                                marginBottom: spacing.xl
                            }}
                        >
                            " Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. "
                        </h2>
                        <p className="text-sm uppercase tracking-widest opacity-40">— Antoine de Saint-Exupéry</p>
                    </div>
                </section>

                {/* PRICING / ACCESS */}
                <section className="py-32 px-6">
                    <div
                        className="max-w-4xl mx-auto bg-gradient-to-b from-[#111] to-black border border-white/10 rounded-[48px] text-center relative overflow-hidden"
                        style={{ padding: isStrictMobile ? spacing.xl : spacing.xxxl }}
                    >
                        {/* Iridescent Border */}
                        <div className="absolute inset-0 p-[1px] rounded-[48px] bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-yellow-500 opacity-30 -z-10"></div>

                        <Crown size={48} className="mx-auto text-white mb-8 opacity-80" />

                        <h2
                            className="font-bold mb-6"
                            style={{ fontSize: isStrictMobile ? '2.25rem' : '3.75rem' }}
                        >The Founder's Edition</h2>
                        <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto">
                            Lifetime access to the Ultimate Pro suite. Includes concierge onboarding and early access to future systems.
                        </p>

                        <div className="text-6xl font-bold mb-4">$999<span className="text-2xl text-white/30 font-normal">.00</span></div>
                        <p className="text-sm text-white/30 uppercase tracking-widest mb-12">Limited to 100 Units</p>

                        <button
                            className="px-16 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors"
                            style={{ width: isStrictMobile ? '100%' : 'auto' }}
                        >
                            Secure Your Access
                        </button>
                    </div>
                </section>
            </main>

            <footer className="py-20 px-6 border-t border-white/5 text-center">
                <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
                    <Infinity size={24} />
                </div>
                <p className="text-white/30 text-sm tracking-widest uppercase">
                    Constructed in the Void. &copy; 2024 Ultimate Systems.
                </p>
            </footer>
        </div>
    );
};
