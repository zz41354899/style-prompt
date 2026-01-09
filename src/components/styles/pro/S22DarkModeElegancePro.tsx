import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Monitor, Code, Terminal, Zap, Layers, Shield, Quote, Star } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S22DarkModeElegancePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: { primary: '#000000', secondary: '#0a0a0a', surface: '#141414' },
        text: { primary: '#ffffff', secondary: '#a3a3a3', muted: '#525252' },
        brand: { primary: '#00D9FF', secondary: '#7C3AED', accent: '#10B981' },
        border: '#262626',
    };

    const gradients = {
        primary: 'linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%)',
        glow: '0 0 40px rgba(0, 217, 255, 0.3)',
        card: 'linear-gradient(135deg, #141414 0%, #1a1a1a 100%)',
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: colors.bg.primary, color: colors.text.primary, fontFamily: '"JetBrains Mono", "Fira Code", monospace' }}>

            {/* ========== GRID BACKGROUND ========== */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div style={{
                    backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} className="w-full h-full" />
            </div>

            {/* ========== GLOW EFFECTS ========== */}
            <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full opacity-30 blur-[150px] pointer-events-none" style={{ background: colors.brand.primary }} />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-20 blur-[180px] pointer-events-none" style={{ background: colors.brand.secondary }} />

            {/* ========== NAVIGATION ========== */}
            <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ borderColor: colors.border, backgroundColor: 'rgba(0,0,0,0.8)' }}>
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-8">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center relative transition-all duration-500 group-hover:shadow-lg"
                            style={{ background: gradients.primary, boxShadow: gradients.glow }}>
                            <Terminal size={24} color="white" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight" style={{ color: colors.text.primary }}>DarkUI<span style={{ color: colors.brand.primary }}>_Pro</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['SYSTEM', 'MODULES', 'DEPLOY'].map((item) => (
                                <span key={item} className="text-sm font-medium tracking-widest cursor-pointer transition-colors hover:text-cyan-400" style={{ color: colors.text.secondary }}>
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-6">
                        {!isMobile && (
                            <button className="group px-8 py-3 rounded-xl font-bold text-sm tracking-widest text-white transition-all duration-500 hover:shadow-lg relative overflow-hidden"
                                style={{ background: gradients.primary, boxShadow: gradients.glow }}>
                                <span className="relative z-10">INITIALIZE</span>
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}
                                className="p-3 rounded-xl border transition-colors"
                                style={{ borderColor: colors.border, backgroundColor: colors.bg.surface }}>
                                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="p-8 border-t animate-in fade-in slide-in-from-top-4 duration-500"
                        style={{ borderColor: colors.border, backgroundColor: colors.bg.surface }}>
                        {['SYSTEM', 'MODULES', 'DEPLOY'].map((item) => (
                            <div key={item} className="py-5 text-lg font-medium tracking-widest border-b" style={{ borderColor: colors.border, color: colors.text.secondary }}>{item}</div>
                        ))}
                        <button className="w-full mt-8 py-5 rounded-xl font-bold tracking-widest text-white"
                            style={{ background: gradients.primary }}>
                            INITIALIZE
                        </button>
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: '120px 40px' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-3 mb-10 p-3 px-6 rounded-full border transition-all hover:-translate-y-1"
                            style={{ borderColor: colors.border, backgroundColor: colors.bg.surface }}>
                            <Zap size={18} className="text-cyan-400" />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: colors.text.secondary }}>PRECISION_DARK_INTERFACE</span>
                        </div>

                        <h1 className="mb-10 font-black leading-[1.1] max-w-5xl"
                            style={{ fontSize: isMobile ? '48px' : '80px', color: colors.text.primary }}>
                            ENGINEERED<br />
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradients.primary }}>FOR_THE_DARK</span>
                        </h1>

                        <p className="max-w-2xl font-medium leading-relaxed mb-16"
                            style={{ fontSize: '18px', color: colors.text.secondary }}>
                            High contrast interfaces optimized for extended coding sessions. Zero eye strain. Maximum precision. Built for developers who live in the terminal.
                        </p>

                        <div className="flex gap-6 items-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                            <button className="group relative px-12 py-5 rounded-xl font-bold tracking-widest transition-all duration-500 hover:scale-105 text-white"
                                style={{ background: gradients.primary, boxShadow: gradients.glow }}>
                                <div className="relative z-10 flex items-center gap-3">
                                    START_DEPLOYMENT
                                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                                </div>
                            </button>
                            <button className="px-12 py-5 rounded-xl font-bold tracking-widest transition-all duration-500 border hover:bg-white/5"
                                style={{ borderColor: colors.border, color: colors.text.secondary }}>
                                VIEW_DOCS
                            </button>
                        </div>

                        {/* Terminal Preview */}
                        <div className="mt-24 w-full max-w-4xl rounded-2xl border overflow-hidden"
                            style={{ borderColor: colors.border, backgroundColor: colors.bg.surface }}>
                            <div className="flex items-center gap-2 p-4 border-b" style={{ borderColor: colors.border }}>
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-4 text-xs font-mono" style={{ color: colors.text.muted }}>terminal@darkui-pro</span>
                            </div>
                            <div className="p-6 font-mono text-sm" style={{ color: colors.text.secondary }}>
                                <div><span style={{ color: colors.brand.primary }}>$</span> npm install @darkui/pro</div>
                                <div className="mt-2"><span style={{ color: colors.brand.accent }}>✓</span> Package installed successfully</div>
                                <div className="mt-2"><span style={{ color: colors.brand.primary }}>$</span> darkui init --theme=midnight</div>
                                <div className="mt-2"><span style={{ color: colors.brand.accent }}>✓</span> Theme configured</div>
                                <div className="mt-2 flex items-center gap-2">
                                    <span style={{ color: colors.brand.primary }}>$</span>
                                    <span className="animate-pulse">_</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-black mb-6" style={{ fontSize: isMobile ? '32px' : '48px', color: colors.text.primary }}>
                            SYSTEM_FEATURES
                        </h2>
                        <div className="w-24 h-1 mx-auto rounded-full" style={{ background: gradients.primary }} />
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { icon: Layers, title: 'HIGH_CONTRAST', desc: '21:1 contrast ratio for AAA accessibility compliance. Every element optimized for visibility.', color: colors.brand.primary },
                            { icon: Code, title: 'CODE_AESTHETIC', desc: 'Monospace typography designed for technical precision. Built-in syntax highlighting themes.', color: colors.brand.secondary },
                            { icon: Shield, title: 'MATRIX_GRID', desc: 'Subtle grid patterns provide structure without distraction. Precision alignment guaranteed.', color: colors.brand.accent },
                        ].map((item) => (
                            <div key={item.title} className="group relative p-10 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/50"
                                style={{ borderColor: colors.border, background: gradients.card }}>
                                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}40` }}>
                                    <item.icon size={32} style={{ color: item.color }} />
                                </div>
                                <h3 className="text-lg font-bold mb-4 tracking-widest" style={{ color: colors.text.primary }}>{item.title}</h3>
                                <p className="font-medium leading-relaxed" style={{ fontSize: '14px', color: colors.text.secondary }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== TESTIMONIALS ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-black mb-6" style={{ fontSize: isMobile ? '32px' : '48px', color: colors.text.primary }}>
                            DEPLOYMENT_REVIEWS
                        </h2>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { quote: "The dark mode implementation is flawless. Our developers love the reduced eye strain during late night coding sessions.", author: "Marcus Chen", role: "Lead Developer at TechCorp", rating: 5 },
                            { quote: "Finally, a dark theme that respects contrast ratios. The precision in every detail is remarkable.", author: "Sarah Johnson", role: "CTO at DevStudio", rating: 5 },
                            { quote: "The monospace fonts and grid patterns create the perfect coding environment. Absolutely brilliant!", author: "David Kim", role: "Frontend Architect at CodeBase", rating: 5 },
                        ].map((item, i) => (
                            <div key={i} className="group p-8 rounded-2xl border transition-all duration-500 hover:border-cyan-500/50"
                                style={{ borderColor: colors.border, backgroundColor: colors.bg.surface }}>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(item.rating)].map((_, j) => (
                                        <Star key={j} size={16} fill={colors.brand.primary} style={{ color: colors.brand.primary }} />
                                    ))}
                                </div>
                                <Quote size={32} style={{ color: colors.text.muted }} className="mb-4" />
                                <p className="mb-6 font-medium italic leading-relaxed" style={{ color: colors.text.secondary }}>"{item.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl" style={{ background: gradients.primary }} />
                                    <div>
                                        <div className="font-bold" style={{ color: colors.text.primary }}>{item.author}</div>
                                        <div className="text-sm" style={{ color: colors.text.muted }}>{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-black mb-6" style={{ fontSize: isMobile ? '32px' : '48px', color: colors.text.primary }}>
                            PRICING_TIERS
                        </h2>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'DEVELOPER', price: '$59', color: colors.brand.primary, feats: ['Base components', 'Up to 10 projects', 'Community support', '6 months updates'], hot: false },
                            { name: 'ENTERPRISE', price: '$159', color: colors.brand.secondary, feats: ['All components', 'Unlimited projects', 'Priority support', 'Lifetime updates', 'Custom themes'], hot: true },
                            { name: 'ULTIMATE', price: '$299', color: colors.brand.accent, feats: ['Everything in Pro', 'Source code access', 'Dedicated team', 'SLA guarantee'], hot: false },
                        ].map((plan) => (
                            <div key={plan.name} className="relative group p-12 rounded-2xl border transition-all duration-500 hover:scale-[1.02]"
                                style={{ borderColor: plan.hot ? colors.brand.primary : colors.border, backgroundColor: colors.bg.surface }}>
                                {plan.hot && (
                                    <div className="absolute top-6 right-6 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                                        style={{ background: gradients.primary }}>RECOMMENDED</div>
                                )}
                                <div className="mb-10">
                                    <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: colors.text.muted }}>{plan.name}_TIER</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-black">{plan.price}</span>
                                        <span className="text-sm uppercase tracking-widest" style={{ color: colors.text.muted }}>/mo</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-12">
                                    {plan.feats.map((f) => (
                                        <li key={f} className="flex items-center gap-4 text-sm font-medium" style={{ color: colors.text.secondary }}>
                                            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ backgroundColor: `${plan.color}20` }}>
                                                <Check size={12} style={{ color: plan.color }} strokeWidth={3} />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-4 rounded-xl font-bold tracking-widest uppercase transition-all duration-500"
                                    style={{
                                        background: plan.hot ? gradients.primary : 'transparent',
                                        color: plan.hot ? 'white' : colors.text.primary,
                                        border: plan.hot ? 'none' : `1px solid ${colors.border}`
                                    }}>
                                    SELECT_TIER
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-black mb-6" style={{ fontSize: isMobile ? '32px' : '48px', color: colors.text.primary }}>
                            KNOWLEDGE_BASE
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'WHAT DEFINES THE DARK MODE AESTHETIC?', a: 'Our dark mode is characterized by high contrast ratios, subtle grid patterns, monospace typography, and carefully crafted shadow layers that reduce eye strain while maintaining visual clarity.' },
                            { q: 'IS THE THEME FULLY ACCESSIBLE?', a: 'Yes. All our components meet WCAG AAA standards with a minimum 21:1 contrast ratio. Screen reader support and keyboard navigation are built-in.' },
                            { q: 'CAN I CUSTOMIZE THE COLOR SCHEME?', a: 'Absolutely. Our theming system allows complete customization of primary, secondary, and accent colors while maintaining proper contrast ratios automatically.' },
                        ].map((item, i) => (
                            <div key={i} className="group overflow-hidden rounded-xl border transition-all duration-500"
                                style={{ borderColor: expandedFaq === i ? colors.brand.primary : colors.border, backgroundColor: colors.bg.surface }}>
                                <button className="w-full flex items-center justify-between p-8 text-left transition-all"
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-base font-bold tracking-wide" style={{ color: colors.text.primary }}>{item.q}</span>
                                    <ChevronDown size={20} style={{ color: colors.text.muted, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="animate-in fade-in slide-in-from-top-4 duration-500" style={{ padding: '0 32px 32px', fontSize: '14px', lineHeight: 1.8, color: colors.text.secondary }}>
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section style={{ padding: `${spacing.section} 40px` }}>
                <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl p-16 text-center border"
                    style={{ borderColor: colors.border, backgroundColor: colors.bg.surface }}>
                    <div className="absolute inset-0 opacity-10" style={{ background: gradients.primary }} />

                    <Terminal size={64} className="mx-auto mb-10" style={{ color: colors.brand.primary }} />

                    <h2 className="relative z-10 font-black mb-8 tracking-wide"
                        style={{ fontSize: isMobile ? '36px' : '56px', color: colors.text.primary }}>
                        READY_TO_DEPLOY?
                    </h2>

                    <p className="relative z-10 max-w-xl mx-auto mb-12 font-medium" style={{ fontSize: '16px', lineHeight: 1.8, color: colors.text.secondary }}>
                        Join thousands of developers already using DarkUI Pro for their critical applications.
                    </p>

                    <button className="relative z-10 px-16 py-6 rounded-xl transition-all duration-500 hover:scale-105 text-white font-bold tracking-widest text-lg uppercase"
                        style={{ background: gradients.primary, boxShadow: gradients.glow }}>
                        START_DEPLOYMENT
                    </button>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer className="border-t" style={{ borderColor: colors.border, padding: '80px 40px 40px' }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ background: gradients.primary }}>
                            <Terminal size={20} color="white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">DarkUI<span style={{ color: colors.brand.primary }}>_Pro</span></span>
                    </div>

                    <div className="flex gap-12 font-medium text-xs tracking-widest uppercase" style={{ color: colors.text.muted }}>
                        <span className="hover:text-white transition-colors cursor-pointer">Docs</span>
                        <span className="hover:text-white transition-colors cursor-pointer">GitHub</span>
                        <span className="hover:text-white transition-colors cursor-pointer">Discord</span>
                    </div>

                    <span className="text-sm font-medium tracking-widest uppercase" style={{ color: colors.text.muted }}>© 2025 DARKUI_SYSTEMS</span>
                </div>
            </footer>
        </div>
    );
};
