import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Scissors, Layers, Newspaper, Pin, Paperclip, Sticker, PenTool } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S50CollagePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#F0EAD6] text-[#2C2416] selection:bg-[#E63946] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Courier+Prime:wght@400;700&family=Permanent+Marker&display=swap');

                .font-collage-serif { font-family: 'Playfair Display', serif; }
                .font-collage-mono { font-family: 'Courier Prime', monospace; }
                .font-collage-marker { font-family: 'Permanent Marker', cursive; }

                /* Cardboard Texture */
                .texture-cardboard {
                    background-color: #E8DCC4;
                    background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
                }

                /* Ripped Paper Edge */
                .ripped-edge-top {
                    clip-path: polygon(0% 10px, 5% 0px, 10% 12px, 15% 2px, 20% 10px, 25% 0px, 30% 12px, 35% 2px, 40% 10px, 45% 0px, 50% 12px, 55% 2px, 60% 10px, 65% 0px, 70% 12px, 75% 2px, 80% 10px, 85% 0px, 90% 12px, 95% 2px, 100% 10px, 100% 100%, 0% 100%);
                }
                .ripped-edge-bottom {
                    clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 10px), 95% 100%, 90% calc(100% - 12px), 85% 100%, 80% calc(100% - 10px), 75% 100%, 70% calc(100% - 12px), 65% 100%, 60% calc(100% - 10px), 55% 100%, 50% calc(100% - 12px), 45% 100%, 40% calc(100% - 10px), 35% 100%, 30% calc(100% - 12px), 25% 100%, 20% calc(100% - 10px), 15% 100%, 10% calc(100% - 12px), 5% 100%, 0% calc(100% - 10px));
                }

                /* Scotch Tape */
                .scotch-tape {
                    position: absolute;
                    height: 40px;
                    width: 120px;
                    background-color: rgba(255, 255, 255, 0.2);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    transform: rotate(-2deg);
                    backdrop-filter: blur(1px);
                    border-left: 2px dashed rgba(255,255,255,0.4);
                    border-right: 2px dashed rgba(255,255,255,0.4);
                    z-index: 20;
                    opacity: 0.6;
                }

                /* Halftone Pattern */
                .halftone-dots {
                    background-image: radial-gradient(circle, #2C2416 1px, transparent 1px);
                    background-size: 8px 8px;
                    opacity: 0.1;
                }
                
                .photo-filter {
                    filter: sepia(0.3) contrast(1.1) brightness(0.9);
                    transition: all 0.3s;
                }
                .photo-filter:hover {
                    filter: sepia(0) contrast(1) brightness(1);
                }

                /* Cutout Shadow */
                .cutout-shadow {
                    box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
                }
            `}</style>

            <div className="absolute inset-0 texture-cardboard fixed z-[-1]"></div>

            {/* Background Chaos */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 right-[-5%] w-64 h-64 bg-[#E63946] rounded-full mix-blend-multiply opacity-20 transform rotate-12"></div>
                <div className="absolute bottom-40 left-[-5%] w-80 h-80 bg-[#457B9D] rounded-full mix-blend-multiply opacity-20 transform -rotate-12"></div>
                <div className="absolute top-1/2 left-1/2 w-full h-full halftone-dots"></div>

                {/* Random geometric scraps */}
                <div className="absolute top-[15%] left-[10%] w-32 h-32 border-4 border-[#2C2416] transform rotate-45 opacity-10"></div>
                <div className="absolute bottom-[20%] right-[15%] w-40 h-8 bg-[#F4D35E] transform -rotate-3 opacity-40"></div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 transition-all duration-300 transform rotate-[0.5deg]">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="bg-[#FFFEF9] border-2 border-[#2C2416] p-4 flex items-center justify-between shadow-[4px_4px_0px_rgba(0,0,0,0.1)] ripped-edge-bottom relative">
                        <div className="scotch-tape top-[-20px] left-[50px] transform rotate-[85deg]"></div>

                        <div className="flex items-center gap-3">
                            <Scissors size={24} className="text-[#E63946] transform -rotate-90" />
                            <span className="text-3xl font-collage-marker tracking-wider transform -rotate-2">ZINE<span className="text-[#E63946]">.PRO</span></span>
                        </div>

                        {!isMobile && (
                            <nav className="flex items-center gap-8">
                                {['Issues', 'Submit', 'Archive'].map((item, i) => (
                                    <a key={item} href="#" className={`font-collage-mono font-bold text-lg hover:text-[#E63946] hover:underline decoration-wavy decoration-2 underline-offset-4 transform rotate-${i % 2 === 0 ? '1' : '-1'}`}>
                                        {item}
                                    </a>
                                ))}
                                <button className="px-6 py-2 bg-[#2C2416] text-[#FFFEF9] font-collage-mono font-bold border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all transform hover:-rotate-1 shadow-md">
                                    Subscribe
                                </button>
                            </nav>
                        )}

                        {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border-2 border-[#2C2416] hover:bg-[#F4D35E] transition-colors">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="mx-4 bg-[#FFFEF9] border-2 border-[#2C2416] border-t-0 p-6 shadow-lg transform -rotate-[0.5deg]">
                        {['Issues', 'Submit', 'Archive'].map((item) => (
                            <div key={item} className="py-3 font-collage-mono font-bold text-xl border-b-2 border-dotted border-[#2C2416]">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-3 bg-[#E63946] text-white font-collage-marker text-xl tracking-widest transform rotate-1">
                            SUBSCRIBE NOW!!
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-16 md:py-24 px-4 relative overflow-visible">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Column */}
                    <div className="relative z-10 p-8 bg-[#FFFEF9] transform rotate-1 shadow-lg border border-[#DDD] cutout-shadow">
                        <div className="scotch-tape -top-5 left-1/2 transform -translate-x-1/2 rotate-90"></div>
                        <div className="absolute -left-4 top-10 w-8 h-32 bg-[#E63946] -z-10 transform -rotate-3"></div>

                        <div className="inline-block bg-[#F4D35E] px-4 py-1 mb-6 transform -rotate-2 border border-black shadow-[2px_2px_0px_#000]">
                            <span className="font-collage-mono font-bold text-sm uppercase">Volume 10 • May 2025</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-collage-serif font-bold leading-none mb-6 text-[#2C2416]">
                            Mixed<br />
                            <span className="font-collage-marker text-[#E63946] text-7xl md:text-9xl ml-10 transform rotate-2 inline-block">Media</span>
                        </h1>

                        <p className="font-collage-mono text-lg mb-8 leading-relaxed border-l-4 border-[#2C2416] pl-6 bg-[#F1FAEE] p-4 transform -rotate-1 w-[105%] -ml-2">
                            A digital homage to the analog age. Scissors, glue, and a whole lot of chaos. <span className="bg-[#F4D35E] px-1">Curated daily.</span>
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <button className="px-8 py-3 bg-[#2C2416] text-[#FFFEF9] font-collage-mono font-bold hover:bg-[#E63946] transition-colors transform rotate-1 shadow-[4px_4px_0px_#000]">
                                Read Latest Issue
                            </button>
                            <button className="px-8 py-3 bg-white text-[#2C2416] font-collage-mono font-bold border-2 border-[#2C2416] hover:bg-[#F1FAEE] transition-colors transform -rotate-1 shadow-[4px_4px_0px_#000]">
                                Submit Art
                            </button>
                        </div>

                        <Pin size={32} className="absolute -top-4 -right-4 text-[#E63946] drop-shadow-md" />
                    </div>

                    {/* Image Collage Column */}
                    <div className="relative h-[500px] w-full mt-10 lg:mt-0">
                        {/* Main Photo */}
                        <div className="absolute top-10 left-10 w-64 h-80 bg-white p-2 transform -rotate-6 shadow-xl z-10 transition-transform hover:scale-105 hover:rotate-0 duration-500">
                            <div className="scotch-tape -top-4 left-1/3 rotate-12"></div>
                            <div className="w-full h-full bg-[#333] grayscale contrast-125 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1000&auto=format&fit=crop" alt="Vintage vibe" className="w-full h-full object-cover opacity-80" />
                            </div>
                            <div className="absolute bottom-4 right-4 font-collage-marker text-[#E63946] text-xl transform -rotate-12 bg-white px-2 shadow-sm">Analog Soul</div>
                        </div>

                        {/* Secondary Photo */}
                        <div className="absolute top-40 right-10 w-56 h-64 bg-white p-2 transform rotate-12 shadow-md z-0 transition-transform hover:scale-105 hover:rotate-6 duration-500">
                            <div className="w-full h-full bg-[#555] sepia contrast-125 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1596464716127-f9a8759fb4d6?q=80&w=2535&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover" />
                            </div>
                            <div className="scotch-tape -bottom-4 right-1/3 rotate-[-12deg]"></div>
                        </div>

                        {/* Text Scrap */}
                        <div className="absolute bottom-10 left-0 bg-[#F4D35E] p-4 transform rotate-3 shadow-lg z-20 w-48 ripped-edge-top">
                            <Paperclip size={24} className="absolute -top-3 -right-2 text-[#333] transform rotate-45" />
                            <p className="font-collage-mono text-xs font-bold leading-tight">
                                FIG 1.2: The deconstruction of the digital interface into raw, tactile components.
                            </p>
                        </div>

                        {/* Sticker */}
                        <div className="absolute top-0 right-20 z-30 transform rotate-12 drop-shadow-lg">
                            <div className="w-24 h-24 bg-[#E63946] rounded-full flex items-center justify-center border-4 border-white text-white font-collage-marker text-center leading-none p-2 animate-pulse">
                                NEW<br />DROP!
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Scrapbook) */}
            <section className="py-20 px-4 relative">
                {/* Torn paper divider */}
                <div className="absolute top-0 left-0 w-full h-12 bg-white ripped-edge-bottom transform rotate-180 z-10"></div>

                <div className="max-w-6xl mx-auto mt-12 bg-white p-6 md:p-12 shadow-2xl transform rotate-[0.5deg] relative">
                    <div className="scotch-tape -top-5 left-10 rotate-[-5deg]"></div>
                    <div className="scotch-tape -top-5 right-10 rotate-[5deg]"></div>

                    <h2 className="text-5xl font-collage-serif font-black text-center mb-16 relative inline-block left-1/2 transform -translate-x-1/2">
                        <span className="relative z-10">The Toolkit</span>
                        <span className="absolute bottom-2 left-0 w-full h-4 bg-[#A8DADC] -z-10 transform -rotate-1"></span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
                        {[
                            { icon: Scissors, title: "Cut & Paste", desc: "Drag, drop, rip, and stick.", color: "text-[#E63946]", bg: "bg-[#F1FAEE]" },
                            { icon: Layers, title: "Layering", desc: "Infinite z-index chaos.", color: "text-[#1D3557]", bg: "bg-[#A8DADC]" },
                            { icon: Newspaper, title: "Textures", desc: "Authentic grain & noise.", color: "text-[#F4D35E]", bg: "bg-[#FFF1E6]" }
                        ].map((f, i) => (
                            <div key={i} className={`p-6 ${f.bg} transform rotate-${(i - 1) * 2} shadow-lg border-2 border-[#2C2416] relative transition-transform hover:scale-105 hover:rotate-0`}>
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#333] shadow-sm border border-gray-500"></div>
                                <f.icon className={`w-12 h-12 mb-4 ${f.color}`} strokeWidth={2.5} />
                                <h3 className="text-2xl font-collage-serif font-bold mb-2">{f.title}</h3>
                                <p className="font-collage-mono text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Ticket Stubs) */}
            <section className="py-24 px-4 bg-[#2C2416] text-[#F0EAD6] relative overflow-hidden">
                <div className="absolute inset-0 halftone-dots opacity-20"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-5xl font-collage-marker text-center mb-20 text-white transform -rotate-2">
                        Get Your Pass
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'Day Pass', price: 'Free', color: '#A8DADC', type: 'STANDARD' },
                            { name: 'Season', price: '$25', color: '#F4D35E', type: 'PREMIUM', featured: true },
                            { name: 'Lifetime', price: '$99', color: '#E63946', type: 'VIP' }
                        ].map((plan, i) => (
                            <div key={i} className="relative bg-[#F0EAD6] text-[#2C2416] p-0 shadow-[10px_10px_0px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-transform">
                                {/* Ticket Stub Look */}
                                <div className="border-b-2 border-dashed border-[#2C2416] p-6 flex flex-col items-center justify-center bg-white relative overflow-hidden">
                                    <div className="absolute -left-4 top-1/2 w-8 h-8 bg-[#2C2416] rounded-full"></div>
                                    <div className="absolute -right-4 top-1/2 w-8 h-8 bg-[#2C2416] rounded-full"></div>
                                    <h3 className="text-3xl font-collage-serif font-bold uppercase tracking-widest">{plan.type}</h3>
                                    <span className="font-collage-mono text-xs mt-1">ADMIT ONE</span>
                                </div>

                                <div className="p-8 text-center relative" style={{ backgroundColor: plan.color }}>
                                    {plan.featured && (
                                        <div className="absolute top-2 right-2 transform rotate-12 bg-white px-2 py-1 border border-black font-collage-marker text-xs text-red-600 shadow-sm">
                                            BEST VALUE
                                        </div>
                                    )}
                                    <div className="text-6xl font-collage-mono font-bold mb-4">{plan.price}</div>
                                    <h4 className="font-collage-serif text-xl font-bold mb-6 italic">{plan.name}</h4>

                                    <ul className="text-left font-collage-mono text-sm space-y-2 mb-8 border-t border-black pt-4">
                                        <li className="flex items-center gap-2"><Check size={14} /> Full Access</li>
                                        <li className="flex items-center gap-2"><Check size={14} /> No Ads</li>
                                        <li className={`flex items-center gap-2 ${i === 0 ? 'line-through opacity-50' : ''}`}><Check size={14} /> Digital Downloads</li>
                                    </ul>

                                    <button className="w-full bg-[#2C2416] text-[#F0EAD6] py-3 font-collage-bold font-bold uppercase hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition-all">
                                        Purchase
                                    </button>

                                    <div className="mt-4 font-mono text-[10px] opacity-70 tracking-widest">
                                        ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area (Post-it Notes) */}
            <section className="py-24 px-6 relative bg-white border-t-2 border-[#2C2416]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-collage-serif font-bold text-center mb-16 underline decoration-[#E63946] decoration-4 underline-offset-8">
                        The Fine Print
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[{ q: 'Are these real scraps?', a: 'Digitally scanned from 1980s magazines and newspapers.', color: '#FEFAE0', rotate: '-2' },
                        { q: 'Can I print this?', a: 'High-res exports suitable for real-world zines.', color: '#E0FAFA', rotate: '1' },
                        { q: 'Is it responsive?', a: 'Chaos that scales perfectly to any viewport.', color: '#FAE0E4', rotate: '-1' },
                        { q: 'Copyright?', a: 'CC0 Assets. Use them for whatever you want.', color: '#E0FAE2', rotate: '2' }
                        ].map((item, i) => (
                            <div key={i} className={`p-6 shadow-md transition-transform hover:scale-105 hover:z-10 relative`} style={{ backgroundColor: item.color, transform: `rotate(${item.rotate}deg)` }}>
                                <div className="scotch-tape -top-3 left-1/2 -translate-x-1/2 rotate-0 opacity-40"></div>
                                <h3 className="font-collage-marker text-xl mb-3 text-[#2C2416]">{item.q}</h3>
                                <p className="font-collage-mono text-sm leading-relaxed">{item.a}</p>
                                <div className="absolute bottom-2 right-2 opacity-20 transform rotate-12">
                                    <Sticker size={32} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#2C2416] text-[#F0EAD6] py-16 px-6 relative border-t-8 border-[#F4D35E]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Scissors size={32} className="text-[#F4D35E]" />
                            <span className="text-4xl font-collage-marker">ZINE.PRO</span>
                        </div>
                        <p className="font-collage-mono text-sm max-w-md opacity-70">
                            Cut, paste, and copy-left.<br />
                            Made with messy hands in a digital world.
                        </p>
                    </div>

                    <div className="flex gap-6 font-collage-mono font-bold text-lg">
                        <a href="#" className="hover:text-[#F4D35E] hover:underline">Instagram</a>
                        <a href="#" className="hover:text-[#F4D35E] hover:underline">Pinterest</a>
                        <a href="#" className="hover:text-[#F4D35E] hover:underline">Behance</a>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#444] text-center font-collage-mono text-xs opacity-50">
                    © 2025 Zine Pro Archive. No Rights Reserved.
                </div>
            </footer>
        </div>
    );
};
