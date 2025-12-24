import { useState } from 'react';
import { Church, Shield, Sword, Menu, X, ArrowRight, BookOpen } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S78Gothic = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Textures
    const stone = "url('https://www.transparenttextures.com/patterns/dark-matter.png')";

    return (
        <div className="min-h-screen bg-[#212121] font-serif text-[#e0e0e0] overflow-x-hidden relative selection:bg-[#b71c1c] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Crimson+Text:ital,wght@0,400;0,700;1,400&display=swap');
        .font-gothic { font-family: 'UnifrakturMaguntia', cursive; }
        .font-body { font-family: 'Crimson Text', serif; }
        
        .arch-window {
           clip-path: polygon(0% 100%, 0% 40%, 50% 0%, 100% 40%, 100% 100%);
           border: 2px solid #757575;
        }
        .stone-bg {
           background-color: #212121;
           background-image: ${stone};
           border: 1px solid #424242;
           box-shadow: inset 0 0 50px #000;
        }
        .red-glow {
           text-shadow: 0 0 10px #b71c1c;
        }
        .ornate-divider {
           display: flex;
           align-items: center;
           justify-content: center;
        }
        .ornate-divider::before, .ornate-divider::after {
           content: '';
           flex: 1;
           border-bottom: 1px solid #757575;
           margin: 0 10px;
        }
      `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-50 z-0 bg-repeat bg-[#212121]" style={{ backgroundImage: stone }} />
            <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-black/60 backdrop-blur-md px-8 py-3 border-b border-[#424242]">
                    <div className="flex items-center gap-3">
                        <Church size={24} className="text-[#b71c1c]" />
                        <span className="font-gothic text-3xl tracking-wide text-[#e0e0e0]">CATHEDRAL</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-10`}>
                        {['History', 'Architecture', 'Lineage', 'Relics'].map((item) => (
                            <a key={item} href="#" className="font-body font-bold text-[#9e9e9e] hover:text-[#b71c1c] transition-colors text-lg uppercase tracking-wider">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 border border-[#757575] text-[#b71c1c] font-gothic text-xl hover:bg-[#b71c1c] hover:text-white hover:border-[#b71c1c] transition-colors">
                            Enter
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
                                History
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Architecture
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Lineage
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Relics
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
                                History
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Architecture
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Lineage
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Relics
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
                                History
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Architecture
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Lineage
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Relics
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center">

                    <div className="mb-6 flex justify-center">
                        <div className="w-1 h-24 bg-gradient-to-b from-[#b71c1c] to-transparent opacity-50" />
                    </div>

                    <h1 className={`${isMobile ? 'text-7xl' : 'text-9xl'} font-gothic mb-8 text-[#e0e0e0] drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] leading-none block`}>
                        Gothic <br />
                        <span className={`text-[#b71c1c] red-glow ${isMobile ? 'text-6xl' : 'text-8xl'}`}>Revival</span>
                    </h1>

                    <div className="ornate-divider max-w-sm mx-auto mb-10 text-[#757575]">
                        <span className="mx-2">♦</span>
                    </div>

                    <p className="font-body text-2xl text-[#9e9e9e] mb-12 max-w-2xl mx-auto leading-relaxed">
                        Soaring spires, stained glass, and the solemn grandeur of stone reaching for the heavens.
                    </p>

                    <div className="flex justify-center gap-8">
                        <button className="px-10 py-4 bg-[#1a1a1a] text-[#b71c1c] font-gothic text-2xl border border-[#424242] hover:border-[#b71c1c] shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(183,28,28,0.2)] transition-all flex items-center gap-3">
                            Read Chronicle <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Arched Cards */}
            <section className="py-24 px-4 bg-[#121212] relative border-t border-[#424242]">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-12`}>
                    {[
                        { icon: Church, title: 'The Nave', desc: 'Verticality emphasizing the divine.' },
                        { icon: Shield, title: 'Vaulting', desc: 'Ribbed stone supporting immense weight.' },
                        { icon: Sword, title: 'Heritage', desc: 'Traditions forged in iron and blood.' },
                    ].map((item, i) => (
                        <div key={i} className="stone-bg p-8 pt-16 pb-12 text-center arch-window hover:-translate-y-2 transition-transform duration-500 group relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-[#b71c1c]" />

                            <item.icon size={48} className="mx-auto text-[#757575] mb-6 group-hover:text-[#b71c1c] transition-colors" />
                            <h3 className="font-gothic text-3xl text-[#e0e0e0] mb-4">{item.title}</h3>
                            <p className="font-body text-[#9e9e9e] text-lg italic">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-24 bg-[#000] text-[#757575] text-center border-t border-[#333]">
                <div className="max-w-4xl mx-auto px-6">
                    <BookOpen size={32} className="mx-auto mb-6 text-[#b71c1c] opacity-50" />

                    <h2 className="font-gothic text-4xl text-[#e0e0e0] mb-8 opacity-40">MEMENTO MORI</h2>

                    <div className="flex justify-center gap-12 font-body text-xs tracking-[0.2em] uppercase mb-8">
                        <a href="#" className="hover:text-[#b71c1c] transition-colors">Order</a>
                        <a href="#" className="hover:text-[#b71c1c] transition-colors">Sanctuary</a>
                        <a href="#" className="hover:text-[#b71c1c] transition-colors">Crypt</a>
                    </div>

                    <div className="font-gothic text-xl opacity-30">
                        &copy; 1248 Notre Dame Guild.
                    </div>
                </div>
            </footer>
        </div>
    );
};
