import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Droplets, Waves, Wind, Palette } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S98AcrylicFluidPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0F0F1A', surface: '#1A1A2E', text: '#FFFFFF', muted: '#8888AA', pink: '#FF6B9D', blue: '#4ECDC4', purple: '#A855F7', border: 'rgba(255,255,255,0.1)' };
    const fluidGradient = 'linear-gradient(135deg, #FF6B9D 0%, #A855F7 50%, #4ECDC4 100%)';
    const acrylicBg = 'rgba(255,255,255,0.05)';

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Poppins", "Inter", sans-serif' }}>
            {/* Fluid Background Shapes */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: colors.pink, top: '-10%', right: '-5%' }} />
                <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-25" style={{ background: colors.purple, bottom: '10%', left: '-10%' }} />
                <div className="absolute w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: colors.blue, top: '40%', right: '20%' }} />
            </div>

            {/* Navigation */}
            <header className="sticky top-0 z-50" style={{ backgroundColor: acrylicBg, backdropFilter: 'blur(20px)', borderBottom: `1px solid ${colors.border}` }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-2">
                        <Droplets size={24} style={{ color: colors.pink }} />
                        <span className="text-lg font-semibold">Fluid</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Features', 'Gallery', 'About'].map((item) => (<span key={item} className="cursor-pointer hover:text-white" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 rounded-full font-semibold text-white" style={{ background: fluidGradient }}>Try Now</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.border }}>
                        {['Features', 'Gallery', 'About'].map((item) => (<div key={item} className="py-2" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 rounded-full font-semibold text-white" style={{ background: fluidGradient }}>Try Now</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section className="relative z-10" style={{ padding: '100px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full" style={{ backgroundColor: acrylicBg, border: `1px solid ${colors.border}` }}>
                        <Waves size={16} style={{ color: colors.blue }} />
                        <span className="text-sm" style={{ color: colors.muted }}>Fluid Design System</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '40px' : '72px', background: fluidGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Acrylic Fluid Motion
                    </h1>
                    <p className="max-w-md mx-auto mb-10" style={{ color: colors.muted }}>Flowing acrylic aesthetics with fluid gradients and smooth organic shapes.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 rounded-full font-semibold text-white flex items-center justify-center gap-2" style={{ background: fluidGradient }}>Get Started <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 rounded-full font-semibold" style={{ backgroundColor: acrylicBg, border: `1px solid ${colors.border}` }}>Learn More</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="relative z-10" style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ background: fluidGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Features</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Waves, title: 'Fluid Motion', color: colors.blue }, { icon: Wind, title: 'Smooth Flow', color: colors.purple }, { icon: Palette, title: 'Rich Colors', color: colors.pink }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl text-center" style={{ backgroundColor: acrylicBg, border: `1px solid ${colors.border}`, backdropFilter: 'blur(10px)' }}>
                                <item.icon size={32} className="mx-auto mb-4" style={{ color: item.color }} />
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Acrylic design.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="relative z-10" style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ background: fluidGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Plans</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Basic', price: '$12', hot: false }, { name: 'Pro', price: '$36', hot: true }, { name: 'Team', price: '$72', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl text-center" style={{ backgroundColor: acrylicBg, border: `1px solid ${plan.hot ? colors.purple : colors.border}`, backdropFilter: 'blur(10px)' }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: fluidGradient }}>Popular</div>}
                                <h3 className="font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ background: fluidGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{plan.price}<span className="text-sm font-normal" style={{ color: colors.muted, WebkitTextFillColor: colors.muted }}>/mo</span></div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All effects', 'Support', 'Updates'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.blue }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 rounded-full font-semibold" style={{ background: plan.hot ? fluidGradient : 'transparent', color: 'white', border: plan.hot ? 'none' : `1px solid ${colors.border}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative z-10" style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ background: fluidGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FAQ</h2>
                    <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: acrylicBg, border: `1px solid ${colors.border}`, backdropFilter: 'blur(10px)' }}>
                        {[{ q: 'What is Acrylic Fluid?', a: 'Flowing gradient aesthetics with organic shapes and smooth motion.' },
                        { q: 'Customizable?', a: 'Full control over colors and flow patterns.' },
                        { q: 'Works everywhere?', a: 'All modern browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b last:border-b-0" style={{ borderColor: colors.border }}>
                                <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span>{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.muted, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10" style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 rounded-2xl text-center" style={{ background: fluidGradient }}>
                    <Droplets size={32} className="mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-6">Flow with the design</h2>
                    <button className="px-10 py-3 rounded-full font-semibold" style={{ backgroundColor: 'white', color: colors.purple }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t" style={{ borderColor: colors.border, padding: '30px 24px' }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Droplets size={18} style={{ color: colors.pink }} /> Fluid</div>
                    <span style={{ color: colors.muted }}>© 2025 Acrylic Fluid</span>
                </div>
            </footer>
        </div>
    );
};
