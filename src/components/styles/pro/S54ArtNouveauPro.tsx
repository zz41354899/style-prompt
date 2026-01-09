import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Flower2, Leaf, Sparkles, Heart } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S54ArtNouveauPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#F5EEE6', surface: '#FFFEF9', text: '#2C3E2D', muted: '#6B7D6B', gold: '#B8860B', green: '#4A7C59', burgundy: '#722F37', cream: '#FFF8DC' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Cormorant Garamond", "Didot", serif' }}>
            {/* Decorative Vine Border */}
            <div className="fixed inset-0 pointer-events-none opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 C60 20 80 30 100 50 C80 70 60 80 50 100 C40 80 20 70 0 50 C20 30 40 20 50 0' fill='none' stroke='%234A7C59' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: '150px 150px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: `${colors.surface}F0` }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6 border-b" style={{ borderColor: colors.gold }}>
                    <div className="flex items-center gap-3">
                        <Flower2 size={28} style={{ color: colors.gold }} />
                        <span className="text-2xl italic">Nouveau</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Flora', 'Motifs', 'Gallery'].map((item) => (<span key={item} className="italic cursor-pointer hover:text-green-700" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 italic text-white rounded-full" style={{ backgroundColor: colors.green }}>Explore</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-b" style={{ borderColor: colors.gold, backgroundColor: colors.surface }}>
                        {['Flora', 'Motifs', 'Gallery'].map((item) => (<div key={item} className="py-3 italic" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 italic text-white rounded-full" style={{ backgroundColor: colors.green }}>Explore</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border" style={{ borderColor: colors.gold }}>
                        <Leaf size={18} style={{ color: colors.green }} />
                        <span className="italic" style={{ color: colors.muted }}>Organic Elegance</span>
                    </div>
                    <h1 className="mb-6 font-bold italic leading-tight" style={{ fontSize: isMobile ? '44px' : '80px', color: colors.text }}>
                        Nature's <span style={{ color: colors.green }}>Whisper</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 text-lg italic" style={{ color: colors.muted }}>Flowing organic lines, botanical motifs, and the timeless elegance of Art Nouveau design.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 italic text-white rounded-full flex items-center justify-center gap-2" style={{ backgroundColor: colors.green }}>Discover <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 italic rounded-full border-2" style={{ borderColor: colors.gold, color: colors.gold }}>View Gallery</button>
                    </div>
                    {/* Decorative Flourish */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Flower2, Leaf, Sparkles, Heart].map((Icon, i) => (
                            <div key={i} className="w-14 h-14 rounded-full flex items-center justify-center border-2" style={{ borderColor: colors.gold }}><Icon size={24} style={{ color: colors.green }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl font-bold italic mb-12" style={{ color: colors.green }}>Artistic Elements</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Flower2, title: 'Floral Motifs' }, { icon: Leaf, title: 'Organic Lines' }, { icon: Sparkles, title: 'Gilded Details' }].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl text-center border" style={{ borderColor: colors.gold, backgroundColor: colors.bg }}>
                                <item.icon size={40} className="mx-auto mb-4" style={{ color: colors.gold }} />
                                <h3 className="text-xl font-bold italic mb-2">{item.title}</h3>
                                <p className="italic" style={{ color: colors.muted }}>Art Nouveau aesthetics.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl font-bold italic mb-12" style={{ color: colors.burgundy }}>Collections</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Blossom', price: '$39', hot: false }, { name: 'Garden', price: '$89', hot: true }, { name: 'Conservatory', price: '$169', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-2xl text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.gold : colors.green}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs italic text-white" style={{ backgroundColor: colors.gold }}>★ Popular</div>}
                                <h3 className="text-2xl font-bold italic mb-2">{plan.name}</h3>
                                <div className="text-5xl font-bold mb-6" style={{ color: colors.green }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All motifs', 'Patterns', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 italic" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.gold }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 italic rounded-full" style={{ backgroundColor: plan.hot ? colors.green : 'transparent', color: plan.hot ? 'white' : colors.green, border: plan.hot ? 'none' : `2px solid ${colors.green}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-4xl font-bold italic mb-12" style={{ color: colors.green }}>Questions</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Art Nouveau?', a: 'A late 19th-century style featuring flowing organic lines and botanical motifs.' },
                        { q: 'Customizable?', a: 'Full control over colors and decorative elements.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.gold}` }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-semibold italic">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.gold, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5 italic" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded-2xl text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${colors.gold}` }}>
                    <Flower2 size={48} className="mx-auto mb-6" style={{ color: colors.gold }} />
                    <h2 className="text-4xl font-bold italic mb-6">Embrace the Beauty</h2>
                    <button className="px-12 py-4 italic text-white rounded-full" style={{ backgroundColor: colors.green }}>Begin Journey</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.gold, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 italic"><Flower2 size={20} style={{ color: colors.gold }} /> Nouveau</div>
                    <span className="italic" style={{ color: colors.muted }}>© 2025 Art Nouveau Studio</span>
                </div>
            </footer>
        </div>
    );
};
