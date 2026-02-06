import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Boxes, Layers, Cuboid, Grip, Terminal, Eye, Zap, AlertTriangle } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S47Brutalist3DPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#F0F0F0] text-black selection:bg-[#CCFF00] selection:text-black">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

                .font-brutal-head { font-family: 'Syne', sans-serif; }
                .font-brutal-body { font-family: 'JetBrains Mono', monospace; }

                .brutal-border {
                    border: 4px solid #000;
                }
                
                .brutal-shadow {
                    box-shadow: 8px 8px 0px #000;
                    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                
                .brutal-shadow-hover:hover {
                    box-shadow: 12px 12px 0px #000;
                    transform: translate(-4px, -4px);
                }
                .brutal-shadow-hover:active {
                    box-shadow: 0px 0px 0px #000;
                    transform: translate(8px, 8px);
                }

                .brutal-bg-grid {
                    background-image: 
                        linear-gradient(#000 2px, transparent 2px),
                        linear-gradient(90deg, #000 2px, transparent 2px);
                    background-size: 50px 50px;
                    background-position: -2px -2px;
                }

                .marquee-container {
                    overflow: hidden;
                    white-space: nowrap;
                    background: #CCFF00;
                    border-bottom: 4px solid black;
                    padding: 8px 0;
                }
                
                .marquee-content {
                    display: inline-block;
                    animation: marquee 20s linear infinite;
                }
                
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .glitch-hover:hover {
                    animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
                }
                
                @keyframes glitch {
                    0% { transform: translate(0) }
                    20% { transform: translate(-2px, 2px) }
                    40% { transform: translate(-2px, -2px) }
                    60% { transform: translate(2px, 2px) }
                    80% { transform: translate(2px, -2px) }
                    100% { transform: translate(0) }
                }
            `}</style>

            {/* Top Marquee */}
            <div className="marquee-container sticky top-0 z-[60]">
                <div className="marquee-content font-brutal-body font-bold text-lg">
                    SYSTEM STATUS: ONLINE // BRUTALIST 3D ENGINE V4.0 // RAW DATA // NO COMPROMISE // SYSTEM STATUS: ONLINE // BRUTALIST 3D ENGINE V4.0 // RAW DATA // NO COMPROMISE //
                </div>
            </div>

            {/* Navbar */}
            <header className="sticky top-[48px] z-50 bg-white border-b-4 border-black">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-8 h-20">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-black text-[#CCFF00] flex items-center justify-center brutal-border border-[#CCFF00]">
                            <Boxes size={28} strokeWidth={2.5} />
                        </div>
                        <span className="text-3xl font-brutal-head font-extrabold tracking-tighter">BRUTAL<span className="italic text-[#0066FF]">.3D</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Components', 'Docs', 'About'].map((item) => (
                                <a key={item} href="#" className="font-brutal-body font-bold text-lg hover:bg-black hover:text-white px-2 transition-colors uppercase">
                                    {item}
                                </a>
                            ))}
                            <button className="px-8 py-3 bg-[#CCFF00] text-black font-brutal-body font-bold uppercase brutal-border brutal-shadow brutal-shadow-hover">
                                Initialize
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-[#CCFF00] brutal-border brutal-shadow active:translate-x-1 active:translate-y-1 active:shadow-none">{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full bg-white border-b-4 border-black p-6 z-50">
                        {['Components', 'Docs', 'About'].map((item) => (
                            <div key={item} className="py-4 font-brutal-head font-bold text-2xl border-b-4 border-black hover:bg-[#CCFF00] cursor-pointer pl-4 transition-colors uppercase flex items-center justify-between group">
                                {item} <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-black text-white font-brutal-body font-bold uppercase border-4 border-white hover:bg-[#CCFF00] hover:text-black hover:border-black transition-colors">
                            Initialize
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="min-h-[80vh] flex items-center border-b-4 border-black relative overflow-hidden">
                <div className="absolute inset-0 brutal-bg-grid opacity-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full py-20">
                    <div className="lg:col-span-7 flex flex-col justify-center z-10">
                        <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 font-brutal-body font-bold text-sm mb-6 w-fit brutal-shadow transform -rotate-1">
                            <AlertTriangle size={16} className="text-[#CCFF00]" />
                            <span>WARNING: EXTREME STYLE</span>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-brutal-head font-extrabold leading-[0.85] mb-8 tracking-tighter mix-blend-hard-light">
                            RAW<br />
                            <span className="text-white text-stroke-3 text-shadow-black">POWER</span><br />
                            GRID.
                        </h1>

                        <p className="text-xl md:text-2xl font-brutal-body font-medium mb-10 max-w-xl bg-white border-4 border-black p-6 brutal-shadow relative">
                            Web 1.0 aesthetics met with WebGL vibes. Default system fonts mixed with massive bold headers.
                            <span className="absolute -top-3 -right-3 w-6 h-6 bg-[#0066FF] border-2 border-black"></span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="px-10 py-5 bg-[#0066FF] text-white font-brutal-head font-bold text-xl uppercase brutal-border brutal-shadow brutal-shadow-hover flex items-center justify-center gap-3 decoration-wavy">
                                Start Building <Zap fill="#CCFF00" className="text-[#CCFF00]" />
                            </button>
                            <button className="px-10 py-5 bg-white text-black font-brutal-head font-bold text-xl uppercase brutal-border brutal-shadow brutal-shadow-hover underline decoration-4 decoration-[#CCFF00]">
                                Read The Docs
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative flex items-center justify-center">
                        {/* 3D Stack */}
                        <div className="relative w-64 h-80 perspective-1000">
                            <div className="absolute top-0 right-0 w-full h-64 bg-[#CCFF00] brutal-border box-shadow-[16px_16px_0px_#000] z-30 flex items-center justify-center glitch-hover cursor-pointer">
                                <Eye size={80} strokeWidth={1.5} />
                            </div>
                            <div className="absolute top-10 -right-10 w-full h-64 bg-white brutal-border z-20"></div>
                            <div className="absolute top-20 -right-20 w-full h-64 bg-black brutal-border z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="border-b-4 border-black bg-[#E6E6FA]">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black max-w-7xl mx-auto border-x-4 border-black">
                    {[
                        { title: "Defiant Types", icon: Terminal, desc: "System fonts that scream louder than serif." },
                        { title: "Hard Edges", icon: Cuboid, desc: "No border-radius allowed. Only sharp corners." },
                        { title: "High Contrast", icon: Eye, desc: "Black on white. White on black. Maximum legibility." }
                    ].map((f, i) => (
                        <div key={i} className="p-10 group hover:bg-[#CCFF00] transition-colors relative overflow-hidden">
                            <f.icon className="w-16 h-16 mb-6 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-4xl font-brutal-head font-bold mb-4 uppercase leading-none">{f.title}</h3>
                            <p className="font-brutal-body text-lg border-l-4 border-black pl-4">{f.desc}</p>
                            <div className="absolute top-4 right-4 text-4xl font-brutal-head font-black opacity-10">0{i + 1}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 px-6 bg-white border-b-4 border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 relative">
                        <h2 className="text-6xl md:text-8xl font-brutal-head font-black uppercase tracking-tighter text-outline-black text-transparent relative z-10">
                            PRICING
                        </h2>
                        <h2 className="text-6xl md:text-8xl font-brutal-head font-black uppercase tracking-tighter text-[#CCFF00] absolute top-2 left-1/2 -translate-x-1/2 z-0 hidden md:block">
                            PRICING
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 px-4">
                        {[
                            { name: 'Rookie', price: '0', bg: 'bg-white', btn: 'bg-black text-white hover:bg-[#CCFF00] hover:text-black' },
                            { name: 'Pro', price: '49', bg: 'bg-[#0066FF] text-white', btn: 'bg-[#CCFF00] text-black hover:bg-white', featured: true },
                            { name: 'Elite', price: '99', bg: 'bg-black text-white', btn: 'bg-white text-black hover:bg-[#CCFF00]' }
                        ].map((plan, i) => (
                            <div key={i} className={`brutal-border p-8 relative ${plan.bg} ${plan.featured ? 'shadow-[20px_20px_0px_#000] scale-105 z-10' : 'shadow-[12px_12px_0px_#000]'} transition-transform`}>
                                <h3 className="text-3xl font-brutal-head font-bold uppercase mb-2 border-b-4 border-current pb-2">{plan.name}</h3>
                                <div className="text-7xl font-brutal-head font-black mb-8">${plan.price}</div>

                                <ul className="space-y-4 mb-10 font-brutal-body font-bold text-sm">
                                    {['Raw Component Access', 'Unlimited Exports', 'Source Files', 'Premium Support'].slice(0, i + 2).map((item) => (
                                        <li key={item} className="flex items-center gap-4">
                                            <div className="w-5 h-5 flex-shrink-0 bg-current flex items-center justify-center text-[8px] overflow-hidden">
                                                <div className={`w-3 h-3 ${plan.featured || i === 2 ? 'bg-black' : 'bg-white'}`}></div>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 text-xl font-brutal-head font-bold uppercase brutal-border shadow-[4px_4px_0px_rgba(0,0,0,0.5)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all ${plan.btn}`}>
                                    Select Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#CCFF00] border-b-4 border-black relative">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-brutal-head font-black uppercase mb-12 flex items-center gap-4">
                        <span className="bg-black text-white px-4">FAQ</span> CENTER
                    </h2>

                    <div className="space-y-6">
                        {[{ q: 'Why is it so ugly?', a: 'It\'s not ugly, it\'s BRUTALIST. Function over form. Raw aesthetics.' },
                        { q: 'Can I use rounded corners?', a: 'NO. Sharp edges only. We don\'t do soft here.' },
                        { q: 'Is it accessible?', a: 'High contrast black and white ensures maximum readability for everyone.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white brutal-border brutal-shadow">
                                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-black hover:text-white transition-colors group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-brutal-head font-bold text-xl uppercase tracking-tight">{item.q}</span>
                                    <ChevronDown size={28} className={`transition-transform duration-200 ${expandedFaq === i ? 'rotate-180 text-[#CCFF00]' : ''}`} strokeWidth={3} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-6 font-brutal-body text-lg font-medium border-t-4 border-black bg-[#F0F0F0]">
                                        <span className="font-bold text-[#0066FF] mr-2">/ANSWER:</span>{item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-20 px-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCFF00] rounded-full filter blur-[100px] opacity-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="text-8xl font-brutal-head font-black mb-6 tracking-tighter text-[#CCFF00]">BRUTAL.</div>
                        <p className="font-brutal-body text-xl max-w-sm mb-10 border-l-4 border-white pl-6">
                            Constructed for the bold. <br />Designed for the brave.
                        </p>
                        <div className="flex gap-4">
                            {['Twitter', 'GitHub', 'Figma'].map((social) => (
                                <a key={social} href="#" className="px-4 py-2 border-2 border-white hover:bg-white hover:text-black font-brutal-body font-bold uppercase transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-end items-start lg:items-end">
                        <div className="grid grid-cols-2 gap-x-12 gap-y-4 font-brutal-head font-bold text-2xl uppercase mb-12">
                            <a href="#" className="hover:text-[#CCFF00] hover:underline decoration-4">License</a>
                            <a href="#" className="hover:text-[#CCFF00] hover:underline decoration-4">Changelog</a>
                            <a href="#" className="hover:text-[#CCFF00] hover:underline decoration-4">Support</a>
                            <a href="#" className="hover:text-[#CCFF00] hover:underline decoration-4">Contact</a>
                        </div>
                        <div className="font-brutal-body text-sm text-gray-500 uppercase tracking-widest">
                            © 2025 Brutal Design Systems Inc.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
