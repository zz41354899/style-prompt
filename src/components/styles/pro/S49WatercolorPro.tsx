import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Palette, Brush, Droplet, Flower2 } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S49WatercolorPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#FDF8F3', surface: '#FFFFFF', text: '#3D3D3D', muted: '#7A7A7A', blue: '#6FA8DC', pink: '#EA9999', green: '#93C47D', yellow: '#FFD966' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Cormorant Garamond", "Georgia", serif' }}>
            {/* Watercolor Texture Overlay */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ background: `radial-gradient(ellipse at 20% 20%, ${colors.blue}40, transparent 50%), radial-gradient(ellipse at 80% 80%, ${colors.pink}40, transparent 50%), radial-gradient(ellipse at 50% 50%, ${colors.green}30, transparent 60%)` }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: `${colors.surface}F0` }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Palette size={28} style={{ color: colors.blue }} />
                        <span className="text-2xl font-light italic tracking-wide">Aquarelle</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Gallery', 'Studio', 'About'].map((item) => (<span key={item} className="italic cursor-pointer hover:text-blue-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 rounded-full font-light italic text-white" style={{ backgroundColor: colors.blue }}>Create</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6" style={{ backgroundColor: colors.surface }}>
                        {['Gallery', 'Studio', 'About'].map((item) => (<div key={item} className="py-3 italic" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 rounded-full font-light italic text-white" style={{ backgroundColor: colors.blue }}>Create</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full" style={{ backgroundColor: `${colors.pink}30` }}>
                        <Flower2 size={16} style={{ color: colors.pink }} />
                        <span className="text-sm italic" style={{ color: colors.muted }}>Delicate Artistry</span>
                    </div>
                    <h1 className="mb-6 font-light italic leading-tight" style={{ fontSize: isMobile ? '40px' : '72px' }}>
                        Soft <span style={{ color: colors.blue }}>Washes</span> of Color
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 text-lg italic" style={{ color: colors.muted }}>Ethereal watercolor aesthetics for gentle, artistic interfaces. Let your designs flow like pigment on paper.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 rounded-full font-light italic text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.blue }}>Begin Painting <ArrowRight size={18} /></button>
                        <button className="px-10 py-4 rounded-full font-light italic border" style={{ borderColor: colors.blue, color: colors.blue }}>View Gallery</button>
                    </div>
                    {/* Watercolor Spots */}
                    <div className="mt-16 flex justify-center gap-8">
                        {[colors.blue, colors.pink, colors.green, colors.yellow].map((color, i) => (
                            <div key={i} className="w-16 h-16 rounded-full opacity-60" style={{ backgroundColor: color, filter: 'blur(4px)', transform: `scale(${0.8 + i * 0.1})` }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl font-light italic mb-12">Artistic Elements</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Palette, title: 'Color Washes', color: colors.blue }, { icon: Brush, title: 'Soft Edges', color: colors.pink }, { icon: Droplet, title: 'Wet Blends', color: colors.green }].map((item) => (
                            <div key={item.title} className="p-6 rounded-3xl text-center" style={{ backgroundColor: `${item.color}15` }}>
                                <item.icon size={40} className="mx-auto mb-4" style={{ color: item.color }} />
                                <h3 className="text-xl font-light italic mb-2">{item.title}</h3>
                                <p className="text-sm italic" style={{ color: colors.muted }}>Delicate watercolor aesthetics.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl font-light italic mb-12">Palettes</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Sketch', price: '$29', color: colors.green, hot: false }, { name: 'Canvas', price: '$79', color: colors.blue, hot: true }, { name: 'Gallery', price: '$149', color: colors.pink, hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-3xl text-center" style={{ backgroundColor: plan.hot ? `${plan.color}20` : colors.surface, border: plan.hot ? `2px solid ${plan.color}` : '1px solid #EEE' }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium italic text-white" style={{ backgroundColor: plan.color }}>Popular</div>}
                                <h3 className="text-2xl font-light italic mb-2">{plan.name}</h3>
                                <div className="text-4xl font-light mb-4" style={{ color: plan.color }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All elements', 'Color palettes', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm italic" style={{ color: colors.muted }}><Check size={14} style={{ color: plan.color }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 rounded-full font-light italic" style={{ backgroundColor: plan.hot ? plan.color : 'transparent', color: plan.hot ? 'white' : plan.color, border: plan.hot ? 'none' : `1px solid ${plan.color}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-4xl font-light italic mb-12">Questions</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is watercolor style?', a: 'Soft, translucent aesthetics inspired by wet-on-wet painting techniques.' },
                        { q: 'Can I customize colors?', a: 'Yes, full palette customization available.' },
                        { q: 'Works on all screens?', a: 'Fully responsive design.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-light italic">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.blue, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5 text-sm italic" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-12 rounded-3xl text-center" style={{ background: `linear-gradient(135deg, ${colors.blue}30, ${colors.pink}30)` }}>
                    <Palette size={48} className="mx-auto mb-6" style={{ color: colors.blue }} />
                    <h2 className="text-4xl font-light italic mb-6">Start Creating</h2>
                    <button className="px-12 py-4 rounded-full font-light italic text-white" style={{ backgroundColor: colors.blue }}>Paint Now</button>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Palette size={20} style={{ color: colors.blue }} /><span className="font-light italic">Aquarelle</span></div>
                    <span className="text-sm italic" style={{ color: colors.muted }}>© 2025 Watercolor Arts</span>
                </div>
            </footer>
        </div>
    );
};
