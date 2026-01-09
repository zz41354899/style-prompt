import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Square, Triangle, Circle, Hexagon } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S74CubistPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#F5F0E6', surface: '#FFFEF8', text: '#2C2A28', muted: '#6B6860', brown: '#8B5A2B', blue: '#4A6FA5', ochre: '#C19A5B', green: '#5B7A5C' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Libre Baskerville", "Georgia", serif' }}>
            {/* Geometric Background */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,5 55,25 45,55 15,55 5,25' fill='none' stroke='%238B5A2B' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: `${colors.surface}E0` }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6 border-b-2" style={{ borderColor: colors.brown }}>
                    <div className="flex items-center gap-3">
                        <Hexagon size={24} style={{ color: colors.brown }} />
                        <span className="text-xl font-semibold">CUBISM</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Form', 'Shape', 'View'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-blue-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 font-semibold text-white" style={{ backgroundColor: colors.brown }}>Explore</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-b-2" style={{ borderColor: colors.brown, backgroundColor: colors.surface }}>
                        {['Form', 'Shape', 'View'].map((item) => (<div key={item} className="py-3 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 font-semibold text-white" style={{ backgroundColor: colors.brown }}>Explore</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 border-2" style={{ borderColor: colors.brown }}>
                        <Triangle size={18} style={{ color: colors.blue }} />
                        <span className="font-medium" style={{ color: colors.muted }}>Multiple Perspectives</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '44px' : '80px' }}>
                        <span style={{ color: colors.brown }}>Fractured</span> <span style={{ color: colors.blue }}>Reality</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 text-lg" style={{ color: colors.muted }}>Geometric fragments, multiple viewpoints, and the deconstruction of form.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 font-semibold text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.brown }}>Discover <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 font-semibold border-2" style={{ borderColor: colors.blue, color: colors.blue }}>View Gallery</button>
                    </div>
                    {/* Geometric Shapes */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Square, Triangle, Circle, Hexagon].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 flex items-center justify-center border-2" style={{ borderColor: colors.brown, transform: `rotate(${i * 15}deg)` }}><Icon size={24} style={{ color: [colors.brown, colors.blue, colors.ochre, colors.green][i] }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.brown }}>Elements</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Triangle, title: 'Angular Forms' }, { icon: Hexagon, title: 'Fragmentation' }, { icon: Square, title: 'Multiple Views' }].map((item) => (
                            <div key={item.title} className="p-6 border-2 text-center" style={{ borderColor: colors.brown, backgroundColor: colors.bg }}>
                                <item.icon size={36} className="mx-auto mb-4" style={{ color: colors.blue }} />
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Cubist design principle.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.blue }}>Collections</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Sketch', price: '$49', hot: false }, { name: 'Painting', price: '$99', hot: true }, { name: 'Gallery', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 text-center border-2" style={{ borderColor: plan.hot ? colors.brown : colors.muted, backgroundColor: colors.surface }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold text-white" style={{ backgroundColor: colors.brown }}>★ Featured</div>}
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-5xl font-bold mb-6" style={{ color: colors.brown }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All shapes', 'Patterns', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.blue }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 font-semibold" style={{ backgroundColor: plan.hot ? colors.brown : 'transparent', color: plan.hot ? 'white' : colors.brown, border: plan.hot ? 'none' : `2px solid ${colors.brown}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.brown }}>Questions</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Cubist style?', a: 'Geometric fragments and multiple viewpoints deconstructing form.' },
                        { q: 'Customizable?', a: 'Full control over shapes and color palettes.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="border-2 overflow-hidden" style={{ borderColor: colors.brown, backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-semibold">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.brown, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 text-center border-2" style={{ borderColor: colors.brown, backgroundColor: colors.surface }}>
                    <Hexagon size={48} className="mx-auto mb-6" style={{ color: colors.brown }} />
                    <h2 className="text-3xl font-bold mb-6">See All Angles</h2>
                    <button className="px-12 py-4 font-semibold text-white" style={{ backgroundColor: colors.brown }}>Begin</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-2" style={{ borderColor: colors.brown, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-semibold"><Hexagon size={20} style={{ color: colors.brown }} /> CUBISM</div>
                    <span style={{ color: colors.muted }}>© 2025 Cubist</span>
                </div>
            </footer>
        </div>
    );
};
