import { useState } from 'react';
import { Menu, X, ArrowRight, Star, Heart, Cloud, Zap, Triangle, Circle, Square, Hexagon, Play } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S46AbstractMemphisPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#FFF8E7] text-[#1D1D1D] selection:bg-[#FFE66D] selection:text-black">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

                .font-memphis-head { font-family: 'Righteous', cursive; }
                .font-memphis-body { font-family: 'Space Mono', monospace; }

                /* Patterns */
                .pattern-zigzag {
                    background-color: #ffffff;
                    opacity: 0.1;
                    background-image:  linear-gradient(135deg, #000000 25%, transparent 25%), linear-gradient(225deg, #000000 25%, transparent 25%), linear-gradient(45deg, #000000 25%, transparent 25%), linear-gradient(315deg, #000000 25%, transparent 25%);
                    background-position:  10px 0, 10px 0, 0 0, 0 0;
                    background-size: 20px 20px;
                    background-repeat: repeat;
                }

                .pattern-dots {
                    background-image: radial-gradient(#1D1D1D 20%, transparent 20%), radial-gradient(#1D1D1D 20%, transparent 20%);
                    background-color: transparent;
                    background-position: 0 0, 10px 10px;
                    background-size: 20px 20px;
                }
                
                .pattern-grid {
                    background-image: linear-gradient(#1D1D1D 1px, transparent 1px), linear-gradient(90deg, #1D1D1D 1px, transparent 1px);
                    background-size: 40px 40px;
                    opacity: 0.05;
                }

                /* Shapes and Decorations */
                .memphis-shadow {
                    box-shadow: 8px 8px 0px #1D1D1D;
                    transition: all 0.2s ease;
                }
                .memphis-shadow:hover {
                    transform: translate(-4px, -4px);
                    box-shadow: 12px 12px 0px #1D1D1D;
                }
                .memphis-shadow:active {
                    transform: translate(4px, 4px);
                    box-shadow: 4px 4px 0px #1D1D1D;
                }
                
                .squiggle-underline {
                    position: relative;
                }
                .squiggle-underline::after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    right: 0;
                    height: 6px;
                    background-image: url("data:image/svg+xml,%3Csvg width='20' height='6' viewBox='0 0 20 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6c2.5 0 2.5-6 5-6s2.5 6 5 6 2.5-6 5-6 2.5 6 5 6' fill='none' stroke='%23FF6B6B' stroke-width='2'/%3E%3C/svg%3E");
                    background-size: 20px 6px;
                }

                /* Floating Animation */
                .float-slow { animation: float 8s ease-in-out infinite; }
                .float-medium { animation: float 6s ease-in-out infinite; }
                .float-fast { animation: float 4s ease-in-out infinite; }
                
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(10px, -15px) rotate(5deg); }
                    66% { transform: translate(-5px, 10px) rotate(-3deg); }
                }
            `}</style>

            <div className="absolute inset-0 pattern-grid pointer-events-none fixed"></div>

            {/* Background elements */}
            <div className="absolute top-20 right-[-5%] w-64 h-64 bg-[#FFE66D] rounded-full mix-blend-multiply opacity-20 pointer-events-none blur-3xl"></div>
            <div className="absolute bottom-40 left-[-5%] w-80 h-80 bg-[#4ECDC4] rounded-full mix-blend-multiply opacity-20 pointer-events-none blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none overflow-hidden">
                <Triangle className="absolute top-[10%] left-[10%] text-[#FF6B6B] w-12 h-12 stroke-2 fill-none rotate-12 float-slow" />
                <Circle className="absolute top-[20%] right-[15%] text-[#4ECDC4] w-8 h-8 stroke-2 fill-none float-medium" />
                <Square className="absolute bottom-[15%] left-[20%] text-[#6C5CE7] w-10 h-10 stroke-2 fill-none rotate-45 float-fast" />
                <div className="absolute top-[40%] right-[5%] w-24 h-6 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSI2Ij48cGF0aCBkPSJNMCA2YzIuNSAwIDIuNS02IDUtNnMyLjUgNiA1IDYgMi41LTYgNS02IDIuNSA2IDUgNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkY2QjZCIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] opacity-50 rotate-90"></div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-4 border-black">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="relative w-10 h-10">
                            <div className="absolute inset-0 bg-[#FF6B6B] rounded-full translate-x-1 translate-y-1 border-2 border-black"></div>
                            <div className="absolute inset-0 bg-[#4ECDC4] rounded-r-full border-2 border-black group-hover:-translate-x-1 transition-transform"></div>
                        </div>
                        <span className="text-3xl font-memphis-head tracking-tighter transform -rotate-2">MEMPHIS<span className="text-[#FF6B6B]">.</span>PRO</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Philosophy', 'Gallery', 'Shop'].map((item) => (
                                <a key={item} href="#" className="font-memphis-body font-bold uppercase text-sm tracking-widest hover:text-[#6C5CE7] hover:underline decoration-wavy decoration-[#FF6B6B] decoration-2 underline-offset-4 transition-all">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-2 bg-[#FFE66D] border-2 border-black font-memphis-head text-black uppercase tracking-wide memphis-shadow rounded-sm text-lg transform hover:rotate-2">
                                Get Funky!
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border-2 border-black bg-white shadow-[4px_4px_0px_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="border-b-4 border-black bg-[#FFE66D] p-6 relative overflow-hidden">
                        <div className="absolute inset-0 pattern-dots opacity-10 pointer-events-none"></div>
                        {['Philosophy', 'Gallery', 'Shop'].map((item) => (
                            <div key={item} className="py-3 font-memphis-head text-2xl border-b-2 border-black mb-2 hover:pl-4 transition-all cursor-pointer">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-[#FF6B6B] text-white border-2 border-black font-memphis-head text-xl uppercase memphis-shadow">
                            Get Funky!
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10 flex flex-col items-start">
                        <div className="inline-block bg-[#4ECDC4] border-2 border-black px-6 py-2 transform -rotate-2 mb-8 shadow-[4px_4px_0_#000]">
                            <span className="font-memphis-body font-bold text-black uppercase tracking-wider text-xs">The 80s called. They want their style back.</span>
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-memphis-head leading-[0.9] mb-8 text-black drop-shadow-[4px_4px_0px_#FFF]">
                            BOLD.<br />
                            <span className="text-[#FF6B6B] squiggle-underline">ABSTRACT.</span><br />
                            <span className="text-[#6C5CE7] italic">WEIRD.</span>
                        </h1>

                        <p className="text-xl font-memphis-body mb-10 max-w-md leading-relaxed bg-white border-2 border-black p-6 shadow-[8px_8px_0px_#FFE66D] transform rotate-1">
                            Break the grid. Use too many colors. Embrace the chaos of postmodern web design.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <button className="px-8 py-4 bg-[#FF6B6B] text-white border-2 border-black font-memphis-head text-xl uppercase memphis-shadow flex items-center gap-2 rounded-full">
                                Start Creating <Zap size={24} fill="white" />
                            </button>
                            <button className="px-8 py-4 bg-white text-black border-2 border-black font-memphis-head text-xl uppercase shadow-[8px_8px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded-full">
                                View Gallery
                            </button>
                        </div>
                    </div>

                    {/* Abstract Composition */}
                    <div className="relative h-[600px] w-full hidden lg:block">
                        <div className="absolute top-10 right-10 w-64 h-80 bg-[#FFE66D] border-4 border-black rounded-t-full rounded-bl-full shadow-[16px_16px_0px_#000] flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full pattern-dots opacity-20 transform rotate-45"></div>
                        </div>

                        <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#6C5CE7] border-4 border-black transform rotate-12 shadow-[12px_12px_0px_#FF6B6B] z-10 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full border-4 border-black"></div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-12 bg-[#4ECDC4] border-4 border-black rotate-[-45deg] z-20"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-12 bg-[#FF6B6B] border-4 border-black rotate-[45deg] z-0"></div>

                        <div className="absolute top-20 left-40">
                            <Triangle size={64} className="text-black fill-none stroke-[3] float-slow" />
                        </div>
                        <div className="absolute bottom-40 right-40">
                            <Circle size={48} className="text-[#4ECDC4] fill-[#4ECDC4] stroke-[3] stroke-black float-medium" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Shapes) */}
            <section className="py-24 px-6 border-y-4 border-black bg-white relative">
                <div className="absolute top-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgMTBsMjAtMTAgMjAgMTBIMHoiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')] opacity-20"></div>

                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl lg:text-7xl font-memphis-head text-center mb-20">
                        <span className="bg-[#FFE66D] px-4 border-2 border-black shadow-[4px_4px_0_#000] inline-block transform -rotate-2">PLAYFUL</span> FEATURES
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
                        {[
                            { icon: Triangle, title: "Geometry", desc: "Start with basic shapes.", color: "bg-[#FF6B6B]", rotate: "rotate-2" },
                            { icon: Cloud, title: "Organic", desc: "Break the rigid grid.", color: "bg-[#4ECDC4]", rotate: "-rotate-1" },
                            { icon: Star, title: "Pop Art", desc: "Colors that scream.", color: "bg-[#6C5CE7]", rotate: "rotate-3" }
                        ].map((f, i) => (
                            <div key={i} className={`border-4 border-black bg-white p-8 relative shadow-[10px_10px_0px_#000] hover:shadow-[16px_16px_0px_#000] hover:-translate-y-2 transition-all transform ${f.rotate}`}>
                                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 ${f.color} rounded-full border-4 border-black flex items-center justify-center z-10`}>
                                    <f.icon className="text-white" size={32} strokeWidth={2.5} />
                                </div>
                                <div className="mt-8 text-center relative z-0">
                                    <div className="absolute inset-0 pattern-zigzag opacity-30 -z-10 transform scale-150"></div>
                                    <h3 className="text-3xl font-memphis-head mb-4 text-black">{f.title}</h3>
                                    <p className="font-memphis-body font-bold text-gray-500 leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6 bg-[#6C5CE7]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-memphis-head text-center mb-20 text-white drop-shadow-[4px_4px_0px_#000]">
                        PICK A <span className="text-[#FFE66D] underline decoration-wavy">PLAN</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                        {[
                            { name: 'Basic', price: '29', color: 'bg-[#FFE66D]', decor: 'rounded-tl-3xl' },
                            { name: 'Radical', price: '59', color: 'bg-[#FF6B6B] text-white', featured: true, decor: 'rounded-xl' },
                            { name: 'Totally', price: '99', color: 'bg-[#4ECDC4]', decor: 'rounded-br-3xl' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 border-4 border-black ${plan.color} ${plan.decor} ${plan.featured ? 'transform scale-110 shadow-[12px_12px_0px_#000] z-10 rotate-1' : 'shadow-[8px_8px_0px_rgba(0,0,0,0.5)] bg-[#FFF8E7]'} transition-transform hover:scale-[1.02]`}>
                                {plan.featured && (
                                    <div className="absolute -top-5 -right-5 w-20 h-20 bg-white border-4 border-black rounded-full flex items-center justify-center transform rotate-12 shadow-[4px_4px_0px_#000]">
                                        <Heart className="text-[#FF6B6B] fill-[#FF6B6B]" size={32} />
                                    </div>
                                )}
                                <h3 className={`text-2xl font-memphis-head border-b-2 border-black pb-4 mb-4 uppercase ${plan.featured ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
                                <div className="text-6xl font-memphis-head mb-6">${plan.price}</div>

                                <ul className={`space-y-3 mb-8 font-memphis-body text-sm font-bold ${plan.featured ? 'text-white' : 'text-gray-800'}`}>
                                    {['50 Shapes', 'Unlimited Downloads', 'Commercial License'].slice(0, i + 2).map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className={`w-4 h-4 border-2 border-black ${plan.featured ? 'bg-white' : 'bg-black'}`}></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 font-memphis-head text-xl uppercase border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] transition-all bg-white text-black`}>
                                    Select
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#FEFAF0]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-memphis-head text-center mb-16 border-b-4 border-[#FF6B6B] inline-block mx-auto px-10 pb-2">
                        QUESTIONS?
                    </h2>

                    <div className="space-y-6">
                        {[{ q: 'Is this style too loud?', a: 'SORRY, WE CAN\'T HEAR YOU OVER HOW AWESOME THIS LOOKS!' },
                        { q: 'Can I change the colors?', a: 'Absolutely. Every shape, squiggle, and dot is customizable via CSS variables.' },
                        { q: 'Is it mobile responsive?', a: 'Yes! The chaos rearranges itself perfectly for smaller screens.' }
                        ].map((item, i) => (
                            <div key={i} className="border-4 border-black bg-white shadow-[6px_6px_0px_#4ECDC4]">
                                <button className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FFE66D] transition-colors group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-memphis-head text-xl text-black group-hover:underline decoration-2">{item.q}</span>
                                    <div className={`w-8 h-8 flex items-center justify-center border-2 border-black rounded-full transition-transform ${expandedFaq === i ? 'bg-[#FF6B6B] rotate-45' : 'bg-white'}`}>
                                        <Play size={14} className={`transform ${expandedFaq === i ? '-rotate-45 text-white' : 'text-black'}`} fill="currentColor" />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-5 pt-0 font-memphis-body text-base text-gray-800 border-t-2 border-black mt-2 pt-4 bg-[#E0F7FA]">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white pt-20 pb-10 px-6 border-t-8 border-[#FF6B6B]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                    <div>
                        <div className="text-5xl font-memphis-head mb-4 text-[#FFE66D] tracking-tighter">MEMPHIS</div>
                        <p className="font-memphis-body text-gray-400 max-w-xs">
                            Not valid in all 50 states. Batteries not included. Side effects may include extreme radness.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 font-memphis-body font-bold text-sm uppercase tracking-widest">
                        <div className="flex flex-col gap-4">
                            <a href="#" className="hover:text-[#4ECDC4] hover:translate-x-2 transition-transform">Instagram</a>
                            <a href="#" className="hover:text-[#4ECDC4] hover:translate-x-2 transition-transform">Dribbble</a>
                            <a href="#" className="hover:text-[#4ECDC4] hover:translate-x-2 transition-transform">Behance</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="hover:text-[#FF6B6B] hover:translate-x-2 transition-transform">Privacy</a>
                            <a href="#" className="hover:text-[#FF6B6B] hover:translate-x-2 transition-transform">Terms</a>
                            <a href="#" className="hover:text-[#FF6B6B] hover:translate-x-2 transition-transform">Legal</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center font-memphis-body text-xs text-gray-600">
                    © 1982-2025 ALL RIGHTS RESERVED BY NO ONE.
                </div>
            </footer>
        </div>
    );
};
