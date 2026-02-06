import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Leaf, Bird, Flower2, TreePine, Droplets, PawPrint, Sprout } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S59JunglePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#0D1B0E] text-[#E8F5E9] selection:bg-[#8BC34A] selection:text-[#0D1B0E]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;700&family=Yeseva+One&display=swap');

                .font-jungle-head { font-family: 'Yeseva One', cursive; }
                .font-jungle-body { font-family: 'Merriweather Sans', sans-serif; }

                /* Jungle Atmosphere Gradient */
                .bg-jungle-deep {
                    background: linear-gradient(180deg, #1B5E20 0%, #0D1B0E 60%, #000000 100%);
                }
                
                /* Leaf Pattern Overlay */
                .leaf-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c2 10 10 10 10 30 0 20-10 20-10 30-2-10-10-10-10-30 0-20 10-20 10-30z' fill='%234CAF50' fill-opacity='0.03'/%3E%3C/svg%3E");
                }

                /* Humidity/Mist Animation */
                @keyframes heavy-mist {
                    0% { transform: translateX(0) translateY(0); opacity: 0.1; }
                    50% { transform: translateX(20px) translateY(-10px); opacity: 0.2; }
                    100% { transform: translateX(0) translateY(0); opacity: 0.1; }
                }
                .mist-layer {
                    background: radial-gradient(circle, rgba(255,255,255,0.1), transparent);
                    filter: blur(40px);
                    animation: heavy-mist 20s infinite ease-in-out;
                }

                /* Vibrant Gradient Text */
                .text-tropical {
                    background: linear-gradient(to right, #8BC34A, #FFEB3B);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                /* Glass Card with Green Tint */
                .glass-jungle {
                    background: rgba(27, 94, 32, 0.4);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(139, 195, 74, 0.2);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
                }
            `}</style>

            <div className="absolute inset-0 bg-jungle-deep fixed z-[-2]"></div>
            <div className="absolute inset-0 leaf-pattern fixed z-[-1] pointer-events-none"></div>

            {/* Ambient Mist */}
            <div className="absolute top-0 left-0 w-full h-full mist-layer pointer-events-none z-0"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 glass-jungle border-b border-[#8BC34A]/20">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <Leaf size={28} className="text-[#8BC34A]" />
                        <span className="text-2xl font-jungle-head tracking-wide text-[#E8F5E9]">MONSTERA</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Ecosystem', 'Species', 'Conservation'].map((item) => (
                                <a key={item} href="#" className="font-jungle-body text-[#C8E6C9] hover:text-[#8BC34A] transition-colors text-sm font-bold uppercase tracking-wider">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-2 bg-[#8BC34A] text-[#0D1B0E] font-jungle-body font-bold text-sm uppercase rounded-full hover:bg-[#AED581] transition-all shadow-[0_0_15px_rgba(139,195,74,0.4)]">
                                Enter Canopy
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#8BC34A] glass-jungle rounded-full">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 glass-jungle border-b border-[#8BC34A]/20">
                        {['Ecosystem', 'Species', 'Conservation'].map((item) => (
                            <div key={item} className="py-4 font-jungle-head text-xl text-[#E8F5E9] border-b border-[#8BC34A]/10 tracking-wide">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-3 bg-[#8BC34A] text-[#0D1B0E] font-jungle-body font-bold rounded-full">
                            Enter Canopy
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
                {/* Giant Leaf Silhouette */}
                <Leaf className="absolute -right-20 top-20 text-[#2E7D32] opacity-20 transform rotate-45 w-96 h-96 pointer-events-none z-0" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full border border-[#8BC34A]/30 bg-[#2E7D32]/20 backdrop-blur-sm">
                        <Sprout size={16} className="text-[#8BC34A]" />
                        <span className="font-jungle-body text-xs font-bold text-[#AED581] uppercase tracking-widest">Growth Engine Active</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-jungle-head text-[#E8F5E9] mb-8 leading-tight">
                        WILD <br />
                        <span className="text-tropical">GROWTH</span>
                    </h1>

                    <p className="font-jungle-body text-xl md:text-2xl text-[#C8E6C9] max-w-2xl mx-auto mb-12 leading-relaxed">
                        Unleash the untamed potential of your digital ecosystem. Dense, vibrant, and alive with possibility.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-5 bg-[#2E7D32] text-white font-jungle-body font-bold text-lg rounded-xl hover:bg-[#388E3C] transition-all shadow-lg hover:shadow-[#2E7D32]/50 w-full sm:w-auto flex items-center justify-center gap-2">
                            Start Exploring <ArrowRight size={20} />
                        </button>
                        <button className="px-10 py-5 bg-transparent text-[#8BC34A] font-jungle-body font-bold text-lg border-2 border-[#8BC34A] rounded-xl hover:bg-[#8BC34A]/10 transition-colors w-full sm:w-auto">
                            View Flora
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Hexagons/Honeycomb) */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Flower2, title: "Exotic UI", desc: "Rare components found nowhere else in the digital wild.", color: "#FFD54F" },
                            { icon: Droplets, title: "Fluidity", desc: "Interactions that drip with smooth motion.", color: "#4FC3F7" },
                            { icon: Bird, title: "Vibrancy", desc: "Colors that scream with life and energy.", color: "#FF7043" }
                        ].map((f, i) => (
                            <div key={i} className="glass-jungle p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group border-t-4 border-t-[#8BC34A]">
                                <div className="absolute -right-5 -bottom-5 w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-xl"></div>

                                <div className="w-16 h-16 rounded-2xl bg-[#0D1B0E]/50 border border-[#8BC34A]/30 flex items-center justify-center mb-6 relative z-10">
                                    <f.icon className="" size={32} style={{ color: f.color }} />
                                </div>

                                <h3 className="text-2xl font-jungle-head text-[#E8F5E9] mb-4 relative z-10">{f.title}</h3>
                                <p className="font-jungle-body text-lg text-[#C8E6C9]/80 leading-relaxed relative z-10">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Cards) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-jungle-head text-[#E8F5E9] mb-4">Expedition Gear</h2>
                        <p className="font-jungle-body text-[#AED581]">Equipment for every terrain</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        {[
                            { name: 'Scout', price: 'Free', features: ['Machete', 'Water Flask', 'Map'], color: 'border-[#8BC34A]/30' },
                            { name: 'Ranger', price: '$39', features: ['GPS Tracker', 'Anti-Venom', 'Tent'], color: 'border-[#4CAF50] bg-[#1B5E20]/80', highlight: true },
                            { name: 'Explorer', price: '$99', features: ['Satellite Phone', 'Base Camp', 'Jeep'], color: 'border-[#8BC34A]/30' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 rounded-3xl backdrop-blur-md border transition-all duration-300 ${plan.highlight ? 'scale-105 shadow-2xl shadow-[#2E7D32]/40 z-10' : 'glass-jungle hover:bg-[#1B5E20]/40'} ${plan.color}`}>
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD54F] text-[#0D1B0E] px-4 py-1 rounded-full text-xs font-jungle-body font-bold uppercase tracking-wider">
                                        Best Value
                                    </div>
                                )}

                                <h3 className="text-2xl font-jungle-head text-[#E8F5E9] mb-2">{plan.name}</h3>
                                <div className="text-5xl font-jungle-head font-bold text-[#AED581] mb-8">{plan.price}</div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-jungle-body text-[#C8E6C9] font-medium">
                                            <PawPrint size={16} className="text-[#8BC34A]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-xl font-jungle-body font-bold uppercase tracking-wider transition-colors ${plan.highlight ? 'bg-[#FFD54F] text-[#0D1B0E] hover:bg-[#FFC107]' : 'bg-[#1B5E20] text-[#E8F5E9] hover:bg-[#2E7D32]'}`}>
                                    Equip
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 relative">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-jungle-head text-center mb-12 text-[#E8F5E9]">
                        Survival Guide
                    </h2>

                    <div className="space-y-4">
                        {[{ q: 'Is it bug-free?', a: 'Only the digital kind. The real jungle has plenty of bugs.' },
                        { q: 'Is it sustainable?', a: '100% green energy powered code.' },
                        { q: 'Is it dangerous?', a: 'Dangerously beautiful. Use with caution.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#000000]/20 border border-[#8BC34A]/20 rounded-2xl overflow-hidden backdrop-blur-sm">
                                <button className="w-full flex items-center justify-between p-6 text-left group hover:bg-[#8BC34A]/10 transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-jungle-body font-bold text-lg text-[#E8F5E9]">{item.q}</span>
                                    <ChevronDown size={20} className={`text-[#8BC34A] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-6 pb-6 pt-0 font-jungle-body text-[#C8E6C9] leading-relaxed">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto p-12 rounded-[3rem] text-center relative overflow-hidden bg-gradient-to-br from-[#33691E] to-[#1B5E20] border border-[#8BC34A]/30 shadow-2xl">
                    <div className="absolute inset-0 leaf-pattern opacity-20"></div>

                    <div className="relative z-10">
                        <TreePine size={56} className="mx-auto mb-8 text-[#AED581]" strokeWidth={1.5} />
                        <h2 className="text-4xl md:text-5xl font-jungle-head text-[#E8F5E9] mb-6">Lost In The Green</h2>
                        <p className="font-jungle-body text-xl text-[#DCEDC8] mb-10 max-w-lg mx-auto">
                            The deepest parts of the jungle hold the greatest treasures.
                        </p>
                        <button className="px-12 py-5 rounded-full bg-[#E8F5E9] text-[#1B5E20] font-jungle-body font-bold text-xl hover:scale-105 transition-transform shadow-lg">
                            Go Deeper
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 glass-jungle border-t border-[#8BC34A]/20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Leaf size={24} className="text-[#8BC34A]" />
                        <span className="text-xl font-jungle-head text-[#E8F5E9]">MONSTERA</span>
                    </div>

                    <div className="flex gap-8 text-sm font-jungle-body font-bold uppercase tracking-wider text-[#C8E6C9]">
                        <a href="#" className="hover:text-white transition-colors">Habitat</a>
                        <a href="#" className="hover:text-white transition-colors">Species</a>
                        <a href="#" className="hover:text-white transition-colors">Preserve</a>
                    </div>

                    <div className="font-jungle-body text-sm text-[#81C784]">
                        © 2025 Jungle Systems.
                    </div>
                </div>
            </footer>
        </div>
    );
};
