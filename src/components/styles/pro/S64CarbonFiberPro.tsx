import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Layers, Gauge, Zap, Shield, Battery, Trophy, Timer } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S64CarbonFiberPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#0A0A0C] text-[#E8E8EC] selection:bg-[#EF4444] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap');

                .font-carbon-head { font-family: 'Orbitron', sans-serif; }
                .font-carbon-body { font-family: 'Rajdhani', sans-serif; }

                /* Carbon Weave Pattern w/ Gloss */
                .carbon-weave {
                    background-color: #141416;
                    background-image: 
                        linear-gradient(45deg, #1A1A1D 25%, transparent 25%, transparent 75%, #1A1A1D 75%, #1A1A1D), 
                        linear-gradient(45deg, #1A1A1D 25%, transparent 25%, transparent 75%, #1A1A1D 75%, #1A1A1D);
                    background-position: 0 0, 10px 10px;
                    background-size: 20px 20px;
                }
                
                /* Glossy Overlay */
                .glossy-finish::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%, rgba(255,255,255,0.02) 100%);
                    pointer-events: none;
                }

                /* Red Accent Glow */
                .neon-accent {
                    box-shadow: 0 0 15px rgba(239, 68, 68, 0.4);
                }
                
                /* Speed Lines */
                .speed-lines {
                    background: repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px);
                    mask-image: linear-gradient(to right, transparent, black, transparent);
                }

                /* Slanted Container */
                .slanted {
                    transform: skewX(-15deg);
                }
                .slanted-reverse {
                    transform: skewX(15deg);
                }
                
                /* Metallic Gradient Text */
                .chrome-text {
                    background: linear-gradient(to bottom, #FFFFFF 0%, #B0B0B0 50%, #4A4A4A 51%, #858585 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>

            <div className="absolute inset-0 bg-[#0A0A0C] fixed z-[-2]"></div>
            <div className="absolute inset-0 carbon-weave opacity-40 fixed z-[-1] pointer-events-none"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#0F0F11]/90 backdrop-blur-md border-b border-[#EF4444] shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="slanted bg-[#EF4444] px-3 py-1">
                            <Layers size={20} className="text-white transform skew-x-[15deg]" />
                        </div>
                        <span className="text-2xl font-carbon-head italic font-black tracking-widest text-[#EF4444] drop-shadow-sm">
                            CARBON<span className="text-white">X</span>
                        </span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['Aerodynamics', 'Telekom', 'Engine'].map((item) => (
                                <a key={item} href="#" className="font-carbon-head italic text-[#9CA3AF] hover:text-[#EF4444] text-xs font-bold uppercase tracking-wider transition-colors">
                                    {item}
                                </a>
                            ))}
                            <button className="px-8 py-2 bg-[#EF4444] text-white font-carbon-head text-xs font-bold italic uppercase tracking-widest slanted hover:bg-[#DC2626] transition-opacity neo-accent">
                                <span className="block transform skew-x-[15deg]">Start Engine</span>
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#EF4444]">{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#0F0F11] border-b border-[#EF4444] shadow-2xl">
                        {['Aerodynamics', 'Telekom', 'Engine'].map((item) => (
                            <div key={item} className="py-4 font-carbon-head italic text-white border-b border-[#1A1A1F] uppercase tracking-wider">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-64 -translate-y-1/2 speed-lines opacity-30 pointer-events-none"></div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border-l-4 border-[#EF4444] bg-white/5 backdrop-blur-sm">
                            <Gauge size={16} className="text-[#EF4444]" />
                            <span className="font-carbon-head font-bold text-xs uppercase tracking-widest text-[#EF4444]">High Performance Composite</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-carbon-head font-black italic text-white mb-6 leading-none">
                            LIGHTER. <br />
                            STRONGER. <br />
                            <span className="text-[#EF4444]">FASTER.</span>
                        </h1>

                        <p className="font-carbon-body text-xl md:text-2xl text-[#9CA3AF] max-w-lg mb-10 font-medium leading-relaxed">
                            Engineered for maximum velocity. The ultimate fusion of woven composite technology and aerodynamic design.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <button className="px-10 py-5 bg-[#EF4444] text-white font-carbon-head text-xl font-bold italic uppercase tracking-widest slanted hover:scale-105 transition-transform shadow-[0_0_20px_rgba(239,68,68,0.5)] w-full sm:w-auto">
                                <span className="block transform skew-x-[15deg]">Accelerate</span>
                            </button>
                            <button className="px-10 py-5 bg-transparent text-white font-carbon-head text-xl font-bold italic uppercase tracking-widest border border-[#374151] slanted hover:border-[#EF4444] hover:text-[#EF4444] transition-colors w-full sm:w-auto">
                                <span className="block transform skew-x-[15deg]">Telemetry</span>
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Speedometer Graphic Simulation */}
                        <div className="w-full aspect-square rounded-full border-[20px] border-[#1A1A1F] relative flex items-center justify-center glossy-finish bg-[#0F0F11] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                            <div className="absolute inset-4 rounded-full border-[2px] border-[#EF4444] opacity-20"></div>
                            <div className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent to-[#EF4444] origin-left rotate-[135deg] animate-[spin_3s_ease-in-out_infinite_alternate]"></div>
                            <div className="text-center">
                                <div className="text-8xl font-carbon-head font-black italic text-white tabular-nums drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">328</div>
                                <div className="text-xl font-carbon-head font-bold text-[#EF4444] tracking-widest">KM/H</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Dashboard) */}
            <section className="py-24 px-6 relative bg-[#0F0F11]">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-1 flex-grow bg-[#1A1A1F]"></div>
                        <h2 className="text-3xl font-carbon-head font-bold italic uppercase tracking-widest text-white">System Status</h2>
                        <div className="h-1 w-24 bg-[#EF4444]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Shield, title: "Impact Shield", value: "100%", color: "#EF4444" },
                            { icon: Zap, title: "Power Output", value: "980 HP", color: "#3B82F6" },
                            { icon: Timer, title: "Lap Time", value: "1:24.40", color: "#10B981" }
                        ].map((f, i) => (
                            <div key={i} className="group relative p-8 bg-[#141417] border border-[#1F2937] glossy-finish hover:border-[#EF4444] transition-colors">
                                <div className="flex items-start justify-between mb-8">
                                    <f.icon className={`w-8 h-8`} style={{ color: f.color }} />
                                    <div className="w-16 h-1 flex gap-1">
                                        <div className={`h-full w-full bg-[#1A1A1F] group-hover:bg-[${f.color}] transition-colors`}></div>
                                        <div className={`h-full w-1/2 bg-[#1A1A1F] group-hover:bg-[${f.color}] transition-colors delay-75`}></div>
                                    </div>
                                </div>
                                <h3 className="text-sm font-carbon-head font-bold text-[#6B7280] uppercase tracking-widest mb-1">{f.title}</h3>
                                <p className="text-4xl font-carbon-head font-black italic text-white tracking-wider">{f.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Specs) */}
            <section className="py-24 px-6 relative">
                {/* Diagonal Divider */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F11] to-[#0A0A0C] via-[#0D0D10]" style={{ clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0 90%)' }}></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-carbon-head font-black italic text-white mb-2 tracking-tighter">TRIM LEVELS</h2>
                        <p className="font-carbon-body text-[#EF4444] uppercase tracking-[0.3em] font-bold">Select Your Configuration</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'GT', price: '$85k', features: ['Carbon Hood', 'Sport Suspension', 'V6 Engine'] },
                            { name: 'GTR', price: '$120k', features: ['Full Carbon Body', 'Active Aero', 'V8 Twin Turbo'], highlight: true },
                            { name: 'GTS', price: '$240k', features: ['Monocoque Chassis', 'Race Slicks', 'V10 Hybrid'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 bg-[#141416] border transition-all duration-300 ${plan.highlight ? 'border-[#EF4444] shadow-[0_0_30px_rgba(239,68,68,0.2)] transform scale-105 z-10' : 'border-[#1F2937] hover:border-[#4B5563] opacity-80'}`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 p-2 bg-[#EF4444] slanted transform translate-x-4 -translate-y-4 shadow-lg">
                                        <Trophy size={16} className="text-white transform skew-x-[15deg]" />
                                    </div>
                                )}

                                <div className="mb-8 pb-8 border-b border-[#27272A] border-dashed">
                                    <h3 className="text-3xl font-carbon-head font-black italic text-white uppercase tracking-wider">{plan.name}</h3>
                                    <div className="text-5xl font-carbon-head font-bold mt-2 text-[#EF4444] italic chrome-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>{plan.price}</div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-carbon-body font-bold text-[#D1D5DB] text-lg">
                                            <div className={`w-2 h-2 transform rotate-45 ${plan.highlight ? 'bg-[#EF4444]' : 'bg-[#4B5563]'}`}></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 font-carbon-head font-bold italic uppercase tracking-widest slanted transition-all ${plan.highlight ? 'bg-[#EF4444] text-white hover:bg-[#DC2626]' : 'bg-[#27272A] text-[#9CA3AF] hover:bg-[#3F3F46]'}`}>
                                    <span className="block transform skew-x-[15deg]">Configure</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 relative bg-[#EF4444] overflow-hidden">
                <div className="absolute inset-0 carbon-weave opacity-20 mix-blend-multiply"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 transform skew-x-[-20deg]"></div>

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
                    <div className="text-left">
                        <h2 className="text-5xl font-carbon-head font-black italic text-white mb-2 uppercase tracking-tighter shadow-black drop-shadow-lg">Ignition Ready</h2>
                        <p className="font-carbon-body text-xl text-white/90 font-bold uppercase tracking-widest">
                            The track is waiting. Are you?
                        </p>
                    </div>
                    <button className="px-12 py-5 bg-[#0F0F11] text-white font-carbon-head text-xl font-bold italic uppercase tracking-widest slanted border-2 border-white/20 hover:scale-110 transition-transform shadow-2xl">
                        <span className="block transform skew-x-[15deg]">Launch Control</span>
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-[#0A0A0C] border-t border-[#1F2937]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Layers size={24} className="text-[#EF4444]" />
                        <span className="text-xl font-carbon-head font-bold italic tracking-widest text-[#9CA3AF]">CARBON<span className="text-[#EF4444]">X</span></span>
                    </div>

                    <div className="flex gap-8 text-xs font-carbon-head font-bold italic uppercase tracking-widest text-[#4B5563]">
                        <a href="#" className="hover:text-[#EF4444] transition-colors">Privacy</a>
                        <a href="#" className="hover:text-[#EF4444] transition-colors">Terms</a>
                        <a href="#" className="hover:text-[#EF4444] transition-colors">Legal</a>
                    </div>

                    <div className="font-carbon-body font-medium text-xs text-[#374151] uppercase tracking-widest">
                        © 2025 Carbon Composites.
                    </div>
                </div>
            </footer>
        </div>
    );
};
