import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Gamepad2, Zap, Trophy, Target, Cpu, Monitor, MousePointer2, Headphones, Crosshair, BarChart3, Users } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S86GamerRGBPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF0055] selection:text-white overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap');
                
                .font-cyber { font-family: 'Chakra Petch', sans-serif; }
                .font-tech { font-family: 'Rajdhani', sans-serif; }
                
                .hex-pattern {
                    background-image: linear-gradient(30deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111),
                                      linear-gradient(150deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111),
                                      linear-gradient(30deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111),
                                      linear-gradient(150deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111),
                                      radial-gradient(#1a1a1a 20%, transparent 20%);
                    background-size: 80px 140px;
                    background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0;
                }

                .chroma-text {
                    background: linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
                    background-size: 400% 100%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: chroma-pan 8s linear infinite;
                }
                
                .chroma-border {
                    position: relative;
                }
                
                .chroma-border::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    padding: 2px;
                    border-radius: inherit;
                    background: linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
                    background-size: 400% 100%;
                    animation: chroma-pan 4s linear infinite;
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                }

                @keyframes chroma-pan {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 400% 50%; }
                }

                .glow-text {
                    text-shadow: 0 0 10px currentColor;
                }

                .cyber-grid {
                    background-size: 40px 40px;
                    background-image: linear-gradient(to right, rgba(0, 255, 255, 0.05) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
                    mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
                }
                
                .clip-path-slant {
                    clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
                }
            `}</style>

            {/* Background Grid */}
            <div className="fixed inset-0 cyber-grid z-0 pointer-events-none transform perspective-2000 rotate-x-60 scale-150 origin-top"></div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 bg-black border border-[#00FFFF] flex items-center justify-center transform skew-x-[-10deg] shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                            <Gamepad2 size={24} className="text-[#00FFFF] transform skew-x-[10deg]" />
                        </div>
                        <span className="text-2xl font-bold font-cyber tracking-widest text-white">NEXUS<span className="text-[#FF0055]">.GG</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['HARDWARE', 'GAMES', 'ESPORTS', 'COMMUNITY'].map((item) => (
                                <a key={item} href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors font-tech tracking-[0.2em] relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF0055] transition-all group-hover:w-full box-shadow-[0_0_10px_#FF0055]"></span>
                                </a>
                            ))}
                            <div className="w-px h-8 bg-white/10 mx-2"></div>
                            <a href="#" className="text-sm font-bold text-white hover:text-[#00FFFF] transition-colors font-tech tracking-wider">LOGIN</a>
                            <button className="relative px-6 py-2 bg-[#FF0055] hover:bg-[#D40046] text-white font-bold text-sm tracking-widest clip-path-slant transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,0,85,0.4)]">
                                JOIN NOW
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white border border-white/20 hover:border-[#00FFFF] hover:text-[#00FFFF] bg-black/50 transition-colors">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-20 left-0 w-full bg-black border-b border-white/10 shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200 z-50">
                        {['HARDWARE', 'GAMES', 'ESPORTS', 'COMMUNITY'].map((item) => (
                            <a key={item} href="#" className="text-lg font-bold text-gray-300 hover:text-[#00FFFF] py-3 border-b border-white/5 font-cyber tracking-widest">
                                {item}
                            </a>
                        ))}
                        <button className="w-full mt-2 py-4 bg-[#FF0055] text-white font-bold tracking-widest clip-path-slant">
                            JOIN NOW
                        </button>
                    </div>
                )}
            </header>

            <main className="font-tech relative z-10">
                {/* Hero Section */}
                <section className="relative pt-24 pb-32 px-6 overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#00FFFF]/10 to-[#FF0055]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent opacity-50"></div>

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative z-20">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 border-l-4 border-l-[#00FFFF] backdrop-blur-sm mb-8">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFFF] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFFF]"></span>
                                </span>
                                <span className="text-[#00FFFF] text-xs font-bold tracking-[0.2em] font-cyber">SYSTEM ONLINE</span>
                            </div>

                            <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] mb-8 font-cyber uppercase">
                                Level Up <br />
                                <span className="chroma-text">Your Game</span>
                            </h1>

                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg font-medium border-l-2 border-white/10 pl-6">
                                Ultimate performance gear for competitive dominance. Precision engineered for the elite.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="px-10 py-5 bg-[#00FFFF] hover:bg-[#00CCCC] text-black text-lg font-bold tracking-widest clip-path-slant transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,255,255,0.4)] flex items-center justify-center gap-3 group">
                                    SHOP GEAR <Zap size={20} className="group-hover:text-white transition-colors" />
                                </button>
                                <button className="px-10 py-5 bg-transparent text-white text-lg font-bold tracking-widest clip-path-slant border border-white/20 hover:border-[#FF0055] hover:text-[#FF0055] transition-all flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(255,0,85,0.2)]">
                                    WATCH TRAILER <Monitor size={20} />
                                </button>
                            </div>

                            <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8">
                                {[
                                    { label: 'Latency', val: '1ms', col: '#00FFFF' },
                                    { label: 'Refresh', val: '360Hz', col: '#FF0055' },
                                    { label: 'Precision', val: '26K', col: '#39FF14' }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-3xl font-black font-cyber mb-1" style={{ textShadow: `0 0 10px ${stat.col}` }}>{stat.val}</div>
                                        <div className="text-xs font-bold text-gray-500 tracking-widest uppercase">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
                            {/* 3D Card Effect Container */}
                            <div className="relative w-full max-w-md aspect-[3/4] group preserve-3d">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#00FFFF] via-transparent to-[#FF0055] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>

                                <div className="relative h-full w-full bg-[#0A0A0A] border border-white/10 p-2 shadow-2xl skew-y-3 group-hover:skew-y-0 transition-all duration-500 ease-out">
                                    {/* Inner Frame */}
                                    <div className="h-full w-full border border-white/5 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>

                                        {/* Content Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 p-8">
                                            <div className="flex items-end justify-between mb-4">
                                                <div>
                                                    <div className="text-[#00FFFF] font-cyber text-sm tracking-widest mb-1">NEW ARRIVAL</div>
                                                    <h3 className="text-3xl font-bold font-cyber text-white">PRO X SUPERLIGHT</h3>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-gray-500 text-xs line-through mb-1">$159</div>
                                                    <div className="text-[#FF0055] font-bold text-xl">$129</div>
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[#00FFFF] w-[85%] shadow-[0_0_10px_#00FFFF]"></div>
                                                </div>
                                                <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[#FF0055] w-[92%] shadow-[0_0_10px_#FF0055]"></div>
                                                </div>
                                                <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[#39FF14] w-[78%] shadow-[0_0_10px_#39FF14]"></div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono tracking-wider">
                                                <span>SPEED</span>
                                                <span>AIM</span>
                                                <span>COMFORT</span>
                                            </div>
                                        </div>

                                        {/* Corner Accents */}
                                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FFFF]"></div>
                                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FF0055]"></div>
                                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FF0055]"></div>
                                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00FFFF]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Card  */}
                            <div className="absolute bottom-20 -left-10 bg-black/90 backdrop-blur border border-[#39FF14] p-6 clip-path-slant shadow-[0_0_20px_rgba(57,255,20,0.2)] animate-bounce-slow z-30 hidden lg:block">
                                <div className="flex items-center gap-4 mb-4">
                                    <Trophy size={24} className="text-[#39FF14]" />
                                    <div>
                                        <div className="text-xs text-gray-400 tracking-widest">TOURNAMENT WINNER</div>
                                        <div className="font-bold font-cyber text-lg">APEX LEGENDS S15</div>
                                    </div>
                                </div>
                                <div className="w-full bg-white/10 h-1">
                                    <div className="bg-[#39FF14] h-full w-full animate-progress shadow-[0_0_5px_#39FF14]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="py-24 px-6 relative bg-[#080808] border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-end justify-between mb-16 px-4">
                            <div>
                                <h2 className="text-[#00FFFF] font-bold tracking-[0.3em] text-sm mb-2 font-cyber">ARSENAL</h2>
                                <h3 className="text-4xl md:text-5xl font-black text-white font-cyber uppercase">
                                    Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0055] to-[#FF00AA]">Weapon</span>
                                </h3>
                            </div>
                            <button className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold tracking-widest border-b border-transparent hover:border-white pb-1">
                                VIEW ALL <ArrowRight size={16} />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: MousePointer2, title: "MICE", desc: "Ultralight precision", color: "text-[#00FFFF]", gradient: "from-[#00FFFF]/20" },
                                { icon: Headphones, title: "AUDIO", desc: "Spatial surround sound", color: "text-[#FF0055]", gradient: "from-[#FF0055]/20" },
                                { icon: Monitor, title: "VISUALS", desc: "High reflex displays", color: "text-[#39FF14]", gradient: "from-[#39FF14]/20" },
                                { icon: Cpu, title: "SYSTEMS", desc: "Overclocked power", color: "text-[#9B30FF]", gradient: "from-[#9B30FF]/20" }
                            ].map((cat, i) => (
                                <div key={i} className="group relative h-80 border border-white/10 bg-[#0A0A0A] overflow-hidden transition-all hover:-translate-y-2 hover:border-white/30">
                                    <div className={`absolute inset-0 bg-gradient-to-b ${cat.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
                                        <div className="w-20 h-20 mb-6 relative">
                                            <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full animate-spin-slow"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <cat.icon size={40} className={`${cat.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />
                                            </div>
                                        </div>

                                        <h4 className="text-2xl font-bold font-cyber tracking-widest text-white mb-2">{cat.title}</h4>
                                        <p className="text-gray-500 font-medium text-sm">{cat.desc}</p>

                                        <button className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-xs font-bold tracking-[0.2em] text-white border border-white/30 px-6 py-2 hover:bg-white hover:text-black">
                                            EXPLORE
                                        </button>
                                    </div>

                                    {/* Tech Lines */}
                                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                                        <div className="h-[1px] w-full bg-white absolute top-10"></div>
                                        <div className="h-[1px] w-full bg-white absolute bottom-10"></div>
                                        <div className="w-[1px] h-full bg-white absolute left-10"></div>
                                        <div className="w-[1px] h-full bg-white absolute right-10"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Esports Team */}
                <section className="py-24 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 hex-pattern opacity-10"></div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                {/* Team Card */}
                                <div className="chroma-border p-1 bg-black">
                                    <div className="bg-[#050505] p-8">
                                        <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
                                            <div className="flex items-center gap-4">
                                                <Trophy size={32} className="text-[#FFD700]" />
                                                <div>
                                                    <div className="text-xs text-gray-400 tracking-widest">WORLD CHAMPIONS</div>
                                                    <div className="text-xl font-bold font-cyber">SEASON 2024</div>
                                                </div>
                                            </div>
                                            <div className="px-3 py-1 bg-white/10 text-xs font-bold tracking-widest text-white">
                                                ROSTER
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {[
                                                { role: "Sniper", name: "PHANTOM", kda: "4.2", country: "KR" },
                                                { role: "Entry", name: "VELOCITY", kda: "3.8", country: "US" },
                                                { role: "Support", name: "ECHO", kda: "5.1", country: "DE" },
                                                { role: "IGL", name: "NEXUS", kda: "2.9", country: "SE" }
                                            ].map((player, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 transition-colors cursor-pointer group">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 bg-white/10 flex items-center justify-center text-xs font-bold text-gray-500 font-mono">
                                                            {player.country}
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-white font-cyber tracking-wide group-hover:text-[#00FFFF] transition-colors">{player.name}</div>
                                                            <div className="text-[10px] text-gray-500 uppercase tracking-widest">{player.role}</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-[#FF0055] font-bold font-mono">{player.kda}</div>
                                                        <div className="text-[10px] text-gray-600">KDA</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <h2 className="text-[#FF0055] font-bold tracking-[0.3em] text-sm mb-4 font-cyber">PRO TEAMS</h2>
                                <h3 className="text-5xl lg:text-6xl font-black text-white font-cyber uppercase mb-6 leading-none">
                                    Dominate <br /> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#0088FF]">Arena</span>
                                </h3>
                                <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                                    Join the ranks of the elite. Our gear is tested and trusted by top tier esports professionals worldwide.
                                </p>

                                <div className="grid grid-cols-2 gap-8 mb-10">
                                    <div>
                                        <div className="text-4xl font-black text-white font-cyber mb-1">50+</div>
                                        <div className="text-xs text-gray-500 font-bold tracking-widest uppercase">Championships</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-white font-cyber mb-1">$10M</div>
                                        <div className="text-xs text-gray-500 font-bold tracking-widest uppercase">Prize Earnings</div>
                                    </div>
                                </div>

                                <button className="px-8 py-4 border border-[#FF0055] text-[#FF0055] font-bold tracking-[0.2em] hover:bg-[#FF0055] hover:text-white transition-all hover:shadow-[0_0_20px_#FF0055]">
                                    MEET THE TEAMS
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter / CTA */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto border border-white/10 bg-[#0A0A0A] p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00FFFF] via-[#39FF14] to-[#FF0055]"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white font-cyber uppercase mb-6">
                                Join the <span className="text-[#39FF14]">Nexus</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">Get exclusive drops, pro tips, and early access to tournament tickets.</p>

                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input type="email" placeholder="ENTER EMAIL" className="flex-1 bg-black border border-white/20 text-white px-6 py-4 font-mono text-sm focus:border-[#00FFFF] focus:outline-none transition-colors" />
                                <button className="bg-[#39FF14] text-black font-bold tracking-widest px-8 py-4 hover:bg-[#25D405] transition-colors clip-path-slant">
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>

                        {/* Bg Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#39FF14] opacity-5 filter blur-[100px] pointer-events-none"></div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <Gamepad2 size={24} className="text-[#00FFFF]" />
                                <span className="text-xl font-bold font-cyber tracking-widest text-white">NEXUS.GG</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Forging the future of competitive gaming through innovation, community, and performance.
                            </p>
                        </div>

                        {[
                            { title: "SHOP", links: ["Mice", "Keyboards", "Audio", "Monitors", "Streaming"] },
                            { title: "SUPPORT", links: ["Downloads", "Warranty", "Contact", "FAQ", "Shipping"] },
                            { title: "SOCIAL", links: ["Twitch", "Discord", "Twitter", "YouTube", "Instagram"] }
                        ].map((col, i) => (
                            <div key={i}>
                                <h4 className="text-white font-bold font-cyber tracking-widest mb-6 border-l-2 border-[#FF0055] pl-3">{col.title}</h4>
                                <ul className="space-y-4">
                                    {col.links.map(link => (
                                        <li key={link}>
                                            <a href="#" className="text-gray-500 hover:text-[#00FFFF] text-sm font-bold tracking-wide transition-colors uppercase">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-600 text-xs font-mono tracking-widest">
                            © 2025 NEXUS GAMING INC. ALL RIGHTS RESERVED.
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-600 hover:text-white text-xs font-bold tracking-widest">PRIVACY</a>
                            <a href="#" className="text-gray-600 hover:text-white text-xs font-bold tracking-widest">TERMS</a>
                            <a href="#" className="text-gray-600 hover:text-white text-xs font-bold tracking-widest">COOKIES</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};
