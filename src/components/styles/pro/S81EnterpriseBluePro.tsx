import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Building, Shield, Globe, Server } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S81EnterpriseBluePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FFFFFF', surface: '#F0F4F8', text: '#1E3A5F', muted: '#5A7A9A', blue: '#0052CC', navy: '#002855', lightBlue: '#DEEBFF', accent: '#0065FF' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"IBM Plex Sans", "Segoe UI", sans-serif' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: '#E4E8EC', backgroundColor: colors.bg }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Building size={24} style={{ color: colors.blue }} />
                        <span className="text-lg font-semibold">GlobalTech</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Platform', 'Solutions', 'Resources'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-blue-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 font-medium text-white rounded" style={{ backgroundColor: colors.blue }}>Get Started</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: '#E4E8EC', backgroundColor: colors.surface }}>
                        {['Platform', 'Solutions', 'Resources'].map((item) => (<div key={item} className="py-2 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 font-medium text-white rounded" style={{ backgroundColor: colors.blue }}>Get Started</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px', backgroundColor: colors.lightBlue }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ backgroundColor: 'white' }}>
                        <Shield size={14} style={{ color: colors.blue }} />
                        <span className="text-sm font-medium" style={{ color: colors.blue }}>Enterprise Ready</span>
                    </div>
                    <h1 className="mb-4 font-bold leading-tight" style={{ fontSize: isMobile ? '36px' : '56px', color: colors.navy }}>
                        Trusted by <span style={{ color: colors.blue }}>Fortune 500</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-8" style={{ color: colors.muted }}>Reliable enterprise solutions with professional blue tones and corporate trust.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 font-medium text-white rounded flex items-center justify-center gap-2" style={{ backgroundColor: colors.blue }}>Request Demo <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 font-medium rounded" style={{ backgroundColor: 'white', color: colors.blue }}>View Case Studies</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.navy }}>Enterprise Solutions</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Shield, title: 'Security First' }, { icon: Globe, title: 'Global Scale' }, { icon: Server, title: 'High Availability' }].map((item) => (
                            <div key={item.title} className="p-6 rounded-lg" style={{ backgroundColor: colors.surface }}>
                                <item.icon size={32} className="mb-4" style={{ color: colors.blue }} />
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Enterprise-grade solutions.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.navy }}>Plans</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Team', price: '$199', hot: false }, { name: 'Business', price: '$499', hot: true }, { name: 'Enterprise', price: 'Custom', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-lg" style={{ backgroundColor: colors.bg, border: `2px solid ${plan.hot ? colors.blue : '#E4E8EC'}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: colors.blue }}>Recommended</div>}
                                <h3 className="font-semibold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: colors.navy }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All features', 'Priority support', 'SLA'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.blue }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 font-medium rounded" style={{ backgroundColor: plan.hot ? colors.blue : 'transparent', color: plan.hot ? 'white' : colors.blue, border: plan.hot ? 'none' : `1px solid ${colors.blue}` }}>Get Started</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.navy }}>FAQ</h2>
                    <div className="space-y-3">
                        {[{ q: 'What is Enterprise Blue?', a: 'Professional blue aesthetics trusted by Fortune 500 companies.' },
                        { q: 'Customizable?', a: 'Full control over branding and colors.' },
                        { q: 'Enterprise support?', a: 'Dedicated support and SLA available.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-lg overflow-hidden" style={{ backgroundColor: colors.surface }}>
                                <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.blue, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 rounded-lg text-center" style={{ backgroundColor: colors.navy }}>
                    <Building size={40} className="mx-auto mb-4" style={{ color: 'white' }} />
                    <h2 className="text-2xl font-bold mb-4 text-white">Ready to Scale?</h2>
                    <button className="px-10 py-3 font-medium rounded" style={{ backgroundColor: 'white', color: colors.navy }}>Contact Sales</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: '#E4E8EC', padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-semibold"><Building size={20} style={{ color: colors.blue }} /> GlobalTech</div>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Enterprise Blue</span>
                </div>
            </footer>
        </div>
    );
};
