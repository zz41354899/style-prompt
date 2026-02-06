import { useState } from 'react';
import { Menu, X, ChevronDown, Camera, Heart, Sun, Image, Aperture, Film, Star, ArrowRight, Sparkles } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S41PolaroidPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#F5F5F0', color: '#2C2C2C', fontFamily: '"Quicksand", "Helvetica Neue", sans-serif' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Darker+Grotesque:wght@400;600;800&display=swap');

                .font-hand { font-family: "Caveat", cursive; }
                .font-retro { font-family: "Darker Grotesque", sans-serif; }

                .polaroid-frame {
                    background: #fff;
                    padding: 1rem 1rem 3.5rem 1rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid #eaeaea;
                }
                .polaroid-frame:hover {
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                }

                .photo-develop {
                    animation: develop 3s ease-out forwards;
                    filter: sepia(20%) contrast(110%) brightness(0.8) grayscale(100%);
                }

                @keyframes develop {
                    0% { filter: sepia(20%) contrast(110%) brightness(0.2) grayscale(100%); }
                    50% { filter: sepia(40%) contrast(100%) brightness(0.6) grayscale(50%); }
                    100% { filter: sepia(20%) contrast(90%) brightness(1) grayscale(0%); }
                }

                .rainbow-bar {
                    background: linear-gradient(90deg, 
                        #FF3636 0% 20%, 
                        #FF8A36 20% 40%, 
                        #FFD736 40% 60%, 
                        #36D74B 60% 80%, 
                        #3689FF 80% 100%
                    );
                }

                .grain-overlay {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
                    pointer-events: none;
                }
            `}</style>

            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 px-6 relative z-10">
                    <div className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden ring-4 ring-black/5">
                            <div className="absolute inset-x-0 bottom-0 h-1.5 rainbow-bar"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            <div className="w-4 h-4 rounded-full bg-[#1a1a1a] shadow-inner border border-gray-700"></div>
                            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black tracking-tighter leading-none font-retro">INSTANT<span className="text-amber-600">.UI</span></span>
                            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 font-retro">Analog Memories</span>
                        </div>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Gallery', 'Memories', 'Albums', 'Print'].map((item) => (
                                <span key={item} className="text-sm font-medium cursor-pointer hover:text-amber-600 transition-colors">{item}</span>
                            ))}
                            <button className="px-6 py-2 bg-black text-white font-bold tracking-wide rounded hover:bg-gray-800 transition-colors font-retro rainbow-bar bg-[length:100%_0%] hover:bg-[length:100%_100%] bg-no-repeat bg-bottom transition-[background-size] duration-300">
                                START CAPTURING
                            </button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="border-t border-gray-200 bg-white">
                        {['Gallery', 'Memories', 'Albums', 'Print'].map((item) => (
                            <div key={item} className="p-4 text-lg font-medium border-b border-gray-100">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            <section className="py-20 px-6 relative">
                <div className="absolute inset-0 grain-overlay pointer-events-none"></div>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-sm border border-gray-200 shadow-sm transform -rotate-2">
                            <Sparkles size={16} className="text-amber-500" />
                            <span className="text-sm font-bold text-gray-800 font-retro tracking-wide text-lg">CAPTURE THE MOMENT</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 font-retro tracking-tighter text-gray-900">
                            MEMORIES<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 relative">
                                DEVELOPED
                                <span className="absolute -bottom-2 left-0 w-full h-2 rainbow-bar opacity-500"></span>
                            </span>
                            <br />INSTANTLY.
                        </h1>
                        <p className="text-xl text-gray-600 max-w-lg mb-10 leading-relaxed">
                            Create nostalgic, beautiful interfaces inspired by vintage instant photography. Every frame tells a story.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2">
                                <Camera size={20} /> Start Creating
                            </button>
                            <button className="px-8 py-4 border-2 border-gray-300 font-medium rounded-full hover:border-gray-900 transition-colors">View Gallery</button>
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-center items-center relative h-[600px] w-full">
                        {/* Background Polaroid */}
                        <div className="polaroid-frame absolute top-10 right-10 rotate-12 w-80 z-0 bg-white transform hover:rotate-6 hover:scale-105 hover:z-20 border border-gray-200">
                            <div className="aspect-square bg-gray-100 mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-indigo-100 photo-develop"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-50 mix-blend-multiply">
                                    <Sun size={64} className="text-purple-400" />
                                </div>
                            </div>
                            <div className="font-hand text-2xl text-gray-600 transform -rotate-1 text-center">Golden hour ✨</div>
                        </div>

                        {/* Foreground Polaroid */}
                        <div className="polaroid-frame absolute top-20 left-10 -rotate-6 w-80 z-10 bg-white transform hover:rotate-0 hover:scale-105 hover:z-20 border border-gray-200">
                            <div className="aspect-square bg-gray-900 mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-orange-100 photo-develop" style={{ animationDelay: '0.5s' }}></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-50 mix-blend-overlay">
                                    <Image size={64} className="text-orange-900" />
                                </div>
                                <div className="absolute bottom-2 left-2 w-full h-1 rainbow-bar opacity-50"></div>
                            </div>
                            <div className="font-hand text-2xl text-gray-800 text-center">Summer '25 📸</div>
                        </div>

                        {/* Tape elements */}
                        <div className="absolute top-0 right-32 w-32 h-8 bg-yellow-100/80 rotate-45 transform backdrop-blur-sm z-20 shadow-sm border-l border-r border-white/50"></div>
                        <div className="absolute bottom-20 left-0 w-24 h-8 bg-rose-100/80 -rotate-12 transform backdrop-blur-sm z-20 shadow-sm border-l border-r border-white/50"></div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-16 font-retro tracking-tighter text-gray-900">WHY GO INSTANT?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Aperture, title: "SHARP FOCUS", desc: "Crisp, clear components" },
                            { icon: Film, title: "VINTAGE FEEL", desc: "Nostalgic aesthetics" },
                            { icon: Heart, title: "HANDCRAFTED", desc: "Made with love" },
                            { icon: Camera, title: "EASY CAPTURE", desc: "Simple to use" }
                        ].map((f, i) => (
                            <div key={i} className="text-center p-8 rounded-sm bg-white border border-gray-200 hover:border-gray-900 transition-all group hover:-translate-y-1 hover:shadow-lg">
                                <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
                                    <f.icon size={32} className="text-gray-900 group-hover:text-white transition-colors" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 font-retro tracking-tight">{f.title}</h3>
                                <p className="text-gray-500 font-medium">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 relative bg-gray-50 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gray-200 to-gray-200 bg-[length:20px_100%]"></div>

                <div className="max-w-screen-xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-20 font-retro tracking-tighter">UNFORGETTABLE MOMENTS</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: "Alex M.", text: "This design style brings so much warmth to my portfolio.", rotate: "-2deg", imgColor: "from-rose-100 to-amber-100" },
                            { name: "Jamie L.", text: "It's not just a UI, it's a feeling. Absolutely love it.", rotate: "2deg", imgColor: "from-blue-100 to-indigo-100" },
                            { name: "Sam K.", text: "The developing animation is pure magic. 10/10.", rotate: "-1deg", imgColor: "from-emerald-100 to-teal-100" }
                        ].map((t, i) => (
                            <div key={i} className="polaroid-frame mx-auto transform transition-transform duration-300 hover:scale-105 hover:z-10" style={{ '--rotate': t.rotate, transform: `rotate(${t.rotate})` } as React.CSSProperties}>
                                <div className={`aspect-square w-full bg-gradient-to-br ${t.imgColor} flex items-center justify-center mb-4 relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/5 grain-overlay"></div>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} size={16} className="text-gray-900 fill-gray-900 opacity-80" />
                                        ))}
                                    </div>
                                    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/50 backdrop-blur-sm"></div>
                                </div>
                                <div>
                                    <p className="text-xl leading-snug mb-3 font-hand text-gray-800">"{t.text}"</p>
                                    <div className="text-sm font-bold uppercase tracking-widest text-gray-400 font-retro">— {t.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gray-900 text-white">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Choose Your Frame</h2>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                        {[
                            { name: 'Snapshot', price: '$19', features: ['Basic frames', 'Email support'] },
                            { name: 'Portrait', price: '$49', features: ['All frames', 'Priority support', 'Presets'], featured: true },
                            { name: 'Album', price: '$99', features: ['Unlimited', 'Custom frames', 'White label'] }
                        ].map((plan, i) => (
                            <div key={plan.name} className={`p-8 rounded-sm relative group overflow-hidden ${plan.featured ? 'bg-black text-white' : 'bg-white text-gray-900 border border-gray-200'} transition-all hover:-translate-y-2 hover:shadow-xl`}>
                                {plan.featured && <div className="absolute top-0 left-0 w-full h-1.5 rainbow-bar"></div>}

                                <h3 className="text-3xl font-black mb-4 font-retro tracking-tight uppercase">{plan.name}</h3>
                                <div className="text-6xl font-black mb-6 font-retro tracking-tighter">{plan.price}</div>
                                <ul className="space-y-4 mb-8 font-medium">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.featured ? 'bg-amber-500 text-black' : 'bg-gray-100 text-gray-600'}`}>✓</div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-4 text-lg font-bold tracking-wide rounded-sm transition-all ${plan.featured ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                                    CHOOSE PLAN
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-16 font-retro tracking-tighter">DEVELOPING DETAILS</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'HOW DO I GET STARTED?', a: 'Simply choose a plan and start creating beautiful memories.' },
                            { q: 'CAN I PRINT MY DESIGNS?', a: 'Yes! Export high-resolution files ready for printing.' },
                            { q: 'IS THERE A FREE TRIAL?', a: 'All plans come with a 14-day free trial.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-gray-200">
                                <button className="w-full flex items-center justify-between py-6 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-xl font-bold font-retro tracking-wide text-gray-900 group-hover:text-amber-600 transition-colors uppercase">{item.q}</span>
                                    <div className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-all ${expandedFaq === i ? 'bg-black text-white border-black rotate-180' : 'bg-white text-gray-400 group-hover:border-amber-600 group-hover:text-amber-600'}`}>
                                        <ChevronDown size={18} />
                                    </div>
                                </button>
                                {expandedFaq === i && <div className="pb-8 text-lg text-gray-600 font-medium leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-32 px-6 relative overflow-hidden bg-black text-white text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#222_0%,_#000_100%)]"></div>
                <div className="absolute top-0 left-0 w-full h-2 rainbow-bar z-10"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black mb-8 font-retro tracking-tighter">
                        READY TO SNAP?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                        Join thousands of creators capturing their digital memories with InstantUI.
                    </p>
                    <button className="px-10 py-5 bg-white text-black text-lg font-bold rounded-sm inline-flex items-center gap-3 hover:scale-105 transition-transform font-retro tracking-wide">
                        START YOUR FREE TRIAL <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            <footer className="bg-black text-gray-500 py-12 px-6 border-t border-gray-900">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-gradient-to-tr from-gray-800 to-gray-700 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-glass"></div>
                        </div>
                        <span className="text-xl font-bold text-white font-retro tracking-tight">INSTANT<span className="text-gray-600">.UI</span></span>
                    </div>
                    <div className="text-sm font-medium tracking-wide">© 2025 INSTANTUI. DEVELOPED WITH LOVE.</div>
                </div>
            </footer>
        </div>
    );
};
