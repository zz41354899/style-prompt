import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Droplets, Circle, Sparkles, Gem, Layers, Globe, Zap, Shield, Play } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S33LiquidMetalPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#050508',
        surface: 'rgba(255, 255, 255, 0.03)',
        text: '#F0F0FF',
        muted: '#A0A0B0',
        silver: '#E0E0E0',
        chrome: '#FFFFFF',
        accent: '#A0A0FF'
    };

    // Advanced Chrome Gradients
    const chromeGradient = 'linear-gradient(135deg, #e0e0e0 0%, #ffffff 20%, #a0a0a0 40%, #c0c0c0 60%, #ffffff 80%, #909090 100%)';
    const mercuryGradient = 'conic-gradient(from 0deg, #D0D0E0, #F0F0FF, #A0A0B0, #D0D0E0)';
    const liquidGlow = '0 0 30px rgba(160, 160, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.5)';

    useEffect(() => {
        // Add custom keyframes for fluid movement
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes morph {
                0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
                100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            }
            @keyframes flow {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .fluid-blob {
                animation: morph 8s ease-in-out infinite;
            }
            .chrome-text {
                background: linear-gradient(to bottom, #fff 0%, #999 50%, #fff 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: 0 2px 10px rgba(255,255,255,0.2);
            }
            .liquid-button {
                transition: all 0.3s ease;
                background-size: 200% 200%;
                animation: flow 3s infinite linear;
            }
            .liquid-button:hover {
                transform: scale(1.05);
                box-shadow: 0 0 30px rgba(255,255,255,0.4);
            }
            .glass-panel {
                background: rgba(255, 255, 255, 0.03);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.05);
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden font-sans selection:bg-white selection:text-black" style={{ backgroundColor: colors.bg, color: colors.text }}>

            {/* SVG Filter for Gooey Effect */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
            </svg>

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none filter url(#goo)">
                <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-gray-500 rounded-full mix-blend-screen opacity-40 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-slate-600 rounded-full mix-blend-screen opacity-30 blur-3xl" style={{ animation: 'morph 10s infinite' }}></div>
                <div className="absolute top-[40%] left-[40%] w-64 h-64 bg-gray-400 rounded-full mix-blend-screen opacity-20 blur-2xl flex items-center justify-center animate-spin-slow"></div>
            </div>


            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden fluid-blob" style={{ background: chromeGradient }}>
                            <div className="absolute inset-0 bg-white/20 blur-sm"></div>
                            <Droplets size={20} className="text-black relative z-10" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter chrome-text uppercase">Quicksilver</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-1">
                            {['Fluidity', 'Reflections', 'Form'].map((item) => (
                                <button key={item} className="px-5 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                                    {item}
                                </button>
                            ))}
                            <div className="w-px h-6 bg-white/10 mx-4"></div>
                            <button className="px-6 py-2 rounded-full font-bold text-black text-sm liquid-button"
                                style={{ background: chromeGradient }}>
                                ACCESS
                            </button>
                        </nav>
                    )}
                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="absolute top-full left-0 w-full glass-panel border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4">
                        {['Fluidity', 'Reflections', 'Form'].map((item) => (
                            <div key={item} className="text-lg font-medium text-gray-300 py-2 border-b border-white/5">{item}</div>
                        ))}
                        <button className="w-full py-4 rounded-full font-bold text-black liquid-button mt-4" style={{ background: chromeGradient }}>
                            ACCESS
                        </button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section className="relative pt-24 pb-40 px-6 overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 bg-white/5 mb-12 backdrop-blur-md animate-in fade-in zoom-in duration-700">
                        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white] animate-pulse"></div>
                        <span className="text-sm font-bold tracking-widest uppercase text-gray-300">Version 3.0 // Liquid State</span>
                    </div>

                    <h1 className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter mb-10 chrome-text mix-blend-normal">
                        SHAPE <br /> SHIFTER
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
                        Interfaces that melt, flow, and reform. Experience the <span className="text-white font-medium border-b border-white/20">next state of matter</span> in digital design.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <button className="group relative px-10 py-5 rounded-full bg-transparent overflow-hidden transition-all hover:scale-105 active:scale-95">
                            <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity" style={{ background: chromeGradient }}></div>
                            <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-50 transition-opacity"></div>
                            <span className="relative z-10 text-black font-black tracking-wide flex items-center gap-3">
                                START MELTING <ArrowRight size={20} />
                            </span>
                        </button>

                        <button className="px-10 py-5 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-white font-bold tracking-wide flex items-center gap-3 group">
                            <Play size={18} fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity w-0 group-hover:w-5" />
                            SHOWREEL
                        </button>
                    </div>
                </div>

                {/* Floating Blobs (Foreground) */}
                <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-br from-white to-gray-500 rounded-full blur-sm opacity-60 fluid-blob animate-bounce duration-3000 delay-1000 z-0"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-tr from-gray-300 to-white rounded-full blur-sm opacity-50 fluid-blob z-0" style={{ animationDelay: '2s' }}></div>
            </section>

            {/* Features (Grid) */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Droplets, title: "Viscosity", desc: "Adjustable fluid simulation parameters for realistic gooey interactions." },
                            { icon: Zap, title: "Refraction", desc: "Real-time index of refraction calculations for glass-like distortion." },
                            { icon: Layers, title: "Surface Tension", desc: "Natural organic shapes that merge and separate dynamically." }
                        ].map((f, i) => (
                            <div key={i} className="glass-panel p-10 rounded-[40px] group hover:bg-white/10 transition-colors cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 border border-white/20 group-hover:scale-110 transition-transform duration-500 ease-out"
                                    style={{ boxShadow: liquidGlow }}>
                                    <f.icon className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Showcase (Mercury) */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto glass-panel rounded-[50px] p-8 md:p-20 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 chrome-text leading-tight">MERCURY<br />PRECISION</h2>
                            <div className="space-y-6">
                                {[98, 85, 92].map((val, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between text-sm font-bold tracking-widest text-gray-400 uppercase">
                                            <span>Metric 0{i + 1}</span>
                                            <span>{val}%</span>
                                        </div>
                                        <div className="h-4 bg-white/10 rounded-full overflow-hidden p-[2px]">
                                            <div className="h-full bg-gradient-to-r from-gray-400 to-white rounded-full relative" style={{ width: `${val}%` }}>
                                                <div className="absolute inset-0 bg-white/50 blur-[2px]"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-80 flex items-center justify-center">
                            {/* Abstract Liquid Shape */}
                            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-white via-gray-400 to-black fluid-blob relative z-10 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                                <div className="absolute inset-2 rounded-full bg-black/90 fluid-blob blur-sm"></div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full fluid-blob"></div>
                            </div>
                            {/* Satellites */}
                            <div className="absolute w-16 h-16 rounded-full bg-white blur-sm top-0 right-10 animate-pulse"></div>
                            <div className="absolute w-8 h-8 rounded-full bg-gray-400 blur-[1px] bottom-10 left-0 fluid-blob"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials (Fluid Voices) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center font-bold text-3xl mb-16 tracking-widest text-gray-400 uppercase">Fluid Voices</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "C. T-1000", role: "Shape Shifter", quote: "Finally, a UI that understands my need to reform at will." },
                            { name: "Alex Murphy", role: "Officer", quote: "Clean. Efficient. Chrome. It meets all directives." },
                            { name: "Silver Surfer", role: "Herald", quote: "Navigate the cosmos with unparalleled smoothness." }
                        ].map((t, i) => (
                            <div key={i} className="relative p-1 z-10 group">
                                {/* Border Gradient wrapper */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-transparent group-hover:from-white/40 transition-colors"></div>
                                <div className="bg-[#0A0A0E] rounded-[22px] p-8 h-full relative overflow-hidden">
                                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
                                    <Sparkles className="text-white mb-6 opacity-50" size={24} />
                                    <p className="text-lg text-gray-300 mb-8 italic relative z-10">"{t.quote}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-200 to-white flex items-center justify-center font-bold text-black text-xs shadow-lg">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white text-sm">{t.name}</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Cards) */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center font-black text-5xl mb-20 chrome-text">ACQUIRE</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[{ name: 'Solid', price: '$29', hot: false }, { name: 'Liquid', price: '$99', hot: true }, { name: 'Gas', price: '$199', hot: false }].map((plan, i) => (
                            <div key={i} className={`p-8 rounded-[40px] flex flex-col items-center text-center transition-all duration-500 ${plan.hot ? 'glass-panel scale-105 border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.1)]' : 'border border-white/5 hover:border-white/20 bg-white/[0.02]'}`}>
                                <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-4">{plan.name}</h3>
                                <div className="text-5xl font-black text-white mb-8 tracking-tighter">{plan.price}</div>

                                <div className="space-y-4 mb-10 w-full">
                                    {['Physics Engine', '4K Textures', 'Export to WebGL'].map((f) => (
                                        <div key={f} className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                <button className={`w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all ${plan.hot ? 'liquid-button text-black' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}
                                    style={{ background: plan.hot ? chromeGradient : '' }}>
                                    Init
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                            <Droplets size={24} />
                        </div>
                        <div className="text-2xl font-black chrome-text tracking-tighter">LIQUID</div>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-gray-500">
                        {['Terms', 'Privacy', 'Physics'].map(l => (
                            <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
                        ))}
                    </div>
                    <div className="text-sm text-gray-600">
                        © 2025 Quicksilver Inc.
                    </div>
                </div>
            </footer>

        </div>
    );
};
