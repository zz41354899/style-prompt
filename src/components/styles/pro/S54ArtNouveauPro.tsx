import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Flower2, Leaf, Sparkles, Heart, Sprout, Crown, Feather } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S54ArtNouveauPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#FAF7F0] text-[#3E3E3E] selection:bg-[#B8860B] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Sorts+Mill+Goudy:ital@0;1&display=swap');

                .font-nouveau-head { font-family: 'Cinzel Decorative', serif; }
                .font-nouveau-body { font-family: 'Sorts Mill Goudy', serif; }

                /* Metallic Gold Gradient */
                .text-gold {
                    background: linear-gradient(135deg, #B8860B 0%, #FFD700 50%, #B8860B 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
                }
                .bg-gold-gradient {
                    background: linear-gradient(135deg, #B8860B 0%, #E5C100 50%, #B8860B 100%);
                }
                .border-gold {
                    border-image: linear-gradient(to bottom, #d4af37, #f3e5ab, #d4af37) 1;
                }
                
                /* Ornate Border Frame */
                .nouveau-frame {
                    position: relative;
                    border: 1px solid #B8860B;
                }
                .nouveau-frame::before {
                    content: '';
                    position: absolute;
                    top: 4px; left: 4px; right: 4px; bottom: 4px;
                    border: 1px solid rgba(184, 134, 11, 0.3);
                }
                .nouveau-frame::after {
                    content: '';
                    position: absolute;
                    top: -10px; left: 50%;
                    transform: translateX(-50%);
                    width: 40px; height: 2px;
                    background: #FAF7F0;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-top: 1px solid #B8860B;
                }

                /* Curved Whiplash Lines */
                .whiplash-curve {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    border: 1px solid #556B2F;
                    border-radius: 50% 0 50% 50%;
                    transform: rotate(45deg);
                    opacity: 0.2;
                    pointer-events: none;
                }
                
                /* Distressed Paper Texture */
                .paper-texture {
                    background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
                }
            `}</style>

            <div className="absolute inset-0 paper-texture fixed z-0"></div>

            {/* Decorative Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-64 h-64 border-r border-b border-[#B8860B] rounded-br-[100px] opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 border-l border-t border-[#B8860B] rounded-tl-[100px] opacity-20"></div>
                <div className="absolute top-1/4 right-[-50px] w-96 h-96 border border-[#556B2F] rounded-full opacity-10"></div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#FAF7F0]/90 backdrop-blur-md border-b border-[#B8860B]/30">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 relative">
                    {/* Corner Flourishes */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#B8860B]"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#B8860B]"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#B8860B]"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#B8860B]"></div>

                    <div className="flex items-center gap-3">
                        <Flower2 size={28} className="text-[#B8860B]" strokeWidth={1.5} />
                        <span className="text-3xl font-nouveau-head text-[#2C3E2D] tracking-widest">MUCHA<span className="text-[#B8860B]">.UI</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['Gallery', 'Artists', 'Heritage'].map((item) => (
                                <a key={item} href="#" className="font-nouveau-body text-xl text-[#556B2F] hover:text-[#B8860B] italic transition-colors">
                                    {item}
                                </a>
                            ))}
                            <button className="px-8 py-2 bg-transparent text-[#B8860B] font-nouveau-head text-lg border border-[#B8860B] rounded-full hover:bg-[#B8860B] hover:text-[#FAF7F0] transition-all relative overflow-hidden group">
                                <span className="relative z-10">Join Society</span>
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#B8860B] border border-[#B8860B] rounded-full">{menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#FAF7F0] border-b border-[#B8860B]">
                        {['Gallery', 'Artists', 'Heritage'].map((item) => (
                            <div key={item} className="py-4 font-nouveau-body text-2xl text-[#2C3E2D] border-b border-[#B8860B]/20 italic">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-3 bg-[#B8860B] text-white font-nouveau-head text-xl rounded-full">
                            Join Society
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-3 mb-8 px-8 py-2 border border-[#B8860B]/50 rounded-full bg-[#FFF8DC]">
                        <Leaf size={16} className="text-[#556B2F]" />
                        <span className="font-nouveau-body italic text-[#556B2F] text-lg">The Golden Age of Design</span>
                        <Leaf size={16} className="text-[#556B2F] transform scale-x-[-1]" />
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-nouveau-head text-[#2C3E2D] mb-8 leading-tight">
                        Organic <br />
                        <span className="text-gold">Symphony</span>
                    </h1>

                    <p className="font-nouveau-body text-2xl text-[#6B7D6B] max-w-2xl mx-auto mb-12 italic leading-relaxed">
                        Where nature's flowing lines meet architectural structural precision. A digital homage to the masters of Art Nouveau.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="px-10 py-4 bg-[#556B2F] text-[#FAF7F0] font-nouveau-head text-xl tracking-widest rounded-full shadow-[0_4px_15px_rgba(85,107,47,0.3)] hover:bg-[#435725] transition-colors flex items-center gap-3">
                            <Flower2 size={20} />
                            Explore Collection
                        </button>
                        <button className="px-10 py-4 bg-transparent text-[#B8860B] font-nouveau-head text-xl tracking-widest border border-[#B8860B] rounded-full hover:bg-[#FFF8DC] transition-colors">
                            View Portfolio
                        </button>
                    </div>

                    <div className="mt-20 flex justify-center items-center gap-4 opacity-60">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#B8860B]"></div>
                        <Crown size={24} className="text-[#B8860B]" strokeWidth={1} />
                        <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#B8860B]"></div>
                    </div>
                </div>
            </section>

            {/* Features (Motifs) */}
            <section className="py-24 px-6 relative bg-[#FFF8DC]/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-nouveau-head text-[#2C3E2D] mb-4">Artistic Motifs</h2>
                        <div className="w-16 h-1 bg-[#B8860B] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Flower2, title: "Flora", desc: "Lilies, vines, and intricate floral patterns.", color: "#556B2F" },
                            { icon: Feather, title: "Fauna", desc: "Peacocks, dragonflies, and elegant swans.", color: "#B8860B" },
                            { icon: Sparkles, title: "Metal", desc: "Wrought iron curves and gold leaf details.", color: "#A0522D" }
                        ].map((f, i) => (
                            <div key={i} className="group relative p-8 bg-[#FAF7F0] nouveau-frame text-center hover:transform hover:-translate-y-2 transition-transform duration-500">
                                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-[#B8860B] rounded-sm pointer-events-none"></div>

                                <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-[#B8860B]/30 flex items-center justify-center bg-[#FFF8DC]">
                                    <f.icon className="w-10 h-10" style={{ color: f.color }} strokeWidth={1} />
                                </div>
                                <h3 className="text-3xl font-nouveau-head text-[#2C3E2D] mb-4">{f.title}</h3>
                                <p className="font-nouveau-body text-xl text-[#6B7D6B] italic">{f.desc}</p>

                                <div className="mt-6 flex justify-center">
                                    <div className="w-2 h-2 bg-[#B8860B] rounded-full opacity-50"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Menu) */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="border border-[#B8860B] p-2 rounded-t-[200px] rounded-b-[20px] bg-[#FFF8DC]">
                        <div className="border border-[#B8860B] border-dashed p-8 md:p-16 rounded-t-[190px] rounded-b-[10px] bg-[#FAF7F0] text-center">
                            <h2 className="text-5xl font-nouveau-head text-[#2C3E2D] mb-12">Membership Tiers</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                                {[
                                    { name: 'Apprentice', price: 'Free', features: ['Basic Access', 'Digital Gallery'], highlight: false },
                                    { name: 'Artisan', price: '$25', features: ['Full Portfolio', 'Print Quality', 'Workshops'], highlight: true },
                                    { name: 'Master', price: '$100', features: ['Private Commissions', 'Gilded Frame', 'VIP Events'], highlight: false }
                                ].map((plan, i) => (
                                    <div key={i} className={`relative p-6 ${plan.highlight ? 'bg-[#FFF8DC] border border-[#B8860B]' : 'bg-transparent border-t border-b border-[#B8860B]/20'} flex flex-col`}>
                                        <h3 className="text-2xl font-nouveau-head text-[#2C3E2D] mb-2">{plan.name}</h3>
                                        <div className="text-4xl font-nouveau-body text-[#B8860B] mb-6 italic">{plan.price}</div>

                                        <ul className="space-y-3 mb-8 flex-grow">
                                            {plan.features.map((feature, j) => (
                                                <li key={j} className="flex items-center gap-3 font-nouveau-body text-lg text-[#556B2F]">
                                                    <span className="w-1.5 h-1.5 bg-[#B8860B] rounded-full"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <button className={`w-full py-3 font-nouveau-head text-lg tracking-widest transition-colors ${plan.highlight ? 'bg-[#B8860B] text-white hover:bg-[#8B6508]' : 'bg-transparent text-[#B8860B] border border-[#B8860B] hover:bg-[#FFF8DC]'}`}>
                                            Select
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 relative bg-[#2C3E2D] text-[#FAF7F0]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-nouveau-head text-center mb-16 text-gold">
                        Curiosities
                    </h2>

                    <div className="space-y-4">
                        {[{ q: 'What defines this style?', a: 'Characterized by its use of a long, sinuous, organic line and asymmetric compositions.' },
                        { q: 'Is it suitable for modern web?', a: 'Absolutely. It brings a unique, human touch to digital interfaces.' },
                        { q: 'Can I use custom fonts?', a: 'We recommend serif fonts with high contrast to maintain the aesthetic.' }
                        ].map((item, i) => (
                            <div key={i} className="border border-[#556B2F] bg-[#1a261b] hover:bg-[#233324] transition-colors rounded-lg overflow-hidden">
                                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-nouveau-head text-xl text-[#FAF7F0] tracking-wide">{item.q}</span>
                                    <ChevronDown size={20} className={`text-[#B8860B] transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-6 pb-6 pt-2 font-nouveau-body text-lg text-[#8FBC8F] italic border-t border-[#556B2F]">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center border-y-2 border-[#B8860B] py-16 bg-[#FFF8DC]">
                    <Sprout size={48} className="mx-auto mb-6 text-[#556B2F]" strokeWidth={1} />
                    <h2 className="text-5xl font-nouveau-head text-[#2C3E2D] mb-6">Create Timeless Beauty</h2>
                    <p className="font-nouveau-body text-2xl text-[#6B7D6B] italic mb-10 max-w-xl mx-auto">
                        "Art varies, but art is eternal."
                    </p>
                    <button className="px-12 py-4 bg-transparent text-[#B8860B] font-nouveau-head text-2xl border-2 border-[#B8860B] rounded-full hover:bg-[#B8860B] hover:text-white transition-all shadow-lg">
                        Start Creating
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#FAF7F0] border-t border-[#B8860B] py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <span className="text-2xl font-nouveau-head text-[#2C3E2D]">MUCHA<span className="text-[#B8860B]">.UI</span></span>
                        <p className="font-nouveau-body text-lg text-[#6B7D6B] italic mt-2">Paris • Brussels • Vienna</p>
                    </div>

                    <div className="flex gap-8">
                        <Flower2 size={24} className="text-[#B8860B] opacity-50" />
                        <Leaf size={24} className="text-[#556B2F] opacity-50" />
                        <Heart size={24} className="text-[#A0522D] opacity-50" />
                    </div>

                    <div className="font-nouveau-body text-[#6B7D6B] italic">
                        © 1890-2025 Art Nouveau Revival.
                    </div>
                </div>
            </footer>
        </div>
    );
};
