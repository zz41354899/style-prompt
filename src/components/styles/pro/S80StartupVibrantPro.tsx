import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Rocket, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S80StartupVibrantPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FFFFFF', surface: '#F7F9FC', text: '#1A1A2E', muted: '#6B7280', purple: '#7C3AED', pink: '#EC4899', blue: '#3B82F6', gradient: 'linear-gradient(135deg, #7C3AED, #EC4899, #3B82F6)' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Poppins", "Inter", sans-serif' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: `${colors.bg}E0` }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-2">
                        <Rocket size={24} style={{ color: colors.purple }} />
                        <span className="text-lg font-bold">LaunchPad</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Product', 'Pricing', 'About'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-purple-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 font-semibold text-white rounded-full" style={{ background: colors.gradient }}>Try Free</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4" style={{ backgroundColor: colors.surface }}>
                        {['Product', 'Pricing', 'About'].map((item) => (<div key={item} className="py-2 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 font-semibold text-white rounded-full" style={{ background: colors.gradient }}>Try Free</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ backgroundColor: '#F3E8FF' }}>
                        <Sparkles size={14} style={{ color: colors.purple }} />
                        <span className="text-sm font-medium" style={{ color: colors.purple }}>New Feature Launch 🎉</span>
                    </div>
                    <h1 className="mb-4 font-bold leading-tight" style={{ fontSize: isMobile ? '36px' : '64px' }}>
                        Build Something <span style={{ background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Amazing</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-8" style={{ color: colors.muted }}>Energetic startup vibes with bold gradients and modern aesthetics that inspire action.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 font-semibold text-white rounded-full flex items-center justify-center gap-2" style={{ background: colors.gradient }}>Get Started <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 font-semibold rounded-full border-2" style={{ borderColor: colors.purple, color: colors.purple }}>Watch Demo</button>
                    </div>
                    {/* Gradient Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Rocket, Sparkles, Zap, TrendingUp].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: colors.gradient }}><Icon size={24} color="white" /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-10" style={{ background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why Choose Us</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Rocket, title: 'Launch Fast', color: colors.purple }, { icon: Zap, title: 'Scale Quickly', color: colors.pink }, { icon: TrendingUp, title: 'Grow Revenue', color: colors.blue }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl text-center" style={{ backgroundColor: colors.bg, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: item.color + '20' }}><item.icon size={24} style={{ color: item.color }} /></div>
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Startup-speed design.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-10" style={{ background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Simple Pricing</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Starter', price: 'Free', hot: false }, { name: 'Growth', price: '$49', hot: true }, { name: 'Scale', price: '$149', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl text-center" style={{ backgroundColor: colors.bg, border: plan.hot ? 'none' : `1px solid ${colors.muted}30`, background: plan.hot ? colors.gradient : colors.bg }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold text-white bg-black">🔥 Most Popular</div>}
                                <h3 className="font-bold mb-2" style={{ color: plan.hot ? 'white' : colors.text }}>{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: plan.hot ? 'white' : colors.purple }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All features', 'Support', 'Updates'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: plan.hot ? 'rgba(255,255,255,0.9)' : colors.muted }}><Check size={14} style={{ color: plan.hot ? 'white' : colors.purple }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 font-semibold rounded-full" style={{ backgroundColor: plan.hot ? 'white' : colors.purple, color: plan.hot ? colors.purple : 'white' }}>Get Started</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-10" style={{ background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FAQ</h2>
                    <div className="space-y-3">
                        {[{ q: 'What is Startup Vibrant style?', a: 'Energetic gradients and bold aesthetics that inspire action.' },
                        { q: 'Customizable?', a: 'Full control over colors and branding.' },
                        { q: 'Easy to implement?', a: 'Ready to use out of the box.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: colors.bg, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
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
                <div className="max-w-3xl mx-auto p-10 rounded-2xl text-center text-white" style={{ background: colors.gradient }}>
                    <Rocket size={40} className="mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Ready to Launch?</h2>
                    <button className="px-10 py-3 font-semibold rounded-full" style={{ backgroundColor: 'white', color: colors.purple }}>Start Free Trial</button>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-bold"><Rocket size={20} style={{ color: colors.purple }} /> LaunchPad</div>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Startup Vibrant</span>
                </div>
            </footer>
        </div>
    );
};
