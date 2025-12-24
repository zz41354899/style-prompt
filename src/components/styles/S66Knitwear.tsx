import { useState } from 'react';
import { Heart, Coffee, Cloud, Menu, X, ArrowRight, Sun } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S66Knitwear = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Knit Texture
    const knit = "url('https://www.transparenttextures.com/patterns/knitted-netting.png')";

    return (
        <div className="min-h-screen bg-[#fff9c4] font-sans text-[#795548] overflow-x-hidden relative selection:bg-[#ffab91] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&family=Nunito:wght@400;600;800&display=swap');
        .font-cozy { font-family: 'Comfortaa', cursive; }
        .font-body { font-family: 'Nunito', sans-serif; }
        
        .knit-texture {
           background-color: #ffffff;
           background-image: ${knit};
           background-blend-mode: multiply;
        }
        .soft-card {
           border-radius: 30px;
           box-shadow: 8px 8px 20px rgba(121, 85, 72, 0.1), -8px -8px 20px rgba(255, 255, 255, 0.8);
           border: 4px solid white;
        }
        .stitch-edge {
           position: relative;
        }
        .stitch-edge::before {
           content: '';
           position: absolute;
           top: 6px; left: 6px; right: 6px; bottom: 6px;
           border: 2px dashed #ffcc80;
           border-radius: 20px;
           pointer-events: none;
        }
        .fuzzy-text {
           text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
      `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-repeat" style={{ backgroundImage: knit }} />

            {/* Soft Blobs */}
            <div className="fixed top-20 right-20 w-64 h-64 bg-[#ffecb3] rounded-full filter blur-3xl opacity-60 z-0" />
            <div className="fixed bottom-20 left-20 w-80 h-80 bg-[#ffccbc] rounded-full filter blur-3xl opacity-60 z-0" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-sm px-8 py-4 rounded-[40px] shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#ffab91] p-2 rounded-full text-white">
                            <Heart size={24} fill="currentColor" />
                        </div>
                        <span className="font-cozy font-bold text-2xl text-[#6d4c41]">Hygge</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-10`}>
                        {['Patterns', 'Yarn', 'Workshops', 'Community'].map((item) => (
                            <a key={item} href="#" className="font-body font-bold text-[#8d6e63] hover:text-[#ff7043] transition-colors text-lg">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#dce775] text-[#5d4037] font-body font-extrabold rounded-full hover:bg-[#cddc39] transition-transform hover:scale-105 shadow-sm">
                            Join Club
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={28} className="text-[#6d4c41]" /> : <Menu size={28} className="text-[#6d4c41]" />}
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
                                Patterns
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Yarn
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Workshops
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Community
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
                                Patterns
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Yarn
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Workshops
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Community
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
                                Patterns
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Yarn
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Workshops
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Community
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className={`max-w-5xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-16 items-center`}>

                    <div className={`${isMobile ? 'text-center' : 'text-left'}`}>
                        <div className="inline-block px-4 py-2 bg-[#ffe0b2] text-[#e65100] font-body font-bold rounded-full text-sm mb-6 animate-bounce">
                            🍂 Autumn Collection is here!
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-cozy font-bold text-[#5d4037] mb-8 leading-tight fuzzy-text`}>
                            Cozy up <br />
                            <span className="text-[#ffab91]">Your Life</span>
                        </h1>

                        <p className="font-body text-xl text-[#8d6e63] mb-10 leading-relaxed">
                            Discover the joy of handmade warmth. Soft wools, gentle colors, and patterns that feel like a hug.
                        </p>

                        <div className={`flex gap-4 justify-center ${isMobile ? '' : 'md:justify-start'}`}>
                            <button className="px-8 py-4 bg-[#ff7043] text-white font-cozy font-bold text-xl rounded-full shadow-[0_10px_20px_rgba(255,112,67,0.3)] hover:-translate-y-1 transition-all">
                                Start Knitting
                            </button>
                            <button className="w-14 h-14 bg-white text-[#ff7043] rounded-full shadow-md flex items-center justify-center hover:bg-[#ffebee] transition-colors">
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Knit Card Image */}
                    <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute top-4 left-4 w-full h-full bg-[#d7ccc8] rounded-[40px] -z-10" />
                        <div className="knit-texture p-4 rounded-[40px] shadow-xl stitch-edge bg-[#ffccbc]">
                            <img
                                src="https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=800&auto=format&fit=crop"
                                className="w-full h-96 object-cover rounded-[30px] mb-6"
                            />
                            <div className="flex justify-between items-center px-4 mb-2">
                                <div>
                                    <h3 className="font-cozy font-bold text-2xl text-[#5d4037]">Chunky Scarf</h3>
                                    <p className="text-[#8d6e63] font-body">Beginner Level • 3 Hours</p>
                                </div>
                                <div className="bg-[#fff9c4] p-3 rounded-full text-[#fbc02d]">
                                    <Sun size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cozy Features */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center font-cozy font-bold text-4xl text-[#5d4037] mb-16">Why We Love Knitting</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                        {[
                            { icon: Heart, title: 'Made with Love', desc: 'Every stitch tells a story of care and patience.', color: 'text-[#ef5350]' },
                            { icon: Cloud, title: 'Softest Materials', desc: 'Ethically sourced Merino wool and organic cotton.', color: 'text-[#42a5f5]' },
                            { icon: Coffee, title: 'Relaxing Hobby', desc: 'Mindfulness in motion. Perfect for rainy days.', color: 'text-[#795548]' },
                        ].map((item, i) => (
                            <div key={i} className="soft-card p-10 text-center hover:bg-white transition-colors bg-[#fffde7]">
                                <item.icon size={48} className={`mx-auto mb-6 ${item.color}`} />
                                <h3 className="font-cozy text-2xl font-bold mb-4 text-[#5d4037]">{item.title}</h3>
                                <p className="font-body text-[#8d6e63] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 bg-[#ffecb3] mt-12 rounded-t-[60px] relative">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <div className="mb-8 font-cozy font-bold text-3xl text-[#6d4c41]">Stay Warm & Cozy</div>

                    <div className="flex justify-center gap-4 mb-12">
                        <input type="email" placeholder="Your email address" className="px-6 py-3 rounded-full border-none outline-none font-body w-64 shadow-inner bg-white/50 focus:bg-white transition-colors text-[#5d4037]" />
                        <button className="px-8 py-3 bg-[#8d6e63] text-white font-bold rounded-full hover:bg-[#6d4c41] transition-colors shadow-lg">
                            Subscribe
                        </button>
                    </div>

                    <div className="flex gap-8 justify-center font-body font-bold text-[#8d6e63] text-sm">
                        <a href="#" className="hover:text-[#5d4037]">Shop</a>
                        <a href="#" className="hover:text-[#5d4037]">Blog</a>
                        <a href="#" className="hover:text-[#5d4037]">Contact</a>
                    </div>

                    <div className="mt-8 text-[#a1887f] text-xs">
                        &copy; 2024 Hygge Knits. Wrapped with warmth.
                    </div>
                </div>
            </footer>
        </div>
    );
};
