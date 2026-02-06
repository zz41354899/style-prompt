import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Flame, Mountain, Zap, Sparkles, AlertTriangle, Activity, Gauge } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S60VolcanicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#0A0505] text-[#FFE4D6] selection:bg-[#FF4500] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Anton&family=Rajdhani:wght@400;600;700&display=swap');

                .font-magma-head { font-family: 'Anton', sans-serif; }
                .font-magma-body { font-family: 'Rajdhani', sans-serif; }

                /* Magma Flow Gradient */
                .bg-magma-flow {
                    background: linear-gradient(180deg, #1A0A0A 0%, #2D1414 40%, #0A0505 100%);
                }
                
                /* Glowing Cracks Pattern */
                .cracks-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
                    mix-blend-mode: color-dodge;
                }

                /* Pulsing Glow Animation */
                @keyframes ember-pulse {
                    0% { text-shadow: 0 0 10px rgba(255, 69, 0, 0.5); }
                    50% { text-shadow: 0 0 30px rgba(255, 69, 0, 0.9); }
                    100% { text-shadow: 0 0 10px rgba(255, 69, 0, 0.5); }
                }
                .ember-text {
                    animation: ember-pulse 3s infinite ease-in-out;
                }

                /* Rising Ash Particles */
                @keyframes ash-rise {
                    0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 0; }
                    20% { opacity: 0.8; }
                    80% { opacity: 0.6; }
                    100% { transform: translateY(-10vh) translateX(50px) rotate(360deg); opacity: 0; }
                }
                .ash-particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: #888;
                    border-radius: 50%;
                    filter: blur(1px);
                }

                /* Heat Distortion */
                .heat-blur {
                     backdrop-filter: blur(2px);
                     background: rgba(255, 69, 0, 0.05);
                }
                
                /* Lava Border */
                .lava-border {
                    position: relative;
                }
                .lava-border::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #FF4500, transparent);
                    box-shadow: 0 0 15px #FF4500;
                }
            `}</style>

            <div className="absolute inset-0 bg-magma-flow fixed z-[-2]"></div>
            <div className="absolute inset-0 cracks-pattern fixed z-[-1] pointer-events-none opacity-30"></div>

            {/* Rising Ash */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="ash-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animation: `ash-rise ${Math.random() * 5 + 8}s linear infinite`,
                            animationDelay: `${Math.random() * 10}s`,
                            background: Math.random() > 0.8 ? '#FF4500' : '#555'
                        }}
                    ></div>
                ))}
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#0A0505]/80 backdrop-blur-md border-b border-[#E53935]/30">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 border border-[#FF4500] rounded bg-[#FF4500]/10 shadow-[0_0_15px_rgba(255,69,0,0.5)]">
                            <Flame size={24} className="text-[#FF6B35]" fill="#FF4500" />
                        </div>
                        <span className="text-3xl font-magma-head tracking-wider text-[#FFFFFF] italic">PYRO<span className="text-[#E53935]">CLASTIC</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Ignition', 'Flow', 'Aftermath'].map((item) => (
                                <a key={item} href="#" className="font-magma-body text-[#C9A99A] hover:text-[#FF6B35] text-lg font-bold uppercase tracking-widest transition-all hover:tracking-[0.2em]">
                                    {item}
                                </a>
                            ))}
                            <button className="px-8 py-2 bg-[#E53935] text-white font-magma-body font-bold text-lg uppercase tracking-wider skew-x-[-10deg] hover:bg-[#FF4500] hover:skew-x-[-15deg] transition-all shadow-[0_0_20px_rgba(229,57,53,0.6)] border-l-4 border-white">
                                <span className="skew-x-[10deg] block">Detonate</span>
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#E53935] border border-[#E53935] bg-[#E53935]/10">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#0A0505] border-b border-[#E53935]/50">
                        {['Ignition', 'Flow', 'Aftermath'].map((item) => (
                            <div key={item} className="py-4 font-magma-head text-2xl text-[#FFE4D6] border-b border-[#E53935]/20 uppercase tracking-widest">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-[#E53935] text-white font-magma-head text-2xl uppercase tracking-widest">
                            Detonate
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                {/* Magma Fissure Background */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[300px] bg-gradient-to-t from-[#FF4500]/20 to-transparent blur-[80px] pointer-events-none z-0"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 border border-[#E53935] bg-[#2D1414]/80 skew-x-[-10deg]">
                        <Activity size={20} className="text-[#FF4500] animate-pulse skew-x-[10deg]" />
                        <span className="font-magma-body text-sm font-bold text-[#FF6B35] uppercase tracking-[0.2em] skew-x-[10deg]">Seismic Activity Detected</span>
                    </div>

                    <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-magma-head text-[#FFFFFF] mb-8 leading-[0.85] uppercase tracking-tighter ember-text relative">
                        Magma <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF6B35] to-[#E53935]">Core</span>
                    </h1>

                    <p className="font-magma-body text-xl md:text-2xl text-[#C9A99A] max-w-2xl mx-auto mb-12 leading-relaxed tracking-wider font-semibold">
                        Forged in fire. A high-contrast, high-impact design system for brands that want to burn bright.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="px-12 py-5 bg-[#FF4500] text-white font-magma-head text-2xl uppercase tracking-widest hover:bg-[#FF6B35] transition-all shadow-[0_0_40px_rgba(255,69,0,0.6)] w-full sm:w-auto relative overflow-hidden group">
                            <span className="relative z-10">Unleash Power</span>
                            <div className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-[-20deg] group-hover:translate-x-full transition-transform duration-500"></div>
                        </button>
                        <button className="px-12 py-5 bg-transparent text-[#FF6B35] font-magma-head text-2xl uppercase tracking-widest border-2 border-[#FF6B35] hover:bg-[#FF6B35]/10 hover:text-white hover:border-[#FF4500] transition-colors w-full sm:w-auto">
                            View Damage
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Tectonic Plates) */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Flame, title: "Incinerate", desc: "Burn away the unnecessary. Pure, distilled focus.", color: "#FF4500" },
                            { icon: Mountain, title: "Structure", desc: "Solid rock foundations that never crack under pressure.", color: "#8D6E63" },
                            { icon: Zap, title: "Energy", desc: "High-voltage interactions that shock the system.", color: "#FFD600" }
                        ].map((f, i) => (
                            <div key={i} className="group relative p-1 bg-gradient-to-b from-[#E53935] to-[#2D1414] transform hover:scale-105 transition-transform duration-300">
                                <div className="h-full bg-[#1A0A0A] p-8 relative overflow-hidden">
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#FF4500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <f.icon className="w-16 h-16 mb-6 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" style={{ color: f.color }} strokeWidth={1.5} />

                                    <h3 className="text-4xl font-magma-head text-[#FFFFFF] mb-4 uppercase italic">{f.title}</h3>
                                    <p className="font-magma-body text-xl text-[#C9A99A] leading-tight font-medium relative z-10">{f.desc}</p>

                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF4500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Danger Levels) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-magma-head text-[#FFFFFF] mb-4 uppercase italic">Danger Levels</h2>
                        <p className="font-magma-body text-[#E53935] text-lg font-bold tracking-[0.3em] uppercase">Warning: Extreme Heat</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        {[
                            { name: 'Spark', price: 'Free', features: ['Basic Flame', 'Smoke Signals', 'Warmth'], color: '#FFB627' },
                            { name: 'Inferno', price: '$66', features: ['Full Combustion', 'Lava Flow', 'Heat Wave'], color: '#FF4500', highlight: true },
                            { name: 'Meltdown', price: '$666', features: ['Nuclear Core', 'Total Destruction', 'Fallout'], color: '#E53935' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 border-2 transition-all duration-300 ${plan.highlight ? 'bg-[#2D1414] border-[#FF4500] transform md:-translate-y-6 shadow-[0_0_50px_rgba(255,69,0,0.2)]' : 'bg-[#0A0505] border-[#3E2723] hover:border-[#FF6B35]'}`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 inset-x-0 h-1 bg-[#FF4500] shadow-[0_0_20px_#FF4500]"></div>
                                )}

                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-3xl font-magma-head text-[#FFFFFF] uppercase italic">{plan.name}</h3>
                                    <AlertTriangle size={24} color={plan.color} />
                                </div>

                                <div className="text-6xl font-magma-head mb-8" style={{ color: plan.color }}>{plan.price}</div>

                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-magma-body text-[#FFE4D6] text-lg font-bold uppercase tracking-wide">
                                            <div className="w-2 h-2 rotate-45" style={{ backgroundColor: plan.color }}></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 font-magma-head text-xl uppercase tracking-widest transition-all hover:text-white" style={{
                                    backgroundColor: 'transparent',
                                    border: `2px solid ${plan.color}`,
                                    color: plan.color,
                                    boxShadow: `inset 0 0 0 0 ${plan.color}`
                                }}
                                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = plan.color; e.currentTarget.style.color = '#000'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = plan.color; }}
                                >
                                    Activate
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#0F0505]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-magma-head text-center mb-16 text-[#FF6B35] uppercase italic">
                        Safety Protocols
                    </h2>

                    <div className="space-y-6">
                        {[{ q: 'Is it stable?', a: 'As stable as a dormant volcano. Until you wake it up.' },
                        { q: 'Can I change the temperature?', a: 'Yes. From lukewarm to supernova.' },
                        { q: 'Will it burn my device?', a: 'Only metaphorically. Our code is optimized for cool running.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-[#E53935]/30 pb-4">
                                <button className="w-full flex items-center justify-between py-4 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-magma-body font-bold text-xl text-[#FFE4D6] uppercase tracking-wider group-hover:text-[#FF4500] transition-colors">/// {item.q}</span>
                                    <ChevronDown size={24} className={`text-[#E53935] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="py-4 font-magma-body text-lg text-[#C9A99A] font-medium leading-relaxed">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#E53935] transform -skew-y-3 z-0 origin-bottom-right scale-110"></div>
                <div className="absolute inset-0 cracks-pattern opacity-40 z-0 mix-blend-multiply"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <Gauge size={64} className="mx-auto mb-8 text-white animate-pulse" />
                    <h2 className="text-5xl md:text-7xl font-magma-head text-white mb-8 uppercase italic leading-none">Pressure Critical</h2>
                    <p className="font-magma-body text-2xl text-[#FFCCBC] mb-12 max-w-xl mx-auto font-bold tracking-wide">
                        The countdown has begun. Don't be left in the ashes.
                    </p>
                    <button className="px-16 py-6 bg-[#0A0505] text-[#FF4500] font-magma-head text-3xl uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-2 border-[#FF4500]">
                        Launch
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 bg-[#050202] text-[#5D4037] border-t border-[#2D1414]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Flame size={24} className="text-[#E53935]" />
                        <span className="text-2xl font-magma-head text-[#FFFFFF] italic tracking-wider">PYRO<span className="text-[#E53935]">CLASTIC</span></span>
                    </div>

                    <div className="flex gap-10 text-sm font-magma-body font-bold uppercase tracking-[0.2em] text-[#C9A99A]">
                        <a href="#" className="hover:text-[#FF4500] transition-colors">Alerts</a>
                        <a href="#" className="hover:text-[#FF4500] transition-colors">Evac Plan</a>
                        <a href="#" className="hover:text-[#FF4500] transition-colors">Seismograph</a>
                    </div>

                    <div className="font-magma-body text-xs text-[#3E2723] uppercase tracking-widest">
                        © 2025 Magma Corp.
                    </div>
                </div>
            </footer>
        </div>
    );
};
