import { useState } from 'react';
import {
    Zap, Globe, Shield, Activity, Cpu, Code, Server,
    ChevronDown, ArrowRight, Menu, X, Play, Music, Radio
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S07OrganicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePlan, setActivePlan] = useState<'monthly' | 'lifetime'>('monthly');

    // S07 Synthwave Tokens
    const theme = {
        colors: {
            bg: '#0f0c29',       // Deepest Purple
            bgGradient: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
            primary: '#ff00cc',  // Neon Pink
            secondary: '#333399',// Deep Blue
            accent: '#00ddeb',   // Cyber Cyan
            glow: '0 0 10px #ff00cc, 0 0 20px #ff00cc',
            text: {
                main: '#ffffff',
                muted: '#b3b3b3'
            }
        }
    };

    return (
        <div
            className="min-h-screen relative overflow-hidden font-sans text-white selection:bg-[#ff00cc] selection:text-white"
            style={{ background: theme.colors.bgGradient }}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150"></div>

                {/* Perspective Grid */}
                <div
                    className="absolute bottom-0 w-full h-[50vh]"
                    style={{
                        background: `linear-gradient(to bottom, transparent 0%, ${theme.colors.bg} 100%), 
                                     linear-gradient(rgba(255, 0, 204, 0.2) 1px, transparent 1px), 
                                     linear-gradient(90deg, rgba(255, 0, 204, 0.2) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        transform: 'perspective(500px) rotateX(60deg) scale(2)',
                        transformOrigin: 'bottom center',
                        opacity: 0.3
                    }}
                />

                {/* Sun */}
                <div
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-40 mix-blend-screen"
                    style={{ background: 'linear-gradient(to top, #ff00cc, #333399)' }}
                />
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-[#0f0c29]/80">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#ff00cc] to-[#333399] flex items-center justify-center shadow-[0_0_15px_rgba(255,0,204,0.5)]">
                            <Zap className="text-white" fill="currentColor" size={20} />
                        </div>
                        <span className="text-2xl font-black tracking-tighter italic" style={{ textShadow: '2px 2px 0px #333399' }}>
                            NEON<span className="text-[#00ddeb]">.OS</span>
                        </span>
                    </div>

                    {!isMobile && (
                        <div className="flex items-center gap-8">
                            {['Features', 'Grid', 'Pricing', 'Manifesto'].map(item => (
                                <a key={item} href="#" className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-[#00ddeb] hover:drop-shadow-[0_0_5px_#00ddeb] transition-all">
                                    {item}
                                </a>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center gap-4">
                        {!isMobile && (
                            <button className="px-6 py-2 rounded-none border border-[#ff00cc] text-[#ff00cc] font-bold uppercase tracking-wider hover:bg-[#ff00cc] hover:text-white transition-all shadow-[0_0_10px_rgba(255,0,204,0.3)] hover:shadow-[0_0_20px_rgba(255,0,204,0.6)]">
                                Login
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                                {menuOpen ? <X /> : <Menu />}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="bg-[#0f0c29]/95 backdrop-blur-md border-t border-white/10 p-6 flex flex-col gap-4">
                        {['Features', 'Grid', 'Pricing', 'Manifesto'].map(item => (
                            <a key={item} href="#" className="text-lg font-bold uppercase tracking-widest text-white/70 hover:text-[#00ddeb] transition-all">
                                {item}
                            </a>
                        ))}
                        <button className="w-full mt-4 px-6 py-3 rounded-none border border-[#ff00cc] text-[#ff00cc] font-bold uppercase tracking-wider hover:bg-[#ff00cc] hover:text-white transition-all shadow-[0_0_10px_rgba(255,0,204,0.3)]">
                            Login
                        </button>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 pt-20 pb-32">
                <div className={`max-w-7xl mx-auto px-6 grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-16 items-center`}>
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#00ddeb]/50 bg-[#00ddeb]/10 backdrop-blur text-[#00ddeb] text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_10px_rgba(0,221,235,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-[#00ddeb] animate-pulse" />
                            System Online V2.0
                        </div>
                        <h1 className={`${isMobile ? 'text-4xl' : 'text-7xl'} font-black italic leading-tight mb-6`} style={{ textShadow: '4px 4px 0px #333399' }}>
                            THE FUTURE <br /> IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] to-[#00ddeb]">NOW_</span>
                        </h1>
                        <p className="text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
                            Experience the next generation of digital interfaces.
                            Fully immersive, retro-futuristic, and powered by the grid.
                        </p>
                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
                            <button className="px-8 py-4 bg-[#ff00cc] text-white font-bold text-lg uppercase skew-x-[-10deg] hover:skew-x-0 transition-transform hover:shadow-[0_0_30px_rgba(255,0,204,0.6)]">
                                <span className="block skew-x-[10deg]">Initialize System</span>
                            </button>
                            <button className="px-8 py-4 border border-white/30 text-white font-bold text-lg uppercase skew-x-[-10deg] hover:bg-white/10 transition-colors">
                                <span className="block skew-x-[10deg] flex items-center gap-2">
                                    <Play size={18} fill="currentColor" /> Demo Reel
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Hero Visual - Synthwave Dashboard Mockup */}
                    <div className="relative group perspective-1000">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#ff00cc] to-[#00ddeb] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                        <div className="relative bg-[#0f0c29]/90 border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl transform rotate-y-[-10deg] rotate-x-[5deg] group-hover:rotate-0 transition-all duration-700 ease-out">
                            {/* Window Header */}
                            <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="ml-4 text-xs font-mono text-white/40">user@neon-os:~</div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="p-6 grid grid-cols-2 gap-4">
                                <div className="col-span-2 bg-white/5 rounded-lg p-4 border border-white/10">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-xs font-mono text-[#00ddeb] uppercase">System Load</span>
                                        <span className="text-2xl font-black italic text-white">98%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-[98%] bg-gradient-to-r from-[#333399] via-[#ff00cc] to-[#00ddeb] animate-pulse" />
                                    </div>
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-[#ff00cc]/20 to-[#333399]/20 rounded-lg border border-[#ff00cc]/30 flex items-center justify-center relative overflow-hidden">
                                    <Activity className="text-[#ff00cc] animate-pulse" size={48} />
                                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />
                                </div>
                                <div className="aspect-square bg-white/5 rounded-lg border border-white/10 p-4 font-mono text-xs text-[#00ddeb]">
                                    {'>'} analyzing sectors...<br />
                                    {'>'} optimizing grid...<br />
                                    {'>'} <span className="text-[#ff00cc] animate-pulse">breach detected</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Staggered */}
            <section className="relative z-10 py-20 bg-[#0f0c29]/50 backdrop-blur-sm border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-black italic mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50`}>
                            SUPREME HARDWARE
                        </h2>
                        <div className="h-1 w-24 bg-[#ff00cc] mx-auto shadow-[0_0_10px_#ff00cc]" />
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
                        {[
                            { icon: Cpu, title: 'Neural Core', desc: 'Processing speeds that defy the laws of physics.' },
                            { icon: Shield, title: 'Plasma Firewall', desc: 'Unbreakable security for your digital assets.' },
                            { icon: Globe, title: 'Global Grid', desc: 'Connected to every node in the metaverse.' }
                        ].map((feature, i) => (
                            <div key={i} className="group p-8 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#00ddeb] transition-all hover:-translate-y-2">
                                <div className="w-16 h-16 rounded-full bg-[#0f0c29] border border-white/20 flex items-center justify-center mb-6 group-hover:border-[#00ddeb] group-hover:shadow-[0_0_20px_rgba(0,221,235,0.4)] transition-all">
                                    <feature.icon className="text-white group-hover:text-[#00ddeb]" />
                                </div>
                                <h3 className="text-xl font-bold uppercase italic mb-3 text-white">{feature.title}</h3>
                                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bento Grid / Tech Specs */}
            <section className="relative z-10 py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-4 grid-rows-2'} gap-6 ${isMobile ? 'h-auto' : 'h-[600px]'}`}>
                        {/* Large Card */}
                        <div className={`${isMobile ? '' : 'col-span-2 row-span-2'} rounded-2xl border border-white/10 bg-[#16123a] p-8 overflow-hidden relative group`}>
                            <div className="absolute top-0 right-0 p-32 bg-[#ff00cc] blur-[150px] opacity-20 pointer-events-none" />
                            <h3 className="text-3xl font-black italic mb-4">AUDIO ENGINE</h3>
                            <p className="text-white/60 mb-8 max-w-sm">Immersive 3D audio powered by our proprietary synth engine.</p>

                            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f0c29] to-transparent z-10" />

                            {/* Visualizer Mockup */}
                            <div className="flex items-end justify-between gap-1 h-32 absolute bottom-8 left-8 right-8 mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity">
                                {[...Array(20)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-full bg-[#00ddeb]"
                                        style={{
                                            height: `${Math.random() * 100}%`,
                                            animation: `pulse ${0.5 + Math.random()}s infinite alternate`
                                        }}
                                    />
                                ))}
                            </div>
                            <Music className="absolute top-8 right-8 text-[#ff00cc] opacity-50" size={48} />
                        </div>

                        {/* Medium Card */}
                        <div className={`${isMobile ? '' : 'col-span-2'} rounded-2xl border border-white/10 bg-[#1a1642] p-8 flex items-center justify-between group hover:border-[#00ddeb] transition-colors`}>
                            <div>
                                <h3 className="text-xl font-bold uppercase mb-2 text-[#00ddeb]">Networking</h3>
                                <p className="text-sm font-mono text-white/50">Latency: &lt; 1ms</p>
                            </div>
                            <Activity className="text-white/20 group-hover:text-[#00ddeb] transition-colors" size={64} />
                        </div>

                        {/* Small Card A */}
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#24243e] to-[#0f0c29] p-6 flex flex-col justify-center text-center hover:scale-105 transition-transform">
                            <div className="text-4xl font-black italic text-[#ff00cc] mb-2">4K</div>
                            <span className="text-xs font-mono uppercase text-white/50">Resolution</span>
                        </div>

                        {/* Small Card B */}
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-bl from-[#24243e] to-[#0f0c29] p-6 flex flex-col justify-center text-center hover:scale-105 transition-transform">
                            <div className="text-4xl font-black italic text-[#ffbd2e] mb-2">120</div>
                            <span className="text-xs font-mono uppercase text-white/50">FPS Locked</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="relative z-10 py-20 bg-[#0f0c29]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex justify-center mb-12">
                        <div className="bg-white/5 p-1 rounded-full flex">
                            {['monthly', 'lifetime'].map(plan => (
                                <button
                                    key={plan}
                                    onClick={() => setActivePlan(plan as any)}
                                    className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activePlan === plan ? 'bg-[#ff00cc] text-white shadow-[0_0_15px_#ff00cc]' : 'text-white/50 hover:text-white'
                                        }`}
                                >
                                    {plan}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-8`}>
                        {/* Standard Card */}
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-bold uppercase text-white/70 mb-4">Initiate</h3>
                            <div className="text-4xl font-black italic mb-6">Free</div>
                            <ul className="space-y-4 mb-8 text-sm font-mono text-white/60">
                                <li className="flex items-center gap-3"><span className="text-[#00ddeb]">✓</span> Basic Access</li>
                                <li className="flex items-center gap-3"><span className="text-[#00ddeb]">✓</span> Public Grid</li>
                                <li className="flex items-center gap-3"><span className="text-[#00ddeb]">✓</span> 1080p Stream</li>
                            </ul>
                            <button className="w-full py-3 border border-white/20 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                                Select Plan
                            </button>
                        </div>

                        {/* Pro Card */}
                        <div className="relative p-8 rounded-2xl border border-[#ff00cc] bg-gradient-to-b from-[#ff00cc]/20 to-[#0f0c29]">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff00cc] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-[0_0_10px_#ff00cc]">
                                Most Popular
                            </div>
                            <h3 className="text-xl font-bold uppercase text-white mb-4">Cybernetic</h3>
                            <div className="text-4xl font-black italic mb-6 text-[#ff00cc] drop-shadow-[0_0_5px_rgba(255,0,204,0.5)]">
                                {activePlan === 'monthly' ? '$29' : '$499'}
                                <span className="text-sm font-normal text-white/50 not-italic ml-2">
                                    /{activePlan === 'monthly' ? 'mo' : 'life'}
                                </span>
                            </div>
                            <ul className="space-y-4 mb-8 text-sm font-mono text-white">
                                <li className="flex items-center gap-3"><span className="text-[#ff00cc]">✓</span> Unlimited Assets</li>
                                <li className="flex items-center gap-3"><span className="text-[#ff00cc]">✓</span> Private Servers</li>
                                <li className="flex items-center gap-3"><span className="text-[#ff00cc]">✓</span> 4K/VR Ready</li>
                                <li className="flex items-center gap-3"><span className="text-[#ff00cc]">✓</span> Priority Support</li>
                            </ul>
                            <button className="w-full py-3 bg-[#ff00cc] font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(255,0,204,0.4)] hover:shadow-[0_0_25px_rgba(255,0,204,0.6)] hover:scale-[1.02] transition-all">
                                Upgrade Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/10 bg-[#0f0c29] pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <Zap className="text-[#ff00cc]" />
                        <span className="text-2xl font-black italic">NEON.OS</span>
                    </div>
                    <p className="text-white/40 text-sm font-mono">
                        © 2084 NEON SYSTEMS INC. <br />
                        ESTABLISHED IN NEW TOKYO. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </footer>
        </div>
    );
};
