import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Feather, BookOpen, Minus, Circle } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S89MinimalistSerifPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FEFDFB', surface: '#FFFFFF', text: '#1A1A18', muted: '#6B6B68', accent: '#2D2D2A', cream: '#F5F3EF', border: '#E8E6E1' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Libre Baskerville", "Georgia", serif' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.border, backgroundColor: colors.bg }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-6 px-8">
                    <span className="text-xl tracking-wide">Serif</span>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Work', 'About', 'Journal'].map((item) => (<span key={item} className="cursor-pointer hover:underline" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 border" style={{ borderColor: colors.accent, color: colors.accent }}>Contact</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: colors.border, backgroundColor: colors.surface }}>
                        {['Work', 'About', 'Journal'].map((item) => (<div key={item} className="py-3" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 border" style={{ borderColor: colors.accent, color: colors.accent }}>Contact</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '120px 24px' }}>
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="mb-6 font-normal leading-tight" style={{ fontSize: isMobile ? '40px' : '72px', letterSpacing: '-0.02em' }}>
                        The beauty of simplicity
                    </h1>
                    <p className="max-w-md mx-auto mb-10" style={{ color: colors.muted, lineHeight: 1.8 }}>Refined minimalist aesthetics with elegant serif typography and thoughtful whitespace.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.accent }}>Explore <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 border" style={{ borderColor: colors.accent, color: colors.accent }}>Learn more</button>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-5xl mx-auto border-t" style={{ borderColor: colors.border }} />

            {/* Features */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl mb-12" style={{ color: colors.accent }}>Principles</h2>
                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Feather, title: 'Elegance' }, { icon: Minus, title: 'Simplicity' }, { icon: BookOpen, title: 'Clarity' }].map((item) => (
                            <div key={item.title} className="text-center">
                                <item.icon size={28} className="mx-auto mb-4" style={{ color: colors.accent }} />
                                <h3 className="text-lg mb-2">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted, lineHeight: 1.7 }}>Timeless design principle.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '80px 24px', backgroundColor: colors.cream }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl mb-12" style={{ color: colors.accent }}>Plans</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Basic', price: '$49', hot: false }, { name: 'Standard', price: '$99', hot: true }, { name: 'Premium', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 text-center" style={{ backgroundColor: colors.surface, border: `1px solid ${plan.hot ? colors.accent : colors.border}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-white" style={{ backgroundColor: colors.accent }}>Popular</div>}
                                <h3 className="text-lg mb-2">{plan.name}</h3>
                                <div className="text-4xl mb-6" style={{ color: colors.accent }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left text-sm">
                                    {['All features', 'Support', 'Updates'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.accent }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3" style={{ backgroundColor: plan.hot ? colors.accent : 'transparent', color: plan.hot ? 'white' : colors.accent, border: plan.hot ? 'none' : `1px solid ${colors.accent}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl mb-12" style={{ color: colors.accent }}>Questions</h2>
                    <div className="space-y-0">
                        {[{ q: 'What is Minimalist Serif?', a: 'Refined aesthetics with elegant serif typography and thoughtful whitespace.' },
                        { q: 'Customizable?', a: 'Full control over typography and spacing.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b" style={{ borderColor: colors.border }}>
                                <button className="w-full flex items-center justify-between py-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span>{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.muted, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="pb-5 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-3xl mx-auto p-12 text-center" style={{ backgroundColor: colors.accent }}>
                    <Circle size={32} className="mx-auto mb-4" style={{ color: 'white' }} />
                    <h2 className="text-2xl mb-6 text-white">Begin with intention</h2>
                    <button className="px-10 py-3" style={{ backgroundColor: 'white', color: colors.accent }}>Start</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.border, padding: '40px 24px' }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span>Serif</span>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Minimalist Serif</span>
                </div>
            </footer>
        </div>
    );
};
