import { useState } from 'react';
import { Settings, Watch, Compass, Menu, X, ArrowRight, Anchor } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S68Steampunk = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Textures
    const wornPaper = "url('https://www.transparenttextures.com/patterns/old-map.png')";

    return (
        <div className="min-h-screen bg-[#2b2118] font-serif text-[#c19a6b] overflow-x-hidden relative selection:bg-[#b87333] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rye&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-vic { font-family: 'Rye', serif; }
        .font-body { font-family: 'Playfair Display', serif; }
        
        .brass-gradient {
           background: linear-gradient(to bottom, #f0e68c, #c19a6b, #8b4513);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }
        .brass-panel {
           background: #3e2723;
           border: 4px solid #b87333;
           box-shadow: 
              inset 0 0 20px #000,
              0 10px 20px rgba(0,0,0,0.5);
           position: relative;
        }
        .brass-panel::after {
           content: '';
           position: absolute;
           top: 4px; left: 4px; right: 4px; bottom: 4px;
           border: 1px solid #c19a6b;
           pointer-events: none;
        }
        .gear {
           animation: spin-gear 10s linear infinite;
        }
        .gear-reverse {
           animation: spin-gear 10s linear infinite reverse;
        }
        @keyframes spin-gear {
           from { transform: rotate(0deg); }
           to { transform: rotate(360deg); }
        }
        .rivet {
           width: 8px;
           height: 8px;
           border-radius: 50%;
           background: radial-gradient(circle at 30% 30%, #f0e68c, #b87333);
           box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
           position: absolute;
        }
        .steam {
           position: absolute;
           bottom: 0;
           width: 100%;
           height: 100px;
           background: linear-gradient(to top, rgba(200,200,200,0.2), transparent);
           filter: blur(20px);
           pointer-events: none;
           animation: steam-rise 4s ease-in-out infinite alternate;
        }
        @keyframes steam-rise {
           from { opacity: 0.3; transform: translateY(0); }
           to { opacity: 0.6; transform: translateY(-10px); }
        }
      `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-repeat bg-[#1a120b]" style={{ backgroundImage: wornPaper }} />

            {/* Floating Gears */}
            <div className="fixed -top-20 -left-20 text-[#3e2723] opacity-50 z-0">
                <Settings size={300} className="gear" />
            </div>
            <div className="fixed bottom-0 -right-20 text-[#3e2723] opacity-40 z-0">
                <Settings size={400} className="gear-reverse" />
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center brass-panel px-8 py-4 rounded-lg">
                    {/* Corner Rivets */}
                    <div className="rivet top-2 left-2" />
                    <div className="rivet top-2 right-2" />
                    <div className="rivet bottom-2 left-2" />
                    <div className="rivet bottom-2 right-2" />

                    <div className="flex items-center gap-3">
                        <div className="bg-[#b87333] p-2 rounded-full border-2 border-[#8b4513] shadow-inner">
                            <Compass size={24} className="text-[#3e2723]" />
                        </div>
                        <span className="font-vic text-2xl tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-[#f0e68c] to-[#b87333] drop-shadow-md">AETHER</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-10`}>
                        {['Inventions', 'Airships', 'Chronicles', 'Society'].map((item) => (
                            <a key={item} href="#" className="font-vic text-sm text-[#d7ccc8] hover:text-[#f0e68c] transition-colors uppercase tracking-widest drop-shadow-sm">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#5d4037] border-2 border-[#b87333] text-[#f0e68c] font-vic text-xs rounded-sm hover:bg-[#4e342e] transition-colors shadow-lg uppercase tracking-wider flex items-center gap-2">
                            <Anchor size={14} /> Board
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#b87333]" /> : <Menu size={24} className="text-[#b87333]" />}
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
                                Inventions
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Airships
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Chronicles
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Society
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
                                Inventions
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Airships
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Chronicles
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Society
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
                                Inventions
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Airships
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Chronicles
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Society
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-48 pb-32 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-5xl mx-auto text-center relative">

                    <div className={`mx-auto w-1 h-32 bg-[#b87333] mb-4 opacity-50 ${isMobile ? 'block' : 'hidden'}`} />

                    <div className="inline-block border-b-2 border-[#b87333] pb-2 mb-6">
                        <span className="font-vic text-[#8d6e63] text-lg uppercase tracking-[0.3em]">Est. 1887 • London</span>
                    </div>

                    <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-vic mb-8 drop-shadow-[2px_2px_0_#000]`}>
                        <span className="text-[#c19a6b]">STEAM</span> & <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b87333] to-[#f0e68c]">STEEL</span>
                    </h1>

                    <p className="font-body italic text-2xl text-[#a1887f] mb-12 max-w-2xl mx-auto leading-relaxed">
                        Propelling humanity into a retro-future of brass gears, steam engines, and boundless exploration.
                    </p>

                    <div className="flex justify-center gap-8">
                        <div className="relative group cursor-pointer">
                            <div className="absolute inset-0 bg-[#b87333] blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                            <button className="relative px-10 py-4 bg-[#3e2723] text-[#f0e68c] font-vic text-xl border-2 border-[#b87333] shadow-[0_0_15px_rgba(184,115,51,0.3)] hover:scale-105 transition-transform flex items-center gap-3">
                                Take Flight <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Decorative Clock */}
                    <div className="mt-20 flex justify-center opacity-80">
                        <div className="w-40 h-40 rounded-full border-4 border-[#5d4037] bg-[#2b2118] relative shadow-2xl flex items-center justify-center">
                            <div className="absolute inset-2 border-2 border-dashed border-[#8d6e63] rounded-full" />
                            <div className="w-1 h-14 bg-[#b87333] absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rotate-45" />
                            <div className="w-1 h-10 bg-[#f0e68c] absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom -rotate-45" />
                            <div className="w-2 h-2 bg-[#fff] rounded-full absolute z-10 shadow-md" />
                            <div className="absolute font-vic text-[#8d6e63] text-xs top-2">XII</div>
                            <div className="absolute font-vic text-[#8d6e63] text-xs bottom-2">VI</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steam Effect */}
            <div className="fixed bottom-0 left-0 w-full z-20 pointer-events-none">
                <div className="steam" />
            </div>

            {/* Feature Cards */}
            <section className="py-24 px-4 relative z-10 border-t-2 border-[#b87333] bg-[#221a14]">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-12`}>
                    {[
                        { icon: Settings, title: 'Clockwork', desc: 'Precision engineered gears driving the engine of progress.' },
                        { icon: Compass, title: 'Navigation', desc: 'Charting the unknown skies with brass instruments.' },
                        { icon: Watch, title: 'Timekeeping', desc: 'Measuring moments in ticks and tocks of history.' },
                    ].map((item, i) => (
                        <div key={i} className="brass-panel p-8 text-center group hover:-translate-y-2 transition-transform duration-500">
                            <div className="rivet top-2 left-2" />
                            <div className="rivet top-2 right-2" />
                            <div className="rivet bottom-2 left-2" />
                            <div className="rivet bottom-2 right-2" />

                            <div className="mb-6 relative inline-block">
                                <item.icon size={48} className="text-[#c19a6b] relative z-10" />
                                <div className="absolute inset-0 bg-[#b87333] blur-md opacity-30" />
                            </div>
                            <h3 className="font-vic text-2xl text-[#f0e68c] mb-4">{item.title}</h3>
                            <p className="font-body text-[#a1887f] leading-relaxed italic">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 text-center bg-[#1a120b] border-t-4 border-[#5d4037] relative">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="font-vic text-4xl text-[#8d6e63] mb-8 opacity-40">BRASSWORKS LTD.</h2>

                    <div className="flex justify-center gap-12 font-vic text-sm tracking-widest text-[#5d4037] uppercase">
                        <a href="#" className="hover:text-[#b87333] transition-colors">Manifesto</a>
                        <a href="#" className="hover:text-[#b87333] transition-colors">Workshop</a>
                        <a href="#" className="hover:text-[#b87333] transition-colors">Telegram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
