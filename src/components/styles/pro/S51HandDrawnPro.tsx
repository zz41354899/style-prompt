import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Pencil, Edit3, PenTool, Eraser } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S51HandDrawnPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FBF7F0', surface: '#FFFFFF', text: '#2C2C2C', muted: '#6B6B6B', blue: '#4A7EBF', red: '#D64545', green: '#5BA55B' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Caveat", "Patrick Hand", cursive' }}>
            {/* Sketch Lines Background */}
            <div className="fixed inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #2C2C2C 0px, #2C2C2C 1px, transparent 1px, transparent 32px)', backgroundSize: '100% 32px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50" style={{ backgroundColor: colors.surface, borderBottom: `2px dashed ${colors.text}` }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Pencil size={24} style={{ color: colors.blue }} />
                        <span className="text-2xl">Sketchy UI</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Doodles', 'Sketches', 'Notes'].map((item) => (<span key={item} className="text-xl cursor-pointer hover:text-blue-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 text-xl text-white" style={{ backgroundColor: colors.blue, borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>Draw!</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6" style={{ backgroundColor: colors.surface, borderTop: `2px dashed ${colors.muted}` }}>
                        {['Doodles', 'Sketches', 'Notes'].map((item) => (<div key={item} className="py-3 text-xl" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 text-xl text-white" style={{ backgroundColor: colors.blue }}>Draw!</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block mb-6 px-6 py-2" style={{ border: `2px dashed ${colors.blue}`, borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
                        <span className="text-lg" style={{ color: colors.blue }}>✏️ Hand-crafted with love</span>
                    </div>
                    <h1 className="mb-6 leading-relaxed" style={{ fontSize: isMobile ? '48px' : '80px' }}>Imperfectly <span style={{ color: colors.blue }}>Perfect</span></h1>
                    <p className="max-w-lg mx-auto mb-10 text-xl" style={{ color: colors.muted, fontFamily: '"Patrick Hand", cursive' }}>Embrace the beauty of hand-drawn aesthetics. Wobbly lines, sketchy borders, and authentic charm.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 text-2xl text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.blue, borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>Start Sketching <ArrowRight size={24} /></button>
                        <button className="px-10 py-4 text-2xl" style={{ border: `3px dashed ${colors.text}`, borderRadius: '15px 225px 15px 255px/225px 15px 255px 15px' }}>See Examples</button>
                    </div>
                    {/* Doodle Elements */}
                    <div className="mt-12 flex justify-center gap-8">
                        {['⭐', '❤️', '☀️', '🌙'].map((emoji, i) => (
                            <span key={i} className="text-4xl transform" style={{ transform: `rotate(${(i - 1.5) * 10}deg)` }}>{emoji}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-5xl mb-12">What's Inside?</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Pencil, title: 'Sketchy Lines', color: colors.blue }, { icon: Edit3, title: 'Wobbly Borders', color: colors.red }, { icon: PenTool, title: 'Doodle Icons', color: colors.green }].map((item, i) => (
                            <div key={item.title} className="p-6 text-center transform" style={{ backgroundColor: colors.surface, border: `3px dashed ${item.color}`, borderRadius: ['255px 15px 225px 15px/15px 225px 15px 255px', '15px 225px 15px 255px/225px 15px 255px 15px', '225px 15px 255px 15px/255px 15px 225px 15px'][i], transform: `rotate(${(i - 1) * 2}deg)` }}>
                                <item.icon size={40} className="mx-auto mb-4" style={{ color: item.color }} />
                                <h3 className="text-2xl mb-2">{item.title}</h3>
                                <p className="text-lg" style={{ color: colors.muted, fontFamily: '"Patrick Hand", cursive' }}>Hand-drawn charm.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-5xl mb-12">Pick Your Pencil</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Sketch', price: '$19', hot: false }, { name: 'Doodle', price: '$49', hot: true }, { name: 'Artist', price: '$99', hot: false }].map((plan, i) => (
                            <div key={plan.name} className="relative p-6 text-center transform" style={{ backgroundColor: colors.bg, border: `3px ${plan.hot ? 'solid' : 'dashed'} ${plan.hot ? colors.blue : colors.text}`, borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px', transform: `rotate(${(i - 1) * -1}deg)` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-sm text-white" style={{ backgroundColor: colors.red, borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>★ Popular!</div>}
                                <h3 className="text-3xl mb-2">{plan.name}</h3>
                                <div className="text-5xl mb-4" style={{ color: colors.blue }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All components', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-lg" style={{ color: colors.muted }}><Check size={18} style={{ color: colors.green }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 text-xl" style={{ backgroundColor: plan.hot ? colors.blue : 'transparent', color: plan.hot ? 'white' : colors.text, border: plan.hot ? 'none' : `2px dashed ${colors.text}`, borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>Choose</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-5xl mb-12">Questions?</h2>
                    <div className="space-y-4">
                        {[{ q: 'What makes it hand-drawn?', a: 'Wobbly borders, sketch-like lines, and imperfect shapes that feel authentic.' },
                        { q: 'Can I customize?', a: 'Yes! Change colors, line thickness, and wobble intensity.' },
                        { q: 'Works on all browsers?', a: 'CSS-based, works everywhere.' }
                        ].map((item, i) => (
                            <div key={i} className="overflow-hidden" style={{ backgroundColor: colors.surface, border: `2px dashed ${colors.muted}`, borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-xl">{item.q}</span>
                                    <ChevronDown size={24} style={{ color: colors.blue, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5 text-lg" style={{ color: colors.muted, fontFamily: '"Patrick Hand", cursive' }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 text-center transform -rotate-1" style={{ backgroundColor: colors.surface, border: `3px dashed ${colors.blue}`, borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
                    <Eraser size={48} className="mx-auto mb-6" style={{ color: colors.blue }} />
                    <h2 className="text-5xl mb-6">Ready to Sketch?</h2>
                    <button className="px-12 py-4 text-2xl text-white" style={{ backgroundColor: colors.blue, borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>Start Drawing ✏️</button>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '40px 24px', backgroundColor: colors.surface, borderTop: `2px dashed ${colors.text}` }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-xl"><Pencil size={20} style={{ color: colors.blue }} /> Sketchy UI</div>
                    <span className="text-lg" style={{ color: colors.muted }}>© 2025 Hand-drawn with ❤️</span>
                </div>
            </footer>
        </div>
    );
};
