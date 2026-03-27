import { useState, useEffect } from 'react';
import { 
  Scan, Zap, Shield, Menu, X, ArrowRight, Target, Activity, 
  Lock, Globe, Cpu, ChevronDown, ChevronUp, Check, Triangle
} from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S29CyberBio = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [scrolled, setScrolled] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Systems', 'Arsenal', 'Upgrades', 'Network'];

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-red-500 overflow-x-hidden relative selection:bg-red-600 selection:text-black">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Teko:wght@300;400;600&family=Michroma&display=swap');
                .font-hud { font-family: 'Share Tech Mono', monospace; }
                .font-display { font-family: 'Teko', sans-serif; }
                .font-bio { font-family: 'Michroma', sans-serif; }
                
                .armor-plate {
                    background: linear-gradient(135deg, #121212 0%, #080808 100%);
                    border: 1px solid rgba(220, 38, 38, 0.15);
                    box-shadow: inset 0 0 20px rgba(0,0,0,1), 0 5px 15px rgba(0,0,0,0.5);
                    position: relative;
                    clip-path: polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .armor-plate::before {
                    content: '';
                    position: absolute;
                    top: 0; right: 0; width: 40%; height: 2px;
                    background: #dc2626;
                    box-shadow: 0 0 15px #dc2626;
                    opacity: 0.3;
                    transition: all 0.4s ease;
                }
                .armor-plate::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0; width: 40%; height: 2px;
                    background: #dc2626;
                    box-shadow: 0 0 15px #dc2626;
                    opacity: 0;
                    transition: all 0.4s ease;
                }
                .armor-plate:hover {
                    border-color: rgba(220, 38, 38, 0.6);
                    background: linear-gradient(135deg, #1a0f0f 0%, #080808 100%);
                    transform: translateY(-5px);
                }
                .armor-plate:hover::before {
                    opacity: 1;
                    width: 70%;
                }
                .armor-plate:hover::after {
                    opacity: 1;
                    width: 70%;
                }

                .neon-glow {
                    filter: drop-shadow(0 0 10px rgba(220, 38, 38, 0.8));
                }
                .text-glow {
                    text-shadow: 0 0 15px rgba(220, 38, 38, 0.7);
                }
                
                .bg-smoke {
                    background: radial-gradient(circle at center, rgba(220,38,38,0.08) 0%, transparent 60%);
                }
            `}</style>

            {/* Ambient Background & Global Overlays */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[150px]" />
                {/* Micro-texture overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.15] mix-blend-overlay" />
                
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20" />
            </div>

            {/* Navbar */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/80 backdrop-blur-md border-red-600/30 py-3' : 'bg-transparent border-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
                    <div className="flex items-center gap-3 group cursor-pointer z-10">
                        <Triangle size={24} fill="currentColor" className="text-red-600 neon-glow group-hover:rotate-180 transition-transform duration-700" />
                        <span className="font-bio text-lg tracking-[0.25em] text-white group-hover:text-red-500 transition-colors">OBSIDIAN<span className="text-red-600 text-glow">.RED</span></span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} absolute inset-0 items-center justify-center gap-12 pointer-events-none`}>
                        <div className="flex items-center gap-12 pointer-events-auto">
                            {navLinks.map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="font-hud text-[11px] text-zinc-400 hover:text-red-500 transition-colors uppercase tracking-[0.3em] relative group">
                                    {item}
                                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-red-600 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#dc2626]" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 z-10">
                        <button className="hidden md:flex items-center gap-2 px-6 py-2 bg-red-600/5 border border-red-600/40 text-red-500 font-hud text-[11px] hover:bg-red-600 hover:text-black hover:border-red-600 transition-all uppercase tracking-[0.2em] shadow-[inset_0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] relative overflow-hidden group" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                             <div className="absolute inset-0 w-0 bg-red-600 group-hover:w-full transition-all duration-300 -z-10" />
                             Initialize Link
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-red-500 hover:text-red-400 transition-colors neon-glow relative z-50">
                                {menuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && isMobile && (
                <div className="fixed inset-0 z-[40] bg-black/95 backdrop-blur-xl p-6 flex flex-col justify-center animate-in fade-in zoom-in-95 duration-300 border-x-4 border-red-600/50">
                    <div className="flex flex-col gap-8 text-center">
                        {navLinks.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="font-display text-5xl text-white uppercase tracking-wider hover:text-red-500 transition-colors text-glow">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative z-10 min-h-screen flex items-center justify-center">
                <div className="absolute inset-0 bg-smoke pointer-events-none" />
                
                <div className={`max-w-7xl mx-auto w-full grid ${isMobile ? 'grid-cols-1 gap-16 mt-10' : 'lg:grid-cols-2 gap-8'} items-center`}>
                    
                    <div className={`${isMobile ? 'text-center' : 'text-left'} order-2 lg:order-1`}>
                        <div className={`inline-flex items-center gap-3 mb-8 border border-red-600/40 px-4 py-1.5 bg-red-600/10 ${isMobile ? 'mx-auto' : ''}`} style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}>
                            <div className="w-2 h-2 bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
                            <span className="font-hud text-[11px] uppercase tracking-[0.3em] text-red-400">Combat Chassis Online</span>
                        </div>

                        <h1 className={`${isMobile ? 'text-[5rem] leading-[0.85]' : 'text-8xl lg:text-[11rem] leading-[0.75]'} font-display mb-6 text-white uppercase`}>
                            NEON <br />
                            <span className="text-red-600 text-glow">BLOOD</span>
                        </h1>

                        <p className={`font-hud text-sm text-zinc-400 mb-10 leading-relaxed tracking-wider uppercase ${isMobile ? 'mx-auto max-w-sm' : 'max-w-md'}`}>
                            Equip the next generation of biocybernetic armor. Engineered from pure obsidian alloys and powered by high-frequency red plasma cores.
                        </p>

                        <div className={`flex flex-wrap gap-5 ${isMobile ? 'justify-center' : 'justify-start'}`}>
                            <button className="px-8 py-4 bg-red-600 text-black font-bio text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(220,38,38,0.5)] flex items-center gap-3 hover:scale-105 active:scale-95 duration-300" style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}>
                                Engage Override <Target size={16} />
                            </button>
                            <button className="px-8 py-4 border border-zinc-700 text-zinc-300 font-bio text-[11px] uppercase tracking-[0.2em] hover:border-red-600 hover:text-red-500 hover:bg-red-600/5 transition-all bg-black/50 backdrop-blur-sm" style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}>
                                View Specs
                            </button>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center items-center relative h-[400px] lg:h-[600px] group perspective-1000">
                        {/* Abstract Representation of the Armor Backing (Inspired by image) */}
                        <div className="absolute w-[300px] h-[380px] md:w-[400px] md:h-[480px] bg-[#0a0a0a] flex items-center justify-center transition-transform duration-700 group-hover:scale-105 shadow-[inset_0_0_80px_rgba(0,0,0,1),0_0_50px_rgba(220,38,38,0.1)] border-[0.5px] border-red-900/30"
                             style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 20%, 100% 80%, 70% 100%, 30% 100%, 0% 80%, 0% 20%)' }}>
                             
                             {/* Carbon Texture layer */}
                             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-40 mix-blend-overlay" />
                             
                             {/* Internal structural lines */}
                             <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-red-900/40" />
                             <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-red-900/40" />

                             {/* Red Neon Plates (Shoulders/Sides) */}
                             <div className="absolute top-[15%] left-[5%] w-[10%] h-[30%] border-l-2 border-t-2 border-red-600 shadow-[inset_2px_2px_15px_rgba(220,38,38,0.5),-5px_-5px_20px_rgba(220,38,38,0.3)] opacity-80" />
                             <div className="absolute top-[15%] right-[5%] w-[10%] h-[30%] border-r-2 border-t-2 border-red-600 shadow-[inset_-2px_2px_15px_rgba(220,38,38,0.5),5px_-5px_20px_rgba(220,38,38,0.3)] opacity-80" />

                             <div className="absolute bottom-[20%] left-[10%] w-[5%] h-[20%] bg-red-600/80 shadow-[0_0_20px_red] transform skew-y-12 blur-[2px]" />
                             <div className="absolute bottom-[20%] right-[10%] w-[5%] h-[20%] bg-red-600/80 shadow-[0_0_20px_red] transform -skew-y-12 blur-[2px]" />

                             {/* Central Glowing Core (The main triangle from the image) */}
                             <div className="relative z-10 w-40 h-40 md:w-52 md:h-52 border-4 border-[#111] bg-[#050505] shadow-[0_0_60px_rgba(220,38,38,0.4),0_0_20px_#dc2626_inset] flex items-center justify-center group-hover:shadow-[0_0_80px_rgba(220,38,38,0.7),0_0_30px_#dc2626_inset] transition-shadow duration-500"
                                  style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}>
                                <Triangle size={80} strokeWidth={3} className="text-red-500 neon-glow animate-pulse rotate-180 drop-shadow-[0_0_15px_rgba(255,0,0,1)]" />
                                
                                {/* Inner core detail */}
                                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-600/20 blur-md" />
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Systems) */}
            <section id="systems" className="py-32 px-6 relative z-10 bg-[#020202] border-t border-red-900/20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                         <div>
                             <h2 className="font-display text-5xl md:text-7xl text-white uppercase leading-none">Armor <span className="text-red-600 text-glow">Subsystems</span></h2>
                             <div className="w-32 h-1 bg-red-600 mt-6 shadow-[0_0_15px_#dc2626]" />
                         </div>
                         <p className="font-hud text-xs text-zinc-500 uppercase tracking-[0.2em] max-w-sm text-left md:text-right border-l md:border-l-0 md:border-r border-red-600/50 pl-4 md:pl-0 md:pr-4">
                             Modular cybernetic enhancements built for extreme endurance and lethality.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: 'Obsidian Plating', desc: 'Hyper-dense carbon nanostructures absorbing kinetic impact while maintaining lightweight agility.' },
                            { icon: Zap, title: 'Plasma Veins', desc: 'Red neon liquid cooling systems that circulate thermal energy, preventing core meltdowns.' },
                            { icon: Activity, title: 'Neural Stimulants', desc: 'Automated injection of synthetic adrenaline into the host bloodstream during critical combat.' },
                            { icon: Scan, title: 'HUD Integration', desc: 'Optical implants overlaying tactical data, target tracking, and environmental analysis.' },
                            { icon: Lock, title: 'Encrypted Core', desc: 'Military-grade ICE protecting your consciousness from hostile neuro-hacking attempts.' },
                            { icon: Cpu, title: 'Sync Node', desc: 'Dorsal spine connector allowing seamless interfacing with global networks and external hardware.' }
                        ].map((feature, idx) => (
                            <div key={idx} className="armor-plate p-10 group">
                                <div className="absolute top-0 right-0 p-4 font-hud text-[10px] text-red-600/30 uppercase">0{idx + 1}</div>
                                <feature.icon size={36} className="text-red-600 mb-8 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-all duration-300" />
                                <h3 className="font-display text-4xl text-white uppercase mb-4 tracking-wide group-hover:text-red-500 transition-colors">{feature.title}</h3>
                                <p className="font-hud text-xs text-zinc-400 leading-relaxed uppercase tracking-wide">
                                    {feature.desc}
                                </p>
                                <div className="mt-10 pt-4 border-t border-red-900/30 flex justify-between items-center text-[10px] font-hud text-red-600/60 uppercase">
                                    <span>V.{idx + 1}.0 // SYS</span>
                                    <span className="group-hover:text-red-400 transition-colors duration-300 flex items-center gap-2">Online <div className="w-1.5 h-1.5 bg-red-600 shadow-[0_0_5px_red]" /></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section (Upgrades) */}
            <section id="upgrades" className="py-32 px-6 relative bg-[#050505]">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-red-600/30 shadow-[0_0_30px_red]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[2px] bg-red-600/30 shadow-[0_0_30px_red]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <span className="font-hud text-red-600 text-[10px] uppercase tracking-[0.5em] mb-4 block">Authorization Required</span>
                        <h2 className="font-display text-5xl md:text-7xl text-white uppercase leading-none mb-6">License <span className="text-red-600 text-glow">Tiers</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {[
                            { name: 'Rogue', price: 'Free', features: ['Standard Plating', 'Basic HUD', 'Local Sync Only'] },
                            { name: 'Operative', price: '$89', features: ['Obsidian Alloy Mk.II', 'Plasma Overdrive', 'Global Neural Net', 'Encrypted Voice'], popular: true },
                            { name: 'Archon', price: '$250', features: ['Quantum Core', 'Complete Immortality Protocol', 'Admin Override Access'] },
                        ].map((plan, i) => (
                            <div key={i} className={`armor-plate p-10 flex flex-col items-center text-center ${plan.popular ? 'border-red-600 transform md:-translate-y-4 shadow-[0_0_40px_rgba(220,38,38,0.15)] bg-[#110505]' : 'bg-[#0a0a0a]'}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 inset-x-0 mx-auto w-max px-6 py-1 bg-red-600 text-black font-bio text-[9px] uppercase tracking-[0.3em] font-bold clip-path-slant-btn">Recommended</div>
                                )}
                                <span className="font-bio text-lg text-white uppercase tracking-[0.2em] mb-2 mt-4">{plan.name}</span>
                                <div className="font-display text-6xl text-red-500 mb-8 text-glow">{plan.price}</div>
                                
                                <div className="flex flex-col gap-5 w-full mb-10">
                                    {plan.features.map(f => (
                                        <div key={f} className="flex justify-center items-center gap-3 text-center font-hud text-xs text-zinc-300 uppercase">
                                            <span className="text-red-600">[{f}]</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <button className={`w-full py-4 font-bio text-[10px] uppercase tracking-[0.2em] transition-all relative overflow-hidden group ${plan.popular ? 'bg-red-600 text-black font-bold hover:bg-white' : 'border border-red-600/40 text-red-500 hover:border-red-600 hover:bg-red-600/10'}`} style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                                    Authenticate
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Protocol FAQ */}
            <section id="network" className="py-24 px-6 bg-[#020202] relative border-t border-red-900/30">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-5xl md:text-6xl text-white uppercase mb-4">Network Intranet</h2>
                        <div className="w-16 h-1 bg-red-600 mx-auto shadow-[0_0_10px_red]" />
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
                            { q: "Can the armor be removed once synced?", a: "Negative. The bio-mechanical nervous system integrates directly into the host spine. Removal results in immediate failure of biological functions." },
                            { q: "How is the plasma core replenished?", a: "The core absorbs ambient kinetic and thermal energy. High-combat scenarios actually increase power efficiency." },
                            { q: "What happens if the internal cooling fails?", a: "The suit will auto-vent excess plasma through the dorsal exhausts, creating a temporary smokescreen while preserving the host." },
                        ].map((faq, i) => (
                            <div key={i} className="armor-plate p-6 cursor-pointer group" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                <div className="flex justify-between items-center group-hover:text-red-500 transition-colors">
                                    <h4 className="font-bio text-[11px] text-white group-hover:text-red-500 uppercase tracking-widest leading-relaxed pr-6">{faq.q}</h4>
                                    {openFaq === i ? <ChevronUp size={20} className="text-red-600 min-w-[20px]" /> : <ChevronDown size={20} className="text-zinc-600 min-w-[20px]" />}
                                </div>
                                {openFaq === i && (
                                    <div className="pt-6 mt-4 border-t border-red-900/30 animate-in slide-in-from-top-2 duration-300">
                                        <p className="font-hud text-xs text-zinc-400 uppercase leading-loose">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-red-900/50 bg-black relative z-10">
                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                      <div className="flex items-center gap-3">
                          <Triangle size={20} fill="currentColor" className="text-red-600 rotate-180" />
                          <span className="font-bio text-sm tracking-[0.25em] text-white">OBSIDIAN<span className="text-red-600">.RED</span></span>
                      </div>
                      
                      <div className="flex items-center gap-8 uppercase font-hud text-[10px] tracking-[0.2em] text-zinc-500">
                          <a href="#" className="hover:text-red-500 transition-colors">Comm Link</a>
                          <a href="#" className="hover:text-red-500 transition-colors">Database</a>
                          <a href="#" className="hover:text-red-500 transition-colors">Bypass</a>
                      </div>

                      <p className="font-hud text-[9px] text-zinc-600 uppercase tracking-[0.2em] text-center md:text-right max-w-xs">
                          © 2026 NEO-TOKYO BIO-ARMOR CORP. <br/> SECTOR 7G ALL RIGHTS RESERVED.
                      </p>
                 </div>
            </footer>
        </div>
    );
};

