import { useState } from 'react';
import { Camera, Image, Smile, Edit3, Menu, X, ArrowRight, Grid, User } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S41Polaroid = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Background pattern (corkboard or table surface)
    const bgPattern = `
    radial-gradient(#d4d4d8 1px, transparent 0)
  `;
    const bgSize = "20px 20px";

    return (
        <div
            className="min-h-screen bg-[#f3f4f6] font-sans selection:bg-yellow-200 selection:text-black overflow-x-hidden relative pb-32"
            style={{ backgroundImage: bgPattern, backgroundSize: bgSize }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Shadows+Into+Light&display=swap');
        .font-marker { font-family: 'Permanent Marker', cursive; }
        .font-hand { font-family: 'Shadows Into Light', cursive; }
      `}</style>

            {/* Navbar (Washi Tape Style) */}
            <nav className="fixed top-0 w-full z-50 p-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-white shadow-md p-4 transform rotate-1 relative">
                    {/* Tape Effect */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 rotate-2 backdrop-blur-sm shadow-sm" />

                    <div className="flex items-center gap-2">
                        <Camera size={28} className="text-gray-800" />
                        <span className="font-marker text-2xl text-gray-900">Insta.Memory</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Gallery', 'Albums', 'Prints', 'Community'].map((item) => (
                            <a key={item} href="#" className="font-hand text-xl font-bold text-gray-600 hover:text-black hover:underline decoration-2 underline-offset-4 decoration-yellow-400">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden bg-gray-200">
                            <User className="w-full h-full p-2 text-gray-400" />
                        </div>
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
                                Gallery
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Albums
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Prints
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
                                Gallery
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Albums
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Prints
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
                                Gallery
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Albums
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Prints
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
            <section className="pt-40 pb-20 px-4 min-h-[90vh] flex items-center justify-center relative z-10">
                <div className={`max-w-6xl w-full grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-12 items-center`}>

                    <div className={`space-y-8 ${isMobile ? 'order-2' : 'order-1'} ${isMobile ? 'text-center' : 'text-left'}`}>
                        <div className="inline-block bg-white px-4 py-2 shadow-sm transform -rotate-2">
                            <span className="font-marker text-pink-500 text-xl">#CaptureTheMoment</span>
                        </div>

                        <h1 className={`${isMobile ? 'text-5xl' : 'text-7xl'} font-bold text-gray-900 leading-tight`}>
                            Turn Pixels Into <br />
                            <span className="relative inline-block">
                                <span className="relative z-10">Memories</span>
                                <svg className="absolute w-full h-4 -bottom-1 left-0 text-yellow-300 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                                </svg>
                            </span>
                        </h1>

                        <p className="font-hand text-2xl text-gray-600 max-w-lg leading-relaxed">
                            A digital space that feels as tangible as a photo in your hand. Drag, drop, stack, and annotate your life.
                        </p>

                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 pt-4 justify-center ${isMobile ? '' : 'justify-start'}`}>
                            <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-sm shadow-[4px_4px_0_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
                                <Camera size={20} /> Start Snapping
                            </button>
                            <button className="px-8 py-4 bg-white text-gray-900 font-bold border-2 border-gray-900 rounded-sm shadow-[4px_4px_0_rgba(255,255,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                                View Gallery
                            </button>
                        </div>
                    </div>

                    {/* Photo Stack (Hero Image) */}
                    <div className={`relative h-[500px] w-full ${isMobile ? 'order-1' : 'order-2'} perspective-1000`}>
                        {/* Photo 1 (Back) */}
                        <div className={`absolute top-10 left-10 ${isMobile ? 'w-64' : 'w-80'} bg-white p-3 pb-12 shadow-xl transform -rotate-12 hover:-rotate-12 transition-transform z-10`}>
                            <div className="aspect-square bg-gray-100 overflow-hidden grayscale">
                                <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </div>
                            <div className="font-hand text-center mt-3 text-xl text-gray-500">Nature Walk '23</div>
                        </div>

                        {/* Photo 2 (Middle) */}
                        <div className={`absolute top-20 right-10 ${isMobile ? 'w-64' : 'w-80'} bg-white p-3 pb-12 shadow-xl transform rotate-6 hover:rotate-6 transition-transform z-20`}>
                            <div className="aspect-square bg-gray-100 overflow-hidden sepia">
                                <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </div>
                            <div className="font-hand text-center mt-3 text-xl text-gray-500">Coffee Break ☕</div>
                        </div>

                        {/* Photo 3 (Front - Focus) */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-72' : 'w-96'} bg-white p-4 pb-16 shadow-2xl transform -rotate-3 hover:scale-105 hover:rotate-0 transition-all duration-300 cursor-pointer z-30`}>
                            <div className="aspect-square bg-gray-900 overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="font-marker text-center mt-4 text-2xl rotate-1">Best Day Ever! <Smile className="inline text-yellow-500 ml-1" /></div>

                            {/* Sticker */}
                            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold rounded-full w-16 h-16 flex items-center justify-center transform rotate-12 shadow-md border-2 border-white text-xs">
                                NEW
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Gallery */}
            <section className="py-20 px-4 bg-white/50 backdrop-blur-sm border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-2">Developed Originals</h2>
                            <p className="font-hand text-xl text-gray-500">Fresh from the darkroom.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-900"><Grid /></button>
                            <button className="p-2 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-900"><Image /></button>
                        </div>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-4'} gap-8 gap-y-16`}>
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="group relative">
                                <div className={`bg-white p-3 pb-12 shadow-lg transition-transform duration-300 hover:z-10 hover:scale-105 ${i % 2 === 0 ? 'rotate-2' : '-rotate-1'}`}>
                                    <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-2 relative">
                                        <img
                                            src={`https://source.unsplash.com/random/400x500?portrait,lifestyle&sig=${i}`}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Light leak effect overlay (CSS gradient) */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-blue-500/10 mix-blend-screen pointer-events-none" />
                                    </div>
                                    <div className="font-hand text-center text-lg text-gray-700 min-h-[1.5em] flex items-center justify-center gap-2">
                                        <span>Untitled_{i}</span>
                                        <Edit3 size={14} className="opacity-0 group-hover:opacity-50 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="py-24 text-center">
                <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-marker mb-8 transform -rotate-1 text-gray-800`}>
                    Ready to frame your world?
                </h2>
                <button className="px-10 py-5 bg-yellow-400 text-black font-bold text-xl rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    Get Started for Free
                </button>
            </section>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full py-8 text-center text-gray-400 text-sm font-sans bg-[#f3f4f6]">
                <p>© 2024 Polaroid UI. Not affiliated with Polaroid Corporation.</p>
            </footer>
        </div>
    );
};
