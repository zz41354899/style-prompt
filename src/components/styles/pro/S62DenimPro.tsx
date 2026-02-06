import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Shirt, Scissors, Tag, Star, ShoppingBag, Truck, MapPin } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S62DenimPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#2C3E50] text-[#E8F0F8] selection:bg-[#E67E22] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Anton&family=Fjalla+One&family=Roboto+Condensed:wght@400;700&display=swap');

                .font-denim-head { font-family: 'Fjalla One', sans-serif; }
                .font-denim-label { font-family: 'Anton', sans-serif; }
                .font-denim-body { font-family: 'Roboto Condensed', sans-serif; }

                /* Denim Fabric Texture */
                .denim-texture {
                    background-image: 
                        repeating-linear-gradient(45deg, 
                            rgba(255, 255, 255, 0.03) 0px, 
                            rgba(255, 255, 255, 0.03) 1px, 
                            transparent 1px, 
                            transparent 3px
                        ),
                        repeating-linear-gradient(-45deg, 
                            rgba(0, 0, 0, 0.1) 0px, 
                            rgba(0, 0, 0, 0.1) 1px, 
                            transparent 1px, 
                            transparent 3px
                        );
                    background-size: 8px 8px;
                }
                
                /* Orange Contrast Stitching */
                .stitch-orange {
                    border: 2px dashed #E67E22;
                    box-shadow: 0 0 0 4px #2c3e50, 0 0 0 6px #E67E22;
                }
                
                .stitch-btn {
                    position: relative;
                    border: 2px dashed #E67E22;
                }
                .stitch-btn::after {
                    content: '';
                    position: absolute;
                    inset: -5px;
                    border: 2px dashed rgba(230, 126, 34, 0.5);
                    pointer-events: none;
                    border-radius: inherit;
                }

                /* Rivet */
                .rivet {
                    width: 12px;
                    height: 12px;
                    background: radial-gradient(circle at 30% 30%, #F39C12, #B9770E);
                    border-radius: 50%;
                    box-shadow: 1px 1px 2px rgba(0,0,0,0.5), inset 0 0 2px rgba(0,0,0,0.5);
                    position: absolute;
                    z-index: 10;
                }

                /* Leather Patch */
                .leather-patch {
                    background-color: #A0522D;
                    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
                    color: #3E2723;
                    text-shadow: 0 1px 0 rgba(255,255,255,0.2);
                    box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
                }
                
                /* Frayed Edge Mask (Simulated) */
                .frayed-edge {
                     mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
                     -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
                }
            `}</style>

            <div className="absolute inset-0 bg-[#2C3E50] fixed z-[-2]"></div>
            <div className="absolute inset-0 denim-texture fixed z-[-1] pointer-events-none opacity-50"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#34495E] border-b-4 border-[#E67E22] shadow-xl">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#E67E22] p-1.5 rounded-sm shadow-md">
                            <Scissors size={24} className="text-[#2C3E50]" />
                        </div>
                        <span className="text-3xl font-denim-label tracking-wide text-[#ECF0F1]">SELVEDGE</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Raw', 'Washed', 'Vintage'].map((item) => (
                                <a key={item} href="#" className="font-denim-head text-[#BDC3C7] hover:text-[#E67E22] text-lg tracking-wider transition-colors uppercase">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-2 bg-[#2980B9] text-white font-denim-head text-sm tracking-widest rounded-sm stitch-btn hover:bg-[#3498DB] transition-all shadow-lg">
                                CART (0)
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#E67E22] border-2 border-[#E67E22] rounded">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#34495E] border-b-4 border-[#E67E22] shadow-2xl">
                        {['Raw', 'Washed', 'Vintage'].map((item) => (
                            <div key={item} className="py-4 font-denim-head text-xl text-[#ECF0F1] border-b border-[#2C3E50] tracking-wider">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-[#E67E22] text-[#2C3E50] font-denim-label text-xl uppercase tracking-widest shadow-md">
                            Check Out
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                {/* Decorative Rivets */}
                <div className="rivet top-10 left-10"></div>
                <div className="rivet top-10 right-10"></div>
                <div className="rivet bottom-10 left-10"></div>
                <div className="rivet bottom-10 right-10"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10 p-10 bg-[#2C3E50]/80 backdrop-blur-sm stitch-orange rounded-sm">
                    <div className="rivet top-2 left-2"></div>
                    <div className="rivet top-2 right-2"></div>
                    <div className="rivet bottom-2 left-2"></div>
                    <div className="rivet bottom-2 right-2"></div>

                    <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 leather-patch transform -rotate-2 shadow-md">
                        <Tag size={16} className="text-[#3E2723]" />
                        <span className="font-denim-body font-bold text-xs uppercase tracking-[0.2em] text-[#3E2723]">Premium Quality Goods</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-denim-label text-[#ECF0F1] mb-6 leading-none tracking-tight">
                        INDIGO <br />
                        <span className="text-[#3498DB]">BLUE</span>
                    </h1>

                    <p className="font-denim-body text-xl md:text-2xl text-[#BDC3C7] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Authentic. Durable. Timeless. Experience the texture of true craftsmanship woven into every pixel.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-4 bg-[#E67E22] text-white font-denim-head text-lg tracking-widest rounded-sm hover:bg-[#D35400] transition-colors shadow-lg w-full sm:w-auto">
                            Show Now
                        </button>
                        <button className="px-10 py-4 bg-transparent text-[#E67E22] font-denim-head text-lg tracking-widest border-2 border-[#E67E22] border-dashed rounded-sm hover:bg-[#E67E22]/10 transition-colors w-full sm:w-auto">
                            Fit Guide
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Pocket Style) */}
            <section className="py-24 px-6 relative bg-[#34495E]">
                <div className="absolute inset-0 denim-texture opacity-30"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Shirt, title: "Japanese Denim", desc: "Sourced from Okayama's finest mills.", color: "#3498DB" },
                            { icon: Scissors, title: "Chain Stitch", desc: "Vintage Union Special construction.", color: "#E67E22" },
                            { icon: Star, title: "Custom Fade", desc: "Your unique wear patterns over time.", color: "#F1C40F" }
                        ].map((f, i) => (
                            <div key={i} className="group relative p-8 bg-[#2C3E50] shadow-xl"
                                style={{
                                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
                                    paddingBottom: '4rem'
                                }}>
                                {/* Pocket Stitching */}
                                <div className="absolute inset-4 pointer-events-none border-2 border-[#E67E22] border-dashed opacity-70"
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }}></div>
                                <div className="rivet top-4 left-4"></div>
                                <div className="rivet top-4 right-4"></div>

                                <f.icon className="w-12 h-12 mb-6" style={{ color: f.color }} />
                                <h3 className="text-3xl font-denim-head text-[#ECF0F1] mb-4 uppercase">{f.title}</h3>
                                <p className="font-denim-body text-lg text-[#BDC3C7] leading-relaxed">{f.desc}</p>

                                <div className="absolute top-4 right-4 w-6 h-10 bg-[#E74C3C] text-[8px] flex items-center justify-center font-bold text-white transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                                    LEVIS
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Labels) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-denim-label text-[#ECF0F1] mb-4 tracking-wider">The Collection</h2>
                        <div className="w-32 h-1 bg-[#E67E22] mx-auto border-t-2 border-b-2 border-dashed border-[#2C3E50]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Standard', price: '$85', features: ['12oz Fabric', 'Zip Fly', 'Relaxed Fit'], patch: 'Standard Issue' },
                            { name: 'Premium', price: '$145', features: ['14oz Selvedge', 'Button Fly', 'Slim Taper'], patch: 'Handcrafted', highlight: true },
                            { name: 'Heavyweight', price: '$220', features: ['21oz Iron Heart', 'Hidden Rivets', 'Straight Leg'], patch: 'Heavy Duty' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative flex flex-col items-center bg-[#ECF0F1] text-[#2C3E50] shadow-2xl transform transition-transform hover:-translate-y-2 ${plan.highlight ? 'scale-105 z-10' : 'scale-100 opacity-90'}`}>
                                <div className="w-full h-4 bg-[#2C3E50] denim-texture"></div>

                                <div className="w-full p-8 flex-grow flex flex-col items-center border-x-2 border-dashed border-[#BDC3C7]">
                                    <div className="leather-patch px-4 py-2 mb-6 transform -rotate-1 shadow-sm border border-[#5D4037]">
                                        <span className="font-denim-label text-[#3E2723] uppercase tracking-widest text-sm">{plan.patch}</span>
                                    </div>

                                    <h3 className="text-4xl font-denim-head mb-2 text-[#2C3E50]">{plan.name}</h3>
                                    <div className="text-5xl font-denim-label font-bold mb-8 text-[#E67E22]">{plan.price}</div>

                                    <ul className="space-y-4 mb-8 w-full text-center">
                                        {plan.features.map((feature, j) => (
                                            <li key={j} className="font-denim-body font-bold text-[#7F8C8D] uppercase tracking-wide border-b border-dotted border-[#BDC3C7] pb-2 last:border-0">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full py-4 bg-[#2C3E50] text-white font-denim-head uppercase tracking-widest hover:bg-[#34495E] transition-colors">
                                        Add to Cart
                                    </button>
                                </div>

                                <div className="w-full h-4 bg-[#2C3E50] denim-texture bottom-0"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#253545]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-denim-label text-center mb-12 text-[#E67E22] tracking-wider uppercase">
                        Care Instructions
                    </h2>

                    <div className="space-y-4">
                        {[{ q: 'How do I wash them?', a: 'Ideally, you don\'t. If you must, soak in cold water and hang dry.' },
                        { q: 'Will they shrink?', a: 'Unsanforized denim will shrink up to 10%. Size up accordingly.' },
                        { q: 'Can I return them?', a: 'Only if the tags are attached and unwashed.' }
                        ].map((item, i) => (
                            <div key={i} className="border-2 border-dashed border-[#34495E] bg-[#2C3E50] p-1">
                                <button className="w-full flex items-center justify-between p-4 text-left group bg-[#34495E] hover:bg-[#3D566E] transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-denim-head text-lg text-[#ECF0F1] uppercase tracking-wider">{item.q}</span>
                                    <ChevronDown size={20} className={`text-[#E67E22] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-6 font-denim-body text-[#BDC3C7] leading-relaxed bg-[#2C3E50]">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 relative bg-[#3498DB]">
                <div className="absolute inset-0 denim-texture opacity-20 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2980B9] to-transparent"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10 p-12 stitch-btn bg-[#2C3E50] shadow-2xl">
                    <div className="rivet top-4 left-4"></div>
                    <div className="rivet top-4 right-4"></div>
                    <div className="rivet bottom-4 left-4"></div>
                    <div className="rivet bottom-4 right-4"></div>

                    <ShoppingBag size={56} className="mx-auto mb-6 text-[#E67E22]" />
                    <h2 className="text-5xl font-denim-label text-white mb-6 uppercase tracking-wider">Break Them In</h2>
                    <p className="font-denim-body text-xl text-[#BDC3C7] mb-10 max-w-lg mx-auto">
                        Don't just wear pants. Start a journey. Fade your own path.
                    </p>
                    <button className="px-16 py-5 bg-[#E67E22] text-white font-denim-head text-xl tracking-widest hover:bg-[#D35400] transition-colors shadow-lg rounded-sm">
                        Start Fading
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 bg-[#1C2833] text-[#7F8C8D] border-t-8 border-[#2980B9]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Shirt size={24} className="text-[#3498DB]" />
                        <span className="text-2xl font-denim-label text-[#ECF0F1] tracking-wider">SELVEDGE</span>
                    </div>

                    <div className="flex gap-8 text-sm font-denim-head font-bold uppercase tracking-wider text-[#BDC3C7]">
                        <a href="#" className="hover:text-[#3498DB] transition-colors">Sizing</a>
                        <a href="#" className="hover:text-[#3498DB] transition-colors">Shipping</a>
                        <a href="#" className="hover:text-[#3498DB] transition-colors">Returns</a>
                    </div>

                    <div className="flex items-center gap-2 font-denim-body text-xs text-[#566573] uppercase tracking-widest">
                        <MapPin size={12} />
                        Designed in San Francisco
                    </div>
                </div>
            </footer>
        </div>
    );
};
