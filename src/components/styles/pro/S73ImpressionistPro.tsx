import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Palette, Sun, Flower2, Brush, Cloud, Image as ImageIcon, Sparkles, Wind } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S73ImpressionistPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#Fdfbf7] text-[#5D5D5D] selection:bg-[#E8C547] selection:text-[#3D4D3F]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Pinyon+Script&display=swap');

                .font-paint-head { font-family: 'Pinyon Script', cursive; }
                .font-paint-body { font-family: 'Cormorant Garamond', serif; }

                /* Canvas Texture */
                .canvas-texture {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
                    pointer-events: none;
                }
                
                /* Paint Dab Animation */
                @keyframes paint-reveal {
                    0% { transform: scale(0.9); opacity: 0; filter: blur(10px); }
                    100% { transform: scale(1); opacity: 1; filter: blur(0); }
                }
                .paint-anim {
                    animation: paint-reveal 1.5s ease-out forwards;
                }

                /* Soft Edges Mask */
                .soft-edge {
                    mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
                    -webkit-mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
                }
                
                /* Watercolor Blend */
                .watercolor-blend {
                    mix-blend-mode: multiply;
                }
                
                /* Brush Stroke Border */
                .brush-border {
                    position: relative;
                }
                .brush-border::after {
                    content: '';
                    position: absolute;
                    inset: -5px;
                    border: 2px solid rgba(155, 139, 184, 0.3);
                    border-radius: 50% 40% 60% 50% / 50% 50% 60% 40% ;
                    pointer-events: none;
                }
            `}</style>

            {/* Canvas Overlay */}
            <div className="fixed inset-0 canvas-texture z-[50] mix-blend-multiply opacity-60"></div>

            {/* Background Paint Strokes */}
            <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#Fdfbf7]">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[#E6E6FA] rounded-full blur-[80px] opacity-60 watercolor-blend animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vh] bg-[#FFDAB9] rounded-full blur-[100px] opacity-50 watercolor-blend animate-pulse" style={{ animationDuration: '10s' }}></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vh] bg-[#B0E0E6] rounded-full blur-[80px] opacity-50 watercolor-blend animate-pulse" style={{ animationDuration: '12s' }}></div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-40 bg-[#FFFEF5]/60 backdrop-blur-md border-b border-[#9B8BB8]/20">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#9B8BB8]/10 rounded-full">
                            <Palette size={24} className="text-[#9B8BB8]" />
                        </div>
                        <span className="text-3xl font-paint-head text-[#5D5D5D] mt-2">Monet<span className="text-[#9B8BB8]">.css</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Gallery', 'Artists', 'Exhibitions'].map((item) => (
                                <a key={item} href="#" className="font-paint-body text-lg text-[#5D5D5D] hover:text-[#9B8BB8] italic transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#9B8BB8] group-hover:w-full transition-all duration-700 ease-out"></span>
                                </a>
                            ))}
                            <button className="px-8 py-2 bg-[#9B8BB8] text-white font-paint-body text-lg italic rounded-full shadow-[0_4px_14px_rgba(155,139,184,0.4)] hover:shadow-[0_6px_20px_rgba(155,139,184,0.6)] hover:-translate-y-0.5 transition-all">
                                View Collection
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#5D5D5D]">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#FFFEF5] border-b border-[#9B8BB8]/20 shadow-xl">
                        {['Gallery', 'Artists', 'Exhibitions'].map((item) => (
                            <div key={item} className="py-4 font-paint-body text-xl italic text-[#5D5D5D] border-b border-[#9B8BB8]/10">
                                {item}
                            </div>
                        ))}
                        <button className="w-full mt-6 py-3 bg-[#9B8BB8] text-white font-paint-body text-lg italic rounded-full shadow-lg">
                            View Collection
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-block mb-6">
                        <span className="font-paint-body italic text-xl text-[#9B8BB8] flex items-center justify-center gap-2">
                            <Sun size={18} className="text-[#E8C547]" /> En Plein Air
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-paint-head text-[#3D4D3F] mb-8 leading-tight paint-anim">
                        Impressions of <br />
                        <span className="text-[#7BA3C8]">Light & Color</span>
                    </h1>

                    <p className="font-paint-body text-2xl md:text-3xl text-[#7A8A7C] italic max-w-2xl mx-auto mb-12 leading-relaxed paint-anim" style={{ animationDelay: '0.3s' }}>
                        Capturing the fleeting beauty of the moment with digital brushstrokes.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 paint-anim" style={{ animationDelay: '0.6s' }}>
                        <button className="px-10 py-4 bg-[#7BA3C8] text-white font-paint-body text-xl italic rounded-full shadow-[0_4px_14px_rgba(123,163,200,0.4)] hover:shadow-[0_6px_20px_rgba(123,163,200,0.6)] hover:-translate-y-0.5 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                            Start Painting <Brush size={18} />
                        </button>
                        <button className="px-10 py-4 bg-transparent text-[#7BA3C8] font-paint-body text-xl italic rounded-full border border-[#7BA3C8]/40 hover:bg-[#7BA3C8]/5 hover:border-[#7BA3C8] transition-all w-full sm:w-auto">
                            Learn Technique
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Palette) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-paint-head text-[#3D4D3F] mb-4">The Palette</h2>
                        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#E88B72] to-transparent opacity-50"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Cloud, title: "Soft Haze", desc: "Atmospheric blurring for dreamlike depth.", color: "#7BA3C8" },
                            { icon: Flower2, title: "Vibrant Flora", desc: "Nature's colors captured in high fidelity.", color: "#E88B72" },
                            { icon: Sun, title: "Dappled Light", desc: "Dynamic lighting that changes with time.", color: "#E8C547" }
                        ].map((f, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-32 h-32 mx-auto mb-6 relative brush-border transition-transform duration-700 group-hover:scale-105">
                                    <div className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" style={{ backgroundColor: f.color }}></div>
                                    <div className="relative z-10 w-full h-full rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-white/80 flex items-center justify-center shadow-sm">
                                        <f.icon size={40} style={{ color: f.color }} />
                                    </div>
                                </div>

                                <h3 className="text-3xl font-paint-head text-[#5D5D5D] mb-3">{f.title}</h3>
                                <p className="font-paint-body text-xl text-[#7A8A7C] italic leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery (Pricing) */}
            <section className="py-24 px-6 relative bg-[#FFFCF0]">
                {/* Paint Splatters */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#E8C547]/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E88B72]/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-paint-head text-[#3D4D3F] mb-6">Masterpieces</h2>
                        <p className="font-paint-body text-[#7A8A7C] text-xl italic">Select your canvas for the journey</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Sketch', price: 'Free', features: ['Basic Brushes', '5 Canvases', 'Public Gallery'] },
                            { name: 'Studio', price: '$12', period: '/mo', features: ['Oil & Watercolor', 'Unlimited', 'Private Show'], highlight: true },
                            { name: 'Museum', price: '$24', period: '/mo', features: ['Master Class', 'Exhibition', 'Auction Access'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${plan.highlight ? 'bg-white shadow-[0_20px_40px_rgba(155,139,184,0.15)] border border-[#9B8BB8]/30 scale-105 z-10' : 'bg-[#Fdfbf7] border border-[#7A8A7C]/10 hover:shadow-lg'}`}>
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-[#E88B72] text-white font-paint-body text-lg italic rounded-full shadow-md">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8 text-center">
                                    <h3 className="text-4xl font-paint-head text-[#5D5D5D] mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className={`text-5xl font-paint-body font-bold ${plan.highlight ? 'text-[#9B8BB8]' : 'text-[#7A8A7C]'}`}>{plan.price}</span>
                                        {plan.period && <span className="text-lg font-paint-body italic text-[#7A8A7C]">{plan.period}</span>}
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-paint-body text-xl text-[#5D5D5D] italic">
                                            <Sparkles size={16} className={plan.highlight ? 'text-[#E8C547]' : 'text-[#7BA3C8]'} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 font-paint-body text-xl italic rounded-full transition-all ${plan.highlight ? 'bg-[#9B8BB8] text-white hover:bg-[#8A7AA8]' : 'bg-transparent text-[#7A8A7C] border border-[#7A8A7C]/30 hover:bg-[#7A8A7C] hover:text-white'}`}>
                                    Choose Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 text-[#5D5D5D]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-5xl font-paint-head text-center mb-16 text-[#3D4D3F]">
                        Curator Notes
                    </h2>

                    <div className="space-y-6">
                        {[{ q: 'Are the colors historically accurate?', a: 'Yes, we use the exact pigments favored by the original Impressionists.' },
                        { q: 'Can I mix styles?', a: 'Absolutely, blend Pointillism with Post-Impressionism as you desire.' },
                        { q: 'Is the canvas archival?', a: 'Our digital canvas preserves your work for eternity with zero degradation.' }
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <button className="w-full flex items-center justify-between p-6 text-left bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#9B8BB8]/10" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-paint-body font-bold text-xl italic text-[#5D5D5D]">{item.q}</span>
                                    <ChevronDown size={24} className={`text-[#9B8BB8] transition-transform duration-500 ease-out ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-8 pb-8 pt-2 font-paint-body text-xl text-[#7A8A7C] italic leading-relaxed bg-white/50 rounded-b-2xl mx-2">
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
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-block p-4 rounded-full bg-white shadow-lg mb-8 animate-bounce delay-700">
                        <Wind size={32} className="text-[#7BA3C8]" />
                    </div>

                    <h2 className="text-5xl md:text-7xl font-paint-head text-[#3D4D3F] mb-8">The Light is Fading</h2>
                    <p className="font-paint-body text-2xl italic text-[#7A8A7C] mb-12 max-w-xl mx-auto">
                        Don't let this moment pass captured. Start your masterpiece today.
                    </p>

                    <button className="px-14 py-5 bg-[#E88B72] text-white font-paint-body text-2xl italic rounded-full shadow-[0_10px_30px_rgba(232,139,114,0.4)] hover:shadow-[0_15px_40px_rgba(232,139,114,0.6)] hover:-translate-y-1 transition-all">
                        Comence Painting
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 bg-white border-t border-[#9B8BB8]/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <ImageIcon size={24} className="text-[#9B8BB8]" />
                        <span className="text-2xl font-paint-head text-[#5D5D5D]">Monet<span className="text-[#9B8BB8]">.css</span></span>
                    </div>

                    <div className="flex gap-10 font-paint-body text-xl italic text-[#7A8A7C]">
                        <a href="#" className="hover:text-[#9B8BB8] transition-colors relative group">
                            Terms
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#9B8BB8] group-hover:w-full transition-all"></span>
                        </a>
                        <a href="#" className="hover:text-[#9B8BB8] transition-colors relative group">
                            Privacy
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#9B8BB8] group-hover:w-full transition-all"></span>
                        </a>
                        <a href="#" className="hover:text-[#9B8BB8] transition-colors relative group">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#9B8BB8] group-hover:w-full transition-all"></span>
                        </a>
                    </div>

                    <div className="font-paint-body text-lg italic text-[#9B8BB8]">
                        © 2025 Impressionist Studio.
                    </div>
                </div>
            </footer>
        </div>
    );
};
