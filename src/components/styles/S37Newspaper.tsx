import { useState } from 'react';
import { Newspaper, Search, Menu, X, ArrowRight, Share2, Printer, Calendar } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S37Newspaper = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Paper texture
    const paperTexture = "bg-[#f5f5f0]";

    return (
        <div className={`min-h-screen ${paperTexture} font-serif text-gray-900 selection:bg-gray-900 selection:text-white`}>
            {/* Top Bar with Date and Weather */}
            <div className="border-b border-gray-900 py-1 px-4 text-xs font-sans uppercase tracking-widest flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> Tuesday, December 24, 2024</span>
                    <span className={`${isMobile ? 'hidden' : 'inline'}`}> | Vol. CXXIV No. 42</span>
                </div>
                <div className="flex items-center gap-4">
                    <span>New York, NY 42°F</span>
                    <span className={`${isMobile ? 'hidden' : 'inline'}`}> | Late Edition</span>
                </div>
            </div>

            {/* Main Header */}
            <header className="pt-8 pb-4 text-center px-4 border-b-4 border-double border-gray-900 max-w-7xl mx-auto">
                <div className="flex justify-center items-center mb-6">
                    <Newspaper size={48} className="mr-4" />
                    <h1 className={`${isMobile ? 'text-5xl' : 'text-7xl lg:text-8xl'} font-black tracking-tight uppercase scale-y-110`}>
                        The Daily UI
                    </h1>
                </div>

                <nav className={`border-t border-b border-gray-300 py-2 flex justify-center flex-wrap ${isMobile ? 'gap-6' : 'gap-12'} ${isMobile ? 'text-sm' : 'text-base'} font-bold uppercase font-sans`}>
                    {['World', 'U.S.', 'Politics', 'Business', 'Tech', 'Science', 'Health', 'Sports', 'Opinion'].map((item) => (
                        <a key={item} href="#" className="hover:underline decoration-2 underline-offset-4">{item}</a>
                    ))}
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
                                World
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                U.S.
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Politics
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Business
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Tech
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Science
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Health
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Sports
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Opinion
                            </a>
                        </div>
                    </div>
                </div>
            )}
    
            </header>

            {/* Main Content Grid */}
            <main className={`max-w-7xl mx-auto px-4 py-8 grid ${isMobile ? 'grid-cols-1' : 'grid-cols-12'} gap-8`}>
                {/* Left Column (Main Story) */}
                <div className={`${isMobile ? '' : 'col-span-8'} ${isMobile ? 'pr-0' : 'pr-8'} ${isMobile ? 'border-r-0' : 'border-r'} border-gray-300`}>
                    <article className="mb-12">
                        <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase font-sans text-red-800">
                            <span className="w-2 h-2 bg-red-800 rounded-full animate-pulse" />
                            Breaking News
                        </div>
                        <h2 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-bold leading-tight mb-4 font-serif`}>
                            Digital Ink Revolutionizes <br /> Screen Reading
                        </h2>
                        <div className="flex justify-between items-end border-b border-gray-900/10 pb-4 mb-6">
                            <div className="text-sm font-sans text-gray-600">
                                By <span className="font-bold text-gray-900 uppercase">John Q. Pixel</span> <br />
                                <span className="italic">Senior Tech Correspondent</span>
                            </div>
                            <div className="flex gap-2 text-gray-500">
                                <Share2 size={16} className="cursor-pointer hover:text-black" />
                                <Printer size={16} className="cursor-pointer hover:text-black" />
                            </div>
                        </div>

                        <div className={`float-right ml-6 mb-6 w-full ${isMobile ? '' : 'w-1/2'}`}>
                            <div className="aspect-[4/3] bg-gray-200 grayscale relative">
                                <img
                                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop"
                                    alt="News"
                                    className="w-full h-full object-cover mix-blend-multiply"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-2 font-sans text-right">FIG 1. The modern reading experience.</p>
                        </div>

                        <p className="text-lg leading-relaxed mb-4 first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-[0.8]">
                            In a stunning turn of events, the line between physical and digital media has blurred once again. Designers around the globe are embracing the constraints of traditional print to create focused, distraction-free reading environments on the web.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            "It's about authority and trust," says leading typographer Serif Seriffson. "When you strip away the gradients and the animations, you're left with the content. And the content must be good to survive."
                        </p>
                        <p className="text-lg leading-relaxed mb-8">
                            The return to monochromatic palettes and high-contrast typography signals a maturity in web design. It is no longer about what we <em>can</em> do with CSS, but what we <em>should</em> do for the reader.
                        </p>

                        <button className="flex items-center gap-2 font-bold uppercase text-sm border-b-2 border-black pb-1 hover:gap-4 transition-all">
                            Continue Reading <ArrowRight size={16} />
                        </button>
                    </article>

                    {/* Secondary Stories Row */}
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-8 border-t border-gray-900 pt-8`}>
                        <article>
                            <h3 className="text-2xl font-bold mb-3 italic">The Death of the Hero Image?</h3>
                            <p className="text-sm leading-relaxed mb-3 text-justify">
                                Why designers are opting for text-heavy introductions over massive, bandwidth-hogging splashes. A detailed analysis of 500 top websites reveals a startling trend towards minimalism.
                            </p>
                        </article>
                        <article>
                            <h3 className="text-2xl font-bold mb-3 italic">Serif Fonts Make a Comeback</h3>
                            <p className="text-sm leading-relaxed mb-3 text-justify">
                                From Times New Roman to custom variable fonts, the feet are back on the letters. What does this mean for legibility on small screens? Experts weigh in on the pixel density debate.
                            </p>
                        </article>
                    </div>
                </div>

                {/* Right Column (Sidebar) */}
                <div className={`${isMobile ? '' : 'col-span-4'} space-y-8`}>
                    {/* Search */}
                    <div className="relative border-2 border-gray-900 p-1">
                        <input
                            type="text"
                            placeholder="SEARCH ARCHIVES..."
                            className="w-full bg-transparent p-2 outline-none font-sans font-bold uppercase text-sm placeholder:text-gray-400"
                        />
                        <Search className="absolute right-3 top-3" size={18} />
                    </div>

                    {/* Market Data */}
                    <div className="border border-gray-400 p-4 bg-white/50">
                        <h4 className="font-sans font-bold uppercase text-xs border-b border-gray-400 pb-2 mb-3">Market Watch</h4>
                        <ul className="space-y-2 text-sm font-mono">
                            <li className="flex justify-between">
                                <span>DJIA</span>
                                <span className="text-green-700">▲ 0.42%</span>
                            </li>
                            <li className="flex justify-between">
                                <span>S&P 500</span>
                                <span className="text-red-700">▼ 0.12%</span>
                            </li>
                            <li className="flex justify-between">
                                <span>NASDAQ</span>
                                <span className="text-green-700">▲ 1.05%</span>
                            </li>
                            <li className="flex justify-between">
                                <span>CSS</span>
                                <span className="text-green-700">▲ 100.0%</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opinion Column */}
                    <div className="relative">
                        <div className="absolute inset-0 border border-gray-300 transform translate-x-1 translate-y-1" />
                        <div className="border border-gray-900 p-6 relative bg-[#f5f5f0]">
                            <h4 className="font-sans font-bold uppercase text-sm mb-4 text-center bg-gray-900 text-white py-1">Editorial</h4>
                            <h3 className="text-xl font-bold mb-3 font-serif">Why We Need More White Type on Black Backgrounds</h3>
                            <p className="text-sm italic mb-4">"Dark mode isn't just a preference, it's a lifestyle."</p>
                            <p className="text-xs font-sans uppercase font-bold text-gray-500">— The Editors</p>
                        </div>
                    </div>

                    {/* Advertisement Placeholder */}
                    <div className="border-4 border-dashed border-gray-400 p-8 text-center grayscale opacity-60">
                        <p className="font-sans font-bold uppercase text-xs mb-2">Advertisement</p>
                        <h3 className="text-xl font-serif font-bold">Buy More Fonts</h3>
                        <p className="text-sm mt-2">Because you don't have enough geometric sans-serifs yet.</p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t-4 border-gray-900 mt-12 py-12 px-4 bg-gray-100">
                <div className={`max-w-7xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-4'} gap-8 text-sm font-sans`}>
                    <div className={`${isMobile ? '' : 'col-span-2'}`}>
                        <Newspaper size={32} className="mb-4" />
                        <p className="max-w-xs text-gray-600 mb-4">
                            Delivering the truth, one pixel at a time. Independent journalism supported by readers like you.
                        </p>
                        <p className="font-bold uppercase text-xs">© 2024 The Daily UI. All rights reserved.</p>
                    </div>

                    <div>
                        <h5 className="font-bold uppercase mb-4 border-b border-gray-300 pb-2 inline-block">Sections</h5>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="#" className="hover:underline">Front Page</a></li>
                            <li><a href="#" className="hover:underline">Technology</a></li>
                            <li><a href="#" className="hover:underline">Culture</a></li>
                            <li><a href="#" className="hover:underline">Obituaries (Flash)</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold uppercase mb-4 border-b border-gray-300 pb-2 inline-block">Connect</h5>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="#" className="hover:underline">Subscribe</a></li>
                            <li><a href="#" className="hover:underline">Letters to Editor</a></li>
                            <li><a href="#" className="hover:underline">Print Subscription</a></li>
                            <li><a href="#" className="hover:underline">Crossword</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};
