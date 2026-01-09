import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Shirt, Scissors, Award, Star } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S62DenimPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#1A2A3A', surface: '#253545', text: '#E8F0F8', muted: '#8BA4BC', indigo: '#3D5A80', blue: '#4A90D9', light: '#98C1D9', copper: '#B87333' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Work Sans", "Helvetica Neue", sans-serif' }}>
            {/* Denim Weave Texture */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b-2" style={{ borderColor: colors.indigo, backgroundColor: `${colors.bg}F0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Shirt size={28} style={{ color: colors.blue }} />
                        <span className="text-xl font-semibold tracking-wide">DENIM CO.</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Fabric', 'Stitch', 'Wash'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-blue-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 font-semibold text-white rounded" style={{ backgroundColor: colors.indigo }}>Shop</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t-2" style={{ borderColor: colors.indigo, backgroundColor: colors.surface }}>
                        {['Fabric', 'Stitch', 'Wash'].map((item) => (<div key={item} className="py-3 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 font-semibold text-white rounded" style={{ backgroundColor: colors.indigo }}>Shop</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border-2" style={{ borderColor: colors.blue }}>
                        <Scissors size={18} style={{ color: colors.blue }} />
                        <span className="font-medium" style={{ color: colors.muted }}>Authentic Workwear</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '44px' : '80px' }}>
                        True <span style={{ color: colors.blue }}>Blue</span> Spirit
                    </h1>
                    <p className="max-w-lg mx-auto mb-10" style={{ color: colors.muted }}>Indigo vibes, stitched details, and the rugged beauty of classic denim aesthetics.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 font-semibold text-white rounded flex items-center justify-center gap-2" style={{ backgroundColor: colors.indigo }}>Explore <ArrowRight size={18} /></button>
                        <button className="px-10 py-4 font-semibold rounded border-2" style={{ borderColor: colors.blue, color: colors.blue }}>View Collection</button>
                    </div>
                    {/* Denim Icons */}
                    <div className="mt-12 flex justify-center gap-6">
                        {[Shirt, Scissors, Award, Star].map((Icon, i) => (
                            <div key={i} className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.surface, border: `2px solid ${colors.indigo}` }}><Icon size={28} style={{ color: colors.blue }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.blue }}>Features</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Shirt, title: 'Indigo Palette' }, { icon: Scissors, title: 'Stitch Details' }, { icon: Award, title: 'Rugged Feel' }].map((item) => (
                            <div key={item.title} className="p-6 rounded-lg" style={{ backgroundColor: colors.bg, border: `2px solid ${colors.indigo}` }}>
                                <item.icon size={32} className="mb-4" style={{ color: colors.blue }} />
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Denim-inspired design.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.blue }}>Pricing</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Raw', price: '$29', hot: false }, { name: 'Selvedge', price: '$69', hot: true }, { name: 'Vintage', price: '$129', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-lg" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.blue : colors.indigo}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: colors.blue }}>Popular</div>}
                                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: colors.blue }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All textures', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.blue }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 font-semibold rounded" style={{ backgroundColor: plan.hot ? colors.indigo : 'transparent', color: plan.hot ? 'white' : colors.blue, border: plan.hot ? 'none' : `2px solid ${colors.blue}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.blue }}>FAQ</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Denim style?', a: 'Indigo aesthetics with stitching details and rugged workwear vibes.' },
                        { q: 'Customizable?', a: 'Full control over wash effects and colors.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-lg overflow-hidden" style={{ backgroundColor: colors.bg, border: `2px solid ${colors.indigo}` }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.blue, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded-lg text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${colors.blue}` }}>
                    <Shirt size={48} className="mx-auto mb-6" style={{ color: colors.blue }} />
                    <h2 className="text-3xl font-bold mb-6">Wear the Style</h2>
                    <button className="px-12 py-4 font-semibold text-white rounded" style={{ backgroundColor: colors.indigo }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-2" style={{ borderColor: colors.indigo, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-semibold"><Shirt size={20} style={{ color: colors.blue }} /> DENIM CO.</div>
                    <span style={{ color: colors.muted }}>© 2025 Denim Design</span>
                </div>
            </footer>
        </div>
    );
};
