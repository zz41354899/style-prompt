import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Crown, Diamond, Star, Award } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S87LuxuryGoldPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0C0A08', surface: '#1A1610', text: '#F5F0E5', muted: '#A09080', gold: '#D4AF37', bronze: '#CD7F32', cream: '#FAF3E0', dark: '#050403' };
    const goldGlow = '0 0 30px rgba(212,175,55,0.4)';

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Cormorant Garamond", "Playfair Display", serif' }}>
            {/* Gold Accent Pattern */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='30' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: '80px 80px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.gold + '40', backgroundColor: `${colors.bg}F0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Crown size={28} style={{ color: colors.gold }} />
                        <span className="text-2xl italic">Luxuria</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Collection', 'Heritage', 'Atelier'].map((item) => (<span key={item} className="italic cursor-pointer hover:text-yellow-500" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 italic text-black" style={{ backgroundColor: colors.gold, boxShadow: goldGlow }}>Discover</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: colors.gold + '40', backgroundColor: colors.surface }}>
                        {['Collection', 'Heritage', 'Atelier'].map((item) => (<div key={item} className="py-3 italic" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 italic text-black" style={{ backgroundColor: colors.gold }}>Discover</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '100px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 border" style={{ borderColor: colors.gold }}>
                        <Diamond size={16} style={{ color: colors.gold }} />
                        <span className="italic tracking-widest" style={{ color: colors.gold }}>EXCEPTIONAL LUXURY</span>
                    </div>
                    <h1 className="mb-6 font-bold italic leading-tight" style={{ fontSize: isMobile ? '44px' : '80px', textShadow: goldGlow }}>
                        <span style={{ color: colors.gold }}>Golden</span> Excellence
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 text-lg italic" style={{ color: colors.muted }}>Opulent gold aesthetics with premium feel and timeless luxury elegance.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 italic text-black flex items-center justify-center gap-2" style={{ backgroundColor: colors.gold, boxShadow: goldGlow }}>Explore <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 italic border" style={{ borderColor: colors.gold, color: colors.gold }}>View Collection</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '80px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold italic mb-12" style={{ color: colors.gold }}>Craftsmanship</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Crown, title: 'Regal Quality' }, { icon: Diamond, title: 'Precious Design' }, { icon: Star, title: 'Elite Finish' }].map((item) => (
                            <div key={item.title} className="p-6 text-center border" style={{ borderColor: colors.gold + '40', backgroundColor: colors.bg }}>
                                <item.icon size={36} className="mx-auto mb-4" style={{ color: colors.gold }} />
                                <h3 className="text-lg font-bold italic mb-2">{item.title}</h3>
                                <p className="italic" style={{ color: colors.muted }}>Unparalleled luxury.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold italic mb-12" style={{ color: colors.gold }}>Membership</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Gold', price: '$299', hot: false }, { name: 'Platinum', price: '$599', hot: true }, { name: 'Diamond', price: '$999', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.gold : colors.gold + '40'}`, boxShadow: plan.hot ? goldGlow : 'none' }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs italic text-black" style={{ backgroundColor: colors.gold }}>★ Exclusive</div>}
                                <h3 className="text-2xl font-bold italic mb-2">{plan.name}</h3>
                                <div className="text-5xl font-bold mb-6" style={{ color: colors.gold }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['Full access', 'Concierge', 'Priority'].map((f) => (<li key={f} className="flex items-center gap-2 italic" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.gold }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 italic" style={{ backgroundColor: plan.hot ? colors.gold : 'transparent', color: plan.hot ? 'black' : colors.gold, border: plan.hot ? 'none' : `1px solid ${colors.gold}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '80px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold italic mb-12" style={{ color: colors.gold }}>Questions</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Luxury Gold?', a: 'Opulent gold aesthetics with premium exclusivity.' },
                        { q: 'Customizable?', a: 'Full control over luxury branding elements.' },
                        { q: 'Support?', a: 'White-glove concierge service included.' }
                        ].map((item, i) => (
                            <div key={i} className="border overflow-hidden" style={{ borderColor: colors.gold + '40', backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-semibold italic">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.gold, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5 italic" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${colors.gold}`, boxShadow: goldGlow }}>
                    <Award size={48} className="mx-auto mb-6" style={{ color: colors.gold }} />
                    <h2 className="text-3xl font-bold italic mb-6" style={{ textShadow: goldGlow }}>Experience Luxury</h2>
                    <button className="px-12 py-4 italic text-black" style={{ backgroundColor: colors.gold }}>Begin</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.gold + '40', padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 italic"><Crown size={20} style={{ color: colors.gold }} /> Luxuria</div>
                    <span className="italic" style={{ color: colors.muted }}>© 2025 Luxury Gold</span>
                </div>
            </footer>
        </div>
    );
};
