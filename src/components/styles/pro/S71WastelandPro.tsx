import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Radio, Skull, Shield, Zap, Activity, Scan, AlertTriangle } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S71WastelandPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#1a1815] text-[#33ff00] selection:bg-[#33ff00] selection:text-[#1a1815]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323&display=swap');

                .font-wasteland-mono { font-family: 'Share Tech Mono', monospace; }
                .font-wasteland-pixel { font-family: 'VT323', monospace; }

                /* CRT Scanline Effect */
                .crt-overlay {
                    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                    background-size: 100% 2px, 3px 100%;
                    pointer-events: none;
                }
                
                .crt-flicker {
                    animation: flicker 0.15s infinite;
                }
                
                @keyframes flicker {
                    0% { opacity: 0.95; }
                    100% { opacity: 1; }
                }
                
                /* Text Glow */
                .text-glow {
                    text-shadow: 0 0 5px rgba(51, 255, 0, 0.5), 0 0 10px rgba(51, 255, 0, 0.3);
                }
                
                .text-glow-amber {
                    color: #ffb000;
                    text-shadow: 0 0 5px rgba(255, 176, 0, 0.5), 0 0 10px rgba(255, 176, 0, 0.3);
                }
                
                /* Pip-Boy Borders */
                .pip-border {
                    border: 2px solid #33ff00;
                    box-shadow: 0 0 10px rgba(51, 255, 0, 0.2), inset 0 0 10px rgba(51, 255, 0, 0.1);
                    position: relative;
                }
                
                .pip-border::before {
                    content: '';
                    position: absolute;
                    top: -2px; left: -2px; width: 10px; height: 10px;
                    border-top: 2px solid #33ff00;
                    border-left: 2px solid #33ff00;
                }
                
                .pip-border::after {
                    content: '';
                    position: absolute;
                    bottom: -2px; right: -2px; width: 10px; height: 10px;
                    border-bottom: 2px solid #33ff00;
                    border-right: 2px solid #33ff00;
                }

                /* Grunge Texture */
                 .grunge-overlay {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
                    mix-blend-mode: overlay;
                    pointer-events: none;
                }
            `}</style>

            {/* Overlays */}
            <div className="fixed inset-0 crt-overlay z-50 pointer-events-none"></div>
            <div className="fixed inset-0 crt-flicker pointer-events-none z-40 bg-[rgba(51,255,0,0.03)]"></div>
            <div className="fixed inset-0 grunge-overlay z-30 pointer-events-none"></div>
            <div className="fixed inset-0 bg-[#1a1815] z-[-1]"></div>

            {/* Vignette */}
            <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-40 bg-[#1a1815]/90 border-b-2 border-[#33ff00] shadow-[0_0_15px_rgba(51,255,0,0.2)]">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 border-2 border-[#33ff00] rounded-full flex items-center justify-center bg-[#33ff00]/10">
                            <Radio size={20} className="text-[#33ff00] animate-pulse" />
                        </div>
                        <div className="flex flex-col font-wasteland-mono">
                            <span className="text-xl font-bold leading-none tracking-widest text-[#33ff00] text-glow">WASTELAND</span>
                            <span className="text-xs text-[#33ff00]/70 tracking-[0.2em]">V.2287</span>
                        </div>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8 font-wasteland-mono">
                            {['STATS', 'INV', 'DATA', 'MAP'].map((item) => (
                                <button key={item} className="text-lg text-[#33ff00]/70 hover:text-[#33ff00] hover:text-glow hover:underline decoration-2 underline-offset-4 transition-all uppercase tracking-widest">
                                    {item}
                                </button>
                            ))}
                            <button className="px-6 py-2 bg-[#33ff00]/20 text-[#33ff00] border-2 border-[#33ff00] hover:bg-[#33ff00] hover:text-[#1a1815] transition-colors uppercase font-bold text-glow shadow-[0_0_10px_rgba(51,255,0,0.2)]">
                                PIP-BOY
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#33ff00] border-2 border-[#33ff00] shadow-[0_0_5px_rgba(51,255,0,0.5)]">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#1a1815] border-b-2 border-[#33ff00] shadow-[0_10px_20px_rgba(0,0,0,0.5)] font-wasteland-mono z-50">
                        {['STATS', 'INV', 'DATA', 'MAP', 'RADIO'].map((item) => (
                            <div key={item} className="py-4 text-xl text-[#33ff00] border-b border-[#33ff00]/30 flex items-center justify-between">
                                {item} <div className="w-2 h-2 bg-[#33ff00] animate-pulse"></div>
                            </div>
                        ))}
                        <button className="w-full mt-6 py-3 bg-[#33ff00] text-[#1a1815] font-bold uppercase tracking-widest border-2 border-[#33ff00]">
                            OPEN PIP-BOY
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-hidden font-wasteland-mono">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(51,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(51,255,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-block border-2 border-[#33ff00] bg-[#33ff00]/10 px-4 py-1 mb-6 shadow-[0_0_8px_rgba(51,255,0,0.3)]">
                        <span className="animate-pulse mr-2">●</span> SYSTEM ONLINE
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-none tracking-tighter text-glow uppercase">
                        Survival <span className="bg-[#33ff00] text-[#1a1815] px-2 ml-2">Guide</span>
                    </h1>

                    <div className="flex justify-center mb-10">
                        <div className="w-full max-w-2xl border-2 border-[#33ff00] bg-[#1a1815] p-2 relative">
                            {/* Corner Brackets */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#33ff00]"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#33ff00]"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#33ff00]"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#33ff00]"></div>

                            <p className="text-xl md:text-2xl text-[#33ff00]/90 leading-relaxed font-wasteland-pixel py-4">
                                "War... war never changes. But your design can. Equip yourself with the ultimate post-nuclear aesthetic."
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-8 py-4 bg-[#33ff00] text-[#1a1815] font-bold text-lg border-2 border-[#33ff00] hover:bg-[#1a1815] hover:text-[#33ff00] transition-colors relative group uppercase tracking-widest shadow-[0_0_15px_rgba(51,255,0,0.4)]">
                            <span className="flex items-center gap-2">Enter Vault <ArrowRight size={20} /></span>
                        </button>
                        <button className="px-8 py-4 bg-transparent text-[#33ff00] font-bold text-lg border-2 border-[#33ff00] hover:bg-[#33ff00]/20 transition-colors uppercase tracking-widest text-glow">
                            Scan Area
                        </button>
                    </div>
                </div>
            </section>

            {/* Status Panel (Features) */}
            <section className="py-24 px-6 relative bg-[#1a1815]">
                <div className="max-w-6xl mx-auto relative z-10 font-wasteland-mono">
                    <div className="border-b-2 border-[#33ff00] mb-12 flex justify-between items-end pb-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-glow uppercase">V.A.T.S. Targeting</h2>
                        <div className="hidden md:flex gap-1">
                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-3 h-6 bg-[#33ff00] opacity-50"></div>)}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Rad Resistance", desc: "+25 to all layout shifts", val: "99%" },
                            { icon: Zap, title: "Energy Weapons", desc: "High voltage design elements", val: "100" },
                            { icon: Scan, title: "Perception", desc: "Enhanced user clarity", val: "10+" }
                        ].map((f, i) => (
                            <div key={i} className="pip-border bg-[#1a1815] p-6 group hover:bg-[#33ff00]/5 transition-colors">
                                <div className="flex justify-between items-start mb-6">
                                    <f.icon size={48} className="text-[#33ff00]" strokeWidth={1.5} />
                                    <span className="text-2xl font-bold tabular-nums text-glow">{f.val}</span>
                                </div>

                                <h3 className="text-xl font-bold text-[#33ff00] mb-2 uppercase tracking-wider">{f.title}</h3>
                                <p className="text-[#33ff00]/70 text-lg leading-relaxed">{f.desc}</p>

                                <div className="mt-6 h-2 w-full bg-[#33ff00]/20 rounded-none overflow-hidden border border-[#33ff00]/50">
                                    <div className="h-full bg-[#33ff00] w-[85%] animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Caps) */}
            <section className="py-24 px-6 bg-[#1f1d1a] relative border-y-2 border-[#33ff00]/30 font-wasteland-mono">
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#ffb000] text-[#ffb000] mb-4 bg-[#ffb000]/10 shadow-[0_0_20px_rgba(255,176,0,0.3)]">
                            <span className="text-3xl font-bold">$</span>
                        </div>
                        <h2 className="text-4xl font-bold text-glow-amber uppercase">Barter</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        {[
                            { name: 'Scavenger', price: '0', currency: 'Caps', items: ['Rusty Rifle', '1 Stimpak', 'Dirty Water'] },
                            { name: 'Survivor', price: '50', currency: 'Caps', items: ['Leather Armor', '5 Stimpaks', 'RadAway'], highlight: true },
                            { name: 'Overseer', price: '200', currency: 'Caps', items: ['Power Armor', 'Fusion Core', 'Vault Key'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 border-2 transition-all duration-300 ${plan.highlight ? 'border-[#33ff00] bg-[#33ff00]/5 shadow-[0_0_20px_rgba(51,255,0,0.1)] scale-105 z-10' : 'border-[#33ff00]/40 bg-[#1a1815] hover:border-[#33ff00]'}`}>
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#33ff00] text-[#1a1815] px-4 py-1 font-bold text-sm border-2 border-[#33ff00] uppercase tracking-widest">
                                        Recommended
                                    </div>
                                )}

                                <div className="text-center mb-8 pb-4 border-b border-dashed border-[#33ff00]/30">
                                    <h3 className={`text-2xl font-bold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-[#33ff00] text-glow' : 'text-[#33ff00]/80'}`}>{plan.name}</h3>
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="text-4xl font-bold tabular-nums">{plan.price}</span>
                                        <span className="text-sm uppercase">{plan.currency}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.items.map((item, j) => (
                                        <li key={j} className="flex items-center gap-3 text-lg">
                                            <div className="w-4 h-4 border border-[#33ff00] flex items-center justify-center bg-[#33ff00]/20">
                                                <Check size={12} className="text-[#33ff00]" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 font-bold uppercase tracking-widest border-2 transition-all ${plan.highlight ? 'bg-[#33ff00] text-[#1a1815] border-[#33ff00] hover:bg-[#1a1815] hover:text-[#33ff00]' : 'bg-transparent text-[#33ff00] border-[#33ff00] hover:bg-[#33ff00] hover:text-[#1a1815]'}`}>
                                    Trade
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Terminal FAQ */}
            <section className="py-24 px-6 font-wasteland-pixel">
                <div className="max-w-3xl mx-auto border-4 border-[#33ff00] bg-[#0A0A0A] p-2 shadow-[0_0_30px_rgba(51,255,0,0.15)] rounded-lg">
                    <div className="border border-[#33ff00]/50 p-6 md:p-10 min-h-[400px]">
                        <div className="flex items-center justify-between mb-8 border-b-2 border-[#33ff00] pb-2">
                            <h2 className="text-3xl font-bold uppercase text-[#33ff00] text-glow">ROBCO INDUSTRIES V.2.0</h2>
                            <div className="animate-pulse bg-[#33ff00] w-4 h-6"></div>
                        </div>

                        <div className="space-y-6">
                            {[{ q: '>> QUERY: STYLE ORIGIN', a: 'Accessing database... Style mimics Pip-Boy 3000 interface from post-war era.' },
                            { q: '>> QUERY: RAD LEVELS', a: 'Scanning... Radiation levels nominal. Safe for user interaction.' },
                            { q: '>> QUERY: COMPATIBILITY', a: 'Supported on all Vault-Tec approved browser terminals.' }
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <button className="w-full text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                        <h3 className="text-2xl text-[#33ff00] hover:bg-[#33ff00] hover:text-[#1a1815] transition-colors p-2 uppercase tracking-wider">
                                            {item.q} {expandedFaq === i ? '[-]' : '[+]'}
                                        </h3>
                                    </button>

                                    {expandedFaq === i && (
                                        <div className="p-4 pl-8 text-xl text-[#33ff00]/80 lowercase leading-relaxed">
                                            {item.a}
                                            <span className="animate-pulse">_</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-[#33ff00]/50 text-lg uppercase">
                            {'>'} User connected<br />
                            {'>'} Waiting for input...
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 relative text-center font-wasteland-mono overflow-hidden">
                <div className="absolute inset-0 bg-[#33ff00]/5 z-0"></div>
                <div className="max-w-4xl mx-auto relative z-10 border-2 border-[#33ff00] p-12 bg-[#1a1815] shadow-[0_0_50px_rgba(51,255,0,0.2)]">
                    <AlertTriangle size={64} className="mx-auto mb-6 text-[#ffb000] animate-pulse" />

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow uppercase tracking-widest">
                        Review Status
                    </h2>
                    <p className="text-xl md:text-2xl text-[#33ff00]/80 mb-10 max-w-2xl mx-auto">
                        Don't be left in the wasteland. Secure your vault today.
                    </p>

                    <button className="px-16 py-6 bg-[#ffb000] text-black font-bold text-xl border-2 border-[#ffb000] hover:bg-black hover:text-[#ffb000] transition-colors uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(255,176,0,0.5)]">
                        Secure Vault
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t-2 border-[#33ff00] bg-[#100f0d] font-wasteland-mono text-[#33ff00]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Activity size={24} className="text-[#33ff00]" />
                        <span className="text-lg font-bold tracking-widest uppercase">VAULT-TEC</span>
                    </div>

                    <div className="flex gap-8 text-sm uppercase tracking-widest">
                        <a href="#" className="hover:underline decoration-2 underline-offset-4">Holotapes</a>
                        <a href="#" className="hover:underline decoration-2 underline-offset-4">Map</a>
                        <a href="#" className="hover:underline decoration-2 underline-offset-4">SOS</a>
                    </div>

                    <div className="text-sm">
                        © 2287 Wasteland Corp.
                    </div>
                </div>
            </footer>
        </div>
    );
};
