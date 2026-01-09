import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Moon, Sparkles, Zap, Eye } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S92OLEDBlackPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#000000', surface: '#0A0A0A', text: '#FFFFFF', muted: '#666666', accent: '#FFFFFF', dim: '#333333' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"SF Pro Display", "Inter", sans-serif' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.dim, backgroundColor: colors.bg }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-2">
                        <Moon size={24} style={{ color: colors.text }} />
                        <span className="text-lg font-medium tracking-tight">Noir</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Features', 'Themes', 'Download'].map((item) => (<span key={item} className="cursor-pointer hover:text-white" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-4 py-2 text-black" style={{ backgroundColor: colors.text }}>Get App</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.dim, backgroundColor: colors.surface }}>
                        {['Features', 'Themes', 'Download'].map((item) => (<div key={item} className="py-2" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 text-black" style={{ backgroundColor: colors.text }}>Get App</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '100px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border" style={{ borderColor: colors.dim }}>
                        <Eye size={14} style={{ color: colors.muted }} />
                        <span style={{ color: colors.muted }}>True Black Display</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '40px' : '72px' }}>
                        Pure. <span style={{ opacity: 0.5 }}>Dark.</span> Beautiful.
                    </h1>
                    <p className="max-w-md mx-auto mb-10" style={{ color: colors.muted }}>OLED-optimized pure black aesthetics with pixel-off dark mode and stunning contrast.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 text-black flex items-center justify-center gap-2" style={{ backgroundColor: colors.text }}>Download <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 border" style={{ borderColor: colors.dim, color: colors.text }}>Learn More</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '80px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-medium mb-12">Features</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Moon, title: 'True Black' }, { icon: Zap, title: 'Battery Saver' }, { icon: Eye, title: 'Eye Comfort' }].map((item) => (
                            <div key={item.title} className="p-6 text-center border" style={{ borderColor: colors.dim, backgroundColor: colors.bg }}>
                                <item.icon size={28} className="mx-auto mb-4" />
                                <h3 className="font-medium mb-2">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>OLED optimized.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-medium mb-12">Plans</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Free', price: '$0', hot: false }, { name: 'Pro', price: '$4', hot: true }, { name: 'Ultra', price: '$9', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 text-center border" style={{ borderColor: plan.hot ? colors.text : colors.dim, backgroundColor: colors.surface }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-black" style={{ backgroundColor: colors.text }}>Popular</div>}
                                <h3 className="font-medium mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4">{plan.price}<span className="text-sm font-normal" style={{ color: colors.muted }}>/mo</span></div>
                                <ul className="space-y-2 mb-6 text-left text-sm">
                                    {['All themes', 'Sync', 'No ads'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={14} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2" style={{ backgroundColor: plan.hot ? colors.text : 'transparent', color: plan.hot ? 'black' : colors.text, border: plan.hot ? 'none' : `1px solid ${colors.dim}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '80px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl font-medium mb-12">FAQ</h2>
                    <div className="space-y-0">
                        {[{ q: 'What is OLED Black?', a: 'Pure black #000000 design that turns off pixels on OLED screens.' },
                        { q: 'Battery savings?', a: 'Up to 30% less battery on OLED displays.' },
                        { q: 'Works everywhere?', a: 'Best on OLED, works on all screens.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b" style={{ borderColor: colors.dim }}>
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
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-3xl mx-auto p-12 text-center border" style={{ borderColor: colors.dim }}>
                    <Sparkles size={32} className="mx-auto mb-4" />
                    <h2 className="text-2xl font-medium mb-6">Experience true darkness</h2>
                    <button className="px-10 py-3 text-black" style={{ backgroundColor: colors.text }}>Download</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.dim, padding: '30px 24px' }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Moon size={18} /> Noir</div>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 OLED Black</span>
                </div>
            </footer>
        </div>
    );
};
