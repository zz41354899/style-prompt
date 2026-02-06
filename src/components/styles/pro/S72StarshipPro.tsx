import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Rocket, Star, Orbit, Zap, Shield, Radar, Target, Radio } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S72StarshipPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#050B14] text-[#A5F3FC] selection:bg-[#06B6D4] selection:text-[#000]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap');

                .font-sci-head { font-family: 'Orbitron', sans-serif; }
                .font-sci-body { font-family: 'Rajdhani', sans-serif; }

                /* HUD Grid Background */
                .hud-grid {
                    background-image: 
                        linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }
                
                /* Holo-Glass Effect */
                .holo-glass {
                    background: rgba(8, 47, 73, 0.4);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(6, 182, 212, 0.3);
                    box-shadow: 0 0 15px rgba(6, 182, 212, 0.1), inset 0 0 20px rgba(6, 182, 212, 0.05);
                }
                
                /* Corner Brackets for HUD */
                .hud-corners {
                    position: relative;
                }
                .hud-corners::before, .hud-corners::after {
                    content: '';
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    border: 2px solid #22D3EE;
                    transition: all 0.3s ease;
                }
                .hud-corners::before { top: -2px; left: -2px; border-right: none; border-bottom: none; }
                .hud-corners::after { bottom: -2px; right: -2px; border-left: none; border-top: none; }
                
                .hud-corners:hover::before { width: 100%; height: 100%; opacity: 0.5; }
                .hud-corners:hover::after { width: 100%; height: 100%; opacity: 0.5; }

                /* Scanning Animation */
                @keyframes scanline {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(100%); opacity: 0; }
                }
                .scan-effect {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent, rgba(34, 211, 238, 0.2), transparent);
                    height: 50%;
                    animation: scanline 3s linear infinite;
                    pointer-events: none;
                }
                
                /* Pulse Animation */
                @keyframes hud-pulse {
                    0% { box-shadow: 0 0 5px #06B6D4; }
                    50% { box-shadow: 0 0 15px #22D3EE; }
                    100% { box-shadow: 0 0 5px #06B6D4; }
                }
                .active-system {
                    animation: hud-pulse 2s infinite;
                }
            `}</style>

            {/* Background Layers */}
            <div className="fixed inset-0 bg-[#050B14] z-[-3]"></div>
            <div className="fixed inset-0 hud-grid opacity-30 z-[-2]" style={{ transform: 'perspective(500px) rotateX(20deg) scale(1.5)', transformOrigin: 'top center' }}></div>

            {/* Stars */}
            <div className="fixed inset-0 z-[-1] opacity-60">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="absolute bg-white rounded-full animate-pulse" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 2 + 1}px`,
                        height: `${Math.random() * 2 + 1}px`,
                        animationDuration: `${Math.random() * 3 + 1}s`
                    }}></div>
                ))}
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#050B14]/90 backdrop-blur-md border-b border-[#06B6D4]/30">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Rocket size={24} className="text-[#22D3EE]" />
                            <div className="absolute inset-0 bg-[#22D3EE] blur-md opacity-40"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-sci-head font-bold text-white tracking-[0.2em] leading-none">USS PROFICIENCY</span>
                            <span className="text-[10px] font-sci-body text-[#06B6D4] tracking-widest">NCC-1701-PRO</span>
                        </div>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-1">
                            {['Bridge', 'Engineering', 'Tactical'].map((item) => (
                                <button key={item} className="px-6 py-2 font-sci-body font-bold text-[#A5F3FC] hover:text-white hover:bg-[#06B6D4]/10 border-b-2 border-transparent hover:border-[#22D3EE] transition-all uppercase tracking-widest text-sm relative overflow-hidden group">
                                    <span className="relative z-10">{item}</span>
                                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#22D3EE] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                </button>
                            ))}
                            <button className="ml-6 px-8 py-2 bg-[#06B6D4]/20 text-[#22D3EE] font-sci-head font-bold text-xs tracking-widest border border-[#06B6D4] hover:bg-[#06B6D4] hover:text-[#050B14] transition-all active-system">
                                ENGAGE
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#22D3EE] border border-[#06B6D4]/50 rounded-sm bg-[#06B6D4]/10">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full border-b border-[#06B6D4]/30 bg-[#050B14]/95 backdrop-blur-xl">
                        {['Bridge', 'Engineering', 'Tactical'].map((item) => (
                            <div key={item} className="py-4 px-6 font-sci-head text-[#A5F3FC] border-b border-[#06B6D4]/10 tracking-widest flex items-center gap-3">
                                <Target size={14} className="text-[#22D3EE]" /> {item}
                            </div>
                        ))}
                        <div className="p-6">
                            <button className="w-full py-4 bg-[#06B6D4] text-[#050B14] font-sci-head font-bold tracking-widest hover:bg-[#22D3EE]">
                                SYSTEMS ONLINE
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-[#06B6D4]/50"></div>
                        <div className="flex items-center gap-2 text-[#06B6D4] font-sci-body tracking-[0.3em] text-xs font-bold border border-[#06B6D4]/30 px-3 py-1 rounded-sm bg-[#06B6D4]/5">
                            <div className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse"></div> SYSTEM STATUS: OPTIMAL
                        </div>
                        <div className="h-[1px] w-12 bg-[#06B6D4]/50"></div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-sci-head font-black text-white mb-8 leading-tight tracking-wide drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                        COMMAND THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#3B82F6]">FUTURE</span>
                    </h1>

                    <p className="font-sci-body text-xl md:text-2xl text-[#67E8F9] max-w-2xl mx-auto mb-12 tracking-wide">
                        Next-generation interface for interstellar navigation and fleet management protocols.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-4 bg-[#06B6D4] text-[#050B14] font-sci-head text-sm font-bold tracking-widest border border-[#22D3EE] hover:bg-[#22D3EE] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all uppercase w-full sm:w-auto skew-x-[-10deg] group">
                            <span className="inline-block skew-x-[10deg] flex items-center justify-center gap-3">
                                <Rocket size={20} /> Initialize Pulse
                            </span>
                        </button>
                        <button className="px-10 py-4 bg-transparent text-[#22D3EE] font-sci-head text-sm font-bold tracking-widest border border-[#06B6D4] hover:bg-[#06B6D4]/10 transition-all uppercase w-full sm:w-auto skew-x-[-10deg] hud-corners">
                            <span className="inline-block skew-x-[10deg]">Scan Sector</span>
                        </button>
                    </div>

                    {/* Decorative HUD Elements */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-24 h-64 border-l border-t border-b border-[#06B6D4]/20 hidden lg:block opacity-50"></div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-24 h-64 border-r border-t border-b border-[#06B6D4]/20 hidden lg:block opacity-50"></div>
                </div>
            </section>

            {/* Systems Status (Features) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex items-end justify-between mb-16 border-b border-[#06B6D4]/30 pb-4">
                        <h2 className="text-3xl font-sci-head text-white tracking-widest">SHIP SYSTEMS</h2>
                        <span className="font-sci-body text-[#06B6D4] text-xl tracking-[0.2em]">DIAGNOSTICS</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Shield, title: "DEFLECTOR SHIELDS", status: "100%", color: "#22D3EE" },
                            { icon: Zap, title: "WARP CORE", status: "STABLE", color: "#F472B6" },
                            { icon: Radar, title: "LONG RANGE SENSORS", status: "ACTIVE", color: "#34D399" }
                        ].map((s, i) => (
                            <div key={i} className="holo-glass p-8 rounded-sm relative group overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 opacity-50">
                                    <div className="flex gap-1">
                                        {[1, 2, 3].map(d => <div key={d} className="w-8 h-1 bg-[#06B6D4]/30"></div>)}
                                    </div>
                                </div>

                                <s.icon size={48} className="mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500" style={{ color: s.color }} />

                                <h3 className="text-lg font-sci-head text-white mb-2 tracking-widest">{s.title}</h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: s.color }}></div>
                                    <span className="font-sci-body text-xl font-bold tracking-widest" style={{ color: s.color }}>{s.status}</span>
                                </div>

                                <div className="scan-effect"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Crew Roster) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-sci-head text-white tracking-widest mb-2">CLEARANCE LEVEL</h2>
                        <p className="font-sci-body text-[#7DD3FC] text-lg tracking-widest uppercase">Select personnel authorization</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        {[
                            { name: 'Ensign', price: 'Standard', features: ['Deck Access', 'Mess Hall', 'Bunk Bed'] },
                            { name: 'Commander', price: 'Priority', features: ['Bridge Access', 'Replicator+', 'Quarter'], highlight: true },
                            { name: 'Captain', price: 'Classified', features: ['Full Ship Control', 'Ready Room', 'Warp 9'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 border hover:border-[#22D3EE] transition-all bg-[#082F49]/40 backdrop-blur-sm ${plan.highlight ? 'border-[#22D3EE] shadow-[0_0_30px_rgba(6,182,212,0.15)] z-10 transform scale-105' : 'border-[#06B6D4]/30'}`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent"></div>
                                )}

                                <div className="mb-8 pb-6 border-b border-[#06B6D4]/20">
                                    <h3 className="text-sm font-sci-head text-[#22D3EE] tracking-[0.2em] mb-2">{plan.name}</h3>
                                    <span className={`text-3xl font-sci-body font-bold ${plan.highlight ? 'text-white' : 'text-[#A5F3FC]'}`}>{plan.price}</span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-sci-body text-lg text-[#CFFAFE] tracking-wide">
                                            <Check size={14} className="text-[#22D3EE]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 font-sci-head text-xs font-bold tracking-[0.2em] border transition-all ${plan.highlight ? 'bg-[#06B6D4] text-[#050B14] border-[#06B6D4] hover:bg-[#22D3EE]' : 'bg-transparent text-[#22D3EE] border-[#06B6D4]/50 hover:bg-[#06B6D4]/10'}`}>
                                    AUTHORIZE
                                </button>

                                {/* Corner Accents */}
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#06B6D4]/50"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#06B6D4]/50"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Database (FAQ) */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto border border-[#06B6D4]/30 bg-[#082F49]/20 p-1">
                    <div className="bg-[#050B14]/80 p-8 backdrop-blur-md">
                        <div className="flex items-center justify-between mb-10 border-b border-[#06B6D4]/30 pb-4">
                            <h2 className="text-xl font-sci-head text-[#22D3EE] tracking-widest flex items-center gap-2">
                                <Radio size={20} className="animate-pulse" /> DATABASE QUERY
                            </h2>
                            <span className="font-mono text-xs text-[#06B6D4]">LCARS-4291</span>
                        </div>

                        <div className="space-y-2">
                            {[{ q: 'Shield modulation frequency?', a: 'Rotational harmonics set to 42.9GHz for maximum dispersion.' },
                            { q: 'Warp core ejection protocols?', a: 'Requires authorization from Commanding Officer and Chief Engineer.' },
                            { q: 'Holodeck safety status?', a: 'Safeties are currently engaged. Simulation running at 100% fidelity.' }
                            ].map((item, i) => (
                                <div key={i} className="border border-[#06B6D4]/20 hover:border-[#06B6D4]/60 transition-colors bg-[#082F49]/30">
                                    <button className="w-full flex items-center justify-between p-4 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                        <span className="font-sci-body font-bold text-lg text-[#A5F3FC] tracking-wide group-hover:text-white transition-colors">{item.q}</span>
                                        <ChevronDown size={18} className={`text-[#22D3EE] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    {expandedFaq === i && (
                                        <div className="px-4 pb-4 pt-0 font-sci-body text-lg text-[#67E8F9] leading-relaxed">
                                            <div className="h-[1px] w-full bg-[#06B6D4]/20 mb-3"></div>
                                            {item.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#3B82F6]/10 z-[-1]"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="w-24 h-24 mx-auto mb-8 rounded-full border-4 border-[#22D3EE] flex items-center justify-center shadow-[0_0_30px_#22D3EE] active-system bg-[#050B14]">
                        <Rocket size={40} className="text-white" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-sci-head text-white mb-8 tracking-widest">READY FOR DEPARTURE</h2>

                    <div className="flex flex-col items-center gap-4">
                        <div className="font-mono text-[#06B6D4] text-xs">Waiting for command input...</div>
                        <button className="px-16 py-5 bg-[#22D3EE] text-[#050B14] font-sci-head text-xl font-bold tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                            INITIATE LAUNCH SEQUENCE
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-[#06B6D4]/30 bg-[#050B14]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Star size={16} className="text-[#22D3EE]" />
                        <span className="text-xs font-sci-head text-white tracking-[0.3em]">STARFLEET COMMAND</span>
                    </div>

                    <div className="flex gap-8 text-[10px] font-sci-head uppercase text-[#06B6D4] tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Directives</a>
                        <a href="#" className="hover:text-white transition-colors">Starmaps</a>
                        <a href="#" className="hover:text-white transition-colors">Log</a>
                    </div>

                    <div className="font-sci-body text-sm text-[#06B6D4]/60">
                        © 2258 United Federation of Planets.
                    </div>
                </div>
            </footer>
        </div>
    );
};
