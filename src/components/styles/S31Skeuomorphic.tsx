import { useState } from 'react';
import { Book, PenTool, Camera, Mic, Star, Settings, ChevronRight, Check, Menu, X } from 'lucide-react';

export const S31Skeuomorphic = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = deviceMode === 'mobile';

    // Textures
    const leatherTexture = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`;

    const ButtonSkeu = ({ children, primary = false }: { children: React.ReactNode, primary?: boolean }) => (
        <button className={`px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95 ${primary
                ? 'bg-gradient-to-b from-[#8D6E63] to-[#5D4037] text-white shadow-[0_4px_10px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] border border-[#4E342E] hover:from-[#795548] hover:to-[#4E342E]'
                : 'bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0] text-gray-700 shadow-[0_3px_6px_rgba(0,0,0,0.15),inset_0_1px_0_#fff] border border-[#ccc] hover:from-white hover:to-[#f0f0f0]'
            }`}>
            {children}
        </button>
    );

    return (
        <div className="min-h-screen font-serif text-gray-800 bg-[#d4c4b0] selection:bg-[#8D6E63] selection:text-white">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-[#8D6E63] shadow-[0_4px_15px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{ backgroundImage: leatherTexture }}>
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[#FFECB3] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        <Book size={28} />
                        <span className="font-bold text-xl tracking-wide">Craftsman</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8 text-[#D7CCC8]`}>
                        {['Features', 'Gallery', 'Pricing', 'About'].map((item) => (
                            <a key={item} href="#" className="hover:text-[#FFECB3] transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{item}</a>
                        ))}
                        <ButtonSkeu primary>Get Started</ButtonSkeu>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`${isMobile ? 'block' : 'hidden'} p-2 text-[#D7CCC8]`}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="bg-[#5D4037] border-t border-[#4E342E] p-4 space-y-4">
                        {['Features', 'Gallery', 'Pricing', 'About'].map((item) => (
                            <a key={item} href="#" className="block py-2 text-[#D7CCC8] hover:text-[#FFECB3]">{item}</a>
                        ))}
                        <ButtonSkeu primary>Get Started</ButtonSkeu>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className={`bg-[#8D6E63] rounded-[30px] ${isMobile ? 'p-6' : 'p-12'} shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_2px_5px_rgba(255,255,255,0.15)] border-t border-[#a1887f] relative overflow-hidden`} style={{ backgroundImage: leatherTexture }}>
                        {/* Stitching */}
                        <div className="absolute inset-3 border-2 border-dashed border-[#5D4037] opacity-40 rounded-[24px] pointer-events-none" />

                        <div className="relative z-10 text-center">
                            <div className="inline-block px-4 py-2 bg-[#5D4037] rounded-full text-[#FFECB3] text-sm font-bold mb-6 shadow-inner">
                                ✨ Handcrafted Excellence
                            </div>
                            <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold text-[#FFECB3] mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}>
                                The Art of Digital Craftsmanship
                            </h1>
                            <p className={`${isMobile ? 'text-base' : 'text-xl'} text-[#D7CCC8] mb-10 max-w-2xl mx-auto leading-relaxed`}>
                                Experience interfaces that feel real. Leather textures, embossed buttons, and tactile feedback bring your digital experience to life.
                            </p>
                            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4 justify-center`}>
                                <ButtonSkeu primary>Start Creating</ButtonSkeu>
                                <ButtonSkeu>View Gallery</ButtonSkeu>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-[#e8ddd0]">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-center text-[#5D4037] mb-4`}>Tactile Experience</h2>
                    <p className="text-center text-[#8D6E63] mb-12 max-w-xl mx-auto">Every element designed to feel authentic and real</p>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-4'} gap-6`}>
                        {[
                            { icon: PenTool, title: 'Rich Textures', desc: 'Leather, wood, and metal finishes that you can almost feel' },
                            { icon: Camera, title: 'Realistic Shadows', desc: 'Depth and dimension through authentic lighting' },
                            { icon: Mic, title: 'Audio Feedback', desc: 'Subtle sounds that enhance every interaction' },
                            { icon: Settings, title: 'Fine Details', desc: 'Stitching, embossing, and bevels in every corner' },
                        ].map((feature, i) => (
                            <div key={i} className="bg-[#fdfbf7] rounded-xl p-6 shadow-[2px_4px_15px_rgba(0,0,0,0.15)] transform hover:-rotate-1 hover:scale-105 transition-all">
                                <div className="w-12 h-12 bg-gradient-to-b from-[#8D6E63] to-[#5D4037] rounded-xl flex items-center justify-center mb-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_2px_0_rgba(255,255,255,0.1)]">
                                    <feature.icon size={24} className="text-[#FFECB3]" />
                                </div>
                                <h3 className="font-bold text-[#5D4037] mb-2">{feature.title}</h3>
                                <p className="text-sm text-[#8D6E63]">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Showcase Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className={`${isMobile ? 'flex flex-col' : 'flex'} gap-8 items-center`}>
                        {/* Notebook Preview */}
                        <div className="flex-1 bg-[#fdfbf7] rounded-lg shadow-[4px_8px_20px_rgba(0,0,0,0.25)] overflow-hidden">
                            <div className="h-8 bg-gradient-to-b from-[#ddd] to-[#ccc] flex items-center px-4 gap-2 border-b border-[#bbb]">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-b from-[#aaa] to-[#888] shadow-inner" />
                                ))}
                            </div>
                            <div className="p-6 bg-[linear-gradient(#e5e5e5_1px,transparent_1px)] bg-[length:100%_2rem]">
                                <div className="bg-[#fff9c4] p-4 shadow-md transform rotate-1 mb-4">
                                    <h4 className="font-bold text-[#f57f17] mb-2">Project Notes</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Design authentic interfaces</li>
                                        <li>• Apply tactile feedback</li>
                                        <li>• Polish every detail</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-3 shadow-md transform -rotate-1">
                                    <div className="h-20 bg-gray-100 rounded mb-2" />
                                    <p className="text-xs text-center text-gray-400">Snapshot - 2024</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="flex-1">
                            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-[#5D4037] mb-6`}>
                                Crafted With Care
                            </h2>
                            <p className="text-[#8D6E63] mb-6 leading-relaxed">
                                Every button press, every swipe, every interaction feels intentional. Our skeuomorphic design philosophy brings warmth and familiarity to digital experiences.
                            </p>
                            <ul className="space-y-4">
                                {['Hand-stitched leather textures', 'Embossed metallic buttons', 'Realistic paper and wood materials'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#8D6E63] to-[#5D4037] flex items-center justify-center shadow-inner">
                                            <Check size={14} className="text-[#FFECB3]" />
                                        </div>
                                        <span className="text-[#5D4037]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 bg-[#e8ddd0]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-[#5D4037] mb-12`}>Choose Your Craft</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                        {[
                            { name: 'Apprentice', price: 'Free', features: ['Basic textures', '5 templates', 'Community support'] },
                            { name: 'Craftsman', price: '$29/mo', features: ['All textures', 'Unlimited templates', 'Priority support'], featured: true },
                            { name: 'Master', price: '$99/mo', features: ['Everything', 'Custom designs', 'Dedicated team'] },
                        ].map((plan, i) => (
                            <div key={i} className={`${plan.featured ? 'bg-[#8D6E63] text-white scale-105' : 'bg-[#fdfbf7]'} rounded-2xl p-6 shadow-[4px_8px_20px_rgba(0,0,0,0.2)] relative`} style={plan.featured ? { backgroundImage: leatherTexture } : {}}>
                                {plan.featured && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FFECB3] text-[#5D4037] text-xs font-bold rounded-full shadow-md">
                                        POPULAR
                                    </div>
                                )}
                                <h3 className={`font-bold text-xl mb-2 ${plan.featured ? 'text-[#FFECB3]' : 'text-[#5D4037]'}`}>{plan.name}</h3>
                                <div className={`text-3xl font-bold mb-6 ${plan.featured ? 'text-white' : 'text-[#8D6E63]'}`}>{plan.price}</div>
                                <ul className="space-y-3 mb-6 text-left">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className={`flex items-center gap-2 text-sm ${plan.featured ? 'text-[#D7CCC8]' : 'text-[#8D6E63]'}`}>
                                            <Star size={14} className={plan.featured ? 'text-[#FFECB3]' : 'text-[#8D6E63]'} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <ButtonSkeu primary={plan.featured}>
                                    Get Started <ChevronRight size={16} className="inline ml-1" />
                                </ButtonSkeu>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-[#8D6E63] rounded-[30px] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)]" style={{ backgroundImage: leatherTexture }}>
                        <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-[#FFECB3] mb-6`}>Ready to Craft?</h2>
                        <p className="text-[#D7CCC8] mb-8 max-w-xl mx-auto">Join thousands of designers creating authentic, tactile digital experiences.</p>
                        <ButtonSkeu primary>Start Free Trial</ButtonSkeu>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 bg-[#5D4037] text-[#D7CCC8]" style={{ backgroundImage: leatherTexture }}>
                <div className="max-w-6xl mx-auto">
                    <div className={`${isMobile ? 'flex flex-col gap-8' : 'flex justify-between'} mb-8`}>
                        <div className="flex items-center gap-3 text-[#FFECB3]">
                            <Book size={24} />
                            <span className="font-bold text-lg">Craftsman</span>
                        </div>
                        <div className={`flex ${isMobile ? 'flex-wrap' : ''} gap-6 text-sm`}>
                            {['Features', 'Pricing', 'About', 'Blog', 'Contact'].map((item) => (
                                <a key={item} href="#" className="hover:text-[#FFECB3] transition-colors">{item}</a>
                            ))}
                        </div>
                    </div>
                    <div className="text-center text-sm opacity-60 pt-8 border-t border-[#8D6E63]">
                        © 2024 Craftsman. Handcrafted with care.
                    </div>
                </div>
            </footer>
        </div>
    );
};
