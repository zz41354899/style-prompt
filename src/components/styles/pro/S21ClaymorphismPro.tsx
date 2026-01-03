import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Circle, Heart, Smile } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S21ClaymorphismPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: { primary: '#F0F4F8', secondary: '#E2E8F0', surface: '#FFFFFF' },
        text: { primary: '#2D3748', secondary: '#4A5568', muted: '#718096', accent: '#3182CE' },
        brand: { primary: '#4299E1', secondary: '#667EEA', accent: '#ED64A6' },
    };

    const clay = {
        base: '8px 8px 16px rgba(163,177,198,0.6), -8px -8px 16px rgba(255,255,255,0.8)',
        high: '12px 12px 24px rgba(163,177,198,0.5), -12px -12px 24px rgba(255,255,255,0.8), inset 4px 4px 8px rgba(255,255,255,0.3)',
        pressed: 'inset 6px 6px 12px rgba(163,177,198,0.5), inset -6px -6px 12px rgba(255,255,255,0.8)',
        gloss: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)',
        inner: 'inset 2px 2px 4px rgba(255,255,255,0.4), inset -2px -2px 4px rgba(0,0,0,0.05)',
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: colors.bg.primary, color: colors.text.primary, fontFamily: '"Outfit", "Quicksand", sans-serif' }}>

            {/* ========== SOFT BACKGROUND BLOBS ========== */}
            <div className="absolute inset-0 pointer-events-none -z-10 bg-[#F0F4F8]">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full opacity-30 blur-[100px]" style={{ backgroundColor: colors.brand.primary }} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: colors.brand.accent }} />
                <div className="absolute top-[20%] right-[5%] w-[30%] h-[30%] rounded-full opacity-20 blur-[80px]" style={{ backgroundColor: colors.brand.secondary }} />
            </div>

            {/* ========== NAVIGATION ========== */}
            <header className="sticky top-0 z-50 p-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-8 rounded-[2rem] bg-white transition-all duration-500 hover:scale-[1.01]"
                    style={{ boxShadow: clay.base }}>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center relative transition-transform duration-500 group-hover:rotate-12"
                            style={{ backgroundColor: colors.brand.primary, boxShadow: clay.high, background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})` }}>
                            <div className="absolute inset-0 rounded-2xl" style={{ background: clay.gloss }} />
                            <Circle size={24} color="white" fill="white" />
                        </div>
                        <span className="text-2xl font-black tracking-tight" style={{ color: colors.text.primary }}>Clay.</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['Mould', 'Sculpt', 'Glaze'].map((item) => (
                                <span key={item} className="text-sm font-bold tracking-wide cursor-pointer text-slate-500 hover:text-blue-500 transition-colors uppercase">
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-6">
                        {!isMobile && (
                            <button className="group px-8 py-3 rounded-2xl font-black text-sm tracking-widest text-white transition-all duration-500 hover:scale-110 active:scale-95 shadow-lg"
                                style={{ backgroundColor: colors.brand.primary, boxShadow: clay.high, background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})` }}>
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: clay.gloss }} />
                                TRY_FREE
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}
                                className="p-3 bg-white"
                                style={{ borderRadius: '1.5rem', boxShadow: clay.base }}>
                                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="mt-4 p-8 rounded-[2.5rem] bg-white animate-in fade-in slide-in-from-top-4 duration-500"
                        style={{ boxShadow: clay.high }}>
                        {['MOULD', 'SCULPT', 'GLAZE'].map((item) => (
                            <div key={item} className="py-5 text-xl font-black tracking-widest border-b border-slate-100">{item}</div>
                        ))}
                        <button className="w-full mt-8 py-6 rounded-3xl font-black tracking-widest text-white"
                            style={{ backgroundColor: colors.brand.primary, boxShadow: clay.high }}>
                            TRY_FREE
                        </button>
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: `120px 40px` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-3 mb-10 p-3 px-6 rounded-full bg-white transition-all hover:-translate-y-1"
                            style={{ boxShadow: clay.base }}>
                            <Smile size={20} className="text-blue-500 animate-bounce" />
                            <span className="text-[12px] font-black tracking-widest uppercase text-slate-400">Tactile_Experience_Design</span>
                        </div>

                        <h1 className="mb-10 font-black leading-[1.1] max-w-4xl"
                            style={{ fontSize: isMobile ? '56px' : '96px', color: colors.text.primary }}>
                            SOFT_TO_<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500">THE_TOUCH</span>
                        </h1>

                        <p className="max-w-2xl font-bold leading-relaxed text-slate-400 mb-16"
                            style={{ fontSize: '20px' }}>
                            Design interfaces that feel like soft clay. Tactile, friendly, and incredibly inviting. Elevating UX through the magic of squishy surfaces.
                        </p>

                        <div className="flex gap-10 items-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                            <button className="group relative px-16 py-8 rounded-3xl font-black tracking-widest transition-all duration-500 hover:scale-105 active:scale-95 text-white"
                                style={{ backgroundColor: colors.brand.primary, boxShadow: clay.high, background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})` }}>
                                <div className="absolute inset-0 rounded-3xl" style={{ background: clay.gloss }} />
                                <div className="relative z-10 flex items-center gap-3">
                                    START_MOULDING
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                                </div>
                            </button>
                            <button className="px-16 py-8 rounded-3xl font-black tracking-widest transition-all duration-500 hover:bg-white text-slate-600 active:scale-95"
                                style={{ boxShadow: clay.base }}>
                                VIEW_GALLERY
                            </button>
                        </div>

                        {/* Visual Ornament */}
                        <div className="mt-40 relative">
                            <div className="w-[300px] h-[300px] rounded-[4rem] bg-white relative overflow-hidden transition-all duration-1000 rotate-6 hover:rotate-0"
                                style={{ boxShadow: clay.high }}>
                                <div className="absolute inset-0 p-8 flex items-center justify-center">
                                    <div className="w-full h-full rounded-[3rem] bg-blue-500 relative group overflow-hidden"
                                        style={{ boxShadow: clay.high, background: `linear-gradient(135deg, #3B82F6, #8B5CF6)` }}>
                                        <div className="absolute inset-0" style={{ background: clay.gloss }} />
                                        <Heart size={80} className="text-white fill-white animate-pulse" />
                                    </div>
                                </div>
                            </div>
                            {/* Smaller Clay Blobs */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-pink-400 transition-all duration-700 hover:scale-125"
                                style={{ boxShadow: clay.high, background: clay.gloss + ', #F472B6' }} />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-[2rem] bg-emerald-400 rotate-12"
                                style={{ boxShadow: clay.high, background: clay.gloss + ', #34D399' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="font-black mb-6" style={{ fontSize: isMobile ? '36px' : '56px', color: colors.text.primary }}>
                            THE_ART_OF_CLAY
                        </h2>
                        <div className="w-24 h-2 bg-blue-500/10 rounded-full mx-auto" />
                    </div>

                    <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { icon: Circle, title: 'SOFT_GEOMETRY', desc: 'Interfaces built with friendly, rounded modules that invite interaction.', color: colors.brand.primary },
                            { icon: Heart, title: 'TACTILE_MODES', desc: 'A design system that feels physical, warm, and human-centric.', color: colors.brand.accent },
                            { icon: Smile, title: 'BOUNCY_FLOW', desc: 'Animation logic that prioritizes momentum and playful feedback cycles.', color: colors.brand.secondary },
                        ].map((item) => (
                            <div key={item.title} className="group relative p-12 rounded-[3.5rem] bg-white transition-all duration-700 hover:-translate-y-4"
                                style={{ boxShadow: clay.high }}>
                                <div className="absolute inset-0 rounded-[3.5rem]" style={{ background: clay.gloss }} />
                                <div className="w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 relative overflow-hidden group-hover:rotate-12 transition-transform duration-500"
                                    style={{ backgroundColor: item.color, boxShadow: clay.base }}>
                                    <div className="absolute inset-0" style={{ background: clay.gloss }} />
                                    <item.icon size={36} color="white" fill="white" />
                                </div>
                                <h3 className="text-xl font-black mb-6 tracking-widest uppercase">{item.title}</h3>
                                <p className="font-bold leading-relaxed text-slate-400" style={{ fontSize: '16px' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: '#F8FAFC' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="font-black mb-6" style={{ fontSize: isMobile ? '36px' : '56px', color: colors.text.primary }}>
                            CLAY_TIERS
                        </h2>
                    </div>

                    <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'STARTER', price: '$19', color: colors.brand.primary, feats: ['Basic Moulds', 'Clay Cloud', 'Web Export'] },
                            { name: 'DYNAMIC', price: '$49', color: colors.brand.secondary, feats: ['All Textures', 'Team Sculpt', 'Advanced Gloss', 'API Access'], hot: true },
                            { name: 'MASTER', price: '$99', color: colors.brand.accent, feats: ['Custom Alloys', 'Priority Glaze', 'Master Classes'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="relative group p-16 rounded-[4rem] bg-white transition-all duration-700 hover:scale-[1.05]"
                                style={{ boxShadow: plan.hot ? clay.high : clay.base }}>
                                {plan.hot && (
                                    <div className="absolute top-8 right-8 px-6 py-2 rounded-full bg-blue-500 text-white text-[10px] font-black tracking-widest uppercase shadow-lg">HOT</div>
                                )}
                                <div className="absolute inset-0 rounded-[4rem]" style={{ background: clay.gloss }} />
                                <div className="mb-12">
                                    <div className="text-[12px] font-black tracking-[0.3em] uppercase mb-4 opacity-30">{plan.name}_VOLUME</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-black italic">{plan.price}</span>
                                        <span className="text-sm opacity-40 uppercase tracking-widest">/mo</span>
                                    </div>
                                </div>
                                <ul className="space-y-6 mb-16">
                                    {plan.feats.map((f) => (
                                        <li key={f} className="flex items-center gap-4 text-[15px] font-bold text-slate-400">
                                            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-slate-100" style={{ boxShadow: clay.inner }}>
                                                <Check size={12} style={{ color: plan.color }} strokeWidth={4} />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-6 rounded-[2rem] font-black tracking-[0.2em] uppercase transition-all duration-500 relative overflow-hidden active:scale-95"
                                    style={{ backgroundColor: plan.hot ? colors.brand.primary : 'transparent', color: plan.hot ? 'white' : colors.text.primary, boxShadow: clay.high }}>
                                    <div className="absolute inset-0" style={{ background: clay.gloss }} />
                                    SELECT_MODE
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
                        <h2 className="font-black mb-6" style={{ fontSize: isMobile ? '36px' : '56px', color: colors.text.primary }}>
                            KNOWLEDGE_POT
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {[
                            { q: 'WHAT DEFINES THE CLAY AESTHETIC?', a: 'CLAYMORPHISM IS CHARACTERIZED BY SOFT INNER SHADOWS, MULTI-LAYERED EXTERNAL SHADOWS, AND HIGH BORDER RADII THAT MIMIC PLASTIC OR CLAY SURFACES.' },
                            { q: 'CAN THE TEXTURES BE ANIMATED?', a: 'YES. ALL SURFACES IN OUR SYSTEM SUPPORT LIQUID SCALE TRANSITIONS AND SQUISHY PHYSICS LOOPS FOR MAXIMUM ENGAGEMENT.' },
                            { q: 'IS THE GLAZE COMPATIBLE?', a: 'OUR HIGH-GLOSS OVERLAYS ARE OPTIMIZED FOR ALL MODERN BROWSERS AND HARDWARE-ACCELERATED FOR PEAK PERFORMANCE.' },
                        ].map((item, i) => (
                            <div key={i} className="group overflow-hidden rounded-[2.5rem] bg-white transition-all duration-500"
                                style={{ boxShadow: expandedFaq === i ? clay.pressed : clay.base }}>
                                <button className="w-full flex items-center justify-between p-10 text-left transition-all"
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-xl font-black tracking-widest italic">{item.q}</span>
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white transition-all"
                                        style={{ boxShadow: expandedFaq === i ? clay.pressed : clay.base, transform: expandedFaq === i ? 'rotate(180deg)' : 'none' }}>
                                        <ChevronDown size={24} className="text-blue-500" />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="animate-in fade-in slide-in-from-top-4 duration-500" style={{ padding: '0 40px 40px', fontSize: '17px', lineHeight: 2, color: '#4A5568', fontWeight: 700 }}>
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section style={{ padding: `${spacing.section} 40px` }}>
                <div className="max-w-7xl mx-auto relative group overflow-hidden rounded-[5rem] p-24 text-center bg-white"
                    style={{ boxShadow: clay.high }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-pink-500/10" />
                    <div className="absolute inset-0" style={{ background: clay.gloss }} />

                    <Heart size={80} className="mx-auto mb-12 text-pink-500 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12" fill="currentColor" />

                    <h2 className="relative z-10 font-black italic mb-10 uppercase tracking-[0.2em]"
                        style={{ fontSize: isMobile ? '48px' : '82px' }}>
                        FINAL_MOULD
                    </h2>

                    <p className="relative z-10 max-w-xl mx-auto mb-16 font-bold text-slate-400" style={{ fontSize: '22px', lineHeight: 1.8 }}>
                        Join the artisan movement. Create interfaces that users want to reach out and touch.
                    </p>

                    <button className="relative z-10 group/cta px-20 py-10 rounded-[2.5rem] transition-all duration-700 hover:scale-110 active:scale-95 text-white font-black tracking-[0.5em] text-xl uppercase"
                        style={{ backgroundColor: colors.brand.primary, boxShadow: clay.high, background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})` }}>
                        <div className="absolute inset-0 rounded-[2.5rem]" style={{ background: clay.gloss }} />
                        ENGAGE_NOW
                    </button>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer style={{ padding: '120px 40px 60px' }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 p-12 rounded-[3.5rem] bg-white"
                    style={{ boxShadow: clay.base }}>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                            style={{ backgroundColor: colors.brand.primary, boxShadow: clay.base, background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})` }}>
                            <Circle size={20} fill="white" />
                        </div>
                        <span className="text-2xl font-black italic tracking-tighter">Clay.Studio</span>
                    </div>

                    <div className="flex gap-12 font-black text-[12px] tracking-[0.3em] uppercase opacity-40">
                        <span>Legal</span>
                        <span>Ethics</span>
                        <span>Moulds</span>
                    </div>

                    <span className="text-sm font-bold text-slate-300 tracking-widest uppercase">© 2025 ARTISAN_DIGITAL</span>
                </div>
            </footer>
        </div>
    );
};
