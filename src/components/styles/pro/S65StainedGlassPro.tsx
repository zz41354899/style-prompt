import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Church, Sparkles, Sun, Star } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S65StainedGlassPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#1A1A2E', surface: '#252542', text: '#F5F5F0', muted: '#A0A0B0', ruby: '#DC2626', sapphire: '#2563EB', emerald: '#059669', amber: '#F59E0B', gold: '#D4AF37' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Cormorant Garamond", "Palatino", serif' }}>
            {/* Stained Glass Glow */}
            <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ background: `radial-gradient(ellipse at 30% 20%, ${colors.ruby}60, transparent 30%), radial-gradient(ellipse at 70% 30%, ${colors.sapphire}60, transparent 30%), radial-gradient(ellipse at 50% 70%, ${colors.emerald}60, transparent 30%)` }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.gold, backgroundColor: `${colors.bg}F0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Church size={28} style={{ color: colors.gold }} />
                        <span className="text-2xl italic">Lumina</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Cathedral', 'Light', 'Art'].map((item) => (<span key={item} className="italic cursor-pointer hover:text-amber-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 italic text-white rounded-lg" style={{ background: `linear-gradient(135deg, ${colors.ruby}, ${colors.sapphire})` }}>Illuminate</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: colors.gold, backgroundColor: colors.surface }}>
                        {['Cathedral', 'Light', 'Art'].map((item) => (<div key={item} className="py-3 italic" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 italic text-white rounded-lg" style={{ background: `linear-gradient(135deg, ${colors.ruby}, ${colors.sapphire})` }}>Illuminate</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border" style={{ borderColor: colors.gold }}>
                        <Sun size={18} style={{ color: colors.amber }} />
                        <span className="italic" style={{ color: colors.muted }}>Sacred Light</span>
                    </div>
                    <h1 className="mb-6 font-bold italic leading-tight" style={{ fontSize: isMobile ? '44px' : '80px' }}>
                        <span style={{ color: colors.ruby }}>Stained</span> <span style={{ color: colors.sapphire }}>Glass</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 text-lg italic" style={{ color: colors.muted }}>Luminous colors through sacred artistry, with jewel tones and divine light effects.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 italic text-white rounded-lg flex items-center justify-center gap-2" style={{ background: `linear-gradient(135deg, ${colors.ruby}, ${colors.amber})` }}>Explore <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 italic rounded-lg border-2" style={{ borderColor: colors.gold, color: colors.gold }}>View Gallery</button>
                    </div>
                    {/* Glass Stones */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[colors.ruby, colors.sapphire, colors.emerald, colors.amber].map((color, i) => (
                            <div key={i} className="w-12 h-12 rounded-xl" style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}80` }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl font-bold italic mb-12" style={{ color: colors.gold }}>Artistry</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Church, title: 'Sacred Design', color: colors.ruby }, { icon: Sparkles, title: 'Luminous Glow', color: colors.sapphire }, { icon: Sun, title: 'Divine Light', color: colors.emerald }].map((item) => (
                            <div key={item.title} className="p-6 rounded-xl text-center border" style={{ borderColor: item.color, backgroundColor: colors.bg }}>
                                <item.icon size={40} className="mx-auto mb-4" style={{ color: item.color }} />
                                <h3 className="text-xl font-bold italic mb-2">{item.title}</h3>
                                <p className="italic" style={{ color: colors.muted }}>Stained glass beauty.</p>
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
                        {[{ name: 'Chapel', price: '$49', color: colors.sapphire, hot: false }, { name: 'Cathedral', price: '$99', color: colors.ruby, hot: true }, { name: 'Basilica', price: '$199', color: colors.emerald, hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-xl text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.gold : plan.color + '60'}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs italic text-white" style={{ background: `linear-gradient(135deg, ${colors.ruby}, ${colors.amber})` }}>★ Divine</div>}
                                <h3 className="text-2xl font-bold italic mb-2">{plan.name}</h3>
                                <div className="text-5xl font-bold mb-6" style={{ color: plan.color }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All patterns', 'Colors', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 italic" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.gold }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 italic rounded-lg" style={{ background: plan.hot ? `linear-gradient(135deg, ${colors.ruby}, ${colors.sapphire})` : 'transparent', color: plan.hot ? 'white' : plan.color, border: plan.hot ? 'none' : `2px solid ${plan.color}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-4xl font-bold italic mb-12" style={{ color: colors.gold }}>Questions</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Stained Glass style?', a: 'Jewel-toned luminous colors with sacred artistry and divine light effects.' },
                        { q: 'Customizable?', a: 'Full control over jewel tones and patterns.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.gold}40` }}>
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
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded-xl text-center" style={{ background: `linear-gradient(135deg, ${colors.ruby}20, ${colors.sapphire}20, ${colors.emerald}20)`, border: `2px solid ${colors.gold}` }}>
                    <Star size={48} className="mx-auto mb-6" style={{ color: colors.gold }} />
                    <h2 className="text-4xl font-bold italic mb-6">Embrace the Light</h2>
                    <button className="px-12 py-4 italic text-white rounded-lg" style={{ background: `linear-gradient(135deg, ${colors.ruby}, ${colors.sapphire})` }}>Begin Journey</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.gold, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 italic"><Church size={20} style={{ color: colors.gold }} /> Lumina</div>
                    <span className="italic" style={{ color: colors.muted }}>© 2025 Stained Glass</span>
                </div>
            </footer>
        </div>
    );
};
