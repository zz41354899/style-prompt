import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Waves, Fish, Anchor, Shell } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S55OceanicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0A1929', surface: '#0D2137', text: '#E3F2FD', muted: '#90CAF9', teal: '#00BCD4', blue: '#2196F3', navy: '#1565C0', coral: '#FF7043' };
    const oceanGradient = 'linear-gradient(180deg, #0A1929 0%, #0D2137 50%, #1565C0 100%)';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Nunito", "Segoe UI", sans-serif' }}>
            {/* Wave Background */}
            <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2300BCD4' fill-opacity='0.3' d='M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'bottom', backgroundRepeat: 'repeat-x', backgroundSize: '100% 200px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ borderColor: `${colors.teal}40`, backgroundColor: `${colors.bg}E0` }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Waves size={28} style={{ color: colors.teal }} />
                        <span className="text-xl font-semibold">Oceanic</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Depths', 'Currents', 'Shores'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-cyan-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 rounded-full font-semibold text-white" style={{ backgroundColor: colors.teal }}>Dive In</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: `${colors.teal}40`, backgroundColor: colors.surface }}>
                        {['Depths', 'Currents', 'Shores'].map((item) => (<div key={item} className="py-3 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 rounded-full font-semibold text-white" style={{ backgroundColor: colors.teal }}>Dive In</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border" style={{ borderColor: `${colors.teal}60` }}>
                        <Fish size={18} style={{ color: colors.teal }} />
                        <span className="font-medium" style={{ color: colors.muted }}>Deep Sea Design</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '40px' : '72px' }}>
                        Into the <span style={{ color: colors.teal }}>Deep Blue</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-10" style={{ color: colors.muted }}>Immersive oceanic aesthetics with flowing waves and marine color palettes.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 rounded-full font-semibold text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.teal, boxShadow: `0 10px 40px ${colors.teal}40` }}>Explore <ArrowRight size={18} /></button>
                        <button className="px-10 py-4 rounded-full font-semibold border" style={{ borderColor: colors.teal, color: colors.teal }}>Learn More</button>
                    </div>
                    {/* Marine Icons */}
                    <div className="mt-12 flex justify-center gap-6">
                        {[Waves, Fish, Anchor, Shell].map((Icon, i) => (
                            <div key={i} className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${colors.teal}20`, border: `1px solid ${colors.teal}40` }}><Icon size={28} style={{ color: colors.teal }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.teal }}>Features</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Waves, title: 'Wave Effects' }, { icon: Fish, title: 'Marine Palette' }, { icon: Anchor, title: 'Nautical Details' }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.teal}30` }}>
                                <item.icon size={32} className="mb-4" style={{ color: colors.teal }} />
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Oceanic design elements.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.teal }}>Pricing</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Shore', price: '$39', hot: false }, { name: 'Reef', price: '$89', hot: true }, { name: 'Abyss', price: '$159', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.teal : colors.teal + '40'}`, boxShadow: plan.hot ? `0 10px 40px ${colors.teal}30` : 'none' }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: colors.teal }}>Popular</div>}
                                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: colors.teal }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All components', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.teal }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 rounded-full font-semibold" style={{ backgroundColor: plan.hot ? colors.teal : 'transparent', color: plan.hot ? 'white' : colors.teal, border: plan.hot ? 'none' : `2px solid ${colors.teal}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.teal }}>FAQ</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Oceanic style?', a: 'Deep sea aesthetics with wave effects and marine color palettes.' },
                        { q: 'Customizable?', a: 'Full control over colors and effects.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.teal}30` }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.teal, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${colors.teal}20, ${colors.blue}20)`, border: `1px solid ${colors.teal}40` }}>
                    <Waves size={48} className="mx-auto mb-6" style={{ color: colors.teal }} />
                    <h2 className="text-3xl font-bold mb-6">Dive Into Design</h2>
                    <button className="px-12 py-4 rounded-full font-semibold text-white" style={{ backgroundColor: colors.teal }}>Start Exploring</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: `${colors.teal}40`, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Waves size={20} style={{ color: colors.teal }} /><span className="font-semibold">Oceanic</span></div>
                    <span style={{ color: colors.muted }}>© 2025 Oceanic Design</span>
                </div>
            </footer>
        </div>
    );
};
