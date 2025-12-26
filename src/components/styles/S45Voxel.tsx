import { useState } from 'react';
import { Box, Layers, Grid, Hammer, Menu, X, ArrowRight, Pickaxe, Shovel } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S45Voxel = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Voxel Grid Background
    const voxelGrid = `
    conic-gradient(at 0% 0%, #f0f0f0 25%, #e0e0e0 25%, #e0e0e0 50%, #f0f0f0 50%, #f0f0f0 75%, #e0e0e0 75%)
  `;
    const gridSize = "40px 40px";

    // Voxel CSS Utilities
    const blockShadow = "4px 4px 0px rgba(0,0,0,0.2), inset -4px -4px 0px rgba(0,0,0,0.1)";

    return (
        <div className="min-h-screen bg-[#87CEEB] font-mono overflow-x-hidden relative selection:bg-green-400 selection:text-black">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&display=swap');
        .font-pixel { font-family: 'Press Start 2P', cursive; }
        .font-console { font-family: 'VT323', monospace; }
      `}</style>

            {/* Clouds (Pixel Art) */}
            <div className="fixed top-10 left-[10%] w-32 h-12 bg-white opacity-80 animate-[ping_20s_linear_infinite_reverse]" style={{ boxShadow: '8px 8px 0 rgba(0,0,0,0.1)' }} />
            <div className="fixed top-20 right-[20%] w-24 h-8 bg-white opacity-90 animate-[pulse_15s_linear_infinite]" style={{ boxShadow: '6px 6px 0 rgba(0,0,0,0.1)' }} />

            {/* Navbar (Toolbar) */}
            <nav className="fixed top-0 w-full z-50 p-4">
                <div className="max-w-6xl mx-auto bg-[#7f8c8d] border-4 border-black p-2 flex justify-between items-center shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
                    {/* Logo Section */}
                    <div className="flex items-center gap-4 bg-[#95a5a6] border-2 border-black px-4 py-2">
                        <div className="w-8 h-8 bg-[#2ecc71] border-2 border-black flex items-center justify-center">
                            <Box size={20} className="text-black" />
                        </div>
                        <span className={`font-pixel ${isMobile ? 'text-xs' : 'text-sm'} text-white drop-shadow-md`}>VOXEL.CRAFT</span>
                    </div>

                    {/* Inventory/Menu */}
                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-2 bg-[#bdc3c7] border-2 border-black p-1`}>
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-10 h-10 bg-[#95a5a6] border-2 border-black hover:bg-white cursor-pointer flex items-center justify-center group active:translate-y-1 transition-transform">
                                {i === 1 && <Pickaxe size={20} className="text-black" />}
                                {i === 2 && <Shovel size={20} className="text-black" />}
                                {i === 3 && <Hammer size={20} className="text-black" />}
                                <span className="absolute bottom-0 right-1 font-console text-xs text-white drop-shadow-md pointer-events-none mb-4 group-hover:block hidden">Item {i}</span>
                                <span className="absolute bottom-[-2px] right-0 font-pixel text-[8px] text-white drop-shadow-[1px_1px_0_#000]">{i}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className={`${isMobile ? 'hidden' : 'block'} px-6 py-2 bg-[#e74c3c] text-white font-pixel text-xs border-4 border-black hover:bg-[#c0392b] active:translate-y-1 shadow-[4px_4px_0_#000]`}>
                            PLAY
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="bg-[#bdc3c7] border-2 border-black p-2">
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
                            
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 min-h-[90vh] flex items-center relative z-10">
                {/* Ground Terrain */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#27ae60] border-t-8 border-black z-0 opacity-100" />
                <div className="absolute bottom-24 left-0 right-0 h-4 bg-[#2ecc71] z-0" />

                <div className={`max-w-6xl mx-auto w-full grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-12 items-center relative z-10`}>
                    {/* Text Box */}
                    <div className="bg-[#f1c40f] border-4 border-black p-8 shadow-[16px_16px_0_rgba(0,0,0,0.2)] relative">
                        <div className="absolute -top-3 -left-3 w-6 h-6 bg-white border-2 border-black" />
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-white border-2 border-black" />
                        <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-white border-2 border-black" />
                        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white border-2 border-black" />

                        <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-pixel leading-tight mb-6 text-black drop-shadow-sm`}>
                            BUILD <br /> YOUR <br /> WORLD
                        </h1>
                        <p className="font-console text-2xl mb-8 leading-tight bg-white/50 p-4 border-2 border-black">
                            &gt; Construct digital experiences block by block. <span className="animate-pulse">_</span>
                        </p>

                        <button className="w-full bg-[#3498db] text-white font-pixel text-sm py-4 border-4 border-black shadow-[4px_4px_0_#000] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-4 group">
                            Start Crafting <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    {/* Voxel Isometric Illustration (CSS Art) */}
                    <div className="h-[400px] flex items-center justify-center perspective-[1000px]">
                        {/* Ground Base */}
                        <div className="relative w-64 h-64 bg-[#8B4513] transform rotate-x-60 rotate-z-45 shadow-[20px_20px_0_rgba(0,0,0,0.2)] border-4 border-black">
                            <div className="absolute inset-0 bg-[#2ecc71] opacity-90 border-4 border-black translate-z-4" />

                            {/* Tree Trunk */}
                            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-[#8B4513] transform -translate-x-1/2 -translate-y-1/2 translate-z-8 h-24 border-2 border-black shadow-lg" />

                            {/* Leaves */}
                            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#27ae60] transform -translate-x-1/2 -translate-y-1/2 translate-z-32 border-2 border-black shadow-lg animate-[bounce_3s_infinite]" />
                            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#2ecc71] transform -translate-x-1/2 -translate-y-1/2 translate-z-48 border-2 border-black shadow-lg animate-[bounce_3s_infinite_reverse]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 bg-[#ecf0f1] border-t-8 border-black">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-pixel text-center mb-16 underline decoration-4 underline-offset-8">AVAILABLE BLOCKS</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
                        {[
                            { icon: Grid, title: 'Structure', desc: 'Secure foundation for scaling.', color: 'bg-[#95a5a6]' },
                            { icon: Layers, title: 'Layers', desc: 'Depth managing system.', color: 'bg-[#e67e22]' },
                            { icon: Box, title: 'Assets', desc: 'Pre-rendered voxel items.', color: 'bg-[#9b59b6]' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white border-4 border-black p-0 relative hover:-translate-y-2 transition-transform shadow-[8px_8px_0_#000]">
                                <div className={`${item.color} h-32 border-b-4 border-black flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10" style={{ backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`, backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px', opacity: 0.05 }} />
                                    <item.icon size={48} className="text-white drop-shadow-[4px_4px_0_#000]" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-pixel text-sm mb-4">{item.title}</h3>
                                    <p className="font-console text-xl leading-snug text-gray-600">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#2c3e50] text-[#ecf0f1] py-12 border-t-8 border-black text-center font-console">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="mb-8">
                        <span className="font-pixel text-xl text-[#f1c40f]">VOXEL.CRAFT</span> <br />
                        <span className="text-sm opacity-50">v1.0.4-beta</span>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} gap-4 text-lg`}>
                        <a href="#" className="hover:text-[#f1c40f] hover:underline decoration-2 underline-offset-4">[ Help ]</a>
                        <a href="#" className="hover:text-[#f1c40f] hover:underline decoration-2 underline-offset-4">[ Wiki ]</a>
                        <a href="#" className="hover:text-[#f1c40f] hover:underline decoration-2 underline-offset-4">[ Map ]</a>
                        <a href="#" className="hover:text-[#f1c40f] hover:underline decoration-2 underline-offset-4">[ Server ]</a>
                    </div>

                    <div className="mt-12 opacity-50 text-sm">
                        © 2024 Voxel UI. Keep digging.
                    </div>
                </div>
            </footer>
        </div>
    );
};
