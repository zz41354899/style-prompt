import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Droplets, Waves, Wind, Sparkles } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S48Fluid3DPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0A0B1E', surface: '#10122B', text: '#E8EAF6', muted: '#7C7FA0', purple: '#8B5CF6', pink: '#EC4899', blue: '#3B82F6', cyan: '#06B6D4' };
    const gradient = 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #06B6D4 100%)';
    const glow = '0 0 60px rgba(139, 92, 246, 0.4)';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}>
            {/* Fluid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: colors.purple }} />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-30" style={{ background: colors.pink }} />
                <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: colors.cyan }} />
            </div>

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ borderColor: `${colors.purple}30`, backgroundColor: `${colors.bg}E0` }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: gradient }}><Droplets size={20} color="white" /></div>
                        <span className="text-xl font-bold">FluidUI</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Flow', 'Morph', 'Animate'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-purple-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2.5 rounded-2xl font-semibold text-white" style={{ background: gradient }}>Get Started</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: `${colors.purple}30`, backgroundColor: colors.surface }}>
                        {['Flow', 'Morph', 'Animate'].map((item) => (<div key={item} className="py-3 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 rounded-2xl font-semibold text-white" style={{ background: gradient }}>Get Started</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center relative">
                    <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border" style={{ borderColor: `${colors.purple}40`, backgroundColor: colors.surface }}>
                        <Waves size={16} style={{ color: colors.cyan }} />
                        <span className="text-sm font-medium" style={{ color: colors.muted }}>Liquid Motion Design</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '40px' : '72px' }}>
                        <span style={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Flowing Beauty</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-8" style={{ color: colors.muted }}>Organic 3D shapes that morph and flow. Create interfaces that feel alive with fluid motion.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-4 rounded-2xl font-semibold text-white flex items-center justify-center gap-2" style={{ background: gradient, boxShadow: glow }}>Dive In <ArrowRight size={18} /></button>
                        <button className="px-8 py-4 rounded-2xl font-semibold border" style={{ borderColor: `${colors.purple}40`, color: colors.text }}>Learn More</button>
                    </div>
                    {/* Fluid Shapes */}
                    <div className="mt-16 flex justify-center gap-6">
                        {[colors.purple, colors.pink, colors.cyan].map((color, i) => (
                            <div key={i} className="w-20 h-20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]" style={{ backgroundColor: color, boxShadow: `0 0 40px ${color}60`, animation: `morph ${3 + i * 0.5}s ease-in-out infinite` }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Features</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Droplets, title: 'Liquid Forms', color: colors.purple }, { icon: Waves, title: 'Wave Motion', color: colors.pink }, { icon: Wind, title: 'Flow Animation', color: colors.cyan }].map((item) => (
                            <div key={item.title} className="p-6 rounded-3xl border" style={{ borderColor: `${item.color}30`, backgroundColor: colors.surface }}>
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, ${item.color}, transparent)` }}><item.icon size={24} color="white" /></div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Organic motion that delights.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Pricing</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Flow', price: '$39', hot: false }, { name: 'Stream', price: '$99', hot: true }, { name: 'Ocean', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-3xl border" style={{ borderColor: plan.hot ? colors.purple : `${colors.purple}30`, backgroundColor: colors.bg, boxShadow: plan.hot ? glow : 'none' }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ background: gradient }}>Popular</div>}
                                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold mb-4" style={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All components', 'Animations', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.cyan }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 rounded-2xl font-semibold" style={{ background: plan.hot ? gradient : 'transparent', color: plan.hot ? 'white' : colors.text, border: plan.hot ? 'none' : `1px solid ${colors.purple}40` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FAQ</h2>
                    <div className="space-y-3">
                        {[{ q: 'What is Fluid 3D?', a: 'Organic, blob-like shapes with smooth morphing animations.' },
                        { q: 'Performance impact?', a: 'Optimized CSS animations for 60fps.' },
                        { q: 'Works everywhere?', a: 'All modern browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-2xl border overflow-hidden" style={{ borderColor: `${colors.purple}30`, backgroundColor: colors.surface }}>
                                <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.purple, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 rounded-3xl text-center" style={{ background: gradient, boxShadow: glow }}>
                    <Sparkles size={40} className="mx-auto mb-4 text-white" />
                    <h2 className="text-3xl font-bold mb-4 text-white">Experience Flow</h2>
                    <button className="px-10 py-3 rounded-2xl font-semibold" style={{ backgroundColor: 'white', color: colors.purple }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: `${colors.purple}30`, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Droplets size={20} style={{ color: colors.purple }} /><span className="font-bold">FluidUI</span></div>
                    <span style={{ color: colors.muted }}>© 2025 FluidUI</span>
                </div>
            </footer>
        </div>
    );
};
