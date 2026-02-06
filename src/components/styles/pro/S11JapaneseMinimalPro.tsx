import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Mail, Leaf } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S11JapaneseMinimalPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    // S11 Japanese Minimal Design Tokens
    const colors = {
        bg: { primary: '#FDFBF7', secondary: '#F4F1EA', elevated: '#FFFFFF', paper: '#FDFBF7' }, // Washi Paper warm white
        border: { subtle: 'rgba(56, 54, 51, 0.08)', strong: 'rgba(56, 54, 51, 0.15)' },
        text: { primary: '#2A2926', secondary: '#5F5C56', muted: '#8F8B83', inverse: '#FFFFFF' }, // Sumi Ink black/grey
        brand: { primary: '#787363', accent: '#D4CDC0', stroke: '#2A2926' }, // Tea Green / Stone
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{
                backgroundColor: colors.bg.primary,
                color: colors.text.primary,
                fontFamily: '"Noto Serif JP", "Shippori Mincho", "Hiragino Mincho ProN", serif',
                letterSpacing: '0.01em'
            }}>
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
            {/* ========== NAVIGATION ========== */}
            <header className="sticky top-0 z-50" style={{ backgroundColor: colors.bg.primary, borderBottom: `1px solid ${colors.border.subtle}` }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between" style={{ padding: `${spacing.md} ${spacing.lg}` }}>
                    <div className="flex items-center gap-6 group cursor-pointer">
                        <div className="relative flex items-center justify-center">
                            <span style={{ fontSize: '28px', fontWeight: 200, letterSpacing: '0.1em', fontFamily: 'serif' }}>和</span>
                            <div className="absolute -inset-2 border border-black/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col">
                            <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Harmony Studio</span>
                            <span style={{ fontSize: '9px', fontWeight: 400, letterSpacing: '0.1em', color: colors.text.muted }}>Kyoto · Est. 2020</span>
                        </div>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['Philosophy', 'Works', 'Process', 'Contact'].map((item) => (
                                <span key={item} className="cursor-pointer transition-opacity hover:opacity-60" style={{ fontSize: '12px', letterSpacing: '0.15em', color: colors.text.secondary }}>
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-4">
                        {!isMobile && (
                            <button style={{ fontSize: '12px', letterSpacing: '0.1em', borderBottom: `1px solid ${colors.text.primary}`, paddingBottom: '4px', color: colors.text.primary }}>
                                Inquire
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} style={{ color: colors.text.secondary }}>
                                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div style={{ borderTop: `1px solid ${colors.border.subtle}`, padding: spacing.lg, backgroundColor: colors.bg.primary }}>
                        <div className="space-y-4">
                            {['Philosophy', 'Works', 'Process', 'Contact'].map((item) => (
                                <div key={item} style={{ fontSize: '14px', letterSpacing: '0.1em', color: colors.text.secondary, padding: '8px 0' }}>
                                    {item}
                                </div>
                            ))}
                            <button className="w-full mt-4" style={{ fontSize: '12px', letterSpacing: '0.1em', border: `1px solid ${colors.text.primary}`, padding: '12px 16px', color: colors.text.primary }}>
                                Inquire
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid items-center relative" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '64px' : '0' }}>

                        {/* Text Content (Left on Desktop) */}
                        <div className="relative z-10 pr-0 md:pr-24">
                            <div className="inline-block border-l-2 border-[#2A2926] pl-6 py-1 mb-12">
                                <span style={{ fontSize: '11px', letterSpacing: '0.4em', color: colors.text.secondary, fontWeight: 500, textTransform: 'uppercase' }}>
                                    Komorebi Design
                                </span>
                            </div>

                            <h1 style={{ fontSize: isMobile ? '3rem' : '5rem', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '48px', color: colors.text.primary }}>
                                Emptiness is <br />
                                <span className="font-serif italic text-[#787363]">Fullness</span>
                            </h1>

                            <div className="flex flex-col gap-6 max-w-sm">
                                <p style={{ fontSize: '15px', lineHeight: 2, color: colors.text.secondary }}>
                                    We design spaces that breathe. Removing the unnecessary to reveal the essential beauty of form and function.
                                </p>
                                <div className="flex items-center gap-12 mt-4">
                                    <button className="group flex items-center gap-2 border-b border-[#2A2926] pb-2 text-sm tracking-[0.2em] uppercase hover:text-[#787363] transition-colors">
                                        View Collection
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Visual Element (Right on Desktop) */}
                        <div className="relative h-[600px] flex items-center justify-center md:justify-end">
                            {/* Main Image Container */}
                            <div className="relative w-full md:w-[80%] h-full bg-[#F4F1EA] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1599692996521-1200057ce50c?q=80&w=2574&auto=format&fit=crop"
                                    alt="Minimalist Architecture"
                                    className="w-full h-full object-cover grayscale contrast-[0.95] opacity-90 transition-transform duration-[2s] hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#FDFBF7] mix-blend-color opacity-20" />
                            </div>

                            {/* Floating 'Kanji' Card */}
                            <div className="absolute -left-12 top-24 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hidden md:block">
                                <div className="flex flex-col items-center gap-6 writing-vertical-rl" style={{ writingMode: 'vertical-rl' }}>
                                    <span className="text-4xl font-serif text-[#2A2926]">静寂</span>
                                    <div className="w-px h-12 bg-[#2A2926]/20" />
                                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#8F8B83] rotate-180">Silence</span>
                                </div>
                            </div>

                            {/* Circular Element */}
                            <div className="absolute bottom-12 -right-6 w-32 h-32 rounded-full border border-[#2A2926]/10 flex items-center justify-center animate-[spin_30s_linear_infinite]">
                                <Leaf size={16} className="text-[#787363] opacity-40" />
                            </div>
                        </div>

                        {/* Traditional Vertical Text (Absolute) */}
                        <div className="absolute top-0 right-0 h-full hidden md:flex flex-col justify-center select-none pointer-events-none opacity-10">
                            <div className="text-[8rem] font-serif leading-none" style={{ writingMode: 'vertical-rl' }}>
                                自然と調和
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PHILOSOPHY (Triptych) ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#2A2926]/10">
                        {[
                            { title: 'Ma (間)', subtitle: 'Negative Space', desc: 'The space between things is as important as the things themselves. It creates room for the mind to breathe.' },
                            { title: 'Wabi (侘)', subtitle: 'Rustic Simplicity', desc: 'Finding beauty in the understated and the quiet. Elegance that does not shout.' },
                            { title: 'Sabi (寂)', subtitle: 'Patina of Time', desc: 'Appreciating the cycle of life and the graceful aging of all things.' },
                        ].map((item, i) => (
                            <div key={item.title} className="px-8 py-12 text-center group hover:bg-[#FDFBF7] transition-colors duration-500">
                                <span className="block text-4xl mb-4 font-serif text-[#2A2926] opacity-80">{item.title}</span>
                                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#8F8B83] mb-8">{item.subtitle}</span>
                                <p className="text-sm leading-8 text-[#5F5C56] font-light">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== VALUE PROPOSITION ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-start" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '64px' : '120px' }}>
                        <div>
                            <div style={{ width: '40px', height: '1px', backgroundColor: colors.brand.primary, marginBottom: '32px' }} />
                            <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 300, letterSpacing: '-0.01em', marginBottom: '48px', fontFamily: 'serif' }}>
                                A Return to <br /><span className="italic" style={{ color: colors.brand.primary }}>Essentialism</span>
                            </h2>
                            <div className="space-y-10">
                                {[
                                    { title: 'Ma (間)', desc: 'The beauty of negative space that allows elements to breathe and thoughts to settle.' },
                                    { title: 'Wabi-sabi', desc: 'Finding beauty in imperfection and the natural cycle of growth and decay.' },
                                    { title: 'Kanso', desc: 'Simplicity that reveals the true essence and eliminates unnecessary clutter.' },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-6 group">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2.5 transition-colors group-hover:bg-brand-primary" style={{ backgroundColor: colors.border.strong }} />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '8px', letterSpacing: '0.05em' }}>{item.title}</div>
                                            <div style={{ color: colors.text.secondary, fontSize: '15px', lineHeight: 1.8, fontWeight: 300 }}>{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-px bg-black/5" style={{ gridTemplateColumns: 'repeat(2, 1fr)', border: `1px solid black/5` }}>
                            {[
                                { value: '500+', label: 'CRAFTED WORKS' },
                                { value: '12', label: 'YEARS OF ZEN' },
                                { value: '98%', label: 'MINDFUL CLIENTS' },
                                { value: '∞', label: 'INFINITE SPACE' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center group bg-white hover:bg-neutral-50 transition-colors" style={{ padding: '64px 32px' }}>
                                    <div style={{ fontSize: '36px', fontWeight: 200, color: colors.text.primary, marginBottom: '12px', fontFamily: 'serif' }}>{stat.value}</div>
                                    <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: colors.text.muted, textTransform: 'uppercase' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES (Tatami Grid) ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 flex items-end justify-between border-b border-[#2A2926]/10 pb-6">
                        <h2 className="text-3xl font-serif text-[#2A2926]">Crafted Elements</h2>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#8F8B83]">Function & Form</span>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 h-auto md:h-[600px]">
                        {/* Main Feature - Large Tatami */}
                        <div className="md:col-span-2 md:row-span-2 bg-[#F4F1EA] p-12 relative group overflow-hidden border border-[#2A2926]/5 hover:border-[#2A2926]/20 transition-colors">
                            <div className="absolute top-0 right-8 w-px h-full bg-[#2A2926]/5" />
                            <h3 className="text-2xl font-serif mb-4 relative z-10">Essentialism</h3>
                            <p className="text-sm leading-7 text-[#5F5C56] max-w-xs relative z-10">
                                Strip away the non-essential. What remains is the pure essence of the product, unburdened by decoration.
                            </p>
                            <div className="absolute bottom-[-20%] right-[-20%] w-[300px] h-[300px] rounded-full border-[20px] border-white/40 group-hover:scale-110 transition-transform duration-[1.5s]" />
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 md:col-span-2 flex items-center justify-between border border-[#2A2926]/5 hover:shadow-sm transition-shadow">
                            <div>
                                <h3 className="text-lg font-serif mb-2">Typography</h3>
                                <p className="text-xs text-[#8F8B83] uppercase tracking-widest">Serif & Sans</p>
                            </div>
                            <span className="text-4xl font-serif opacity-10">Aa</span>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-[#2A2926] text-[#FDFBF7] p-8 flex flex-col justify-between group hover:bg-[#3E3D3A] transition-colors">
                            <Leaf className="opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div>
                                <h3 className="text-lg font-serif mb-2">Organic</h3>
                                <p className="text-xs opacity-60">Natural Connection</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-8 flex flex-col justify-center items-center text-center border border-[#2A2926]/5">
                            <div className="w-12 h-12 rounded-full border border-[#2A2926]/20 flex items-center justify-center mb-4">
                                <span className="font-serif italic">i</span>
                            </div>
                            <h3 className="text-lg font-serif">Intuitive</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== TRUST & PROOF ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center" style={{ marginBottom: '48px' }}>
                        <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: colors.text.muted }}>TRUSTED BY</p>
                    </div>
                    <div className="flex justify-center gap-12 flex-wrap" style={{ opacity: 0.5 }}>
                        {['Muji', 'Uniqlo', 'Issey Miyake', 'MUJI Hotel', 'Kinfolk'].map((company) => (
                            <span key={company} style={{ fontSize: '14px', fontWeight: 300, letterSpacing: '0.1em', color: colors.text.secondary }}>{company}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING (Menu Style) ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: '#FDFBF7' }}>
                <div className="max-w-3xl mx-auto p-12 bg-white border border-[#2A2926]/5 shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
                    <div className="text-center mb-16">
                        <span className="inline-block border text-[10px] border-[#2A2926] px-3 py-1 uppercase tracking-[0.2em] mb-6">Selection</span>
                        <h2 className="text-3xl font-serif text-[#2A2926]">Guidance & Growth</h2>
                    </div>

                    <div className="space-y-12">
                        {[
                            { name: 'Essence', price: '$2,400', desc: 'Design Audit & Strategy', detail: 'Ideal for early stage clarity.' },
                            { name: 'Balance', price: '$4,800', desc: 'Visual Identity System', detail: 'For brands seeking harmony.' },
                            { name: 'Harmony', price: '$8,200', desc: 'Full Digital Experience', detail: 'Complete holistic presence.' },
                        ].map((plan, i) => (
                            <div key={plan.name} className="group cursor-pointer">
                                <div className="flex justify-between items-baseline mb-2 border-b border-dashed border-[#2A2926]/20 pb-2 group-hover:border-solid group-hover:border-[#2A2926] transition-all">
                                    <h3 className="text-lg font-serif">{plan.name}</h3>
                                    <span className="text-lg font-serif">{plan.price}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-[#5F5C56] tracking-wide">{plan.desc}</span>
                                    <span className="text-[10px] text-[#8F8B83] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">{plan.detail}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="text-xs uppercase tracking-[0.25em] border-b border-[#2A2926] pb-1 hover:text-[#787363] hover:border-[#787363] transition-colors">
                            Request Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center" style={{ marginBottom: '64px' }}>
                        <h2 style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 300, letterSpacing: '0.02em' }}>Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'What is your design philosophy?', a: 'We believe in the power of simplicity and the beauty of intentional space. Every element we create serves a purpose.' },
                            { q: 'How long does a project take?', a: 'Projects typically take 4-8 weeks, allowing time for thoughtful refinement and contemplation.' },
                            { q: 'Do you work with international clients?', a: 'Yes, we work with clients worldwide, embracing cultural nuances in our minimal approach.' },
                            { q: 'What makes your approach different?', a: 'Our commitment to Ma—the beauty of empty space—sets us apart. We design with restraint and purpose.' },
                        ].map((item, i) => (
                            <div key={i} style={{ borderBottom: `1px solid ${colors.border.subtle}`, paddingBottom: '24px' }}>
                                <button className="w-full flex items-center justify-between text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} style={{ fontSize: '15px', fontWeight: 400, marginBottom: expandedFaq === i ? '16px' : '0' }}>
                                    {item.q}
                                    {expandedFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </button>
                                {expandedFaq === i && (
                                    <p style={{ fontSize: '14px', color: colors.text.secondary, lineHeight: 1.8 }}>{item.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-4xl mx-auto text-center relative overflow-hidden"
                    style={{ padding: '120px 48px', backgroundColor: colors.bg.secondary, border: `1px solid ${colors.border.subtle}` }}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <h2 style={{ fontSize: isMobile ? '32px' : '56px', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '32px', fontFamily: 'serif' }}>
                        Begin the <span className="italic" style={{ color: colors.brand.primary }}>Journey</span>
                    </h2>
                    <p style={{ fontSize: '16px', color: colors.text.secondary, marginBottom: '64px', lineHeight: 2.2, fontWeight: 300, maxWidth: '500px', margin: '0 auto 64px' }}>
                        Ready to embrace the timeless beauty of intentional design? Let's create something meaningful together.
                    </p>
                    <div className="flex justify-center gap-0" style={{ flexDirection: isMobile ? 'column' : 'row', maxWidth: '500px', margin: '0 auto' }}>
                        <input type="email" placeholder="your@email.com"
                            style={{ flex: 1, padding: '24px 32px', border: `1px solid ${colors.text.primary}`, borderRight: isMobile ? undefined : 'none', backgroundColor: 'transparent', fontSize: '14px', fontWeight: 300, letterSpacing: '0.05em' }} />
                        <button style={{ padding: '24px 48px', backgroundColor: colors.text.primary, color: colors.text.inverse, fontSize: '13px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>
                            Connect
                        </button>
                    </div>
                    <div className="mt-16 italic" style={{ fontSize: '12px', color: colors.text.muted, letterSpacing: '0.1em' }}>
                        一步一腳印 — Step by step, we create the path.
                    </div>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer style={{ padding: `${spacing.lg} ${spacing.lg}`, borderTop: `1px solid ${colors.border.subtle}` }}>
                <div className="max-w-6xl mx-auto flex justify-between items-center gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                    <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: colors.text.muted }}>Kyoto · Tokyo</span>
                    <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: colors.text.muted }}>© 2025 Harmony Studio</span>
                    <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: colors.text.muted }}>和 · Wa</span>
                </div>
            </footer>
        </div>
    );
};
