import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Church, Sparkles, Sun, Star, Heart, Crown, Flower2 } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S65StainedGlassPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#0F0F1A] text-[#E0E0E0] selection:bg-[#D4AF37] selection:text-[#1A1A2E]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&display=swap');

                .font-glass-head { font-family: 'Cinzel Decorative', cursive; }
                .font-glass-body { font-family: 'Cormorant Garamond', serif; }

                /* Lead Lines (Came) */
                .lead-border {
                    border: 4px solid #1A1A1A;
                    box-shadow: 
                        inset 1px 1px 2px rgba(255,255,255,0.2), 
                        inset -1px -1px 2px rgba(0,0,0,0.8),
                        0 0 0 1px #000;
                }
                
                /* Glass Texture Overlay */
                .glass-texture {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
                }

                /* Stained Glass Gradiets */
                .glass-ruby {
                    background: radial-gradient(circle at 30% 30%, #EF4444, #991B1B);
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
                }
                .glass-sapphire {
                    background: radial-gradient(circle at 70% 30%, #3B82F6, #1E3A8A);
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
                }
                .glass-emerald {
                    background: radial-gradient(circle at 50% 70%, #10B981, #064E3B);
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
                }
                .glass-amber {
                    background: radial-gradient(circle at 20% 80%, #F59E0B, #B45309);
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
                }
                .glass-amethyst {
                     background: radial-gradient(circle at 80% 80%, #8B5CF6, #5B21B6);
                     box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
                }
                
                /* Caustics / Light Through Glass */
                .light-beam {
                    background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%);
                    filter: blur(20px);
                    opacity: 0.3;
                    pointer-events: none;
                }

                /* Glowing Text */
                .luminous-text {
                    text-shadow: 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(212, 175, 55, 0.3);
                }
            `}</style>

            <div className="absolute inset-0 bg-[#0F0F1A] fixed z-[-2]"></div>

            {/* Background Ambient Light */}
            <div className="fixed inset-0 pointer-events-none opacity-30 z-[-1]"
                style={{ background: 'radial-gradient(circle at 50% 0%, #4C1D95 0%, #1E1B4B 60%, #0F0F1A 100%)' }}></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#0F0F1A]/90 backdrop-blur-md border-b-4 border-[#1A1A1A] nav-shadow">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 glass-ruby lead-border rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                            <Church size={20} className="text-white drop-shadow-md" />
                        </div>
                        <span className="text-2xl font-glass-head text-[#D4AF37] luminous-text tracking-wider">CATHEDRAL</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['Mosaic', 'Rose Window', 'Light'].map((item) => (
                                <a key={item} href="#" className="font-glass-body text-[#A0A0B0] hover:text-[#D4AF37] text-lg font-bold uppercase tracking-widest transition-colors drop-shadow-sm">
                                    {item}
                                </a>
                            ))}
                            <button className="px-8 py-2 glass-sapphire text-white font-glass-head text-xs font-bold uppercase tracking-widest rounded lead-border hover:brightness-110 active:translate-y-px transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                Illuminate
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#D4AF37] border-2 border-[#1A1A1A] rounded bg-[#1A1A1A]">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#0F0F1A] border-b-4 border-[#1A1A1A] shadow-2xl">
                        {['Mosaic', 'Rose Window', 'Light'].map((item) => (
                            <div key={item} className="py-4 font-glass-head text-xl text-[#E0E0E0] border-b border-[#333] tracking-wider">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 glass-sapphire text-white font-glass-head text-lg font-bold tracking-widest lead-border">
                            Illuminate
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] light-beam transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-1 border-2 border-[#D4AF37] rounded-full bg-[#1A1A1A]/50 backdrop-blur-sm">
                        <Sparkles size={16} className="text-[#D4AF37]" />
                        <span className="font-glass-body font-bold text-lg uppercase tracking-widest text-[#D4AF37]">Sacred Geometry</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-glass-head text-white mb-8 leading-tight drop-shadow-2xl">
                        DIVINE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] via-[#F59E0B] to-[#3B82F6] luminous-text">LIGHT</span>
                    </h1>

                    <p className="font-glass-body text-2xl md:text-3xl text-[#A0A0B0] max-w-2xl mx-auto mb-12 italic leading-relaxed">
                        Where color meets illumination. Experience the ethereal beauty of handcrafted stained glass in a digital medium.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="px-12 py-4 glass-ruby text-white font-glass-head text-lg tracking-widest lead-border hover:brightness-110 transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                            View Gallery
                        </button>
                        <button className="px-12 py-4 bg-transparent text-[#D4AF37] font-glass-head text-lg tracking-widest border-2 border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors w-full sm:w-auto rounded">
                            Our Process
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Mosaic Grid) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Sun, title: "Brilliance", desc: "Radiant light transmission.", bg: "glass-amber", size: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2" },
                            { icon: Heart, title: "Passion", desc: "Deep crimson hues.", bg: "glass-ruby", size: "col-span-1" },
                            { icon: Crown, title: "Majesty", desc: "Royal purple tones.", bg: "glass-amethyst", size: "col-span-1" },
                            { icon: Flower2, title: "Growth", desc: "Verdant greens.", bg: "glass-emerald", size: "col-span-1 md:col-span-2" },
                        ].map((f, i) => (
                            <div key={i} className={`${f.size} ${f.bg} lead-border glass-texture relative p-8 group overflow-hidden transition-transform hover:scale-[1.02] duration-300`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                <f.icon className="w-12 h-12 text-white mb-4 drop-shadow-md" strokeWidth={1.5} />
                                <h3 className="text-3xl font-glass-head text-white mb-2 shadow-black drop-shadow-lg">{f.title}</h3>
                                <p className="font-glass-body text-xl text-white/90 italic font-semibold">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Windows) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-glass-head text-[#D4AF37] mb-4 luminous-text">Commissions</h2>
                        <div className="w-32 h-1 bg-[#D4AF37] mx-auto rounded-full shadow-[0_0_10px_#D4AF37]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        {[
                            { name: 'Apprentice', price: '$250', features: ['Simple Patterns', '3 Colors Max', 'Small Format'], color: 'glass-emerald' },
                            { name: 'Master', price: '$850', features: ['Complex Scenes', 'Unlimited Colors', 'Gold Leaf Accents'], color: 'glass-sapphire', highlight: true },
                            { name: 'Sainted', price: '$2400', features: ['Rose Window', 'Silver Stain', 'Cathedral Scale'], color: 'glass-ruby' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative lead-border ${plan.color} glass-texture p-0 transition-all duration-300 ${plan.highlight ? 'transform scale-110 z-10 shadow-[0_0_40px_rgba(59,130,246,0.3)]' : 'opacity-90 grayscale-[30%] hover:grayscale-0'}`}>
                                {/* Arched Top Simulation */}
                                <div className="absolute -top-12 left-0 right-0 h-12 bg-[#0F0F1A] rounded-t-full border-t-4 border-l-4 border-r-4 border-[#1A1A1A]"></div>

                                <div className="p-8 text-center relative z-10">
                                    <div className="mb-6 pb-6 border-b border-white/20">
                                        <h3 className="text-2xl font-glass-head text-white tracking-widest">{plan.name}</h3>
                                        <div className="text-5xl font-glass-head font-bold mt-4 text-white drop-shadow-md">{plan.price}</div>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, j) => (
                                            <li key={j} className="font-glass-body text-xl text-white italic drop-shadow-sm">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full py-3 bg-[#1A1A1A] text-[#D4AF37] font-glass-head text-sm font-bold tracking-widest border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-colors uppercase">
                                        Select
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#000000]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-glass-head text-center mb-16 text-[#A0A0B0] tracking-widest">
                        Revelations
                    </h2>

                    <div className="space-y-6">
                        {[{ q: 'Is it real glass?', a: 'Constructed from pure photons and CSS gradients.' },
                        { q: 'Can it break?', a: 'Only if you shatter the viewport. Code is reinforced.' },
                        { q: 'How is it lit?', a: 'Bioluminescent backlight technology (your screen).' }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-[#333] pb-4">
                                <button className="w-full flex items-center justify-between py-4 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-glass-body text-2xl text-[#E0E0E0] italic group-hover:text-[#D4AF37] transition-colors">✦ {item.q}</span>
                                    <ChevronDown size={24} className={`text-[#D4AF37] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="py-4 font-glass-body text-xl text-[#A0A0B0] leading-relaxed pl-8">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 relative">
                {/* Background Mosaic */}
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-20 pointer-events-none">
                    {Array.from({ length: 72 }).map((_, i) => (
                        <div key={i} className="border border-black/50" style={{ backgroundColor: ['#DC2626', '#2563EB', '#059669', '#D97706', '#0F0F1A'][i % 5] }}></div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10 p-16 glass-amethyst lead-border shadow-[0_0_60px_rgba(139,92,246,0.2)]">
                    <Star size={56} className="mx-auto mb-8 text-white drop-shadow-[0_0_10px_white]" />
                    <h2 className="text-5xl font-glass-head text-white mb-8 shadow-black drop-shadow-md">Let There Be Light</h2>
                    <button className="px-16 py-5 bg-[#1A1A1A] text-[#D4AF37] font-glass-head text-xl tracking-widest border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-colors shadow-2xl">
                        Commission Work
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 bg-[#05050A] border-t border-[#1A1A1A] text-[#A0A0B0]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Church size={24} className="text-[#D4AF37]" />
                        <span className="text-2xl font-glass-head text-[#E0E0E0] tracking-widest">LUMINA</span>
                    </div>

                    <div className="flex gap-10 text-sm font-glass-body font-bold uppercase tracking-[0.2em] text-[#555]">
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">History</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Restoration</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Visit</a>
                    </div>

                    <div className="font-glass-body text-sm text-[#333] uppercase tracking-widest">
                        © 2025 Sacred Arts.
                    </div>
                </div>
            </footer>
        </div>
    );
};
