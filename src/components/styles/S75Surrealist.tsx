import { useState } from 'react';
import { Cloud, Watch, Eye, Menu, X, ArrowRight, Moon } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S75Surrealist = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#f3e5f5] font-sans text-[#4a148c] overflow-x-hidden relative selection:bg-[#7b1fa2] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Quicksand:wght@300;600&display=swap');
        .font-dream { font-family: 'Cinzel Decorative', cursive; }
        .font-body { font-family: 'Quicksand', sans-serif; }
        
        .melt-shape {
           border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
           animation: morph-blob 8s ease-in-out infinite alternate;
        }
        @keyframes morph-blob {
           0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
           100% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        .long-shadow {
           box-shadow: 15px 15px 0 rgba(74, 20, 140, 0.1);
        }
        .float {
           animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
           0% { transform: translateY(0px) rotate(0deg); }
           50% { transform: translateY(-20px) rotate(5deg); }
           100% { transform: translateY(0px) rotate(0deg); }
        }
        .cloud-gradient {
           background: linear-gradient(180deg, #e1f5fe 0%, #f3e5f5 100%);
        }
      `}</style>

            {/* Background Sky */}
            <div className="fixed inset-0 cloud-gradient z-0 pointer-events-none" />

            {/* Floating Elements */}
            <div className="fixed top-20 right-[10%] opacity-20 z-0 float animation-delay-1000">
                <Cloud size={200} className="text-white fill-white" />
            </div>
            <div className="fixed bottom-20 left-[10%] opacity-20 z-0 float animation-delay-2000">
                <Watch size={150} className="text-[#7b1fa2] transform rotate-12" />
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/30 backdrop-blur-md px-8 py-4 rounded-full border border-white/60 shadow-lg">
                    <div className="flex items-center gap-2">
                        <Eye size={28} className="text-[#7b1fa2]" />
                        <span className="font-dream font-bold text-2xl text-[#4a148c]">Rêverie</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-10`}>
                        {['Subconscious', 'Lucid', 'Mirage', 'Awaken'].map((item) => (
                            <a key={item} href="#" className="font-body font-bold text-[#6a1b9a] hover:text-[#29b6f6] transition-colors uppercase tracking-widest text-xs">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#7b1fa2] text-white font-body font-bold rounded-full hover:bg-[#4a148c] transition-colors shadow-lg flex items-center gap-2">
                            <Moon size={16} /> Sleep
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#4a148c]" /> : <Menu size={24} className="text-[#4a148c]" />}
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
                                Subconscious
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Lucid
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Mirage
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Awaken
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className={`max-w-5xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-16 items-center`}>

                    <div className={`${isMobile ? 'order-2' : 'md:order-1'}`}>
                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-dream mb-6 text-[#4a148c] drop-shadow-sm leading-tight`}>
                            Logic <br />
                            <span className="text-[#29b6f6] italic font-serif">Dissolves</span>
                        </h1>

                        <p className="font-body text-xl text-[#7b1fa2] mb-10 max-w-md leading-relaxed border-l-2 border-[#29b6f6] pl-6 ml-2">
                            Step into a persistent memory where time melts and horizons bend into the impossible.
                        </p>

                        <div className="flex gap-6">
                            <button className="px-8 py-4 bg-white text-[#4a148c] font-body font-bold rounded-2xl border border-[#e1bee7] hover:shadow-[0_10px_30px_rgba(123,31,162,0.2)] transition-shadow flex items-center gap-3">
                                Open Door <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Surreal Composition */}
                    <div className={`${isMobile ? 'order-1' : 'md:order-2'} relative h-[400px] flex items-center justify-center`}>
                        <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-[#7b1fa2] to-[#29b6f6] melt-shape opacity-80 mix-blend-multiply filter blur-sm" />
                        <div className="absolute w-[280px] h-[280px] bg-gradient-to-bl from-[#ff4081] to-[#ffd740] melt-shape opacity-60 mix-blend-multiply animation-delay-2000 filter blur-md" />

                        <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-full shadow-2xl border border-white flex flex-col items-center justify-center w-64 h-64 float">
                            <div className="font-dream text-6xl mb-2 text-[#4a148c]">?</div>
                            <div className="font-body text-xs text-[#7b1fa2] mt-2 uppercase tracking-widest text-center">
                                This is not a DIV
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dream Grid */}
            <section className="py-24 px-4 relative z-10">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-12`}>
                    {[
                        { icon: Watch, title: 'Persistence', desc: 'Time is soft and melting in the heat of the mind.' },
                        { icon: Eye, title: 'Observation', desc: 'The sky is watching you watching it.' },
                        { icon: Cloud, title: 'Levitation', desc: 'Gravity is merely a suggestion here.' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white/40 p-10 rounded-3xl border border-white/60 shadow-lg hover:bg-white/60 transition-colors backdrop-blur-sm group">
                            <div className="mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 origin-center inline-block text-[#7b1fa2]">
                                <item.icon size={48} />
                            </div>
                            <h3 className="font-dream text-2xl text-[#4a148c] mb-4">{item.title}</h3>
                            <p className="font-body text-[#6a1b9a] leading-relaxed font-semibold">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 relative overflow-hidden bg-[#4a148c] text-[#e1bee7] text-center">
                {/* Checkerboard floor effect */}
                <div className="absolute top-0 left-0 w-full h-[20px] bg-[linear-gradient(45deg,#7b1fa2_25%,transparent_25%,transparent_75%,#7b1fa2_75%,#7b1fa2),linear-gradient(45deg,#7b1fa2_25%,transparent_25%,transparent_75%,#7b1fa2_75%,#7b1fa2)] bg-[size:20px_20px] bg-[position:0_0,10px_10px] opacity-20" />

                <div className="max-w-4xl mx-auto px-6 pt-10">
                    <h2 className="font-dream text-4xl mb-8">Wake Up</h2>
                    <div className="w-16 h-1 bg-[#29b6f6] mx-auto mb-8 rounded-full" />

                    <p className="font-body text-sm opacity-60">
                        &copy; 1924 Andre Breton Manifesto. All dreams reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};
