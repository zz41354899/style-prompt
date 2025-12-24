import { useState } from 'react';
import { Leaf, Menu, X, ArrowRight } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S89MinimalistSerif = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#F9F7F2] font-sans text-[#4A4036] overflow-x-hidden selection:bg-[#4A4036] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400&display=swap');
        .font-cereal { font-family: 'Playfair Display', serif; }
        .font-sans-clean { font-family: 'Lato', sans-serif; }
        
        .img-reveal {
           animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
           transform-origin: bottom;
        }
        
        @keyframes reveal {
           0% { transform: scaleY(0); opacity: 0; }
           100% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>

            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-[#F9F7F2]/90 backdrop-blur-sm">
                <div className="max-w-screen-xl mx-auto px-12 h-32 flex justify-between items-center">
                    <div className={`${isMobile ? 'hidden' : 'md:flex'} items-center gap-12 font-sans-clean text-xs uppercase tracking-[0.15em] text-[#8C857B]`}>
                        <a href="#" className="hover:text-[#4A4036] transition-colors">Journal</a>
                        <a href="#" className="hover:text-[#4A4036] transition-colors">Shop</a>
                        <a href="#" className="hover:text-[#4A4036] transition-colors">About</a>
                    </div>

                    <div className="font-cereal text-3xl italic tracking-wide absolute left-1/2 -translate-x-1/2">
                        Kinfolk
                    </div>

                    <div className="flex items-center gap-8 font-sans-clean text-xs uppercase tracking-[0.15em] text-[#8C857B]">
                        <span className={`${isMobile ? 'hidden' : 'block'} cursor-pointer hover:text-[#4A4036] transition-colors`}>Cart (0)</span>
                        <span className={`${isMobile ? 'hidden' : 'block'} cursor-pointer hover:text-[#4A4036] transition-colors`}>Search</span>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
                            </button>
                        )}
                    </div>
                </div>
            </nav>
            {/* Mobile Menu */}
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 bg-[#F9F7F2] border-l border-[#EEE] p-6 pt-24 pointer-events-auto">
                        <div className="flex flex-col gap-6">
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-cereal text-[#4A4036] hover:opacity-70 transition-opacity"
                            >
                                Journal
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-cereal text-[#4A4036] hover:opacity-70 transition-opacity"
                            >
                                Shop
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-cereal text-[#4A4036] hover:opacity-70 transition-opacity"
                            >
                                About
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Content */}
            <section className="pt-48 pb-24 px-12 min-h-screen flex flex-col justify-center">
                <div className={`max-w-screen-xl mx-auto w-full grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-24 items-center`}>
                    <div className={`${isMobile ? 'order-2' : 'md:order-1'}`}>
                        <span className="block font-sans-clean text-xs uppercase tracking-[0.2em] text-[#8C857B] mb-8">Volume 84</span>
                        <h1 className={`${isMobile ? 'text-6xl' : 'text-6xl md:text-7xl lg:text-8xl'} leading-[1.1] mb-10 text-[#2C241B] font-cereal`}>
                            Slow <br /> <i className="font-light text-[#8C857B]">Living</i> <br /> Matters
                        </h1>
                        <p className="font-sans-clean font-light text-[#635B53] leading-loose max-w-sm mb-12 text-sm">
                            Exploring the delicate balance of work, life, and the quiet moments in between. A guide for small gatherings.
                        </p>
                        <a href="#" className="font-sans-clean text-xs uppercase tracking-[0.2em] border-b border-[#4A4036] pb-1 hover:text-[#8C857B] hover:border-[#8C857B] transition-colors">
                            Read the story
                        </a>
                    </div>

                    <div className={`${isMobile ? 'order-1' : 'md:order-2'} relative h-[600px] w-full bg-[#EBE5CE] flex items-center justify-center img-reveal`}>
                        <div className="absolute inset-4 border border-white/50" />
                        <Leaf size={64} strokeWidth={0.5} className="text-[#4A4036] opacity-30" />
                    </div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#8C857B] animate-bounce">
                    <ArrowRight size={20} className="transform rotate-90" strokeWidth={1} />
                </div>
            </section>

            {/* Article Grid */}
            <section className="py-32 px-12 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-x-16 gap-y-24`}>
                        {[
                            { cat: 'Design', title: 'The Art of Ceramic', date: 'Oct 12' },
                            { cat: 'Travel', title: 'Weekend in Kyoto', date: 'Oct 08' },
                            { cat: 'Food', title: 'Autumn Harvest', date: 'Sep 24' },
                        ].map((item, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-[4/5] bg-[#F4F4F4] mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" />
                                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#999] mb-4">
                                    <span>{item.cat}</span>
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="font-cereal text-2xl mb-4 group-hover:italic transition-all">{item.title}</h3>
                                <p className="font-sans-clean font-light text-xs leading-relaxed text-[#666] line-clamp-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-32 px-12 bg-[#F9F7F2] text-center">
                <div className="max-w-2xl mx-auto">
                    <Leaf size={24} className="mx-auto mb-12 text-[#CCC]" strokeWidth={1} />
                    <blockquote className={`font-cereal ${isMobile ? 'text-3xl' : 'text-3xl md:text-4xl'} italic leading-relaxed text-[#4A4036] mb-12`}>
                        "Simplicity is the ultimate sophistication."
                    </blockquote>
                    <cite className="font-sans-clean text-xs uppercase tracking-[0.2em] text-[#999] not-italic">
                        — Leonardo da Vinci
                    </cite>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-24 px-12 border-t border-[#EEE]">
                <div className={`max-w-screen-xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-4'} gap-12`}>
                    <div className="col-span-1">
                        <div className="font-cereal text-2xl italic mb-6">Kinfolk</div>
                        <div className="font-sans-clean font-light text-xs leading-loose text-[#888]">
                            1234 Signal Hill Blvd, <br />
                            Los Angeles, CA 90028 <br />
                            United States
                        </div>
                    </div>

                    {['Shop', 'Social', 'Legal'].map((col, i) => (
                        <div key={i} className="flex flex-col gap-4 font-sans-clean text-xs uppercase tracking-[0.15em] text-[#4A4036]">
                            <span className="opacity-50 mb-2">{col}</span>
                            <a href="#" className="hover:opacity-50 transition-opacity">Link One</a>
                            <a href="#" className="hover:opacity-50 transition-opacity">Link Two</a>
                            <a href="#" className="hover:opacity-50 transition-opacity">Link Three</a>
                        </div>
                    ))}
                </div>
            </footer>
        </div>
    );
};
