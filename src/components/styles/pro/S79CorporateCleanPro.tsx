import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Building2, Briefcase, BarChart, Users } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S79CorporateCleanPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FFFFFF', surface: '#F8FAFB', text: '#1A2B3C', muted: '#6B7D8F', blue: '#0066CC', lightBlue: '#E8F4FF', navy: '#002855', gray: '#CBD5E1' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Inter", "Helvetica Neue", sans-serif' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.gray, backgroundColor: colors.bg }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Building2 size={24} style={{ color: colors.blue }} />
                        <span className="text-lg font-semibold">Enterprise</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Solutions', 'Services', 'About'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-blue-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 font-medium text-white rounded" style={{ backgroundColor: colors.blue }}>Contact</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.gray, backgroundColor: colors.surface }}>
                        {['Solutions', 'Services', 'About'].map((item) => (<div key={item} className="py-2 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 font-medium text-white rounded" style={{ backgroundColor: colors.blue }}>Contact</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full" style={{ backgroundColor: colors.lightBlue }}>
                        <Briefcase size={16} style={{ color: colors.blue }} />
                        <span className="text-sm font-medium" style={{ color: colors.blue }}>Professional Solutions</span>
                    </div>
                    <h1 className="mb-4 font-bold leading-tight" style={{ fontSize: isMobile ? '36px' : '60px' }}>
                        Enterprise-Grade <span style={{ color: colors.blue }}>Excellence</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-8" style={{ color: colors.muted }}>Clean corporate aesthetics with professional polish and trustworthy design.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 font-medium text-white rounded flex items-center justify-center gap-2" style={{ backgroundColor: colors.blue }}>Get Started <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 font-medium rounded border" style={{ borderColor: colors.gray, color: colors.text }}>Learn More</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.navy }}>Solutions</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Building2, title: 'Enterprise Ready' }, { icon: BarChart, title: 'Data Analytics' }, { icon: Users, title: 'Team Management' }].map((item) => (
                            <div key={item.title} className="p-6 rounded-lg" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.gray}` }}>
                                <item.icon size={32} className="mb-4" style={{ color: colors.blue }} />
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Professional-grade solutions.</p>
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
                        {[{ name: 'Starter', price: '$99', hot: false }, { name: 'Business', price: '$249', hot: true }, { name: 'Enterprise', price: '$499', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-lg text-center" style={{ backgroundColor: plan.hot ? colors.lightBlue : colors.bg, border: `1px solid ${plan.hot ? colors.blue : colors.gray}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: colors.blue }}>Popular</div>}
                                <h3 className="font-semibold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: colors.navy }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All features', 'Priority support', 'Analytics'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.blue }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 font-medium rounded" style={{ backgroundColor: plan.hot ? colors.blue : 'transparent', color: plan.hot ? 'white' : colors.blue, border: plan.hot ? 'none' : `1px solid ${colors.blue}` }}>Choose Plan</button>
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
                        {[{ q: 'What is Corporate Clean style?', a: 'Professional aesthetics with clean lines and trustworthy design.' },
                        { q: 'Customizable?', a: 'Full control over branding and colors.' },
                        { q: 'Enterprise ready?', a: 'Scalable and secure for large organizations.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-lg overflow-hidden" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.gray}` }}>
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
                    <Building2 size={40} className="mx-auto mb-4" style={{ color: 'white' }} />
                    <h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform?</h2>
                    <button className="px-10 py-3 font-medium rounded" style={{ backgroundColor: 'white', color: colors.navy }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.gray, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-semibold"><Building2 size={20} style={{ color: colors.blue }} /> Enterprise</div>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Corporate Clean</span>
                </div>
            </footer>
        </div>
    );
};
