import { useState } from 'react';
import { Gamepad2, Zap, Trophy, Menu, X, ChevronRight, Crosshair } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S86GamerRGB = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-white overflow-x-hidden selection:bg-[#FF0055] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@500;700&display=swap');
        .font-gamer { font-family: 'Orbitron', sans-serif; }
        .font-ui { font-family: 'Rajdhani', sans-serif; }
        
        .clip-corner {
           clip-path: polygon(
              0 0, 
              100% 0, 
              100% calc(100% - 20px), 
              calc(100% - 20px) 100%, 
              0 100%
           );
        }
        
        .neon-glow {
           text-shadow: 0 0 10px #FF0055, 0 0 20px #FF0055;
        }
        
        .border-gradient {
           position: relative;
           background: #111;
           z-index: 1;
        }
        .border-gradient::before {
           content: "";
           position: absolute;
           inset: -2px;
           z-index: -1;
           background: linear-gradient(45deg, #FF0055, #00FFDD, #FF0055);
           filter: blur(10px);
           opacity: 0.5;
        }
        
        .glitch-hover:hover {
           animation: glitch-anim 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
           color: #00FFDD;
        }
        @keyframes glitch-anim {
           0% { transform: translate(0) }
           20% { transform: translate(-2px, 2px) }
           40% { transform: translate(-2px, -2px) }
           60% { transform: translate(2px, 2px) }
           80% { transform: translate(2px, -2px) }
           100% { transform: translate(0) }
        }
      `}</style>

            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#222]">
                <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Gamepad2 size={32} className="text-[#FF0055]" />
                        <span className="font-gamer font-bold text-2xl tracking-widest uppercase">Nexus<span className="text-[#00FFDD]">GG</span></span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Games', 'Tournaments', 'Hardware', 'Community'].map((item) => (
                            <a key={item} href="#" className="font-ui text-xl text-gray-400 hover:text-white uppercase font-bold tracking-wider glitch-hover transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <span className={`text-gray-400 font-ui font-bold uppercase cursor-pointer hover:text-white ${responsive.nav.showDesktop ? 'block' : 'hidden'}`}>Login</span>
                        <button className="bg-[#FF0055] text-white px-6 py-2 font-gamer font-bold text-sm uppercase skew-x-[-10deg] hover:bg-[#D40045] transition-colors border border-[#FF5588]">
                            <span className="skew-x-[10deg] inline-block">Join Squad</span>
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#00FFDD]" /> : <Menu size={24} className="text-[#00FFDD]" />}
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
                                Games
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Tournaments
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Hardware
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Community
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
                                Games
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Tournaments
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Hardware
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Community
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
                                Games
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Tournaments
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Hardware
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Community
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/80 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-0" />

                <div className={`max-w-7xl mx-auto relative z-10 grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-16 items-center min-h-[70vh]`}>

                    <div>
                        <div className="flex items-center gap-2 text-[#00FFDD] mb-4 font-ui font-bold uppercase tracking-[0.2em] border-l-4 border-[#FF0055] pl-4">
                            <Zap size={16} /> Seasonal Event Live
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-gamer font-black text-white mb-6 leading-[0.9] uppercase italic neon-glow`}>
                            Level <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0055] to-[#00FFDD]">Unlimited</span>
                        </h1>

                        <p className="font-ui text-2xl text-gray-300 mb-10 max-w-lg leading-relaxed">
                            Dominate the arena with high-performance gear and exclusive rewards. The battle starts now.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#00FFDD] text-black px-10 py-4 font-gamer font-bold text-lg uppercase clip-corner hover:bg-white transition-colors relative group">
                                Play Now
                                <div className="absolute inset-0 bg-white/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                            <button className="px-10 py-4 font-gamer font-bold text-lg uppercase clip-corner border border-[#333] hover:border-[#FF0055] hover:text-[#FF0055] bg-black/50 backdrop-blur-sm transition-all">
                                View Trailer
                            </button>
                        </div>
                    </div>

                    {/* Featured Item */}
                    <div className="relative border-gradient p-[2px] clip-corner transform hover:scale-[1.02] transition-transform duration-300">
                        <div className="bg-[#111] p-8 clip-corner relative h-[400px] flex flex-col justify-between overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 bg-[#FF0055] text-white font-gamer font-bold text-sm uppercase clip-corner z-10">
                                Elite Pass
                            </div>

                            {/* Grid overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,221,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,221,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                            <div className="relative z-10 mt-auto">
                                <div className="w-16 h-1 bg-[#00FFDD] mb-4" />
                                <h2 className="text-4xl font-gamer font-bold uppercase mb-2">Cyber <br /> Katana</h2>
                                <div className="flex justify-between items-end border-t border-[#333] pt-4 mt-4">
                                    <div className="font-ui text-gray-400 text-sm">
                                        DMG: 9500 <br /> SPD: 1200
                                    </div>
                                    <ChevronRight className="text-[#FF0055] group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="border-y border-[#222] bg-[#0A0A0A]">
                <div className={`max-w-7xl mx-auto grid grid-cols-2 ${isMobile ? '' : 'md:grid-cols-4'} divide-x divide-[#222]`}>
                    {[
                        { label: 'Active Players', value: '2.4M' },
                        { label: 'Tournaments', value: '142' },
                        { label: 'Prize Pool', value: '$500K' },
                        { label: 'Server Status', value: 'Online', color: '#00FFDD' },
                    ].map((stat, i) => (
                        <div key={i} className="py-8 text-center hover:bg-[#111] transition-colors cursor-default group">
                            <div className="font-ui text-gray-500 uppercase text-xs tracking-widest mb-1 group-hover:text-[#FF0055] transition-colors">{stat.label}</div>
                            <div className="font-gamer font-bold text-3xl" style={{ color: stat.color || 'white' }}>{stat.value}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <Crosshair className="text-[#FF0055]" />
                        <h2 className="text-3xl font-gamer font-bold uppercase">Top Categories</h2>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                        {[
                            { icon: Gamepad2, title: 'FPS', color: '#FF0055' },
                            { icon: Trophy, title: 'Ranked', color: '#00FFDD' },
                            { icon: Zap, title: 'Powerups', color: '#FFFF00' },
                        ].map((item, i) => (
                            <div key={i} className="bg-[#111] p-8 clip-corner border border-[#222] hover:border-[color:var(--hover-color)] transition-colors group" style={{ '--hover-color': item.color } as any}>
                                <item.icon size={48} style={{ color: item.color }} className="mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                                <h3 className="text-2xl font-gamer font-bold uppercase mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="font-ui text-gray-500">Access the latest meta and domination strategies.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#020202] border-t border-[#222] py-20 px-6 font-ui">
                <div className={`max-w-7xl mx-auto flex flex-col ${isMobile ? '' : 'md:flex-row'} justify-between items-center gap-8`}>
                    <div className="text-center md:text-left">
                        <div className="font-gamer font-bold text-2xl uppercase text-white mb-2">NexusGG</div>
                        <div className="text-gray-600 text-sm">© 2077 All Rights Reserved.</div>
                    </div>

                    <div className="flex gap-8 text-lg font-bold text-gray-400 uppercase tracking-wider">
                        <a href="#" className="hover:text-[#FF0055] transition-colors">Terms</a>
                        <a href="#" className="hover:text-[#FF0055] transition-colors">Privacy</a>
                        <a href="#" className="hover:text-[#FF0055] transition-colors">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
