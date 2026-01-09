import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Star, Smile, Rocket, PartyPopper } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S85KidsPlayfulPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FFFAF0', surface: '#FFFFFF', text: '#2D1B4E', muted: '#6B5B8A', pink: '#FF6B9D', yellow: '#FFD93D', blue: '#6FDFFF', green: '#7ED957', purple: '#B388FF' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Fredoka One", "Comic Sans MS", cursive' }}>
            {/* Fun Pattern Background */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle at 20% 20%, ${colors.pink}40, transparent 20%), radial-gradient(circle at 80% 40%, ${colors.yellow}40, transparent 20%), radial-gradient(circle at 40% 80%, ${colors.blue}40, transparent 20%)` }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50" style={{ backgroundColor: colors.surface, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-2">
                        <Star size={28} style={{ color: colors.yellow }} />
                        <span className="text-xl">FunTime!</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Games', 'Learn', 'Create'].map((item) => (<span key={item} className="cursor-pointer" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 text-white rounded-full" style={{ backgroundColor: colors.pink }}>Play Now! 🎮</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4" style={{ backgroundColor: colors.bg }}>
                        {['Games', 'Learn', 'Create'].map((item) => (<div key={item} className="py-2" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 text-white rounded-full" style={{ backgroundColor: colors.pink }}>Play Now! 🎮</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ backgroundColor: colors.yellow, color: colors.text }}>
                        <PartyPopper size={18} />
                        <span>Super Fun Adventures! 🎉</span>
                    </div>
                    <h1 className="mb-4 leading-tight" style={{ fontSize: isMobile ? '36px' : '64px' }}>
                        <span style={{ color: colors.pink }}>Learn</span> & <span style={{ color: colors.blue }}>Play!</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-8 font-sans" style={{ color: colors.muted }}>Colorful playful aesthetics with fun shapes and kid-friendly vibes!</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-4 text-white rounded-full flex items-center justify-center gap-2" style={{ backgroundColor: colors.pink }}>Start Playing! <Rocket size={20} /></button>
                        <button className="px-8 py-4 rounded-full border-2" style={{ borderColor: colors.blue, color: colors.blue }}>Watch Video</button>
                    </div>
                    {/* Colorful Icons */}
                    <div className="mt-10 flex justify-center gap-3">
                        {[{ icon: Star, color: colors.yellow }, { icon: Smile, color: colors.pink }, { icon: Rocket, color: colors.blue }, { icon: PartyPopper, color: colors.green }].map((item, i) => (
                            <div key={i} className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color + '30' }}><item.icon size={28} style={{ color: item.color }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '50px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl mb-8" style={{ color: colors.purple }}>Fun Stuff! 🌈</h2>
                    <div className="grid gap-5" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Star, title: 'Games!', color: colors.yellow }, { icon: Smile, title: 'Friends!', color: colors.pink }, { icon: Rocket, title: 'Adventures!', color: colors.blue }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl text-center" style={{ backgroundColor: item.color + '20' }}>
                                <item.icon size={40} className="mx-auto mb-3" style={{ color: item.color }} />
                                <h3 className="text-lg">{item.title}</h3>
                                <p className="font-sans text-sm mt-2" style={{ color: colors.muted }}>Super amazing fun!</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '50px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl mb-8" style={{ color: colors.pink }}>Pick Your Plan! 🎁</h2>
                    <div className="grid gap-5" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Starter', price: '$9', hot: false, color: colors.yellow }, { name: 'Super', price: '$19', hot: true, color: colors.pink }, { name: 'Ultimate', price: '$29', hot: false, color: colors.blue }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl text-center" style={{ backgroundColor: colors.surface, border: `3px solid ${plan.color}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-sm text-white" style={{ backgroundColor: plan.color }}>⭐ Best!</div>}
                                <h3 className="text-xl mb-2">{plan.name}</h3>
                                <div className="text-4xl mb-4" style={{ color: plan.color }}>{plan.price}</div>
                                <ul className="space-y-2 mb-5 text-left font-sans">
                                    {['All games', 'Updates', 'No ads'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={14} style={{ color: plan.color }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 rounded-full text-white" style={{ backgroundColor: plan.color }}>Choose!</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '50px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl mb-8" style={{ color: colors.blue }}>Questions? 🤔</h2>
                    <div className="space-y-3">
                        {[{ q: 'Is it kid-safe?', a: 'Absolutely! 100% kid-friendly and safe!' },
                        { q: 'Can I customize?', a: 'Yes! Make it your own!' },
                        { q: 'Works on tablets?', a: 'Works everywhere!' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-4 text-left font-sans" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span>{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.pink, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-sm font-sans" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '50px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 rounded-2xl text-center text-white" style={{ background: `linear-gradient(135deg, ${colors.pink}, ${colors.purple})` }}>
                    <Star size={40} className="mx-auto mb-4" />
                    <h2 className="text-2xl mb-4">Ready for Fun? 🚀</h2>
                    <button className="px-10 py-3 rounded-full" style={{ backgroundColor: colors.yellow, color: colors.text }}>Let's Go!</button>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Star size={20} style={{ color: colors.yellow }} /> FunTime!</div>
                    <span className="font-sans text-sm" style={{ color: colors.muted }}>© 2025 Kids Playful 🎈</span>
                </div>
            </footer>
        </div>
    );
};
