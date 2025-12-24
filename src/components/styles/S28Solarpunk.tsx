import { useState } from 'react';
import { Leaf, Sun, Wind, Droplets, Menu, X, ArrowRight, Home, Activity, Battery } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S28Solarpunk = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen font-sans text-emerald-900 bg-[#Fdfbf7] overflow-x-hidden selection:bg-emerald-200">
            {/* Decorative Organic Shapes Background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[50vh] h-[50vh] bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
                <div className="absolute top-[20%] left-[-10%] w-[60vh] h-[60vh] bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
                <div className="absolute bottom-[-10%] left-[20%] w-[70vh] h-[70vh] bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
            </div>

            {/* Navbar */}
            <nav className="fixed top-6 left-0 right-0 z-50 px-4">
                <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-md rounded-full shadow-sm border border-white/50 px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-emerald-600 text-white p-2 rounded-full shadow-lg shadow-emerald-200">
                            <Leaf size={20} />
                        </div>
                        <span className="font-bold text-xl tracking-wide text-emerald-800">EdenOS</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Energy', 'Community', 'Garden', 'Market'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="font-medium hover:text-emerald-600 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-emerald-400 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-1 bg-yellow-100/50 px-3 py-1 rounded-full text-xs font-bold text-yellow-700 border border-yellow-200">
                            <Sun size={14} className="animate-spin-slow" />
                            <span>100% SOLAR</span>
                        </div>
                        {responsive.nav.showMobile && (
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="p-2 rounded-full hover:bg-emerald-50 transition-colors ml-2"
                            >
                                {menuOpen ? <X className="text-emerald-800" /> : <Menu className="text-emerald-800" />}
                            </button>
                        )}
                    </div>
                </div>
            </nav>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Energy
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Community
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Garden
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Market
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {menuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Energy
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Community
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Garden
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Market
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {menuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/20" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Energy
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Community
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Garden
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Market
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 z-10">
                <div className={`max-w-6xl mx-auto grid ${!isMobile ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
                    <div className="space-y-8">
                        <h1 className={`text-5xl ${!isMobile ? 'lg:text-7xl' : ''} font-serif font-medium leading-tight text-emerald-950`}>
                            Harmony between <br />
                            <span className="italic relative inline-block">
                                nature
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span> & technology
                        </h1>
                        <p className="text-xl text-emerald-700/80 leading-relaxed max-w-lg">
                            Reclaiming technology for a sustainable future. Build decentralized, green, and resilient communities with open-source tools.
                        </p>

                        <div className={`flex flex-col ${!isMobile ? 'sm:flex-row' : ''} gap-4`}>
                            <button className="px-8 py-4 bg-emerald-800 text-white rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg font-bold hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-200 hover:-translate-y-1 flex items-center justify-center gap-2">
                                Join the Collective <ArrowRight size={18} />
                            </button>
                            <button className="px-8 py-4 bg-white text-emerald-800 border-2 border-emerald-100 rounded-tr-lg rounded-bl-lg rounded-tl-3xl rounded-br-3xl font-bold hover:bg-emerald-50 transition-all">
                                Read Manifesto
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Organic image frame */}
                        <div className="relative z-10 bg-white p-2 rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700">
                            <div className="bg-emerald-100 rounded-[1.5rem] h-96 w-full flex items-center justify-center overflow-hidden relative">
                                {/* Abstract City Illustration */}
                                <div className="absolute inset-0 opacity-20">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute bottom-0 bg-emerald-800 w-16 rounded-t-lg"
                                            style={{
                                                left: `${i * 20 + 5}%`,
                                                height: `${Math.random() * 50 + 30}%`,
                                                opacity: 0.5 + (i * 0.1)
                                            }}
                                        />
                                    ))}
                                    {[...Array(8)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute -bottom-8 rounded-full bg-green-300 w-32 h-32 blur-xl"
                                            style={{ left: `${i * 15}%` }}
                                        />
                                    ))}
                                </div>
                                <div className="relative z-20 text-center">
                                    <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg transform rotate-3">
                                        <Leaf className="text-emerald-500" size={32} />
                                    </div>
                                    <div className="bg-white/80 backdrop-blur px-6 py-2 rounded-full text-emerald-900 font-bold text-sm shadow-sm inline-block">
                                        Eco-City v1.0
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background blobs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply opacity-50 blur-xl animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-200 rounded-full mix-blend-multiply opacity-50 blur-xl" />
                    </div>
                </div>
            </section>

            {/* Grid Features */}
            <section className="py-24 px-4 bg-white/50 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    <div className={`grid ${!isMobile ? 'md:grid-cols-3' : ''} gap-8`}>
                        {[
                            { icon: Sun, title: 'Solar Powered', desc: 'Interfaces that adapt to local energy availability.', color: 'text-amber-500', bg: 'bg-amber-100' },
                            { icon: Wind, title: 'Lightweight', desc: 'Minimal data transfer to reduce carbon footprint.', color: 'text-cyan-500', bg: 'bg-cyan-100' },
                            { icon: Droplets, title: 'Regenerative', desc: 'Systems designed to heal and grow over time.', color: 'text-blue-500', bg: 'bg-blue-100' },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] border border-emerald-50 hover:border-emerald-200 shadow-sm hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 group">
                                <div className={`w-14 h-14 ${feature.bg} rounded-2xl rounded-tr-none flex items-center justify-center mb-6 group-hover:rounded-tr-2xl transition-all duration-500`}>
                                    <feature.icon size={28} className={feature.color} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-3">{feature.title}</h3>
                                <p className="text-emerald-700/70 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section className="py-24 px-4 relative">
                <div className="max-w-5xl mx-auto bg-[#1a3c34] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-[100px] opacity-20" />

                    <div className={`relative z-10 grid ${!isMobile ? 'md:grid-cols-2' : ''} gap-12 items-center`}>
                        <div>
                            <h3 className="text-3xl font-serif mb-6">Monitor your impact</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                        <Activity size={24} className="text-emerald-300" />
                                    </div>
                                    <div>
                                        <div className="font-bold">Real-time Grid Status</div>
                                        <div className="text-emerald-200/60 text-sm">98% renewable energy mix today</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                        <Battery size={24} className="text-yellow-300" />
                                    </div>
                                    <div>
                                        <div className="font-bold">Storage Capacity</div>
                                        <div className="text-emerald-200/60 text-sm">Full charge expected in 2h</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-emerald-900/50 backdrop-blur p-6 rounded-3xl border border-emerald-500/30">
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <div className="text-sm text-emerald-300 mb-1">Total Savings</div>
                                    <div className="text-4xl font-bold font-mono">1,240 kWh</div>
                                </div>
                                <div className="text-right">
                                    <div className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold">+12% vs last week</div>
                                </div>
                            </div>
                            {/* Chart bars */}
                            <div className="flex items-end gap-3 h-32">
                                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="pt-20 pb-10 text-center">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="mb-12">
                        <Leaf size={48} className="mx-auto text-emerald-300 mb-4" />
                        <h2 className="text-3xl font-serif text-emerald-900">Build a better tomorrow.</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-emerald-800 font-medium mb-12">
                        <a href="#" className="hover:underline">Manifesto</a>
                        <a href="#" className="hover:underline">Documentation</a>
                        <a href="#" className="hover:underline">Hardware</a>
                        <a href="#" className="hover:underline">Donate</a>
                    </div>

                    <div className="text-emerald-600/60 text-sm">
                        Creative Commons Zero v1.0 Universal • Open Source • Carbon Neutral Hosting
                    </div>
                </div>
            </footer>
        </div>
    );
};
