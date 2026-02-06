import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Circle, Star, Zap, Heart, MessageCircle, Cloud } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S52PopArtPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#FFF200] text-black">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Carter+One&family=Comic+Neue:wght@400;700&display=swap');

                .font-pop-head { font-family: 'Bangers', cursive; }
                .font-pop-sub { font-family: 'Carter One', cursive; }
                .font-pop-body { font-family: 'Comic Neue', cursive; }

                /* Halftone Pattern */
                .halftone-bg {
                    background-image: radial-gradient(#000 20%, transparent 20%), radial-gradient(#000 20%, transparent 20%);
                    background-color: #FFF200;
                    background-position: 0 0, 10px 10px;
                    background-size: 20px 20px;
                }

                .halftone-dots {
                    background-image: radial-gradient(circle, currentColor 2px, transparent 2.5px);
                    background-size: 8px 8px;
                }

                /* Comic Box Shadow */
                .comic-shadow {
                    box-shadow: 8px 8px 0px #000;
                }
                .comic-shadow-lg {
                    box-shadow: 12px 12px 0px #000;
                }
                
                /* Text Stroke */
                .text-stroke-sm {
                    -webkit-text-stroke: 1px black;
                }
                .text-stroke {
                    -webkit-text-stroke: 2px black;
                    text-shadow: 4px 4px 0px #000;
                }
                .text-stroke-white {
                    -webkit-text-stroke: 2px #000;
                    color: white;
                }

                /* Speech Bubble Tail */
                .speech-bubble {
                    position: relative;
                }
                .speech-bubble::after {
                    content: '';
                    position: absolute;
                    bottom: -20px;
                    left: 20%;
                    border-width: 20px 20px 0;
                    border-style: solid;
                    border-color: #FFF transparent transparent transparent;
                    filter: drop-shadow(4px 4px 0 #000);
                    z-index: 1;
                }
                .speech-bubble-border::after {
                    content: '';
                    position: absolute;
                    bottom: -24px;
                    left: 20%;
                    border-width: 24px 24px 0;
                    border-style: solid;
                    border-color: #000 transparent transparent transparent;
                    z-index: 0;
                }
                
                /* Burst Shape */
                .burst-shape {
                    clip-path: polygon(20% 0%, 30% 20%, 50% 0%, 60% 20%, 80% 0%, 75% 30%, 100% 20%, 85% 50%, 100% 70%, 75% 75%, 80% 100%, 55% 85%, 35% 100%, 30% 75%, 0% 80%, 15% 50%, 0% 15%);
                }
            `}</style>

            {/* Background Pattern */}
            <div className="fixed inset-0 halftone-bg opacity-10 pointer-events-none z-0"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#FF0050] border-b-4 border-black">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 relative">
                    {/* Decorative Ben-Day Dots on Header */}
                    <div className="absolute top-0 right-0 w-32 h-full opacity-20 halftone-dots text-black pointer-events-none"></div>

                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-14 h-14 bg-[#FFF200] border-4 border-black rounded-full flex items-center justify-center animate-bounce shadow-[4px_4px_0px_#000]">
                            <Star size={32} fill="black" strokeWidth={3} className="text-black" />
                        </div>
                        <span className="text-4xl font-pop-head tracking-wider text-white text-stroke drop-shadow-[4px_4px_0px_#000]">POP! UI</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['COMICS', 'GALLERY', 'STORE'].map((item) => (
                                <a key={item} href="#" className="font-pop-sub text-xl text-white hover:text-[#FFF200] tracking-wider transition-colors drop-shadow-[2px_2px_0px_#000]">
                                    {item}
                                </a>
                            ))}
                            <button className="px-8 py-2 bg-[#00A0E9] text-white font-pop-head text-2xl tracking-widest border-4 border-black comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                                GET IT!
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-white border-4 border-black text-black shadow-[4px_4px_0px_#000] active:shadow-none active:translate-y-1">{menuOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full border-b-4 border-black bg-[#00A0E9] p-6 shadow-[0px_4px_0px_rgba(0,0,0,0.2)]">
                        {['COMICS', 'GALLERY', 'STORE'].map((item) => (
                            <div key={item} className="py-4 font-pop-head text-3xl text-white text-stroke tracking-widest border-b-4 border-black/20 last:border-0">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-[#FFF200] text-black font-pop-head text-3xl tracking-widest border-4 border-black shadow-[4px_4px_0px_#000]">
                            BOOM!
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-16 md:py-24 px-6 relative overflow-hidden bg-[#FFF200]">
                {/* Comic Bursts Background */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#00A0E9] burst-shape border-4 border-black opacity-20 transform -rotate-12"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FF0050] burst-shape border-4 border-black opacity-20 transform rotate-6"></div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="text-center lg:text-left">
                        <div className="inline-block px-6 py-2 bg-black transform -rotate-2 mb-6 shadow-[8px_8px_0px_rgba(255,255,255,0.5)]">
                            <span className="font-pop-sub text-white text-xl tracking-widest">★ NEW COLLECTION ★</span>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-pop-head text-[#FF0050] mb-6 relative inline-block text-stroke-white drop-shadow-[5px_5px_0px_#000]">
                            KAPOW!
                            <div className="absolute -top-10 -right-12 w-32 h-32 bg-[#00FFFF] burst-shape border-4 border-black flex items-center justify-center transform rotate-12 z-[-1]">
                                <span className="font-pop-head text-black text-2xl rotate-[-12deg]">WOW!</span>
                            </div>
                        </h1>

                        <div className="bg-white border-4 border-black p-6 mb-10 speech-bubble speech-bubble-border relative ml-0 lg:ml-8 transform rotate-1 comic-shadow">
                            <p className="font-pop-body text-2xl md:text-3xl font-bold leading-tight">
                                Bold lines! Bright colors! Make your website look like a comic book masterpiece!
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-12">
                            <button className="px-8 py-4 bg-[#FF0050] text-white font-pop-head text-3xl tracking-widest border-4 border-black comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 transform -rotate-2">
                                START NOW <Zap fill="yellow" className="text-black" />
                            </button>
                            <button className="px-8 py-4 bg-white text-black font-pop-head text-3xl tracking-widest border-4 border-black comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all transform rotate-2 hover:bg-[#00FFFF]">
                                SEE DEMO
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[500px] w-full hidden lg:block">
                        {/* Character Panel */}
                        <div className="absolute top-0 right-10 w-[400px] h-[500px] bg-white border-4 border-black comic-shadow-lg overflow-hidden">
                            <div className="w-full h-full bg-[#E0E0E0] halftone-dots text-black/10 flex items-center justify-center relative">
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop" className="grayscale contrast-125 w-full h-full object-cover mix-blend-multiply opacity-80" alt="Pop Art Portrait" />
                                <div className="absolute inset-0 bg-[#FF0050] mix-blend-screen opacity-40"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full bg-[#FFF200] border-t-4 border-black p-4">
                                <p className="font-pop-sub text-black text-xl italic leading-none">"THIS UI IS UNBELIEVABLE!"</p>
                            </div>
                        </div>

                        {/* Sound Effect */}
                        <div className="absolute -bottom-10 -left-10 w-48 h-32">
                            <span className="font-pop-head text-8xl text-[#00A0E9] text-stroke drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] transform -rotate-12 block">BAM!</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Strips */}
            <section className="py-24 px-6 bg-[#00A0E9] relative border-t-4 border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border-4 border-black p-4 mb-16 inline-block transform -rotate-1 comic-shadow">
                        <h2 className="text-5xl font-pop-head text-black">SUPER POWERS!</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Star, title: "BOLD!", desc: "Thick outlines making everything pop!", bg: "#FFF200", fg: "#FF0050" },
                            { icon: Zap, title: "FAST!", desc: "Lightning quick render speeds!", bg: "#FF0050", fg: "#FFF200" },
                            { icon: MessageCircle, title: "LOUD!", desc: "Typography that screams style!", bg: "#FFFFFF", fg: "#00A0E9" }
                        ].map((f, i) => (
                            <div key={i} className="bg-white border-4 border-black p-0 comic-shadow hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-48 border-b-4 border-black relative overflow-hidden" style={{ backgroundColor: f.bg }}>
                                    <div className="absolute inset-0 halftone-dots opacity-20 text-black"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <f.icon size={80} strokeWidth={2.5} className="drop-shadow-[4px_4px_0px_#000]" style={{ color: f.fg, fill: f.fg === '#FFFFFF' ? 'none' : f.fg }} />
                                    </div>
                                    <div className="absolute top-2 left-2 bg-white border-2 border-black px-2 font-pop-mono text-xs font-bold">FIG. {i + 1}</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-4xl font-pop-head mb-2 text-black">{f.title}</h3>
                                    <p className="font-pop-body text-xl font-bold">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6 bg-white border-t-4 border-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-7xl font-pop-head text-[#FF0050] text-stroke drop-shadow-[4px_4px_0px_#000] rotate-1 inline-block">STEAL THIS!</h2>
                        <p className="font-pop-body text-2xl mt-4 font-bold bg-[#FFF200] inline-block px-4 border-2 border-black transform -rotate-1">Pricing so good it feels criminal!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {[
                            { name: 'HERO', price: '$9', color: '#00FFFF', hot: false },
                            { name: 'SUPER', price: '$29', color: '#FF0050', hot: true },
                            { name: 'LEGEND', price: '$99', color: '#FFF200', hot: false }
                        ].map((plan, i) => (
                            <div key={i} className={`relative border-4 border-black p-8 bg-white ${plan.hot ? 'transform scale-110 z-10 comic-shadow-lg' : 'comic-shadow'}`}>
                                {plan.hot && (
                                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FFF200] burst-shape border-4 border-black flex items-center justify-center z-20">
                                        <span className="font-pop-head text-2xl rotate-12">HOT!</span>
                                    </div>
                                )}

                                <div className="absolute top-0 left-0 w-full h-4 border-b-4 border-black" style={{ backgroundColor: plan.color }}></div>

                                <h3 className="text-5xl font-pop-head mt-4 mb-2">{plan.name}</h3>
                                <div className="text-6xl font-pop-head mb-8" style={{ color: plan.color, textShadow: '2px 2px 0 #000' }}>{plan.price}</div>

                                <ul className="space-y-4 mb-8">
                                    {[1, 2, 3].map((_, j) => (
                                        <li key={j} className="flex items-center gap-3 font-pop-sub text-lg">
                                            <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-sm">
                                                <Check size={16} strokeWidth={4} />
                                            </div>
                                            Feature #{j + 1}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 font-pop-head text-2xl border-4 border-black hover:bg-black hover:text-white transition-colors ${plan.hot ? 'bg-[#FF0050] text-white' : 'bg-[#E0E0E0]'}`}>
                                    BUY NOW!
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#FF69B4] border-t-4 border-black border-b-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-5xl font-pop-head text-white text-stroke drop-shadow-[3px_3px_0px_#000] text-center mb-12">
                        QUESTIONS?
                    </h2>

                    <div className="space-y-6">
                        {[{ q: 'IS THIS RETRO?', a: 'Based on 1960s Roy Lichtenstein aesthetic!' },
                        { q: 'CAN I CHANGE COLORS?', a: 'Colors are just CSS variables! Go wild!' },
                        { q: 'IS IT RESPONSIVE?', a: 'Looks great on any device size!' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border-4 border-black comic-shadow">
                                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-pop-head text-2xl tracking-wide">{item.q}</span>
                                    <div className={`bg-black text-white p-1 border-2 border-black transform transition-transform ${expandedFaq === i ? 'rotate-180 bg-[#FFF200] text-black' : ''}`}>
                                        <ChevronDown size={24} strokeWidth={3} />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-6 pt-0 font-pop-body text-xl font-bold border-t-4 border-black bg-[#E0FFFF]">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-[#000] pattern-zigzag">
                <style>{`.pattern-zigzag { background-image: linear-gradient(135deg, #222 25%, transparent 25%), linear-gradient(225deg, #222 25%, transparent 25%), linear-gradient(45deg, #222 25%, transparent 25%), linear-gradient(315deg, #222 25%, transparent 25%); background-position:  20px 0, 20px 0, 0 0, 0 0; background-size: 40px 40px; background-repeat: repeat; }`}</style>
                <div className="max-w-4xl mx-auto text-center border-4 border-white p-12 bg-[#FF0050] comic-shadow-lg transform rotate-1">
                    <div className="inline-block bg-[#FFF200] border-4 border-black p-4 rounded-full mb-8 animate-spin-slow">
                        <Star size={48} fill="black" />
                    </div>
                    <h2 className="text-6xl md:text-8xl font-pop-head text-white text-stroke drop-shadow-[5px_5px_0px_#000] mb-8">DON'T MISS OUT!</h2>
                    <button className="px-16 py-6 bg-[#00FFFF] text-black font-pop-head text-4xl border-4 border-black tracking-widest hover:scale-105 transition-transform shadow-[8px_8px_0px_#FFF]">
                        JOIN THE CLUB!
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t-4 border-black py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-black rounded-full"></div>
                        <span className="text-3xl font-pop-head">POP! UI</span>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="font-pop-sub text-xl hover:text-[#FF0050] bg-black text-white px-3 py-1 transform -rotate-2 hover:rotate-0 transition-transform">TWITTER</a>
                        <a href="#" className="font-pop-sub text-xl hover:text-[#00A0E9] bg-black text-white px-3 py-1 transform rotate-2 hover:rotate-0 transition-transform">INSTA</a>
                    </div>

                    <div className="font-pop-body font-bold text-lg border-2 border-black px-4 py-1 bg-[#E0E0E0]">
                        &copy; 2025 POP ART INC.
                    </div>
                </div>
            </footer>
        </div>
    );
};
