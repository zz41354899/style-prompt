import React, { useState } from 'react';
import {
    Layout,
    MessageCircle,
    Calendar,
    CheckCircle2,
    Menu,
    X,
    Search,
    Bell,
    User,
    MoreHorizontal,
    Plus,
    ArrowRight,
    Smile
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S98AcrylicFluidPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';
    const isTablet = deviceMode === 'tablet';
    const spacing = responsive.spacing;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F3F3F3] text-[#1a1a1a] font-[Segou UI, sans-serif] selection:bg-[#0078D4] selection:text-white overflow-x-hidden relative">
            {/* 
        ACRYLIC FLUID PRO (Windows 11 / Mica)
        - Background: Light Gray #F3F3F3
        - Material: Mica (subtle noise + gradients)
        - Components: White with opacity, rounded corners (8px)
        - Typography: Segoe UI style, clear hierarchy
      */}

            {/* Mica Textures */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#E0F2F1] rounded-full blur-[80px] opacity-60"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#E3F2FD] rounded-full blur-[100px] opacity-80"></div>
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            </div>

            {/* NAVBAR */}
            <nav className="sticky top-0 z-50 px-4 py-2">
                <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-white/50 rounded-lg h-12 flex items-center justify-between px-4 shadow-sm">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-[#0078D4] to-[#00B7C3] rounded-sm grid place-items-center">
                                <Layout size={14} className="text-white" />
                            </div>
                            <span className="font-semibold text-sm">FluidWork</span>
                        </div>
                        {!isMobile && !isTablet && (
                            <div className="flex gap-1 text-xs">
                                {['Home', 'Projects', 'Team', 'Settings'].map(item => (
                                    <button key={item} className="px-3 py-1.5 hover:bg-black/5 rounded text-[#1a1a1a]/80 transition-colors">
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        {!isMobile && (
                            <div className="flex items-center bg-white/50 border border-black/5 rounded-md px-3 h-8 w-64">
                                <Search size={14} className="text-black/40 mr-2" />
                                <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-xs w-full placeholder:text-black/40" />
                            </div>
                        )}
                        <button className="w-8 h-8 flex items-center justify-center hover:bg-black/5 rounded-md transition-colors text-black/60">
                            <Bell size={16} />
                        </button>
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-red-400 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto">

                {/* HERO */}
                <section className="flex flex-col items-center text-center" style={{ marginBottom: spacing.section, paddingTop: spacing.xl }}>
                    <div className="inline-flex items-center gap-2 bg-white/60 border border-white/50 px-3 py-1 rounded-full shadow-sm" style={{ marginBottom: spacing.lg }}>
                        <span className="text-xs font-semibold text-[#0078D4]">New</span>
                        <span className="text-xs text-[#1a1a1a]/70">FluidWork 2.0 is here</span>
                    </div>

                    <h1 className="font-semibold text-[#1a1a1a] tracking-tight" style={{ fontSize: isMobile ? responsive.fontSize['4xl'] : responsive.fontSize['5xl'], marginBottom: spacing.lg }}>
                        Design your flow.
                    </h1>
                    <p className="text-xl text-[#1a1a1a]/60 max-w-xl mx-auto mb-10">
                        A workspace that adapts to you. Organize tasks, documents, and chats in one fluid interface.
                    </p>

                    <button className="px-8 py-3 bg-[#0078D4] hover:bg-[#006CA0] text-white rounded-md font-medium shadow-md hover:shadow-lg transition-all active:scale-95">
                        Download for Windows
                    </button>
                </section>

                {/* APP INTERFACE SHOWCASE */}
                <section className="perspective-1000" style={{ marginBottom: spacing.section }}>
                    <div className="bg-[#FFFFFE]/80 backdrop-blur-xl border border-white/50 rounded-xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] p-1 overflow-hidden h-[600px] flex flex-col">
                        {/* Title Bar */}
                        <div className="h-10 flex items-center justify-between px-4 draggable">
                            <div className="text-xs font-medium text-[#1a1a1a]/60">FluidWork - Team Dashboard</div>
                            <div className="flex gap-2">
                                <div className="hover:bg-black/5 p-2 rounded"><span className="block w-2.5 h-[1px] bg-black"></span></div>
                                <div className="hover:bg-black/5 p-2 rounded"><div className="w-2.5 h-2.5 border border-black"></div></div>
                                <div className="hover:bg-red-500 hover:text-white p-2 rounded"><X size={14} /></div>
                            </div>
                        </div>

                        <div className="flex-1 flex overflow-hidden bg-[#F3F3F3]/50">
                            {/* Sidebar */}
                            <div className="w-60 bg-white/50 border-r border-black/5 p-4 flex flex-col gap-6 hidden md:flex">
                                <div className="space-y-1">
                                    {['My Day', 'Important', 'Planned', 'Tasks'].map((item, i) => (
                                        <button key={item} className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center gap-3 ${i === 0 ? 'bg-[#0078D4]/10 text-[#0078D4] font-semibold' : 'hover:bg-black/5 text-[#1a1a1a]/70'}`}>
                                            {i === 0 && <div className="w-1 h-3 bg-[#0078D4] rounded-full"></div>}
                                            {item}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-auto bg-[#E3F2FD] p-4 rounded-lg">
                                    <h4 className="text-xs font-semibold text-[#0078D4] mb-1">Pro Plan</h4>
                                    <p className="text-[10px] text-[#0078D4]/70 mb-2">You are using 80% storage.</p>
                                    <div className="h-1 bg-white rounded-full overflow-hidden mb-2"><div className="w-[80%] h-full bg-[#0078D4]"></div></div>
                                    <button className="text-[10px] font-semibold bg-white text-[#0078D4] px-2 py-1 rounded shadow-sm">Upgrade</button>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-8 overflow-y-auto">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-1">My Day</h2>
                                        <p className="text-sm text-[#1a1a1a]/50">Monday, October 24</p>
                                    </div>
                                    <button className="bg-[#0078D4] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-[#006CA0]"><Plus size={18} /></button>
                                </div>

                                {/* Cards Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        { title: "Design Review", time: "10:00 AM", tag: "Work", color: "bg-orange-100 text-orange-700" },
                                        { title: "Team Sync", time: "2:00 PM", tag: "Meeting", color: "bg-blue-100 text-blue-700" },
                                        { title: "Grocery Run", time: "6:00 PM", tag: "Personal", color: "bg-green-100 text-green-700" },
                                    ].map((card, i) => (
                                        <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="w-5 h-5 border-2 border-[#1a1a1a]/20 rounded-full hover:border-[#0078D4] cursor-pointer"></div>
                                                <MoreHorizontal size={16} className="text-[#1a1a1a]/40 cursor-pointer" />
                                            </div>
                                            <h3 className="font-semibold mb-1">{card.title}</h3>
                                            <p className="text-xs text-[#1a1a1a]/50 mb-3">{card.time}</p>
                                            <span className={`text-[10px] font-medium px-2 py-1 rounded-full ${card.color}`}>{card.tag}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* FEATURES */}
                <section className="grid gap-6" style={{ marginBottom: spacing.section, gridTemplateColumns: `repeat(${isMobile ? 1 : 3}, 1fr)` }}>
                    {[
                        { icon: Layout, title: "Native Feel", desc: "Designed to feel right at home on Windows 11." },
                        { icon: CheckCircle2, title: "Focus Assist", desc: "Integrates with system focus modes to silence notifications." },
                        { icon: Smile, title: "Fluent Design", desc: "Beautiful acrylic materials and subtle motion effects." },
                    ].map((feat, i) => (
                        <div key={i} className="bg-white/60 p-6 rounded-xl shadow-sm border border-white/50 hover:bg-white/80 transition-colors">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0078D4] mb-4 shadow-sm">
                                <feat.icon size={20} />
                            </div>
                            <h3 className="font-semibold mb-2">{feat.title}</h3>
                            <p className="text-sm text-[#1a1a1a]/60">{feat.desc}</p>
                        </div>
                    ))}
                </section>


                <section className="bg-gradient-to-r from-[#0078D4] to-[#00B7C3] rounded-2xl text-center text-white shadow-xl relative overflow-hidden" style={{ padding: spacing.section, marginBottom: spacing.section }}>
                    <div className="relative z-10">
                        <h2 className="font-semibold" style={{ fontSize: responsive.fontSize['3xl'], marginBottom: spacing.md }}>Get productive today.</h2>
                        <p className="mb-8 opacity-90">Join 2 million users organizing their life with FluidWork.</p>
                        <button className="bg-white text-[#0078D4] px-8 py-3 rounded-md font-medium hover:bg-neutral-50 transition-colors shadow-lg">
                            Get from Microsoft Store
                        </button>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                </section>


                {/* FOOTER */}
                <footer className="border-t border-black/5 pt-12 pb-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#1a1a1a]/50">
                    <div>
                        © 2024 FluidWork Corp. All rights reserved.
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:underline">Privacy</a>
                        <a href="#" className="hover:underline">Terms</a>
                        <a href="#" className="hover:underline">Cookies</a>
                    </div>
                </footer>

            </main>
        </div >
    );
}
