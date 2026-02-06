import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Layers, Box, Grid3X3 } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S13MaterialPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    // S13 Material Design 3 Tokens (M3)
    const colors = {
        bg: { primary: '#FFFBfe', surface: '#FFFBfe', surfaceContainer: '#F3EDF7', surfaceVariant: '#E7E0EC' },
        primary: { base: '#6750A4', on: '#FFFFFF', container: '#EADDFF', onContainer: '#21005D' },
        secondary: { base: '#625B71', on: '#FFFFFF', container: '#E8DEF8', onContainer: '#1D192B' },
        tertiary: { base: '#7D5260', on: '#FFFFFF', container: '#FFD8E4', onContainer: '#31111D' },
        text: { primary: '#1C1B1F', secondary: '#49454F', outline: '#79747E' }
    };

    const shadow = {
        elevation1: '0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)',
        elevation3: '0px 1px 3px 0px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15)',
        elevation5: '0px 4px 4px 0px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)',
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg.primary, color: colors.text.primary, fontFamily: '"Roboto", "Inter", system-ui, sans-serif', letterSpacing: '0.25px' }}>
            {/* ========== APP BAR ========== */}
            <header className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 251, 254, 0.9)', borderBottom: `1px solid ${colors.bg.surfaceVariant}` }}>
                <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ padding: '12px 24px' }}>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-[#6750A4] shadow-sm">
                            <Layers size={20} color="white" />
                        </div>
                        <span style={{ fontSize: '22px', fontWeight: 500, color: colors.text.primary, fontFamily: '"Roboto Flex", sans-serif' }}>Materia</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-2">
                            {['Products', 'Solutions', 'Pricing', 'Docs'].map((item) => (
                                <span key={item} className="cursor-pointer font-medium transition-colors hover:bg-[#1D192B]/[0.08] px-4 py-2 rounded-full" style={{ fontSize: '14px', color: colors.text.secondary }}>
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-4">
                        {!isMobile && (
                            <button className="transition-all hover:shadow-md active:scale-95" style={{ padding: '10px 24px', backgroundColor: colors.primary.base, color: 'white', borderRadius: '100px', fontSize: '14px', fontWeight: 500, letterSpacing: '0.1px', boxShadow: shadow.elevation1 }}>
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
                    <div className="animate-in fade-in slide-in-from-top-4" style={{ backgroundColor: colors.bg.surface, padding: '16px 24px', borderBottom: `1px solid ${colors.bg.surfaceVariant}` }}>
                        {['Products', 'Solutions', 'Pricing', 'Docs'].map((item) => (
                            <div key={item} className="active:bg-black/5 rounded-lg transition-colors" style={{ padding: '16px 12px', color: colors.text.secondary, fontSize: '16px', fontWeight: 500 }}>{item}</div>
                        ))}
                        <button className="w-full mt-4 active:scale-[0.98] transition-transform" style={{ padding: '14px 24px', backgroundColor: colors.primary.base, color: 'white', borderRadius: '100px', fontSize: '14px', fontWeight: 500, letterSpacing: '0.1px', boxShadow: shadow.elevation1 }}>
                            Get Started
                        </button>
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.surface }}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', gap: isMobile ? '48px' : '80px' }}>
                        <div>
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-[16px]" style={{ backgroundColor: colors.secondary.container, color: colors.secondary.onContainer }}>
                                <Box size={16} />
                                <span style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.1px' }}>Material You 3.0</span>
                            </div>

                            <h1 style={{ fontSize: isMobile ? '44px' : '88px', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '32px', color: colors.text.primary, fontFamily: '"Roboto Flex", sans-serif' }}>
                                Design that <br />
                                <span className="font-medium" style={{ color: colors.primary.base }}>Adapts.</span>
                            </h1>

                            <p style={{ fontSize: '20px', lineHeight: 1.6, color: colors.text.secondary, marginBottom: '48px', maxWidth: '520px' }}>
                                Expressive, dynamic, and personal. Build beautiful interfaces that respond to your user's context and style.
                            </p>

                            <div className="flex gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                                <button className="h-[56px] px-8 rounded-[28px] text-[16px] font-medium transition-all hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                                    style={{ backgroundColor: colors.primary.base, color: colors.primary.on }}>
                                    primary.filled
                                    <ArrowRight size={18} />
                                </button>
                                <button className="h-[56px] px-8 rounded-[28px] text-[16px] font-medium transition-all hover:bg-[#6750A4]/10 active:scale-95 flex items-center justify-center"
                                    style={{ border: `1px solid ${colors.text.outline}`, color: colors.primary.base }}>
                                    secondary.outlined
                                </button>
                            </div>
                        </div>

                        {/* Visual Experience */}
                        <div className="relative h-[600px] bg-[#F7F2FA] rounded-[32px] overflow-hidden flex flex-col p-8">
                            {/* Floating Cards UI */}
                            <div className="w-full bg-[#FFFBfe] rounded-[24px] p-6 mb-4 shadow-sm transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 origin-bottom-left">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[#EADDFF]" />
                                    <div className="h-2 w-8 bg-[#E7E0EC] rounded-full" />
                                </div>
                                <div className="h-4 w-3/4 bg-[#E7E0EC] rounded-full mb-3" />
                                <div className="h-4 w-1/2 bg-[#E7E0EC] rounded-full" />
                            </div>

                            <div className="flex-1 bg-[#FFD8E4] rounded-[24px] relative overflow-hidden group">
                                <div className="absolute top-6 left-6 text-[#31111D] font-medium text-xl">Dynamic Color</div>
                                <div className="absolute bottom-[-20%] right-[-20%] w-[300px] h-[300px] bg-[#7D5260] rounded-full opacity-20 group-hover:scale-125 transition-transform duration-700" />
                            </div>

                            <div className="absolute bottom-8 right-8 w-16 h-16 bg-[#C0E8FF] rounded-[16px] flex items-center justify-center shadow-lg animate-bounce duration-[3s]">
                                <Grid3X3 size={24} className="text-[#001D35]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PROBLEM ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '16px' }}>Resolved Experiences</h2>
                        <p style={{ fontSize: '18px', color: colors.text.secondary }}>Bringing clarity to digital fragmentation</p>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { title: 'Unified Identity', desc: 'Seamlessly consistent design systems that scale across every platform.', icon: Grid3X3 },
                            { title: 'Simplified Logic', desc: 'Intuitive navigation paths that reduce cognitive load for users.', icon: Box },
                            { title: 'Optimized Flow', desc: 'Lightweight architecture that prioritizes speed and responsiveness.', icon: ArrowRight },
                        ].map((item) => (
                            <div key={item.title} className="group transition-all duration-300 hover:scale-[1.02]"
                                style={{ padding: '40px 32px', backgroundColor: colors.bg.surfaceContainer, borderRadius: '24px' }}>
                                <div className="w-12 h-12 rounded-[16px] flex items-center justify-center mb-8 transition-colors bg-[#E8DEF8] text-[#1D192B]">
                                    <item.icon size={24} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: 400, marginBottom: '16px' }}>{item.title}</h3>
                                <p style={{ fontSize: '16px', color: colors.text.secondary, lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.surfaceVariant }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 400, letterSpacing: '-0.02em' }}>Core Components</h2>
                    </div>

                    <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                        {[
                            { icon: Layers, title: 'Adaptive Elevation', desc: 'Context-aware depth levels that guide user attention naturally.' },
                            { icon: Box, title: 'Tonal Palettes', desc: 'Harmonious color schemes derived from a single seed color.' },
                            { icon: Grid3X3, title: 'Geometric Grids', desc: 'A rigorous and flexible layout system for all screen sizes.' },
                            { icon: ArrowRight, title: 'Meaningful Motion', desc: 'Fluid transitions that provide clear visual feedback.' },
                        ].map((item) => (
                            <div key={item.title} className="flex items-start gap-6 group transition-all" style={{ padding: '32px', backgroundColor: colors.bg.surface, borderRadius: '24px' }}>
                                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-[#EADDFF] text-[#21005D]">
                                    <item.icon size={26} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '8px' }}>{item.title}</h3>
                                    <p style={{ fontSize: '16px', color: colors.text.secondary, lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '16px' }}>Pricing Plans</h2>
                        <p style={{ fontSize: '18px', color: colors.text.secondary }}>Flexible options for teams of all sizes</p>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'Foundational', price: 'Free', features: ['Core components', 'Basic documentation', 'Community forums'] },
                            { name: 'Professional', price: '$29', features: ['All components', 'Priority support', 'Source Figma files', 'Feature updates'] },
                            { name: 'Enterprise', price: 'Custom', features: ['Team management', 'Advanced analytics', 'Custom branding', 'SLA support'] },
                        ].map((plan, i) => (
                            <div key={plan.name} className="relative transition-all duration-500 overflow-hidden"
                                style={{
                                    padding: '48px 32px',
                                    backgroundColor: i === 1 ? colors.primary.container : colors.bg.surfaceContainer,
                                    borderRadius: '24px',
                                    color: i === 1 ? colors.primary.onContainer : colors.text.primary
                                }}>
                                {i === 1 && (
                                    <div className="absolute top-0 right-0 p-4 bg-[#6750A4] text-white rounded-bl-[20px] text-xs font-bold tracking-wider">
                                        POPULAR
                                    </div>
                                )}
                                <h3 style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '24px', opacity: 0.8, textTransform: 'uppercase' }}>{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span style={{ fontSize: '48px', fontWeight: 400, fontFamily: '"Roboto Flex", sans-serif' }}>{plan.price}</span>
                                    {plan.name === 'Professional' && <span style={{ fontSize: '16px', opacity: 0.7 }}>/mo</span>}
                                </div>
                                <ul className="space-y-4 mb-12">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-3">
                                            <Check size={18} />
                                            <span style={{ fontSize: '15px' }}>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full h-12 rounded-full font-medium text-sm transition-all active:scale-[0.98]"
                                    style={{
                                        backgroundColor: i === 1 ? colors.primary.onContainer : colors.primary.base,
                                        color: i === 1 ? colors.primary.container : 'white'
                                    }}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.surface }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 400 }}>Common Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'What is Material You?', a: 'Material You is the latest evolution of Google’s design system, focusing on personalization, accessibility, and adaptive layouts.' },
                            { q: 'Is it production-ready?', a: 'Yes, our component library is rigorously tested and used by thousands of companies worldwide.' },
                            { q: 'How does theming work?', a: 'We utilize CSS custom properties and design tokens, allowing you to generate entire palettes from a single hex code.' },
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: colors.bg.surfaceContainer, borderRadius: '16px', overflow: 'hidden' }}>
                                <button className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-black/5" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span style={{ fontSize: '16px', fontWeight: 500 }}>{item.q}</span>
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 bg-[#E7E0EC]" style={{ transform: expandedFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                        <ChevronDown size={20} color="#49454F" />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="animate-in fade-in slide-in-from-top-2" style={{ padding: '0 24px 24px', fontSize: '15px', color: colors.text.secondary, lineHeight: 1.6 }}>{item.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-4xl mx-auto text-center relative overflow-hidden"
                    style={{ padding: '80px 48px', backgroundColor: colors.primary.base, borderRadius: '48px', color: 'white' }}>
                    <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[100%] rounded-full opacity-10 bg-white blur-3xl" />
                    <div className="relative z-10">
                        <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '24px' }}>Shape the Future</h2>
                        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>Join over 50,000 developers building better interfaces with our Material ecosystem.</p>
                        <button className="transition-all hover:shadow-2xl hover:translate-y-[-2px] active:scale-95"
                            style={{ padding: '18px 56px', backgroundColor: colors.bg.surface, color: colors.primary.base, borderRadius: '100px', fontSize: '16px', fontWeight: 500, boxShadow: shadow.elevation1 }}>
                            Download Library
                        </button>
                    </div>
                </div>
            </section>

            <footer style={{ padding: '40px 24px', backgroundColor: colors.bg.surfaceVariant }}>
                <div className="max-w-6xl mx-auto flex justify-between items-center gap-4" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#6750A4]">
                            <Layers size={16} color="white" />
                        </div>
                        <span style={{ fontSize: '18px', fontWeight: 500 }}>Materia</span>
                    </div>
                    <span style={{ fontSize: '14px', color: colors.text.secondary }}>© 2025 Materia Design. Crafted with intention.</span>
                    <div className="flex gap-6">
                        {['Privacy', 'Twitter', 'GitHub'].map(item => (
                            <span key={item} className="text-sm font-medium hover:text-[#6750A4] cursor-pointer" style={{ color: colors.text.secondary }}>{item}</span>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

