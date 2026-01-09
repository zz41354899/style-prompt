import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Snowflake, Sparkles, Layers, Circle } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S97FrostedGlassPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', surface: 'rgba(255,255,255,0.15)', text: '#FFFFFF', muted: 'rgba(255,255,255,0.7)', border: 'rgba(255,255,255,0.3)' };
    const glassBg = 'rgba(255,255,255,0.1)';
    const glassStyle = { backgroundColor: glassBg, backdropFilter: 'blur(20px)', border: `1px solid ${colors.border}` };

    return (
        <div className="min-h-screen relative" style={{ color: colors.text, fontFamily: '"Nunito", "Inter", sans-serif' }}>
            {/* Gradient Background */}
            <div className="fixed inset-0" style={{ background: colors.bg }} />
            {/* Floating Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)', top: '-10%', right: '10%' }} />
                <div className="absolute w-72 h-72 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)', bottom: '20%', left: '-5%' }} />
            </div>

            {/* Navigation */}
            <header className="sticky top-0 z-50" style={{ ...glassStyle, borderRadius: 0 }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-2">
                        <Snowflake size={24} />
                        <span className="text-lg font-semibold">Frost</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Features', 'Gallery', 'About'].map((item) => (<span key={item} className="cursor-pointer hover:text-white" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 rounded-full font-semibold" style={{ ...glassStyle }}>Try Now</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.border }}>
                        {['Features', 'Gallery', 'About'].map((item) => (<div key={item} className="py-2" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 rounded-full font-semibold" style={{ ...glassStyle }}>Try Now</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section className="relative z-10" style={{ padding: '100px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full" style={{ ...glassStyle }}>
                        <Sparkles size={16} />
                        <span>Glassmorphism Design</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '40px' : '72px' }}>
                        Beautiful Frosted Glass
                    </h1>
                    <p className="max-w-md mx-auto mb-10" style={{ color: colors.muted }}>Elegant frosted glass aesthetics with blur effects and translucent surfaces.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2" style={{ backgroundColor: 'white', color: '#764ba2' }}>Get Started <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 rounded-full font-semibold" style={{ ...glassStyle }}>Learn More</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="relative z-10" style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10">Features</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Layers, title: 'Blur Effects' }, { icon: Sparkles, title: 'Translucent' }, { icon: Circle, title: 'Soft Edges' }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl text-center" style={{ ...glassStyle }}>
                                <item.icon size={32} className="mx-auto mb-4" />
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Glass design ready.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="relative z-10" style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10">Plans</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Basic', price: '$9', hot: false }, { name: 'Pro', price: '$29', hot: true }, { name: 'Team', price: '$59', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl text-center" style={{ ...glassStyle, backgroundColor: plan.hot ? 'rgba(255,255,255,0.25)' : glassBg }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: 'white', color: '#764ba2' }}>Popular</div>}
                                <h3 className="font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4">{plan.price}<span className="text-sm font-normal" style={{ color: colors.muted }}>/mo</span></div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All effects', 'Support', 'Updates'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={14} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 rounded-full font-semibold" style={{ backgroundColor: plan.hot ? 'white' : 'transparent', color: plan.hot ? '#764ba2' : 'white', border: plan.hot ? 'none' : `1px solid ${colors.border}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative z-10" style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10">FAQ</h2>
                    <div className="rounded-2xl overflow-hidden" style={{ ...glassStyle }}>
                        {[{ q: 'What is Frosted Glass?', a: 'Glassmorphism with blur effects and translucent surfaces.' },
                        { q: 'Customizable?', a: 'Full control over blur intensity and colors.' },
                        { q: 'Works everywhere?', a: 'All modern browsers with backdrop-filter support.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b last:border-b-0" style={{ borderColor: colors.border }}>
                                <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span>{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.muted, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10" style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 rounded-2xl text-center" style={{ ...glassStyle }}>
                    <Snowflake size={32} className="mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-6">Experience the frost</h2>
                    <button className="px-10 py-3 rounded-full font-semibold" style={{ backgroundColor: 'white', color: '#764ba2' }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t" style={{ borderColor: colors.border, padding: '30px 24px' }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Snowflake size={18} /> Frost</div>
                    <span style={{ color: colors.muted }}>© 2025 Frosted Glass</span>
                </div>
            </footer>
        </div>
    );
};
