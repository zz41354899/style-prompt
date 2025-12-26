import { useState } from 'react';
import { Palette, Sun, Cloud, Menu, X, ArrowRight, Brush } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S73Impressionist = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Textures
    const canvas = "url('https://www.transparenttextures.com/patterns/canvas-organic.png')";

    return (
        <div className="min-h-screen bg-[#e1f5fe] font-serif text-[#455a64] overflow-x-hidden relative selection:bg-[#fff59d] selection:text-[#5d4037]">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        .font-paint { font-family: 'Dancing Script', cursive; }
        .font-body { font-family: 'Lora', serif; }
        
        .paint-dab {
           filter: blur(1px) contrast(1.2);
           box-shadow: 4px 4px 0 rgba(0,0,0,0.05);
           border-radius: 60% 40% 50% 50% / 40% 50% 60% 50%;
        }
        .brush-stroke {
           position: relative;
        }
        .brush-stroke::before {
           content: '';
           position: absolute;
           z-index: -1;
           left: -10px; right: -10px; top: 10px; bottom: 0;
           background: #81d4fa;
           opacity: 0.5;
           transform: rotate(-2deg);
           border-radius: 20px 5px 25px 5px;
           mix-blend-mode: multiply;
        }
        .text-shimmer {
           background: linear-gradient(90deg, #0288d1, #81d4fa, #0288d1);
           background-size: 200% auto;
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
           animation: shimmer 5s linear infinite;
        }
        @keyframes shimmer {
           to { background-position: 200% center; }
        }
      `}</style>

            {/* Canvas Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-50 z-0 bg-repeat bg-[#e1f5fe]" style={{ backgroundImage: canvas }} />

            {/* Background Blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#b3e5fc] rounded-full blur-[80px] opacity-60 mix-blend-multiply" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#f8bbd0] rounded-full blur-[80px] opacity-60 mix-blend-multiply" />
                <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-[#fff9c4] rounded-full blur-[60px] opacity-60 mix-blend-multiply" />
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/60 backdrop-blur-md px-8 py-4 rounded-full shadow-sm border border-white/40">
                    <div className="flex items-center gap-3">
                        <Palette size={28} className="text-[#0288d1]" />
                        <span className="font-paint font-bold text-3xl text-[#0277bd]">Lumière</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Gallery', 'Artists', 'Technique', 'Exhibitions'].map((item) => (
                            <a key={item} href="#" className="font-body italic text-[#546e7a] hover:text-[#0277bd] transition-colors text-lg">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#81d4fa] text-white font-body font-bold text-sm rounded-full hover:bg-[#4fc3f7] transition-colors shadow-[4px_4px_10px_rgba(2,136,209,0.3)]">
                            Visit Gallery
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#546e7a]" /> : <Menu size={24} className="text-[#546e7a]" />}
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
                                Technique
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Exhibitions
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center">

                    <h1 className={`${isMobile ? 'text-7xl' : 'text-9xl'} font-paint mb-8 text-[#01579b] drop-shadow-sm leading-tight`}>
                        Capturing the <br />
                        <span className="brush-stroke px-4">Moment</span>
                    </h1>

                    <p className="font-body text-xl text-[#455a64] mb-12 max-w-2xl mx-auto leading-relaxed">
                        More than reality, we paint the perception of light, color, and emotion in a fleeting instant.
                    </p>

                    <div className="flex justify-center gap-8">
                        <div className="relative group cursor-pointer">
                            <div className="absolute inset-0 bg-[#fff59d] rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
                            <button className="relative px-10 py-4 bg-white/80 text-[#0277bd] font-body text-xl rounded-full border border-white hover:scale-105 transition-transform flex items-center gap-3 backdrop-blur-sm shadow-lg">
                                Explore Collection <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Decorative Paint Splatters */}
                    <div className="absolute top-1/3 left-10 w-4 h-4 rounded-full bg-[#f48fb1] opacity-60" />
                    <div className="absolute top-1/4 right-20 w-8 h-8 rounded-full bg-[#81d4fa] opacity-60 mix-blend-multiply" />
                    <div className="absolute bottom-1/4 left-1/4 w-6 h-6 rounded-full bg-[#fff59d] opacity-80 mix-blend-multiply" />
                </div>
            </section>

            {/* Mosaic/Grid Section */}
            <section className="py-24 px-4 bg-white/40 backdrop-blur-sm border-t border-white/50">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                    {[
                        { icon: Sun, title: 'Light', desc: 'The interplay of sun and shadow to create depth.' },
                        { icon: Brush, title: 'Stroke', desc: 'Visible, short, thick strokes of paint to capture essence.' },
                        { icon: Cloud, title: 'Atmosphere', desc: 'Blurring the lines between subject and background.' },
                    ].map((item, i) => (
                        <div key={i} className="bg-[#ffffff]/60 p-10 rounded-[30px] border border-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500 paint-dab">
                            <div className="w-16 h-16 bg-[#e1f5fe] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner text-[#0288d1]">
                                <item.icon size={32} />
                            </div>
                            <h3 className="font-paint text-4xl text-[#0277bd] mb-4 text-center">{item.title}</h3>
                            <p className="font-body text-center text-[#546e7a] leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#e1f5fe] to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="font-paint text-4xl text-[#01579b] mb-8">Art is Eternity</h2>

                    <div className="flex justify-center gap-12 font-body italic text-[#0277bd] mb-8">
                        <a href="#" className="hover:text-[#01579b] transition-colors">Masterpieces</a>
                        <a href="#" className="hover:text-[#01579b] transition-colors">Museum</a>
                        <a href="#" className="hover:text-[#01579b] transition-colors">Donate</a>
                    </div>

                    <div className="text-xs text-[#90a4ae]">
                        &copy; 1874 Impressionist Society. Paris.
                    </div>
                </div>
            </footer>
        </div>
    );
};
