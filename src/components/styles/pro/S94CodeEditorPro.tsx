import React, { useState } from 'react';
import { useResponsive } from '@/hooks/useResponsive';
import {
    FileCode,
    GitBranch,
    Search,
    Settings,
    Box,
    Play,
    Terminal,
    Menu,
    X,
    ChevronRight,
    ChevronDown,
    Command,
    Globe,
    Zap,
    Layout,
    Cpu,
    Code2,
    Cloud
} from 'lucide-react';

export const S94CodeEditorPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isStrictMobile = deviceMode === 'mobile';
    const isDesktop = deviceMode === 'desktop';
    const isNavMobile = responsive.nav.showMobile;
    const spacing = responsive.spacing;

    const codeExcerpt = [
        '<span class="text-[#C586C0]">const</span> <span class="text-[#9CDCFE]">builder</span> = <span class="text-[#C586C0]">new</span> <span class="text-[#4EC9B0]">Architect</span>();',
        '<span class="text-[#9CDCFE]">builder</span>.<span class="text-[#DCDCAA]">deploy</span>({',
        '  target: <span class="text-[#CE9178]">"production"</span>,',
        '  optimization: <span class="text-[#B5CEA8]">true</span>,',
        '  scaling: <span class="text-[#CE9178]">"automatic"</span>',
        '});'
    ];

    return (
        <div className="min-h-screen bg-[#1E1E1E] text-[#D4D4D4] font-sans selection:bg-[#264F78] selection:text-white">
            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-[#1e1e1e]/90 backdrop-blur-md border-b border-white/5">
                <div
                    className="max-w-screen-2xl mx-auto flex items-center justify-between"
                    style={{ padding: `${spacing.md} ${spacing.lg}` }}
                >
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-10 h-10 bg-[#007acc] rounded-lg flex items-center justify-center rotate-[-10deg] group-hover:rotate-0 transition-transform duration-300">
                            <Code2 size={24} className="text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-white">Code<span className="text-[#007acc]">Draft</span></span>
                            <span className="text-[10px] uppercase tracking-widest text-white/40">IDE Framework v1.0.4</span>
                        </div>
                    </div>

                    {!isNavMobile && (
                        <nav className="flex items-center gap-8">
                            {['Explorer', 'Extensions', 'GitHub'].map((item) => (
                                <span key={item} className="text-sm font-medium text-white/60 hover:text-white cursor-pointer transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#007acc] transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            ))}
                            <button className="px-6 py-2 rounded-md bg-[#007acc] text-white text-sm font-bold hover:bg-[#0088e2] transition-colors border border-white/10">
                                Launch IDE
                            </button>
                        </nav>
                    )}
                    {isNavMobile && (
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-3 rounded-lg bg-white/5 border border-white/10 active:bg-white/10"
                        >
                            {menuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
                        </button>
                    )}
                </div>

                {menuOpen && isNavMobile && (
                    <div className="bg-[#1e1e1e] border-b border-white/10 absolute w-full z-40 animate-in slide-in-from-top duration-300">
                        {['Explorer', 'Extensions', 'GitHub'].map((item) => (
                            <div key={item} className="p-6 text-sm font-medium text-white/70 border-b border-white/5 active:bg-white/5">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            <main>
                {/* Hero Section */}
                <section
                    className="relative overflow-hidden"
                    style={{ padding: `${spacing.section} ${spacing.lg}` }}
                >
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#007acc] rounded-full blur-[120px]"></div>
                    </div>

                    <div className="max-w-screen-2xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative z-10">
                            <div
                                className="inline-flex items-center gap-2 mb-8 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#007acc] font-mono text-xs uppercase tracking-widest"
                                style={{ marginBottom: spacing.lg }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#007acc] animate-pulse"></span>
                                Production Ready v2.4
                            </div>

                            <h1
                                className="font-bold tracking-tight text-white mb-6 leading-[1.1]"
                                style={{
                                    fontSize: isStrictMobile ? responsive.fontSize['4xl'] : responsive.fontSize['5xl'],
                                    marginBottom: spacing.md
                                }}
                            >
                                The IDE for <br />
                                <span className="text-[#007acc]">Next-Gen Builders.</span>
                            </h1>

                            <p
                                className="text-white/40 max-w-xl font-medium leading-relaxed"
                                style={{
                                    fontSize: isStrictMobile ? '1.125rem' : '1.5rem',
                                    marginBottom: spacing.xl
                                }}
                            >
                                Ship faster with built-in extensions, cloud syncing, and zero-config deployment. Designed exclusively for productivity.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    className="bg-[#007acc] hover:bg-[#0088e2] text-white font-bold text-lg rounded-md transition-all flex items-center justify-center gap-2 border border-white/20"
                                    style={{ padding: `${spacing.md} ${spacing.xl}` }}
                                >
                                    <Play size={20} fill="currentColor" /> Start Coding
                                </button>
                                <button
                                    className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-lg rounded-md transition-colors"
                                    style={{ padding: `${spacing.md} ${spacing.xl}` }}
                                >
                                    Features
                                </button>
                            </div>
                        </div>

                        <div className="relative group">
                            <div
                                className="bg-[#252526] rounded-xl border border-white/10 shadow-2xl overflow-hidden"
                                style={{ padding: isStrictMobile ? spacing.xs : spacing.sm }}
                            >
                                <div
                                    className="flex items-center gap-2 bg-[#1e1e1e] border border-white/5 rounded-lg mb-4"
                                    style={{ padding: isStrictMobile ? spacing.sm : spacing.md, marginBottom: spacing.md }}
                                >
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                    <div className="mx-auto text-[10px] text-white/30 font-mono tracking-wider">main.ts — CodeDraft</div>
                                </div>
                                <div
                                    className="bg-[#1e1e1e] rounded-lg font-mono text-sm overflow-hidden"
                                    style={{ padding: spacing.lg }}
                                >
                                    {codeExcerpt.map((line, i) => (
                                        <div key={i} className="flex gap-4 group/line">
                                            <span className="w-6 text-white/20 text-right select-none">{i + 1}</span>
                                            <span className="text-white/80 whitespace-pre" dangerouslySetInnerHTML={{ __html: line }}></span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section
                    className="bg-[#1e1e1e]"
                    style={{ padding: `${spacing.section} ${spacing.lg}` }}
                >
                    <div className="max-w-screen-2xl mx-auto">
                        <div className="mb-16">
                            <h2
                                className="font-bold tracking-tight text-white mb-4"
                                style={{
                                    fontSize: isStrictMobile ? responsive.fontSize['3xl'] : responsive.fontSize['4xl'],
                                    marginBottom: spacing.sm
                                }}
                            >Engineered for Speed</h2>
                            <p
                                className="text-[#007acc] font-mono"
                                style={{ fontSize: responsive.fontSize.lg }}
                            >
                                $&gt; grep "performance" ./features
                            </p>
                        </div>

                        <div
                            className="grid gap-6 items-start"
                            style={{
                                gridTemplateColumns: isStrictMobile ? '1fr' : 'repeat(3, 1fr)',
                                gap: spacing.lg
                            }}
                        >
                            {[
                                { icon: Terminal, title: "Native Terminal", desc: "Full power of ZSH and Bash directly in your workspace." },
                                { icon: GitBranch, title: "Git Integrated", desc: "Conflict resolution and branch management out of the box." },
                                { icon: Cpu, title: "Low Overhead", desc: "Uses less than 200MB of RAM even with 50+ extensions active." },
                            ].map((f, i) => (
                                <div
                                    key={i}
                                    className="p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                                    style={{ padding: spacing.xl }}
                                >
                                    <div
                                        className="w-12 h-12 bg-[#007acc]/10 rounded-lg flex items-center justify-center text-[#007acc] group-hover:scale-110 transition-transform mb-6"
                                        style={{ marginBottom: spacing.md }}
                                    >
                                        <f.icon size={24} />
                                    </div>
                                    <h3
                                        className="text-white font-bold mb-4"
                                        style={{ fontSize: '1.25rem', marginBottom: spacing.sm }}
                                    >
                                        {f.title}
                                    </h3>
                                    <p className="text-white/40 leading-relaxed font-medium">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section
                    className="bg-[#1e1e1e] border-y border-white/5"
                    style={{ padding: `${spacing.section} ${spacing.lg}` }}
                >
                    <div className="max-w-screen-xl mx-auto">
                        <div
                            className="grid gap-8"
                            style={{
                                gridTemplateColumns: isStrictMobile ? '1fr' : 'repeat(3, 1fr)',
                                gap: spacing.lg
                            }}
                        >
                            {[
                                { name: 'Community', price: '0', icon: Cloud, desc: 'Ideal for OSS contributors' },
                                { name: 'Pro', price: '12', icon: Zap, desc: 'Professional developers', active: true },
                                { name: 'Studio', price: '29', icon: Box, desc: 'Teams and startups' }
                            ].map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`flex flex-col rounded-2xl border transition-all ${plan.active ? 'bg-[#252526] border-[#007acc] scale-105 z-10' : 'bg-white/5 border-white/10 opacity-70'}`}
                                    style={{ padding: spacing.xxl }}
                                >
                                    <div
                                        className="flex justify-between items-start"
                                        style={{ marginBottom: spacing.md }}
                                    >
                                        <div className="p-3 bg-white/5 rounded-lg text-white/40">
                                            <plan.icon size={20} />
                                        </div>
                                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{plan.name}</span>
                                    </div>

                                    <div
                                        className="flex items-baseline gap-1 text-white font-mono"
                                        style={{ marginBottom: spacing.lg }}
                                    >
                                        <span className="text-white/40 font-sans">$</span>
                                        <span
                                            className="font-bold tracking-tighter"
                                            style={{ fontSize: isStrictMobile ? '3rem' : '3.75rem' }}
                                        >
                                            {plan.price}
                                        </span>
                                        <span className="text-white/20 text-xs uppercase tracking-widest">/mo</span>
                                    </div>

                                    <p
                                        className="text-white/40 font-medium mb-8"
                                        style={{ marginBottom: spacing.xl }}
                                    >
                                        {plan.desc}
                                    </p>

                                    <ul className="space-y-4 mb-12 flex-grow">
                                        {['Cloud Sync', 'Unlimited Repos', '24/7 Support'].map((f) => (
                                            <li key={f} className="flex items-center gap-3 text-xs text-white/50 font-mono tracking-tight">
                                                <div className="w-1 h-1 rounded-full bg-[#007acc]"></div> {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        className={`w-full py-4 rounded-lg font-bold text-sm transition-all ${plan.active ? 'bg-[#007acc] text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                                        style={{ padding: `${spacing.md} 0` }}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section style={{ padding: `${spacing.xxl} ${spacing.lg}` }}>
                    <div
                        className="max-w-screen-2xl mx-auto bg-[#007acc] rounded-2xl relative overflow-hidden group shadow-2xl shadow-[#007acc]/20"
                        style={{ padding: isStrictMobile ? spacing.xl : spacing.xxxl }}
                    >
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <Code2 size={400} className="absolute -top-20 -right-20 rotate-[-20deg]" />
                        </div>

                        <div className={`relative z-10 flex ${isStrictMobile ? 'flex-col' : 'flex-row'} justify-between items-center`} style={{ gap: spacing.lg }}>
                            <div className={`${isStrictMobile ? 'text-center' : 'text-left'}`}>
                                <h2
                                    className="font-bold text-white mb-2 leading-tight"
                                    style={{
                                        fontSize: isStrictMobile ? responsive.fontSize['3xl'] : responsive.fontSize['5xl']
                                    }}
                                >Available everywhere.</h2>
                                <p
                                    className="text-white/70 font-medium"
                                    style={{ fontSize: responsive.fontSize.lg }}
                                >
                                    Download for macOS, Windows, or Linux.
                                </p>
                            </div>
                            <button
                                className="bg-white text-[#007acc] font-bold rounded-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10"
                                style={{
                                    padding: `${spacing.lg} ${spacing.xxl}`,
                                    fontSize: responsive.fontSize.lg
                                }}
                            >
                                Download Stable v1.8
                            </button>
                        </div>
                    </div>
                </section>

                <footer className="bg-[#1E1E1E] border-t border-[#333333] py-12 px-6 text-sm text-[#858585]">
                    <div className={`max-w-7xl mx-auto flex ${isStrictMobile ? 'flex-col' : 'flex-row'} justify-between items-center gap-6`}>
                        <div className="flex items-center gap-2">
                            <FileCode size={20} className="text-[#007ACC]" />
                            <span className="text-[#CCCCCC] font-bold">DevStudio</span>
                        </div>
                        <div className="flex gap-6">
                            {['Support', 'Privacy', 'Terms of Use', 'License'].map(link => (
                                <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
                            ))}
                        </div>
                        <div>
                            &copy; 2024 DevStudio Project.
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};
