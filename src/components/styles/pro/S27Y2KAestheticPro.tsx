import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Star, Heart, Sparkles, Disc, Zap, Globe, Cpu, Radio, Shield } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S27Y2KAestheticPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const spacing = responsive.spacing;

    const colors = {
        bg: '#000000',
        surface: '#111111',
        text: '#E0E0E0',
        muted: '#A0A0A0',
        pink: '#FF00CC',
        cyan: '#00FFFF',
        lime: '#39FF14',
        silver: '#C0C0C0'
    };

    // Chrome gradient - Enhanced for more metallic look
    const gradient = `linear-gradient(180deg, #FFFFFF 0%, #E0E0E0 30%, #A0A0A0 49%, #FFFFFF 50%, #C0C0C0 51%, #808080 100%)`;
    const neonGradient = `linear-gradient(90deg, ${colors.pink}, ${colors.cyan}, ${colors.lime})`;

    return (
        <div className="min-h-screen relative overflow-x-hidden font-mono tracking-wider"
            style={{ backgroundColor: colors.bg, color: colors.text }}>

            {/* Global Glitch Styles & Animations */}
            <style>{`
                @keyframes scanline {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .y2k-text-shadow {
                    text-shadow: 2px 2px 0px ${colors.pink}, -2px -2px 0px ${colors.cyan};
                }
                .y2k-box-shadow {
                    box-shadow: 4px 4px 0px ${colors.pink}, -4px -4px 0px ${colors.cyan};
                }
                .scanline-overlay {
                    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 51%);
                    background-size: 100% 4px;
                    pointer-events: none;
                }
                .glitch-text {
                    position: relative;
                }
                .glitch-text::before,
                .glitch-text::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                .glitch-text::before {
                    left: 2px;
                    text-shadow: -1px 0 #ff00c1;
                    clip: rect(44px, 450px, 56px, 0);
                    animation: glitch-anim 5s infinite linear alternate-reverse;
                }
                .glitch-text::after {
                    left: -2px;
                    text-shadow: -1px 0 #00fff9;
                    clip: rect(44px, 450px, 56px, 0);
                    animation: glitch-anim2 5s infinite linear alternate-reverse;
                }
                @keyframes glitch-anim {
                    0% { clip: rect(31px, 9999px, 94px, 0); }
                    4.166666667% { clip: rect(91px, 9999px, 43px, 0); }
                    8.333333333% { clip: rect(6px, 9999px, 83px, 0); }
                    12.5% { clip: rect(13px, 9999px, 94px, 0); }
                    16.66666667% { clip: rect(76px, 9999px, 3px, 0); }
                    20.83333333% { clip: rect(67px, 9999px, 57px, 0); }
                    25% { clip: rect(2px, 9999px, 25px, 0); }
                    100% { clip: rect(66px, 9999px, 3px, 0); }
                }
                @keyframes glitch-anim2 {
                    0% { clip: rect(65px, 9999px, 100px, 0); }
                    100% { clip: rect(43px, 9999px, 93px, 0); }
                }
            `}</style>

            {/* CRT Scanline Overlay */}
            <div className="fixed inset-0 z-[100] opacity-10 pointer-events-none scanline-overlay"></div>

            {/* Scrolling Marquee Header */}
            <div className="bg-blue-900 border-b border-blue-500 overflow-hidden py-1">
                <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex items-center gap-8 text-xs font-bold text-cyan-300">
                    {[...Array(10)].map((_, i) => (
                        <span key={i}>★ SYSTEM ONLINE ★ WELCOME TO THE YEAR 3000 ★ CYBERSPACE CONNECTED ★</span>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-md border-b-2 border-white/20 bg-black/80">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-400 to-gray-800 opacity-100 group-hover:opacity-80 transition-opacity" />
                            <Globe size={20} className="relative z-10 text-black group-hover:animate-spin" />
                        </div>
                        <span className="text-2xl font-black italic y2k-text-shadow tracking-tighter">CYBER<span style={{ color: colors.lime }}>ZONE</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['HOME', 'PROJECTS', 'LOGS'].map((item) => (
                                <span key={item} className="text-sm font-bold cursor-pointer hover:text-cyan-400 hover:underline decoration-wavy underline-offset-4 transition-all">
                                    [{item}]
                                </span>
                            ))}
                            <button className="px-6 py-2 rounded-none font-bold text-black transform hover:translate-x-1 hover:-translate-y-1 transition-transform border-2 border-white"
                                style={{ background: gradient }}>
                                ENTER_NET
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border border-white/50 text-white hover:bg-white/20">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="border-t-2 border-white/20 bg-black p-6">
                        {['HOME', 'PROJECTS', 'LOGS'].map((item) => (
                            <div key={item} className="py-3 font-bold border-b border-gray-800 hover:text-cyan-400 cursor-pointer">
                                {'>'} {item}
                            </div>
                        ))}
                        <button className="w-full mt-6 py-3 font-bold text-black border-2 border-white active:scale-95" style={{ background: gradient }}>
                            CONNECT
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 px-6 relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(${colors.cyan} 1px, transparent 1px), linear-gradient(90deg, ${colors.cyan} 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)'
                    }}
                />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-block mb-8 px-4 py-1 border border-cyan-500 bg-cyan-900/30 rounded text-cyan-300 text-xs font-bold tracking-[0.2em] animate-pulse">
                        ● SYSTEM_READY_V2.0
                    </div>

                    <h1 className="mb-6 text-5xl md:text-8xl font-black italic tracking-tighter" style={{ textShadow: `4px 4px 0px ${colors.surface}, 6px 6px 0px ${colors.pink}` }}>
                        WELCOME TO <br />
                        <span className="text-transparent bg-clip-text glitch-text" data-text="THE FUTURE" style={{ backgroundImage: neonGradient }}>THE FUTURE</span>
                    </h1>

                    <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-gray-400 font-medium">
                        Experience the raw energy of the early web. <br />
                        <span style={{ color: colors.lime }}>&lt;No_Limits /&gt;</span> <span style={{ color: colors.cyan }}>&lt;Pure_Data /&gt;</span>
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="px-10 py-4 font-black text-black border-2 border-white hover:invert transition-all box-border y2k-box-shadow transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                            style={{ background: gradient }}>
                            INITIALIZE_
                        </button>

                        <button className="px-10 py-4 font-black border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors box-border shadow-[0_0_15px_rgba(255,0,204,0.5)]">
                            READ_DOCS
                        </button>
                    </div>

                    {/* Fake Browser Window */}
                    <div className="mt-20 border-2 border-gray-600 bg-gray-900 rounded-t-lg max-w-4xl mx-auto shadow-[0_0_50px_rgba(0,255,255,0.1)]">
                        <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700 rounded-t-lg">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 bg-black ml-4 px-3 py-1 text-xs text-green-400 font-mono rounded">
                                https://www.thefuture.com/v1
                            </div>
                        </div>
                        <div className="p-8 grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Cpu, label: "PROCESSING", val: "100%" },
                                { icon: Disc, label: "STORAGE", val: "10 TB" },
                                { icon: Radio, label: "SIGNAL", val: "5G+" }
                            ].map((s, i) => (
                                <div key={i} className="border border-gray-700 p-6 bg-black flex flex-col items-center gap-4 hover:border-cyan-500 transition-colors group">
                                    <s.icon size={32} className="text-gray-500 group-hover:text-cyan-400 group-hover:animate-bounce" />
                                    <div className="text-xl font-bold">{s.label}</div>
                                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                                        {s.val}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Cyber Modules) */}
            <section className="py-20 px-6 bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-4xl font-black italic mb-16 tracking-tight">
                        <span className="text-pink-500 mr-2">///</span>
                        MODULES
                        <span className="text-cyan-500 ml-2">///</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'CHROME UI', icon: Star, desc: 'Reflective surfaces and metallic finishes.' },
                            { title: 'NEON GLOW', icon: Zap, desc: 'High contrast lighting effects.' },
                            { title: 'GLITCH FX', icon: Sparkles, desc: 'Controlled data corruption visuals.' }
                        ].map((item, idx) => (
                            <div key={idx} className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 transform translate-x-2 translate-y-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                                <div className="relative border-2 border-white bg-black p-8 h-full transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                                    <div className="mb-6 inline-block p-3 border border-white/30 rounded-full">
                                        <item.icon size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-3 italic">{item.title}</h3>
                                    <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                                    <div className="mt-6 flex gap-1">
                                        {[...Array(5)].map((_, i) => <div key={i} className={`h-1 w-4 ${i < 3 ? 'bg-cyan-500' : 'bg-gray-800'}`} />)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials (Cyber Logs) */}
            <section className="py-20 px-6 relative">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Cpu size={200} className="text-white" strokeWidth={0.5} />
                </div>

                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-4xl font-black italic mb-16 underline decoration-pink-500 decoration-wavy underline-offset-8">
                        USER_LOGS
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { user: "NEO_ANDERSON", msg: "This interface allows me to see the code behind the world. Absolutely unreal." },
                            { user: "TRINITY_X", msg: "Fast, responsive, and completely retro-cool. The perfect Y2K aesthetic." },
                            { user: "CYPHER_99", msg: "I don't even see the code anymore. I just see blonde, brunette, redhead..." },
                            { user: "MORPH_US", msg: "Stop trying to hit me and hit me! This design hits hard." }
                        ].map((log, i) => (
                            <div key={i} className="border border-green-500/30 bg-green-900/10 p-6 backdrop-blur-sm relative overflow-hidden font-mono text-sm">
                                <div className="flex justify-between items-center mb-4 border-b border-green-500/30 pb-2">
                                    <span className="text-green-400 font-bold">&gt; USER: {log.user}</span>
                                    <span className="text-green-600 text-xs">ID: #{Math.floor(Math.random() * 9999)}</span>
                                </div>
                                <p className="text-green-300 leading-relaxed mb-4">"{log.msg}"</p>
                                <div className="flex items-center gap-2 text-xs text-green-700">
                                    <div className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></div>
                                    CONNECTION_SECURE
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="py-20 px-6 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-5xl font-black italic mb-20 tracking-tighter">
                        SELECT <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">ACCESS LEVEL</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        {[
                            { name: 'NOVICE', price: '0', color: '#000000', feats: ['Basic Access', 'Read Only', '500MB Storage'] },
                            { name: 'HACKER', price: '49', color: colors.pink, feats: ['Full Access', 'Write Permissions', 'Unlimited Storage', 'Root Access'] },
                            { name: 'ELITE', price: '99', color: colors.cyan, feats: ['God Mode', 'V.I.P Server', 'Hardware Key', '24/7 Support'] },
                        ].map((plan, i) => {
                            const isHacker = plan.name === 'HACKER';
                            return (
                                <div key={i} className={`relative p-8 border-4 border-black ${isHacker ? 'bg-black text-white scale-110 shadow-[20px_20px_0px_#FF00CC]' : 'bg-gray-100 shadow-[10px_10px_0px_#000000]'}`}>
                                    {isHacker && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black px-4 py-1 font-bold border-2 border-black rotate-3">
                                            BEST_VALUE
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-black italic mb-2">{plan.name}</h3>
                                    <div className="text-6xl font-black mb-8 tracker-thinner">${plan.price}</div>

                                    <ul className="space-y-3 mb-8 font-bold text-sm">
                                        {plan.feats.map(f => (
                                            <li key={f} className="flex items-center gap-3">
                                                <div className={`w-4 h-4 border-2 ${isHacker ? 'border-white bg-pink-500' : 'border-black bg-cyan-400'}`}></div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 font-black border-2 ${isHacker ? 'bg-white text-black border-white hover:bg-gray-200' : 'bg-black text-white border-black hover:bg-gray-800'} transition-colors`}>
                                        PURCHASE_
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 bg-black text-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-4xl font-black italic mb-16">
                        <span className="bg-white text-black px-2">FAQ</span>_DATABASE
                    </h2>

                    <div className="space-y-4">
                        {[
                            { q: 'What is Y2K aesthetic?', a: 'Y2K aesthetic draws from late 90s/early 2000s futurism with chrome, metallic gradients, and cyber elements.' },
                            { q: 'Are the effects animated?', a: 'Yes! All holographic and chrome effects include smooth CSS animations.' },
                            { q: 'Browser compatibility?', a: 'Works on all modern browsers (Chrome, Firefox, Safari) with graceful fallbacks for Internet Explorer 6.' }
                        ].map((item, i) => (
                            <div key={i} className="border-2 border-gray-700 bg-gray-900/50">
                                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold font-mono text-lg text-cyan-400">&gt; {item.q}</span>
                                    <ChevronDown size={24} className={`transform transition-transform ${expandedFaq === i ? 'rotate-180 text-pink-500' : 'text-gray-500'}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-6 pt-0 text-gray-400 font-mono border-t border-gray-800">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-4 border-white bg-neutral-900 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
                    <div className="flex items-center gap-2 mb-4 animate-bounce">
                        <Star size={32} fill={colors.lime} className="text-black" />
                        <Star size={32} fill={colors.pink} className="text-black" />
                        <Star size={32} fill={colors.cyan} className="text-black" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm font-bold text-gray-500">
                        {['SITEMAP', 'LEGAL', 'CONTACT', 'CREDITS'].map(l => (
                            <a key={l} href="#" className="hover:text-white hover:underline decoration-wavy underline-offset-4">{l}</a>
                        ))}
                    </div>

                    <p className="font-mono text-xs text-gray-600 mt-8">
                        © 1999-2025 CYBER_CORP. ALL RIGHTS RESERVED. <br />
                        DESIGNED IN CYBERSPACE.
                    </p>
                </div>
            </footer>
        </div>
    );
};
