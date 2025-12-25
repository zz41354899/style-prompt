import { useState } from 'react';
import { Menu, X, Zap, Loader, Shield, Radio, Cpu, Wifi, Database, Terminal, Lock, Globe } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S06CyberpunkPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    // S06 Cyberpunk Design Tokens
    const colors = {
        bg: '#050505',
        primary: '#00F0FF', // Cyan
        secondary: '#FF003C', // Pink
        accent: '#F9E000', // Yellow
        text: '#E0E0E0',
        muted: '#505050',
        panel: 'rgba(10, 10, 10, 0.8)'
    };

    return (
        <div className="min-h-screen font-mono uppercase" style={{ backgroundColor: colors.bg, color: colors.text, backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            {/* ========== 1. HEADER ========== */}
            <header className="fixed top-0 w-full z-50 border-b border-cyan-900 bg-black/90 backdrop-blur-md">
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
                    <div className="fixed inset-0 top-16 bg-black/95 backdrop-blur-xl z-40 border-b border-cyan-900 p-6 flex flex-col gap-6">
                        {['Grid', 'Implants', 'Netrunner', 'Bounty'].map(item => (
                            <a key={item} className="text-xl font-bold tracking-widest text-cyan-400 border-l-2 border-transparent hover:border-pink-500 pl-4 transition-all">
                                &gt; {item}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            {/* ========== 2. HERO ========== */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 border border-pink-500/50 bg-pink-500/10 px-3 py-1 text-xs text-pink-500 font-bold tracking-widest">
                            <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping" />
                            SYSTEM BREACH DETECTED
                        </div>
                        <h1 style={{ fontSize: isMobile ? '3rem' : '6rem' }} className="font-black leading-none mb-8 tracking-tighter mix-blend-screen" >
                            <span style={{ textShadow: '2px 2px 0px #FF003C, -2px -2px 0px #00F0FF' }}>UPGRADE<br />YOUR<br />REALITY</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-lg border-l-2 border-cyan-500 pl-6">
                            The next generation of decentralized neural interfaces. Seamlessly connect to the grid with zero latency.
                        </p>
                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6`}>
                            <button className="bg-yellow-400 text-black px-8 py-4 font-black tracking-widest hover:bg-white transition-colors clip-path-polygon shadow-[4px_4px_0_0_cyan]">
                                INITIALIZE DOWNLOAD
                            </button>
                            <button className="border border-gray-600 px-8 py-4 font-bold tracking-widest hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-900/10 transition-all">
                                READ PROTOCOL
                            </button>
                        </div>
                    </div>

                    {/* Visual: HUD Element */}
                    {!isMobile && (
                        <div className="relative h-[500px] border border-cyan-900 bg-black/50 backdrop-blur-sm p-4">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                            <div className="h-full flex flex-col justify-center items-center gap-8 relative overflow-hidden">
                                <div className="w-64 h-64 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite] flex items-center justify-center relative">
                                    <div className="w-48 h-48 rounded-full border border-pink-500/50 animate-[spin_5s_linear_infinite_reverse]" />
                                    <div className="absolute inset-0 bg-cyan-500/5 filter blur-xl animate-pulse" />
                                </div>
                                <div className="font-mono text-center">
                                    <div className="text-cyan-400 text-xs tracking-[0.3em] mb-2">SYNC STATUS</div>
                                    <div className="text-4xl font-black">98.4%</div>
                                </div>

                                {/* Scanlines */}
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50" />
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ========== 9. TRUST TICKER ========== */}
            <section className="border-y border-cyan-900 bg-cyan-950/20 py-3 overflow-hidden">
                <div className={`max-w-7xl mx-auto flex ${isMobile ? 'flex-wrap gap-4' : 'justify-between'} text-xs font-bold text-cyan-700 tracking-[0.2em]`}>
                    <span>ARASAKA_CORP</span>
                    <span>MILITECH</span>
                    <span>BIOTECHNICA</span>
                    {!isMobile && <span>KANG_TAO</span>}
                    {!isMobile && <span>NIGHT_CORP</span>}
                </div>
            </section>

            {/* ========== 6. BENTO GRID (MODULES) ========== */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-16 border-b border-gray-800 pb-8">
                        <h2 style={{ fontSize: isMobile ? '1.5rem' : '3rem' }} className="font-black tracking-tighter text-white">
                            <span className="text-pink-500">/</span> SYSTEM MODULES
                        </h2>
                        {!isMobile && (
                            <div className="text-xs text-cyan-500 font-mono">
                                MEMORY_ALLOC: 64TB
                            </div>
                        )}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gridTemplateRows: isMobile ? 'auto' : 'repeat(2, 1fr)', gap: '1rem', minHeight: isMobile ? 'auto' : '800px' }}>
                        {/* Module 1: Cyberdeck */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2', gridRow: isMobile ? 'auto' : 'span 2' }} className="bg-gray-900 border border-gray-800 p-8 relative group hover:border-cyan-500 transition-colors cursor-crosshair overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold">MK.IV</div>
                            <Cpu className="w-16 h-16 text-cyan-400 mb-8" />
                            <h3 className="text-3xl font-bold mb-4">Neural<br />Processing<br />Unit</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">Direct cortex integration allowing for sub-millisecond reaction times in cyberspace.</p>

                            <div className="absolute bottom-8 left-8 right-8 h-1 bg-gray-800">
                                <div className="h-full bg-cyan-400 w-3/4 animate-pulse relative">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white shadow-[0_0_10px_cyan]" />
                                </div>
                            </div>
                        </div>

                        {/* Module 2: ICE Breaker */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }} className="bg-pink-900/10 border border-pink-500/30 p-8 hover:bg-pink-900/20 transition-colors border-l-4 border-l-pink-500">
                            <div className="flex justify-between items-start mb-4">
                                <Shield className="text-pink-500 w-10 h-10" />
                                <span className="text-pink-500 text-xs font-bold animate-pulse">ACTIVE_THREAT</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Black ICE V2</h3>
                            <p className="text-xs text-pink-400">Military grade intrusion countermeasures.</p>
                        </div>

                        {/* Module 3: Network */}
                        <div className="border border-gray-800 bg-black p-6 flex flex-col justify-between hover:border-yellow-400 transition-colors">
                            <Wifi className="text-yellow-400 w-8 h-8" />
                            <div className="text-right">
                                <div className="text-xs text-gray-500">BANDWIDTH</div>
                                <div className="text-2xl font-bold text-yellow-400">10Pb/s</div>
                            </div>
                        </div>

                        {/* Module 4: Data */}
                        <div className="border border-gray-800 bg-black p-6 hover:border-cyan-400 group">
                            <Database className="text-gray-600 group-hover:text-cyan-400 transition-colors w-8 h-8 mb-4" />
                            <div className="font-mono text-xs">
                                <div>SHARDS: 512</div>
                                <div>FRAGMENTS: 0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== 12. PRICING (CREDITS) ========== */}
            <section className="py-24 px-6 bg-cyan-950/10 border-t border-cyan-900/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black mb-16 text-center">PURCHASE CREDITS</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
                        {[
                            { name: 'Street Kid', price: '0', credits: '500', color: 'border-gray-700' },
                            { name: 'Mercenary', price: '29', credits: '5,000', color: 'border-cyan-500 shadow-[0_0_20px_rgba(0,240,255,0.2)]' },
                            { name: 'Corpo', price: '99', credits: 'UNLIMITED', color: 'border-yellow-400' }
                        ].map((plan, i) => (
                            <div key={i} className={`bg-black border p-8 flex flex-col relative ${plan.color}`}>
                                {i === 1 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-black text-[10px] font-bold px-3 py-1">RECOMMENDED</div>}
                                <h3 className="text-lg font-bold tracking-widest text-gray-400 mb-2">{plan.name}</h3>
                                <div className="text-5xl font-black text-white mb-6">
                                    <span className="text-2xl align-top">Ξ</span>{plan.price}
                                </div>
                                <div className="border-t border-gray-800 pt-6 mb-8 flex-1">
                                    <div className="text-xs mb-2 text-gray-500">CAPACITY</div>
                                    <div className="text-xl font-bold text-white mb-4">{plan.credits} IOPS</div>
                                    <div className="space-y-2 text-xs text-gray-400 font-mono">
                                        <div>[+] Encrypted Storage</div>
                                        <div>[+] Ghost Protocol</div>
                                        {i > 0 && <div>[+] Neural Link API</div>}
                                        {i > 1 && <div>[+] Priority Access</div>}
                                    </div>
                                </div>
                                <button className={`w-full py-4 font-bold text-sm tracking-widest uppercase transition-all ${i === 1 ? 'bg-cyan-500 text-black hover:bg-white' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                                    Execute
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
