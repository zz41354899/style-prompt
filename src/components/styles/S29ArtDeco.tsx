import { useState } from 'react';
import { Gem, Ticket, GlassWater, Sparkles, Menu, X, ArrowRight, PlayCircle, Star, Award } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S29ArtDeco = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Art Deco Pattern SVG
    const decoPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='none' stroke='%23D4AF37' stroke-opacity='0.1' stroke-width='1'/%3E%3Cpath d='M30 10l20 20-20 20-20-20z' fill='none' stroke='%23D4AF37' stroke-opacity='0.1' stroke-width='1'/%3E%3C/svg%3E")`;

    return (
        <div className="min-h-screen font-serif bg-slate-900 text-[#E2E8F0] overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
            {/* Decorative Border Frame */}
            <div className="fixed inset-4 border border-[#D4AF37]/30 pointer-events-none z-50 rounded-sm">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]" />
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-40 bg-slate-900/90 backdrop-blur border-b border-[#D4AF37]/20">
                <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center">
                            <Gem className="text-[#D4AF37] -rotate-45" size={20} />
                        </div>
                        <span className="text-2xl tracking-[0.2em] font-bold text-[#D4AF37] uppercase">Gatsby</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-12`}>
                        {['Cinema', 'Dining', 'Events', 'Society'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-[#D4AF37]/80 hover:text-[#D4AF37] uppercase tracking-widest text-sm transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full group-hover:left-0 transition-all duration-500" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className={`${isMobile ? 'hidden' : 'block'} px-6 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-slate-900 transition-all uppercase tracking-widest text-xs font-bold`}>
                            Reserve
                        </button>

                        {responsive.nav.showMobile && (
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="text-[#D4AF37] hover:text-white transition-colors"
                            >
                                {menuOpen ? <X /> : <Menu />}
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
                                Cinema
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Dining
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Events
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Society
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
                                Cinema
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Dining
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Events
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Society
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
                                Cinema
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Dining
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Events
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Society
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 min-h-screen flex items-center justify-center bg-slate-900" style={{ backgroundImage: decoPattern }}>
                <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                    <div className="inline-block mb-6 pt-1 border-t border-[#D4AF37]">
                        <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm px-4">Est. 1925</span>
                    </div>

                    <h1 className={`text-5xl ${!isMobile ? 'md:text-7xl lg:text-8xl' : ''} font-medium mb-8 leading-tight text-white drop-shadow-lg`}>
                        Elegance is <br />
                        <span className="text-[#D4AF37] relative inline-block px-4">
                            Timeless
                            <div className="absolute top-1/2 -left-8 w-6 h-[1px] bg-[#D4AF37]" />
                            <div className="absolute top-1/2 -right-8 w-6 h-[1px] bg-[#D4AF37]" />
                        </span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 font-sans tracking-wide leading-relaxed">
                        Experience the golden age of design. Where geometric precision meets luxurious detail.
                    </p>

                    <div className={`flex justify-center flex-col ${!isMobile ? 'sm:flex-row' : ''} gap-6`}>
                        <button className="group relative px-10 py-4 bg-[#D4AF37] text-slate-900 font-bold uppercase tracking-widest hover:bg-[#FCD34D] transition-colors overflow-hidden">
                            <span className="relative z-10">Enter The Lounge</span>
                            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
                        </button>
                        <button className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-colors">
                            View Menu
                        </button>
                    </div>
                </div>

                {/* Decorative Fan Elements */}
                <div className="absolute bottom-0 left-0 w-64 h-32 bg-gradient-to-t from-[#D4AF37]/10 to-transparent rounded-t-full opacity-30 blur-sm pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-32 bg-gradient-to-t from-[#D4AF37]/10 to-transparent rounded-t-full opacity-30 blur-sm pointer-events-none" />
            </section>

            {/* Tri-Column Feature Section */}
            <section className="py-32 px-4 bg-slate-950 relative border-y-4 border-double border-[#D4AF37]/20">
                <div className={`max-w-6xl mx-auto grid ${!isMobile ? 'md:grid-cols-3' : ''} gap-12 text-center`}>

                    <div className="relative p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-colors group">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 p-4 border border-[#D4AF37] rotate-45 group-hover:bg-[#D4AF37] transition-colors duration-500">
                            <GlassWater className="text-[#D4AF37] group-hover:text-slate-900 -rotate-45" size={24} />
                        </div>
                        <h3 className="mt-8 text-2xl font-bold text-[#D4AF37] uppercase tracking-widest mb-4">Cocktails</h3>
                        <p className="text-slate-400 font-sans leading-relaxed">
                            Hand-crafted elixirs from the roaring twenties. Served in crystal, poured with precision.
                        </p>
                    </div>

                    <div className={`relative p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-colors group mt-12 ${!isMobile ? 'md:mt-0' : ''}`}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 p-4 border border-[#D4AF37] rotate-45 group-hover:bg-[#D4AF37] transition-colors duration-500">
                            <Ticket className="text-[#D4AF37] group-hover:text-slate-900 -rotate-45" size={24} />
                        </div>
                        <h3 className="mt-8 text-2xl font-bold text-[#D4AF37] uppercase tracking-widest mb-4">Theater</h3>
                        <p className="text-slate-400 font-sans leading-relaxed">
                            A grand stage for the finest performances. Opera, jazz, and cinematic masterpieces.
                        </p>
                    </div>

                    <div className={`relative p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-colors group mt-12 ${!isMobile ? 'md:mt-0' : ''}`}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 p-4 border border-[#D4AF37] rotate-45 group-hover:bg-[#D4AF37] transition-colors duration-500">
                            <Sparkles className="text-[#D4AF37] group-hover:text-slate-900 -rotate-45" size={24} />
                        </div>
                        <h3 className="mt-8 text-2xl font-bold text-[#D4AF37] uppercase tracking-widest mb-4">Society</h3>
                        <p className="text-slate-400 font-sans leading-relaxed">
                            An exclusive gathering of the city's most distinguished patrons. Membership by invitation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Geometric Quote Section */}
            <section className="py-24 px-8 text-center bg-[#D4AF37] text-slate-900">
                <div className="max-w-3xl mx-auto border-4 border-slate-900 p-12 relative">
                    <div className="absolute inset-2 border border-slate-900 opacity-50" />

                    <Star size={32} className="mx-auto mb-6 text-slate-900" />

                    <h2 className={`text-3xl ${!isMobile ? 'md:text-5xl' : ''} font-bold leading-tight uppercase tracking-wide mb-6`}>
                        "A little party never killed nobody."
                    </h2>

                    <div className="w-24 h-1 bg-slate-900 mx-auto mb-4" />
                    <p className="font-sans font-bold tracking-widest uppercase text-sm">Join the Celebration</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 pt-20 pb-10 border-t border-[#D4AF37]/30">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="flex justify-center gap-8 mb-12">
                        <div className="p-3 border border-[#D4AF37] rotate-45 hover:bg-[#D4AF37] hover:text-slate-900 transition-colors cursor-pointer group">
                            <PlayCircle className="-rotate-45" size={24} />
                        </div>
                        <div className="p-3 border border-[#D4AF37] rotate-45 hover:bg-[#D4AF37] hover:text-slate-900 transition-colors cursor-pointer group">
                            <Award className="-rotate-45" size={24} />
                        </div>
                        <div className="p-3 border border-[#D4AF37] rotate-45 hover:bg-[#D4AF37] hover:text-slate-900 transition-colors cursor-pointer group">
                            <GrainIcon className="-rotate-45" size={24} />
                        </div>
                    </div>

                    <div className="text-[#D4AF37]/40 text-xs font-sans uppercase tracking-[0.2em] space-y-2">
                        <p>123 Broadway Blvd, New York, NY 10001</p>
                        <p>© 1925 Gatsby Enterprises. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const GrainIcon = ({ className, size }: { className?: string, size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="19" r="1" />
        <circle cx="12" cy="5" r="1" />
    </svg>
);
