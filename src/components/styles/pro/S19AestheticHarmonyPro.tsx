import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Sparkles, Palette, Wand2 } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S19AestheticHarmonyPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: {
            paper: '#F7F3EE',
            surface: '#F1EDE8',
            card: 'rgba(255, 255, 255, 0.4)'
        },
        text: {
            primary: '#1A1A1A',
            secondary: '#4A4A4A',
            muted: '#8C8C8C',
            accent: '#7D8C83' // Sage Green
        },
        brand: {
            primary: '#5D6D7E', // Slate
            secondary: '#A9B2AC', // Stone Sage
            accent: '#D4B499' // Sand
        },
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{
                backgroundColor: colors.bg.paper,
                color: colors.text.primary,
                fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
                letterSpacing: '0.01em'
            }}>
            {/* Paper Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Organic Blurred Shapes */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-20 transition-all duration-[5000ms] animate-pulse"
                style={{ backgroundColor: colors.brand.secondary }} />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-[0.15]"
                style={{ backgroundColor: colors.brand.accent }} />
            {/* ========== NAVIGATION ========== */}
            <header className="sticky top-0 z-50 transition-all duration-700"
                style={{ backgroundColor: `${colors.bg.paper}CC`, backdropFilter: 'blur(10px)', borderBottom: `1px solid ${colors.text.accent}20` }}>
                <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ padding: '24px 40px' }}>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative">
                            <Sparkles size={24} className="text-stone-500 group-hover:rotate-12 transition-transform duration-700" style={{ color: colors.brand.primary }} />
                            <div className="absolute -inset-1 border border-stone-300 rounded-full scale-0 group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <span style={{ fontSize: '22px', fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Harmony.</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['Aesthetic', 'Philosophy', 'Craft', 'Enquiry'].map((item) => (
                                <span key={item} className="cursor-pointer relative group py-2" style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.text.secondary }}>
                                    {item}
                                    <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-stone-400 transition-all duration-500 group-hover:w-full group-hover:left-0" />
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-8">
                        {!isMobile && (
                            <button className="text-[12px] font-bold tracking-[0.2em] uppercase border-b border-stone-800 pb-1 hover:opacity-50 transition-all">
                                BEGIN_JOURNEY
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                                {menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-1000 bg-[#F7F3EE] p-10 space-y-8">
                        {['AESTHETIC', 'PHILOSOPHY', 'CRAFT', 'ENQUIRY'].map((item) => (
                            <div key={item} className="text-3xl font-light tracking-widest border-b border-stone-200 pb-4">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: `120px ${spacing.lg}`, position: 'relative' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-12 opacity-40 italic tracking-widest font-serif" style={{ fontSize: '16px' }}>Wabi-sabi: The beauty of things imperfect.</div>

                        <h1 className="mb-12 font-serif leading-[1.1] max-w-4xl"
                            style={{ fontSize: isMobile ? '56px' : '96px', fontWeight: 200, letterSpacing: '-0.02em' }}>
                            Seeking <span className="italic" style={{ color: colors.brand.primary }}>Balance</span> in every <br />
                            <span className="font-bold underline decoration-stone-300 underline-offset-[12px]">Digital Breath</span>
                        </h1>

                        <p className="max-w-2xl font-sans"
                            style={{ fontSize: '20px', lineHeight: 2, color: colors.text.secondary, marginBottom: '64px', fontWeight: 300 }}>
                            A design system rooted in intentionality. Transcending the purely visual to reach a state of functional tranquility and aesthetic equilibrium.
                        </p>

                        <div className="flex gap-12 items-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                            <button className="group relative px-12 py-5 bg-stone-800 text-[#F7F3EE] hover:bg-stone-700 transition-all duration-700 flex items-center gap-4"
                                style={{ borderRadius: '2px', fontSize: '14px', letterSpacing: '0.2em' }}>
                                START_ENQUIRY
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-700" />
                            </button>
                            <button className="px-12 py-5 border border-stone-300 hover:bg-white/30 transition-all duration-700"
                                style={{ borderRadius: '2px', fontSize: '14px', letterSpacing: '0.2em' }}>
                                PHILOSOPHY
                            </button>
                        </div>
                    </div>

                    <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-24 items-end">
                        <div className="aspect-[3/4] bg-stone-200/50 rounded-[4rem] flex items-center justify-center p-12 group overflow-hidden">
                            <div className="w-full h-full border border-stone-300 rounded-[3rem] group-hover:scale-105 transition-transform duration-1000 flex items-center justify-center italic text-stone-400">Zen_01</div>
                        </div>
                        <div className="aspect-[3/4] bg-stone-300/50 rounded-full flex items-center justify-center p-12 group overflow-hidden opacity-80 scale-90">
                            <div className="w-full h-full border border-stone-400 rounded-full group-hover:scale-105 transition-transform duration-1000 flex items-center justify-center italic text-stone-500">Form_02</div>
                        </div>
                        <div className="aspect-[3/4] bg-stone-100/80 rounded-[4rem] flex items-center justify-center p-12 group overflow-hidden shadow-sm">
                            <div className="w-full h-full border border-stone-300 rounded-[3rem] group-hover:scale-105 transition-transform duration-1000 flex items-center justify-center italic text-stone-400">Still_03</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, position: 'relative' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="font-serif italic mb-6" style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 300 }}>The Art of Intent</h2>
                        <div className="w-12 h-[1px] bg-stone-300 mx-auto" />
                    </div>

                    <div className="grid gap-24" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { icon: Palette, title: 'Natural Palette', desc: 'Colors derived from earth and stone, creating a seamless connection to the natural environment.' },
                            { icon: Sparkles, title: 'Soft Shadows', desc: 'Depth redefined through subtle gradients and diffusion, mimicking the play of light on textured paper.' },
                            { icon: Wand2, title: 'Divine Proportions', desc: 'Layouts balanced on the golden ratio, ensuring every pixel feels intentional and grounded.' },
                        ].map((item, i) => (
                            <div key={item.title} className="group flex flex-col items-center text-center">
                                <div className="mb-12 relative">
                                    <div className="w-20 h-20 rounded-full border border-stone-200 flex items-center justify-center transition-all duration-700 group-hover:bg-white"
                                        style={{ backgroundColor: `${colors.brand.secondary}10` }}>
                                        <item.icon size={28} style={{ color: colors.brand.primary, opacity: 0.6 }} />
                                    </div>
                                    <div className="absolute -top-4 -right-4 font-serif italic text-stone-300 pointer-events-none" style={{ fontSize: '14px' }}>0{i + 1}</div>
                                </div>
                                <h3 className="font-serif mb-6" style={{ fontSize: '24px', fontWeight: 400, letterSpacing: '0.05em' }}>{item.title}</h3>
                                <p style={{ fontSize: '16px', color: colors.text.secondary, lineHeight: 2, fontWeight: 300 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.surface }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="font-serif italic mb-6" style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 300 }}>Offerings</h2>
                        <p className="tracking-[0.2em] text-stone-400 uppercase text-[11px] font-bold">Choosing your path of tranquility</p>
                    </div>

                    <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'Seed', price: '$19', features: ['Core Meditations', 'Standard Wisdom', '1 Private Garden'] },
                            { name: 'Sprout', price: '$49', features: ['All Zen Elements', 'Priority Counsel', 'Unlimited Gardens', 'Sacred Assets'], highlight: true },
                            { name: 'Forest', price: '$99', features: ['Collective Access', 'Sanctuary License', 'Bespoke Spirit', 'Masterclasses'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="relative group transition-all duration-1000 hover:-translate-y-4"
                                style={{
                                    padding: '80px 48px',
                                    backgroundColor: plan.highlight ? colors.brand.primary : 'rgba(255,255,255,0.4)',
                                    color: plan.highlight ? '#F7F3EE' : colors.text.primary,
                                    border: plan.highlight ? 'none' : '1px solid rgba(0,0,0,0.05)',
                                    boxShadow: plan.highlight ? `0 40px 80px ${colors.brand.primary}33` : 'none'
                                }}>
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 p-6 text-[10px] font-black tracking-widest uppercase opacity-40">MOST_ALIGNED</div>
                                )}
                                <h3 className="font-serif mb-12 italic opacity-60" style={{ fontSize: '20px' }}>{plan.name}</h3>
                                <div className="mb-16">
                                    <span className="font-serif italic" style={{ fontSize: '64px', fontWeight: 200 }}>{plan.price}</span>
                                    <span className="text-[12px] tracking-widest uppercase opacity-40 ml-4">/cycle</span>
                                </div>
                                <ul className="space-y-8 mb-20 opacity-80">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-4 text-[14px] font-light tracking-wide">
                                            <div className="w-1 h-1 rounded-full bg-current opacity-30" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-6 text-[12px] font-bold tracking-[0.3em] uppercase transition-all duration-700"
                                    style={{
                                        backgroundColor: plan.highlight ? '#F7F3EE' : 'transparent',
                                        color: plan.highlight ? colors.brand.primary : colors.text.primary,
                                        border: plan.highlight ? 'none' : '1px solid rgba(0,0,0,0.1)',
                                    }}>
                                    EMBRACE
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
                        <h2 className="font-serif italic mb-6" style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 300 }}>Shared Enquiry</h2>
                        <div className="w-12 h-[1px] bg-stone-300 mx-auto" />
                    </div>

                    <div className="space-y-2">
                        {[
                            { q: 'What defines this aesthetic?', a: 'A commitment to wabi-sabi principles, finding beauty in the natural, the simple, and the slightly irregular.' },
                            { q: 'Can the spirit be modified?', a: 'The system is built to be fluid. Every variable can be tuned to resonate with your unique creative vision.' },
                            { q: 'Is there a digital garden guide?', a: 'Full documentation on cultivating your digital presence is included in the sacred archives.' },
                        ].map((item, i) => (
                            <div key={i} className="group overflow-hidden rounded-sm transition-all duration-700"
                                style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                                <button className="w-full flex items-center justify-between p-10 text-left transition-all hover:bg-white/30"
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-serif italic text-stone-600 group-hover:text-stone-900 transition-colors" style={{ fontSize: '22px' }}>{item.q}</span>
                                    <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-stone-400 transition-all rotate-0"
                                        style={{ transform: expandedFaq === i ? 'rotate(180deg)' : 'none' }}>
                                        <ChevronDown size={16} strokeWidth={1} />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="animate-in fade-in slide-in-from-top-4 duration-700" style={{ padding: '0 40px 40px', fontSize: '16px', lineHeight: 2, color: colors.text.secondary, fontWeight: 300 }}>
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
                <div className="max-w-6xl mx-auto">
                    <div className="relative p-24 text-center overflow-hidden rounded-[4rem] group"
                        style={{ backgroundColor: colors.brand.accent }}>
                        <div className="absolute inset-0 opacity-10 blur-3xl animate-pulse" style={{ background: colors.brand.secondary }} />
                        <h2 className="mb-12 font-serif relative z-10" style={{ fontSize: isMobile ? '48px' : '82px', fontWeight: 200, lineHeight: 1.1 }}>
                            Cultivate your <br />
                            <span className="italic">Digital Sanctuary</span>
                        </h2>
                        <p className="max-w-xl mx-auto mb-16 relative z-10 opacity-70 font-light italic" style={{ fontSize: '20px', lineHeight: 2 }}>
                            Join a collective dedicated to the pursuit of intentional design and aesthetic tranquility.
                        </p>
                        <button className="relative z-10 px-16 py-7 bg-stone-800 text-[#F7F3EE] hover:bg-stone-700 transition-all duration-700 box-shadow-xl"
                            style={{ borderRadius: '2px', fontSize: '14px', letterSpacing: '0.4em', fontWeight: 900 }}>
                            JOIN_COUNCIL
                        </button>
                    </div>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer style={{ padding: '120px 40px 60px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <Sparkles size={20} style={{ color: colors.brand.primary }} />
                            <span style={{ fontSize: '18px', fontWeight: 300, letterSpacing: '0.1em' }}>HARMONY.</span>
                        </div>
                        <p className="max-w-xs font-light italic opacity-40 text-[13px] leading-relaxed">
                            A sanctuary for intentional design and the pursuit of aesthetic equilibrium.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-24">
                        {['COLLECTIVE', 'STILLNESS'].map(cat => (
                            <div key={cat}>
                                <div className="text-[10px] font-black tracking-[0.2em] mb-8 opacity-40 uppercase">{cat}</div>
                                {['Archive', 'Counsel', 'Manifesto'].map(item => (
                                    <div key={item} className="mb-4 text-[13px] font-light hover:opacity-100 opacity-50 cursor-pointer transition-opacity underline decoration-stone-200 underline-offset-4">{item}</div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:items-end gap-1 font-serif italic text-[14px]">
                        <span className="opacity-40">Designed with Intent.</span>
                        <span style={{ color: colors.brand.primary }}>© 2025 Collective.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
