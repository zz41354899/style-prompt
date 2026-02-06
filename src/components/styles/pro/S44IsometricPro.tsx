import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Box, Layers, Grid3X3, Move3D, Globe, Server, Shield, Zap } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S44IsometricPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#F0F4F8] text-[#1E293B] font-sans selection:bg-indigo-500 selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

                .font-iso-heading { font-family: 'Space Grotesk', sans-serif; }
                .font-iso-body { font-family: 'Outfit', sans-serif; }

                /* Isometric Grid Pattern */
                .iso-grid {
                    background-image: linear-gradient(30deg, #E2E8F0 1px, transparent 1px), 
                                      linear-gradient(150deg, #E2E8F0 1px, transparent 1px);
                    background-size: 40px 69.28px; /* Correct isometric ratio */
                    background-position: 0 0, 0 0;
                    opacity: 0.6;
                }

                /* Isometric Transformations */
                .iso-card {
                    transform: rotateX(60deg) rotateZ(-45deg);
                    transform-style: preserve-3d;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                }
                
                .iso-block {
                    position: relative;
                    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                
                .iso-block:hover {
                    transform: translateY(-8px);
                }

                .iso-shadow {
                    box-shadow: 8px 8px 0px rgba(79, 70, 229, 0.1),
                                16px 16px 0px rgba(79, 70, 229, 0.05);
                }

                .iso-depth {
                    position: relative;
                }
                
                .iso-depth::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    height: 8px; /* Thickness */
                    background-color: #4338CA; /* Darker shade of Indigo-600 */
                    transform-origin: top;
                    transform: skewX(-45deg);
                }
                
                .iso-depth::before {
                    content: '';
                    position: absolute;
                    top: 8px;
                    right: -8px; 
                    width: 8px;
                    height: 100%;
                    background-color: #3730A3; /* Even darker indigo */
                    transform-origin: left;
                    transform: skewY(-45deg);
                }

                /* Floating Animation */
                .float-iso {
                    animation: float-iso 6s ease-in-out infinite;
                }
                
                @keyframes float-iso {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }

                /* Custom Scrollbar */
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: #F1F5F9; }
                ::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 4px; }
                ::-webkit-scrollbar-thumb:hover { background: #94A3B8; }
            `}</style>

            <div className="absolute inset-0 iso-grid pointer-events-none fixed"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b-2 border-slate-200">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-md transform -rotate-6 shadow-[4px_4px_0px_#4F46E5] flex items-center justify-center">
                            <Box className="text-white transform rotate-6" size={24} strokeWidth={2.5} />
                        </div>
                        <span className="text-2xl font-black font-iso-heading tracking-tight text-slate-800">ISO<span className="text-indigo-600">METRIC</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Features', 'Grid System', 'Showcase', 'Docs'].map((item) => (
                                <a key={item} href="#" className="font-bold font-iso-body text-slate-500 hover:text-indigo-600 transition-colors uppercase text-sm tracking-wide">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-2 bg-indigo-600 text-white font-bold font-iso-body rounded-md shadow-[4px_4px_0px_#312E81] hover:shadow-[2px_2px_0px_#312E81] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
                                GET STARTED
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-800">{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="border-t-2 border-slate-200 bg-white p-6 shadow-xl relative z-50">
                        {['Features', 'Grid System', 'Showcase', 'Docs'].map((item) => (
                            <div key={item} className="py-4 text-lg font-iso-heading font-bold text-slate-700 border-b border-slate-100">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-indigo-600 text-white font-bold rounded shadow-[4px_4px_0px_#312E81] active:translate-y-1 active:shadow-none">
                            GET STARTED
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-visible">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10">
                        <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 font-bold font-iso-body text-xs uppercase tracking-widest rounded-sm mb-8 shadow-[2px_2px_0px_rgba(79,70,229,0.2)]">
                            v3.0 Isometric Engine
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black font-iso-heading text-slate-900 leading-[0.95] mb-8">
                            BUILD WITH <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow-sm">
                                PERSPECTIVE.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-500 font-iso-body leading-relaxed mb-10 max-w-lg">
                            Elevate your UI with true isometric grids and 3D interactions.
                            Add depth to your designs without the complexity of WebGL.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <button className="px-8 py-4 bg-slate-900 text-white font-bold font-iso-heading text-lg rounded-md shadow-[6px_6px_0px_#4F46E5] hover:shadow-[3px_3px_0px_#4F46E5] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center gap-2">
                                START BUILDING <ArrowRight size={20} />
                            </button>
                            <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold font-iso-heading text-lg rounded-md shadow-[4px_4px_0px_#CBD5E1] hover:shadow-[2px_2px_0px_#CBD5E1] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                                VIEW DOCS
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center perspective-[1000px]">
                        {/* Iso Platform */}
                        <div className="relative w-96 h-96 transform rotate-x-60 rotate-z-[-45deg] bg-white rounded-3xl shadow-[30px_30px_0px_#E2E8F0] border-4 border-slate-100 float-iso">
                            {/* Grid items on platform */}
                            <div className="absolute inset-4 grid grid-cols-2 gap-4 transform style-3d">
                                <div className="bg-indigo-50 rounded-2xl flex items-center justify-center relative overflow-hidden group hover:bg-indigo-100 transition-colors">
                                    <div className="w-16 h-16 bg-indigo-500 rounded-xl shadow-[8px_8px_0px_#312E81] transform group-hover:-translate-y-2 transition-transform duration-300"></div>
                                </div>
                                <div className="bg-purple-50 rounded-2xl flex items-center justify-center group hover:bg-purple-100 transition-colors">
                                    <div className="w-16 h-16 bg-purple-500 rounded-full shadow-[8px_8px_0px_#581C87] transform group-hover:-translate-y-2 transition-transform duration-300"></div>
                                </div>
                                <div className="col-span-2 bg-slate-50 rounded-2xl p-6 flex items-center gap-4 group hover:bg-slate-100 transition-colors">
                                    <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="w-2/3 h-full bg-indigo-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements above platform */}
                            <div className="absolute -top-20 -right-10 w-24 h-24 bg-white rounded-xl shadow-[10px_10px_30px_rgba(0,0,0,0.1)] border-2 border-indigo-100 flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                                <Zap className="text-yellow-500 fill-yellow-500" size={32} />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white rounded-xl shadow-[10px_10px_30px_rgba(0,0,0,0.1)] border-2 border-purple-100 flex items-center justify-center animate-bounce" style={{ animationDuration: '4s' }}>
                                <Globe className="text-blue-500" size={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Isometric Cards) */}
            <section className="py-32 px-6 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl lg:text-5xl font-black font-iso-heading text-slate-900 mb-6 uppercase">Dimensional Features</h2>
                        <p className="max-w-2xl mx-auto text-xl text-slate-500 font-iso-body">Everything you need to create deep, engaging interfaces.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 px-4">
                        {[
                            { icon: Layers, title: "Layered Depth", desc: "Automatic z-index management and shadow stacking.", color: "bg-indigo-500", shadow: "shadow-[10px_10px_0px_#C7D2FE]" },
                            { icon: Grid3X3, title: "Smart Grids", desc: "Perfect 30° alignment tools built centrally.", color: "bg-purple-500", shadow: "shadow-[10px_10px_0px_#E9D5FF]" },
                            { icon: Move3D, title: "3D Transforms", desc: "Hardware accelerated CSS properties for smooth motion.", color: "bg-pink-500", shadow: "shadow-[10px_10px_0px_#FBCFE8]" }
                        ].map((f, i) => (
                            <div key={i} className={`bg-white border-2 border-slate-900 rounded-xl p-8 relative iso-block ${f.shadow} hover:shadow-[14px_14px_0px_rgba(0,0,0,0.1)]`}>
                                <div className={`w-16 h-16 ${f.color} rounded-lg mb-6 flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.2)]`}>
                                    <f.icon className="text-white" size={32} strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold font-iso-heading mb-3 text-slate-900">{f.title}</h3>
                                <p className="text-slate-500 font-iso-body leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="py-32 px-6 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black font-iso-heading text-center mb-16 uppercase">Pricing Models</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-6xl mx-auto">
                        {[
                            { name: 'Starter', price: '0', color: 'bg-white', border: 'border-slate-200', btn: 'bg-slate-100 text-slate-900' },
                            { name: 'Pro', price: '49', color: 'bg-indigo-50', border: 'border-indigo-200', btn: 'bg-indigo-600 text-white', featured: true },
                            { name: 'Enterprise', price: '99', color: 'bg-white', border: 'border-slate-200', btn: 'bg-slate-900 text-white' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative rounded-2xl border-2 ${plan.border} ${plan.color} p-8 ${plan.featured ? 'shadow-[12px_12px_0px_#4F46E5] scale-105 z-10' : 'shadow-[8px_8px_0px_#CBD5E1]'} transition-transform duration-300 hover:-translate-y-2`}>
                                {plan.featured && (
                                    <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 bg-yellow-400 border-2 border-black px-4 py-1 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                                        Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold font-iso-heading uppercase tracking-wide text-slate-600 mb-2">{plan.name}</h3>
                                <div className="text-5xl font-black font-iso-heading mb-8 text-slate-900">${plan.price}<span className="text-lg text-slate-400 font-normal">/mo</span></div>

                                <ul className="space-y-4 mb-8">
                                    {['Unlimited Projects', 'Grid Access', '3D Exports', 'Priority Support'].slice(0, i + 2).map((item) => (
                                        <li key={item} className="flex items-center gap-3 font-iso-body font-medium text-slate-600">
                                            <div className="w-5 h-5 rounded bg-green-400 flex items-center justify-center text-xs border border-green-600 shadow-[2px_2px_0px_#166534]">✓</div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-lg font-bold font-iso-heading uppercase tracking-wide shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all border-2 border-black ${plan.btn}`}>
                                    Choose Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-white border-t-2 border-slate-900">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black font-iso-heading text-center mb-16 uppercase">Common Questions</h2>

                    <div className="space-y-6">
                        {[{ q: 'Does this use WebGL?', a: 'No, Isometric Pro is built entirely with CSS3 transforms for maximum performance and compatibility.' },
                        { q: 'Is it responsive?', a: 'Yes, the grid system adapts fluidly to mobile breakpoints while maintaining perspective.' },
                        { q: 'Can I custom themes?', a: 'Detailed CSS variables allow for complete control over colors, shadows, and angles.' }
                        ].map((item, i) => (
                            <div key={i} className="border-2 border-slate-200 rounded-xl overflow-hidden shadow-[4px_4px_0px_#CBD5E1] bg-slate-50">
                                <button className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold font-iso-heading text-lg text-slate-800">{item.q}</span>
                                    <ChevronDown size={20} className={`text-indigo-600 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} strokeWidth={2.5} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-6 pt-0 text-slate-500 font-iso-body leading-relaxed bg-white border-t border-slate-100">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-lg transform -rotate-6 flex items-center justify-center">
                                <Box className="text-indigo-900 transform rotate-6" size={28} strokeWidth={2.5} />
                            </div>
                            <span className="text-3xl font-black font-iso-heading tracking-tight">ISO<span className="text-indigo-400">METRIC</span></span>
                        </div>

                        <div className="flex gap-8">
                            {['Twitter', 'GitHub', 'Discord', 'Dribbble'].map((social) => (
                                <a key={social} href="#" className="font-bold font-iso-heading uppercase tracking-wide text-slate-400 hover:text-white transition-colors">{social}</a>
                            ))}
                        </div>
                    </div>

                    <div className="text-center md:text-left text-slate-500 font-iso-body text-sm">
                        © 2025 Isometric Pro Systems. Designed with perspective.
                    </div>
                </div>
            </footer>
        </div>
    );
};
