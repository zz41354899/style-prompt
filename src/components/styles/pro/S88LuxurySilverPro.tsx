import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Gem, Shield, Star, Award } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S88LuxurySilverPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0A0A0C', surface: '#141418', text: '#F0F0F5', muted: '#9090A0', silver: '#C0C0C0', platinum: '#E5E4E2', chrome: '#DBE4EB', dark: '#050506' };
    const silverGlow = '0 0 30px rgba(192,192,192,0.3)';

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Bodoni Moda", "Didot", serif' }}>
            {/* Silver Pattern */}
            <div className="fixed inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='30' x2='60' y2='30' stroke='%23C0C0C0' stroke-width='0.5'/%3E%3Cline x1='30' y1='0' x2='30' y2='60' stroke='%23C0C0C0' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.silver + '40', backgroundColor: `${colors.bg}F0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Gem size={28} style={{ color: colors.silver }} />
                        <span className="text-2xl tracking-widest">ARGENT</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Collection', 'Craft', 'Legacy'].map((item) => (<span key={item} className="tracking-wide cursor-pointer hover:text-white" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 tracking-wide text-black" style={{ backgroundColor: colors.silver, boxShadow: silverGlow }}>Discover</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: colors.silver + '40', backgroundColor: colors.surface }}>
                        {['Collection', 'Craft', 'Legacy'].map((item) => (<div key={item} className="py-3 tracking-wide" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 tracking-wide text-black" style={{ backgroundColor: colors.silver }}>Discover</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '100px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 border" style={{ borderColor: colors.silver }}>
                        <Shield size={16} style={{ color: colors.silver }} />
                        <span className="tracking-widest" style={{ color: colors.silver }}>REFINED ELEGANCE</span>
                    </div>
                    <h1 className="mb-6 font-bold tracking-wider leading-tight" style={{ fontSize: isMobile ? '44px' : '80px', color: colors.platinum, textShadow: silverGlow }}>
                        Silver <span style={{ color: colors.silver }}>Prestige</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 text-lg" style={{ color: colors.muted }}>Sleek silver aesthetics with cool metallic tones and refined sophistication.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 tracking-wide text-black flex items-center justify-center gap-2" style={{ backgroundColor: colors.silver, boxShadow: silverGlow }}>Explore <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 tracking-wide border" style={{ borderColor: colors.silver, color: colors.silver }}>View Collection</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '80px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold tracking-widest mb-12" style={{ color: colors.silver }}>EXCELLENCE</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Gem, title: 'REFINED' }, { icon: Shield, title: 'TIMELESS' }, { icon: Star, title: 'PREMIUM' }].map((item) => (
                            <div key={item.title} className="p-6 text-center border" style={{ borderColor: colors.silver + '40', backgroundColor: colors.bg }}>
                                <item.icon size={36} className="mx-auto mb-4" style={{ color: colors.silver }} />
                                <h3 className="text-lg font-bold tracking-wider mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Sophisticated luxury.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold tracking-widest mb-12" style={{ color: colors.silver }}>TIERS</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'STERLING', price: '$249', hot: false }, { name: 'PLATINUM', price: '$499', hot: true }, { name: 'RHODIUM', price: '$899', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.silver : colors.silver + '40'}`, boxShadow: plan.hot ? silverGlow : 'none' }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs tracking-widest text-black" style={{ backgroundColor: colors.silver }}>★ ELITE</div>}
                                <h3 className="text-xl font-bold tracking-widest mb-2">{plan.name}</h3>
                                <div className="text-5xl font-bold mb-6" style={{ color: colors.silver }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['Full access', 'Priority', 'Concierge'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.silver }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 tracking-wide" style={{ backgroundColor: plan.hot ? colors.silver : 'transparent', color: plan.hot ? 'black' : colors.silver, border: plan.hot ? 'none' : `1px solid ${colors.silver}` }}>SELECT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '80px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold tracking-widest mb-12" style={{ color: colors.silver }}>FAQ</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Luxury Silver?', a: 'Sleek metallic aesthetics with refined sophistication.' },
                        { q: 'Customizable?', a: 'Full control over metallic branding elements.' },
                        { q: 'Support?', a: 'Priority concierge service included.' }
                        ].map((item, i) => (
                            <div key={i} className="border overflow-hidden" style={{ borderColor: colors.silver + '40', backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-semibold tracking-wide">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.silver, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${colors.silver}`, boxShadow: silverGlow }}>
                    <Award size={48} className="mx-auto mb-6" style={{ color: colors.silver }} />
                    <h2 className="text-3xl font-bold tracking-widest mb-6">EXPERIENCE PRESTIGE</h2>
                    <button className="px-12 py-4 tracking-wide text-black" style={{ backgroundColor: colors.silver }}>BEGIN</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.silver + '40', padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 tracking-widest"><Gem size={20} style={{ color: colors.silver }} /> ARGENT</div>
                    <span style={{ color: colors.muted }}>© 2025 Luxury Silver</span>
                </div>
            </footer>
        </div>
    );
};
