import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Box, Layers, ToggleLeft, Volume2, Settings } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S31SkeuomorphicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#C0C0C0', surface: '#E8E8E8', text: '#333333', muted: '#666666', blue: '#4A90D9', green: '#5DA85D' };
    const shadows = { inset: 'inset 2px 2px 5px rgba(0,0,0,0.3), inset -2px -2px 5px rgba(255,255,255,0.8)', raised: '4px 4px 10px rgba(0,0,0,0.3), -2px -2px 8px rgba(255,255,255,0.6)', button: '2px 2px 5px rgba(0,0,0,0.3), -1px -1px 3px rgba(255,255,255,0.5)' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Lucida Grande", "Segoe UI", Tahoma, sans-serif', background: `linear-gradient(180deg, ${colors.surface} 0%, ${colors.bg} 100%)` }}>
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: colors.surface, borderColor: '#AAA', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3 p-2 rounded-lg" style={{ background: 'linear-gradient(145deg, #5A95D8 0%, #3A75B8 100%)', boxShadow: shadows.button }}>
                        <Box size={24} color="white" />
                        <span className="text-lg font-bold text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>SkeuoKit</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Library', 'Showcase', 'Download'].map((item) => (<span key={item} className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer" style={{ boxShadow: shadows.raised, backgroundColor: colors.surface }}>{item}</span>))}
                            <button className="px-6 py-2 rounded-lg font-bold text-white" style={{ background: 'linear-gradient(145deg, #6AA56A 0%, #4A854A 100%)', boxShadow: shadows.button }}>Get Started</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-lg" style={{ boxShadow: shadows.raised, backgroundColor: colors.surface }}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t" style={{ borderColor: '#AAA', backgroundColor: colors.surface }}>
                        {['Library', 'Showcase', 'Download'].map((item) => (<div key={item} className="py-3 text-sm font-medium" style={{ color: colors.text }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 rounded-lg font-bold text-white" style={{ background: 'linear-gradient(145deg, #6AA56A 0%, #4A854A 100%)' }}>Get Started</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 40px' }}>
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-lg" style={{ backgroundColor: colors.surface, boxShadow: shadows.inset }}>
                        <Layers size={20} style={{ color: colors.blue }} />
                        <span className="text-sm font-semibold">Realistic Digital Interfaces</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '40px' : '64px', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>Real-World <span style={{ color: colors.blue }}>Tactility</span></h1>
                    <p className="max-w-2xl mx-auto mb-10" style={{ color: colors.muted }}>Experience the satisfying depth of skeuomorphic design. Real textures, genuine shadows, and tactile buttons that you'll want to click.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2" style={{ background: 'linear-gradient(145deg, #5A95D8 0%, #3A75B8 100%)', boxShadow: shadows.button }}>Explore Library <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 rounded-xl font-bold" style={{ backgroundColor: colors.surface, boxShadow: shadows.raised, color: colors.text }}>View Examples</button>
                    </div>
                    {/* Toggle Demo */}
                    <div className="mt-16 inline-flex items-center gap-8 p-8 rounded-2xl" style={{ backgroundColor: colors.surface, boxShadow: shadows.raised }}>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-8 rounded-full relative" style={{ backgroundColor: '#333', boxShadow: shadows.inset }}><div className="absolute right-1 top-1 w-6 h-6 rounded-full" style={{ background: 'linear-gradient(145deg, #6AA56A 0%, #4A854A 100%)' }} /></div>
                            <span className="text-xs font-bold">ON</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-24 h-6 rounded-full" style={{ backgroundColor: '#ddd', boxShadow: shadows.inset }}><div className="h-full rounded-full w-3/4" style={{ background: 'linear-gradient(145deg, #5A95D8 0%, #3A75B8 100%)' }} /></div>
                            <span className="text-xs font-bold">75%</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 40px' }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center font-bold mb-12" style={{ fontSize: isMobile ? '28px' : '40px' }}>Tactile Components</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: ToggleLeft, title: 'Real Switches' }, { icon: Volume2, title: 'Physical Sliders' }, { icon: Settings, title: 'Textured Knobs' }].map((item) => (
                            <div key={item.title} className="p-8 rounded-2xl text-center" style={{ backgroundColor: colors.surface, boxShadow: shadows.raised }}>
                                <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #5A95D8 0%, #3A75B8 100%)', boxShadow: shadows.button }}><item.icon size={32} color="white" /></div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Realistic interactions that feel natural.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 40px', backgroundColor: '#D5D5D5' }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center font-bold mb-12" style={{ fontSize: isMobile ? '28px' : '40px' }}>Choose Your License</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Personal', price: '$29', hot: false }, { name: 'Commercial', price: '$79', hot: true }, { name: 'Enterprise', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-8 rounded-2xl text-center" style={{ backgroundColor: colors.surface, boxShadow: shadows.raised, border: plan.hot ? `3px solid ${colors.blue}` : 'none' }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-lg text-sm font-bold text-white" style={{ background: 'linear-gradient(145deg, #5A95D8 0%, #3A75B8 100%)' }}>Popular</div>}
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-6" style={{ color: colors.blue }}>{plan.price}</div>
                                <ul className="space-y-3 mb-8 text-left">
                                    {['All components', 'Lifetime updates', 'Premium support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.green }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 rounded-lg font-bold" style={{ background: plan.hot ? 'linear-gradient(145deg, #5A95D8 0%, #3A75B8 100%)' : colors.surface, color: plan.hot ? 'white' : colors.text, boxShadow: shadows.button }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 40px' }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center font-bold mb-12" style={{ fontSize: isMobile ? '28px' : '40px' }}>FAQ</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is skeuomorphic design?', a: 'Skeuomorphic design mimics real-world objects with realistic textures, shadows, and 3D effects.' },
                        { q: 'Is this style still relevant?', a: 'Yes! Skeuomorphism is making a comeback, especially in apps where tactile feedback matters.' },
                        { q: 'Can I customize the textures?', a: 'Absolutely. All textures and materials are fully customizable.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: colors.surface, boxShadow: shadows.raised }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold">{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.blue, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div style={{ padding: '0 20px 20px', color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 40px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded-2xl text-center" style={{ backgroundColor: colors.surface, boxShadow: shadows.raised }}>
                    <Box size={48} className="mx-auto mb-6" style={{ color: colors.blue }} />
                    <h2 className="font-bold mb-4" style={{ fontSize: isMobile ? '28px' : '40px' }}>Ready to Get Tactile?</h2>
                    <button className="px-12 py-4 rounded-xl font-bold text-white" style={{ background: 'linear-gradient(145deg, #5A95D8 0%, #3A75B8 100%)', boxShadow: shadows.button }}>Download SkeuoKit</button>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '40px', backgroundColor: '#AAA', borderTop: '1px solid #888' }}>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2"><Box size={20} style={{ color: colors.blue }} /><span className="font-bold">SkeuoKit</span></div>
                    <span style={{ color: colors.muted }}>© 2025 SkeuoKit. Crafted with texture.</span>
                </div>
            </footer>
        </div>
    );
};
