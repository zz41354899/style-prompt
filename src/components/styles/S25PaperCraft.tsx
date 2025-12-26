import { useState } from 'react';
import { Scissors, FileText, Layers, PenTool, Menu, X, ArrowRight, Heart, Share2, MessageCircle } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S25PaperCraft = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    const colors = {
        bg: '#F5F5F0',
        paper: '#FFFFFF',
        text: '#2C2C2C',
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
        muted: '#999999',
        shadow: 'rgba(0,0,0,0.12)',
    };

    const shadows = {
        sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        md: '0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)',
        lg: '0 10px 20px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.1)',
        cutout: 'inset 0 2px 4px rgba(0,0,0,0.1)',
    };

    return (
        <div
            className="min-h-screen font-sans"
            style={{
                backgroundColor: colors.bg,
                color: colors.text,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%239C92AC\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            }}
        >
            {/* Navbar */}
            <header className="fixed top-0 w-full z-50 p-4">
                <div
                    className="max-w-6xl mx-auto rounded-lg px-6 py-4 flex items-center justify-between transition-all duration-300"
                    style={{
                        backgroundColor: colors.paper,
                        boxShadow: shadows.md,
                        transform: 'rotate(-0.5deg)',
                    }}
                >
                    <div className="flex items-center gap-2">
                        <div className="bg-red-400 text-white p-2 rounded shadow-sm rotate-3">
                            <Scissors size={20} />
                        </div>
                        <span className="font-serif font-bold text-xl tracking-tight">PaperFlow</span>
                    </div>

                    <nav className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Crafts', 'Templates', 'Workshop'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="font-medium hover:text-red-400 transition-colors relative group"
                            >
                                {item}
                                <span
                                    className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-200 -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ borderRadius: '4px 4px 0 0' }}
                                />
                            </a>
                        ))}
                        <button
                            className="px-6 py-2 rounded-lg font-bold text-white transition-transform hover:-translate-y-1 active:translate-y-0"
                            style={{ backgroundColor: colors.primary, boxShadow: shadows.sm }}
                        >
                            Get Started
                        </button>
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
                                Crafts
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Templates
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Workshop
                            </a>
                        </div>
                    </div>
                </div>
            )}

                    {responsive.nav.showMobile && (
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 rounded hover:bg-gray-100"
                        >
                            {menuOpen ? <X /> : <Menu />}
                        </button>
                    )}
                </div>
            </header>

            {/* Hero */}
            <section className="pt-32 pb-20 px-4">
                <div className={`max-w-6xl mx-auto flex flex-col ${!isMobile ? 'md:flex-row' : ''} items-center gap-12`}>
                    <div className="flex-1 space-y-6">
                        <div
                            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-2 transform -rotate-1 origin-left"
                            style={{ backgroundColor: colors.accent, color: colors.text }}
                        >
                            HANDCRAFTED UI DESIGN
                        </div>
                        <h1 className={`text-5xl ${!isMobile ? 'md:text-7xl' : ''} font-serif font-bold leading-tight relative`}>
                            Design with a
                            <span className="relative inline-block mx-3">
                                <span className="relative z-10">Human Touch</span>
                                <span
                                    className="absolute bottom-2 left-0 w-full h-4 bg-blue-200 -z-0 transform -rotate-1"
                                    style={{ borderRadius: '2px' }}
                                />
                            </span>
                        </h1>
                        <p className={`text-lg ${!isMobile ? 'md:text-xl' : ''} text-gray-600 max-w-lg leading-relaxed`}>
                            Bring the warmth of physical paper to your digital products. Layered, textured, and delightfully imperfect.
                        </p>
                        <div className={`flex flex-col ${!isMobile ? 'sm:flex-row' : ''} gap-4 pt-4`}>
                            <button
                                className="px-8 py-4 rounded-lg font-bold text-white text-lg flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 active:translate-y-0 shadow-lg"
                                style={{ backgroundColor: colors.primary }}
                            >
                                Start Creating <ArrowRight size={20} />
                            </button>
                            <button
                                className="px-8 py-4 rounded-lg font-bold text-gray-700 text-lg border-2 border-dashed border-gray-300 hover:border-gray-400 hover:bg-white transition-all"
                            >
                                View Examples
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 w-full relative">
                        <div
                            className="relative z-10 bg-white p-6 rounded-lg rotate-2 transition-transform hover:rotate-0"
                            style={{ boxShadow: shadows.lg }}
                        >
                            <div className="w-full h-64 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 transform translate-x-10 -translate-y-10" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 transform -translate-x-10 translate-y-10" />
                                <Layers size={64} className="text-gray-300" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-3/4" />
                                <div className="h-4 bg-gray-200 rounded w-1/2" />
                            </div>
                        </div>
                        {/* Background decorative papers */}
                        <div
                            className="absolute top-4 -right-4 w-full h-full bg-blue-100 rounded-lg -z-10 transform -rotate-2 border-2 border-white"
                            style={{ boxShadow: shadows.sm }}
                        />
                        <div
                            className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-200 rounded-full -z-0 flex items-center justify-center transform rotate-12"
                            style={{ boxShadow: shadows.md }}
                        >
                            <span className="font-bold text-sm transform -rotate-12">New!</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Cards */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className={`grid ${!isMobile ? 'md:grid-cols-3' : ''} gap-8`}>
                        {[
                            { icon: Layers, title: 'Layered Depth', color: 'bg-blue-100' },
                            { icon: PenTool, title: 'Hand-Drawn', color: 'bg-yellow-100' },
                            { icon: Scissors, title: 'Cutout Style', color: 'bg-red-100' },
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-xl transition-all duration-300 hover:-translate-y-2"
                                style={{
                                    boxShadow: shadows.md,
                                    transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)`,
                                }}
                            >
                                <div
                                    className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-6 transform rotate-3`}
                                    style={{ boxShadow: shadows.sm }}
                                >
                                    <feature.icon size={28} className="text-gray-700" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Authentic textures and shadows that make your digital content feel tactile and real.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Masonry/Collage Section */}
            <section className="py-20 px-4 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-4 bg-gray-200" style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)' }}></div>
                <div className="max-w-4xl mx-auto text-center mt-12 mb-16">
                    <h2 className="text-4xl font-serif font-bold mb-6">Curated Collections</h2>
                    <p className="text-gray-600">Explore our library of handcrafted assets designed to inspire.</p>
                </div>

                <div className={`max-w-5xl mx-auto grid grid-cols-2 ${!isMobile ? 'md:grid-cols-4' : ''} gap-4 auto-rows-[200px]`}>
                    <div className="col-span-2 row-span-2 bg-blue-50 rounded-lg p-6 relative overflow-hidden group" style={{ boxShadow: shadows.cutout }}>
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                            <FileText size={120} />
                        </div>
                        <span className="relative z-10 font-bold text-xl">Documentation</span>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-6 transform rotate-2 hover:rotate-0 transition-transform" style={{ boxShadow: shadows.sm }}>
                        <div className="w-8 h-8 bg-yellow-200 rounded-full mb-2" />
                        <span className="font-bold">Stickers</span>
                    </div>
                    <div className="bg-red-50 rounded-lg p-6 transform -rotate-1 hover:rotate-0 transition-transform" style={{ boxShadow: shadows.sm }}>
                        <Heart className="text-red-400 mb-2" />
                        <span className="font-bold">Likes</span>
                    </div>
                    <div className="col-span-2 bg-green-50 rounded-lg p-6 flex items-center justify-between" style={{ boxShadow: shadows.cutout }}>
                        <div>
                            <h4 className="font-bold text-lg">Community</h4>
                            <p className="text-sm text-gray-500">Join 10k+ creators</p>
                        </div>
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(av => (
                                <div key={av} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 px-4">
                <div
                    className={`max-w-3xl mx-auto bg-white p-8 ${!isMobile ? 'md:p-12' : ''} rounded-lg text-center relative`}
                    style={{
                        boxShadow: shadows.md,
                        background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 29px,
              #E5E5E5 30px
            ), #FFFFFF`
                    }}
                >
                    {/* Tape elements */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100 opacity-80 rotate-1 transform" />

                    <h2 className="text-3xl font-serif font-bold mb-4 bg-white inline-block px-4">Stay in the Loop</h2>
                    <p className="text-gray-600 mb-8 bg-white inline-block px-2">Get the latest templates and paper craft tips delivered to your inbox.</p>

                    <div className={`flex flex-col ${!isMobile ? 'sm:flex-row' : ''} gap-4 max-w-md mx-auto relative z-10`}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-4 py-3 rounded border-2 border-gray-200 focus:border-blue-300 focus:outline-none bg-white font-serif"
                        />
                        <button
                            className="px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-black transition-colors transform hover:-rotate-1"
                            style={{ boxShadow: shadows.sm }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white pt-16 pb-8 px-4 relative">
                <div className="absolute top-0 left-0 w-full h-6 bg-[#F5F5F0]" style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)', transform: 'rotate(180deg) translateY(1px)' }}></div>
                <div className={`max-w-6xl mx-auto grid ${!isMobile ? 'md:grid-cols-4' : ''} gap-8`}>
                    <div className={`col-span-1 ${!isMobile ? 'md:col-span-2' : ''}`}>
                        <div className="flex items-center gap-2 mb-4">
                            <Scissors size={24} className="text-yellow-400" />
                            <span className="font-serif font-bold text-2xl">PaperFlow</span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Handcrafted UI components for the modern web. Built with love and paper.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-gray-300">Product</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white hover:underline decoration-yellow-400 decoration-2">Features</a></li>
                            <li><a href="#" className="hover:text-white hover:underline decoration-yellow-400 decoration-2">Pricing</a></li>
                            <li><a href="#" className="hover:text-white hover:underline decoration-yellow-400 decoration-2">Showcase</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-gray-300">Connect</h4>
                        <div className="flex gap-4">
                            <div className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors cursor-pointer">
                                <Share2 size={18} />
                            </div>
                            <div className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors cursor-pointer">
                                <MessageCircle size={18} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
                    © 2024 PaperFlow Design. All rights reserved.
                </div>
            </footer>
        </div>
    );
};
