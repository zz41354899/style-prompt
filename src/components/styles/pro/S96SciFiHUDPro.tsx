import React, { useState, useEffect } from 'react';
import {
    Crosshair,
    Target,
    Shield,
    Cpu,
    Wifi,
    Zap,
    Globe,
    Menu,
    X,
    ChevronRight,
    Maximize2,
    Minimize2,
    Radar
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S96SciFiHUDPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';
    const isTablet = deviceMode === 'tablet';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(r => (r + 1) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#050B14] text-[#00F0FF] font-mono selection:bg-[#00F0FF] selection:text-black overflow-x-hidden relative">
            {/* 
        SCI-FI HUD PRO THEME (FUI)
        - Background: Deep Space Blue/Black #050B14
        - Primary: Cyan/Electric Blue #00F0FF
        - Secondary: Orange/Tech #FFA500
        - Aesthetic: Thin lines, Circles, Reticles, Transparency
      */}

            {/* Grid Background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            ></div>

            {/* Vignette */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,11,20,0.8)_80%)]"></div>

            {/* HEADER */}
            <nav className="sticky top-0 z-50 bg-[#050B14]/80 backdrop-blur border-b border-[#00F0FF]/30">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 border border-[#00F0FF] rounded-full flex items-center justify-center animate-spin-slow" style={{ animationDuration: '10s' }}>
                            <div className="absolute inset-1 border border-[#00F0FF]/50 rounded-full border-t-transparent animate-spin"></div>
                            <Target size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-[0.2em] leading-none">STARK</span>
                            <span className="text-[10px] text-[#00F0FF]/60 tracking-widest leading-none">INDUSTRIES</span>
                        </div>
                    </div>

                    {!isMobile && !isTablet && (
                        <div className="flex items-center gap-10 text-xs font-bold tracking-widest">
                            {['ARMOR', 'DEFENSE', 'ENERGY', 'VISION'].map((item, i) => (
                                <a key={item} href="#" className="relative group hover:text-white transition-colors">
                                    <span className="mr-2 opacity-50 text-[10px]">0{i + 1}</span>
                                    {item}
                                    <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#00F0FF] group-hover:w-full transition-all duration-300"></div>
                                </a>
                            ))}
                            <button className="px-6 py-2 border border-[#00F0FF] hover:bg-[#00F0FF] hover:text-black transition-all clip-path-slant flex items-center gap-2">
                                INITIATE <ChevronRight size={14} />
                            </button>
                        </div>
                    )}

                    {(isMobile || isTablet) && (
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>
            </nav>

            <main className="relative z-10 text-center md:text-left">
                {/* HERO */}
                <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center relative px-6 py-20">
                    {/* Spinning HUD rings behind text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20 hidden md:block">
                        <div className="absolute inset-0 border border-[#00F0FF] rounded-full opacity-30 animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute inset-10 border border-dashed border-[#00F0FF] rounded-full opacity-30 animate-[spin_15s_linear_infinite_reverse]"></div>
                        <div className="absolute inset-32 border-[20px] border-[#00F0FF]/10 rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8 relative z-20">
                        <div className="inline-flex items-center gap-4 border-l-4 border-[#00F0FF] pl-4 bg-gradient-to-r from-[#00F0FF]/10 to-transparent pr-8 py-2">
                            <span className="text-xs font-bold tracking-widest text-white">SYSTEM ONLINE</span>
                            <div className="h-2 w-2 bg-[#00F0FF] rounded-full animate-pulse"></div>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none uppercase">
                            Augmented <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-white to-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">Reality</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#00F0FF]/70 max-w-2xl mx-auto md:mx-0 leading-relaxed font-sans">
                            Next-generation field interface systems. Enhancing human capability through seamless digital integration.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-8">
                            <button className="relative px-8 py-4 bg-[#00F0FF]/10 border border-[#00F0FF] text-[#00F0FF] font-bold tracking-widest hover:bg-[#00F0FF] hover:text-black transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] group overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">DEPLOY SYSTEM <Zap size={16} /></span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                            <button className="px-8 py-4 border border-[#00F0FF]/30 text-[#00F0FF]/60 font-bold tracking-widest hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all">
                                DIAGNOSTICS
                            </button>
                        </div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-10 left-10 w-32 h-32 border-l border-t border-[#00F0FF]/50 hidden md:block"></div>
                    <div className="absolute top-10 right-10 w-32 h-32 border-r border-t border-[#00F0FF]/50 hidden md:block"></div>
                    <div className="absolute bottom-10 left-10 w-32 h-32 border-l border-b border-[#00F0FF]/50 hidden md:block"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 border-r border-b border-[#00F0FF]/50 hidden md:block"></div>
                </section>


                {/* DATA GRID */}
                <section className="py-24 px-6 border-y border-[#00F0FF]/20 bg-[#050B14]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-end justify-between mb-12 border-b border-[#00F0FF]/30 pb-4">
                            <div>
                                <h2 className="text-3xl font-bold uppercase tracking-widest">Tactical Stats</h2>
                                <p className="text-xs text-[#00F0FF]/50 mt-1">REAL-TIME TELEMETRY</p>
                            </div>
                            <div className="text-right hidden md:block">
                                <div className="text-2xl font-bold font-mono">T-MINUS 00:00:00</div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { label: "Armor Integrity", val: "100%", icon: Shield },
                                { label: "Power Output", val: "400GW", icon: Zap },
                                { label: "Network", val: "5G/SAT", icon: Wifi },
                                { label: "CPU Load", val: "12%", icon: Cpu },
                            ].map((stat, i) => (
                                <div key={i} className="bg-[#00F0FF]/5 border border-[#00F0FF]/20 p-6 relative group overflow-hidden hover:border-[#00F0FF] transition-colors">
                                    <div className="absolute top-0 right-0 p-2 opacity-50"><stat.icon size={20} /></div>
                                    <div className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">{stat.val}</div>
                                    <div className="text-[10px] font-bold tracking-widest opacity-60 uppercase">{stat.label}</div>
                                    {/* Corner */}
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[#00F0FF]"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* AR VISUALIZER (Simulated) */}
                <section className="py-32 px-6 relative">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #00F0FF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                    <div className="max-w-5xl mx-auto border border-[#00F0FF]/30 bg-[#00F0FF]/5 backdrop-blur-sm p-2 md:p-12 relative">
                        {/* HUD Overlay Elements */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className={`h-2 w-2 rounded-full ${i === 10 ? 'bg-[#ff0000]' : 'bg-[#00F0FF]/40'}`}></div>
                            ))}
                        </div>

                        <div className="absolute top-10 left-10 text-xs text-[#00F0FF]/60 font-mono hidden md:block">
                            CAM_01 [REC]<br />
                            ISO 800<br />
                            F/2.8
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-square border-2 border-[#00F0FF]/30 rounded-full flex items-center justify-center">
                                <div className="absolute inset-0 border border-dashed border-[#00F0FF]/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
                                <div className="w-2/3 h-2/3 border border-[#00F0FF]/50 rounded-full flex items-center justify-center relative">
                                    <Globe size={120} className="text-[#00F0FF] opacity-50 animate-pulse" />
                                    <div className="absolute inset-0 border-t-2 border-[#00F0FF] rounded-full animate-spin"></div>
                                </div>
                                <div className="absolute bottom-10 text-center">
                                    <div className="text-2xl font-bold">SCANNING</div>
                                    <div className="text-xs tracking-widest animate-pulse">SEARCHING FOR TARGETS...</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold uppercase">Target Acquisition</h2>
                                <p className="text-[#00F0FF]/70 leading-relaxed">
                                    Advanced computer vision algorithms identify threats in real-time.
                                    The Mark VII interface provides 360-degree situational awareness with micro-millimeter precision.
                                </p>
                                <ul className="space-y-3 font-mono text-sm">
                                    {['Thermal Imaging Layer', 'Night Vision Mode', 'Trajectory Calculation', 'Biometric Lock'].map(item => (
                                        <li key={item} className="flex items-center gap-3">
                                            <ChevronRight size={14} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-12 px-6 border-t border-[#00F0FF]/30 bg-[#020508] text-center md:text-left">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[#00F0FF]/50 text-xs tracking-widest">
                    <div className="flex flex-col gap-1">
                        <span className="text-white font-bold text-sm">STARK INDUSTRIES</span>
                        <span>MILITARY CONTRACTOR DIV.</span>
                    </div>
                    <div>
                        SYSTEM VERSION 14.0.2 [STABLE]
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">ENCRYPTED LOGIN</a>
                        <a href="#" className="hover:text-white">ACCESS REQUEST</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
