import { useState } from 'react';
import { Box, Layers, LayoutGrid, Server, Menu, X, ArrowRight } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S44Isometric = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Isometric Grid Background
    const isoGrid = `
    repeating-linear-gradient(60deg, #E2E8F0 0, #E2E8F0 1px, transparent 1px, transparent 40px),
    repeating-linear-gradient(-60deg, #E2E8F0 0, #E2E8F0 1px, transparent 1px, transparent 40px)
  `;

    // ISO Utilities
    const isoTransform = "rotateX(60deg) rotateZ(45deg)"; // Creates isometric view
    const shadow = "box-shadow: 10px 10px 20px rgba(0,0,0,0.1), -5px -5px 20px rgba(255,255,255,0.8)";

    return (
        <div className="min-h-screen bg-[#F0F4F8] font-sans text-slate-800 selection:bg-blue-300 selection:text-blue-900 overflow-hidden relative">
            {/* Grid Background */}
            <div className="fixed inset-0 pointer-events-none opacity-40" style={{ background: isoGrid, backgroundPosition: 'center top' }} />

            {/* Navbar (Stacked Card) */}
            <nav className="fixed top-6 left-6 right-6 z-50">
                <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-[8px_8px_0_rgba(148,163,184,0.4)] border border-slate-200 p-4 flex justify-between items-center transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(148,163,184,0.3)] duration-300">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg shadow-inner flex items-center justify-center text-white transform rotate-3">
                            <Box />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-700">ISO.BUILD</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Solutions', 'Pricing', 'Resources', 'Enterprise'].map((item) => (
                            <a key={item} href="#" className="font-medium text-slate-500 hover:text-blue-600 transition-colors relative group">
                                {item}
                                <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-slate-800 text-white font-bold rounded-lg shadow-[0_4px_0_#1e293b] active:shadow-none active:translate-y-[4px] transition-all">
                            Login
                        </button>
                        {responsive.nav.showMobile && (
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="bg-slate-100 p-2 rounded-lg hover:bg-slate-200"
                            >
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
                                Solutions
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Pricing
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Resources
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Enterprise
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 flex items-center min-h-[90vh]">
                <div className={`max-w-7xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-16 items-center`}>

                    <div className="space-y-8 relative z-20">
                        <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                            v3.0 Now Available
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-7xl'} font-bold leading-tight text-slate-800`}>
                            Perfect <br />
                            <span className="text-blue-600 relative inline-block">
                                Perspective.
                                <svg className="absolute w-full h-3 bottom-1 left-0 text-blue-200 -z-10" fill="currentColor">
                                    <rect width="100%" height="100%" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
                            Design interfaces with depth. Align your workflow to the grid. Build better products, dimension by dimension.
                        </p>

                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4 pt-4`}>
                            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-transform flex items-center justify-center gap-2 group">
                                Start Trial <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-white text-slate-600 font-bold rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors">
                                View Demo
                            </button>
                        </div>
                    </div>

                    {/* Isometric Illustration Area */}
                    <div className="relative h-[600px] w-full flex items-center justify-center perspective-none">
                        {/* Note: True HTML/CSS isometry is tricky without specific transforms on a parent. 
                   We simulate the look here using CSS shapes and transforms. */}

                        <div className="relative w-80 h-80 transform rotate-x-[60deg] rotate-z-[45deg] preserve-3d">
                            {/* Floating Platforms layers */}

                            {/* Base Platform */}
                            <div className="absolute inset-0 bg-white rounded-3xl shadow-[20px_20px_60px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center transform translate-z-0">
                                <div className="w-full h-full opacity-50 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
                            </div>

                            {/* Layer 1 - Dashboard */}
                            <div className="absolute top-10 left-10 right-10 bottom-10 bg-slate-50 rounded-2xl shadow-[10px_10px_30px_rgba(0,0,0,0.05)] border border-white transform translate-z-[40px] transition-transform animate-[float_4s_ease-in-out_infinite]">
                                <div className="p-4 grid grid-cols-2 gap-4 h-full">
                                    <div className="bg-blue-100 rounded-lg h-full animate-pulse" />
                                    <div className="space-y-4">
                                        <div className="bg-slate-200 rounded-md h-4 w-3/4" />
                                        <div className="bg-slate-200 rounded-md h-4 w-1/2" />
                                        <div className="bg-slate-200 rounded-md h-20 w-full" />
                                    </div>
                                </div>
                            </div>

                            {/* Layer 2 - Floating Elements */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500 rounded-2xl shadow-lg transform translate-z-[80px] flex items-center justify-center animate-[float_5s_ease-in-out_infinite_reverse]">
                                <Layers className="text-white transform rotate-[-45deg]" size={32} />
                            </div>

                            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-purple-500 rounded-2xl shadow-lg transform translate-z-[60px] flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
                                <Server className="text-white transform rotate-[-45deg]" size={28} />
                            </div>

                            {/* Connecting Lines (Simulated with absolute divs) */}
                            <div className="absolute top-1/2 left-1/2 w-1 h-32 bg-blue-300/50 transform -translate-x-1/2 -translate-y-1/2 translate-z-[20px]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Blocks */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-8`}>
                        <div className="flex-1 bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border-b-4 border-blue-500 hover:-translate-y-2 transition-transform">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <LayoutGrid size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">Structured Layouts</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Every pixel has its place. Our grid system ensures perfect alignment across all viewports and devices.
                            </p>
                        </div>

                        <div className={`flex-1 bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border-b-4 border-purple-500 hover:-translate-y-2 transition-transform ${isMobile ? '' : 'mt-12'}`}>
                            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                <Layers size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">Multi-Layer Depth</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Create hierarchy with Z-index magic. Stack components to guide user attention naturally.
                            </p>
                        </div>

                        <div className={`flex-1 bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border-b-4 border-green-500 hover:-translate-y-2 transition-transform ${isMobile ? '' : 'mt-24'}`}>
                            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                <Box size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">Component Kits</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Pre-built isometric assets ready to drop into your project. consistency guaranteed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 pt-20 pb-10 text-slate-400 mt-20">
                <div className={`max-w-6xl mx-auto px-6 grid ${isMobile ? 'grid-cols-1' : 'grid-cols-4'} gap-12`}>
                    <div className={`${isMobile ? '' : 'col-span-2'}`}>
                        <div className="flex items-center gap-2 mb-6 text-white">
                            <Box className="text-blue-500" />
                            <span className="font-bold text-xl">ISO.BUILD</span>
                        </div>
                        <p className="max-w-xs leading-relaxed">
                            The only framework designed for the next dimension of web development.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className={`max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-sm ${isMobile ? 'text-center' : 'text-left'}`}>
                    © 2024 Isometric UI Inc. All rights reserved.
                </div>
            </footer>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateZ(40px) translateY(0); }
          50% { transform: translateZ(40px) translateY(-10px); }
        }
      `}</style>
        </div>
    );
};
