import { useState } from 'react';
import {
    ArrowRight, Menu, X, Check, ChevronDown, ChevronUp,
    Layers, Zap, Shield, Globe, Activity, Code,
    Layout, PenTool
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S02MinimalistMonochromePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // S02 Minimalist Monochrome Design Tokens
    const colors = {
        bg: {
            default: '#FFFFFF',
            secondary: '#F5F5F5',
            inverse: '#000000',
            elevated: '#FFFFFF'
        },
        text: {
            primary: '#000000',
            secondary: '#525252',
            muted: '#A3A3A3',
            inverse: '#FFFFFF'
        },
        border: {
            subtle: '#E5E5E5',
            strong: '#000000'
        },
        accent: '#000000',
    };

    const typography = {
        primaryFont: '"Inter", system-ui, sans-serif',
        secondaryFont: '"Playfair Display", "Times New Roman", serif', // Editorial touch
    };

    const spacing = responsive.spacing;

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundColor: colors.bg.default,
                color: colors.text.primary,
                fontFamily: typography.primaryFont,
                fontSize: '16px',
                lineHeight: 1.6,
            }}
        >
            {/* ========== 1. GLOBAL NAVIGATION ========== */}
            <header className="sticky top-0 z-50" style={{ backgroundColor: colors.bg.default, borderBottom: `1px solid ${colors.border.subtle}` }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between" style={{ padding: `${spacing.md} ${spacing.lg}` }}>
                    <div className="flex items-center gap-3">
                        <div style={{ width: '20px', height: '20px', backgroundColor: colors.accent }} />
                        <span style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '-0.02em' }}>MONO</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Platform', 'Showcase', 'Pricing', 'Documentation'].map((item) => (
                                <span key={item} className="cursor-pointer hover:underline underline-offset-4" style={{ fontSize: '14px', fontWeight: 500, color: colors.text.secondary }}>
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-4">
                        {!isMobile && <button style={{ fontSize: '14px', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer' }}>Log in</button>}
                        <button style={{ backgroundColor: colors.accent, color: colors.text.inverse, padding: '10px 20px', fontSize: '14px', fontWeight: 500, border: 'none', cursor: 'pointer' }}>Get Started</button>
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* ========== 2. HERO SECTION ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-16 items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
                        <div>
                            <div className="inline-flex border border-black px-3 py-1 text-xs font-semibold mb-8 uppercase tracking-wider">
                                New v2.0 Released
                            </div>
                            <h1 style={{
                                fontFamily: typography.secondaryFont,
                                fontSize: isMobile ? '42px' : '64px',
                                lineHeight: 1.1,
                                fontWeight: 400,
                                marginBottom: spacing.lg
                            }}>
                                Design Systems.<br />
                                <span style={{ fontStyle: 'italic' }}>Simplified.</span>
                            </h1>
                            <p style={{ fontSize: '20px', color: colors.text.secondary, lineHeight: 1.5, marginBottom: spacing.xl, maxWidth: '500px' }}>
                                The single source of truth for product teams. Sync Figma to code, manage tokens, and document everything.
                            </p>
                            <div className={`flex gap-4 ${isMobile ? 'flex-col' : 'flex-row'}`}>
                                <button style={{ backgroundColor: colors.accent, color: colors.text.inverse, padding: '16px 32px', fontSize: '16px', fontWeight: 500, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                    Start Free <ArrowRight size={18} />
                                </button>
                                <button style={{ backgroundColor: 'transparent', color: colors.text.primary, padding: '16px 32px', fontSize: '16px', fontWeight: 500, border: `1px solid ${colors.border.subtle}`, cursor: 'pointer' }}>
                                    View Demo
                                </button>
                            </div>
                        </div>
                        <div style={{ height: '500px', backgroundColor: colors.bg.secondary, position: 'relative', border: `1px solid ${colors.border.subtle}` }}>
                            {/* Abstract Minimalist Composition */}
                            <div style={{ position: 'absolute', top: '10%', left: '10%', width: '60%', height: '60%', border: '1px solid black' }} />
                            <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '40%', height: '40%', backgroundColor: 'black' }} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: typography.secondaryFont, fontSize: '120px', opacity: 0.05, fontWeight: 700 }}>Aa</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== 9. TRUST (Moved Up) ========== */}
            <section style={{ borderTop: `1px solid ${colors.border.subtle}`, borderBottom: `1px solid ${colors.border.subtle}`, padding: spacing.xl }}>
                <div className="max-w-6xl mx-auto text-center">
                    <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.text.muted, marginBottom: spacing.lg }}>Trusted by Design Teams</p>
                    <div className="flex justify-center gap-12 flex-wrap opacity-60 grayscale">
                        {['Acme', 'Starlight', 'Square', 'Circle', 'Triangle'].map(logo => (
                            <span key={logo} style={{ fontSize: '20px', fontWeight: 700, fontFamily: typography.secondaryFont }}>{logo}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 3. PROBLEM ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr' }}>
                        {[
                            { title: 'Disconnected workflows', desc: 'Designers in Figma, devs in VS Code. Never in sync.' },
                            { title: 'Outdated documentation', desc: 'Manual updates mean your docs are stale before they publish.' },
                            { title: 'Inconsistent UI', desc: 'Fragmented components lead to design debt and confusion.' }
                        ].map((item, i) => (
                            <div key={i} style={{ borderTop: `2px solid ${colors.accent}`, paddingTop: spacing.md }}>
                                <span style={{ display: 'block', fontSize: '14px', color: colors.text.muted, marginBottom: spacing.sm }}>0{i + 1}</span>
                                <h3 style={{ fontSize: '24px', fontWeight: 500, marginBottom: spacing.sm }}>{item.title}</h3>
                                <p style={{ color: colors.text.secondary }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 5. SYSTEM OVERVIEW ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 style={{ fontFamily: typography.secondaryFont, fontSize: '48px', marginBottom: spacing.md }}>The Workflow</h2>
                    <p style={{ color: colors.text.secondary }}>From concept to code in four steps.</p>
                </div>
                <div className="max-w-6xl mx-auto grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)' }}>
                    {[
                        { icon: PenTool, title: 'Tokens', desc: 'Define your foundations.' },
                        { icon: Layout, title: 'Components', desc: 'Build atomic elements.' },
                        { icon: Code, title: 'Sync', desc: 'Push to git automatically.' },
                        { icon: Globe, title: 'Publish', desc: 'Live documentation site.' }
                    ].map((step, i) => (
                        <div key={i} style={{ backgroundColor: colors.bg.default, padding: spacing.xl, border: `1px solid ${colors.border.subtle}` }}>
                            <step.icon size={24} style={{ marginBottom: spacing.lg }} />
                            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: spacing.xs }}>{step.title}</h3>
                            <p style={{ fontSize: '14px', color: colors.text.secondary }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== 6. BENTO GRID ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 style={{ fontFamily: typography.secondaryFont, fontSize: '48px', marginBottom: spacing.md }}>Platform Power</h2>
                    </div>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gridAutoRows: 'minmax(250px, auto)' }}>
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2', backgroundColor: colors.bg.secondary, padding: spacing.xl, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: 500 }}>Global Token Management</h3>
                            <p style={{ color: colors.text.secondary, maxWidth: '400px' }}>Manage colors, typography, and spacing across web, iOS, and Android from a single dashboard.</p>
                        </div>
                        <div style={{ backgroundColor: colors.text.primary, color: colors.text.inverse, padding: spacing.xl, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Code size={32} />
                            <div>
                                <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: spacing.xs }}>Automated PRs</h3>
                                <p style={{ fontSize: '14px', opacity: 0.8 }}>Sync changes to GitHub instantly.</p>
                            </div>
                        </div>
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 1', border: `1px solid ${colors.border.subtle}`, padding: spacing.xl }}>
                            <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: spacing.md }}>Asset CDN</h3>
                            <div style={{ fontSize: '12px', fontFamily: 'monospace', backgroundColor: colors.bg.secondary, padding: '12px' }}>
                                https://cdn.mono.ds/icon.svg
                            </div>
                        </div>
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2', border: `1px solid ${colors.border.subtle}`, padding: spacing.xl, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                                <h3 style={{ fontSize: '24px', fontWeight: 500 }}>Visual Regression Testing</h3>
                                <p style={{ color: colors.text.secondary }}>Catch breaking changes before they merge.</p>
                            </div>
                            <Activity size={48} strokeWidth={1} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== 10. INTEGRATIONS ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto text-center">
                    <h2 style={{ fontSize: '24px', fontWeight: 500, marginBottom: spacing.xl }}>Connects with everything</h2>
                    <div className="flex justify-center flex-wrap gap-4">
                        {['Figma', 'Sketch', 'React', 'Vue', 'Angular', 'Flutter', 'Storybook', 'GitHub'].map(tool => (
                            <div key={tool} style={{ backgroundColor: colors.bg.default, border: `1px solid ${colors.border.subtle}`, padding: '12px 24px', fontSize: '14px', fontWeight: 500 }}>
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 11. USE CASES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
                    <div>
                        <h2 style={{ fontFamily: typography.secondaryFont, fontSize: '48px', marginBottom: spacing.lg }}>Built for scale.</h2>
                        <button style={{ borderBottom: '1px solid black', paddingBottom: '4px', fontSize: '16px', background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none', cursor: 'pointer' }}>Read Customer Stories</button>
                    </div>
                    <div className="space-y-12">
                        {[
                            { head: 'For Design Teams', body: 'Stop maintaining manual style guides. Publish instantly from Figma.' },
                            { head: 'For Engineering', body: 'Consume typed design tokens. Never copy-paste hex codes again.' },
                            { head: 'For Enterprise', body: 'Enforce brand consistency across 100+ products and sub-brands.' }
                        ].map((use, i) => (
                            <div key={i}>
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: spacing.xs }}>{use.head}</h3>
                                <p style={{ color: colors.text.secondary }}>{use.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 12. PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, borderTop: `1px solid ${colors.border.subtle}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 flex items-end justify-between">
                        <h2 style={{ fontFamily: typography.secondaryFont, fontSize: '48px' }}>Membership</h2>
                        <div className="flex gap-2">
                            <button onClick={() => setBillingCycle('monthly')} style={{ opacity: billingCycle === 'monthly' ? 1 : 0.5, background: 'none', border: 'none', cursor: 'pointer' }}>Monthly</button>
                            <span style={{ color: colors.border.subtle }}>/</span>
                            <button onClick={() => setBillingCycle('annual')} style={{ opacity: billingCycle === 'annual' ? 1 : 0.5, background: 'none', border: 'none', cursor: 'pointer' }}>Annual</button>
                        </div>
                    </div>
                    <div className="grid gap-0" style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', border: `1px solid ${colors.border.subtle}` }}>
                        {[
                            { name: 'Starter', price: '0', desc: 'For solo designers' },
                            { name: 'Studio', price: '29', desc: 'For small teams' },
                            { name: 'Business', price: '99', desc: 'For scaling orgs' }
                        ].map((plan, i, arr) => (
                            <div key={i} style={{
                                padding: spacing.xl,
                                borderRight: !isMobile && i < arr.length - 1 ? `1px solid ${colors.border.subtle}` : 'none',
                                borderBottom: isMobile && i < arr.length - 1 ? `1px solid ${colors.border.subtle}` : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}>
                                <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: spacing.lg }}>{plan.name}</div>
                                <div style={{ fontSize: '48px', fontFamily: typography.secondaryFont, marginBottom: spacing.sm }}>${plan.price}</div>
                                <p style={{ color: colors.text.secondary, marginBottom: spacing.xl, flex: 1 }}>{plan.desc}</p>
                                <button style={{ width: '100%', padding: '16px', backgroundColor: colors.text.primary, color: colors.text.inverse, border: 'none', cursor: 'pointer' }}>Choose Plan</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 14. FOOTER ========== */}
            <footer style={{ backgroundColor: colors.bg.inverse, color: colors.text.inverse, padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr' }}>
                        <div>
                            <span style={{ fontSize: '24px', fontWeight: 700, fontFamily: typography.secondaryFont }}>MONO</span>
                        </div>
                        {['Product', 'Resources', 'Company'].map(col => (
                            <div key={col} className="space-y-4">
                                <h4 style={{ opacity: 0.5, fontSize: '14px', textTransform: 'uppercase' }}>{col}</h4>
                                {['Link 1', 'Link 2', 'Link 3'].map(l => (
                                    <div key={l} style={{ fontSize: '14px' }}>{l}</div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="mt-24 pt-8 border-t border-gray-800 flex justify-between items-center text-sm opacity-50">
                        <div>© 2024 Mono Systems Inc.</div>
                        <div className="flex gap-4">
                            <span>Privacy</span>
                            <span>Terms</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
