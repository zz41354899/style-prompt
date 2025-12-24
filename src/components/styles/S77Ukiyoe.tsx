import { useState } from 'react';
import { Waves, Mountain, Wind, Menu, X, ArrowRight, Flower2 } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S77Ukiyoe = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Textures
    const washi = "url('https://www.transparenttextures.com/patterns/washi.png')";

    return (
        <div className="min-h-screen bg-[#eceff1] font-sans text-[#1a237e] overflow-x-hidden relative selection:bg-[#ff8a65] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=Noto+Serif+JP:wght@300;600&display=swap');
        .font-jp-title { font-family: 'Kaisei Decol', serif; }
        .font-jp-body { font-family: 'Noto Serif JP', serif; }
        
        .seigaiha {
           background-color: #eceff1;
           background-image: radial-gradient(circle at 50% 100%, #a5b1c2 10%, transparent 11%), 
                             radial-gradient(circle at 50% 100%, #1a237e 10%, transparent 11%);
           background-size: 40px 20px;
           background-position: 0 0, 20px 10px;
           opacity: 0.1;
        }
        .woodblock-border {
           border: 4px solid #1a237e;
           box-shadow: 5px 5px 0 #ff8a65;
        }
        .red-stamp {
           width: 40px;
           height: 40px;
           background: #b71c1c;
           color: white;
           display: flex;
           justify-content: center;
           align-items: center;
           font-weight: bold;
           border-radius: 4px;
           font-family: 'Kaisei Decol', serif;
           box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
           opacity: 0.8;
           transform: rotate(-5deg);
        }
        .ink-fade {
           mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
      `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-60 z-0 bg-repeat bg-[#eceff1]" style={{ backgroundImage: washi }} />

            {/* Pattern Overlay */}
            <div className="fixed bottom-0 left-0 w-full h-[30vh] seigaiha z-0 pointer-events-none" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2 bg-white/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="red-stamp text-xs">浮世</div>
                        <span className="font-jp-title text-2xl font-bold text-[#1a237e] tracking-widest">UKIYO</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-12 border-b border-[#1a237e] pb-1`}>
                        {['Landscape', 'Portrait', 'Nature', 'Kabuki'].map((item) => (
                            <a key={item} href="#" className="font-jp-body font-bold text-[#546e7a] hover:text-[#ff8a65] transition-colors text-sm uppercase tracking-widest">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#1a237e] text-white font-jp-body text-sm rounded-sm hover:bg-[#303f9f] transition-colors shadow-md">
                            Collection
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#1a237e]" /> : <Menu size={24} className="text-[#1a237e]" />}
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
                                Landscape
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Portrait
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Nature
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Kabuki
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
                                Landscape
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Portrait
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Nature
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Kabuki
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
                                Landscape
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Portrait
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Nature
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Kabuki
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center ink-fade">
                <div className={`max-w-5xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-16 items-center`}>

                    <div>
                        <div className="mb-4 inline-block border-l-4 border-[#ff8a65] pl-4">
                            <span className="font-jp-body text-[#1a237e] uppercase tracking-widest">The Floating World</span>
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-7xl'} font-jp-title mb-8 text-[#1a237e] leading-tight`}>
                            Ephemeral <br />
                            <span className="text-[#ff8a65]">Beauty</span>
                        </h1>

                        <p className="font-jp-body text-lg text-[#455a64] mb-12 max-w-md leading-loose">
                            Capturing the fleeting moments of pleasure and nature in bold lines and vibrant colors.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-transparent border-2 border-[#1a237e] text-[#1a237e] font-jp-title font-bold text-lg hover:bg-[#1a237e] hover:text-white transition-colors flex items-center gap-3 shadow-[4px_4px_0_#a5b1c2]">
                                View Prints <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Graphic Circle */}
                    <div className="relative h-[400px] flex items-center justify-center">
                        <div className="absolute w-[350px] h-[350px] bg-[#b71c1c] rounded-full opacity-10 blur-3xl transform -translate-y-4" />
                        <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-8 border-[#fff] shadow-2xl bg-[#bbdefb]">
                            {/* Sun */}
                            <div className="absolute top-10 right-10 w-16 h-16 bg-[#ff8a65] rounded-full opacity-90" />

                            {/* Wave */}
                            <div className="absolute bottom-[-20px] left-0 w-[150%] h-[150px] bg-[#1a237e] rounded-[100%] transform -rotate-12 opacity-80" />
                            <div className="absolute bottom-[-40px] left-10 w-[150%] h-[150px] bg-[#3949ab] rounded-[100%] transform -rotate-6 opacity-80" />
                            <div className="absolute bottom-[-60px] left-0 w-[150%] h-[150px] bg-[#fff] rounded-[100%] transform -rotate-3 opacity-90" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Triptych Grid */}
            <section className="py-24 px-4 bg-white/60 relative z-10 border-t border-[#cfd8dc]">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                    {[
                        { icon: Waves, title: 'The Great Wave', kanji: '波' },
                        { icon: Mountain, title: 'Red Fuji', kanji: '山' },
                        { icon: Wind, title: 'Fine Wind', kanji: '風' },
                    ].map((item, i) => (
                        <div key={i} className="woodblock-border p-8 bg-[#fff] hover:-translate-y-1 transition-transform cursor-pointer group relative overflow-hidden">
                            <div className="absolute top-2 right-2 font-jp-title text-6xl text-[#eceff1] select-none z-0 group-hover:text-[#ff8a65]/20 transition-colors">
                                {item.kanji}
                            </div>

                            <div className="relative z-10">
                                <item.icon size={40} className="text-[#1a237e] mb-6" />
                                <h3 className="font-jp-title text-xl font-bold text-[#1a237e] mb-2">{item.title}</h3>
                                <div className="w-10 h-1 bg-[#ff8a65] mb-4" />
                                <p className="font-jp-body text-sm text-[#78909c]">Masterpiece series from the 36 Views.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 bg-[#1a237e] text-[#fff] text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="font-jp-title text-3xl mb-8 tracking-widest">EDO PERIOD • 1603</h2>

                    <div className="flex justify-center gap-8 mb-8 opacity-70">
                        <Flower2 size={24} />
                        <Flower2 size={24} />
                        <Flower2 size={24} />
                    </div>

                    <div className="font-jp-body text-xs opacity-50 tracking-widest">
                        Hand-carved and printed in Japan.
                    </div>
                </div>
            </footer>
        </div>
    );
};
