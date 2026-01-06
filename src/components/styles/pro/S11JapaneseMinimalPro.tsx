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
        bg: { primary: '#FAFAF8', secondary: '#F5F5F0', elevated: '#FFFFFF', paper: '#FBFBF9' },
        border: { subtle: 'rgba(44, 44, 44, 0.06)', strong: 'rgba(44, 44, 44, 0.12)' },
        text: { primary: '#2C2C2C', secondary: '#5C5C5C', muted: '#9C9C9C', inverse: '#FFFFFF' },
        brand: { primary: '#8B7355', accent: '#C4A77D', stroke: '#2C2C2C' },
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
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', gap: isMobile ? '64px' : '100px' }}>
                        <div className="relative z-10">
                            <div className="overflow-hidden mb-8">
                                <div className="animate-reveal-up" style={{ fontSize: '11px', letterSpacing: '0.4em', color: colors.brand.primary, fontWeight: 500, textTransform: 'uppercase' }}>
                                    DESIGN PHILOSOPHY
                                </div>
                            </div>
                            <h1 style={{ fontSize: isMobile ? '40px' : '72px', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '40px' }}>
                                The Art of<br />
                                <span className="italic" style={{ color: colors.brand.primary, fontFamily: 'serif' }}>Intentional Space</span>
                            </h1>
                            <p style={{ fontSize: '16px', lineHeight: 2.2, color: colors.text.secondary, marginBottom: '56px', maxWidth: '480px', fontWeight: 300 }}>
                                In the pursuit of minimalism, we discover true abundance.
                                Every element serves a purpose, every space carries meaning.
                                <br />
                                <span style={{ color: colors.text.muted, fontSize: '14px' }}>侘寂 (Wabi-sabi) — Finding beauty in the imperfect.</span>
                            </p>
                            <div className="flex items-center gap-10">
                                <button className="group flex items-center gap-4 transition-all" style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>
                                    <span>Explore Works</span>
                                    <div className="relative overflow-hidden w-5 h-5">
                                        <ArrowRight size={18} className="absolute inset-0 group-hover:translate-x-full transition-transform duration-300" />
                                        <ArrowRight size={18} className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                    </div>
                                </button>
                                <div className="h-px w-20 bg-black/10 flex-shrink-0" />
                            </div>
                        </div>

                        {/* Visual Element */}
                        <div className="relative flex items-center justify-center">
                            <div className="relative w-full aspect-[4/5] flex items-center justify-center" style={{ border: `1px solid ${colors.border.subtle}`, padding: '40px' }}>
                                <div className="absolute inset-0 bg-secondary opacity-20" />
                                <div className="relative z-10 flex flex-col items-center gap-8">
                                    <div className="w-1 bg-brand-primary h-24 opacity-20" />
                                    <span style={{ fontSize: isMobile ? '120px' : '180px', fontWeight: 200, color: colors.text.primary, fontFamily: 'serif', opacity: 0.8 }}>静</span>
                                    <div className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase opacity-40">Silence</div>
                                </div>
                                {/* Floating decorative lines */}
                                <div className="absolute top-10 left-10 w-px h-12 bg-black/5" />
                                <div className="absolute bottom-10 right-10 w-12 h-px bg-black/5" />
                            </div>
                            <div className="absolute -top-10 -right-10 w-1/2 h-1/2 bg-secondary/5 blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PROBLEM / TENSION ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center" style={{ marginBottom: '80px' }}>
                        <div className="w-px h-16 bg-brand-primary mx-auto mb-8 opacity-30" />
                        <h2 style={{ fontSize: isMobile ? '28px' : '40px', fontWeight: 300, letterSpacing: '-0.01em', fontFamily: 'serif' }}>
                            The Weight of <span className="italic">Complexity</span>
                        </h2>
                    </div>

                    <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { title: 'Visual Noise', desc: 'Overwhelming designs that distract rather than guide. The mind seeks clarity but finds clutter.' },
                            { title: 'Lost Purpose', desc: 'Decoration without meaning, complexity without clarity. Form should follow the spirit.' },
                            { title: 'Rushed Experience', desc: 'No room to breathe, no space to contemplate. A life without "Ma" is a life unsettled.' },
                        ].map((item) => (
                            <div key={item.title} className="group transition-all duration-700" style={{ padding: '64px 40px', backgroundColor: colors.bg.elevated, border: `1px solid ${colors.border.subtle}`, position: 'relative', overflow: 'hidden' }}>
                                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-700" style={{ backgroundColor: colors.brand.primary, opacity: 0.3 }} />
                                <h3 className="italic mb-6" style={{ fontSize: '18px', fontWeight: 400, letterSpacing: '0.05em', fontFamily: 'serif' }}>{item.title}</h3>
                                <p style={{ fontSize: '14px', color: colors.text.secondary, lineHeight: 2.2, fontWeight: 300 }}>{item.desc}</p>
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

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center" style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: isMobile ? '28px' : '40px', fontWeight: 300, letterSpacing: '-0.01em', fontFamily: 'serif' }}>The Craft</h2>
                    </div>

                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                        {[
                            { title: 'Brand Identity', desc: 'Minimal, purposeful visual systems that resonate with authenticity.', detail: 'Typography • Color • Form' },
                            { title: 'Web Design', desc: 'Clean interfaces with intentional space for seamless digital movement.', detail: 'UI • UX • Development' },
                            { title: 'Art Direction', desc: 'Visual storytelling through simplicity and refined aesthetics.', detail: 'Photography • Layout • Styling' },
                            { title: 'Consultation', desc: 'Strategic guidance for brands seeking to embrace minimalism.', detail: 'Strategy • Reviews • Workshops' },
                        ].map((item) => (
                            <div key={item.title} className="group hover:bg-white transition-all duration-500" style={{ padding: '64px 48px', backgroundColor: colors.bg.elevated, border: `1px solid ${colors.border.subtle}` }}>
                                <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: 400, letterSpacing: '0.05em', fontFamily: 'serif' }}>{item.title}</h3>
                                <p style={{ fontSize: '15px', color: colors.text.secondary, marginBottom: '32px', lineHeight: 2, fontWeight: 300 }}>{item.desc}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-px bg-black/10 group-hover:w-12 transition-all" />
                                    <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: colors.text.muted, textTransform: 'uppercase' }}>{item.detail}</span>
                                </div>
                            </div>
                        ))}
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

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center" style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: isMobile ? '28px' : '40px', fontWeight: 300, letterSpacing: '-0.01em', marginBottom: '20px', fontFamily: 'serif' }}>The Investment</h2>
                        <p style={{ fontSize: '15px', color: colors.text.secondary, fontWeight: 300, fontStyle: 'italic' }}>Thoughtful engagement for lasting impact</p>
                    </div>

                    <div className="grid gap-px bg-black/5" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', border: `1px solid black/5` }}>
                        {[
                            { name: 'Kanso (Essential)', price: '$2,900', features: ['Core Brand Identity', 'Primary Logo Design', 'Strategic Review', '2 Rounds of Refinement'] },
                            { name: 'Shibui (Complete)', price: '$6,900', features: ['Full Visual System', 'Web Design • App', 'Art Direction', 'Unlimited Thoughtful Refinement'] },
                            { name: 'Yugen (Bespoke)', price: 'Custom', features: ['Holistic Partnership', 'Ongoing Evolution', 'Dedicated Craft Team', 'Priority Engagement'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="flex flex-col group bg-white hover:z-10 transition-all" style={{ padding: '80px 48px' }}>
                                <h3 className="text-center italic mb-10" style={{ fontSize: '15px', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.brand.primary, fontFamily: 'serif' }}>{plan.name}</h3>
                                <div className="text-center" style={{ fontSize: '48px', fontWeight: 200, marginBottom: '48px', fontFamily: 'serif' }}>{plan.price}</div>
                                <ul className="space-y-6 mb-16 flex-grow" style={{ fontSize: '14px' }}>
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-4">
                                            <div className="w-1 h-1 rounded-full bg-black/20 mt-2.5 flex-shrink-0" />
                                            <span style={{ color: colors.text.secondary, fontWeight: 300, lineHeight: 1.6 }}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="transition-all duration-500" style={{
                                    width: '100%',
                                    padding: '20px',
                                    fontSize: '12px',
                                    letterSpacing: '0.3em',
                                    backgroundColor: i === 1 ? colors.text.primary : 'transparent',
                                    color: i === 1 ? 'white' : colors.text.primary,
                                    border: `1px solid ${colors.text.primary}`,
                                    textTransform: 'uppercase',
                                    fontWeight: 600
                                }}>
                                    Begin Journey
                                </button>
                            </div>
                        ))}
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
