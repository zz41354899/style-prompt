import { useState } from 'react';
import { ShoppingBag, Star, Shield, Menu, X, ArrowRight, Tag } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S61Leather = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Leather Textures
    const leather = "url('https://www.transparenttextures.com/patterns/leather.png')";
    const stitching = "2px dashed #fdd835";

    return (
        <div className="min-h-screen bg-[#5d4037] font-serif text-[#d7ccc8] overflow-x-hidden relative selection:bg-[#fdd835] selection:text-[#3e2723]">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Merriweather:ital,wght@0,300;0,700;1,300&display=swap');
        .font-brand { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Merriweather', serif; }
        
        .debossed {
           color: #3e2723;
           text-shadow: 1px 1px 0 rgba(255,255,255,0.2), -1px -1px 0 rgba(0,0,0,0.5);
        }
        .embossed-gold {
           color: #fdd835;
           text-shadow: 1px 1px 2px rgba(0,0,0,0.5), 0 0 5px rgba(253, 216, 53, 0.5);
        }
        .stitch-border {
           border: 2px dashed #9e8477;
           box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
        }
        .leather-patch {
           background-color: #4e342e;
           background-image: ${leather};
           box-shadow: 0 4px 8px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1);
           border-radius: 8px;
        }
      `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-50 z-0 bg-repeat mix-blend-multiply" style={{ backgroundImage: leather }} />

            {/* Ambient Lighting Vignette */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(62,39,35,0.8)_100%)] pointer-events-none z-0" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-[#3e2723] px-8 py-4 rounded-lg shadow-xl border-b border-[#795548]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#fdd835] rounded-full flex items-center justify-center text-[#3e2723] shadow-inner">
                            <Shield size={24} />
                        </div>
                        <span className="font-brand text-2xl tracking-widest text-[#fdd835] embossed-gold">ARTISAN</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-10`}>
                        {['Collection', 'Craft', 'Heritage', 'Atelier'].map((item) => (
                            <a key={item} href="#" className="font-brand font-bold text-[#bcaaa4] hover:text-[#fdd835] transition-colors text-sm uppercase tracking-widest">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#4e342e] border border-[#795548] text-[#fdd835] font-brand hover:bg-[#5d4037] transition-colors shadow-inner flex items-center gap-2 rounded-md">
                            <ShoppingBag size={18} /> Cart (0)
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
                                Collection
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Craft
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Heritage
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Atelier
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    <div className="relative">
                        <div className={`absolute -left-10 top-0 h-full w-1 bg-[#fdd835] opacity-50 ${isMobile ? 'hidden' : 'block'}`} />

                        <h3 className="font-body italic text-[#fdd835] mb-4 text-xl">Handcrafted since 1924</h3>
                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-brand font-bold leading-tight mb-8 text-[#efebe9] drop-shadow-lg`}>
                            TIMELESS <br />
                            <span className="text-[#a1887f]">QUALITY</span>
                        </h1>

                        <p className="font-body text-lg text-[#d7ccc8] mb-10 max-w-lg leading-relaxed">
                            We create goods that age with grace. Full-grain leather, solid brass hardware, and meticulous stitching. Built to last a lifetime.
                        </p>

                        <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#fdd835] text-[#3e2723] font-brand font-bold text-lg hover:translate-y-[-2px] hover:shadow-lg transition-all rounded-sm uppercase tracking-widest">
                            Explore Shop
                        </button>
                    </div>

                    {/* Product Card Styled as Leather Patch */}
                    <div className="relative h-[600px] w-full leather-patch p-8 flex flex-col items-center justify-center border-2 border-[#795548] border-dashed">
                        {/* Stitching Effect */}
                        <div className="absolute inset-2 border-2 border-dashed border-[#8d6e63] rounded-md pointer-events-none" />

                        <img
                            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop"
                            className="w-3/4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-lg mb-8 transform group-hover:scale-105 transition-transform duration-500 sepia-[0.3]"
                        />

                        <div className="text-center relative z-10">
                            <div className="font-brand text-2xl text-[#fdd835] mb-2 embossed-gold">The Weekender</div>
                            <div className="font-body italic text-[#bcaaa4]">$495.00</div>
                            <div className="mt-4 flex justify-center gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-[#fdd835] fill-current" />)}
                            </div>
                        </div>

                        {/* Label Tag */}
                        <div className="absolute top-6 right-6 bg-[#3e2723] text-[#fdd835] px-4 py-1 rounded-sm font-brand text-xs shadow-md border border-[#5d4037]">
                            NEW ARRIVAL
                        </div>
                    </div>
                </div>
            </section>

            {/* Material Details */}
            <section className="py-24 px-4 bg-[#4e342e] relative shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)] border-t border-[#3e2723]">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-12`}>
                    {[
                        { icon: Tag, title: 'Vegetable Tanned', desc: 'Sourced from the finest tanneries in Tuscany, aging beautifully over time.' },
                        { icon: Shield, title: 'Lifetime Warranty', desc: 'We repair any manufacturing defects for free. Forever.' },
                        { icon: Star, title: 'Custom Monogram', desc: 'Add your initials with our traditional hot-stamping service.' },
                    ].map((item, i) => (
                        <div key={i} className="text-center p-6 border-b border-[#795548] md:border-b-0 md:border-r last:border-0 border-dashed">
                            <item.icon size={40} className="mx-auto text-[#fdd835] mb-6 drop-shadow-md" />
                            <h3 className="text-2xl font-brand text-[#efebe9] mb-4">{item.title}</h3>
                            <p className="font-body text-[#bcaaa4] leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="pt-20 pb-10 text-center bg-[#3e2723] border-t-4 border-[#fdd835] relative">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="font-brand text-3xl text-[#d7ccc8] mb-8 embossed-gold opacity-50">ARTISAN LEATHER CO.</h2>
                    <div className="w-16 h-1 bg-[#fdd835] mx-auto mb-8 rounded-full opacity-50" />

                    <div className="flex justify-center gap-8 font-brand text-sm tracking-widest text-[#a1887f]">
                        <a href="#" className="hover:text-[#fdd835] transition-colors">Catalog</a>
                        <a href="#" className="hover:text-[#fdd835] transition-colors">Care Guide</a>
                        <a href="#" className="hover:text-[#fdd835] transition-colors">Stories</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
