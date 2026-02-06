import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Heart, Sparkles, Coffee, Home, CloudSun, Hand, Scissors } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S66KnitwearPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#F5F0EB] text-[#5D4E40] selection:bg-[#C45A3B] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Nunito:wght@400;700;900&display=swap');

                .font-knit-head { font-family: 'Comfortaa', cursive; }
                .font-knit-body { font-family: 'Nunito', sans-serif; }

                /* Knit Texture Background */
                .knit-texture {
                    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,20 Q10,30 20,20 Q30,10 40,20' fill='none' stroke='%23C45A3B' stroke-width='0.5' opacity='0.08'/%3E%3Cpath d='M0,15 Q10,25 20,15 Q30,5 40,15' fill='none' stroke='%238B2942' stroke-width='0.5' opacity='0.05'/%3E%3C/svg%3E");
                }
                
                /* Scalloped Edge */
                .scallop-border {
                    mask-image: radial-gradient(circle at center bottom, transparent 6px, black 6.5px);
                    mask-size: 20px 20px;
                    mask-repeat: repeat-x;
                    mask-position: bottom;
                }
                .scallop-border-inverse {
                    mask-image: radial-gradient(circle at center top, transparent 6px, black 6.5px);
                    mask-size: 20px 20px;
                    mask-repeat: repeat-x;
                    mask-position: top;
                }
                
                /* Chunky Fabric Shadow */
                .fabric-shadow {
                    box-shadow: 4px 4px 0 #D3C4B6;
                }
                
                /* Stitched Button */
                .stitch-btn {
                    border: 2px dashed #C45A3B;
                    padding: 8px 16px;
                    border-radius: 999px;
                    transition: all 0.2s;
                }
                .stitch-btn:hover {
                    background-color: #F7EFE9;
                    border-style: solid;
                    transform: translateY(-2px);
                }
                
                /* Felt Texture */
                .felt-texture {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
                }
            `}</style>

            <div className="absolute inset-0 bg-[#F5F0EB] fixed z-[-2]"></div>
            <div className="absolute inset-0 knit-texture fixed z-[-1] pointer-events-none"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#FFFAF5]/90 backdrop-blur-sm border-b-4 border-[#E0D4C8] shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#C45A3B] p-2 rounded-full text-white shadow-md">
                            <Heart size={20} className="fill-white" />
                        </div>
                        <span className="text-2xl font-knit-head font-bold text-[#8B2942]">WOOL & YARN</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Fibers', 'Patterns', 'Workshops'].map((item) => (
                                <a key={item} href="#" className="font-knit-head font-bold text-[#8B7E6E] hover:text-[#C45A3B] text-sm tracking-wide transition-colors">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-2 bg-[#7D9B76] text-white font-knit-head font-bold text-sm rounded-full shadow-[0_4px_0_#5F755A] hover:translate-y-px hover:shadow-[0_2px_0_#5F755A] active:translate-y-1 active:shadow-none transition-all">
                                Join Club
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#C45A3B] bg-white rounded-full shadow-sm">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#FFFAF5] border-b-4 border-[#E0D4C8] shadow-xl">
                        {['Fibers', 'Patterns', 'Workshops'].map((item) => (
                            <div key={item} className="py-4 font-knit-head text-lg text-[#5D4E40] border-b border-[#E0D4C8] flex items-center justify-between">
                                {item}
                                <Heart size={16} className="text-[#E0D4C8]" />
                            </div>
                        ))}
                        <button className="w-full mt-6 py-4 bg-[#7D9B76] text-white font-knit-head font-bold text-lg rounded-full shadow-md">
                            Join Club
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                {/* Floating Yarn Balls (Abstract Circles) */}
                <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#C45A3B] opacity-10 blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#7D9B76] opacity-10 blur-xl animate-pulse delay-700"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 bg-white rounded-full border-2 border-[#E0D4C8] shadow-sm">
                        <Coffee size={18} className="text-[#C45A3B]" />
                        <span className="font-knit-body font-bold text-sm text-[#8B7E6E]">Winter Collection 2025</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-knit-head font-bold text-[#4A4036] mb-8 leading-tight">
                        Handcrafted <br />
                        <span className="text-[#C45A3B] underline decoration-wavy decoration-[#8B2942]/30">Warmth</span>
                    </h1>

                    <p className="font-knit-body text-xl md:text-2xl text-[#8B7E6E] max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                        Ethically sourced wool, gentle natural dyes, and the timeless comfort of slow fashion.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-5 bg-[#C45A3B] text-white font-knit-head font-bold text-lg rounded-full shadow-[0_6px_0_#9A452D] hover:translate-y-1 hover:shadow-[0_4px_0_#9A452D] active:translate-y-2 active:shadow-none transition-all w-full sm:w-auto">
                            Shop New Arrivals
                        </button>
                        <button className="px-10 py-5 bg-white text-[#5D4E40] font-knit-head font-bold text-lg rounded-full border-2 border-[#E0D4C8] shadow-sm hover:border-[#C45A3B] hover:text-[#C45A3B] transition-colors w-full sm:w-auto">
                            Our Story
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Fabric Patches) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: CloudSun, title: "Soft Touch", desc: "Premium merino wool blend for zero itch.", color: "#7D9B76", bg: "#F1F8F0" },
                            { icon: Hand, title: "Handmade", desc: "Knitted by local artisans with fair wages.", color: "#C45A3B", bg: "#FEF2F0" },
                            { icon: Scissors, title: "Custom Fit", desc: "Tailored measurements for every body.", color: "#8B2942", bg: "#FDF2F5" }
                        ].map((f, i) => (
                            <div key={i} className="group relative p-8 rounded-3xl fabric-shadow border-2 border-white transition-transform hover:-translate-y-2" style={{ backgroundColor: f.bg }}>
                                <div className="absolute top-4 right-4 text-[#D3C4B6]">
                                    <div className="w-2 h-2 rounded-full bg-current mb-1"></div>
                                    <div className="w-2 h-2 rounded-full bg-current"></div>
                                </div>

                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border-2" style={{ borderColor: f.color }}>
                                    <f.icon className="w-8 h-8" style={{ color: f.color }} strokeWidth={2.5} />
                                </div>

                                <h3 className="text-2xl font-knit-head font-bold text-[#4A4036] mb-4">{f.title}</h3>
                                <p className="font-knit-body text-lg text-[#8B7E6E] leading-relaxed font-semibold">{f.desc}</p>

                                <div className="w-full h-3 bg-white/50 rounded-full mt-6 overflow-hidden">
                                    <div className="h-full rounded-full" style={{ width: '60%', backgroundColor: f.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Tags) */}
            <section className="py-24 px-6 relative bg-[#8B2942]/5">
                <div className="absolute top-0 left-0 w-full h-6 bg-[#F5F0EB] scallop-border-inverse"></div>
                <div className="absolute bottom-0 left-0 w-full h-6 bg-[#F5F0EB] scallop-border"></div>

                <div className="max-w-5xl mx-auto relative z-10 pt-8 pb-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-knit-head font-bold text-[#8B2942] mb-4">Patterns & Kits</h2>
                        <div className="flex justify-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#C45A3B]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#7D9B76]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#8B2942]"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {[
                            { name: 'Beginner', price: '$25', features: ['Scarf Pattern', '1 Skein Yarn', 'Plastic Needles'], color: '#7D9B76' },
                            { name: 'Crafter', price: '$65', features: ['Sweater Pattern', '4 Skeins Yarn', 'Bamboo Needles'], color: '#C45A3B', highlight: true },
                            { name: 'Artisan', price: '$120', features: ['Complex Cardigan', '8 Skeins Wool', 'Accessory Kit'], color: '#8B2942' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 rounded-3xl bg-white border-2 border-[#E0D4C8] shadow-lg transition-transform ${plan.highlight ? 'transform scale-105 z-10' : 'hover:scale-102'}`}>
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C45A3B] text-white font-knit-body font-bold text-xs uppercase tracking-wider rounded-full shadow-md">
                                        Best Value
                                    </div>
                                )}

                                <div className="text-center mb-8 border-b-2 border-dashed border-[#E0D4C8] pb-6">
                                    <h3 className="text-2xl font-knit-head font-bold text-[#5D4E40]" style={{ color: plan.color }}>{plan.name}</h3>
                                    <div className="text-5xl font-knit-head font-bold mt-2 text-[#4A4036]">{plan.price}</div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-knit-body font-bold text-[#8B7E6E]">
                                            <div className="w-6 h-6 rounded-full bg-[#F5F0EB] flex items-center justify-center text-[#4A4036]">
                                                <Check size={14} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 text-white font-knit-head font-bold rounded-2xl shadow-md transition-transform hover:-translate-y-1" style={{ backgroundColor: plan.color }}>
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#FEFDFB]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-knit-head font-bold text-center mb-16 text-[#4A4036]">
                        Yarn Care
                    </h2>

                    <div className="space-y-4">
                        {[{ q: 'Is the wool itchy?', a: 'Not at all! We use superfine merino that feels like a cloud.' },
                        { q: 'Machine washable?', a: 'We recommend gentle hand wash, but some blends are machine safe.' },
                        { q: 'Sustainability?', a: '100% biodegradable packaging and carbon neutral shipping.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#F5F0EB] rounded-2xl border border-[#E0D4C8]">
                                <button className="w-full flex items-center justify-between p-5 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-knit-body font-bold text-lg text-[#5D4E40]">{item.q}</span>
                                    <ChevronDown size={24} className={`text-[#8B7E6E] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-5 pb-5 font-knit-body text-[#8B7E6E] leading-relaxed">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 relative bg-[#C45A3B] text-white overflow-hidden">
                <div className="absolute inset-0 felt-texture opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#E67E22_0%,_transparent_50%)] opacity-30"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10 p-12 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20">
                    <Sparkles size={48} className="mx-auto mb-6 text-[#F0E6D3] animate-bounce" />
                    <h2 className="text-4xl md:text-5xl font-knit-head font-bold mb-6">Start Your Project</h2>
                    <p className="font-knit-body text-xl text-[#F0E6D3] mb-10 max-w-lg mx-auto font-bold">
                        Get 15% off your first kit when you sign up for our knitting circle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input type="email" placeholder="Email Address" className="px-6 py-4 rounded-full bg-white text-[#4A4036] font-knit-body font-bold placeholder:text-[#D3C4B6] outline-none focus:ring-4 ring-[#8B2942]/30 w-full sm:w-80" />
                        <button className="px-10 py-4 bg-[#8B2942] text-white font-knit-head font-bold rounded-full shadow-lg hover:bg-[#722135] transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 bg-[#5D4E40] text-[#D3C4B6]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Heart size={24} className="text-[#C45A3B] fill-[#C45A3B]" />
                        <span className="text-2xl font-knit-head font-bold text-[#F5F0EB]">WOOL & YARN</span>
                    </div>

                    <div className="flex gap-8 text-sm font-knit-body font-bold uppercase tracking-wider text-[#F0E6D3]">
                        <a href="#" className="hover:text-white transition-colors">Shipping</a>
                        <a href="#" className="hover:text-white transition-colors">Returns</a>
                        <a href="#" className="hover:text-white transition-colors">Wholesale</a>
                    </div>

                    <div className="font-knit-body font-bold text-sm text-[#8B7E6E]">
                        © 2025 Wool & Yarn Co.
                    </div>
                </div>
            </footer>
        </div>
    );
};
