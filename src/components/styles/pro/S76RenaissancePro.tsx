import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Crown, Scroll, Palette, Landmark, Feather, Compass, Scale, BookOpen } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S76RenaissancePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#F4ECD8] text-[#3E2F26] selection:bg-[#722F37] selection:text-[#F4ECD8]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Italianno&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

                .font-davinci-head { font-family: 'Cinzel', serif; }
                .font-davinci-script { font-family: 'Italianno', cursive; }
                .font-davinci-body { font-family: 'Cormorant Garamond', serif; }

                /* Parchment Texture */
                .parchment-texture {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
                }

                /* Vitruvian Grid */
                .vitruvian-grid {
                    background-image: radial-gradient(circle at center, #D4AF37 1px, transparent 1px),
                                      linear-gradient(to right, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(212, 175, 55, 0.1) 1px, transparent 1px);
                    background-size: 50px 50px, 100px 100px, 100px 100px;
                }
                
                /* Ink Effect */
                .ink-text {
                   filter: url('#ink-bleed');
                }
                
                /* Golden Ratio Spiral (CSS approximation) */
                .golden-spiral {
                    border: 1px solid rgba(212, 175, 55, 0.3);
                    border-radius: 0 0 100% 0;
                }
                
                /* Engraving Shadow */
                .engraved-shadow {
                    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.5), 0px -1px 0px rgba(0, 0, 0, 0.2);
                }
            `}</style>

            {/* Ink Bleed Filter */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <filter id="ink-bleed">
                        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="1" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                    </filter>
                </defs>
            </svg>

            {/* Background Layers */}
            <div className="fixed inset-0 bg-[#F4ECD8] z-[-3]"></div>
            <div className="fixed inset-0 parchment-texture opacity-60 z-[-2] mix-blend-multiply pointer-events-none"></div>
            <div className="fixed inset-0 vitruvian-grid opacity-20 z-[-1] pointer-events-none"></div>

            {/* Decorative Corner Ornaments */}
            <div className="fixed top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#D4AF37] opacity-50 m-4 pointer-events-none"></div>
            <div className="fixed top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#D4AF37] opacity-50 m-4 pointer-events-none"></div>
            <div className="fixed bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#D4AF37] opacity-50 m-4 pointer-events-none"></div>
            <div className="fixed bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#D4AF37] opacity-50 m-4 pointer-events-none"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#F4ECD8]/90 backdrop-blur-md border-b border-[#D4AF37]/30">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 border border-[#D4AF37] rounded-full">
                            <Crown size={24} className="text-[#3E2F26]" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-davinci-head font-bold text-[#3E2F26] tracking-widest leading-none">DA VINCI</span>
                            <span className="text-xl font-davinci-script text-[#722F37] leading-none transform -translate-y-1">Studio</span>
                        </div>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-1">
                            {['Proportion', 'Anatomy', 'Invention'].map((item) => (
                                <button key={item} className="px-6 py-2 font-davinci-body font-semibold text-lg text-[#3E2F26] hover:text-[#722F37] transition-colors relative group">
                                    {item}
                                    <div className="absolute bottom-1 left-1/2 w-0 h-[1px] bg-[#722F37] group-hover:w-1/2 transition-all duration-500"></div>
                                    <div className="absolute bottom-1 right-1/2 w-0 h-[1px] bg-[#722F37] group-hover:w-1/2 transition-all duration-500"></div>
                                </button>
                            ))}
                            <button className="ml-4 px-8 py-2 bg-[#3E2F26] text-[#D4AF37] font-davinci-head text-sm tracking-widest border border-[#3E2F26] hover:bg-transparent hover:text-[#3E2F26] transition-all uppercase">
                                Patronage
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#3E2F26] border border-[#3E2F26]/20">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full border-b border-[#D4AF37]/30 bg-[#F4ECD8] shadow-xl">
                        {['Proportion', 'Anatomy', 'Invention'].map((item) => (
                            <div key={item} className="py-4 px-6 font-davinci-head text-[#3E2F26] border-b border-[#D4AF37]/10 tracking-widest flex items-center gap-3">
                                <Compass size={16} className="text-[#D4AF37]" /> {item}
                            </div>
                        ))}
                        <div className="p-6">
                            <button className="w-full py-4 bg-[#722F37] text-[#F4ECD8] font-davinci-head tracking-widest">
                                Become a Patron
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="mb-6 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 border rounded-full border-[#D4AF37] opacity-30 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-2 border rounded-full border-[#3E2F26] opacity-20"></div>
                            <img src="https://api.dicebear.com/7.x/initials/svg?seed=DV&backgroundColor=transparent&textColor=3E2F26" alt=" emblem" className="w-24 h-24 opacity-0" />
                            <Scroll size={48} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#3E2F26]" strokeWidth={1} />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-davinci-head font-bold text-[#3E2F26] mb-8 leading-tight engraved-shadow">
                        THE ART OF <br />
                        <span className="text-[#722F37]">PERFECTION</span>
                    </h1>

                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-[1px] w-12 bg-[#3E2F26]"></div>
                        <span className="font-davinci-script text-4xl text-[#3E2F26]">Simplicity is the ultimate sophistication</span>
                        <div className="h-[1px] w-12 bg-[#3E2F26]"></div>
                    </div>

                    <p className="font-davinci-body text-xl md:text-2xl text-[#5C4A3D] max-w-2xl mx-auto mb-12 italic leading-relaxed">
                        Rediscover the golden ratio of web design through classical principles and timeless aesthetics.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-4 bg-[#722F37] text-[#F4ECD8] font-davinci-head text-sm tracking-widest border border-[#722F37] hover:bg-[#5A242B] transition-colors uppercase w-full sm:w-auto shadow-md">
                            Explore Works
                        </button>
                        <button className="px-10 py-4 bg-transparent text-[#3E2F26] font-davinci-head text-sm tracking-widest border border-[#3E2F26] hover:bg-[#3E2F26] hover:text-[#F4ECD8] transition-colors uppercase w-full sm:w-auto">
                            Study Sketch
                        </button>
                    </div>
                </div>

                {/* Sketch overlay */}
                <div className="absolute top-0 right-0 w-64 h-full border-l border-[#D4AF37]/20 pointer-events-none hidden lg:block">
                    <div className="absolute top-20 right-10 font-davinci-script text-3xl text-[#3E2F26]/30 transform rotate-[-5deg]">Fig. 1.1</div>
                </div>
            </section>

            {/* Principles (Features) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-davinci-head text-[#3E2F26] mb-4">Design Principles</h2>
                        <div className="w-16 h-1 mx-auto bg-[#D4AF37]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Scale, title: "Balance", desc: "Perfect equilibrium in layout and form.", color: "#3E2F26" },
                            { icon: Compass, title: "Precision", desc: "Mathematical exactness in every pixel.", color: "#722F37" },
                            { icon: Feather, title: "Grace", desc: "Fluid motion and elegant transitions.", color: "#8B4513" }
                        ].map((f, i) => (
                            <div key={i} className="text-center group p-8 border border-transparent hover:border-[#D4AF37]/50 transition-all rounded-sm relative">
                                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <f.icon size={48} className="mx-auto mb-6 opacity-80" style={{ color: f.color }} strokeWidth={1} />

                                <h3 className="text-2xl font-davinci-head text-[#3E2F26] mb-3">{f.title}</h3>
                                <p className="font-davinci-body text-xl text-[#5C4A3D] leading-relaxed italic">"{f.desc}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Patronage) */}
            <section className="py-24 px-6 relative bg-[#EBE0C8]">
                {/* Sketch lines background */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #3E2F26 0, #3E2F26 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-davinci-head text-[#3E2F26] mb-2">Patronage Tiers</h2>
                        <p className="font-davinci-script text-4xl text-[#722F37]">Support the Arts</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {[
                            { name: 'Apprentice', price: '10', features: ['Basic Tools', 'Shared Studio', 'Monthly Critiques'] },
                            { name: 'Master', price: '25', features: ['Full Access', 'Private Study', 'Exhibition Space'], highlight: true },
                            { name: 'Grand Patron', price: '50', features: ['Commission Work', 'Early Access', 'Royal Seal'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 border border-[#3E2F26] transition-all duration-500 bg-[#F4ECD8] ${plan.highlight ? 'shadow-[0_0_0_8px_rgba(212,175,55,0.2)] transform -translate-y-4 z-10 py-12' : 'hover:shadow-lg'}`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-[#3E2F26] px-4 py-1 font-davinci-head text-xs tracking-widest uppercase border border-[#3E2F26]">
                                        Most Noble
                                    </div>
                                )}

                                <div className="mb-8 text-center pb-6 border-b border-[#3E2F26]/20">
                                    <h3 className="text-xl font-davinci-head text-[#3E2F26] mb-2 tracking-widest">{plan.name}</h3>
                                    <div className="flex items-start justify-center text-[#722F37]">
                                        <span className="text-2xl font-serif mt-2">ƒ</span>
                                        <span className="text-5xl font-davinci-head font-bold">{plan.price}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-davinci-body text-lg text-[#3E2F26]">
                                            <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 font-davinci-head text-sm tracking-widest border transition-all ${plan.highlight ? 'bg-[#3E2F26] text-[#D4AF37] border-[#3E2F26] hover:bg-[#2A201A]' : 'bg-transparent text-[#3E2F26] border-[#3E2F26] hover:bg-[#3E2F26]/5'}`}>
                                    COMMISSION
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ (Codex) */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto border-y-4 border-double border-[#D4AF37] py-12 bg-[#F4ECD8]">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <BookOpen size={32} className="text-[#3E2F26]" strokeWidth={1} />
                        <h2 className="text-3xl font-davinci-head text-[#3E2F26] tracking-widest">
                            The Codex
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[{ q: 'What is the Golden Ratio used here?', a: 'We utilize the 1:1.618 ratio for all major layout divisions.' },
                        { q: 'Is the parchment authentic?', a: 'It is a digital recreation of 15th-century vellum manuscripts.' },
                        { q: 'How do I master the craft?', a: 'Through diligent study of our documented principles and practice.' }
                        ].map((item, i) => (
                            <div key={i} className="pl-6 border-l-2 border-[#D4AF37]/50">
                                <button className="w-full text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <h3 className="font-davinci-body font-bold text-xl text-[#3E2F26] italic group-hover:text-[#722F37] transition-colors flex items-center gap-2">
                                        <span className="text-sm font-normal text-[#D4AF37] uppercase not-italic font-davinci-head">Q. {i + 1}</span>
                                        {item.q}
                                    </h3>
                                </button>
                                {expandedFaq === i && (
                                    <div className="mt-2 font-davinci-script text-3xl text-[#5C4A3D] pl-10 border-b border-[#3E2F26]/10 pb-4">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 relative text-center bg-[#3E2F26] text-[#F4ECD8] overflow-hidden">
                <div className="absolute inset-0 vitruvian-grid opacity-10"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <Landmark size={64} className="mx-auto mb-8 text-[#D4AF37]" strokeWidth={1} />

                    <h2 className="text-5xl md:text-6xl font-davinci-head mb-8 tracking-widest border-b border-[#D4AF37] inline-block pb-4 px-12">
                        Create History
                    </h2>
                    <p className="font-davinci-body text-2xl italic text-[#A89880] mb-12">
                        "Details make perfection, and perfection is not a detail."
                    </p>

                    <button className="px-16 py-5 bg-[#D4AF37] text-[#3E2F26] font-davinci-head text-lg font-bold tracking-widest hover:bg-[#F4ECD8] transition-all uppercase shadow-[inset_0_0_0_4px_#3E2F26]">
                        Begin Masterpiece
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-[#D4AF37]/30 bg-[#F4ECD8]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Crown size={20} className="text-[#3E2F26]" strokeWidth={1} />
                        <span className="text-lg font-davinci-head tracking-widest text-[#3E2F26]">DA VINCI</span>
                    </div>

                    <div className="flex gap-8 font-davinci-head text-xs tracking-widest text-[#5C4A3D] uppercase">
                        <a href="#" className="hover:text-[#722F37] transition-colors">Codex</a>
                        <a href="#" className="hover:text-[#722F37] transition-colors">Gallery</a>
                        <a href="#" className="hover:text-[#722F37] transition-colors">Contact</a>
                    </div>

                    <div className="font-davinci-script text-2xl text-[#D4AF37]">
                        © MMXV Studio.
                    </div>
                </div>
            </footer>
        </div>
    );
};
