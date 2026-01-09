import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Skull, Moon, Castle, Cross } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S78GothicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0A0A0C', surface: '#141418', text: '#E8E4E0', muted: '#7A7670', purple: '#4A3060', crimson: '#8B0000', silver: '#A8A095', black: '#050505' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Cinzel", "Times New Roman", serif' }}>
            {/* Gothic Pattern Background */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30,5 L35,25 L55,30 L35,35 L30,55 L25,35 L5,30 L25,25 Z' fill='none' stroke='%238B0000' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.purple, backgroundColor: `${colors.bg}F0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Skull size={24} style={{ color: colors.crimson }} />
                        <span className="text-xl tracking-widest">NOCTURNE</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Shadows', 'Whispers', 'Eternal'].map((item) => (<span key={item} className="tracking-wide cursor-pointer hover:text-red-700" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 tracking-wide text-white" style={{ backgroundColor: colors.crimson }}>Enter</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: colors.purple, backgroundColor: colors.surface }}>
                        {['Shadows', 'Whispers', 'Eternal'].map((item) => (<div key={item} className="py-3 tracking-wide" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 tracking-wide text-white" style={{ backgroundColor: colors.crimson }}>Enter</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 border" style={{ borderColor: colors.crimson }}>
                        <Moon size={18} style={{ color: colors.silver }} />
                        <span className="tracking-widest" style={{ color: colors.muted }}>DARK ELEGANCE</span>
                    </div>
                    <h1 className="mb-6 tracking-wider leading-tight" style={{ fontSize: isMobile ? '44px' : '80px' }}>
                        <span style={{ color: colors.crimson }}>Gothic</span> Nights
                    </h1>
                    <p className="max-w-lg mx-auto mb-10" style={{ color: colors.muted }}>Victorian darkness, ornate details, and the haunting beauty of the night.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 tracking-wide text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.crimson }}>Descend <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 tracking-wide border" style={{ borderColor: colors.purple, color: colors.text }}>Explore</button>
                    </div>
                    {/* Gothic Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Skull, Moon, Castle, Cross].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 flex items-center justify-center border" style={{ borderColor: colors.crimson, backgroundColor: colors.surface }}><Icon size={24} style={{ color: colors.silver }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl tracking-widest mb-10" style={{ color: colors.crimson }}>ELEMENTS</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Skull, title: 'DARK AESTHETIC' }, { icon: Castle, title: 'VICTORIAN STYLE' }, { icon: Moon, title: 'NOCTURNAL' }].map((item) => (
                            <div key={item.title} className="p-5 border text-center" style={{ borderColor: colors.purple, backgroundColor: colors.bg }}>
                                <item.icon size={32} className="mx-auto mb-3" style={{ color: colors.crimson }} />
                                <h3 className="tracking-wide mb-1">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Gothic elegance.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl tracking-widest mb-10" style={{ color: colors.crimson }}>ORDERS</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'NOVICE', price: '$49', hot: false }, { name: 'KNIGHT', price: '$99', hot: true }, { name: 'LORD', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-5 text-center border" style={{ borderColor: plan.hot ? colors.crimson : colors.purple, backgroundColor: colors.surface }}>
                                {plan.hot && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs tracking-widest text-white" style={{ backgroundColor: colors.crimson }}>★ DARK</div>}
                                <h3 className="tracking-wide mb-1">{plan.name}</h3>
                                <div className="text-3xl mb-4" style={{ color: colors.crimson }}>{plan.price}</div>
                                <ul className="space-y-2 mb-5 text-left">
                                    {['All styles', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={12} style={{ color: colors.crimson }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 text-sm tracking-wide" style={{ backgroundColor: plan.hot ? colors.crimson : 'transparent', color: plan.hot ? 'white' : colors.text, border: plan.hot ? 'none' : `1px solid ${colors.purple}` }}>SELECT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl tracking-widest mb-10" style={{ color: colors.crimson }}>ARCHIVES</h2>
                    <div className="space-y-3">
                        {[{ q: 'What is Gothic style?', a: 'Victorian darkness with ornate details and haunting nocturnal beauty.' },
                        { q: 'Customizable?', a: 'Full control over dark elements and colors.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border overflow-hidden" style={{ borderColor: colors.purple, backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-4 text-left text-sm" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="tracking-wide">{item.q}</span>
                                    <ChevronDown size={16} style={{ color: colors.crimson, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 text-center border" style={{ borderColor: colors.crimson, backgroundColor: colors.surface }}>
                    <Moon size={40} className="mx-auto mb-4" style={{ color: colors.silver }} />
                    <h2 className="text-2xl tracking-widest mb-4">EMBRACE THE DARK</h2>
                    <button className="px-10 py-3 tracking-wide text-white" style={{ backgroundColor: colors.crimson }}>BEGIN</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.purple, padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="tracking-widest">NOCTURNE</span>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Gothic</span>
                </div>
            </footer>
        </div>
    );
};
