import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Square, Minus, Circle, Triangle, Star, Box, Zap, Eye, Smile, MousePointer } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S90BrutalistColorPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen bg-[#FFFDF5] text-black font-mono selection:bg-black selection:text-[#FFFDF5] overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
                
                .font-mega { font-family: 'Archivo Black', sans-serif; }
                .font-mono { font-family: 'Space Mono', monospace; }
                
                .neo-shadow {
                    box-shadow: 6px 6px 0px 0px #000000;
                    transition: all 0.2s ease-in-out;
                }
                
                .neo-shadow:hover {
                    transform: translate(-4px, -4px);
                    box-shadow: 10px 10px 0px 0px #000000;
                }
                
                .neo-shadow:active {
                    transform: translate(2px, 2px);
                    box-shadow: 4px 4px 0px 0px #000000;
                }
                
                .no-shadow:hover {
                    box-shadow: none;
                }

                .marquee-container {
                    overflow: hidden;
                    white-space: nowrap;
                    position: relative;
                }
                
                .marquee-content {
                    display: inline-block;
                    animation: marquee 20s linear infinite;
                }
                
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                
                .checker-pattern {
                    background-image: 
                        linear-gradient(45deg, #000 25%, transparent 25%), 
                        linear-gradient(-45deg, #000 25%, transparent 25%), 
                        linear-gradient(45deg, transparent 75%, #000 75%), 
                        linear-gradient(-45deg, transparent 75%, #000 75%);
                    background-size: 20px 20px;
                    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
                }
            `}</style>

            {/* Top Marquee */}
            <div className="bg-black text-[#FFFDF5] py-3 text-lg font-bold font-mono border-b-4 border-black marquee-container overflow-hidden">
                <div className="marquee-content">
                    <span className="mx-4">★ RAW AESTHETICS</span>
                    <span className="mx-4">★ BOLD COLORS</span>
                    <span className="mx-4">★ NO COMPROMISE</span>
                    <span className="mx-4">★ HIGH CONTRAST</span>
                    <span className="mx-4">★ RAW AESTHETICS</span>
                    <span className="mx-4">★ BOLD COLORS</span>
                    <span className="mx-4">★ NO COMPROMISE</span>
                    <span className="mx-4">★ HIGH CONTRAST</span>
                </div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#FFFDF5] border-b-4 border-black">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-[#FF3333] border-4 border-black p-2 neo-shadow transform -rotate-2">
                        <Square size={24} className="text-black fill-black" />
                        <span className="text-xl font-mega tracking-tight uppercase">BRUTAL.</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['WORK', 'SHOP', 'SAY HI'].map((item) => (
                                <a key={item} href="#" className="text-lg font-bold font-mono uppercase hover:bg-[#FFD700] hover:text-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-3 bg-[#3366FF] text-white font-bold font-mono border-4 border-black neo-shadow uppercase">
                                START PROJECT
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border-4 border-black bg-[#FFD700] hover:bg-[#FFE033] neo-shadow">
                            {menuOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-20 left-0 w-full bg-[#FFFDF5] border-b-4 border-black p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200 z-50">
                        {['WORK', 'SHOP', 'SAY HI'].map((item) => (
                            <a key={item} href="#" className="text-2xl font-black font-mono border-4 border-black bg-white p-4 hover:bg-[#FFD700] neo-shadow text-center">
                                {item}
                            </a>
                        ))}
                        <button className="w-full mt-2 py-4 bg-[#3366FF] text-white font-bold font-mono border-4 border-black neo-shadow uppercase">
                            START PROJECT
                        </button>
                    </div>
                )}
            </header>

            <main className="font-mono">
                {/* Hero Section */}
                <section className="min-h-[85vh] flex items-center border-b-4 border-black bg-[#FFFDF5] relative overflow-hidden px-6 py-20">
                    <div className="absolute top-20 right-20 w-32 h-32 bg-[#FFD700] rounded-full border-4 border-black neo-shadow animate-bounce-slow hidden lg:block"></div>
                    <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#FF3333] rotate-45 border-4 border-black neo-shadow hidden lg:block"></div>

                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="inline-block bg-black text-white px-4 py-2 font-bold mb-6 transform -rotate-1 border-4 border-transparent hover:border-[#FF3333] transition-colors">
                                EST. 2025
                            </div>

                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-mega leading-[0.85] mb-8 bg-[#FFFDF5] relative z-10 mix-blend-hard-light uppercase">
                                Make it <br />
                                <span className="text-transparent" style={{ WebkitTextStroke: '4px black' }}>POP.</span>
                            </h1>

                            <p className="text-xl md:text-2xl font-bold mb-10 max-w-lg leading-relaxed bg-white border-4 border-black p-6 neo-shadow rotate-1">
                                Unapologetic design. High contrast. Zero minimalist nonsense. We build loud things for loud people.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="px-10 py-5 bg-[#FFD700] text-black text-xl font-bold border-4 border-black neo-shadow flex items-center justify-center gap-3 group">
                                    GET STARTED <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-10 py-5 bg-white text-black text-xl font-bold border-4 border-black neo-shadow hover:bg-gray-100">
                                    VIEW MANIFESTO
                                </button>
                            </div>
                        </div>

                        <div className="relative border-4 border-black bg-white p-2 neo-shadow rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div className="aspect-square bg-[#3366FF] relative overflow-hidden border-2 border-black">
                                <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000" alt="Pop Art" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300" />
                                <div className="absolute inset-0 bg-transparent hover:bg-black/10 transition-colors"></div>

                                <div className="absolute top-4 left-4 bg-white border-4 border-black px-3 py-1 font-bold transform -rotate-3 text-sm">
                                    NEW DROP
                                </div>

                                <div className="absolute bottom-4 right-4 bg-[#FF3333] text-white border-4 border-black p-2 neo-shadow">
                                    <Zap size={32} fill="white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="grid lg:grid-cols-2 border-b-4 border-black">
                    <div className="border-b-4 lg:border-b-0 lg:border-r-4 border-black p-12 bg-[#FF3333] flex flex-col justify-center items-center text-center">
                        <Eye size={80} className="mb-6 animate-pulse" strokeWidth={2.5} />
                        <h2 className="text-4xl md:text-6xl font-mega mb-4 text-white" style={{ textShadow: '4px 4px 0 #000' }}>VISUAL</h2>
                        <p className="font-bold text-lg max-w-xs mx-auto border-4 border-black bg-white p-4 neo-shadow">
                            Eye-popping visuals that grab attention and don't let go.
                        </p>
                    </div>
                    <div className="p-12 bg-[#3366FF] flex flex-col justify-center items-center text-center">
                        <MousePointer size={80} className="mb-6" strokeWidth={2.5} />
                        <h2 className="text-4xl md:text-6xl font-mega mb-4 text-white" style={{ textShadow: '4px 4px 0 #000' }}>DIGITAL</h2>
                        <p className="font-bold text-lg max-w-xs mx-auto border-4 border-black bg-white p-4 neo-shadow">
                            Interactive experiences that break the internet (in a good way).
                        </p>
                    </div>
                </section>

                {/* Features Marquee */}
                <div className="bg-[#FFD700] border-b-4 border-black py-6 overflow-hidden">
                    <div className="marquee-content text-4xl font-mega">
                        <span className="mx-8">★ WE ARE LOUD ★</span>
                        <span className="mx-8 text-white" style={{ textShadow: '4px 4px 0 #000' }}>WE ARE BOLD</span>
                        <span className="mx-8">★ WE ARE BRUTAL ★</span>
                        <span className="mx-8 text-white" style={{ textShadow: '4px 4px 0 #000' }}>NO BORING DESIGN</span>
                        <span className="mx-8">★ EST 2025 ★</span>
                        <span className="mx-8 text-white" style={{ textShadow: '4px 4px 0 #000' }}>KEEP IT RAW</span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <section className="py-24 px-6 bg-[#E0E0E0] border-b-4 border-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="text-5xl md:text-6xl font-mega mb-4 uppercase">Pay Us Money</h2>
                            <p className="font-bold text-xl inline-block bg-white border-4 border-black px-4 py-2 transform rotate-2">
                                Choose your fighter.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 items-start">
                            {[
                                { name: "BASIC", price: "$99", color: "#FFFFFF", txt: "For Normies" },
                                { name: "PRO", price: "$199", color: "#FF3333", txt: "For Legends", highlight: true },
                                { name: "ULTRA", price: "$499", color: "#FFD700", txt: "For Gods" }
                            ].map((plan, i) => (
                                <div key={i} className={`border-4 border-black p-8 neo-shadow relative transition-transform hover:scale-105 ${plan.highlight ? 'z-10' : ''}`} style={{ backgroundColor: plan.color }}>
                                    {plan.highlight && (
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 font-bold uppercase transform -rotate-3 border-2 border-white shadow-[4px_4px_0_0_#000]">
                                            Most Wanted
                                        </div>
                                    )}

                                    <h3 className="text-3xl font-mega mb-2 uppercase">{plan.name}</h3>
                                    <div className="text-sm font-bold border-b-4 border-black pb-4 mb-4 uppercase tracking-widest">{plan.txt}</div>

                                    <div className="text-6xl font-black mb-8">{plan.price}</div>

                                    <ul className="space-y-3 mb-8 text-lg font-bold">
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-black flex items-center justify-center text-white"><Check size={16} strokeWidth={4} /></div>
                                            <span>Cool Stuff</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-black flex items-center justify-center text-white"><Check size={16} strokeWidth={4} /></div>
                                            <span>More Stuff</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-black flex items-center justify-center text-white"><Check size={16} strokeWidth={4} /></div>
                                            <span>Secret Items</span>
                                        </li>
                                    </ul>

                                    <button className="w-full py-4 bg-black text-white font-bold text-xl uppercase hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-all">
                                        BUY {plan.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ - Accordion */}
                <section className="py-24 px-6 bg-[#FFFDF5] border-b-4 border-black">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-mega mb-12 uppercase border-4 border-black p-4 inline-block bg-[#FFD700] neo-shadow">
                            Questions?
                        </h2>

                        <div className="space-y-4">
                            {[
                                { q: "Why is this so ugly?", a: "It's not ugly, it's Neo-Brutalism. Read a book." },
                                { q: "Can I change the colors?", a: "Yes, but why would you? These are perfect." },
                                { q: "Is it mobile responsive?", a: "Of course. We're not savages." }
                            ].map((faq, i) => (
                                <div key={i} className="border-4 border-black bg-white neo-shadow">
                                    <button
                                        className="w-full text-left p-6 flex justify-between items-center text-xl font-bold uppercase hover:bg-gray-50"
                                        onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                    >
                                        <span>{faq.q}</span>
                                        <div className={`border-4 border-black p-1 transition-transform ${expandedFaq === i ? 'bg-black text-white rotate-180' : 'bg-white text-black'}`}>
                                            <ChevronDown size={24} strokeWidth={3} />
                                        </div>
                                    </button>
                                    {expandedFaq === i && (
                                        <div className="p-6 pt-0 text-lg border-t-4 border-black bg-[#FF3333] text-white font-bold">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-black text-white py-20 px-6 font-mono">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-8xl font-mega mb-6 text-transparent" style={{ WebkitTextStroke: '2px white' }}>BRUT.</h2>
                            <div className="flex gap-4 mb-8">
                                {['INSTA', 'TWITTER', 'TIKTOK'].map(social => (
                                    <a key={social} href="#" className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black font-bold uppercase transition-colors">
                                        {social}
                                    </a>
                                ))}
                            </div>
                            <p className="text-lg font-bold">
                                © 2025 BRUTALIST INC. <br />
                                ALL RIGHTS RESERVED.
                            </p>
                        </div>

                        <div className="bg-white text-black p-8 border-4 border-transparent hover:border-[#FFD700] transition-colors neo-shadow transform rotate-1">
                            <h3 className="text-2xl font-black mb-4 uppercase">Join the cult</h3>
                            <div className="flex gap-2">
                                <input type="email" placeholder="YOUR EMAIL" className="flex-1 border-4 border-black p-4 font-bold uppercase placeholder:text-gray-400 focus:outline-none focus:bg-[#FFFDF5]" />
                                <button className="bg-[#FF3333] border-4 border-black p-4 font-bold text-white hover:bg-black uppercase">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};
