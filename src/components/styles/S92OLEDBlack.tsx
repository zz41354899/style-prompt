import { useState } from 'react';
import { Smartphone, Zap, Activity, Menu, X, ArrowUpRight } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S92OLEDBlack = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#2979FF] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap');
        .font-oled { font-family: 'Inter', sans-serif; }
        
        .glow-text {
           text-shadow: 0 0 20px rgba(41, 121, 255, 0.5);
        }
        
        .glow-box {
           box-shadow: 0 0 40px -10px rgba(41, 121, 255, 0.3);
        }
        
        .glass-panel {
           background: rgba(30, 30, 30, 0.6);
           backdrop-filter: blur(12px);
           -webkit-backdrop-filter: blur(12px);
           border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .dot-grid {
           background-image: radial-gradient(#222 1px, transparent 1px);
           background-size: 20px 20px;
        }
      `}</style>

            {/* Background Grid */}
            <div className="fixed inset-0 dot-grid opacity-50 z-0 pointer-events-none" />

            {/* Navbar */}
            <nav className="fixed w-full z-50 px-6 py-4">
                <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2979FF] to-[#FF4081] flex items-center justify-center">
                            <Zap size={18} fill="white" className="text-white" />
                        </div>
                        <span className="font-oled font-bold text-xl tracking-tight">OLED.ui</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Features', 'Specs', 'Gallery'].map((item) => (
                            <a key={item} href="#" className="font-oled text-sm font-medium text-gray-400 hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="bg-white text-black px-5 py-2 rounded-xl font-oled font-semibold text-sm hover:bg-[#2979FF] hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(41,121,255,0.6)]">
                            Get Started
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
                                Features
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Specs
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Gallery
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#333] mb-8 animate-pulse text-xs font-oled font-medium text-[#2979FF]">
                        <span className="w-2 h-2 rounded-full bg-[#2979FF]" />
                        New True Black Technology
                    </div>

                    <h1 className={`${isMobile ? 'text-6xl' : 'text-6xl md:text-8xl'} font-oled font-extrabold mb-8 tracking-tight glow-text leading-tight`}>
                        Infinite <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2979FF] to-[#FF4081]">Contrast</span>
                    </h1>

                    <p className="font-oled text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Experience colors that pop and blacks that are truly black. Optimized for modern OLED displays with a power-saving dark interface.
                    </p>

                    <div className="flex justify-center gap-6">
                        <button className="group relative px-8 py-4 bg-[#111] rounded-2xl overflow-hidden border border-[#333] hover:border-[#2979FF] transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2979FF] to-[#FF4081] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                            <span className="relative z-10 font-oled font-bold flex items-center gap-2">
                                View Demo <ArrowUpRight size={18} />
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section className="px-6 pb-24 relative z-10">
                <div className={`max-w-6xl mx-auto glass-panel rounded-[32px] ${isMobile ? 'p-2' : 'p-2 md:p-4'} border border-[#333] glow-box`}>
                    <div className="bg-black rounded-[24px] overflow-hidden aspect-[16/9] relative">
                        {/* Fake UI Inside */}
                        <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                            <div>
                                <div className="text-gray-500 text-sm font-oled mb-1">Total Revenue</div>
                                <div className="text-4xl font-oled font-bold">$124,592.00</div>
                            </div>
                            <div className="bg-[#111] p-2 rounded-xl border border-[#333]">
                                <Activity className="text-[#00E676]" />
                            </div>
                        </div>

                        {/* Charts (CSS only) */}
                        <div className="absolute bottom-0 left-0 right-0 h-48 flex items-end justify-between px-8 pb-8 gap-2 opacity-80">
                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 50].map((h, i) => (
                                <div key={i} className="w-full bg-[#111] rounded-t-lg relative group h-full overflow-hidden">
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2979FF] to-[#00E5FF] rounded-t-lg transition-all duration-1000 ease-out"
                                        style={{ height: `${h}%`, opacity: 0.8 }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 relative z-10 border-t border-[#111]">
                <div className={`max-w-7xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                    {[
                        { icon: Zap, title: "Energy Efficient", desc: "Saves battery on OLED screens by turning off pixels." },
                        { icon: Activity, title: "High Refresh", desc: "Designed for 120Hz+ displays with smooth CSS animations." },
                        { icon: Smartphone, title: "True Black", desc: "#000000 hex code for maximum depth and contrast." },
                    ].map((item, i) => (
                        <div key={i} className="bg-[#050505] p-8 rounded-3xl border border-[#222] hover:bg-[#0A0A0A] hover:border-[#333] transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="text-[#2979FF]" />
                            </div>
                            <h3 className="font-oled font-bold text-xl mb-3 group-hover:text-[#2979FF] transition-colors">{item.title}</h3>
                            <p className="font-oled text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
