import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Box, Layers, Grid3X3, Move3D } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S44IsometricPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#F8FAFC', surface: '#FFFFFF', text: '#1E293B', muted: '#64748B', blue: '#3B82F6', purple: '#8B5CF6', cyan: '#06B6D4' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: '#E2E8F0', backgroundColor: `${colors.surface}F0`, backdropFilter: 'blur(8px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.purple})` }}><Box size={20} color="white" /></div>
                        <span className="text-xl font-bold">IsoUI</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Components', 'Templates', 'Docs'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-blue-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2.5 rounded-xl font-semibold text-white" style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.purple})` }}>Get Started</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: '#E2E8F0', backgroundColor: colors.surface }}>
                        {['Components', 'Templates', 'Docs'].map((item) => (<div key={item} className="py-3 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 rounded-xl font-semibold text-white" style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.purple})` }}>Get Started</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 40px' }}>
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border" style={{ borderColor: '#E2E8F0' }}>
                        <Move3D size={16} style={{ color: colors.blue }} />
                        <span className="text-sm font-medium" style={{ color: colors.muted }}>3D Perspective Design</span>
                    </div>
                    <h1 className="mb-4 font-bold leading-tight" style={{ fontSize: isMobile ? '36px' : '64px' }}>Isometric <span style={{ color: colors.blue }}>Precision</span></h1>
                    <p className="max-w-xl mx-auto mb-8" style={{ color: colors.muted }}>Create stunning 3D-looking interfaces with isometric perspective. Perfect depth without complexity.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2" style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.purple})` }}>Explore <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 rounded-xl font-semibold border" style={{ borderColor: '#E2E8F0', color: colors.text }}>View Examples</button>
                    </div>
                    {/* Isometric Cubes */}
                    <div className="mt-16 flex justify-center items-end gap-4">
                        {[{ h: 80, c: colors.blue }, { h: 120, c: colors.purple }, { h: 60, c: colors.cyan }].map((item, i) => (
                            <div key={i} className="relative" style={{ width: 60, height: item.h, transform: 'skewY(-5deg)', transformOrigin: 'bottom' }}>
                                <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: item.c, opacity: 0.9 }} />
                                <div className="absolute top-0 left-0 right-0 h-4 rounded-t-lg" style={{ backgroundColor: item.c, filter: 'brightness(1.2)' }} />
                                <div className="absolute top-0 right-0 bottom-0 w-3 rounded-r-lg" style={{ backgroundColor: item.c, filter: 'brightness(0.8)' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 40px' }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12">Features</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Box, title: '3D Depth', color: colors.blue }, { icon: Layers, title: 'Stacked Views', color: colors.purple }, { icon: Grid3X3, title: 'Grid System', color: colors.cyan }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl border" style={{ borderColor: '#E2E8F0', backgroundColor: colors.surface }}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}20` }}><item.icon size={24} style={{ color: item.color }} /></div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Isometric perspective for modern UIs.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 40px', backgroundColor: colors.surface }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12">Pricing</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Starter', price: '$29', hot: false }, { name: 'Pro', price: '$79', hot: true }, { name: 'Team', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl border" style={{ borderColor: plan.hot ? colors.blue : '#E2E8F0', backgroundColor: colors.bg }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.purple})` }}>Popular</div>}
                                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold mb-4" style={{ color: colors.blue }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All components', 'Templates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.blue }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 rounded-xl font-semibold" style={{ background: plan.hot ? `linear-gradient(135deg, ${colors.blue}, ${colors.purple})` : 'transparent', color: plan.hot ? 'white' : colors.text, border: plan.hot ? 'none' : '1px solid #E2E8F0' }}>Choose</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 40px' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12">FAQ</h2>
                    <div className="space-y-3">
                        {[{ q: 'What is isometric design?', a: 'A 3D visualization technique using a fixed angle (30°) for depth perception.' },
                        { q: 'Is it CSS-based?', a: 'Yes, pure CSS transforms for performance.' },
                        { q: 'Works on mobile?', a: 'Fully responsive and touch-friendly.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: '#E2E8F0', backgroundColor: colors.surface }}>
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
            <section style={{ padding: '60px 40px' }}>
                <div className="max-w-3xl mx-auto p-10 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.purple})` }}>
                    <Box size={40} className="mx-auto mb-4 text-white" />
                    <h2 className="text-3xl font-bold mb-4 text-white">Build in 3D</h2>
                    <button className="px-10 py-3 rounded-xl font-semibold" style={{ backgroundColor: 'white', color: colors.blue }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: '#E2E8F0', padding: '40px', backgroundColor: colors.surface }}>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Box size={20} style={{ color: colors.blue }} /><span className="font-bold">IsoUI</span></div>
                    <span style={{ color: colors.muted }}>© 2025 IsoUI</span>
                </div>
            </footer>
        </div>
    );
};
