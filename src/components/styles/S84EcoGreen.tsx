import { useState } from 'react';
import { Leaf, Recycle, Sprout, Menu, X, ArrowRight, Sun } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S84EcoGreen = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#F1F8E9] font-sans text-[#1B5E20] overflow-x-hidden selection:bg-[#2E7D32] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap');
        .font-eco { font-family: 'Nunito', sans-serif; }
        
        .leaf-shape {
           border-radius: 24px 0 24px 0;
        }
        .leaf-shape-reverse {
           border-radius: 0 24px 0 24px;
        }
        
        .organic-btn {
           background-color: #2E7D32;
           color: white;
           border-radius: 24px 4px 24px 4px;
           transition: all 0.3s ease;
        }
        .organic-btn:hover {
           border-radius: 4px 24px 4px 24px;
           background-color: #1B5E20;
           transform: scale(1.02);
        }
        
        .texture-paper {
           background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238d6e63' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>

            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none z-0 texture-paper opacity-40" />

            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-[#F1F8E9]/90 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Leaf size={28} className="text-[#2E7D32] fill-[#AED581]" />
                        <span className="font-eco font-extrabold text-2xl tracking-tight text-[#1B5E20]">Eden</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Mission', 'Impact', 'Shop', 'Blog'].map((item) => (
                            <a key={item} href="#" className="font-eco text-[#558B2F] hover:text-[#2E7D32] font-bold transition-colors text-base">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-[#558B2F] font-bold hover:underline">Donate</button>
                        <button className="px-6 py-2 organic-btn font-bold flex items-center gap-2 shadow-lg shadow-[#2E7D32]/20">
                            Join Us
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#1B5E20]" /> : <Menu size={24} className="text-[#1B5E20]" />}
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
                                Mission
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Impact
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shop
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Blog
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
                                Mission
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Impact
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shop
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Blog
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
                                Mission
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Impact
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shop
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">

                    <div className="inline-flex items-center gap-2 mb-6 text-[#558B2F] bg-[#DCEDC8] px-4 py-1.5 rounded-full font-bold text-sm">
                        <Sun size={16} /> <span className="uppercase tracking-wider">Sustainable Future</span>
                    </div>

                    <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-eco font-extrabold text-[#1B5E20] mb-8 leading-none`}>
                        Plant the <br />
                        <span className="text-[#2E7D32] relative inline-block">
                            Change
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#AED581]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="font-eco text-xl text-[#33691E] mb-12 max-w-2xl mx-auto leading-relaxed">
                        We empower communities to build greener, cleaner, and more resilient environments. Join the movement today.
                    </p>

                    <div className="flex justify-center gap-6">
                        <button className="organic-btn px-10 py-4 text-xl font-bold flex items-center gap-3 shadow-[0_10px_40px_-10px_rgba(46,125,50,0.4)]">
                            Start Planting <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/3 left-10 text-[#AED581] opacity-50 animate-bounce">
                    <Sprout size={48} />
                </div>
                <div className="absolute top-1/4 right-10 text-[#8D6E63] opacity-30 animation-delay-1000 animate-pulse">
                    <Leaf size={32} />
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-24 bg-[#E8F5E9] relative z-10">
                <div className={`max-w-6xl mx-auto px-6 grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                    {[
                        { icon: Leaf, title: 'Reforestation', desc: 'Planting native trees to restore biodiversity and capture carbon.' },
                        { icon: Recycle, title: 'Zero Waste', desc: 'Eliminating single-use plastics from our supply chains completely.' },
                        { icon: Sun, title: 'Clean Energy', desc: 'Transitioning to 100% renewable solar and wind energy sources.' },
                    ].map((item, i) => (
                        <div key={i} className={`bg-[#F1F8E9] p-8 border-2 border-[#C5E1A5] hover:border-[#2E7D32] transition-colors group ${i % 2 === 0 ? 'leaf-shape' : 'leaf-shape-reverse'}`}>
                            <div className="w-16 h-16 bg-[#2E7D32] text-white flex items-center justify-center rounded-full mb-6 group-hover:bg-[#1B5E20] transition-colors shadow-lg">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-eco font-extrabold text-[#1B5E20] mb-4">{item.title}</h3>
                            <p className="font-eco text-[#33691E] text-lg">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1B5E20] text-[#AED581] py-20 relative z-10">
                <div className={`max-w-6xl mx-auto px-6 grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-12 items-center`}>
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Leaf size={32} />
                            <span className="font-eco font-extrabold text-3xl text-white">Eden</span>
                        </div>
                        <p className="max-w-sm text-[#DCEDC8]">
                            Building a legacy for future generations through action, education, and preservation.
                        </p>
                    </div>

                    <div className="text-right">
                        <div className="font-eco font-bold text-white text-xl mb-4">Subscribe to our newsletter</div>
                        <div className="flex gap-2 justify-end">
                            <input type="email" placeholder="Email address" className="px-4 py-3 rounded-l-full bg-[#1B5E20] border border-[#AED581] text-white focus:outline-none focus:bg-[#2E7D32]" />
                            <button className="bg-[#AED581] text-[#1B5E20] font-bold px-6 py-3 rounded-r-full hover:bg-white transition-colors">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 pt-8 border-t border-[#2E7D32] opacity-60 text-sm">
                    &copy; 2024 Eden Initiative. 100% Carbon Neutral Website.
                </div>
            </footer>
        </div>
    );
};
