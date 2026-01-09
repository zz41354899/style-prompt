import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Palette, Circle, Sparkles, Sun } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S99MaterialYouPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FFFBFE', surface: '#FEF7FF', text: '#1D1B20', muted: '#49454F', primary: '#6750A4', secondary: '#958DA5', tertiary: '#B58392', container: '#EADDFF', onContainer: '#21005D', outline: '#79747E' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Google Sans", "Roboto", sans-serif' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50" style={{ backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.container }}>
                            <Palette size={18} style={{ color: colors.primary }} />
                        </div>
                        <span className="text-lg font-medium">Material</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Home', 'Explore', 'Settings'].map((item) => (<span key={item} className="cursor-pointer" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2.5 rounded-full font-medium text-white" style={{ backgroundColor: colors.primary }}>Get App</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.outline + '30', backgroundColor: colors.surface }}>
                        {['Home', 'Explore', 'Settings'].map((item) => (<div key={item} className="py-3" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2.5 rounded-full font-medium text-white" style={{ backgroundColor: colors.primary }}>Get App</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full" style={{ backgroundColor: colors.container }}>
                        <Sun size={16} style={{ color: colors.primary }} />
                        <span className="font-medium" style={{ color: colors.onContainer }}>Dynamic Color</span>
                    </div>
                    <h1 className="mb-6 font-medium leading-tight" style={{ fontSize: isMobile ? '36px' : '64px' }}>
                        Material You Design
                    </h1>
                    <p className="max-w-md mx-auto mb-10" style={{ color: colors.muted }}>Google's Material You aesthetics with dynamic colors, rounded shapes, and personalized feel.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 rounded-full font-medium text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.primary }}>Get Started <ArrowRight size={18} /></button>
                        <button className="px-8 py-3 rounded-full font-medium" style={{ backgroundColor: colors.container, color: colors.primary }}>Learn More</button>
                    </div>
                    {/* Color Pills */}
                    <div className="mt-12 flex justify-center gap-3">
                        {[colors.primary, colors.secondary, colors.tertiary, '#E8DEF8', '#FFD8E4'].map((color, i) => (
                            <div key={i} className="w-12 h-12 rounded-full" style={{ backgroundColor: color }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-medium mb-12">Features</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Palette, title: 'Dynamic Color' }, { icon: Circle, title: 'Rounded' }, { icon: Sparkles, title: 'Personal' }].map((item) => (
                            <div key={item.title} className="p-6 rounded-3xl" style={{ backgroundColor: colors.container }}>
                                <item.icon size={28} className="mb-4" style={{ color: colors.primary }} />
                                <h3 className="font-medium mb-2" style={{ color: colors.onContainer }}>{item.title}</h3>
                                <p style={{ color: colors.muted }}>Material You ready.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl font-medium mb-12">Plans</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Free', price: '$0', hot: false }, { name: 'Pro', price: '$8', hot: true }, { name: 'Team', price: '$16', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-3xl text-center" style={{ backgroundColor: plan.hot ? colors.container : colors.surface, border: `1px solid ${plan.hot ? 'transparent' : colors.outline + '30'}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: colors.primary }}>Popular</div>}
                                <h3 className="font-medium mb-2">{plan.name}</h3>
                                <div className="text-4xl font-medium mb-4" style={{ color: colors.primary }}>{plan.price}<span className="text-sm" style={{ color: colors.muted }}>/mo</span></div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All themes', 'Sync', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.primary }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2.5 rounded-full font-medium" style={{ backgroundColor: plan.hot ? colors.primary : 'transparent', color: plan.hot ? 'white' : colors.primary, border: plan.hot ? 'none' : `1px solid ${colors.outline}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl font-medium mb-12">FAQ</h2>
                    <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.outline}30` }}>
                        {[{ q: 'What is Material You?', a: 'Google\'s design system with dynamic colors that adapt to your wallpaper.' },
                        { q: 'Customizable?', a: 'Full control over accent colors and themes.' },
                        { q: 'Works everywhere?', a: 'All platforms supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b last:border-b-0" style={{ borderColor: colors.outline + '30' }}>
                                <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.muted, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 rounded-3xl text-center" style={{ backgroundColor: colors.container }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.primary }}>
                        <Palette size={28} color="white" />
                    </div>
                    <h2 className="text-2xl font-medium mb-6" style={{ color: colors.onContainer }}>Make it yours</h2>
                    <button className="px-10 py-3 rounded-full font-medium text-white" style={{ backgroundColor: colors.primary }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Palette size={18} style={{ color: colors.primary }} /> Material</div>
                    <span style={{ color: colors.muted }}>© 2025 Material You</span>
                </div>
            </footer>
        </div>
    );
};
