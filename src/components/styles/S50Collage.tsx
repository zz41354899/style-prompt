import { useState } from 'react';
import { Scissors, Paperclip, FileText, Image, Menu, X, ArrowRight, Music } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S50Collage = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Textures
    const noise = "url('https://www.transparenttextures.com/patterns/stardust.png')";
    const paper = "url('https://www.transparenttextures.com/patterns/cream-paper.png')";

    return (
        <div className="min-h-screen bg-[#EAEAEA] font-sans selection:bg-red-600 selection:text-white overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Permanent+Marker&family=Special+Elite&display=swap');
        .font-headline { font-family: 'Abril Fatface', cursive; }
        .font-marker { font-family: 'Permanent Marker', cursive; }
        .font-type { font-family: 'Special Elite', monospace; }
        
        .rip-edge {
           clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 95% 98%, 90% 100%, 85% 98%, 80% 100%, 75% 98%, 70% 100%, 65% 98%, 60% 100%, 55% 98%, 50% 100%, 45% 98%, 40% 100%, 35% 98%, 30% 100%, 25% 98%, 20% 100%, 15% 98%, 10% 100%, 5% 98%, 0% 100%);
        }
      `}</style>

            {/* Background Noise with Paper Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-40 z-0 mix-blend-multiply" style={{ backgroundImage: paper }} />
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-repeat" style={{ backgroundImage: noise }} />

            {/* Torn Paper Nav */}
            <nav className="fixed top-0 w-full z-50 p-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center relative transform -rotate-1">
                    {/* Tape Top Left */}
                    <div className="absolute -top-2 left-10 w-24 h-8 bg-white/70 shadow-sm transform -rotate-2 mix-blend-overlay z-50" />

                    <div className="bg-white p-4 pl-8 pr-12 shadow-lg rip-edge relative flex items-center gap-4">
                        <Scissors size={24} className="transform rotate-90 text-red-600" />
                        <span className="font-headline text-2xl tracking-tighter text-black">ZINE.MAKER</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-6`}>
                        {['ISSUES', 'ARTISTS', 'SUBMIT', 'ARCHIVE'].map((item, i) => (
                            <a key={item} href="#" className={`bg-black text-white px-3 py-1 font-type font-bold text-lg hover:bg-red-600 hover:-translate-y-1 transition-all shadow-[4px_4px_0_rgba(0,0,0,0.2)] transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-1'}`}>
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 bg-yellow-300 p-2 pr-4 shadow-[4px_4px_0_rgba(0,0,0,1)] transform rotate-1 border-2 border-black">
                        <button className="flex items-center gap-2 font-marker uppercase">
                            Subscribe!
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
                                ISSUES
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                ARTISTS
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                SUBMIT
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                ARCHIVE
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-20 right-[-50px] w-96 h-96 bg-red-600 rounded-full opacity-80 mix-blend-multiply filter blur-3xl animate-pulse" />
                <div className="absolute bottom-[-50px] left-[-50px] w-80 h-80 bg-blue-600 rounded-full opacity-60 mix-blend-multiply filter blur-3xl" />

                <div className={`max-w-5xl w-full grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-12 items-center relative`}>
                    {/* Collage Headlines */}
                    <div className="relative z-20 space-y-6">
                        <div className="bg-white inline-block px-4 py-2 transform -rotate-3 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.1)]">
                            <span className="font-type text-sm uppercase tracking-widest text-red-600 font-bold">Vol 1. Edition 4</span>
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-headline leading-none relative`}>
                            <span className="bg-black text-white px-2 inline-block transform -rotate-2 mix-blend-hard-light">CUT</span> <br />
                            <span className="ml-12 inline-block transform rotate-3">
                                <span className="text-red-600 mix-blend-difference" style={{ textShadow: "4px 4px 0px black" }}>PASTE</span>
                            </span> <br />
                            <span className="bg-yellow-300 px-4 mt-2 inline-block transform -rotate-1 border-4 border-black box-decoration-clone">REPEAT.</span>
                        </h1>

                        <p className="font-type text-lg bg-white/80 p-4 border border-black shadow-[8px_8px_0_rgba(0,0,0,0.1)] transform rotate-1 max-w-md text-black">
                            Reassemble the web. A chaotic mix of textures, typography, and raw expression.
                        </p>

                        <div className="pt-8 relative">
                            {/* Tape holding the button */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/50 transform rotate-12 z-20 mix-blend-overlay shadow-sm" />

                            <button className="bg-red-600 text-white font-marker text-2xl px-12 py-4 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all shadow-[8px_8px_0_black] border-2 border-black">
                                START CREATING -&gt;
                            </button>
                        </div>
                    </div>

                    {/* Visual Collage Right */}
                    <div className="relative h-[600px] w-full flex items-center justify-center">
                        <div className="relative w-80 h-[400px]">
                            {/* Layer 1: Newspaper bg */}
                            <div className="absolute inset-0 bg-white border border-gray-300 shadow-md p-4 transform rotate-3 z-0 overflow-hidden font-serif text-[8px] text-justify leading-tight text-gray-500 hover:z-30 transition-all hover:scale-105">
                                <h3 className="text-xl font-bold text-black mb-2 text-center uppercase border-b-2 border-black pb-1">Daily News</h3>
                                {Array(30).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ").join("")}
                            </div>

                            {/* Layer 2: Photo cutout */}
                            <div className="absolute top-[-40px] left-[-40px] w-64 h-64 border-8 border-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] transform -rotate-6 z-10 hover:z-30 transition-all hover:scale-105 hover:rotate-0">
                                <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale contrast-125" />
                                {/* Sticker */}
                                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center font-bold font-marker border-2 border-black transform rotate-12">
                                    WOW!
                                </div>
                            </div>

                            {/* Layer 3: Ripped Paper Note */}
                            <div className="absolute bottom-10 -right-20 w-56 bg-[#fdfbf7] p-6 shadow-xl transform rotate-6 z-20 rip-edge hover:z-30 transition-all hover:scale-110">
                                <Paperclip className="absolute -top-3 right-1/2 text-gray-400 rotate-45" size={32} />
                                <p className="font-type text-sm text-red-600">
                                    Don't forget to break the grid! <br />
                                    - The Editor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scattered Features Section */}
            <section className="py-32 px-4 bg-yellow-400 border-y-8 border-black relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "20px 20px" }} />

                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-16 relative z-10`}>
                    {[
                        { icon: Snippets, title: 'Snippets', desc: 'Drag & drop predefined cutouts.', bg: 'bg-white', rotate: '-rotate-3' },
                        { icon: Image, title: 'Textures', desc: 'Real scanned paper assets.', bg: 'bg-blue-500', text: 'text-white', rotate: 'rotate-2' },
                        { icon: Music, title: 'Rhythm', desc: 'Sync animations to the beat.', bg: 'bg-pink-500', text: 'text-white', rotate: '-rotate-1' },
                    ].map((item, i) => (
                        <div key={i} className={`${item.bg} ${item.text || 'text-black'} p-8 border-4 border-black shadow-[12px_12px_0_rgba(0,0,0,1)] transform ${item.rotate} hover:rotate-0 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200`}>
                            {/* Tape */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 shadow-sm transform rotate-90 mix-blend-overlay" />

                            <div className="mb-6 flex justify-between items-start">
                                <h3 className="font-headline text-3xl">{item.title}</h3>
                                {/* <item.icon size={32} /> No 'Snippets' icon, fixed below */}
                                {i === 0 ? <Scissors size={32} /> : item.icon === Image ? <Image size={32} /> : <Music size={32} />}
                            </div>
                            <p className="font-type text-lg leading-snug">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#111] text-white py-20 px-4 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                    <div className="inline-block transform rotate-2 border-2 border-white p-4">
                        <h2 className="font-headline text-5xl">NO RULES.</h2>
                    </div>
                    <p className="font-type text-gray-400 max-w-lg mx-auto">
                        Collage UI is an experimental design system. Use with caution.
                    </p>
                    <div className="flex justify-center gap-6 mt-12 font-marker text-xl">
                        <a href="#" className="hover:text-yellow-400 transform hover:scale-110 transition-transform">Insta</a>
                        <a href="#" className="hover:text-pink-500 transform hover:scale-110 transition-transform">Twitter</a>
                        <a href="#" className="hover:text-blue-500 transform hover:scale-110 transition-transform">Email</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Fix for missing icon
const Snippets = Scissors;
