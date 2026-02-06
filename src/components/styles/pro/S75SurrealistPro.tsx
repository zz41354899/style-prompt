import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Eye, Moon, Cloud, Clock, Hourglass, Key, Umbrella, Anchor } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S75SurrealistPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#F0E6D2] text-[#2D2438] selection:bg-[#FF7F50] selection:text-[#FFFFFF]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Cinzel:wght@400;700&display=swap');

                .font-dream-head { font-family: 'Cinzel', serif; }
                .font-dream-body { font-family: 'Playfair Display', serif; }

                /* Melting Filter */
                .melt-filter {
                    filter: url('#melt');
                }
                
                /* Horizon Gradient */
                .horizon-bg {
                    background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 50%, #F0E6D2 50%, #D2B48C 100%);
                }
                
                /* Long Shadows */
                .long-shadow {
                    box-shadow: 15px 15px 0 rgba(0,0,0,0.1);
                    transform-origin: bottom center;
                    transform: skewX(-20deg);
                }
                
                /* Floating Animations */
                @keyframes float-dream {
                    0% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0) rotate(0deg); }
                }
                .float-anim {
                    animation: float-dream 6s ease-in-out infinite;
                }
                
                @keyframes melt-drip {
                    0% { d: path("M0,0 Q50,0 100,0 T200,0 V50 Q150,50 100,50 T0,50 Z"); }
                    50% { d: path("M0,0 Q50,10 100,0 T200,0 V60 Q150,40 100,70 T0,50 Z"); }
                    100% { d: path("M0,0 Q50,0 100,0 T200,0 V50 Q150,50 100,50 T0,50 Z"); }
                }
            `}</style>

            {/* SVG Filter for Melting Effect */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <filter id="melt">
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="warp" />
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="20" in="SourceGraphic" in2="warp" />
                    </filter>
                </defs>
            </svg>

            {/* Background */}
            <div className="fixed inset-0 horizon-bg z-[-2]"></div>

            {/* Distant Clouds */}
            <div className="fixed top-20 left-1/4 opacity-40 float-anim" style={{ animationDuration: '20s' }}>
                <Cloud size={120} className="text-white fill-white blur-sm" />
            </div>
            <div className="fixed top-40 right-1/4 opacity-30 float-anim" style={{ animationDuration: '25s', animationDelay: '2s' }}>
                <Cloud size={80} className="text-white fill-white blur-md" />
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-[#2D2438]/10" style={{ backgroundColor: 'rgba(240, 230, 210, 0.6)' }}>
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <Eye size={28} className="text-[#2D2438] group-hover:scale-110 transition-transform melt-filter" />
                            <div className="absolute inset-0 bg-[#FF7F50] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        </div>
                        <span className="text-2xl font-dream-head text-[#2D2438] mt-1 tracking-widest">RÊVERIE</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['Subconscious', 'Lucid', 'Awake'].map((item) => (
                                <a key={item} href="#" className="font-dream-body text-lg text-[#2D2438] italic hover:text-[#7B68EE] transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-[#2D2438] rounded-full opacity-0 group-hover:opacity-100 transition-all transform -translate-x-1/2"></span>
                                </a>
                            ))}
                            <button className="px-8 py-2 bg-[#2D2438] text-[#F0E6D2] font-dream-head text-sm border border-[#2D2438] hover:bg-transparent hover:text-[#2D2438] transition-all uppercase tracking-widest shadow-[4px_4px_0_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                                ENTER
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#2D2438]">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#F0E6D2]/95 backdrop-blur-xl border-b border-[#2D2438]/10 shadow-lg">
                        {['Subconscious', 'Lucid', 'Awake'].map((item) => (
                            <div key={item} className="py-4 font-dream-head text-xl text-[#2D2438] border-b border-[#2D2438]/5">
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="mb-6 animate-pulse">
                        <Clock size={40} className="mx-auto text-[#2D2438] mb-2" />
                        <div className="font-dream-body italic text-[#7B68EE]">Time is melting...</div>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-dream-head text-[#2D2438] mb-8 leading-none relative">
                        <span className="inline-block hover:scale-105 transition-transform duration-700">SURREAL</span>
                        <br />
                        <span className="inline-block text-[#FF7F50] italic font-dream-body text-7xl md:text-8xl mt-2 melt-filter float-anim" style={{ animationDuration: '8s' }}>Visions</span>
                    </h1>

                    <p className="font-dream-body text-xl md:text-3xl text-[#2D2438]/80 italic max-w-2xl mx-auto mb-16 leading-relaxed">
                        Where the impossible becomes inevitable, and logic dissolves into pure imagination.
                    </p>

                    <button className="px-12 py-5 bg-transparent text-[#2D2438] font-dream-head text-lg border-2 border-[#2D2438] relative overflow-hidden group">
                        <span className="relative z-10 group-hover:text-[#F0E6D2] transition-colors duration-500">OPEN YOUR EYES</span>
                        <div className="absolute inset-0 bg-[#2D2438] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                    </button>
                </div>

                {/* Impossible Objects */}
                <div className="absolute left-[10%] bottom-[20%] float-anim z-0" style={{ animationDelay: '1s' }}>
                    <div className="w-32 h-40 bg-[#FF7F50] opacity-80 rounded-t-full shadow-[20px_20px_0_rgba(0,0,0,0.1)]"></div>
                </div>
                <div className="absolute right-[15%] top-[20%] float-anim z-0" style={{ animationDelay: '3s' }}>
                    <div className="w-24 h-24 bg-[#7B68EE] opacity-60 rounded-full border-4 border-[#F0E6D2] shadow-[10px_10px_20px_rgba(123,104,238,0.3)]"></div>
                </div>
            </section>

            {/* Features (Metaphors) */}
            <section className="py-32 px-6 relative bg-[#252544] text-[#F0E6D2] overflow-hidden">
                {/* Checkerboard Floor fade */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[repeating-linear-gradient(45deg,#2D2438_25%,transparent_25%,transparent_75%,#2D2438_75%,#2D2438),repeating-linear-gradient(45deg,#2D2438_25%,#252544_25%,#252544_75%,#2D2438_75%,#2D2438)] bg-[length:100px_100px] opacity-10 transform perspective-[500px] rotateX(60deg) scale(2)"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-dream-head mb-4 text-[#FFD700]">The Unconscious Mind</h2>
                        <p className="font-dream-body italic text-xl text-[#9B8DC0]">Explore the depths of your psyche</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { icon: Hourglass, title: "Fluid Time", desc: "Moments stretching into eternity.", color: "#FF7F50" },
                            { icon: Key, title: "Hidden Truths", desc: "Unlock doors to forgotten memories.", color: "#7B68EE" },
                            { icon: Umbrella, title: "Protection", desc: "Shelter from the rain of logic.", color: "#4682B4" }
                        ].map((f, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="mb-8 relative transition-transform duration-700 group-hover:-translate-y-4">
                                    <div className="absolute inset-0 bg-white/10 rounded-full blur-xl transform scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                                    <f.icon size={64} style={{ color: f.color }} className="relative z-10 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" />
                                </div>

                                <h3 className="text-2xl font-dream-head mb-4 tracking-widest border-b border-[#F0E6D2]/20 pb-2">{f.title}</h3>
                                <p className="font-dream-body text-lg text-[#9B8DC0] text-center italic">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Keys) */}
            <section className="py-24 px-6 relative bg-[#D2B48C]">
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-4xl font-dream-head text-[#2D2438] mb-6">Unlock Reality</h2>
                        <div className="w-1 h-20 bg-[#2D2438]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Observer', price: 'Free', items: ['Lucid Dreaming', '5 Nightmares', 'Day Archive'] },
                            { name: 'Wanderer', price: '$20', items: ['Astral Project', 'Unlimited Time', 'Dream Journal'], highlight: true },
                            { name: 'Architect', price: '$50', items: ['World Building', 'Physics Editor', 'God Mode'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 transition-all duration-500 hover:shadow-2xl ${plan.highlight ? 'bg-[#F0E6D2] border-2 border-[#2D2438] transform -translate-y-4 z-10 shadow-[20px_20px_0_rgba(45,36,56,0.1)]' : 'bg-[#E6DCC3] border border-[#2D2438]/20 hover:bg-[#F0E6D2]'}`}>
                                {plan.highlight && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                        <Eye size={32} className="text-[#FF7F50] bg-[#F0E6D2] rounded-full p-1 border-2 border-[#2D2438]" />
                                    </div>
                                )}

                                <div className="mb-8 text-center pt-4">
                                    <h3 className="text-2xl font-dream-head text-[#2D2438] mb-2 uppercase tracking-wider">{plan.name}</h3>
                                    <div className="text-4xl font-dream-body font-bold text-[#7B68EE] italic">{plan.price}</div>
                                </div>

                                <ul className="space-y-4 mb-10 pl-4 border-l-2 border-[#2D2438]/20">
                                    {plan.items.map((item, j) => (
                                        <li key={j} className="font-dream-body text-lg text-[#2D2438] flex items-center gap-2">
                                            <span className="w-1 h-1 bg-[#2D2438] rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 font-dream-head text-sm tracking-widest border transition-colors ${plan.highlight ? 'bg-[#2D2438] text-[#F0E6D2] hover:bg-[#FF7F50]' : 'bg-transparent text-[#2D2438] border-[#2D2438] hover:bg-[#2D2438] hover:text-[#F0E6D2]'}`}>
                                    CHOOSE PATH
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#F0E6D2]">
                <div className="max-w-3xl mx-auto border-4 double border-[#2D2438] p-2">
                    <div className="border border-[#2D2438] p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700] rounded-full blur-[80px] opacity-20"></div>

                        <h2 className="text-3xl font-dream-head text-center mb-16 text-[#2D2438]">
                            Enigmas & Riddles
                        </h2>

                        <div className="space-y-6 relative z-10">
                            {[{ q: 'Is this real?', a: 'Reality is merely an illusion, albeit a very persistent one.' },
                            { q: 'What time is it?', a: 'Time is subjective. The clock melts when you stop watching it.' },
                            { q: 'How do I wake up?', a: 'You are already awake. This is the new normal.' }
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <button className="w-full text-center hover:scale-105 transition-transform duration-300" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                        <h3 className="font-dream-body font-bold text-2xl italic text-[#2D2438] mb-2 decoration-slice underline decoration-[#FF7F50] decoration-1 underline-offset-4 group-hover:text-[#7B68EE] transition-colors">{item.q}</h3>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFaq === i ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                        <div className="text-center font-dream-body text-xl text-[#2D2438]/70 max-w-lg mx-auto leading-relaxed">
                                            "{item.a}"
                                        </div>
                                    </div>

                                    {i < 2 && <div className="w-8 h-px bg-[#2D2438]/20 mx-auto mt-6"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 relative bg-[#2D2438] text-[#F0E6D2] overflow-hidden text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7B68EE] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <Anchor size={48} className="mx-auto mb-8 text-[#FF7F50] rotate-180" />

                    <h2 className="text-5xl md:text-7xl font-dream-head mb-8 tracking-widest">
                        Let Go of <br />
                        <span className="italic text-[#87CEEB] font-dream-body">Control</span>
                    </h2>

                    <div className="flex justify-center mt-12">
                        <button className="px-16 py-6 border border-[#F0E6D2] text-[#F0E6D2] font-dream-head text-lg tracking-[0.2em] hover:bg-[#F0E6D2] hover:text-[#2D2438] transition-all uppercase shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                            Drift Away
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-[#252544] border-t border-[#F0E6D2]/10 text-[#F0E6D2]/60">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Eye size={18} />
                        <span className="text-lg font-dream-head tracking-widest text-[#F0E6D2]">SALVADOR</span>
                    </div>

                    <div className="flex gap-8 font-dream-body italic text-lg">
                        <a href="#" className="hover:text-[#FF7F50] transition-colors">Manifesto</a>
                        <a href="#" className="hover:text-[#FF7F50] transition-colors">Gallery</a>
                        <a href="#" className="hover:text-[#FF7F50] transition-colors">Contact</a>
                    </div>

                    <div className="font-dream-body italic">
                        © 1924-2025 Beyond Logic.
                    </div>
                </div>
            </footer>
        </div>
    );
};
