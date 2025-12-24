import { useState } from 'react';
import { Sun, Wind, Thermometer, MapPin, Menu, X, ArrowRight, Tent } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S57Desert = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Sand Texture
    const sand = "url('https://www.transparenttextures.com/patterns/sandpaper.png')";

    return (
        <div className="min-h-screen bg-[#f4a460] font-sans text-[#4e342e] overflow-x-hidden relative selection:bg-[#ffeb3b]">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300;700&display=swap');
        .font-display { font-family: 'Abril Fatface', cursive; }
        .font-sans { font-family: 'Lato', sans-serif; }
        
        .dune-shape {
           clip-path: polygon(0 100%, 100% 100%, 100% 40%, 75% 60%, 50% 30%, 25% 50%, 0 20%);
        }
        .heat-haze {
           animation: haze 2s infinite linear;
        }
        @keyframes haze {
           0% { transform: translateY(0) skewX(0); filter: blur(1px); }
           25% { transform: translateY(-2px) skewX(1deg); filter: blur(2px); }
           50% { transform: translateY(-1px) skewX(-1deg); filter: blur(1px); }
           75% { transform: translateY(-3px) skewX(0.5deg); filter: blur(2px); }
           100% { transform: translateY(0) skewX(0); filter: blur(1px); }
        }
      `}</style>

            {/* Sun */}
            <div className="fixed top-10 right-10 w-32 h-32 bg-[#ffeb3b] rounded-full blur-xl opacity-80 animate-pulse z-0" />
            <div className="fixed top-10 right-10 w-32 h-32 bg-[#ffeb3b] rounded-full opacity-40 mix-blend-overlay z-0" />

            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-repeat mix-blend-multiply" style={{ backgroundImage: sand }} />

            {/* Parallax Dunes (CSS only) */}
            <div className="fixed bottom-0 w-full h-[40vh] bg-[#d7ccc8] z-0 dune-shape opacity-40 transform scale-y-110 origin-bottom" />
            <div className="fixed bottom-0 w-full h-[30vh] bg-[#a1887f] z-0 dune-shape opacity-60 transform scale-x-[-1] origin-bottom" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#ffeb3b] rounded-full shadow-lg">
                            <Sun size={24} className="text-[#f57f17]" />
                        </div>
                        <span className="font-display text-3xl tracking-wider text-[#3e2723]">DUNE</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-12 bg-white/30 backdrop-blur-sm px-8 py-3 rounded-full border border-[#d7ccc8]`}>
                        {['Oasis', 'Safari', 'Nomad', 'Stars'].map((item) => (
                            <a key={item} href="#" className="font-sans font-bold text-[#5d4037] hover:text-[#d84315] transition-colors uppercase text-sm tracking-widest">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-8 py-3 bg-[#d84315] hover:bg-[#bf360c] text-white font-sans font-bold transition-transform hover:-translate-y-1 shadow-lg rounded-sm uppercase tracking-widest">
                            Expedition
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={28} className="text-[#3e2723]" /> : <Menu size={28} className="text-[#3e2723]" />}
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
                                Oasis
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Safari
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Nomad
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Stars
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
                                Oasis
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Safari
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Nomad
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Stars
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
                                Oasis
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Safari
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Nomad
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Stars
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-48 pb-32 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 text-[#d84315] opacity-20 font-display text-9xl whitespace-nowrap overflow-hidden pointer-events-none select-none blur-[2px] heat-haze">
                        MIRAGE MIRAGE MIRAGE
                    </div>

                    <h1 className={`${isMobile ? 'text-7xl' : 'text-9xl'} font-display font-bold text-[#3e2723] mb-8 relative z-10 drop-shadow-md`}>
                        SAHARA
                    </h1>

                    <div className="w-24 h-1 bg-[#d84315] mx-auto mb-10" />

                    <p className="font-sans text-xl font-bold text-[#5d4037] mb-12 max-w-xl mx-auto leading-relaxed glass-panel p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
                        Experience the silence of the sands. Where the horizon burns and the stars guide your path.
                    </p>

                    <div className="flex justify-center gap-6">
                        <button className="group flex items-center gap-3 px-8 py-4 bg-[#3e2723] text-[#ffcc80] font-sans font-bold uppercase tracking-widest hover:bg-[#2e1c18] transition-colors shadow-2xl">
                            <Tent size={20} />
                            Book Camp
                        </button>
                    </div>
                </div>
            </section>

            {/* Vertical Text Decoration */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:block z-20">
                <div className="writing-vertical-rl text-[#5d4037] font-sans text-xs tracking-[0.5em] uppercase border-l-2 border-[#5d4037] pl-4 h-64 flex items-center">
                    23.4162° N — 25.6628° E
                </div>
            </div>

            {/* Info Cards */}
            <section className="py-24 px-4 relative z-10 bg-gradient-to-b from-transparent to-[#d7ccc8]/50">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                    {[
                        { icon: Thermometer, title: 'Heat', val: '42°C', desc: 'Daytime Peak' },
                        { icon: Wind, title: 'Wind', val: '25km/h', desc: 'North-East' },
                        { icon: MapPin, title: 'Area', val: '9M km²', desc: 'Total Expanse' },
                    ].map((item, i) => (
                        <div key={i} className="bg-[#fbe9e7] p-8 border-l-4 border-[#d84315] shadow-md hover:shadow-xl transition-shadow group">
                            <div className="flex justify-between items-start mb-6">
                                <item.icon size={32} className="text-[#d84315] opacity-50 group-hover:opacity-100 transition-opacity" />
                                <span className="font-display text-4xl text-[#3e2723]">{item.val}</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#5d4037] uppercase tracking-wider mb-2">{item.title}</h3>
                            <p className="text-[#8d6e63] font-sans text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 bg-[#3e2723] text-[#d7ccc8] relative mt-12">
                {/* Top Border Pattern */}
                <div className="absolute top-0 w-full h-4 bg-[url('https://www.transparenttextures.com/patterns/zigzag.png')] opacity-20" />

                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="font-display text-4xl mb-6 text-[#ffcc80]">The Endless Horizon</h2>
                    <p className="font-sans opacity-60 text-sm tracking-widest uppercase mb-8">Est. 2024 • Desert Expeditions Co.</p>

                    <div className="flex justify-center gap-8">
                        <a href="#" className="hover:text-white transition-colors">Route Map</a>
                        <a href="#" className="hover:text-white transition-colors">Survival Guide</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
