import { useState } from 'react';
import {
    Shield, Zap, ArrowRight, Activity, Server, Globe, Menu, X, Check,
    Lock, Users, BarChart3, Code, Bell, GitBranch, Cpu, Database,
    ChevronDown, ChevronUp, Mail, ExternalLink
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S01TechMinimalPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';
    const isTablet = deviceMode === 'tablet';

    // S01 Tech Minimal Design Tokens (from spec)
    const colors = {
        bg: {
            primary: '#FFFFFF',
            secondary: '#F9FAFB',
            elevated: '#FFFFFF',
        },
        border: {
            subtle: '#E2E8F0',
            strong: '#CBD5E1',
        },
        text: {
            primary: '#0F172A',
            secondary: '#475569',
            muted: '#94A3B8',
            inverse: '#FFFFFF',
        },
        brand: {
            primary: '#2563EB',
            primaryHover: '#1D4ED8',
            primaryActive: '#1E40AF',
        },
        status: {
            success: '#16A34A',
            warning: '#F59E0B',
            danger: '#DC2626',
        },
    };

    const radius = {
        sm: '10px',
        md: '14px',
        lg: '18px',
    };

    const shadow = {
        none: 'none',
        soft: '0 1px 2px rgba(15, 23, 42, 0.06)',
    };

    const spacing = responsive.spacing;

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundColor: colors.bg.primary,
                color: colors.text.primary,
                fontFamily: '"Inter", ui-sans-serif, system-ui',
                fontSize: '16px',
                lineHeight: 1.5,
            }}
        >
            {/* ========== 1. GLOBAL NAVIGATION ========== */}
            <header
                className="sticky top-0 z-50"
                style={{
                    backgroundColor: colors.bg.primary,
                    borderBottom: `1px solid ${colors.border.subtle}`,
                }}
            >
                <div
                    className="max-w-6xl mx-auto flex items-center justify-between"
                    style={{ padding: `${spacing.md} ${spacing.lg}` }}
                >
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div
                            className="flex items-center justify-center"
                            style={{
                                width: '32px',
                                height: '32px',
                                backgroundColor: colors.brand.primary,
                                borderRadius: radius.sm,
                            }}
                        >
                            <Server size={18} style={{ color: colors.text.inverse }} />
                        </div>
                        <span style={{ fontSize: '18px', fontWeight: 650, letterSpacing: '-0.02em' }}>
                            Aura
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    {!isMobile && !isTablet && (
                        <nav className="flex items-center gap-8">
                            {['Product', 'Solutions', 'Pricing', 'Docs', 'Blog'].map((item) => (
                                <span
                                    key={item}
                                    className="cursor-pointer transition-colors"
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 450,
                                        color: colors.text.secondary,
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {!isMobile && (
                            <span
                                className="cursor-pointer"
                                style={{ fontSize: '14px', fontWeight: 500, color: colors.text.secondary }}
                            >
                                Sign in
                            </span>
                        )}
                        {!isMobile && !isTablet && (
                            <button
                                style={{
                                    backgroundColor: colors.brand.primary,
                                    color: colors.text.inverse,
                                    border: 'none',
                                    borderRadius: radius.sm,
                                    padding: '8px 16px',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                }}
                            >
                                Get Started
                            </button>
                        )}
                        {(isMobile || isTablet) && (
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                style={{
                                    backgroundColor: 'transparent',
                                    border: `1px solid ${colors.border.subtle}`,
                                    borderRadius: radius.sm,
                                    padding: '8px',
                                    cursor: 'pointer',
                                    color: colors.text.secondary,
                                }}
                            >
                                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (isMobile || isTablet) && (
                    <div style={{ borderTop: `1px solid ${colors.border.subtle}`, padding: spacing.lg, backgroundColor: colors.bg.primary }}>
                        <div className="space-y-3">
                            {['Product', 'Solutions', 'Pricing', 'Docs', 'Blog'].map((item) => (
                                <div key={item} style={{ fontSize: '14px', fontWeight: 500, color: colors.text.secondary, padding: '8px 0' }}>
                                    {item}
                                </div>
                            ))}
                            <button
                                className="w-full mt-4"
                                style={{
                                    backgroundColor: colors.brand.primary,
                                    color: colors.text.inverse,
                                    border: 'none',
                                    borderRadius: radius.sm,
                                    padding: '12px 16px',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                }}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* ========== 2. HERO SECTION ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div
                        className="grid gap-16 items-center"
                        style={{ gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr' }}
                    >
                        {/* Left: Copy */}
                        <div>
                            {/* Trust Badge */}
                            <div
                                className="inline-flex items-center gap-2 mb-8"
                                style={{
                                    backgroundColor: colors.bg.elevated,
                                    border: `1px solid ${colors.border.subtle}`,
                                    borderRadius: '100px', // Full pill
                                    padding: '4px 12px',
                                    paddingRight: '16px',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    color: colors.text.secondary,
                                    boxShadow: shadow.soft,
                                }}
                            >
                                <div style={{
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    backgroundColor: colors.status.success
                                }} />
                                SOC2 Type II Ready
                            </div>

                            <h1
                                style={{
                                    fontSize: isMobile ? '36px' : '56px', // Spec: H1 scale
                                    fontWeight: 700, // Spec weight
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.025em',
                                    marginBottom: spacing.lg,
                                    color: colors.text.primary,
                                }}
                            >
                                Build, Deploy, and Scale {!isMobile && <br />}
                                <span style={{ color: colors.brand.primary }}>AI Products Faster</span>
                            </h1>

                            <p
                                style={{
                                    fontSize: '18px', // Slightly larger lead
                                    color: colors.text.secondary,
                                    lineHeight: 1.6,
                                    marginBottom: spacing.xl,
                                    maxWidth: '540px',
                                }}
                            >
                                A production-grade platform for inference, model versioning, monitoring, and secure APIs—built for modern teams.
                            </p>

                            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4 mb-10`}>
                                <button
                                    className="flex items-center justify-center gap-2 transition-all hover:-translate-y-px"
                                    style={{
                                        backgroundColor: colors.brand.primary,
                                        color: colors.text.inverse,
                                        border: 'none',
                                        borderRadius: radius.sm,
                                        boxShadow: shadow.soft,
                                        padding: '14px 28px',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Start building free
                                    <ArrowRight size={18} />
                                </button>
                                <button
                                    className="flex items-center justify-center gap-2 transition-colors hover:bg-gray-50"
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: colors.text.primary,
                                        border: `1px solid ${colors.border.subtle}`,
                                        borderRadius: radius.sm,
                                        padding: '14px 28px',
                                        fontSize: '15px',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                    }}
                                >
                                    View documentation
                                </button>
                            </div>

                            <div
                                className="flex items-center gap-6"
                                style={{ fontSize: '13px', color: colors.text.muted, fontWeight: 500 }}
                            >
                                <span className="flex items-center gap-2">
                                    <Check size={14} style={{ color: colors.text.primary }} />
                                    No credit card
                                </span>
                                <span className="flex items-center gap-2">
                                    <Check size={14} style={{ color: colors.text.primary }} />
                                    14-day pro trial
                                </span>
                            </div>
                        </div>

                        {/* Right: Product Visual (Simplified Clean UI) */}
                        <div
                            className="relative"
                            style={{
                                isolation: 'isolate',
                            }}
                        >
                            {/* Abstract Glow Behind */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '120%',
                                    height: '120%',
                                    background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
                                    zIndex: -1,
                                    pointerEvents: 'none',
                                }}
                            />

                            {/* Main Window */}
                            <div
                                style={{
                                    backgroundColor: colors.bg.elevated,
                                    border: `1px solid ${colors.border.subtle}`,
                                    borderRadius: radius.lg,
                                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0,0,0,0.02)',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Window Chrome */}
                                <div
                                    className="flex items-center gap-2 px-4 py-3 border-b"
                                    style={{
                                        borderColor: colors.border.subtle,
                                        backgroundColor: colors.bg.secondary
                                    }}
                                >
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                                    </div>
                                    <div
                                        className="mx-auto text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded"
                                        style={{ backgroundColor: 'rgba(0,0,0,0.03)' }}
                                    >
                                        dashboard.aura.ai
                                    </div>
                                </div>

                                {/* Dashboard Content Mockup */}
                                <div className="p-6 space-y-6">
                                    {/* Stats Row */}
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { label: 'Total Requests', val: '2.4M', delta: '+12%' },
                                            { label: 'Avg Latency', val: '43ms', delta: '-4ms' },
                                            { label: 'Error Rate', val: '0.01%', delta: '0%' },
                                        ].map((stat, i) => (
                                            <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                                <div className="text-[10px] text-slate-500 mb-1">{stat.label}</div>
                                                <div className="text-sm font-semibold text-slate-900">{stat.val}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Chart Area Mockup */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xs font-medium text-slate-700">Inference Volume</div>
                                            <div className="text-[10px] text-slate-400">Last 24h</div>
                                        </div>
                                        <div className="h-24 flex items-end gap-1">
                                            {Array.from({ length: 24 }).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 bg-blue-500/10 rounded-t-sm hover:bg-blue-500/20 transition-colors"
                                                    style={{ height: `${30 + Math.random() * 60}%` }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Active Deployment Row */}
                                    <div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <div>
                                                <div className="text-xs font-medium text-slate-900">production-v2.1</div>
                                                <div className="text-[10px] text-slate-500">Running • 4 replicas</div>
                                            </div>
                                        </div>
                                        <div className="text-[10px] font-mono text-slate-500">id: 8f2a9c</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== 3. PROBLEM / TENSION ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 style={{ fontSize: responsive.fontSize['3xl'], fontWeight: 650, marginBottom: spacing.md, color: colors.text.primary }}>
                            Challenges we solve
                        </h2>
                    </div>

                    <div
                        className="grid gap-6"
                        style={{ gridTemplateColumns: `repeat(${isMobile ? 1 : 3}, 1fr)` }}
                    >
                        {[
                            { title: 'Slow path to production', desc: 'Prototypes don\'t survive real traffic without proper infrastructure.' },
                            { title: 'Fragmented tooling', desc: 'Stitching vendors costs time, money, and reliability.' },
                            { title: 'Hidden infra risk', desc: 'Scaling, observability, and security become bottlenecks.' },
                        ].map((item) => (
                            <div
                                key={item.title}
                                style={{
                                    backgroundColor: colors.bg.elevated,
                                    border: `1px solid ${colors.border.subtle}`,
                                    borderRadius: radius.md,
                                    padding: spacing.xl,
                                }}
                            >
                                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: spacing.sm, color: colors.text.primary }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: '14px', color: colors.text.secondary, lineHeight: 1.5 }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 4. VALUE PROPOSITION ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div
                        className="grid gap-12 items-center"
                        style={{ gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}
                    >
                        <div>
                            <h2 style={{ fontSize: responsive.fontSize['3xl'], fontWeight: 650, marginBottom: spacing.xl, color: colors.text.primary }}>
                                Measurable outcomes
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { title: 'Ship in days, not weeks', desc: 'with managed deployment and versioning.' },
                                    { title: 'Operate confidently', desc: 'with monitoring, logs, and alerts by default.' },
                                    { title: 'Secure by design', desc: 'with RBAC and audit trails.' },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-3">
                                        <Check size={20} style={{ color: colors.status.success, marginTop: '2px' }} />
                                        <div>
                                            <span style={{ fontWeight: 600, color: colors.text.primary }}>{item.title}</span>
                                            <span style={{ color: colors.text.secondary }}> {item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className="grid gap-4"
                            style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
                        >
                            {[
                                { value: '70%', label: 'Fewer incidents' },
                                { value: '5x', label: 'Faster release cycle' },
                                { value: '< 5min', label: 'First deployment' },
                                { value: '24/7', label: 'Monitoring' },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="text-center"
                                    style={{
                                        backgroundColor: colors.bg.secondary,
                                        border: `1px solid ${colors.border.subtle}`,
                                        borderRadius: radius.md,
                                        padding: spacing.lg,
                                    }}
                                >
                                    <div style={{ fontSize: responsive.fontSize['3xl'], fontWeight: 700, color: colors.brand.primary }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: '13px', color: colors.text.secondary, marginTop: spacing.xs }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== 5. SYSTEM OVERVIEW ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 style={{ fontSize: responsive.fontSize['3xl'], fontWeight: 650, marginBottom: spacing.md, color: colors.text.primary }}>
                            How it works
                        </h2>
                        <p style={{ color: colors.text.secondary, maxWidth: '60ch', margin: '0 auto' }}>
                            A simple 4-step flow from ingestion to production.
                        </p>
                    </div>

                    <div
                        className="grid gap-6"
                        style={{ gridTemplateColumns: `repeat(${isMobile ? 2 : 4}, 1fr)` }}
                    >
                        {[
                            { icon: Database, label: 'Ingest', desc: 'SDKs, batch, streaming' },
                            { icon: BarChart3, label: 'Evaluate', desc: 'Test sets, comparisons' },
                            { icon: Cpu, label: 'Deploy', desc: 'Endpoints, scaling' },
                            { icon: Activity, label: 'Observe', desc: 'Latency, traces' },
                        ].map((step, i) => (
                            <div
                                key={step.label}
                                className="text-center"
                                style={{
                                    backgroundColor: colors.bg.elevated,
                                    border: `1px solid ${colors.border.subtle}`,
                                    borderRadius: radius.md,
                                    padding: spacing.lg,
                                }}
                            >
                                <div
                                    className="mx-auto flex items-center justify-center mb-4"
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        backgroundColor: colors.bg.secondary,
                                        borderRadius: radius.sm,
                                    }}
                                >
                                    <step.icon size={24} style={{ color: colors.brand.primary }} />
                                </div>
                                <div style={{ fontSize: '12px', color: colors.text.muted, marginBottom: spacing.xs }}>
                                    Step {i + 1}
                                </div>
                                <h3 style={{ fontSize: '16px', fontWeight: 600, color: colors.text.primary, marginBottom: spacing.xs }}>
                                    {step.label}
                                </h3>
                                <p style={{ fontSize: '13px', color: colors.text.secondary }}>
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 6. BENTO GRID ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 style={{ fontSize: responsive.fontSize['3xl'], fontWeight: 650, marginBottom: spacing.md, color: colors.text.primary }}>
                            Platform capabilities
                        </h2>
                    </div>

                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gridTemplateRows: 'auto' }}>
                        {/* Card A - Large */}
                        <div
                            style={{
                                gridColumn: isMobile ? 'span 1' : 'span 2',
                                backgroundColor: colors.bg.secondary,
                                borderLeft: `2px solid ${colors.brand.primary}`,
                                borderRadius: radius.md,
                                padding: spacing.xl,
                            }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <GitBranch size={24} style={{ color: colors.brand.primary }} />
                                <h3 style={{ fontSize: '18px', fontWeight: 600, color: colors.text.primary }}>Model Lifecycle</h3>
                            </div>
                            <p style={{ color: colors.text.secondary, marginBottom: spacing.lg }}>
                                Version, tag, and rollback models with confidence. Full lifecycle management built in.
                            </p>
                            <div className="flex gap-4 flex-wrap">
                                {['Versioning', 'Evaluation', 'Rollback'].map((tag) => (
                                    <span key={tag} style={{ fontSize: '12px', padding: '4px 8px', backgroundColor: colors.bg.elevated, border: `1px solid ${colors.border.subtle}`, borderRadius: radius.sm, color: colors.text.secondary }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Card B - Medium */}
                        <div
                            style={{
                                backgroundColor: colors.bg.elevated,
                                border: `1px solid ${colors.border.subtle}`,
                                borderRadius: radius.md,
                                padding: spacing.xl,
                            }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Code size={24} style={{ color: colors.brand.primary }} />
                                <h3 style={{ fontSize: '18px', fontWeight: 600, color: colors.text.primary }}>Inference API</h3>
                            </div>
                            <div
                                style={{
                                    backgroundColor: '#1e293b',
                                    borderRadius: radius.sm,
                                    padding: spacing.md,
                                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                                    fontSize: '12px',
                                    color: '#e2e8f0',
                                }}
                            >
                                <div style={{ color: '#94a3b8' }}>// Quick start</div>
                                <div>aura.infer(model_id)</div>
                            </div>
                        </div>

                        {/* Card C - Medium */}
                        <div
                            style={{
                                backgroundColor: colors.bg.elevated,
                                border: `1px solid ${colors.border.subtle}`,
                                borderRadius: radius.md,
                                padding: spacing.xl,
                            }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Bell size={24} style={{ color: colors.status.warning }} />
                                <h3 style={{ fontSize: '18px', fontWeight: 600, color: colors.text.primary }}>Monitoring & Alerts</h3>
                            </div>
                            <p style={{ color: colors.text.secondary, fontSize: '14px' }}>
                                Latency p50/p95 metrics, real-time alerts, webhook integrations.
                            </p>
                        </div>

                        {/* Card D - Small */}
                        <div
                            style={{
                                backgroundColor: colors.bg.elevated,
                                border: `1px solid ${colors.border.subtle}`,
                                borderRadius: radius.md,
                                padding: spacing.lg,
                            }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <Lock size={20} style={{ color: colors.text.secondary }} />
                                <h3 style={{ fontSize: '16px', fontWeight: 600, color: colors.text.primary }}>Security</h3>
                            </div>
                            <p style={{ color: colors.text.secondary, fontSize: '13px' }}>
                                RBAC, audit logs, encryption at rest.
                            </p>
                        </div>

                        {/* Card E - Small */}
                        <div
                            style={{
                                backgroundColor: colors.bg.elevated,
                                border: `1px solid ${colors.border.subtle}`,
                                borderRadius: radius.md,
                                padding: spacing.lg,
                            }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <Users size={20} style={{ color: colors.text.secondary }} />
                                <h3 style={{ fontSize: '16px', fontWeight: 600, color: colors.text.primary }}>Team Collaboration</h3>
                            </div>
                            <p style={{ color: colors.text.secondary, fontSize: '13px' }}>
                                Workspaces, permissions, approvals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== 9. TRUST & PROOF ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto text-center">
                    <p style={{ color: colors.text.muted, fontSize: '13px', marginBottom: spacing.lg, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Trusted by teams at
                    </p>
                    <div
                        className="flex justify-center gap-8 flex-wrap mb-12"
                        style={{ opacity: 0.6 }}
                    >
                        {['Acme Corp', 'TechStart', 'DataFlow', 'CloudSync', 'AILabs'].map((company) => (
                            <span key={company} style={{ fontSize: '18px', fontWeight: 600, color: colors.text.secondary }}>
                                {company}
                            </span>
                        ))}
                    </div>

                    <div
                        className="grid gap-6"
                        style={{ gridTemplateColumns: `repeat(${isMobile ? 1 : 3}, 1fr)` }}
                    >
                        {[
                            { value: '99.99%', label: 'Uptime SLA' },
                            { value: '10B+', label: 'Requests served' },
                            { value: '< 50ms', label: 'P95 latency' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                style={{
                                    backgroundColor: colors.bg.elevated,
                                    border: `1px solid ${colors.border.subtle}`,
                                    borderRadius: radius.md,
                                    padding: spacing.xl,
                                }}
                            >
                                <div style={{ fontSize: responsive.fontSize['4xl'], fontWeight: 700, color: colors.text.primary }}>
                                    {stat.value}
                                </div>
                                <div style={{ fontSize: '14px', color: colors.text.secondary, marginTop: spacing.xs }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 10. INTEGRATIONS ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 style={{ fontSize: responsive.fontSize['3xl'], fontWeight: 650, marginBottom: spacing.md, color: colors.text.primary }}>
                            Integrates with your stack
                        </h2>
                    </div>

                    <div
                        className="grid gap-4"
                        style={{ gridTemplateColumns: `repeat(${isMobile ? 2 : 4}, 1fr)` }}
                    >
                        {['AWS', 'GCP', 'Azure', 'Snowflake', 'BigQuery', 'Postgres', 'GitHub', 'Datadog'].map((integration) => (
                            <div
                                key={integration}
                                style={{
                                    backgroundColor: colors.bg.secondary,
                                    border: `1px solid ${colors.border.subtle}`,
                                    borderRadius: radius.sm,
                                    padding: spacing.md,
                                    textAlign: 'center',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: colors.text.secondary,
                                }}
                            >
                                {integration}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 11. USE CASES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 style={{ fontSize: responsive.fontSize['3xl'], fontWeight: 650, marginBottom: spacing.md, color: colors.text.primary }}>
                            Built for every stage
                        </h2>
                        <p style={{ color: colors.text.secondary, maxWidth: '60ch', margin: '0 auto', fontSize: '18px' }}>
                            From first prototype to global scale, Aura adapts to your needs.
                        </p>
                    </div>

                    <div
                        className="grid gap-8"
                        style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}
                    >
                        {[
                            {
                                title: 'AI-Native SaaS',
                                desc: 'Ship inference endpoints for customer-facing features directly to production.',
                                metric: '10x faster time-to-market',
                                label: 'For Builders'
                            },
                            {
                                title: 'Enterprise Internal Tools',
                                desc: 'Secure, compliant deployments across teams with full RBAC and audit logs.',
                                metric: 'Zero-trust security model',
                                label: 'For IT & DevOps'
                            },
                            {
                                title: 'Research to Production',
                                desc: 'Evaluate, version, and promote models safely from lab to live traffic.',
                                metric: 'Seamless model promotion',
                                label: 'For ML Teams'
                            }
                        ].map((useCase) => (
                            <div
                                key={useCase.title}
                                className="flex flex-col h-full"
                                style={{
                                    backgroundColor: colors.bg.elevated,
                                    border: `1px solid ${colors.border.subtle}`,
                                    borderRadius: radius.md,
                                    padding: spacing.xl,
                                    boxShadow: shadow.soft,
                                }}
                            >
                                <div
                                    className="mb-6 inline-block self-start"
                                    style={{
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        fontWeight: 600,
                                        color: colors.brand.primary,
                                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                                        padding: '4px 8px',
                                        borderRadius: '4px'
                                    }}
                                >
                                    {useCase.label}
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: spacing.sm, color: colors.text.primary }}>
                                    {useCase.title}
                                </h3>
                                <p style={{ fontSize: '15px', color: colors.text.secondary, lineHeight: 1.6, flex: 1, marginBottom: spacing.lg }}>
                                    {useCase.desc}
                                </p>
                                <div
                                    style={{
                                        borderTop: `1px solid ${colors.border.subtle}`,
                                        paddingTop: spacing.md,
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: colors.text.primary,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <Activity size={16} style={{ color: colors.status.success }} />
                                    {useCase.metric}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 12. PRICING ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.secondary }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 style={{ fontSize: responsive.fontSize['3xl'], fontWeight: 650, marginBottom: spacing.md, color: colors.text.primary }}>
                            Simple, transparent pricing
                        </h2>

                        {/* Billing Toggle */}
                        <div className="inline-flex items-center gap-3 p-1 bg-white border rounded-lg" style={{ borderColor: colors.border.subtle }}>
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: radius.sm,
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    backgroundColor: billingCycle === 'monthly' ? colors.brand.primary : 'transparent',
                                    color: billingCycle === 'monthly' ? colors.text.inverse : colors.text.secondary,
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle('annual')}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: radius.sm,
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    backgroundColor: billingCycle === 'annual' ? colors.brand.primary : 'transparent',
                                    color: billingCycle === 'annual' ? colors.text.inverse : colors.text.secondary,
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                Annual
                            </button>
                        </div>
                    </div>

                    <div
                        className="grid gap-6"
                        style={{ gridTemplateColumns: `repeat(${isMobile ? 1 : 3}, 1fr)` }}
                    >
                        {[
                            {
                                name: 'Free',
                                price: billingCycle === 'monthly' ? '$0' : '$0',
                                description: 'For hobby / evaluation',
                                features: ['Up to 5 team members', '1,000 requests/mo', 'Community support'],
                                popular: false,
                            },
                            {
                                name: 'Pro',
                                price: billingCycle === 'monthly' ? '$29' : '$24',
                                description: 'For production teams',
                                features: ['Up to 50 team members', '100,000 requests/mo', 'Priority support', 'Advanced analytics'],
                                popular: true,
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                description: 'Compliance + custom scale',
                                features: ['Unlimited team members', 'Unlimited requests', 'Dedicated support', 'SLA guarantee', 'Custom integrations'],
                                popular: false,
                            },
                        ].map((plan) => (
                            <div
                                key={plan.name}
                                style={{
                                    backgroundColor: colors.bg.elevated,
                                    border: plan.popular ? `2px solid ${colors.brand.primary}` : `1px solid ${colors.border.subtle}`,
                                    borderRadius: radius.md,
                                    padding: spacing.xl,
                                    position: 'relative',
                                }}
                            >
                                {plan.popular && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-12px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            backgroundColor: colors.brand.primary,
                                            color: colors.text.inverse,
                                            padding: '4px 12px',
                                            fontSize: '12px',
                                            fontWeight: 500,
                                            borderRadius: radius.sm,
                                        }}
                                    >
                                        Most Popular
                                    </div>
                                )}

                                <div className="text-center mb-6" style={{ marginTop: plan.popular ? '8px' : '0' }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: spacing.sm, color: colors.text.primary }}>
                                        {plan.name}
                                    </h3>
                                    <div style={{ fontSize: responsive.fontSize['4xl'], fontWeight: 700, color: colors.text.primary }}>
                                        {plan.price}
                                        {plan.price !== 'Custom' && <span style={{ fontSize: '14px', fontWeight: 400, color: colors.text.secondary }}>/mo</span>}
                                    </div>
                                    <p style={{ color: colors.text.secondary, fontSize: '14px', marginTop: spacing.xs }}>
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 mb-2">
                                            <Check size={16} style={{ color: colors.status.success }} />
                                            <span style={{ fontSize: '14px', color: colors.text.primary }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    style={{
                                        width: '100%',
                                        backgroundColor: plan.popular ? colors.brand.primary : 'transparent',
                                        color: plan.popular ? colors.text.inverse : colors.text.primary,
                                        border: plan.popular ? 'none' : `1px solid ${colors.border.subtle}`,
                                        borderRadius: radius.sm,
                                        padding: '12px 0',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                    }}
                                >
                                    {plan.name === 'Enterprise' ? 'Contact sales' : 'Start free trial'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 style={{ fontSize: responsive.fontSize['3xl'], fontWeight: 650, color: colors.text.primary }}>
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {[
                            { q: 'What is Aura?', a: 'Aura is a production-grade AI platform for inference, model versioning, monitoring, and secure APIs.' },
                            { q: 'Can I change my plan later?', a: 'Yes, you can upgrade or downgrade at any time. Changes take effect at the next billing cycle.' },
                            { q: 'Do you offer enterprise support?', a: 'Yes, we offer dedicated enterprise support with custom SLAs and priority response times.' },
                        ].map((faq, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundColor: colors.bg.elevated,
                                    border: `1px solid ${colors.border.subtle}`,
                                    borderRadius: radius.sm,
                                    overflow: 'hidden',
                                }}
                            >
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between text-left"
                                    style={{ padding: spacing.lg, background: 'none', border: 'none', cursor: 'pointer' }}
                                >
                                    <span style={{ fontSize: '16px', fontWeight: 600, color: colors.text.primary }}>{faq.q}</span>
                                    {expandedFaq === i ? <ChevronUp size={20} style={{ color: colors.text.muted }} /> : <ChevronDown size={20} style={{ color: colors.text.muted }} />}
                                </button>
                                {expandedFaq === i && (
                                    <div style={{ padding: `0 ${spacing.lg} ${spacing.lg}`, color: colors.text.secondary, fontSize: '14px', lineHeight: 1.6 }}>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 13. CTA ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-3xl mx-auto">
                    <div
                        className="text-center"
                        style={{
                            backgroundColor: colors.bg.secondary,
                            border: `1px solid ${colors.border.subtle}`,
                            borderRadius: radius.lg,
                            padding: `${spacing.section} ${spacing.xl}`,
                        }}
                    >
                        <h2 style={{ fontSize: responsive.fontSize['4xl'], fontWeight: 700, marginBottom: spacing.md, color: colors.text.primary }}>
                            Start building with AI today
                        </h2>
                        <p style={{ color: colors.text.secondary, marginBottom: spacing.xl }}>
                            Deploy your first endpoint in minutes.
                        </p>
                        <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                            <button
                                className="flex items-center justify-center gap-2"
                                style={{
                                    backgroundColor: colors.brand.primary,
                                    color: colors.text.inverse,
                                    border: 'none',
                                    borderRadius: radius.sm,
                                    padding: '14px 28px',
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                }}
                            >
                                Start free
                                <ArrowRight size={18} />
                            </button>
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    color: colors.text.primary,
                                    border: `1px solid ${colors.border.subtle}`,
                                    borderRadius: radius.sm,
                                    padding: '14px 28px',
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                }}
                            >
                                Talk to sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== 14. FOOTER ========== */}
            <footer style={{ padding: `${spacing.section} ${spacing.lg}`, borderTop: `1px solid ${colors.border.subtle}` }}>
                <div className="max-w-6xl mx-auto">
                    <div
                        className="grid gap-8 mb-12"
                        style={{ gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' }}
                    >
                        {[
                            { title: 'Product', links: ['Overview', 'Security', 'Changelog'] },
                            { title: 'Resources', links: ['Docs', 'API Reference', 'Tutorials'] },
                            { title: 'Company', links: ['About', 'Careers', 'Blog'] },
                            { title: 'Support', links: ['Status', 'Contact', 'Community'] },
                        ].map((col) => (
                            <div key={col.title}>
                                <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: spacing.md, color: colors.text.primary }}>
                                    {col.title}
                                </h4>
                                <div className="space-y-2">
                                    {col.links.map((link) => (
                                        <div key={link} style={{ fontSize: '14px', color: colors.text.secondary, cursor: 'pointer' }}>
                                            {link}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className="flex flex-wrap justify-between items-center gap-4 pt-8"
                        style={{ borderTop: `1px solid ${colors.border.subtle}` }}
                    >
                        <div className="flex items-center gap-6">
                            <span style={{ fontSize: '13px', color: colors.text.muted }}>© 2024 Aura. All rights reserved.</span>
                        </div>
                        <div className="flex gap-6">
                            {['Terms', 'Privacy', 'DPA', 'Cookies'].map((item) => (
                                <span key={item} style={{ fontSize: '13px', color: colors.text.muted, cursor: 'pointer' }}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
