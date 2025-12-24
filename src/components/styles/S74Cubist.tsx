import { useState } from 'react';
import { Box, Layers, Grid, Menu, X, ArrowRight, Eye } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S74Cubist = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#d7ccc8] font-sans text-[#3e2723] overflow-x-hidden relative selection:bg-[#e65100] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;700&family=Syncopate:wght@400;700&display=swap');
        .font-cubist { font-family: 'Syncopate', sans-serif; }
        .font-body { font-family: 'Josefin Sans', sans-serif; }
        
        .fragment {
           clip-path: polygon(0 0, 100% 15%, 85% 100%, 10% 85%);
           background: #efebe9;
           border: 1px solid #5d4037;
           transition: clip-path 0.5s ease;
        }
        .fragment:hover {
           clip-path: polygon(5% 5%, 95% 10%, 90% 95%, 15% 90%);
        }
        .split-face {
           position: relative;
           overflow: hidden;
        }
        .split-face::before {
           content: '';
           position: absolute;
           top: 0; left: 0; width: 50%; height: 100%;
           background: rgba(93, 64, 55, 0.1);
           transform: skewX(-10deg);
           pointer-events: none;
        }
        .sharp-shadow {
           box-shadow: 10px 10px 0 #5d4037;
        }
      `}</style>

            {/* Geometric Overlay */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#5d4037_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] border-4 border-[#8d6e63] transform rotate-12" />
                <div className="absolute bottom-[20%] right-[10%] w-[200px] h-[400px] bg-[#a1887f] transform -rotate-6" />
            </div>

            {/* Navbar */}
            <nav className={`fixed top-0 w-full z-50 p-0 ${isMobile ? '' : 'md:p-6'} bg-[#d7ccc8]/90 backdrop-blur-sm ${isMobile ? '' : 'md:bg-transparent'}`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                    <div className="flex items-center gap-1 bg-white p-2 border-2 border-[#3e2723] sharp-shadow transform -rotate-1">
                        <Box size={24} className="text-[#e65100]" />
                        <span className="font-cubist font-bold text-xl tracking-tighter">PRISM</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Perspective', 'Form', 'Volume', 'Space'].map((item) => (
                            <a key={item} href="#" className="font-body font-bold text-[#5d4037] hover:text-[#e65100] hover:bg-white hover:px-2 transition-all text-sm uppercase tracking-widest border border-transparent hover:border-[#3e2723]">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-3 bg-[#3e2723] text-[#fff] font-cubist text-xs uppercase hover:bg-[#e65100] transition-colors sharp-shadow transform rotate-1">
                            Deconstruct
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
                                Perspective
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Form
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Volume
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Space
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
                                Perspective
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Form
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Volume
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Space
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
                                Perspective
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Form
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Volume
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Space
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    <div className="relative z-10">
                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-cubist mb-8 leading-none text-[#3e2723]`}>
                            MULTI <br />
                            <span className="text-[#e65100] ml-12 block transform -skew-x-12 bg-[#fff] px-4 -ml-4 border-2 border-[#3e2723] inline-block sharp-shadow">FACETED</span>
                            <br /> VIEW
                        </h1>

                        <p className="font-body text-xl font-bold text-[#5d4037] mb-10 max-w-md leading-relaxed border-l-4 border-[#e65100] pl-6 bg-white/50 py-4">
                            Reality is not a single image, but a collection of simultaneous perspectives. Break the frame.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <button className="px-8 py-4 bg-[#e65100] text-white font-cubist text-sm uppercase sharp-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-2 border-[#3e2723]">
                                Start Viewing
                            </button>
                        </div>
                    </div>

                    {/* Abstract Composition */}
                    <div className="relative h-[500px] w-full">
                        <div className="absolute top-10 left-10 w-2/3 h-2/3 bg-[#8d6e63] clip-path-polygon-[20%_0%,_100%_0%,_80%_100%,_0%_100%] z-10 opacity-80" />
                        <div className="absolute bottom-10 right-10 w-2/3 h-2/3 bg-[#3e2723] clip-path-polygon-[0%_0%,_100%_20%,_100%_100%,_20%_80%] z-20 opacity-80" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#e65100] rounded-full z-30 mix-blend-multiply opacity-80" />

                        <Eye size={120} className="absolute top-[20%] right-[30%] z-40 text-white animate-pulse" />
                        <Grid size={80} className="absolute bottom-[20%] left-[20%] z-40 text-[#fff] opacity-50" />
                    </div>
                </div>
            </section>

            {/* Deconstructed Grid */}
            <section className="py-24 px-4 bg-[#efebe9]">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-0`}>
                    {[
                        { icon: Box, title: 'Geometry', desc: 'Reducing nature to sphere, cone, cylinder.' },
                        { icon: Layers, title: 'Simultaneity', desc: 'All angles seen at once.' },
                        { icon: Grid, title: 'Structure', desc: 'The grid that underlies reality.' },
                    ].map((item, i) => (
                        <div key={i} className={`p-10 border border-[#8d6e63] hover:bg-[#d7ccc8] transition-colors group relative overflow-hidden ${i === 1 && !isMobile ? 'md:mt-12 md:-mb-12 bg-[#fff]' : 'bg-[#f5f5f5]'}`}>
                            <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#e65100] rounded-full opacity-10 group-hover:scale-150 transition-transform" />

                            <item.icon size={48} className="text-[#3e2723] mb-6 relative z-10" />
                            <h3 className="font-cubist text-xl text-[#e65100] mb-4 font-bold">{item.title}</h3>
                            <p className="font-body text-[#5d4037] font-bold">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 bg-[#3e2723] text-[#cfd8dc] border-t-8 border-[#e65100]">
                <div className={`max-w-6xl mx-auto flex flex-col ${isMobile ? '' : 'md:flex-row'} justify-between items-start px-6`}>
                    <div className={`${isMobile ? 'mb-10' : 'md:mb-0'}`}>
                        <div className="font-cubist text-2xl text-white mb-4">AVANT GARDE</div>
                        <p className="max-w-xs font-body text-sm opacity-60">
                            Breaking forms since 1907. Reassembling the pieces into a new truth.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 font-cubist text-xs tracking-widest text-[#e65100]">
                        <a href="#" className="hover:text-white bg-[#4e342e] p-2 inline-block">Manifesto</a>
                        <a href="#" className="hover:text-white bg-[#4e342e] p-2 inline-block">Gallery</a>
                        <a href="#" className="hover:text-white bg-[#4e342e] p-2 inline-block">Contact</a>
                        <a href="#" className="hover:text-white bg-[#4e342e] p-2 inline-block">Legal</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
