import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Atom, Eye, Radio, Orbit } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S69AlienPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0A0F0A', surface: '#0F1A0F', text: '#D0FFD0', muted: '#6B9B6B', green: '#00FF66', lime: '#BFFF00', dark: '#050A05', acid: '#7FFF00' };
    const alienGlow = '0 0 30px rgba(0,255,102,0.5)';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Share Tech Mono", "Courier New", monospace' }}>
            {/* Alien Pattern Background */}
            <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ background: `radial-gradient(ellipse at 30% 40%, ${colors.green}40, transparent 40%), radial-gradient(ellipse at 70% 60%, ${colors.lime}30, transparent 40%)` }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.green + '40', backgroundColor: `${colors.bg}E0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Atom size={24} style={{ color: colors.green }} />
                        <span className="tracking-widest">XENON</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['SIGNAL', 'CONTACT', 'REALM'].map((item) => (<span key={item} className="text-sm tracking-wider cursor-pointer hover:text-green-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 text-sm tracking-wider text-black" style={{ backgroundColor: colors.green, boxShadow: alienGlow }}>TRANSMIT</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.green + '40', backgroundColor: colors.surface }}>
                        {['SIGNAL', 'CONTACT', 'REALM'].map((item) => (<div key={item} className="py-2 text-sm tracking-wider" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 text-sm tracking-wider text-black" style={{ backgroundColor: colors.green }}>TRANSMIT</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 border" style={{ borderColor: colors.green + '60' }}>
                        <Radio size={16} style={{ color: colors.green }} />
                        <span className="text-xs tracking-widest" style={{ color: colors.muted }}>EXTRATERRESTRIAL</span>
                    </div>
                    <h1 className="mb-4 tracking-wider leading-tight" style={{ fontSize: isMobile ? '44px' : '80px', textShadow: alienGlow }}>
                        <span style={{ color: colors.green }}>ALIEN</span> WORLD
                    </h1>
                    <p className="max-w-lg mx-auto mb-8" style={{ color: colors.muted }}>Otherworldly aesthetics with bioluminescent glows and extraterrestrial vibes.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 text-sm tracking-wider text-black flex items-center justify-center gap-2" style={{ backgroundColor: colors.green, boxShadow: alienGlow }}>EXPLORE <ArrowRight size={16} /></button>
                        <button className="px-8 py-3 text-sm tracking-wider border" style={{ borderColor: colors.green, color: colors.green }}>DECODE</button>
                    </div>
                    {/* Alien Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Atom, Eye, Radio, Orbit].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 rounded-full flex items-center justify-center border" style={{ borderColor: colors.green + '60', backgroundColor: colors.surface }}><Icon size={24} style={{ color: colors.green }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl tracking-widest mb-10" style={{ color: colors.green, textShadow: alienGlow }}>MODULES</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Atom, title: 'BIOLUMINESCENT' }, { icon: Eye, title: 'ALIEN SIGHT' }, { icon: Orbit, title: 'COSMIC FLOW' }].map((item) => (
                            <div key={item.title} className="p-5 border" style={{ borderColor: colors.green + '40', backgroundColor: colors.bg }}>
                                <item.icon size={24} className="mb-3" style={{ color: colors.green }} />
                                <h3 className="text-sm tracking-wider mb-1">{item.title}</h3>
                                <p className="text-xs" style={{ color: colors.muted }}>Extraterrestrial design.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl tracking-widest mb-10" style={{ color: colors.green, textShadow: alienGlow }}>PROTOCOLS</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'SCOUT', price: '$49', hot: false }, { name: 'EXPLORER', price: '$99', hot: true }, { name: 'COMMANDER', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-5 border" style={{ borderColor: plan.hot ? colors.green : colors.green + '40', backgroundColor: colors.surface, boxShadow: plan.hot ? alienGlow : 'none' }}>
                                {plan.hot && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs tracking-widest text-black" style={{ backgroundColor: colors.green }}>★ ACTIVE</div>}
                                <h3 className="text-sm tracking-wider mb-1">{plan.name}</h3>
                                <div className="text-3xl tracking-wide mb-4" style={{ color: colors.green }}>{plan.price}</div>
                                <ul className="space-y-2 mb-5">
                                    {['All modules', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-xs" style={{ color: colors.muted }}><Check size={12} style={{ color: colors.green }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 text-xs tracking-wider" style={{ backgroundColor: plan.hot ? colors.green : 'transparent', color: plan.hot ? 'black' : colors.green, border: plan.hot ? 'none' : `1px solid ${colors.green}` }}>SELECT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl tracking-widest mb-10" style={{ color: colors.green, textShadow: alienGlow }}>DATABASE</h2>
                    <div className="space-y-3">
                        {[{ q: 'WHAT IS ALIEN STYLE?', a: 'Bioluminescent aesthetics with otherworldly vibes and cosmic elements.' },
                        { q: 'CUSTOMIZABLE?', a: 'Full spectrum access to all visual parameters.' },
                        { q: 'COMPATIBILITY?', a: 'Universal browser support enabled.' }
                        ].map((item, i) => (
                            <div key={i} className="border overflow-hidden" style={{ borderColor: colors.green + '40', backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-4 text-left text-sm" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="tracking-wider">{item.q}</span>
                                    <ChevronDown size={16} style={{ color: colors.green, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-xs" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 text-center border" style={{ borderColor: colors.green, backgroundColor: colors.surface, boxShadow: alienGlow }}>
                    <Eye size={40} className="mx-auto mb-4" style={{ color: colors.green }} />
                    <h2 className="text-2xl tracking-widest mb-4">MAKE CONTACT</h2>
                    <button className="px-10 py-3 text-sm tracking-wider text-black" style={{ backgroundColor: colors.green }}>ACTIVATE</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.green + '40', padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="tracking-widest">XENON</span>
                    <span className="text-xs" style={{ color: colors.muted }}>© 2025 Alien Systems</span>
                </div>
            </footer>
        </div>
    );
};
