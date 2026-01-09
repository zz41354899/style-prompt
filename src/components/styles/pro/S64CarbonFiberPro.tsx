import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Layers, Gauge, Zap, Shield } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S64CarbonFiberPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0A0A0C', surface: '#141418', text: '#E8E8EC', muted: '#6B6B70', carbon: '#1A1A1F', red: '#EF4444', silver: '#9CA3AF' };
    const carbonPattern = `repeating-linear-gradient(45deg, ${colors.carbon} 0px, ${colors.carbon} 2px, transparent 2px, transparent 4px),
                           repeating-linear-gradient(-45deg, ${colors.carbon} 0px, ${colors.carbon} 2px, transparent 2px, transparent 4px)`;

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Rajdhani", "Orbitron", sans-serif' }}>
            {/* Carbon Weave Pattern */}
            <div className="fixed inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: carbonPattern, backgroundSize: '8px 8px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.carbon, backgroundColor: `${colors.bg}F0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Layers size={24} style={{ color: colors.red }} />
                        <span className="font-bold tracking-widest">CARBON</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Tech', 'Speed', 'Power'].map((item) => (<span key={item} className="font-medium tracking-wide cursor-pointer hover:text-red-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 font-bold tracking-wide text-white" style={{ backgroundColor: colors.red }}>Launch</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.carbon, backgroundColor: colors.surface }}>
                        {['Tech', 'Speed', 'Power'].map((item) => (<div key={item} className="py-2 font-medium tracking-wide" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 font-bold tracking-wide text-white" style={{ backgroundColor: colors.red }}>Launch</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 border" style={{ borderColor: colors.red }}>
                        <Gauge size={16} style={{ color: colors.red }} />
                        <span className="text-sm font-medium tracking-widest" style={{ color: colors.muted }}>HIGH PERFORMANCE</span>
                    </div>
                    <h1 className="mb-4 font-bold tracking-wider leading-tight" style={{ fontSize: isMobile ? '44px' : '80px' }}>
                        <span style={{ color: colors.red }}>CARBON</span> FIBER
                    </h1>
                    <p className="max-w-lg mx-auto mb-8" style={{ color: colors.muted }}>Lightweight performance aesthetics with woven carbon textures and racing vibes.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 font-bold tracking-wide text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.red }}>ACCELERATE <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 font-bold tracking-wide border" style={{ borderColor: colors.silver, color: colors.text }}>EXPLORE</button>
                    </div>
                    {/* Carbon Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Layers, Gauge, Zap, Shield].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 flex items-center justify-center border" style={{ borderColor: colors.red, backgroundColor: colors.surface }}><Icon size={24} style={{ color: colors.red }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold tracking-widest mb-10" style={{ color: colors.red }}>FEATURES</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Layers, title: 'WEAVE PATTERN' }, { icon: Gauge, title: 'PERFORMANCE' }, { icon: Zap, title: 'SPEED DESIGN' }].map((item) => (
                            <div key={item.title} className="p-5 border" style={{ borderColor: colors.carbon, backgroundColor: colors.bg }}>
                                <item.icon size={24} className="mb-3" style={{ color: colors.red }} />
                                <h3 className="font-bold tracking-wide mb-1">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Carbon fiber aesthetics.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold tracking-widest mb-10" style={{ color: colors.red }}>PRICING</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'SPORT', price: '$49', hot: false }, { name: 'RACING', price: '$99', hot: true }, { name: 'PRO', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-5 border" style={{ borderColor: plan.hot ? colors.red : colors.carbon, backgroundColor: colors.surface }}>
                                {plan.hot && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-bold tracking-wider text-white" style={{ backgroundColor: colors.red }}>★ HOT</div>}
                                <h3 className="font-bold tracking-wide mb-1">{plan.name}</h3>
                                <div className="text-3xl font-bold mb-4" style={{ color: colors.red }}>{plan.price}</div>
                                <ul className="space-y-2 mb-5">
                                    {['All patterns', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.red }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 text-sm font-bold tracking-wide" style={{ backgroundColor: plan.hot ? colors.red : 'transparent', color: plan.hot ? 'white' : colors.text, border: plan.hot ? 'none' : `1px solid ${colors.silver}` }}>SELECT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl font-bold tracking-widest mb-10" style={{ color: colors.red }}>FAQ</h2>
                    <div className="space-y-3">
                        {[{ q: 'WHAT IS CARBON FIBER STYLE?', a: 'Woven carbon textures with high-performance racing aesthetics.' },
                        { q: 'CUSTOMIZABLE?', a: 'Full control over weave patterns and accent colors.' },
                        { q: 'WORKS EVERYWHERE?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border overflow-hidden" style={{ borderColor: colors.carbon, backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-4 text-left text-sm" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium tracking-wide">{item.q}</span>
                                    <ChevronDown size={16} style={{ color: colors.red, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 text-center border" style={{ borderColor: colors.red, backgroundColor: colors.surface }}>
                    <Gauge size={40} className="mx-auto mb-4" style={{ color: colors.red }} />
                    <h2 className="text-2xl font-bold tracking-widest mb-4">MAXIMUM SPEED</h2>
                    <button className="px-10 py-3 font-bold tracking-wide text-white" style={{ backgroundColor: colors.red }}>LAUNCH NOW</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.carbon, padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="font-bold tracking-widest">CARBON</span>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Carbon Fiber</span>
                </div>
            </footer>
        </div>
    );
};
