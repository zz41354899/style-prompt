import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Cog, Settings, Gauge, Clock } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S68SteampunkPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#1A1510', surface: '#2A2118', text: '#E8DCC8', muted: '#A89878', brass: '#B8860B', copper: '#B87333', bronze: '#CD7F32', leather: '#8B4513' };
    const gearPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='15' fill='none' stroke='%23B8860B' stroke-width='1' opacity='0.1'/%3E%3Ccircle cx='30' cy='30' r='5' fill='%23B8860B' opacity='0.1'/%3E%3C/svg%3E")`;

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Cinzel", "Times New Roman", serif' }}>
            {/* Gear Pattern Background */}
            <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage: gearPattern, backgroundSize: '60px 60px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b-2" style={{ borderColor: colors.brass, backgroundColor: `${colors.surface}F0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Cog size={28} style={{ color: colors.brass }} />
                        <span className="text-xl tracking-wide">STEAMWORKS</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Gears', 'Engine', 'Clockwork'].map((item) => (<span key={item} className="cursor-pointer hover:text-yellow-600" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-6 py-2 text-white rounded" style={{ backgroundColor: colors.brass }}>Engage</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-6 border-t-2" style={{ borderColor: colors.brass, backgroundColor: colors.surface }}>
                        {['Gears', 'Engine', 'Clockwork'].map((item) => (<div key={item} className="py-3" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-4 py-3 text-white rounded" style={{ backgroundColor: colors.brass }}>Engage</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded border-2" style={{ borderColor: colors.brass }}>
                        <Clock size={18} style={{ color: colors.brass }} />
                        <span style={{ color: colors.muted }}>Victorian Engineering</span>
                    </div>
                    <h1 className="mb-6 leading-tight" style={{ fontSize: isMobile ? '44px' : '80px' }}>
                        <span style={{ color: colors.brass }}>Steam</span> & <span style={{ color: colors.copper }}>Brass</span>
                    </h1>
                    <p className="max-w-lg mx-auto mb-10 font-sans" style={{ color: colors.muted }}>Victorian-era industrial aesthetics with brass gears and steam-powered elegance.</p>
                    <div className="flex gap-6 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-10 py-4 text-white rounded flex items-center justify-center gap-2" style={{ backgroundColor: colors.brass }}>Explore <ArrowRight size={20} /></button>
                        <button className="px-10 py-4 rounded border-2" style={{ borderColor: colors.copper, color: colors.copper }}>View Blueprints</button>
                    </div>
                    {/* Gear Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Cog, Settings, Gauge, Clock].map((Icon, i) => (
                            <div key={i} className="w-14 h-14 rounded-full flex items-center justify-center border-2" style={{ borderColor: colors.brass, backgroundColor: colors.surface }}><Icon size={28} style={{ color: colors.brass }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl mb-12" style={{ color: colors.brass }}>Mechanisms</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Cog, title: 'Brass Gears' }, { icon: Gauge, title: 'Steam Power' }, { icon: Clock, title: 'Clockwork' }].map((item) => (
                            <div key={item.title} className="p-6 rounded border-2" style={{ borderColor: colors.brass, backgroundColor: colors.bg }}>
                                <item.icon size={32} className="mb-4" style={{ color: colors.brass }} />
                                <h3 className="text-lg mb-2">{item.title}</h3>
                                <p className="font-sans" style={{ color: colors.muted }}>Victorian engineering.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl mb-12" style={{ color: colors.copper }}>Workshops</h2>
                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'Apprentice', price: '$39', hot: false }, { name: 'Artisan', price: '$89', hot: true }, { name: 'Master', price: '$179', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-6 rounded border-2 text-center" style={{ borderColor: plan.hot ? colors.brass : colors.copper, backgroundColor: colors.surface }}>
                                {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded text-xs text-white" style={{ backgroundColor: colors.brass }}>⚙ Featured</div>}
                                <h3 className="text-2xl mb-2">{plan.name}</h3>
                                <div className="text-5xl mb-6" style={{ color: colors.brass }}>{plan.price}</div>
                                <ul className="space-y-2 mb-6 text-left">
                                    {['All gears', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 font-sans" style={{ color: colors.muted }}><Check size={16} style={{ color: colors.brass }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-3 rounded" style={{ backgroundColor: plan.hot ? colors.brass : 'transparent', color: plan.hot ? 'white' : colors.brass, border: plan.hot ? 'none' : `2px solid ${colors.brass}` }}>Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-3xl mb-12" style={{ color: colors.brass }}>Archives</h2>
                    <div className="space-y-4">
                        {[{ q: 'What is Steampunk?', a: 'Victorian-era industrial aesthetics with brass, steam, and clockwork elements.' },
                        { q: 'Customizable?', a: 'Full control over gear patterns and metallic tones.' },
                        { q: 'Works everywhere?', a: 'All browsers supported.' }
                        ].map((item, i) => (
                            <div key={i} className="rounded overflow-hidden border-2" style={{ borderColor: colors.brass, backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span>{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.brass, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-5 pb-5 font-sans" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto p-12 rounded text-center border-2" style={{ borderColor: colors.brass, backgroundColor: colors.surface }}>
                    <Settings size={48} className="mx-auto mb-6" style={{ color: colors.brass }} />
                    <h2 className="text-3xl mb-6">Fire Up the Engine</h2>
                    <button className="px-12 py-4 text-white rounded" style={{ backgroundColor: colors.brass }}>Get Started</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-2" style={{ borderColor: colors.brass, padding: '40px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2"><Cog size={20} style={{ color: colors.brass }} /> STEAMWORKS</div>
                    <span className="font-sans" style={{ color: colors.muted }}>© 2025 Steampunk Design</span>
                </div>
            </footer>
        </div>
    );
};
