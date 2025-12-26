import { useState } from 'react';
import { SprayCan, Zap, Skull, Crown, Menu, X, ArrowRight, Eye } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S53Graffiti = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Brick Wall Texture
    const wall = "url('https://www.transparenttextures.com/patterns/dark-brick-wall.png')";

    return (
        <div className="min-h-screen bg-[#1a1a1a] font-sans text-white overflow-x-hidden relative selection:bg-[#39FF14] selection:text-black">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Permanent+Marker&family=Rubik+Glitch&display=swap');
        .font-tag { font-family: 'Creepster', cursive; }
        .font-marker { font-family: 'Permanent Marker', cursive; }
        .font-glitch { font-family: 'Rubik Glitch', cursive; }
        
        .text-glow {
           text-shadow: 0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14;
        }
        .text-glow-pink {
           text-shadow: 0 0 10px #FF00FF, 0 0 20px #FF00FF;
        }
        .text-glow-cyan {
           text-shadow: 0 0 10px #00FFFF, 0 0 20px #00FFFF;
        }
        .spray-drip {
           background-image: linear-gradient(to bottom, #39FF14 50%, transparent 50%);
           background-size: 10px 10px;
        }
      `}</style>

            {/* Background Wall */}
            <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-repeat" style={{ backgroundImage: wall }} />

            {/* City Overlay */}
            <div className="fixed bottom-0 left-0 right-0 h-32 bg-[url('https://cdn.pixabay.com/photo/2016/11/22/21/57/skyline-1850918_1280.png')] bg-contain bg-bottom bg-no-repeat opacity-20 pointer-events-none z-0" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6 bg-black/80 backdrop-blur-md border-b border-[#333]">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <SprayCan size={28} className="text-[#39FF14]" />
                        <span className="font-tag text-3xl tracking-widest text-[#39FF14] text-glow">STREET.OS</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Wall', 'Crew', 'Drops', 'Police'].map((item, i) => (
                            <a key={item} href="#" className={`font-marker text-xl uppercase tracking-widest hover:scale-110 transition-transform ${i === 3 ? 'text-red-500' : 'text-white'}`}>
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="px-6 py-2 bg-[#FF00FF] hover:bg-[#D900D9] text-black font-marker text-lg skew-x-[-12deg] shadow-[4px_4px_0_#00FFFF] hover:shadow-[2px_2px_0_#00FFFF] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                            <span className="skew-x-[12deg] inline-block">TAG IT</span>
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={28} className="text-[#FF00FF]" /> : <Menu size={28} className="text-[#FF00FF]" />}
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
                                Wall
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Crew
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Drops
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Police
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-16 items-center`}>

                    <div className="relative">
                        {/* Spray Paint Splatters */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#39FF14] rounded-full blur-[60px] opacity-20 animate-pulse" />
                        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#FF00FF] rounded-full blur-[60px] opacity-20 animate-pulse animation-delay-1000" />

                        <h1 className={`${isMobile ? 'text-7xl' : 'text-9xl'} font-glitch leading-none mb-6 relative z-10`}>
                            <span className="block text-white">UNDER</span>
                            <span className="block text-[#00FFFF] text-glow-cyan ml-10">GROUND</span>
                            <span className="block text-[#FF00FF] text-glow-pink ml-20">DESIGN</span>
                        </h1>

                        <p className="font-marker text-2xl text-gray-400 mb-10 max-w-lg transform -rotate-1">
                            The streets are talking. Break the rules. Spray your code on the digital wall.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <button className="px-8 py-4 bg-transparent border-4 border-[#39FF14] text-[#39FF14] font-tag text-2xl tracking-widest hover:bg-[#39FF14] hover:text-black transition-colors shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                                START BOMBING
                            </button>
                        </div>
                    </div>

                    {/* Graffiti Wall Illustration */}
                    <div className="relative h-[500px] w-full flex items-center justify-center bg-black/50 border-4 border-[#333] p-4 transform rotate-2">
                        {/* Background Wall Area */}
                        <div className="absolute inset-0 bg-[#222]" style={{ backgroundImage: wall }} />

                        {/* Grafitti Art */}
                        <div className="relative z-10 font-tag text-8xl text-center transform -rotate-6">
                            <span className="text-[#FFFF00] drop-shadow-[4px_4px_0_#FF0000]" style={{ WebkitTextStroke: '2px black' }}>KING</span> <br />
                            <span className="text-white drop-shadow-[4px_4px_0_#0000FF]" style={{ WebkitTextStroke: '2px black' }}>OF</span> <br />
                            <span className="text-[#39FF14] drop-shadow-[4px_4px_0_#000]" style={{ WebkitTextStroke: '2px black' }}>STYLE</span>
                        </div>

                        {/* Drips */}
                        <div className="absolute top-[45%] left-[20%] w-1 h-32 bg-[#FFFF00] opacity-80 rounded-full" />
                        <div className="absolute top-[60%] right-[30%] w-1 h-40 bg-[#39FF14] opacity-80 rounded-full" />

                        {/* Crown Icon */}
                        <Crown size={64} className="absolute -top-8 -right-8 text-[#FFD700] transform rotate-12 drop-shadow-[0_0_10px_gold]" />
                    </div>
                </div>
            </section>

            {/* Crew Section */}
            <section className="py-24 px-4 bg-[#111] relative z-10 border-t border-[#333]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-6xl font-tag text-center mb-20 text-white"><span className="text-[#FF00FF] text-glow-pink">CREW</span> MEMBERS</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                        {[
                            { icon: Zap, title: 'Sparky', role: 'Coder', color: 'text-[#FFFF00]' },
                            { icon: Skull, title: 'Ghost', role: 'Designer', color: 'text-white' },
                            { icon: Eye, title: 'Watcher', role: 'QA', color: 'text-[#00FFFF]' },
                        ].map((item, i) => (
                            <div key={i} className="bg-[#222] p-8 border-2 border-[#444] relative group hover:border-[#39FF14] transition-colors">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className={`w-20 h-20 mx-auto ${item.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon size={80} />
                                </div>
                                <h3 className={`text-4xl font-marker text-center mb-2 ${item.color} drop-shadow-md`}>{item.title}</h3>
                                <p className="text-center font-mono text-gray-500 uppercase tracking-widest">{item.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Marquee Strip */}
            <div className="bg-[#39FF14] py-4 overflow-hidden transform -rotate-1 border-y-4 border-black">
                <div className="flex gap-12 font-marker text-3xl text-black whitespace-nowrap animate-marquee">
                    <span>DONT GET CAUGHT</span>
                    <span>★</span>
                    <span>PAINT THE TOWN</span>
                    <span>★</span>
                    <span>CODE IS ART</span>
                    <span>★</span>
                    <span>DONT GET CAUGHT</span>
                    <span>★</span>
                    <span>PAINT THE TOWN</span>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-20 px-4 text-center">
                <div className="font-tag text-4xl text-gray-600 mb-8 opacity-50 hover:opacity-100 transition-opacity cursor-default">
                    EST. 1984
                </div>
                <div className="flex justify-center gap-8 font-marker text-xl text-gray-500">
                    <a href="#" className="hover:text-[#39FF14] hover:text-glow transition-all">Instagram</a>
                    <a href="#" className="hover:text-[#FF00FF] hover:text-glow-pink transition-all">TikTok</a>
                    <a href="#" className="hover:text-[#00FFFF] hover:text-glow-cyan transition-all">Discord</a>
                </div>
            </footer>
        </div>
    );
};
