import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, CircuitBoard, Cpu, Zap, Settings } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S63BrushedSteelPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#2A2D32', surface: '#3A3D42', text: '#E8E8EC', muted: '#9A9CA0', steel: '#6B7280', silver: '#D1D5DB', accent: '#60A5FA' };
    const steelGradient = 'linear-gradient(135deg, #4B5563 0%, #6B7280 50%, #9CA3AF 100%)';
    const brushedTexture = 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)';

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Inter", "SF Pro Display", sans-serif' }}>
            {/* Brushed Steel Texture */}
            <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage: brushedTexture }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.steel, backgroundColor: `${colors.surface}F0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Settings size={24} style={{ color: colors.silver }} />
                        <span className="font-semibold tracking-wide">STEEL</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Forge', 'Alloy', 'Craft'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-blue-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 font-medium text-white rounded" style={{ background: steelGradient }}>Build</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.steel, backgroundColor: colors.surface }}>
                        {['Forge', 'Alloy', 'Craft'].map((item) => (<div key={item} className="py-2 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 font-medium text-white rounded" style={{ background: steelGradient }}>Build</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-lg border" style={{ borderColor: colors.steel }}>
                        <Cpu size={16} style={{ color: colors.accent }} />
                        <span className="text-sm font-medium" style={{ color: colors.muted }}>Industrial Precision</span>
                    </div>
                    <h1 className="mb-4 font-bold leading-tight" style={{ fontSize: isMobile ? '40px' : '72px' }}>
                        Brushed <span style={{ background: steelGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Metal</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-8" style={{ color: colors.muted }}>Industrial aesthetics with metallic textures and precision engineering vibes.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 font-medium text-white rounded flex items-center justify-center gap-2" style={{ background: steelGradient }}>Forge <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 font-medium rounded border" style={{ borderColor: colors.steel, color: colors.text }}>Learn More</button>
                    </div>
                    {/* Metal Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[CircuitBoard, Cpu, Zap, Settings].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: steelGradient }}><Icon size={24} color="white" /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ background: steelGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Features</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: CircuitBoard, title: 'Metal Texture' }, { icon: Cpu, title: 'Precision Cut' }, { icon: Zap, title: 'Industrial Feel' }].map((item) => (
                            <div key={item.title} className="p-5 rounded-lg border" style={{ borderColor: colors.steel, backgroundColor: colors.bg }}>
                                <item.icon size={24} className="mb-3" style={{ color: colors.silver }} />
                                <h3 className="font-semibold mb-1">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Steel-inspired design.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ background: steelGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Pricing</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Alloy', price: '$39', hot: false }, { name: 'Steel', price: '$79', hot: true }, { name: 'Titanium', price: '$159', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-5 rounded-lg border" style={{ borderColor: plan.hot ? colors.accent : colors.steel, backgroundColor: colors.surface }}>
                                {plan.hot && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-medium text-white" style={{ backgroundColor: colors.accent }}>Popular</div>}
                                <h3 className="font-semibold mb-1">{plan.name}</h3>
                                <div className="text-3xl font-bold mb-4" style={{ background: steelGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{plan.price}</div>
                                <ul className="space-y-2 mb-5">
                                    {['All textures', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.accent }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 text-sm font-medium rounded" style={{ background: plan.hot ? steelGradient : 'transparent', color: plan.hot ? 'white' : colors.text, border: plan.hot ? 'none' : `1px solid ${colors.steel}` }}>Choose</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ background: steelGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FAQ</h2>
                    <div className="space-y-3">
                        {[{ q: 'What is Brushed Steel?', a: 'Metallic textures with industrial precision and clean aesthetics.' },
                        { q: 'Customizable?', a: 'Full control over textures and metal tones.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-lg border overflow-hidden" style={{ borderColor: colors.steel, backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-4 text-left text-sm" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium">{item.q}</span>
                                    <ChevronDown size={16} style={{ color: colors.accent, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 rounded-lg text-center border" style={{ borderColor: colors.steel, backgroundColor: colors.surface }}>
                    <Settings size={40} className="mx-auto mb-4" style={{ color: colors.silver }} />
                    <h2 className="text-2xl font-bold mb-4">Forge Your Design</h2>
                    <button className="px-10 py-3 font-medium text-white rounded" style={{ background: steelGradient }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.steel, padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="font-semibold tracking-wide">STEEL</span>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Brushed Steel</span>
                </div>
            </footer>
        </div>
    );
};
