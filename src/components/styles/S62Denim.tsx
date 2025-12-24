import { useState } from 'react';
import { Scissors, Tag, CheckCircle, Menu, X, ArrowRight, ShoppingCart } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S62Denim = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Denim Texture
    const denim = "url('https://www.transparenttextures.com/patterns/denim.png')";

    return (
        <div className="min-h-screen bg-[#1a237e] font-sans text-white overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans:wght@400;700&display=swap');
        .font-label { font-family: 'Anton', sans-serif; }
        .font-body { font-family: 'Open Sans', sans-serif; }
        
        .stitch-orange {
           border: 2px dashed #ffab91;
           box-shadow: 0 1px 0 rgba(0,0,0,0.5);
        }
        .stitch-double {
           position: relative;
        }
        .stitch-double::after {
           content: '';
           position: absolute;
           top: 4px; left: 4px; right: 4px; bottom: 4px;
           border: 1px dashed #ffccbc;
           pointer-events: none;
           border-radius: inherit;
        }
        .rivet {
           width: 12px;
           height: 12px;
           background: radial-gradient(circle at 30% 30%, #d7ccc8, #8d6e63);
           border-radius: 50%;
           box-shadow: 1px 1px 2px rgba(0,0,0,0.6);
           border: 1px solid #5d4037;
        }
        .pocket-shadow {
           box-shadow: 2px 2px 5px rgba(0,0,0,0.4), inset 1px 1px 2px rgba(255,255,255,0.1);
        }
      `}</style>

            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-repeat mix-blend-overlay" style={{ backgroundImage: denim }} />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-4 bg-[#283593] shadow-lg border-b-4 border-[#1a237e]">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                    {/* Logo Patch */}
                    <div className="bg-[#5d4037] px-4 py-2 transform -rotate-1 shadow-md border border-[#3e2723] flex items-center gap-2">
                        <span className="font-label text-2xl tracking-wide text-[#ffcc80]">INDIGO CO.</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Men', 'Women', 'Selvedge', 'Repair'].map((item) => (
                            <a key={item} href="#" className="font-label text-xl hover:text-[#ffab91] transition-colors uppercase tracking-wide">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative cursor-pointer hover:scale-110 transition-transform">
                            <ShoppingCart size={24} />
                            <span className="absolute -top-2 -right-2 bg-[#ff5252] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">2</span>
                        </div>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={28} /> : <Menu size={28} />}
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
                                Men
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Women
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Selvedge
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Repair
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
                                Men
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Women
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Selvedge
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Repair
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
                                Men
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Women
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Selvedge
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Repair
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-12 items-center`}>

                    <div className="bg-[#303f9f]/80 p-10 rounded-lg stitch-orange stitch-double pocket-shadow relative">
                        {/* Rivets */}
                        <div className="absolute top-2 left-2 rivet" />
                        <div className="absolute top-2 right-2 rivet" />
                        <div className="absolute bottom-2 left-2 rivet" />
                        <div className="absolute bottom-2 right-2 rivet" />

                        <div className="inline-block bg-[#ffab91] text-[#bf360c] px-3 py-1 font-bold text-xs rounded mb-6 transform rotate-2">
                            100% RAW COTTON
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-label mb-6 leading-none drop-shadow-lg`}>
                            HEAVY <br /> WEIGHT
                        </h1>

                        <p className="font-body text-xl text-[#c5cae9] mb-8 max-w-md">
                            Crafted for durability. Fades uniquely to you. The ultimate workwear staple redefined for the modern street.
                        </p>

                        <button className={`${isMobile ? 'w-full' : 'w-auto'} px-8 py-4 bg-[#bf360c] text-white font-label text-xl hover:bg-[#d84315] transition-colors shadow-lg border-b-4 border-[#870000] active:border-0 active:translate-y-1`}>
                            Shop Collection
                        </button>
                    </div>

                    <div className="relative h-[600px] flex items-center justify-center">
                        {/* Big Tag */}
                        <div className="absolute top-10 right-10 w-48 h-64 bg-[#efebe9] text-[#3e2723] p-6 font-mono text-xs transform rotate-6 shadow-xl border border-[#d7ccc8] z-20 flex flex-col justify-between">
                            <div>
                                <div className="font-bold text-2xl mb-2">SIZE 32</div>
                                <div>STRAIGHT CUT</div>
                                <div>14OZ JAPANESE</div>
                            </div>
                            <div className="border-t border-[#3e2723] pt-2 text-center text-xl font-bold">$120.00</div>
                            {/* Tag Hole */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#3e2723] rounded-full border-2 border-[#8d6e63]" />
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1542272617-08f086303b96?q=80&w=600&auto=format&fit=crop"
                            className="relative z-10 w-full h-full object-cover rounded-xl shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-500 border-4 border-white transform -rotate-2"
                        />
                    </div>
                </div>
            </section>

            {/* Features / Weave Breakdown */}
            <section className="py-20 bg-[#283593] border-t border-[#3949ab]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className={`flex flex-col ${isMobile ? '' : 'md:flex-row'} justify-between items-center gap-8 text-center ${isMobile ? '' : 'md:text-left'}`}>
                        {[
                            { icon: Scissors, label: 'Hand Cut' },
                            { icon: CheckCircle, label: 'Quality Check' },
                            { icon: Tag, label: 'Authentic' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center p-6 hover:bg-[#303f9f] rounded-lg transition-colors w-full">
                                <div className="w-16 h-16 bg-[#1a237e] rounded-full flex items-center justify-center border-2 border-dashed border-[#ffab91] mb-4">
                                    <item.icon size={28} className="text-[#ffab91]" />
                                </div>
                                <h3 className="font-label text-2xl tracking-wide">{item.label}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-[#1a237e] text-[#9fa8da] border-t-8 border-[#bf360c] relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#ffab91] dashed" />

                <div className={`max-w-6xl mx-auto px-6 flex ${isMobile ? 'flex-col gap-4 items-start' : 'justify-between items-end'}`}>
                    <div>
                        <div className="font-label text-4xl text-white mb-2">INDIGO CO.</div>
                        <div className="font-body text-xs">MADE TO LAST.</div>
                    </div>

                    <div className="text-right font-mono text-xs opacity-50">
                        BATCH NO. 8421 <br />
                        SAN FRANCISCO, CA
                    </div>
                </div>
            </footer>
        </div>
    );
};
