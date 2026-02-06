import { useState } from 'react';
import { Menu, X, Zap, Loader, Shield, Radio, Cpu, Wifi, Database, Terminal, Lock, Globe } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S06CyberpunkPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    // S06 Cyberpunk Design Tokens (High-Tech Low-Life)
    const colors = {
        bg: '#050505',
        primary: '#00F0FF', // Cyan
        secondary: '#FF003C', // Pink
        accent: '#F9E000', // Yellow
        text: '#E0E0E0',
        muted: '#505050',
        darkPanel: 'rgba(10, 10, 10, 0.95)',
        grid: 'rgba(0, 240, 255, 0.1)'
    };

    // Glitch and Scanline Styles
    const styles = `
        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
        @keyframes glitch-skew {
            0% { transform: skew(0deg); }
            20% { transform: skew(-2deg); }
            40% { transform: skew(2deg); }
            60% { transform: skew(-1deg); }
            80% { transform: skew(1deg); }
            100% { transform: skew(0deg); }
        }
        .animate-scanline {
            animation: scanline 8s linear infinite;
        }
        .animate-glitch {
            animation: glitch-skew 3s infinite linear alternate-reverse;
        }
    `;

    return (
        <div className="min-h-screen font-mono uppercase" style={{ backgroundColor: colors.bg, color: colors.text, backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            {/* ========== 1. HEADER ========== */}
            <header className="sticky top-0 w-full z-50 border-b border-cyan-900 bg-black/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-cyan-400 group cursor-pointer">
                        <Zap className="fill-current w-5 h-5 group-hover:animate-pulse" />
                        <span className="font-bold tracking-widest text-lg" style={{ textShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}>NEURAL_LINK</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-1">
                            {['Grid', 'Implants', 'Netrunner', 'Bounty'].map(item => (
                                <a key={item} className="px-6 py-2 text-xs font-bold tracking-widest hover:bg-cyan-900/30 hover:text-cyan-400 transition-all clip-path-polygon cursor-pointer relative group">
                                    <span className="opacity-0 group-hover:opacity-100 absolute left-2 text-cyan-400">&gt;</span>
                                    {item}
                                </a>
                            ))}
                        </nav>
                    )}

                    <div className="flex gap-4 items-center">
                        {!isMobile && (
                            <button className="px-6 py-2 border border-cyan-500 text-cyan-400 text-xs font-bold hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                                Jack In
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-cyan-400 hover:text-white p-2 border border-cyan-900 bg-black/50">
                                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="bg-black/95 backdrop-blur-xl border-b border-cyan-900 p-6 flex flex-col gap-4">
                        {['Grid', 'Implants', 'Netrunner', 'Bounty'].map(item => (
                            <a key={item} className="text-lg font-bold tracking-widest text-cyan-400 border-l-2 border-transparent hover:border-pink-500 pl-4 transition-all">
                                &gt; {item}
                            </a>
                        ))}
                        <button className="px-6 py-3 border border-cyan-500 text-cyan-400 text-xs font-bold hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_10px_rgba(0,240,255,0.3)] w-full mt-4">
                            Jack In
                        </button>
                    </div>
                )}
            </header>

            {/* ========== 2. HERO ========== */}
            <section className="pt-24 pb-32 px-6 relative overflow-hidden border-b border-cyan-900/50">
                <style>{styles}</style>
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 pointer-events-none"
                    style={{ backgroundImage: `linear-gradient(${colors.grid} 1px, transparent 1px), linear-gradient(90deg, ${colors.grid} 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
                </div>

                <div className="max-w-7xl mx-auto relative z-10" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <div className="inline-flex items-center gap-3 mb-8 border border-pink-500 bg-pink-500/10 px-4 py-2 text-sm text-pink-500 font-bold tracking-[0.2em] shadow-[0_0_15px_rgba(255,0,60,0.3)]">
                            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                            WARNING: SYSTEM UNSTABLE
                        </div>
                        <h1 style={{ fontSize: isMobile ? '3.5rem' : '7rem' }} className="font-black leading-[0.85] mb-8 tracking-tighter text-white mix-blend-screen" >
                            <span className="block animate-glitch" style={{ textShadow: '4px 0 #FF003C' }}>UPGRADE</span>
                            <span className="block text-transparent stroke-text-cyan" style={{ WebkitTextStroke: '2px #00F0FF' }}>REALITY</span>
                            <span className="block text-yellow-400">NOW_</span>
                        </h1>
                        <p className="text-xl text-cyan-100/70 mb-12 max-w-lg border-l-4 border-cyan-500 pl-6 leading-relaxed font-mono">
                            The next generation of decentralized neural interfaces. <span className="text-cyan-400">Zero latency.</span> Total immersion.
                        </p>
                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6`}>
                            <button className="bg-yellow-400 text-black px-10 py-5 font-black tracking-widest hover:bg-white hover:shadow-[0_0_20px_white] transition-all clip-path-polygon relative group">
                                <span className="absolute inset-0 border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity" />
                                INITIALIZE_LINK
                            </button>
                            <button className="bg-black border border-cyan-500 text-cyan-400 px-10 py-5 font-bold tracking-widest hover:bg-cyan-900/30 hover:shadow-[0_0_20px_#00F0FF] transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                                :: READ_LOGS
                            </button>
                        </div>
                    </div>

                    {/* Visual: Augmented Reality Layout */}
                    {!isMobile && (
                        <div className="relative h-[600px] border border-cyan-500/30 bg-black/80 backdrop-blur-sm p-2 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                            {/* Corner Decals */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-cyan-500" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-cyan-500" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-cyan-500" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cyan-500" />

                            <div className="h-full w-full relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2676&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40 mix-blend-luminosity">
                                {/* Image is just texture, overlaid with UI */}
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                                <div className="flex justify-between font-mono text-xs text-cyan-500">
                                    <div>
                                        <div>TARGET: USER_01</div>
                                        <div>DIST: 0.0m</div>
                                    </div>
                                    <div className="text-right">
                                        <div>BPM: 72</div>
                                        <div>CORTEX: STABLE</div>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-64 h-64 border border-cyan-400/50 rounded-full animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-pink-500/50 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-black text-white text-shadow-cyan tracking-widest text-center">
                                        99%<br /><span className="text-xs">UPLOADING</span>
                                    </div>
                                </div>
                                <div className="font-mono text-xs text-pink-500 animate-pulse">
                                    &gt;&gt; ENCRYPTED CONNECTION ESTABLISHED
                                </div>
                            </div>

                            {/* Scanning Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/50 shadow-[0_0_15px_#00F0FF] animate-scanline pointer-events-none" />
                        </div>
                    )}
                </div>
            </section>

            {/* ========== 9. TRUST TICKER ========== */}
            <section className="border-y border-cyan-900 bg-cyan-950/20 py-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#00F0FF_50%,transparent_100%)] opacity-10 animate-scanline" style={{ animationDuration: '3s', transform: 'rotate(90deg)' }} />
                <div className="whitespace-nowrap flex gap-12 font-bold text-cyan-500 tracking-[0.3em] uppercase text-sm animate-marquee">
                    {[...Array(4)].flatMap(() => ['ARASAKA_CORP', 'MILITECH', 'BIOTECHNICA', 'KANG_TAO', 'NIGHT_CORP']).map((brand, i) => (
                        <span key={i} className="flex items-center gap-4">
                            {brand} <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                        </span>
                    ))}
                </div>
            </section>

            {/* ========== 6. BENTO GRID (MODULES) ========== */}
            <section className="py-24 px-6 relative">
                {/* Decorative background elements */}
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full filter blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-end justify-between mb-16 border-b border-cyan-900/50 pb-8">
                        <h2 style={{ fontSize: isMobile ? '2rem' : '4rem' }} className="font-black tracking-tighter text-white">
                            <span className="text-pink-500 mr-4">/</span>SYSTEM_MODULES
                        </h2>
                        {!isMobile && (
                            <div className="text-xs text-cyan-500 font-mono text-right">
                                <div>MEMORY_ALLOC: 64TB</div>
                                <div>THREADS: ACTIVE</div>
                            </div>
                        )}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gridTemplateRows: isMobile ? 'auto' : 'repeat(2, 1fr)', gap: '2rem', minHeight: isMobile ? 'auto' : '800px' }}>
                        {/* Module 1: Cyberdeck */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2', gridRow: isMobile ? 'auto' : 'span 2' }} className="bg-black/80 border border-cyan-900 p-8 relative group hover:border-cyan-400 transition-colors backdrop-blur-md overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold border-b border-l border-cyan-900">MK.IV_PROTOTYPE</div>
                            <Cpu className="w-20 h-20 text-cyan-400 mb-8 filter drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                            <h3 className="text-4xl font-bold mb-4 text-white">Neural<br />Processing<br />Unit</h3>
                            <p className="text-cyan-200/50 text-sm leading-relaxed mb-12 max-w-sm font-mono">
                                Direct cortex integration allowing for sub-millisecond reaction times in cyberspace. Overclocking enabled by default.
                            </p>

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex justify-between text-[10px] text-cyan-500 mb-2 font-mono">
                                    <span>CORE_TEMP: 42°C</span>
                                    <span>LOAD: 89%</span>
                                </div>
                                <div className="h-2 bg-gray-900 overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 w-[89%] relative">
                                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Module 2: ICE Breaker */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }} className="bg-pink-900/5 border border-pink-500/30 p-8 hover:bg-pink-900/10 transition-colors border-l-4 border-l-pink-500 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <Shield className="text-pink-500 w-12 h-12 group-hover:scale-110 transition-transform" />
                                <span className="text-pink-500 text-xs font-bold border border-pink-500 px-2 py-1 animate-pulse">ACTIVE_THREAT</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-2 text-white relative z-10">Black ICE V2</h3>
                            <p className="text-xs text-pink-400 font-mono relative z-10">Military grade intrusion countermeasures.</p>
                        </div>

                        {/* Module 3: Network */}
                        <div className="border border-cyan-900 bg-black p-8 flex flex-col justify-between hover:border-yellow-400 transition-colors group relative">
                            <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Wifi className="text-yellow-400 w-10 h-10 relative z-10" />
                            <div className="text-right relative z-10">
                                <div className="text-xs text-gray-500 font-mono mb-1">BANDWIDTH</div>
                                <div className="text-4xl font-bold text-yellow-400 tracking-tighter">10Pb/s</div>
                            </div>
                        </div>

                        {/* Module 4: Data */}
                        <div className="border border-cyan-900 bg-black p-8 hover:border-cyan-400 group relative flex flex-col justify-between">
                            <Database className="text-gray-600 group-hover:text-cyan-400 transition-colors w-10 h-10 mb-4" />
                            <div className="font-mono text-xs space-y-1">
                                <div className="flex justify-between text-gray-400"><span>SHARDS</span> <span className="text-white">512</span></div>
                                <div className="flex justify-between text-gray-400"><span>INTEGRITY</span> <span className="text-cyan-400">100%</span></div>
                                <div className="flex justify-between text-gray-400"><span>ENCRYPTION</span> <span className="text-pink-500">AES-4096</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== 12. PRICING (CREDITS) ========== */}
            <section className="py-24 px-6 bg-cyan-950/10 border-t border-cyan-900/30">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black mb-20 text-center text-transparent stroke-text-cyan" style={{ WebkitTextStroke: '1px #505050' }}>
                        ACQUIRE_CREDITS
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }} className="relative">
                        {/* Connecting Line */}
                        {!isMobile && <div className="absolute top-1/2 left-0 w-full h-px bg-cyan-900 -z-10" />}

                        {[
                            { name: 'Street Kid', price: '0', credits: '500', color: 'border-gray-800 hover:border-gray-600' },
                            { name: 'Mercenary', price: '29', credits: '5,000', color: 'border-cyan-500 shadow-[0_0_30px_rgba(0,240,255,0.15)] bg-cyan-950/30 scale-105 z-10' },
                            { name: 'Corpo', price: '99', credits: 'UNLIMITED', color: 'border-yellow-400 hover:border-yellow-300' }
                        ].map((plan, i) => (
                            <div key={i} className={`bg-black/90 border p-10 flex flex-col relative transition-all duration-300 ${plan.color}`}>
                                {i === 1 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-black text-[10px] font-black tracking-widest px-4 py-1 clip-path-polygon">RECOMMENDED</div>}
                                <h3 className="text-sm font-bold tracking-[0.3em] text-gray-400 mb-4">{plan.name.toUpperCase()}</h3>
                                <div className="text-6xl font-black text-white mb-8 tracking-tighter">
                                    <span className="text-2xl align-top text-gray-500 mr-1">Ξ</span>{plan.price}
                                </div>
                                <div className="border-t border-b border-gray-800 py-6 mb-8 flex-1">
                                    <div className="text-[10px] mb-2 text-cyan-500 font-mono">STORAGE_CAPACITY</div>
                                    <div className="text-2xl font-bold text-white mb-6 uppercase">{plan.credits} IOPS</div>
                                    <div className="space-y-3 text-xs text-gray-400 font-mono">
                                        <div className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500" /> Encrypted Storage</div>
                                        <div className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500" /> Ghost Protocol</div>
                                        {i > 0 && <div className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500" /> Neural Link API</div>}
                                        {i > 1 && <div className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500" /> Priority Access</div>}
                                    </div>
                                </div>
                                <button className={`w-full py-4 font-bold text-sm tracking-[0.2em] uppercase transition-all clip-path-polygon ${i === 1 ? 'bg-cyan-500 text-black hover:bg-white hover:shadow-[0_0_15px_white]' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                                    Initialize
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 14. FOOTER ========== */}
            <footer className="pt-24 pb-12 px-6 border-t border-gray-900 bg-black text-xs text-gray-600 font-mono">
                <div className="max-w-7xl mx-auto">
                    <div className={`flex ${isMobile ? 'flex-col gap-8' : 'justify-between items-end'} mb-12`}>
                        <div>
                            <div className="text-white font-bold text-2xl mb-4 text-shadow-cyan">NEURAL_LINK</div>
                            <p className="max-w-xs">Connecting the human mind to the global network since 2077.</p>
                        </div>
                        <div className={isMobile ? '' : 'text-right'}>
                            <div>SYSTEM STATUS: <span className="text-green-500">ONLINE</span></div>
                            <div>PING: 2ms</div>
                        </div>
                    </div>
                    <div className={`flex ${isMobile ? 'flex-col gap-4' : 'justify-between'} border-t border-gray-900 pt-8`}>
                        <div>© 2077 NEURAL INC. ALL RIGHTS RESERVED.</div>
                        <div className="flex gap-4">
                            <span className="hover:text-cyan-400 cursor-pointer">TERMS_OF_SERVICE</span>
                            <span className="hover:text-cyan-400 cursor-pointer">PRIVACY_PROTOCOL</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
