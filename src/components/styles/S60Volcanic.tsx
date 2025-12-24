import { useState } from 'react';
import { Flame, AlertTriangle, Mountain, ArrowRight, Menu, X, Activity } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S60Volcanic = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Rock Texture
    const rock = "url('https://www.transparenttextures.com/patterns/black-rock.png')";

    return (
        <div className="min-h-screen bg-[#121212] font-sans text-[#eeeeee] overflow-x-hidden relative selection:bg-[#ff3d00] selection:text-black">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Chakra+Petch:wght@300;500;700&display=swap');
        .font-ops { font-family: 'Black Ops One', cursive; }
        .font-tech { font-family: 'Chakra Petch', sans-serif; }
        
        .crack-border {
           clip-path: polygon(
             0% 0%, 
             5% 5%, 10% 0%, 15% 5%, 
             20% 0%, 25% 5%, 30% 0%, 35% 5%, 
             40% 0%, 45% 5%, 50% 0%, 55% 5%, 
             60% 0%, 65% 5%, 70% 0%, 75% 5%, 
             80% 0%, 85% 5%, 90% 0%, 95% 5%, 
             100% 0%, 100% 100%, 0% 100%
           );
        }
        .magma-glow {
           box-shadow: 0 0 10px #ff3d00, inset 0 0 20px #ff3d00;
        }
        .ember {
           width: 4px;
           height: 4px;
           background: #ff9100;
           position: absolute;
           border-radius: 50%;
           animation: rise 5s infinite;
        }
        @keyframes rise {
           0% { transform: translateY(100vh) scale(1); opacity: 1; }
           100% { transform: translateY(-10vh) scale(0); opacity: 0; }
        }
      `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-repeat" style={{ backgroundImage: rock }} />

            {/* Botttom Magma Glow */}
            <div className="fixed bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#bf360c] to-transparent opacity-30 z-0 pointer-events-none" />

            {/* Embers */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="ember"
                        style={{
                            left: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 5 + 's',
                            animationDuration: Math.random() * 3 + 3 + 's',
                            background: Math.random() > 0.5 ? '#ff3d00' : '#ffea00'
                        }}
                    />
                ))}
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6 border-b border-[#3e2723] bg-[#000000]/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Flame size={28} className="text-[#ff3d00] animate-pulse" />
                        <span className="font-ops text-2xl tracking-widest text-[#ff3d00]">PYROCLAST</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-10`}>
                        {['Eruption', 'Monitoring', 'Evacuation', 'Geology'].map((item) => (
                            <a key={item} href="#" className="font-tech font-bold text-[#bcaaa4] hover:text-[#ff9100] transition-colors uppercase tracking-widest text-sm relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff3d00] group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 border border-[#ff3d00] text-[#ff3d00] font-tech font-bold hover:bg-[#ff3d00] hover:text-[#121212] transition-colors uppercase text-xs tracking-[0.2em] shadow-[0_0_10px_rgba(255,61,0,0.3)]">
                            System Active
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#ff3d00]" /> : <Menu size={24} className="text-[#ff3d00]" />}
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
                                Eruption
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Monitoring
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Evacuation
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Geology
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
                                Eruption
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Monitoring
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Evacuation
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Geology
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
                                ...Array(30)
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-5xl mx-auto text-center">

                    <div className="inline-flex items-center mb-8 gap-2 text-[#ff3d00]">
                        <Activity size={20} className="animate-bounce" />
                        <span className="font-tech tracking-widest text-sm">SEISMIC ACTIVITY DETECTED</span>
                    </div>

                    <h1 className={`${isMobile ? 'text-6xl' : 'text-9xl'} font-ops mb-4 text-[#212121]`} style={{ WebkitTextStroke: '2px #ff3d00' }}>
                        MAGMA
                    </h1>
                    <h1 className={`${isMobile ? 'text-6xl' : 'text-9xl'} font-ops mb-12 text-white drop-shadow-[0_0_15px_rgba(255,61,0,0.6)]`}>
                        FLOW
                    </h1>

                    <p className="font-tech text-xl text-[#b0bec5] mb-12 max-w-2xl mx-auto leading-relaxed border-l-2 border-[#ff3d00] pl-6 text-left">
                        The earth cracks open. Molten rock reshapes the landscape. Witness the raw power of creation and destruction.
                    </p>

                    <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-4'} gap-4 max-w-4xl mx-auto`}>
                        {[
                            { label: 'Temp', val: '1200°C' },
                            { label: 'Speed', val: '60 km/h' },
                            { label: 'Ash', val: 'High' },
                            { label: 'Alert', val: 'Red' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#212121] p-6 border border-[#424242] hover:border-[#ff3d00] transition-colors">
                                <div className="font-ops text-2xl text-white mb-1">{stat.val}</div>
                                <div className="font-tech text-xs text-[#ff9100] uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cracked Section */}
            <section className="py-24 px-4 bg-[#1a1a1a] relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff3d00] to-transparent opacity-50" />

                <div className={`max-w-6xl mx-auto flex ${isMobile ? 'flex-col' : 'flex-row'} gap-16 items-center`}>
                    <div className="flex-1">
                        <Mountain size={60} className="text-[#5d4037] mb-6" />
                        <h2 className="text-4xl font-ops text-white mb-6">IGNEOUS FORMATIONS</h2>
                        <p className="font-tech text-[#9e9e9e] leading-loose mb-8">
                            As the lava cools, it forms basalt columns and obsidian glass. The landscape is forever changed, blackened and fertile.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-[#ff3d00] font-tech font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
                            View Gallery <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="flex-1 relative">
                        <div className="w-full h-80 bg-[#212121] crack-border p-1 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ff3d00] to-[#bf360c] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                            <img src="https://images.unsplash.com/photo-1462332420958-a05d1e002495?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                        {/* Glowing Fissure Underlay */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-b-2 border-r-2 border-[#ff3d00] pointer-events-none opacity-50" />
                    </div>
                </div>
            </section>

            {/* Hazard Banner */}
            <div className="bg-[#ff3d00] text-black py-4 overflow-hidden transform skew-y-1 my-12 border-y-4 border-black">
                <div className="flex gap-12 font-ops text-xl whitespace-nowrap justify-center animate-pulse">
                    <AlertTriangle /> EXTREME HEAT WARNING <AlertTriangle />
                    KEEP SAFE DISTANCE <AlertTriangle />
                    TOXIC GASES DETECTED
                </div>
            </div>

            {/* Footer */}
            <footer className="pt-16 pb-8 bg-[#000] border-t border-[#3e2723]">
                <div className="max-w-6xl mx-auto px-6 text-center text-[#616161] font-tech">
                    <div className="mb-4 text-[#ff3d00] opacity-50 text-3xl font-ops">VOLCANOLOGY LABORATORY</div>
                    <p className="mb-8">Est. 1980 • Ring of Fire</p>
                    <div className="text-xs uppercase tracking-[0.3em]">
                        &copy; 2024 Magma Research
                    </div>
                </div>
            </footer>
        </div>
    );
};
