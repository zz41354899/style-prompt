import { useState } from 'react';
import { Flower, Feather, Sun, Moon, Menu, X, ArrowRight, Star } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S54ArtNouveau = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Floral Pattern (Mucha Style)
    const floral = "url('https://www.transparenttextures.com/patterns/vintage-leaves.png')";
    const frameColor = "#C5A059"; // Gold

    return (
        <div className="min-h-screen bg-[#F5F5DC] font-serif text-[#4B3621] selection:bg-[#C5A059] selection:text-white overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-decor { font-family: 'Cinzel Decorative', cursive; }
        .font-body { font-family: 'Playfair Display', serif; }
        
        .ornate-border {
           border: 2px solid #C5A059;
           border-radius: 10px;
           background-image: linear-gradient(to right, #C5A059 50%, transparent 50%), linear-gradient(to bottom, #C5A059 50%, transparent 50%);
           background-size: 10px 100%, 100% 10px;
           background-repeat: no-repeat;
           background-position: top left, top left;
        }
      `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-10 z-0 bg-repeat" style={{ backgroundImage: floral }} />

            {/* Frame Elements */}
            <div className="fixed top-0 left-0 w-full h-4 border-b border-[#C5A059] bg-[#EADDCA] z-50 opacity-80" />
            <div className="fixed bottom-0 left-0 w-full h-4 border-t border-[#C5A059] bg-[#EADDCA] z-50 opacity-80" />

            {/* Corner Ornaments */}
            <div className="fixed top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#C5A059] rounded-tl-3xl z-50 pointer-events-none" />
            <div className="fixed top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#C5A059] rounded-tr-3xl z-50 pointer-events-none" />
            <div className="fixed bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#C5A059] rounded-bl-3xl z-50 pointer-events-none" />
            <div className="fixed bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#C5A059] rounded-br-3xl z-50 pointer-events-none" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6 pt-10">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-[#FDFBF7]/90 backdrop-blur-sm px-8 py-4 border border-[#C5A059]/30 rounded-full shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="text-[#C5A059]">
                            <Flower size={32} strokeWidth={1} />
                        </div>
                        <span className="font-decor text-2xl font-bold tracking-widest text-[#4B3621]">L'Art Nouveau</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-12`}>
                        {['Gallery', 'Artists', 'History', 'Contact'].map((item) => (
                            <a key={item} href="#" className="font-body italic text-lg hover:text-[#C5A059] transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C5A059] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-8 py-2 border border-[#C5A059] text-[#4B3621] font-decor text-sm hover:bg-[#C5A059] hover:text-white transition-colors rounded-full">
                            Enter
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#C5A059]" /> : <Menu size={24} className="text-[#C5A059]" />}
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
                                Gallery
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Artists
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                History
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

            {/* Hero Section */}
            <section className="pt-48 pb-32 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-5xl mx-auto text-center relative">
                    {/* Decorative Central Arch */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C5A059]/20 rounded-full z-0 transform scale-y-125" />

                    <div className="relative z-10 bg-[#F5F5DC]/80 backdrop-blur-sm p-12 rounded-[50px] border border-[#C5A059]/30 inline-block shadow-lg">
                        <div className="w-16 h-1 bg-[#C5A059] mx-auto mb-8" />
                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-decor font-bold text-[#4B3621] mb-6 leading-tight`}>
                            <span className={`block ${isMobile ? 'text-4xl' : 'text-5xl'} font-body italic font-normal mb-4 opacity-70`}>The Essence of</span>
                            Natural Beauty
                        </h1>

                        <p className={`font-body italic ${isMobile ? 'text-xl' : 'text-2xl'} text-[#6B5A45] mb-12 max-w-2xl mx-auto leading-relaxed`}>
                            "Art is the flower of life, and as seed, it gives back life."
                        </p>

                        <div className="flex justify-center gap-8">
                            <button className="group relative px-10 py-4 bg-[#4B3621] text-[#F5F5DC] font-decor text-lg tracking-widest overflow-hidden transition-all hover:bg-[#C5A059]">
                                <span className="relative z-10 flex items-center gap-2">Explore <ArrowRight size={16} /></span>
                                <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </button>
                        </div>
                        <div className="w-16 h-1 bg-[#C5A059] mx-auto mt-8" />
                    </div>
                </div>

                {/* Floating Elements (Petals) */}
                <div className="absolute top-1/4 left-10 opacity-30 animate-pulse">
                    <Feather size={48} className="text-[#C5A059] transform -rotate-45" />
                </div>
                <div className="absolute bottom-1/4 right-10 opacity-30 animate-pulse animation-delay-2000">
                    <Feather size={48} className="text-[#C5A059] transform rotate-45" />
                </div>
            </section>

            {/* Triptych Feature Section */}
            <section className="py-24 px-4 bg-[#EADDCA]/30 border-y border-[#C5A059]/20">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                    {[
                        { icon: Sun, title: 'Illumination', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&auto=format&fit=crop' },
                        { icon: Flower, title: 'Growth', img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=400&h=600&auto=format&fit=crop' },
                        { icon: Moon, title: 'Mystery', img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=400&h=600&auto=format&fit=crop' },
                    ].map((item, i) => (
                        <div key={i} className="group relative">
                            {/* Image Frame */}
                            <div className="relative h-[500px] overflow-hidden rounded-t-[100px] border border-[#C5A059]/50 p-2 bg-white shadow-md transition-all duration-700 group-hover:-translate-y-4">
                                <div className="w-full h-full rounded-t-[90px] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[#C5A059] mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                                    <img src={item.img} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />

                                    {/* Text Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 text-center bg-gradient-to-t from-[#4B3621] to-transparent z-20">
                                        <item.icon className="mx-auto text-[#F5F5DC] mb-4 opacity-80" size={32} />
                                        <h3 className="font-decor text-3xl text-[#F5F5DC]">{item.title}</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Bottom */}
                            <div className="h-4 w-full bg-[#C5A059] mt-1 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-32 px-4 text-center">
                <div className="max-w-3xl mx-auto relative">
                    <Star size={24} className="mx-auto text-[#C5A059] mb-8" />
                    <p className="font-body italic text-4xl text-[#4B3621] leading-relaxed">
                        "To every age its art, to every art its freedom."
                    </p>
                    <div className="mt-8 font-decor text-sm tracking-[0.3em] uppercase text-[#6B5A45]">
                        — Vienna Secession
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 bg-[#4B3621] text-[#EADDCA] border-t-8 border-[#C5A059]">
                <div className={`max-w-6xl mx-auto px-6 flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between items-center gap-8`}>
                    <div className={`${isMobile ? 'text-center' : 'text-left'}`}>
                        <h2 className="font-decor text-2xl mb-2">Mucha & Muse</h2>
                        <p className="font-body italic opacity-60 text-sm">Est. 1890 parisienne</p>
                    </div>

                    <div className="flex gap-8 font-decor text-sm tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Exhibitions</a>
                        <a href="#" className="hover:text-white transition-colors">Collection</a>
                        <a href="#" className="hover:text-white transition-colors">Patrons</a>
                    </div>

                    <div className="w-12 h-12 border border-[#C5A059] rounded-full flex items-center justify-center opacity-50">
                        <Flower size={20} />
                    </div>
                </div>
            </footer>
        </div>
    );
};
