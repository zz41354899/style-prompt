import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Circle, Star, Zap, Heart } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S52PopArtPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FFF200', surface: '#FFFFFF', text: '#000000', red: '#FF0050', blue: '#00A0E9', pink: '#FF69B4', cyan: '#00FFFF' };

    return (
        <div className="min-h-screen relative" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Bangers", "Impact", sans-serif' }}>
            {/* Halftone Background */}
            <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '12px 12px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b-4" style={{ borderColor: colors.text, backgroundColor: colors.red }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center border-4" style={{ borderColor: colors.text, backgroundColor: colors.bg }}><Star size={24} fill={colors.text} /></div>
                        <span className="text-3xl tracking-wider text-white" style={{ textShadow: '3px 3px 0 #000' }}>POP!</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['WOW', 'BANG', 'POW'].map((item) => (<span key={item} className="text-xl text-white cursor-pointer tracking-wider" style={{ textShadow: '2px 2px 0 #000' }}>{item}</span>))}
                            <button className="px-6 py-2 text-xl font-bold border-4" style={{ borderColor: colors.text, backgroundColor: colors.bg }}>BOOM!</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white">{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t-4" style={{ borderColor: colors.text, backgroundColor: colors.blue }}>
                        {['WOW', 'BANG', 'POW'].map((item) => (<div key={item} className="py-3 text-xl text-white tracking-wider">{item}</div>))}
                        <button className="w-full mt-4 py-3 text-xl font-bold border-4" style={{ borderColor: colors.text, backgroundColor: colors.bg }}>BOOM!</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-block mb-8 px-8 py-3 border-4 transform -rotate-2" style={{ borderColor: colors.text, backgroundColor: colors.pink }}>
                        <span className="text-2xl text-white tracking-widest" style={{ textShadow: '2px 2px 0 #000' }}>★ AMAZING! ★</span>
                    </div>
                    <h1 className="mb-6 leading-tight" style={{ fontSize: isMobile ? '56px' : '100px', textShadow: '6px 6px 0 #FF0050, -3px -3px 0 #00A0E9' }}>KAPOW!</h1>
                    <p className="max-w-md mx-auto mb-10 text-xl" style={{ fontFamily: 'sans-serif' }}>Bold, bright, and in-your-face. Pop Art design that screams for attention!</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-12 py-5 text-2xl font-bold border-4 flex items-center justify-center gap-3 transform -rotate-1" style={{ borderColor: colors.text, backgroundColor: colors.cyan }}>GO! <ArrowRight size={28} /></button>
                        <button className="px-12 py-5 text-2xl font-bold border-4 transform rotate-1" style={{ borderColor: colors.text, backgroundColor: colors.surface }}>LOOK!</button>
                    </div>
                    {/* Comic Burst */}
                    <div className="mt-12 flex justify-center gap-8 flex-wrap">
                        {['WOW!', 'BAM!', 'ZAP!', 'POP!'].map((text, i) => (
                            <div key={text} className="px-6 py-3 text-2xl text-white border-4 transform" style={{ borderColor: colors.text, backgroundColor: [colors.red, colors.blue, colors.pink, colors.cyan][i], transform: `rotate(${(i - 1.5) * 5}deg)` }}>{text}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.blue }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-5xl mb-12 text-white" style={{ textShadow: '4px 4px 0 #000' }}>FEATURES!</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Star, title: 'BOLD!', color: colors.bg }, { icon: Zap, title: 'ELECTRIC!', color: colors.cyan }, { icon: Heart, title: 'LOVE!', color: colors.pink }].map((item, i) => (
                            <div key={item.title} className="p-6 text-center border-4 transform" style={{ borderColor: colors.text, backgroundColor: item.color, transform: `rotate(${(i - 1) * 3}deg)` }}>
                                <item.icon size={48} className="mx-auto mb-4" fill={colors.text} />
                                <h3 className="text-3xl mb-2">{item.title}</h3>
                                <p style={{ fontFamily: 'sans-serif' }}>Pop Art aesthetics!</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-5xl mb-12" style={{ textShadow: '4px 4px 0 #FF0050' }}>PRICES!</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'POP', price: '$29', color: colors.cyan, hot: false }, { name: 'ART', price: '$79', color: colors.pink, hot: true }, { name: 'WOW', price: '$149', color: colors.blue, hot: false }].map((plan, i) => (
                            <div key={plan.name} className="relative p-6 text-center border-4 transform" style={{ borderColor: colors.text, backgroundColor: plan.color, transform: `rotate(${(i - 1) * -2}deg)` }}>
                                {plan.hot && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-lg text-white border-4" style={{ borderColor: colors.text, backgroundColor: colors.red }}>★ HOT!</div>}
                                <h3 className="text-4xl mb-2 text-white" style={{ textShadow: '2px 2px 0 #000' }}>{plan.name}</h3>
                                <div className="text-6xl mb-6" style={{ textShadow: '3px 3px 0 #000' }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['Everything!', 'Updates!', 'Support!'].map((f) => (<li key={f} className="flex items-center justify-center gap-2 text-lg"><Check size={20} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 text-2xl font-bold border-4" style={{ borderColor: colors.text, backgroundColor: colors.bg }}>GET IT!</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.pink }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-5xl mb-12 text-white" style={{ textShadow: '4px 4px 0 #000' }}>FAQ!</h2>
                    <div className="space-y-4">
                        {[{ q: 'WHAT IS POP ART?', a: 'Bold colors, halftone patterns, and comic-book inspired designs!' },
                        { q: 'IS IT CUSTOMIZABLE?', a: 'Yes! Change colors and effects!' },
                        { q: 'WORKS EVERYWHERE?', a: 'All browsers supported!' }
                        ].map((item, i) => (
                            <div key={i} className="border-4 overflow-hidden" style={{ borderColor: colors.text, backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-xl tracking-wider">{item.q}</span>
                                    <ChevronDown size={28} style={{ transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="p-5 pt-0" style={{ fontFamily: 'sans-serif' }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 text-center border-4 transform -rotate-1" style={{ borderColor: colors.text, backgroundColor: colors.red }}>
                    <Circle size={64} className="mx-auto mb-6 text-white" fill="white" />
                    <h2 className="text-5xl mb-6 text-white" style={{ textShadow: '4px 4px 0 #000' }}>READY?!</h2>
                    <button className="px-12 py-5 text-3xl font-bold border-4" style={{ borderColor: colors.text, backgroundColor: colors.bg }}>GO NOW!</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-4" style={{ borderColor: colors.text, padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-2xl tracking-wider">POP! UI</span>
                    <span style={{ fontFamily: 'sans-serif' }}>© 2025 Pop Art Designs</span>
                </div>
            </footer>
        </div>
    );
};
