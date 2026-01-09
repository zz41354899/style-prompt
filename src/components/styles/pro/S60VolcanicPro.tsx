import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Flame, Mountain, Zap, Sparkles } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S60VolcanicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#1A0A0A', surface: '#2D1414', text: '#FFE4D6', muted: '#C9A99A', red: '#E53935', orange: '#FF6B35', yellow: '#FFB627', magma: '#FF4500' };
    const lavaGlow = '0 0 30px rgba(255,107,53,0.5)';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Oswald", "Impact", sans-serif' }}>
            {/* Lava Glow Background */}
            <div className="fixed inset-0 opacity-30 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 100%, ${colors.red}60, transparent 50%), radial-gradient(ellipse at 20% 80%, ${colors.orange}40, transparent 40%)` }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ borderColor: `${colors.red}40`, backgroundColor: `${colors.bg}E0` }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Flame size={28} style={{ color: colors.orange }} />
                        <span className="text-xl tracking-wider">VOLCANIC</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['ERUPTION', 'MAGMA', 'ASH'].map((item) => (<span key={item} className="tracking-wide cursor-pointer hover:text-orange-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 tracking-wider text-white" style={{ backgroundColor: colors.red, boxShadow: lavaGlow }}>IGNITE</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: `${colors.red}40`, backgroundColor: colors.surface }}>
                        {['ERUPTION', 'MAGMA', 'ASH'].map((item) => (<div key={item} className="py-3 tracking-wide" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 tracking-wider text-white" style={{ backgroundColor: colors.red }}>IGNITE</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 border" style={{ borderColor: `${colors.orange}60` }}>
                        <Flame size={18} style={{ color: colors.orange }} />
                        <span className="tracking-wide" style={{ color: colors.muted }}>MOLTEN POWER</span>
                    </div>
                    <h1 className="mb-6 font-bold tracking-wider leading-tight" style={{ fontSize: isMobile ? '44px' : '84px', textShadow: `0 0 40px ${colors.red}80` }}>
                        <span style={{ color: colors.orange }}>VOLCANIC</span><br />INTENSITY
                    </h1>
                    <p className="max-w-lg mx-auto mb-10" style={{ color: colors.muted, fontFamily: 'sans-serif' }}>Fiery gradients, molten lava aesthetics, and explosive visual impact.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 tracking-wider text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.red, boxShadow: lavaGlow }}>EXPLORE <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 tracking-wider border-2" style={{ borderColor: colors.orange, color: colors.orange }}>DISCOVER</button>
                    </div>
                    {/* Volcanic Icons */}
                    <div className="mt-12 flex justify-center gap-6">
                        {[Flame, Mountain, Zap, Sparkles].map((Icon, i) => (
                            <div key={i} className="w-14 h-14 flex items-center justify-center" style={{ backgroundColor: `${colors.red}30`, border: `1px solid ${colors.red}` }}><Icon size={28} style={{ color: colors.orange }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl tracking-wider mb-12" style={{ color: colors.orange, textShadow: `0 0 20px ${colors.red}60` }}>FEATURES</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Flame, title: 'LAVA EFFECTS' }, { icon: Mountain, title: 'MOLTEN PALETTE' }, { icon: Zap, title: 'EXPLOSIVE POWER' }].map((item) => (
                            <div key={item.title} className="p-6" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.red}40` }}>
                                <item.icon size={32} className="mb-4" style={{ color: colors.orange }} />
                                <h3 className="text-lg tracking-wider mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted, fontFamily: 'sans-serif' }}>Volcanic-inspired design.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl tracking-wider mb-12" style={{ color: colors.orange, textShadow: `0 0 20px ${colors.red}60` }}>PRICING</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'EMBER', price: '$39', hot: false }, { name: 'MAGMA', price: '$99', hot: true }, { name: 'INFERNO', price: '$179', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.orange : colors.red + '40'}`, boxShadow: plan.hot ? lavaGlow : 'none' }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs tracking-widest text-white" style={{ backgroundColor: colors.red }}>★ HOT</div>}
                                <h3 className="text-xl tracking-wider mb-2" style={{ color: colors.orange }}>{plan.name}</h3>
                                <div className="text-5xl font-bold mb-6" style={{ color: colors.orange, textShadow: `0 0 20px ${colors.red}60` }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All effects', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted, fontFamily: 'sans-serif' }}><Check size={14} style={{ color: colors.orange }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 tracking-wider" style={{ backgroundColor: plan.hot ? colors.red : 'transparent', color: plan.hot ? 'white' : colors.orange, border: plan.hot ? 'none' : `2px solid ${colors.orange}` }}>SELECT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-4xl tracking-wider mb-12" style={{ color: colors.orange, textShadow: `0 0 20px ${colors.red}60` }}>FAQ</h2>
                    <div className="space-y-4">
                        {[{ q: 'WHAT IS VOLCANIC STYLE?', a: 'Fiery gradients and molten lava aesthetics with explosive impact.' },
                        { q: 'CUSTOMIZABLE?', a: 'Full control over fire effects and colors.' },
                        { q: 'WORKS EVERYWHERE?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="overflow-hidden" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.red}40` }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="tracking-wide">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.orange, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="p-5 pt-0" style={{ color: colors.muted, fontFamily: 'sans-serif' }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 text-center" style={{ background: `linear-gradient(135deg, ${colors.red}40, ${colors.orange}30)`, border: `2px solid ${colors.red}`, boxShadow: lavaGlow }}>
                    <Flame size={48} className="mx-auto mb-6" style={{ color: colors.orange }} />
                    <h2 className="text-4xl tracking-wider mb-6" style={{ textShadow: `0 0 20px ${colors.red}60` }}>UNLEASH THE FIRE</h2>
                    <button className="px-12 py-4 tracking-wider text-white" style={{ backgroundColor: colors.red, boxShadow: lavaGlow }}>IGNITE NOW</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: `${colors.red}40`, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 tracking-wider"><Flame size={20} style={{ color: colors.orange }} /> VOLCANIC</div>
                    <span style={{ color: colors.muted, fontFamily: 'sans-serif' }}>© 2025 Volcanic Design</span>
                </div>
            </footer>
        </div>
    );
};
