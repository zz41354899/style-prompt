import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Gem, Shield, Star, Award, Layers, Monitor, Hexagon, Aperture, Circle } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S88LuxurySilverPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen bg-[#F3F4F6] text-[#1F2937] font-sans selection:bg-[#9CA3AF] selection:text-white overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
                
                .font-future { font-family: 'Syncopate', sans-serif; }
                .font-clean { font-family: 'Montserrat', sans-serif; }
                
                .silver-gradient-text {
                    background: linear-gradient(135deg, #1F2937 0%, #9CA3AF 50%, #D1D5DB 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .platinum-card {
                    background: linear-gradient(145deg, #ffffff, #e6e6e6);
                    box-shadow: 20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff;
                }

                .metallic-shine {
                    position: relative;
                    overflow: hidden;
                }
                
                .metallic-shine::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent);
                    transform: skewX(-25deg);
                    animation: shine 4s infinite;
                }
                
                @keyframes shine {
                    0%, 70% { left: -100%; }
                    100% { left: 200%; }
                }
                
                .brushed-metal {
                    background-color: #e5e5e5;
                    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
                }
            `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 brushed-metal opacity-20 pointer-events-none z-0"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#F3F4F6]/80 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Hexagon size={28} className="text-gray-800" strokeWidth={1.5} />
                        <span className="text-xl font-future font-bold text-gray-900 tracking-wider">PLATINUM</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['TECHNOLOGY', 'DESIGN', 'PERFORMANCE'].map((item) => (
                                <a key={item} href="#" className="text-xs font-future font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-[0.15em]">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-2.5 bg-gray-900 text-white text-xs font-future font-bold tracking-widest hover:bg-gray-700 transition-all metallic-shine shadow-lg">
                                CONFIGURE
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-gray-800 hover:bg-gray-200 rounded-lg transition-colors">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-20 left-0 w-full bg-[#F3F4F6] border-b border-gray-200 shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300 z-50">
                        {['TECHNOLOGY', 'DESIGN', 'PERFORMANCE'].map((item) => (
                            <a key={item} href="#" className="text-lg font-future font-bold text-gray-800 tracking-widest py-2 border-b border-gray-200">
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            <main className="font-clean relative z-10 text-gray-800">
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden bg-gray-50">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-200 to-transparent"></div>

                    {/* Abstract Silver Orb */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gray-100 to-gray-300 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="inline-block mb-8">
                                <span className="text-gray-400 font-future text-[10px] tracking-[0.4em] uppercase border border-gray-300 px-3 py-1 bg-white/50 backdrop-blur-sm">Series X</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-future font-bold text-gray-900 mb-8 leading-none tracking-tight">
                                PURE <br /> <span className="silver-gradient-text">METAL</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-lg leading-relaxed font-light">
                                Engineered for perfection. A synthesis of advanced materials and minimalist design language. The future, refined.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="px-10 py-5 bg-gray-900 text-white font-future text-xs font-bold tracking-widest hover:bg-gray-800 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] metallic-shine">
                                    DISCOVER
                                </button>
                                <button className="px-10 py-5 bg-white border border-gray-300 text-gray-900 font-future text-xs font-bold tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
                                    <Aperture size={16} /> SPECS
                                </button>
                            </div>
                        </div>

                        <div className="relative h-[500px] flex items-center justify-center">
                            {/* Product Placeholder - Silver aesthetic */}
                            <div className="relative w-full aspect-square max-w-[500px] bg-gradient-to-br from-gray-100 to-gray-300 rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center overflow-hidden border border-white">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-80 mix-blend-multiply transition-transform duration-700 hover:scale-105"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>

                                <div className="absolute bottom-10 left-10 text-white">
                                    <div className="text-xs font-future tracking-widest mb-1 opacity-80">EDITION 01</div>
                                    <h3 className="text-3xl font-bold">Titanium</h3>
                                </div>

                                <div className="absolute top-10 right-10 w-16 h-16 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white">
                                    <Shield size={24} strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specs Grid */}
                <section className="py-24 px-6 bg-white border-y border-gray-100">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-6">
                            <h2 className="text-3xl font-future font-bold text-gray-900">SPECIFICATIONS</h2>
                            <div className="text-xs font-future tracking-widest text-gray-400">V.2025.1</div>
                        </div>

                        <div className="grid md:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                            {[
                                { label: "Material", val: "Aerospace Grade" },
                                { label: "Finish", val: "Brushed Platinum" },
                                { label: "Weight", val: "Ultra-Light" },
                                { label: "Warranty", val: "Lifetime" }
                            ].map((spec, i) => (
                                <div key={i} className="bg-white p-10 hover:bg-gray-50 transition-colors group text-center md:text-left">
                                    <div className="text-xs font-future tracking-[0.2em] text-gray-400 mb-4 group-hover:text-gray-900 transition-colors uppercase">{spec.label}</div>
                                    <div className="text-2xl font-bold text-gray-900">{spec.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Feature Showcase */}
                <section className="py-32 px-6 bg-[#F3F4F6] relative overflow-hidden">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                        {[
                            { icon: Layers, title: "Layered Precision", desc: "Multi-stage machining process ensures tolerance within microns." },
                            { icon: Gem, title: "Premium Finish", desc: "Hand-polished surfaces treated for distinct scratch resistance." },
                            { icon: Monitor, title: "Integration", desc: "Seamlessly connects with your existing premium ecosystem." }
                        ].map((f, i) => (
                            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-colors duration-300">
                                    <f.icon size={28} className="text-gray-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold font-future tracking-wide text-gray-900 mb-4">{f.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Minimalist Pricing */}
                <section className="py-32 px-6 bg-gray-900 text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-future font-bold mb-4">ACQUIRE</h2>
                            <p className="text-gray-400 font-light max-w-lg mx-auto">Select your configuration. Each piece is made to order.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-center text-gray-900">
                            {[
                                { name: "Silver", price: "$499", detail: "Essential Series" },
                                { name: "Platinum", price: "$999", detail: "Signature Series", highlight: true },
                                { name: "Rhodium", price: "$2,499", detail: "Limited Edition" }
                            ].map((plan, i) => (
                                <div key={i} className={`p-10 transition-transform duration-300 ${plan.highlight ? 'bg-white scale-105 shadow-2xl' : 'bg-gray-800 text-white border border-gray-700 hover:border-gray-500'}`}>
                                    <div className={`text-xs font-future tracking-[0.2em] mb-4 ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>{plan.name}</div>
                                    <div className={`text-5xl font-bold mb-4 ${plan.highlight ? 'text-gray-900' : 'text-white'}`}>{plan.price}</div>
                                    <div className={`text-sm mb-10 ${plan.highlight ? 'text-gray-500' : 'text-gray-400'}`}>{plan.detail}</div>

                                    <button className={`w-full py-4 text-xs font-future font-bold tracking-widest transition-colors border ${plan.highlight ? 'bg-gray-900 text-white hover:bg-gray-800 border-transparent' : 'bg-transparent text-white border-white hover:bg-white hover:text-gray-900'}`}>
                                        SELECT
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-white pt-24 pb-12 px-6 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto flex flex-col items-center">
                        <Hexagon size={40} className="text-gray-900 mb-8" strokeWidth={1} />

                        <div className="flex flex-wrap justify-center gap-12 mb-16">
                            {['About', 'Contact', 'Press', 'Legal', 'Privacy'].map(link => (
                                <a key={link} href="#" className="text-xs font-bold font-future text-gray-500 hover:text-gray-900 uppercase tracking-widest transition-colors">
                                    {link}
                                </a>
                            ))}
                        </div>

                        <div className="w-full h-px bg-gray-100 mb-8"></div>

                        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-xs text-gray-400 font-future tracking-widest">
                            <span>© 2025 PLATINUM DESIGN GROUP</span>
                            <div className="flex gap-4">
                                <span>LONDON</span>
                                <span>TOKYO</span>
                                <span>NEW YORK</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};
