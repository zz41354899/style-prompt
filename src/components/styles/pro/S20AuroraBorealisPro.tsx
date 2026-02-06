import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Sparkles, Star, Moon } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S20AuroraBorealisPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: { primary: '#030508', secondary: '#0B101A' }, // Ultra dark void
        text: { primary: '#E0F7FF', secondary: '#9ACBD9', muted: '#5A7B8C' },
        brand: { primary: '#4CC9F0', secondary: '#7209B7', accent: '#4361EE' }, // Neon Cyber
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen relative overflow-hidden text-[#E8F4FD]"
            style={{
                backgroundColor: '#05070A',
                fontFamily: '"Space Grotesk", "Outfit", sans-serif',
                letterSpacing: '-0.01em'
            }}>
            {/* ========== DYNAMIC AURORA BACKGROUND ========== */}
            <div className="absolute inset-0 pointer-events-none -z-10 bg-[#05070A]">
                {/* Primary Aurora Band */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-[20%] -left-[10%] w-[120%] h-[140%] opacity-40 mix-blend-screen animate-[aurora_20s_infinite_linear]"
                        style={{
                            background: `radial-gradient(circle at 50% 50%, ${colors.brand.primary}40 0%, transparent 60%),
                                         radial-gradient(circle at 20% 80%, ${colors.brand.secondary}30 0%, transparent 50%),
                                         radial-gradient(circle at 80% 30%, ${colors.brand.accent}20 0%, transparent 40%)`,
                            filter: 'blur(100px)'
                        }} />
                </div>

                {/* Floating Luminous Blobs */}
                <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] opacity-20 blur-[120px] animate-pulse" style={{ backgroundColor: colors.brand.primary }} />
                <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] opacity-10 blur-[100px]" style={{ backgroundColor: colors.brand.secondary, animationDelay: '2s' }} />

                {/* Stardust Subtle Overlay */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
            </div>

            <style>{`
                @keyframes aurora {
                    0% { transform: scale(1) translate(0, 0) rotate(0deg); }
                    33% { transform: scale(1.1) translate(2%, 5%) rotate(5deg); }
                    66% { transform: scale(0.9) translate(-5%, -2%) rotate(-5deg); }
                    100% { transform: scale(1) translate(0, 0) rotate(0deg); }
                }
            `}</style>

            {/* ========== NAVIGATION ========== */}
            <header className="sticky top-0 z-50 backdrop-blur-2xl"
                style={{ backgroundColor: 'rgba(5,7,10,0.6)', borderBottom: '1px solid rgba(0,212,255,0.1)' }}>
                <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ padding: '24px 40px' }}>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative">
                            <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                            <div className="relative w-10 h-10 rounded-2xl flex items-center justify-center border border-sky-400/30 bg-sky-950/20 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                                <Moon size={22} className="text-sky-300 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                        <span className="text-2xl font-black tracking-widest uppercase italic" style={{ textShadow: '0 0 10px rgba(0,212,255,0.3)' }}>Aurora</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['Phenomena', 'Cosmos', 'Ether', 'Luminance'].map((item) => (
                                <span key={item} className="text-[12px] font-bold tracking-[0.2em] uppercase cursor-pointer hover:text-cyan-400 transition-all duration-300">
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-8">
                        {!isMobile && (
                            <button className="relative group px-8 py-2 overflow-hidden rounded-full font-bold text-[13px] tracking-widest uppercase transition-all">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-emerald-500 animate-gradient" />
                                <div className="absolute inset-[1px] bg-[#05070A] rounded-full group-hover:bg-transparent transition-colors duration-500" />
                                <span className="relative z-10 group-hover:text-white transition-colors duration-500">IGNITE</span>
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-sky-200">
                                {menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-500 bg-[#05070A]/95 p-10 space-y-8 backdrop-blur-3xl border-b border-sky-400/20">
                        {['PHENOMENA', 'COSMOS', 'ETHER', 'LUMINANCE'].map((item) => (
                            <div key={item} className="text-2xl font-black tracking-widest border-b border-sky-900/40 pb-4 text-sky-100">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: `180px ${spacing.lg} 120px`, position: 'relative' }}>
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                    <div className="mb-12 inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#4CC9F0]" />
                        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-cyan-100">
                            Atmospheric_Interface_System
                        </span>
                    </div>

                    <h1 className="mb-12 font-bold leading-[1] max-w-6xl tracking-tight"
                        style={{ fontSize: isMobile ? '56px' : '120px', textShadow: '0 0 80px rgba(76, 201, 240, 0.3)' }}>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200">LUMINOUS</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-500 animate-gradient-x">HORIZONS</span>
                    </h1>

                    <p className="max-w-2xl font-light opacity-80"
                        style={{ fontSize: '22px', lineHeight: 1.8, color: colors.text.secondary, marginBottom: '72px' }}>
                        A visual language born from the collision of solar winds and magnetic fields. Experience the ethereal flow of pure light.
                    </p>

                    <div className="flex gap-12 items-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="group relative px-12 py-5 overflow-hidden rounded-full shadow-[0_0_40px_rgba(76,201,240,0.4)] hover:shadow-[0_0_80px_rgba(114,9,183,0.6)] transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:scale-110 transition-transform duration-700" />
                            <span className="relative z-10 text-white font-bold tracking-[0.2em] text-sm uppercase flex items-center gap-3">
                                Enter Velocity
                                <ArrowRight size={16} />
                            </span>
                        </button>
                        <button className="px-12 py-5 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-500 text-cyan-100 font-bold tracking-[0.2em] text-sm uppercase backdrop-blur-sm">
                            Explore Data
                        </button>
                    </div>

                    {/* Stats Display */}
                    <div className="mt-48 w-full border-t border-white/5 pt-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            {[
                                { label: 'Luminosity', value: '100%' },
                                { label: 'Refraction', value: '1.45' },
                                { label: 'Frequency', value: '60Hz' },
                                { label: 'Spectrum', value: 'Full' }
                            ].map((stat) => (
                                <div key={stat.label} className="text-center group cursor-default">
                                    <div className="text-3xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-500">{stat.value}</div>
                                    <div className="text-[10px] uppercase tracking-[0.3em] opacity-30 group-hover:opacity-60 transition-opacity">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="font-bold mb-6 uppercase tracking-[0.2em] text-sm text-cyan-400">
                            Core Flux
                        </h2>
                        <div className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
                            Systems designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">infinite scalability</span>
                        </div>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { icon: Sparkles, title: 'Ether Fluidity', desc: 'Seamlessly flowing interfaces that adapt to user intent with liquid precision.', color: colors.brand.primary },
                            { icon: Moon, title: 'Dark Matter', desc: 'Deep-space aesthetic optimization ensuring high visual comfort and elite focus.', color: colors.brand.secondary },
                            { icon: Star, title: 'Stellar Speed', desc: 'Hardware-accelerated rendering processes for light-speed performance levels.', color: colors.brand.accent },
                        ].map((item) => (
                            <div key={item.title} className="group relative p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="mb-8 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon size={24} style={{ color: item.color }} />
                                </div>

                                <h3 className="font-bold mb-4 text-xl tracking-tight">{item.title}</h3>
                                <p className="font-light leading-relaxed opacity-60 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, position: 'relative' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="font-bold mb-6 uppercase tracking-[0.2em] text-sm text-purple-400">
                            Clearance Levels
                        </h2>
                    </div>

                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'Observer', price: '$29', color: colors.brand.primary, feats: ['Orbital Auth', 'Spectral Support', '1 Space Port'] },
                            { name: 'Voyager', price: '$79', color: colors.brand.secondary, feats: ['All Phenomena', '24/7 Intel', 'Unlimited Ports', 'Core Shaders'], hot: true },
                            { name: 'Architect', price: '$149', color: colors.brand.accent, feats: ['Void Access', 'Priority Stream', 'Custom Nebulas', 'Dev Council'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="relative group p-10 rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col h-full hover:border-white/20 transition-all duration-500"
                                style={{ boxShadow: plan.hot ? `0 0 50px ${plan.color}10` : 'none' }}>

                                {plan.hot && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg">
                                        Recommended
                                    </div>
                                )}

                                <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                                    <div className="text-sm font-bold tracking-widest uppercase mb-2 opacity-60">{plan.name}</div>
                                    <div className="text-4xl font-bold tracking-tight">{plan.price}</div>
                                </div>

                                <ul className="space-y-4 mb-12 flex-grow px-4">
                                    {plan.feats.map((f) => (
                                        <li key={f} className="flex items-center gap-3 text-sm font-light opacity-70">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: plan.color }} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-xs transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    style={{
                                        backgroundColor: plan.hot ? 'white' : 'transparent',
                                        color: plan.hot ? 'black' : 'white',
                                        border: plan.hot ? 'none' : '1px solid rgba(255,255,255,0.2)'
                                    }}>
                                    Initialize
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="font-bold mb-6 uppercase tracking-[0.2em] text-sm text-white/40">
                            Void Log
                        </h2>
                    </div>

                    <div className="space-y-px bg-white/10 border border-white/5 rounded-2xl overflow-hidden">
                        {[
                            { q: 'WHAT IS THE SOURCE OF THE LIGHT?', a: 'Our design system harnesses high-performance CSS mesh gradients and optimized radiance shaders for a celestial experience.' },
                            { q: 'ARE THE SYSTEMS INTERSTELLAR-READY?', a: 'Yes. All components are built with quantum-safe scaling and full cross-galaxy browser compatibility.' },
                            { q: 'CAN I CUSTOMIZE THE NEBULA?', a: 'Absolutely. Every radiant variable and glow parameter can be tuned through our stellar dashboard.' },
                        ].map((item, i) => (
                            <div key={i} className="group bg-[#0B101A]">
                                <button className="w-full flex items-center justify-between p-8 text-left hover:bg-white/5 transition-colors duration-300"
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium tracking-wide text-sm">{item.q}</span>
                                    <div className={`transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''} opacity-50`}>
                                        <ChevronDown size={16} />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-8 pb-8 pt-0 text-sm leading-relaxed opacity-60 font-light">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-7xl mx-auto relative group overflow-hidden rounded-[4rem] p-24 text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-emerald-900/40 animate-gradient-x blur-3xl" />
                    <div className="absolute inset-0 border border-sky-400/20 rounded-[4rem] group-hover:border-sky-400/40 transition-all duration-700" />

                    <h2 className="relative z-10 font-black italic mb-12 uppercase tracking-[0.2em]"
                        style={{ fontSize: isMobile ? '48px' : '82px', textShadow: '0 0 40px rgba(0,212,255,0.4)' }}>
                        REACH_THE_<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">EVENT_HORIZON</span>
                    </h2>

                    <p className="relative z-10 max-w-xl mx-auto mb-16 opacity-60 font-light" style={{ fontSize: '20px', lineHeight: 2 }}>
                        Evolve your digital identity into a luminous masterpiece. Enter the aurora and transform your vision.
                    </p>

                    <button className="relative z-10 group/cta px-20 py-8 overflow-hidden rounded-2xl shadow-[0_0_60px_rgba(0,212,255,0.4)] hover:shadow-[0_0_100px_rgba(0,212,255,0.6)] transition-all duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500" />
                        <div className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity bg-white/20" />
                        <span className="relative z-10 text-white font-black tracking-[0.5em] text-lg uppercase italic">ASCEND_NOW</span>
                    </button>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer style={{ padding: '120px 40px 60px', borderTop: '1px solid rgba(0,212,255,0.1)' }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-24">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <Moon size={24} className="text-cyan-400 shadow-[0_0_20px_rgba(0,212,255,0.4)]" />
                            <span className="text-2xl font-black tracking-widest uppercase italic">Aurora.</span>
                        </div>
                        <p className="max-w-xs font-light tracking-wide italic opacity-40 text-[13px] leading-relaxed">
                            Crafting ethereal digital experiences through the lens of cosmic phenomena and radiant energy.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-32">
                        {['DIMENSIONS', 'QUASAR', 'VOID'].map(cat => (
                            <div key={cat}>
                                <div className="text-[10px] font-black tracking-[0.4em] mb-10 opacity-30 uppercase">{cat}</div>
                                {['Sync', 'Status', 'Reset'].map(item => (
                                    <div key={item} className="mb-4 text-[13px] font-bold tracking-widest uppercase hover:text-cyan-400 cursor-pointer transition-colors opacity-60 hover:opacity-100">{item}</div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:items-end gap-2 font-black italic text-[12px] tracking-widest">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <span className="opacity-40">SYSTEM_ONLINE</span>
                        </div>
                        <span className="opacity-20 uppercase">© 2025 Celestial_Labs</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
