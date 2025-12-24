import { useState } from 'react';
import { Sparkles, Disc, Zap, Globe, Menu, X, Play, Music, Star, Orbit } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S27Y2KAesthetic = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Chrome text effect helper
    const chromeText = "bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]";

    return (
        <div className="min-h-screen bg-black text-white font-mono overflow-hidden selection:bg-pink-500 selection:text-white">
            {/* Background Grid & Stars */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-600 rounded-full blur-[100px] opacity-40 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-[120px] opacity-40" />
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/20 bg-black/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Orbit className="text-cyan-400 animate-spin-slow" />
                        <span className={`text-2xl font-black italic tracking-tighter ${chromeText}`}>CYBER.ZONE</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-1`}>
                        {['HOME', 'MUSIC', 'FORUM', 'LINKS'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="px-4 py-1 hover:bg-white hover:text-black transition-colors font-bold uppercase tracking-widest text-sm border border-transparent hover:border-white"
                            >
                                {item}
                            </a>
                        ))}
                        <button className="ml-4 px-6 py-1 bg-gradient-to-r from-pink-500 to-purple-600 border border-white/50 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(236,72,153,0.6)]">
                            LOGIN
                        </button>
                    </div>

                    {responsive.nav.showMobile && (
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 border border-white/20 rounded hover:bg-white/10"
                        >
                            {menuOpen ? <X /> : <Menu />}
                        </button>
                    )}
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
                                HOME
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                MUSIC
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                FORUM
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                LINKS
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
                                HOME
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                MUSIC
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                FORUM
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                LINKS
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
                                HOME
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                MUSIC
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                FORUM
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                LINKS
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 min-h-screen flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    {/* Decorative Elements */}
                    <div className="absolute top-32 left-10 animate-bounce hidden lg:block">
                        <Star className="text-yellow-300 w-12 h-12 drop-shadow-[0_0_10px_rgba(253,224,71,0.8)]" />
                    </div>
                    <div className="absolute bottom-20 right-10 animate-pulse hidden lg:block">
                        <Sparkles className="text-cyan-300 w-16 h-16 drop-shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                    </div>

                    <div className="inline-block mb-4 px-6 py-1 rounded-full border border-pink-500 bg-pink-500/20 text-pink-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                        Welcome to the future
                    </div>

                    <h1 className={`text-6xl ${!isMobile ? 'md:text-8xl lg:text-9xl' : ''} font-black italic tracking-tighter mb-8 leading-none`}>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-pink-400 drop-shadow-[0_4px_0_rgba(255,255,255,0.2)]">
                            DATA
                        </span>
                        <span className={`block ${chromeText} transform -skew-x-12`}>
                            SURFER
                        </span>
                    </h1>

                    <p className={`text-gray-400 text-lg ${!isMobile ? 'md:text-xl' : ''} max-w-2xl mx-auto mb-12 font-sans`}>
                        Connect to the digital grid. Experience the raw power of the web like never before.
                        <span className="text-pink-500"> {'>>>'} SYSTEM READY</span>
                    </p>

                    <div className={`flex flex-col ${!isMobile ? 'sm:flex-row' : ''} items-center justify-center gap-6`}>
                        <button className="group relative px-8 py-3 bg-white text-black font-black uppercase tracking-wider skew-x-[-10deg] hover:skew-x-[0deg] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(103,232,249,0.6)]">
                            <span className="inline-block transform skew-x-[10deg] group-hover:skew-x-[0deg] transition-all">
                                Enter Matrix
                            </span>
                        </button>
                        <button className="group px-8 py-3 border-2 border-white/30 hover:border-white font-bold uppercase tracking-wider rounded-full backdrop-blur-sm transition-all hover:bg-white/10">
                            Read Docs
                        </button>
                    </div>

                    {/* Marquee */}
                    <div className="mt-20 overflow-hidden border-y border-white/20 bg-black/50 backdrop-blur">
                        <div className="whitespace-nowrap py-3 animate-marquee">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <span key={i} className="inline-block mx-8 text-white/50 font-bold text-sm tracking-[0.3em]">
                                    *** ONLINE NOW *** LOADING NEW ASSETS *** VER 2.0 ***
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Blobs */}
            <section className="py-24 relative z-10 px-4">
                <div className={`max-w-6xl mx-auto grid ${!isMobile ? 'md:grid-cols-3' : ''} gap-8`}>
                    {[
                        { title: 'SPEED', icon: Zap, color: 'from-yellow-400 to-orange-500' },
                        { title: 'GLOBAL', icon: Globe, color: 'from-cyan-400 to-blue-500' },
                        { title: 'MEDIA', icon: Disc, color: 'from-pink-400 to-purple-500' },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="relative group p-1"
                        >
                            {/* Blob background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity rounded-[2rem]`} />

                            <div className="relative bg-black/80 border border-white/10 p-8 rounded-[2rem] h-full flex flex-col items-center text-center backdrop-blur-xl transition-transform group-hover:-translate-y-2">
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.3)]`}>
                                    <item.icon size={32} className="text-black" />
                                </div>
                                <h3 className="text-2xl font-black italic mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Optimized for maximum throughput. Experience the next generation of web protocols.
                                </p>
                                <div className="mt-6 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                    <div className={`h-full w-2/3 bg-gradient-to-r ${item.color} animate-pulse`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Media Player UI */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-b from-gray-800 to-black p-1 rounded-t-lg rounded-b-xl shadow-2xl border border-gray-600">
                        {/* Window Bar */}
                        <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-1 flex items-center justify-between rounded-t">
                            <div className="flex items-center gap-2 text-white text-xs font-bold">
                                <Music size={12} />
                                <span>WinAmp 2025</span>
                            </div>
                            <div className="flex gap-1">
                                <div className="w-3 h-3 bg-gray-400 border border-gray-200 shadow-inner" />
                                <div className="w-3 h-3 bg-gray-400 border border-gray-200 shadow-inner" />
                                <div className="w-3 h-3 bg-red-500 border border-red-300 shadow-inner" />
                            </div>
                        </div>

                        {/* Player Body */}
                        <div className="bg-[#2a2a2a] p-6 rounded-b">
                            <div className="bg-black border-2 border-gray-600 p-4 mb-6 font-mono text-green-400 text-sm relative overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,1)]">
                                <div className="flex justify-between mb-2">
                                    <span>kbps: 320</span>
                                    <span>kHz: 44.1</span>
                                </div>
                                <div className="text-lg animate-pulse">01. SANDSTORM - DARUDE.MP3</div>

                                {/* Visualizer bars */}
                                <div className="flex items-end gap-1 h-12 mt-4 border-t border-gray-800 pt-2">
                                    {[...Array(20)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-green-500 opacity-80"
                                            style={{ height: `${Math.random() * 100}%` }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center gap-4">
                                <button className="w-12 h-12 rounded-full border-2 border-gray-500 flex items-center justify-center hover:bg-gray-700 active:scale-95 transition-all text-gray-300 shadow-[0_4px_0_#333]">
                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-gray-300 border-b-[8px] border-b-transparent transform rotate-180" />
                                </button>
                                <button className="w-16 h-16 rounded-full bg-gradient-to-b from-gray-200 to-gray-400 flex items-center justify-center hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_0_#333] border-4 border-gray-600">
                                    <Play fill="black" className="ml-1" />
                                </button>
                                <button className="w-12 h-12 rounded-full border-2 border-gray-500 flex items-center justify-center hover:bg-gray-700 active:scale-95 transition-all text-gray-300 shadow-[0_4px_0_#333]">
                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-gray-300 border-b-[8px] border-b-transparent" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/10 bg-black text-center relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className={`text-4xl font-black italic ${chromeText} mb-6 opacity-30`}>
                        THE END IS THE BEGINNING
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 mb-8 text-xs font-mono text-gray-500 tracking-widest uppercase">
                        <a href="#" className="hover:text-white hover:underline">[ Credits ]</a>
                        <a href="#" className="hover:text-white hover:underline">[ Sitemap ]</a>
                        <a href="#" className="hover:text-white hover:underline">[ Privacy ]</a>
                    </div>

                    <p className="text-gray-600 text-xs">
                        © 1999-2025 CYBER.ZONE INC. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </footer>
        </div>
    );
};
