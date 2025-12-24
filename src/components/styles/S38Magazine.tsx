import { useState } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowRight, Instagram, Twitter, Facebook, Play } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S38Magazine = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-white font-sans text-black selection:bg-pink-500 selection:text-white">
            {/* Top Banner */}
            <div className="bg-black text-white text-xs font-bold uppercase tracking-[0.2em] py-2 text-center">
                Exclusive: The 2024 Design Issue is Here • Subscribe Now
            </div>

            {/* Navigation */}
            <nav className="border-b border-black sticky top-0 bg-white/95 backdrop-blur z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-6 text-sm font-bold uppercase tracking-wider`}>
                        <a href="#" className="hover:text-pink-600 transition-colors">Fashion</a>
                        <a href="#" className="hover:text-pink-600 transition-colors">Beauty</a>
                        <a href="#" className="hover:text-pink-600 transition-colors">Culture</a>
                    </div>

                    <div className="text-4xl font-black tracking-tighter hover:text-pink-600 transition-colors cursor-pointer">
                        VOGUE<span className="text-pink-600">.</span>UI
                    </div>

                    <div className="flex items-center gap-6">
                        <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-4 text-xs font-bold uppercase tracking-wider`}>
                            <a href="#" className="hover:text-pink-600 transition-colors">Subscribe</a>
                            <a href="#" className="hover:text-pink-600 transition-colors">Sign In</a>
                        </div>
                        <Search size={20} className="hover:text-pink-600 cursor-pointer" />
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
                                Home
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Features
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            )}

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
                                Home
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Features
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {menuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/20" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                1
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                2
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                3
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section (Cover Look) */}
            <section className={`relative ${isMobile ? 'h-[80vh]' : 'h-[90vh]'} overflow-hidden flex items-end justify-center pb-20 group`}>
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2800&auto=format&fit=crop"
                        alt="Fashion Model"
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl px-4">
                    <div className="mb-4 inline-block bg-pink-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                        Cover Story
                    </div>
                    <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl lg:text-9xl'} font-serif italic mb-6 leading-[0.8]`}>
                        The New <br /> <span className="not-italic font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Minimalism</span>
                    </h1>
                    <p className={`${isMobile ? 'text-xl' : 'text-2xl'} font-light mb-8 max-w-2xl mx-auto`}>
                        How the return to basics is redefining luxury in a digital age.
                    </p>
                    <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-colors">
                        Read The Feature
                    </button>
                </div>
            </section>

            {/* Article Grid */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3'} gap-y-16 gap-x-8`}>
                    {/* Lead Article */}
                    <div className={`${isMobile ? '' : 'col-span-2'} group cursor-pointer`}>
                        <div className="overflow-hidden mb-6 relative aspect-[16/9]">
                            <img
                                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
                                alt="Runway"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                                Trend Report
                            </div>
                        </div>
                        <h2 className="text-4xl font-serif font-bold mb-3 group-hover:text-pink-600 transition-colors">Runway to Realway: Fall 2024</h2>
                        <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                            The most wearable looks from chaotic fashion weeks in Paris, Milan, and New York.
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                            <span>By Sarah Smith</span>
                            <span className="text-gray-400">•</span>
                            <span>5 min read</span>
                        </div>
                    </div>

                    {/* Sidebar Article 1 */}
                    <div className="space-y-12">
                        <div className="group cursor-pointer">
                            <div className="overflow-hidden mb-4 aspect-[4/5] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1522335789203-abd6523f7216?q=80&w=2070&auto=format&fit=crop"
                                    alt="Makeup"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <Play className="w-10 h-10 mb-2 fill-white" />
                                    <span className="font-bold uppercase tracking-widest text-xs">Watch Video</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-600 transition-colors">Bold Lips Are Back</h3>
                            <p className="text-sm text-gray-500">Why red is the only color that matters this season.</p>
                        </div>

                        {/* Quote Block */}
                        <div className="bg-pink-50 p-8 text-center border border-pink-100">
                            <h4 className="font-bold uppercase text-xs tracking-widest text-pink-600 mb-4">Quote of the Day</h4>
                            <p className="font-serif italic text-2xl mb-4">"Style is a way to say who you are without having to speak."</p>
                            <p className="font-bold text-sm uppercase">— Rachel Zoe</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Width Banner */}
            <section className="py-20 bg-black text-white text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className={`${isMobile ? 'text-5xl' : 'text-7xl'} font-serif italic mb-6`}>The Essentials</h2>
                    <p className="text-xl font-light mb-10 text-gray-300">
                        Curated collections for the modern aesthete. From skincare to solidified code.
                    </p>
                    <button className="bg-transparent border-2 border-white px-10 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center gap-3 mx-auto">
                        Shop The Edit <ShoppingBag size={18} />
                    </button>
                </div>
            </section>

            {/* 3-Column Feature */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="flex items-end justify-between mb-12 border-b border-black pb-4">
                    <h2 className="text-4xl font-bold uppercase tracking-tighter">Must Read</h2>
                    <a href="#" className={`${isMobile ? 'hidden' : 'flex'} items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-pink-600 transition-colors`}>
                        View All <ArrowRight size={16} />
                    </a>
                </div>

                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} className={`flex gap-4 items-start group cursor-pointer border-b border-gray-100 pb-8 ${isMobile ? '' : 'border-none pb-0 block'}`}>
                            <div className={`${isMobile ? 'w-24' : 'w-full'} aspect-[3/4] overflow-hidden shrink-0 relative bg-gray-100 mb-4`}>
                                <img
                                    src={`https://source.unsplash.com/random/400x500?fashion&sig=${item}`}
                                    alt="Fashion"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-2 left-2 text-4xl font-black text-white stroke-black" style={{ WebkitTextStroke: '1px black' }}>0{item}</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-2">Category</div>
                                <h3 className="text-xl font-serif font-bold leading-tight group-hover:underline decoration-2 underline-offset-4">
                                    10 Ways to Revolutionize Your Wardrobe With CSS
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-black pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="text-5xl font-black tracking-tighter mb-8">
                        VOGUE<span className="text-pink-600">.</span>UI
                    </div>

                    <div className="flex justify-center gap-8 mb-12">
                        <div className="p-3 rounded-full border border-black hover:bg-black hover:text-white transition-colors cursor-pointer">
                            <Instagram size={20} />
                        </div>
                        <div className="p-3 rounded-full border border-black hover:bg-black hover:text-white transition-colors cursor-pointer">
                            <Twitter size={20} />
                        </div>
                        <div className="p-3 rounded-full border border-black hover:bg-black hover:text-white transition-colors cursor-pointer">
                            <Facebook size={20} />
                        </div>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-4'} gap-8 text-xs font-bold uppercase tracking-widest text-gray-500 max-w-4xl mx-auto mb-12`}>
                        <a href="#" className="hover:text-black">Newsletter</a>
                        <a href="#" className="hover:text-black">Media Kit</a>
                        <a href="#" className="hover:text-black">Careers</a>
                        <a href="#" className="hover:text-black">Condé Nast</a>
                    </div>

                    <p className="text-gray-400 text-xs">
                        © 2024 Vogue UI Ltd. All rights reserved. Use of this site constitutes acceptance of our User Agreement and Privacy Policy and Cookie Statement and Your Privacy Choices.
                    </p>
                </div>
            </footer>
        </div>
    );
};
