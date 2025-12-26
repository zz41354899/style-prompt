import { useState } from 'react';
import { Shapes, Triangle, Circle, Square, Menu, X, ArrowRight, Star } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S46AbstractMemphis = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Memphis Patterns
    const wiggle = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 10c2.5 0 5-2.5 5-5s2.5-5 5-5 5 2.5 5 5-2.5 5-5 5-5 2.5-5 5 2.5 5 5 5 2.5 5 5-2.5 5-5 5-5-2.5-5-5' fill='none' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E")`;
    const dots = `radial-gradient(black 1px, transparent 1px)`;

    return (
        <div className="min-h-screen bg-[#FFF0F5] font-sans overflow-x-hidden relative selection:bg-yellow-400 selection:text-black">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Quicksand:wght@400;700&display=swap');
        .font-memphis { font-family: 'Fredoka One', cursive; }
        .font-clean { font-family: 'Quicksand', sans-serif; }
      `}</style>

            {/* Background Shapes (Static confetti) */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-8 h-8 rounded-full border-4 border-black" />
                <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-400 transform rotate-45" />
                <div className="absolute bottom-20 left-1/4 w-0 h-0 border-l-[20px] border-l-transparent border-t-[40px] border-t-pink-500 border-r-[20px] border-r-transparent transform rotate-12" />
                <div className="absolute top-1/2 right-10 w-24 h-4 bg-cyan-400 transform -rotate-45 rounded-full" />
                <div className="absolute top-[10%] left-[40%] w-32 h-32 opacity-10" style={{ backgroundImage: dots, backgroundSize: '10px 10px' }} />
            </div>

            {/* Navbar */}
            <nav className="fixed top-6 left-6 right-6 z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-white border-4 border-black shadow-[8px_8px_0_#000] p-4 rounded-[20px]">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-black rounded-full text-white flex items-center justify-center">
                            <Shapes size={20} />
                        </div>
                        <span className="font-memphis text-2xl tracking-wide text-black">POP.PLAY</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Fun', 'Games', 'Design', 'About'].map((item, i) => (
                            <a key={item} href="#" className={`font-memphis text-xl hover:scale-110 transition-transform ${i % 2 === 0 ? 'text-pink-500' : 'text-cyan-500'}`}>
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-yellow-400 font-memphis text-black border-2 border-black rounded-full shadow-[4px_4px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            Join!
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
                                Fun
                            </a>
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
                                Design
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 flex min-h-[90vh] items-center">
                <div className={`max-w-7xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-12 items-center`}>
                    <div className="relative">
                        {/* H1 Background Blob */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-300 rounded-full mix-blend-multiply opacity-50 animate-blob" />
                        <div className="absolute top-0 -right-4 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-2000" />

                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-memphis text-black leading-[0.9] mb-8 relative z-10 uppercase`}>
                            Design <br />
                            With <br />
                            <span className="text-white drop-shadow-[4px_4px_0_#000] stroke-black" style={{ WebkitTextStroke: '3px black' }}>Attitude</span>
                        </h1>

                        <p className="font-clean font-bold text-2xl mb-8 max-w-md text-black">
                            Reject the grid. Embrace the chaos. <br />
                            Add some <span className="underline decoration-wavy decoration-pink-500 decoration-4">squiggle</span> to your life.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-black text-white font-memphis text-xl rounded-none shadow-[8px_8px_0_#FF69B4] hover:-translate-y-1 transition-transform relative">
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black" />
                                Get Funky
                            </button>
                        </div>
                    </div>

                    {/* Illustration Area */}
                    <div className="relative h-[500px] w-full bg-white border-4 border-black shadow-[16px_16px_0_#000] rounded-[40px] overflow-hidden flex items-center justify-center">
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{ backgroundImage: wiggle, backgroundSize: '15px 15px' }}
                        />

                        <div className="relative w-64 h-64">
                            {/* Floating elements */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full border-4 border-black animate-bounce" />
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 border-4 border-black transform rotate-12 shadow-[8px_8px_0_#000]" />
                            <div className="absolute top-10 right-10 w-20 h-20 bg-cyan-400 clip-path-polygon border-4 border-black flex items-center justify-center transform -rotate-12">
                                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[30px] border-b-black border-r-[15px] border-r-transparent" />
                            </div>

                            {/* Connecting squiggle */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                                <path d="M 0 150 Q 80 50 150 150 T 300 150" fill="none" stroke="black" strokeWidth="6" strokeLinecap="round" className="animate-[pulse_3s_ease-in-out_infinite]" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pattern Strip */}
            <section className="py-12 bg-black overflow-hidden flex items-center">
                <div className="flex gap-12 font-memphis text-4xl text-white whitespace-nowrap animate-marquee">
                    <span>• MIX IT UP</span>
                    <span className="text-yellow-400">SHAPE IT UP</span>
                    <span className="text-pink-400">SHAKE IT UP</span>
                    <span>• MIX IT UP</span>
                    <span className="text-yellow-400">SHAPE IT UP</span>
                    <span className="text-pink-400">SHAKE IT UP</span>
                    <span>• MIX IT UP</span>
                    <span className="text-yellow-400">SHAPE IT UP</span>
                    <span className="text-pink-400">SHAKE IT UP</span>
                </div>
            </section>

            {/* Feature Cards */}
            <section className="py-20 px-8">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-12`}>
                    {[
                        { icon: Triangle, title: 'Sharp', color: 'bg-yellow-400', shadow: 'shadow-[8px_8px_0_#000]', rotate: 'rotate-3' },
                        { icon: Circle, title: 'Soft', color: 'bg-pink-400', shadow: 'shadow-[8px_8px_0_#000]', rotate: '-rotate-2' },
                        { icon: Square, title: 'Solid', color: 'bg-cyan-400', shadow: 'shadow-[8px_8px_0_#000]', rotate: 'rotate-1' },
                    ].map((card, i) => (
                        <div key={i} className={`bg-white border-4 border-black p-8 rounded-[30px] ${card.shadow} transform hover:scale-105 transition-transform ${card.rotate} flex flex-col items-center text-center`}>
                            <div className={`w-20 h-20 ${card.color} rounded-full border-4 border-black flex items-center justify-center mb-6`}>
                                <card.icon size={40} className="text-black fill-white" />
                            </div>
                            <h3 className="text-3xl font-memphis mb-4 text-black">{card.title}</h3>
                            <p className="font-clean font-bold text-gray-600 leading-relaxed">
                                Don't be afraid to clash patterns and colors. It's not a mistake, it's a statement.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-4 text-center relative max-w-4xl mx-auto">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-black -z-10 transform -translate-y-1/2" />
                <div className="bg-[#FFF0F5] inline-block px-8 relative z-10">
                    <h2 className="text-5xl font-memphis mb-8">Let's Create</h2>
                    <div className="flex justify-center gap-6">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-yellow-400 hover:text-black transition-colors border-2 border-black">
                            <Star size={24} />
                        </div>
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-pink-400 hover:text-black transition-colors border-2 border-black">
                            <Shapes size={24} />
                        </div>
                    </div>
                    <p className="font-clean font-bold mt-8 text-sm">© 1980s-Forever. Memphis Design.</p>
                </div>
            </footer>
        </div>
    );
};
