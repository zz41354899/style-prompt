import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Wand2, Sparkles, Crown, Shield, Scroll, Map, Gem, Sword } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S70FantasyPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#1D1022] text-[#F3E5AB] selection:bg-[#9B59B6] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=MedievalSharp&display=swap');

                .font-fantasy-head { font-family: 'Cinzel', serif; }
                .font-fantasy-body { font-family: 'MedievalSharp', cursive; }

                /* Parchment Texture */
                .parchment-bg {
                    background-color: #Fdf6e3;
                    background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.2'/%3E%3C/svg%3E");
                    box-shadow: inset 0 0 50px rgba(139, 69, 19, 0.4);
                }
                
                /* Mystical Particles */
                @keyframes float-particle {
                    0% { transform: translateY(0) scale(1); opacity: 0; }
                    50% { opacity: 0.8; }
                    100% { transform: translateY(-100px) scale(0); opacity: 0; }
                }
                .magic-particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: #FFD700;
                    border-radius: 50%;
                    filter: blur(2px);
                    box-shadow: 0 0 10px #FFD700;
                    animation: float-particle 4s infinite linear;
                }
                
                /* Gold Filigree Border */
                .filigree-border {
                    border: 2px solid #FFD700;
                    position: relative;
                }
                .filigree-border::before, .filigree-border::after {
                    content: '✦';
                    position: absolute;
                    color: #FFD700;
                    font-size: 20px;
                    top: -14px;
                }
                .filigree-border::before { left: -10px; }
                .filigree-border::after { right: -10px; }
                
                /* Glowing Runes */
                .rune-glow {
                    text-shadow: 0 0 10px rgba(155, 89, 182, 0.8), 0 0 20px rgba(155, 89, 182, 0.4);
                }
                
                /* Magical Gradient Text */
                .magic-text {
                    background: linear-gradient(to bottom, #FFD700, #F3E5AB 50%, #C0392B);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>

            <div className="absolute inset-0 bg-[#1D1022] fixed z-[-2]"></div>

            {/* Ambient Background Aura */}
            <div className="fixed inset-0 pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle at 50% 30%, #5B2C6F 0%, #1D1022 70%)' }}></div>

            {/* Particles */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="magic-particle" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100 + 20}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                        background: i % 2 === 0 ? '#FFD700' : '#9B59B6'
                    }}></div>
                ))}
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#1D1022]/90 backdrop-blur-md border-b-2 border-[#FFD700]/30 shadow-2xl">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#9B59B6] blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <Wand2 size={24} className="text-[#FFD700] relative z-10" />
                        </div>
                        <span className="text-2xl font-fantasy-head font-bold text-[#F3E5AB]">MYTHOS<span className="text-[#9B59B6]">.RPG</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['Grimoire', 'Bestiary', 'Kingdoms'].map((item) => (
                                <a key={item} href="#" className="font-fantasy-head font-bold text-[#A890D0] hover:text-[#FFD700] text-sm uppercase tracking-widest transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-[#FFD700] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                                </a>
                            ))}
                            <button className="px-8 py-2 bg-[#5B2C6F] text-[#F3E5AB] font-fantasy-head font-bold text-xs tracking-widest border border-[#FFD700] rounded-sm hover:bg-[#4A235A] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all">
                                PLAY NOW
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#FFD700] border border-[#FFD700]/30 bg-[#5B2C6F]/50 rounded">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#1D1022] border-b border-[#FFD700]/30 shadow-2xl">
                        {['Grimoire', 'Bestiary', 'Kingdoms'].map((item) => (
                            <div key={item} className="py-4 font-fantasy-head text-[#F3E5AB] border-b border-[#FFD700]/10 tracking-widest flex items-center gap-3">
                                <Sparkles size={14} className="text-[#9B59B6]" /> {item}
                            </div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-[#5B2C6F] text-[#F3E5AB] font-fantasy-head font-bold tracking-widest border border-[#FFD700]">
                            PLAY NOW
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 border border-[#FFD700]/40 rounded-full bg-[#1D1022]/80 backdrop-blur-sm">
                        <Crown size={18} className="text-[#FFD700]" />
                        <span className="font-fantasy-head font-bold text-sm text-[#FFD700] tracking-widest">Season 5: Age of Heroes</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-fantasy-head font-black text-[#F3E5AB] mb-6 leading-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                        FORGE YOUR <br />
                        <span className="magic-text rune-glow">LEGEND</span>
                    </h1>

                    <p className="font-fantasy-body text-xl md:text-2xl text-[#A890D0] max-w-2xl mx-auto mb-12 leading-relaxed">
                        Embark on an epic journey through realms of ancient magic, mythical beasts, and untold treasures.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="px-12 py-5 bg-[#7D3C98] text-[#F3E5AB] font-fantasy-head text-lg font-bold tracking-widest border-2 border-[#FFD700] rounded-sm shadow-[0_0_30px_rgba(125,60,152,0.4)] hover:scale-105 transition-transform w-full sm:w-auto relative overflow-hidden group">
                            <span className="relative z-10 flex items-center justify-center gap-2"><Sword size={20} /> Begin Quest</span>
                            <div className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-[-20deg] group-hover:translate-x-full transition-transform duration-700"></div>
                        </button>
                        <button className="px-12 py-5 bg-transparent text-[#FFD700] font-fantasy-head text-lg font-bold tracking-widest border border-[#FFD700]/50 hover:bg-[#FFD700]/10 transition-colors w-full sm:w-auto rounded-sm backdrop-blur-sm">
                            View World Map
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Parchment Cards) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block relative">
                            <h2 className="text-4xl font-fantasy-head text-[#F3E5AB] mb-4 drop-shadow-lg">CHOOSE YOUR PATH</h2>
                            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Wand2, title: "Sorcerer", desc: "Master of arcane elements and forbidden lore.", color: "#9B59B6" },
                            { icon: Sword, title: "Knight", desc: "Defender of the realm, clad in steel and honor.", color: "#C0392B" },
                            { icon: Gem, title: "Rogue", desc: "Shadow dweller seeking fortune and secrets.", color: "#27AE60" }
                        ].map((f, i) => (
                            <div key={i} className="parchment-bg p-8 rounded-sm filigree-border transform hover:-translate-y-2 transition-transform duration-300 group">
                                <div className="w-16 h-16 rounded-full border-2 border-[#1A1510]/20 bg-[#Fdf6e3] flex items-center justify-center mb-6 mx-auto shadow-inner">
                                    <f.icon className="w-8 h-8 group-hover:scale-110 transition-transform" style={{ color: f.color }} />
                                </div>

                                <h3 className="text-2xl font-fantasy-head text-[#1D1022] mb-4 text-center tracking-normal font-bold">{f.title}</h3>
                                <p className="font-fantasy-body text-lg text-[#5D4037] text-center">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Scrolls) */}
            <section className="py-24 px-6 relative">
                {/* Decorative rune line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9B59B6] to-transparent"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-fantasy-head text-[#FFD700] mb-4">MEMBERSHIP TIERS</h2>
                        <p className="font-fantasy-body text-[#A890D0] text-lg italic">Unlock the secrets of the ancients</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        {[
                            { name: 'Novice', price: 'Free', features: ['Core Rulebook', 'World Map', 'General Chat'] },
                            { name: 'Hero', price: '$15', period: '/mo', features: ['All Classes', 'Monthly Loot', 'Priority Queue'], highlight: true },
                            { name: 'Legend', price: '$30', period: '/mo', features: ['Beta Access', 'Custom Skins', 'Guild Leader'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 transition-all duration-300 ${plan.highlight ? 'bg-[#2C1B35] border-2 border-[#FFD700] shadow-[0_0_40px_rgba(255,215,0,0.15)] z-10 transform scale-105 rounded-lg' : 'bg-[#1D1022] border border-[#A890D0]/30 hover:border-[#9B59B6] rounded-md'}`}>
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-[#FFD700] text-[#1D1022] font-fantasy-head text-xs font-bold tracking-widest rounded-full shadow-lg">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="mb-8 border-b border-[#A890D0]/20 pb-6 text-center">
                                    <h3 className="text-xl font-fantasy-head text-[#F3E5AB] tracking-widest mb-2 uppercase">{plan.name}</h3>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className={`text-4xl font-fantasy-head font-bold ${plan.highlight ? 'text-[#FFD700]' : 'text-white'}`}>{plan.price}</span>
                                        {plan.period && <span className="text-xs font-fantasy-head text-[#A890D0]">{plan.period}</span>}
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-fantasy-body text-lg text-[#D0FFD0]">
                                            <Shield size={14} className={plan.highlight ? 'text-[#FFD700]' : 'text-[#9B59B6]'} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 font-fantasy-head font-bold text-sm tracking-widest rounded transition-all uppercase ${plan.highlight ? 'bg-[#FFD700] text-[#1D1022] hover:bg-[#F1C40F]' : 'bg-transparent border border-[#A890D0] text-[#A890D0] hover:text-[#F3E5AB] hover:border-[#F3E5AB]'}`}>
                                    Join Guild
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#160C1B]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-fantasy-head text-center mb-12 text-[#9B59B6] tracking-widest rune-glow">
                        SCROLLS OF WISDOM
                    </h2>

                    <div className="space-y-6">
                        {[{ q: 'Cross-platform play?', a: 'Yes, adventurers from all realms (PC, Mac, Mobile) can party together.' },
                        { q: 'Pay to win?', a: 'Never. Only cosmetic enchantments and convenience spells are sold.' },
                        { q: 'Hardcore mode?', a: 'Permadeath servers are available for the truly brave.' }
                        ].map((item, i) => (
                            <div key={i} className="parchment-bg rounded-md p-1 transform rotate-0 hover:rotate-1 transition-transform">
                                <button className="w-full flex items-center justify-between p-5 text-left group bg-[#Fdf6e3]/50 rounded hover:bg-[#Fdf6e3] transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-fantasy-body font-bold text-xl text-[#3E2723] group-hover:text-[#5B2C6F] transition-colors">{item.q}</span>
                                    <Scroll size={24} className={`text-[#8B4513] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-5 pb-5 pt-2 font-fantasy-body text-lg text-[#5D4037] leading-relaxed border-t border-[#8B4513]/20">
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
                <div className="absolute inset-0 bg-[#5B2C6F] opacity-10"></div>

                <div className="max-w-3xl mx-auto text-center relative z-10 p-12 border-4 border-double border-[#FFD700]/30 outline outline-offset-4 outline-[#FFD700]/20 rounded-lg bg-[#1D1022]/90">
                    <Map size={56} className="mx-auto mb-8 text-[#FFD700] drop-shadow-lg" />
                    <h2 className="text-4xl md:text-5xl font-fantasy-head text-[#F3E5AB] mb-6 drop-shadow-md">The Destiny Awaits</h2>
                    <p className="font-fantasy-body text-xl text-[#A890D0] mb-10 max-w-lg mx-auto">
                        The stars align. The gates open. Will you answer the call?
                    </p>
                    <button className="px-16 py-5 bg-[#FFD700] text-[#1D1022] font-fantasy-head text-xl font-bold tracking-widest rounded shadow-[0_0_20px_#FFD700] hover:bg-[#F1C40F] hover:scale-105 transition-all">
                        ENTER WORLD
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t-2 border-[#FFD700]/20 bg-[#120A16]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Wand2 size={20} className="text-[#9B59B6]" />
                        <span className="text-lg font-fantasy-head font-bold text-[#F3E5AB] tracking-widest">MYTHOS<span className="text-[#9B59B6]">.RPG</span></span>
                    </div>

                    <div className="flex gap-8 text-xs font-fantasy-head font-bold uppercase tracking-widest text-[#A890D0]">
                        <a href="#" className="hover:text-[#FFD700] transition-colors">Lore</a>
                        <a href="#" className="hover:text-[#FFD700] transition-colors">Support</a>
                        <a href="#" className="hover:text-[#FFD700] transition-colors">Terms</a>
                    </div>

                    <div className="font-fantasy-body text-sm text-[#5B2C6F] uppercase">
                        © 2025 Mythos Studios.
                    </div>
                </div>
            </footer>
        </div >
    );
};
