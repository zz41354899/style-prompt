import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Snowflake, Mountain, Wind, Sparkles, ThermometerSnowflake, Compass, CloudSnow } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S58PolarPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#E3F2FD] text-[#0D47A1] selection:bg-[#29B6F6] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,300;0,700;1,400&family=Roboto+Mono:wght@300;500&display=swap');

                .font-polar-head { font-family: 'Exo 2', sans-serif; }
                .font-polar-body { font-family: 'Roboto Mono', monospace; }

                /* Arctic Gradient */
                .bg-arctic-gradient {
                    background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 50%, #E1F5FE 100%);
                }
                
                /* Frost Glass Texture */
                .glass-ice {
                    background: rgba(255, 255, 255, 0.25);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
                }
                
                /* Ice Cracks Overlay */
                .ice-texture {
                    background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E");
                    opacity: 0.15;
                    mix-blend-mode: overlay;
                }

                /* Snow Particle Animation */
                @keyframes snowfall {
                    0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(110vh) translateX(20px) rotate(360deg); opacity: 0; }
                }
                .snow-particle {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background: white;
                    border-radius: 50%;
                    filter: blur(1px);
                    animation: snowfall 10s linear infinite;
                }

                /* Cold Glow */
                .cold-glow {
                    box-shadow: 0 0 20px rgba(41, 182, 246, 0.4);
                }
                
                 /* Glitch / Freeze Effect on Hover */
                .freeze-hover:hover {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                }
                @keyframes shake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, 0, 0); }
                    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                    40%, 60% { transform: translate3d(4px, 0, 0); }
                }

            `}</style>

            <div className="absolute inset-0 bg-arctic-gradient fixed z-[-2]"></div>
            <div className="absolute inset-0 ice-texture fixed z-[-1] pointer-events-none"></div>

            {/* Falling Snow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="snow-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 5 + 5}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.5 + 0.3
                        }}
                    ></div>
                ))}
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 glass-ice border-b border-white/50">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/40 rounded-full backdrop-blur-sm border border-white/60">
                            <Snowflake size={24} className="text-[#0288D1]" />
                        </div>
                        <span className="text-2xl font-polar-head font-bold tracking-wider text-[#0D47A1] uppercase">Cryo<span className="text-[#29B6F6]">.Lab</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Research', 'Expeditions', 'Data'].map((item) => (
                                <a key={item} href="#" className="font-polar-body text-[#1565C0] hover:text-[#0277BD] text-sm font-medium transition-colors uppercase tracking-widest relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#29B6F6] transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                            <button className="px-6 py-2 bg-[#0288D1] text-white font-polar-head font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-[#0277BD] transition-all cold-glow border border-[#29B6F6]">
                                Access Terminal
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#0277BD] glass-ice rounded-sm">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 glass-ice border-b border-white/50 backdrop-blur-xl">
                        {['Research', 'Expeditions', 'Data'].map((item) => (
                            <div key={item} className="py-4 font-polar-head text-xl text-[#0D47A1] border-b border-white/20 uppercase tracking-widest">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-3 bg-[#0288D1] text-white font-polar-head font-bold uppercase tracking-widest shadow-lg">
                            Access Terminal
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                {/* Ice Shard Graphic */}
                <div className="absolute top-1/4 right-0 w-[400px] h-[600px] bg-gradient-to-bl from-white/40 to-transparent transform skew-x-[-20deg] pointer-events-none z-0 border-l border-white/30"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-3 mb-8 px-4 py-1 border border-[#0288D1]/30 bg-[#E1F5FE]/50 backdrop-blur-sm rounded-sm">
                        <ThermometerSnowflake size={16} className="text-[#0288D1]" />
                        <span className="font-polar-body text-xs font-bold text-[#0277BD] uppercase">Temp: -40°C // Status: Stable</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-polar-head font-black text-[#0D47A1] mb-8 leading-tight tracking-tighter mix-blend-multiply">
                        ZERO <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#29B6F6] to-[#01579B]">KELVIN</span>
                    </h1>

                    <p className="font-polar-body text-xl md:text-2xl text-[#1565C0] max-w-2xl mx-auto mb-12 leading-relaxed">
                        Precision engineering meeting absolute zero. A UI kit designed for clarity, coolness, and cutting-edge performance.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-4 bg-[#01579B] text-white font-polar-head font-bold text-lg uppercase tracking-widest hover:bg-[#0D47A1] transition-all shadow-lg shadow-[#0288D1]/30 border border-[#29B6F6]/50 w-full sm:w-auto freeze-hover">
                            Initiate Sequence
                        </button>
                        <button className="px-10 py-4 glass-ice text-[#0277BD] font-polar-head font-bold text-lg uppercase tracking-widest hover:bg-white/40 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 border border-white/60">
                            Download Specs
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Ice Cubes) */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Snowflake, title: "Crystalline", desc: "Sharp vectors that scale indefinitely without losing definition.", color: "#81D4FA" },
                            { icon: Wind, title: "Velocity", desc: "Animation timings optimized for fluid, rapid feedback.", color: "#4FC3F7" },
                            { icon: Mountain, title: "Durability", desc: "Robust architecture that withstands heavy user loads.", color: "#29B6F6" }
                        ].map((f, i) => (
                            <div key={i} className="glass-ice p-8 rounded-sm border border-white/60 hover:border-[#29B6F6] transition-colors duration-300 relative overflow-hidden group">
                                <div className="absolute -right-8 -bottom-8 opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500 text-[#01579B]">
                                    <f.icon size={120} />
                                </div>

                                <div className="w-16 h-16 bg-gradient-to-br from-white to-[#E1F5FE] border border-white shadow-lg flex items-center justify-center mb-6 relative z-10 rounded-sm">
                                    <f.icon className="text-[#0277BD]" size={32} />
                                </div>

                                <h3 className="text-2xl font-polar-head font-bold text-[#0D47A1] mb-4 uppercase tracking-wider relative z-10">{f.title}</h3>
                                <p className="font-polar-body text-sm text-[#1565C0] leading-loose relative z-10">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Glacial Layers) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-polar-head font-bold text-[#0D47A1] mb-4 uppercase">Clearance Levels</h2>
                        <p className="font-polar-body text-[#0277BD] text-sm tracking-widest">SECURE ACCESS REQUIRED</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                        {[
                            { name: 'Level 1', price: 'Free', features: ['Public Data', 'Read Only', 'Standard Speed'], highlight: false },
                            { name: 'Level 5', price: '$49', features: ['Restricted Area', 'Write Access', 'High Speed'], highlight: true },
                            { name: 'Level 10', price: '$99', features: ['Classified', 'Admin Rights', 'Quantum Uplink'], highlight: false }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-10 flex flex-col border border-white/40 backdrop-blur-md transition-all duration-300 ${plan.highlight ? 'bg-[#0288D1] text-white z-10 scale-105 shadow-2xl shadow-[#0288D1]/30' : 'bg-white/30 text-[#0D47A1] hover:bg-white/50'}`}>
                                <h3 className="text-lg font-polar-body font-bold mb-2 uppercase tracking-tight opacity-80">{plan.name}</h3>
                                <div className="text-5xl font-polar-head font-bold mb-8">{plan.price}</div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-polar-body text-xs uppercase tracking-wider">
                                            <div className={`w-1 h-3 ${plan.highlight ? 'bg-[#E1F5FE]' : 'bg-[#0288D1]'}`}></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 font-polar-head font-bold uppercase tracking-widest text-sm border transition-colors ${plan.highlight ? 'bg-white text-[#0277BD] border-white hover:bg-[#E1F5FE]' : 'bg-transparent text-[#0277BD] border-[#0277BD] hover:bg-[#0277BD] hover:text-white'}`}>
                                    Grant Access
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-polar-head font-bold text-center mb-12 text-[#0D47A1] uppercase tracking-wider">
                        System Diagnostics
                    </h2>

                    <div className="space-y-4">
                        {[{ q: 'System Status?', a: 'All systems operational. Cooling systems at 100% efficiency.' },
                        { q: 'Encryption Level?', a: 'Aes-256 bit military grade ice-wall protection enabled.' },
                        { q: 'Backup Protocols?', a: 'Data is mirrored across 3 distinct permafrost server locations.' }
                        ].map((item, i) => (
                            <div key={i} className="glass-ice border border-white/60">
                                <button className="w-full flex items-center justify-between p-6 text-left group hover:bg-white/20 transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-polar-body font-bold text-sm text-[#0D47A1] uppercase tracking-wider group-hover:text-[#0277BD] transition-colors">:: {item.q}</span>
                                    <ChevronDown size={18} className={`text-[#0288D1] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-6 pb-6 pt-0 font-polar-body text-xs text-[#1565C0] leading-relaxed border-t border-white/30 pt-4 bg-white/10">
                                        {`>> ${item.a}`}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto p-16 text-center relative overflow-hidden bg-gradient-to-r from-[#01579B] to-[#0277BD] shadow-[0_20px_50px_rgba(1,87,155,0.3)] border border-[#4FC3F7]/30 clip-path-slant">
                    <div className="absolute top-0 left-0 w-full h-full ice-texture opacity-30"></div>
                    <Sparkles size={48} className="mx-auto mb-6 text-[#E1F5FE] animate-pulse" />
                    <h2 className="text-4xl md:text-5xl font-polar-head font-bold text-white mb-6 uppercase tracking-widest relative z-10">Freeze The Moment</h2>
                    <p className="font-polar-body text-lg text-[#B3E5FC] mb-10 max-w-lg mx-auto relative z-10">
                        Capture perfection in stasis. Build the future with absolute clarity.
                    </p>
                    <button className="px-12 py-5 bg-white text-[#01579B] font-polar-head font-bold text-lg uppercase tracking-widest hover:bg-[#E1F5FE] transition-colors relative z-10 shadow-lg">
                        Initialize
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-[#0D47A1] text-[#E3F2FD] border-t-4 border-[#4FC3F7]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Snowflake size={20} className="text-[#4FC3F7]" />
                        <span className="text-xl font-polar-head font-bold tracking-wider uppercase">Cryo<span className="text-[#4FC3F7]">.Lab</span></span>
                    </div>

                    <div className="flex gap-8 text-xs font-polar-body font-medium uppercase tracking-widest text-[#81D4FA]">
                        <a href="#" className="hover:text-white transition-colors">Manifest</a>
                        <a href="#" className="hover:text-white transition-colors">Coordinates</a>
                        <a href="#" className="hover:text-white transition-colors">Comms</a>
                    </div>

                    <div className="font-polar-body text-xs opacity-50 uppercase tracking-widest">
                        © 2025 Polar Industries.
                    </div>
                </div>
            </footer>
        </div>
    );
};
