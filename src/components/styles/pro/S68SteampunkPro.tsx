import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Cog, Settings, Gauge, Clock, Compass, Anchor, Key, Telescope } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S68SteampunkPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => (prev + 0.5) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#1A1510] text-[#E8DCC8] selection:bg-[#B8860B] selection:text-[#1A1510]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Rye&family=Sorts+Mill+Goudy:ital@0;1&display=swap');

                .font-steam-head { font-family: 'Rye', serif; }
                .font-steam-body { font-family: 'Sorts Mill Goudy', serif; }
                .font-steam-deco { font-family: 'Cinzel Decorative', cursive; }

                /* Victorian Wallpaper Pattern */
                .wallpaper-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 20-20 20L0 20z' fill='none' stroke='%23B8860B' stroke-width='0.5' opacity='0.1'/%3E%3Ccircle cx='20' cy='20' r='5' fill='%23B8860B' opacity='0.05'/%3E%3C/svg%3E");
                }
                
                /* Brass Gradient */
                .brass-gradient {
                    background: linear-gradient(135deg, #B8860B 0%, #F4D03F 40%, #8B6914 100%);
                }
                .brass-text {
                    background: linear-gradient(135deg, #F4D03F 0%, #B8860B 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                /* Metallic Border */
                .metallic-border {
                    border: 4px solid transparent;
                    border-image: linear-gradient(to bottom right, #B8860B, #8B4513, #B8860B) 1;
                    box-shadow: 0 0 15px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.8);
                }
                
                /* Boiler Plate */
                .boiler-plate {
                    background: radial-gradient(circle at center, #2A2118, #1A1510);
                    box-shadow: 
                        inset 2px 2px 10px rgba(255,255,255,0.05),
                        inset -2px -2px 10px rgba(0,0,0,0.8),
                        5px 5px 15px rgba(0,0,0,0.6);
                    position: relative;
                }
                /* Rivets */
                .rivet {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: radial-gradient(circle at 30% 30%, #D4AF37, #8B6914);
                    box-shadow: 1px 1px 2px rgba(0,0,0,0.6);
                    position: absolute;
                }
                
                /* Steam Animation */
                @keyframes steam {
                    0% { transform: translateY(0) scale(1); opacity: 0; }
                    50% { opacity: 0.4; }
                    100% { transform: translateY(-50px) scale(2); opacity: 0; }
                }
                .steam-particle {
                    width: 20px;
                    height: 20px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 50%;
                    filter: blur(8px);
                    animation: steam 3s infinite;
                }
            `}</style>

            <div className="absolute inset-0 bg-[#1A1510] fixed z-[-2]"></div>
            <div className="absolute inset-0 wallpaper-pattern fixed z-[-1] pointer-events-none"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#1A1510]/95 backdrop-blur-sm border-b-4 border-[#8B4513] shadow-lg">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#B8860B] p-1 rounded-full border-2 border-[#8B4513] shadow-md relative">
                            <Cog size={28} className="text-[#1A1510] spin-slow" style={{ transform: `rotate(${rotation}deg)` }} />
                        </div>
                        <span className="text-2xl font-steam-head text-[#B8860B] tracking-wider drop-shadow-md">AETHER<span className="text-[#E8DCC8]">WORKS</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Logbook', 'Machinery', 'Expeditions'].map((item) => (
                                <a key={item} href="#" className="font-steam-body font-bold text-[#A89878] hover:text-[#B8860B] text-lg tracking-widest transition-colors">
                                    {item}
                                </a>
                            ))}
                            <button className="px-8 py-2 brass-gradient text-[#1A1510] font-steam-head text-sm tracking-widest border-2 border-[#8B4513] shadow-[0_4px_0_#5D4037] hover:translate-y-px hover:shadow-[0_2px_0_#5D4037] active:translate-y-1 active:shadow-none transition-all rounded-sm uppercase">
                                Full Steam
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#B8860B] border-2 border-[#8B4513] rounded bg-[#2A2118]">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#1A1510] border-b-4 border-[#8B4513] shadow-2xl">
                        {['Logbook', 'Machinery', 'Expeditions'].map((item) => (
                            <div key={item} className="py-4 font-steam-head text-[#E8DCC8] border-b border-[#3E3025] flex items-center gap-2">
                                <Cog size={14} className="text-[#B8860B]" /> {item}
                            </div>
                        ))}
                        <button className="w-full mt-6 py-4 brass-gradient text-[#1A1510] font-steam-head tracking-widest border-2 border-[#8B4513] shadow-md uppercase">
                            Full Steam
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
                {/* Big Gear Background */}
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                    <Cog size={600} style={{ transform: `rotate(-${rotation * 0.5}deg)` }} className="text-[#B8860B]" />
                </div>
                {/* Steam Particles */}
                <div className="absolute bottom-0 left-1/4 pointer-events-none">
                    <div className="steam-particle" style={{ animationDelay: '0s' }}></div>
                    <div className="steam-particle" style={{ animationDelay: '1s', left: '20px' }}></div>
                    <div className="steam-particle" style={{ animationDelay: '2s', left: '-20px' }}></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-3 mb-8 px-8 py-2 boiler-plate border border-[#B8860B]/30 rounded-full">
                        <Clock size={20} className="text-[#B8860B]" />
                        <span className="font-steam-body font-bold text-lg text-[#E8DCC8] italic">Est. 1885</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-steam-deco text-[#E8DCC8] mb-8 leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                        INDUSTRIAL <br />
                        <span className="brass-text text-7xl md:text-9xl">REVOLUTION</span>
                    </h1>

                    <p className="font-steam-body text-2xl md:text-3xl text-[#A89878] max-w-2xl mx-auto mb-12 italic leading-relaxed">
                        Precision engineering powered by steam, brass, and boundless ambition.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="px-12 py-5 brass-gradient text-[#1A1510] font-steam-head text-lg tracking-widest border-2 border-[#8B4513] shadow-[0_6px_0_#5D4037] hover:translate-y-1 hover:shadow-[0_4px_0_#5D4037] active:translate-y-2 active:shadow-none transition-all w-full sm:w-auto uppercase rounded-sm relative overflow-hidden group">
                            <span className="relative z-10">Inspect Gadgets</span>
                            <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full skew-x-[-20deg] group-hover:translate-x-full transition-transform duration-500"></div>
                        </button>
                        <button className="px-12 py-5 bg-[#2A2118] text-[#B8860B] font-steam-head text-lg tracking-widest border-2 border-[#B8860B] shadow-[ inset_0_0_10px_rgba(0,0,0,0.5)] hover:bg-[#3E3025] hover:text-[#F4D03F] transition-colors w-full sm:w-auto rounded-sm uppercase">
                            View Blueprints
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Mechanical Cards) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Cog, title: "Clockwork", desc: "Intricate gear systems ticking in perfect unison.", color: "#B8860B" },
                            { icon: Gauge, title: "Pressure", desc: "High-grade boilers tested to 500 PSI.", color: "#CD7F32" },
                            { icon: Compass, title: "Navigation", desc: "Brass compasses for charting the unknown.", color: "#A0522D" }
                        ].map((f, i) => (
                            <div key={i} className="boiler-plate p-8 rounded-lg border border-[#3E3025] group hover:border-[#B8860B] transition-colors">
                                {/* Corner Rivets */}
                                <div className="rivet top-2 left-2"></div>
                                <div className="rivet top-2 right-2"></div>
                                <div className="rivet bottom-2 left-2"></div>
                                <div className="rivet bottom-2 right-2"></div>

                                <div className="w-16 h-16 rounded-full border-2 border-[#B8860B] bg-[#1A1510] flex items-center justify-center mb-6 mx-auto shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] group-hover:animate-pulse">
                                    <f.icon className="w-8 h-8" style={{ color: f.color }} />
                                </div>

                                <h3 className="text-2xl font-steam-head text-[#E8DCC8] mb-4 text-center uppercase tracking-wider">{f.title}</h3>
                                <p className="font-steam-body text-xl text-[#A89878] text-center italic">{f.desc}</p>

                                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#8B4513] to-transparent mt-6"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Tickets/Manifest) */}
            <section className="py-24 px-6 relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#B8860B_0%,_transparent_70%)]"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-steam-deco text-[#B8860B] mb-4 drop-shadow-sm">Boarding Pass</h2>
                        <div className="flex items-center justify-center gap-4">
                            <span className="h-px w-20 bg-[#8B4513]"></span>
                            <Anchor size={24} className="text-[#A89878]" />
                            <span className="h-px w-20 bg-[#8B4513]"></span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Stowaway', price: '£15', features: ['Cargo Hold Access', 'Standard Rations', 'Hammock'], color: '#A0522D' },
                            { name: 'Captain', price: '£45', features: ['Bridge Access', 'Fine Dining', 'Private Cabin'], color: '#B8860B', highlight: true },
                            { name: 'Admiral', price: '£120', features: ['Airship Command', 'Officer Mess', 'Luxury Suite'], color: '#CD7F32' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 bg-[#E8DCC8] text-[#1A1510] transition-transform duration-300 ${plan.highlight ? 'transform scale-105 z-10 shadow-[0_0_50px_rgba(184,134,11,0.2)]' : 'opacity-90 grayscale-[30%] hover:grayscale-0'}`} style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                                {/* Ticket Texture */}
                                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>

                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 p-2 bg-[#8B4513] text-[#E8DCC8] font-steam-head text-xs uppercase tracking-widest">
                                        First Class
                                    </div>
                                )}

                                <div className="mb-6 relative z-10 border-b-2 border-dashed border-[#8B4513] pb-6">
                                    <h3 className="text-2xl font-steam-head text-[#8B4513] uppercase tracking-wider">{plan.name}</h3>
                                    <div className="text-5xl font-steam-head font-bold mt-2 text-[#1A1510]">{plan.price}</div>
                                </div>

                                <ul className="space-y-4 mb-8 relative z-10">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-steam-body font-bold text-[#3E3025] text-lg">
                                            <Key size={16} className="text-[#8B4513]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 text-[#E8DCC8] font-steam-head text-sm tracking-widest uppercase relative z-10 hover:brightness-110 transition-all shadow-md" style={{ backgroundColor: '#8B4513' }}>
                                    Purchase Ticket
                                </button>

                                {/* Side notches simulation */}
                                <div className="absolute top-1/2 left-0 w-4 h-8 bg-[#1A1510] rounded-r-full transform -translate-y-1/2 -translate-x-2"></div>
                                <div className="absolute top-1/2 right-0 w-4 h-8 bg-[#1A1510] rounded-l-full transform -translate-y-1/2 translate-x-2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#16120E]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-steam-head text-center mb-16 text-[#A89878] tracking-widest">
                        Inquiries
                    </h2>

                    <div className="space-y-6">
                        {[{ q: 'Does it run on coal?', a: 'Only the finest anthracite for maximum thermal efficiency.' },
                        { q: 'Is it dangerous?', a: 'Pressure valves release automatically at 90% capacity. Mostly safe.' },
                        { q: 'What about rust?', a: 'All exposed brass is treated with a proprietary anti-oxidation varnish.' }
                        ].map((item, i) => (
                            <div key={i} className="boiler-plate rounded-lg p-1">
                                <button className="w-full flex items-center justify-between p-5 text-left group bg-[#1F1914] rounded hover:bg-[#2A2118] transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-steam-body font-bold text-xl text-[#E8DCC8] italic group-hover:text-[#B8860B] transition-colors">✦ {item.q}</span>
                                    <ChevronDown size={24} className={`text-[#B8860B] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-5 pb-5 pt-4 font-steam-body text-lg text-[#A89878] leading-relaxed border-t border-[#3E3025] bg-[#1F1914] rounded-b">
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
                <div className="absolute inset-0 bg-[#8B4513] opacity-20"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10 p-16 metallic-border bg-[#1A1510] shadow-2xl">
                    <div className="rivet top-4 left-4"></div>
                    <div className="rivet top-4 right-4"></div>
                    <div className="rivet bottom-4 left-4"></div>
                    <div className="rivet bottom-4 right-4"></div>

                    <Telescope size={56} className="mx-auto mb-8 text-[#B8860B]" />
                    <h2 className="text-5xl font-steam-head text-[#E8DCC8] mb-8 drop-shadow-md">Chart Your Course</h2>
                    <p className="font-steam-body text-2xl text-[#A89878] mb-12 italic">The horizon awaits those brave enough to seek it.</p>

                    <div className="flex justify-center">
                        <button className="px-16 py-6 brass-gradient text-[#1A1510] font-steam-head text-xl tracking-widest border-2 border-[#8B4513] shadow-[0_6px_0_#5D4037] hover:translate-y-1 hover:shadow-[0_4px_0_#5D4037] uppercase rounded-sm group relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            Launch Expedition
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 bg-[#0F0C09] border-t-4 border-[#8B4513] text-[#A89878]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Cog size={24} className="text-[#B8860B]" />
                        <span className="text-2xl font-steam-head text-[#E8DCC8] tracking-widest">AETHER<span className="text-[#B8860B]">WORKS</span></span>
                    </div>

                    <div className="flex gap-10 text-sm font-steam-head font-bold uppercase tracking-widest text-[#5D4037]">
                        <a href="#" className="hover:text-[#B8860B] transition-colors">Patent Office</a>
                        <a href="#" className="hover:text-[#B8860B] transition-colors">Guild Hall</a>
                        <a href="#" className="hover:text-[#B8860B] transition-colors">Telegraph</a>
                    </div>

                    <div className="font-steam-body text-lg text-[#3E3025] italic">
                        © 1885 Aetherworks Engineering.
                    </div>
                </div>
            </footer>
        </div>
    );
};
