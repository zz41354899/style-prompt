import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Heart, Sparkles, Coffee, Home } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S66KnitwearPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#F5F0EB', surface: '#FFFFFF', text: '#4A4036', muted: '#8B7E6E', rust: '#C45A3B', cream: '#F0E6D3', sage: '#7D9B76', burgundy: '#8B2942' };
    const knitPattern = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 Q5,2.5 10,0 Q15,2.5 20,0 L20,10 Q15,12.5 10,10 Q5,12.5 0,10 Z' fill='none' stroke='%23C45A3B' stroke-width='0.3' opacity='0.2'/%3E%3C/svg%3E")`;

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Nunito", "Quicksand", sans-serif' }}>
            {/* Knit Pattern Background */}
            <div className="fixed inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: knitPattern, backgroundSize: '40px 20px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: `${colors.surface}E0` }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6 border-b-2" style={{ borderColor: colors.rust }}>
                    <div className="flex items-center gap-3">
                        <Heart size={24} style={{ color: colors.rust }} />
                        <span className="text-xl font-semibold">Cozy Knit</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Yarn', 'Pattern', 'Warmth'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-orange-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 font-semibold text-white rounded-full" style={{ backgroundColor: colors.rust }}>Create</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-b-2" style={{ borderColor: colors.rust, backgroundColor: colors.surface }}>
                        {['Yarn', 'Pattern', 'Warmth'].map((item) => (<div key={item} className="py-3 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 font-semibold text-white rounded-full" style={{ backgroundColor: colors.rust }}>Create</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border-2" style={{ borderColor: colors.rust }}>
                        <Coffee size={18} style={{ color: colors.rust }} />
                        <span className="font-medium" style={{ color: colors.muted }}>Warm & Cozy</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '40px' : '72px' }}>
                        <span style={{ color: colors.rust }}>Handcrafted</span> Comfort
                    </h1>
                    <p className="max-w-lg mx-auto mb-10" style={{ color: colors.muted }}>Cozy knitwear textures with warm autumn tones and handmade charm.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 font-semibold text-white rounded-full flex items-center justify-center gap-2" style={{ backgroundColor: colors.rust }}>Explore <ArrowRight size={18} /></button>
                        <button className="px-10 py-4 font-semibold rounded-full border-2" style={{ borderColor: colors.sage, color: colors.sage }}>View Patterns</button>
                    </div>
                    {/* Yarn Colors */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[colors.rust, colors.sage, colors.burgundy, colors.cream].map((color, i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white" style={{ backgroundColor: color, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.rust }}>Crafted Features</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Heart, title: 'Cozy Textures', color: colors.rust }, { icon: Sparkles, title: 'Handmade Feel', color: colors.sage }, { icon: Home, title: 'Warm Palette', color: colors.burgundy }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl text-center" style={{ backgroundColor: colors.bg, border: `2px solid ${item.color}40` }}>
                                <item.icon size={40} className="mx-auto mb-4" style={{ color: item.color }} />
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Knitwear-inspired design.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.rust }}>Patterns</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Scarf', price: '$29', hot: false }, { name: 'Sweater', price: '$69', hot: true }, { name: 'Blanket', price: '$129', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.rust : colors.muted + '40'}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: colors.rust }}>♥ Popular</div>}
                                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: colors.rust }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All patterns', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.sage }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 font-semibold rounded-full" style={{ backgroundColor: plan.hot ? colors.rust : 'transparent', color: plan.hot ? 'white' : colors.rust, border: plan.hot ? 'none' : `2px solid ${colors.rust}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.rust }}>Questions</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Knitwear style?', a: 'Cozy textures with warm autumn tones and handcrafted charm.' },
                        { q: 'Customizable?', a: 'Full control over patterns and colors.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.rust}40` }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.rust, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded-2xl text-center" style={{ backgroundColor: colors.cream, border: `2px solid ${colors.rust}` }}>
                    <Heart size={48} className="mx-auto mb-6" style={{ color: colors.rust }} />
                    <h2 className="text-3xl font-bold mb-6">Get Cozy</h2>
                    <button className="px-12 py-4 font-semibold text-white rounded-full" style={{ backgroundColor: colors.rust }}>Start Crafting</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-2" style={{ borderColor: colors.rust, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-semibold"><Heart size={20} style={{ color: colors.rust }} /> Cozy Knit</div>
                    <span style={{ color: colors.muted }}>© 2025 Knitwear Design</span>
                </div>
            </footer>
        </div>
    );
};
