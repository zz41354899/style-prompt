import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Mountain, Waves, Flower2, Moon } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S77UkiyoePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#F5F0E6', surface: '#FFFEF8', text: '#2C2824', muted: '#6B6358', indigo: '#3D4F7C', red: '#C23B22', gold: '#C5A572', cream: '#FAF6ED' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Noto Serif JP", "Georgia", serif' }}>
            {/* Wave Pattern Background */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='50' viewBox='0 0 100 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,25 Q25,0 50,25 T100,25' fill='none' stroke='%233D4F7C' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '100px 50px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: `${colors.surface}E0` }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6 border-b-2" style={{ borderColor: colors.indigo }}>
                    <div className="flex items-center gap-3">
                        <Waves size={24} style={{ color: colors.indigo }} />
                        <span className="text-xl">浮世絵</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['波', '花', '月'].map((item) => (<span key={item} className="cursor-pointer hover:text-indigo-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 text-white rounded" style={{ backgroundColor: colors.indigo }}>探索</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-b-2" style={{ borderColor: colors.indigo, backgroundColor: colors.surface }}>
                        {['波', '花', '月'].map((item) => (<div key={item} className="py-3" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 text-white rounded" style={{ backgroundColor: colors.indigo }}>探索</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded border-2" style={{ borderColor: colors.indigo }}>
                        <Mountain size={18} style={{ color: colors.indigo }} />
                        <span style={{ color: colors.muted }}>Japanese Woodblock</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '44px' : '80px' }}>
                        <span style={{ color: colors.indigo }}>Ukiyo-e</span> <span style={{ color: colors.red }}>美</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 text-lg" style={{ color: colors.muted }}>Elegant woodblock aesthetics with bold outlines and traditional Japanese artistry.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 text-white rounded flex items-center justify-center gap-2" style={{ backgroundColor: colors.indigo }}>Explore <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 rounded border-2" style={{ borderColor: colors.red, color: colors.red }}>View Gallery</button>
                    </div>
                    {/* Japanese Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Mountain, Waves, Flower2, Moon].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 rounded-full flex items-center justify-center border-2" style={{ borderColor: colors.indigo, backgroundColor: colors.surface }}><Icon size={24} style={{ color: [colors.indigo, colors.indigo, colors.red, colors.gold][i] }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.indigo }}>技法</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Waves, title: 'Wave Patterns' }, { icon: Mountain, title: 'Bold Lines' }, { icon: Flower2, title: 'Traditional Art' }].map((item) => (
                            <div key={item.title} className="p-6 rounded text-center border-2" style={{ borderColor: colors.indigo, backgroundColor: colors.bg }}>
                                <item.icon size={36} className="mx-auto mb-4" style={{ color: colors.indigo }} />
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Ukiyo-e beauty.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.red }}>Collections</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: '初級', price: '$49', hot: false }, { name: '匠', price: '$99', hot: true }, { name: '達人', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.red : colors.indigo}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded text-xs text-white" style={{ backgroundColor: colors.red }}>★ 人気</div>}
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-5xl font-bold mb-6" style={{ color: colors.indigo }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All patterns', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.red }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 rounded" style={{ backgroundColor: plan.hot ? colors.indigo : 'transparent', color: plan.hot ? 'white' : colors.indigo, border: plan.hot ? 'none' : `2px solid ${colors.indigo}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.indigo }}>FAQ</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Ukiyo-e style?', a: 'Elegant woodblock aesthetics with bold outlines and traditional flat colors.' },
                        { q: 'Customizable?', a: 'Full control over patterns and color palettes.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded overflow-hidden border-2" style={{ borderColor: colors.indigo, backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-semibold">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.indigo, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded text-center" style={{ backgroundColor: colors.cream, border: `2px solid ${colors.indigo}` }}>
                    <Waves size={48} className="mx-auto mb-6" style={{ color: colors.indigo }} />
                    <h2 className="text-3xl font-bold mb-6">伝統の美</h2>
                    <button className="px-12 py-4 text-white rounded" style={{ backgroundColor: colors.indigo }}>Begin</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-2" style={{ borderColor: colors.indigo, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Waves size={20} style={{ color: colors.indigo }} /> 浮世絵</div>
                    <span style={{ color: colors.muted }}>© 2025 Ukiyo-e</span>
                </div>
            </footer>
        </div>
    );
};
