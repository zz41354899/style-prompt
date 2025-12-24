import { useState } from 'react';
import { Gauge, Zap, Trophy, Menu, X, ArrowRight, Play } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S64CarbonFiber = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Carbon Texture
    const carbon = "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')";

    return (
        <div className="min-h-screen bg-[#212121] font-sans text-white overflow-x-hidden relative selection:bg-[#d50000]">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&family=Roboto+Condensed:ital,wght@0,300;0,700;1,700&display=swap');
        .font-race { font-family: 'Racing Sans One', cursive; }
        .font-condensed { font-family: 'Roboto Condensed', sans-serif; }
        
        .carbon-bg {
           background-color: #121212;
           background-image: ${carbon};
        }
        .glossy-panel {
           background: linear-gradient(180deg, rgba(50,50,50,0.8) 0%, rgba(20,20,20,0.9) 100%);
           border-top: 1px solid rgba(255,255,255,0.2);
           box-shadow: 0 10px 20px rgba(0,0,0,0.5);
           backdrop-filter: blur(4px);
        }
        .red-stripe {
           background: linear-gradient(90deg, #d50000 0%, #ff1744 50%, #b71c1c 100%);
        }
        .speed-skew {
           transform: skewX(-15deg);
        }
      `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-60 z-0 bg-repeat" style={{ backgroundImage: carbon }} />

            {/* Speed Lines */}
            <div className="fixed top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#d50000]/10 to-transparent skew-x-[-20deg] pointer-events-none z-0" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center glossy-panel px-6 py-4 rounded-b-xl border-t-0 border-b-2 border-[#d50000]">
                    <div className="flex items-center gap-2 speed-skew">
                        <div className="font-race text-3xl text-white italic">VELO<span className="text-[#d50000]">CITY</span></div>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-10`}>
                        {['Performance', 'Models', 'Track', 'Config'].map((item) => (
                            <a key={item} href="#" className="font-condensed font-bold italic text-lg text-gray-400 hover:text-white transition-colors uppercase relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d50000] group-hover:w-full transition-all duration-300 transform skew-x-[-15deg]" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-8 py-2 bg-[#d50000] hover:bg-[#ff1744] text-white font-race text-lg uppercase skew-x-[-15deg] transition-transform hover:scale-105 shadow-[0_0_15px_#ff1744]">
                            <span className="skew-x-[15deg] inline-block">Pre-Order</span>
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={28} className="text-[#d50000]" /> : <Menu size={28} className="text-[#d50000]" />}
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
                                Performance
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Models
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Track
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Config
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
                                Performance
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Models
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Track
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Config
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
                                Performance
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Models
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Track
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Config
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    <div className="relative z-20">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-12 h-1 bg-[#d50000]" />
                            <span className="font-condensed font-bold text-[#d50000] uppercase tracking-widest text-sm">Lightweight Series</span>
                        </div>

                        <h1 className={`${isMobile ? 'text-7xl' : 'text-9xl'} font-race italic leading-none mb-6`}>
                            CARBON <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">GTR-X</span>
                        </h1>

                        <div className="flex gap-8 mb-10 text-gray-300 font-condensed">
                            <div>
                                <div className="text-3xl font-bold italic">2.4s</div>
                                <div className="text-xs text-gray-500 uppercase">0-60 MPH</div>
                            </div>
                            <div className="w-px h-10 bg-[#333]" />
                            <div>
                                <div className="text-3xl font-bold italic">350</div>
                                <div className="text-xs text-gray-500 uppercase">Top Speed</div>
                            </div>
                            <div className="w-px h-10 bg-[#333]" />
                            <div>
                                <div className="text-3xl font-bold italic">890kg</div>
                                <div className="text-xs text-gray-500 uppercase">Weight</div>
                            </div>
                        </div>

                        <button className="group flex items-center gap-4 text-xl font-race italic text-white hover:text-[#d50000] transition-colors">
                            <div className="w-12 h-12 rounded-full border-2 border-white group-hover:border-[#d50000] flex items-center justify-center bg-white/10 backdrop-blur-sm transition-all group-hover:scale-110">
                                <Play size={20} className="ml-1 fill-current" />
                            </div>
                            Watch the Film
                        </button>
                    </div>

                    {/* Car Visual / Abstract Shape */}
                    <div className="relative h-[400px] w-full transform skew-x-[-5deg]">
                        {/* Motion Blur Lines */}
                        <div className="absolute top-1/2 left-0 w-full h-[200px] bg-gradient-to-r from-transparent via-[#d50000]/20 to-transparent blur-xl -translate-y-1/2" />

                        <div className="absolute inset-0 glossy-panel rounded-xl flex items-center justify-center border border-gray-800 group overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 red-stripe" />

                            <div className="relative z-10 text-center">
                                <Gauge size={80} className="mx-auto text-[#d50000] mb-4 drop-shadow-[0_0_10px_#d50000]" />
                                <h2 className="text-4xl font-race italic text-white">SPORT MODE</h2>
                                <p className="font-condensed text-gray-400 mt-2">ACTIVE AERO ENGAGED</p>
                            </div>

                            {/* Reflection Animation */}
                            <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Strip */}
            <section className="py-20 bg-black/50 border-y border-[#333] relative">
                <div className={`max-w-6xl mx-auto flex flex-col ${isMobile ? '' : 'md:flex-row'} justify-between items-center gap-12 px-6`}>
                    {[
                        { icon: Trophy, title: 'Championship' },
                        { icon: Zap, title: 'Electric' },
                        { icon: Gauge, title: 'Track Record' },
                    ].map((item, i) => (
                        <div key={i} className={`flex items-center gap-6 group cursor-pointer ${isMobile ? 'w-full' : 'md:w-auto'}`}>
                            <div className="w-16 h-16 bg-[#1a1a1a] border border-[#333] transform skew-x-[-10deg] flex items-center justify-center group-hover:border-[#d50000] group-hover:bg-[#d50000] transition-colors duration-300">
                                <item.icon className="transform skew-x-[10deg] text-gray-400 group-hover:text-white" size={32} />
                            </div>
                            <h3 className="text-3xl font-condensed font-bold italic text-gray-300 group-hover:text-white transition-colors">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="pt-20 pb-10 bg-[#111] text-gray-500 border-t-2 border-[#d50000] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#d50000_0%,transparent_30%)] opacity-10" />

                <div className={`max-w-6xl mx-auto px-6 grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-8 relative z-10`}>
                    <div>
                        <div className="font-race text-2xl text-white italic mb-4">VELOCITY</div>
                        <p className="font-condensed text-sm max-w-xs">Engineered for the pursuit of absolute speed. Where physics meets adrenaline.</p>
                    </div>

                    <div className="flex justify-end gap-8 font-condensed font-bold italic uppercase tracking-wider text-sm">
                        <a href="#" className="hover:text-[#d50000]">Configure</a>
                        <a href="#" className="hover:text-[#d50000]">Drive</a>
                        <a href="#" className="hover:text-[#d50000]">Inquire</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
