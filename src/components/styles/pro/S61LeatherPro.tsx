import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Briefcase, Award, Shield, Star, Crown, Tag, PenTool } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S61LeatherPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#2D1B12] text-[#E6C9A8] selection:bg-[#8D5B32] selection:text-[#FFF8DC]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

                .font-leather-head { font-family: 'Cinzel', serif; }
                .font-leather-body { font-family: 'Playfair Display', serif; }

                /* Leather Textures */
                .leather-grain {
                    background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
                }
                
                .stitched-edge {
                    position: relative;
                    border: 2px dashed #8D5B32;
                    box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
                }
                .stitched-edge::after {
                    content: '';
                    position: absolute;
                    top: -6px; left: -6px; right: -6px; bottom: -6px;
                    border: 1px solid rgba(141, 91, 50, 0.3);
                    border-radius: inherit;
                    pointer-events: none;
                }

                /* Gold Foil Effect */
                .gold-foil {
                    background: linear-gradient(45deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
                }
                
                /* Debossed Text */
                .debossed {
                    color: #2D1B12;
                    text-shadow: 1px 1px 0 rgba(255,255,255,0.1), -1px -1px 0 rgba(0,0,0,0.8);
                }

                /* Button Press Effect */
                .leather-btn {
                    transition: all 0.2s ease;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
                }
                .leather-btn:active {
                    transform: translateY(2px);
                    box-shadow: 0 1px 2px rgba(0,0,0,0.3), inset 0 2px 4px rgba(0,0,0,0.4);
                }
            `}</style>

            <div className="absolute inset-0 bg-[#2D1B12] fixed z-[-2]"></div>
            <div className="absolute inset-0 leather-grain fixed z-[-1] pointer-events-none opacity-60"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#3E2723] border-b-4 border-[#5D4037] shadow-xl">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <Crown size={28} className="text-[#D4A853]" strokeWidth={1.5} />
                        <span className="text-2xl font-leather-head tracking-wider text-[#E6C9A8] gold-foil mt-1">HERITAGE</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Atelier', 'Collections', 'Bespoke'].map((item) => (
                                <a key={item} href="#" className="font-leather-head text-[#Bcaaa4] hover:text-[#D4A853] text-sm tracking-[0.2em] transition-colors font-bold">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-2 bg-[#5D4037] text-[#E6C9A8] font-leather-head text-xs tracking-widest rounded-sm border border-[#8D5B32] leather-btn hover:bg-[#6D4C41]">
                                MY ACCOUT
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#D4A853] hover:bg-[#5D4037] rounded">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-8 bg-[#3E2723] border-b border-[#8D5B32] shadow-2xl">
                        {['Atelier', 'Collections', 'Bespoke'].map((item) => (
                            <div key={item} className="py-4 font-leather-head text-xl text-[#E6C9A8] border-b border-[#5D4037] tracking-widest flex items-center justify-between">
                                {item}
                                <ChevronDown size={16} className="text-[#8D5B32]" />
                            </div>
                        ))}
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                {/* Decorative Stitch Line */}
                <div className="absolute left-10 top-0 bottom-0 w-px border-l-2 border-dashed border-[#5D4037] opacity-50 hidden md:block"></div>
                <div className="absolute right-10 top-0 bottom-0 w-px border-r-2 border-dashed border-[#5D4037] opacity-50 hidden md:block"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 bg-[#1C100B] border border-[#8D5B32] rounded-sm shadow-inner">
                        <Star size={14} className="text-[#D4A853] fill-[#D4A853]" />
                        <span className="font-leather-head text-xs tracking-[0.3em] text-[#D4A853]">ESTABLISHED 1895</span>
                        <Star size={14} className="text-[#D4A853] fill-[#D4A853]" />
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-leather-head text-[#E6C9A8] mb-8 leading-none">
                        TIMELESS <br />
                        <span className="gold-foil">LEATHER</span>
                    </h1>

                    <p className="font-leather-body text-xl md:text-2xl text-[#D7CCC8] max-w-2xl mx-auto mb-12 italic leading-relaxed">
                        Handcrafted with passion. Aged to perfection. A tactile digital experience for those who appreciate the finer details.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="px-12 py-4 bg-[#8D5B32] text-[#2D1B12] font-leather-head text-lg tracking-widest rounded-sm shadow-[0_4px_10px_rgba(0,0,0,0.4)] hover:bg-[#A1887F] transition-all leather-btn w-full sm:w-auto font-bold border border-[#5D4037]">
                            View Catalog
                        </button>
                        <button className="px-12 py-4 bg-transparent text-[#D4A853] font-leather-head text-lg tracking-widest border border-[#D4A853] rounded-sm hover:bg-[#D4A853]/10 transition-colors w-full sm:w-auto">
                            Our Story
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Stitched Cards) */}
            <section className="py-24 px-6 relative bg-[#3E2723]">
                <div className="absolute inset-0 leather-grain opacity-40"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Briefcase, title: "Genuine", desc: "Sourced from the finest tanneries in Tuscany.", color: "#D4A853" },
                            { icon: PenTool, title: "Handmade", desc: "Every stitch placed by a master artisan.", color: "#A1887F" },
                            { icon: Shield, title: "Durable", desc: "Built to last generations, improving with age.", color: "#8D6E63" }
                        ].map((f, i) => (
                            <div key={i} className="group relative p-8 bg-[#2D1B12] stitched-edge">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3E2723] p-3 rounded-full border border-[#8D5B32] shadow-lg">
                                    <f.icon className="w-8 h-8" style={{ color: f.color }} />
                                </div>

                                <div className="mt-6 text-center">
                                    <h3 className="text-2xl font-leather-head text-[#E6C9A8] mb-4 tracking-wider gold-foil">{f.title}</h3>
                                    <p className="font-leather-body text-lg text-[#Bcaaa4] italic leading-relaxed">{f.desc}</p>
                                </div>

                                <div className="absolute inset-x-8 bottom-6 h-px bg-[#5D4037]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Tags) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-leather-head text-[#E6C9A8] mb-4 gold-foil">Commission Work</h2>
                        <div className="w-24 h-1 bg-[#8D5B32] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {[
                            { name: 'Apprentice', price: '$250', features: ['Consultation', 'Basic Materials', 'Machine Stitch'], tagColor: '#5D4037' },
                            { name: 'Artisan', price: '$850', features: ['Custom Pattern', 'Full Grain', 'Hand Stitch'], tagColor: '#8D5B32', highlight: true },
                            { name: 'Master', price: '$2400', features: ['Exotic Leathers', 'Gold Hardware', 'Lifetime Warranty'], tagColor: '#3E2723' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 bg-[#F5F5DC] text-[#2D1B12] shadow-2xl transform transition-transform hover:-translate-y-2 ${plan.highlight ? 'scale-105 z-10 rotate-1' : 'rotate-[-1deg] opacity-90'}`}
                                style={{
                                    clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 100%, 0% 100%, 0% 20%)',
                                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.5\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.1\'/%3E%3C/svg%3E")'
                                }}>

                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1A0A0A] border-2 border-[#D4A853]"></div>

                                <div className="mt-8 text-center border-b-2 border-dashed border-[#8D5B32] pb-6 mb-6">
                                    <h3 className="text-xl font-leather-head tracking-widest text-[#5D4037]">{plan.name}</h3>
                                    <div className="text-5xl font-leather-head font-bold mt-2 text-[#2D1B12]">{plan.price}</div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-leather-body italic text-[#3E2723]">
                                            <Check size={16} className="text-[#8D5B32]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-3 bg-[#2D1B12] text-[#E6C9A8] font-leather-head tracking-widest text-sm uppercase hover:bg-[#3E2723] transition-colors">
                                    Select
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#261610]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-leather-head text-center mb-16 text-[#D4A853] tracking-widest uppercase">
                        Patina & Care
                    </h2>

                    <div className="space-y-6">
                        {[{ q: 'How does it age?', a: 'Like fine wine. The interface develops character with every interaction.' },
                        { q: 'Is it genuine?', a: '100% authentic pixels, tanned in the digital sun.' },
                        { q: 'Maintenance?', a: 'Simply wipe your screen with a microfiber cloth occasionally.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-[#5D4037] pb-4">
                                <button className="w-full flex items-center justify-between py-4 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-leather-head text-lg text-[#E6C9A8] tracking-wider group-hover:text-[#D4A853] transition-colors">✿ {item.q}</span>
                                    <ChevronDown size={20} className={`text-[#8D5B32] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="py-4 font-leather-body text-lg text-[#Bcaaa4] italic leading-relaxed pl-6">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 relative bg-[#3E2723] border-t-8 border-[#1C100B]">
                <div className="max-w-4xl mx-auto text-center relative z-10 p-12 bg-[#2D1B12] stitched-edge shadow-2xl">
                    <Tag size={48} className="mx-auto mb-6 text-[#D4A853]" />
                    <h2 className="text-4xl md:text-5xl font-leather-head text-[#E6C9A8] mb-8 leading-tight">Own A Masterpiece</h2>
                    <p className="font-leather-body text-xl text-[#Bcaaa4] mb-10 max-w-lg mx-auto italic">
                        Join the exclusive club of connoisseurs who value substance over style.
                    </p>
                    <button className="px-16 py-5 bg-[#D4A853] text-[#2D1B12] font-leather-head text-xl tracking-widest hover:bg-[#E6C9A8] transition-colors shadow-lg">
                        Purchase
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 bg-[#1A0D09] text-[#8D5B32] border-t border-[#3E2723]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Crown size={20} className="text-[#5D4037]" />
                        <span className="text-xl font-leather-head text-[#5D4037] tracking-widest">HERITAGE</span>
                    </div>

                    <div className="flex gap-10 text-xs font-leather-head font-bold uppercase tracking-[0.2em] text-[#5D4037]">
                        <a href="#" className="hover:text-[#8D5B32] transition-colors">Care Guide</a>
                        <a href="#" className="hover:text-[#8D5B32] transition-colors">Warranty</a>
                        <a href="#" className="hover:text-[#8D5B32] transition-colors">Contact</a>
                    </div>

                    <div className="font-leather-head text-xs text-[#3E2723] uppercase tracking-widest">
                        © 2025 Leather Works.
                    </div>
                </div>
            </footer>
        </div>
    );
};
