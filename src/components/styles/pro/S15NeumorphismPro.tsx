import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Circle, Settings, Users } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S15NeumorphismPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#F0F2F5',
        text: { primary: '#3C4858', secondary: '#6B7C93', muted: '#A0AEC0', inverse: '#FFFFFF' },
        brand: { primary: '#4F46E5', secondary: '#7C3AED', accent: '#F59E0B' },
    };

    const shadow = {
        raised: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        raisedSmall: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
        inset: 'inset 6px 6px 12px #d1d9e6, inset -6px -6px 12px #ffffff',
        pressed: 'inset 3px 3px 6px #d1d9e6, inset -3px -3px 6px #ffffff',
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen selection:bg-indigo-100"
            style={{
                backgroundColor: colors.bg,
                color: colors.text.primary,
                fontFamily: '"Outfit", "Quicksand", system-ui, sans-serif',
                letterSpacing: '-0.01em'
            }}>
            {/* ========== NAVIGATION ========== */}
            <header className="sticky top-0 z-50 transition-all" style={{ backgroundColor: colors.bg, padding: isMobile ? '12px 16px' : '20px 24px' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between"
                    style={{ padding: '12px 24px', borderRadius: '24px', boxShadow: shadow.raised }}>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all group-hover:scale-95 active:scale-90"
                            style={{ boxShadow: shadow.raised }}>
                            <div className="w-5 h-5 rounded-full" style={{ background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})` }} />
                        </div>
                        <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>Neumorph</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
                                <span key={item} className="cursor-pointer font-semibold transition-all hover:text-indigo-600" style={{ fontSize: '15px', color: colors.text.secondary }}>
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-3">
                        {!isMobile && (
                            <button className="transition-all hover:scale-[0.98] active:scale-95 px-8 py-3 rounded-2xl font-bold"
                                style={{ boxShadow: shadow.raised, color: colors.brand.primary, fontSize: '14px' }}>
                                Get Started
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="w-10 h-10 flex items-center justify-center transition-all active:scale-90"
                                style={{ borderRadius: '12px', boxShadow: shadow.raised }}>
                                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="mt-4" style={{ padding: '24px', borderRadius: '16px', boxShadow: shadow.raised }}>
                        {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
                            <div key={item} style={{ padding: '16px 0', color: colors.text.secondary }}>{item}</div>
                        ))}
                        <button className="w-full mt-4" style={{ padding: '14px 28px', borderRadius: '12px', boxShadow: shadow.raised, fontSize: '14px', fontWeight: 600, color: colors.brand.primary, backgroundColor: colors.bg }}>
                            Get Started
                        </button>
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', gap: isMobile ? '48px' : '100px' }}>
                        <div>
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl" style={{ boxShadow: shadow.inset, color: colors.brand.primary }}>
                                <Circle size={12} fill={colors.brand.primary} />
                                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em' }}>NEXT GENERATION UI</span>
                            </div>
                            <h1 style={{ fontSize: isMobile ? '44px' : '72px', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: '32px' }}>
                                The Future <br />
                                <span style={{ color: colors.brand.primary }}>Feels Real</span>
                            </h1>
                            <p style={{ fontSize: '19px', lineHeight: 1.7, color: colors.text.secondary, marginBottom: '48px', maxWidth: '520px' }}>
                                A tactile exploration of interface design. Experience depth, soft shadows, and aUI that responds to every touch with a gentle press.
                            </p>
                            <div className="flex gap-6" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                                <button className="flex items-center justify-center gap-3 group transition-all hover:scale-[0.98] active:scale-95"
                                    style={{ padding: '20px 40px', borderRadius: '24px', boxShadow: shadow.raised, fontSize: '16px', fontWeight: 700, color: colors.brand.primary }}>
                                    Experience Now
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="transition-all hover:scale-[0.98] active:scale-95"
                                    style={{ padding: '20px 40px', borderRadius: '24px', boxShadow: shadow.inset, fontSize: '16px', fontWeight: 700, color: colors.text.secondary }}>
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center relative">
                            <div className="relative w-full aspect-square max-w-[400px] flex items-center justify-center">
                                <div className="absolute inset-0 rounded-[80px] rotate-[10deg] opacity-50" style={{ boxShadow: shadow.raised }} />
                                <div className="w-[80%] h-[80%] rounded-full flex items-center justify-center" style={{ boxShadow: shadow.raised }}>
                                    <div className="w-[60%] h-[60%] rounded-full flex items-center justify-center transition-all hover:scale-105 duration-700" style={{ boxShadow: shadow.inset }}>
                                        <div className="w-16 h-16 rounded-3xl rotate-[20deg] flex items-center justify-center"
                                            style={{ background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.4)' }}>
                                            <Settings size={32} color="white" className="animate-spin-slow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 800, letterSpacing: '-0.03em' }}>Tactile Features</h2>
                    </div>

                    <div className="grid gap-10" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { icon: Circle, title: 'Depth & Dimension', desc: 'Dual-source soft shadows create a realistic sense of physical depth.' },
                            { icon: Settings, title: 'Tactile Feedback', desc: 'Every interaction triggers a subtle shift in elevation you can almost feel.' },
                            { icon: Users, title: 'Human Centric', desc: 'Interfaces designed to mimic natural objects for intuitive use.' },
                        ].map((item) => (
                            <div key={item.title} className="group transition-all duration-500 hover:translate-y-[-8px]"
                                style={{ padding: '48px 32px', borderRadius: '32px', boxShadow: shadow.raised }}>
                                <div className="w-20 h-20 mx-auto mb-10 rounded-3xl flex items-center justify-center transition-all group-hover:scale-95"
                                    style={{ boxShadow: shadow.inset }}>
                                    <item.icon size={32} color={colors.brand.primary} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.02em' }}>{item.title}</h3>
                                <p style={{ fontSize: '16px', color: colors.text.secondary, lineHeight: 1.7 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px' }}>Tactile Pricing</h2>
                        <p style={{ fontSize: '18px', color: colors.text.secondary }}>Pricing that feels as good as it looks</p>
                    </div>

                    <div className="grid gap-10" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'Seed', price: '$29', features: ['Standard components', 'Core layout engine', 'Community support'] },
                            { name: 'Pro', price: '$79', features: ['All components', 'Priority response', 'Source Figma files', 'Commercial usage'] },
                            { name: 'Enterprise', price: '$199', features: ['Global license', 'Custom branding', 'Direct engineer access', 'SLA support'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="relative transition-all duration-500"
                                style={{ padding: '64px 40px', borderRadius: '40px', boxShadow: i === 1 ? shadow.inset : shadow.raised }}>
                                {i === 1 && (
                                    <div className="absolute top-8 right-8 px-4 py-1 rounded-full text-[10px] font-black tracking-widest text-white"
                                        style={{ background: colors.brand.primary }}>POPULAR</div>
                                )}
                                <h3 style={{ fontSize: '15px', fontWeight: 800, color: colors.text.muted, letterSpacing: '0.1em', marginBottom: '24px' }}>{plan.name.toUpperCase()}</h3>
                                <div className="flex items-baseline gap-1 mb-10">
                                    <span style={{ fontSize: '56px', fontWeight: 800, color: i === 1 ? colors.brand.primary : colors.text.primary }}>{plan.price}</span>
                                    <span style={{ fontSize: '18px', color: colors.text.muted }}>/mo</span>
                                </div>
                                <ul className="space-y-5 mb-12">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full flex items-center justify-center transition-all" style={{ boxShadow: i === 1 ? shadow.raisedSmall : shadow.inset }}>
                                                <Check size={14} color={colors.brand.primary} strokeWidth={3} />
                                            </div>
                                            <span style={{ fontSize: '15px', fontWeight: 600, color: colors.text.secondary }}>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-5 rounded-2xl font-bold transition-all active:scale-[0.97]"
                                    style={{ boxShadow: i === 1 ? shadow.raised : shadow.inset, color: colors.brand.primary, fontSize: '16px' }}>
                                    Choose {plan.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 800 }}>Common Questions</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            { q: 'What is Neumorphic Design?', a: 'It is a visual style that uses light and shadow to create elements that appear to be part of the background, extruded from the surface.' },
                            { q: 'Is it hard to implement?', a: 'Not at all. With our systematic approach to shadow values, you can apply this look consistently across any platform.' },
                            { q: 'Is it accessible?', a: 'We pay close attention to shadow contrast and interactive cues to ensure the interface remains usable for everyone.' },
                        ].map((item, i) => (
                            <div key={i} className="transition-all" style={{ borderRadius: '24px', boxShadow: expandedFaq === i ? shadow.inset : shadow.raised, overflow: 'hidden' }}>
                                <button className="w-full flex items-center justify-between p-8 text-left transition-colors hover:bg-black/5" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span style={{ fontSize: '18px', fontWeight: 700 }}>{item.q}</span>
                                    <div className="w-10 h-10 flex items-center justify-center transition-all" style={{ borderRadius: '12px', boxShadow: expandedFaq === i ? shadow.pressed : shadow.raised }}>
                                        <ChevronDown size={22} color={colors.brand.primary} style={{ transform: expandedFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="animate-in fade-in slide-in-from-top-2" style={{ padding: '0 32px 32px', fontSize: '16px', color: colors.text.secondary, lineHeight: 1.8 }}>{item.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-4xl mx-auto text-center" style={{ padding: '80px 48px', borderRadius: '48px', boxShadow: shadow.raised }}>
                    <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em' }}>Push the Boundaries</h2>
                    <p style={{ fontSize: '19px', color: colors.text.secondary, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>Step into a world where digital interfaces feel physical. Start your tactile journey today.</p>
                    <button className="transition-all hover:scale-[0.98] active:scale-95 px-12 py-5 rounded-3xl font-bold"
                        style={{ boxShadow: shadow.raised, fontSize: '18px', color: colors.brand.primary }}>
                        Get Started Free
                    </button>
                </div>
            </section>

            <footer style={{ padding: '64px 24px', borderTop: `1px solid rgba(0,0,0,0.05)` }}>
                <div className="max-w-6xl mx-auto flex justify-between items-center gap-8" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ boxShadow: shadow.raisedSmall }}>
                            <div className="w-3 h-3 rounded-full" style={{ background: colors.brand.primary }} />
                        </div>
                        <span style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.02em' }}>Neumorph</span>
                    </div>
                    <span style={{ fontSize: '14px', color: colors.text.muted, fontWeight: 500 }}>© 2025 Neumorph Studio. All tactile rights reserved.</span>
                    <div className="flex gap-8">
                        {['Privacy', 'Twitter', 'Dribbble'].map(item => (
                            <span key={item} className="text-sm font-bold hover:text-indigo-600 cursor-pointer" style={{ color: colors.text.secondary }}>{item}</span>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};
