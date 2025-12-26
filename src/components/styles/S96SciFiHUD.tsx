import { useState } from 'react';
import { Target, Crosshair, Shield, Activity, Menu, X, Radio } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S96SciFiHUD = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#050B14] font-sans text-[#00E5FF] overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');
        .font-hud { font-family: 'Rajdhani', sans-serif; }
        
        .hud-border {
           background: 
              linear-gradient(135deg, transparent 10px, rgba(0,229,255,0.1) 10px) top left,
              linear-gradient(225deg, transparent 10px, rgba(0,229,255,0.1) 10px) top right,
              linear-gradient(315deg, transparent 10px, rgba(0,229,255,0.1) 10px) bottom right,
              linear-gradient(45deg, transparent 10px, rgba(0,229,255,0.1) 10px) bottom left;
           background-size: 50% 50%;
           background-repeat: no-repeat;
           border: 1px solid rgba(0,229,255,0.3);
           clip-path: polygon(
              0 10px, 10px 0, 
              calc(100% - 10px) 0, 100% 10px, 
              100% calc(100% - 10px), calc(100% - 10px) 100%, 
              10px 100%, 0 calc(100% - 10px)
           );
        }
        
        .reticle-spin {
           animation: spin 10s linear infinite;
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .blink-slow {
           animation: blink 2s infinite;
        }
        
        .line-scan {
           height: 2px;
           background: #00E5FF;
           position: absolute;
           left: 0; right: 0;
           animation: scan 3s linear infinite;
           opacity: 0.5;
           box-shadow: 0 0 10px #00E5FF;
        }
        @keyframes scan { 0% { top: 0%; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
      `}</style>

            {/* Background World */}
            <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80')] bg-cover bg-center z-0 opacity-40 mix-blend-luminosity filter blur-sm" />
            <div className="fixed inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-transparent z-0" />
            <div className="fixed inset-0 pointer-events-none z-10 line-scan" />

            {/* Navbar HUD */}
            <nav className="fixed w-full z-50 top-0 border-b border-[#00E5FF]/30 bg-[#050B14]/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">
                    {/* Decorative corner markers */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00E5FF]" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00E5FF]" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00E5FF]" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00E5FF]" />

                    <div className="flex items-center gap-3">
                        <Target className="text-[#00E5FF] animate-pulse" />
                        <span className="font-hud font-bold text-2xl tracking-[0.2em]">SYS.OVERRIDE</span>
                    </div>

                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8`}>
                        {['Mission', 'Tactical', 'Intel', 'Log'].map((item) => (
                            <a key={item} href="#" className="font-hud font-bold text-lg uppercase tracking-widest hover:bg-[#00E5FF]/20 px-4 py-1 skew-x-12 transition-all">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className={`text-right ${isMobile ? 'hidden' : 'block'}`}>
                            <div className="text-[10px] font-hud uppercase text-[#00E5FF]/70">Connection</div>
                            <div className="text-lg font-bold font-hud leading-none">SECURE</div>
                        </div>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="border border-[#00E5FF] p-1 bg-[#00E5FF]/10">
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
                                Home
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Features
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
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
            <section className="pt-32 pb-20 px-6 relative z-20 min-h-screen flex items-center">
                <div className={`max-w-7xl mx-auto w-full grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-12 items-center`}>

                    <div className="hud-border p-8 bg-[#001524]/80 backdrop-blur-md relative">
                        <div className="absolute top-4 right-4 text-xs font-hud border border-[#00E5FF] px-2 text-[#00E5FF] blink-slow">Targeting Active</div>

                        <h1 className={`${isMobile ? 'text-5xl' : 'text-5xl md:text-7xl'} font-hud font-bold mb-6 text-white uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]`}>
                            Augmented <br /> Reality <span className="text-[#00E5FF]">v2.0</span>
                        </h1>

                        <p className="font-hud text-xl text-[#00E5FF]/80 mb-10 leading-relaxed max-w-lg">
                  // INITIATING NEURAL LINK <br />
                  // SYNCHRONIZING BIOMETRICS <br />
                  // SYSTEM READY FOR DEPLOYMENT
                        </p>

                        <div className="flex gap-4">
                            <button className="bg-[#00E5FF]/20 border border-[#00E5FF] text-[#00E5FF] px-8 py-3 font-hud font-bold text-xl uppercase hover:bg-[#00E5FF] hover:text-black transition-all clip-corner group flex items-center gap-2">
                                <Crosshair className="group-hover:rotate-90 transition-transform" /> Engage
                            </button>
                            <button className="border border-[#00E5FF]/50 text-[#00E5FF]/70 px-8 py-3 font-hud font-bold text-xl uppercase hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all">
                                Scan Area
                            </button>
                        </div>
                    </div>

                    {/* Right Side HUD Graphic */}
                    <div className="relative flex justify-center items-center h-[400px]">
                        <div className="absolute w-[300px] h-[300px] border border-[#00E5FF]/30 rounded-full reticle-spin" />
                        <div className="absolute w-[280px] h-[280px] border-t border-b border-[#00E5FF]/60 rounded-full rotate-45" />
                        <div className="absolute w-[200px] h-[200px] border border-[#00E5FF]/20 rounded-full flex items-center justify-center">
                            <div className="w-[180px] h-[180px] bg-[#00E5FF]/5 rounded-full animate-pulse" />
                        </div>

                        {/* Floating Data Points */}
                        <div className="absolute top-0 right-0 hud-border p-4 bg-[#050B14]/90 w-48">
                            <div className="flex items-center gap-2 mb-2 text-xs font-hud font-bold uppercase">
                                <Shield size={14} /> Shield Integrity
                            </div>
                            <div className="w-full h-2 bg-[#00E5FF]/20">
                                <div className="w-[85%] h-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 hud-border p-4 bg-[#050B14]/90 w-48">
                            <div className="flex items-center gap-2 mb-2 text-xs font-hud font-bold uppercase">
                                <Activity size={14} /> Vital Signs
                            </div>
                            <div className="flex items-end gap-1 h-8">
                                {[20, 50, 30, 80, 40, 60, 45, 90, 70, 30].map((h, i) => (
                                    <div key={i} className="flex-1 bg-[#00E5FF]" style={{ height: `${h}%`, opacity: i % 2 ? 0.8 : 0.4 }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Stats */}
            <section className="border-t border-[#00E5FF]/20 bg-[#001524]/60 py-12 px-6">
                <div className={`max-w-7xl mx-auto grid grid-cols-2 ${isMobile ? '' : 'md:grid-cols-4'} gap-8`}>
                    {[
                        { val: "34.2 TB", label: "Data Transfer" },
                        { val: "12ms", label: "Latency" },
                        { val: "100%", label: "Encryption" },
                        { val: "Active", label: "Neural Net", color: "text-green-400" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center group cursor-default">
                            <div className={`font-hud font-bold text-3xl mb-1 group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)] ${stat.color || ''}`}>{stat.val}</div>
                            <div className="text-[10px] uppercase font-hud tracking-[0.3em] text-[#00E5FF]/60">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
