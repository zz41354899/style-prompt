import { useState } from 'react';
import { Box, Columns, Shield, Globe, Menu, X, ArrowRight, Construction } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S47Brutalist3D = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Concrete Textures
    const concreteLight = "bg-[#D3D3D3]";
    const concreteDark = "bg-[#A9A9A9]";

    // Shadows (Simulated Neumorphism/Claymorphism but harder)
    const shadowDeep = "shadow-[20px_20px_40px_#a0a0a0,-20px_-20px_40px_#ffffff]";
    const shadowInset = "shadow-[inset_10px_10px_20px_#A0A0A0,inset_-10px_-10px_20px_#ffffff]";

    return (
        <div className="min-h-screen bg-[#E0E0E0] font-sans selection:bg-[#FF4500] selection:text-white text-[#111] overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;700&display=swap');
        .font-brutal { font-family: 'Archivo Black', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

            {/* Noise Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] mix-blend-multiply" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6 bg-[#E0E0E0]/90 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center relative">
                    <div className={`flex items-center gap-4 px-6 py-4 ${concreteLight} ${shadowDeep} rounded-none`}>
                        <Shield size={24} strokeWidth={3} />
                        <span className="font-brutal text-2xl tracking-tighter uppercase">Massive.UI</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Structure', 'Form', 'Function', 'Material'].map((item) => (
                            <a key={item} href="#" className="font-brutal uppercase text-xl hover:text-[#FF4500] transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#111] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <button className={`px-8 py-3 ${concreteLight} border-2 border-[#111] font-brutal uppercase text-sm hover:bg-[#111] hover:text-white transition-colors`}>
                            Access
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={32} /> : <Menu size={32} />}
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
                                Structure
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Form
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Function
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Material
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
                                Structure
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Form
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Function
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Material
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
                                Structure
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Form
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Function
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Material
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-48 pb-32 px-4 relative z-10 flex min-h-[90vh] items-center">
                <div className={`max-w-7xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-20 items-center`}>

                    <div className="relative">
                        <h1 className={`${isMobile ? 'text-7xl' : 'text-9xl'} font-brutal leading-[0.8] tracking-tighter mb-8 uppercase text-[#111]`}>
                            Raw <br /> Power <br />
                            <span className="text-[#FF4500] outline-4">Solid</span> <br /> Code
                        </h1>

                        <p className={`font-body font-bold ${isMobile ? 'text-xl' : 'text-3xl'} max-w-lg mb-12 opacity-80 leading-tight`}>
                            Stripped back to the essential structures. No decoration. Just massive, scalable components for heavy industry.
                        </p>

                        <div className="flex gap-6">
                            <button className={`px-10 py-6 bg-[#111] text-white font-brutal text-xl uppercase tracking-widest hover:bg-[#FF4500] transition-colors shadow-[10px_10px_0_#555]`}>
                                Deploy System
                            </button>
                        </div>
                    </div>

                    {/* Brutalist 3D Object */}
                    <div className="h-[600px] w-full flex items-center justify-center relative perspective-none">
                        {/* 3D Cube Assembly */}
                        <div className="relative w-80 h-80 transform rotate-x-60 rotate-z-45">
                            {/* Base Block */}
                            <div className={`absolute inset-0 ${concreteLight} shadow-[30px_30px_60px_#a0a0a0] border border-[#bbb]`}>
                                <div className="absolute top-0 bottom-0 left-[20%] w-1 bg-[#ccc]" />
                                <div className="absolute top-[30%] left-0 right-0 h-1 bg-[#ccc]" />
                            </div>

                            {/* Floating Top Block */}
                            <div className={`absolute top-[-40px] left-[-40px] w-64 h-64 ${concreteLight} shadow-[20px_20px_40px_rgba(0,0,0,0.3)] border border-[#bbb] transform translate-z-[100px] flex items-center justify-center`}>
                                <Globe size={100} strokeWidth={1} className="text-[#333] opacity-50" />
                            </div>

                            {/* Connecting Beams */}
                            <div className="absolute top-0 left-0 w-4 h-32 bg-[#333] transform -translate-x-full -translate-y-full origin-bottom-right rotate-z-[-45deg]" />
                        </div>

                        {/* Floating Label */}
                        <div className="absolute bottom-10 right-0 bg-[#FF4500] text-white p-4 font-mono font-bold text-xs uppercase tracking-widest shadow-[10px_10px_0_#111]">
                            FIG 1.0 // INFRASTRUCTURE
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-20 px-8 bg-[#D3D3D3]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16 border-b-4 border-[#111] pb-4">
                        <h2 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-brutal uppercase`}>Capabilities</h2>
                        <ArrowRight size={48} strokeWidth={3} />
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3'} gap-8`}>
                        {[
                            { icon: Box, title: 'Modular', num: '01' },
                            { icon: Columns, title: 'Scalable', num: '02' },
                            { icon: Construction, title: 'Durable', num: '03' },
                        ].map((item, i) => (
                            <div key={i} className="bg-[#E0E0E0] p-12 border-4 border-[#111] hover:bg-[#FF4500] hover:text-white transition-colors group relative overflow-hidden">
                                <span className="absolute top-4 right-4 font-brutal text-6xl opacity-10 group-hover:opacity-30">{item.num}</span>
                                <item.icon size={64} strokeWidth={2} className="mb-8" />
                                <h3 className="text-3xl font-brutal uppercase tracking-wider">{item.title}</h3>
                                <p className="mt-4 font-body font-bold text-sm opacity-60 group-hover:opacity-90">
                                    Heavy-duty web components designed for high-stress environments.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#111] text-white py-24 px-8">
                <div className={`max-w-7xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-20`}>
                    <div>
                        <h2 className="text-8xl font-brutal text-[#333] leading-none mb-8">END OF LINE</h2>
                        <p className="font-mono text-sm max-w-sm text-gray-400">
                            SYSTEM STATUS: OPERATIONAL <br />
                            LAST UPDATE: 2024-12-24 <br />
                            LOCATION: SERVER_FARM_01
                        </p>
                    </div>

                    <div className={`${isMobile ? '' : 'text-right'}`}>
                        <ul className="space-y-4 font-brutal text-2xl uppercase tracking-wider">
                            <li><a href="#" className="hover:text-[#FF4500]">Documentation</a></li>
                            <li><a href="#" className="hover:text-[#FF4500]">API Reference</a></li>
                            <li><a href="#" className="hover:text-[#FF4500]">Support</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};
