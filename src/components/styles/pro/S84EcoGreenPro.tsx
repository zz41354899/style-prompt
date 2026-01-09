import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Leaf, TreePine, Recycle, Sun } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S84EcoGreenPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FAFFF5', surface: '#FFFFFF', text: '#1A3D1A', muted: '#4A6B4A', green: '#22C55E', forest: '#166534', lime: '#84CC16', cream: '#ECFCCB' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Outfit", "Poppins", sans-serif' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: '#D1FAE5', backgroundColor: colors.surface }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Leaf size={24} style={{ color: colors.green }} />
                        <span className="text-lg font-bold">EcoLife</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Mission', 'Products', 'Impact'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-green-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 font-semibold text-white rounded-full" style={{ backgroundColor: colors.green }}>Join Us</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: '#D1FAE5', backgroundColor: colors.bg }}>
                        {['Mission', 'Products', 'Impact'].map((item) => (<div key={item} className="py-2 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 font-semibold text-white rounded-full" style={{ backgroundColor: colors.green }}>Join Us</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full" style={{ backgroundColor: colors.cream }}>
                        <Recycle size={14} style={{ color: colors.green }} />
                        <span className="text-sm font-medium" style={{ color: colors.forest }}>100% Sustainable</span>
                    </div>
                    <h1 className="mb-4 font-bold leading-tight" style={{ fontSize: isMobile ? '36px' : '56px', color: colors.forest }}>
                        For a <span style={{ color: colors.green }}>Greener</span> Future
                    </h1>
                    <p className="max-w-lg mx-auto mb-8" style={{ color: colors.muted }}>Fresh eco-friendly aesthetics with vibrant greens and sustainability vibes.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 font-semibold text-white rounded-full flex items-center justify-center gap-2" style={{ backgroundColor: colors.green }}>Get Started <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 font-semibold rounded-full border-2" style={{ borderColor: colors.green, color: colors.green }}>Learn More</button>
                    </div>
                    {/* Eco Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Leaf, TreePine, Recycle, Sun].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.cream }}><Icon size={24} style={{ color: colors.green }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.forest }}>Our Impact</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Leaf, title: 'Carbon Neutral' }, { icon: Recycle, title: 'Zero Waste' }, { icon: TreePine, title: 'Reforestation' }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl text-center" style={{ backgroundColor: colors.bg }}>
                                <item.icon size={36} className="mx-auto mb-4" style={{ color: colors.green }} />
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Sustainable practices.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.forest }}>Plans</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Seed', price: '$19', hot: false }, { name: 'Tree', price: '$49', hot: true }, { name: 'Forest', price: '$99', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.green : '#D1FAE5'}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: colors.green }}>🌱 Popular</div>}
                                <h3 className="font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: colors.green }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All features', 'Support', 'Impact report'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.green }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 font-semibold rounded-full" style={{ backgroundColor: plan.hot ? colors.green : 'transparent', color: plan.hot ? 'white' : colors.green, border: plan.hot ? 'none' : `1px solid ${colors.green}` }}>Choose Plan</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-10" style={{ color: colors.forest }}>FAQ</h2>
                    <div className="space-y-3">
                        {[{ q: 'What is Eco Green style?', a: 'Fresh sustainable aesthetics with vibrant green energy.' },
                        { q: 'Real impact?', a: 'Yes, contributions support reforestation projects.' },
                        { q: 'Customizable?', a: 'Full control over eco-branding.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.green, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 rounded-2xl text-center" style={{ backgroundColor: colors.green }}>
                    <Leaf size={40} className="mx-auto mb-4" style={{ color: 'white' }} />
                    <h2 className="text-2xl font-bold mb-4 text-white">Join the Green Movement</h2>
                    <button className="px-10 py-3 font-semibold rounded-full" style={{ backgroundColor: 'white', color: colors.forest }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: '#D1FAE5', padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-bold"><Leaf size={20} style={{ color: colors.green }} /> EcoLife</div>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Eco Green</span>
                </div>
            </footer>
        </div>
    );
};
