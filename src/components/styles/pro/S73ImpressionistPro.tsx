import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Palette, Sun, Flower2, Brush } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S73ImpressionistPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#F8F4E8', surface: '#FFFEF5', text: '#3D4D3F', muted: '#7A8A7C', lavender: '#9B8BB8', coral: '#E88B72', blue: '#7BA3C8', yellow: '#E8C547' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Cormorant Garamond", "Georgia", serif' }}>
            {/* Soft Brush Background */}
            <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ background: `radial-gradient(ellipse at 20% 30%, ${colors.lavender}40, transparent 40%), radial-gradient(ellipse at 80% 60%, ${colors.coral}30, transparent 40%), radial-gradient(ellipse at 40% 80%, ${colors.blue}20, transparent 30%)` }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: `${colors.surface}E0` }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6 border-b" style={{ borderColor: colors.lavender + '60' }}>
                    <div className="flex items-center gap-3">
                        <Palette size={24} style={{ color: colors.lavender }} />
                        <span className="text-xl italic">Lumière</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Light', 'Color', 'Motion'].map((item) => (<span key={item} className="italic cursor-pointer hover:text-purple-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 italic text-white rounded-full" style={{ backgroundColor: colors.lavender }}>Explore</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-b" style={{ borderColor: colors.lavender + '60', backgroundColor: colors.surface }}>
                        {['Light', 'Color', 'Motion'].map((item) => (<div key={item} className="py-3 italic" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 italic text-white rounded-full" style={{ backgroundColor: colors.lavender }}>Explore</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border" style={{ borderColor: colors.lavender }}>
                        <Sun size={18} style={{ color: colors.yellow }} />
                        <span className="italic" style={{ color: colors.muted }}>Capturing Light</span>
                    </div>
                    <h1 className="mb-6 font-bold italic leading-tight" style={{ fontSize: isMobile ? '44px' : '80px' }}>
                        <span style={{ color: colors.lavender }}>Impressions</span> of Light
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 text-lg italic" style={{ color: colors.muted }}>Soft brushstrokes, dappled light, and the fleeting beauty of the moment.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 italic text-white rounded-full flex items-center justify-center gap-2" style={{ backgroundColor: colors.lavender }}>Discover <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 italic rounded-full border-2" style={{ borderColor: colors.coral, color: colors.coral }}>View Gallery</button>
                    </div>
                    {/* Color Dabs */}
                    <div className="mt-12 flex justify-center gap-3">
                        {[colors.lavender, colors.coral, colors.blue, colors.yellow].map((color, i) => (
                            <div key={i} className="w-10 h-10 rounded-full" style={{ backgroundColor: color, boxShadow: `0 4px 12px ${color}60` }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold italic mb-12" style={{ color: colors.lavender }}>Technique</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Palette, title: 'Soft Palette', color: colors.lavender }, { icon: Sun, title: 'Light Play', color: colors.yellow }, { icon: Flower2, title: 'Natural Beauty', color: colors.coral }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl text-center" style={{ backgroundColor: colors.bg, border: `1px solid ${item.color}40` }}>
                                <item.icon size={36} className="mx-auto mb-4" style={{ color: item.color }} />
                                <h3 className="text-lg font-bold italic mb-2">{item.title}</h3>
                                <p className="italic" style={{ color: colors.muted }}>Impressionist beauty.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold italic mb-12" style={{ color: colors.coral }}>Collections</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Garden', price: '$49', hot: false }, { name: 'Salon', price: '$99', hot: true }, { name: 'Museum', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.lavender : colors.muted + '40'}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs italic text-white" style={{ backgroundColor: colors.lavender }}>★ Featured</div>}
                                <h3 className="text-2xl font-bold italic mb-2">{plan.name}</h3>
                                <div className="text-5xl font-bold mb-6" style={{ color: colors.lavender }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All brushes', 'Palettes', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 italic" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.coral }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 italic rounded-full" style={{ backgroundColor: plan.hot ? colors.lavender : 'transparent', color: plan.hot ? 'white' : colors.lavender, border: plan.hot ? 'none' : `2px solid ${colors.lavender}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold italic mb-12" style={{ color: colors.lavender }}>Questions</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Impressionist style?', a: 'Soft brushstrokes and dappled light capturing fleeting moments.' },
                        { q: 'Customizable?', a: 'Full control over colors and light effects.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.lavender}40` }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-semibold italic">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.lavender, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5 italic" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${colors.lavender}20, ${colors.coral}10)`, border: `2px solid ${colors.lavender}` }}>
                    <Brush size={48} className="mx-auto mb-6" style={{ color: colors.lavender }} />
                    <h2 className="text-3xl font-bold italic mb-6">Capture the Moment</h2>
                    <button className="px-12 py-4 italic text-white rounded-full" style={{ backgroundColor: colors.lavender }}>Begin</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.lavender + '40', padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 italic"><Palette size={20} style={{ color: colors.lavender }} /> Lumière</div>
                    <span className="italic" style={{ color: colors.muted }}>© 2025 Impressionist</span>
                </div>
            </footer>
        </div>
    );
};
