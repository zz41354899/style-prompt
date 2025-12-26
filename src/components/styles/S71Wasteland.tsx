import { useState } from 'react';
import { Radiation, Skull, AlertTriangle, Menu, X, ArrowRight, Wrench } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S71Wasteland = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Textures
    const rust = "url('https://www.transparenttextures.com/patterns/rust.png')";

    return (
        <div className="min-h-screen bg-[#3e2723] font-sans text-[#ffea00] overflow-x-hidden relative selection:bg-[#bf360c] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Roboto+Mono:wght@400;700&display=swap');
        .font-stencil { font-family: 'Black Ops One', cursive; }
        .font-tech { font-family: 'Roboto Mono', monospace; }
        
        .hazard-stripe {
           background: repeating-linear-gradient(
             45deg,
             #ffea00,
             #ffea00 10px,
             #212121 10px,
             #212121 20px
           );
        }
        .scratched-metal {
           background-color: #5d4037;
           background-image: ${rust};
           box-shadow: inset 0 0 20px #000;
           border: 2px solid #8d6e63;
        }
        .distressed-text {
           text-shadow: 2px 2px 0 #000;
           letter-spacing: 0.1em;
        }
        .grime-overlay {
           position: absolute;
           inset: 0;
           background: radial-gradient(circle, transparent 50%, rgba(0,0,0,0.6) 100%);
           pointer-events: none;
        }
      `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-repeat bg-[#212121]" style={{ backgroundImage: rust }} />

            {/* Grime Vignette */}
            <div className="fixed inset-0 pointer-events-none z-0 grime-overlay" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center bg-[#212121] px-6 py-4 border-b-4 border-[#bf360c] shadow-lg transform -rotate-1">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#ffea00] text-black flex items-center justify-center rounded-sm border-2 border-black">
                            <Radiation size={24} className="animate-[spin_10s_linear_infinite]" />
                        </div>
                        <span className="font-stencil text-3xl tracking-widest text-[#bf360c] distressed-text">FALLOUT</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Scavenge', 'Craft', 'Shelter', 'Radio'].map((item) => (
                            <a key={item} href="#" className="font-stencil text-lg text-[#8d6e63] hover:text-[#ffea00] transition-colors uppercase tracking-[0.2em] relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#bf360c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#bf360c] text-black font-stencil text-sm border-2 border-dashed border-[#black] hover:bg-[#d84315] transition-colors shadow-[4px_4px_0_#000]">
                            Emergency SOS
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={28} /> : <Menu size={28} />}
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
                                Scavenge
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Craft
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shelter
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Radio
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    <div className="bg-[#212121]/90 p-8 border-l-8 border-[#ffea00] shadow-[10px_10px_0_rgba(0,0,0,0.5)] transform rotate-1">
                        <div className="inline-block bg-[#ffea00] text-black px-2 py-1 font-tech font-bold text-xs mb-4 uppercase">
                            Radiation Level: Critical
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-stencil mb-6 text-[#bf360c] distressed-text leading-none`}>
                            SURVIVE <br /> THE DUST
                        </h1>

                        <p className="font-tech text-lg text-[#a1887f] mb-10 leading-relaxed">
                            The world has ended. Now the real work begins. Gather resources, build defenses, and outlast the storm.
                        </p>

                        <button className="w-full px-8 py-4 bg-[#3e2723] text-[#ffea00] font-stencil text-2xl border-2 border-[#ffea00] hover:bg-[#4e342e] transition-colors shadow-[0_0_20px_rgba(255,234,0,0.2)] flex justify-between items-center group">
                            <span>Enter Bunker</span>
                            <AlertTriangle size={24} className="group-hover:animate-ping" />
                        </button>
                    </div>

                    {/* Distressed Panel */}
                    <div className="relative h-[400px] w-full flex items-center justify-center">
                        <div className="absolute inset-0 hazard-stripe opacity-20 transform -skew-x-12 border-4 border-black" />

                        <div className="relative z-10 scratched-metal p-10 w-[80%] transform rotate-2">
                            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#212121] border border-[#8d6e63] rounded-full" />
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#212121] border border-[#8d6e63] rounded-full" />
                            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#212121] border border-[#8d6e63] rounded-full" />
                            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#212121] border border-[#8d6e63] rounded-full" />

                            <div className="text-center">
                                <Skull size={64} className="mx-auto text-[#bf360c] mb-4 opacity-80" />
                                <h2 className="font-stencil text-3xl text-white mb-2">ZONE 0</h2>
                                <p className="font-tech text-[#ffcc80] text-xs">NO ENTRY WITHOUT GEAR</p>
                            </div>

                            {/* Scratch marks */}
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white opacity-20 transform rotate-12" />
                            <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white opacity-10 transform -rotate-3" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Resource Grid */}
            <section className="py-24 px-4 bg-[#212121] border-y-8 border-[#bf360c] relative">
                <div className="hazard-stripe h-4 w-full absolute top-0 left-0 opacity-50" />

                <div className={`max-w-6xl mx-auto flex flex-col ${isMobile ? '' : 'md:flex-row'} gap-8 mt-4`}>
                    {[
                        { icon: Wrench, title: 'Salvage', val: '84%' },
                        { icon: Radiation, title: 'Toxicity', val: '12%' },
                        { icon: AlertTriangle, title: 'Danger', val: 'HIGH' },
                    ].map((item, i) => (
                        <div key={i} className="flex-1 scratched-metal p-6 text-center transform hover:scale-105 transition-transform duration-200">
                            <item.icon size={40} className="mx-auto text-[#ffea00] mb-4" />
                            <h3 className="font-stencil text-2xl text-[#d7ccc8] mb-2">{item.title}</h3>
                            <div className="bg-black/50 p-2 font-tech text-[#bf360c] text-xl font-bold border border-[#5d4037]">{item.val}</div>
                        </div>
                    ))}
                </div>

                <div className="hazard-stripe h-4 w-full absolute bottom-0 left-0 opacity-50" />
            </section>

            {/* Footer */}
            <footer className="py-20 bg-[#1a1a1a] text-[#8d6e63] text-center font-tech border-t border-[#3e2723]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="font-stencil text-2xl text-[#bf360c] mb-8 tracking-[0.5em] opacity-50">REMNANT OS v0.1</h2>

                    <div className="flex justify-center gap-8 text-xs uppercase tracking-widest mb-8">
                        <a href="#" className="hover:text-[#ffea00] decoration-dotted underline">Signals</a>
                        <a href="#" className="hover:text-[#ffea00] decoration-dotted underline">Map</a>
                        <a href="#" className="hover:text-[#ffea00] decoration-dotted underline">Inventory</a>
                    </div>

                    <div className="opacity-30 text-[10px]">
                        &copy; 2024 Final Bastion. Good luck.
                    </div>
                </div>
            </footer>
        </div>
    );
};
