import { useState } from 'react';
import { Biohazard, Eye, Zap, Menu, X, ArrowRight, Dna } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S69Alien = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#1a0b2e] font-sans text-[#e1bee7] overflow-x-hidden relative selection:bg-[#76ff03] selection:text-black">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Nunito:wght@300;700&display=swap');
        .font-alien { font-family: 'Creepster', cursive; }
        .font-body { font-family: 'Nunito', sans-serif; }
        
        .slime-border {
           background: rgba(26, 11, 46, 0.8);
           border: 2px solid #76ff03;
           border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
           box-shadow: 0 0 15px rgba(118, 255, 3, 0.3), inset 0 0 20px rgba(118, 255, 3, 0.1);
           animation: morph 8s ease-in-out infinite;
        }
        @keyframes morph {
           0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
           50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
           100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
        .bio-glow {
           filter: drop-shadow(0 0 5px #d500f9);
        }
        .hover-pulse:hover {
           animation: pulse-glow 1s infinite alternate;
        }
        @keyframes pulse-glow {
           from { box-shadow: 0 0 10px #76ff03; }
           to { box-shadow: 0 0 20px #76ff03, 0 0 10px #d500f9; }
        }
      `}</style>

            {/* Background Gradient */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#311b92] to-[#000000] z-0" />

            {/* Floating Orbs (bokehs) */}
            <div className="fixed top-20 right-20 w-32 h-32 bg-[#d500f9] rounded-full blur-[80px] opacity-30 animate-pulse z-0" />
            <div className="fixed bottom-20 left-20 w-40 h-40 bg-[#76ff03] rounded-full blur-[80px] opacity-20 animate-pulse animation-delay-2000 z-0" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-[#4a148c]/30 backdrop-blur-md px-8 py-3 rounded-full border border-[#76ff03]/30 shadow-[0_0_20px_rgba(118,255,3,0.1)]">
                    <div className="flex items-center gap-3">
                        <div className="text-[#76ff03] bio-glow">
                            <Biohazard size={28} />
                        </div>
                        <span className="font-alien text-3xl tracking-widest text-[#d500f9] drop-shadow-md">XENOS</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Origins', 'Biology', 'Habitat', 'Contact'].map((item) => (
                            <a key={item} href="#" className="font-body font-bold text-[#e1bee7] hover:text-[#76ff03] transition-colors text-lg tracking-wide hover:scale-110 transform duration-200">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#76ff03] text-[#1a0b2e] font-alien text-xl rounded-full hover:bg-[#b2ff59] transition-colors shadow-[0_0_15px_#76ff03] hover-pulse">
                            Join Hive
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#76ff03]" /> : <Menu size={24} className="text-[#76ff03]" />}
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
                                Origins
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Biology
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Habitat
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
                                Origins
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Biology
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Habitat
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
                                Origins
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Biology
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Habitat
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
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className={`max-w-5xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-16 items-center`}>

                    <div className="relative z-10">
                        <h1 className={`${isMobile ? 'text-7xl' : 'text-9xl'} font-alien mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#d500f9] via-[#ea80fc] to-[#76ff03] drop-shadow-[0_0_10px_rgba(213,0,249,0.5)] leading-tight`}>
                            FROM THE <br /> STARS
                        </h1>

                        <p className="font-body text-xl text-[#b39ddb] mb-10 max-w-md leading-relaxed">
                            We are not alone. Discover the vibrant, pulsating life that thrives beyond our atmosphere.
                        </p>

                        <div className="flex gap-6">
                            <button className="px-8 py-4 bg-[#6200ea] text-white font-body font-bold rounded-full border border-[#d500f9] hover:bg-[#d500f9] transition-all hover:shadow-[0_0_20px_#d500f9] flex items-center gap-2">
                                Start Research <Dna size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Glowing Centerpiece */}
                    <div className="relative h-[400px] flex items-center justify-center">
                        <div className="absolute inset-0 slime-border animate-none opacity-50 blur-xl bg-[#76ff03]" />
                        <div className="w-[300px] h-[300px] slime-border flex items-center justify-center relative overflow-hidden group cursor-pointer bg-black/40">
                            <Eye size={120} className="text-[#d500f9] bio-glow group-hover:scale-125 transition-transform duration-700" />

                            {/* Veins Overlay */}
                            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100">
                                <path d="M10,50 Q30,30 50,50 T90,50" stroke="#76ff03" strokeWidth="1" fill="none" className="animate-pulse" />
                                <path d="M20,20 Q50,50 80,80" stroke="#d500f9" strokeWidth="1" fill="none" className="animate-pulse animation-delay-500" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Features */}
            <section className="py-24 px-4 bg-[#000000]/20 backdrop-blur-lg">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                    {[
                        { icon: Dna, title: 'Mutation', desc: 'Accelerated genetic evolution.' },
                        { icon: Zap, title: 'Energy', desc: 'Bio-electric power generation.' },
                        { icon: Eye, title: 'Vision', desc: 'Seeing spectra beyond light.' },
                    ].map((item, i) => (
                        <div key={i} className="bg-[#311b92]/30 p-8 rounded-3xl border border-[#d500f9]/30 hover:border-[#76ff03] transition-colors group text-center hover:-translate-y-2 duration-300">
                            <item.icon size={48} className="mx-auto text-[#76ff03] mb-6 group-hover:animate-spin" />
                            <h3 className="font-alien text-3xl text-[#ea80fc] mb-4 tracking-wider">{item.title}</h3>
                            <p className="font-body text-[#b39ddb]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-[#000] border-t border-[#d500f9] text-[#9575cd] text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#76ff03] via-[#d500f9] to-[#76ff03] animate-[shimmer_2s_infinite]" />

                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="font-alien text-4xl text-[#76ff03] mb-6 opacity-60">AREA 52</h2>
                    <p className="text-sm font-body tracking-wider mb-8">Unauthorized personnel will be abducted.</p>
                    <div className="text-xs uppercase opacity-30">&copy; 3024 Galactic Federation</div>
                </div>
            </footer>
        </div>
    );
};
