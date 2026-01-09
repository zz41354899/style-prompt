import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Blocks, Gamepad2, Cpu, Layers } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S45VoxelPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#1A1B26', surface: '#24283B', text: '#C0CAF5', muted: '#565F89', green: '#9ECE6A', blue: '#7AA2F7', pink: '#BB9AF7', yellow: '#E0AF68' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Press Start 2P", "VT323", monospace' }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b-4" style={{ borderColor: colors.green, backgroundColor: colors.bg }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Blocks size={28} style={{ color: colors.green }} />
                        <span className="text-lg">VOXEL_UI</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['BUILD', 'PLAY', 'CRAFT'].map((item) => (<span key={item} className="text-xs cursor-pointer hover:text-green-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 text-xs text-black" style={{ backgroundColor: colors.green }}>START</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t-4" style={{ borderColor: colors.green, backgroundColor: colors.surface }}>
                        {['BUILD', 'PLAY', 'CRAFT'].map((item) => (<div key={item} className="py-3 text-xs" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 text-xs text-black" style={{ backgroundColor: colors.green }}>START</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border-2" style={{ borderColor: colors.blue }}>
                        <Gamepad2 size={16} style={{ color: colors.blue }} />
                        <span className="text-xs" style={{ color: colors.muted }}>PIXEL PERFECT</span>
                    </div>
                    <h1 className="mb-6 leading-relaxed" style={{ fontSize: isMobile ? '28px' : '48px' }}>BLOCKY<br /><span style={{ color: colors.green }}>DESIGN</span></h1>
                    <p className="max-w-md mx-auto mb-8 text-sm leading-relaxed" style={{ color: colors.muted, fontFamily: '"VT323", monospace' }}>Build your UI block by block. Retro gaming aesthetics for the modern web.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-4 text-sm text-black flex items-center justify-center gap-3" style={{ backgroundColor: colors.green }}>PLAY NOW <ArrowRight size={18} /></button>
                        <button className="px-8 py-4 text-sm border-4" style={{ borderColor: colors.blue, color: colors.blue }}>TUTORIAL</button>
                    </div>
                    {/* Voxel Stack */}
                    <div className="mt-16 flex justify-center items-end gap-1">
                        {[[3, 2, 4], [4, 3, 2, 5], [2, 4, 3]].map((col, ci) => (
                            <div key={ci} className="flex flex-col-reverse gap-1">
                                {col.map((h, ri) => (
                                    <div key={ri} className="w-12" style={{ height: h * 12, backgroundColor: [colors.green, colors.blue, colors.pink, colors.yellow][ri % 4] }} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl mb-12">FEATURES</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Blocks, title: 'BLOCK BASED', color: colors.green }, { icon: Cpu, title: '8-BIT STYLE', color: colors.blue }, { icon: Layers, title: 'STACKABLE', color: colors.pink }].map((item) => (
                            <div key={item.title} className="p-6 border-4" style={{ borderColor: item.color, backgroundColor: colors.bg }}>
                                <item.icon size={32} className="mb-6" style={{ color: item.color }} />
                                <h3 className="text-sm mb-3">{item.title}</h3>
                                <p className="text-xs leading-relaxed" style={{ color: colors.muted, fontFamily: '"VT323", monospace' }}>Retro gaming UI components.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl mb-12">PLAYER <span style={{ color: colors.yellow }}>PASS</span></h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'STARTER', price: '$19', color: colors.green, hot: false }, { name: 'PRO', price: '$49', color: colors.yellow, hot: true }, { name: 'LEGEND', price: '$99', color: colors.pink, hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 border-4" style={{ borderColor: plan.color, backgroundColor: colors.surface }}>
                                {plan.hot && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs text-black" style={{ backgroundColor: plan.color }}>★ BEST</div>}
                                <h3 className="text-lg mb-2">{plan.name}</h3>
                                <div className="text-3xl mb-6" style={{ color: plan.color }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['ALL BLOCKS', 'UPDATES', 'SUPPORT'].map((f) => (<li key={f} className="flex items-center gap-2 text-xs" style={{ color: colors.muted }}><Check size={14} style={{ color: plan.color }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 text-xs" style={{ backgroundColor: plan.hot ? plan.color : 'transparent', color: plan.hot ? 'black' : plan.color, border: plan.hot ? 'none' : `4px solid ${plan.color}` }}>SELECT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-2xl mb-12">HELP</h2>
                    <div className="space-y-4">
                        {[{ q: 'WHAT IS VOXEL STYLE?', a: 'Blocky 3D aesthetics inspired by retro games.' },
                        { q: 'WORKS ON ALL BROWSERS?', a: 'Yes, pure CSS for compatibility.' },
                        { q: 'CUSTOMIZABLE?', a: 'Full color and size customization.' }
                        ].map((item, i) => (
                            <div key={i} className="border-4" style={{ borderColor: colors.blue, backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-sm">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.green, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="p-4 pt-0 text-xs" style={{ color: colors.muted, fontFamily: '"VT323", monospace' }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-10 text-center border-4" style={{ borderColor: colors.green, backgroundColor: colors.surface }}>
                    <Blocks size={48} className="mx-auto mb-6" style={{ color: colors.green }} />
                    <h2 className="text-2xl mb-6">START<br /><span style={{ color: colors.green }}>BUILDING</span></h2>
                    <button className="px-10 py-4 text-sm text-black" style={{ backgroundColor: colors.green }}>PLAY NOW</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-4" style={{ borderColor: colors.green, padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Blocks size={20} style={{ color: colors.green }} /><span className="text-sm">VOXEL_UI</span></div>
                    <span className="text-xs" style={{ color: colors.muted }}>© 2025 VOXEL GAMES</span>
                </div>
            </footer>
        </div>
    );
};
