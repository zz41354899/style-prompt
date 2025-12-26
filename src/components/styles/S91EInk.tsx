import { useState } from 'react';
import { BookOpen, Menu, X, ArrowRight, Battery, Wifi } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S91EInk = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#F5F5F5] font-serif text-black overflow-x-hidden selection:bg-black selection:text-white relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Roboto+Mono:wght@400;500&display=swap');
        .font-eink { font-family: 'Merriweather', serif; }
        .font-mono-eink { font-family: 'Roboto Mono', monospace; }
        
        .eink-border {
           border: 2px solid black;
        }
        
        .dither-pattern {
           background-image: radial-gradient(#000 1px, transparent 1px);
           background-size: 4px 4px;
           opacity: 0.1;
        }
        
        .screen-flash {
           animation: flash 0.3s steps(1) forwards;
        }
        
        @keyframes flash {
           0% { filter: invert(0); }
           50% { filter: invert(1); }
           100% { filter: invert(0); }
        }
        
        .ink-shadow {
           box-shadow: 4px 4px 0px 0px rgba(0,0,0,0.2);
        }
      `}</style>

            {/* Paper Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/white-paper.png')] z-50 mix-blend-multiply" />

            {/* Status Bar */}
            <div className="bg-white border-b-2 border-black flex justify-between items-center px-6 py-2 font-mono-eink text-xs uppercase sticky top-0 z-40">
                <div className="flex items-center gap-4">
                    <span>LibraryOS 2.0</span>
                    <span className={`${isMobile ? 'hidden' : 'md:inline'}`}>User: Reader_01</span>
                </div>
                <div className="flex items-center gap-4">
                    <Wifi size={16} />
                    <Battery size={16} />
                    <span>12:45 PM</span>
                </div>
            </div>

            {/* Navbar */}
            <nav className="border-b-2 border-black bg-[#F5F5F5]">
                <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <BookOpen size={24} strokeWidth={2.5} />
                        <span className="font-eink font-bold text-2xl tracking-tight">PaperStack</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Books', 'Articles', 'Notes', 'Settings'].map((item) => (
                            <a key={item} href="#" className="font-mono-eink text-sm uppercase hover:underline underline-offset-4 decoration-2">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="border-2 border-black px-4 py-1 font-mono-eink text-xs uppercase hover:bg-black hover:text-white transition-colors">
                            Sync
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
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
                                Books
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Articles
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Notes
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Settings
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Content Area */}
            <main className={`max-w-6xl mx-auto px-6 py-12 grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-12'} gap-12`}>
                {/* Sidebar */}
                <aside className={`${isMobile ? 'col-span-1' : 'md:col-span-3'} font-mono-eink text-sm`}>
                    <div className="mb-8">
                        <h3 className="font-bold border-b-2 border-black pb-2 mb-4 uppercase">Collections</h3>
                        <ul className="space-y-3">
                            <li className="cursor-pointer hover:bg-black hover:text-white px-2 py-1 -mx-2">Recent Reads (4)</li>
                            <li className="cursor-pointer hover:bg-black hover:text-white px-2 py-1 -mx-2 bg-black text-white">Favorites (12)</li>
                            <li className="cursor-pointer hover:bg-black hover:text-white px-2 py-1 -mx-2">To Read (48)</li>
                            <li className="cursor-pointer hover:bg-black hover:text-white px-2 py-1 -mx-2">Archived (156)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold border-b-2 border-black pb-2 mb-4 uppercase">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Fiction', 'Sci-Fi', 'Design', 'History', 'Philosophy'].map(tag => (
                                <span key={tag} className="border border-black px-2 py-0.5 text-xs hover:bg-black hover:text-white cursor-pointer transition-colors">#{tag}</span>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className={`${isMobile ? 'col-span-1' : 'md:col-span-9'}`}>
                    <div className="border-2 border-black p-8 bg-white ink-shadow mb-12">
                        <div className="font-mono-eink text-xs uppercase border-b border-black/20 pb-4 mb-6 flex justify-between">
                            <span>New Arrival</span>
                            <span>Oct 24, 2024</span>
                        </div>
                        <h1 className={`font-eink ${isMobile ? 'text-5xl' : 'text-5xl md:text-6xl'} font-bold mb-6 leading-tight`}>
                            The Digital <br /> Renaissance
                        </h1>
                        <p className="font-eink text-lg leading-relaxed mb-8 max-w-2xl text-justify">
                            As screens become more paper-like, our relationship with digital consumption returns to a state of deliberate focus. We explore how e-ink technology is reshaping the reading habits of the next generation.
                        </p>
                        <button className="flex items-center gap-3 font-mono-eink text-sm uppercase font-bold hover:gap-4 transition-all group">
                            Read Full Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
                        {[
                            { title: "Minimalism in UI", author: "Sarah J.", read: "5 min" },
                            { title: "Typography Rules", author: "Mark T.", read: "8 min" },
                            { title: "Grid Systems", author: "Anna L.", read: "12 min" },
                            { title: "Contrast Theory", author: "David B.", read: "6 min" },
                        ].map((item, i) => (
                            <div key={i} className="border-2 border-black p-6 hover:bg-black hover:text-white transition-colors cursor-pointer group">
                                <h3 className="font-eink font-bold text-xl mb-2">{item.title}</h3>
                                <div className="font-mono-eink text-xs flex justify-between opacity-60 group-hover:opacity-100">
                                    <span>By {item.author}</span>
                                    <span>{item.read} read</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Pagination */}
            <footer className="border-t-2 border-black py-8 bg-white mt-12">
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center font-mono-eink text-sm">
                    <button className="flex items-center gap-2 hover:underline">
                        &larr; Prev
                    </button>
                    <div className="flex gap-2">
                        <span className="font-bold border-b-2 border-black">1</span>
                        <span className="cursor-pointer hover:border-b-2 border-black">2</span>
                        <span className="cursor-pointer hover:border-b-2 border-black">3</span>
                        <span>...</span>
                        <span className="cursor-pointer hover:border-b-2 border-black">12</span>
                    </div>
                    <button className="flex items-center gap-2 hover:underline">
                        Next &rarr;
                    </button>
                </div>
            </footer>
        </div>
    );
};
