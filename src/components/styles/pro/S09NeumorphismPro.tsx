import { useState } from 'react';
import { Menu, X, ArrowRight, Home, Star, Shield, Zap, Circle, Triangle, Settings, Bell, Power, Thermometer, Lock, Wifi } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S09NeumorphismPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // S09 Memphis Design Tokens
    const colors = {
        bg: '#FFF5F7',
        pink: '#FF6B9D',
        teal: '#00D4AA',
        yellow: '#FFE135',
        purple: '#7C4DFF',
        text: '#000000'
    };

    const shadow = (size: number = 6) => `${size}px ${size}px 0 #000`;

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Nunito", sans-serif' }}>
            {/* Decorative Shapes */}
            <div className="absolute top-8 right-12 w-24 h-24 rounded-full" style={{ backgroundColor: colors.teal }} />
            <div className="absolute top-32 right-32 w-16 h-16 rotate-45" style={{ backgroundColor: colors.yellow }} />
            <div className="absolute top-20 left-[60%] w-20 h-20 rounded-full border-[6px]" style={{ borderColor: colors.pink }} />
            <div className="absolute bottom-32 left-8 w-0 h-0" style={{ borderLeft: '40px solid transparent', borderRight: '40px solid transparent', borderBottom: `70px solid ${colors.purple}` }} />
            <div className="absolute bottom-16 right-16 w-12 h-12" style={{ backgroundColor: colors.pink }} />

            {/* ========== HEADER ========== */}
            <header className="relative z-20 p-6">
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
            <section className="relative z-10 px-6 py-16">
                <div className="max-w-7xl mx-auto" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-[3px] border-black font-bold text-sm mb-8" style={{ boxShadow: shadow(4), color: colors.purple }}>
                            <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: colors.teal }} />
                            ALL SYSTEMS ONLINE
                        </div>
                        <h1 style={{ fontSize: isMobile ? '3rem' : '4.5rem' }} className="font-black leading-[0.95] mb-6">
                            <span style={{ color: colors.pink }}>Smart</span>
                            <span style={{ color: colors.teal }}>Home</span><br />
                            <span style={{ color: colors.purple }}>Fun</span>
                            <span style={{ color: colors.yellow, textShadow: '3px 3px 0 #000' }}>Control</span>
                        </h1>
                        <p className="text-lg max-w-md mb-8 font-medium text-black leading-relaxed">
                            Manage your home with playful precision. Temperature, lighting, security—all controlled with bold, joyful interfaces.
                        </p>
                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
                            <button className="px-8 py-4 text-white font-black text-lg border-[3px] border-black hover:translate-x-1 hover:-translate-y-1 transition-transform flex items-center gap-2"
                                style={{ backgroundColor: colors.pink, boxShadow: '5px 5px 0 #000' }}>
                                <span>Launch App</span>
                                <ArrowRight size={20} />
                            </button>
                            <button className="px-8 py-4 bg-white font-black text-lg text-black border-[3px] border-black hover:translate-x-1 hover:-translate-y-1 transition-transform"
                                style={{ boxShadow: `5px 5px 0 ${colors.purple}` }}>
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Visual: Thermostat */}
                    {!isMobile && (
                        <div className="relative">
                            <div className="aspect-square max-w-md mx-auto bg-white border-[3px] border-black p-8 relative" style={{ boxShadow: '8px 8px 0 #000' }}>
                                {/* Dial */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-[6px] border-black flex items-center justify-center relative"
                                    style={{ backgroundColor: colors.yellow }}>
                                    <div className="absolute -top-2 w-4 h-6 rounded-full" style={{ backgroundColor: colors.pink }} />
                                    <div className="text-6xl font-black">72°</div>
                                </div>
                                {/* Corner Shapes */}
                                <div className="absolute top-4 left-4 w-8 h-8 rounded-full border-[3px] border-black" style={{ backgroundColor: colors.teal }} />
                                <div className="absolute top-4 right-4 w-8 h-8 rotate-45 border-[3px] border-black" style={{ backgroundColor: colors.pink }} />
                                <div className="absolute bottom-4 left-4 w-8 h-8 border-[3px] border-black" style={{ backgroundColor: colors.purple }} />
                                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border-[3px] border-black" style={{ backgroundColor: colors.yellow }} />
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ========== BENTO CONTROLS ========== */}
            <section className="relative z-10 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 style={{ fontSize: isMobile ? '1.875rem' : '3rem' }} className="font-black text-center mb-16">
                        <span style={{ color: colors.purple }}>Smart</span>
                        <span style={{ color: colors.pink }}> Modules</span>
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '1.5rem' }}>
                        {/* Card 1: Lighting */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }} className="p-6 bg-white border-[3px] border-black hover:translate-x-1 hover:-translate-y-1 transition-transform" >
                            <div className="flex justify-between mb-6">
                                <h3 className="text-xl font-black" style={{ color: colors.pink }}>Lighting</h3>
                                <div className="w-12 h-6 rounded-full border-[3px] border-black relative cursor-pointer" style={{ backgroundColor: colors.teal }}>
                                    <div className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-black" />
                                </div>
                            </div>
                            <div className="flex gap-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="flex-1 h-24 border-[3px] border-black relative overflow-hidden" style={{ backgroundColor: 'white' }}>
                                        <div className="absolute bottom-0 w-full transition-all"
                                            style={{ height: i === 2 ? '70%' : '30%', backgroundColor: [colors.pink, colors.teal, colors.yellow, colors.purple][i - 1] }} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card 2: Lock */}
                        <div className="p-6 border-[3px] border-black flex flex-col items-center justify-center text-center hover:translate-x-1 hover:-translate-y-1 transition-transform" style={{ backgroundColor: colors.purple, boxShadow: shadow(), color: 'white' }}>
                            <div className="w-16 h-16 rounded-full flex items-center justify-center border-[3px] border-black mb-4" style={{ backgroundColor: 'white' }}>
                                <Lock size={28} className="text-black" />
                            </div>
                            <h3 className="font-black text-lg">Front Door</h3>
                            <p className="text-xs font-bold mt-2 opacity-80">LOCKED • 2m AGO</p>
                        </div>

                        {/* Card 3: Scenes */}
                        <div className="p-6 bg-white border-[3px] border-black hover:translate-x-1 hover:-translate-y-1 transition-transform" style={{ boxShadow: shadow() }}>
                            <h3 className="font-black text-lg mb-4" style={{ color: colors.teal }}>Scenes</h3>
                            <div className="space-y-3">
                                {['Morning', 'Away', 'Movie'].map((scene, i) => (
                                    <button key={scene} className="w-full py-2 border-[3px] border-black text-sm font-bold active:scale-95 transition-transform text-left px-4"
                                        style={{ backgroundColor: [colors.yellow, colors.pink, colors.teal][i], boxShadow: '3px 3px 0 #000' }}>
                                        {scene}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section className="relative z-10 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 style={{ fontSize: isMobile ? '1.875rem' : '3rem' }} className="font-black text-center mb-16">
                        <span style={{ color: colors.yellow, textShadow: '3px 3px 0 #000' }}>Price</span>
                        <span style={{ color: colors.pink }}> Tags</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
                        {[
                            { name: 'Basic', price: '$0', color: colors.yellow },
                            { name: 'Pro', price: '$12', color: colors.pink },
                            { name: 'Hub', price: '$49', color: colors.purple }
                        ].map((plan, i) => (
                            <div key={i} className="p-8 bg-white border-[3px] border-black hover:translate-x-1 hover:-translate-y-1 transition-transform text-center" style={{ boxShadow: '8px 8px 0 #000' }}>
                                <h3 className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: plan.color }}>{plan.name}</h3>
                                <div className="text-5xl font-black mb-6" style={{ color: plan.color }}>{plan.price}</div>
                                <div className="text-xs font-bold text-gray-500 mb-8">PER MONTH</div>
                                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-8 border-[3px] border-black" style={{ backgroundColor: plan.color }}>
                                    <Star size={24} className={i === 2 ? 'text-white' : 'text-black'} />
                                </div>
                                <button className="w-full py-3 font-bold border-[3px] border-black active:scale-95 transition-transform"
                                    style={{ backgroundColor: plan.color, boxShadow: '4px 4px 0 #000', color: i === 2 ? 'white' : 'black' }}>
                                    Select
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
            <footer className="relative z-10 py-12 px-6">
                <div className={`max-w-7xl mx-auto flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between items-center gap-6`}>
                    <div className="font-black text-sm">
                        <span style={{ color: colors.pink }}>©</span>
                        <span style={{ color: colors.teal }}> 2025</span>
                        <span style={{ color: colors.yellow, textShadow: '1px 1px 0 #000' }}> MEMPHIS</span>
                        <span style={{ color: colors.purple }}> HOME</span>
                    </div>
                    <div className="flex gap-2">
                        {[colors.pink, colors.yellow, colors.teal, colors.purple].map((color, i) => (
                            <div key={i} className="w-6 h-6 border-2 border-black" style={{ backgroundColor: color }} />
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};
