import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, BookOpen, FileText, Bookmark, Eye } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S91EInkPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#F5F5F0', surface: '#FAFAF5', text: '#1A1A1A', muted: '#5A5A5A', ink: '#2A2A2A', paper: '#E8E8E0', border: '#C0C0B8' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Literata", "Georgia", serif' }}>
            {/* Paper Texture */}
            <div className="fixed inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.border, backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-2">
                        <BookOpen size={24} style={{ color: colors.ink }} />
                        <span className="text-lg">Reader</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Library', 'Store', 'Settings'].map((item) => (<span key={item} className="cursor-pointer hover:underline" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-4 py-2 border" style={{ borderColor: colors.ink, color: colors.ink }}>Sign In</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.border, backgroundColor: colors.bg }}>
                        {['Library', 'Store', 'Settings'].map((item) => (<div key={item} className="py-2" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 border" style={{ borderColor: colors.ink, color: colors.ink }}>Sign In</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border" style={{ borderColor: colors.border }}>
                        <Eye size={16} style={{ color: colors.muted }} />
                        <span style={{ color: colors.muted }}>Eye-friendly reading</span>
                    </div>
                    <h1 className="mb-6 leading-tight" style={{ fontSize: isMobile ? '36px' : '56px', lineHeight: 1.2 }}>
                        Read without strain
                    </h1>
                    <p className="max-w-md mx-auto mb-8" style={{ color: colors.muted, lineHeight: 1.8 }}>E-ink inspired aesthetics with high contrast, paper-like feel, and easy-on-the-eyes design.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.ink }}>Start Reading <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 border" style={{ borderColor: colors.ink, color: colors.ink }}>Browse Library</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.paper }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-2xl mb-10" style={{ color: colors.ink }}>Features</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: BookOpen, title: 'Paper Feel' }, { icon: Eye, title: 'Eye Care' }, { icon: FileText, title: 'Clean Type' }].map((item) => (
                            <div key={item.title} className="p-6 text-center" style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}>
                                <item.icon size={28} className="mx-auto mb-4" style={{ color: colors.ink }} />
                                <h3 className="mb-2">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Comfortable reading.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-2xl mb-10" style={{ color: colors.ink }}>Plans</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Basic', price: '$4', hot: false }, { name: 'Plus', price: '$9', hot: true }, { name: 'Premium', price: '$14', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 text-center" style={{ backgroundColor: colors.surface, border: `1px solid ${plan.hot ? colors.ink : colors.border}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-white" style={{ backgroundColor: colors.ink }}>Popular</div>}
                                <h3 className="mb-2">{plan.name}</h3>
                                <div className="text-4xl mb-4" style={{ color: colors.ink }}>{plan.price}<span className="text-sm" style={{ color: colors.muted }}>/mo</span></div>
                                <ul className="space-y-2 mb-6 text-left text-sm">
                                    {['Unlimited reading', 'Sync devices', 'No ads'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.ink }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2" style={{ backgroundColor: plan.hot ? colors.ink : 'transparent', color: plan.hot ? 'white' : colors.ink, border: plan.hot ? 'none' : `1px solid ${colors.ink}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.paper }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl mb-10" style={{ color: colors.ink }}>FAQ</h2>
                    <div className="space-y-0">
                        {[{ q: 'What is E-Ink style?', a: 'Paper-like aesthetics designed for comfortable long reading sessions.' },
                        { q: 'Customizable?', a: 'Adjust font size, margins, and contrast.' },
                        { q: 'Works everywhere?', a: 'All devices supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b" style={{ borderColor: colors.border }}>
                                <button className="w-full flex items-center justify-between py-4 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span>{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.muted, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="pb-4 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 text-center" style={{ backgroundColor: colors.ink }}>
                    <Bookmark size={32} className="mx-auto mb-4" style={{ color: 'white' }} />
                    <h2 className="text-2xl mb-4 text-white">Start reading today</h2>
                    <button className="px-10 py-3" style={{ backgroundColor: 'white', color: colors.ink }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.border, padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><BookOpen size={18} style={{ color: colors.ink }} /> Reader</div>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 E-Ink</span>
                </div>
            </footer>
        </div>
    );
};
