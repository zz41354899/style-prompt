import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, SprayCan, Paintbrush, Zap, Star, Skull, Crown } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S53GraffitiPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#121212] text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Rubik+Glitch&family=Sedgwick+Ave+Display&display=swap');

                .font-urban-tag { font-family: 'Rubik Glitch', cursive; }
                .font-urban-body { font-family: 'Permanent Marker', cursive; }
                .font-urban-display { font-family: 'Sedgwick Ave Display', cursive; }

                /* Concrete Texture */
                .wall-texture {
                    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");
                }

                /* Spray Paint Effect */
                .spray-glow {
                    filter: drop-shadow(0 0 8px currentColor) blur(0.5px);
                }
                .neon-drip {
                    position: relative;
                }
                .neon-drip::after {
                    content: '';
                    position: absolute;
                    bottom: -15px;
                    left: 20%;
                    width: 4px;
                    height: 15px;
                    background: currentColor;
                    border-radius: 0 0 50% 50%;
                    box-shadow: 0 0 10px currentColor;
                }

                /* Stencil Border */
                .stencil-border {
                    border: 4px solid #fff;
                    box-shadow: 0 0 15px currentColor;
                    position: relative;
                }
                .stencil-cutout {
                    mask-image: repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 12px);
                }

                /* Glitch Text Animation */
                @keyframes glitch {
                    0% { transform: translate(0); text-shadow: -2px 2px #0ff; }
                    20% { transform: translate(-2px, 2px); text-shadow: 2px -2px #f0f; }
                    40% { transform: translate(2px, -2px); text-shadow: -2px 2px #0ff; }
                    60% { transform: translate(-2px, 2px); text-shadow: 2px -2px #f0f; }
                    80% { transform: translate(2px, -2px); text-shadow: -2px 2px #0ff; }
                    100% { transform: translate(0); text-shadow: -2px 2px #0ff; }
                }
                .animate-glitch:hover {
                    animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
                }
            `}</style>

            <div className="absolute inset-0 wall-texture bg-[#1a1a1a] fixed z-[-1]"></div>

            {/* Background Splatters */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF00FF] rounded-full blur-[100px] opacity-20"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#00FFFF] rounded-full blur-[100px] opacity-20"></div>

                {/* Random Drips */}
                <div className="absolute top-[20%] right-[15%] w-2 h-32 bg-[#FFD700] neon-drip opacity-60"></div>
                <div className="absolute bottom-[30%] left-[8%] w-3 h-24 bg-[#FF00FF] neon-drip opacity-50"></div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3 animate-glitch cursor-default">
                        <Crown size={32} className="text-[#FFD700] spray-glow" />
                        <span className="text-4xl font-urban-tag tracking-wider text-white spray-glow">KING<span className="text-[#00FFFF]">.TAG</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['Crew', 'Walls', 'Burners'].map((item) => (
                                <a key={item} href="#" className="font-urban-display text-2xl text-white/80 hover:text-[#00FFFF] hover:spray-glow transition-all transform hover:-rotate-2">
                                    {item}
                                </a>
                            ))}
                            <button className="px-8 py-2 bg-[#FF00FF] text-black font-urban-body text-xl font-bold stencil-border hover:scale-105 transition-transform" style={{ color: '#FF00FF' }}>
                                <span className="relative z-10">BOMB IT!</span>
                                <div className="absolute inset-0 bg-white opacity-20 z-0"></div>
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white border-2 border-white/50">{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-black/95 border-b-4 border-[#00FFFF]">
                        {['Crew', 'Walls', 'Burners'].map((item) => (
                            <div key={item} className="py-4 font-urban-display text-4xl text-white border-b border-white/10 hover:text-[#FF00FF]">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-[#FF00FF] text-white font-urban-body text-2xl font-bold spray-glow">
                            START BOMBING
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative z-10">
                        <div className="inline-block px-4 py-1 border-2 border-[#FFD700] text-[#FFD700] font-urban-body text-lg mb-6 transform -rotate-2 spray-glow">
                            ★ URBAN EXCELLENCE
                        </div>

                        <h1 className="text-7xl md:text-9xl font-urban-display text-white mb-6 leading-none">
                            STREET<br />
                            <span className="text-[#00FFFF] spray-glow relative">
                                LEVEL
                                <span className="absolute -bottom-4 left-0 w-full h-2 bg-[#FF00FF] blur-sm"></span>
                            </span>
                        </h1>

                        <p className="font-urban-body text-2xl text-gray-300 mb-10 max-w-lg leading-relaxed border-l-4 border-[#FF00FF] pl-6 bg-white/5 p-4">
                            Turn blank walls into masterpieces. The ultimate digital graffiti toolkit for the modern vandal.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="px-10 py-4 bg-[#00FFFF] text-black font-urban-body text-2xl font-bold stencil-border hover:bg-[#E0FFFF] transition-colors flex items-center gap-3 transform -rotate-1" style={{ color: '#00FFFF' }}>
                                <SprayCan size={24} />
                                GET PAINT
                            </button>
                            <button className="px-10 py-4 bg-transparent text-white font-urban-body text-2xl font-bold border-4 border-white hover:bg-white hover:text-black transition-colors">
                                WATCH VID
                            </button>
                        </div>
                    </div>

                    {/* Hero Graphic */}
                    <div className="relative h-[400px] w-full mt-10 lg:mt-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] opacity-20 blur-3xl rounded-full animate-pulse"></div>

                        <div className="relative z-10 transform rotate-6 border-8 border-white p-2 bg-black shadow-[rgba(0,255,255,0.4)_10px_10px_0px]">
                            <img src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=2690&auto=format&fit=crop" className="w-[350px] h-[450px] object-cover grayscale contrast-125" alt="Street Art" />
                            <div className="absolute top-4 left-4 bg-[#FFD700] text-black px-3 py-1 font-urban-tag text-2xl transform -rotate-12">FRESH!</div>
                            <Zap className="absolute -bottom-8 -right-8 text-[#FF00FF] spray-glow w-24 h-24 transform rotate-12" strokeWidth={3} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Tags) */}
            <section className="py-24 px-6 relative bg-black/40">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-6xl font-urban-tag text-center mb-20 text-white spray-glow">
                        <span className="text-[#FF00FF]">TOOL</span> KIT
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: SprayCan, title: "DRIP MODE", desc: "Realistic physics for paint drips.", color: "#00FFFF", rotate: "-rotate-2" },
                            { icon: Paintbrush, title: "FAT CAPS", desc: "Wide lines for huge throw-ups.", color: "#FF00FF", rotate: "rotate-1" },
                            { icon: Skull, title: "STENCILS", desc: "Pre-cut shapes for quick bombing.", color: "#FFD700", rotate: "-rotate-1" }
                        ].map((f, i) => (
                            <div key={i} className={`p-8 bg-[#1a1a1a] border-4 border-${f.color.replace('#', '')} stencil-border transform ${f.rotate} hover:scale-105 transition-transform duration-300`} style={{ borderColor: f.color, color: f.color }}>
                                <div className="mb-6 flex justify-between items-start">
                                    <f.icon size={48} className="spray-glow" />
                                    <div className="text-4xl font-urban-tag opacity-30">0{i + 1}</div>
                                </div>
                                <h3 className="text-3xl font-urban-display text-white mb-4 tracking-wider">{f.title}</h3>
                                <p className="font-urban-body text-xl text-gray-400 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Wall) */}
            <section className="py-24 px-6 relative border-y border-white/10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-6xl font-urban-display text-white mb-4">JOIN THE <span className="text-[#00FF00]">CREW</span></h2>
                        <div className="h-1 w-40 bg-[#00FF00] mx-auto spray-glow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        {[
                            { name: 'TOY', price: 'FREE', color: '#FFFFFF', glow: 'shadow-white/20' },
                            { name: 'WRITER', price: '$15', color: '#00FFFF', glow: 'shadow-[#00FFFF]/40', active: true },
                            { name: 'KING', price: '$50', color: '#FFD700', glow: 'shadow-[#FFD700]/40' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 bg-[#111] border-2 border-white/20 ${plan.active ? 'transform -translate-y-4 border-4' : ''}`} style={{ borderColor: plan.color }}>
                                {plan.active && (
                                    <div className="absolute -top-6 left-0 w-full text-center">
                                        <span className="bg-[#00FFFF] text-black font-urban-body px-4 py-1 text-lg font-bold uppercase transform -rotate-1 inline-block">Most Wanted</span>
                                    </div>
                                )}

                                <h3 className="text-4xl font-urban-tag mb-2 text-center" style={{ color: plan.color }}>{plan.name}</h3>
                                <div className="text-6xl font-urban-display mb-8 text-center" style={{ textShadow: `0 0 10px ${plan.color}` }}>{plan.price}</div>

                                <ul className="space-y-4 mb-8 border-t border-white/10 pt-6">
                                    {[1, 2, 3].map((_, j) => (
                                        <li key={j} className="flex items-center gap-3 font-urban-body text-lg text-gray-300">
                                            <Check size={20} style={{ color: plan.color }} />
                                            Feature Unlock {j + 1}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 font-urban-body text-2xl font-bold uppercase transition-all hover:opacity-90 active:scale-95`} style={{ backgroundColor: plan.color, color: '#000' }}>
                                    TAG IT
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-black/80">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-5xl font-urban-tag text-center mb-12 text-[#FF00FF] spray-glow">
                        WORD ON THE STREET
                    </h2>

                    <div className="space-y-6">
                        {[{ q: 'IS THIS LEGAL?', a: 'Only on digital walls! Keep your local streets clean.' },
                        { q: 'CAN I USE A TABLET?', a: 'Pressure sensitivity fully supported on iPad & Wacom.' },
                        { q: 'CUSTOM COLORS?', a: 'Mix your own cans with our hex-code lab.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#1a1a1a] border border-white/20 hover:border-[#FF00FF] transition-colors overflow-hidden">
                                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-urban-body text-xl text-white">{item.q}</span>
                                    <ChevronDown size={24} className={`text-[#FF00FF] transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-6 pb-6 pt-2 font-mono text-lg text-gray-400 border-t border-white/10">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF00FF]/20 to-transparent"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10 border-4 border-white p-12 bg-black/80 stencil-border" style={{ color: '#fff' }}>
                    <Star size={64} className="mx-auto mb-6 text-[#FFFF00] animate-spin-slow" />
                    <h2 className="text-6xl md:text-8xl font-urban-display text-white mb-8">MAKE YOUR MARK</h2>
                    <button className="px-16 py-6 bg-[#00FF00] text-black font-urban-tag text-4xl hover:scale-105 transition-transform shadow-[0_0_20px_#00FF00]">
                        START NOW
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black border-t border-white/20 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <SprayCan size={24} className="text-[#FF00FF]" />
                        <span className="text-3xl font-urban-tag text-white">KING.TAG</span>
                    </div>

                    <div className="flex gap-8 font-urban-body text-xl text-gray-400">
                        <a href="#" className="hover:text-[#00FFFF]">INSTA</a>
                        <a href="#" className="hover:text-[#FF00FF]">TIKTOK</a>
                        <a href="#" className="hover:text-[#FFD700]">YOUTUBE</a>
                    </div>

                    <div className="font-mono text-sm text-gray-600">
                        © 2025 ALL CITY KINGS.
                    </div>
                </div>
            </footer>
        </div>
    );
};
