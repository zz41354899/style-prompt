import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Square, Triangle, Circle, Hexagon, Layers, Box, Grid, Minimize } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S74CubistPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#E6DCC3] text-[#2C2A28] selection:bg-[#4A6FA5] selection:text-[#E6DCC3]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Grotesk:wght@300;400;600&display=swap');

                .font-cubist-head { font-family: 'Syne', sans-serif; }
                .font-cubist-body { font-family: 'Space Grotesk', sans-serif; }

                /* Paper Texture */
                .paper-texture {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E");
                    pointer-events: none;
                }
                
                /* Cubist Shapes */
                .clip-fragment-1 { clip-path: polygon(0 0, 100% 15%, 85% 100%, 0% 85%); }
                .clip-fragment-2 { clip-path: polygon(15% 0, 100% 0, 100% 85%, 0% 100%); }
                .clip-fragment-3 { clip-path: polygon(0 15%, 85% 0, 100% 100%, 15% 85%); }
                
                /* Borders */
                .border-sketch {
                    border: 2px solid #2C2A28;
                }
                
                /* Shadow Blocks */
                .shadow-block {
                    box-shadow: 8px 8px 0px 0px rgba(44, 42, 40, 0.2);
                }
                
                /* Animations */
                @keyframes fragment-float {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(5px, -5px) rotate(2deg); }
                    66% { transform: translate(-5px, 5px) rotate(-1deg); }
                    100% { transform: translate(0, 0) rotate(0deg); }
                }
                .animate-fragment {
                    animation: fragment-float 6s ease-in-out infinite;
                }
            `}</style>

            {/* Texture Overlay */}
            <div className="fixed inset-0 paper-texture z-50 mix-blend-multiply opacity-40"></div>

            {/* Background Fragments */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vh] bg-[#C19A5B] opacity-20 clip-fragment-1 mix-blend-multiply animate-fragment" style={{ animationDelay: '0s' }}></div>
                <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vh] bg-[#4A6FA5] opacity-20 clip-fragment-2 mix-blend-multiply animate-fragment" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vh] bg-[#8B5A2B] opacity-10 clip-fragment-3 mix-blend-multiply animate-fragment" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-40 bg-[#E6DCC3]/90 backdrop-blur-sm border-b-2 border-[#2C2A28]">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-2 transform -skew-x-6 bg-[#2C2A28] px-4 py-2 hover:skew-x-0 transition-transform">
                        <Hexagon size={20} className="text-[#E6DCC3] fill-[#C19A5B]" />
                        <span className="text-xl font-cubist-head font-bold text-[#E6DCC3]">OBSERVE</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-1">
                            {['Perspective', 'Form', 'Structure'].map((item, i) => (
                                <a key={item} href="#" className="font-cubist-body font-bold text-sm text-[#2C2A28] px-6 py-2 border border-[#2C2A28] bg-white hover:bg-[#4A6FA5] hover:text-[#E6DCC3] transition-colors uppercase tracking-wider relative" style={{ top: `${i * 2}px` }}>
                                    {item}
                                </a>
                            ))}
                            <button className="ml-6 px-8 py-2 bg-[#8B5A2B] text-white font-cubist-head font-bold text-sm border-2 border-[#2C2A28] shadow-block hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase">
                                DECONSTRUCT
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border-2 border-[#2C2A28] bg-white">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#E6DCC3] border-b-2 border-[#2C2A28] shadow-xl">
                        {['Perspective', 'Form', 'Structure'].map((item) => (
                            <div key={item} className="py-4 font-cubist-head font-bold text-xl text-[#2C2A28] border-b border-[#2C2A28]/20 flex items-center justify-between">
                                {item} <Square size={12} className="fill-[#2C2A28]" />
                            </div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-[#8B5A2B] text-white font-cubist-head font-bold uppercase border-2 border-[#2C2A28] shadow-block">
                            DECONSTRUCT
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative z-10">
                            <div className="inline-block px-3 py-1 bg-[#5B7A5C] text-[#E6DCC3] font-cubist-body font-bold text-xs uppercase mb-6 border border-[#2C2A28] transform rotate-2">
                                Multiple Viewpoints
                            </div>

                            <h1 className="text-6xl md:text-8xl font-cubist-head font-extrabold text-[#2C2A28] mb-8 leading-[0.85]">
                                <span className="block transform -skew-x-6 origin-left text-[#8B5A2B]">FRACTURE</span>
                                <span className="block ml-12 text-[#4A6FA5]">REALITY</span>
                                <span className="block transform skew-x-3 origin-left text-outline-black text-transparent md:ml-24" style={{ WebkitTextStroke: '2px #2C2A28' }}>REBUILD</span>
                            </h1>

                            <p className="font-cubist-body text-xl md:text-2xl text-[#6B6860] mb-10 max-w-lg leading-relaxed bg-white/50 p-4 border border-[#2C2A28]/20 backdrop-blur-sm">
                                Break down the visual world into geometric fragments and reconstruct it through a new lens.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-10 py-5 bg-[#2C2A28] text-[#E6DCC3] font-cubist-head text-lg font-bold border-2 border-[#2C2A28] hover:bg-[#C19A5B] hover:text-[#2C2A28] transition-colors uppercase relative">
                                    <span className="absolute inset-0 border border-white opacity-20 m-1"></span>
                                    Start Analysis
                                </button>
                                <button className="px-10 py-5 bg-transparent text-[#2C2A28] font-cubist-head text-lg font-bold border-2 border-[#2C2A28] hover:bg-white transition-colors uppercase">
                                    View Subject
                                </button>
                            </div>
                        </div>

                        <div className="relative h-[500px] hidden lg:block">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C19A5B] border-2 border-[#2C2A28] opacity-80 mix-blend-multiply clip-fragment-1 animate-fragment"></div>
                            <div className="absolute bottom-10 right-20 w-56 h-56 bg-[#4A6FA5] border-2 border-[#2C2A28] opacity-80 mix-blend-multiply clip-fragment-2 animate-fragment" style={{ animationDelay: '2s' }}></div>
                            <div className="absolute top-20 right-40 w-48 h-48 bg-[#5B7A5C] border-2 border-[#2C2A28] opacity-80 mix-blend-multiply clip-fragment-3 animate-fragment" style={{ animationDelay: '4s' }}></div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 border-4 border-[#2C2A28] bg-white shadow-block transform rotate-3 z-10">
                                <Hexagon size={80} className="text-[#2C2A28]" strokeWidth={1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Elements (Grid) */}
            <section className="py-24 px-6 relative border-y-2 border-[#2C2A28] bg-white">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#2C2A28]">
                        {[
                            { icon: Triangle, title: "ANGULAR", desc: "Sharp geometric intersections.", color: "#4A6FA5" },
                            { icon: Layers, title: "FACETED", desc: "Planes of colliding perspectives.", color: "#8B5A2B" },
                            { icon: Grid, title: "ABSTRACT", desc: "Reduction to essential forms.", color: "#5B7A5C" }
                        ].map((f, i) => (
                            <div key={i} className={`p-10 border-[#2C2A28] group hover:bg-[#F5F0E6] transition-colors relative h-full flex flex-col justify-between ${i !== 2 ? 'md:border-r-2 border-b-2 md:border-b-0' : ''}`}>
                                <div>
                                    <div className="mb-8 relative inline-block">
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity transform translate-x-1 translate-y-1"></div>
                                        <f.icon size={48} className="relative z-10" style={{ color: f.color }} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-4xl font-cubist-head font-bold text-[#2C2A28] mb-4 uppercase">{f.title}</h3>
                                    <p className="font-cubist-body text-lg text-[#6B6860] max-w-xs">{f.desc}</p>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <ArrowRight size={24} className="text-[#2C2A28] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Collections) */}
            <section className="py-24 px-6 relative bg-[#C19A5B]/10">
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-5xl font-cubist-head font-extrabold text-[#2C2A28] mb-2 uppercase">Collections</h2>
                            <p className="font-cubist-body text-[#8B5A2B] text-xl font-bold bg-white inline-block px-2 border border-[#2C2A28]">ACQUIRE COMPOSITIONS</p>
                        </div>
                        <div className="font-cubist-body font-bold text-4xl text-[#2C2A28] opacity-20">2025</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Sketch', price: 'Free', features: ['Draft Canvas', '3 Perspectives', 'Export JPG'] },
                            { name: 'Canvas', price: '$29', features: ['Oil Tools', 'Unlimited Views', 'Export SVG'], highlight: true },
                            { name: 'Studio', price: '$59', features: ['Master Class', 'Exhibition Mode', 'Print Rights'] }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 border-2 border-[#2C2A28] transition-all bg-white ${plan.highlight ? 'shadow-block transform -translate-y-4 z-10' : 'opacity-80 hover:opacity-100'}`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 p-2 bg-[#2C2A28] text-[#E6DCC3] font-cubist-body text-xs font-bold uppercase border-l-2 border-b-2 border-[#E6DCC3]">
                                        Curator's Choice
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-cubist-head font-bold text-[#2C2A28] mb-1">{plan.name}</h3>
                                    <div className="w-12 h-1 bg-[#8B5A2B] mb-4"></div>
                                    <span className="text-5xl font-cubist-body font-bold text-[#4A6FA5]">{plan.price}</span>
                                </div>

                                <ul className="space-y-4 mb-10 border-t border-[#2C2A28]/20 pt-6">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-cubist-body text-lg text-[#2C2A28] font-medium">
                                            <div className="w-2 h-2 bg-[#C19A5B] transform rotate-45"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 font-cubist-head font-bold text-lg border-2 border-[#2C2A28] uppercase transition-colors ${plan.highlight ? 'bg-[#8B5A2B] text-white hover:bg-[#2C2A28]' : 'bg-transparent text-[#2C2A28] hover:bg-[#2C2A28] hover:text-white'}`}>
                                    Select
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-[#2C2A28] text-[#E6DCC3] p-10 clip-fragment-1 shadow-block">
                        <h2 className="text-4xl font-cubist-head font-bold mb-12 text-center text-[#C19A5B]">
                            Inquiry & Analysis
                        </h2>

                        <div className="space-y-4">
                            {[{ q: 'Is perspective fixed?', a: 'Visual reality is fluid. We render all angles simultaneously.' },
                            { q: 'Can I fragment images?', a: 'Our algorithm deconstructs input into geometric essentials.' },
                            { q: 'Is it abstract?', a: 'It is the most realistic representation, showing the object\'s totality.' }
                            ].map((item, i) => (
                                <div key={i} className="border-b border-[#E6DCC3]/20 pb-4">
                                    <button className="w-full flex items-center justify-between py-2 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                        <span className="font-cubist-body font-bold text-xl group-hover:text-[#4A6FA5] transition-colors">{item.q}</span>
                                        <Minimize size={20} className={`text-[#8B5A2B] transition-transform ${expandedFaq === i ? 'rotate-90' : ''}`} />
                                    </button>
                                    {expandedFaq === i && (
                                        <div className="pt-2 font-cubist-body text-lg text-[#E6DCC3]/80 leading-relaxed max-w-xl">
                                            {item.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 relative text-center">
                <div className="max-w-4xl mx-auto border-4 border-[#2C2A28] p-16 bg-white shadow-[16px_16px_0_#4A6FA5]">
                    <Box size={64} className="mx-auto mb-8 text-[#2C2A28]" strokeWidth={1} />
                    <h2 className="text-5xl md:text-6xl font-cubist-head font-black text-[#2C2A28] mb-8 uppercase tracking-tighter">
                        Reconstruct<br />The World
                    </h2>
                    <button className="px-16 py-6 bg-[#2C2A28] text-white font-cubist-head text-xl font-bold border-2 border-[#2C2A28] hover:bg-[#C19A5B] hover:text-[#2C2A28] transition-colors uppercase">
                        Start Project
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t-2 border-[#2C2A28] bg-[#F5F0E6]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Square size={20} className="fill-[#2C2A28] text-[#2C2A28] transform rotate-12" />
                        <span className="text-xl font-cubist-head font-bold text-[#2C2A28] uppercase">Studio<span className="text-[#8B5A2B]">Picasso</span></span>
                    </div>

                    <div className="flex gap-8 font-cubist-body font-bold uppercase text-xs tracking-widest text-[#2C2A28]">
                        <a href="#" className="hover:text-[#4A6FA5] transition-colors">Manifesto</a>
                        <a href="#" className="hover:text-[#4A6FA5] transition-colors">Works</a>
                        <a href="#" className="hover:text-[#4A6FA5] transition-colors">Contact</a>
                    </div>

                    <div className="font-cubist-body text-sm font-medium text-[#6B6860]">
                        © 1907-2025 Avant-Garde.
                    </div>
                </div>
            </footer>
        </div>
    );
};
