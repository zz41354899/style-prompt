import { useState, useEffect } from 'react';
import { Sparkles, Zap, Infinity, Menu, X, Globe, Cpu } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S100TheUltimate = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-[#FF0080] selection:text-white perspective-1000">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .font-ultimate { font-family: 'Space Grotesk', sans-serif; }
        
        .holo-text {
           background: linear-gradient(to right, #FF0080, #7928CA, #FF0080);
           -webkit-background-clip: text;
           background-clip: text;
           color: transparent;
           background-size: 200% auto;
           animation: holoGradient 4s linear infinite;
        }
        
        @keyframes holoGradient {
           to { background-position: 200% center; }
        }
        
        .ultimate-card {
           background: rgba(255, 255, 255, 0.05);
           border: 1px solid rgba(255, 255, 255, 0.1);
           backdrop-filter: blur(20px);
           border-radius: 32px;
           transition: transform 0.1s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .ultimate-card:hover {
           border-color: rgba(255, 255, 255, 0.3);
           box-shadow: 0 20px 80px -20px rgba(121, 40, 202, 0.4);
        }
        
        .grid-bg {
           background-image: 
             linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
             linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
           background-size: 40px 40px;
           mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }
        
        .glowing-orb {
           position: absolute;
           border-radius: 50%;
           filter: blur(100px);
           opacity: 0.5;
           z-index: 0;
           mix-blend-mode: screen;
        }
      `}</style>

            {/* Dynamic Background */}
            <div className="fixed inset-0 bg-black z-0" />
            <div className="fixed inset-0 grid-bg z-0 pointer-events-none"
                style={{ transform: `perspective(1000px) rotateX(20deg) translateY(${mousePos.y * 20}px) translateX(${mousePos.x * 20}px)` }}
            />
            <div className="glowing-orb w-[400px] h-[400px] bg-[#FF0080] top-0 left-0 animate-pulse" />
            <div className="glowing-orb w-[500px] h-[500px] bg-[#7928CA] bottom-0 right-0 animate-pulse delay-1000" />

            {/* Navbar */}
            <nav className="fixed w-full z-50 px-6 py-6">
                <div className="max-w-7xl mx-auto ultimate-card h-20 flex justify-between items-center px-8">
                    <div className="flex items-center gap-3">
                        <Infinity size={32} className="text-white" />
                        <span className="font-ultimate font-bold text-2xl tracking-tight">ULTIMATE</span>
                    </div>

                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8`}>
                        {['Vision', 'Technology', 'Future', 'Manifesto'].map((item) => (
                            <a key={item} href="#" className="font-ultimate font-medium text-lg text-gray-400 hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="bg-white text-black px-6 py-2.5 rounded-full font-ultimate font-bold text-sm hover:scale-105 transition-transform">
                            Presale Access
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className={`${isMobile ? 'block' : 'lg:hidden'} p-2 text-white`}>
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

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 relative z-10 pt-20">
                <div className="text-center max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 animate-bounce delay-1000">
                        <Sparkles size={16} className="text-[#FF0080]" />
                        <span className="font-ultimate text-sm font-medium">Style #100 Reached</span>
                    </div>

                    <h1 className={`${isMobile ? 'text-6xl' : 'text-6xl md:text-9xl'} font-ultimate font-bold mb-8 leading-tight`}>
                        Build The <br />
                        <span className="holo-text">Impossible</span>
                    </h1>

                    <p className={`font-ultimate ${isMobile ? 'text-xl' : 'text-xl md:text-2xl'} text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed`}>
                        The culmination of 100 styles. Combining holographic depth, fluid motion, and ultimate interactivity into one singular interface experience.
                    </p>

                    <div className="flex justify-center gap-6">
                        <button className="group relative px-10 py-5 rounded-full bg-white text-black font-ultimate font-bold text-xl overflow-hidden hover:scale-105 transition-transform">
                            <span className="relative z-10 flex items-center gap-3">
                                Start Building <Zap className="group-hover:text-[#7928CA] transition-colors" />
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Feature Cards (3D Tilt) */}
            <section className="px-6 pb-32 relative z-10">
                <div className={`max-w-7xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8`}>
                    {[
                        { icon: Globe, title: "Universal", desc: "Designed to adapt to any device, any context, any user." },
                        { icon: Cpu, title: "Intelligent", desc: "AI-driven layouts that optimize themselves in real-time." },
                        { icon: Infinity, title: "Limitless", desc: "Breaking the boundaries of what web design can achieve." },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="ultimate-card p-12 group"
                            style={{
                                transform: `perspective(1000px) rotateX(${-mousePos.y * 2}deg) rotateY(${mousePos.x * 2}deg)`
                            }}
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF0080] to-[#7928CA] flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(255,0,128,0.4)]">
                                <item.icon size={32} className="text-white" />
                            </div>
                            <h3 className="font-ultimate font-bold text-3xl mb-4">{item.title}</h3>
                            <p className="font-ultimate text-gray-400 text-lg leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
