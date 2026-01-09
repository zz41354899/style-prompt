import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Square, Minus, Circle, Triangle } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S90BrutalistColorPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FFFEF0', surface: '#FFFFFF', text: '#0A0A0A', muted: '#404040', red: '#FF3B30', blue: '#007AFF', yellow: '#FFCC00', green: '#34C759', black: '#000000' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Space Mono", "Courier New", monospace' }}>
            {/* Bold Header Bar */}
            <div className="h-4" style={{ backgroundColor: colors.red }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b-4" style={{ borderColor: colors.black, backgroundColor: colors.bg }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <span className="text-xl font-bold tracking-tight">BRUT.</span>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['WORK', 'INFO', 'CONTACT'].map((item) => (<span key={item} className="font-bold cursor-pointer hover:underline" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 font-bold text-white" style={{ backgroundColor: colors.black }}>GO→</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t-4" style={{ borderColor: colors.black, backgroundColor: colors.surface }}>
                        {['WORK', 'INFO', 'CONTACT'].map((item) => (<div key={item} className="py-2 font-bold" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 font-bold text-white" style={{ backgroundColor: colors.black }}>GO→</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-6 h-6" style={{ backgroundColor: colors.red }} />
                        <div className="w-6 h-6" style={{ backgroundColor: colors.blue }} />
                        <div className="w-6 h-6" style={{ backgroundColor: colors.yellow }} />
                    </div>
                    <h1 className="mb-4 font-black leading-none" style={{ fontSize: isMobile ? '48px' : '96px' }}>
                        RAW.<br /><span style={{ color: colors.red }}>BOLD.</span><br />COLOR.
                    </h1>
                    <p className="max-w-lg mb-8 text-lg" style={{ color: colors.muted }}>Brutalist aesthetics with bold primary colors and unapologetic raw design.</p>
                    <div className="flex gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-4 font-bold text-white flex items-center justify-center gap-2 border-4" style={{ backgroundColor: colors.black, borderColor: colors.black }}>START <ArrowRight size={20} /></button>
                        <button className="px-8 py-4 font-bold border-4" style={{ borderColor: colors.black, color: colors.black }}>LEARN</button>
                    </div>
                </div>
            </section>

            {/* Color Blocks */}
            <section className="grid grid-cols-4 h-8">
                <div style={{ backgroundColor: colors.red }} />
                <div style={{ backgroundColor: colors.blue }} />
                <div style={{ backgroundColor: colors.yellow }} />
                <div style={{ backgroundColor: colors.green }} />
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-black mb-8" style={{ borderBottom: `4px solid ${colors.black}`, paddingBottom: '8px', display: 'inline-block' }}>ELEMENTS</h2>
                    <div className="grid gap-0" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Square, title: 'RAW', color: colors.red }, { icon: Circle, title: 'BOLD', color: colors.blue }, { icon: Triangle, title: 'PURE', color: colors.yellow }].map((item) => (
                            <div key={item.title} className="p-6 border-4" style={{ borderColor: colors.black, backgroundColor: item.color + '20' }}>
                                <item.icon size={32} className="mb-4" style={{ color: item.color }} />
                                <h3 className="font-black text-xl mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>No compromise.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-black mb-8" style={{ borderBottom: `4px solid ${colors.black}`, paddingBottom: '8px', display: 'inline-block' }}>PLANS</h2>
                    <div className="grid gap-0" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'BASIC', price: '$29', hot: false, color: colors.yellow }, { name: 'PRO', price: '$79', hot: true, color: colors.red }, { name: 'MAX', price: '$149', hot: false, color: colors.blue }].map((plan) => (
                            <div key={plan.name} className="relative p-6 border-4" style={{ borderColor: colors.black, backgroundColor: plan.hot ? plan.color : colors.bg }}>
                                {plan.hot && <div className="absolute -top-4 right-4 px-3 py-1 font-bold text-white" style={{ backgroundColor: colors.black }}>★ HOT</div>}
                                <h3 className="font-black text-xl mb-2">{plan.name}</h3>
                                <div className="text-4xl font-black mb-4" style={{ color: plan.hot ? colors.black : plan.color }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All features', 'Support', 'Updates'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.black }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 font-bold border-4" style={{ borderColor: colors.black, backgroundColor: plan.hot ? 'white' : colors.black, color: plan.hot ? colors.black : 'white' }}>SELECT→</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-black mb-8" style={{ borderBottom: `4px solid ${colors.black}`, paddingBottom: '8px', display: 'inline-block' }}>FAQ</h2>
                    <div className="space-y-0">
                        {[{ q: 'WHAT IS BRUTALIST?', a: 'Raw design with bold colors and no decoration.' },
                        { q: 'CUSTOMIZABLE?', a: 'Full control over color blocks and typography.' },
                        { q: 'WORKS EVERYWHERE?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border-4" style={{ borderColor: colors.black, marginTop: i > 0 ? '-4px' : 0 }}>
                                <button className="w-full flex items-center justify-between p-4 text-left font-bold" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span>{item.q}</span>
                                    <ChevronDown size={18} style={{ transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-8 text-center border-4" style={{ borderColor: colors.black, backgroundColor: colors.red }}>
                    <h2 className="text-3xl font-black mb-4 text-white">NO NONSENSE.</h2>
                    <button className="px-10 py-4 font-bold" style={{ backgroundColor: colors.black, color: 'white' }}>START NOW→</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-4" style={{ borderColor: colors.black, padding: '30px 24px', backgroundColor: colors.bg }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="font-bold">BRUT.</span>
                    <span style={{ color: colors.muted }}>© 2025 BRUTALIST COLOR</span>
                </div>
            </footer>

            {/* Bottom Color Bar */}
            <div className="h-4" style={{ backgroundColor: colors.blue }} />
        </div>
    );
};
