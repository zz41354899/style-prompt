import { useState } from 'react';
import { Droplets, Brush, Feather, Menu, X, ArrowRight, Sun } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S49Watercolor = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Watercolor Texture
    const texture = "https://www.transparenttextures.com/patterns/watercolor.png";
    const paper = `
    repeating-linear-gradient(#F5F5DC, #F5F5DC 2px, #FFFAF0 2px, #FFFAF0 4px)
  `;

    return (
        <div className="min-h-screen bg-[#FFFAF0] font-sans selection:bg-pink-200 selection:text-gray-800 overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Lato:wght@300;400&display=swap');
        .font-artist { font-family: 'Amatic SC', cursive; }
        .font-body { font-family: 'Lato', sans-serif; }
      `}</style>

            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-40 z-0 mix-blend-multiply" style={{ backgroundImage: `url(${texture})` }} />

            {/* Paint Splashes */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300 rounded-full blur-[80px] opacity-30 mix-blend-multiply" />
                <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-pink-300 rounded-full blur-[60px] opacity-30 mix-blend-multiply" />
                <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] bg-yellow-200 rounded-full blur-[40px] opacity-40 mix-blend-multiply" />
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center relative">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-blue-400 opacity-80 flex items-center justify-center mask-image-blob text-white">
                            <Brush size={20} />
                        </div>
                        <span className="font-artist text-3xl font-bold tracking-wide text-gray-700">Artisan.Co</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Gallery', 'Workshops', 'Stories', 'Shop'].map((item) => (
                            <a key={item} href="#" className="font-artist text-2xl text-gray-600 hover:text-blue-500 transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-2 left-0 w-full h-[8px] bg-blue-200/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full blur-sm" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2 bg-pink-300/50 hover:bg-pink-300 transition-colors rounded-full font-artist text-xl font-bold text-gray-800 shadow-sm backdrop-blur-sm border border-white/50">
                            Sign In
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} className="text-gray-600" /> : <Menu size={24} className="text-gray-600" />}
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
                                Gallery
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Workshops
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Stories
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Shop
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 flex min-h-[90vh] items-center">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-16 items-center`}>

                    <div className="relative">
                        <span className="inline-block px-4 py-1 bg-green-200/30 rounded-full font-artist text-xl font-bold text-green-700 mb-6 border border-green-200/50">
                            New Collection
                        </span>
                        <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-artist font-bold text-gray-800 leading-[0.85] mb-8`}>
                            Paint Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Imagination</span>
                        </h1>

                        <p className="font-body text-xl text-gray-600 mb-10 max-w-md leading-relaxed">
                            Discover a world where colors blend seamlessly and creativity knows no boundaries. Handcrafted textures for the digital age.
                        </p>

                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6`}>
                            <button className="px-10 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-artist text-2xl font-bold rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-lg hover:shadow-blue-300/50 hover:scale-105 transition-all">
                                Start Painting
                            </button>
                            <button className="px-10 py-4 bg-white/50 text-gray-700 font-artist text-xl font-bold rounded-[70%_30%_30%_70%_/_70%_70%_30%_30%] border border-gray-200 hover:bg-white transition-all shadow-sm">
                                View Gallery
                            </button>
                        </div>
                    </div>

                    {/* Watercolor Illustration Area */}
                    <div className="relative h-[600px] w-full flex items-center justify-center">
                        <div className="relative w-80 h-96">
                            {/* Photo Frame with Paint Effect */}
                            <div className="absolute inset-0 bg-white p-4 shadow-xl transform rotate-2 z-10 mix-blend-normal">
                                <div className="w-full h-full bg-gray-100 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
                                    <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-pink-500/20 mix-blend-overlay" />
                                </div>
                            </div>

                            {/* Paint Blobs underneath */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 z-0 animate-pulse" />
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 z-0 animate-pulse animation-delay-1000" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Artistic Features */}
            <section className="py-24 px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center font-artist text-5xl font-bold text-gray-700 mb-20 text-shadow-sm">Why Choose Artisan?</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-12`}>
                        {[
                            { icon: Droplets, title: 'Natural Flow', color: 'bg-blue-100', text: 'text-blue-600' },
                            { icon: Feather, title: 'Lightweight', color: 'bg-pink-100', text: 'text-pink-600' },
                            { icon: Sun, title: 'Vibrant', color: 'bg-yellow-100', text: 'text-yellow-600' },
                        ].map((item, i) => (
                            <div key={i} className="text-center group">
                                <div className={`w-24 h-24 mx-auto ${item.color} rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] flex items-center justify-center mb-6 transform transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-sm`}>
                                    <item.icon size={40} className={`${item.text} opacity-80`} />
                                </div>
                                <h3 className="font-artist text-3xl font-bold text-gray-700 mb-4">{item.title}</h3>
                                <p className="font-body text-gray-500 leading-relaxed px-4">
                                    Embrace the imperfection. Let your digital identity bleed into the canvas of the web.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Paint Strip */}
            <section className="py-20 bg-blue-400/10 backdrop-blur-sm relative overflow-hidden my-20 transform -skew-y-2">
                {/* Paint edges */}
                <div className="absolute top-0 left-0 w-full h-4 bg-[url('https://toppng.com/uploads/preview/grunge-border-png-115539502947p4y2c1t1g.png')] bg-repeat-x opacity-20 transform rotate-180" />

                <div className="max-w-4xl mx-auto px-4 text-center transform skew-y-2">
                    <h2 className="font-artist text-5xl font-bold text-blue-900 mb-6">Join the Studio</h2>
                    <p className="font-body text-lg text-blue-800/70 mb-8">Get weekly inspiration delivered straight to your creative mind.</p>

                    <div className="flex max-w-md mx-auto relative">
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className="w-full px-6 py-4 rounded-full bg-white border-none shadow-md font-body focus:ring-4 focus:ring-blue-200 outline-none"
                        />
                        <button className="absolute right-2 top-2 bottom-2 px-8 bg-blue-500 text-white rounded-full font-artist text-xl font-bold hover:bg-blue-600 transition-colors shadow-sm">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('https://toppng.com/uploads/preview/grunge-border-png-115539502947p4y2c1t1g.png')] bg-repeat-x opacity-20" />
            </section>

            {/* Footer */}
            <footer className="pb-12 pt-0 px-6 text-center">
                <div className="font-artist text-2xl font-bold text-gray-400 mb-4">
                    Handmade with <span className="text-pink-400">♥</span> in 2024
                </div>
                <div className="flex justify-center gap-8 font-body text-sm text-gray-400">
                    <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-600">Terms of Art</a>
                    <a href="#" className="hover:text-gray-600">Contact Studio</a>
                </div>
            </footer>
        </div>
    );
};
