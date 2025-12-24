import { useState } from 'react';
import { Trees, Leaf, RefreshCcw, Map, Menu, X, ArrowRight, Mountain } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S56Forest = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Wood Texture & Leaf Pattern
    const woodPattern = "url('https://www.transparenttextures.com/patterns/wood-pattern.png')";
    const leafShadows = "url('https://www.transparenttextures.com/patterns/shattered-island.png')";

    return (
        <div className="min-h-screen bg-[#1a2f1c] font-sans text-[#e8f5e9] overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400&family=Nunito:wght@400;700&display=swap');
        .font-serif { font-family: 'Crimson Text', serif; }
        .font-sans { font-family: 'Nunito', sans-serif; }
        
        .text-shadow-sm { text-shadow: 1px 1px 2px rgba(0,0,0,0.5); }
      `}</style>

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 mix-blend-overlay" style={{ backgroundImage: woodPattern }} />

            {/* Sunbeams (CSS Gradient) */}
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-yellow-100/10 via-transparent to-transparent pointer-events-none z-10 blur-3xl transform rotate-12" />

            {/* Floating Leaves (Simulated with simple particles for now) */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-20 left-10 text-green-400/20 text-4xl animate-[spin_10s_linear_infinite]">🍂</div>
                <div className="absolute bottom-40 right-20 text-green-300/20 text-6xl animate-[bounce_8s_infinite]">🍃</div>
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-[#2e4c31]/90 backdrop-blur-md px-8 py-4 rounded-2xl shadow-lg border border-[#4caf50]/30">
                    <div className="flex items-center gap-3">
                        <div className="text-[#81c784]">
                            <Trees size={28} />
                        </div>
                        <span className="font-serif text-2xl font-bold tracking-wide text-white">Wildwood</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-10`}>
                        {['Cabins', 'Trails', 'Wildlife', 'Guide'].map((item) => (
                            <a key={item} href="#" className="font-sans font-bold text-[#a5d6a7] hover:text-white transition-colors text-sm uppercase tracking-widest">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#4caf50] hover:bg-[#43a047] text-white font-sans font-bold rounded-lg transition-colors shadow-md flex items-center gap-2">
                            Book Stay <ArrowRight size={16} />
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
                                Cabins
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Trails
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Wildlife
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Guide
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
                                Cabins
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Trails
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Wildlife
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Guide
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
                                Cabins
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Trails
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Wildlife
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Guide
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-5xl mx-auto text-center">

                    <div className="mb-6 flex justify-center">
                        <span className="px-4 py-1 bg-[#4caf50]/20 text-[#81c784] rounded-full border border-[#4caf50]/30 font-sans text-xs uppercase tracking-widest">
                            Disconnect to Reconnect
                        </span>
                    </div>

                    <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-serif font-bold mb-8 leading-tight text-white text-shadow-sm`}>
                        Breathe in the <br />
                        <span className="text-[#69f0ae] italic">Ancient Forest</span>
                    </h1>

                    <p className="font-sans text-xl text-[#c8e6c9] mb-12 max-w-2xl mx-auto leading-relaxed">
                        Immerse yourself in nature's embrace. Find silence among the giants and let the wilderness heal your soul.
                    </p>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6 max-w-4xl mx-auto mt-16`}>
                        {[
                            { title: 'The Lodge', img: 'https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=600&auto=format&fit=crop' },
                            { title: 'The Lake', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop' },
                            { title: 'The Peak', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop' },
                        ].map((card, i) => (
                            <div key={i} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-xl">
                                <img src={card.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-left">
                                    <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:translate-x-2 transition-transform">{card.title}</h3>
                                    <div className="w-8 h-1 bg-[#4caf50] rounded-full group-hover:w-16 transition-all duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Section with Organic Shapes */}
            <section className="py-24 px-4 bg-[#1e3820] relative overflow-hidden">
                {/* Foliage Shadows */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: leafShadows }} />

                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-16 items-center relative z-10`}>
                    <div>
                        <h2 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-serif font-bold mb-6 text-[#a5d6a7]`}>Rooted in Sustainability</h2>
                        <div className="space-y-8">
                            {[
                                { icon: Leaf, title: 'Eco-Friendly Architecture', desc: 'Cabins built from reclaimed timber and local stone, minimizing our carbon footprint.' },
                                { icon: RefreshCcw, title: 'Renewable Energy', desc: 'Powered entirely by solar and hydroelectric sources from the surrounding valley.' },
                                { icon: Mountain, title: 'Conservation', desc: 'A portion of every booking goes directly to preserving the ancient woodlands.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="bg-[#2e4c31] p-4 rounded-full h-fit shadow-inner">
                                        <item.icon className="text-[#69f0ae]" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-sans text-white mb-2">{item.title}</h3>
                                        <p className="text-[#c8e6c9] leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-full h-full bg-[#4caf50] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] opacity-20 animate-[pulse_5s_infinite]" />
                        <img
                            src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=800&auto=format&fit=crop"
                            className="relative rounded-[70%_30%_30%_70%_/_70%_70%_30%_30%] shadow-2xl border-4 border-[#2e4c31]"
                        />
                    </div>
                </div>
            </section>

            {/* Map/Footer Section */}
            <footer className="bg-[#142315] pt-20 pb-10 border-t border-[#2e4c31]">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <Map size={40} className="mx-auto text-[#4caf50] mb-6 opacity-80" />
                    <h2 className="text-3xl font-serif text-white mb-8">Find Your Way Home</h2>
                    <div className="font-sans text-[#81c784] text-sm tracking-widest space-y-2 mb-12">
                        <p>44.2312° N, 120.4566° W</p>
                        <p>CASCADE MOUNTAIN RANGE, OREGON</p>
                    </div>

                    <div className="flex justify-center gap-8 text-[#a5d6a7] text-sm opacity-60">
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-white">Email</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
