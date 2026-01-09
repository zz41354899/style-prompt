import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Target, Radar, Cpu, Zap } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S96SciFiHUDPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0A0E14', surface: '#0D1117', text: '#00D9FF', muted: '#4A9EBD', dark: '#051015', accent: '#00FF88', red: '#FF3366', border: '#1A3040' };
    const hudGlow = '0 0 15px rgba(0,217,255,0.4)';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Rajdhani", "Orbitron", sans-serif' }}>
            {/* HUD Grid Background */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(${colors.text}20 1px, transparent 1px), linear-gradient(90deg, ${colors.text}20 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.text + '40', backgroundColor: `${colors.bg}E0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-2">
                        <Target size={24} style={{ color: colors.text, filter: `drop-shadow(${hudGlow})` }} />
                        <span className="text-lg font-bold tracking-widest">NEXUS-7</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['SYSTEMS', 'TACTICAL', 'COMMS'].map((item) => (<span key={item} className="text-sm tracking-wider cursor-pointer" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-4 py-2 text-sm tracking-wider text-black font-bold" style={{ backgroundColor: colors.text, boxShadow: hudGlow }}>ACTIVATE</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.text + '40', backgroundColor: colors.surface }}>
                        {['SYSTEMS', 'TACTICAL', 'COMMS'].map((item) => (<div key={item} className="py-2 text-sm tracking-wider" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 text-sm tracking-wider text-black font-bold" style={{ backgroundColor: colors.text }}>ACTIVATE</button>
                    </div>
                )}
            </header>

            {/* Hero - HUD Style */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    {/* HUD Status Bar */}
                    <div className="flex items-center gap-4 mb-6 text-sm tracking-wider">
                        <span style={{ color: colors.accent }}>● ONLINE</span>
                        <span style={{ color: colors.muted }}>SYS: 98.7%</span>
                        <span style={{ color: colors.muted }}>PWR: OPTIMAL</span>
                    </div>
                    <div className="p-6 border" style={{ borderColor: colors.text + '60', backgroundColor: colors.surface + '80' }}>
                        <h1 className="mb-4 font-bold tracking-wider leading-tight" style={{ fontSize: isMobile ? '36px' : '56px', textShadow: hudGlow }}>
                            SCI-FI <span style={{ color: colors.accent }}>HUD</span> INTERFACE
                        </h1>
                        <p className="max-w-lg mb-6" style={{ color: colors.muted }}>Futuristic heads-up display aesthetics with neon accents and holographic feel.</p>
                        <div className="flex gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                            <button className="px-6 py-2 text-sm tracking-wider text-black font-bold flex items-center gap-2" style={{ backgroundColor: colors.text, boxShadow: hudGlow }}>INITIALIZE <ArrowRight size={16} /></button>
                            <button className="px-6 py-2 text-sm tracking-wider font-bold border" style={{ borderColor: colors.accent, color: colors.accent }}>SCAN DATA</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl font-bold tracking-widest mb-6" style={{ textShadow: hudGlow }}>[ SYSTEMS ]</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Radar, title: 'TARGETING', color: colors.text }, { icon: Cpu, title: 'PROCESSING', color: colors.accent }, { icon: Zap, title: 'POWER', color: colors.red }].map((item) => (
                            <div key={item.title} className="p-4 border" style={{ borderColor: item.color + '60', backgroundColor: colors.surface }}>
                                <item.icon size={24} className="mb-3" style={{ color: item.color, filter: `drop-shadow(0 0 8px ${item.color})` }} />
                                <h3 className="font-bold tracking-wider mb-1" style={{ color: item.color }}>{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>HUD module ready.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl font-bold tracking-widest mb-6" style={{ textShadow: hudGlow }}>[ ACCESS LEVELS ]</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'RECRUIT', price: '$29', hot: false }, { name: 'OPERATOR', price: '$79', hot: true }, { name: 'COMMANDER', price: '$149', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-4 border" style={{ borderColor: plan.hot ? colors.text : colors.border, backgroundColor: colors.bg, boxShadow: plan.hot ? hudGlow : 'none' }}>
                                {plan.hot && <div className="absolute -top-2 right-2 px-2 text-xs font-bold tracking-wider" style={{ backgroundColor: colors.text, color: colors.bg }}>★ ACTIVE</div>}
                                <h3 className="font-bold tracking-wider mb-1">{plan.name}</h3>
                                <div className="text-3xl font-bold mb-4" style={{ color: colors.text }}>{plan.price}</div>
                                <ul className="space-y-1 mb-4 text-sm">
                                    {['All HUD modules', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={12} style={{ color: colors.accent }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 text-sm font-bold tracking-wider" style={{ backgroundColor: plan.hot ? colors.text : 'transparent', color: plan.hot ? colors.bg : colors.text, border: plan.hot ? 'none' : `1px solid ${colors.text}` }}>SELECT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl font-bold tracking-widest mb-6" style={{ textShadow: hudGlow }}>[ DATA BANK ]</h2>
                    <div className="space-y-0">
                        {[{ q: 'WHAT IS SCI-FI HUD?', a: 'Futuristic heads-up display with neon holographic aesthetics.' },
                        { q: 'CUSTOMIZABLE?', a: 'Full control over HUD colors and effects.' },
                        { q: 'COMPATIBILITY?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b" style={{ borderColor: colors.border }}>
                                <button className="w-full flex items-center justify-between py-3 text-left text-sm tracking-wider" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span>{item.q}</span>
                                    <ChevronDown size={16} style={{ color: colors.muted, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="pb-3 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-8 text-center border" style={{ borderColor: colors.text, boxShadow: hudGlow }}>
                    <Target size={32} className="mx-auto mb-4" style={{ color: colors.text, filter: `drop-shadow(${hudGlow})` }} />
                    <h2 className="text-xl font-bold tracking-widest mb-4" style={{ textShadow: hudGlow }}>ENGAGE HUD SYSTEM</h2>
                    <button className="px-8 py-2 text-sm font-bold tracking-wider text-black" style={{ backgroundColor: colors.text }}>INITIALIZE</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.border, padding: '20px 24px' }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="tracking-widest" style={{ textShadow: hudGlow }}>NEXUS-7</span>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Sci-Fi HUD</span>
                </div>
            </footer>
        </div>
    );
};
