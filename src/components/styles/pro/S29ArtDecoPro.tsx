import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Diamond, Crown, Star, Gem, Award, Feather, Sparkles, MapPin } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S29ArtDecoPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const spacing = responsive.spacing;

    const colors = {
        bg: '#0F0F0F',
        primary: '#1A1A1A',
        secondary: '#232323',
        text: '#EAEAEA',
        muted: '#A39869',
        gold: '#D4AF37',
        goldLight: '#F3E5AB',
        goldDark: '#8A7129',
        accent: '#D4AF37'
    };

    const goldGradient = `linear-gradient(135deg, ${colors.gold} 0%, ${colors.goldLight} 25%, ${colors.gold} 50%, ${colors.goldDark} 75%, ${colors.gold} 100%)`;
    const goldTextGradient = { background: goldGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' };

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Playfair Display", "Didot", serif' }}>

            {/* Global Styles for Art Deco Patterns */}
            <style>{`
                .deco-border {
                    position: relative;
                }
                .deco-border::before {
                    content: '';
                    position: absolute;
                    inset: 4px;
                    border: 1px solid ${colors.gold}40;
                    pointer-events: none;
                }
                .deco-pattern-bg {
                    background-image: 
                        linear-gradient(30deg, ${colors.gold}10 12%, transparent 12.5%, transparent 87%, ${colors.gold}10 87.5%, ${colors.gold}10),
                        linear-gradient(150deg, ${colors.gold}10 12%, transparent 12.5%, transparent 87%, ${colors.gold}10 87.5%, ${colors.gold}10),
                        linear-gradient(30deg, ${colors.gold}10 12%, transparent 12.5%, transparent 87%, ${colors.gold}10 87.5%, ${colors.gold}10),
                        linear-gradient(150deg, ${colors.gold}10 12%, transparent 12.5%, transparent 87%, ${colors.gold}10 87.5%, ${colors.gold}10),
                        linear-gradient(60deg, ${colors.gold}20 25%, transparent 25.5%, transparent 75%, ${colors.gold}20 75%, ${colors.gold}20),
                        linear-gradient(60deg, ${colors.gold}20 25%, transparent 25.5%, transparent 75%, ${colors.gold}20 75%, ${colors.gold}20);
                    background-size: 80px 140px;
                    background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
                }
                .sunburst {
                    background: repeating-conic-gradient(from 0deg, ${colors.gold}10 0deg 10deg, transparent 10deg 20deg);
                }
                .deco-shadow {
                    box-shadow: 0 0 15px ${colors.gold}20;
                }
                @keyframes shimmer {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                .text-shimmer {
                    background-size: 200% auto;
                    animation: shimmer 8s linear infinite reverse;
                }
            `}</style>

            {/* Background Pattern */}
            <div className="absolute inset-0 deco-pattern-bg opacity-20 pointer-events-none" />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b-2" style={{ borderColor: colors.gold, backgroundColor: `${colors.bg}F5`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-8">
                    <div className="flex items-center gap-4">
                        <div className="border-2 p-1 rotate-45" style={{ borderColor: colors.gold }}>
                            <Diamond size={24} className="-rotate-45" style={{ color: colors.gold }} fill={colors.goldLight} />
                        </div>
                        <span className="text-2xl font-bold tracking-[0.3em] uppercase ml-2 text-shimmer" style={{ ...goldTextGradient }}>GatsbAI</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['Grandeur', 'Society', 'Heritage'].map((item) => (
                                <span key={item} className="text-xs font-bold tracking-[0.3em] uppercase cursor-pointer transition-all hover:text-yellow-400 relative group" style={{ color: colors.muted }}>
                                    {item}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full"></span>
                                </span>
                            ))}
                            <button className="px-8 py-3 font-bold text-xs tracking-[0.3em] uppercase text-black transform hover:scale-105 transition-transform duration-300"
                                style={{ background: goldGradient, boxShadow: `0 0 20px ${colors.gold}60` }}>
                                Entrance
                            </button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-3 border sticky z-50" style={{ borderColor: colors.gold }}>{menuOpen ? <X size={20} style={{ color: colors.gold }} /> : <Menu size={20} style={{ color: colors.gold }} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="p-8 border-t border-b-2 absolute w-full z-40" style={{ borderColor: colors.gold, backgroundColor: colors.bg }}>
                        {['Grandeur', 'Society', 'Heritage'].map((item) => (<div key={item} className="py-4 text-sm tracking-[0.2em] uppercase font-medium text-center" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-6 py-4 font-bold tracking-[0.2em] uppercase text-black" style={{ background: goldGradient }}>Entrance</button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-40 px-6 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-64 sunburst opacity-30 pointer-events-none fade-out-bottom"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-6 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="w-24 h-[2px]" style={{ background: goldGradient }} />
                        <Crown size={32} style={{ color: colors.gold }} strokeWidth={1.5} />
                        <div className="w-24 h-[2px]" style={{ background: goldGradient }} />
                    </div>

                    <h1 className="mb-8 font-bold leading-tight tracking-[0.15em] animate-in zoom-in duration-1000" style={{ fontSize: isMobile ? '48px' : '96px' }}>
                        THE <br />
                        <span className="text-shimmer" style={{ ...goldTextGradient }}>GOLDEN</span> AGE
                    </h1>

                    <p className="max-w-2xl mx-auto mb-16 text-lg tracking-[0.05em] leading-relaxed font-light italic" style={{ color: colors.muted }}>
                        "A return to geometric splendor. Where code meets craftsmanship, and every pixel is polished to perfection."
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <button className="w-64 py-5 font-bold tracking-[0.25em] uppercase text-black transition-all hover:scale-105 active:scale-95 deco-shadow"
                            style={{ background: goldGradient }}>
                            Acquire Access
                        </button>
                        <button className="w-64 py-5 font-bold tracking-[0.25em] uppercase text-[#D4AF37] border transition-all hover:bg-[#D4AF37] hover:text-black"
                            style={{ borderColor: colors.gold }}>
                            View Gallery
                        </button>
                    </div>

                    {/* Decorative Diamond */}
                    <div className="mt-32 mx-auto w-px h-32 bg-gradient-to-b from-[#D4AF37] to-transparent relative">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border border-[#D4AF37]"></div>
                    </div>
                </div>
            </section>

            {/* Features (The Collection) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 relative">
                        <span className="text-sm font-bold tracking-[0.4em] uppercase py-2 px-8 border-y-2 inline-block" style={{ color: colors.gold, borderColor: colors.gold }}>
                            The Collection
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Diamond, title: 'Precision', desc: 'Geometric layouts aligned to the pixel.' },
                            { icon: Gem, title: 'Opulence', desc: 'Rich gradients and luxurious textures.' },
                            { icon: Star, title: 'Prestige', desc: 'Exclusive components for elite projects.' }
                        ].map((item, i) => (
                            <div key={i} className="group p-12 border transition-all hover:-translate-y-2 duration-500 bg-[#151515]"
                                style={{ borderColor: `${colors.gold}40` }}>
                                <div className="w-24 h-24 mx-auto mb-10 border-2 rotate-45 flex items-center justify-center transition-colors group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37]"
                                    style={{ borderColor: colors.gold }}>
                                    <item.icon size={40} className="-rotate-45 text-[#D4AF37] group-hover:text-black transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-[0.2em] uppercase mb-4 text-center text-[#F5F5DC]">{item.title}</h3>
                                <div className="w-12 h-px bg-[#D4AF37] mx-auto mb-6 transform group-hover:scale-x-150 transition-transform duration-500"></div>
                                <p className="text-center tracking-wider font-light leading-7" style={{ color: colors.muted }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials (Society Column) */}
            <section className="py-24 px-6 bg-[#0a0a0a] border-y" style={{ borderColor: `${colors.gold}30` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-[0.2em] text-[#D4AF37] mb-4">Society Notes</h2>
                        <p className="italic text-[#A39869]">"Overheard at the Grand Gala"</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {[
                            { name: "Lady Catherine", title: "Patron of the Arts", quote: "Simply divine. A feast for the eyes.", loc: "New York" },
                            { name: "Monsieur LeCroix", title: "Master Architect", quote: "The symmetry is impeccable. A modern marvel.", loc: "Paris" },
                            { name: "Baron Von Code", title: "Industrialist", quote: "Efficiency wrapped in pure luxury.", loc: "Berlin" },
                            { name: "Duchess of UX", title: "Critic", quote: "Finally, an interface with proper breeding.", loc: "London" }
                        ].map((t, i) => (
                            <div key={i} className="flex gap-6 relative p-6 border-l-2" style={{ borderColor: colors.gold }}>
                                <div className="shrink-0">
                                    <div className="w-16 h-16 border rounded-full flex items-center justify-center" style={{ borderColor: colors.gold }}>
                                        <Feather size={24} style={{ color: colors.gold }} />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xl italic mb-4 font-light leading-relaxed" style={{ color: '#F5F5DC' }}>"{t.quote}"</p>
                                    <div className="font-bold tracking-[0.1em] text-[#D4AF37]">{t.name}</div>
                                    <div className="text-xs tracking-[0.2em] uppercase text-[#A39869] mt-1 flex items-center gap-2">
                                        {t.title} <span className="opacity-30">|</span> <MapPin size={10} /> {t.loc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Membership) */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block border-2 p-3 rotate-45 mb-8" style={{ borderColor: colors.gold }}>
                            <div className="border p-1"></div>
                        </div>
                        <h2 className="text-4xl font-bold tracking-[0.2em] uppercase">Membership</h2>
                    </div>

                    <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                        {[{ name: 'Debutante', price: '49', features: ['Entry Access', 'Daily News'], highlight: false },
                        { name: 'Aristocrat', price: '149', features: ['Full Access', 'Private Events', 'Concierge'], highlight: true },
                        { name: 'Tycoon', price: '399', features: ['Global Empire', 'White Glove', 'Equity'], highlight: false }].map((plan) => (
                            <div key={plan.name} className={`relative p-12 text-center transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] bg-[#121212] ${plan.highlight ? 'border-2 scale-105 z-10' : 'border border-opacity-30'}`}
                                style={{ borderColor: colors.gold }}>

                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 bg-black border text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase w-max" style={{ borderColor: colors.gold }}>
                                        Most Desired
                                    </div>
                                )}

                                <h3 className="text-xl font-bold tracking-[0.3em] uppercase mb-8 text-[#A39869]">{plan.name}</h3>
                                <div className="text-6xl font-bold mb-2 flex items-start justify-center gap-1" style={{ color: plan.highlight ? '#D4AF37' : '#F5F5DC' }}>
                                    <span className="text-2xl mt-2">$</span>{plan.price}
                                </div>
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-8 opacity-30"></div>

                                <ul className="space-y-6 mb-12">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center justify-center gap-3 tracking-wider text-sm text-[#EAEAEA]">
                                            <Sparkles size={12} className="text-[#D4AF37]" /> {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 font-bold tracking-[0.25em] uppercase text-xs transition-all hover:bg-[#D4AF37] hover:text-black group relative overflow-hidden"
                                    style={{ border: `1px solid ${colors.gold}`, color: colors.gold }}>
                                    <span className="relative z-10">Claim Status</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 relative bg-[#0F0F0F]">
                <div className="max-w-3xl mx-auto border-4 p-2" style={{ borderColor: colors.gold }}>
                    <div className="border p-8 md:p-12 relative" style={{ borderColor: `${colors.gold}40` }}>
                        {/* Corner Decorations */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: colors.gold }}></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: colors.gold }}></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: colors.gold }}></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: colors.gold }}></div>

                        <h2 className="text-center text-3xl font-bold tracking-[0.2em] mb-12 text-[#D4AF37]">Inquiries</h2>

                        <div className="space-y-6">
                            {[
                                { q: 'What defines the Art Deco style?', a: 'Art Deco combines geometric shapes, bold colors, and luxurious materials from the 1920s-30s.' },
                                { q: 'Is this style customizable?', a: 'Yes, all elements can be adapted while maintaining the signature aesthetic.' },
                                { q: 'What fonts are included?', a: 'Premium serif and geometric sans-serif typefaces that capture the era.' }
                            ].map((item, i) => (
                                <div key={i} className="border-b pb-4" style={{ borderColor: `${colors.gold}20` }}>
                                    <button className="w-full flex items-center justify-between py-2 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                        <span className="font-bold tracking-widest text-[#F5F5DC] group-hover:text-[#D4AF37] transition-colors uppercase text-sm">{item.q}</span>
                                        <ChevronDown size={16} className={`text-[#D4AF37] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    {expandedFaq === i && (
                                        <div className="pt-4 text-[#A39869] font-serif italic text-lg opacity-0 animate-in fade-in slide-in-from-top-1">
                                            "{item.a}"
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <Diamond size={64} className="mx-auto mb-12 animate-pulse" style={{ color: colors.gold }} strokeWidth={1} />
                    <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-[0.1em] leading-tight">
                        Experience <br />
                        <span style={{ ...goldTextGradient }}>True Elegance</span>
                    </h2>
                    <button className="px-20 py-6 font-bold tracking-[0.3em] uppercase text-black text-sm relative overflow-hidden group transition-transform hover:scale-105"
                        style={{ background: goldGradient }}>
                        <span className="relative z-10">Ascend Now</span>
                        <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-4 py-16 px-6" style={{ borderColor: colors.gold, backgroundColor: '#050505' }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-4">
                            <Diamond size={24} style={{ color: colors.gold }} />
                            <span className="font-bold tracking-[0.4em] uppercase text-xl">DECO</span>
                        </div>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#A39869]">Est. MMXXV</span>
                    </div>

                    <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-[#A39869]">
                        {['Terms', 'Privacy', 'Concierge', 'Credits'].map(link => (
                            <a key={link} href="#" className="hover:text-[#D4AF37] transition-colors">{link}</a>
                        ))}
                    </div>

                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#A39869] opacity-50">
                        © The Golden Standard. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
};
