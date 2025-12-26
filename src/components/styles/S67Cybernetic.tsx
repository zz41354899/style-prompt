import { useState } from 'react';
import { Scan, Cpu, Shield, Menu, X, ArrowRight, Radio } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S67Cybernetic = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#0d1117] font-sans text-[#afff41] overflow-x-hidden relative selection:bg-[#afff41] selection:text-black">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Teko:wght@300;600&display=swap');
        .font-hud { font-family: 'Share Tech Mono', monospace; }
        .font-display { font-family: 'Teko', sans-serif; }
        
        .hud-border {
           position: relative;
           border: 1px solid rgba(175, 255, 65, 0.3);
           background: rgba(13, 17, 23, 0.8);
        }
        .hud-border::before {
           content: '';
           position: absolute;
           top: -1px; left: -1px; width: 10px; height: 10px;
           border-top: 2px solid #afff41;
           border-left: 2px solid #afff41;
        }
        .hud-border::after {
           content: '';
           position: absolute;
           bottom: -1px; right: -1px; width: 10px; height: 10px;
           border-bottom: 2px solid #afff41;
           border-right: 2px solid #afff41;
        }
        .scan-line {
           position: absolute;
           top: 0;
           left: 0;
           width: 100%;
           height: 2px;
           background: #afff41;
           opacity: 0.5;
           animation: scan 3s linear infinite;
           pointer-events: none;
           box-shadow: 0 0 10px #afff41;
        }
        @keyframes scan {
           0% { top: 0%; opacity: 0; }
           10% { opacity: 0.8; }
           90% { opacity: 0.8; }
           100% { top: 100%; opacity: 0; }
        }
        .glitch {
           position: relative;
        }
        .glitch::before, .glitch::after {
           content: attr(data-text);
           position: absolute;
           top: 0; left: 0; width: 100%; height: 100%;
           background: #0d1117;
        }
        .glitch::before {
           left: 2px;
           text-shadow: -1px 0 #ff00de;
           clip: rect(24px, 550px, 90px, 0);
           animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
        }
        .glitch::after {
           left: -2px;
           text-shadow: -1px 0 #00ffff;
           clip: rect(85px, 550px, 140px, 0);
           animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim-1 {
           0% { clip: rect(20px, 9999px, 80px, 0); }
           20% { clip: rect(60px, 9999px, 10px, 0); }
           40% { clip: rect(90px, 9999px, 30px, 0); }
           60% { clip: rect(10px, 9999px, 50px, 0); }
           80% { clip: rect(50px, 9999px, 90px, 0); }
           100% { clip: rect(30px, 9999px, 70px, 0); }
        }
        @keyframes glitch-anim-2 {
           0% { clip: rect(80px, 9999px, 20px, 0); }
           20% { clip: rect(10px, 9999px, 60px, 0); }
           40% { clip: rect(30px, 9999px, 90px, 0); }
           60% { clip: rect(50px, 9999px, 10px, 0); }
           80% { clip: rect(90px, 9999px, 50px, 0); }
           100% { clip: rect(70px, 9999px, 30px, 0); }
        }
        .clip-path-polygon {
           clip-path: polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%);
        }
      `}</style>

            {/* Grid Background */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[linear-gradient(rgba(0,255,65,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Scan Line */}
            <div className="fixed inset-0 z-50 pointer-events-none opacity-10">
                <div className="scan-line" />
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-4 border-b border-[#afff41]/30 bg-[#0d1117]/90 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Cpu size={24} className="text-[#afff41]" />
                        <span className="font-display text-3xl tracking-widest text-white glitch" data-text="CYBERNETIC">CYBERNETIC</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['System', 'Neural', 'Augment', 'Network'].map((item, i) => (
                            <a key={item} href="#" className="font-hud text-sm text-[#afff41]/70 hover:text-[#afff41] transition-colors relative group">
                                <span className="mr-2 text-xs opacity-50">0{i + 1}</span>
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#afff41] group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-1 border border-[#afff41] text-[#afff41] font-hud text-xs hover:bg-[#afff41] hover:text-[#0d1117] transition-colors uppercase tracking-widest relative overflow-hidden group">
                            <span className="relative z-10 font-bold">Connect</span>
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-[#afff41]/50 skew-x-[-20deg] group-hover:left-[200%] transition-all duration-500" />
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#afff41]" /> : <Menu size={24} className="text-[#afff41]" />}
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
                                System
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Neural
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Augment
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Network
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-12 items-center`}>

                    <div>
                        <div className="inline-flex items-center gap-2 mb-4 border border-[#afff41]/50 px-3 py-1 bg-[#afff41]/10 rounded-sm">
                            <div className="w-2 h-2 rounded-full bg-[#afff41] animate-pulse" />
                            <span className="font-hud text-xs uppercase text-[#afff41]">System Online</span>
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-display uppercase leading-none mb-6 text-white drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]`}>
                            Core <br />
                            <span className="text-[#afff41]">Override</span>
                        </h1>

                        <p className="font-hud text-lg text-[#afff41]/80 mb-10 max-w-lg leading-relaxed border-l-2 border-[#afff41] pl-6">
                            {'>> INITIALIZING PROTOCOL V.9.0'}
                            <br />
                            {'>> AUGMENTING REALITY INTERFACE...'}
                            <br />
                            {'>> CONNECTING TO NEURAL NET...'}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="flex items-center gap-2 px-8 py-3 bg-[#afff41] text-[#0d1117] font-hud font-bold text-lg uppercase tracking-widest hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,255,65,0.4)] clip-path-polygon">
                                Initiate <ArrowRight size={18} />
                            </button>
                            <button className="px-8 py-3 bg-transparent border border-[#afff41] text-[#afff41] font-hud font-bold text-lg uppercase tracking-widest hover:bg-[#afff41]/10 transition-colors backdrop-blur-sm">
                                Diagnostics
                            </button>
                        </div>
                    </div>

                    {/* Circular HUD Element */}
                    <div className="relative h-[400px] w-full flex items-center justify-center">
                        <div className="absolute w-[300px] h-[300px] rounded-full border border-[#afff41]/20 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute w-[280px] h-[280px] rounded-full border-t border-b border-[#afff41]/60 animate-[spin_5s_linear_infinite_reverse]" />
                        <div className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-[#afff41]/40 animate-[spin_20s_linear_infinite]" />

                        <div className="relative z-10 hud-border p-8 text-center bg-[#0d1117]/80 backdrop-blur-md">
                            <Scan size={48} className="mx-auto text-[#afff41] mb-4" />
                            <div className="font-display text-4xl text-white">TARGET ACQUIRED</div>
                            <div className="font-hud text-xs text-[#afff41] mt-2 tracking-widest">
                                SECTOR 7G <br /> COORDINATES LOCKED
                            </div>
                        </div>

                        {/* Random Data Lines */}
                        <div className="absolute top-[10%] right-[10%] font-hud text-[10px] text-[#afff41]/60 text-right">
                            <div className="mb-1">CPU: 45%</div>
                            <div className="mb-1">MEM: 12TB</div>
                            <div>NET: 10GB/s</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Grid */}
            <section className="py-20 px-4 border-t border-[#afff41]/20 bg-[#0d1117]/80 relative">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                    {[
                        { icon: Shield, label: 'Firewall', status: 'ACTIVE' },
                        { icon: Cpu, label: 'Processor', status: 'OPTIMAL' },
                        { icon: Radio, label: 'Uplink', status: 'STABLE' },
                    ].map((item, i) => (
                        <div key={i} className="hud-border p-6 hover:bg-[#afff41]/5 transition-colors group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <item.icon size={32} className="text-[#afff41] group-hover:drop-shadow-[0_0_8px_#afff41] transition-all" />
                                <span className="font-hud text-xs text-[#afff41] border border-[#afff41] px-2 py-0.5 animate-pulse">{item.status}</span>
                            </div>
                            <h3 className="font-display text-2xl text-white tracking-wider">{item.label}</h3>
                            <div className="w-full h-1 bg-[#333] mt-4 relative overflow-hidden">
                                <div className="absolute top-0 left-0 h-full bg-[#afff41] w-[70%]" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-[#afff41]/30 bg-[#050608] font-hud text-xs text-[#afff41]/60">
                <div className={`max-w-6xl mx-auto px-6 flex flex-col ${isMobile ? '' : 'md:flex-row'} justify-between items-center gap-4`}>
                    <div>
                        SYSTEM TERMINATED. PROCESS ID: 99482
                        <br /> COPYRIGHT 2077
                    </div>

                    <div className="flex gap-8 uppercase tracking-widest">
                        <a href="#" className="hover:text-[#afff41]">Protocol</a>
                        <a href="#" className="hover:text-[#afff41]">Access</a>
                        <a href="#" className="hover:text-[#afff41]">Log Out</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
