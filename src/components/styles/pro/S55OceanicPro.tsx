import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Waves, Fish, Anchor, Shell, Droplets, Ship, Compass } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S55OceanicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#001E3C] text-white selection:bg-[#00BCD4] selection:text-black">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&family=Comfortaa:wght@300;500;700&display=swap');

                .font-ocean-head { font-family: 'Comfortaa', display; }
                .font-ocean-body { font-family: 'Montserrat', sans-serif; }

                /* Deep Sea Gradient Background */
                .bg-abyss {
                    background: radial-gradient(circle at 50% 0%, #023E8A 0%, #001E3C 60%, #001219 100%);
                }

                /* Glassmorphism / Water Glass */
                .glass-water {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
                }
                .glass-water:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                /* Caustics Animation */
                @keyframes caustics {
                    0% { transform: scale(1) translateY(0); opacity: 0.3; }
                    50% { transform: scale(1.1) translateY(-10px); opacity: 0.5; }
                    100% { transform: scale(1) translateY(0); opacity: 0.3; }
                }
                .caustics-layer {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
                    mix-blend-mode: overlay;
                    animation: caustics 10s ease-in-out infinite;
                }

                /* Floating Bubble Animation */
                @keyframes float-bubble {
                    0% { transform: translateY(100vh) scale(0); opacity: 0; }
                    50% { opacity: 0.6; }
                    100% { transform: translateY(-100px) scale(1.5); opacity: 0; }
                }
                .bubble {
                    position: absolute;
                    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
                    border-radius: 50%;
                    pointer-events: none;
                    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2);
                }

                /* Text Glow */
                .text-glow {
                    text-shadow: 0 0 20px rgba(0, 188, 212, 0.5);
                }
            `}</style>

            <div className="absolute inset-0 bg-abyss fixed z-[-2]"></div>
            <div className="absolute inset-0 caustics-layer fixed z-[-1] pointer-events-none"></div>

            {/* Ambient Bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="bubble"
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 40 + 10}px`,
                            height: `${Math.random() * 40 + 10}px`,
                            animation: `float-bubble ${Math.random() * 10 + 10}s linear infinite`,
                            animationDelay: `${Math.random() * 10}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 glass-water border-b border-white/10">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-gradient-to-tr from-[#00BCD4] to-[#023E8A] shadow-lg shadow-[#00BCD4]/30">
                            <Waves size={24} className="text-white" />
                        </div>
                        <span className="text-2xl font-ocean-head font-bold tracking-wide text-white">Abyss<span className="text-[#00BCD4]">.OS</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Ecosystem', 'Research', 'Conservation'].map((item) => (
                                <a key={item} href="#" className="font-ocean-body font-medium text-blue-100 hover:text-[#00BCD4] transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00BCD4] transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                            <button className="px-6 py-2 rounded-full bg-[#00BCD4]/20 border border-[#00BCD4]/50 text-[#00BCD4] font-ocean-head font-bold hover:bg-[#00BCD4] hover:text-white transition-all shadow-[0_0_15px_rgba(0,188,212,0.3)] hover:shadow-[0_0_25px_rgba(0,188,212,0.6)]">
                                Dive Deeper
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white glass-water rounded-full">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 glass-water border-b border-white/10 backdrop-blur-xl">
                        {['Ecosystem', 'Research', 'Conservation'].map((item) => (
                            <div key={item} className="py-4 font-ocean-head text-xl text-white border-b border-white/5">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-3 rounded-full bg-[#00BCD4] text-white font-ocean-head font-bold shadow-lg shadow-[#00BCD4]/30">
                            Dive Deeper
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                {/* Glowing Orb Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00BCD4] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full glass-water border border-[#00BCD4]/30">
                        <Droplets size={16} className="text-[#00BCD4]" />
                        <span className="font-ocean-body text-sm font-medium text-blue-100 uppercase tracking-widest">Fluid Design System</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-ocean-head font-bold text-white mb-8 leading-tight tracking-tight text-glow">
                        Into The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BCD4] to-[#48CAE4]">Deep Blue</span>
                    </h1>

                    <p className="font-ocean-body text-xl md:text-2xl text-blue-100/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Immerse your users in an interface that flows like water. Glassmorphism, liquid animations, and the serenity of the abyss.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#0096C7] to-[#0077B6] text-white font-ocean-head font-bold text-xl shadow-[0_10px_30px_rgba(0,119,182,0.4)] hover:shadow-[0_15px_40px_rgba(0,119,182,0.6)] hover:-translate-y-1 transition-all w-full sm:w-auto">
                            Start Exploration
                        </button>
                        <button className="px-10 py-4 rounded-full glass-water text-white font-ocean-head font-bold text-xl hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group">
                            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform"><ArrowRight size={16} /></span>
                            View Showreel
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Grid (Glass Cards) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Waves, title: "Fluid Layouts", desc: "Responsive grids that adapt like liquid containers.", color: "from-[#48CAE4] to-[#0096C7]" },
                            { icon: Fish, title: "Bio-Luminescence", desc: "Glowing accents that guide user attention naturally.", color: "from-[#00B4D8] to-[#0077B6]" },
                            { icon: Anchor, title: "Deep Stability", desc: "Core architecture built to withstand extreme pressure.", color: "from-[#90E0EF] to-[#00B4D8]" }
                        ].map((f, i) => (
                            <div key={i} className="glass-water p-10 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                                {/* Gradient Blob Background */}
                                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${f.color} rounded-full blur-[50px] opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>

                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 backdrop-blur-md">
                                    <f.icon className="text-[#00BCD4]" size={32} />
                                </div>

                                <h3 className="text-2xl font-ocean-head font-bold mb-4 text-white relative z-10">{f.title}</h3>
                                <p className="font-ocean-body text-lg text-blue-100/70 leading-relaxed relative z-10">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Depth Zones) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-ocean-head font-bold text-white mb-4">Depth Zones</h2>
                        <p className="font-ocean-body text-blue-200">Choose your level of immersion</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                        {[
                            { name: 'Surface', price: 'Free', features: ['Basic Access', 'Light Mode', 'Community'], depth: '0m' },
                            { name: 'Twilight', price: '$29', features: ['Dark Mode', 'Advanced Stats', 'No Ads'], depth: '200m', highlight: true },
                            { name: 'Midnight', price: '$99', features: ['API Access', 'Custom Domain', 'Priority Support'], depth: '1000m' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 ${plan.highlight ? 'bg-gradient-to-b from-[#023E8A]/80 to-[#001E3C]/80 border-[#00BCD4]/50 shadow-[0_0_30px_rgba(0,188,212,0.2)] transform md:-translate-y-4' : 'glass-water border-white/5 hover:border-white/20'}`}>
                                <div className="absolute top-4 right-6 font-ocean-head font-bold text-white/20 text-sm">{plan.depth}</div>

                                <h3 className={`text-2xl font-ocean-head font-bold mb-2 ${plan.highlight ? 'text-[#00BCD4]' : 'text-white'}`}>{plan.name}</h3>
                                <div className="text-5xl font-ocean-head font-bold text-white mb-8">{plan.price}</div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-ocean-body text-blue-100/80">
                                            <Check size={18} className={plan.highlight ? 'text-[#00BCD4]' : 'text-white/50'} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-xl font-ocean-head font-bold transition-all ${plan.highlight ? 'bg-[#00BCD4] text-white hover:bg-[#00A0B8]' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                                    Select Zone
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area (Accordion) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-ocean-head font-bold text-center mb-12 text-white">
                        Sonar Readings
                    </h2>

                    <div className="space-y-4">
                        {[{ q: 'Does this work on mobile?', a: 'Fully responsive liquid layout adapts to any screen size like water filling a vessel.' },
                        { q: 'Is it accessible?', a: 'We ensure high contrast ratios even within the deep blue color spectrum.' },
                        { q: 'Can I customize the gradient?', a: 'Yes, the abyss depth is controlled by simple CSS variables.' }
                        ].map((item, i) => (
                            <div key={i} className="glass-water rounded-xl overflow-hidden">
                                <button className="w-full flex items-center justify-between p-6 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-ocean-body font-bold text-lg text-white group-hover:text-[#00BCD4] transition-colors">{item.q}</span>
                                    <ChevronDown size={20} className={`text-white/50 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180 text-[#00BCD4]' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-6 pb-6 pt-0 font-ocean-body text-blue-100/70 leading-relaxed">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto p-12 rounded-[3rem] text-center relative overflow-hidden bg-gradient-to-br from-[#0077B6] to-[#023E8A] border border-[#00BCD4]/30 shadow-2xl">
                    {/* Inner Bubbles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00BCD4]/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <Compass size={56} className="mx-auto mb-8 text-[#00BCD4] animate-spin-slow" strokeWidth={1.5} />
                        <h2 className="text-4xl md:text-5xl font-ocean-head font-bold text-white mb-6">Chart Your Course</h2>
                        <p className="font-ocean-body text-xl text-blue-100 mb-10 max-w-lg mx-auto">
                            The ocean is vast and full of opportunity. Don't stay in the shallow end.
                        </p>
                        <button className="px-12 py-5 rounded-full bg-white text-[#0077B6] font-ocean-head font-bold text-xl hover:bg-blue-50 transition-colors shadow-xl">
                            Begin Expedition
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="glass-water border-t border-white/5 py-16 px-6 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Ship size={24} className="text-[#00BCD4]" />
                        <span className="text-xl font-ocean-head font-bold text-white">Abyss<span className="text-[#00BCD4]">.OS</span></span>
                    </div>

                    <div className="flex gap-8 text-sm font-ocean-body text-blue-200/60">
                        <a href="#" className="hover:text-white transition-colors">Oceanography</a>
                        <a href="#" className="hover:text-white transition-colors">Marine Life</a>
                        <a href="#" className="hover:text-white transition-colors">Preservation</a>
                    </div>

                    <div className="font-ocean-body text-sm text-blue-200/40">
                        © 2025 Deep Sea Systems.
                    </div>
                </div>
            </footer>
        </div>
    );
};
