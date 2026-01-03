import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Layers, Box, Grid3X3 } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S13MaterialPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: { primary: '#FEF7FF', secondary: '#F7F2FA', surface: '#FFFFFF', tonal: '#EADDFF' },
        text: { primary: '#1C1B1F', secondary: '#49454F', muted: '#79747E', inverse: '#FFFFFF' },
        brand: { primary: '#6750A4', secondary: '#625B71', accent: '#7D5260', tertiary: '#EFB8C8' },
        states: { focus: '#6750A4', hover: 'rgba(103, 80, 164, 0.08)', pressed: 'rgba(103, 80, 164, 0.12)' }
    };

    const shadow = {
        elevation1: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
        elevation2: '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
        elevation3: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
        elevation4: '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.30)',
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg.primary, color: colors.text.primary, fontFamily: '"Roboto", "Inter", system-ui, sans-serif', letterSpacing: '0.25px' }}>
            {/* ========== APP BAR ========== */}
            <header className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(254, 247, 255, 0.8)', borderBottom: `1px solid ${colors.bg.tonal}` }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between" style={{ padding: '16px 24px' }}>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all group-hover:rounded-full" style={{ backgroundColor: colors.brand.primary, boxShadow: shadow.elevation1 }}>
                            <Layers size={20} color="white" />
                        </div>
                        <span style={{ fontSize: '22px', fontWeight: 500, color: colors.text.primary, letterSpacing: '-0.5px' }}>Materia</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['Products', 'Solutions', 'Pricing', 'Docs'].map((item) => (
                                <span key={item} className="cursor-pointer font-medium transition-colors hover:text-primary" style={{ fontSize: '14px', color: colors.text.secondary }}>
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-4">
                        {!isMobile && (
                            <button className="transition-all hover:shadow-lg active:scale-95" style={{ padding: '10px 24px', backgroundColor: colors.brand.primary, color: 'white', borderRadius: '100px', fontSize: '14px', fontWeight: 500, letterSpacing: '0.1px', boxShadow: shadow.elevation1 }}>
                                Get Started
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-full hover:bg-black/5">
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="animate-in fade-in slide-in-from-top-4" style={{ backgroundColor: colors.bg.primary, padding: '16px 24px', borderBottom: `1px solid ${colors.bg.tonal}` }}>
                        {['Products', 'Solutions', 'Pricing', 'Docs'].map((item) => (
                            <div key={item} className="active:bg-black/5 rounded-lg transition-colors" style={{ padding: '16px 12px', color: colors.text.secondary, fontSize: '16px', fontWeight: 500 }}>{item}</div>
                        ))}
                        <button className="w-full mt-4 active:scale-[0.98] transition-transform" style={{ padding: '14px 24px', backgroundColor: colors.brand.primary, color: 'white', borderRadius: '100px', fontSize: '14px', fontWeight: 500, letterSpacing: '0.1px', boxShadow: shadow.elevation2 }}>
                            Get Started
                        </button>
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', gap: isMobile ? '48px' : '80px' }}>
                        <div>
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full" style={{ backgroundColor: colors.bg.tonal, color: colors.brand.primary }}>
                                <Box size={14} />
                                <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Material You 3.0</span>
                            </div>
                            <h1 style={{ fontSize: isMobile ? '44px' : '72px', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '32px' }}>
                                Next-Gen <br />
                                <span style={{ color: colors.brand.primary }}>Interfaces</span>
                            </h1>
                            <p style={{ fontSize: '18px', lineHeight: 1.6, color: colors.text.secondary, marginBottom: '48px', maxWidth: '480px' }}>
                                Beautiful by design, intuitive by nature. Craft high-performance applications with the world's most versatile design system.
                            </p>
                            <div className="flex gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                                <button className="transition-all hover:shadow-xl hover:translate-y-[-2px] active:scale-95"
                                    style={{ padding: '18px 40px', backgroundColor: colors.brand.primary, color: 'white', borderRadius: '100px', fontSize: '16px', fontWeight: 600, boxShadow: shadow.elevation2 }}>
                                    Start Building
                                </button>
                                <button className="transition-all hover:bg-black/5 active:scale-95"
                                    style={{ padding: '18px 40px', border: `1px solid ${colors.bg.tonal}`, color: colors.brand.primary, borderRadius: '100px', fontSize: '16px', fontWeight: 600 }}>
                                    View Guide
                                </button>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center">
                            <div className="relative w-full aspect-square max-w-[440px]">
                                <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-[48px] rotate-[8deg]"
                                    style={{ backgroundColor: colors.bg.tonal, boxShadow: shadow.elevation1 }} />
                                <div className="absolute top-[5%] right-[5%] w-[85%] h-[85%] rounded-[48px] -rotate-[4deg] flex items-center justify-center transition-transform hover:rotate-0 duration-700"
                                    style={{ backgroundColor: colors.bg.surface, boxShadow: shadow.elevation3 }}>
                                    <div className="grid grid-cols-2 gap-6 p-12">
                                        {[colors.brand.primary, colors.brand.secondary, colors.brand.accent, colors.brand.tertiary].map((color, i) => (
                                            <div key={i} className="aspect-square rounded-3xl" style={{ backgroundColor: color, boxShadow: shadow.elevation1 }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PROBLEM ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '16px' }}>Resolved Experiences</h2>
                        <p style={{ fontSize: '18px', color: colors.text.secondary }}>Bringing clarity to digital fragmentation</p>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { title: 'Unified Identity', desc: 'Seamlessly consistent design systems that scale across every platform.', icon: Grid3X3 },
                            { title: 'Simplified Logic', desc: 'Intuitive navigation paths that reduce cognitive load for users.', icon: Box },
                            { title: 'Optimized Flow', desc: 'Lightweight architecture that prioritizes speed and responsiveness.', icon: ArrowRight },
                        ].map((item) => (
                            <div key={item.title} className="group transition-all duration-300 hover:translate-y-[-4px]"
                                style={{ padding: '40px 32px', backgroundColor: colors.bg.surface, borderRadius: '32px', boxShadow: shadow.elevation1 }}>
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-primary/10"
                                    style={{ backgroundColor: colors.bg.tonal, color: colors.brand.primary }}>
                                    <item.icon size={24} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>{item.title}</h3>
                                <p style={{ fontSize: '15px', color: colors.text.secondary, lineHeight: 1.7 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 500, letterSpacing: '-0.02em' }}>Core Components</h2>
                    </div>

                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                        {[
                            { icon: Layers, title: 'Adaptive Elevation', desc: 'Context-aware depth levels that guide user attention naturally.' },
                            { icon: Box, title: 'Tonal Palettes', desc: 'Harmonious color schemes derived from a single seed color.' },
                            { icon: Grid3X3, title: 'Geometric Grids', desc: 'A rigorous and flexible layout system for all screen sizes.' },
                            { icon: ArrowRight, title: 'Meaningful Motion', desc: 'Fluid transitions that provide clear visual feedback.' },
                        ].map((item) => (
                            <div key={item.title} className="flex items-start gap-6 group transition-all" style={{ padding: '32px', backgroundColor: colors.bg.surface, borderRadius: '28px', border: `1px solid ${colors.bg.tonal}` }}>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110" style={{ backgroundColor: colors.bg.tonal }}>
                                    <item.icon size={26} color={colors.brand.primary} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{item.title}</h3>
                                    <p style={{ fontSize: '15px', color: colors.text.secondary, lineHeight: 1.7 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '16px' }}>Pricing Plans</h2>
                        <p style={{ fontSize: '18px', color: colors.text.secondary }}>Flexible options for teams of all sizes</p>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'Foundational', price: 'Free', features: ['Core components', 'Basic documentation', 'Community forums'] },
                            { name: 'Professional', price: '$29', features: ['All components', 'Priority support', 'Source Figma files', 'Feature updates'] },
                            { name: 'Enterprise', price: 'Custom', features: ['Team management', 'Advanced analytics', 'Custom branding', 'SLA support'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="relative transition-all duration-500"
                                style={{ padding: '56px 40px', backgroundColor: i === 1 ? colors.bg.surface : colors.bg.secondary, borderRadius: '48px', boxShadow: i === 1 ? shadow.elevation4 : shadow.elevation1, border: i === 1 ? `2px solid ${colors.brand.primary}` : 'none' }}>
                                {i === 1 && (
                                    <div className="absolute top-6 right-8 px-4 py-1.5 rounded-full" style={{ backgroundColor: colors.brand.primary, color: 'white', fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em' }}>POPULAR</div>
                                )}
                                <h3 style={{ fontSize: '14px', fontWeight: 700, color: colors.brand.primary, letterSpacing: '0.1em', marginBottom: '24px' }}>{plan.name.toUpperCase()}</h3>
                                <div className="flex items-baseline gap-1 mb-10">
                                    <span style={{ fontSize: '48px', fontWeight: 600 }}>{plan.price}</span>
                                    {plan.name === 'Professional' && <span style={{ fontSize: '16px', color: colors.text.secondary }}>/mo</span>}
                                </div>
                                <ul className="space-y-4 mb-12">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary/10" style={{ backgroundColor: colors.bg.tonal }}>
                                                <Check size={14} color={colors.brand.primary} />
                                            </div>
                                            <span style={{ fontSize: '15px', color: colors.text.secondary }}>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="transition-all active:scale-[0.98]"
                                    style={{ width: '100%', padding: '16px', borderRadius: '100px', fontSize: '15px', fontWeight: 600, backgroundColor: i === 1 ? colors.brand.primary : 'transparent', color: i === 1 ? 'white' : colors.brand.primary, border: i === 1 ? 'none' : `1px solid ${colors.bg.tonal}` }}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 500 }}>Common Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'What is Material You?', a: 'Material You is the latest evolution of Google’s design system, focusing on personalization, accessibility, and adaptive layouts.' },
                            { q: 'Is it production-ready?', a: 'Yes, our component library is rigorously tested and used by thousands of companies worldwide.' },
                            { q: 'How does theming work?', a: 'We utilize CSS custom properties and design tokens, allowing you to generate entire palettes from a single hex code.' },
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: colors.bg.surface, borderRadius: '24px', border: `1px solid ${colors.bg.tonal}`, overflow: 'hidden' }}>
                                <button className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-black/5" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span style={{ fontSize: '17px', fontWeight: 600 }}>{item.q}</span>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300" style={{ backgroundColor: colors.bg.tonal, transform: expandedFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                        <ChevronDown size={20} color={colors.brand.primary} />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="animate-in fade-in slide-in-from-top-2" style={{ padding: '0 24px 24px', fontSize: '15px', color: colors.text.secondary, lineHeight: 1.7 }}>{item.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-4xl mx-auto text-center relative overflow-hidden"
                    style={{ padding: '80px 48px', backgroundColor: colors.brand.primary, borderRadius: '48px', boxShadow: shadow.elevation3, color: 'white' }}>
                    <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[100%] rounded-full opacity-20 bg-white" />
                    <div className="relative z-10">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '24px' }}>Shape the Future</h2>
                        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>Join over 50,000 developers building better interfaces with our Material ecosystem.</p>
                        <button className="transition-all hover:shadow-2xl hover:translate-y-[-2px] active:scale-95"
                            style={{ padding: '18px 56px', backgroundColor: 'white', color: colors.brand.primary, borderRadius: '100px', fontSize: '16px', fontWeight: 700, boxShadow: shadow.elevation2 }}>
                            Download Library
                        </button>
                    </div>
                </div>
            </section>

            <footer style={{ padding: '64px 24px', backgroundColor: colors.bg.secondary, borderTop: `1px solid ${colors.bg.tonal}` }}>
                <div className="max-w-6xl mx-auto flex justify-between items-center gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.brand.primary }}>
                            <Layers size={16} color="white" />
                        </div>
                        <span style={{ fontSize: '18px', fontWeight: 600 }}>Materia</span>
                    </div>
                    <span style={{ fontSize: '14px', color: colors.text.secondary }}>© 2025 Materia Design. Crafted with intention.</span>
                    <div className="flex gap-6">
                        {['Privacy', 'Twitter', 'GitHub'].map(item => (
                            <span key={item} className="text-sm font-medium hover:text-primary cursor-pointer" style={{ color: colors.text.secondary }}>{item}</span>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};
