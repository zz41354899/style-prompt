import { useState } from 'react';
import { Layers, Cloud, Droplets, Menu, X, ArrowRight } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S97FrostedGlass = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E0C3FC] via-[#8EC5FC] to-[#95e1d3] font-sans text-white overflow-x-hidden selection:bg-white/30 selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .font-glass { font-family: 'Inter', sans-serif; }
        
        .glass-card {
           background: rgba(255, 255, 255, 0.25);
           box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
           backdrop-filter: blur(12px);
           -webkit-backdrop-filter: blur(12px);
           border-radius: 24px;
           border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .glass-button {
           background: rgba(255, 255, 255, 0.35);
           box-shadow: 0 4px 12px 0 rgba(31, 38, 135, 0.1);
           backdrop-filter: blur(4px);
           -webkit-backdrop-filter: blur(4px);
           border-radius: 12px;
           border: 1px solid rgba(255, 255, 255, 0.18);
           transition: all 0.3s ease;
        }
        .glass-button:hover {
           background: rgba(255, 255, 255, 0.5);
           transform: translateY(-2px);
        }
        
        .floating-orb {
           position: absolute;
           border-radius: 50%;
           filter: blur(80px);
           z-index: 0;
        }
      `}</style>

            {/* Decorative Orbs */}
            <div className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#ff9a9e] floating-orb opacity-60" />
            <div className="fixed bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#a18cd1] floating-orb opacity-60" />

            {/* Navbar */}
            <nav className="fixed w-full z-50 px-6 py-6">
                <div className="max-w-6xl mx-auto glass-card h-20 flex justify-between items-center px-8">
                    <div className="flex items-center gap-3">
                        <Layers size={28} className="text-white drop-shadow-md" />
                        <span className="font-glass font-bold text-xl tracking-tight text-white drop-shadow-sm">Glass.os</span>
                    </div>

                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-10`}>
                        {['About', 'Products', 'Community', 'Contact'].map((item) => (
                            <a key={item} href="#" className="font-glass font-medium text-white/90 hover:text-white transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="glass-button px-6 py-2 font-glass font-semibold text-sm">
                            Sign In
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className={`${isMobile ? 'block' : 'lg:hidden'} p-2 text-white`}>
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
                                Home
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Features
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Contact
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
                                Home
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Features
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Contact
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
                                About
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Products
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
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-48 pb-20 px-6 relative z-10 min-h-screen flex items-center justify-center">
                <div className={`glass-card max-w-4xl ${isMobile ? 'p-12' : 'p-12 md:p-20'} text-center relative overflow-hidden`}>
                    {/* Inner Highlight */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-glass font-medium mb-8 border border-white/20">
                        <Cloud size={16} /> Cloud Sync Enabled
                    </div>

                    <h1 className={`${isMobile ? 'text-5xl' : 'text-5xl md:text-7xl'} font-glass font-bold mb-6 tracking-tight text-white drop-shadow-lg leading-tight`}>
                        Crystal Clear <br /> Transparency
                    </h1>

                    <p className="font-glass text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                        Experience the depth of frosted glass. A UI trend that brings hierarchy through blur and light, creating a sense of space and context.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="glass-button px-8 py-4 font-glass font-bold text-lg flex items-center justify-center gap-2 group bg-white/40">
                            Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="glass-button px-8 py-4 font-glass font-bold text-lg bg-transparent hover:bg-white/10">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Cards Grid */}
            <section className="px-6 pb-24 relative z-10">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                    {[
                        { icon: Droplets, title: "Fluid Design", desc: "Elements that flow like water on glass surfaces." },
                        { icon: Layers, title: "Multi-Layered", desc: "Create depth with stacked translucent layers." },
                        { icon: Cloud, title: "Lightweight", desc: "Visuals that feel airy and weightless." },
                    ].map((item, i) => (
                        <div key={i} className="glass-card p-10 hover:bg-white/30 transition-colors duration-500 group cursor-default">
                            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-white/20">
                                <item.icon size={28} className="text-white drop-shadow" />
                            </div>
                            <h3 className="font-glass font-bold text-2xl mb-4 text-white drop-shadow-sm">{item.title}</h3>
                            <p className="font-glass text-white/80 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
