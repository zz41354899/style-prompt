import { useState } from 'react';
import { Zap, MessageCircle, Star, Heart, Menu, X, ArrowRight, BoomBox } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S52PopArt = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Halftone Pattern (CSS)
    const halftone = `
    radial-gradient(circle, #000 2px, transparent 2.5px)
  `;

    return (
        <div className="min-h-screen bg-white font-sans text-black selection:bg-cyan-400 selection:text-black overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&display=swap');
        .font-comic { font-family: 'Bangers', cursive; }
        .font-panel { font-family: 'Comic Neue', cursive; }
        
        .shadow-hard {
           box-shadow: 8px 8px 0px #000;
        }
        .text-stroke {
           -webkit-text-stroke: 2px black;
        }
      `}</style>

            {/* Background Halftone */}
            <div className="fixed inset-0 pointer-events-none opacity-10 z-0 bg-[length:20px_20px]" style={{ backgroundImage: halftone }} />

            {/* Comic Strip Navbar */}
            <nav className="fixed top-0 w-full z-50 p-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-yellow-300 border-4 border-black p-4 shadow-hard">
                    <div className="flex items-center gap-2">
                        <div className="bg-red-500 text-white border-2 border-black p-1 transform -rotate-6">
                            <Zap size={24} className="fill-yellow-300 stroke-black stroke-2" />
                        </div>
                        <span className="font-comic text-4xl tracking-wide relative top-1">KA-POW!</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Heroes', 'Villains', 'Issues', 'Shop'].map((item) => (
                            <a key={item} href="#" className="font-comic text-2xl hover:text-red-600 hover:scale-110 transition-transform uppercase tracking-wider relative group">
                                {item}
                                <div className="absolute -bottom-2 -right-2 w-full h-full bg-cyan-400 -z-10 group-hover:block hidden border-2 border-black" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-white font-comic text-2xl border-4 border-black shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all">
                            LOG IN
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
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
                                Heroes
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Villains
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Issues
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shop
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
                                Heroes
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Villains
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Issues
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shop
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
                                Heroes
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Villains
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Issues
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shop
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center bg-cyan-300 border-b-8 border-black">
                {/* Halftone Overlay on Hero Color */}
                <div className="absolute inset-0 opacity-20 bg-[length:10px_10px]" style={{ backgroundImage: halftone }} />

                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-12 items-center relative z-20`}>

                    <div className="bg-white border-8 border-black p-8 shadow-[16px_16px_0_#000] transform -rotate-1">
                        <div className="absolute -top-12 -left-12 w-24 h-24 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center font-comic text-2xl animate-bounce z-30">
                            NEW!
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-comic leading-none mb-4 drop-shadow-[4px_4px_0_#000] text-red-500 text-stroke`}>
                            BOOM! <br />
                            <span className="text-yellow-400">BANG!</span> <br />
                            <span className="text-cyan-400">DESIGN!</span>
                        </h1>

                        <div className="bg-black text-white p-4 font-panel text-xl font-bold mb-8 transform rotate-1 border-2 border-white">
                            "The most explosive UI kit in the universe!"
                        </div>

                        <button className="w-full bg-yellow-300 text-black font-comic text-3xl py-4 border-4 border-black shadow-[8px_8px_0_#000] hover:bg-yellow-400 hover:scale-105 transition-all flex items-center justify-center gap-3">
                            GET IT NOW! <Zap size={32} className="fill-red-500" />
                        </button>
                    </div>

                    {/* Pop Art Illustration */}
                    <div className="relative h-[500px] w-full flex items-center justify-center">
                        <div className="relative w-80 h-96 bg-red-500 border-8 border-black shadow-hard transform rotate-3 overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-150" />
                            <div className="absolute inset-0 bg-red-500 mix-blend-screen opacity-60" />
                            <div className="absolute inset-0 bg-[length:4px_4px]" style={{ backgroundImage: halftone }} />

                            {/* Speech Bubble */}
                            <div className="absolute top-4 right-4 bg-white border-4 border-black p-4 rounded-[50%] rounded-bl-none max-w-[150px] text-center font-comic text-xl leading-none shadow-[4px_4px_0_#000]">
                                I love this style!
                            </div>
                        </div>

                        {/* Decorative Starburst */}
                        <div className="absolute bottom-10 -left-10 w-48 h-48 bg-yellow-300 border-4 border-black z-20 flex items-center justify-center font-comic text-5xl text-center leading-none shadow-hard clip-path-starburst transform -rotate-12">
                            <span className="transform rotate-12">WOW</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Panels */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-6xl font-comic text-center mb-16 underline decoration-wavy decoration-red-500 decoration-4">FEATURED EPISODES</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                        {[
                            { icon: Star, title: 'Super Fast', color: 'bg-yellow-300' },
                            { icon: Heart, title: 'Lovely Code', color: 'bg-pink-400' },
                            { icon: BoomBox, title: 'Loud Style', color: 'bg-cyan-400' },
                        ].map((item, i) => (
                            <div key={i} className={`${item.color} border-4 border-black p-6 shadow-hard hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#000] transition-all`}>
                                <div className="bg-white border-2 border-black h-48 mb-4 relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-[length:8px_8px] opacity-20" style={{ backgroundImage: halftone }} />
                                    <item.icon size={80} className="relative z-10 stroke-black stroke-[3px] fill-white" />
                                </div>
                                <h3 className="text-4xl font-comic mb-2 border-b-4 border-black inline-block">{item.title}</h3>
                                <p className="font-panel font-bold text-lg leading-tight mt-2">
                                    Meanwhile, in the codebase... our heroes discovered unlimited power!
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white pt-20 pb-10 border-t-8 border-yellow-300">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-6xl font-comic text-yellow-300 mb-8">TO BE CONTINUED...</h2>

                    <div className="inline-block border-4 border-white p-4 transform rotate-1 bg-red-600">
                        <p className="font-panel text-xl font-bold">
                            Next Issue: The Return of Minimalism?!
                        </p>
                    </div>

                    <div className="mt-12 opacity-50 font-panel">
                        © 1960-2024 Pop Art inc. Printed in Technicolor.
                    </div>
                </div>
            </footer>
        </div>
    );
};
