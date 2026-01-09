import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Rocket, Star, Orbit, Zap } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S72StarshipPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0A0C14', surface: '#12162A', text: '#E0E8FF', muted: '#7A8AB0', blue: '#3B82F6', purple: '#8B5CF6', cyan: '#06B6D4', white: '#FFFFFF' };
    const spaceGlow = '0 0 30px rgba(59,130,246,0.4)';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Orbitron", "Exo 2", sans-serif' }}>
            {/* Star Field */}
            <div className="fixed inset-0 opacity-40 pointer-events-none" style={{ background: 'radial-gradient(1px 1px at 20px 30px, white, transparent), radial-gradient(1px 1px at 40px 70px, white, transparent), radial-gradient(1px 1px at 50px 160px, white, transparent), radial-gradient(1px 1px at 90px 40px, white, transparent), radial-gradient(1px 1px at 130px 80px, white, transparent)', backgroundSize: '200px 200px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.blue + '40', backgroundColor: `${colors.bg}E0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Rocket size={24} style={{ color: colors.blue }} />
                        <span className="tracking-widest">STARSHIP</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Deck', 'Bridge', 'Engine'].map((item) => (<span key={item} className="text-sm tracking-wide cursor-pointer hover:text-blue-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 text-sm tracking-wide text-white rounded" style={{ backgroundColor: colors.blue, boxShadow: spaceGlow }}>Launch</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.blue + '40', backgroundColor: colors.surface }}>
                        {['Deck', 'Bridge', 'Engine'].map((item) => (<div key={item} className="py-2 text-sm tracking-wide" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 text-sm tracking-wide text-white rounded" style={{ backgroundColor: colors.blue }}>Launch</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border" style={{ borderColor: colors.blue + '60' }}>
                        <Star size={16} style={{ color: colors.cyan }} />
                        <span className="text-xs tracking-widest" style={{ color: colors.muted }}>INTERSTELLAR</span>
                    </div>
                    <h1 className="mb-4 tracking-wider leading-tight" style={{ fontSize: isMobile ? '44px' : '80px', textShadow: spaceGlow }}>
                        <span style={{ color: colors.blue }}>STAR</span>SHIP
                    </h1>
                    <p className="max-w-lg mx-auto mb-8 font-sans" style={{ color: colors.muted }}>Sleek spacecraft aesthetics with futuristic panels and cosmic vibes.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 text-sm tracking-wide text-white rounded flex items-center justify-center gap-2" style={{ backgroundColor: colors.blue, boxShadow: spaceGlow }}>LAUNCH <ArrowRight size={16} /></button>
                        <button className="px-8 py-3 text-sm tracking-wide rounded border" style={{ borderColor: colors.cyan, color: colors.cyan }}>EXPLORE</button>
                    </div>
                    {/* Space Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Rocket, Star, Orbit, Zap].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 rounded-lg flex items-center justify-center border" style={{ borderColor: colors.blue + '60', backgroundColor: colors.surface }}><Icon size={24} style={{ color: colors.cyan }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl tracking-widest mb-10" style={{ color: colors.blue, textShadow: spaceGlow }}>SYSTEMS</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Rocket, title: 'PROPULSION' }, { icon: Orbit, title: 'NAVIGATION' }, { icon: Zap, title: 'POWER CORE' }].map((item) => (
                            <div key={item.title} className="p-5 rounded-lg border" style={{ borderColor: colors.blue + '40', backgroundColor: colors.bg }}>
                                <item.icon size={24} className="mb-3" style={{ color: colors.cyan }} />
                                <h3 className="text-sm tracking-wide mb-1">{item.title}</h3>
                                <p className="text-xs font-sans" style={{ color: colors.muted }}>Spacecraft systems.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl tracking-widest mb-10" style={{ color: colors.blue, textShadow: spaceGlow }}>MISSIONS</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'CADET', price: '$49', hot: false }, { name: 'CAPTAIN', price: '$99', hot: true }, { name: 'ADMIRAL', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-5 rounded-lg border" style={{ borderColor: plan.hot ? colors.blue : colors.blue + '40', backgroundColor: colors.surface, boxShadow: plan.hot ? spaceGlow : 'none' }}>
                                {plan.hot && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs tracking-wide text-white" style={{ backgroundColor: colors.blue }}>★ ACTIVE</div>}
                                <h3 className="text-sm tracking-wide mb-1">{plan.name}</h3>
                                <div className="text-3xl tracking-wide mb-4" style={{ color: colors.cyan }}>{plan.price}</div>
                                <ul className="space-y-2 mb-5">
                                    {['All systems', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-xs font-sans" style={{ color: colors.muted }}><Check size={12} style={{ color: colors.cyan }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 text-xs tracking-wide rounded" style={{ backgroundColor: plan.hot ? colors.blue : 'transparent', color: plan.hot ? 'white' : colors.cyan, border: plan.hot ? 'none' : `1px solid ${colors.cyan}` }}>SELECT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl tracking-widest mb-10" style={{ color: colors.blue, textShadow: spaceGlow }}>DATABANK</h2>
                    <div className="space-y-3">
                        {[{ q: 'What is Starship style?', a: 'Sleek spacecraft aesthetics with futuristic panels and cosmic vibes.' },
                        { q: 'Customizable?', a: 'Full control over all visual systems.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-lg border overflow-hidden" style={{ borderColor: colors.blue + '40', backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-4 text-left text-sm" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="tracking-wide">{item.q}</span>
                                    <ChevronDown size={16} style={{ color: colors.cyan, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-xs font-sans" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 rounded-lg text-center border" style={{ borderColor: colors.blue, backgroundColor: colors.surface, boxShadow: spaceGlow }}>
                    <Rocket size={40} className="mx-auto mb-4" style={{ color: colors.cyan }} />
                    <h2 className="text-2xl tracking-widest mb-4">INITIATE LAUNCH</h2>
                    <button className="px-10 py-3 text-sm tracking-wide text-white rounded" style={{ backgroundColor: colors.blue }}>ENGAGE</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.blue + '40', padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="tracking-widest">STARSHIP</span>
                    <span className="text-xs font-sans" style={{ color: colors.muted }}>© 2025 Starship</span>
                </div>
            </footer>
        </div>
    );
};
