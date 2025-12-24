import { useState } from 'react';
import { Sun, Moon, Sparkles, Crown, Menu, X, ArrowRight, Heart } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S65StainedGlass = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#101010] font-serif text-[#e0e0e0] overflow-x-hidden relative selection:bg-[#ffeb3b] selection:text-black">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Uncial+Antiqua&family=IM+Fell+English:ital@0;1&display=swap');
        .font-gothic { font-family: 'Uncial Antiqua', cursive; }
        .font-body { font-family: 'IM Fell English', serif; }
        
        .stained-glass-panel {
           background: rgba(20, 20, 20, 0.6);
           border: 4px solid #000;
           box-shadow: 
              0 0 20px rgba(255, 0, 0, 0.2), 
              inset 0 0 20px rgba(0, 0, 255, 0.1);
           position: relative;
           overflow: hidden;
        }
        .lead-lines {
           background-image: 
              linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000),
              linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000);
           background-size: 20px 20px;
           background-position: 0 0, 10px 10px;
           opacity: 0.3;
        }
        .color-shard {
           backdrop-filter: brightness(1.5) contrast(1.2);
           mix-blend-mode: hard-light;
           transition: all 0.5s ease;
        }
        .shard-red { background: rgba(183, 28, 28, 0.7); }
        .shard-blue { background: rgba(13, 71, 161, 0.7); }
        .shard-gold { background: rgba(251, 192, 45, 0.7); }
        .shard-green { background: rgba(27, 94, 32, 0.7); }
        
        .light-beam {
           background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%);
           filter: blur(20px);
           pointer-events: none;
        }
      `}</style>

            {/* Background Ambience */}
            <div className="fixed inset-0 bg-[#000] z-0" />
            <div className="fixed top-0 left-0 w-full h-[50vh] light-beam z-0 opacity-30" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-black/80 backdrop-blur-md border-b-2 border-black px-8 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 border-2 border-black bg-[#b71c1c] flex items-center justify-center rounded-full shadow-[0_0_10px_#ff0000]">
                            <Crown size={20} className="text-[#ffeb3b]" />
                        </div>
                        <span className="font-gothic text-2xl tracking-widest text-[#ffca28] drop-shadow-md">CATHEDRAL</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-12`}>
                        {['Gallery', 'History', 'Artisans', 'Visit'].map((item) => (
                            <a key={item} href="#" className="font-body italic text-xl text-[#9e9e9e] hover:text-[#ffca28] transition-colors drop-shadow-sm">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#0d47a1] border-2 border-black text-[#bbdefb] font-gothic hover:bg-[#1565c0] transition-colors shadow-[0_0_15px_rgba(13,71,161,0.5)]">
                            Illumination
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#ffca28]" /> : <Menu size={24} className="text-[#ffca28]" />}
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
                                Gallery
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                History
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Artisans
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Visit
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
                                Gallery
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                History
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Artisans
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Visit
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
                                Gallery
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                History
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Artisans
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Visit
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center relative">
                    {/* Decorative Central Rose Window (CSS approx) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[20px] border-black opacity-20 pointer-events-none z-0 animate-[spin_60s_linear_infinite]" style={{ background: 'conic-gradient(#b71c1c, #0d47a1, #fbc02d, #1b5e20, #b71c1c)' }} />

                    <div className="relative z-10 glass-panel p-12 border-4 border-black bg-black/50 backdrop-blur-sm shadow-2xl">
                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-gothic mb-8 text-[#ffca28] drop-shadow-[0_0_10px_rgba(255,202,40,0.5)]`}>
                            LUX AETERNA
                        </h1>

                        <p className="font-body text-2xl text-[#e0e0e0] mb-12 max-w-xl mx-auto leading-relaxed">
                            "Light passes through the glass, changing in color but not in nature."
                        </p>

                        <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-4'} gap-4 max-w-2xl mx-auto`}>
                            <div className="h-32 stained-glass-panel shard-red hover:scale-105 cursor-pointer flex items-center justify-center">
                                <Heart className="text-black/50" size={32} />
                            </div>
                            <div className="h-32 stained-glass-panel shard-blue hover:scale-105 cursor-pointer flex items-center justify-center">
                                <Moon className="text-black/50" size={32} />
                            </div>
                            <div className="h-32 stained-glass-panel shard-gold hover:scale-105 cursor-pointer flex items-center justify-center">
                                <Sun className="text-black/50" size={32} />
                            </div>
                            <div className="h-32 stained-glass-panel shard-green hover:scale-105 cursor-pointer flex items-center justify-center">
                                <Crown className="text-black/50" size={32} />
                            </div>
                        </div>

                        <div className="mt-12">
                            <button className="px-10 py-4 bg-transparent border-2 border-[#ffca28] text-[#ffca28] font-gothic text-xl hover:bg-[#ffca28] hover:text-black transition-colors shadow-[0_0_20px_rgba(255,202,40,0.2)]">
                                Enter Sanctuary
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mosaic Grid */}
            <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
                <div className="absolute inset-0 lead-lines pointer-events-none" />

                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8 relative z-10`}>
                    {[
                        { title: 'The Rose', color: 'shard-red', desc: 'Symbol of divine love and passion.' },
                        { title: 'The Sky', color: 'shard-blue', desc: 'Reflecting the heavens above.' },
                        { title: 'The Sun', color: 'shard-gold', desc: 'Illumination of the spirit.' },
                    ].map((item, i) => (
                        <div key={i} className={`stained-glass-panel p-8 ${item.color} group hover:brightness-110 transition-all`}>
                            <div className="w-full h-full border-2 border-black/50 p-6 flex flex-col items-center text-center">
                                <div className="w-16 h-16 border-4 border-black rounded-full mb-6 rotate-45 group-hover:rotate-90 transition-transform duration-700 bg-white/20 backdrop-blur-md" />
                                <h3 className="font-gothic text-3xl text-black drop-shadow-sm mb-4">{item.title}</h3>
                                <p className="font-body text-black/80 font-bold text-lg">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 bg-[#000] text-[#757575] border-t-8 border-[#333] text-center relative">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="font-gothic text-4xl text-[#ffca28] mb-8 opacity-50">EAGLE & LION</div>
                    <p className="font-body italic text-lg mb-8">Master Craftsmen of Leaded Light</p>
                    <div className="w-24 h-24 mx-auto border-4 border-[#333] rotate-45 mb-8 flex items-center justify-center">
                        <div className="w-12 h-12 bg-[#b71c1c] rotate-45" />
                    </div>
                    <div className="text-sm tracking-widest uppercase opacity-40">
                        &copy; 1248-2024 • Gothic Revival
                    </div>
                </div>
            </footer>
        </div>
    );
};
