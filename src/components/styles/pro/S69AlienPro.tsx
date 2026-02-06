import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Atom, Eye, Radio, Orbit, Zap, Globe, Rocket, Skull } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S69AlienPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#020502] text-[#D0FFD0] selection:bg-[#39FF14] selection:text-[#020502]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Syne+Mono&display=swap');

                .font-alien-head { font-family: 'Audiowide', cursive; }
                .font-alien-body { font-family: 'Syne Mono', monospace; }

                /* Organic Vein Texture */
                .vein-texture {
                    background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
                }
                
                /* Slime/Liquid Animation */
                @keyframes slimeParams {
                    0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
                    100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                }
                .biomorphic-shape {
                    animation: slimeParams 8s ease-in-out infinite;
                }
                
                /* Alien Glows */
                .xenon-glow {
                    box-shadow: 0 0 15px rgba(57, 255, 20, 0.4), inset 0 0 10px rgba(57, 255, 20, 0.2);
                }
                .text-acid-glow {
                    text-shadow: 0 0 5px rgba(57, 255, 20, 0.7);
                }
                .neon-purple-glow {
                     box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
                }

                /* Portal Gradient */
                .portal-gradient {
                    background: radial-gradient(circle at center, #A855F7, #020502 70%);
                }
                
                /* Floating Spores */
                @keyframes floatUp {
                  0% { transform: translateY(0) scale(1); opacity: 0; }
                  50% { opacity: 0.6; }
                  100% { transform: translateY(-100px) scale(0); opacity: 0; }
                }
                .spore {
                    position: absolute;
                    background: #39FF14;
                    border-radius: 50%;
                    filter: blur(2px);
                    animation: floatUp 5s infinite linear;
                }
            `}</style>

            <div className="absolute inset-0 bg-[#020502] fixed z-[-2]"></div>
            <div className="absolute inset-0 vein-texture fixed z-[-1] pointer-events-none opacity-30"></div>

            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 100%, #1a4d1a 0%, #020502 60%)' }}></div>

            {/* Floating Spores Background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="spore" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 5 + 5}s`
                    }}></div>
                ))}
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#020502]/80 backdrop-blur-md border-b border-[#39FF14]/20 nav-shadow">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 border border-[#39FF14] rounded-full xenon-glow animate-pulse">
                            <Atom size={24} className="text-[#39FF14]" />
                        </div>
                        <span className="text-2xl font-alien-head text-[#D0FFD0] tracking-[0.1em] text-acid-glow">XENO<span className="text-[#39FF14]">MORPH</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['Origins', 'Biology', 'Habitat'].map((item) => (
                                <a key={item} href="#" className="font-alien-body font-bold text-[#6B9B6B] hover:text-[#39FF14] text-lg tracking-widest transition-colors">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-2 bg-[#39FF14]/10 text-[#39FF14] font-alien-head text-sm tracking-widest border border-[#39FF14] rounded hover:bg-[#39FF14] hover:text-[#020502] transition-colors xenon-glow">
                                ESTABLISH LINK
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#39FF14] bg-[#39FF14]/10 border border-[#39FF14] rounded">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#020502] border-b border-[#39FF14]/30 shadow-2xl z-50">
                        {['Origins', 'Biology', 'Habitat'].map((item) => (
                            <div key={item} className="py-4 font-alien-head text-xl text-[#D0FFD0] border-b border-[#39FF14]/20 tracking-wider hover:text-[#39FF14]">
                                &gt; {item}
                            </div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-[#39FF14] text-[#020502] font-alien-head font-bold tracking-widest rounded xenon-glow shadow-lg">
                            ESTABLISH LINK
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1 border border-[#A855F7] rounded-full bg-[#A855F7]/10 neon-purple-glow">
                            <Radio size={16} className="text-[#A855F7] animate-pulse" />
                            <span className="font-alien-body font-bold text-xs text-[#A855F7] tracking-widest">SIGNAL RECEIVED</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-alien-head text-[#D0FFD0] mb-8 leading-tight drop-shadow-lg">
                            BEYOND <br />
                            <span className="text-[#39FF14] text-acid-glow">HUMAN</span>
                        </h1>

                        <p className="font-alien-body text-xl md:text-2xl text-[#6B9B6B] max-w-lg mx-auto md:mx-0 mb-12 leading-relaxed">
                            Discover a universe of bioluminescent beauty. Strange forms, neon flora, and the silent hum of the cosmos.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                            <button className="px-10 py-5 bg-[#39FF14] text-[#020502] font-alien-head text-lg tracking-widest rounded biomorphic-shape hover:scale-105 transition-transform shadow-[0_0_20px_rgba(57,255,20,0.6)] w-full sm:w-auto">
                                ENTER PORTAL
                            </button>
                            <button className="px-10 py-5 bg-transparent text-[#39FF14] font-alien-head text-lg tracking-widest border border-[#39FF14] rounded hover:bg-[#39FF14]/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                                <Orbit size={20} /> SCAN SECTOR
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative flex justify-center">
                        {/* Alien Artifact / Portal Graphic */}
                        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] relative">
                            <div className="absolute inset-0 portal-gradient blur-3xl opacity-50 animate-pulse"></div>
                            <div className="absolute inset-4 border-2 border-[#39FF14]/50 biomorphic-shape animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-8 border-2 border-[#A855F7]/50 biomorphic-shape animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Eye size={120} className="text-[#D0FFD0] animate-pulse drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Specimens) */}
            <section className="py-24 px-6 relative bg-[#050A05]">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-alien-head text-[#39FF14] mb-4 text-acid-glow">LIFEFORMS</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "Energy Beings", desc: "Pure plasma consciousness.", color: "#39FF14", border: "border-[#39FF14]" },
                            { icon: Skull, title: "Xenomorphs", desc: "Apex predators of the void.", color: "#A855F7", border: "border-[#A855F7]" },
                            { icon: Globe, title: "Terraformers", desc: "Architects of new worlds.", color: "#00FFFF", border: "border-[#00FFFF]" }
                        ].map((f, i) => (
                            <div key={i} className={`group relative p-8 bg-[#020502] border ${f.border} rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2`}>
                                <div className={`absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity`}>
                                    <f.icon size={64} style={{ color: f.color }} />
                                </div>

                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-full border border-current flex items-center justify-center mb-6 shadow-[0_0_10px_currentColor]`} style={{ color: f.color }}>
                                        <f.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-alien-head text-white mb-2 tracking-wide">{f.title}</h3>
                                    <p className="font-alien-body text-lg text-[#6B9B6B] leading-relaxed">{f.desc}</p>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-current opacity-0 group-hover:opacity-10 transition-opacity" style={{ color: f.color }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Access Clearance) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-alien-head text-white mb-4">CLEARANCE LEVEL</h2>
                        <p className="font-alien-body text-[#A855F7] text-lg tracking-widest font-bold">/// RESTRICTED ACCESS ///</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {[
                            { name: 'Cadet', price: '500', currency: 'CREDS', features: ['Star Charts', 'Basic Translator'] },
                            { name: 'Ranger', price: '1200', currency: 'CREDS', features: ['Warp Drive', 'Plasma Shield', 'Bio-Scanner'], highlight: true },
                            { name: 'Admiral', price: '3000', currency: 'CREDS', features: ['Fleet Command', 'Terraforming', 'Galactic Council'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 backdrop-blur-sm transition-all duration-300 ${plan.highlight ? 'bg-[#39FF14]/10 border-2 border-[#39FF14] xenon-glow transform scale-105 z-10 rounded-2xl' : 'bg-[#0F1A0F]/50 border border-[#6B9B6B]/30 hover:border-[#39FF14]/50 rounded-xl'}`}>
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-[#39FF14] text-[#020502] font-alien-head text-xs tracking-widest rounded-full shadow-[0_0_10px_#39FF14]">
                                        RECOMMENDED
                                    </div>
                                )}

                                <div className="mb-8 border-b border-dashed border-[#6B9B6B]/30 pb-6">
                                    <h3 className="text-xl font-alien-head text-[#D0FFD0] tracking-[0.2em] mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className={`text-4xl font-alien-head font-bold ${plan.highlight ? 'text-[#39FF14] text-acid-glow' : 'text-white'}`}>{plan.price}</span>
                                        <span className="text-xs font-alien-body text-[#6B9B6B]">{plan.currency}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-alien-body text-lg text-[#D0FFD0]">
                                            <div className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? 'bg-[#39FF14] animate-pulse' : 'bg-[#6B9B6B]'}`}></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 font-alien-head text-sm tracking-widest rounded transition-all ${plan.highlight ? 'bg-[#39FF14] text-[#020502] hover:brightness-110 shadow-[0_0_15px_rgba(57,255,20,0.4)]' : 'bg-transparent border border-[#6B9B6B] text-[#6B9B6B] hover:border-[#39FF14] hover:text-[#39FF14]'}`}>
                                    GRANT ACCESS
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#020502] relative">
                <div className="max-w-3xl mx-auto border border-[#39FF14]/20 rounded-xl p-8 bg-[#0F1A0F]/30 backdrop-blur-md">
                    <h2 className="text-3xl font-alien-head text-center mb-10 text-[#D0FFD0] tracking-widest">
                        DATA_LOGS
                    </h2>

                    <div className="space-y-4">
                        {[{ q: 'ARE THEY HOSTILE?', a: 'Most species are peaceful. Avoid the red zones in Sector 7.' },
                        { q: 'TRAVEL TIME?', a: 'Instantaneous via wormhole network (Subject to temporal sickness).' },
                        { q: 'ATMOSPHERE?', a: 'Breathable for 85% of carbon-based lifeforms.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-[#39FF14]/10 pb-2">
                                <button className="w-full flex items-center justify-between py-4 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-alien-body font-bold text-lg text-[#39FF14] group-hover:text-white transition-colors">&gt; {item.q}</span>
                                    <ChevronDown size={20} className={`text-[#6B9B6B] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="pb-4 font-alien-body text-[#D0FFD0] pl-6 text-sm typing-effect">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#39FF14]/10 to-transparent pointer-events-none"></div>

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <Rocket size={64} className="mx-auto mb-8 text-[#A855F7] animate-bounce" />
                    <h2 className="text-4xl md:text-6xl font-alien-head text-[#D0FFD0] mb-8 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">READY FOR TAKEOFF?</h2>
                    <button className="px-16 py-6 bg-[#A855F7] text-white font-alien-head text-xl tracking-widest rounded-full hover:bg-[#9333EA] transition-colors shadow-[0_0_30px_rgba(168,85,247,0.5)] transform hover:-translate-y-1">
                        INITIATE LAUNCH
                    </button>
                </div>
            </section>

            {/* Footer */}
            {/* Footer */}
            <footer className="py-12 px-6 border-t border-[#39FF14]/30 bg-[#020502] relative z-20">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#39FF14] to-transparent opacity-50"></div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Atom size={20} className="text-[#39FF14] animate-spin-slow" />
                        <span className="text-xl font-alien-head text-[#D0FFD0] tracking-[0.2em] text-acid-glow">XENO<span className="text-[#39FF14]">SYS</span></span>
                    </div>

                    <div className="flex gap-8 text-xs font-alien-head font-bold uppercase tracking-widest text-[#6B9B6B]">
                        {['Star Map', 'Translator', 'Alliance', 'Contact'].map((item) => (
                            <a key={item} href="#" className="hover:text-[#39FF14] hover:text-acid-glow transition-all duration-300">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="font-alien-body text-xs text-[#39FF14]/50 uppercase tracking-widest">
                        © 3025 Galactic Federation. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};
