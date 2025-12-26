import { useState } from 'react';
import { PenTool, Compass, Feather, Menu, X, ArrowRight, User } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S76Renaissance = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Textures
    const paper = "url('https://www.transparenttextures.com/patterns/natural-paper.png')";

    return (
        <div className="min-h-screen bg-[#fff8e1] font-serif text-[#3e2723] overflow-x-hidden relative selection:bg-[#b71c1c] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Sorts+Mill+Goudy:ital@0;1&display=swap');
        .font-cincel { font-family: 'Cinzel', serif; }
        .font-goudy { font-family: 'Sorts Mill Goudy', serif; }
        
        .ink-line {
           border-bottom: 2px solid #5d4037;
           border-radius: 50% 50% 0 0 / 10% 10% 0 0;
        }
        .hatch-shade {
           background-image: repeating-linear-gradient(
             45deg,
             rgba(62, 39, 35, 0.1),
             rgba(62, 39, 35, 0.1) 1px,
             transparent 1px,
             transparent 4px
           );
        }
        .vitruvian-circle {
           border: 2px solid rgba(183, 28, 28, 0.3);
           border-radius: 50%;
        }
        .vitruvian-square {
           border: 2px solid rgba(62, 39, 35, 0.3);
        }
      `}</style>

            {/* Paper Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-60 z-0 bg-repeat bg-[#fff8e1]" style={{ backgroundImage: paper }} />

            {/* Grid Lines */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-10 flex justify-center items-center">
                <div className="w-[80vh] h-[80vh] border border-[#3e2723] rounded-full absolute" />
                <div className="w-[60vh] h-[60vh] border border-[#3e2723] absolute rotate-45" />
                <div className="w-full h-[1px] bg-[#3e2723] absolute top-1/2 left-0" />
                <div className="h-full w-[1px] bg-[#3e2723] absolute top-0 left-1/2" />
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-[#fff8e1]/80 backdrop-blur-sm px-8 py-4 border-b border-[#3e2723]">
                    <div className="flex items-center gap-3">
                        <Feather size={24} className="text-[#b71c1c]" />
                        <span className="font-cincel font-bold text-2xl tracking-widest text-[#3e2723]">HUMANITAS</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-12`}>
                        {['Anatomy', 'Invention', 'Painting', 'Sculpture'].map((item) => (
                            <a key={item} href="#" className="font-cincel font-bold text-[#5d4037] hover:text-[#b71c1c] transition-colors text-xs uppercase tracking-widest hover:underline decoration-[#b71c1c] underline-offset-4">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 border border-[#3e2723] text-[#3e2723] font-cincel text-xs uppercase hover:bg-[#3e2723] hover:text-[#fff8e1] transition-colors">
                            Codex
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
                                Anatomy
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Invention
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Painting
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Sculpture
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center relative">

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-[#b71c1c] mb-4 opacity-50" />

                    <div className="pt-24 mb-6">
                        <span className="font-goudy italic text-[#b71c1c] text-xl">Anno Domini MMXXIV</span>
                    </div>

                    <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-cincel mb-8 text-[#3e2723] leading-tight`}>
                        VIRTÙ <br />
                        <span className={`${isMobile ? 'text-4xl' : 'text-5xl'} block mt-4 font-normal font-goudy italic`}>& Knowledge</span>
                    </h1>

                    <p className="font-goudy text-2xl text-[#5d4037] mb-12 max-w-2xl mx-auto leading-relaxed">
                        "Simplicity is the ultimate sophistication." <br />
                        <span className="text-base not-italic uppercase tracking-widest mt-2 block font-cincel opacity-60">— Leonardo da Vinci</span>
                    </p>

                    <div className="flex justify-center gap-8">
                        <button className="px-10 py-4 bg-transparent border-2 border-[#3e2723] text-[#3e2723] font-cincel font-bold text-lg hover:bg-[#3e2723] hover:text-[#fff8e1] transition-colors flex items-center gap-3 group">
                            Discover <PenTool size={18} className="group-hover:rotate-45 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Sketch Grid */}
            <section className="py-24 px-4 bg-[#fbf5e9] border-t border-b border-[#3e2723] relative">
                <div className="hatch-shade absolute inset-0 opacity-10 pointer-events-none" />

                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-0 border border-[#3e2723] relative z-10 bg-[#fff8e1]`}>
                    {[
                        { icon: User, title: 'Proportion', desc: 'The golden ratio in human form.' },
                        { icon: Compass, title: 'Geometry', desc: 'Mathematics as the language of nature.' },
                        { icon: PenTool, title: 'Technique', desc: 'Sfumato and chiaroscuro mastery.' },
                    ].map((item, i) => (
                        <div key={i} className={`p-12 text-center hover:bg-[#efebe9] transition-colors border-r border-[#3e2723] last:border-r-0 ${i > 0 && isMobile ? 'border-t' : 'border-t md:border-t-0'}`}>
                            <div className="mb-6 inline-block p-4 border rounded-full border-[#b71c1c] opacity-80">
                                <item.icon size={32} className="text-[#3e2723]" />
                            </div>
                            <h3 className="font-cincel text-xl text-[#3e2723] mb-4 font-bold uppercase tracking-wider">{item.title}</h3>
                            <div className="w-8 h-px bg-[#b71c1c] mx-auto mb-4" />
                            <p className="font-goudy text-lg text-[#5d4037] italic">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 text-center relative">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="font-cincel text-2xl text-[#3e2723] mb-8 uppercase tracking-[0.2em] opacity-80">Florence • Milan • Rome</h2>

                    <div className="flex justify-center gap-12 font-cincel text-xs tracking-widest text-[#5d4037] opacity-60">
                        <span>Est. 1452</span>
                        <span>|</span>
                        <span>Architectura</span>
                        <span>|</span>
                        <span>Scientia</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
