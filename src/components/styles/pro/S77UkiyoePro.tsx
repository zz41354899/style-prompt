import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Mountain, Waves, Flower2, Moon, CloudFog, Sunrise, Fan, Wind } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S77UkiyoePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#F2F0E6] text-[#2C2F33] selection:bg-[#BC4843] selection:text-[#F2F0E6]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&family=Kaushan+Script&display=swap');

                .font-ukiyo-head { font-family: 'Kaushan Script', cursive; }
                .font-ukiyo-body { font-family: 'Noto Serif JP', serif; }

                /* Rice Paper Texture */
                .rice-paper {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
                }
                
                /* Woodblock Print Texture */
                .woodblock-grain {
                    filter: contrast(120%) brightness(95%);
                    mix-blend-mode: multiply;
                }

                /* Ink Stroke Border */
                .ink-border {
                    position: relative;
                }
                .ink-border::after {
                    content: '';
                    position: absolute;
                    inset: -4px;
                    border: 3px solid #003153;
                    border-radius: 2px 255px 3px 25px / 255px 5px 225px 3px;
                    pointer-events: none;
                }
                
                /* Wave Decoration */
                .wave-pattern {
                    background-image: radial-gradient(circle at 10px 10px, rgba(255,255,255,0.8) 2px, transparent 2.5px),
                                      radial-gradient(circle at 25px 25px, rgba(255,255,255,0.8) 1.5px, transparent 2px);
                    background-size: 50px 50px;
                }
                
                /* Vertical Text */
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: upright;
                }
                
                /* Hanko Seal */
                .hanko-seal {
                    border: 2px solid #BC4843;
                    color: #BC4843;
                    border-radius: 8px 2px 6px 3px;
                }
            `}</style>

            {/* Texture Overlay */}
            <div className="fixed inset-0 rice-paper opacity-40 z-50 pointer-events-none mix-blend-multiply"></div>

            {/* Background Gradient */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#E6E2D3] to-[#F2F0E6] z-[-2]"></div>

            {/* Floating Clouds */}
            <div className="fixed top-20 right-[-10%] opacity-20 z-[-1]">
                <CloudFog size={240} className="text-[#003153]" />
            </div>
            <div className="fixed bottom-40 left-[-5%] opacity-10 z-[-1] transform scale-x-[-1]">
                <CloudFog size={300} className="text-[#BC4843]" />
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-40 bg-[#F2F0E6]/95 backdrop-blur-sm border-b-4 border-[#003153]">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#003153] rounded-full flex items-center justify-center text-[#F2F0E6]">
                            <Waves size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-ukiyo-head text-[#003153] leading-none">Ukiyo-e</span>
                            <span className="text-xs font-ukiyo-body font-bold text-[#BC4843] tracking-widest uppercase">Floating World</span>
                        </div>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Woodblock', 'Ink', 'Paper'].map((item) => (
                                <a key={item} href="#" className="font-ukiyo-body font-bold text-lg text-[#2C2F33] hover:text-[#003153] relative group">
                                    {item}
                                    <div className="absolute -bottom-1 left-0 w-0 h-1 bg-[#BC4843] group-hover:w-full transition-all duration-300 rounded-full"></div>
                                </a>
                            ))}
                            <button className="px-6 py-2 bg-[#BC4843] text-[#F2F0E6] font-ukiyo-body font-bold border-2 border-[#BC4843] hover:bg-transparent hover:text-[#BC4843] transition-colors shadow-[4px_4px_0_#003153] hover:shadow-[2px_2px_0_#003153] hover:translate-x-[2px] hover:translate-y-[2px]">
                                GALLERY
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#003153] ink-border border-none">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#F2F0E6] border-b-4 border-[#003153] shadow-xl">
                        {['Woodblock', 'Ink', 'Paper'].map((item) => (
                            <div key={item} className="py-4 font-ukiyo-body font-bold text-xl text-[#2C2F33] border-b border-[#003153]/20 flex items-center justify-between">
                                {item} <Fan size={16} className="text-[#003153]" />
                            </div>
                        ))}
                        <button className="w-full mt-6 py-3 bg-[#BC4843] text-[#F2F0E6] font-ukiyo-body font-bold shadow-[4px_4px_0_#003153]">
                            GALLERY
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
                <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">

                    {/* Vertical Text Decoration */}
                    <div className="absolute top-0 right-4 lg:right-0 h-64 w-12 hidden md:flex flex-col items-center justify-start pt-4 border-l-2 border-[#003153]/20">
                        <div className="vertical-text font-ukiyo-body font-bold text-2xl text-[#003153] tracking-widest">
                            富嶽三十六景
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="w-24 h-24 mx-auto bg-[#BC4843] rounded-full flex items-center justify-center p-1 shadow-[0_0_0_8px_#F2F0E6,0_0_0_10px_#BC4843]">
                            <Sunrise size={48} className="text-[#F2F0E6]" />
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-ukiyo-head text-[#003153] mb-4 text-center leading-tight">
                        The Great <span className="text-[#BC4843]">Wave</span>
                    </h1>

                    <div className="w-32 h-2 bg-[#003153] mb-8 rounded-full"></div>

                    <p className="font-ukiyo-body text-xl md:text-2xl text-[#2C2F33] text-center max-w-2xl mb-12 bg-white/60 p-6 border-l-4 border-[#BC4843] backdrop-blur-sm shadow-md">
                        Capture the fleeting moments of the floating world with timeless woodblock aesthetics.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="px-10 py-4 bg-[#003153] text-[#F2F0E6] font-ukiyo-body font-bold text-lg border-2 border-[#003153] hover:bg-[#F2F0E6] hover:text-[#003153] transition-colors relative overflow-hidden group">
                            <span className="relative z-10">START CREATING</span>
                            <div className="absolute top-0 left-0 w-full h-full bg-[#F2F0E6] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></div>
                        </button>
                        <button className="px-10 py-4 bg-transparent text-[#BC4843] font-ukiyo-body font-bold text-lg border-2 border-[#BC4843] hover:bg-[#BC4843] hover:text-[#F2F0E6] transition-colors">
                            VIEW MASTERS
                        </button>
                    </div>
                </div>

                {/* Wave Graphifc (SVG) */}
                <div className="absolute bottom-0 inset-x-0 h-48 md:h-64 text-[#003153]/20 pointer-events-none">
                    <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Features Panel */}
            <section className="py-24 px-6 relative bg-[#E6E2D3]">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex items-end justify-between mb-16 border-b-2 border-[#003153] pb-4">
                        <h2 className="text-4xl font-ukiyo-head text-[#003153]">Artistry</h2>
                        <div className="hanko-seal px-3 py-1 font-ukiyo-body font-bold text-sm bg-white">
                            最高品質
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Mountain, title: "Bold Outlines", desc: "Distinctive ink stroke boundaries.", color: "#003153" },
                            { icon: Flower2, title: "Flat Color", desc: "Vibrant, solid pigment fills.", color: "#BC4843" },
                            { icon: Wind, title: "Texture", desc: "Authentic woodgrain and paper grain.", color: "#C5A572" }
                        ].map((f, i) => (
                            <div key={i} className="p-8 bg-[#F2F0E6] ink-border text-center group transition-transform hover:-translate-y-2 woodblock-grain relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#003153] transform rotate-45 translate-x-8 -translate-y-8 group-hover:bg-[#BC4843] transition-colors"></div>

                                <f.icon size={56} className="mx-auto mb-6 relative z-10" style={{ color: f.color }} />

                                <h3 className="text-2xl font-ukiyo-body font-bold text-[#2C2F33] mb-4 relative z-10">{f.title}</h3>
                                <p className="font-ukiyo-body text-lg text-[#6B6358] relative z-10">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Scrolls) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-ukiyo-head text-[#BC4843] mb-4">Commissions</h2>
                        <p className="font-ukiyo-body text-[#003153] text-xl font-bold">Acquire a masterpiece</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Apprentice', price: '¥5k', features: ['Sketchbook', 'Black Ink', '1 Canvas'] },
                            { name: 'Artisan', price: '¥12k', features: ['Color Pigments', 'Woodblocks', '3 Prints'], highlight: true },
                            { name: 'Master', price: '¥25k', features: ['Gold Leaf', 'Silk Canvas', 'Unlimited'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 border-y-8 border-x-2 border-[#003153] bg-[#FAF6ED] transition-transform ${plan.highlight ? 'scale-105 z-10 shadow-[8px_8px_0_rgba(188,72,67,0.3)]' : 'hover:scale-105'}`}>
                                {plan.highlight && (
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#BC4843] text-white font-ukiyo-body font-bold text-sm shadow-md">
                                        POPULAR
                                    </div>
                                )}

                                <div className="mb-8 text-center border-b-2 border-dotted border-[#003153]/30 pb-6">
                                    <h3 className="text-2xl font-ukiyo-body font-bold text-[#003153] mb-2">{plan.name}</h3>
                                    <span className={`text-4xl font-ukiyo-body font-bold ${plan.highlight ? 'text-[#BC4843]' : 'text-[#2C2F33]'}`}>{plan.price}</span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-ukiyo-body text-lg text-[#2C2F33] font-bold">
                                            <Fan size={16} className={`${plan.highlight ? 'text-[#BC4843]' : 'text-[#003153]'}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 font-ukiyo-body font-bold border-2 border-[#003153] transition-colors ${plan.highlight ? 'bg-[#003153] text-[#F2F0E6] hover:bg-[#BC4843] hover:border-[#BC4843]' : 'bg-transparent text-[#003153] hover:bg-[#003153] hover:text-[#F2F0E6]'}`}>
                                    SELECT
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#003153] text-[#F2F0E6] relative overflow-hidden">
                <div className="absolute top-0 right-0 wave-pattern w-full h-full opacity-10"></div>

                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-4xl font-ukiyo-head text-center mb-16 text-[#F2F0E6]">
                        Wisdom
                    </h2>

                    <div className="space-y-6">
                        {[{ q: 'Is the ink permanent?', a: 'Our digital pigments mimic Sumi ink, lasting a thousand years without fading.' },
                        { q: 'Can I print on wood?', a: 'We optimize exports for woodblock carving templates.' },
                        { q: 'What colors are used?', a: 'Traditional Prussian Blue, Vermilion, and Gamboge Yellow.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#F2F0E6] text-[#2C2F33] p-1 rounded-sm">
                                <button className="w-full flex items-center justify-between p-6 bg-[#F2F0E6] border border-[#2C2F33] group hover:bg-[#BC4843] hover:text-[#F2F0E6] transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-ukiyo-body font-bold text-lg">{item.q}</span>
                                    <ChevronDown size={24} className={`transform transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-6 font-ukiyo-body text-lg border-x border-b border-[#2C2F33] bg-[#FAF6ED]">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 relative text-center">
                <div className="max-w-4xl mx-auto border-4 border-[#003153] p-16 bg-[#BC4843] shadow-[16px_16px_0_#003153]">
                    <Moon size={64} className="mx-auto mb-8 text-[#C5A572]" />

                    <h2 className="text-5xl md:text-6xl font-ukiyo-head text-[#F2F0E6] mb-8">
                        Enter the Floating World
                    </h2>

                    <div className="flex justify-center">
                        <button className="px-16 py-5 bg-[#F2F0E6] text-[#003153] font-ukiyo-body text-xl font-bold border-2 border-[#003153] hover:bg-[#003153] hover:text-[#F2F0E6] transition-colors shadow-lg">
                            Immersion
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t-4 border-[#003153] bg-[#E6E2D3]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="hanko-seal px-2 py-0.5 bg-white text-xs font-bold">印</div>
                        <span className="text-xl font-ukiyo-head text-[#003153]">EDO STUDIO</span>
                    </div>

                    <div className="flex gap-8 font-ukiyo-body font-bold text-sm tracking-widest text-[#003153] uppercase">
                        <a href="#" className="hover:text-[#BC4843] transition-colors">Prints</a>
                        <a href="#" className="hover:text-[#BC4843] transition-colors">History</a>
                        <a href="#" className="hover:text-[#BC4843] transition-colors">Contact</a>
                    </div>

                    <div className="font-ukiyo-body font-bold text-[#BC4843]">
                        © 1830-2025 Hokusai.
                    </div>
                </div>
            </footer>
        </div>
    );
};
