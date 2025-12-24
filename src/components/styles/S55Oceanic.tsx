import { useState } from 'react';
import { Waves, Wind, Droplets, Anchor, Menu, X, ArrowRight, Compass } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S55Oceanic = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Ocean Gradients
    const deepSea = "linear-gradient(to bottom, #006994, #001e2b)";
    const surface = "linear-gradient(to bottom, #e0f7fa, #00bcd4)";

    return (
        <div className="min-h-screen font-sans text-white overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Quicksand:wght@400;700&display=swap');
        .font-ocean { font-family: 'Montserrat', sans-serif; }
        .font-bubble { font-family: 'Quicksand', sans-serif; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .bubble {
           animation: float 4s ease-in-out infinite;
        }
        .glass-panel {
           background: rgba(255, 255, 255, 0.1);
           backdrop-filter: blur(10px);
           border: 1px solid rgba(255, 255, 255, 0.2);
           box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
      `}</style>

            {/* Deep Sea Background */}
            <div className="fixed inset-0 z-0" style={{ background: deepSea }} />

            {/* Floating Bubbles */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/10 bubble"
                        style={{
                            width: Math.random() * 50 + 10 + 'px',
                            height: Math.random() * 50 + 10 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 5 + 's',
                            animationDuration: Math.random() * 5 + 5 + 's'
                        }}
                    />
                ))}
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center glass-panel rounded-full px-8 py-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-full">
                            <Waves size={24} className="text-cyan-300" />
                        </div>
                        <span className="font-ocean font-bold text-2xl tracking-wide">DeepBlue</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Expedition', 'Species', 'Conservation', 'Donate'].map((item) => (
                            <a key={item} href="#" className="font-bubble text-lg hover:text-cyan-300 transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-cyan-500/80 hover:bg-cyan-400/80 text-white font-ocean font-bold rounded-full transition-colors shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                            Dive In
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
                                Expedition
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Species
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Conservation
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Donate
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
                                Expedition
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Species
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Conservation
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Donate
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
                                ...Array(20)
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-16 items-center`}>

                    <div className="relative z-10">
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-cyan-300 font-bubble mb-6 text-sm uppercase tracking-widest backdrop-blur-sm">
                            Explore the Unknown
                        </div>
                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-ocean font-bold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200 drop-shadow-md`}>
                            Into the <br /> Abyss
                        </h1>

                        <p className="font-bubble text-xl text-blue-100/80 mb-10 max-w-lg leading-relaxed">
                            Discover the mysteries hidden beneath the surface. A journey through silence, pressure, and beauty.
                        </p>

                        <div className="flex gap-6">
                            <button className="px-8 py-4 bg-white text-blue-900 font-ocean font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all flex items-center gap-2">
                                Start Expedition <ArrowRight size={20} />
                            </button>
                            <button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Compass size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Submarine Window / Portal */}
                    <div className="relative h-[500px] w-full flex items-center justify-center">
                        <div className="absolute w-[400px] h-[400px] rounded-full border-[20px] border-[#37474f] shadow-[inset_0_0_50px_rgba(0,0,0,0.8),0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden bg-black relative z-10 flex items-center justify-center group">
                            {/* Glass Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-30 pointer-events-none rounded-full" />

                            {/* Inner Sea View */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[10s] ease-linear group-hover:scale-110 opacity-80" />

                            {/* Sonar Effect */}
                            <div className="absolute inset-0 border border-cyan-500/30 rounded-full animate-ping opacity-20" />

                            {/* HUD Elements */}
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-500/20" />
                            <div className="absolute top-0 left-1/2 h-full w-[1px] bg-cyan-500/20" />
                            <div className="absolute bottom-8 text-cyan-500/70 font-mono text-xs text-center w-full">
                                DEPTH: 3400M <br /> TEMP: 2°C
                            </div>
                        </div>

                        {/* Light Beams */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[600px] bg-gradient-to-b from-cyan-400/20 to-transparent transform -skew-x-12 blur-xl pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Stats Cards */}
            <section className="py-24 px-4 relative z-10">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                    {[
                        { icon: Droplets, val: '71%', label: 'Surface Area' },
                        { icon: Wind, val: '80%', label: 'Unexplored' },
                        { icon: Anchor, val: '11km', label: 'Max Depth' },
                    ].map((item, i) => (
                        <div key={i} className="glass-panel p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center mb-6 text-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-5xl font-ocean font-bold mb-2 text-white">{item.val}</h3>
                            <p className="font-bubble text-cyan-100 text-lg uppercase tracking-wider">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Wave Footer */}
            <footer className="relative pt-32 pb-10 bg-[#001018]">
                {/* Animated Waves */}
                <div className="absolute top-0 left-0 w-[200%] h-24 overflow-hidden -mt-20">
                    <div className="absolute inset-0 bg-[url('https://svgshare.com/i/yem.svg')] bg-repeat-x bg-contain opacity-20 animate-[wave_10s_linear_infinite]" />
                    <div className="absolute inset-0 bg-[url('https://svgshare.com/i/yem.svg')] bg-repeat-x bg-contain opacity-40 animate-[wave_15s_linear_infinite_reverse] top-2" />
                </div>

                <div className={`max-w-6xl mx-auto px-6 flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between items-center text-blue-300/50 text-sm`}>
                    <div>&copy; 2024 DeepBlue Inc.</div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-cyan-300">Terms</a>
                        <a href="#" className="hover:text-cyan-300">Privacy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
