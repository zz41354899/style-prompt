import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Terminal, MonitorDot, Cpu, FileCode } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S93TerminalRetroPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0D0208', surface: '#1A0510', text: '#00FF41', muted: '#008F11', dim: '#003B00', glow: '#00FF4140' };
    const terminalGlow = '0 0 10px rgba(0,255,65,0.5)';

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"VT323", "Courier New", monospace' }}>
            {/* Scanlines Effect */}
            <div className="fixed inset-0 pointer-events-none opacity-20" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.muted, backgroundColor: colors.bg }}>
                <div className="max-w-5xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-2">
                        <Terminal size={24} style={{ color: colors.text, filter: `drop-shadow(${terminalGlow})` }} />
                        <span className="text-xl" style={{ textShadow: terminalGlow }}>TERM_OS</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['./home', './about', './config'].map((item) => (<span key={item} className="cursor-pointer hover:underline" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-4 py-1 border" style={{ borderColor: colors.text, color: colors.text }}>LOGIN_</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.muted, backgroundColor: colors.surface }}>
                        {['./home', './about', './config'].map((item) => (<div key={item} className="py-2" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 border" style={{ borderColor: colors.text, color: colors.text }}>LOGIN_</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-4" style={{ color: colors.muted }}>user@system:~$</div>
                    <h1 className="mb-4 leading-tight" style={{ fontSize: isMobile ? '32px' : '56px', textShadow: terminalGlow }}>
                        &gt; RETRO_TERMINAL_<br />&gt; EXPERIENCE_<span className="animate-pulse">▌</span>
                    </h1>
                    <p className="max-w-lg mb-8" style={{ color: colors.muted }}>Nostalgic CRT terminal aesthetics with phosphor green glow and vintage computer vibes.</p>
                    <div className="flex gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-6 py-2 border flex items-center gap-2" style={{ borderColor: colors.text, color: colors.text, textShadow: terminalGlow }}>&gt; EXECUTE_ <ArrowRight size={18} /></button>
                        <button className="px-6 py-2 border" style={{ borderColor: colors.muted, color: colors.muted }}>&gt; README_</button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl mb-8" style={{ textShadow: terminalGlow }}>&gt; FEATURES_</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: MonitorDot, title: 'CRT_EFFECT' }, { icon: Cpu, title: 'RETRO_VIBE' }, { icon: FileCode, title: 'MONO_FONT' }].map((item) => (
                            <div key={item.title} className="p-4 border" style={{ borderColor: colors.muted, backgroundColor: colors.bg }}>
                                <item.icon size={24} className="mb-3" style={{ color: colors.text }} />
                                <h3 className="mb-1" style={{ textShadow: terminalGlow }}>{item.title}</h3>
                                <p className="text-sm" style={{ color: colors.muted }}>Authentic feel.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl mb-8" style={{ textShadow: terminalGlow }}>&gt; PACKAGES_</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'BASIC_', price: '$19', hot: false }, { name: 'PRO_', price: '$49', hot: true }, { name: 'ELITE_', price: '$99', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-4 border" style={{ borderColor: plan.hot ? colors.text : colors.muted, backgroundColor: colors.surface, boxShadow: plan.hot ? terminalGlow : 'none' }}>
                                {plan.hot && <div className="absolute -top-2 right-2 px-2 text-xs" style={{ backgroundColor: colors.text, color: colors.bg }}>* RECOMMENDED *</div>}
                                <h3 className="mb-1" style={{ textShadow: terminalGlow }}>{plan.name}</h3>
                                <div className="text-3xl mb-4" style={{ color: colors.text }}>{plan.price}</div>
                                <ul className="space-y-1 mb-4 text-sm">
                                    {['All themes', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2" style={{ color: colors.muted }}><Check size={12} style={{ color: colors.text }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-1 border" style={{ borderColor: colors.text, color: plan.hot ? colors.bg : colors.text, backgroundColor: plan.hot ? colors.text : 'transparent' }}>SELECT_</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl mb-8" style={{ textShadow: terminalGlow }}>&gt; FAQ_</h2>
                    <div className="space-y-0">
                        {[{ q: '&gt; WHAT_IS_THIS?', a: 'Nostalgic CRT aesthetics with phosphor green and scanlines.' },
                        { q: '&gt; CUSTOMIZABLE?', a: 'Full control over glow intensity and colors.' },
                        { q: '&gt; COMPATIBILITY?', a: 'Works on all modern browsers.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b" style={{ borderColor: colors.muted }}>
                                <button className="w-full flex items-center justify-between py-3 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span dangerouslySetInnerHTML={{ __html: item.q }} />
                                    <ChevronDown size={16} style={{ color: colors.muted, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="pb-3 text-sm" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-8 text-center border" style={{ borderColor: colors.text, boxShadow: terminalGlow }}>
                    <Terminal size={32} className="mx-auto mb-4" style={{ filter: `drop-shadow(${terminalGlow})` }} />
                    <h2 className="text-xl mb-4" style={{ textShadow: terminalGlow }}>&gt; BOOT_SYSTEM_</h2>
                    <button className="px-8 py-2 border" style={{ borderColor: colors.text, color: colors.bg, backgroundColor: colors.text }}>INITIALIZE_</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.muted, padding: '20px 24px' }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span style={{ textShadow: terminalGlow }}>TERM_OS v1.0</span>
                    <span className="text-sm" style={{ color: colors.muted }}>© 2025 Terminal Retro</span>
                </div>
            </footer>
        </div>
    );
};
