import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Eye, Moon, Cloud, Clock } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S75SurrealistPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#1A1A2E', surface: '#252544', text: '#E8E0F0', muted: '#9B8DC0', purple: '#7B68EE', orange: '#FF7F50', gold: '#FFD700', blue: '#4682B4' };
    const dreamGlow = '0 0 30px rgba(123,104,238,0.4)';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Playfair Display", "Georgia", serif' }}>
            {/* Dreamscape Background */}
            <div className="fixed inset-0 opacity-30 pointer-events-none" style={{ background: `radial-gradient(ellipse at 30% 20%, ${colors.purple}40, transparent 40%), radial-gradient(ellipse at 70% 80%, ${colors.orange}30, transparent 40%)` }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.purple + '40', backgroundColor: `${colors.bg}E0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Eye size={24} style={{ color: colors.purple }} />
                        <span className="text-xl italic">Rêverie</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Dream', 'Vision', 'Beyond'].map((item) => (<span key={item} className="italic cursor-pointer hover:text-purple-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 italic text-white rounded-full" style={{ backgroundColor: colors.purple, boxShadow: dreamGlow }}>Enter</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: colors.purple + '40', backgroundColor: colors.surface }}>
                        {['Dream', 'Vision', 'Beyond'].map((item) => (<div key={item} className="py-3 italic" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 italic text-white rounded-full" style={{ backgroundColor: colors.purple }}>Enter</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border" style={{ borderColor: colors.purple + '60' }}>
                        <Moon size={18} style={{ color: colors.gold }} />
                        <span className="italic" style={{ color: colors.muted }}>Beyond Reality</span>
                    </div>
                    <h1 className="mb-6 font-bold italic leading-tight" style={{ fontSize: isMobile ? '44px' : '80px', textShadow: dreamGlow }}>
                        <span style={{ color: colors.purple }}>Surreal</span> Visions
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 text-lg italic" style={{ color: colors.muted }}>Dreamlike imagery, melting forms, and the exploration of the subconscious mind.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 italic text-white rounded-full flex items-center justify-center gap-2" style={{ backgroundColor: colors.purple, boxShadow: dreamGlow }}>Explore <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 italic rounded-full border-2" style={{ borderColor: colors.orange, color: colors.orange }}>View Dreams</button>
                    </div>
                    {/* Dream Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Eye, Moon, Cloud, Clock].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 rounded-full flex items-center justify-center border" style={{ borderColor: colors.purple + '60', backgroundColor: colors.surface }}><Icon size={24} style={{ color: [colors.purple, colors.gold, colors.orange, colors.blue][i] }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold italic mb-12" style={{ color: colors.purple, textShadow: dreamGlow }}>Elements</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Eye, title: 'Dream Logic', color: colors.purple }, { icon: Clock, title: 'Melting Forms', color: colors.orange }, { icon: Cloud, title: 'Subconscious', color: colors.blue }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl text-center border" style={{ borderColor: item.color + '40', backgroundColor: colors.bg }}>
                                <item.icon size={36} className="mx-auto mb-4" style={{ color: item.color }} />
                                <h3 className="text-lg font-bold italic mb-2">{item.title}</h3>
                                <p className="italic" style={{ color: colors.muted }}>Surreal imagination.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold italic mb-12" style={{ color: colors.gold }}>Realms</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Dreamer', price: '$49', hot: false }, { name: 'Visionary', price: '$99', hot: true }, { name: 'Oracle', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.purple : colors.muted + '40'}`, boxShadow: plan.hot ? dreamGlow : 'none' }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs italic text-white" style={{ backgroundColor: colors.purple }}>★ Lucid</div>}
                                <h3 className="text-2xl font-bold italic mb-2">{plan.name}</h3>
                                <div className="text-5xl font-bold mb-6" style={{ color: colors.purple }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All dreams', 'Visions', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 italic" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.gold }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 italic rounded-full" style={{ backgroundColor: plan.hot ? colors.purple : 'transparent', color: plan.hot ? 'white' : colors.purple, border: plan.hot ? 'none' : `2px solid ${colors.purple}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold italic mb-12" style={{ color: colors.purple, textShadow: dreamGlow }}>Questions</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Surrealist style?', a: 'Dreamlike imagery with melting forms and subconscious exploration.' },
                        { q: 'Customizable?', a: 'Full control over dream effects and colors.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden border" style={{ borderColor: colors.purple + '40', backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-semibold italic">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.purple, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5 italic" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${colors.purple}30, ${colors.orange}20)`, border: `2px solid ${colors.purple}`, boxShadow: dreamGlow }}>
                    <Moon size={48} className="mx-auto mb-6" style={{ color: colors.gold }} />
                    <h2 className="text-3xl font-bold italic mb-6" style={{ textShadow: dreamGlow }}>Enter the Dream</h2>
                    <button className="px-12 py-4 italic text-white rounded-full" style={{ backgroundColor: colors.purple }}>Begin</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.purple + '40', padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 italic"><Eye size={20} style={{ color: colors.purple }} /> Rêverie</div>
                    <span className="italic" style={{ color: colors.muted }}>© 2025 Surrealist</span>
                </div>
            </footer>
        </div>
    );
};
