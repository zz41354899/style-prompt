import React, { useState } from 'react';
import {
    Zap,
    Moon,
    Smartphone,
    Battery,
    Maximize,
    Eye,
    ChevronDown,
    ArrowRight,
    Menu,
    X
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S92OLEDBlackPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';
    const isTablet = deviceMode === 'tablet';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-black">
            {/* 
        OLED BLACK THEME
        - Pure black (#000000) background
        - Neon accents: Cyan (#06b6d4), Magenta (#d946ef)
        - Glow effects using box-shadow and text-shadow
        - Minimalist, futuristic, high-tech
      */}

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
                            <Moon size={16} className="text-white fill-current" />
                        </div>
                        <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            ONYX<span className="text-cyan-500">.</span>
                        </span>
                    </div>

                    {!isMobile && !isTablet && (
                        <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
                            {['Features', 'Specs', 'Gallery', 'Reviews'].map((item) => (
                                <a key={item} href="#" className="hover:text-white transition-colors duration-300">
                                    {item}
                                </a>
                            ))}
                            <button className="px-5 py-2 rounded-full border border-white/20 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                                Pre-order
                            </button>
                        </div>
                    )}

                    {(isMobile || isTablet) && (
                        <button
                            className="text-gray-400"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>
            </nav>

            <main>
                {/* HERO */}
                <section className="relative pt-24 pb-32 px-6 overflow-hidden">
                    {/* Background Glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

                    <div className="max-w-6xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold tracking-wide uppercase mb-8">
                            <Zap size={12} className="fill-current" />
                            <span>Infinite Contrast Ratio</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
                            <span className="block text-white">True</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-black stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Black.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
                            Experience absolute darkness. The world's first true-black display technology
                            that turns pixels off completely for zero light emission.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
                                Experience Onyx
                            </button>
                            <button className="h-14 px-8 rounded-full bg-black border border-gray-700 text-white font-medium hover:border-white transition-all duration-300 flex items-center gap-2">
                                View Tech Specs <ChevronDown size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Abstract Phone visualization */}
                    <div className="mt-24 relative max-w-4xl mx-auto h-[400px] md:h-[600px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                        <div className="w-full h-full border border-white/10 rounded-t-[40px] bg-gradient-to-b from-[#111] to-black flex items-center justify-center overflow-hidden">
                            <div className="text-[200px] font-bold text-white/5 select-none">OLED</div>
                            {/* Floating elements */}
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-[40px]"></div>
                            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-[50px] opacity-70"></div>
                        </div>
                    </div>
                </section>


                {/* METRICS SECTION */}
                <section className="py-24 border-t border-white/5 bg-[#050505]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            {[
                                { val: "0", unit: "nits", label: "Black Level" },
                                { val: "1B", unit: "+", label: "Colors" },
                                { val: "120", unit: "Hz", label: "Refresh Rate" },
                                { val: "∞", unit: ":1", label: "Contrast" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                                        {stat.val}<span className="text-gray-600 text-2xl">{stat.unit}</span>
                                    </div>
                                    <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* FEATURE: BATTERY */}
                <section className="py-32 px-6 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="w-full aspect-square border border-white/10 rounded-3xl bg-neutral-900/50 p-8 flex items-center justify-center relative backdrop-blur-sm">
                                {/* Simulated "Dark Mode" battery saving */}
                                <div className="relative w-48 h-80 bg-black border-4 border-gray-800 rounded-[2rem] p-4 flex flex-col justify-between shadow-2xl">
                                    <div className="flex justify-between text-gray-500 text-xs">
                                        <span>10:30</span>
                                        <Battery size={14} className="text-green-500" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-2 w-12 bg-gray-800 rounded"></div>
                                        <div className="h-2 w-20 bg-gray-800 rounded"></div>
                                    </div>
                                </div>

                                {/* Glow indicating power */}
                                <div className="absolute inset-0 bg-green-500/10 rounded-3xl animate-pulse"></div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 space-y-6">
                            <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center text-green-400 mb-4">
                                <Battery size={24} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold">Pixels that turn off. <br />Power that stays on.</h2>
                            <p className="text-xl text-gray-400">
                                OLED technology doesn't just display black—it creates it by completely switching off individual pixels. This saves immense power when using Dark Mode.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Up to 40% battery savings in dark mode",
                                    "Cooler running device temperature",
                                    "Extended panel lifespan"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>


                {/* FEATURE: COLORS */}
                <section className="py-32 px-6 bg-gradient-to-b from-black to-[#050505]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold">Colors that scream.</h2>
                            <p className="text-xl text-gray-400">
                                Against a perfectly black canvas, colors appear more vibrant and lifelike than ever before. 100% DCI-P3 color gamut coverage.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Neon Cyan", color: "bg-cyan-500", glow: "shadow-[0_0_50px_rgba(6,182,212,0.4)]" },
                                { title: "Hot Magenta", color: "bg-fuchsia-500", glow: "shadow-[0_0_50px_rgba(217,70,239,0.4)]" },
                                { title: "Lime Shock", color: "bg-lime-500", glow: "shadow-[0_0_50px_rgba(132,204,22,0.4)]" },
                            ].map((card, i) => (
                                <div key={i} className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 bg-neutral-900/20">
                                    <div className={`absolute inset-0 ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`w-32 h-32 rounded-full ${card.color} ${card.glow} opacity-80 group-hover:scale-125 transition-transform duration-700`}></div>
                                    </div>
                                    <div className="absolute bottom-0 w-full p-8">
                                        <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                                        <p className="text-sm text-gray-500 mt-2">Extreme Saturation</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* CTA */}
                <section className="py-32 px-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-black"></div>
                    <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Ready to go dark?</h2>
                        <p className="text-xl text-gray-400">Join the OLED revolution. Once you see it, you can't go back.</p>
                        <button className="h-16 px-12 rounded-full bg-white text-black font-bold text-xl hover:bg-cyan-400 transition-colors shadow-lg">
                            Buy Onyx Pro — $999
                        </button>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="py-12 px-6 border-t border-white/5 text-gray-600 text-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Moon size={16} className="text-gray-500" />
                        <span className="font-bold text-gray-400">ONYX</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Support</a>
                    </div>
                    <div>
                        &copy; 2024 Onyx Display systems.
                    </div>
                </div>
            </footer>
        </div>
    );
}
