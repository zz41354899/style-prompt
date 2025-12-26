import { useState } from 'react';
import { Sparkles, Hexagon, Component, Layers, Menu, X, ArrowRight, Disc, Eye } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S34Holographic = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Holographic Gradients
    const holoGradient = "linear-gradient(135deg, rgba(255,154,158,0.5) 0%, rgba(254,207,239,0.5) 20%, rgba(224,195,252,0.5) 40%, rgba(166,193,238,0.5) 60%, rgba(191,233,255,0.5) 80%, rgba(194,233,251,0.5) 100%)";
    const glassEffect = "backdrop-blur-xl bg-white/30 border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]";

    return (
        <div className="min-h-screen bg-[#f0f0f3] font-sans selection:bg-pink-300 selection:text-white overflow-hidden relative">
            {/* Background blobs */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 blur-[100px] animate-[spin_20s_linear_infinite] opacity-60" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 blur-[80px] animate-[spin_15s_linear_infinite_reverse] opacity-60" />
            </div>

            {/* Navbar */}
            <nav className={`fixed top-4 left-4 right-4 z-50 rounded-2xl ${glassEffect} px-6 py-4 transition-all duration-300`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center text-white shadow-lg shadow-pink-200">
                            <Sparkles size={16} />
                        </div>
                        <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">
                            PRISM
                        </span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Spectrum', 'Light', 'Refraction', 'Prism'].map((item) => (
                            <a key={item} href="#" className="font-medium text-gray-600 hover:text-gray-900 transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-pink-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-5 py-2 rounded-xl bg-white/50 hover:bg-white/80 transition-colors font-medium text-sm shadow-sm backdrop-blur border border-white/60">
                            Log In
                        </button>
                        {responsive.nav.showMobile && (
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="p-2 rounded-lg hover:bg-white/40 transition-colors"
                            >
                                {menuOpen ? <X /> : <Menu />}
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
                                Spectrum
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Light
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Refraction
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Prism
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative z-10 pt-40 pb-20 px-4 min-h-screen flex items-center">
                <div className={`max-w-7xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-12 items-center`}>
                    <div className="space-y-8 relative">
                        {/* Floating elements */}
                        <div className="absolute -top-20 -left-20 animate-bounce">
                            <div className={`w-16 h-16 rounded-2xl ${glassEffect} rotate-12 flex items-center justify-center`}>
                                <Hexagon className="text-pink-400" />
                            </div>
                        </div>

                        <h1 className={`${isMobile ? 'text-5xl' : 'text-7xl'} font-bold leading-tight text-gray-800`}>
                            Step into the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 filter drop-shadow-sm">
                                Holographic
                            </span> <br />
                            Future.
                        </h1>
                        <p className="text-lg text-gray-600 max-w-lg leading-relaxed mix-blend-multiply">
                            Experience a UI that shimmers and shifts. Iridescent gradients, soft blurs, and ethereal interactions.
                        </p>

                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4 pt-4`}>
                            <button className="relative px-8 py-4 rounded-2xl text-white font-bold overflow-hidden group shadow-xl shadow-purple-200 transition-transform hover:-translate-y-1">
                                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-[-100%] transition-transform duration-700 blur-md transform skew-y-12" />
                                <span className="relative flex items-center gap-2">Get Started <ArrowRight size={18} /></span>
                            </button>
                            <button className={`px-8 py-4 rounded-2xl font-bold text-gray-700 ${glassEffect} hover:bg-white/50 transition-all`}>
                                View Collection
                            </button>
                        </div>
                    </div>

                    <div className="relative perspective-1000">
                        {/* 3D Floating Card Stack */}
                        <div className={`relative w-full ${isMobile ? 'aspect-[4/5]' : 'aspect-square'} max-w-md mx-auto`}>

                            {/* Card 1 (Back) */}
                            <div
                                className={`absolute top-0 w-full h-full rounded-[2rem] ${glassEffect} transform translate-x-4 -translate-y-4 scale-90 opacity-60 z-10 animate-pulse`}
                                style={{ animationDuration: '4s' }}
                            />

                            {/* Card 2 (Middle) */}
                            <div
                                className={`absolute top-8 w-full h-full rounded-[2rem] ${glassEffect} transform translate-x-[-1rem] translate-y-4 scale-95 opacity-80 z-20 flex flex-col justify-end p-8 overflow-hidden`}
                                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)' }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 mix-blend-overlay" />
                            </div>

                            {/* Card 3 (Front) */}
                            <div
                                className={`absolute top-16 w-full h-full rounded-[2rem] ${glassEffect} z-30 p-8 flex flex-col justify-between shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] duration-500`}
                                style={{ backdropFilter: 'blur(40px)' }}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/80 to-white/20 flex items-center justify-center shadow-inner">
                                        <Disc className="text-gray-600" />
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-black/5 text-xs font-bold uppercase tracking-wider text-gray-500 border border-white/20">
                                        Holo v1
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="w-16 h-1 bg-gray-400/30 rounded-full" />
                                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-500">
                                        Ethereal
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        Light bending through digital glass surfaces creating rainbows.
                                    </p>
                                </div>

                                <div className="mt-8 rounded-xl h-32 w-full bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 opacity-50 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/40 skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Features */}
            <section className="py-20 px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
                        {[
                            { icon: Layers, title: 'Depth', color: 'from-blue-400 to-cyan-300' },
                            { icon: Eye, title: 'Clarity', color: 'from-purple-400 to-pink-300' },
                            { icon: Component, title: 'Structure', color: 'from-amber-300 to-orange-300' },
                        ].map((item, i) => (
                            <div key={i} className={`p-8 rounded-[2rem] ${glassEffect} hover:bg-white/40 transition-colors group cursor-pointer`}>
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg mb-6 transform group-hover:rotate-6 transition-transform`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Translucent layers that reveal context while maintaining focus.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 relative z-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-8">
                        <div className="bg-[#f0f0f3] rounded-full px-6 py-2">
                            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">
                                MADE WITH LIGHT
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-8 text-gray-500 text-sm font-medium">
                        <a href="#" className="hover:text-pink-500 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-purple-500 transition-colors">Terms</a>
                        <a href="#" className="hover:text-indigo-500 transition-colors">Contact</a>
                    </div>
                </div>
            </footer>

            <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-12deg); }
          50% { transform: translateX(150%) skewX(-12deg); }
          100% { transform: translateX(150%) skewX(-12deg); }
        }
      `}</style>
        </div>
    );
};
