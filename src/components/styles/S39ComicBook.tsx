import { useState } from 'react';
import { Zap, MessageCircle, Star, BoomBox, Menu, X, ArrowRight, Shield, Rocket } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S39ComicBook = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Halftone pattern CSS
    const halftone = `
    radial-gradient(circle, #000 10%, transparent 11%),
    radial-gradient(circle, #000 10%, transparent 11%)
  `;
    const halftoneSize = "10px 10px";
    const halftonePos = "0 0, 5px 5px";

    return (
        <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-yellow-400 selection:text-black relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&display=swap');
        .font-comic { font-family: 'Bangers', cursive; }
        .font-bubble { font-family: 'Comic Neue', cursive; }
      `}</style>

            {/* Background Dot Pattern */}
            <div
                className="fixed inset-0 opacity-10 pointer-events-none z-0"
                style={{ backgroundImage: halftone, backgroundSize: halftoneSize, backgroundPosition: halftonePos }}
            />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-4">
                <div className="max-w-7xl mx-auto bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_#000] px-6 py-3 flex justify-between items-center transform -skew-x-2">
                    <div className="flex items-center gap-3 transform skew-x-2">
                        <div className="bg-red-500 text-white p-2 border-2 border-black rounded-full">
                            <Zap size={24} className="fill-yellow-300 stroke-black stroke-2" />
                        </div>
                        <span className="text-3xl font-comic tracking-wider text-black drop-shadow-[2px_2px_0_#fff]">HERO.UI</span>
                    </div>

                    <div className={`${isMobile ? 'hidden' : 'flex'} transform skew-x-2 items-center gap-8`}>
                        {['Origins', 'Powers', 'Allies', 'Villains'].map((item) => (
                            <a key={item} href="#" className="font-comic text-xl text-black hover:text-red-500 transition-colors uppercase tracking-wide stroke-black hover:scale-110 transform duration-200">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 transform skew-x-2">
                        <button className="px-6 py-2 bg-blue-500 text-white font-comic text-xl border-2 border-black shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all">
                            Join!
                        </button>
                        {responsive.nav.showMobile && (
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="bg-white border-2 border-black p-1 hover:bg-gray-100 shadow-[2px_2px_0_#000]"
                            >
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
                                Home
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
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

            {/* Hero Section (Panel Layout) */}
            <section className="pt-32 pb-20 px-4 relative z-10">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-8 items-center`}>
                    <div className="relative">
                        {/* Speech Bubble */}
                        <div className="absolute -top-20 -right-10 w-64 h-48 bg-white border-4 border-black rounded-[50%] flex items-center justify-center p-6 text-center z-20 animate-bounce shadow-[8px_8px_0_rgba(0,0,0,0.2)]">
                            <p className="font-bubble font-bold text-xl leading-tight">
                                "With Great Design Comes Great Functionality!"
                            </p>
                            {/* Bubble tail */}
                            <div className="absolute bottom-0 left-10 w-8 h-8 bg-white border-r-4 border-b-4 border-black transform rotate-45 translate-y-4" />
                            <div className="absolute bottom-2 left-10 w-10 h-6 bg-white transform rotate-6" /> {/* Hide tail border overlap */}
                        </div>

                        <div className="bg-red-500 border-4 border-black p-8 shadow-[12px_12px_0_#000] transform rotate-1 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')] opacity-30" />
                            <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-comic text-white drop-shadow-[4px_4px_0_#000] leading-none mb-6 relative z-10`}>
                                UNLEASH <br /> <span className="text-yellow-300">YOUR</span> <br /> POWER!
                            </h1>
                            <p className="font-bubble text-xl font-bold bg-white border-2 border-black p-4 inline-block mb-8 relative z-10 shadow-[4px_4px_0_rgba(0,0,0,0.1)] transform -rotate-2 text-black">
                                The ultimate toolkit for creating impactful, dynamic, and heroic web experiences.
                            </p>

                            <div className="flex gap-4 relative z-10">
                                <button className="px-8 py-4 bg-yellow-400 text-black font-comic text-2xl border-4 border-black shadow-[6px_6px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#000] transition-all flex items-center gap-2">
                                    SMASH THAT BUTTON! <Zap size={24} className="fill-white" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Visual Panel */}
                    <div className={`relative ${isMobile ? 'h-96' : 'h-[500px]'} border-4 border-black bg-blue-400 shadow-[12px_12px_0_#000] overflow-hidden group`}>
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-blue-500/30 mix-blend-screen" />

                        {/* Boom Effect */}
                        <div className="absolute -bottom-10 -right-10 text-9xl font-comic text-yellow-400 drop-shadow-[4px_4px_0_#000] transform -rotate-12 group-hover:scale-125 transition-transform duration-200">
                            POW!
                        </div>

                        {/* Panel Caption */}
                        <div className="absolute top-0 left-0 bg-yellow-300 border-r-4 border-b-4 border-black px-4 py-2 font-comic text-xl">
                            MEANWHILE...
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Strip */}
            <section className="py-12 border-y-4 border-black bg-black overflow-hidden relative">
                <div className="absolute inset-0 bg-yellow-400 opacity-20 transform -skew-y-2 scale-110" />
                <div className={`max-w-7xl mx-auto px-4 flex justify-between items-center text-white font-comic ${isMobile ? 'text-3xl' : 'text-5xl'} uppercase tracking-widest relative z-10`}>
                    <span className="flex items-center gap-2"><Star className="fill-yellow-400 text-black" size={40} /> FAST</span>
                    <span className="flex items-center gap-2"><Shield className="fill-blue-400 text-black" size={40} /> SECURE</span>
                    <span className="flex items-center gap-2"><Rocket className="fill-red-400 text-black" size={40} /> EPIC</span>
                </div>
            </section>

            {/* Grid Layout (Panels) */}
            <section className="py-20 px-4 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-comic text-center mb-12 drop-shadow-[3px_3px_0_#fff]">FEATURES ASSEMBLE!</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4 auto-rows-[300px]`}>
                        {/* Panel 1 */}
                        <div className={`${isMobile ? '' : 'col-span-2'} border-4 border-black bg-white p-6 relative shadow-[8px_8px_0_#000] hover:-translate-y-1 transition-transform`}>
                            <div className="absolute -top-4 -left-4 bg-red-500 text-white font-comic text-xl px-4 py-1 border-2 border-black transform -rotate-6 shadow-sm">Episode 1</div>
                            <h3 className="font-comic text-4xl mb-4 text-black">The Origin Story</h3>
                            <div className="font-bubble text-lg font-bold leading-relaxed w-2/3 text-black">
                                It started with a single pixel. A radioactive formatting bug bit the stylesheet, and now...
                            </div>
                            <div className="absolute bottom-4 right-4 w-32 h-32 bg-gray-200 rounded-full border-4 border-black overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale" />
                            </div>
                        </div>

                        {/* Panel 2 */}
                        <div className="border-4 border-black bg-yellow-300 p-6 flex flex-col justify-center items-center text-center shadow-[8px_8px_0_#000] hover:-translate-y-1 transition-transform relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: halftone, backgroundSize: '4px 4px' }} />
                            <BoomBox size={64} className="mb-4 drop-shadow-[4px_4px_0_#fff]" />
                            <h3 className="font-comic text-3xl mb-2">Sonic Boom!</h3>
                            <p className="font-bubble font-bold">Audio interfaces that pack a punch.</p>
                        </div>

                        {/* Panel 3 */}
                        <div className="border-4 border-black bg-blue-300 p-6 flex flex-col justify-end text-right shadow-[8px_8px_0_#000] hover:-translate-y-1 transition-transform">
                            <MessageCircle size={48} className="ml-auto mb-4" />
                            <div className="bg-white border-2 border-black rounded-xl p-3 mb-2 font-bubble font-bold text-sm text-left relative text-black">
                                "Is it responsive?"
                                <div className="absolute bottom-[-8px] right-4 w-4 h-4 bg-white border-r-2 border-b-2 border-black transform rotate-45" />
                            </div>
                            <div className="bg-green-200 border-2 border-black rounded-xl p-3 font-bubble font-bold text-sm text-left relative text-black">
                                "Does a spider spin webs?"
                                <div className="absolute top-[-8px] right-4 w-4 h-4 bg-green-200 border-t-2 border-l-2 border-black transform rotate-45" />
                            </div>
                        </div>

                        {/* Panel 4 */}
                        <div className={`${isMobile ? '' : 'col-span-2'} border-4 border-black bg-red-500 p-6 relative overflow-hidden shadow-[8px_8px_0_#000] hover:-translate-y-1 transition-transform flex items-center justify-center`}>
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] opacity-10" />
                            <h2 className="text-6xl font-comic text-white drop-shadow-[4px_4px_0_#000] text-center transform rotate-2">
                                TO BE CONTINUED...
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-16 text-center border-t-8 border-yellow-400">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-6xl font-comic text-yellow-400 mb-8 drop-shadow-[4px_4px_0_#fff]">HERO.UI</h2>

                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {['Issue #1', 'Subscribe', 'Fan Club', 'Write Us'].map((item) => (
                            <a key={item} href="#" className="bg-white border-2 border-white px-4 py-2 font-comic text-xl hover:bg-black hover:text-white transition-colors transform hover:-rotate-2">
                                {item}
                            </a>
                        ))}
                    </div>

                    <p className="text-gray-500 font-bubble">
                        © 2024 Comic Book UI. All characters appearing in this work are fictitious. Any resemblance to real persons, living or dead, is purely coincidental.
                    </p>
                </div>
            </footer>
        </div>
    );
};
