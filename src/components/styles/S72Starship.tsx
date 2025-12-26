import { useState } from 'react';
import { Rocket, Aperture, User, Menu, X, ArrowRight, Gauge } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S72Starship = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#eceff1] font-sans text-[#263238] overflow-x-hidden relative selection:bg-[#00b0ff] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Eurostile:wght@400&family=Rajdhani:wght@400;600;700&display=swap');
        .font-ship { font-family: 'Rajdhani', sans-serif; }
        
        /* Note: Eurostile is not Google Font, falling back to sans-serif or using local if available. Rajdhani is good sub. */
        
        .panel {
           background: #ffffff;
           border-radius: 20px;
           box-shadow: 
              0 4px 6px rgba(0,0,0,0.05), 
              inset 0 1px 0 rgba(255,255,255,1);
           border: 1px solid #cfd8dc;
        }
        .inset-screen {
           background: #263238;
           border-radius: 10px;
           box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);
           position: relative;
           overflow: hidden;
        }
        .inset-screen::before {
           content: '';
           position: absolute;
           top: 0; left: 0; width: 100%; height: 100%;
           background: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
           background-size: 20px 20px;
           opacity: 0.3;
           pointer-events: none;
        }
        .blue-glow {
           box-shadow: 0 0 10px #00b0ff;
        }
        .pill-button {
           border-radius: 50px;
        }
      `}</style>

            {/* Background Grid Accent */}
            <div className="fixed top-0 left-0 w-full h-full bg-[linear-gradient(rgba(38,50,56,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(38,50,56,0.03)_1px,transparent_1px)] bg-[size:50px_50px] z-0 pointer-events-none" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center panel px-8 py-3 bg-white/90 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <Aperture size={28} className="text-[#00b0ff] animate-[spin_10s_linear_infinite]" />
                        <span className="font-ship font-bold text-2xl text-[#37474f] tracking-[0.2em] uppercase">Vanguard</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-1 bg-[#eceff1] p-1 rounded-full px-2`}>
                        {['Deck', 'Systems', 'Crew', 'Nav'].map((item) => (
                            <a key={item} href="#" className="font-ship font-bold text-[#546e7a] hover:bg-white hover:text-[#00b0ff] hover:shadow-sm px-6 py-2 rounded-full transition-all uppercase tracking-wider text-sm">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="w-10 h-10 rounded-full bg-[#eceff1] flex items-center justify-center text-[#546e7a] hover:text-[#00b0ff] hover:bg-white transition-colors shadow-sm border border-[#cfd8dc]">
                            <User size={20} />
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
                                Deck
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Systems
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Crew
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Nav
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#00e676]" />
                            <span className="font-ship font-bold text-[#546e7a] uppercase tracking-widest text-xs">Orbit Stable</span>
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-ship font-bold uppercase leading-none mb-6 text-[#263238]`}>
                            Starship <br />
                            <span className="text-[#00b0ff]">Command</span>
                        </h1>

                        <p className="font-ship text-xl text-[#546e7a] mb-10 max-w-lg leading-relaxed">
                            Welcome aboard, Captain. Systems are primed. Destination coordinates await input.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-[#00b0ff] text-white font-ship font-bold text-lg uppercase tracking-widest pill-button hover:bg-[#0091ea] hover:shadow-[0_0_20px_rgba(0,176,255,0.4)] transition-all flex items-center gap-3">
                                Engage Thrusters <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Interface Panel */}
                    <div className="panel p-2 bg-[#eceff1]">
                        <div className="inset-screen h-[400px] flex flex-col p-6 overflow-hidden relative group">
                            {/* Decorative Scan Line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00b0ff] opacity-50 animate-[scan_3s_linear_infinite]" />

                            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                <div className="font-ship text-[#00b0ff] text-xl tracking-widest">DIAGNOSTICS</div>
                                <Rocket size={24} className="text-[#00b0ff]" />
                            </div>

                            <div className="flex-1 grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#00b0ff]/50 transition-colors">
                                    <div className="text-[#78909c] text-xs font-ship uppercase mb-2">Shield Integrity</div>
                                    <div className="text-3xl font-ship text-white">100%</div>
                                    <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-[#00e676] h-full w-full" />
                                    </div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#00b0ff]/50 transition-colors">
                                    <div className="text-[#78909c] text-xs font-ship uppercase mb-2">Fuel Cells</div>
                                    <div className="text-3xl font-ship text-white">84%</div>
                                    <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-[#ff9100] h-full w-[84%]" />
                                    </div>
                                </div>
                                <div className="col-span-2 bg-white/5 p-4 rounded-lg border border-white/10 h-32 flex items-center justify-center relative overflow-hidden">
                                    {/* Fake Waveform */}
                                    <div className="flex items-end gap-1 h-12">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className="w-2 bg-[#00b0ff] rounded-t-sm animate-pulse" style={{ height: Math.random() * 40 + 10 + 'px', animationDelay: i * 0.1 + 's' }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lower Deck / Stats */}
            <section className="py-20 px-4 bg-white border-t border-[#cfd8dc]">
                <div className={`max-w-6xl mx-auto flex flex-col ${isMobile ? '' : 'md:flex-row'} justify-between items-center gap-8`}>
                    {[
                        { icon: Gauge, label: 'Velocity', val: '0.8c' },
                        { icon: Aperture, label: 'Reactor', val: 'Online' },
                        { icon: Rocket, label: 'Distance', val: '40ly' },
                    ].map((item, i) => (
                        <div key={i} className={`flex items-center gap-6 ${isMobile ? 'w-full' : 'md:w-auto'} p-6 rounded-2xl hover:bg-[#eceff1] transition-colors cursor-pointer group`}>
                            <div className="w-16 h-16 rounded-2xl bg-[#eceff1] flex items-center justify-center text-[#546e7a] group-hover:bg-white group-hover:text-[#00b0ff] group-hover:shadow-md transition-all">
                                <item.icon size={32} />
                            </div>
                            <div>
                                <div className="font-ship text-3xl font-bold text-[#37474f]">{item.val}</div>
                                <div className="font-ship text-sm text-[#78909c] uppercase tracking-widest">{item.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-[#263238] text-[#90a4ae] border-t-4 border-[#00b0ff]">
                <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
                    <div className="mb-6 font-ship font-bold text-2xl text-white tracking-[0.3em]">UES VANGUARD</div>
                    <div className="flex gap-8 font-ship text-xs uppercase tracking-widest mb-8">
                        <a href="#" className="hover:text-white transition-colors">Mission Log</a>
                        <a href="#" className="hover:text-white transition-colors">Crew Roster</a>
                        <a href="#" className="hover:text-white transition-colors">Blueprints</a>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest opacity-50">
                        Registration NCC-1701-X • United Earth Spacefleet
                    </div>
                </div>
            </footer>
        </div>
    );
};
