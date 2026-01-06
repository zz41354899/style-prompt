import { useState } from 'react';
import { Lightbulb, BookOpen, GraduationCap, Calculator, Menu, X, ArrowRight, Eraser, Pen } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S36Chalkboard = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Chalkboard texture and effects
    // Using CSS radial gradients to simulate dust and eraser marks
    const boardTexture = `
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 20%),
    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 30%),
    linear-gradient(#2B3A42, #1F2B32)
  `;

    // SVG Filter for rough edges (simulated via border-radius and shadows for simplicity in React without external assets)
    const chalkBorder = "border-[3px] border-white/60 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[2px_2px_4px_rgba(0,0,0,0.2)]";

    return (
        <div className="min-h-screen font-handwriting text-white selection:bg-white/20 selection:text-white overflow-x-hidden relative" style={{ background: boardTexture }}>
            {/* Wooden Frame */}
            <div className="fixed inset-0 border-[12px] border-[#5D4037] pointer-events-none z-50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                {/* Wood grain effect simplified */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] mix-blend-multiply" />
            </div>

            {/* Chalk tray at bottom */}
            <div className="fixed bottom-0 left-0 right-0 h-8 bg-[#5D4037] z-50 shadow-lg flex justify-center items-end pb-1 gap-4 px-20">
                <div className="w-16 h-2 bg-white rounded-full shadow-sm rotate-1" />
                <div className="w-12 h-2 bg-yellow-200 rounded-full shadow-sm -rotate-2" />
                <div className="w-10 h-2 bg-blue-200 rounded-full shadow-sm rotate-3" />
                <div className="w-20 h-6 bg-gray-600 rounded-sm mb-1 ml-8 shadow-md transform -skew-x-12 flex items-center justify-center text-[8px] text-gray-400">ERASER</div>
            </div>

            {/* Navbar */}
            <nav className="fixed top-6 left-6 right-6 z-40">
                <div className={`max-w-6xl mx-auto flex justify-between items-center p-4 bg-white/5 backdrop-blur-sm ${chalkBorder}`}>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 border-2 border-dashed border-white rounded-full flex items-center justify-center animate-pulse">
                            <Lightbulb className="text-yellow-200" />
                        </div>
                        <span className="text-2xl font-bold tracking-widest text-yellow-100">CLASSROOM</span>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-8`}>
                        {['Lessons', 'Homework', 'Grades', 'Library'].map((item) => (
                            <a key={item} href="#" className="text-lg hover:text-yellow-200 transition-colors relative group">
                                {item}
                                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-70" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className={`px-6 py-2 hover:bg-white/10 transition-colors text-lg ${chalkBorder}`}>
                            Sign In
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
                                Lessons
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Homework
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Grades
                            </a>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Library
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 flex flex-col items-center justify-center min-h-[80vh] relative z-10 text-center">
                {/* Dusty Clouds */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full filter blur-[50px] animate-[pulse_5s_infinite]" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white opacity-5 rounded-full filter blur-[60px] animate-[pulse_7s_infinite_reverse]" />

                <div className="relative z-10 space-y-8 max-w-4xl">
                    <h1 className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-bold leading-tight transform -rotate-1 text-white opacity-90 relative inline-block`}>
                        Learn Something <br />
                        <span className="text-yellow-200 underline decoration-wavy decoration-white/30 decoration-2">New Everyday</span>
                        <Lightbulb size={48} className="absolute -top-12 -right-8 text-yellow-300 animate-bounce" />
                    </h1>

                    <p className={`${isMobile ? 'text-2xl' : 'text-3xl'} text-blue-200 max-w-2xl mx-auto font-light leading-relaxed opacity-80`}>
                        A digital space that feels like your favorite classroom. Sketch, write, and explore ideas freely.
                    </p>

                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center gap-6 pt-8`}>
                        <button className={`px-8 py-4 bg-white text-[#2B3A42] text-xl font-bold hover:bg-yellow-100 transition-colors flex items-center gap-2 ${chalkBorder} border-transparent shadow-[4px_4px_0_rgba(0,0,0,0.3)] hover:scale-105 transform`}>
                            Start Learning <ArrowRight size={24} />
                        </button>
                        <button className={`px-8 py-4 text-white text-xl font-bold hover:bg-white/10 transition-colors ${chalkBorder}`}>
                            Browse Courses
                        </button>
                    </div>
                </div>
            </section>

            {/* Course Cards (Hand Drawn Boxes) */}
            <section className="py-20 px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-12`}>
                        {[
                            { icon: Calculator, title: 'Math 101', desc: 'Algebra, Geometry, and sketchpad calculus.', color: 'text-pink-300' },
                            { icon: BookOpen, title: 'Literature', desc: 'Classic novels dissected with handwritten notes.', color: 'text-blue-300' },
                            { icon: GraduationCap, title: 'Science', desc: 'Physics experiments visualized in chalk.', color: 'text-green-300' },
                        ].map((card, i) => (
                            <div key={i} className={`p-8 relative hover:-translate-y-2 transition-transform duration-300 group`}>
                                {/* Chalk box border */}
                                <div className={`absolute inset-0 border-2 border-dashed border-white/30 rounded-2xl group-hover:border-solid group-hover:border-white/60 transition-all ${chalkBorder} bg-white/5`} />

                                <div className="relative z-10 text-center">
                                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full border-2 border-white/50 flex items-center justify-center ${card.color} group-hover:scale-110 transition-transform`}>
                                        <card.icon size={40} />
                                    </div>
                                    <h3 className={`text-3xl font-bold mb-4 ${card.color}`}>{card.title}</h3>
                                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                                        {card.desc}
                                    </p>
                                    <div className="mt-6 inline-block border-b border-white/30 pb-1 text-sm opacity-60 group-hover:opacity-100 cursor-pointer">
                                        View Syllabus
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 text-center relative z-10">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-6xl text-white/20 absolute -top-10 left-0">“</div>
                    <h2 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-bold leading-tight mb-8 relative z-10`}>
                        Education is not the filling of a pail,<br />
                        but the lighting of a fire.
                    </h2>
                    <div className="text-6xl text-white/20 absolute -bottom-10 right-0 rotate-180">“</div>
                    <div className="text-2xl text-yellow-200 mt-6">- W.B. Yeats</div>

                    <div className="mt-12 w-32 h-1 bg-white/20 mx-auto rounded-full" />
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 pb-32 text-center relative z-10 border-t border-white/10 bg-black/20">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex justify-center gap-8 mb-8">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                            <Pen size={20} />
                        </div>
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                            <Eraser size={20} />
                        </div>
                    </div>
                    <p className="text-white/40 text-sm">
                        © 2024 Chalkboard UI. Handcrafted with love and dust.
                    </p>
                </div>
            </footer>

            <style>{`
        /* Simulating handwriting font if not available, falling back to cursive */
        .font-handwriting {
          font-family: 'Patrick Hand', 'Comic Sans MS', cursive, sans-serif;
        }
      `}</style>
        </div>
    );
};
