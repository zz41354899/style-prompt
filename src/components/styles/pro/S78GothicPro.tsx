import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Skull, Moon, Castle, Cross, Flame, Shield, Crown, Sword, Ghost } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S78GothicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#0F0F12] text-[#E0D8D0] selection:bg-[#800020] selection:text-[#E0D8D0]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Cinzel:wght@400;700;900&family=Metamorphous&display=swap');

                .font-gothic-head { font-family: 'UnifrakturMaguntia', cursive; }
                .font-gothic-sub { font-family: 'Cinzel', serif; }
                .font-gothic-body { font-family: 'Metamorphous', cursive; }

                /* Stone Texture */
                .stone-texture {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");
                }
                
                /* Stained Glass Gradient */
                .stained-glass {
                    background: linear-gradient(135deg, rgba(128,0,32,0.4) 0%, rgba(25,25,112,0.4) 50%, rgba(75,0,130,0.4) 100%);
                    backdrop-filter: blur(8px);
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
                    border: 1px solid rgba(255,255,255,0.1);
                }
                
                /* Pointed Arch Clip Path */
                .gothic-arch {
                    clip-path: polygon(0% 100%, 0% 40%, 50% 0%, 100% 40%, 100% 100%);
                }
                
                .gothic-arch-inverted {
                     clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 50% 100%, 0% 60%);
                }
                
                /* Fog Animation */
                @keyframes fog-flow {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .fog-layer {
                    background: linear-gradient(to right, transparent 0%, rgba(20,20,30,0.8) 50%, transparent 100%);
                    width: 200%;
                    animation: fog-flow 20s linear infinite;
                }
                
                /* Torch Flicker */
                @keyframes torch {
                    0%, 100% { opacity: 0.8; transform: scale(1); filter: drop-shadow(0 0 10px #FF4500); }
                    50% { opacity: 1; transform: scale(1.1); filter: drop-shadow(0 0 20px #FF8C00); }
                }
                .torch-light {
                    animation: torch 2s ease-in-out infinite alternate;
                }
            `}</style>

            {/* Background Layers */}
            <div className="fixed inset-0 bg-[#0F0F12] stone-texture z-[-3]"></div>
            <div className="fixed bottom-0 left-0 w-full h-[50vh] fog-layer opacity-30 z-[-1] pointer-events-none"></div>

            {/* Dark vignette */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80 z-[-2] pointer-events-none"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 border-b border-[#800020]/30 bg-[#0F0F12]/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3 group">
                        <div className="relative">
                            <Shield size={28} className="text-[#800020] fill-[#0F0F12]" strokeWidth={1.5} />
                            <Sword size={20} className="absolute inset-0 m-auto text-[#A0A0A0] group-hover:rotate-45 transition-transform duration-500" />
                        </div>
                        <span className="text-3xl font-gothic-head text-[#E0D8D0] tracking-widest mt-1">GOTHICA</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['Cathedral', 'Crypt', 'Relics'].map((item) => (
                                <a key={item} href="#" className="font-gothic-sub text-lg text-[#A0A0A0] hover:text-[#800020] transition-colors uppercase tracking-widest flex flex-col items-center group">
                                    {item}
                                    <span className="w-2 h-2 border border-[#800020] rotate-45 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </a>
                            ))}
                            <button className="px-8 py-2 bg-[#200000] text-[#800020] font-gothic-sub border border-[#800020] hover:bg-[#800020] hover:text-[#0F0F12] transition-colors uppercase shadow-[0_0_15px_rgba(128,0,32,0.3)] hover:shadow-[0_0_25px_rgba(128,0,32,0.6)]">
                                Enter
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#E0D8D0] border border-[#800020]/50 bg-[#200000]">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#0F0F12] border-b border-[#800020] shadow-2xl z-50 text-center">
                        {['Cathedral', 'Crypt', 'Relics'].map((item) => (
                            <div key={item} className="py-4 font-gothic-sub text-xl text-[#E0D8D0] border-b border-[#800020]/20 tracking-widest uppercase">
                                {item}
                            </div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-[#800020] text-[#0F0F12] font-gothic-sub uppercase tracking-widest font-bold">
                            Descend
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-24 lg:py-36 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">

                {/* Arch Frame */}
                <div className="absolute inset-x-0 top-0 h-full border-x-[50px] border-t-[50px] border-[#0A0A0C] opacity-50 z-10 pointer-events-none hidden lg:block" style={{ borderRadius: '50% 50% 0 0' }}></div>

                <div className="max-w-4xl mx-auto text-center relative z-20">
                    <div className="mb-8 flex justify-center">
                        <Flame size={48} className="text-[#FF4500] torch-light" />
                    </div>

                    <h1 className="text-6xl md:text-9xl font-gothic-head text-[#E0D8D0] mb-6 leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
                        Eternal <span className="text-[#800020]">Night</span>
                    </h1>

                    <div className="flex items-center justify-center gap-4 mb-10 opacity-70">
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#800020] to-transparent"></div>
                        <Cross size={24} className="text-[#A0A0A0]" />
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#800020] to-transparent"></div>
                    </div>

                    <p className="font-gothic-body text-xl md:text-2xl text-[#A0A0A0] max-w-2xl mx-auto mb-16 leading-relaxed">
                        Embrace the shadows in a digital cathedral built of stone and code.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <button className="relative px-12 py-4 bg-[#0F0F12] text-[#800020] font-gothic-sub text-lg border border-[#800020] hover:text-[#E0D8D0] group transition-colors uppercase tracking-[0.2em] overflow-hidden">
                            <span className="relative z-10">Awaken</span>
                            <div className="absolute inset-0 bg-[#800020] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0 opacity-20"></div>
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#800020]"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#800020]"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#800020]"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#800020]"></div>
                        </button>

                        <button className="text-[#A0A0A0] font-gothic-sub tracking-widest hover:text-[#E0D8D0] transition-colors border-b border-transparent hover:border-[#E0D8D0] pb-1 uppercase">
                            Read the Epitaph
                        </button>
                    </div>
                </div>

                {/* Gargoyles / Decor */}
                <div className="absolute bottom-0 left-10 opacity-20 pointer-events-none hidden md:block">
                    <Castle size={180} className="text-[#202025]" />
                </div>
                <div className="absolute bottom-0 right-10 opacity-20 pointer-events-none hidden md:block transform scale-x-[-1]">
                    <Castle size={180} className="text-[#202025]" />
                </div>
            </section>

            {/* Features (The Order) */}
            <section className="py-24 px-6 relative bg-[#141418]">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-gothic-head text-[#E0D8D0] mb-4">The Order</h2>
                        <p className="font-gothic-sub text-[#800020] tracking-[0.3em] text-sm uppercase">Pillars of Darkness</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Skull, title: "Mortality", desc: "( Memento Mori )", color: "#A0A0A0" },
                            { icon: Moon, title: "Mystery", desc: "( Luna Obscura )", color: "#483D8B" },
                            { icon: Crown, title: "Majesty", desc: "( Rex Tenebris )", color: "#800020" }
                        ].map((f, i) => (
                            <div key={i} className="gothic-arch bg-[#0F0F12] border border-[#333] p-12 text-center group hover:border-[#800020] transition-colors relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#800020]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <f.icon size={56} className="mx-auto mb-8 transition-transform group-hover:scale-110 duration-500" style={{ color: f.color }} strokeWidth={1} />

                                <h3 className="text-3xl font-gothic-head text-[#E0D8D0] mb-2">{f.title}</h3>
                                <p className="font-gothic-sub text-sm text-[#800020] uppercase tracking-widest mb-6">{f.desc}</p>

                                <div className="w-1 h-12 bg-[#333] mx-auto group-hover:bg-[#800020] transition-colors"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Offerings) */}
            <section className="py-24 px-6 relative">
                {/* Stained Glass BG */}
                <div className="absolute inset-0 stained-glass opacity-20 z-0"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex flex-col items-center mb-16">
                        <Ghost size={40} className="text-[#800020] mb-4 opacity-80" />
                        <h2 className="text-4xl font-gothic-head text-[#E0D8D0] tracking-wider">Offerings</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {[
                            { name: 'Initiate', price: 'Free', features: ['Candlelight', 'Access to Nave', 'Silent Prayer'] },
                            { name: 'Templar', price: '30', features: ['Iron Key', 'Crypt Access', 'Sacred Text'], highlight: true },
                            { name: 'Cardinal', price: '70', features: ['Golden Chalice', 'High Altar', 'Absolution'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-10 border border-[#333] bg-[#0F0F12]/90 backdrop-blur-md ${plan.highlight ? 'z-10 border-[#800020] shadow-[0_0_30px_rgba(128,0,32,0.2)]' : 'hover:bg-[#141418]'}`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 inset-x-0 h-1 bg-[#800020]"></div>
                                )}

                                <div className="mb-8 text-center">
                                    <h3 className="text-xl font-gothic-sub text-[#A0A0A0] uppercase tracking-widest mb-4">{plan.name}</h3>
                                    <div className="font-gothic-head text-5xl text-[#E0D8D0]">{plan.price !== 'Free' ? `¤${plan.price}` : plan.price}</div>
                                </div>

                                <ul className="space-y-6 mb-10 text-center">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="font-gothic-body text-[#A0A0A0] flex justify-center items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-[#800020] rotate-45"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 font-gothic-sub text-sm uppercase tracking-[0.2em] border transition-all ${plan.highlight ? 'bg-[#800020] text-[#0F0F12] border-[#800020] hover:bg-[#A00028]' : 'bg-transparent text-[#800020] border-[#800020]/50 hover:border-[#800020]'}`}>
                                    Sacrifice
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ (Confessional) */}
            <section className="py-24 px-6 bg-[#0A0A0C] border-t border-[#800020]/20">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-gothic-head text-center mb-16 text-[#E0D8D0] drop-shadow-md">
                        Whispers in the Dark
                    </h2>

                    <div className="space-y-8">
                        {[{ q: 'Is this only for the night?', a: 'The gothic spirit breathes best in shadows, but lives eternally.' },
                        { q: 'Are the gargoyles watching?', a: 'They protect the structure from evil spirits and rain.' },
                        { q: 'How do I join the order?', a: 'Sign the parchment with your intent and await the raven.' }
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-[#800020]/30 group-hover:bg-[#800020] transition-colors"></div>

                                <button className="w-full text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <h3 className="font-gothic-sub font-bold text-lg text-[#E0D8D0] tracking-widest mb-2 group-hover:text-[#800020] transition-colors flex justify-between">
                                        {item.q}
                                        <ChevronDown size={18} className={`transform transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                    </h3>
                                </button>

                                <div className={`overflow-hidden transition-all duration-500 ${expandedFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="font-gothic-body text-[#7A7670] mt-2 italic leading-relaxed pl-4 border-l-2 border-[#333]">
                                        "{item.a}"
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 relative text-center bg-[#0F0F12]">
                <div className="gothic-arch-inverted absolute bottom-0 inset-x-0 h-32 bg-[#141418] pointer-events-none opacity-50"></div>

                <div className="max-w-4xl mx-auto relative z-10 p-12 border border-[#800020]/30 bg-[#0F0F12] shadow-[0_0_100px_rgba(0,0,0,0.8)]">
                    <Crown size={64} className="mx-auto mb-8 text-[#E0D8D0]" strokeWidth={1} />

                    <h2 className="text-4xl md:text-6xl font-gothic-head mb-8 text-[#E0D8D0]">
                        Rule the Shadows
                    </h2>

                    <button className="px-16 py-6 bg-transparent text-[#800020] font-gothic-sub text-lg border-2 border-[#800020] hover:bg-[#800020] hover:text-[#0F0F12] transition-colors uppercase tracking-[0.25em]">
                        Claim Throne
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 bg-[#050505] text-[#7A7670] border-t-4 border-[#800020]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div className="flex flex-col">
                        <span className="text-3xl font-gothic-head text-[#E0D8D0]">GOTHICA</span>
                        <span className="text-xs font-gothic-sub uppercase tracking-widest mt-1">Est. 1250 AD</span>
                    </div>

                    <div className="flex gap-10 font-gothic-sub text-xs tracking-[0.2em] uppercase">
                        <a href="#" className="hover:text-[#800020] transition-colors">Origins</a>
                        <a href="#" className="hover:text-[#800020] transition-colors">Rituals</a>
                        <a href="#" className="hover:text-[#800020] transition-colors">Tomb</a>
                    </div>

                    <div className="font-gothic-head text-xl text-[#800020]">
                        Memento Mori
                    </div>
                </div>
            </footer>
        </div>
    );
};
