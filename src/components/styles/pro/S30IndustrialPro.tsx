import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Wrench, Bolt, Factory, Cog, Gauge, Box, Triangle, Shield, HardHat, FileText } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S30IndustrialPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

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
            `}</style>

            {/* Top Hazard Bar */}
            <div className="hazard-bar sticky top-0 z-[60]" />

            {/* Navigation */}
            <header className="sticky top-3 z-50 border-b-4 border-gray-800 bg-[#121212]/95 backdrop-blur-sm">
                <div className="max-w-screen-2xl mx-auto flex items-center justify-between p-4 px-6 md:px-12">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-14 h-14 bg-orange-600 flex items-center justify-center clip-corner transition-colors group-hover:bg-orange-500">
                            <Factory size={32} className="text-black" strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black uppercase tracking-tighter leading-none">Forge<span className="text-orange-500">UI</span></span>
                            <span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">Heavy Industries</span>
                        </div>
                    </div>

                    {!isMobile && (
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
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-4 bg-gray-800 border-2 border-gray-700 active:border-orange-500">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="border-t-4 border-orange-500 bg-gray-900 absolute w-full z-40">
                        {['Logistics', 'Machinery', 'Protocol'].map((item) => (
                            <div key={item} className="p-6 text-xl font-black uppercase tracking-widest border-b border-gray-800 active:bg-gray-800">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center blueprint-bg border-b-8 border-gray-800">
                <div className="absolute top-0 right-0 p-8 opacity-20 hidden md:block">
                    <Cog size={400} className="animate-spin-slow text-white" strokeWidth={0.5} />
                </div>

                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-orange-500/10 border border-orange-500/50 text-orange-500 font-bold tracking-widest uppercase">
                            <div className="w-2 h-2 bg-orange-500 animate-pulse"></div>
                            System Operational v4.0
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.9] tracking-tighter mb-8 text-white">
                            Built <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">To Last.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 max-w-xl mb-12 font-medium leading-relaxed font-sans">
                            Industrial-grade UI components engineered for maximum reliability, accessibility, and performance in extreme environments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="px-12 py-6 bg-orange-600 hover:bg-orange-500 text-black font-black text-xl uppercase tracking-widest clip-corner btn-clamp transition-colors flex items-center justify-center gap-3">
                                <Bolt fill="black" /> Initialize
                            </button>
                            <button className="px-12 py-6 bg-transparent border-4 border-gray-700 hover:border-white text-white font-black text-xl uppercase tracking-widest clip-corner transition-colors">
                                Documentation
                            </button>
                        </div>
                    </div>

                    {/* Technical Display */}
                    <div className="bg-black/50 border-2 border-gray-700 p-2 backdrop-blur-sm hidden lg:block">
                        <div className="flex justify-between items-center bg-gray-900 p-3 border-b border-gray-800">
                            <span className="font-mono text-xs text-orange-500">/// TERMNL_DISPLAY_01</span>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div className="p-8 grid grid-cols-2 gap-4 font-mono text-sm">
                            {[
                                { label: 'CPU_LOAD', val: '12%' }, { label: 'MEM_ALLOC', val: '4.2GB' },
                                { label: 'NET_IO', val: '1.2TB' }, { label: 'UPTIME', val: '99.9%' }
                            ].map((stat) => (
                                <div key={stat.label} className="bg-gray-800/50 p-4 border border-gray-700">
                                    <div className="text-gray-500 mb-1">{stat.label}</div>
                                    <div className="text-2xl text-green-400">{stat.val}</div>
                                    <div className="w-full bg-gray-700 h-1 mt-2">
                                        <div className="bg-green-500 h-1" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Systems (Features) */}
            <section className="py-24 px-6 bg-[#161616]">
                <div className="max-w-screen-2xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-20 flex items-center gap-6">
                        <Wrench size={48} className="text-orange-500" />
                        Core Specifications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Box, title: "Modular", desc: "Interchangeable parts." },
                            { icon: Shield, title: "Armored", desc: "Type-safe interfaces." },
                            { icon: Gauge, title: "Calibrated", desc: "Pixel-perfect metrics." },
                            { icon: Triangle, title: "Stable", desc: "99.99% fault tolerance." }
                        ].map((f, i) => (
                            <div key={i} className="bg-[#1E1E1E] border-l-8 border-orange-500 p-8 hover:bg-[#252525] transition-colors group">
                                <f.icon size={48} className="text-gray-600 mb-6 group-hover:text-white transition-colors" strokeWidth={1.5} />
                                <h3 className="text-3xl font-bold uppercase mb-2 text-white">{f.title}</h3>
                                <p className="text-gray-500 font-mono text-lg">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inspector Logs (Testimonials) */}
            <section className="py-24 px-6 metal-texture border-y-8 border-black">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-4">
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-black">Inspector Logs</h2>
                        <div className="font-mono font-bold text-black text-xl">REF: 2025-LOGS</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { id: "LOG-01", author: "Chief Eng. Sarah K.", status: "APPROVED", text: "Structural integrity of the layout system exceeds safety parameters." },
                            { id: "LOG-02", author: "Ops Manager Dave", status: "VERIFIED", text: "Efficiency improved by 200% after deployment. Zero downtime." },
                            { id: "LOG-03", author: "Safety Inspector", status: "CLEARED", text: "Accessibility compliance checks passed with flying colors." }
                        ].map((log, i) => (
                            <div key={i} className="bg-white p-6 shadow-2xl skew-x-[-2deg] hover:skew-x-0 transition-transform">
                                <div className="flex justify-between items-start mb-6 border-b-2 border-dashed border-gray-300 pb-4">
                                    <div className="font-mono font-bold text-gray-500">{log.id}</div>
                                    <div className="bg-green-600 text-white font-bold px-2 py-1 text-xs uppercase">{log.status}</div>
                                </div>
                                <p className="font-sans text-xl font-bold text-gray-800 mb-6 uppercase leading-tight">"{log.text}"</p>
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
            <section className="py-24 px-6 bg-[#121212]">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-center text-4xl md:text-6xl font-black uppercase mb-20 text-white">Procurement <span className="text-orange-500">Tiers</span></h2>

                    <div className="grid gap-1 grid-cols-1 md:grid-cols-3 bg-gray-800 p-1">
                        {[
                            { name: 'Standard', price: '$499', code: 'STD-01', active: false },
                            { name: 'Heavy Duty', price: '$999', code: 'HD-02', active: true },
                            { name: 'Enterprise', price: '$2499', code: 'ENT-03', active: false }
                        ].map((plan) => (
                            <div key={plan.name} className={`relative p-12 flex flex-col items-center text-center transition-all ${plan.active ? 'bg-[#1E1E1E] z-10 scale-105 border-4 border-orange-500' : 'bg-[#181818] border-r border-gray-800'}`}>
                                {plan.active && (
                                    <div className="absolute top-0 w-full h-8 bg-orange-500 text-black font-bold uppercase tracking-widest flex items-center justify-center text-xs">
                                        Suggested Config
                                    </div>
                                )}

                                <div className="font-mono text-gray-600 mb-4 mt-6">{plan.code}</div>
                                <h3 className="text-3xl font-black uppercase mb-2 text-white tracking-widest">{plan.name}</h3>
                                <div className="text-6xl font-black mb-8 text-white">{plan.price}</div>

                                <ul className="space-y-4 mb-12 w-full text-left pl-8 border-l-2 border-gray-700">
                                    {['Full Access', '24/7 Support', 'On-Site Setup', 'Lifetime Warranty'].map((f) => (
                                        <li key={f} className="flex items-center gap-3 text-gray-400 font-medium uppercase tracking-wider text-sm">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div> {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 font-black uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black ${plan.active ? 'bg-orange-500 text-black' : 'bg-gray-800 text-white'}`}>
                                    Initialize Order
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 bg-[#161616] border-t border-gray-800">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
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
                                <button className="w-full flex items-center justify-between p-6 text-left group hover:bg-[#252525] transition-colors border-l-4 border-transparent hover:border-orange-500" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold uppercase tracking-wider text-gray-300 group-hover:text-white">{item.q}</span>
                                    <ChevronDown size={24} className={`text-orange-500 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-6 pt-0 text-lg text-gray-500 font-sans border-l-4 border-orange-500 bg-[#252525]">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6">
                <div className="max-w-screen-2xl mx-auto p-12 md:p-24 bg-orange-600 relative overflow-hidden clip-corner">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: hazardStripes, backgroundSize: '70px 70px' }}></div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                        <div>
                            <h2 className="text-5xl md:text-8xl font-black uppercase text-black leading-none mb-4">Start Your<br />Engine</h2>
                            <p className="text-black/70 font-bold text-xl uppercase tracking-widest">System Ready. Awaiting Command.</p>
                        </div>
                        <button className="h-24 w-24 md:h-32 md:w-32 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl group cursor-pointer border-4 border-black/20">
                            <Bolt size={48} className="text-orange-500 animate-pulse group-hover:text-white" fill="currentColor" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-16 px-6 border-t-8 border-orange-600">
                <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
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

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm font-bold uppercase tracking-widest text-gray-500">
                        {['Manuals', 'Specs', 'Safety', 'Legal'].map(col => (
                            <div key={col} className="flex flex-col gap-4">
                                <span className="text-white border-b border-gray-800 pb-2">{col}</span>
                                <a href="#" className="hover:text-orange-500 transition-colors">Download</a>
                                <a href="#" className="hover:text-orange-500 transition-colors">View</a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-gray-900 flex justify-between items-center text-xs font-mono text-gray-700 uppercase">
                    <span>System Status: OPERATIONAL</span>
                    <span>v4.5.2-stable</span>
                </div>
            </footer>
        </div>
    );
};
