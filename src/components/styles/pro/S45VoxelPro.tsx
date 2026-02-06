import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Blocks, Gamepad2, Cpu, Layers, Box, Trophy, Hammer, Star } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S45VoxelPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#2C2117] text-[#E0E0E0] font-mono selection:bg-lime-500 selection:text-black">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

                .font-voxel-head { font-family: 'Press Start 2P', cursive; }
                .font-voxel-body { font-family: 'VT323', monospace; }

                /* Pixel Texture Background */
                .voxel-bg {
                    background-color: #3b2e21;
                    background-image: 
                        linear-gradient(45deg, #32251a 25%, transparent 25%, transparent 75%, #32251a 75%, #32251a),
                        linear-gradient(45deg, #32251a 25%, transparent 25%, transparent 75%, #32251a 75%, #32251a);
                    background-size: 40px 40px;
                    background-position: 0 0, 20px 20px;
                }

                /* 3D Block CSS */
                .voxel-btn-green {
                    background-color: #5D8C3F;
                    box-shadow: 
                        inset 4px 4px 0px rgba(255,255,255,0.2),
                        inset -4px -4px 0px rgba(0,0,0,0.2),
                        0px 8px 0px #2F4F1B;
                    transition: transform 0.1s, box-shadow 0.1s;
                }
                .voxel-btn-green:active {
                    transform: translateY(8px);
                    box-shadow: 
                        inset 4px 4px 0px rgba(255,255,255,0.2),
                        inset -4px -4px 0px rgba(0,0,0,0.2),
                        0px 0px 0px #2F4F1B;
                }

                .voxel-btn-blue {
                    background-color: #3B82F6;
                    box-shadow: 
                        inset 4px 4px 0px rgba(255,255,255,0.2),
                        inset -4px -4px 0px rgba(0,0,0,0.2),
                        0px 8px 0px #1E40AF;
                    transition: transform 0.1s, box-shadow 0.1s;
                }
                .voxel-btn-blue:active {
                    transform: translateY(8px);
                    box-shadow: 
                        inset 4px 4px 0px rgba(255,255,255,0.2),
                        inset -4px -4px 0px rgba(0,0,0,0.2),
                        0px 0px 0px #1E40AF;
                }

                .voxel-card {
                    background-color: #5D4037;
                    border: 4px solid #3E2723;
                    box-shadow: 8px 8px 0px #251815;
                    image-rendering: pixelated;
                }
                
                .voxel-text-outline {
                    text-shadow: 2px 2px 0px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
                }
                
                .pixelated-border {
                    box-shadow: 
                        -4px 0 0 0 white,
                        4px 0 0 0 white,
                        0 -4px 0 0 white,
                        0 4px 0 0 white;
                    margin: 4px;
                }
            `}</style>

            <div className="absolute inset-0 voxel-bg opacity-30 pointer-events-none fixed"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#3E2723] border-b-4 border-black shadow-lg">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-lime-600 border-4 border-lime-800 flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
                            <Blocks className="text-white" size={24} />
                        </div>
                        <span className="text-xl font-voxel-head text-white voxel-text-outline tracking-wider">VOXEL<span className="text-lime-400">ui</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['World', 'Builds', 'Skins', 'Server'].map((item) => (
                                <a key={item} href="#" className="font-voxel-head text-xs text-yellow-100 hover:text-yellow-400 transition-colors uppercase tracking-widest cursor-pointer">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-3 font-voxel-head text-xs text-white uppercase tracking-wider voxel-btn-green">
                                Connect
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white bg-black/20 rounded">{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="border-t-4 border-black bg-[#4E342E] p-6 shadow-2xl">
                        {['World', 'Builds', 'Skins', 'Server'].map((item) => (
                            <div key={item} className="py-4 text-sm font-voxel-head text-white border-b-2 border-black/20 hover:text-yellow-400">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 font-voxel-head text-xs text-white uppercase voxel-btn-green">
                            Connect
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative z-10 text-center lg:text-left">
                        <div className="inline-block px-4 py-2 bg-black/40 border-2 border-white/20 mb-8 backdrop-blur-sm">
                            <span className="font-voxel-body text-xl text-yellow-400 tracking-widest uppercase">Build Without Limits</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-voxel-head leading-snug mb-8 text-white voxel-text-outline">
                            CRAFT YOUR <br />
                            <span className="text-lime-400">DIGITAL WORLD</span>
                        </h1>

                        <p className="text-2xl text-gray-300 font-voxel-body mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed bg-black/20 p-4 border-l-4 border-lime-500">
                            A block-based design system for retro-modern web experiences. Stack components like voxels.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            <button className="px-8 py-5 text-sm font-voxel-head text-white uppercase voxel-btn-green flex items-center justify-center gap-3">
                                Start Mining <Hammer size={18} />
                            </button>
                            <button className="px-8 py-5 text-sm font-voxel-head text-white uppercase voxel-btn-blue flex items-center justify-center gap-3">
                                View Map <Blocks size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center perspective-[1000px]">
                        {/* Voxel Isometric Scene */}
                        <div className="relative w-64 h-64 transform rotate-x-60 rotate-z-[-45deg] bg-[#5D8C3F] box-shadow-[0_20px_0_#2F4F1B] border-4 border-[#3A5F20]">
                            {/* Grass Top */}
                            <div className="absolute inset-0 bg-[#74B04F] opacity-20 border-4 border-dashed border-[#8ACF5E]"></div>

                            {/* Voxel Character Abstract */}
                            <div className="absolute bottom-1/4 left-1/4 w-12 h-24 bg-blue-500 border-2 border-blue-700 shadow-[4px_4px_0_rgba(0,0,0,0.3)] transform -translate-y-4">
                                <div className="w-full h-8 bg-pink-300 border-b-2 border-black/20"></div> {/* Hand/Face */}
                            </div>

                            {/* Floating Blocks */}
                            <div className="absolute -top-12 -right-4 w-16 h-16 bg-[#FFD700] border-4 border-[#B29600] animate-bounce shadow-[8px_8px_0_rgba(0,0,0,0.2)]"></div>
                            <div className="absolute top-1/2 -left-12 w-12 h-12 bg-[#FF6B6B] border-4 border-[#A63535] animate-pulse shadow-[6px_6px_0_rgba(0,0,0,0.2)]"></div>

                            {/* Shadow Base */}
                            <div className="absolute top-full left-4 w-full h-8 bg-black/30 blur-md transform scale-x-110"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Inventory) */}
            <section className="py-24 px-6 bg-[#3E2723] border-y-4 border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-voxel-head text-white mb-4 voxel-text-outline uppercase">Inventory</h2>
                        <div className="h-2 w-32 bg-lime-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Blocks, title: "Block System", desc: "Modular components that snap together perfectly.", color: "text-lime-400", border: "border-lime-700" },
                            { icon: Cpu, title: "8-Bit Logic", desc: "Lightweight code with heavy visual impact.", color: "text-blue-400", border: "border-blue-700" },
                            { icon: Gamepad2, title: "Playful UI", desc: "Interactions that feel like a game controller.", color: "text-pink-400", border: "border-pink-700" }
                        ].map((f, i) => (
                            <div key={i} className={`bg-[#5D4037] p-8 border-4 ${f.border} shadow-[8px_8px_0px_rgba(0,0,0,0.4)] relative group hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.4)] transition-all`}>
                                <div className="absolute top-0 right-0 p-2 bg-black/20 border-l-4 border-b-4 border-black/10">
                                    <span className="font-voxel-body text-xl text-white/50">LVL {i + 1}</span>
                                </div>
                                <div className={`w-16 h-16 bg-black/30 mb-6 flex items-center justify-center border-4 border-black/20 ${f.color}`}>
                                    <f.icon size={32} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-lg font-voxel-head text-white mb-4 uppercase leading-relaxed text-shadow-sm">{f.title}</h3>
                                <p className="text-2xl text-yellow-100/80 font-voxel-body leading-tight">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Store) */}
            <section className="py-24 px-6 bg-[#2C2117]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-voxel-head text-center mb-16 voxel-text-outline text-white uppercase">Item Shop</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        {[
                            { name: 'Wood Kit', price: '0', bg: 'bg-[#8D6E63]', border: 'border-[#5D4037]', btn: 'bg-[#5D4037]', icon: Box },
                            { name: 'Diamond Set', price: '45', bg: 'bg-[#29B6F6]', border: 'border-[#0288D1]', btn: 'bg-[#0288D1]', icon: Check, featured: true },
                            { name: 'Obsidian', price: '90', bg: 'bg-[#4527A0]', border: 'border-[#311B92]', btn: 'bg-[#311B92]', icon: Star }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-1 ${plan.featured ? 'transform scale-105 z-10' : ''}`}>
                                <div className={`h-full ${plan.bg} border-4 ${plan.border} p-6 shadow-[8px_8px_0px_rgba(0,0,0,0.5)] flex flex-col`}>
                                    <div className="text-center border-b-4 border-black/10 pb-6 mb-6">
                                        <h3 className="text-sm font-voxel-head text-white uppercase mb-4">{plan.name}</h3>
                                        <div className="inline-block bg-black/20 px-4 py-2 rounded">
                                            <span className="text-4xl font-voxel-body text-white font-bold">${plan.price}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {['Core Blocks', 'Texture Pack', 'Mod Support', 'Private Server'].slice(0, i + 2).map((item) => (
                                            <li key={item} className="flex items-center gap-3 font-voxel-body text-xl text-white/90">
                                                <div className="w-4 h-4 bg-lime-500 border-2 border-lime-800"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 text-xs font-voxel-head text-white uppercase shadow-[0_4px_0_rgba(0,0,0,0.3)] hover:brightness-110 active:translate-y-1 active:shadow-none transition-all ${plan.btn}`}>
                                        Craft
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="inline-flex flex-col items-center bg-[#4E342E] p-6 border-4 border-[#3E2723] shadow-lg max-w-2xl mx-auto">
                            <Trophy className="text-yellow-400 mb-4" size={48} />
                            <h3 className="text-xl font-voxel-head text-white mb-2">ACHIEVEMENT UNLOCKED</h3>
                            <p className="text-xl font-voxel-body text-gray-300">"Voxel Master" - Viewed the pricing section.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-20 px-6 bg-[#3E2723] border-t-4 border-black">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-voxel-head text-center mb-12 uppercase text-white">Guide Book</h2>

                    <div className="space-y-4">
                        {[{ q: 'IS THIS MINECRAFT?', a: 'No, but it is heavily inspired by the voxel art style and blocky aesthetics.' },
                        { q: 'CAN I EXPORT?', a: 'Yes, layouts can be exported to standard HTML/CSS or React components.' },
                        { q: 'MOBILE FRIENDLY?', a: 'The UI is fully responsive and works on all devices, even potatoes.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#5D4037] border-4 border-[#4E342E] shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
                                <button className="w-full flex items-center justify-between p-4 text-left hover:bg-black/10 transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-voxel-head text-xs text-yellow-100 leading-relaxed uppercase">{item.q}</span>
                                    <ChevronDown size={20} className={`text-lime-400 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} strokeWidth={3} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-4 pt-0 font-voxel-body text-xl text-gray-300 border-t-4 border-[#4E342E] mt-2 pt-4">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1a1a1a] text-gray-500 py-16 px-6 border-t-8 border-lime-600">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-700 border-4 border-white/10 flex items-center justify-center shadow-lg">
                            <Box className="text-white" size={32} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-voxel-head text-white tracking-widest uppercase">VOXEL<span className="text-lime-500">ui</span></span>
                            <span className="font-voxel-body text-xl text-gray-500">v1.20.4</span>
                        </div>
                    </div>

                    <div className="flex gap-8">
                        {['Discord', 'Reddit', 'Twitter'].map((social) => (
                            <a key={social} href="#" className="font-voxel-head text-xs uppercase tracking-wide text-gray-400 hover:text-lime-400 transition-colors border-b-2 border-transparent hover:border-lime-400 pb-1">{social}</a>
                        ))}
                    </div>

                    <div className="text-center md:text-right font-voxel-body text-lg text-gray-600">
                        <p>© 2025 VOXEL SYSTEMS.</p>
                        <p>NOT AFFILIATED WITH MOJANG.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
