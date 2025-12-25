import { useState } from 'react';
import { Menu, X, ArrowRight, Terminal, Code, Cpu, Shield, Zap, Database, Server } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S05BrutalistPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    // S05 Brutalist Design Tokens
    const colors = {
        bg: '#FFFFFF',
        primary: '#000000',
        accent: '#00FF94', // Neon Green
        secondary: '#C0C0C0', // Raw grey
        warning: '#FF5C00'
    };

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
                    <div className="fixed inset-0 top-16 bg-white z-40 border-b-4 border-black p-6 flex flex-col gap-6">
                        {['Docs', 'Pricing', 'Status', 'Changelog'].map(item => (
                            <a key={item} className="text-3xl font-black uppercase hover:text-green-600 hover:underline decoration-4 decoration-black underline-offset-4">{item}</a>
                        ))}
                    </div>
                )}
            </header>

            {/* ========== 2. HERO ========== */}
            <section className="border-b-4 border-black">
                <div className="max-w-7xl mx-auto" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', minHeight: isMobile ? 'auto' : '600px' }}>
                    <div className={`p-6 md:p-12 flex flex-col justify-center ${isMobile ? '' : 'border-r-4 border-black'} space-y-8`}>
                        <div className="bg-yellow-400 border-2 border-black inline-block px-2 py-1 font-bold text-xs transform -rotate-2 w-max shadow-[4px_4px_0_0_black]">
                            v4.0.0-RELEASE
                        </div>
                        <h1 style={{ fontSize: isMobile ? '2.25rem' : '4.5rem' }} className="font-black uppercase leading-[0.85] tracking-tighter">
                            Raw Power<br />
                            For Your<br />
                            <span className="bg-black text-white px-2">Backend.</span>
                        </h1>
                        <p className="text-xl font-bold max-w-md border-l-4 border-green-400 pl-4">
                            No wrappers. No abstraction. Just pure, unadulterated infrastructure for engineers who know what they're doing.
                        </p>
                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
                            <button className="bg-green-400 border-4 border-black px-8 py-4 font-black uppercase text-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0_0_black] transition-all">
                                Deploy Now
                            </button>
                            <button className="bg-white border-4 border-black px-8 py-4 font-bold uppercase text-lg hover:bg-gray-100">
                                Read Docs
                            </button>
                        </div>
                    </div>
                    {!isMobile && (
                        <div className="bg-gray-100 p-8 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 bg-black text-white text-xs font-bold">LIVE</div>
                            {/* Code Mockup */}
                            <div className="bg-black text-green-400 p-6 font-mono text-sm border-4 border-gray-400 shadow-[12px_12px_0_0_rgba(0,0,0,0.2)] flex-1 overflow-hidden">
                                <div className="flex gap-2 mb-4 border-b border-green-900 pb-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                {`$ curl -X POST https://api.crude.dev/v1/clusters \\
  -H "Authorization: Bearer sk_live_..." \\
  -d '{
    "region": "us-east-1",
    "nodes": 3,
    "size": "x2-large"
  }'

> Allocating resources...
> [OK] Cluster ID: cl_9f2a8x created
> [OK] DNS propagation complete (23ms)
> Ready for traffic.`}
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
            <section className="bg-black text-white py-24 px-6 border-b-4 border-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-black uppercase mb-16 text-center">Stop Using Toy Tools</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
                        {[
                            { icon: Shield, title: 'Bloated SDKs', desc: 'Stop importing 40MB of dependencies for one function.' },
                            { icon: Zap, title: 'Latency Spikes', desc: 'Serverless cold starts are killing your conversion.' },
                            { icon: Database, title: 'Data Lock-in', desc: 'Proprietary databases that you can\'t export from.' }
                        ].map((item, i) => (
                            <div key={i} className="border-4 border-white p-8 hover:bg-green-400 hover:text-black hover:border-black transition-colors group">
                                <item.icon size={48} className="mb-6 group-hover:stroke-[3px]" />
                                <h3 className="text-2xl font-black uppercase mb-4">{item.title}</h3>
                                <p className="font-bold text-lg opacity-80">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 6. BENTO GRID ========== */}
            <section className="py-24 px-6 bg-gray-50 border-b-4 border-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className={`${isMobile ? 'text-3xl' : 'text-6xl'} font-black uppercase mb-12 stroke-text-black`}>Infrastructure Assets</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gridTemplateRows: isMobile ? 'auto' : 'repeat(2, 1fr)', gap: '1rem', minHeight: isMobile ? 'auto' : '800px' }}>
                        {/* Box 1 */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2', gridRow: isMobile ? 'auto' : 'span 2' }} className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_black] flex flex-col justify-between">
                            <div>
                                <div className="bg-black text-white inline-block px-2 text-sm font-bold mb-4">COMPUTE</div>
                                <h3 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-black uppercase leading-none mb-4`}>Bare Metal<br />Performance</h3>
                                <p className="text-xl font-bold">Direct access to hardware. No virtualization overhead.</p>
                            </div>
                            <div className="grid grid-cols-4 gap-2 mt-8">
                                {Array.from({ length: 16 }).map((_, i) => (
                                    <div key={i} className="aspect-square border-2 border-black bg-green-400/20" />
                                ))}
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }} className="bg-green-400 border-4 border-black p-8 flex items-center justify-between shadow-[8px_8px_0_0_black]">
                            <div>
                                <h3 className="text-3xl font-black uppercase">Global Edge</h3>
                                <p className="font-bold">35ms to anywhere.</p>
                            </div>
                            <div className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-black`}>35ms</div>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0_0_gray]">
                            <Terminal size={48} className="mb-4 text-green-400" />
                            <h3 className="text-xl font-bold">CLI First</h3>
                        </div>

                        {/* Box 4 */}
                        <div className="bg-white p-8 border-4 border-black flex flex-col justify-center items-center text-center shadow-[8px_8px_0_0_black]">
                            <div className="text-5xl font-black mb-2">99.99%</div>
                            <div className="font-bold bg-yellow-400 px-2">SLA</div>
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
                            <div key={i} className={`border-4 border-black p-8 flex flex-col ${plan.color || 'bg-white'} shadow-[12px_12px_0_0_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}>
                                <h3 className="text-2xl font-black uppercase mb-4">{plan.name}</h3>
                                <div className="text-6xl font-black mb-4">{plan.price}</div>
                                <p className="font-bold border-t-4 border-current pt-4 mb-8">{plan.desc}</p>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {['Unlimited Repo', 'Global CDN', 'DDoS Protection'].map(f => (
                                        <li key={f} className="flex items-center gap-2 font-bold"><div className="w-3 h-3 bg-current" /> {f}</li>
                                    ))}
                                </ul>
                                <button className="w-full bg-white text-black border-4 border-black py-4 font-black uppercase text-lg hover:bg-yellow-400 transition-colors">
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
