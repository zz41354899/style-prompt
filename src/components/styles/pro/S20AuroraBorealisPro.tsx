import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Sparkles, Star, Moon } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S20AuroraBorealisPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: { primary: '#0A0E27', secondary: '#151933' },
        text: { primary: '#E8F4FD', secondary: '#B8D4E3', muted: '#7A9BB0' },
        brand: { primary: '#00D4FF', secondary: '#7B2FF7', accent: '#00FF88' },
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
            <section style={{ padding: `160px ${spacing.lg}`, position: 'relative' }}>
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="mb-12 inline-block px-8 py-2 rounded-full border border-sky-400/20 bg-sky-950/20 backdrop-blur-md shadow-[0_0_30px_rgba(0,212,255,0.1)]">
                        <span className="text-[11px] font-black tracking-[0.4em] uppercase text-sky-400 group flex items-center gap-3">
                            <Star size={12} className="animate-pulse" />
                            Celestial_Experience_System
                        </span>
                    </div>

                    <h1 className="mb-12 font-black leading-[1.1] max-w-5xl italic"
                        style={{ fontSize: isMobile ? '64px' : '110px', textShadow: '0 0 40px rgba(0,212,255,0.4)' }}>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 animate-gradient-x">TRANSCEND</span> <br />
                        THE BEYOND
                    </h1>

                    <p className="max-w-2xl font-light"
                        style={{ fontSize: '20px', lineHeight: 2, color: '#B8D4E3', marginBottom: '64px' }}>
                        Architecting digital interfaces with the luminous flow and ethereal energy of cosmic phenomena. Elevating interactions to a celestial state.
                    </p>

                    <div className="flex gap-12 items-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="group relative px-16 py-6 overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(0,212,255,0.3)] hover:shadow-[0_0_80px_rgba(0,212,255,0.5)] transition-all duration-700">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 animate-pulse" />
                            <div className="relative z-10 flex items-center gap-4 text-white font-black tracking-widest text-sm uppercase">
                                ENTER_VAULT
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                            </div>
                        </button>
                        <button className="px-16 py-6 border border-sky-400/30 rounded-2xl bg-sky-950/20 backdrop-blur-md hover:bg-sky-400/10 transition-all duration-700 text-sky-200 font-black tracking-widest text-sm uppercase">
                            VIEW_GALAXY
                        </button>
                    </div>

                    {/* Stats Display */}
                    <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-4xl">
                        {[
                            { label: 'COSMIC_SCALE', value: '4.8M+' },
                            { label: 'LITE_YEARS', value: '99.9%' },
                            { label: 'QUASAR_CORE', value: '88ms' },
                            { label: 'VOID_NODES', value: '2.4K' }
                        ].map((stat) => (
                            <div key={stat.label} className="text-center group">
                                <div className="text-3xl font-black mb-4 group-hover:text-cyan-400 transition-colors" style={{ textShadow: '0 0 10px rgba(0,212,255,0.2)' }}>{stat.value}</div>
                                <div className="text-[10px] font-black tracking-widest uppercase opacity-40">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="font-black italic mb-6 uppercase tracking-[0.2em]"
                            style={{ fontSize: isMobile ? '32px' : '48px', textShadow: '0 0 20px rgba(0,212,255,0.3)' }}>
                            Luminous_Systems
                        </h2>
                        <div className="w-24 h-[1px] bg-sky-400 opacity-20 mx-auto" />
                    </div>

                    <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { icon: Sparkles, title: 'Ether_Fluidity', desc: 'Seamlessly flowing interfaces that adapt to user intent with liquid precision.', color: colors.brand.primary },
                            { icon: Moon, title: 'Dark_Matter', desc: 'Deep-space aesthetic optimization ensuring high visual comfort and elite focus.', color: colors.brand.secondary },
                            { icon: Star, title: 'Stellar_Speed', desc: 'Hardware-accelerated rendering processes for light-speed performance levels.', color: colors.brand.accent },
                        ].map((item) => (
                            <div key={item.title} className="group relative p-12 rounded-[2rem] border border-sky-400/10 bg-sky-950/10 backdrop-blur-xl transition-all duration-700 hover:-translate-y-4 hover:border-sky-400/30">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700" style={{ background: `radial-gradient(circle at center, ${item.color}, transparent 70%)` }} />
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-sky-900/20 border border-sky-400/20 shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                                    <item.icon size={32} style={{ color: item.color }} className="group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="font-black mb-6 tracking-widest uppercase italic text-sky-100" style={{ fontSize: '20px' }}>{item.title}</h3>
                                <p className="font-light leading-relaxed opacity-60" style={{ fontSize: '16px' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, position: 'relative' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="font-black italic mb-6 uppercase tracking-[0.2em]"
                            style={{ fontSize: isMobile ? '32px' : '48px', textShadow: '0 0 20px rgba(0,212,255,0.3)' }}>
                            Expansion_Plans
                        </h2>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'Starlight', price: '$29', color: colors.brand.primary, feats: ['Orbital Auth', 'Spectral Support', '1 Space Port'] },
                            { name: 'Aurora', price: '$79', color: colors.brand.secondary, feats: ['All Phenomena', '24/7 Intel', 'Unlimited Ports', 'Core Shaders'], hot: true },
                            { name: 'Cosmos', price: '$149', color: colors.brand.accent, feats: ['Void Access', 'Priority Stream', 'Custom Nebulas', 'Dev Council'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="relative group p-16 rounded-[3rem] border border-sky-400/10 bg-sky-950/10 backdrop-blur-3xl overflow-hidden flex flex-col h-full"
                                style={{ boxShadow: plan.hot ? `0 0 50px ${colors.brand.secondary}20` : 'none' }}>
                                {plan.hot && (
                                    <div className="absolute top-0 right-0 px-8 py-3 bg-gradient-to-l from-purple-600 to-cyan-500 text-[10px] font-black tracking-widest uppercase">MOST_ALIGNED</div>
                                )}
                                <div className="mb-12">
                                    <div className="text-[12px] font-black tracking-[0.3em] uppercase mb-4" style={{ color: plan.color }}>{plan.name}_PHASE</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-black italic">{plan.price}</span>
                                        <span className="text-sm opacity-40 uppercase tracking-widest">/cycle</span>
                                    </div>
                                </div>
                                <ul className="space-y-6 mb-16 flex-grow">
                                    {plan.feats.map((f) => (
                                        <li key={f} className="flex items-center gap-4 text-[14px] font-light tracking-wide italic opacity-70">
                                            <Check size={16} style={{ color: plan.color }} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-6 rounded-2xl font-black tracking-[0.2em] uppercase transition-all duration-700 relative overflow-hidden group/btn">
                                    <div className="absolute inset-0 transition-opacity duration-700 opacity-10 group-hover/btn:opacity-40" style={{ backgroundColor: plan.color }} />
                                    <div className="absolute inset-0 border border-sky-400/20 group-hover/btn:border-sky-400/60 rounded-2xl transition-all" />
                                    <span style={{ color: plan.color }}>COMMENCE</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="font-black italic mb-6 uppercase tracking-[0.2em]"
                            style={{ fontSize: isMobile ? '32px' : '48px', textShadow: '0 0 20px rgba(0,212,255,0.3)' }}>
                            Cosmic_Enquiry
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'WHAT IS THE SOURCE OF THE LIGHT?', a: 'OUR DESIGN SYSTEM HARNESSES HIGH-PERFORMANCE CSS MESH GRADIENTS AND OPTIMIZED RADIANCE SHADERS FOR A CELESTIAL EXPERIENCE.' },
                            { q: 'ARE THE SYSTEMS INTERSTELLAR-READY?', a: 'YES. ALL COMPONENTS ARE BUILT WITH QUANTUM-SAFE SCALING AND FULL CROSS-GALAXY BROWSER COMPATIBILITY.' },
                            { q: 'CAN I CUSTOMIZE THE NEBULA?', a: 'ABSOLUTELY. EVERY RADIANT VARIABLE AND GLOW PARAMETER CAN BE TUNED THROUGH OUR STELLAR DASHBOARD.' },
                        ].map((item, i) => (
                            <div key={i} className="group overflow-hidden rounded-[2rem] border border-sky-400/10 bg-sky-950/10 backdrop-blur-xl transition-all duration-700">
                                <button className="w-full flex items-center justify-between p-10 text-left transition-all hover:bg-sky-400/5"
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-black tracking-widest text-sky-100 italic" style={{ fontSize: '18px' }}>{item.q}</span>
                                    <div className="w-10 h-10 rounded-full border border-sky-400/20 flex items-center justify-center group-hover:border-sky-400/50 transition-all"
                                        style={{ transform: expandedFaq === i ? 'rotate(180deg)' : 'none' }}>
                                        <ChevronDown size={20} className="text-sky-400" />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="animate-in fade-in slide-in-from-top-4 duration-700" style={{ padding: '0 40px 40px', fontSize: '15px', lineHeight: 2, color: '#B8D4E3', fontWeight: 300 }}>
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
