import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Briefcase, Award, Shield, Star } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S61LeatherPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#1C1410', surface: '#2A1F19', text: '#F5E6D3', muted: '#B8A089', brown: '#8B5A2B', caramel: '#C4813D', cream: '#FFF8DC', gold: '#D4A853' };
    const leatherTexture = 'inset 0 2px 4px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(255,255,255,0.05)';

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Playfair Display", "Georgia", serif' }}>
            {/* Leather Grain Texture */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\'/%3E%3C/svg%3E")' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.brown, backgroundColor: `${colors.surface}F0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Briefcase size={28} style={{ color: colors.caramel }} />
                        <span className="text-2xl italic">Artisan</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Craft', 'Heritage', 'Quality'].map((item) => (<span key={item} className="italic cursor-pointer hover:text-yellow-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 italic text-white rounded" style={{ backgroundColor: colors.brown, boxShadow: leatherTexture }}>Discover</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: colors.brown, backgroundColor: colors.surface }}>
                        {['Craft', 'Heritage', 'Quality'].map((item) => (<div key={item} className="py-3 italic" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 italic text-white rounded" style={{ backgroundColor: colors.brown }}>Discover</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded border" style={{ borderColor: colors.gold }}>
                        <Award size={18} style={{ color: colors.gold }} />
                        <span className="italic" style={{ color: colors.muted }}>Premium Craftsmanship</span>
                    </div>
                    <h1 className="mb-6 font-bold italic leading-tight" style={{ fontSize: isMobile ? '44px' : '80px' }}>
                        <span style={{ color: colors.caramel }}>Timeless</span> Elegance
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 text-lg" style={{ color: colors.muted }}>Rich leather textures, warm tones, and the sophisticated feel of premium materials.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 italic text-white rounded flex items-center justify-center gap-2" style={{ backgroundColor: colors.brown, boxShadow: leatherTexture }}>Explore <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 italic rounded border-2" style={{ borderColor: colors.caramel, color: colors.caramel }}>View Collection</button>
                    </div>
                    {/* Leather Icons */}
                    <div className="mt-12 flex justify-center gap-6">
                        {[Briefcase, Award, Shield, Star].map((Icon, i) => (
                            <div key={i} className="w-14 h-14 rounded flex items-center justify-center" style={{ backgroundColor: colors.surface, border: `1px solid ${colors.brown}`, boxShadow: leatherTexture }}><Icon size={28} style={{ color: colors.caramel }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl font-bold italic mb-12" style={{ color: colors.caramel }}>Craftsmanship</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Briefcase, title: 'Rich Texture' }, { icon: Award, title: 'Premium Feel' }, { icon: Shield, title: 'Timeless Quality' }].map((item) => (
                            <div key={item.title} className="p-6 rounded" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.brown}`, boxShadow: leatherTexture }}>
                                <item.icon size={32} className="mb-4" style={{ color: colors.caramel }} />
                                <h3 className="text-lg font-bold italic mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Leather-inspired elegance.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl font-bold italic mb-12" style={{ color: colors.gold }}>Collections</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Essential', price: '$49', hot: false }, { name: 'Premium', price: '$99', hot: true }, { name: 'Heritage', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.gold : colors.brown}`, boxShadow: plan.hot ? `0 10px 40px ${colors.brown}40` : 'none' }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded text-xs italic text-white" style={{ backgroundColor: colors.gold }}>★ Premium</div>}
                                <h3 className="text-2xl font-bold italic mb-2">{plan.name}</h3>
                                <div className="text-5xl font-bold mb-6" style={{ color: colors.caramel }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All textures', 'Patterns', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 italic" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.gold }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 italic rounded" style={{ backgroundColor: plan.hot ? colors.brown : 'transparent', color: plan.hot ? 'white' : colors.caramel, border: plan.hot ? 'none' : `2px solid ${colors.caramel}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-4xl font-bold italic mb-12" style={{ color: colors.caramel }}>Questions</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Leather style?', a: 'Rich textures and warm tones inspired by premium leather craftsmanship.' },
                        { q: 'Customizable?', a: 'Full control over textures and color tones.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded overflow-hidden" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.brown}` }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-semibold italic">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.caramel, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5 italic" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${colors.gold}`, boxShadow: leatherTexture }}>
                    <Briefcase size={48} className="mx-auto mb-6" style={{ color: colors.caramel }} />
                    <h2 className="text-4xl font-bold italic mb-6">Experience Luxury</h2>
                    <button className="px-12 py-4 italic text-white rounded" style={{ backgroundColor: colors.brown }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.brown, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 italic"><Briefcase size={20} style={{ color: colors.caramel }} /> Artisan</div>
                    <span className="italic" style={{ color: colors.muted }}>© 2025 Leather Design</span>
                </div>
            </footer>
        </div>
    );
};
