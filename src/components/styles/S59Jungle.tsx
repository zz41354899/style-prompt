import { useState } from 'react';
import { Leaf, Bird, CloudRain, Sun, Menu, X, ArrowRight, Flower } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S59Jungle = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Jungle Patterns
    const leafPattern = "url('https://www.transparenttextures.com/patterns/black-scales.png')";

    return (
        <div className="min-h-screen bg-[#004d40] font-sans text-[#e0f2f1] overflow-x-hidden relative selection:bg-[#ff4081]">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Catamaran:wght@400;700;900&display=swap');
        .font-display { font-family: 'Bangers', cursive; }
        .font-sans { font-family: 'Catamaran', sans-serif; }
        
        .leaf-shape {
           border-radius: 0% 100% 0% 100% / 0% 100% 0% 100%;
        }
        .organic-bottom {
           border-radius: 0 0 50% 20% / 0 0 20% 50%;
        }
        .text-stroke {
           -webkit-text-stroke: 1px #004d40;
        }
      `}</style>

            {/* Dynamic Background */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-repeat mix-blend-overlay" style={{ backgroundImage: leafPattern }} />
            <div className="fixed -top-40 -left-40 w-[600px] h-[600px] bg-[#00e676] rounded-full blur-[100px] opacity-20 animate-pulse" />
            <div className="fixed -bottom-40 -right-40 w-[600px] h-[600px] bg-[#ff4081] rounded-full blur-[100px] opacity-20 animate-pulse animation-delay-2000" />

            {/* Hanging Vines SVG */}
            <svg className="fixed top-0 left-0 w-full h-40 pointer-events-none z-10 opacity-80" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#00695c" fillOpacity="0.6" d="M0,0L48,26.7C96,53,192,107,288,122.7C384,139,480,117,576,122.7C672,128,768,160,864,165.3C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3 relative z-50">
                        <div className="p-2 bg-[#ff4081] rounded-full shadow-[0_4px_0_#c2185b] hover:translate-y-[2px] hover:shadow-[0_2px_0_#c2185b] transition-all cursor-pointer">
                            <Leaf size={28} className="text-white" />
                        </div>
                        <span className="font-display text-4xl tracking-widest text-[#00e676] drop-shadow-[2px_2px_0_#000]">TROPIC</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-1 bg-[#000000]/20 p-2 rounded-full backdrop-blur-sm`}>
                        {['Flora', 'Fauna', 'Rainforest', 'Save'].map((item) => (
                            <a key={item} href="#" className="font-sans font-bold text-white px-6 py-2 rounded-full hover:bg-[#00e676] hover:text-[#004d40] transition-colors uppercase text-sm tracking-wider">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 relative z-50">
                        <button className="px-6 py-2 bg-[#ffeb3b] text-[#bf360c] font-display text-xl tracking-wider rounded-xl shadow-[0_4px_0_#f57f17] hover:shadow-[0_2px_0_#f57f17] hover:translate-y-[2px] transition-all transform rotate-2 hover:rotate-0">
                            Donate
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={32} className="text-[#00e676]" /> : <Menu size={32} className="text-[#00e676]" />}
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
                                Flora
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Fauna
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Rainforest
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Save
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
                                Flora
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Fauna
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Rainforest
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Save
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
                                Flora
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Fauna
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Rainforest
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Save
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-5xl mx-auto text-center relative">
                    <h1 className={`${isMobile ? 'text-7xl' : 'text-9xl'} font-display text-transparent bg-clip-text bg-gradient-to-b from-[#00e676] to-[#00bfa5] leading-none mb-6 drop-shadow-[4px_4px_0_#000] relative z-10`}>
                        WILD <br />
                        <span className="text-[#ff4081] drop-shadow-[4px_4px_0_#000]">PARADISE</span>
                    </h1>

                    <p className={`font-sans ${isMobile ? 'text-xl' : 'text-2xl'} text-[#b2dfdb] mb-12 max-w-2xl mx-auto leading-relaxed font-bold`}>
                        Explore the untamed beauty of the equatorial belt. Vibrant life, vivid colors, and the roar of the wild.
                    </p>

                    <div className="flex justify-center gap-8 relative z-10">
                        <button className="w-20 h-20 bg-[#00e676] rounded-[50%] flex items-center justify-center text-[#004d40] shadow-[0_0_20px_rgba(0,230,118,0.5)] animate-bounce hover:animate-none hover:scale-110 transition-transform">
                            <ArrowRight size={32} />
                        </button>
                    </div>

                    {/* Decorative Elements */}
                    <Leaf size={120} className="absolute top-0 right-0 text-[#00e676] opacity-10 rotate-45 transform translate-x-20 -translate-y-10" />
                    <Leaf size={100} className="absolute bottom-0 left-0 text-[#00e676] opacity-10 -rotate-45 transform -translate-x-20 translate-y-10" />
                </div>

                {/* Monstera Leaf Shape Image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[40px] border-[#004d40]/50 rounded-full z-0 opacity-50" />
            </section>

            {/* Feature Cards in Leaf Shapes */}
            <section className="py-24 px-4 bg-[#00695c] organic-bottom relative shadow-2xl">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-12 text-center`}>
                    {[
                        { icon: Bird, title: 'Exotic Birds', color: 'bg-[#ff4081]' },
                        { icon: Flower, title: 'Rare Flora', color: 'bg-[#ffeb3b]' },
                        { icon: CloudRain, title: 'Rainfall', color: 'bg-[#00e676]' },
                    ].map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className={`w-48 h-48 mx-auto ${item.color} leaf-shape shadow-[8px_8px_0_rgba(0,0,0,0.2)] flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 mb-6 border-4 border-black/10`}>
                                <item.icon size={64} className="text-[#004d40]" />
                            </div>
                            <h3 className="text-4xl font-display text-white drop-shadow-md mb-2">{item.title}</h3>
                            <p className="font-sans font-bold text-[#b2dfdb] uppercase tracking-widest text-sm">Discover More</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 text-center relative">
                <div className="font-display text-5xl text-[#00e676] opacity-20 hover:opacity-100 transition-opacity cursor-default absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                    JUNGLE VIBES
                </div>

                <div className="max-w-xl mx-auto relative z-10 pt-20">
                    <div className="flex justify-center gap-8 mb-8">
                        <div className="w-3 h-3 bg-[#ff4081] rounded-full animate-ping" />
                        <div className="w-3 h-3 bg-[#ffeb3b] rounded-full animate-ping animation-delay-500" />
                        <div className="w-3 h-3 bg-[#00e676] rounded-full animate-ping animation-delay-1000" />
                    </div>
                    <p className="font-sans text-[#80cbc4]">
                        Protecting the green heart of our planet. <br /> Since 2024.
                    </p>
                </div>
            </footer>
        </div>
    );
};
