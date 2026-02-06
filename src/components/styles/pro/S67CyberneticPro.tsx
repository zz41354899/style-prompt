import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Cpu, CircuitBoard, Wifi, Bot, Activity, Brain, Server, ShieldCheck, Terminal } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S67CyberneticPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const [glitchText, setGlitchText] = useState('CYBERNETIC');

    useEffect(() => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        const original = 'CYBERNETIC';
        const interval = setInterval(() => {
            if (Math.random() > 0.95) {
                setGlitchText(original.split('').map((char, index) => {
                    if (Math.random() < 0.3) return chars[Math.floor(Math.random() * chars.length)];
                    return char;
                }).join(''));
                setTimeout(() => setGlitchText(original), 100);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#050810] text-[#E0F0FF] selection:bg-[#00D9FF] selection:text-[#050810]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

                .font-cyber-head { font-family: 'Orbitron', sans-serif; }
                .font-cyber-body { font-family: 'Share Tech Mono', monospace; }

                /* PCB Grid Background */
                .pcb-grid {
                    background-image: 
                        linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
                
                /* Circuit Traces */
                .circuit-traces {
                     background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L30 10 L30 30 M70 10 L90 10 L90 30 M10 90 L30 90 L30 70 M70 90 L90 90 L90 70 M50 0 L50 20 M0 50 L20 50 M100 50 L80 50 M50 100 L50 80' stroke='%2300D9FF' stroke-width='1' fill='none' opacity='0.1'/%3E%3Crect x='45' y='45' width='10' height='10' fill='none' stroke='%2300D9FF' stroke-width='1' opacity='0.1'/%3E%3C/svg%3E");
                }

                /* Neon Glows */
                .cyan-glow { box-shadow: 0 0 15px rgba(0,217,255,0.4); }
                .text-glow { text-shadow: 0 0 8px rgba(0,217,255,0.6); }
                
                /* HUD Elements */
                .hud-border {
                    position: relative;
                    border: 1px solid rgba(0,217,255,0.3);
                    background: rgba(5,8,16,0.8);
                }
                .hud-border::before, .hud-border::after {
                    content: '';
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    border: 1px solid #00D9FF;
                    transition: all 0.3s ease;
                }
                .hud-border::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
                .hud-border::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }
                
                .hud-border:hover::before, .hud-border:hover::after {
                    width: 100%;
                    height: 100%;
                    border-color: rgba(0,217,255,0.6);
                }

                /* CRT Scanline */
                .scanline {
                    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1));
                    background-size: 100% 4px;
                    pointer-events: none;
                }
                
                /* Glitch Keyframes */
                 @keyframes glitch-anim {
                    0% { transform: translate(0) }
                    20% { transform: translate(-2px, 2px) }
                    40% { transform: translate(-2px, -2px) }
                    60% { transform: translate(2px, 2px) }
                    80% { transform: translate(2px, -2px) }
                    100% { transform: translate(0) }
                }
                .glitch:hover {
                    animation: glitch-anim 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
                }
            `}</style>

            <div className="absolute inset-0 bg-[#050810] fixed z-[-2]"></div>
            <div className="absolute inset-0 pcb-grid fixed z-[-1] pointer-events-none"></div>
            <div className="absolute inset-0 circuit-traces fixed z-[-1] opacity-40 pointer-events-none"></div>
            <div className="fixed inset-0 scanline z-50 pointer-events-none opacity-20"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-40 bg-[#050810]/95 backdrop-blur-sm border-b border-[#00D9FF]/30">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#00D9FF] blur-sm opacity-50"></div>
                            <Cpu size={24} className="text-[#00D9FF] relative z-10" />
                        </div>
                        <span className="text-xl font-cyber-head font-bold text-[#E0F0FF] tracking-[0.2em] text-glow">NEURO<span className="text-[#00D9FF]">LINK</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['Interface', 'Augments', 'Protocol'].map((item) => (
                                <a key={item} href="#" className="font-cyber-body text-[#6B8299] hover:text-[#00D9FF] text-sm tracking-widest transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D9FF] group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                            <button className="px-6 py-2 bg-[#00D9FF]/10 text-[#00D9FF] font-cyber-head text-xs font-bold tracking-widest border border-[#00D9FF]/50 hover:bg-[#00D9FF] hover:text-[#050810] transition-all cyan-glow">
                                JACK IN
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#00D9FF] border border-[#00D9FF]/30 bg-[#00D9FF]/10">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#050810] border-b border-[#00D9FF]/30">
                        {['Interface', 'Augments', 'Protocol'].map((item) => (
                            <div key={item} className="py-4 font-cyber-head text-[#E0F0FF] border-b border-[#00D9FF]/10 tracking-widest flex items-center gap-2">
                                <span className="text-[#00D9FF]">&gt;</span> {item}
                            </div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-[#00D9FF] text-[#050810] font-cyber-head font-bold tracking-widest cyan-glow">
                            JACK IN
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-hidden">
                {/* HUD Decoration Circles */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] border border-[#00D9FF]/10 rounded-full pointer-events-none"></div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] border border-[#00D9FF]/10 rounded-full border-dashed pointer-events-none animate-spin-slow"></div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1 border border-[#00D9FF]/30 bg-[#00D9FF]/5">
                            <span className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse"></span>
                            <span className="font-cyber-body text-xs text-[#00D9FF] tracking-widest">SYSTEM ONLINE // V.9.0</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-cyber-head font-black text-white mb-6 leading-none glitch cursor-default" data-text="CYBERNETIC">
                            {glitchText}<br />
                            <span className="text-[#00D9FF] text-glow">EVOLUTION</span>
                        </h1>

                        <p className="font-cyber-body text-lg md:text-xl text-[#6B8299] max-w-lg mb-10 leading-relaxed border-l-2 border-[#00D9FF]/30 pl-6">
                            Enhance your organic limitations. Integrate seamless neural interfaces and bio-digital augmentations.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <button className="w-full sm:w-auto px-8 py-4 bg-[#00D9FF] text-[#050810] font-cyber-head font-bold tracking-widest hover:brightness-110 transition-all cyan-glow clip-path-slant-right">
                                INITIALIZE
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#00D9FF] font-cyber-head font-bold tracking-widest border border-[#00D9FF]/50 hover:bg-[#00D9FF]/10 transition-colors flex items-center justify-center gap-2">
                                <Terminal size={18} /> DOCS
                            </button>
                        </div>
                    </div>

                    <div className="relative flex justify-center">
                        {/* Cyber Skull / Brain Graphic */}
                        <div className="relative w-80 h-80">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#00D9FF]/20 to-transparent rounded-full blur-2xl"></div>
                            <Bot size={320} className="text-[#E0F0FF]/10 relative z-10" strokeWidth={0.5} />
                            <Brain size={120} className="text-[#00D9FF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-80 animate-pulse text-glow" />

                            {/* Scanning Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#00D9FF]/50 shadow-[0_0_15px_#00D9FF] animate-[scan_3s_linear_infinite]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Grid */}
            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex items-end justify-between mb-16 border-b border-[#00D9FF]/20 pb-4">
                        <h2 className="text-3xl font-cyber-head font-bold text-white tracking-widest">
                            <span className="text-[#00D9FF] mr-2">/</span>
                            MODULES
                        </h2>
                        <div className="font-cyber-body text-xs text-[#00D9FF]">STATUS: OPTIMAL</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Cpu, title: "Neural Net", desc: "Direct cortex integration.", color: "#00D9FF" },
                            { icon: Server, title: "Data Core", desc: "Petabyte localized storage.", color: "#8B5CF6" },
                            { icon: ShieldCheck, title: "Firewall", desc: "Military grade encryption.", color: "#10B981" }
                        ].map((f, i) => (
                            <div key={i} className="hud-border p-8 group transition-all hover:-translate-y-1 hover:bg-[#00D9FF]/5">
                                <div className="flex justify-between items-start mb-6">
                                    <f.icon className="w-10 h-10 transition-colors" style={{ color: f.color }} />
                                    <span className="font-cyber-body text-[10px] text-[#6B8299] border border-[#6B8299]/30 px-2 py-0.5">V.{(i + 1).toFixed(1)}</span>
                                </div>
                                <h3 className="text-xl font-cyber-head text-white mb-2 tracking-wider group-hover:text-[#00D9FF] transition-colors">{f.title}</h3>
                                <p className="font-cyber-body text-[#6B8299] text-sm leading-relaxed">{f.desc}</p>

                                {/* Decor lines */}
                                <div className="absolute bottom-4 right-4 flex gap-1">
                                    <div className="w-1 h-1 bg-[#00D9FF]/50"></div>
                                    <div className="w-1 h-1 bg-[#00D9FF]/30"></div>
                                    <div className="w-1 h-1 bg-[#00D9FF]/10"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscription Protocols */}
            <section className="py-24 px-6 relative bg-[#0A0E14]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-cyber-head text-white mb-4 tracking-widest text-glow">UPGRADE PATH</h2>
                        <p className="font-cyber-body text-[#00D9FF] text-sm tracking-[0.3em]">SELECT AUGMENTATION TIER</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Mk. I', price: '500', currency: 'CR', features: ['Basic HUD', 'Night Vision'] },
                            { name: 'Mk. II', price: '1200', currency: 'CR', features: ['Reflex Booster', 'Data Link', 'Zoom Optics'], highlight: true },
                            { name: 'Mk. III', price: '3500', currency: 'CR', features: ['Time Dilation', 'Active Camo', 'Titanium Bones'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 border hover:border-[#00D9FF] transition-all duration-300 ${plan.highlight ? 'border-[#00D9FF] bg-[#00D9FF]/5 shadow-[0_0_30px_rgba(0,217,255,0.1)]' : 'border-[#1F2937] bg-transparent opacity-80 hover:opacity-100'}`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 px-2 py-1 bg-[#00D9FF] text-[#050810] font-cyber-body font-bold text-[10px] tracking-widest">
                                        RECOMMENDED
                                    </div>
                                )}

                                <div className="mb-8 border-b border-[#1F2937] pb-6">
                                    <h3 className="text-lg font-cyber-head text-white tracking-widest mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-cyber-head font-bold text-[#00D9FF]">{plan.price}</span>
                                        <span className="text-sm font-cyber-body text-[#6B8299]">{plan.currency}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-cyber-body text-[#E0F0FF] text-sm">
                                            <Activity size={12} className="text-[#00D9FF]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 font-cyber-head font-bold text-xs tracking-[0.2em] transition-all uppercase ${plan.highlight ? 'bg-[#00D9FF] text-[#050810] hover:brightness-110' : 'bg-transparent border border-[#6B8299] text-[#6B8299] hover:border-[#E0F0FF] hover:text-[#E0F0FF]'}`}>
                                    Install
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Terminal FAQ */}
            <section className="py-24 px-6 relative">
                <div className="max-w-3xl mx-auto border border-[#00D9FF]/30 bg-[#050810]/90 p-1">
                    <div className="bg-[#00D9FF]/10 p-2 flex items-center justify-between border-b border-[#00D9FF]/30">
                        <span className="font-cyber-body text-xs text-[#00D9FF]">TERMINAL_ACCESS // HELP_DB</span>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                        </div>
                    </div>

                    <div className="p-6 space-y-2">
                        {[{ q: 'SAFTEY_PROTOCOLS?', a: 'Neural feedback limiters are engaged by default. 99.9% survival rate.' },
                        { q: 'WARRANTY_STATUS?', a: 'Void if unauthorized firmware is detected.' },
                        { q: 'COMPATIBILITY_CHECK?', a: 'Universal bus architecture supports all standard bio-ports.' }
                        ].map((item, i) => (
                            <div key={i} className="mb-4">
                                <button className="w-full flex items-center gap-2 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-[#00D9FF] font-cyber-body text-sm">&gt;</span>
                                    <span className="font-cyber-body text-sm text-[#E0F0FF] group-hover:text-[#00D9FF] transition-colors">{item.q}</span>
                                    {expandedFaq === i && <span className="text-[#00D9FF] animate-pulse">_</span>}
                                </button>
                                {expandedFaq === i && (
                                    <div className="pl-6 mt-2 font-cyber-body text-xs text-[#6B8299] leading-relaxed">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="animate-pulse text-[#00D9FF] font-cyber-body text-sm mt-4">&gt; _</div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-[#00D9FF]/20 text-[#6B8299]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Cpu size={20} className="text-[#00D9FF]" />
                        <span className="text-lg font-cyber-head font-bold text-[#E0F0FF] tracking-widest">NEURO<span className="text-[#00D9FF]">LINK</span></span>
                    </div>

                    <div className="flex gap-8 text-[10px] font-cyber-head font-bold uppercase tracking-widest text-[#6B8299]">
                        <a href="#" className="hover:text-[#00D9FF] transition-colors">EULA</a>
                        <a href="#" className="hover:text-[#00D9FF] transition-colors">Recall Info</a>
                        <a href="#" className="hover:text-[#00D9FF] transition-colors">Support</a>
                    </div>

                    <div className="font-cyber-body text-xs text-[#334155] uppercase tracking-widest">
                        © 2077 Neurolink Corp.
                    </div>
                </div>
            </footer>
        </div>
    );
};
