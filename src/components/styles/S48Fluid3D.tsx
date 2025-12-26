import { useState } from 'react';
import { Droplets, Wind, Waves, Zap, Menu, X, ArrowRight, Play } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S48Fluid3D = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Mesh Gradient Background
    const meshBg = `
    radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
    radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
    radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%), 
    radial-gradient(at 0% 50%, hsla(339,49%,30%,1) 0, transparent 50%), 
    radial-gradient(at 100% 50%, hsla(253,16%,7%,1) 0, transparent 50%), 
    radial-gradient(at 0% 100%, hsla(225,39%,30%,1) 0, transparent 50%), 
    radial-gradient(at 100% 100%, hsla(339,49%,30%,1) 0, transparent 50%)
  `;

    return (
        <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&family=Varela+Round&display=swap');
        .font-rounded { font-family: 'Comfortaa', cursive; }
        .font-soft { font-family: 'Varela Round', sans-serif; }
        
        @keyframes float-blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes liquid-morph {
           0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
           50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
           100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}</style>

            {/* Fluid Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-40 blur-3xl" style={{ background: meshBg }}>
                <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-purple-600 rounded-full mix-blend-screen opacity-50 animate-[float-blob_10s_infinite]" />
                <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-blue-500 rounded-full mix-blend-screen opacity-50 animate-[float-blob_12s_infinite_reverse]" />
                <div className="absolute bottom-[20%] left-[40%] w-80 h-80 bg-pink-600 rounded-full mix-blend-screen opacity-50 animate-[float-blob_8s_infinite]" />
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 shadow-lg">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                            <Droplets size={20} className="text-white" />
                        </div>
                        <span className="font-rounded font-bold text-2xl tracking-tight">Flowstate</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Explore', 'Create', 'Community', 'Pro'].map((item) => (
                            <a key={item} href="#" className="font-soft text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-rounded font-bold text-sm shadow-[0_4px_20px_rgba(168,85,247,0.4)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all">
                            Try Free
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
                                Explore
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Create
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Community
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Pro
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 flex min-h-[90vh] items-center justify-center overflow-hidden">
                <div className={`max-w-7xl w-full grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-12 items-center ${isMobile ? 'text-center' : 'text-left'}`}>

                    <div className="relative z-20">
                        <h1 className={`${isMobile ? 'text-5xl' : 'text-8xl'} font-rounded font-bold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-pink-200 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}>
                            Be Like <br /> Water.
                        </h1>

                        <p className={`font-soft ${isMobile ? 'text-xl' : 'text-2xl'} text-white/60 mb-12 max-w-lg ${isMobile ? 'mx-auto' : 'mx-0'} leading-relaxed`}>
                            Immerse your users in 3D fluid interfaces that adapt, morph, and flow naturally.
                        </p>

                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 justify-center ${isMobile ? '' : 'justify-start'}`}>
                            <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all group">
                                <Play className="ml-1 fill-white group-hover:text-pink-400 group-hover:fill-pink-400 transition-colors" />
                            </button>
                            <div className="flex flex-col justify-center text-left">
                                <span className="font-bold text-lg">Watch Showreel</span>
                                <span className="text-sm text-white/50">2:14 • 4K HDR</span>
                            </div>
                        </div>
                    </div>

                    {/* Simulated 3D Fluid Object */}
                    <div className="relative h-[600px] w-full flex items-center justify-center">
                        {/* Main Liquid Blob */}
                        <div className="absolute w-80 h-80 bg-gradient-to-br from-cyan-400/80 via-blue-500/80 to-purple-600/80 backdrop-blur-md shadow-[inset_10px_10px_20px_rgba(255,255,255,0.2),0_0_50px_rgba(59,130,246,0.3)] z-10 animate-[liquid-morph_10s_ease-in-out_infinite]" />

                        {/* Orbiting Droplets */}
                        <div className="absolute w-20 h-20 bg-pink-500/80 rounded-full blur-md animate-[float-blob_6s_infinite] top-10 right-20" />
                        <div className="absolute w-16 h-16 bg-yellow-400/80 rounded-full blur-md animate-[float-blob_8s_infinite_reverse] bottom-20 left-20" />

                        {/* Glass Overlay */}
                        <div className="absolute w-96 h-64 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transform rotate-6 z-20 flex items-center justify-center shadow-2xl">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">98%</div>
                                <div className="font-soft text-sm text-white/50 uppercase tracking-widest">Flow Efficiency</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Bubbles */}
            <section className="py-20 px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-rounded font-bold text-center mb-16">Fluid Dynamics</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
                        {[
                            { icon: Waves, title: 'Real-time Sim', desc: 'Physics-based liquid simulation running at 60fps.' },
                            { icon: Zap, title: 'GPU Accelerated', desc: 'Harnessing WebGL for buttery smooth rendering.' },
                            { icon: Wind, title: 'Interaction', desc: 'Touch, distort, and splash the interface.' },
                        ].map((item, i) => (
                            <div key={i} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full transform scale-75 group-hover:scale-100 duration-500" />
                                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] text-center hover:-translate-y-2 transition-transform">
                                    <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                                        <item.icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold font-rounded mb-3">{item.title}</h3>
                                    <p className="text-white/60 font-soft leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-md relative z-10">
                <div className={`max-w-7xl mx-auto px-6 flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between items-center gap-6`}>
                    <div className="flex items-center gap-2 text-2xl font-rounded font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        Flowstate
                    </div>
                    <div className="flex gap-8 text-sm font-soft text-white/40">
                        <a href="#" className="hover:text-white transition-colors">Manifesto</a>
                        <a href="#" className="hover:text-white transition-colors">Gallery</a>
                        <a href="#" className="hover:text-white transition-colors">Lab</a>
                    </div>
                    <div className="text-sm text-white/30">
                        &copy; 2024 Fluid UI. Stay wavy.
                    </div>
                </div>
            </footer>
        </div>
    );
};
