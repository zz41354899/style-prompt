import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Sparkles, Hexagon, Triangle, Disc, Layers, Zap, Globe, Cpu, Aperture, CreditCard } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S34HolographicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#050510',
        surface: 'rgba(255, 255, 255, 0.05)',
        text: '#FFFFFF',
        muted: '#A0A0C0'
    };

    // Holographic Foil Gradients
    const holoGradient = 'linear-gradient(135deg, rgba(255,0,128,0.5) 0%, rgba(0,255,255,0.5) 25%, rgba(255,0,255,0.5) 50%, rgba(255,255,0,0.5) 75%, rgba(0,255,255,0.5) 100%)';
    const holoText = 'linear-gradient(90deg, #FF00FF, #00FFFF, #FFFF00, #FF00FF)';
    const glassBorder = '1px solid rgba(255, 255, 255, 0.2)';

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes holoShift {
                0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
                50% { background-position: 100% 50%; filter: hue-rotate(45deg); }
                100% { background-position: 0% 50%; filter: hue-rotate(0deg); }
            }
            @keyframes glitch {
                0% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
                100% { transform: translate(0); }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(5deg); }
            }
            @keyframes scanline {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100%); }
            }
            .holo-bg {
                background: ${holoGradient};
                background-size: 200% 200%;
                animation: holoShift 5s linear infinite;
            }
            .holo-text {
                background: ${holoText};
                background-size: 200% auto;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: holoShift 3s linear infinite;
            }
            .glitch-hover:hover {
                animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
                color: #00FFFF;
                text-shadow: 2px 2px #FF00FF;
            }
            .holo-card {
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                position: relative;
                overflow: hidden;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .holo-card::before {
                content: '';
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                background: linear-gradient(125deg, transparent 0%, rgba(255,255,255,0.3) 40%, transparent 60%);
                transform: translateX(-100%);
                transition: transform 0.6s;
            }
            .holo-card:hover::before {
                transform: translateX(100%);
            }
            .holo-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
                border-color: rgba(0, 255, 255, 0.5);
            }
        `;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden font-sans selection:bg-[#FF00FF] selection:text-white"
            style={{ backgroundColor: colors.bg, color: colors.text }}>

            {/* Ambient Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full mix-blend-screen opacity-20 blur-[100px]" style={{ background: 'radial-gradient(circle, #FF00FF 0%, transparent 70%)' }}></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full mix-blend-screen opacity-20 blur-[100px]" style={{ background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)' }}></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: `linear-gradient(${colors.muted} 1px, transparent 1px), linear-gradient(90deg, ${colors.muted} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            </div>

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-8">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/10 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                            <Hexagon size={24} className="text-cyan-400 relative z-10" />
                        </div>
                        <span className="text-2xl font-black tracking-wider holo-text">PRISM.UI</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Spectrum', 'Refraction', 'Optics'].map((item) => (
                                <span key={item} className="font-medium text-sm text-gray-400 hover:text-white cursor-pointer transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                                </span>
                            ))}
                            <button className="px-6 py-2 rounded bg-white/5 border border-white/20 hover:bg-white/10 hover:border-cyan-400/50 transition-all font-bold tracking-wide text-sm flex items-center gap-2 group">
                                <Zap size={16} className="text-pink-500 group-hover:text-cyan-400 transition-colors" /> INITIALIZE
                            </button>
                        </nav>
                    )}
                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border border-white/20 rounded bg-white/5">
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    )}
                </div>
                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="holo-card border-x-0 border-t-0 border-b border-white/20 p-4 absolute w-full z-40">
                        {['Spectrum', 'Refraction', 'Optics', 'Initialize'].map((item) => (
                            <div key={item} className="py-3 px-4 border-b border-white/5 text-gray-300 text-lg">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            {/* Hero */}
            <section className="relative pt-24 pb-40 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">

                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/20 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                        <span className="text-xs font-bold tracking-[0.2em] text-cyan-300 uppercase">System Online</span>
                    </div>

                    <h1 className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter mb-8 mix-blend-screen relative">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white opacity-50 absolute top-[2px] left-[2px] blur-[1px]">DIGITAL</span>
                        <span className="holo-text relative z-10 glitch-hover">DIGITAL</span>
                        <span className="block mt-2 text-white glitch-hover">ILLUSION</span>
                    </h1>

                    <p className="max-w-2xl text-xl text-gray-400 mb-12 font-light leading-relaxed">
                        Step into a world of <span className="text-cyan-400">iridescent light</span> and refracted realities.
                        Components that shimmer with data.
                    </p>

                    <div className="flex gap-6">
                        <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-bold text-white shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_40px_rgba(255,0,255,0.6)] hover:scale-105 transition-all flex items-center gap-2">
                            ENTER VOID <ArrowRight size={18} />
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-white/20 rounded-lg font-bold text-white hover:bg-white/5 hover:border-cyan-400/50 transition-all">
                            SCAN SYSTEM
                        </button>
                    </div>

                    {/* Floating 3D Elements */}
                    <div className="absolute top-0 right-0 md:translate-x-1/2 w-64 h-64 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute bottom-0 left-0 md:-translate-x-1/2 w-96 h-96 border border-pink-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                </div>

                {/* Cards Deck */}
                <div className="mt-24 flex justify-center perspective-[1000px]">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="w-48 h-64 mx-[-20px] rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-2xl transition-all duration-500 hover:translate-y-[-20px] hover:mx-[0px] hover:z-10 group relative overflow-hidden"
                            style={{ transform: `rotate(${(i - 1) * 10}deg) translateZ(${(i - 1) * -50}px)` }}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-6 h-full flex flex-col justify-between">
                                <CreditCard className="text-white/50 group-hover:text-white transition-colors" size={32} />
                                <div className="space-y-2">
                                    <div className="h-1 w-full bg-white/20 rounded group-hover:bg-cyan-400/50"></div>
                                    <div className="h-1 w-2/3 bg-white/20 rounded group-hover:bg-pink-400/50"></div>
                                </div>
                            </div>
                            {/* Shine effect */}
                            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-16 text-center uppercase tracking-[0.3em] text-white/50">System Modules</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Aperture, title: "Refraction Engine", desc: "Simulated light bending through prismatic layers." },
                            { icon: Cpu, title: "Quantum Processing", desc: "Data visualization with holographic depth." },
                            { icon: Globe, title: "Global Grid", desc: "Interconnected node systems for spatial computing." }
                        ].map((item, i) => (
                            <div key={i} className="holo-card p-10 rounded-2xl group">
                                <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                                    <item.icon size={28} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Holograms */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        {[
                            { name: 'Core', price: '29', color: 'cyan', features: ['Basic Projection', '2D Mesh'] },
                            { name: 'Prism', price: '99', color: 'magenta', features: ['Full Spectrum', '3D Volumetric', 'Ray Tracing'] },
                            { name: 'Void', price: '199', color: 'white', features: ['Unlimited Dimensions', 'Reality Warp'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative w-full md:w-80 p-8 rounded-2xl border ${i === 1 ? 'border-pink-500/50 bg-pink-900/10 shadow-[0_0_50px_rgba(255,0,128,0.2)]' : 'border-white/10 bg-white/5'} backdrop-blur-md overflow-hidden group hover:scale-105 transition-transform duration-500`}>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

                                <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-gray-400">{plan.name}</h3>
                                <div className="flex items-start gap-1 mb-8">
                                    <span className="text-sm mt-2">$</span>
                                    <span className={`text-6xl font-black ${i === 1 ? 'holo-text' : 'text-white'}`}>{plan.price}</span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                                            <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-pink-500' : 'bg-cyan-500'}`}></div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 rounded border font-bold text-sm tracking-wider uppercase transition-all ${i === 1 ? 'bg-pink-600/20 border-pink-500 text-pink-300 hover:bg-pink-600 hover:text-white' : 'border-white/20 text-gray-300 hover:bg-white/10 hover:text-white'}`}>
                                    Initialize
                                </button>

                                {/* Animated scanline */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10px] w-full animate-[scanline_4s_linear_infinite] pointer-events-none opacity-50"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials (Holo-Logs) */}
            <section className="py-24 px-6 bg-black/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-16 holo-text">DECRYPTED TRANSMISSIONS</h2>
                    <div className="space-y-6">
                        {[
                            { user: "User_7734", loc: "Sector 7", msg: "The volumetric rendering is unparalleled. It feels like I can touch the data." },
                            { user: "Admin_Prime", loc: "Core", msg: "System stability at 100% despite the heavy particle effects. Outstanding optimization." }
                        ].map((log, i) => (
                            <div key={i} className="border-l-2 border-cyan-500 pl-6 py-2 relative group hover:bg-white/5 transition-colors">
                                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-cyan-500"></div>
                                <div className="flex items-center gap-4 mb-2 text-xs font-mono text-cyan-400">
                                    <span>ID: {log.user}</span>
                                    <span>//</span>
                                    <span>LOC: {log.loc}</span>
                                </div>
                                <p className="text-lg text-gray-300 italic">"{log.msg}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-white/80 border-b border-white/20 pb-4">SYSTEM FAQ</h2>
                    <div className="space-y-4">
                        {[{ q: 'Does this support AR hardware?', a: 'Yes, fully compatible with WebXR standards.' },
                        { q: 'Is the glitch effect configurable?', a: 'Intensity and frequency can be adjusted in the config.' }
                        ].map((item, i) => (
                            <div key={i} className="holo-card rounded-lg bg-black/40">
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold text-gray-200">{item.q}</span>
                                    <ChevronDown size={18} className={`text-cyan-400 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && <div className="p-5 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/10 bg-[#020205]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                        <Hexagon size={20} />
                        <span className="font-bold tracking-widest">PRISM.UI</span>
                    </div>
                    <div className="text-xs text-gray-600 font-mono">
                        SYSTEM STATUS: OPTIMAL // V.4.0.2
                    </div>
                </div>
            </footer>

        </div>
    );
};
