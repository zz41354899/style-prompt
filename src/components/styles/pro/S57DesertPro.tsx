import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Sun, Wind, Mountain, Tent, Compass, ThermometerSun, Map } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S57DesertPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#E6CCB2] text-[#5D4E37] selection:bg-[#E07B39] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&family=Tenor+Sans&display=swap');

                .font-desert-head { font-family: 'Tenor Sans', sans-serif; }
                .font-desert-body { font-family: 'Josefin Sans', sans-serif; }

                /* Warm Desert Gradient */
                .bg-desert-gradient {
                    background: linear-gradient(180deg, #F5E6D3 0%, #E6CCB2 50%, #DDB892 100%);
                }
                
                /* Sand Grain Texture */
                .sand-texture {
                    position: relative;
                }
                .sand-texture::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
                    pointer-events: none;
                }

                /* Heat Haze Animation */
                @keyframes heat-haze {
                    0% { transform: translateY(0) scaleY(1); opacity: 0.8; }
                    50% { transform: translateY(-5px) scaleY(1.02); opacity: 0.6; }
                    100% { transform: translateY(0) scaleY(1); opacity: 0.8; }
                }
                .mirage-effect {
                    animation: heat-haze 3s ease-in-out infinite;
                    filter: blur(1px);
                }

                /* Dune Curves */
                .dune-shape {
                    clip-path: ellipse(150% 100% at 50% 100%);
                }
                
                /* Terracotta Card */
                .card-terracotta {
                    background: #C2703B;
                    color: #FFFBF5;
                    box-shadow: 0 10px 30px rgba(194, 112, 59, 0.3);
                }
            `}</style>

            <div className="absolute inset-0 bg-desert-gradient fixed z-[-2]"></div>
            <div className="absolute inset-0 sand-texture fixed z-[-1] pointer-events-none opacity-50"></div>

            {/* Decorative Dunes */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-[#C2703B] opacity-20 dune-shape z-0"></div>
            <div className="absolute inset-x-0 bottom-0 h-48 bg-[#9C6644] opacity-20 dune-shape transform scale-x-110 translate-y-10 z-0"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#F5E6D3]/90 backdrop-blur-sm border-b border-[#C2703B]/20">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-[#C2703B] flex items-center justify-center bg-[#FFFBF5]">
                            <Sun size={24} className="text-[#C2703B]" />
                        </div>
                        <span className="text-2xl font-desert-head tracking-wider text-[#5D4E37] uppercase">Sahara<span className="text-[#C2703B]">.Sands</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Oasis', 'Dunes', 'Mirage'].map((item) => (
                                <a key={item} href="#" className="font-desert-body text-[#8B7355] hover:text-[#C2703B] tracking-wide text-lg transition-colors uppercase text-sm font-bold">
                                    {item}
                                </a>
                            ))}
                            <button className="px-8 py-2 bg-[#C2703B] text-[#FFFBF5] font-desert-head tracking-widest hover:bg-[#A05325] transition-colors shadow-lg shadow-[#C2703B]/20 border border-[#FFFBF5]/20">
                                RESERVATIONS
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#C2703B] border border-[#C2703B]">{menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#F5E6D3] border-b border-[#C2703B]/20 shadow-xl">
                        {['Oasis', 'Dunes', 'Mirage'].map((item) => (
                            <div key={item} className="py-4 font-desert-head text-xl text-[#5D4E37] uppercase tracking-widest border-b border-[#C2703B]/10">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-[#C2703B] text-[#FFFBF5] font-desert-head tracking-widest uppercase">
                            Reservations
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                {/* Heat Haze Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full mirage-effect opacity-20 pointer-events-none z-10 flex items-center justify-center">
                    <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#C2703B] to-transparent blur-md"></div>
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-20">
                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 border border-[#C2703B] bg-[#FFFBF5]">
                        <Wind size={16} className="text-[#C2703B]" />
                        <span className="font-desert-body text-xs font-bold text-[#C2703B] uppercase tracking-[0.2em]">Minimalist Warmth</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-desert-head text-[#5D4E37] mb-8 leading-none">
                        GOLDEN <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#E07B39] to-[#C2703B]">HORIZON</span>
                    </h1>

                    <p className="font-desert-body text-xl md:text-2xl text-[#8B7355] max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
                        Find serenity in the vast emptiness. A design language built on warmth, texture, and elegant simplicity.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="px-12 py-4 bg-[#5D4E37] text-[#FFFBF5] font-desert-body text-sm font-bold uppercase tracking-[0.15em] hover:bg-[#3E3424] transition-colors min-w-[200px]">
                            Begin Journey
                        </button>
                        <button className="px-12 py-4 bg-transparent text-[#5D4E37] font-desert-body text-sm font-bold uppercase tracking-[0.15em] border border-[#5D4E37] hover:bg-[#5D4E37] hover:text-[#FFFBF5] transition-colors min-w-[200px]">
                            Explore Map
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Geometric) */}
            <section className="py-24 px-6 relative bg-[#FFFBF5]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Sun, title: "Warmth", desc: "Radiant color palettes that feel like sunlight.", color: "#E07B39" },
                            { icon: Mountain, title: "Texture", desc: "Grainy overlays adding tactile depth.", color: "#C2703B" },
                            { icon: Compass, title: "Space", desc: "Ample negative space for breathing room.", color: "#8B7355" }
                        ].map((f, i) => (
                            <div key={i} className="group relative p-8 border border-[#E6CCB2] hover:border-[#C2703B] transition-colors duration-500 bg-[#FAF3EA]">
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#C2703B] border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <f.icon className="w-12 h-12 mb-6" style={{ color: f.color }} strokeWidth={1} />
                                <h3 className="text-2xl font-desert-head text-[#5D4E37] mb-4 uppercase tracking-wider">{f.title}</h3>
                                <p className="font-desert-body text-lg text-[#8B7355] leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Cards) */}
            <section className="py-24 px-6 relative bg-[#E6CCB2]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-desert-head text-[#5D4E37] mb-4 uppercase tracking-widest">Expeditions</h2>
                        <div className="w-24 h-1 bg-[#C2703B] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {[
                            { name: 'Nomad', price: 'Free', features: ['Basic Map', 'Water Supply', 'Compass'], theme: 'light' },
                            { name: 'Caravan', price: '$49', features: ['Camel Ride', 'Tent Stay', 'Guide Book'], theme: 'dark', highlight: true },
                            { name: 'Sultan', price: '$149', features: ['Luxury Oasis', 'Private Chef', 'Helicopter'], theme: 'light' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-10 flex flex-col ${plan.theme === 'dark' ? 'card-terracotta transform md:-translate-y-4' : 'bg-[#FFFBF5] text-[#5D4E37] border border-[#DDB892]'}`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 bg-[#5D4E37] text-[#FFFBF5] px-4 py-2 font-desert-body text-xs font-bold uppercase tracking-widest">
                                        Best Value
                                    </div>
                                )}

                                <h3 className="text-xl font-desert-head mb-2 uppercase tracking-widest opacity-80">{plan.name}</h3>
                                <div className="text-5xl font-desert-head mb-8">{plan.price}</div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-desert-body text-sm uppercase tracking-wide opacity-90">
                                            <span className={`w-1.5 h-1.5 rounded-full ${plan.theme === 'dark' ? 'bg-[#FFFBF5]' : 'bg-[#C2703B]'}`}></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 font-desert-body text-xs font-bold uppercase tracking-[0.2em] transition-colors border ${plan.theme === 'dark' ? 'border-[#FFFBF5] text-[#FFFBF5] hover:bg-[#FFFBF5] hover:text-[#C2703B]' : 'border-[#5D4E37] text-[#5D4E37] hover:bg-[#5D4E37] hover:text-[#FFFBF5]'}`}>
                                    Select Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#DDB892]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-desert-head text-center mb-12 text-[#5D4E37] uppercase tracking-widest">
                        Travel Log
                    </h2>

                    <div className="space-y-4">
                        {[{ q: 'When is the best time to visit?', a: 'Golden hour offers the most spectacular lighting for our interface.' },
                        { q: 'Is water included?', a: 'Hydration is key. We provide unlimited digital refreshments.' },
                        { q: 'Can I ride a camel?', a: 'Our virtual camel rides are 100% cruelty-free and bumpy-free.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#E6CCB2] border-l-4 border-[#C2703B]">
                                <button className="w-full flex items-center justify-between p-6 text-left group hover:bg-[#C2703B]/10 transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-desert-body font-bold text-lg text-[#5D4E37]">{item.q}</span>
                                    <ChevronDown size={20} className={`text-[#C2703B] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-6 pb-6 pt-0 font-desert-body text-[#8B7355] leading-relaxed">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-[#C2703B] text-[#FFFBF5] relative overflow-hidden">
                <div className="absolute inset-0 sand-texture opacity-20"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10 p-12 border border-[#FFFBF5]/30">
                    <ThermometerSun size={56} className="mx-auto mb-8 text-[#FFFBF5]" strokeWidth={1} />
                    <h2 className="text-4xl md:text-5xl font-desert-head mb-6 uppercase tracking-widest">Feel The Warmth</h2>
                    <p className="font-desert-body text-xl mb-10 max-w-lg mx-auto opacity-90">
                        Escape the cold, sterile web. Embrace the organic imperfection of the dunes.
                    </p>
                    <button className="px-12 py-5 bg-[#FFFBF5] text-[#C2703B] font-desert-body font-bold text-sm uppercase tracking-[0.2em] hover:bg-[#F5E6D3] transition-colors shadow-xl">
                        Book Expedition
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 bg-[#3E3424] text-[#D4C4A8]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Sun size={20} className="text-[#C2703B]" />
                        <span className="text-xl font-desert-head tracking-wider uppercase text-[#FFFBF5]">Sahara<span className="text-[#C2703B]">.Sands</span></span>
                    </div>

                    <div className="flex gap-8 text-xs font-desert-body font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-[#FFFBF5] transition-colors">Oasis Map</a>
                        <a href="#" className="hover:text-[#FFFBF5] transition-colors">Survival Guide</a>
                        <a href="#" className="hover:text-[#FFFBF5] transition-colors">Camels</a>
                    </div>

                    <div className="font-desert-body text-xs opacity-50 uppercase tracking-widest">
                        © 2025 Desert Systems.
                    </div>
                </div>
            </footer>
        </div>
    );
};
