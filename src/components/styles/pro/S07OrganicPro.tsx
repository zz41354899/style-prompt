import { useState } from 'react';
import {
    Zap, Globe, Shield, Activity, Cpu, Code, Server,
    ChevronDown, ArrowRight, Menu, X, Play, Music, Radio,
    Disc, Layers, Terminal
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S07OrganicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePlan, setActivePlan] = useState<'monthly' | 'lifetime'>('monthly');

    // Synthwave Design Tokens
    const theme = {
        colors: {
            bg: '#050510',
            primary: '#05d9e8', // Cyan
            secondary: '#ff2a6d', // Neon Pink
            tertiary: '#d23be7', // Purple
            grid: 'rgba(5, 217, 232, 0.1)',
            surface: 'rgba(255, 255, 255, 0.03)',
        }
    };

    return (
        <div
            className="min-h-screen relative overflow-hidden font-mono text-[#05d9e8] selection:bg-[#ff2a6d] selection:text-white"
            style={{ backgroundColor: theme.colors.bg }}
        >
            {/* Retro Grid Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(${theme.colors.grid} 1px, transparent 1px), linear-gradient(90deg, ${theme.colors.grid} 1px, transparent 1px)`,
                        backgroundSize: '4rem 4rem',
                        transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(1.5)',
                        transformOrigin: 'bottom',
                        opacity: 0.4
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-[#050510]" />

                {/* Sun/Moon Effect */}
                <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-t from-[#ff2a6d] to-[#d23be7] filter blur-[100px] opacity-20" />
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-[#05d9e8]/20 box-border">
                <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#05d9e8] blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="relative w-10 h-10 bg-[#050510] border border-[#05d9e8] flex items-center justify-center text-[#05d9e8]">
                                <Terminal size={20} />
                            </div>
                        </div>
                        <span className="text-2xl font-bold tracking-widest text-white uppercase" style={{ textShadow: '0 0 10px #05d9e8' }}>
                            SYNTH
                        </span>
                    </div>

                    {!isMobile && (
                        <div className="flex items-center gap-12 font-bold text-sm tracking-widest uppercase">
                            {['Grid', 'System', 'Protocol', 'Upgrade'].map(item => (
                                <a key={item} href="#" className="text-white/70 hover:text-[#ff2a6d] transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ff2a6d] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#ff2a6d]" />
                                </a>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center gap-6">
                        {!isMobile && (
                            <button className="px-8 py-3 bg-[#ff2a6d] text-white font-bold uppercase tracking-wider hover:bg-[#d23be7] transition-all shadow-[0_0_20px_rgba(255,42,109,0.4)] hover:shadow-[0_0_30px_rgba(210,59,231,0.6)] clip-path-polygon">
                                Initialize
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#05d9e8]">
                                {menuOpen ? <X /> : <Menu />}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="bg-[#050510] border-b border-[#05d9e8]/20 p-8 flex flex-col gap-6">
                        {['Grid', 'System', 'Protocol', 'Upgrade'].map(item => (
                            <a key={item} href="#" className="text-xl font-bold uppercase text-white hover:text-[#ff2a6d]">{item}</a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 pt-24 pb-32">
                <div className={`max-w-7xl mx-auto px-8 grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-20 items-center`}>
                    <div>
                        <div className="inline-flex items-center gap-2 text-[#ff2a6d] font-bold tracking-[0.2em] uppercase text-sm mb-6 border border-[#ff2a6d]/30 px-4 py-2 bg-[#ff2a6d]/5 shadow-[0_0_10px_rgba(255,42,109,0.2)]">
                            <span className="w-2 h-2 bg-[#ff2a6d] animate-pulse" />
                            System Online
                        </div>
                        <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-black italic uppercase leading-none mb-8 text-white skew-x-[-10deg]`}>
                            Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05d9e8] to-[#d23be7]" style={{ textShadow: '0 0 40px rgba(5, 217, 232, 0.4)' }}>Horizon</span> <br />
                            Awaits
                        </h1>
                        <p className="text-lg text-white/70 mb-12 max-w-md leading-relaxed font-light border-l-2 border-[#05d9e8] pl-6">
                            Enter the retro-future. Build scalable systems with a nostalgic touch. High performance meets neon aesthetics.
                        </p>
                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6`}>
                            <button className="px-8 py-4 bg-transparent border-2 border-[#05d9e8] text-[#05d9e8] font-bold uppercase tracking-widest hover:bg-[#05d9e8] hover:text-black transition-all shadow-[0_0_15px_rgba(5,217,232,0.3)] hover:shadow-[0_0_30px_rgba(5,217,232,0.6)]">
                                Start Engine
                            </button>
                            <button className="px-8 py-4 text-white font-bold uppercase tracking-widest flex items-center gap-3 group hover:text-[#ff2a6d] transition-colors">
                                <span className="bg-[#ff2a6d]/20 p-2 rounded group-hover:bg-[#ff2a6d] group-hover:text-white transition-all">
                                    <Play size={16} fill="currentColor" />
                                </span>
                                Demo Reel
                            </button>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#05d9e8] blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000" />
                        <div className="relative aspect-square border-2 border-[#05d9e8]/30 bg-[#050510]/50 backdrop-blur-sm p-2">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#05d9e8]" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#05d9e8]" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#05d9e8]" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#05d9e8]" />

                            <img
                                src="https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?q=80&w=2662&auto=format&fit=crop" // Retro synthwave car/landscape
                                alt="Cyberpunk City"
                                className="w-full h-full object-cover opacity-80 mix-blend-screen"
                            />

                            {/* Overlay UI */}
                            <div className="absolute bottom-8 left-8 right-8 border border-white/10 bg-[#050510]/80 backdrop-blur p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <Activity className="text-[#ff2a6d] animate-pulse" />
                                    <div className="font-mono text-xs text-[#05d9e8]">
                                        <div>SERVER_STATUS</div>
                                        <div className="text-white">OPTIMAL_FLOW_RATE</div>
                                    </div>
                                </div>
                                <div className="h-12 flex items-end gap-1">
                                    {[60, 40, 75, 50, 90, 30, 80].map((h, i) => (
                                        <div key={i} className="flex-1 bg-[#05d9e8]/20 h-full flex items-end">
                                            <div
                                                className="w-full bg-[#05d9e8] shadow-[0_0_10px_#05d9e8]"
                                                style={{ height: `${h}%` }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="relative z-10 py-32 border-y border-[#05d9e8]/10 bg-[#050510]/50 backdrop-blur">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-20">
                        <span className="text-[#ff2a6d] font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-pulse">Core Directives</span>
                        <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-black text-white uppercase italic tracking-wider mb-8 skew-x-[-10deg]`}>
                            System <span className="text-[#05d9e8]">Capabilities</span>
                        </h2>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
                        {[
                            { icon: Cpu, title: 'Processing', desc: 'Hyper-threaded architecture for maximum throughput.' },
                            { icon: Layers, title: 'Holographic UI', desc: 'Standardized visual components for consistent retro-future aesthetics.' },
                            { icon: Zap, title: 'Light Speed', desc: 'Optimized render cycles faster than the speed of light.' }
                        ].map((feature, i) => (
                            <div key={i} className="group p-8 border border-[#05d9e8]/20 hover:border-[#ff2a6d] bg-[#050510] hover:bg-[#050510]/80 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff2a6d] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <div className="w-16 h-16 bg-[#05d9e8]/10 border border-[#05d9e8] flex items-center justify-center mb-6 text-[#05d9e8] group-hover:bg-[#ff2a6d] group-hover:border-[#ff2a6d] group-hover:text-[#050510] transition-colors shadow-[0_0_15px_rgba(5,217,232,0.2)]">
                                    <feature.icon strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-4">{feature.title}</h3>
                                <p className="text-white/60 font-light leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Retro Grid / Bento */}
            <section className="relative z-10 py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-12 grid-rows-2'} gap-6 h-auto md:h-[600px]`}>
                        {/* Quote Card */}
                        <div className="md:col-span-6 md:row-span-2 border border-[#d23be7]/30 bg-gradient-to-br from-[#050510] to-[#1a1a2e] p-12 flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10" />
                            <div className="relative z-10">
                                <div className="text-[#d23be7] font-bold tracking-widest text-xs mb-8 uppercase">Philosophy.exe</div>
                                <blockquote className="text-3xl md:text-4xl font-bold uppercase italic text-white leading-tight drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                                    "The future is not set. There is no fate but what we make for ourselves."
                                </blockquote>
                            </div>
                            <div className="flex items-center gap-4 text-white/50 border-t border-white/10 pt-6">
                                <Disc className="animate-spin-slow" />
                                <div className="text-sm font-mono">
                                    <div>T-800</div>
                                    <div className="text-[#d23be7]">CYBERDYNE SYSTEMS</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Card */}
                        <div className="md:col-span-3 md:row-span-2 border border-[#05d9e8]/30 relative group overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop" // Coding/Cyberpunk
                                alt="Code"
                                className="object-cover w-full h-full filter contrast-125 hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-[#05d9e8]/20 mix-blend-overlay" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-3 font-mono text-xs text-[#05d9e8] border-t border-[#05d9e8]">
                                &gt; EXECUTING_SCRIPT...
                            </div>
                        </div>

                        {/* Stat Card A */}
                        <div className="md:col-span-3 border border-white/10 bg-[#050510] p-6 flex flex-col justify-between hover:border-[#ff2a6d] transition-colors group">
                            <div className="flex justify-between items-start">
                                <Activity size={20} className="text-[#ff2a6d]" />
                                <span className="text-white/40 text-xs font-bold uppercase">Uptime</span>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">99.9%</div>
                                <div className="w-full bg-white/10 h-1 mt-2">
                                    <div className="bg-[#ff2a6d] h-full w-full shadow-[0_0_10px_#ff2a6d]" />
                                </div>
                            </div>
                        </div>

                        {/* Stat Card B */}
                        <div className="md:col-span-3 bg-[#05d9e8] p-6 flex flex-col justify-between text-black relative overflow-hidden group">
                            <div className="relative z-10 font-bold">
                                <div className="text-black/60 text-xs uppercase mb-2">Modules Active</div>
                                <div className="text-5xl">42</div>
                            </div>
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Cpu size={80} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="relative z-10 py-32 border-t-2 border-[#ff2a6d]/20 bg-[#050510]">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex justify-between items-end mb-20">
                        <div>
                            <span className="text-[#ff2a6d] font-bold tracking-widest text-sm mb-4 block">ACCESS LEVEL</span>
                            <h2 className="text-5xl font-black italic uppercase text-white skew-x-[-10deg]">
                                Select <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a6d] to-[#d23be7]">Loadout</span>
                            </h2>
                        </div>
                        <div className="hidden md:flex gap-4 p-1 bg-white/5 rounded-none border border-white/10">
                            {['Monthly', 'Lifetime'].map(bill => (
                                <button
                                    key={bill}
                                    onClick={() => setActivePlan(bill.toLowerCase() as any)}
                                    className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all ${activePlan === bill.toLowerCase() ? 'bg-[#ff2a6d] text-white shadow-[0_0_10px_#ff2a6d]' : 'text-white/50 hover:text-white'}`}
                                >
                                    {bill}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
                        {/* Basic */}
                        <div className="p-8 border border-white/10 bg-white/5 hover:border-[#05d9e8] transition-colors relative group">
                            <div className="absolute top-0 right-0 p-2 bg-white/10 text-[10px] font-mono uppercase">V.1.0</div>
                            <h3 className="text-2xl font-bold uppercase text-white mb-2">Unit</h3>
                            <div className="text-[#05d9e8] text-sm mb-8 font-mono">Basic Operation</div>
                            <div className="text-5xl font-bold text-white mb-8">$0</div>
                            <ul className="space-y-4 mb-10 text-sm font-mono text-white/60">
                                <li className="flex items-center gap-3 text-[#05d9e8]"><Zap size={14} /> Core Access</li>
                                <li className="flex items-center gap-3 text-[#05d9e8]"><Zap size={14} /> 1GB Storage</li>
                            </ul>
                            <button className="w-full py-4 border border-[#05d9e8] text-[#05d9e8] font-bold uppercase tracking-widest hover:bg-[#05d9e8] hover:text-black transition-all">
                                Initialize
                            </button>
                        </div>

                        {/* Pro */}
                        <div className="p-8 border-2 border-[#ff2a6d] bg-[#050510] relative shadow-[0_0_30px_rgba(255,42,109,0.2)] transform md:-translate-y-4">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff2a6d] text-white px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_#ff2a6d]">
                                Recommended
                            </div>
                            <h3 className="text-2xl font-bold uppercase text-white mb-2">Cyber</h3>
                            <div className="text-[#ff2a6d] text-sm mb-8 font-mono">Advanced Warfare</div>
                            <div className="text-5xl font-bold text-white mb-8">
                                {activePlan === 'monthly' ? '$24' : '$199'}
                                <span className="text-lg opacity-50 font-sans ml-1 text-white/40">/ credits</span>
                            </div>
                            <ul className="space-y-4 mb-10 text-sm font-mono text-white/80">
                                <li className="flex items-center gap-3 text-[#ff2a6d]"><Zap size={14} /> Full Access</li>
                                <li className="flex items-center gap-3 text-[#ff2a6d]"><Zap size={14} /> Neural Net API</li>
                                <li className="flex items-center gap-3 text-[#ff2a6d]"><Zap size={14} /> Holographic Support</li>
                            </ul>
                            <button className="w-full py-4 bg-[#ff2a6d] text-white font-bold uppercase tracking-widest hover:bg-[#d23be7] transition-all shadow-[0_0_15px_#ff2a6d]">
                                Upgrade System
                            </button>
                        </div>

                        {/* Enterprise */}
                        <div className="p-8 border border-white/10 bg-white/5 hover:border-[#d23be7] transition-colors relative">
                            <h3 className="text-2xl font-bold uppercase text-white mb-2">Corp</h3>
                            <div className="text-[#d23be7] text-sm mb-8 font-mono">Global Domination</div>
                            <div className="text-5xl font-bold text-white mb-8">
                                {activePlan === 'monthly' ? '$99' : '$899'}
                            </div>
                            <ul className="space-y-4 mb-10 text-sm font-mono text-white/60">
                                <li className="flex items-center gap-3 text-[#d23be7]"><Zap size={14} /> Admin Keys</li>
                                <li className="flex items-center gap-3 text-[#d23be7]"><Zap size={14} /> 24/7 Uplink</li>
                            </ul>
                            <button className="w-full py-4 border border-[#d23be7] text-[#d23be7] font-bold uppercase tracking-widest hover:bg-[#d23be7] hover:text-white transition-all">
                                Contact HQ
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-[#05d9e8]/20 bg-[#050510] pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-4 gap-12 mb-20">
                        <div className="col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <Terminal size={24} className="text-[#05d9e8]" />
                                <span className="text-2xl font-bold tracking-widest text-white uppercase">SYNTH</span>
                            </div>
                            <p className="text-white/50 font-mono text-sm max-w-sm">
                                EST. 2084 <br />
                                BUILDING THE DIGITAL FRONTIER<br />
                                <span className="text-[#ff2a6d]">NEO-TOKYO SECTOR 7</span>
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-[#05d9e8] text-xs mb-6">Network</h4>
                            <ul className="space-y-4 text-white/50 font-mono text-sm">
                                <li><a href="#" className="hover:text-[#ff2a6d] transition-colors">Protocol</a></li>
                                <li><a href="#" className="hover:text-[#ff2a6d] transition-colors">Nodes</a></li>
                                <li><a href="#" className="hover:text-[#ff2a6d] transition-colors">Uptime</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-[#05d9e8] text-xs mb-6">Data</h4>
                            <ul className="space-y-4 text-white/50 font-mono text-sm">
                                <li><a href="#" className="hover:text-[#ff2a6d] transition-colors">Encryption</a></li>
                                <li><a href="#" className="hover:text-[#ff2a6d] transition-colors">Transmission</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center pt-8 border-t border-white/5">
                        <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
                            © 2084 SYNTH SYSTEMS INC. ALL RIGHTS RESERVED.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
