import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Palette, Brush, Droplet, Flower2, Heart, Cloud, Sun } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S49WatercolorPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#FFFCF5] text-[#4A4A4A] selection:bg-[#BDE0FE] selection:text-[#4A4A4A]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Caveat:wght@400;700&display=swap');

                .font-paint-head { font-family: 'Cormorant Garamond', serif; }
                .font-paint-hand { font-family: 'Caveat', cursive; }

                /* Paper Texture */
                .paper-texture {
                    background-image: url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
                    pointer-events: none;
                }

                /* Watercolor Edge Masks */
                .watercolor-mask-1 {
                    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.5C93.4,8.2,81.8,20.7,71,32.1C60.2,43.5,50.2,53.8,39,63.1C27.8,72.4,15.4,80.7,1.1,78.8C-13.2,76.9,-29.4,64.8,-43.3,53.4C-57.2,42,-68.8,31.3,-75.4,18.1C-82,4.9,-83.6,-10.8,-78.9,-25.1C-74.2,-39.4,-63.2,-52.3,-50.7,-60.1C-38.2,-67.9,-24.1,-70.6,-10.2,-69.5C3.7,-68.4,17.6,-63.5,30.5,-83.6' transform='translate(100 100)' /%3E%3C/svg%3E");
                    mask-size: cover;
                    mask-repeat: no-repeat;
                }
                
                .watercolor-border {
                   position: relative;
                }
                .watercolor-border::before {
                    content: '';
                    position: absolute;
                    inset: -4px;
                    border-radius: 20px;
                    padding: 4px;
                    background: linear-gradient(135deg, #FFC8DD, #BDE0FE, #CCD5AE);
                    -webkit-mask: 
                       linear-gradient(#fff 0 0) content-box, 
                       linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0.6;
                    pointer-events: none;
                }

                .paint-daub {
                    mix-blend-mode: multiply;
                    filter: blur(20px);
                    opacity: 0.7;
                    transition: all 0.5s ease-in-out;
                }
                
                .paint-stroke-hover:hover .paint-daub {
                    opacity: 0.9;
                    filter: blur(15px);
                    transform: scale(1.05);
                }

                .wet-edge {
                    box-shadow: 
                        inset 0 0 20px rgba(0,0,0,0.05),
                        0 0 10px rgba(0,0,0,0.05);
                }
            `}</style>

            <div className="absolute inset-0 paper-texture fixed z-50"></div>

            {/* Background Washes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#BDE0FE] rounded-full paint-daub animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#FFC8DD] rounded-full paint-daub animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-[#CCD5AE] rounded-full paint-daub animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-40 bg-[#FFFCF5]/80 backdrop-blur-sm border-b border-[#E0E0E0]">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-8">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                            <div className="absolute inset-0 bg-[#A2D2FF] rounded-full mix-blend-multiply opacity-80 left-1 top-1"></div>
                            <div className="absolute inset-0 bg-[#FFAFCC] rounded-full mix-blend-multiply opacity-80 -left-1 -top-1"></div>
                            <Palette size={20} className="absolute inset-0 m-auto text-white z-10" />
                        </div>
                        <span className="text-3xl font-paint-head font-bold tracking-tight text-[#4A4A4A]">Aquarelle<span className="text-[#A2D2FF] font-paint-hand text-4xl leading-none">.st</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['Portfolio', 'Techniques', 'Shop'].map((item) => (
                                <a key={item} href="#" className="font-paint-head text-xl font-semibold text-[#666] hover:text-[#FF99C8] transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-2 bg-[#BDE0FE] opacity-40 rounded-full transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                            <button className="px-8 py-3 rounded-full font-paint-hand text-2xl font-bold text-white bg-gradient-to-r from-[#FFAFCC] to-[#A2D2FF] shadow-lg shadow-[#A2D2FF]/30 hover:shadow-[#FFAFCC]/40 transition-all transform hover:-translate-y-1">
                                Start Painting
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#4A4A4A] hover:bg-[#F0EFF4] rounded-full transition-colors">{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#FFFCF5] border-b border-[#E0E0E0] shadow-sm">
                        {['Portfolio', 'Techniques', 'Shop'].map((item) => (
                            <div key={item} className="py-3 font-paint-head text-2xl font-semibold text-[#4A4A4A] border-b border-dashed border-[#DDD]">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-3 rounded-full bg-[#A2D2FF] text-white font-paint-hand text-2xl font-bold">
                            Start Painting
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-block relative mb-6 animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="absolute inset-0 bg-[#CCD5AE] rounded-full blur-xl opacity-40 scale-150"></div>
                        <Brush size={32} className="relative text-[#6B705C] transform rotate-12" />
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-paint-head font-bold mb-6 text-[#4A4A4A] leading-[0.9]">
                        Digital art,<br />
                        <span className="relative inline-block px-4">
                            <span className="absolute inset-0 bg-[#FFC8DD] transform -rotate-2 rounded-lg mix-blend-multiply opacity-60 blur-[1px]"></span>
                            natural soul.
                        </span>
                    </h1>

                    <p className="font-paint-hand text-3xl md:text-4xl text-[#777] max-w-2xl mx-auto mb-12 leading-relaxed">
                        Hand-crafted watercolor components that bring a soft, human touch to your digital masterpieces.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-12 py-4 rounded-[2rem] bg-[#4A4A4A] text-white font-paint-head text-xl font-bold shadow-[4px_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_20px_rgba(162,210,255,0.4)] transition-all flex items-center gap-3">
                            <Palette size={20} />
                            Explore Collection
                        </button>
                        <button className="px-12 py-4 rounded-[2rem] bg-white text-[#4A4A4A] font-paint-head text-xl font-bold border-2 border-[#E0E0E0] hover:border-[#A2D2FF] hover:text-[#A2D2FF] transition-all">
                            View Gallery
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Paint Swatches) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-paint-head font-bold text-[#4A4A4A] mb-4">Artistic Touches</h2>
                        <div className="w-24 h-2 bg-[#A2D2FF] mx-auto rounded-full opacity-60 blur-[1px]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Droplet, title: "Wet-on-Wet", desc: "Seamless blending modes that mimic real pigment dispersion.", color: "#A2D2FF", blob: "border-radius: 64% 36% 27% 73% / 59% 43% 57% 41%" },
                            { icon: Cloud, title: "Paper Texture", desc: "Authentic grain overlay included with every component.", color: "#FFC8DD", blob: "border-radius: 36% 64% 63% 37% / 46% 56% 44% 54%" },
                            { icon: Sun, title: "Natural Light", desc: "Soft, diffused shadows that feel like morning sun.", color: "#CCD5AE", blob: "border-radius: 46% 54% 36% 64% / 37% 33% 67% 63%" }
                        ].map((f, i) => (
                            <div key={i} className="relative group p-8 text-center paint-stroke-hover">
                                <div className="absolute inset-0 bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] z-0 wet-edge group-hover:-translate-y-2 transition-transform duration-500"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full paint-daub -z-10" style={{ backgroundColor: f.color, borderRadius: f.blob }}></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <f.icon className="text-[#6B705C]" size={28} />
                                    </div>
                                    <h3 className="text-3xl font-paint-head font-bold mb-4 text-[#4A4A4A]">{f.title}</h3>
                                    <p className="font-paint-hand text-2xl text-[#7A7A7A] leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6 bg-white/50 relative">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-paint-head font-bold text-center mb-16">Choose Your Canvas</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        {[
                            { name: 'Sketchbook', price: 'Free', features: ['Core Brushes', 'Standard Textures'], color: '#A2D2FF', accent: 'bg-[#A2D2FF]' },
                            { name: 'Studio', price: '$12', features: ['All Brushes', 'HD Textures', 'Commercial License'], color: '#FFB5D8', accent: 'bg-[#FFB5D8]', featured: true },
                            { name: 'Masterpiece', price: '$49', features: ['Source Files', 'Tutorials', '1-on-1 Support'], color: '#CCD5AE', accent: 'bg-[#CCD5AE]' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 rounded-[2rem] bg-white wet-edge ${plan.featured ? 'shadow-[0_20px_60px_rgba(255,181,216,0.2)] transform scale-105 z-10' : 'shadow-[0_10px_30px_rgba(0,0,0,0.02)]'} transition-all hover:-translate-y-1`}>
                                {plan.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFAFCC] text-white px-6 py-1 rounded-full font-paint-hand text-xl font-bold shadow-md">
                                        Most Popular
                                    </div>
                                )}
                                <div className={`h-2 w-20 rounded-full mb-6 ${plan.accent} opacity-60`}></div>
                                <h3 className="text-4xl font-paint-head font-bold mb-2">{plan.name}</h3>
                                <div className="text-5xl font-paint-hand font-bold mb-8 text-[#4A4A4A]">{plan.price}</div>

                                <ul className="space-y-4 mb-10">
                                    {[1, 2, 3].map((_, j) => (
                                        <li key={j} className="flex items-center gap-3 font-paint-head text-lg font-semibold text-[#666]">
                                            <div className={`w-6 h-6 rounded-full ${plan.accent} opacity-40 flex items-center justify-center`}>
                                                <Check size={14} className="text-[#4A4A4A]" />
                                            </div>
                                            {plan.features[j] || 'Feature'}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-xl font-paint-head text-xl font-bold transition-colors ${plan.featured ? 'bg-[#4A4A4A] text-white hover:bg-[#333]' : 'bg-[#F5F5F5] text-[#4A4A4A] hover:bg-[#E0E0E0]'}`}>
                                    Select Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 relative">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-paint-head font-bold text-center mb-12">Artist Inquiries</h2>

                    <div className="space-y-6">
                        {[{ q: 'How do blend modes work?', a: 'We use CSS mix-blend-mode: multiply to simulate real pigment layering.' },
                        { q: 'Is the texture customizable?', a: 'Yes! The SVG noise filter creates the paper grain and can be adjusted.' },
                        { q: 'Are these vector graphics?', a: 'Everything is CSS and SVG, ensuring crisp rendering at any resolution.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-[1.5rem] p-2 shadow-sm wet-edge">
                                <button className="w-full flex items-center justify-between p-4 px-6 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-paint-head text-xl font-bold text-[#4A4A4A]">{item.q}</span>
                                    <div className={`w-8 h-8 rounded-full bg-[#F0EFF4] flex items-center justify-center transition-transform duration-300 ${expandedFaq === i ? 'rotate-45 bg-[#FFC8DD]' : ''}`}>
                                        <Flower2 size={16} className={`${expandedFaq === i ? 'text-white' : 'text-[#999]'}`} />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-6 pb-6 pt-2 font-paint-hand text-2xl text-[#777] leading-relaxed">
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
                <div className="max-w-4xl mx-auto relative text-center py-20 px-8 rounded-[3rem] overflow-hidden">
                    <div className="absolute inset-0 bg-[#E9EDC9] opacity-30"></div>
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#CCD5AE] rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
                    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FAEDCD] rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

                    <div className="relative z-10">
                        <div className="w-20 h-20 mx-auto mb-8 bg-white rounded-full flex items-center justify-center shadow-md animate-pulse">
                            <Heart size={32} className="text-[#D4A373] fill-[#D4A373]" />
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-paint-head font-bold mb-8 text-[#4A4A4A]">Ready to paint your masterpiece?</h2>
                        <button className="px-12 py-5 rounded-full bg-[#D4A373] text-white font-paint-head text-2xl font-bold shadow-lg hover:bg-[#C38E5E] transition-colors">
                            Start Creating Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#E0E0E0] pt-20 pb-10 px-6 bg-white/40">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <span className="text-3xl font-paint-head font-bold text-[#4A4A4A]">Aquarelle<span className="text-[#A2D2FF]">.st</span></span>
                        <p className="font-paint-hand text-xl text-[#888] mt-2">Making the web soft again.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#F0EFF4] flex items-center justify-center text-[#666] hover:bg-[#FFC8DD] hover:text-white transition-colors">
                            <Palette size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#F0EFF4] flex items-center justify-center text-[#666] hover:bg-[#A2D2FF] hover:text-white transition-colors">
                            <Brush size={18} />
                        </a>
                    </div>

                    <div className="text-[#888] font-paint-head font-semibold">
                        © 2025 Aquarelle Studio.
                    </div>
                </div>
            </footer>
        </div>
    );
};
