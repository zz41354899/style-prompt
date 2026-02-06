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
        base: '10px 10px 20px rgba(166, 180, 200, 0.4), -10px -10px 20px rgba(255, 255, 255, 0.9)',
        high: '20px 20px 40px rgba(166, 180, 200, 0.3), -20px -20px 40px rgba(255, 255, 255, 0.95), inset 4px 4px 10px rgba(255, 255, 255, 0.4)',
        pressed: 'inset 8px 8px 16px rgba(166, 180, 200, 0.3), inset -8px -8px 16px rgba(255, 255, 255, 0.9)',
        gloss: 'linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 60%)',
        inner: 'inset 5px 5px 10px rgba(166, 180, 200, 0.1), inset -5px -5px 10px rgba(255, 255, 255, 0.8)',
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
            {/* ========== HERO ========== */}
            <section style={{ padding: `140px 40px 100px` }}>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col items-start z-10">
                        <div className="inline-flex items-center gap-3 mb-10 p-3 pr-6 rounded-full bg-[#F0F4F8] transition-all hover:scale-105 cursor-default"
                            style={{ boxShadow: clay.base }}>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm">
                                <Smile size={16} className="text-blue-500" />
                            </div>
                            <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Soft UI Design System</span>
                        </div>

                        <h1 className="mb-8 font-black leading-[1] text-6xl md:text-8xl tracking-tight text-slate-800">
                            Make it <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Pop & Soft.</span>
                        </h1>

                        <p className="max-w-lg font-medium text-slate-500 mb-12 text-xl leading-relaxed">
                            Interfaces that feel squishy, friendly, and touchable. A design language built on soft shadows and rounded dreams.
                        </p>

                        <div className="flex gap-6 w-full sm:w-auto flex-col sm:flex-row">
                            <button className="group relative px-10 py-5 rounded-[2rem] font-bold tracking-wider text-white transition-all hover:scale-105 active:scale-95"
                                style={{ backgroundColor: colors.brand.primary, boxShadow: clay.high }}>
                                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                                <span className="relative flex items-center gap-3">
                                    Start Creating
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                            <button className="px-10 py-5 rounded-[2rem] font-bold tracking-wider text-slate-600 transition-all hover:text-blue-500 hover:scale-105 active:scale-95 bg-[#F0F4F8]"
                                style={{ boxShadow: clay.base }}>
                                View Kit
                            </button>
                        </div>
                    </div>

                    {/* Visual Ornament */}
                    <div className="relative h-[500px] w-full flex items-center justify-center">
                        {/* Floating Elements */}
                        <div className="absolute w-64 h-64 bg-blue-400 rounded-[3rem] animate-[float_6s_ease-in-out_infinite]"
                            style={{ boxShadow: clay.high, background: 'linear-gradient(135deg, #60A5FA, #3B82F6)' }}>
                            <div className="absolute inset-0 rounded-[3rem]" style={{ background: clay.gloss }} />
                        </div>

                        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-400 rounded-full animate-[float_8s_ease-in-out_infinite_reverse]"
                            style={{ boxShadow: clay.high, background: 'linear-gradient(135deg, #A78BFA, #8B5CF6)' }}>
                            <div className="absolute inset-0 rounded-full" style={{ background: clay.gloss }} />
                        </div>

                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-400 rounded-[2rem] rotate-12 animate-[float_7s_ease-in-out_infinite_1s]"
                            style={{ boxShadow: clay.high, background: 'linear-gradient(135deg, #F472B6, #EC4899)' }}>
                            <div className="absolute inset-0 rounded-[2rem]" style={{ background: clay.gloss }} />
                        </div>

                        {/* Glass Overlay Card */}
                        <div className="absolute bottom-10 right-20 p-6 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl animate-[pulse_4s_ease-in-out_infinite]">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                    <Heart size={20} className="text-red-500 fill-red-500" />
                                </div>
                                <div className="text-sm font-bold text-slate-700">
                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Status</div>
                                    Loved by Users
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(2deg); }
                    }
                `}</style>
            </section>

            {/* ========== FEATURES ========== */}
            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="font-black mb-6 text-slate-800" style={{ fontSize: isMobile ? '36px' : '56px' }}>
                            Squishy Features
                        </h2>
                        <p className="max-w-2xl mx-auto text-xl text-slate-500 font-medium">
                            Build interfaces that feel like they're made of soft, malleable materials.
                        </p>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { icon: Circle, title: 'Soft Geometry', desc: 'Rounded modules that invite interaction.', color: colors.brand.primary },
                            { icon: Heart, title: 'Tactile Modes', desc: 'A system that feels warm and human.', color: colors.brand.accent },
                            { icon: Smile, title: 'Bouncy Flow', desc: 'Animation logic that prioritizes fun.', color: colors.brand.secondary },
                        ].map((item) => (
                            <div key={item.title} className="group relative p-10 rounded-[3rem] bg-[#F0F4F8] transition-all duration-500 hover:-translate-y-2 hover:bg-white"
                                style={{ boxShadow: clay.base }}>
                                <div className="w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: item.color, boxShadow: clay.high }}>
                                    <div className="absolute inset-0 rounded-[2rem] opacity-50" style={{ background: clay.gloss }} />
                                    <item.icon size={32} color="white" strokeWidth={3} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-slate-700">{item.title}</h3>
                                <p className="font-medium text-slate-400 leading-relaxed text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="font-black mb-6 text-slate-800" style={{ fontSize: isMobile ? '36px' : '56px' }}>
                            Choose Your Mold
                        </h2>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'Starter', price: '$19', color: colors.brand.primary, feats: ['Basic Moulds', 'Clay Cloud', 'Web Export'] },
                            { name: 'Pro', price: '$49', color: colors.brand.secondary, feats: ['All Textures', 'Team Sculpt', 'Advanced Gloss', 'API Access'], hot: true },
                            { name: 'Master', price: '$99', color: colors.brand.accent, feats: ['Custom Alloys', 'Priority Glaze', 'Master Classes'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="relative group p-12 rounded-[3rem] bg-[#F0F4F8] transition-all duration-500 hover:bg-white hover:scale-105"
                                style={{ boxShadow: plan.hot ? clay.high : clay.base }}>
                                {plan.hot && (
                                    <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold tracking-widest uppercase shadow-md">
                                        Popular
                                    </div>
                                )}

                                <div className="mb-10 text-center">
                                    <div className="text-sm font-bold tracking-widest uppercase mb-4 text-slate-400">{plan.name}</div>
                                    <div className="flex justify-center items-baseline gap-1 text-slate-800">
                                        <span className="text-5xl font-black">{plan.price}</span>
                                        <span className="text-lg font-bold opacity-40">/mo</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-12">
                                    {plan.feats.map((f) => (
                                        <li key={f} className="flex items-center gap-4 text-md font-bold text-slate-500">
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#F0F4F8]" style={{ boxShadow: clay.inner }}>
                                                <Check size={14} className="text-slate-400" strokeWidth={4} />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-5 rounded-[2rem] font-black tracking-wider uppercase transition-all duration-300 relative overflow-hidden active:scale-95 text-sm"
                                    style={{
                                        backgroundColor: plan.hot ? colors.brand.secondary : 'transparent',
                                        color: plan.hot ? 'white' : colors.text.primary,
                                        boxShadow: plan.hot ? clay.high : clay.base,
                                        background: plan.hot ? `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})` : undefined
                                    }}>
                                    {plan.hot && <div className="absolute inset-0 opacity-50" style={{ background: clay.gloss }} />}
                                    Get Started
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
                        <h2 className="font-black mb-6 text-slate-800" style={{ fontSize: isMobile ? '36px' : '56px' }}>
                            Questions?
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            { q: 'What is Claymorphism?', a: 'Claymorphism combines fluffy 3D shapes with soft inner shadows and pastel colors to create a friendly, touchable interface.' },
                            { q: 'Is it accessible?', a: 'High contrast versions are available to ensure legitimate text readability while keeping the fun aesthetic.' },
                            { q: 'Does it support dark mode?', a: 'Claymorphism works best on light backgrounds to show off the shadows, but "Night Clay" themes are possible.' },
                        ].map((item, i) => (
                            <div key={i} className="group overflow-hidden rounded-[2rem] bg-[#F0F4F8] transition-all duration-300"
                                style={{ boxShadow: expandedFaq === i ? clay.inner : clay.base }}>
                                <button className="w-full flex items-center justify-between p-8 text-left transition-all"
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-lg font-bold text-slate-700">{item.q}</span>
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#F0F4F8] transition-transform duration-300"
                                        style={{ boxShadow: clay.base, transform: expandedFaq === i ? 'rotate(180deg)' : 'none' }}>
                                        <ChevronDown size={20} className="text-slate-400" />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">
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
