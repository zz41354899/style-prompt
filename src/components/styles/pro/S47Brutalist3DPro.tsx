import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Boxes, Layers, Cuboid, Grip } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S47Brutalist3DPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#D4D4D4', surface: '#E8E8E8', text: '#1A1A1A', accent: '#000000', red: '#FF3333', blue: '#0066FF' };
    const shadow = '8px 8px 0px #000';

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Space Grotesk", "Arial Black", sans-serif' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b-4" style={{ borderColor: colors.accent, backgroundColor: colors.surface }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Boxes size={28} />
                        <span className="text-2xl font-black tracking-tight">BRUTAL3D</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['BLOCKS', 'SHAPES', 'DEPTH'].map((item) => (<span key={item} className="font-bold cursor-pointer hover:text-red-500">{item}</span>))}
                            <button className="px-6 py-3 font-black text-white" style={{ backgroundColor: colors.accent, boxShadow: shadow }}>BUILD</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t-4" style={{ borderColor: colors.accent, backgroundColor: colors.surface }}>
                        {['BLOCKS', 'SHAPES', 'DEPTH'].map((item) => (<div key={item} className="py-3 font-bold">{item}</div>))}
                        <button className="w-full mt-4 py-3 font-black text-white" style={{ backgroundColor: colors.accent }}>BUILD</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-8" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <div className="flex-1">
                            <div className="inline-block mb-6 px-4 py-2 font-bold" style={{ backgroundColor: colors.red, color: 'white' }}>BRUTALIST 3D</div>
                            <h1 className="mb-6 font-black leading-none" style={{ fontSize: isMobile ? '48px' : '80px' }}>RAW<br />CONCRETE<br />POWER</h1>
                            <p className="mb-8 text-lg" style={{ maxWidth: '400px' }}>Unapologetic design with depth. Bold shadows and geometric precision.</p>
                            <div className="flex gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                                <button className="px-8 py-4 font-black text-white flex items-center gap-2" style={{ backgroundColor: colors.accent, boxShadow: shadow }}>EXPLORE <ArrowRight size={20} /></button>
                                <button className="px-8 py-4 font-black border-4" style={{ borderColor: colors.accent }}>DOCS</button>
                            </div>
                        </div>
                        <div className="relative">
                            {/* 3D Block Stack */}
                            <div className="relative" style={{ width: 200, height: 240 }}>
                                <div className="absolute bottom-0 left-0 w-32 h-32" style={{ backgroundColor: colors.blue, boxShadow: shadow }} />
                                <div className="absolute bottom-16 left-8 w-32 h-32" style={{ backgroundColor: colors.red, boxShadow: shadow }} />
                                <div className="absolute bottom-32 left-16 w-32 h-32" style={{ backgroundColor: colors.accent, boxShadow: shadow }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-black mb-12">FEATURES</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Boxes, title: 'SOLID BLOCKS' }, { icon: Layers, title: 'STACKED DEPTH' }, { icon: Cuboid, title: '3D SHADOWS' }].map((item) => (
                            <div key={item.title} className="p-6 border-4" style={{ borderColor: colors.accent, backgroundColor: colors.bg, boxShadow: shadow }}>
                                <item.icon size={40} className="mb-6" />
                                <h3 className="text-xl font-black mb-2">{item.title}</h3>
                                <p>Raw design with unapologetic depth.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-black mb-12">PRICING</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'BASIC', price: '$39', hot: false }, { name: 'PRO', price: '$99', hot: true }, { name: 'STUDIO', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 border-4" style={{ borderColor: colors.accent, backgroundColor: plan.hot ? colors.accent : colors.surface, color: plan.hot ? 'white' : colors.text, boxShadow: shadow }}>
                                {plan.hot && <div className="absolute -top-4 left-4 px-4 py-1 font-black text-black" style={{ backgroundColor: colors.red }}>★ HOT</div>}
                                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                                <div className="text-5xl font-black mb-6">{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All blocks', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 font-bold"><Check size={18} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 font-black" style={{ backgroundColor: plan.hot ? 'white' : colors.accent, color: plan.hot ? colors.accent : 'white' }}>SELECT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-black mb-12">FAQ</h2>
                    <div className="space-y-4">
                        {[{ q: 'WHAT IS BRUTALIST 3D?', a: 'Raw concrete aesthetics with bold shadows and geometric forms.' },
                        { q: 'IS IT RESPONSIVE?', a: 'Yes, all components adapt to screen sizes.' },
                        { q: 'CUSTOMIZABLE?', a: 'Full color and shadow customization.' }
                        ].map((item, i) => (
                            <div key={i} className="border-4" style={{ borderColor: colors.accent, backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-black">{item.q}</span>
                                    <ChevronDown size={24} style={{ transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="p-4 pt-0">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 border-4" style={{ borderColor: colors.accent, backgroundColor: colors.red, boxShadow: shadow }}>
                    <div className="flex items-center justify-between" style={{ flexDirection: isMobile ? 'column' : 'row', gap: 24 }}>
                        <div>
                            <Grip size={48} className="mb-4 text-white" />
                            <h2 className="text-4xl font-black text-white">START BUILDING</h2>
                        </div>
                        <button className="px-12 py-4 font-black" style={{ backgroundColor: colors.accent, color: 'white', boxShadow: shadow }}>GET STARTED</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-4" style={{ borderColor: colors.accent, padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="font-black text-xl">BRUTAL3D</span>
                    <span>© 2025 BRUTAL DESIGN</span>
                </div>
            </footer>
        </div>
    );
};
