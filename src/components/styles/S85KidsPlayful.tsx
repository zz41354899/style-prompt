import { useState } from 'react';
import { Star, Heart, Cloud, Music, Menu, X, Play } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S85KidsPlayful = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#FFF9C4] font-sans text-[#424242] overflow-x-hidden selection:bg-[#FF5252] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap');
        .font-kids { font-family: 'Nunito', sans-serif; }
        
        .blob-shape {
           border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
           animation: morph 8s ease-in-out infinite;
        }
        @keyframes morph {
           0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
           50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
           100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        
        .bouncy-btn {
           transition: transform 0.2s cubic-bezier(0.3, 2, 0.4, 0.8);
           box-shadow: 0 6px 0 rgba(0,0,0,0.15);
        }
        .bouncy-btn:active {
           transform: translateY(4px);
           box-shadow: 0 2px 0 rgba(0,0,0,0.15);
        }
        .bouncy-btn:hover {
           transform: scale(1.05) translateY(-2px);
        }
      `}</style>

            {/* Navbar */}
            <nav className="fixed w-full z-50 px-6 py-4">
                <div className="max-w-6xl mx-auto bg-white border-4 border-[#448AFF] rounded-full px-6 h-20 flex justify-between items-center shadow-[0_8px_0_rgba(68,138,255,0.3)]">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#FFCA28] rounded-full flex items-center justify-center text-white border-2 border-white shadow-md">
                            <Star size={24} fill="white" />
                        </div>
                        <span className="font-kids font-black text-2xl text-[#448AFF] tracking-tight">Kiddo!</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-6`}>
                        {['Games', 'Stories', 'Learn', 'Parents'].map((item, i) => (
                            <a key={item} href="#" className={`font-kids font-extrabold text-lg hover:scale-110 transition-transform ${['text-[#FF5252]', 'text-[#448AFF]', 'text-[#69F0AE]', 'text-[#E040FB]'][i % 4]
                                }`}>
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="bg-[#FF5252] text-white px-6 py-2 rounded-full font-kids font-black text-lg border-b-4 border-[#D32F2F] active:border-b-0 active:translate-y-1 transition-all">
                            Play Now
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-[#EEE] rounded-full">
                                {menuOpen ? <X size={28} className="text-[#448AFF]" /> : <Menu size={28} className="text-[#448AFF]" />}
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
                                Games
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Stories
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Learn
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Parents
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
                                Games
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Stories
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Learn
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Parents
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
                                Games
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Stories
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Learn
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Parents
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-20 left-[-100px] w-64 h-64 bg-[#69F0AE] blob-shape opacity-50 z-0" />
                <div className="absolute bottom-10 right-[-50px] w-80 h-80 bg-[#448AFF] blob-shape opacity-40 z-0 animation-delay-500" />

                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-12 items-center relative z-10`}>
                    <div>
                        <div className="inline-block px-4 py-2 bg-white rounded-xl border-2 border-[#FFCA28] text-[#FFA000] font-black transform -rotate-2 mb-6 shadow-sm">
                            ★ #1 Learning App
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-7xl'} font-kids font-black text-[#424242] mb-6 leading-none`}>
                            Making <br />
                            <span className="text-[#FF5252] inline-block transform hover:rotate-3 transition-transform cursor-default">Learning</span> <br />
                            <span className="text-[#448AFF] inline-block transform hover:-rotate-3 transition-transform cursor-default">Super Fun!</span>
                        </h1>

                        <p className="font-kids text-xl text-[#616161] font-bold mb-10 max-w-md leading-relaxed">
                            Join millions of kids on an adventure of math, reading, and creativity. Let's grow together!
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#FFCA28] text-white px-8 py-4 rounded-3xl font-kids font-black text-xl bouncy-btn flex items-center gap-3 border-4 border-white ring-4 ring-[#FFCA28]/30">
                                <Play fill="white" size={24} /> Start Adventure
                            </button>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="relative">
                        <div className="bg-white p-8 rounded-[40px] border-8 border-[#E040FB] shadow-[12px_12px_0_rgba(224,64,251,0.2)] transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-[#F3E5F5] rounded-3xl h-64 w-full flex items-center justify-center mb-6 relative overflow-hidden group">
                                <Music size={64} className="text-[#E040FB] animate-bounce" />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-kids font-black text-2xl text-[#E040FB]">Music Class</div>
                                    <div className="font-kids font-bold text-[#9E9E9E]">Level 1 - Rhythm</div>
                                </div>
                                <button className="w-12 h-12 bg-[#E040FB] rounded-full text-white flex items-center justify-center bouncy-btn">
                                    <Play fill="white" size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -top-6 -right-6 bg-[#FF5252] text-white w-20 h-20 rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-bounce delay-700 transform rotate-12 font-black font-kids">
                            New!
                        </div>
                    </div>
                </div>
            </section>

            {/* Cards Grid */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-kids font-black text-center text-[#424242] mb-12">Pick Your World</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                        {[
                            { icon: Cloud, color: '#448AFF', title: 'Sky World', bg: '#E3F2FD' },
                            { icon: Heart, color: '#FF5252', title: 'Love Land', bg: '#FFEBEE' },
                            { icon: Star, color: '#FFCA28', title: 'Star Space', bg: '#FFF8E1' },
                        ].map((item, i) => (
                            <div key={i} className={`p-8 rounded-[32px] border-4 border-transparent hover:border-${item.color} transition-all cursor-pointer transform hover:-translate-y-2`} style={{ backgroundColor: item.bg }}>
                                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm mx-auto">
                                    <item.icon size={40} color={item.color} fill={item.color} className="opacity-80" />
                                </div>
                                <h3 className="text-2xl font-kids font-black text-center mb-2" style={{ color: item.color }}>{item.title}</h3>
                                <p className="text-center font-bold text-gray-500">Explore fun games and collect stickers!</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#448AFF] py-16 text-white font-kids">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="flex justify-center items-center gap-2 mb-8">
                        <Cloud size={32} fill="white" />
                        <span className="font-black text-3xl">Kiddo Inc.</span>
                    </div>
                    <div className={`grid grid-cols-2 ${isMobile ? '' : 'md:grid-cols-4'} gap-4 mb-12 font-bold text-blue-100`}>
                        <a href="#" className="hover:text-white">Safety</a>
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Contact</a>
                        <a href="#" className="hover:text-white">School</a>
                    </div>
                    <p className="opacity-70 text-sm">
                        Made with <Heart size={12} fill="white" className="inline mx-1" /> for happy kids everywhere.
                    </p>
                </div>
            </footer>
        </div>
    );
};
