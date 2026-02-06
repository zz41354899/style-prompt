import { useState } from 'react';
import {
    Menu, X, PenTool, Image as ImageIcon, Layout, Type,
    ArrowRight, Check, Star, Coffee, Feather, BookOpen
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S08Retro70sPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const [menuOpen, setMenuOpen] = useState(false);

    // S08 Retro 70s Tokens
    const theme = {
        colors: {
            bg: '#F9F1E5',      // Aged Paper
            brown: '#4A3728',   // Espresso
            orange: '#D95D39',  // Burnt Orange
            yellow: '#F0A202',  // Mustard
            cream: '#FFF8E7',   // Cream
            blue: '#5E8C94',    // Faded Teal (Accent)
            text: '#3E2723'
        }
    };

    return (
        <div
            className="min-h-screen relative font-serif"
            style={{
                backgroundColor: theme.colors.bg,
                color: theme.colors.brown,
            }}
        >
            {/* Grain Texture Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.08] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Header */}
            <header className="sticky top-0 z-50 border-b-2 border-[#5D4037] bg-[#F7E8D0]/90 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E65100] flex items-center justify-center text-[#F7E8D0]">
                            <PenTool size={20} />
                        </div>
                        <span className="text-2xl font-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>GROOVY</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Manifesto', 'Editions', 'Typography', 'Subscribe'].map(item => (
                                <a key={item} href="#" className="text-sm font-bold uppercase tracking-widest text-[#5D4037] hover:text-[#E65100] transition-colors">
                                    {item}
                                </a>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-4">
                        {!isMobile && (
                            <button className="px-6 py-2 rounded-full border-2 border-[#5D4037] font-bold text-sm uppercase tracking-wider hover:bg-[#5D4037] hover:text-[#F7E8D0] transition-all">
                                Get Started
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#5D4037]">
                                {menuOpen ? <X /> : <Menu />}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="bg-[#F7E8D0] border-t-2 border-[#5D4037] p-6 flex flex-col gap-4">
                        {['Manifesto', 'Editions', 'Typography', 'Subscribe'].map(item => (
                            <a key={item} href="#" className="text-lg font-bold uppercase tracking-widest text-[#5D4037] hover:text-[#E65100] transition-colors">{item}</a>
                        ))}
                        <button className="w-full mt-4 px-6 py-3 rounded-full border-2 border-[#5D4037] font-bold text-sm uppercase tracking-wider hover:bg-[#5D4037] hover:text-[#F7E8D0] transition-all">
                            Get Started
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section (Magazine Cover) */}
            <section className={`relative z-10 ${isMobile ? 'py-12' : 'py-20'} border-b-4 border-[#4A3728] overflow-hidden`}>
                <div className={`max-w-7xl mx-auto px-6 grid ${isMobile ? 'grid-cols-1' : 'grid-cols-12'} gap-12 items-end`}>

                    {/* Left Column: Headlines */}
                    <div className="col-span-12 md:col-span-7 relative z-10">
                        <div className="flex items-center gap-4 mb-8 border-b-2 border-[#4A3728] pb-4 inline-block pr-12">
                            <span className="font-black uppercase tracking-widest text-xs">Vol. 74</span>
                            <span className="w-2 h-2 rounded-full bg-[#D95D39]" />
                            <span className="font-black uppercase tracking-widest text-xs">October Issue</span>
                            <span className="w-2 h-2 rounded-full bg-[#F0A202]" />
                            <span className="font-black uppercase tracking-widest text-xs">$2.50</span>
                        </div>

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-[9rem]'} font-black leading-[0.85] mb-8 text-[#4A3728]`} style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.06em' }}>
                            Retro <br />
                            <span className="text-[#D95D39] italic pr-4">Revival</span>
                        </h1>

                        <p className={`${isMobile ? 'text-xl' : 'text-3xl'} text-[#4A3728] mb-12 max-w-xl leading-tight font-serif italic border-l-4 border-[#F0A202] pl-6`}>
                            "The golden age of design returns with a vengeance. Warm tones, bold type, and zero apologies."
                        </p>

                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 items-center`}>
                            <button className="px-10 py-5 bg-[#4A3728] text-[#F9F1E5] font-black text-xl rounded-full hover:bg-[#D95D39] transition-colors shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px]">
                                Read Issue
                            </button>
                            <button className="flex items-center gap-2 font-bold text-[#4A3728] uppercase tracking-widest hover:gap-4 transition-all">
                                <span className="border-b-2 border-[#4A3728]">Subscribe Now</span> <ArrowRight />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="col-span-12 md:col-span-5 relative">
                        <div className="aspect-[3/4] rounded-t-[10rem] bg-[#F0A202] border-4 border-[#4A3728] relative overflow-hidden shadow-[12px_12px_0px_rgba(74,55,40,0.2)]">
                            {/* Abstract Shapes */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#D95D39] rounded-full mix-blend-multiply opacity-80" />
                            <div className="absolute top-1/4 left-1/4 w-[80%] h-[80%] bg-[#5E8C94] rounded-full mix-blend-multiply opacity-80" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#F9F1E5] mix-blend-hard-light">
                                <Star size={120} fill="currentColor" className="animate-spin-slow" style={{ animationDuration: '20s' }} />
                                <span className="font-black text-2xl uppercase tracking-[0.5em] mt-8 transform -rotate-90 absolute -right-12 top-1/2">Groovy</span>
                            </div>

                            {/* Texture Texture */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                        </div>

                        {/* Badge */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F9F1E5] rounded-full border-4 border-[#4A3728] flex items-center justify-center p-4 text-center transform -rotate-12 shadow-lg">
                            <span className="font-black text-[#D95D39] leading-none text-sm">
                                BEST <br /> OF <br /> 1974
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars of Design (Editorial Columns) */}
            <section className="relative z-10 py-24 bg-[#EFEBE9] border-b-2 border-[#4A3728]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[#4A3728]">
                        {[
                            { letter: 'T', title: 'Typography', desc: 'Display fonts that demand attention, paired with highly readable serifs for long-form content.' },
                            { letter: 'L', title: 'Layouts', desc: 'Break the mold with multi-column grids inspired by vintage newspapers and avant-garde zines.' },
                            { letter: 'G', title: 'Grain', desc: 'Subtle noise and paper textures that bring digital interfaces to life, adding warmth and depth.' },
                        ].map((feature, i) => (
                            <div key={i} className={`pt-8 md:pt-0 ${i > 0 ? 'md:pl-12' : ''}`}>
                                <div className="float-left mr-4 font-black text-6xl text-[#D95D39] leading-[0.8]" style={{ fontFamily: 'Georgia, serif' }}>
                                    {feature.letter}
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-2 text-[#4A3728]">{feature.title}</h3>
                                <p className="text-[#5D4037] leading-relaxed font-serif text-lg">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Collection (Polaroid Grid) */}
            <section className="relative z-10 py-32 bg-[#F9F1E5]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-[#4A3728] pb-4">
                        <h2 className="text-6xl md:text-8xl font-black text-[#4A3728]" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.05em' }}>
                            Archive
                        </h2>
                        <span className="font-bold uppercase tracking-widest text-[#D95D39] mb-2">Est. October 1974</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Item 1 */}
                        <div className="bg-white p-4 pb-12 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 hover:z-10 relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#F0A202]/80 transform rotate-1" /> {/* Tape */}
                            <div className="bg-[#4A3728] aspect-square mb-4 overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
                                <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop" alt="70s Interior" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold text-center text-[#4A3728] text-xl" style={{ fontFamily: 'Courier New, monospace' }}>The Living Room</h3>
                            <p className="text-center text-xs text-gray-500 font-mono mt-1">FIG. A // 1974</p>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-white p-4 pb-12 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:z-10 relative md:top-12">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#D95D39]/80 transform -rotate-2" /> {/* Tape */}
                            <div className="bg-[#D95D39] aspect-square mb-4 overflow-hidden flex items-center justify-center p-8">
                                <div className="text-center">
                                    <h4 className="font-black text-6xl text-[#F9F1E5] leading-none mb-2">PURE<br />FUNK</h4>
                                </div>
                            </div>
                            <h3 className="font-bold text-center text-[#4A3728] text-xl" style={{ fontFamily: 'Courier New, monospace' }}>Type Specimen</h3>
                            <p className="text-center text-xs text-gray-500 font-mono mt-1">FIG. B // BOLD</p>
                        </div>

                        {/* Item 3 */}
                        <div className="bg-white p-4 pb-12 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-500 hover:z-10 relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#4A3728]/80 transform rotate-1" /> {/* Tape */}
                            <div className="bg-[#F0A202] aspect-square mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFF8E7_10%,_transparent_10%),_radial-gradient(circle_at_center,_#FFF8E7_10%,_transparent_10%)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Coffee size={80} className="text-[#4A3728]" />
                                </div>
                            </div>
                            <h3 className="font-bold text-center text-[#4A3728] text-xl" style={{ fontFamily: 'Courier New, monospace' }}>Morning Brew</h3>
                            <p className="text-center text-xs text-gray-500 font-mono mt-1">FIG. C // WARMTH</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial / Quote */}
            <section className="relative z-10 py-32 bg-[#5D4037] text-[#F7E8D0]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Star className="mx-auto mb-8 text-[#E65100]" size={48} fill="currentColor" />
                    <blockquote className={`${isMobile ? 'text-2xl' : 'text-5xl'} font-black leading-tight mb-8`} style={{ fontFamily: 'Georgia, serif' }}>
                        "Finally, a design system that feels human. Groovy brings the tactile soul of print to the cold digital world."
                    </blockquote>
                    <cite className="not-italic text-[#A1887F] font-bold tracking-widest uppercase">
                        — Sarah J. Miller, Art Director
                    </cite>
                </div>
            </section>

            {/* Subscribe (Club) */}
            <section className="relative z-10 py-24 bg-[#E65100] text-[#FFF8E7]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="border-4 border-[#FFF8E7] p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10" />

                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                                JOINT THE CLUB
                            </h2>
                            <p className="text-xl md:text-2xl font-bold mb-10 max-w-lg mx-auto leading-relaxed opacity-90">
                                Get exclusive access to our entire archive of templates, fonts, and textures.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto mb-10">
                                <div className="bg-[#4A3728] p-6 text-left shadow-[8px_8px_0px_#000000]">
                                    <div className="text-xs uppercase tracking-widest text-[#F0A202] mb-2">Digital Only</div>
                                    <div className="text-4xl font-black mb-2">$12</div>
                                    <div className="text-sm opacity-70">Single user license</div>
                                </div>
                                <div className="bg-[#FFF8E7] p-6 text-left text-[#4A3728] shadow-[8px_8px_0px_#000000] relative">
                                    <div className="absolute -top-3 -right-3 bg-[#F0A202] text-[#4A3728] text-[10px] font-black uppercase px-2 py-1 rotate-12">Best Value</div>
                                    <div className="text-xs uppercase tracking-widest text-[#D95D39] mb-2">Full Access</div>
                                    <div className="text-4xl font-black mb-2">$29</div>
                                    <div className="text-sm opacity-70">Everything included</div>
                                </div>
                            </div>

                            <button className="px-12 py-4 bg-[#4A3728] text-white font-black text-xl hover:bg-black transition-colors shadow-[8px_8px_0px_white] hover:shadow-[4px_4px_0px_white] hover:translate-x-[4px] hover:translate-y-[4px]">
                                BECOME A MEMBER
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#2D241E] text-[#9E8C7E] py-16 border-t-8 border-[#D95D39]">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#D95D39] flex items-center justify-center text-[#2D241E] font-black text-xl">R</div>
                        <div>
                            <span className="block text-2xl font-black text-[#F9F1E5] tracking-widest">GROOVY</span>
                            <span className="text-xs uppercase tracking-widest">Est. 1974</span>
                        </div>
                    </div>

                    <div className="flex gap-8 font-bold uppercase tracking-widest text-xs">
                        <a href="#" className="hover:text-[#D95D39] transition-colors">Archive</a>
                        <a href="#" className="hover:text-[#D95D39] transition-colors">Manifesto</a>
                        <a href="#" className="hover:text-[#D95D39] transition-colors">Contact</a>
                    </div>

                    <div className="text-xs font-mono opacity-50">
                        © 2024 Retro Revival Inc. <br />
                        Printed in Cyberspace.
                    </div>
                </div>
            </footer>
        </div>
    );
};
