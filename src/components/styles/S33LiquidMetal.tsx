import { useState } from 'react';
import { MousePointer2, Droplets, Waves, Zap, Menu, X, ArrowRight, Play, Maximize2 } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S33LiquidMetal = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Liquid gradients
    const mercuryGradient = "linear-gradient(135deg, #e0e0e0 0%, #ffffff 50%, #a0a0a0 100%)";
    const darkFluidGradient = "radial-gradient(circle at 30% 30%, #444, #111)";

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-hidden selection:bg-white selection:text-black">
            {/* Background distortion effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-white opacity-[0.03] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_20s_linear_infinite] blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gray-500 opacity-[0.05] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[spin_15s_linear_infinite_reverse] blur-[80px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 mix-blend-difference">
                <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-xl rounded-full border border-white/10 px-6 py-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center animate-pulse">
                            <div className="w-4 h-4 bg-black rounded-full" />
                        </div>
                        <span className="font-bold text-xl tracking-tighter">MERCURY</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['About', 'Fluidity', 'Reflections', 'Contact'].map((item) => (
                            <a key={item} href="#" className="text-sm font-medium hover:text-gray-300 transition-colors uppercase tracking-widest">{item}</a>
                        ))}
                        <button className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-all font-bold text-xs uppercase tracking-widest">
                            Connect
                        </button>
                    </div>

                    {responsive.nav.showMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)}>
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
                                About
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Fluidity
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Reflections
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

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center relative px-4 text-center">
                {/* Central Liquid blob */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-[300px] h-[300px]' : 'w-[500px] h-[500px]'} z-0`}>
                    <div
                        className="w-full h-full rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[morph_8s_ease-in-out_infinite]"
                        style={{
                            background: mercuryGradient,
                            boxShadow: 'inset -20px -20px 40px rgba(0,0,0,0.5), inset 20px 20px 40px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.2)'
                        }}
                    />
                </div>

                <div className="relative z-10 mix-blend-normal">
                    <h1 className={`${isMobile ? 'text-6xl' : 'text-9xl'} font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]`}>
                        LIQUID<br />DIGITAL
                    </h1>
                    <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed font-light`}>
                        Seamless interfaces that flow like metal. Adaptable, reflective, and stunningly smooth.
                    </p>
                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 justify-center`}>
                        <button className="px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                            Start Flow <ArrowRight size={18} />
                        </button>
                        <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 backdrop-blur font-bold uppercase tracking-widest transition-all">
                            Showcase
                        </button>
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-32 px-4 bg-zinc-900 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
                        {[
                            { icon: Droplets, title: 'Amorphous', desc: 'Shapes that refuse to be contained in boxes.' },
                            { icon: Waves, title: 'Reflective', desc: 'Surfaces that mimic real-world lighting interactions.' },
                            { icon: Zap, title: 'Kinetic', desc: 'Motion that feels heavy, fluid, and physically accurate.' },
                        ].map((card, i) => (
                            <div key={i} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black rounded-[2rem] transform rotate-1 group-hover:rotate-0 transition-all opacity-50 blur-sm" />
                                <div className="relative bg-[#111] p-10 rounded-[2rem] border border-white/10 hover:border-white/30 transition-all h-full overflow-hidden">
                                    {/* Blob in background of card */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-500/20 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />

                                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-500 flex items-center justify-center shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.5),inset_2px_2px_5px_rgba(255,255,255,1)]">
                                        <card.icon size={32} className="text-black" />
                                    </div>

                                    <h3 className="text-3xl font-bold mb-4 tracking-tight">{card.title}</h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-white transition-colors">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Element */}
            <section className="py-24 px-4 overflow-hidden relative">
                <div className="max-w-5xl mx-auto">
                    <div
                        className="w-full aspect-video bg-gray-900 rounded-[3rem] relative overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group cursor-pointer"
                    >
                        {/* Video/Image Placeholder */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                        {/* Play Button */}
                        <div className="relative z-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 pl-2">
                            <div className="absolute inset-0 rounded-full border border-white/30 animate-[ping_2s_ease-in-out_infinite]" />
                            <Play size={40} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] fill-white" />
                        </div>

                        <div className="absolute bottom-10 left-10 z-10">
                            <h3 className="text-3xl font-bold mb-2">Simulating Chrome</h3>
                            <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                RENDERING LIVE PREVIEW
                            </div>
                        </div>

                        <button className="absolute bottom-10 right-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition-colors">
                            <Maximize2 size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 text-center border-t border-white/10 bg-black">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-black tracking-tighter mb-8 text-gray-600">
                        MERCURY.
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-bold uppercase tracking-widest text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">Behance</a>
                        <a href="#" className="hover:text-white transition-colors">Dribbble</a>
                    </div>
                    <p className="text-gray-600 text-xs font-mono">
                        © 2024 LIQUID METAL UI. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </footer>

            <style>{`
        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          33% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          66% { border-radius: 30% 70% 50% 50% / 50% 40% 60% 60%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }
      `}</style>
        </div>
    );
};
