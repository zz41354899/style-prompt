import { useState } from 'react';
import { Mail, MapPin, Stamp, Heart, Menu, X, ArrowRight, Plane, Send } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S40Postcard = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Paper Texture (CSS)
    const paperTexture = `
    repeating-linear-gradient(#fdfbf7, #fdfbf7 50px, #f4f1ea 50px, #f4f1ea 51px)
  `;
    const stampBorder = "border-[3px] border-dashed border-gray-300";

    return (
        <div className="min-h-screen bg-[#e6e2d8] font-sans text-gray-700 selection:bg-[#C0392B] selection:text-white pb-20 overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Caveat:wght@400;700&display=swap');
        .font-hand { font-family: 'Indie Flower', cursive; }
        .font-script { font-family: 'Caveat', cursive; }
      `}</style>

            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none opacity-5 overflow-hidden">
                <div className="absolute top-10 left-10 transform rotate-12 text-9xl font-serif">PARIS</div>
                <div className="absolute bottom-10 right-10 transform -rotate-12 text-9xl font-serif">TOKYO</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-[20px] border-black opacity-10" />
            </div>

            {/* Navbar (Stamp Strip) */}
            <nav className="fixed top-0 w-full z-50 p-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-[#fdfbf7] p-3 shadow-md rounded-sm transform rotate-1 hover:rotate-0 transition-transform duration-300 relative border border-[#dcd9ce]">
                    {/* Perforations */}
                    <div className="absolute -left-2 top-0 bottom-0 w-4 bg-[radial-gradient(circle,transparent_4px,#e6e2d8_5px)] bg-[length:10px_20px]" />
                    <div className="absolute -right-2 top-0 bottom-0 w-4 bg-[radial-gradient(circle,transparent_4px,#e6e2d8_5px)] bg-[length:10px_20px]" />

                    <div className="flex items-center gap-3 pl-4">
                        <div className="w-10 h-10 bg-[#C0392B] rounded-full flex items-center justify-center text-white shadow-inner">
                            <Plane size={20} className="transform -rotate-45" />
                        </div>
                        <div className="leading-none">
                            <span className="font-script text-2xl font-bold">Wanderlust</span> <br />
                            <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Est. 2024</span>
                        </div>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-6 font-hand text-lg font-bold`}>
                        {['Destinations', 'Stories', 'Journal', 'Shop'].map((item) => (
                            <a key={item} href="#" className="hover:text-[#C0392B] transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#C0392B] transform scale-x-0 group-hover:scale-x-100 transition-transform opacity-50 rounded-full" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 pr-4">
                        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-[#C0392B] transition-colors">
                            Login <ArrowRight size={14} />
                        </button>
                        {responsive.nav.showMobile && (
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="p-1"
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
                    <div className="absolute inset-0 bg-black/50 pointer-events-auto" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Destinations
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
                                Journal
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shop
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section (The Postcard) */}
            <section className="pt-32 px-4 min-h-screen flex items-center justify-center relative z-10">
                <div className={`max-w-5xl w-full bg-[#fdfbf7] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05)] rounded-sm ${isMobile ? 'p-8' : 'p-12'} relative transform rotate-1 hover:rotate-0 transition-transform duration-500`}>
                    {/* Paper Texture Overlay */}
                    <div className="absolute inset-0 bg-[#fdfbf7] opacity-50 mix-blend-multiply pointer-events-none" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cardboard-flat.png')` }} />

                    <div className={`relative z-10 grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-12`}>
                        {/* Left Side: Message */}
                        <div className={`flex flex-col h-full font-hand ${isMobile ? 'text-xl' : 'text-2xl'} leading-loose text-gray-800`}>
                            <p className="mb-6">Dear Internet Traveler,</p>
                            <p className="mb-6">
                                Creating beautiful interfaces is a journey, not a destination.
                                Take your time. Enjoy the process. Add a little warmth to the digital void.
                            </p>
                            <p className="mb-12">
                                Wish you were here!
                            </p>
                            <div className="mt-auto">
                                <p className="font-script text-3xl font-bold transform -rotate-2 text-[#C0392B]">
                                    With love, <br />
                                    The Design Team
                                </p>

                                <button className="mt-8 px-8 py-3 bg-[#2C3E50] text-white font-sans text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-[#C0392B] transition-colors shadow-lg flex items-center gap-3 group w-fit">
                                    Send a Card <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Address & Stamps */}
                        <div className="border-l-2 border-gray-200 pl-12 flex flex-col items-end relative min-h-[400px]">
                            {/* Divider Middle Line (Vertical) - Hand drawn look */}
                            <div className="absolute left-[-2px] top-4 bottom-4 w-[2px] bg-gray-200" />

                            <div className="flex gap-4 mb-20">
                                {/* Stamp 1 */}
                                <div className="w-24 h-28 bg-[#fdfbf7] border-4 border-dotted border-gray-300 relative shadow-sm transform -rotate-3 p-1">
                                    <img src="https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover sepia-[.5]" />
                                    {/* Circle Stamp Overlay */}
                                    <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-gray-400 rounded-full flex items-center justify-center opacity-60 transform rotate-12 pointer-events-none">
                                        <div className="text-[8px] font-sans uppercase text-center leading-tight">
                                            POSTAL SERVICE<br />12.24.2024<br />AIR MAIL
                                        </div>
                                    </div>
                                </div>

                                {/* Stamp 2 */}
                                <div className="w-24 h-28 bg-[#C0392B] p-1 shadow-sm transform rotate-6 relative">
                                    <div className="w-full h-full border-2 border-dashed border-white flex items-center justify-center text-white font-bold text-center text-xs p-1">
                                        PRIORITY<br />MAIL
                                    </div>
                                </div>
                            </div>

                            {/* Address Lines */}
                            <div className="w-full max-w-xs space-y-8 mt-auto mb-12 font-hand text-2xl text-gray-600">
                                <div className="border-b border-gray-300 pb-1">To: You</div>
                                <div className="border-b border-gray-300 pb-1">123 Creative Blvd</div>
                                <div className="border-b border-gray-300 pb-1">Design City, Web 3.0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery (Photo Stack) */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <MapPin className="text-[#C0392B]" />
                    <h2 className="text-3xl font-script font-bold text-gray-800">Recent Travels</h2>
                </div>

                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8 p-4`}>
                    {[
                        'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=400&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=400&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400&auto=format&fit=crop'
                    ].map((imgUrl, i) => (
                        <div key={i} className="group relative">
                            <div className="bg-white p-3 pb-12 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.05)] transform rotate-1 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
                                <div className="aspect-square bg-gray-100 overflow-hidden mb-4 grayscale-[0.2] group-hover:grayscale-0 transition-all">
                                    <img
                                        src={imgUrl}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="font-hand text-xl text-gray-600 pl-2 flex justify-between items-center">
                                    <span>Summer 2024</span>
                                    <Heart className="w-5 h-5 text-gray-300 group-hover:text-red-400 group-hover:fill-red-400 transition-colors cursor-pointer" />
                                </div>
                            </div>
                            {/* Tape */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 rotate-1 backdrop-blur-sm shadow-sm opacity-60" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-20 border-t border-gray-300 pt-12 text-center text-gray-500 font-sans text-sm">
                <div className="bg-[#f0ece3] inline-block px-8 py-4 rounded-full mb-8 shadow-inner">
                    <Stamp size={24} className="mx-auto mb-2 opacity-50" />
                    <p className="font-bold uppercase tracking-widest text-[#C0392B] opacity-70">Handcrafted with care</p>
                </div>
                <div className="space-x-6 mb-4 font-bold opacity-60">
                    <a href="#" className="hover:text-[#C0392B]">About</a>
                    <a href="#" className="hover:text-[#C0392B]">Terms</a>
                    <a href="#" className="hover:text-[#C0392B]">Privacy</a>
                </div>
                <p className="font-hand text-lg opacity-50">© 2024 Postcard UI. Don't forget to write.</p>
            </footer>
        </div>
    );
};
