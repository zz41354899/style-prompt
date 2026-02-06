import { useState } from 'react';
import { Menu, X, ArrowRight, Home, Star, Shield, Zap, Circle, Triangle, Settings, Bell, Power, Thermometer, Lock, Wifi } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S09MemphisPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    // S09 Memphis Design Tokens
    const colors = {
        bg: '#FFF df9',   // Off-white
        pink: '#FF90E8',  // Neon Pink
        teal: '#23C9FF',  // Cyan
        yellow: '#FFC900',// Sunflower
        purple: '#9B51E0',// Electric Purple
        black: '#000000',
        white: '#FFFFFF'
    };

    const patterns = {
        dots: `radial-gradient(${colors.black} 2px, transparent 2px)`,
        grid: `linear-gradient(${colors.teal} 1px, transparent 1px), linear-gradient(${colors.teal} 1px, transparent 1px)`,
        zigzag: `linear-gradient(135deg, ${colors.yellow} 25%, transparent 25%) -50px 0, linear-gradient(225deg, ${colors.yellow} 25%, transparent 25%) -50px 0, linear-gradient(315deg, ${colors.yellow} 25%, transparent 25%), linear-gradient(45deg, ${colors.yellow} 25%, transparent 25%)`
    }

    const shadow = (size: number = 6) => `${size}px ${size}px 0 #000`;

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.black, fontFamily: '"Nunito", sans-serif' }}>
            {/* Decorative Shapes */}
            <div className="absolute top-8 right-12 w-24 h-24 rounded-full" style={{ backgroundColor: colors.teal }} />
            <div className="absolute top-32 right-32 w-16 h-16 rotate-45" style={{ backgroundColor: colors.yellow }} />
            <div className="absolute top-20 left-[60%] w-20 h-20 rounded-full border-[6px]" style={{ borderColor: colors.pink }} />
            <div className="absolute bottom-32 left-8 w-0 h-0" style={{ borderLeft: '40px solid transparent', borderRight: '40px solid transparent', borderBottom: `70px solid ${colors.purple}` }} />
            <div className="absolute bottom-16 right-16 w-12 h-12" style={{ backgroundColor: colors.pink }} />

            {/* ========== HEADER ========== */}
            <header className="sticky top-0 z-20 p-6" style={{ backgroundColor: 'rgba(79, 66, 181, 0.95)' }}>
                <div className="max-w-7xl mx-auto flex justify-between items-center p-4 bg-white border-[3px] border-black" style={{ boxShadow: shadow(5) }}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center border-[3px] border-black" style={{ backgroundColor: colors.pink, boxShadow: '3px 3px 0 #000' }}>
                            <Home size={20} className="text-black" />
                        </div>
                        <span className="text-xl font-black tracking-tight" style={{ textShadow: `3px 3px 0 ${colors.teal}` }}>MEMPHIS HOME</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex gap-3">
                            {['Dashboard', 'Devices', 'Rooms', 'Energy'].map((item, i) => (
                                <span key={item} className="px-5 py-2.5 border-[3px] border-black font-bold text-sm cursor-pointer text-black"
                                    style={{
                                        backgroundColor: [colors.pink, colors.teal, colors.purple, colors.yellow][i],
                                        boxShadow: '4px 4px 0 #000'
                                    }}>
                                    {item}
                                </span>
                            ))}
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="px-4 py-2.5 border-[3px] border-black font-bold text-sm" style={{ backgroundColor: colors.yellow, boxShadow: '4px 4px 0 #000' }}>
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    )}
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="mt-4 border-[3px] border-black bg-white" style={{ boxShadow: shadow() }}>
                        {['Dashboard', 'Devices', 'Rooms', 'Energy'].map((item, i) => (
                            <div key={item} className="px-5 py-4 border-b-[3px] border-black font-bold cursor-pointer"
                                style={{ backgroundColor: [colors.pink, colors.teal, colors.purple, colors.yellow][i], borderBottom: i < 3 ? '3px solid black' : 'none' }}>
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section className="relative z-10 px-6 py-24 border-b-[6px] border-black bg-white overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `${patterns.dots}`,
                        backgroundSize: '20px 20px'
                    }}
                />

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <div className="inline-block px-4 py-2 bg-white border-[3px] border-black font-black text-sm mb-6 transform -rotate-3 hover:rotate-0 transition-transform shadow-[4px_4px_0px_#000]">
                            <span style={{ color: colors.purple }}>★ EST. 1984 ★</span>
                        </div>

                        <h1 className={`${isMobile ? 'text-5xl' : 'text-8xl'} font-black leading-[0.9] mb-8 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]`}>
                            <span className="block transform -rotate-1" style={{ color: colors.pink }}>RADICAL</span>
                            <span className="block transform rotate-2 ml-12" style={{ color: colors.teal }}>DESIGN</span>
                            <span className="block transform -rotate-1 text-black text-stroke-white">SYSTEM</span>
                        </h1>

                        <p className="text-xl font-bold mb-10 max-w-md leading-relaxed border-l-[6px] border-black pl-6 py-2 bg-white/50 backdrop-blur-sm">
                            Don't be boring. Break the grid with bold shapes, loud colors, and zero apologies.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6">
                            <button className="px-10 py-5 bg-black text-white font-black text-xl border-[4px] border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-[8px_8px_0px_#FFC900] hover:shadow-[4px_4px_0px_#FFC900] hover:translate-x-1 hover:translate-y-1">
                                GET STARTED
                            </button>
                            <button className="px-10 py-5 bg-white text-black font-black text-xl border-[4px] border-black hover:bg-[#23C9FF] transition-all shadow-[8px_8px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 transform rotate-1">
                                VIEW DOCS
                            </button>
                        </div>
                    </div>

                    {/* Hero Visual - Abstract Collage */}
                    <div className="relative h-[500px] w-full hidden md:block">
                        {/* Background Shapes */}
                        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-[6px] border-black bg-[#FF90E8]" />
                        <div className="absolute bottom-10 left-10 w-48 h-48 border-[6px] border-black bg-[#FFC900] transform rotate-12" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[url('https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop')] bg-cover border-[6px] border-black shadow-[12px_12px_0px_#000000] z-20" />

                        {/* Floating Elements */}
                        <div className="absolute top-0 left-0 w-20 h-20 bg-black border-[4px] border-white rounded-full z-30 animate-bounce" />
                        <div className="absolute bottom-20 right-20 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[60px] border-b-[#9B51E0] transform -rotate-12 z-30" />

                        {/* Squiggle SVG */}
                        <svg className="absolute top-0 right-0 w-32 h-32 text-[#23C9FF] z-10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
                            <path d="M0 50 Q 25 100 50 50 T 100 50" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* ========== BENTO CONTROLS ========== */}
            <section className="relative z-10 py-24 px-6 bg-[#23C9FF]" style={{ backgroundImage: patterns.grid, backgroundSize: '40px 40px' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border-[6px] border-black p-4 inline-block transform -rotate-2 mb-12 shadow-[8px_8px_0px_#000]">
                        <h2 style={{ fontSize: isMobile ? '1.875rem' : '3rem' }} className="font-black text-center leading-none">
                            <span style={{ color: colors.purple }}>CONTROL</span>
                            <span style={{ color: colors.pink }}> FREAK?</span>
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '2rem' }}>
                        {/* Card 1: Lighting */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }} className="p-8 bg-white border-[4px] border-black shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] hover:-translate-y-1 transition-all relative overflow-hidden" >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFC900] border-l-[4px] border-b-[4px] border-black" />
                            <div className="flex justify-between mb-8 items-start">
                                <h3 className="text-3xl font-black" style={{ color: colors.pink, textShadow: '2px 2px 0 #000' }}>LIGHTING</h3>
                                <div className="w-16 h-8 rounded-full border-[3px] border-black relative cursor-pointer bg-[#23C9FF]">
                                    <div className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-[3px] border-black shadow-[2px_2px_0px_#000]" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="flex-1 h-32 border-[3px] border-black relative bg-white shadow-[4px_4px_0px_#000]">
                                        <div className="absolute bottom-0 w-full transition-all border-t-[3px] border-black"
                                            style={{ height: i === 2 ? '70%' : '30%', backgroundColor: [colors.pink, colors.teal, colors.yellow, colors.purple][i - 1] }} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card 2: Lock */}
                        <div className="col-span-1 border-[4px] border-black flex flex-col items-center justify-center text-center shadow-[8px_8px_0px_white] hover:shadow-[12px_12px_0px_white] hover:-translate-y-1 transition-all" style={{ backgroundColor: colors.purple, color: 'white' }}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center border-[4px] border-black mb-6 bg-white shadow-[4px_4px_0px_#000]">
                                <Lock size={32} className="text-black" />
                            </div>
                            <h3 className="font-black text-2xl uppercase">Security</h3>
                            <p className="font-bold mt-2 bg-black text-white px-2 py-1 transform -rotate-2">LOCKED</p>
                        </div>

                        {/* Card 3: Scenes */}
                        <div className="p-6 bg-[#FFC900] border-[4px] border-black shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] hover:-translate-y-1 transition-all relative">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: patterns.dots }} />
                            <h3 className="font-black text-2xl mb-6 relative z-10 text-white text-stroke-black">SCENES</h3>
                            <div className="space-y-4 relative z-10">
                                {['Morning', 'Party', 'Chill'].map((scene, i) => (
                                    <button key={scene} className="w-full py-3 border-[3px] border-black text-lg font-black uppercase hover:scale-[1.02] active:scale-95 transition-transform text-center bg-white shadow-[4px_4px_0px_#000]">
                                        {scene}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section className="relative z-10 py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 style={{ fontSize: isMobile ? '1.875rem' : '3rem' }} className="font-black text-center mb-16">
                        <span className="bg-black text-white px-4 py-1 transform -rotate-3 inline-block mr-4 shadow-[5px_5px_0px_#FF90E8]">PRICE</span>
                        <span style={{ color: colors.black }} className="text-stroke-pink">TAGS</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '3rem' }}>
                        {[
                            { name: 'Basic', price: '$0', color: colors.yellow, rotate: '-rotate-2' },
                            { name: 'Pro', price: '$12', color: colors.pink, rotate: 'rotate-2' },
                            { name: 'Hub', price: '$49', color: colors.purple, rotate: '-rotate-1' }
                        ].map((plan, i) => (
                            <div key={i} className={`p-8 bg-white border-[4px] border-black hover:-translate-y-2 transition-transform text-center relative ${plan.rotate}`} style={{ boxShadow: '12px 12px 0 #000' }}>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-black" />
                                <h3 className="text-xl font-black uppercase tracking-widest mb-4 border-b-[3px] border-black pb-2 inline-block" style={{ color: plan.color }}>{plan.name}</h3>
                                <div className="text-6xl font-black mb-6 text-black" style={{ textShadow: `3px 3px 0 ${plan.color}` }}>{plan.price}</div>
                                <div className="text-sm font-black text-black mb-8 bg-[#eee] inline-block px-2">PER MONTH</div>

                                <ul className="text-left space-y-3 mb-8 font-bold">
                                    <li className="flex items-center gap-2"><span style={{ color: plan.color }}>●</span> 5 Devices</li>
                                    <li className="flex items-center gap-2"><span style={{ color: plan.color }}>●</span> Basic Scenes</li>
                                    {i > 0 && <li className="flex items-center gap-2"><span style={{ color: plan.color }}>●</span> Energy Stats</li>}
                                    {i > 1 && <li className="flex items-center gap-2"><span style={{ color: plan.color }}>●</span> 24/7 Support</li>}
                                </ul>

                                <button className="w-full py-4 font-black border-[3px] border-black active:scale-95 transition-transform text-lg"
                                    style={{ backgroundColor: plan.color, boxShadow: '4px 4px 0 #000', color: i === 2 ? 'white' : 'black' }}>
                                    GRAB IT
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Colorful Stripe */}
            <div className="relative z-10 h-6 my-8 border-y-[3px] border-black"
                style={{
                    backgroundImage: `repeating-linear-gradient(90deg, ${colors.pink} 0px, ${colors.pink} 25px, ${colors.yellow} 25px, ${colors.yellow} 50px, ${colors.teal} 50px, ${colors.teal} 75px, ${colors.purple} 75px, ${colors.purple} 100px)`
                }}
            />

            {/* ========== FOOTER ========== */}
            <footer className="relative z-10 py-16 px-6 border-t-[6px] border-black bg-black text-white">
                <div className={`max-w-7xl mx-auto flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between items-center gap-8`}>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white border-[4px] border-white rounded-full flex items-center justify-center">
                            <span className="text-3xl">🤘</span>
                        </div>
                        <div className="font-black text-3xl tracking-tighter">
                            MEMPHIS<br />
                            <span style={{ color: colors.teal }}>HOME</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {['Terms', 'Privacy', 'Radical'].map(link => (
                            <a key={link} href="#" className="font-bold uppercase border-[2px] border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">{link}</a>
                        ))}
                    </div>

                    <div className="font-bold text-sm text-right">
                        <span style={{ color: colors.pink }}>© 2025</span>
                        <br />
                        MADE WITH <span style={{ color: colors.yellow }}>ELECTRICITY</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
