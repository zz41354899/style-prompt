import { useState } from 'react';
import { Box, Layers, Triangle, Hexagon, Menu, X, ArrowRight, Zap } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S43LowPoly = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // CSS for Trianglify-like background
    const polyBg = `
    linear-gradient(135deg, #2B32B2 0%, #1488CC 100%)
  `;

    return (
        <div className="min-h-screen bg-[#2C3E50] font-sans text-white overflow-x-hidden relative">
            {/* Dynamic Polygon Background Overlay */}
            <div className="fixed inset-0 z-0 opacity-20" style={{
                backgroundImage: 'conic-gradient(from 90deg at 50% 50%, #202020 0%, #303030 50%, #101010 100%)',
                maskImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)'
            }} />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-[#2C3E50]/90 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 clip-path-polygon flex items-center justify-center shadow-lg transform rotate-45">
                            <Triangle className="transform -rotate-45 fill-white text-white" size={20} />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">POLY<span className="text-orange-400">VERSE</span></span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Meshes', 'Shaders', 'Assets', 'Render'].map((item) => (
                            <a key={item} href="#" className="text-sm font-bold uppercase tracking-wider hover:text-orange-400 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/5 rounded-none transform skew-x-[-12deg] transition-all">
                            <span className="block transform skew-x-[12deg] font-bold text-sm">Get Started</span>
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
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
                                Meshes
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shaders
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Assets
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Render
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative z-10 overflow-hidden">
                {/* Decorative Polygons */}
                <div className="absolute top-20 right-[-100px] w-96 h-96 bg-gradient-to-br from-purple-600 to-blue-600 opacity-30 transform rotate-45 skew-y-12 blur-sm" />
                <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-gradient-to-tr from-pink-600 to-orange-600 opacity-20 transform -rotate-12 skew-x-12 blur-sm" />

                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-12 items-center`}>
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg mb-6 border border-white/10 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Next Gen Rendering</span>
                        </div>

                        <h1 className={`${isMobile ? 'text-5xl' : 'text-7xl'} font-bold leading-tight mb-6`}>
                            Experience <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' }}>
                                Digital Depth
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
                            Minimalist geometry meets vibrant dimensionality. Build stunning, lightweight 3D interfaces without the heavy load.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow clip-path-slant flex items-center gap-2">
                                Start Building <ArrowRight size={18} />
                            </button>
                            <button className="px-8 py-4 bg-[#34495E] border border-white/10 hover:bg-[#3E5269] transition-colors font-bold clip-path-slant">
                                View Gallery
                            </button>
                        </div>
                    </div>

                    {/* Simulated Low Poly Graphic Box */}
                    <div className="relative h-[400px] w-full perspective-800 flex items-center justify-center">
                        {/* Floating Pyramids/Elements */}
                        <div className="relative w-64 h-64 animate-[spin_20s_linear_infinite]">
                            {/* Central crystal */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-blue-500/80 to-purple-600/80 backdrop-blur-md transform rotate-45 border border-white/20 shadow-[0_0_50px_rgba(59,130,246,0.3)] z-10"
                                style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />

                            {/* Orbiting elements */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-pink-500 transform rotate-45 animate-bounce" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-orange-500 transform rotate-12 animate-pulse" />
                            <div className="absolute top-1/2 right-[-20px] w-10 h-10 bg-green-500 transform rotate-[-30deg]" />
                        </div>

                        {/* Reflected floor */}
                        <div className="absolute bottom-[-40px] w-full h-20 bg-gradient-to-t from-transparent to-blue-500/10 transform scale-y-[-1] blur-md opacity-50" />
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 px-4 bg-[#34495E]/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Polygon Primitives</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
                        {[
                            { icon: Hexagon, title: 'Vertices', desc: 'Precise control over every point in space.', color: 'text-purple-400' },
                            { icon: Triangle, title: 'Faces', desc: 'Flat shading for that crisp retro-modern look.', color: 'text-blue-400' },
                            { icon: Layers, title: 'Topology', desc: 'Optimized meshes for maximum performance.', color: 'text-green-400' },
                        ].map((item, i) => (
                            <div key={i} className="bg-[#2C3E50] p-8 border border-white/5 hover:border-white/20 transition-all hover:-translate-y-2 relative group overflow-hidden">
                                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${item.color}`}>
                                    <item.icon size={100} />
                                </div>
                                <div className={`w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 ${item.color}`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Box */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900 to-blue-900 p-12 relative overflow-hidden text-center rounded-2xl shadow-2xl">
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'repeating-linear-gradient(60deg, #fff 0, #fff 1px, transparent 1px, transparent 20px)'
                    }} />

                    <div className="relative z-10">
                        <Zap className="mx-auto text-yellow-400 mb-6 fill-yellow-400" size={48} />
                        <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold mb-6`}>Ready to Reduce Polygons?</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of designers creating high-impact, low-poly experiences.
                        </p>
                        <button className="px-10 py-4 bg-white text-blue-900 font-bold hover:bg-blue-50 transition-colors shadow-lg">
                            Generate Mesh
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 bg-[#202c39]">
                <div className={`max-w-7xl mx-auto px-6 flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between items-center gap-6 text-gray-500 text-sm`}>
                    <div className="flex items-center gap-2">
                        <Box size={24} />
                        <span className="font-bold tracking-wider text-gray-300">POLYVERSE</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Documentation</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                    <div>© 2024 Low Poly UI. All edges sharp.</div>
                </div>
            </footer>
        </div>
    );
};
