import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Wrench, Bolt, Factory, Cog, Gauge, Box, Triangle, Shield, HardHat, FileText } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S30IndustrialPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isStrictMobile = deviceMode === 'mobile';
    const isDesktop = deviceMode === 'desktop';
    const isNavMobile = responsive.nav.showMobile; // For Navigation (Mobile + Tablet)
    const spacing = responsive.spacing;

    const colors = {
        bg: '#121212',
        surface: '#1E1E1E',
        metal: '#2C2C2C',
        text: '#E0E0E0',
        muted: '#808080',
        orange: '#FF5722',
        yellow: '#FFC107',
        steel: '#607D8B',
        blueprint: '#0D47A1'
    };

    // Hazard Stripes Pattern
    const hazardStripes = `repeating-linear-gradient(45deg, ${colors.yellow}, ${colors.yellow} 10px, #000 10px, #000 20px)`;
    const blueprintGrid = `
        linear-gradient(${colors.blueprint}20 1px, transparent 1px),
        linear-gradient(90deg, ${colors.blueprint}20 1px, transparent 1px)
    `;

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Oswald", "Roboto Condensed", sans-serif' }}>

            {/* Global Styles for Industrial Effects */}
            <style>{`
                .hazard-bar {
                    background-image: ${hazardStripes};
                    height: 12px;
                    width: 100%;
                }
                .metal-texture {
                    background-color: ${colors.metal};
                    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23333' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
                }
                .blueprint-bg {
                    background-color: #0a192f;
                    background-image: ${blueprintGrid};
                    background-size: 40px 40px;
                }
                .clip-corner {
                    clip-path: polygon(
                        0 0, 
                        100% 0, 
                        100% calc(100% - 20px), 
                        calc(100% - 20px) 100%, 
                        0 100%
                    );
                }
                .btn-clamp:active {
                    transform: scale(0.98);
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
                @keyframes warning-blink {
                    0%, 100% { opacity: 1; text-shadow: 0 0 5px #ff5722; }
                    50% { opacity: 0.5; text-shadow: none; }
                }
                .animate-warning {
                    animation: warning-blink 2s ease-in-out infinite;
                }
                @keyframes grid-scroll {
                    0% { background-position: 0 0; }
                    100% { background-position: 40px 40px; }
                }
                .blueprint-scroll {
                    animation: grid-scroll 4s linear infinite;
                }
            `}</style>

            {/* Top Hazard Bar */}
            <div className="hazard-bar sticky top-0 z-[60]" />

            {/* Navigation */}
            <header className="sticky top-3 z-50 border-b-4 border-gray-800 bg-[#121212]/95 backdrop-blur-sm">
                <div
                    className="max-w-screen-2xl mx-auto flex items-center justify-between"
                    style={{ padding: isNavMobile ? spacing.md : `${spacing.md} ${spacing.xl}` }}
                >
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-14 h-14 bg-orange-600 flex items-center justify-center clip-corner transition-colors group-hover:bg-orange-500">
                            <Factory size={32} className="text-black" strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <span
                                className="font-black uppercase tracking-tighter leading-none"
                                style={{ fontSize: isStrictMobile ? '1.5rem' : '1.875rem' }}
                            >
                                Forge<span className="text-orange-500">UI</span>
                            </span>
                            <span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">Heavy Industries</span>
                        </div>
                    </div>

                    {!isNavMobile && (
                        <nav className="flex items-center gap-12">
                            {['Logistics', 'Machinery', 'Protocol'].map((item) => (
                                <span key={item} className="text-lg font-bold uppercase tracking-widest cursor-pointer hover:text-orange-500 transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></span>
                                </span>
                            ))}
                            <button className="px-10 py-3 font-bold text-lg tracking-widest uppercase bg-gray-800 border-2 border-gray-600 hover:border-orange-500 hover:text-orange-500 transition-all clip-corner">
                                Sys.Login
                            </button>
                        </nav>
                    )}
                    {isNavMobile && (
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-3 bg-gray-800 border-2 border-gray-700 active:border-orange-500"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {menuOpen && isNavMobile && (
                    <div className="border-t-4 border-orange-500 bg-gray-900 absolute w-full z-40">
                        {['Logistics', 'Machinery', 'Protocol'].map((item) => (
                            <div key={item} className="p-6 text-xl font-black uppercase tracking-widest border-b border-gray-800 active:bg-gray-800">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section
                className="relative min-h-[90vh] flex items-center blueprint-bg blueprint-scroll border-b-8 border-gray-800"
                style={{ padding: `${spacing.lg} 0` }}
            >
                <div className="absolute top-0 right-0 p-8 opacity-20 hidden md:block">
                    <Cog size={400} className="animate-spin-slow text-white" strokeWidth={0.5} />
                </div>

                <div
                    className="max-w-screen-2xl mx-auto w-full relative z-10 grid gap-16 items-center"
                    style={{
                        gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                        padding: `0 ${spacing.lg}`
                    }}
                >
                    <div>
                        <div
                            className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-orange-500/10 border border-orange-500/50 text-orange-500 font-bold tracking-widest uppercase"
                            style={{ marginBottom: spacing.lg }}
                        >
                            <div className="w-2 h-2 bg-orange-500 animate-pulse"></div>
                            System Operational v4.0
                        </div>

                        <h1
                            className="font-black uppercase leading-[0.9] tracking-tighter mb-8 text-white"
                            style={{
                                fontSize: isStrictMobile ? '4.5rem' : '8rem',
                                marginBottom: spacing.lg
                            }}
                        >
                            Built <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">To Last.</span>
                        </h1>

                        <p
                            className="text-gray-400 max-w-xl mb-12 font-medium leading-relaxed font-sans"
                            style={{
                                fontSize: isStrictMobile ? '1.25rem' : '1.5rem',
                                marginBottom: spacing.xl
                            }}
                        >
                            Industrial-grade UI components engineered for maximum reliability, accessibility, and performance in extreme environments.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-6"
                            style={{ gap: spacing.md }}
                        >
                            <button
                                className="px-12 py-6 bg-orange-600 hover:bg-orange-500 text-black font-black text-xl uppercase tracking-widest clip-corner btn-clamp transition-colors flex items-center justify-center gap-3"
                                style={{ padding: `${spacing.lg} ${spacing.xl}` }}
                            >
                                <Bolt fill="black" /> Initialize
                            </button>
                            <button
                                className="px-12 py-6 bg-transparent border-4 border-gray-700 hover:border-white text-white font-black text-xl uppercase tracking-widest clip-corner transition-colors"
                                style={{ padding: `${spacing.lg} ${spacing.xl}` }}
                            >
                                Documentation
                            </button>
                        </div>
                    </div>

                    {/* Technical Display */}
                    {!isStrictMobile && (
                        <div
                            className="bg-black/50 border-2 border-gray-700 p-2 backdrop-blur-sm"
                            style={{ padding: spacing.xs }}
                        >
                            <div
                                className="flex justify-between items-center bg-gray-900 p-3 border-b border-gray-800"
                                style={{ padding: spacing.sm }}
                            >
                                <span className="font-mono text-xs text-orange-500">/// TERMNL_DISPLAY_01</span>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                            </div>
                            <div
                                className="p-8 grid grid-cols-2 gap-4 font-mono text-sm"
                                style={{ padding: spacing.xl, gap: spacing.md }}
                            >
                                {[
                                    { label: 'CPU_LOAD', val: '12%' }, { label: 'MEM_ALLOC', val: '4.2GB' },
                                    { label: 'NET_IO', val: '1.2TB' }, { label: 'UPTIME', val: '99.9%' }
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="bg-gray-800/50 p-4 border border-gray-700"
                                        style={{ padding: spacing.md }}
                                    >
                                        <div className="text-gray-500 mb-1">{stat.label}</div>
                                        <div className="text-2xl text-green-400">{stat.val}</div>
                                        <div className="w-full bg-gray-700 h-1 mt-2">
                                            <div className="bg-green-500 h-1" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Core Systems (Features) */}
            <section
                className="bg-[#161616]"
                style={{ padding: `${spacing.section} ${spacing.lg}` }}
            >
                <div className="max-w-screen-2xl mx-auto">
                    <h2
                        className="font-black uppercase flex items-center gap-6"
                        style={{
                            fontSize: isStrictMobile ? '2.25rem' : '3.75rem',
                            marginBottom: spacing.xl,
                            gap: spacing.md
                        }}
                    >
                        <Wrench
                            size={isStrictMobile ? 32 : 48}
                            className="text-orange-500"
                        />
                        Core Specifications
                    </h2>

                    <div
                        className="grid gap-6"
                        style={{
                            gridTemplateColumns: isStrictMobile ? '1fr' : isDesktop ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
                            gap: spacing.md
                        }}
                    >
                        {[
                            { icon: Box, title: "Modular", desc: "Interchangeable parts." },
                            { icon: Shield, title: "Armored", desc: "Type-safe interfaces." },
                            { icon: Gauge, title: "Calibrated", desc: "Pixel-perfect metrics." },
                            { icon: Triangle, title: "Stable", desc: "99.99% fault tolerance." }
                        ].map((f, i) => (
                            <div
                                key={i}
                                className="bg-[#1E1E1E] border-l-8 border-orange-500 hover:bg-[#252525] transition-colors group"
                                style={{ padding: spacing.xl }}
                            >
                                <f.icon
                                    size={48}
                                    className="text-gray-600 mb-6 group-hover:text-white transition-colors"
                                    strokeWidth={1.5}
                                    style={{ marginBottom: spacing.md }}
                                />
                                <h3
                                    className="font-bold uppercase mb-2 text-white"
                                    style={{ fontSize: '1.875rem' }}
                                >
                                    {f.title}
                                </h3>
                                <p className="text-gray-500 font-mono text-lg">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inspector Logs (Testimonials) */}
            <section
                className="metal-texture border-y-8 border-black"
                style={{ padding: `${spacing.section} ${spacing.lg}` }}
            >
                <div className="max-w-screen-2xl mx-auto">
                    <div
                        className="flex flex-col md:flex-row justify-between items-end border-b-4 border-black pb-4"
                        style={{ marginBottom: spacing.xl, paddingBottom: spacing.sm }}
                    >
                        <h2
                            className="font-black uppercase text-black"
                            style={{ fontSize: isStrictMobile ? '2.25rem' : '3.75rem' }}
                        >Inspector Logs</h2>
                        <div className="font-mono font-bold text-black text-xl">REF: 2025-LOGS</div>
                    </div>

                    <div
                        className="grid gap-8"
                        style={{
                            gridTemplateColumns: isStrictMobile ? '1fr' : 'repeat(3, 1fr)',
                            gap: spacing.lg
                        }}
                    >
                        {[
                            { id: "LOG-01", author: "Chief Eng. Sarah K.", status: "APPROVED", text: "Structural integrity of the layout system exceeds safety parameters." },
                            { id: "LOG-02", author: "Ops Manager Dave", status: "VERIFIED", text: "Efficiency improved by 200% after deployment. Zero downtime." },
                            { id: "LOG-03", author: "Safety Inspector", status: "CLEARED", text: "Accessibility compliance checks passed with flying colors." }
                        ].map((log, i) => (
                            <div
                                key={i}
                                className="bg-white shadow-2xl skew-x-[-2deg] hover:skew-x-0 transition-transform"
                                style={{ padding: spacing.lg }}
                            >
                                <div
                                    className="flex justify-between items-start border-b-2 border-dashed border-gray-300 pb-4"
                                    style={{ marginBottom: spacing.lg, paddingBottom: spacing.md }}
                                >
                                    <div className="font-mono font-bold text-gray-500">{log.id}</div>
                                    <div className="bg-green-600 text-white font-bold px-2 py-1 text-xs uppercase">{log.status}</div>
                                </div>
                                <p
                                    className="font-sans text-xl font-bold text-gray-800 uppercase leading-tight"
                                    style={{ marginBottom: spacing.lg }}
                                >"{log.text}"</p>
                                <div className="flex items-center gap-3">
                                    <HardHat className="text-orange-600" />
                                    <div className="font-bold text-black uppercase">{log.author}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section
                className="bg-[#121212]"
                style={{ padding: `${spacing.section} ${spacing.lg}` }}
            >
                <div className="max-w-screen-xl mx-auto">
                    <h2
                        className="text-center font-black uppercase text-white"
                        style={{
                            fontSize: isStrictMobile ? '2.25rem' : '3.75rem',
                            marginBottom: spacing.xl
                        }}
                    >Procurement <span className="text-orange-500">Tiers</span></h2>

                    <div
                        className="grid gap-1 bg-gray-800"
                        style={{
                            gridTemplateColumns: isStrictMobile ? '1fr' : 'repeat(3, 1fr)',
                            padding: '1px',
                            gap: '1px'
                        }}
                    >
                        {[
                            { name: 'Standard', price: '$499', code: 'STD-01', active: false },
                            { name: 'Heavy Duty', price: '$999', code: 'HD-02', active: true },
                            { name: 'Enterprise', price: '$2499', code: 'ENT-03', active: false }
                        ].map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative flex flex-col items-center text-center transition-all ${plan.active ? 'bg-[#1E1E1E] z-10 scale-105 border-4 border-orange-500' : 'bg-[#181818] md:border-r border-gray-800'}`}
                                style={{ padding: spacing.xl }}
                            >
                                {plan.active && (
                                    <div className="absolute top-0 w-full h-8 bg-orange-500 text-black font-bold uppercase tracking-widest flex items-center justify-center text-xs animate-warning">
                                        Suggested Config
                                    </div>
                                )}

                                <div
                                    className="font-mono text-gray-600"
                                    style={{ marginBottom: spacing.sm, marginTop: spacing.lg }}
                                >
                                    {plan.code}
                                </div>
                                <h3 className="text-3xl font-black uppercase mb-2 text-white tracking-widest">{plan.name}</h3>
                                <div
                                    className="font-black text-white"
                                    style={{
                                        fontSize: isStrictMobile ? '3rem' : '3.75rem',
                                        marginBottom: spacing.lg
                                    }}
                                >
                                    {plan.price}
                                </div>

                                <ul
                                    className="space-y-4 w-full text-left pl-8 border-l-2 border-gray-700"
                                    style={{ marginBottom: spacing.xl }}
                                >
                                    {['Full Access', '24/7 Support', 'On-Site Setup', 'Lifetime Warranty'].map((f) => (
                                        <li key={f} className="flex items-center gap-3 text-gray-400 font-medium uppercase tracking-wider text-sm">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div> {f}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-4 font-black uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black ${plan.active ? 'bg-orange-500 text-black' : 'bg-gray-800 text-white'}`}
                                    style={{ padding: `${spacing.md} 0` }}
                                >
                                    Initialize Order
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section
                className="bg-[#161616] border-t border-gray-800"
                style={{ padding: `${spacing.section} ${spacing.lg}` }}
            >
                <div className="max-w-4xl mx-auto">
                    <div
                        className="flex items-center justify-between"
                        style={{ marginBottom: spacing.xl }}
                    >
                        <h2 className="text-4xl font-black uppercase text-white">Maintenance FAQ</h2>
                        <FileText size={40} className="text-gray-700" />
                    </div>

                    <div className="space-y-2">
                        {[
                            { q: 'Is this framework OSHA compliant?', a: 'Yes. All components meet standard operational safety protocols required by industrial interface guidelines.' },
                            { q: 'Can I deploy to rugged hardware?', a: 'Optimized for high-contrast visibility on low-fidelity industrial displays and touch panels.' },
                            { q: 'What is the load capacity?', a: 'Tested up to 10,000 concurrent updates per second without frame drops.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#1E1E1E]">
                                <button
                                    className="w-full flex items-center justify-between text-left group hover:bg-[#252525] transition-colors border-l-4 border-transparent hover:border-orange-500"
                                    style={{ padding: spacing.lg }}
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                >
                                    <span className="font-bold uppercase tracking-wider text-gray-300 group-hover:text-white">{item.q}</span>
                                    <ChevronDown size={24} className={`text-orange-500 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div
                                        className="text-lg text-gray-500 font-sans border-l-4 border-orange-500 bg-[#252525]"
                                        style={{ padding: spacing.lg, paddingTop: 0 }}
                                    >
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: `${spacing.xxl} ${spacing.lg}` }}>
                <div
                    className="max-w-screen-2xl mx-auto bg-orange-600 relative overflow-hidden clip-corner"
                    style={{ padding: isStrictMobile ? spacing.xl : spacing.xxxl }}
                >
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: hazardStripes, backgroundSize: '70px 70px' }}></div>

                    <div className={`relative z-10 flex ${isStrictMobile ? 'flex-col' : 'flex-row'} justify-between items-center`} style={{ gap: spacing.xl }}>
                        <div>
                            <h2
                                className="font-black uppercase text-black leading-none"
                                style={{
                                    fontSize: isStrictMobile ? '3rem' : '5rem',
                                    marginBottom: spacing.xs
                                }}
                            >Start Your<br />Engine</h2>
                            <p className="text-black/70 font-bold text-xl uppercase tracking-widest">System Ready. Awaiting Command.</p>
                        </div>
                        <button
                            className="bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl group cursor-pointer border-4 border-black/20"
                            style={{ width: isStrictMobile ? '6rem' : '8rem', height: isStrictMobile ? '6rem' : '8rem' }}
                        >
                            <Bolt size={isStrictMobile ? 36 : 48} className="text-orange-500 animate-pulse group-hover:text-white" fill="currentColor" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="bg-black border-t-8 border-orange-600"
                style={{ padding: `${spacing.xl} ${spacing.lg}` }}
            >
                <div className={`max-w-screen-2xl mx-auto flex ${isStrictMobile ? 'flex-col' : 'flex-row'} justify-between items-start`} style={{ gap: spacing.xl }}>
                    <div>
                        <div
                            className="flex items-center gap-3"
                            style={{ marginBottom: spacing.md }}
                        >
                            <div className="w-10 h-10 bg-orange-600 flex items-center justify-center clip-corner">
                                <Factory size={20} className="text-black" />
                            </div>
                            <span className="text-2xl font-black uppercase text-white tracking-tighter">Forge<span className="text-orange-600">UI</span></span>
                        </div>
                        <div className="text-gray-500 font-mono text-sm max-w-xs">
                            INDUSTRIAL GRADE INTERFACE SYSTEMS.<br />
                            EST. 2025. SECTOR 7G.
                        </div>
                    </div>

                    <div
                        className="grid text-sm font-bold uppercase tracking-widest text-gray-500"
                        style={{
                            gridTemplateColumns: isStrictMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                            gap: spacing.xl
                        }}
                    >
                        {['Manuals', 'Specs', 'Safety', 'Legal'].map(col => (
                            <div key={col} className="flex flex-col" style={{ gap: spacing.sm }}>
                                <span className="text-white border-b border-gray-800 pb-2" style={{ paddingBottom: spacing.xs }}>{col}</span>
                                <a href="#" className="hover:text-orange-500 transition-colors">Download</a>
                                <a href="#" className="hover:text-orange-500 transition-colors">View</a>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="max-w-screen-2xl mx-auto border-t border-gray-900 flex justify-between items-center text-xs font-mono text-gray-700 uppercase"
                    style={{ marginTop: spacing.xl, paddingTop: spacing.md }}
                >
                    <span>System Status: OPERATIONAL</span>
                    <span>v4.5.2-stable</span>
                </div>
            </footer>
        </div>
    );
};
