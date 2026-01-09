import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Crown, Sparkles, Star, Zap, Diamond, Award } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S100TheUltimatePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#050510', surface: '#0A0A1A', text: '#FFFFFF', muted: '#9090B0', gold: '#FFD700', platinum: '#E5E4E2', diamond: '#B9F2FF', purple: '#A855F7', pink: '#EC4899', blue: '#3B82F6' };
    const ultimateGradient = 'linear-gradient(135deg, #FFD700 0%, #A855F7 33%, #EC4899 66%, #3B82F6 100%)';
    const shimmer = 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Playfair Display", "Inter", serif' }}>
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute w-full h-full" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.15) 0%, transparent 50%)' }} />
                <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: colors.gold, top: '10%', right: '-5%' }} />
                <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: colors.pink, bottom: '20%', left: '-5%' }} />
            </div>

            {/* Gradient Top Border */}
            <div className="h-1" style={{ background: ultimateGradient }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50" style={{ backgroundColor: `${colors.bg}E0`, backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Crown size={28} style={{ color: colors.gold }} />
                        <span className="text-xl font-bold tracking-wide">ULTIMATE</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Experience', 'Collection', 'Legacy'].map((item) => (<span key={item} className="cursor-pointer tracking-wide" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2.5 font-bold tracking-wider text-black" style={{ background: ultimateGradient }}>Begin</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: colors.surface }}>
                        {['Experience', 'Collection', 'Legacy'].map((item) => (<div key={item} className="py-3 tracking-wide" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-2.5 font-bold tracking-wider text-black" style={{ background: ultimateGradient }}>Begin</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section className="relative z-10" style={{ padding: '100px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full" style={{ border: '1px solid rgba(255,215,0,0.5)', backgroundColor: 'rgba(255,215,0,0.1)' }}>
                        <Diamond size={18} style={{ color: colors.diamond }} />
                        <span className="font-bold tracking-widest" style={{ color: colors.gold }}>THE PINNACLE</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '44px' : '80px' }}>
                        <span style={{ background: ultimateGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>The Ultimate</span><br />Experience
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 text-lg" style={{ color: colors.muted }}>The culmination of 100 styles. Premium finishes, stunning gradients, and unmatched elegance.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 font-bold tracking-wider text-black flex items-center justify-center gap-2" style={{ background: ultimateGradient }}>Experience Now <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 font-bold tracking-wider border" style={{ borderColor: colors.gold, color: colors.gold }}>View Collection</button>
                    </div>
                    {/* Ultimate Icons */}
                    <div className="mt-16 flex justify-center gap-4">
                        {[{ icon: Crown, color: colors.gold }, { icon: Diamond, color: colors.diamond }, { icon: Star, color: colors.pink }, { icon: Zap, color: colors.purple }].map((item, i) => (
                            <div key={i} className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: `1px solid ${item.color}40` }}><item.icon size={24} style={{ color: item.color }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="relative z-10" style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ background: ultimateGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Excellence</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Crown, title: 'Premium', color: colors.gold }, { icon: Sparkles, title: 'Stunning', color: colors.pink }, { icon: Award, title: 'Ultimate', color: colors.purple }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl text-center" style={{ backgroundColor: colors.surface, border: `1px solid ${item.color}30` }}>
                                <item.icon size={36} className="mx-auto mb-4" style={{ color: item.color }} />
                                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Unmatched quality.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="relative z-10" style={{ padding: '80px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ background: ultimateGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Membership</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Gold', price: '$199', icon: Star, color: colors.gold, hot: false },
                        { name: 'Platinum', price: '$499', icon: Diamond, color: colors.platinum, hot: true },
                        { name: 'Diamond', price: '$999', icon: Crown, color: colors.diamond, hot: false }
                        ].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl text-center" style={{ backgroundColor: colors.bg, border: `2px solid ${plan.hot ? 'transparent' : plan.color + '40'}`, background: plan.hot ? ultimateGradient : colors.bg }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: colors.bg, color: colors.platinum }}>★ ULTIMATE ★</div>}
                                <plan.icon size={32} className="mx-auto mb-3" style={{ color: plan.hot ? colors.bg : plan.color }} />
                                <h3 className="text-xl font-bold mb-2" style={{ color: plan.hot ? colors.bg : colors.text }}>{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: plan.hot ? colors.bg : plan.color }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All 100 styles', 'Lifetime updates', 'VIP support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: plan.hot ? 'rgba(0,0,0,0.7)' : colors.muted }}><Check size={16} style={{ color: plan.hot ? colors.bg : plan.color }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 rounded-lg font-bold tracking-wide" style={{ backgroundColor: plan.hot ? colors.bg : 'transparent', color: plan.hot ? colors.platinum : plan.color, border: plan.hot ? 'none' : `1px solid ${plan.color}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative z-10" style={{ padding: '80px 24px' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ background: ultimateGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions</h2>
                    <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: colors.surface, border: '1px solid rgba(255,255,255,0.1)' }}>
                        {[{ q: 'What is The Ultimate?', a: 'The pinnacle of 100 styles - premium finishes, stunning gradients, and unmatched elegance.' },
                        { q: 'Customizable?', a: 'Full control over every aspect of the design.' },
                        { q: 'What\'s included?', a: 'Access to all 100 styles with lifetime updates.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b last:border-b-0" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-semibold">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.gold, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10" style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded-2xl text-center" style={{ background: ultimateGradient }}>
                    <Crown size={48} className="mx-auto mb-6" style={{ color: colors.bg }} />
                    <h2 className="text-3xl font-bold mb-6" style={{ color: colors.bg }}>The Ultimate Awaits</h2>
                    <button className="px-12 py-4 rounded-lg font-bold tracking-wider text-white" style={{ backgroundColor: colors.bg }}>Begin Journey</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)', padding: '40px 24px' }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Crown size={20} style={{ color: colors.gold }} /> <span className="font-bold tracking-wide">ULTIMATE</span></div>
                    <span style={{ color: colors.muted }}>© 2025 The Ultimate - Style #100</span>
                </div>
            </footer>

            {/* Gradient Bottom Border */}
            <div className="h-1" style={{ background: ultimateGradient }} />
        </div>
    );
};
