import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Sun, Wind, Mountain, Tent } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S57DesertPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#F5E6D3', surface: '#FFFBF5', text: '#5D4E37', muted: '#8B7355', orange: '#E07B39', terracotta: '#C2703B', sand: '#D4C4A8', gold: '#D4A853' };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Josefin Sans", "Helvetica Neue", sans-serif' }}>
            {/* Sand Dune Pattern */}
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23D4A853' d='M0,256L60,234.7C120,213,240,171,360,165.3C480,160,600,192,720,192C840,192,960,160,1080,149.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'/%3E%3C/svg%3E")`, backgroundPosition: 'bottom', backgroundRepeat: 'repeat-x', backgroundSize: '100% 200px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: `${colors.surface}F0` }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6 border-b" style={{ borderColor: colors.sand }}>
                    <div className="flex items-center gap-3">
                        <Sun size={28} style={{ color: colors.orange }} />
                        <span className="text-xl font-semibold tracking-wide">Sahara</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Dunes', 'Oasis', 'Journey'].map((item) => (<span key={item} className="font-medium cursor-pointer hover:text-orange-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 rounded-lg font-semibold text-white" style={{ backgroundColor: colors.orange }}>Explore</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-b" style={{ borderColor: colors.sand, backgroundColor: colors.surface }}>
                        {['Dunes', 'Oasis', 'Journey'].map((item) => (<div key={item} className="py-3 font-medium" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: colors.orange }}>Explore</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-lg border" style={{ borderColor: colors.orange }}>
                        <Wind size={18} style={{ color: colors.orange }} />
                        <span className="font-medium" style={{ color: colors.muted }}>Arid Elegance</span>
                    </div>
                    <h1 className="mb-6 font-bold leading-tight" style={{ fontSize: isMobile ? '40px' : '72px' }}>
                        Golden <span style={{ color: colors.orange }}>Sands</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-10" style={{ color: colors.muted }}>Warm terracotta tones, sun-baked palettes, and the serene beauty of desert landscapes.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2" style={{ backgroundColor: colors.orange }}>Begin Journey <ArrowRight size={18} /></button>
                        <button className="px-10 py-4 rounded-lg font-semibold border-2" style={{ borderColor: colors.orange, color: colors.orange }}>View Gallery</button>
                    </div>
                    {/* Desert Icons */}
                    <div className="mt-12 flex justify-center gap-6">
                        {[Sun, Wind, Mountain, Tent].map((Icon, i) => (
                            <div key={i} className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${colors.sand}80`, border: `1px solid ${colors.orange}40` }}><Icon size={28} style={{ color: colors.orange }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.orange }}>Features</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Sun, title: 'Warm Palette' }, { icon: Wind, title: 'Sand Textures' }, { icon: Mountain, title: 'Dune Shapes' }].map((item) => (
                            <div key={item.title} className="p-6 rounded-xl" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.sand}` }}>
                                <item.icon size={32} className="mb-4" style={{ color: colors.orange }} />
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p style={{ color: colors.muted }}>Desert-inspired design.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.terracotta }}>Pricing</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Oasis', price: '$29', hot: false }, { name: 'Caravan', price: '$69', hot: true }, { name: 'Mirage', price: '$139', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded-xl" style={{ backgroundColor: colors.surface, border: `2px solid ${plan.hot ? colors.orange : colors.sand}` }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: colors.orange }}>Popular</div>}
                                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-4" style={{ color: colors.orange }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6">
                                    {['All components', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={14} style={{ color: colors.orange }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 rounded-lg font-semibold" style={{ backgroundColor: plan.hot ? colors.orange : 'transparent', color: plan.hot ? 'white' : colors.orange, border: plan.hot ? 'none' : `2px solid ${colors.orange}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl font-bold mb-12" style={{ color: colors.orange }}>FAQ</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Desert style?', a: 'Warm, sun-baked aesthetics with terracotta and sand tones.' },
                        { q: 'Customizable?', a: 'Full control over colors and textures.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.sand}` }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium">{item.q}</span>
                                    <ChevronDown size={18} style={{ color: colors.orange, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded-xl text-center" style={{ backgroundColor: colors.surface, border: `2px solid ${colors.orange}` }}>
                    <Sun size={48} className="mx-auto mb-6" style={{ color: colors.orange }} />
                    <h2 className="text-3xl font-bold mb-6">Cross the Dunes</h2>
                    <button className="px-12 py-4 rounded-lg font-semibold text-white" style={{ backgroundColor: colors.orange }}>Start Journey</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.sand, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Sun size={20} style={{ color: colors.orange }} /><span className="font-semibold">Sahara</span></div>
                    <span style={{ color: colors.muted }}>© 2025 Desert Design</span>
                </div>
            </footer>
        </div>
    );
};
