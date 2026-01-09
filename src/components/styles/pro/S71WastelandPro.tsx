import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Skull, RadioTower, Flame, Shield } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S71WastelandPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#1A1814', surface: '#252118', text: '#D4C8B8', muted: '#8B7D6B', rust: '#8B4513', orange: '#CD853F', tan: '#D2B48C', red: '#8B0000' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Special Elite", "Courier New", monospace' }}>
            {/* Dust Texture */}
            <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b-2" style={{ borderColor: colors.rust, backgroundColor: `${colors.bg}F0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Skull size={24} style={{ color: colors.rust }} />
                        <span className="text-lg tracking-wide">WASTELAND</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Bunker', 'Scavenge', 'Survive'].map((item) => (<span key={item} className="cursor-pointer hover:text-orange-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 text-white" style={{ backgroundColor: colors.rust }}>Enter</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t-2" style={{ borderColor: colors.rust, backgroundColor: colors.surface }}>
                        {['Bunker', 'Scavenge', 'Survive'].map((item) => (<div key={item} className="py-2" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 text-white" style={{ backgroundColor: colors.rust }}>Enter</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 border-2" style={{ borderColor: colors.rust }}>
                        <RadioTower size={16} style={{ color: colors.rust }} />
                        <span className="text-sm" style={{ color: colors.muted }}>POST-APOCALYPTIC</span>
                    </div>
                    <h1 className="mb-4 leading-tight" style={{ fontSize: isMobile ? '40px' : '72px' }}>
                        <span style={{ color: colors.rust }}>WASTE</span>LAND
                    </h1>
                    <p className="max-w-lg mx-auto mb-8" style={{ color: colors.muted }}>Rusted metals, dusty landscapes, and post-apocalyptic survival aesthetics.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.rust }}>SURVIVE <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 border-2" style={{ borderColor: colors.orange, color: colors.orange }}>EXPLORE</button>
                    </div>
                    {/* Wasteland Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Skull, RadioTower, Flame, Shield].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 flex items-center justify-center border-2" style={{ borderColor: colors.rust, backgroundColor: colors.surface }}><Icon size={24} style={{ color: colors.rust }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl mb-10" style={{ color: colors.rust }}>FEATURES</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Skull, title: 'RUSTED METAL' }, { icon: Flame, title: 'DUSTY TONES' }, { icon: Shield, title: 'SURVIVAL KIT' }].map((item) => (
                            <div key={item.title} className="p-5 border-2" style={{ borderColor: colors.rust, backgroundColor: colors.bg }}>
                                <item.icon size={24} className="mb-3" style={{ color: colors.rust }} />
                                <h3 className="text-sm mb-1">{item.title}</h3>
                                <p className="text-xs" style={{ color: colors.muted }}>Post-apocalyptic vibes.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl mb-10" style={{ color: colors.rust }}>SUPPLIES</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'SCAVENGER', price: '$29', hot: false }, { name: 'SURVIVOR', price: '$69', hot: true }, { name: 'WARLORD', price: '$149', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-5 border-2" style={{ borderColor: plan.hot ? colors.orange : colors.rust, backgroundColor: colors.surface }}>
                                {plan.hot && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs text-white" style={{ backgroundColor: colors.rust }}>★ HOT</div>}
                                <h3 className="text-sm mb-1">{plan.name}</h3>
                                <div className="text-3xl mb-4" style={{ color: colors.rust }}>{plan.price}</div>
                                <ul className="space-y-2 mb-5">
                                    {['All textures', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-xs" style={{ color: colors.muted }}><Check size={12} style={{ color: colors.rust }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 text-xs" style={{ backgroundColor: plan.hot ? colors.rust : 'transparent', color: plan.hot ? 'white' : colors.rust, border: plan.hot ? 'none' : `2px solid ${colors.rust}` }}>SELECT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl mb-10" style={{ color: colors.rust }}>INTEL</h2>
                    <div className="space-y-3">
                        {[{ q: 'What is Wasteland style?', a: 'Rusted metals and dusty post-apocalyptic survival aesthetics.' },
                        { q: 'Customizable?', a: 'Full control over textures and rust effects.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border-2 overflow-hidden" style={{ borderColor: colors.rust, backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-4 text-left text-sm" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span>{item.q}</span>
                                    <ChevronDown size={16} style={{ color: colors.rust, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-xs" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 text-center border-2" style={{ borderColor: colors.rust, backgroundColor: colors.surface }}>
                    <Skull size={40} className="mx-auto mb-4" style={{ color: colors.rust }} />
                    <h2 className="text-2xl mb-4">SURVIVE THE WASTE</h2>
                    <button className="px-10 py-3 text-white" style={{ backgroundColor: colors.rust }}>GET STARTED</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-2" style={{ borderColor: colors.rust, padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span>WASTELAND</span>
                    <span className="text-xs" style={{ color: colors.muted }}>© 2025 Wasteland</span>
                </div>
            </footer>
        </div>
    );
};
