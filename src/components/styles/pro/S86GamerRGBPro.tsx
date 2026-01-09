import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Gamepad2, Zap, Trophy, Target } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S86GamerRGBPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0D0D0D', surface: '#1A1A1A', text: '#FFFFFF', muted: '#888888', red: '#FF0044', cyan: '#00FFFF', purple: '#9B30FF', green: '#39FF14' };
    const rgbGradient = 'linear-gradient(90deg, #FF0044, #FF6600, #FFFF00, #39FF14, #00FFFF, #9B30FF, #FF0044)';
    const rgbGlow = '0 0 30px rgba(0,255,255,0.5)';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Rajdhani", "Orbitron", sans-serif' }}>
            {/* RGB Gradient Border */}
            <div className="fixed top-0 left-0 right-0 h-1" style={{ background: rgbGradient, backgroundSize: '200% 100%', animation: 'rgb-scroll 3s linear infinite' }} />
            <style>{`@keyframes rgb-scroll { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }`}</style>

            {/* Navigation */}
            <header className="sticky top-1 z-50 border-b" style={{ borderColor: colors.cyan + '40', backgroundColor: `${colors.bg}F0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-2">
                        <Gamepad2 size={28} style={{ color: colors.cyan }} />
                        <span className="text-xl font-bold tracking-wider">NEXUS</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['GEAR', 'GAMES', 'ESPORTS'].map((item) => (<span key={item} className="font-semibold tracking-wide cursor-pointer hover:text-cyan-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 font-bold tracking-wide text-black" style={{ backgroundColor: colors.cyan, boxShadow: rgbGlow }}>JOIN</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.cyan + '40', backgroundColor: colors.surface }}>
                        {['GEAR', 'GAMES', 'ESPORTS'].map((item) => (<div key={item} className="py-2 font-semibold tracking-wide" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 font-bold tracking-wide text-black" style={{ backgroundColor: colors.cyan }}>JOIN</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border" style={{ borderColor: colors.cyan, backgroundColor: colors.surface }}>
                        <Zap size={16} style={{ color: colors.green }} />
                        <span className="font-semibold tracking-wider" style={{ color: colors.cyan }}>RGB POWERED</span>
                    </div>
                    <h1 className="mb-4 font-black tracking-wider leading-tight" style={{ fontSize: isMobile ? '40px' : '72px' }}>
                        <span style={{ color: colors.red }}>GAME</span> <span style={{ color: colors.cyan }}>ON</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-8 font-sans" style={{ color: colors.muted }}>High-energy gamer aesthetics with RGB accents and competitive esports vibes.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 font-bold tracking-wide text-black flex items-center justify-center gap-2" style={{ backgroundColor: colors.cyan, boxShadow: rgbGlow }}>PLAY NOW <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 font-bold tracking-wide border" style={{ borderColor: colors.red, color: colors.red }}>WATCH STREAM</button>
                    </div>
                    {/* RGB Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[{ icon: Gamepad2, color: colors.cyan }, { icon: Zap, color: colors.green }, { icon: Trophy, color: colors.red }, { icon: Target, color: colors.purple }].map((item, i) => (
                            <div key={i} className="w-12 h-12 flex items-center justify-center border" style={{ borderColor: item.color, backgroundColor: colors.surface, boxShadow: `0 0 15px ${item.color}40` }}><item.icon size={24} style={{ color: item.color }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold tracking-widest mb-10" style={{ color: colors.cyan }}>FEATURES</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Gamepad2, title: 'PRO GEAR', color: colors.cyan }, { icon: Zap, title: 'FAST', color: colors.green }, { icon: Trophy, title: 'RANKED', color: colors.red }].map((item) => (
                            <div key={item.title} className="p-5 border text-center" style={{ borderColor: item.color + '60', backgroundColor: colors.bg }}>
                                <item.icon size={32} className="mx-auto mb-3" style={{ color: item.color }} />
                                <h3 className="font-bold tracking-wider">{item.title}</h3>
                                <p className="text-sm mt-2 font-sans" style={{ color: colors.muted }}>Gamer excellence.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold tracking-widest mb-10" style={{ color: colors.red }}>PLANS</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'ROOKIE', price: '$9', hot: false }, { name: 'PRO', price: '$29', hot: true }, { name: 'ELITE', price: '$49', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-5 text-center border" style={{ borderColor: plan.hot ? colors.cyan : colors.muted + '40', backgroundColor: colors.surface, boxShadow: plan.hot ? rgbGlow : 'none' }}>
                                {plan.hot && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-bold tracking-wider text-black" style={{ backgroundColor: colors.cyan }}>⚡ BEST</div>}
                                <h3 className="font-bold tracking-wider">{plan.name}</h3>
                                <div className="text-4xl font-black my-4" style={{ color: colors.cyan }}>{plan.price}</div>
                                <ul className="space-y-2 mb-5 text-left font-sans">
                                    {['All games', 'RGB sync', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={12} style={{ color: colors.green }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 font-bold tracking-wide" style={{ backgroundColor: plan.hot ? colors.cyan : 'transparent', color: plan.hot ? 'black' : colors.cyan, border: plan.hot ? 'none' : `1px solid ${colors.cyan}` }}>SELECT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl font-bold tracking-widest mb-10" style={{ color: colors.purple }}>FAQ</h2>
                    <div className="space-y-3">
                        {[{ q: 'What is Gamer RGB?', a: 'High-energy aesthetics with RGB accents for gamers.' },
                        { q: 'RGB sync?', a: 'Yes! Syncs with your gaming setup.' },
                        { q: 'Works everywhere?', a: 'All platforms supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border overflow-hidden" style={{ borderColor: colors.cyan + '40', backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-4 text-left font-semibold" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="tracking-wide">{item.q}</span>
                                    <ChevronDown size={16} style={{ color: colors.cyan, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-sm font-sans" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 text-center border" style={{ borderColor: colors.cyan, backgroundColor: colors.surface, boxShadow: rgbGlow }}>
                    <Gamepad2 size={40} className="mx-auto mb-4" style={{ color: colors.cyan }} />
                    <h2 className="text-2xl font-black tracking-widest mb-4">READY TO DOMINATE?</h2>
                    <button className="px-10 py-3 font-bold tracking-wide text-black" style={{ backgroundColor: colors.cyan }}>JOIN NOW</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.cyan + '40', padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-bold tracking-wider"><Gamepad2 size={20} style={{ color: colors.cyan }} /> NEXUS</div>
                    <span className="text-sm font-sans" style={{ color: colors.muted }}>© 2025 Gamer RGB</span>
                </div>
            </footer>
        </div>
    );
};
