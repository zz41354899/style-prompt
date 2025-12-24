import { useState } from 'react';
import { Eye, MoveRight, Menu, X, AlertTriangle } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S90BrutalistColor = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#FFEB3B] font-sans text-black overflow-x-hidden selection:bg-black selection:text-[#FFEB3B]">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
        .font-heavy { font-family: 'Archivo Black', sans-serif; }
        .font-mono-brutal { font-family: 'Space Mono', monospace; }
        
        .hard-shadow {
           box-shadow: 8px 8px 0px 0px #000000;
        }
        .hard-shadow:hover {
           box-shadow: 12px 12px 0px 0px #000000;
           transform: translate(-4px, -4px);
        }
        .hard-shadow:active {
           box-shadow: 4px 4px 0px 0px #000000;
           transform: translate(4px, 4px);
        }
        
        .marquee {
           animation: scroll 15s linear infinite;
        }
        @keyframes scroll {
           from { transform: translateX(0); }
           to { transform: translateX(-100%); }
        }
        
        .border-thick {
           border: 4px solid #000;
        }
      `}</style>

            {/* Marquee Header */}
            <div className="bg-black text-white font-mono-brutal overflow-hidden whitespace-nowrap py-2 border-b-4 border-black">
                <div className="inline-block marquee">
                    WARNING: VISUAL OVERLOAD DETECTED /// DO NOT STARE DIRECTLY AT THE COLORS /// BRUTALISM V2.0 LOADED ///
                    WARNING: VISUAL OVERLOAD DETECTED /// DO NOT STARE DIRECTLY AT THE COLORS /// BRUTALISM V2.0 LOADED ///
                </div>
            </div>

            {/* Navbar */}
            <nav className="border-b-4 border-black bg-white sticky top-0 z-50">
                <div className="max-w-full px-6 h-20 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#FF00FF] border-4 border-black flex items-center justify-center font-heavy">B</div>
                        <span className="font-heavy text-2xl tracking-tighter">ANTI_DESIGN</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-0 divide-x-4 divide-black border-4 border-black bg-white`}>
                        {['Manifesto', 'Projects', 'Shop', 'Contact'].map((item) => (
                            <a key={item} href="#" className="font-mono-brutal font-bold text-sm uppercase px-6 py-3 hover:bg-[#FF00FF] hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className={`bg-black text-white px-6 py-2 font-mono-brutal font-bold border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors ${isMobile ? 'hidden' : 'md:block'}`}>
                            Login
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="border-4 border-black p-1 hover:bg-[#00FF55]">
                                {menuOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
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
                                Manifesto
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Projects
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shop
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
                                Manifesto
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Projects
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shop
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
                                Manifesto
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Projects
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shop
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
            <section className={`min-h-[80vh] flex flex-col ${isMobile ? '' : 'md:flex-row'} border-b-4 border-black`}>
                <div className={`${isMobile ? 'w-full' : 'md:w-1/2'} p-12 flex flex-col justify-center border-r-4 border-black bg-[#00FF55] relative group hover:bg-[#00CC44] transition-colors`}>
                    <div className="absolute top-4 left-4 font-mono-brutal text-sm font-bold border-2 border-black px-2 bg-white rotate-3">
                        SECTION_01
                    </div>

                    <h1 className={`${isMobile ? 'text-7xl' : 'text-7xl md:text-8xl lg:text-9xl'} font-heavy leading-[0.8] mb-8 break-words text-white drop-shadow-[4px_4px_0_#000]`}>
                        MAKE <br /> IT <br /> POP
                    </h1>

                    <p className="font-mono-brutal font-bold text-lg max-w-md bg-white border-4 border-black p-6 hard-shadow mb-12 rotate-[-1deg]">
                        We break rules because we can. Ignore the grid. Embrace the chaos.
                    </p>

                    <button className="self-start bg-[#FF00FF] text-white px-8 py-4 font-heavy text-2xl border-4 border-black hard-shadow flex items-center gap-4 group-hover:bg-black group-hover:text-[#FF00FF] transition-colors">
                        START RIOT <MoveRight strokeWidth={4} />
                    </button>
                </div>

                <div className={`${isMobile ? 'w-full' : 'md:w-1/2'} bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale contrast-125 ${isMobile ? 'border-b-4' : 'border-b-4 md:border-b-0'} border-black flex items-center justify-center p-12`}>
                    <div className="bg-white p-8 border-4 border-black max-w-sm rotate-2 hard-shadow text-center">
                        <Eye size={64} className="mx-auto mb-4" strokeWidth={2.5} />
                        <h2 className="font-heavy text-4xl mb-4">WATCHING YOU</h2>
                        <p className="font-mono-brutal text-sm">
                            We verify your aesthetic compliance. Do not resist.
                        </p>
                    </div>
                </div>
            </section>

            {/* Grid Layout */}
            <section className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-4'} border-b-4 border-black`}>
                {[
                    { bg: '#FFEB3B', title: 'CHAOS' },
                    { bg: '#FF0055', title: 'NOISE', text: 'white' },
                    { bg: '#00FFFF', title: 'GLITCH' },
                    { bg: '#FFFFFF', title: 'VOID' },
                ].map((item, i) => (
                    <div key={i} className={`p-12 border-b-4 ${isMobile ? '' : 'lg:border-b-0 md:border-r-4'} border-black min-h-[300px] flex flex-col justify-between hover:invert transition-all`} style={{ backgroundColor: item.bg, color: item.text || 'black' }}>
                        <AlertTriangle size={32} strokeWidth={2.5} />
                        <h3 className="font-heavy text-5xl tracking-tighter">{item.title}</h3>
                        <div className="font-mono-brutal text-xs font-bold border-t-2 border-current pt-4">
                            INDEX: 0{i + 1}
                        </div>
                    </div>
                ))}
            </section>

            {/* Footer */}
            <footer className={`bg-black text-white ${isMobile ? 'p-12' : 'p-12 md:p-24'} font-mono-brutal`}>
                <div className="border-4 border-white p-8 mb-12 flex justify-between items-start">
                    <div>
                        <div className="font-heavy text-4xl mb-4">SUBSCRIBE OR DIE</div>
                        <div className={`flex flex-col ${isMobile ? 'w-full' : 'md:w-[400px]'}`}>
                            <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-white text-black p-4 font-bold border-4 border-transparent focus:outline-none focus:border-[#FF00FF]" />
                            <button className="bg-[#FF0055] px-6 border-l-4 border-black font-bold hove:bg-white hover:text-black">DO IT</button>
                        </div>
                    </div>
                    <X size={48} />
                </div>

                <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-8 items-end`}>
                    <div className="text-8xl font-heavy leading-none text-[#333] hover:text-[#FF00FF] cursor-default transition-colors select-none">
                        THE <br /> END.
                    </div>
                    <div className="text-right text-xs">
                        &copy; 2024 BRUTALIST CORP <br />
                        NO RIGHTS RESERVED <br />
                        COPY EVERYTHING
                    </div>
                </div>
            </footer>
        </div>
    );
};
