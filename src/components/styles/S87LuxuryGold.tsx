import { useState } from 'react';
import { Diamond, Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S87LuxuryGold = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#0F0F0F] font-sans text-[#E0E0E0] overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&family=Lato:wght@300;400&display=swap');
        .font-lux { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        
        .gold-text {
           background: linear-gradient(to right, #D4AF37, #F4E08B, #D4AF37);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
           background-size: 200% auto;
           animation: shine 5s linear infinite;
        }
        
        .gold-border {
           border: 1px solid transparent;
           border-image: linear-gradient(to right, #D4AF37, #F4E08B, #D4AF37) 1;
        }
        
        .fade-up {
           animation: fadeUp 1s ease-out forwards;
           opacity: 0;
           transform: translateY(20px);
        }
        
        @keyframes shine {
           to { background-position: 200% center; }
        }
        
        @keyframes fadeUp {
           to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-[#0F0F0F]/95 backdrop-blur-sm border-b border-[#333]">
                <div className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center">
                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8 ${responsive.nav.showDesktop ? '' : 'opacity-0'}`}>
                        <span className="cursor-pointer hover:text-[#D4AF37] transition-colors font-body text-xs tracking-[0.2em] uppercase">Collections</span>
                        <span className="cursor-pointer hover:text-[#D4AF37] transition-colors font-body text-xs tracking-[0.2em] uppercase">Maison</span>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                        <div className="text-[#D4AF37]">
                            <Diamond size={20} strokeWidth={1} />
                        </div>
                        <span className="font-lux font-bold text-2xl tracking-[0.2em] text-white">AURUM</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <Search size={18} strokeWidth={1} className="cursor-pointer hover:text-[#D4AF37] transition-colors" />
                        <ShoppingBag size={18} strokeWidth={1} className="cursor-pointer hover:text-[#D4AF37] transition-colors" />
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#D4AF37]" strokeWidth={1} /> : <Menu size={24} className="text-[#D4AF37]" strokeWidth={1} />}
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
                                Home
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Features
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Contact
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
                                Home
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Features
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Contact
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
                                
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="h-screen relative flex items-center justify-center px-6">
                {/* Background Texture */}
                <div className="absolute inset-0 bg-[#0F0F0F] opacity-90 z-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />

                {/* Central Content */}
                <div className="max-w-4xl w-full text-center relative z-10">
                    <div className="text-[#D4AF37] font-body text-xs tracking-[0.4em] uppercase mb-6 fade-up" style={{ animationDelay: '0.2s' }}>
                        Est. 1924
                    </div>

                    <h1 className={`${isMobile ? 'text-5xl' : 'text-5xl md:text-7xl lg:text-8xl'} font-lux text-white mb-8 leading-tight tracking-widest fade-up`} style={{ animationDelay: '0.4s' }}>
                        THE <span className="gold-text italic pr-4">GOLDEN</span> <br />
                        STANDARD
                    </h1>

                    <p className={`font-body text-[#999] ${isMobile ? 'text-sm' : 'text-sm md:text-base'} leading-relaxed max-w-lg mx-auto mb-12 fade-up tracking-wider`} style={{ animationDelay: '0.6s' }}>
                        Experience the pinnacle of craftsmanship and timeless elegance.
                        Defined by exclusivity, designed for the few.
                    </p>

                    <div className="fade-up" style={{ animationDelay: '0.8s' }}>
                        <button className="bg-transparent text-white px-10 py-4 font-body text-xs uppercase tracking-[0.3em] gold-border hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
                            Discover Collection
                        </button>
                    </div>
                </div>

                {/* Simple Image Overlay Placeholder */}
                <div className="absolute inset-0 z-[-1] opacity-30 bg-gradient-to-b from-transparent to-[#0F0F0F]" />
            </section>

            {/* Feature Grid */}
            <section className="py-24 px-8 bg-[#141414] border-t border-[#222]">
                <div className={`max-w-7xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} gap-0 border border-[#333]`}>
                    {[
                        { title: 'Haute Horlogerie', sub: 'Timeless Precision' },
                        { title: 'Fine Jewelry', sub: 'Eternal Brilliance' },
                        { title: 'Bespoke Services', sub: 'Tailored to You' },
                    ].map((item, i) => (
                        <div key={i} className="p-12 border border-[#333] hover:bg-[#1A1A1A] transition-colors group cursor-pointer flex flex-col items-center justify-center text-center aspect-square">
                            <div className="w-12 h-[1px] bg-[#D4AF37] mb-8 group-hover:w-24 transition-all duration-500" />
                            <h3 className="font-lux text-2xl text-white mb-4 tracking-wider">{item.title}</h3>
                            <p className="font-body text-[#666] text-xs tracking-[0.2em] uppercase mb-8 group-hover:text-[#D4AF37] transition-colors">{item.sub}</p>
                            <ArrowRight size={16} strokeWidth={1} className="text-[#333] group-hover:text-white transition-colors" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0A0A0A] py-24 px-8 border-t border-[#222] text-center font-body">
                <div className="flex flex-col items-center gap-8 mb-16">
                    <Diamond size={32} strokeWidth={0.5} className="text-[#D4AF37]" />
                    <div className="text-xl font-lux tracking-[0.2em] text-white">AURUM</div>
                </div>

                <div className="flex justify-center gap-12 text-xs tracking-[0.2em] text-[#666] uppercase mb-16 flex-wrap">
                    <a href="#" className="hover:text-[#D4AF37] transition-colors">Press</a>
                    <a href="#" className="hover:text-[#D4AF37] transition-colors">Careers</a>
                    <a href="#" className="hover:text-[#D4AF37] transition-colors">Legal</a>
                    <a href="#" className="hover:text-[#D4AF37] transition-colors">Contact</a>
                </div>

                <div className="text-[#333] text-[10px] tracking-widest">
                    &copy; 2024 AURUM MAISON. ALL RIGHTS RESERVED.
                </div>
            </footer>
        </div>
    );
};
