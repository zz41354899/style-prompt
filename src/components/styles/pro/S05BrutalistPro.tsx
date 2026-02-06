import { useState } from 'react';
import { Menu, X, ArrowRight, Terminal, Code, Cpu, Shield, Zap, Database, Server } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S05BrutalistPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    // S05 Brutalist Design Tokens (Neo-Brutalism)
    const colors = {
        bg: '#FFFFFF',
        primary: '#000000',
        accent: '#00FF94', // Acid Green
        secondary: '#C0C0C0', // Raw grey
        warning: '#FF5C00',
        error: '#FF003C'
    };

    // Inject styles for marquee and glitch effects
    const styles = `
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
        .cursor-blink {
            animation: blink 1s step-end infinite;
        }
    `;

    return (
        <div className="min-h-screen font-mono overflow-x-hidden" style={{ backgroundColor: colors.bg, color: colors.primary }}>
            {/* ========== 1. HEADER ========== */}
            <header className="border-b-4 border-black sticky top-0 bg-white z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-stretch h-16">
                    <div className="flex items-center px-6 border-r-4 border-black font-black text-2xl uppercase tracking-tighter bg-green-400">
                        CRUDE_API
                    </div>

                    {!isMobile && (
                        <nav className="flex-1 flex items-stretch">
                            {['Docs', 'Pricing', 'Status', 'Changelog'].map(item => (
                                <a key={item} className="flex items-center px-8 border-r-4 border-black font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-pointer text-sm">
                                    {item}
                                </a>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-stretch">
                        {!isMobile && (
                            <button className="px-8 font-black uppercase bg-black text-white hover:bg-green-400 hover:text-black transition-colors border-l-4 border-black">
                                Terminal
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="px-6 border-l-4 border-black hover:bg-green-400 transition-colors">
                                {menuOpen ? <X /> : <Menu />}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="bg-white border-b-4 border-black p-6 flex flex-col gap-4">
                        {['Docs', 'Pricing', 'Status', 'Changelog'].map(item => (
                            <a key={item} className="text-xl font-black uppercase hover:text-green-600 hover:underline decoration-4 decoration-black underline-offset-4">{item}</a>
                        ))}
                        <button className="px-8 py-4 font-black uppercase bg-black text-white hover:bg-green-400 hover:text-black transition-colors w-full mt-4">
                            Terminal
                        </button>
                    </div>
                )}
            </header>

            {/* ========== 2. HERO ========== */}
            {/* ========== 2. HERO ========== */}
            <section className="border-b-4 border-black relative overflow-hidden">
                <style>{styles}</style>
                <div className="max-w-7xl mx-auto" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', minHeight: isMobile ? 'auto' : '700px' }}>
                    <div className={`p-6 md:p-12 flex flex-col justify-center ${isMobile ? '' : 'border-r-4 border-black'} space-y-8 bg-white z-10`}>
                        <div className="bg-yellow-400 border-4 border-black inline-block px-4 py-2 font-black text-sm transform -rotate-2 w-max shadow-[6px_6px_0_0_black]">
                            WARNING: SHIPS FAST
                        </div>
                        <h1 style={{ fontSize: isMobile ? '3.5rem' : '6rem' }} className="font-black uppercase leading-[0.85] tracking-tighter">
                            RAW<br />
                            INFRA_<br />
                            <span className="bg-black text-white px-2">STRUCTURE</span>
                        </h1>
                        <p className="text-xl font-bold max-w-md border-l-8 border-green-400 pl-6 py-2 leading-tight">
                            No wrappers. No abstraction. Just pure, unadulterated code for engineers who aren't afraid of the terminal.
                        </p>
                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 pt-4`}>
                            <button className="bg-green-400 border-4 border-black px-10 py-5 font-black uppercase text-xl hover:translate-x-2 hover:translate-y-2 hover:shadow-none shadow-[10px_10px_0_0_black] transition-all">
                                Deploy_Node
                            </button>
                            <button className="bg-white border-4 border-black px-10 py-5 font-bold uppercase text-xl hover:bg-gray-100 shadow-[10px_10px_0_0_rgba(0,0,0,0.1)]">
                                Read_Man
                            </button>
                        </div>
                    </div>
                    {!isMobile && (
                        <div className="bg-gray-100 p-12 flex flex-col relative overflow-hidden justify-center items-center">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,#00000010_1px,transparent_1px),linear-gradient(-45deg,#00000010_1px,transparent_1px)] bg-[size:20px_20px]" />
                            <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-xl border-l-4 border-b-4 border-black">LIVE_FEED</div>

                            {/* Terminal Window */}
                            <div className="bg-black text-green-400 p-8 font-mono text-sm border-4 border-black shadow-[16px_16px_0_0_rgba(0,0,0,0.2)] w-full max-w-lg z-10 relative">
                                <div className="flex gap-2 mb-6 border-b border-green-900 pb-4">
                                    <div className="w-4 h-4 rounded-full bg-red-500 border border-green-900/50" />
                                    <div className="w-4 h-4 rounded-full bg-yellow-500 border border-green-900/50" />
                                    <div className="w-4 h-4 rounded-full bg-green-500 border border-green-900/50" />
                                </div>
                                <div className="space-y-2 opacity-90">
                                    <div className="flex">
                                        <span className="text-yellow-400 mr-2">➜</span>
                                        <span>~ curl -X POST api.crude.dev/cluster</span>
                                    </div>
                                    <div className="text-gray-500 italic pb-2">{`// Initializing bare metal nodes...`}</div>
                                    <div className="pl-4 border-l-2 border-green-800 text-green-300">
                                        {`{`}
                                        <div className="pl-4">
                                            {`"id": "cl_8x92m",`}
                                            <br />
                                            {`"region": "us-east-1",`}
                                            <br />
                                            {`"status": "allocating",`}
                                            <br />
                                            {`"nodes": [`}<span className="text-yellow-400 cursor-blink">█</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ========== 9. TRUST MARQUEE ========== */}
            <section className="border-b-4 border-black overflow-hidden bg-yellow-400 py-4">
                <div className="whitespace-nowrap flex gap-8 font-black text-xl md:text-2xl uppercase px-4" style={{ animation: isMobile ? 'none' : 'marquee 20s linear infinite' }}>
                    {(isMobile ? ['Netflix', 'Uber', 'Stripe'] : ['Netflix', 'Uber', 'Stripe', 'Vercel', 'Meta', 'Netflix', 'Uber', 'Stripe', 'Vercel', 'Meta']).map((b, i) => (
                        <span key={i} className="flex items-center gap-4 flex-shrink-0">
                            {b} <span className="text-black/20">●</span>
                        </span>
                    ))}
                </div>
            </section>

            {/* ========== 3. PROBLEM / NO FLUFF ========== */}
            <section className="bg-black text-white py-24 px-6 border-b-4 border-white relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black uppercase mb-20 text-center leading-none">
                        Stop Using<br />
                        <span className="text-transparent stroke-text-white" style={{ WebkitTextStroke: '2px white' }}>Toy Tools</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
                        {[
                            { icon: Shield, title: 'Bloated SDKs', desc: 'Stop importing 40MB of dependencies for one function.' },
                            { icon: Zap, title: 'Latency Spikes', desc: 'Serverless cold starts are killing your conversion.' },
                            { icon: Database, title: 'Data Lock-in', desc: 'Proprietary databases that you can\'t export from.' }
                        ].map((item, i) => (
                            <div key={i} className="border-4 border-white p-8 hover:bg-green-400 hover:text-black hover:border-black transition-colors group cursor-crosshair">
                                <item.icon size={56} className="mb-8 group-hover:stroke-[3px] group-hover:rotate-12 transition-transform" />
                                <h3 className="text-3xl font-black uppercase mb-4">{item.title}</h3>
                                <p className="font-bold text-lg opacity-80 leading-relaxed font-mono">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 6. BENTO GRID ========== */}
            <section className="py-24 px-6 bg-yellow-50 border-b-4 border-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className={`${isMobile ? 'text-4xl' : 'text-8xl'} font-black uppercase mb-16 leading-none tracking-tighter`}>
                        Infra_<br />Assets
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gridTemplateRows: isMobile ? 'auto' : 'repeat(2, 1fr)', gap: '24px', minHeight: isMobile ? 'auto' : '800px' }}>
                        {/* Box 1 */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2', gridRow: isMobile ? 'auto' : 'span 2' }} className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_black] flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0_0_black] transition-all duration-75">
                            <div>
                                <div className="bg-black text-white inline-block px-3 py-1 text-sm font-black mb-6 transform -rotate-1">COMPUTE NODE</div>
                                <h3 className={`${isMobile ? 'text-3xl' : 'text-6xl'} font-black uppercase leading-[0.9] mb-6`}>Bare Metal<br />Performance</h3>
                                <p className="text-2xl font-bold border-l-4 border-black pl-4">Direct access to hardware. No virtualization overhead.</p>
                            </div>
                            <div className="grid grid-cols-4 gap-3 mt-12 bg-gray-100 p-4 border-2 border-black border-dashed">
                                {Array.from({ length: 16 }).map((_, i) => (
                                    <div key={i} className="aspect-square border-2 border-black bg-green-400 hover:bg-black transition-colors cursor-pointer" />
                                ))}
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }} className="bg-green-400 border-4 border-black p-8 flex items-center justify-between shadow-[12px_12px_0_0_black] group hover:bg-black hover:text-green-400 transition-colors">
                            <div>
                                <h3 className="text-4xl font-black uppercase mb-2">Global Edge</h3>
                                <p className="font-bold text-xl font-mono">// 35ms Latency</p>
                            </div>
                            <div className={`${isMobile ? 'text-4xl' : 'text-7xl'} font-black group-hover:scale-110 transition-transform`}>35ms</div>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-black text-white p-8 border-4 border-black shadow-[12px_12px_0_0_gray] flex flex-col justify-between">
                            <Terminal size={64} className="mb-4 text-green-400" />
                            <h3 className="text-3xl font-black uppercase text-green-400">$ CLI First</h3>
                        </div>

                        {/* Box 4 */}
                        <div className="bg-white p-8 border-4 border-black flex flex-col justify-center items-center text-center shadow-[12px_12px_0_0_black] relative overflow-hidden group">
                            <div className="text-[120px] font-black opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 group-hover:rotate-0 transition-transform">99</div>
                            <div className="text-6xl font-black mb-2 relative z-10">99.99%</div>
                            <div className="font-black bg-yellow-400 px-4 py-1 text-xl border-2 border-black transform rotate-3 relative z-10">UPTIME SLA</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== 12. PRICING ========== */}
            <section className="py-24 px-6 bg-white border-b-4 border-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className={`${isMobile ? 'text-3xl' : 'text-6xl'} font-black uppercase mb-16 text-center`}>Pay For What You Use</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
                        {[
                            { name: 'Hobby', price: '$0', desc: 'For tinkering' },
                            { name: 'Pro', price: '$29', desc: 'For shipping', color: 'bg-green-400' },
                            { name: 'Scale', price: '$499', desc: 'For dominating', color: 'bg-black text-white' }
                        ].map((plan, i) => (
                            <div key={i} className={`border-4 border-black p-8 flex flex-col ${plan.color || 'bg-white'} shadow-[16px_16px_0_0_black] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0_0_black] transition-all duration-100 group`}>
                                <h3 className="text-3xl font-black uppercase mb-4 tracking-tight backdrop-blur-sm">{plan.name}</h3>
                                <div className="text-7xl font-black mb-6">{plan.price}</div>
                                <p className={`font-bold border-t-4 pt-4 mb-8 text-xl ${plan.color === 'bg-black text-white' ? 'border-white' : 'border-black'}`}>{plan.desc}</p>
                                <ul className="space-y-4 mb-12 flex-1 font-mono text-sm">
                                    {['Unlimited Repo', 'Global CDN', 'DDoS Protection'].map(f => (
                                        <li key={f} className="flex items-center gap-2 font-bold uppercase"><div className={`w-4 h-4 border-2 ${plan.color === 'bg-black text-white' ? 'border-white bg-green-400' : 'border-black bg-black'}`} /> {f}</li>
                                    ))}
                                </ul>
                                <button className={`w-full border-4 py-5 font-black uppercase text-xl transition-colors ${plan.color === 'bg-black text-white' ? 'bg-white text-black border-white hover:bg-green-400 hover:border-black' : 'bg-black text-white border-black hover:bg-white hover:text-black'}`}>
                                    Select
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 14. FOOTER ========== */}
            <footer className="bg-black text-white py-12 px-6">
                <div className={`max-w-7xl mx-auto flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between items-center gap-8`}>
                    <div className="text-2xl font-black uppercase border-4 border-white p-2">
                        CRUDE_API
                    </div>
                    <div className="flex gap-8 font-bold uppercase text-sm">
                        <a className="hover:text-green-400 cursor-pointer">Manifesto</a>
                        <a className="hover:text-green-400 cursor-pointer">Twitter</a>
                        <a className="hover:text-green-400 cursor-pointer">GitHub</a>
                        <a className="hover:text-green-400 cursor-pointer">Status</a>
                    </div>
                    <div className="font-mono text-xs opacity-50">
                        NO COOKIES. NO TRACKING. JUST HOSTING.
                    </div>
                </div>
            </footer>
        </div>
    );
};
