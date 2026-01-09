import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Scissors, Layers, Newspaper, Pin } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S50CollagePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#F5E6D3', surface: '#FFFEF9', text: '#2C2416', muted: '#7A6F5D', red: '#C41E3A', blue: '#2E5090', yellow: '#E8B923', green: '#4A6741' };

    return (
        <div className="min-h-screen relative" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Libre Baskerville", "Times New Roman", serif' }}>
            {/* Paper Texture */}
            <div className="fixed inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50" style={{ backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6 border-b-2" style={{ borderColor: colors.text }}>
                    <div className="flex items-center gap-3">
                        <Scissors size={24} style={{ color: colors.red }} />
                        <span className="text-xl font-bold tracking-wider">COLLAGE</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Cut', 'Paste', 'Create'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-red-700" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 font-bold text-white" style={{ backgroundColor: colors.red }}>Start</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-b-2" style={{ borderColor: colors.text, backgroundColor: colors.surface }}>
                        {['Cut', 'Paste', 'Create'].map((item) => (<div key={item} className="py-3 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 font-bold text-white" style={{ backgroundColor: colors.red }}>Start</button>
                    </div>
                )}
            </header>

            {/* Hero - Collage Style */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Main Paper */}
                        <div className="relative p-8 transform -rotate-1" style={{ backgroundColor: colors.surface, boxShadow: '4px 4px 20px rgba(0,0,0,0.15)' }}>
                            {/* Tape */}
                            <div className="absolute -top-3 left-1/4 w-20 h-6 transform rotate-3" style={{ backgroundColor: colors.yellow, opacity: 0.8 }} />
                            <div className="absolute -top-2 right-1/3 w-16 h-6 transform -rotate-2" style={{ backgroundColor: colors.yellow, opacity: 0.8 }} />

                            <div className="inline-block mb-4 px-4 py-1 transform rotate-2" style={{ backgroundColor: colors.blue, color: 'white' }}>
                                <span className="text-sm font-bold tracking-widest">CUT & PASTE</span>
                            </div>
                            <h1 className="mb-4 font-bold leading-tight" style={{ fontSize: isMobile ? '36px' : '64px' }}>Mixed <span style={{ color: colors.red }}>Media</span><br />Aesthetics</h1>
                            <p className="max-w-md mb-6" style={{ color: colors.muted }}>Layered paper cutouts, vintage clippings, and eclectic compositions. Create chaotic beauty.</p>
                            <div className="flex gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                                <button className="px-8 py-3 font-bold text-white flex items-center gap-2" style={{ backgroundColor: colors.red }}>Start Cutting <ArrowRight size={18} /></button>
                                <button className="px-8 py-3 font-bold border-2" style={{ borderColor: colors.text }}>View Gallery</button>
                            </div>
                        </div>
                        {/* Floating Cut-outs */}
                        <div className="absolute -right-4 top-10 p-4 transform rotate-6" style={{ backgroundColor: colors.surface, boxShadow: '3px 3px 15px rgba(0,0,0,0.1)' }}>
                            <Pin size={20} className="absolute -top-2 left-1/2 transform -translate-x-1/2" style={{ color: colors.red }} />
                            <div className="w-24 h-16" style={{ backgroundColor: colors.blue, opacity: 0.8 }} />
                        </div>
                        <div className="absolute -left-8 bottom-10 p-3 transform -rotate-3" style={{ backgroundColor: colors.yellow, boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
                            <span className="font-bold text-sm" style={{ color: colors.text }}>★ STYLE</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Elements</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Scissors, title: 'Cut-outs', color: colors.red }, { icon: Layers, title: 'Layers', color: colors.blue }, { icon: Newspaper, title: 'Clippings', color: colors.green }].map((item, i) => (
                            <div key={item.title} className="p-6 transform" style={{ backgroundColor: colors.surface, boxShadow: '4px 4px 15px rgba(0,0,0,0.1)', transform: `rotate(${(i - 1) * 2}deg)` }}>
                                <item.icon size={32} className="mb-4" style={{ color: item.color }} />
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Mixed media aesthetics.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Collections</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Scrapbook', price: '$29', hot: false }, { name: 'Zine', price: '$69', hot: true }, { name: 'Archive', price: '$129', hot: false }].map((plan, i) => (
                            <div key={plan.name} className="relative p-6 transform" style={{ backgroundColor: colors.bg, boxShadow: '4px 4px 15px rgba(0,0,0,0.1)', transform: `rotate(${(i - 1) * -1}deg)`, border: plan.hot ? `3px solid ${colors.red}` : 'none' }}>
                                {plan.hot && <div className="absolute -top-3 left-4 px-3 py-1 font-bold text-xs text-white" style={{ backgroundColor: colors.red }}>★ FEATURED</div>}
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: colors.red }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All assets', 'Templates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: colors.muted }}><Check size={14} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 font-bold" style={{ backgroundColor: plan.hot ? colors.red : 'transparent', color: plan.hot ? 'white' : colors.text, border: plan.hot ? 'none' : `2px solid ${colors.text}` }}>Get It</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Questions</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is collage style?', a: 'Mixed media aesthetics with layered paper, cutouts, and vintage elements.' },
                        { q: 'Is it customizable?', a: 'Yes, full control over colors, textures, and layouts.' },
                        { q: 'Works on mobile?', a: 'Responsive design for all screens.' }
                        ].map((item, i) => (
                            <div key={i} className="overflow-hidden" style={{ backgroundColor: colors.surface, boxShadow: '3px 3px 10px rgba(0,0,0,0.1)' }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.red, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-10 text-center transform -rotate-1" style={{ backgroundColor: colors.surface, boxShadow: '6px 6px 20px rgba(0,0,0,0.15)' }}>
                    {/* Tape */}
                    <div className="absolute -top-2 left-1/4 w-16 h-5" style={{ backgroundColor: colors.yellow, opacity: 0.8 }} />
                    <Scissors size={40} className="mx-auto mb-4" style={{ color: colors.red }} />
                    <h2 className="text-3xl font-bold mb-4">Start Your Collage</h2>
                    <button className="px-10 py-4 font-bold text-white" style={{ backgroundColor: colors.red }}>Create Now</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-2" style={{ borderColor: colors.text, padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Scissors size={18} style={{ color: colors.red }} /><span className="font-bold">COLLAGE</span></div>
                    <span style={{ color: colors.muted }}>© 2025 Collage Arts</span>
                </div>
            </footer>
        </div>
    );
};
