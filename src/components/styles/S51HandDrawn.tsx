import { useState } from 'react';
import { PenTool, Edit3, BookOpen, Coffee, Menu, X, ArrowRight, Smile } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S51HandDrawn = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Dotted Notebook Paper Background
    const notebookBg = `
    radial-gradient(#BDC3C7 1px, transparent 1px)
  `;

    // Wobbly Border Animation
    const wobbly = "border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px]";

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-yellow-200 selection:text-black overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Caveat:wght@400;700&display=swap');
        .font-sketch { font-family: 'Patrick Hand', cursive; }
        .font-script { font-family: 'Caveat', cursive; }
        
        .drawing-shadow {
           filter: drop-shadow(4px 4px 0px rgba(0,0,0,0.1));
        }
      `}</style>

            {/* Notebook Dots */}
            <div className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[length:20px_20px]" style={{ backgroundImage: notebookBg }} />

            {/* Doodles Overlay */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
                <div className="absolute top-20 left-10 text-6xl rotate-12">★</div>
                <div className="absolute bottom-40 right-20 text-8xl -rotate-12">☹</div>
                <div className="absolute top-1/2 right-[10%] w-32 h-32 border-4 border-black rounded-full" style={{ borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }} />
                <svg className="absolute bottom-10 left-10 w-48 h-24 stroke-black stroke-2 fill-none" viewBox="0 0 100 50">
                    <path d="M0 25 Q 25 0 50 25 T 100 25" />
                </svg>
            </div>

            {/* Navbar (Sticker Style) */}
            <nav className="fixed top-0 w-full z-50 p-6">
                <div className={`max-w-6xl mx-auto flex justify-between items-center bg-white p-4 ${wobbly} shadow-sm relative`}>
                    {/* Tape */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/50 backdrop-blur-sm transform rotate-1 border border-yellow-200 shadow-sm opacity-80" />

                    <div className="flex items-center gap-2">
                        <PenTool size={28} className="text-gray-800" strokeWidth={2.5} />
                        <span className="font-script text-3xl font-bold">Sketchbook.UI</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                            <a key={item} href="#" className="font-sketch text-xl hover:text-blue-600 hover:underline decoration-wavy decoration-2 transition-all">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className={`${isMobile ? 'hidden' : 'block'} px-6 py-2 bg-yellow-100 hover:bg-yellow-200 transition-colors ${wobbly} font-sketch text-lg font-bold shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#000]`}>
                            Download
                        </button>
                        {responsive.nav.showMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={28} /> : <Menu size={28} />}
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
                                About
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Services
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Portfolio
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

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10 min-h-[90vh] flex items-center">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-16 items-center`}>

                    <div className="relative">
                        {/* Arrow pointing to H1 */}
                        <svg className={`absolute -left-16 top-0 w-16 h-16 ${isMobile ? 'hidden' : 'block'} transform -rotate-12`} viewBox="0 0 100 100">
                            <path d="M80 80 Q 50 50 80 20" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)" />
                            <defs>
                                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" />
                                </marker>
                            </defs>
                        </svg>

                        <h1 className="text-7xl font-sketch leading-[0.9] mb-8 relative inline-block">
                            Hand Drawn <br />
                            <span className="relative">
                                Interfaces
                                <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-200/60 -z-10 rounded-sm transform -rotate-1 skew-x-12" />
                            </span>
                        </h1>

                        <p className="font-script text-3xl text-gray-600 mb-10 leading-tight">
                            Because perfectly straight lines are boring. Add some human touch to your wireframes.
                        </p>

                        <div className="flex gap-6 items-center">
                            <button className={`px-8 py-4 bg-white border-2 border-black ${wobbly} font-sketch text-xl font-bold shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 group`}>
                                Start Doodling <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <span className="font-script text-xl text-gray-400 rotate-6">Free forever!</span>
                        </div>
                    </div>

                    {/* Sketch Illustration */}
                    <div className="relative h-[500px] w-full flex items-center justify-center">
                        <div className={`relative w-80 h-96 bg-white p-8 ${wobbly} shadow-xl transform rotate-2`}>

                            {/* Wireframe Mockup */}
                            <div className="space-y-4 font-sketch text-gray-400">
                                <div className="w-full h-8 border-b-2 border-gray-200 border-dashed flex justify-between items-center px-2">
                                    <div className="w-4 h-4 rounded-full border border-gray-400" />
                                    <div className="w-16 h-2 bg-gray-200 rounded-full" />
                                </div>
                                <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                                    Image Placeholder
                                </div>
                                <div className="w-3/4 h-4 bg-gray-200 rounded-full" />
                                <div className="w-full h-2 bg-gray-100 rounded-full" />
                                <div className="w-5/6 h-2 bg-gray-100 rounded-full" />

                                <div className="flex gap-4 mt-8">
                                    <div className="w-1/2 h-10 border-2 border-gray-800 rounded-lg" />
                                    <div className="w-1/2 h-10 bg-gray-200 rounded-lg" />
                                </div>
                            </div>

                            {/* Red Pen Correction */}
                            <div className="absolute top-1/2 right-[-20px] text-red-500 font-script text-2xl font-bold transform -rotate-12">
                                Make this pop!
                                <svg className="w-12 h-12 absolute -top-4 -left-8 pointer-events-none" viewBox="0 0 100 100">
                                    <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="red" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-4 bg-[#F9F9F9] border-y-2 border-dashed border-gray-300">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-sketch text-center mb-16 underline decoration-wavy decoration-blue-300 decoration-2">My Tools</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-12`}>
                        {[
                            { icon: BookOpen, title: 'Storyboarding', color: 'bg-blue-100' },
                            { icon: Edit3, title: 'Wireframing', color: 'bg-green-100' },
                            { icon: Coffee, title: 'Brainstorming', color: 'bg-orange-100' },
                        ].map((item, i) => (
                            <div key={i} className={`bg-white p-8 ${wobbly} shadow-md hover:shadow-lg transition-shadow relative`}>
                                {/* Pushpin */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-sm border border-red-700 z-10" />

                                <div className={`w-16 h-16 mx-auto ${item.color} rounded-full flex items-center justify-center mb-6 border-2 border-black transform rotate-1`}>
                                    <item.icon size={32} className="text-black" />
                                </div>
                                <h3 className="text-3xl font-script font-bold text-center mb-4">{item.title}</h3>
                                <p className="font-sketch text-xl text-center leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 text-center font-sketch text-lg text-gray-500 relative">
                {/* Footer divider doodle */}
                <svg className="absolute top-0 left-0 w-full h-8" preserveAspectRatio="none">
                    <path d="M0 4 Q 25 8 50 4 T 100 4" fill="none" stroke="#ddd" strokeWidth="2" strokeDasharray="10,5" />
                </svg>

                <div className="flex justify-center items-center gap-2 mb-4">
                    <span className="text-2xl">Made with coffee</span>
                    <Coffee size={24} />
                </div>
                <div className="space-x-4 underline decoration-dotted">
                    <a href="#">Github</a>
                    <a href="#">Twitter</a>
                    <a href="#">Dribbble</a>
                </div>
            </footer>
        </div>
    );
};
