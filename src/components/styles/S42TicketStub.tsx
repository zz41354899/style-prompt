import { useState } from 'react';
import { Ticket, Calendar, MapPin, QrCode, Menu, X, ArrowRight, BarChart, Tag } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S42TicketStub = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Perforation dots pattern (CSS)
    const perforationY = `
    radial-gradient(circle at 0 50%, transparent 6px, #FFF8E1 7px)
  `;
    const perforationX = `
    radial-gradient(circle at 50% 0, transparent 6px, #FFF8E1 7px)
  `;

    return (
        <div className="min-h-screen bg-[#263238] font-mono text-[#263238] selection:bg-[#D84315] selection:text-white pb-20 overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
        .font-typewriter { font-family: 'Courier Prime', monospace; }
        .font-mono-bold { font-family: 'Space Mono', monospace; }
      `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] z-0" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 pt-6 px-4">
                <div className="max-w-6xl mx-auto bg-[#FFF8E1] rounded-sm shadow-lg flex justify-between items-center relative overflow-hidden h-20">
                    {/* Left tear strip */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#263238]" style={{ maskImage: perforationY, WebkitMaskImage: perforationY, maskSize: '20px 40px', WebkitMaskSize: '20px 40px', maskPosition: '-10px 0', WebkitMaskPosition: '-10px 0' }} />

                    <div className="pl-8 flex items-center gap-3">
                        <div className="border-2 border-[#263238] p-2 rounded-full">
                            <Ticket size={24} />
                        </div>
                        <div className="leading-tight">
                            <span className="font-mono-bold font-bold text-xl uppercase tracking-widest">ADMIT ONE</span>
                            <div className="text-[10px] opacity-60">NO REFUNDS • NO EXCHANGES</div>
                        </div>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-1 bg-[#FFE0B2] h-full px-8 transform -skew-x-12 mx-auto border-x-2 border-dashed border-[#263238]/20`}>
                        {['Events', 'Venues', 'Artists', 'Support'].map((item) => (
                            <a key={item} href="#" className="font-typewriter font-bold uppercase hover:bg-[#263238] hover:text-white px-4 py-1 transition-colors transform skew-x-12">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="pr-6 flex items-center gap-4">
                        <button className={`${isMobile ? 'hidden' : 'flex'} items-center gap-2 border-2 border-[#D84315] text-[#D84315] px-4 py-1 font-bold uppercase text-sm hover:bg-[#D84315] hover:text-white transition-colors`}>
                            Check In
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        )}
                    </div>

                    {/* Right tear strip */}
                    <div className="absolute right-0 top-0 bottom-0 w-4 bg-[#263238]" style={{ maskImage: perforationY, WebkitMaskImage: perforationY, maskSize: '20px 40px', WebkitMaskSize: '20px 40px', maskPosition: '10px 0', WebkitMaskPosition: '10px 0', transform: 'scaleX(-1)' }} />
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
                                Events
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Venues
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
                                Support
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Ticket */}
            <section className="pt-40 pb-20 px-4 min-h-[80vh] flex items-center justify-center relative z-10">
                <div className={`max-w-5xl w-full flex ${isMobile ? 'flex-col' : 'flex-row'} bg-[#FFF8E1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden relative group`}>

                    {/* Main Ticket Area */}
                    <div className={`flex-1 ${isMobile ? 'p-8' : 'p-12'} ${isMobile ? 'border-b-2' : 'border-r-2'} ${isMobile ? 'border-b-2' : 'border-b-0'} border-dashed border-[#263238]/30 relative`}>
                        {/* Watermark */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black opacity-[0.03] rotate-12 pointer-events-none whitespace-nowrap">
                            VIP ACCESS
                        </div>

                        <div className="flex justify-between items-start mb-12">
                            <div className="space-y-1">
                                <span className="bg-[#263238] text-white px-2 py-1 text-xs font-bold uppercase tracking-widest">World Tour 2024</span>
                                <h1 className={`${isMobile ? 'text-5xl' : 'text-7xl'} font-mono-bold font-bold uppercase leading-none tracking-tighter`}>
                                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D84315] to-[#FF7043]">Grand</span> <br />
                                    Opening
                                </h1>
                            </div>
                            <QrCode size={64} className={`opacity-80 ${isMobile ? 'hidden' : 'block'}`} />
                        </div>

                        <div className="grid grid-cols-2 gap-8 mb-12 font-typewriter">
                            <div>
                                <div className="text-xs uppercase opacity-50 mb-1">Date</div>
                                <div className="text-xl font-bold border-b-2 border-[#263238] inline-block pb-1">DEC 24, 2024</div>
                            </div>
                            <div>
                                <div className="text-xs uppercase opacity-50 mb-1">Time</div>
                                <div className="text-xl font-bold border-b-2 border-[#263238] inline-block pb-1">08:00 PM EST</div>
                            </div>
                            <div className="col-span-2">
                                <div className="text-xs uppercase opacity-50 mb-1">Venue</div>
                                <div className="text-xl font-bold flex items-center gap-2">
                                    <MapPin size={20} /> MSG Sphere, Las Vegas
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-[#263238] text-white py-4 font-bold uppercase tracking-[0.2em] hover:bg-[#D84315] transition-colors flex justify-center items-center gap-3 group">
                            Purchase Tickets <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Stub Area */}
                    <div className={`${isMobile ? 'w-full' : 'w-32'} bg-[#FFE0B2] flex ${isMobile ? 'flex-row' : 'flex-col'} justify-between items-center ${isMobile ? 'p-4' : 'py-8'} ${isMobile ? 'border-l-0' : 'border-l-4'} border-dotted border-[#263238]/20 relative`}>
                        {/* Punch hole */}
                        <div className={`absolute left-[-10px] top-1/2 -translate-y-1/2 w-5 h-5 bg-[#263238] rounded-full ${isMobile ? 'hidden' : 'block'}`} />

                        <div className={`text-2xl font-black ${isMobile ? 'rotate-0' : '-rotate-90'} whitespace-nowrap opacity-20 ${isMobile ? '' : 'mt-12'}`}>
                            #839201
                        </div>

                        <div className={`flex flex-col items-center gap-1 font-mono text-[10px] text-center ${isMobile ? '' : 'mb-12'}`}>
                            <BarChart className={`${isMobile ? 'rotate-0' : 'rotate-90'} mb-2`} />
                            <span>SEAT</span>
                            <span className="text-lg font-bold">A12</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Grid */}
            <section className="py-20 px-4 max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12 text-white">
                    <Calendar />
                    <h2 className="text-2xl font-mono-bold font-bold uppercase tracking-widest">Upcoming Shows</h2>
                </div>

                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={`bg-[#FFF8E1] hover:bg-white transition-colors p-0 flex ${isMobile ? 'flex-col' : 'flex-row'} group overflow-hidden relative rounded-sm`}>
                            {/* Date Strip */}
                            <div className={`bg-[#263238] text-white ${isMobile ? 'w-full' : 'w-32'} flex flex-col justify-center items-center p-4 group-hover:bg-[#D84315] transition-colors`}>
                                <span className="text-xs font-bold uppercase opacity-70">NOV</span>
                                <span className="text-4xl font-black">2{i}</span>
                            </div>

                            {/* Info */}
                            <div className={`flex-1 ${isMobile ? 'p-6' : 'p-8'} flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between ${isMobile ? 'items-start' : 'items-center'} gap-4`}>
                                <div>
                                    <div className="flex gap-2 mb-2">
                                        <span className="bg-[#FFE0B2] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">Concert</span>
                                        {i === 1 && <span className="bg-[#D84315] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide animate-pulse">Selling Fast</span>}
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase font-mono-bold mb-1">The Midnight Echoes</h3>
                                    <p className="font-typewriter text-sm opacity-70">with special guest Analog Dreams</p>
                                </div>

                                <div className={`flex items-center gap-8 ${isMobile ? 'w-full' : 'w-auto'} ${isMobile ? 'mt-4' : 'mt-0'} ${isMobile ? 'pt-4' : 'pt-0'} ${isMobile ? 'border-t' : 'border-t-0'} border-dashed border-gray-300`}>
                                    <div className={`text-right ${isMobile ? 'hidden' : 'block'}`}>
                                        <div className="text-xs uppercase opacity-50">From</div>
                                        <div className="font-bold text-xl">$45.00</div>
                                    </div>
                                    <button className={`${isMobile ? 'flex-1' : 'flex-none'} border-2 border-[#263238] px-6 py-2 font-bold uppercase text-sm hover:bg-[#263238] hover:text-white transition-colors`}>
                                        Details
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Barcode Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[url('https://cdn-icons-png.flaticon.com/512/25/25333.png')] opacity-10 bg-repeat-x" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-20 border-t border-white/10 pt-12 text-center text-white/40 font-mono text-xs">
                <div className="mb-4">
                    <Ticket size={32} className="mx-auto text-white/20 mb-2" />
                    <p>TICKET SYSTEM v2.0.4</p>
                </div>
                <p>VALID FOR ONE ENTRY ONLY © 2024</p>
            </footer>
        </div>
    );
};
