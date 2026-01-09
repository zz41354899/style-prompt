import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Triangle, Box, Shapes, Gem } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S43LowPolyPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0F1419', surface: '#1C2128', text: '#E6EDF3', muted: '#7D8590', teal: '#00D4AA', purple: '#A855F7', blue: '#58A6FF' };
    const gradient = 'linear-gradient(135deg, #00D4AA 0%, #58A6FF 50%, #A855F7 100%)';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Rajdhani", "Exo 2", sans-serif' }}>
            {/* Geometric Background */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,0 30,50 0,100" fill={colors.teal} opacity="0.3" />
                <polygon points="100,0 70,50 100,100" fill={colors.purple} opacity="0.3" />
                <polygon points="50,0 80,40 50,80 20,40" fill={colors.blue} opacity="0.2" />
            </svg>

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ borderColor: `${colors.teal}30`, backgroundColor: `${colors.bg}E0` }}>
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-8">
                    <div className="flex items-center gap-3">
                        <Triangle size={28} style={{ color: colors.teal }} />
                        <span className="text-2xl font-bold tracking-wider">POLYUI</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Shapes', 'Render', 'Export'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-teal-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-8 py-3 font-bold rounded-none" style={{ background: gradient, clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>Create</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: `${colors.teal}30`, backgroundColor: colors.surface }}>
                        {['Shapes', 'Render', 'Export'].map((item) => (<div key={item} className="py-3 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 font-bold" style={{ background: gradient }}>Create</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 40px' }}>
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 rounded-none" style={{ backgroundColor: colors.surface, borderLeft: `4px solid ${colors.teal}` }}>
                        <Shapes size={18} style={{ color: colors.teal }} />
                        <span className="tracking-widest text-sm" style={{ color: colors.muted }}>GEOMETRIC PRECISION</span>
                    </div>
                    <h1 className="mb-6 font-black leading-tight" style={{ fontSize: isMobile ? '42px' : '80px', background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>LOW POLY ART</h1>
                    <p className="max-w-2xl mx-auto mb-10" style={{ color: colors.muted }}>Crystalline beauty through geometric simplicity. Create stunning polygonal interfaces with mathematical precision.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 font-bold flex items-center justify-center gap-2" style={{ background: gradient, clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}>Start Creating <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 font-bold border" style={{ borderColor: colors.teal, color: colors.teal }}>View Gallery</button>
                    </div>
                    {/* Geometric Shapes */}
                    <div className="mt-16 flex justify-center gap-8">
                        {[colors.teal, colors.blue, colors.purple].map((color, i) => (
                            <div key={i} className="w-20 h-20" style={{ backgroundColor: color, clipPath: ['polygon(50% 0%, 100% 100%, 0% 100%)', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'][i], opacity: 0.8 }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 40px' }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-4xl font-bold mb-12" style={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FEATURES</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Triangle, title: 'Triangulation', color: colors.teal }, { icon: Box, title: 'Mesh Design', color: colors.blue }, { icon: Gem, title: 'Crystal Effects', color: colors.purple }].map((item) => (
                            <div key={item.title} className="p-8" style={{ backgroundColor: colors.surface, borderLeft: `4px solid ${item.color}` }}>
                                <item.icon size={32} className="mb-6" style={{ color: item.color }} />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Geometric perfection in every element.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 40px', backgroundColor: colors.surface }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-4xl font-bold mb-12" style={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>PRICING</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Basic', price: '$29', color: colors.teal, hot: false }, { name: 'Pro', price: '$79', color: colors.blue, hot: true }, { name: 'Studio', price: '$149', color: colors.purple, hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-8" style={{ backgroundColor: colors.bg, borderTop: `4px solid ${plan.color}` }}>
                                {plan.hot && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-bold" style={{ background: gradient }}>POPULAR</div>}
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-black mb-6" style={{ color: plan.color }}>{plan.price}</div>
                                <ul className="space-y-3 mb-8">
                                    {['All shapes', 'Export options', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={16} style={{ color: plan.color }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 font-bold" style={{ backgroundColor: plan.hot ? plan.color : 'transparent', color: plan.hot ? colors.bg : colors.text, border: plan.hot ? 'none' : `1px solid ${plan.color}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 40px' }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-4xl font-bold mb-12" style={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FAQ</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is low poly design?', a: 'A style using minimal polygons to create geometric, crystalline visuals.' },
                        { q: 'Can I animate these shapes?', a: 'Yes, built-in support for geometric animations.' },
                        { q: 'Performance impact?', a: 'Optimized SVG and CSS for fast rendering.' }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: colors.surface, borderLeft: `4px solid ${colors.teal}` }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.teal, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="p-5 pt-0" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 40px' }}>
                <div className="max-w-4xl mx-auto p-12 text-center" style={{ background: gradient }}>
                    <Triangle size={48} className="mx-auto mb-6" />
                    <h2 className="text-4xl font-bold mb-6 text-white">Start Creating</h2>
                    <button className="px-12 py-4 font-bold" style={{ backgroundColor: colors.bg, color: colors.text }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: `${colors.teal}30`, padding: '40px' }}>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Triangle size={20} style={{ color: colors.teal }} /><span className="font-bold">POLYUI</span></div>
                    <span style={{ color: colors.muted }}>© 2025 Low Poly Designs</span>
                </div>
            </footer>
        </div>
    );
};
