import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Wand2, Sparkles, Crown, Shield } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S70FantasyPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#1A1030', surface: '#251845', text: '#F0E6FF', muted: '#A890D0', purple: '#9B59B6', gold: '#FFD700', blue: '#6495ED', pink: '#FF69B4' };
    const magicGlow = '0 0 30px rgba(155,89,182,0.5)';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Cinzel Decorative", "Papyrus", fantasy' }}>
            {/* Magic Sparkle Background */}
            <div className="fixed inset-0 opacity-30 pointer-events-none" style={{ background: `radial-gradient(ellipse at 20% 30%, ${colors.purple}40, transparent 30%), radial-gradient(ellipse at 80% 70%, ${colors.blue}30, transparent 30%), radial-gradient(ellipse at 50% 50%, ${colors.gold}20, transparent 40%)` }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.gold + '40', backgroundColor: `${colors.bg}E0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Wand2 size={28} style={{ color: colors.gold }} />
                        <span className="text-xl">Arcanum</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Realm', 'Magic', 'Quest'].map((item) => (<span key={item} className="cursor-pointer hover:text-purple-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 text-white rounded-lg" style={{ backgroundColor: colors.purple, boxShadow: magicGlow }}>Enchant</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: colors.gold + '40', backgroundColor: colors.surface }}>
                        {['Realm', 'Magic', 'Quest'].map((item) => (<div key={item} className="py-3" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 text-white rounded-lg" style={{ backgroundColor: colors.purple }}>Enchant</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border" style={{ borderColor: colors.gold + '60' }}>
                        <Sparkles size={18} style={{ color: colors.gold }} />
                        <span style={{ color: colors.muted }}>Magical Realm</span>
                    </div>
                    <h1 className="mb-6 leading-tight" style={{ fontSize: isMobile ? '44px' : '80px', textShadow: magicGlow }}>
                        <span style={{ color: colors.purple }}>Fantasy</span> <span style={{ color: colors.gold }}>World</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 font-sans" style={{ color: colors.muted }}>Enchanted aesthetics with magical glows and mythical creature inspirations.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 text-white rounded-lg flex items-center justify-center gap-2" style={{ backgroundColor: colors.purple, boxShadow: magicGlow }}>Explore <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 rounded-lg border-2" style={{ borderColor: colors.gold, color: colors.gold }}>View Spells</button>
                    </div>
                    {/* Fantasy Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Wand2, Sparkles, Crown, Shield].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 rounded-full flex items-center justify-center border" style={{ borderColor: colors.gold + '60', backgroundColor: colors.surface }}><Icon size={24} style={{ color: colors.gold }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl mb-12" style={{ color: colors.gold, textShadow: magicGlow }}>Magic Arts</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Wand2, title: 'Enchantment', color: colors.purple }, { icon: Crown, title: 'Royal Touch', color: colors.gold }, { icon: Shield, title: 'Mystic Shield', color: colors.blue }].map((item) => (
                            <div key={item.title} className="p-6 rounded-xl border text-center" style={{ borderColor: item.color + '40', backgroundColor: colors.bg }}>
                                <item.icon size={36} className="mx-auto mb-4" style={{ color: item.color }} />
                                <h3 className="text-lg mb-2">{item.title}</h3>
                                <p className="font-sans text-sm" style={{ color: colors.muted }}>Fantasy design magic.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl mb-12" style={{ color: colors.gold, textShadow: magicGlow }}>Spellbooks</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Apprentice', price: '$49', hot: false }, { name: 'Wizard', price: '$99', hot: true }, { name: 'Archmage', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-xl text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.gold : colors.purple + '40'}`, boxShadow: plan.hot ? magicGlow : 'none' }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs text-black" style={{ backgroundColor: colors.gold }}>★ Legendary</div>}
                                <h3 className="text-2xl mb-2">{plan.name}</h3>
                                <div className="text-5xl mb-6" style={{ color: colors.gold }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All spells', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 font-sans" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.gold }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 rounded-lg" style={{ backgroundColor: plan.hot ? colors.purple : 'transparent', color: plan.hot ? 'white' : colors.purple, border: plan.hot ? 'none' : `2px solid ${colors.purple}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl mb-12" style={{ color: colors.gold, textShadow: magicGlow }}>Scroll of Knowledge</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Fantasy style?', a: 'Magical aesthetics with enchanted glows and mythical inspirations.' },
                        { q: 'Customizable?', a: 'Full magical control over all elements.' },
                        { q: 'Works everywhere?', a: 'All realms (browsers) supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: colors.gold + '40', backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span>{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.gold, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5 font-sans" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded-xl text-center" style={{ background: `linear-gradient(135deg, ${colors.purple}30, ${colors.blue}20)`, border: `2px solid ${colors.gold}`, boxShadow: magicGlow }}>
                    <Sparkles size={48} className="mx-auto mb-6" style={{ color: colors.gold }} />
                    <h2 className="text-3xl mb-6" style={{ textShadow: magicGlow }}>Begin Your Quest</h2>
                    <button className="px-12 py-4 text-white rounded-lg" style={{ backgroundColor: colors.purple }}>Cast Spell</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.gold + '40', padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Wand2 size={20} style={{ color: colors.gold }} /> Arcanum</div>
                    <span className="font-sans" style={{ color: colors.muted }}>© 2025 Fantasy Realm</span>
                </div>
            </footer>
        </div>
    );
};
