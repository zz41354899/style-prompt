import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Leaf, Bird, Flower2, TreePine } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S59JunglePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0D1B0E', surface: '#1A2E1C', text: '#E8F5E9', muted: '#A5D6A7', green: '#2E7D32', lime: '#8BC34A', gold: '#FFD54F', brown: '#5D4037' };

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Merriweather", "Georgia", serif' }}>
            {/* Tropical Foliage Background */}
            <div className="fixed inset-0 opacity-15 pointer-events-none" style={{ background: `radial-gradient(ellipse at 20% 80%, ${colors.green}60, transparent 40%), radial-gradient(ellipse at 80% 20%, ${colors.lime}40, transparent 40%), radial-gradient(ellipse at 50% 50%, ${colors.green}30, transparent 50%)` }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ borderColor: `${colors.green}40`, backgroundColor: `${colors.bg}E0` }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Leaf size={28} style={{ color: colors.lime }} />
                        <span className="text-xl font-semibold">Rainforest</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Canopy', 'Vines', 'Wildlife'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-lime-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 rounded-lg font-semibold text-white" style={{ backgroundColor: colors.green }}>Explore</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: `${colors.green}40`, backgroundColor: colors.surface }}>
                        {['Canopy', 'Vines', 'Wildlife'].map((item) => (<div key={item} className="py-3 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: colors.green }}>Explore</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-lg border" style={{ borderColor: `${colors.lime}60` }}>
                        <Bird size={18} style={{ color: colors.gold }} />
                        <span className="font-medium" style={{ color: colors.muted }}>Wild & Lush</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '40px' : '72px' }}>
                        Deep <span style={{ color: colors.lime }}>Jungle</span> Vibes
                    </h1>
                    <p className="max-w-lg mx-auto mb-10" style={{ color: colors.muted }}>Lush tropical aesthetics with vibrant greens and exotic wildlife inspiration.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.green }}>Enter Jungle <ArrowRight size={18} /></button>
                        <button className="px-10 py-4 rounded-lg font-semibold border-2" style={{ borderColor: colors.lime, color: colors.lime }}>View Map</button>
                    </div>
                    {/* Jungle Icons */}
                    <div className="mt-12 flex justify-center gap-6">
                        {[Leaf, Bird, Flower2, TreePine].map((Icon, i) => (
                            <div key={i} className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${colors.green}30`, border: `1px solid ${colors.lime}40` }}><Icon size={28} style={{ color: colors.lime }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.lime }}>Features</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Leaf, title: 'Tropical Palette' }, { icon: Bird, title: 'Wildlife Motifs' }, { icon: Flower2, title: 'Exotic Patterns' }].map((item) => (
                            <div key={item.title} className="p-6 rounded-xl" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.green}40` }}>
                                <item.icon size={32} className="mb-4" style={{ color: colors.lime }} />
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Jungle-inspired design.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.lime }}>Pricing</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Vine', price: '$29', hot: false }, { name: 'Canopy', price: '$79', hot: true }, { name: 'Amazon', price: '$159', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-xl" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.lime : colors.green + '40'}`, boxShadow: plan.hot ? `0 10px 40px ${colors.green}40` : 'none' }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: colors.green }}>Popular</div>}
                                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: colors.lime }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All components', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.lime }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 rounded-lg font-semibold" style={{ backgroundColor: plan.hot ? colors.green : 'transparent', color: plan.hot ? 'white' : colors.lime, border: plan.hot ? 'none' : `2px solid ${colors.lime}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.lime }}>FAQ</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Jungle style?', a: 'Lush tropical aesthetics with vibrant greens and exotic motifs.' },
                        { q: 'Customizable?', a: 'Full control over colors and patterns.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.green}40` }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.lime, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded-xl text-center" style={{ background: `linear-gradient(135deg, ${colors.green}30, ${colors.lime}20)`, border: `2px solid ${colors.green}` }}>
                    <Leaf size={48} className="mx-auto mb-6" style={{ color: colors.lime }} />
                    <h2 className="text-3xl font-bold mb-6">Into the Wild</h2>
                    <button className="px-12 py-4 rounded-lg font-semibold text-white" style={{ backgroundColor: colors.green }}>Start Safari</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: `${colors.green}40`, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Leaf size={20} style={{ color: colors.lime }} /><span className="font-semibold">Rainforest</span></div>
                    <span style={{ color: colors.muted }}>© 2025 Jungle Design</span>
                </div>
            </footer>
        </div>
    );
};
