import { useState } from 'react';
import { Scroll, Sparkles, Sword, Menu, X, ArrowRight, Wand2 } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S70Fantasy = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Parchment Texture
    const parchment = "url('https://www.transparenttextures.com/patterns/parchment.png')";

    return (
        <div className="min-h-screen bg-[#f5e6ca] font-serif text-[#4a3b2a] overflow-x-hidden relative selection:bg-[#9c27b0] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=MedievalSharp&family=Lato:ital,wght@0,400;0,700;1,400&display=swap');
        .font-rpg { font-family: 'MedievalSharp', cursive; }
        .font-body { font-family: 'Lato', sans-serif; }
        
        .parchment-bg {
           background-color: #f5e6ca;
           background-image: ${parchment};
        }
        .scroll-border {
           border: 10px solid transparent;
           border-image: linear-gradient(to right, #8d6e63, #d7ccc8, #8d6e63) 1;
           box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .rune-glow {
           text-shadow: 0 0 5px #9c27b0, 0 0 10px #9c27b0;
        }
        .magic-particle {
           position: absolute;
           border-radius: 50%;
           background: #ffd700;
           animation: float-up 3s ease-in infinite;
        }
        @keyframes float-up {
           0% { transform: translateY(0) scale(1); opacity: 1; }
           100% { transform: translateY(-50px) scale(0); opacity: 0; }
        }
      `}</style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-50 z-0 bg-repeat bg-[#f5e6ca]" style={{ backgroundImage: parchment }} />

            {/* Floating Particles */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="magic-particle"
                        style={{
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            width: Math.random() * 4 + 2 + 'px',
                            height: Math.random() * 4 + 2 + 'px',
                            animationDelay: Math.random() * 5 + 's',
                            background: Math.random() > 0.5 ? '#9c27b0' : '#ffd700'
                        }}
                    />
                ))}
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-[#fff8e1]/90 backdrop-blur-sm px-8 py-3 rounded-lg border-2 border-[#8d6e63] shadow-lg">
                    <div className="flex items-center gap-3">
                        <Wand2 size={24} className="text-[#9c27b0]" />
                        <span className="font-rpg text-2xl text-[#3e2723]">MYTHOS</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-10`}>
                        {['Quests', 'Bestiary', 'Spells', 'Map'].map((item) => (
                            <a key={item} href="#" className="font-rpg text-lg text-[#5d4037] hover:text-[#9c27b0] transition-colors drop-shadow-sm">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-[#5d4037] text-[#ffd700] font-rpg text-lg rounded-sm border-2 border-[#ffd700] hover:bg-[#3e2723] transition-colors shadow-md">
                            Start Adventure
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-[#3e2723]" /> : <Menu size={24} className="text-[#3e2723]" />}
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
                                Quests
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Bestiary
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Spells
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Map
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center">

                    <div className="mb-6">
                        <span className="text-4xl text-[#9c27b0] opacity-50">✨</span>
                    </div>

                    <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-rpg mb-8 text-[#3e2723] drop-shadow-[2px_2px_0_rgba(255,255,255,0.5)]`}>
                        Legends of <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9c27b0] to-[#673ab7] rune-glow">ARCANA</span>
                    </h1>

                    <p className="font-body text-xl text-[#5d4037] mb-12 max-w-2xl mx-auto leading-relaxed italic">
                        "In a world woven from magic and starlight, a hero must rise to claim their destiny."
                    </p>

                    <div className="flex justify-center gap-8 relative">
                        <img src="https://cdn-icons-png.flaticon.com/512/3062/3062839.png" className="w-16 h-16 absolute -left-20 top-0 opacity-20 animate-bounce" />
                        <img src="https://cdn-icons-png.flaticon.com/512/867/867373.png" className="w-16 h-16 absolute -right-20 bottom-0 opacity-20 animate-bounce animation-delay-1000" />

                        <button className="px-10 py-4 bg-[#9c27b0] text-white font-rpg text-2xl rounded-lg hover:bg-[#7b1fa2] transition-colors shadow-[0_5px_0_#4a148c] active:shadow-none active:translate-y-1 flex items-center gap-3">
                            <Scroll size={24} /> Begin Tale
                        </button>
                    </div>
                </div>
            </section>

            {/* Feature Scroll */}
            <section className="py-24 px-4 bg-[#efebe9] border-y-4 border-[#8d6e63] border-double">
                <div className={`max-w-6xl mx-auto flex flex-col ${isMobile ? '' : 'md:flex-row'} justify-center gap-12`}>
                    {[
                        { icon: Sword, title: 'Epic Combat', desc: 'Turn-based strategy battles.' },
                        { icon: Sparkles, title: 'Magic System', desc: 'Combine elements to cast spells.' },
                        { icon: Scroll, title: 'Deep Lore', desc: 'Thousands of years of history.' },
                    ].map((item, i) => (
                        <div key={i} className="flex-1 bg-[#fff8e1] p-8 text-center rounded-sm shadow-xl border border-[#d7ccc8] relative group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#3e2723] rounded-full flex items-center justify-center border-4 border-[#ffd700] z-10">
                                <item.icon size={24} className="text-[#ffd700]" />
                            </div>
                            <h3 className="font-rpg text-2xl text-[#3e2723] mt-6 mb-4">{item.title}</h3>
                            <p className="font-body text-[#5d4037]">{item.desc}</p>

                            {/* Corner patterns */}
                            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#8d6e63]" />
                            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#8d6e63]" />
                            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#8d6e63]" />
                            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#8d6e63]" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 bg-[#3e2723] text-[#d7ccc8] text-center relative border-t-8 border-[#ffd700]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="font-rpg text-4xl text-[#ffd700] mb-8">The Journey Ends Here</h2>

                    <div className="flex justify-center gap-12 font-rpg text-lg mb-8">
                        <a href="#" className="hover:text-[#fff]">Credits</a>
                        <a href="#" className="hover:text-[#fff]">Privacy</a>
                        <a href="#" className="hover:text-[#fff]">Support</a>
                    </div>

                    <div className="font-body text-sm opacity-50">
                        &copy; 2024 Fable Studios. All spells reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};
