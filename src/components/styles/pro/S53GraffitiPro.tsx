import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, SprayCan, Paintbrush, Zap, Star } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S53GraffitiPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#1A1A1A', surface: '#2D2D2D', text: '#FFFFFF', muted: '#999999', pink: '#FF1493', cyan: '#00FFFF', yellow: '#FFE500', green: '#39FF14' };

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Permanent Marker", "Impact", sans-serif' }}>
            {/* Brick Wall Texture */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #333 0px, #333 60px, #222 60px, #222 62px), repeating-linear-gradient(0deg, #333 0px, #333 30px, #222 30px, #222 32px)', backgroundSize: '62px 32px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b-4" style={{ borderColor: colors.pink, backgroundColor: `${colors.bg}F0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <SprayCan size={28} style={{ color: colors.pink }} />
                        <span className="text-2xl" style={{ transform: 'rotate(-3deg)', display: 'inline-block' }}>TAGZ</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['STREET', 'WALL', 'CREW'].map((item, i) => (<span key={item} className="cursor-pointer" style={{ color: [colors.pink, colors.cyan, colors.yellow][i], transform: `rotate(${(i - 1) * 3}deg)` }}>{item}</span>))}
                            <button className="px-6 py-2 text-black transform -rotate-2" style={{ backgroundColor: colors.green }}>TAG IT</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t-4" style={{ borderColor: colors.cyan, backgroundColor: colors.surface }}>
                        {['STREET', 'WALL', 'CREW'].map((item, i) => (<div key={item} className="py-3" style={{ color: [colors.pink, colors.cyan, colors.yellow][i] }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 text-black" style={{ backgroundColor: colors.green }}>TAG IT</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-block mb-8 px-6 py-2 border-4 transform rotate-2" style={{ borderColor: colors.yellow }}>
                        <span style={{ color: colors.yellow }}>★ STREET ART ★</span>
                    </div>
                    <h1 className="mb-6 leading-tight" style={{ fontSize: isMobile ? '48px' : '96px', textShadow: `4px 4px 0 ${colors.pink}, 8px 8px 0 ${colors.cyan}`, transform: 'rotate(-2deg)' }}>URBAN<br /><span style={{ color: colors.green }}>STYLE</span></h1>
                    <p className="max-w-md mx-auto mb-10 text-lg" style={{ color: colors.muted, fontFamily: 'sans-serif' }}>Bold graffiti aesthetics with spray paint textures and street art vibes.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 text-xl text-black flex items-center justify-center gap-2 transform -rotate-1" style={{ backgroundColor: colors.pink }}>SPRAY <ArrowRight size={24} /></button>
                        <button className="px-10 py-4 text-xl border-4 transform rotate-1" style={{ borderColor: colors.cyan, color: colors.cyan }}>EXPLORE</button>
                    </div>
                    {/* SprayCan Drips */}
                    <div className="mt-12 flex justify-center gap-8">
                        {[colors.pink, colors.cyan, colors.yellow, colors.green].map((color, i) => (
                            <div key={i} className="w-8" style={{ height: `${60 + i * 20}px`, backgroundColor: color, borderRadius: '0 0 50% 50%' }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-5xl mb-12 transform -rotate-1" style={{ textShadow: `3px 3px 0 ${colors.cyan}` }}>FEATURES</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: SprayCan, title: 'SPRAY EFFECTS', color: colors.pink }, { icon: Paintbrush, title: 'DRIP TEXTURES', color: colors.cyan }, { icon: Zap, title: 'NEON GLOW', color: colors.green }].map((item, i) => (
                            <div key={item.title} className="p-6 border-4 transform" style={{ borderColor: item.color, backgroundColor: colors.surface, transform: `rotate(${(i - 1) * 2}deg)` }}>
                                <item.icon size={40} className="mb-4" style={{ color: item.color }} />
                                <h3 className="text-2xl mb-2" style={{ color: item.color }}>{item.title}</h3>
                                <p style={{ color: colors.muted, fontFamily: 'sans-serif' }}>Street art aesthetics.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-5xl mb-12 transform rotate-1" style={{ textShadow: `3px 3px 0 ${colors.yellow}` }}>PRICING</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'STARTER', price: '$29', color: colors.cyan, hot: false }, { name: 'ARTIST', price: '$79', color: colors.pink, hot: true }, { name: 'LEGEND', price: '$149', color: colors.green, hot: false }].map((plan, i) => (
                            <div key={plan.name} className="relative p-6 border-4 transform" style={{ borderColor: plan.color, backgroundColor: colors.bg, transform: `rotate(${(i - 1) * -2}deg)` }}>
                                {plan.hot && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-black" style={{ backgroundColor: colors.yellow }}>★ HOT</div>}
                                <h3 className="text-3xl mb-2" style={{ color: plan.color }}>{plan.name}</h3>
                                <div className="text-5xl mb-6" style={{ color: plan.color, textShadow: `2px 2px 0 ${colors.text}` }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All effects', 'Textures', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted, fontFamily: 'sans-serif' }}><Check size={18} style={{ color: plan.color }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 text-xl text-black" style={{ backgroundColor: plan.color }}>GET IT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-5xl mb-12" style={{ textShadow: `3px 3px 0 ${colors.green}` }}>FAQ</h2>
                    <div className="space-y-4">
                        {[{ q: 'WHAT IS GRAFFITI STYLE?', a: 'Bold spray paint effects, drips, and urban aesthetics.' },
                        { q: 'CUSTOMIZABLE?', a: 'Full color and texture customization.' },
                        { q: 'WORKS EVERYWHERE?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border-4 overflow-hidden" style={{ borderColor: [colors.pink, colors.cyan, colors.yellow][i], backgroundColor: colors.surface }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-xl">{item.q}</span>
                                    <ChevronDown size={24} style={{ transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="p-5 pt-0" style={{ color: colors.muted, fontFamily: 'sans-serif' }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 text-center border-4 transform -rotate-1" style={{ borderColor: colors.pink, backgroundColor: colors.surface }}>
                    <Star size={48} className="mx-auto mb-6" style={{ color: colors.yellow }} />
                    <h2 className="text-5xl mb-6" style={{ textShadow: `3px 3px 0 ${colors.pink}` }}>START TAGGING</h2>
                    <button className="px-12 py-4 text-2xl text-black" style={{ backgroundColor: colors.green }}>GO NOW</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-4" style={{ borderColor: colors.pink, padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-xl">TAGZ</span>
                    <span style={{ color: colors.muted, fontFamily: 'sans-serif' }}>© 2025 Street Art</span>
                </div>
            </footer>
        </div>
    );
};
