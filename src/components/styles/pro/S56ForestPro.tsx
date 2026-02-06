import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, TreePine, Leaf, Bird, Mountain, Sprout, Wind, Sunrise } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S56ForestPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#1A2F1E] text-[#E8F5E9] selection:bg-[#4CAF50] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

                .font-forest-head { font-family: 'Playfair Display', serif; }
                .font-forest-body { font-family: 'Cabin', sans-serif; }

                /* Forest Canopy Gradient */
                .bg-forest-gradient {
                    background: linear-gradient(180deg, #1A2F1E 0%, #243828 50%, #2E2620 100%);
                }
                
                /* Wood Texture */
                .wood-texture {
                    position: relative;
                }
                .wood-texture::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
                    pointer-events: none;
                }
                
                /* Leaf Shake Animation */
                @keyframes leaf-sway {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(5deg); }
                    75% { transform: rotate(-5deg); }
                }
                .hover-leaf:hover .leaf-icon {
                    animation: leaf-sway 2s ease-in-out infinite;
                }

                /* Sunbeam Effect */
                .sunbeam {
                    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%);
                    mask-image: linear-gradient(to right, black, transparent);
                }

                /* Frosted Glass / Morning Mist */
                .glass-mist {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
            `}</style>

            <div className="absolute inset-0 bg-forest-gradient fixed z-[-2]"></div>

            {/* Parallax Leaves (Static for now, implies movement) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <Leaf className="absolute top-20 left-10 text-[#4CAF50] opacity-20 transform rotate-45 w-16 h-16" />
                <Leaf className="absolute bottom-40 right-20 text-[#8D6E63] opacity-20 transform -rotate-12 w-24 h-24" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] sunbeam opacity-30 pointer-events-none transform -rotate-45"></div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 glass-mist border-b border-[#4CAF50]/20">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#4CAF50]/20 rounded-lg border border-[#4CAF50]/50">
                            <TreePine size={24} className="text-[#4CAF50]" />
                        </div>
                        <span className="text-2xl font-forest-head font-bold tracking-wide text-[#E8F5E9]">Nordic<span className="text-[#4CAF50]">Woods</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Cabins', 'Trails', 'Wilderness'].map((item) => (
                                <a key={item} href="#" className="font-forest-body text-[#A5D6A7] hover:text-white transition-colors text-lg relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#4CAF50] transition-all group-hover:w-full group-hover:left-0"></span>
                                </a>
                            ))}
                            <button className="px-6 py-2 rounded-lg bg-[#2E7D32] text-white font-forest-body font-semibold hover:bg-[#1B5E20] transition-colors shadow-lg shadow-[#1B5E20]/50 border border-[#4CAF50]/30">
                                Book Stay
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#A5D6A7] hover:text-white transition-colors">{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 glass-mist border-b border-[#4CAF50]/20">
                        {['Cabins', 'Trails', 'Wilderness'].map((item) => (
                            <div key={item} className="py-4 font-forest-head text-xl text-white border-b border-[#4CAF50]/10">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 rounded-lg bg-[#2E7D32] text-white font-forest-body font-bold">
                            Book Stay
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                {/* Fog Layer */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1A2F1E] to-transparent pointer-events-none z-10"></div>

                <div className="max-w-5xl mx-auto text-center relative z-20">
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#4CAF50]/30 bg-[#4CAF50]/10 backdrop-blur-sm">
                        <Leaf size={16} className="text-[#4CAF50]" />
                        <span className="font-forest-body text-sm font-medium text-[#A5D6A7] uppercase tracking-wider">Eco-Friendly Design</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-forest-head font-bold text-[#E8F5E9] mb-8 leading-tight">
                        Breathe In <br />
                        <span className="text-[#4CAF50] italic">The Wild</span>
                    </h1>

                    <p className="font-forest-body text-xl md:text-2xl text-[#A5D6A7]/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Reconnect with nature through digital experiences rooted in organic beauty, calmness, and sustainable aesthetics.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-4 rounded-lg bg-[#4CAF50] text-[#1A2F1E] font-forest-body font-bold text-xl hover:bg-[#66BB6A] hover:-translate-y-1 transition-all shadow-[0_10px_20px_rgba(76,175,80,0.2)] w-full sm:w-auto">
                            Start Journey
                        </button>
                        <button className="px-10 py-4 rounded-lg border border-[#A5D6A7]/30 text-[#E8F5E9] font-forest-body font-bold text-xl hover:bg-[#A5D6A7]/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-3 group">
                            <Bird size={20} className="group-hover:-translate-y-1 transition-transform" />
                            Discover Flora
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Stumps */}
            <section className="py-24 px-6 relative bg-[#243828]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: TreePine, title: "Deep Roots", desc: "Built on a stable, sustainable codebase foundation.", color: "#4CAF50" },
                            { icon: Wind, title: "Light & Airy", desc: "Performance that feels as light as a breeze.", color: "#81C784" },
                            { icon: Mountain, title: "Rock Solid", desc: "Reliability that stands tall like a mountain peak.", color: "#A5D6A7" }
                        ].map((f, i) => (
                            <div key={i} className="hover-leaf group relative p-1 md:p-2 rounded-2xl transition-transform duration-300 hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] rounded-2xl transform rotate-1 opacity-50 group-hover:rotate-2 transition-transform"></div>
                                <div className="relative h-full bg-[#1A2F1E] p-8 rounded-xl border border-[#4CAF50]/10 wood-texture overflow-hidden">
                                    <div className="w-16 h-16 rounded-full bg-[#2E7D32]/20 flex items-center justify-center mb-6 border border-[#2E7D32]/50">
                                        <f.icon className="leaf-icon text-[#4CAF50]" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-forest-head font-bold text-[#E8F5E9] mb-4">{f.title}</h3>
                                    <p className="font-forest-body text-lg text-[#A5D6A7] leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Wood Panels) */}
            <section className="py-24 px-6 relative bg-[#1A2F1E]">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-forest-head font-bold text-[#E8F5E9] mb-4">Cabin Packages</h2>
                        <p className="font-forest-body text-[#A5D6A7]">Choose your perfect retreat</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {[
                            { name: 'Tent', price: 'Free', features: ['Basic Shelter', 'Fire Pit', 'Star Map'], wood: '#2E2620' },
                            { name: 'Cabin', price: '$49', features: ['Wood Stove', 'Lake View', 'Canoe'], wood: '#3E2723', highlight: true },
                            { name: 'Lodge', price: '$129', features: ['Full Kitchen', 'Hot Tub', 'Guided Tour'], wood: '#2E2620' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 rounded-lg shadow-2xl transition-transform hover:-translate-y-1 wood-texture ${plan.highlight ? 'scale-105 z-10 border-2 border-[#4CAF50]' : 'border border-[#8D6E63]/30'}`} style={{ backgroundColor: plan.wood }}>
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4CAF50] text-[#1A2F1E] px-4 py-1 rounded-full text-sm font-forest-body font-bold uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-forest-head font-bold text-[#E8F5E9] mb-2">{plan.name}</h3>
                                <div className="text-5xl font-forest-head font-bold text-[#E8F5E9] mb-8">{plan.price}</div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-forest-body text-[#D7CCC8]">
                                            <Leaf size={16} className="text-[#4CAF50]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-md font-forest-body font-bold text-lg transition-colors ${plan.highlight ? 'bg-[#4CAF50] text-[#1A2F1E] hover:bg-[#66BB6A]' : 'bg-[#1A2F1E] text-[#A5D6A7] hover:bg-black/30'}`}>
                                    Reserve
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#243828]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-forest-head font-bold text-center mb-12 text-[#E8F5E9]">
                        Trail Guide
                    </h2>

                    <div className="space-y-4">
                        {[{ q: 'Is the wood sustainably sourced?', a: 'Every pixel is 100% digitally renewable and eco-conscious.' },
                        { q: 'Can I bring my dog?', a: 'Pets are welcome! We have plenty of space to roam.' },
                        { q: 'Is there WiFi?', a: 'We encourage disconnecting, but yes, high-speed fiber is hidden in the trees.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#1A2F1E] border border-[#4CAF50]/20 rounded-lg overflow-hidden">
                                <button className="w-full flex items-center justify-between p-6 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-forest-head text-xl text-[#E8F5E9] group-hover:text-[#4CAF50] transition-colors">{item.q}</span>
                                    <ChevronDown size={20} className={`text-[#A5D6A7] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-6 pb-6 pt-2 font-forest-body text-[#A5D6A7] leading-relaxed border-t border-[#4CAF50]/10">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-[#1A2F1E]">
                <div className="max-w-4xl mx-auto p-12 rounded-3xl text-center relative overflow-hidden bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] shadow-2xl">
                    <div className="absolute top-0 right-0 w-full h-full sunbeam opacity-50 pointer-events-none"></div>

                    <div className="relative z-10">
                        <Sunrise size={56} className="mx-auto mb-8 text-[#FFC107]" strokeWidth={1.5} />
                        <h2 className="text-4xl md:text-5xl font-forest-head font-bold text-[#E8F5E9] mb-6">Dawn of a New Adventure</h2>
                        <p className="font-forest-body text-xl text-[#C8E6C9] mb-10 max-w-lg mx-auto">
                            The forest is calling. It's time to answer.
                        </p>
                        <button className="px-12 py-5 rounded-lg bg-[#E8F5E9] text-[#1B5E20] font-forest-body font-bold text-xl hover:bg-white transition-colors shadow-lg">
                            Pack Your Bags
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#4CAF50]/20 py-16 px-6 bg-[#172719]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <TreePine size={24} className="text-[#4CAF50]" />
                        <span className="text-xl font-forest-head font-bold text-[#E8F5E9]">Nordic<span className="text-[#4CAF50]">Woods</span></span>
                    </div>

                    <div className="flex gap-8 text-sm font-forest-body text-[#A5D6A7]">
                        <a href="#" className="hover:text-white transition-colors">Conservation</a>
                        <a href="#" className="hover:text-white transition-colors">Park Map</a>
                        <a href="#" className="hover:text-white transition-colors">Ranger Station</a>
                    </div>

                    <div className="font-forest-body text-sm text-[#546E56]">
                        © 2025 Woodland Digital.
                    </div>
                </div>
            </footer>
        </div>
    );
};
