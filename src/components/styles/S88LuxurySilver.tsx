import { useState } from 'react';
import { Gem, Menu, X, ArrowRight } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S88LuxurySilver = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#333] overflow-x-hidden selection:bg-[#C0C0C0] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap');
        .font-silv { font-family: 'Montserrat', sans-serif; }
        
        .silver-gradient {
           background: linear-gradient(135deg, #E0E0E0 0%, #F5F5F5 50%, #C0C0C0 100%);
        }
        
        .metallic-text {
            background: linear-gradient(to bottom, #777, #AAA, #777);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .thin-border {
           border: 1px solid #E0E0E0;
        }
      `}</style>

            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#F0F0F0]">
                <div className="max-w-[1400px] mx-auto px-10 h-24 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Gem size={24} strokeWidth={1} className="text-[#999]" />
                        <span className="font-silv font-light text-2xl tracking-[0.3em] text-[#333] uppercase">Platinum</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-12`}>
                        {['Watches', 'Jewelry', 'Accessories', 'Gifts'].map((item) => (
                            <a key={item} href="#" className="font-silv text-xs text-[#666] hover:text-black uppercase tracking-[0.2em] transition-colors font-light">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <span className={`text-[#666] font-silv text-xs uppercase cursor-pointer hover:text-black tracking-widest ${responsive.nav.showDesktop ? 'block' : 'hidden'}`}>Account</span>
                        <div className={`w-px h-4 bg-[#DDD] ${isMobile ? 'hidden' : 'block'}`}></div>
                        <span className="text-[#666] font-silv text-xs uppercase cursor-pointer hover:text-black tracking-widest">Bag (0)</span>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
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
                                Watches
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Jewelry
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Accessories
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Gifts
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
                                Watches
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Jewelry
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Accessories
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Gifts
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
                                Watches
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Jewelry
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Accessories
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Gifts
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className={`h-screen pt-24 flex flex-col ${isMobile ? '' : 'lg:flex-row'}`}>
                <div className="flex-1 bg-[#F5F5F5] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#E0E0E0] opacity-50" />
                    <div className="w-[400px] h-[400px] rounded-full border border-white shadow-[0_20px_60px_-10px_rgba(0,0,0,0.05)] bg-gradient-to-tr from-[#FAFAFA] to-[#EBEBEB] flex items-center justify-center relative z-10">
                        <div className="w-[300px] h-[300px] rounded-full silver-gradient opacity-20 blur-3xl absolute" />
                        <Gem size={120} strokeWidth={0.5} className="text-[#999] opacity-20" />
                    </div>
                </div>

                <div className={`flex-1 bg-white flex flex-col justify-center ${isMobile ? 'px-12' : 'px-12 lg:px-24'}`}>
                    <div className="font-silv text-xs tracking-[0.4em] text-[#999] uppercase mb-8">The Silver Collection</div>
                    <h1 className="font-silv font-extralight text-6xl text-[#111] leading-tight mb-8">
                        Pure <br /> <span className="metallic-text font-normal">Refinement</span>
                    </h1>
                    <p className="font-silv font-light text-[#555] leading-loose max-w-md mb-12 text-sm tracking-wide">
                        Designed for the modern aesthete. Minimalist forms meet precious metals in our latest release.
                    </p>
                    <div>
                        <button className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] hover:gap-6 transition-all group">
                            Explore Collection <span className="w-12 h-px bg-black group-hover:bg-[#999] transition-colors" /> <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Product Highlight */}
            <section className="py-32 px-10">
                <div className="max-w-[1400px] mx-auto">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                        {[
                            { name: 'Essence Ring', price: '$4,200' },
                            { name: 'Horizon Bracelet', price: '$8,500' },
                            { name: 'Apex Pendant', price: '$3,800' },
                        ].map((item, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-[3/4] bg-[#F9F9F9] mb-6 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white/50 backdrop-blur-[2px]">
                                        <span className="font-silv text-xs uppercase tracking-widest border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors">View Details</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-silv font-light text-lg text-[#111] mb-1">{item.name}</h3>
                                    <span className="font-silv text-xs text-[#777]">{item.price}</span>
                                </div>
                                <p className="font-silv text-[10px] text-[#999] uppercase tracking-wider">Platinum & Diamond</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#F5F5F5] py-20 px-10 border-t border-[#E0E0E0]">
                <div className={`max-w-[1400px] mx-auto flex flex-col ${isMobile ? '' : 'md:flex-row'} justify-between items-end gap-12`}>
                    <div className="text-4xl font-silv font-thin tracking-[0.2em] uppercase text-[#CCC]">Platinum</div>

                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-xs font-silv font-light text-[#555] tracking-widest uppercase">
                        <div className="flex flex-col gap-4">
                            <span className="font-medium text-black">Client Care</span>
                            <a href="#" className="hover:text-black">Contact Us</a>
                            <a href="#" className="hover:text-black">Shipping</a>
                            <a href="#" className="hover:text-black">Returns</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="font-medium text-black">Company</span>
                            <a href="#" className="hover:text-black">Our Story</a>
                            <a href="#" className="hover:text-black">Sustainability</a>
                            <a href="#" className="hover:text-black">Careers</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="font-medium text-black">Connect</span>
                            <a href="#" className="hover:text-black">Instagram</a>
                            <a href="#" className="hover:text-black">Facebook</a>
                            <a href="#" className="hover:text-black">Pinterest</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
