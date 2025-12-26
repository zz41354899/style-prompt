import { useState } from 'react';
import { Snowflake, Wind, ThermometerSnowflake, Mountain, Menu, X, ArrowRight, Compass } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S58Polar = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#e0f7fa] font-sans text-[#01579b] overflow-x-hidden relative selection:bg-[#00bcd4] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Rajdhani:wght@300;500;700&display=swap');
        .font-tech { font-family: 'Audiowide', cursive; }
        .font-sans { font-family: 'Rajdhani', sans-serif; }
        
        .ice-clip {
           clip-path: polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%);
        }
        .shard {
           background: rgba(255, 255, 255, 0.4);
           backdrop-filter: blur(8px);
           border: 1px solid rgba(255, 255, 255, 0.8);
           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        .frost-pattern {
           background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 10px);
        }
      `}</style>

            {/* Background Gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] z-0" />

            {/* Floating Ice Shards (CSS) */}
            <div className="fixed top-20 left-10 w-32 h-32 bg-white/30 backdrop-blur-md transform rotate-12 skew-x-12 z-0 border border-white/60" />
            <div className="fixed bottom-40 right-20 w-48 h-48 bg-white/20 backdrop-blur-md transform -rotate-12 skew-y-6 z-0 border-t border-l border-white/60" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/70 backdrop-blur-lg px-8 py-3 ice-clip border-b border-white shadow-lg">
                    <div className="flex items-center gap-3">
                        <Snowflake size={24} className="text-[#00bcd4] animate-[spin_10s_linear_infinite]" />
                        <span className="font-tech text-xl tracking-widest text-[#006064] uppercase">Arktos</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-12`}>
                        {['Glacier', 'Research', 'Climate', 'Base'].map((item) => (
                            <a key={item} href="#" className="font-sans font-bold text-[#00838f] hover:text-[#00bcd4] transition-colors uppercase text-lg tracking-wider">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#00bcd4] hover:bg-[#00acc1] text-white font-tech text-sm uppercase skew-x-[-10deg] transition-all shadow-md">
                            <span className="skew-x-[10deg] inline-block">Join Mission</span>
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
                                Glacier
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Research
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Climate
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Base
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-16 items-center`}>

                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006064] text-[#80deea] font-sans font-bold text-xs uppercase tracking-widest mb-6">
                            <div className="w-2 h-2 rounded-full bg-[#00bcd4] animate-pulse" />
                            Temp: -42°C
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-sans font-bold leading-none mb-6 text-[#006064]`}>
                            ZERO <br />
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#26c6da] font-tech ${isMobile ? 'text-7xl' : 'text-9xl'}`}>KELVIN</span>
                        </h1>

                        <p className="font-sans text-2xl text-[#00838f] mb-10 max-w-lg leading-relaxed font-light">
                            Survive the extremes. Where technology meets the frozen frontier. The last bastion of scientific discovery.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-[#006064] text-white font-sans font-bold text-xl uppercase tracking-widest hover:bg-[#004d40] transition-colors ice-clip shadow-xl flex items-center gap-3">
                                Base Camp <ArrowRight size={20} />
                            </button>
                            <button className="px-8 py-4 bg-white/50 text-[#006064] font-sans font-bold text-xl uppercase tracking-widest hover:bg-white transition-colors ice-clip border border-white backdrop-blur-sm">
                                Data Stream
                            </button>
                        </div>
                    </div>

                    {/* Frost Glass Card */}
                    <div className="relative h-[500px] w-full shard ice-clip p-8 flex flex-col justify-between group overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518182170546-07fb6129202a?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#006064] to-transparent opacity-90" />

                        <div className="relative z-10 flex justify-between items-start">
                            <Mountain size={48} className="text-white opacity-80" />
                            <div className="text-right">
                                <div className="text-4xl font-tech text-white">REF: A-7</div>
                                <div className="text-[#80deea] font-sans">SECTOR 9</div>
                            </div>
                        </div>

                        <div className="relative z-10 frost-pattern p-6 border border-white/20 hover:border-[#00bcd4] transition-colors bg-[#006064]/30 backdrop-blur-md">
                            <h3 className="text-2xl font-sans font-bold text-white mb-2">GLACIAL SHIFT DETECTED</h3>
                            <div className="w-full bg-[#004d40] h-1 mb-2">
                                <div className="bg-[#00bcd4] h-full w-[70%] animate-pulse" />
                            </div>
                            <p className="text-[#80deea] font-mono text-xs">WARNING: UNSTABLE TERRAIN</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Stats */}
            <section className="py-24 px-4 relative z-10 border-t border-white/40 bg-white/20 backdrop-blur-sm">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-2' : 'md:grid-cols-4'} gap-px bg-white/50 border border-white/50 overflow-hidden ice-clip`}>
                    {[
                        { label: 'Wind Speed', val: '140 km/h', icon: Wind },
                        { label: 'Visibility', val: '0.5 km', icon: Compass },
                        { label: 'Temperature', val: '-42°C', icon: ThermometerSnowflake },
                        { label: 'Ice Depth', val: '2.4 km', icon: Mountain },
                    ].map((item, i) => (
                        <div key={i} className="bg-[#e0f7fa]/50 p-8 text-center hover:bg-white transition-colors group">
                            <item.icon size={32} className="mx-auto text-[#00acc1] mb-4 group-hover:scale-110 transition-transform" />
                            <div className="font-tech text-2xl text-[#006064] mb-1">{item.val}</div>
                            <div className="font-sans font-bold text-[#00838f] text-sm uppercase tracking-widest">{item.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 bg-[#006064] text-white relative overflow-hidden">
                {/* Snow Particles (CSS) */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2.5px)', backgroundSize: '30px 30px' }} />

                <div className={`max-w-6xl mx-auto px-6 flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between items-center gap-8 relative z-10`}>
                    <div className="font-tech text-2xl tracking-[0.2em] text-[#80deea]">ARKTOS STATION</div>

                    <div className="flex gap-8 font-sans font-bold text-sm uppercase tracking-widest text-[#b2ebf2]">
                        <a href="#" className="hover:text-white transition-colors decoration-2 hover:underline underline-offset-4">Status</a>
                        <a href="#" className="hover:text-white transition-colors decoration-2 hover:underline underline-offset-4">Personnel</a>
                        <a href="#" className="hover:text-white transition-colors decoration-2 hover:underline underline-offset-4">Logs</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
