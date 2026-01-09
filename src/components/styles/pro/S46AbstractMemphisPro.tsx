import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Triangle, Circle, Square, Hexagon } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S46AbstractMemphisPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FFF5E6', surface: '#FFFFFF', text: '#1A1A1A', pink: '#FF6B9D', blue: '#4ECDC4', yellow: '#FFE66D', purple: '#9B59B6', orange: '#FF8C42' };

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Poppins", "Futura", sans-serif' }}>
            {/* Memphis Shapes Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-16 h-16 border-4 rounded-full" style={{ borderColor: colors.pink }} />
                <div className="absolute top-40 right-20 w-12 h-12" style={{ backgroundColor: colors.yellow }} />
                <div className="absolute bottom-40 left-20 w-20 h-20 border-4" style={{ borderColor: colors.blue, transform: 'rotate(45deg)' }} />
                <div className="absolute bottom-20 right-40" style={{ width: 0, height: 0, borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderBottom: `50px solid ${colors.purple}` }} />
            </div>

            {/* Navigation */}
            <header className="sticky top-0 z-50" style={{ backgroundColor: colors.surface }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6 border-b-4" style={{ borderColor: colors.pink }}>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                            <Circle size={12} fill={colors.pink} color={colors.pink} />
                            <Square size={12} fill={colors.blue} color={colors.blue} />
                            <Triangle size={12} fill={colors.yellow} color={colors.yellow} />
                        </div>
                        <span className="text-xl font-black tracking-tight">MEMPHIS</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Shapes', 'Patterns', 'Colors'].map((item) => (<span key={item} className="font-semibold cursor-pointer hover:text-pink-500">{item}</span>))}
                            <button className="px-6 py-2 rounded-full font-bold text-white" style={{ backgroundColor: colors.pink }}>Start!</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-b-4" style={{ borderColor: colors.blue, backgroundColor: colors.surface }}>
                        {['Shapes', 'Patterns', 'Colors'].map((item) => (<div key={item} className="py-3 font-semibold">{item}</div>))}
                        <button className="w-full mt-4 py-3 rounded-full font-bold text-white" style={{ backgroundColor: colors.pink }}>Start!</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center relative">
                    <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border-3" style={{ backgroundColor: colors.yellow, borderWidth: '3px', borderColor: colors.text }}>
                        <Hexagon size={16} fill={colors.purple} color={colors.purple} />
                        <span className="font-bold">80s Revival!</span>
                    </div>
                    <h1 className="mb-6 font-black leading-tight" style={{ fontSize: isMobile ? '42px' : '80px' }}>
                        BOLD<br /><span style={{ color: colors.pink }}>& PLAYFUL</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-8 text-lg" style={{ color: '#555' }}>Abstract Memphis design meets modern web. Geometric shapes, bold colors, and playful patterns.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 rounded-full font-bold text-white flex items-center justify-center gap-2 border-4 border-b-8" style={{ backgroundColor: colors.blue, borderColor: colors.text }}>Let's Go! <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 rounded-full font-bold border-4" style={{ borderColor: colors.text }}>Explore</button>
                    </div>
                    {/* Floating Shapes */}
                    <div className="mt-12 flex justify-center gap-6">
                        <div className="w-16 h-16 rounded-full border-4 flex items-center justify-center" style={{ borderColor: colors.pink, backgroundColor: colors.yellow }}><Circle size={24} style={{ color: colors.pink }} /></div>
                        <div className="w-16 h-16 border-4 flex items-center justify-center transform rotate-12" style={{ borderColor: colors.blue, backgroundColor: colors.pink }}><Square size={24} style={{ color: colors.text }} /></div>
                        <div className="w-16 h-16 rounded-full border-4 flex items-center justify-center" style={{ borderColor: colors.yellow, backgroundColor: colors.purple }}><Triangle size={24} style={{ color: 'white' }} /></div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl font-black mb-12">FEATURES<span style={{ color: colors.pink }}>!</span></h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Circle, title: 'Bold Shapes', color: colors.pink }, { icon: Square, title: 'Patterns', color: colors.blue }, { icon: Triangle, title: 'Vibrant', color: colors.yellow }].map((item, i) => (
                            <div key={item.title} className="p-6 border-4 transform" style={{ borderColor: colors.text, backgroundColor: colors.surface, transform: `rotate(${(i - 1) * 2}deg)` }}>
                                <div className="w-14 h-14 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: item.color }}><item.icon size={28} style={{ color: colors.text }} /></div>
                                <h3 className="text-xl font-black mb-2">{item.title}</h3>
                                <p style={{ color: '#555' }}>Memphis-inspired components.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl font-black mb-12">PRICING<span style={{ color: colors.blue }}>!</span></h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Basic', price: '$29', color: colors.yellow, hot: false }, { name: 'Pro', price: '$79', color: colors.pink, hot: true }, { name: 'Team', price: '$149', color: colors.blue, hot: false }].map((plan, i) => (
                            <div key={plan.name} className="relative p-6 border-4 transform" style={{ borderColor: colors.text, backgroundColor: plan.color, transform: `rotate(${(i - 1) * -2}deg)` }}>
                                {plan.hot && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-bold text-white border-2" style={{ backgroundColor: colors.purple, borderColor: colors.text }}>★ HOT!</div>}
                                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                                <div className="text-4xl font-black mb-4">{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All shapes', 'Patterns', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 font-semibold"><Check size={16} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 rounded-full font-bold border-4" style={{ borderColor: colors.text, backgroundColor: colors.surface }}>Choose</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-4xl font-black mb-12">FAQ<span style={{ color: colors.yellow }}>?</span></h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Memphis design?', a: '1980s Italian design movement featuring bold colors and geometric shapes.' },
                        { q: 'Is it customizable?', a: 'Yes! Full color and shape customization available.' },
                        { q: 'Works on mobile?', a: 'Fully responsive and touch-friendly.' }
                        ].map((item, i) => (
                            <div key={i} className="border-4 overflow-hidden" style={{ borderColor: colors.text, backgroundColor: colors.surface }}>
                                <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.pink, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="p-4 pt-0" style={{ color: '#555' }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 text-center border-4 transform -rotate-1" style={{ borderColor: colors.text, backgroundColor: colors.pink }}>
                    <Hexagon size={48} className="mx-auto mb-6" style={{ color: colors.text }} />
                    <h2 className="text-4xl font-black mb-6">GET STARTED!</h2>
                    <button className="px-12 py-4 rounded-full font-bold border-4" style={{ borderColor: colors.text, backgroundColor: colors.yellow }}>Let's Go!</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-4" style={{ borderColor: colors.text, padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-black">MEMPHIS</div>
                    <span style={{ color: '#555' }}>© 2025 Memphis Design</span>
                </div>
            </footer>
        </div>
    );
};
