import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Landmark, Shield, TrendingUp, Lock } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S82FintechTrustPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FAFBFC', surface: '#FFFFFF', text: '#1A1D21', muted: '#5C6370', teal: '#0D9488', navy: '#0F172A', gold: '#D4AF37', lightTeal: '#CCFBF1' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"DM Sans", "Inter", sans-serif' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: '#E5E7EB', backgroundColor: colors.surface }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Landmark size={24} style={{ color: colors.teal }} />
                        <span className="text-lg font-bold">FinFlow</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Products', 'Security', 'Pricing'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-teal-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 font-semibold text-white rounded-lg" style={{ backgroundColor: colors.teal }}>Open Account</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: '#E5E7EB', backgroundColor: colors.bg }}>
                        {['Products', 'Security', 'Pricing'].map((item) => (<div key={item} className="py-2 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 font-semibold text-white rounded-lg" style={{ backgroundColor: colors.teal }}>Open Account</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ backgroundColor: colors.lightTeal }}>
                        <Shield size={14} style={{ color: colors.teal }} />
                        <span className="text-sm font-medium" style={{ color: colors.teal }}>Bank-Grade Security</span>
                    </div>
                    <h1 className="mb-4 font-bold leading-tight" style={{ fontSize: isMobile ? '36px' : '56px', color: colors.navy }}>
                        Financial Trust <span style={{ color: colors.teal }}>Redefined</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-8" style={{ color: colors.muted }}>Professional fintech aesthetics with trust-building teal accents and secure feel.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 font-semibold text-white rounded-lg flex items-center justify-center gap-2" style={{ backgroundColor: colors.teal }}>Get Started <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 font-semibold rounded-lg border" style={{ borderColor: colors.teal, color: colors.teal }}>Book Demo</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.navy }}>Why FinFlow</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Shield, title: 'Secure' }, { icon: TrendingUp, title: 'Growth' }, { icon: Lock, title: 'Compliant' }].map((item) => (
                            <div key={item.title} className="p-6 rounded-xl" style={{ backgroundColor: colors.bg, border: '1px solid #E5E7EB' }}>
                                <item.icon size={32} className="mb-4" style={{ color: colors.teal }} />
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Fintech excellence.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.navy }}>Plans</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Starter', price: '$29', hot: false }, { name: 'Pro', price: '$99', hot: true }, { name: 'Enterprise', price: '$299', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-xl" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.teal : '#E5E7EB'}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: colors.teal }}>Popular</div>}
                                <h3 className="font-semibold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: colors.navy }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All features', 'Support', 'Security'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.teal }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 font-semibold rounded-lg" style={{ backgroundColor: plan.hot ? colors.teal : 'transparent', color: plan.hot ? 'white' : colors.teal, border: plan.hot ? 'none' : `1px solid ${colors.teal}` }}>Choose Plan</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.navy }}>FAQ</h2>
                    <div className="space-y-3">
                        {[{ q: 'What is Fintech Trust?', a: 'Professional financial aesthetics with bank-grade security focus.' },
                        { q: 'Is it secure?', a: 'SOC 2 compliant with end-to-end encryption.' },
                        { q: 'Customizable?', a: 'Full branding control available.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: colors.bg, border: '1px solid #E5E7EB' }}>
                                <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.teal, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 rounded-xl text-center" style={{ backgroundColor: colors.navy }}>
                    <Landmark size={40} className="mx-auto mb-4" style={{ color: 'white' }} />
                    <h2 className="text-2xl font-bold mb-4 text-white">Start Banking Better</h2>
                    <button className="px-10 py-3 font-semibold rounded-lg" style={{ backgroundColor: colors.teal, color: 'white' }}>Open Account</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: '#E5E7EB', padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-bold"><Landmark size={20} style={{ color: colors.teal }} /> FinFlow</div>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Fintech Trust</span>
                </div>
            </footer>
        </div>
    );
};
