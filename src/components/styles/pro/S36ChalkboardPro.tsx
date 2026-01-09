import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, PenLine, Lightbulb, BookOpen, GraduationCap, Eraser, Star, Quote, Ruler } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S36ChalkboardPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#2C3E2C',
        darkGreen: '#1a261a',
        surface: 'rgba(255, 255, 255, 0.03)',
        text: '#FDFCF0', // Creamy chalk
        muted: '#E0E0D0',
        yellowChalk: '#FFFACD',
        pinkChalk: '#FFB7B2',
        blueChalk: '#B2CCFF',
        frame: '#5D4E37',
        woodDark: '#3E3221'
    };

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Fredericka+the+Great&display=swap');
            
            .chalk-font { font-family: 'Fredericka the Great', cursive; }
            .hand-font { font-family: 'Caveat', cursive; }
            
            @keyframes scribble {
                0% { background-position: 0 0; }
                100% { background-position: 100px 100px; }
            }
            @keyframes floatDust {
                0% { transform: translateY(0) rotate(0deg); opacity: 0; }
                50% { opacity: 0.5; }
                100% { transform: translateY(-50px) rotate(180deg); opacity: 0; }
            }
            @keyframes write {
                from { width: 0; }
                to { width: 100%; }
            }
            .chalk-border {
                position: relative;
                border: 2px solid transparent;
                border-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L100,0 L100,100 L0,100 Z' fill='none' stroke='white' stroke-width='2' stroke-dasharray='4 2' opacity='0.5' /%3E%3C/svg%3E") 30% round;
            }
            .eraser-mark {
                mask-image: linear-gradient(45deg, transparent 40%, black 60%);
                mask-size: 200% 200%;
                transition: mask-position 0.5s ease;
            }
            .chalk-texture {
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");
            }
            .wood-frame {
                background: transparent;
                border-color: ${colors.frame};
                box-shadow: inset 0 0 20px rgba(0,0,0,0.8), 0 0 0 8px ${colors.woodDark};
            }
            .chalk-dust-btn:hover {
                animation: scribble 1s infinite linear;
                background-image: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px);
            }
        `;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden hand-font text-xl selection:bg-white/20"
            style={{ backgroundColor: colors.bg, color: colors.text }}>

            {/* Main Wood Frame Container */}
            <div className="fixed inset-0 pointer-events-none z-50 border-[16px] md:border-[24px] wood-frame shadow-2xl"></div>

            {/* Texture Layers */}
            <div className="absolute inset-0 chalk-texture opacity-50 pointer-events-none fixed"></div>
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)]"></div>

            {/* Eraser Smudges */}
            <div className="absolute top-20 left-10 w-64 h-32 bg-white/5 blur-3xl rounded-full transform rotate-12"></div>
            <div className="absolute bottom-40 right-20 w-80 h-40 bg-white/5 blur-3xl rounded-full transform -rotate-6"></div>

            {/* Floating Dust Particles */}
            {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `floatDust ${5 + Math.random() * 5}s infinite linear`,
                        animationDelay: `${Math.random() * 5}s`
                    }}></div>
            ))}

            {/* Navigation */}
            <header className="sticky top-0 z-40 mx-auto px-6 md:px-12 pt-8 md:pt-10">
                <div className="backdrop-blur-sm bg-black/10 rounded-xl border border-white/10 p-4 px-6 relative">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <PenLine size={32} className="text-yellow-100 transform -rotate-12" />
                            <span className="text-3xl font-bold chalk-font tracking-widest text-white drop-shadow-md">
                                CHALK<span className="text-yellow-100">BOARD</span>
                            </span>
                        </div>

                        {!isMobile && (
                            <nav className="flex items-center gap-8 font-bold text-2xl">
                                {['Lessons', 'Library', 'Recess'].map((item) => (
                                    <button key={item} className="relative group hover:text-yellow-100 transition-colors">
                                        {item}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300 rounded-full"></span>
                                    </button>
                                ))}
                                <button className="px-6 py-2 rounded-lg bg-white/10 border-2 border-dashed border-white/30 hover:bg-white/20 hover:border-white transition-all transform hover:-rotate-1">
                                    ROLL CALL
                                </button>
                            </nav>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                {menuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="mt-2 p-6 rounded-xl bg-[#1a261a] border-2 border-white/10 shadow-xl relative z-50">
                        {['Lessons', 'Library', 'Recess'].map((item) => (
                            <div key={item} className="py-4 border-b border-white/10 text-2xl font-bold hover:pl-2 transition-all cursor-pointer">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-3 rounded-lg bg-white/10 border-2 border-dashed border-white/30 font-bold">ROLL CALL</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section className="relative pt-20 pb-32 px-6">
                <div className="max-w-4xl mx-auto text-center relative z-10">

                    <div className="inline-block transform -rotate-2 mb-10">
                        <div className="bg-[#B2CCFF]/20 border border-[#B2CCFF]/50 px-6 py-2 rounded-full backdrop-blur-sm">
                            <span className="text-[#B2CCFF] font-bold tracking-widest text-lg">CLASS_ID: V2.0 // ART_101</span>
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-[5.5rem] leading-[0.9] chalk-font mb-12 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                        Learn. Create.<br />
                        <span className="text-[#FFB7B2] relative inline-block mt-4">
                            Inspire.
                            <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0,5 Q50,10 100,5" stroke="#FFB7B2" strokeWidth="3" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto mb-16 text-2xl text-[#E0E0D0] leading-relaxed relative">
                        <span className="absolute -left-6 -top-4 text-5xl opacity-30">“</span>
                        The nostalgia of the classroom, reimagined for the digital age.
                        Hand-crafted components with a dusty, authentic feel.
                        <span className="absolute -right-6 -bottom-10 text-5xl opacity-30 transform rotate-180">“</span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <button className="px-10 py-4 bg-white text-[#2C3E2C] text-2xl font-bold rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 chalk-font transform -rotate-1">
                            Start Drawing <PenLine size={24} />
                        </button>

                        <button className="px-10 py-4 bg-transparent border-2 border-white/30 text-white text-2xl font-bold rounded-lg hover:bg-white/10 transition-all flex items-center gap-3 group relative overflow-hidden">
                            <span className="relative z-10">Syllabus</span>
                            <div className="absolute inset-0 bg-white/5 skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
                        </button>
                    </div>

                    {/* Chalk Arrows */}
                    <div className="absolute top-[60%] left-[10%] hidden md:block opacity-60">
                        <svg width="150" height="100" viewBox="0 0 150 100" fill="none" stroke="white" strokeWidth="2" className="transform rotate-12">
                            <path d="M10,10 C50,0 100,20 120,80" strokeDasharray="5,5" />
                            <path d="M120,80 L110,65 M120,80 L95,75" />
                        </svg>
                        <span className="absolute top-0 right-0 transform rotate-12 text-sm hand-font">Click here!</span>
                    </div>

                </div>
            </section>

            {/* Features Grid (Lesson Plan) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <div className="h-0.5 w-16 bg-white/20"></div>
                        <h2 className="text-4xl chalk-font text-[#FFFACD]">Today's Lesson Plan</h2>
                        <div className="h-0.5 w-16 bg-white/20"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: PenLine, title: "Sketching", desc: "Hand-drawn SVG borders and rough edges that feel natural." },
                            { icon: Eraser, title: "Erasing", desc: "Interactive smudge effects that reveal content layers." },
                            { icon: Ruler, title: "Measuring", desc: "Imperfect, human-like layout structure." }
                        ].map((f, i) => (
                            <div key={i} className="group relative p-8 bg-white/5 rounded-sm border border-white/20 hover:bg-white/10 transition-all duration-300">
                                {/* Tape effect */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#ffffff]/20 rotate-1 backdrop-blur-sm shadow-sm transform group-hover:-rotate-1 transition-transform"></div>

                                <div className="mb-6 inline-block p-4 rounded-full border-2 border-dashed border-white/30 group-hover:border-white/60 group-hover:scale-110 transition-all">
                                    <f.icon size={32} className="text-[#FFB7B2]" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 chalk-font">{f.title}</h3>
                                <p className="text-xl leading-relaxed text-[#E0E0D0]">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Report Card) */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto bg-[#FDFCF0] text-[#2C3E2C] p-2 md:p-4 rounded-lg shadow-2xl transform rotate-1 md:rotate-0">
                    {/* Paper Texture */}
                    <div className="bg-white border-4 border-double border-[#2C3E2C]/20 p-8 md:p-16 h-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8">
                            <div className="w-24 h-24 border-4 border-red-500 rounded-full flex items-center justify-center transform -rotate-12 opacity-80">
                                <span className="text-red-500 font-bold text-3xl chalk-font">A+</span>
                            </div>
                        </div>

                        <h2 className="text-4xl chalk-font mb-12 text-center underline decoration-wavy decoration-[#FFB7B2]">Tuition Fees</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: 'Freshman', price: '19', grade: 'B-' },
                                { name: 'Senior', price: '49', grade: 'A', hot: true },
                                { name: 'Alumni', price: '99', grade: 'A+' }
                            ].map((plan, i) => (
                                <div key={i} className={`relative p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#2C3E2C]/10 last:border-0 ${plan.hot ? 'bg-yellow-50/50 -m-4 p-10 rounded shadow-md' : ''}`}>
                                    {plan.hot && <div className="text-xs font-bold uppercase tracking-widest text-[#2C3E2C]/60 mb-2">Recommended</div>}
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <div className="text-5xl font-bold chalk-font mb-6">${plan.price}</div>
                                    <ul className="space-y-3 mb-8 text-lg">
                                        {['Access to Lab', 'Free Textbooks', 'Lunch Included'].map(f => (
                                            <li key={f} className="flex items-center gap-2">
                                                <Check size={20} className="text-green-600" /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full py-3 font-bold rounded border-2 transition-colors transform hover:-rotate-1 ${plan.hot ? 'bg-[#2C3E2C] text-white border-[#2C3E2C]' : 'border-[#2C3E2C] hover:bg-[#2C3E2C] hover:text-white'}`}>
                                        Enroll Now
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Stamp */}
                        <div className="absolute bottom-8 right-8 mix-blend-multiply opacity-50 pointer-events-none text-red-600 border-4 border-red-600 p-2 transform -rotate-6 font-bold text-xl uppercase tracking-widest">
                            Approved
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials (Notes) */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-4xl chalk-font mb-16 text-[#B2CCFF]">Class Notes</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            { text: "My favorite theme so far. It brings back memories of simpler times.", author: "Billy, Grade 4" },
                            { text: "The dust effects are incredibly realistic. My GPU fans spun up just looking at it!", author: "Mr. Anderson, IT" }
                        ].map((note, i) => (
                            <div key={i} className={`bg-[#FDFCF0] text-[#2C3E2C] p-6 shadow-lg transform ${i % 2 === 0 ? '-rotate-2' : 'rotate-2'} hover:rotate-0 transition-transform duration-300 relative`}>
                                {/* Pin */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-md border border-red-700"></div>
                                <p className="text-2xl leading-tight mb-4 hand-font">"{note.text}"</p>
                                <div className="text-right font-bold text-lg text-gray-600">- {note.author}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl chalk-font mb-8 border-b border-white/20 pb-4">Pop Quiz (FAQ)</h2>
                    <div className="space-y-4">
                        {[{ q: 'Is the chalk dust purely CSS?', a: 'Yes! SVG filters and particles.' },
                        { q: 'Can I write on it?', a: 'Interactive canvas coming in v2.1.' }
                        ].map((item, i) => (
                            <div key={i} className="border-2 border-dashed border-white/20 rounded-lg overflow-hidden group hover:border-white/50 transition-colors bg-white/5">
                                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-xl font-bold flex items-center gap-3">
                                        <span className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">Q{i + 1}</span>
                                        {item.q}
                                    </span>
                                    <ChevronDown size={24} className={`transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && <div className="p-6 pt-0 text-xl text-[#E0E0D0] pl-16 opacity-90">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 md:px-12 relative z-10 bg-[#3E3221] text-[#E0E0D0] border-t-8 border-[#2C3E2C]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <GraduationCap size={32} />
                        <span className="text-2xl font-bold chalk-font">CHALKBOARD</span>
                    </div>
                    <div className="text-lg opacity-60">
                        Don't forget your homework!
                    </div>
                    <div className="text-sm opacity-50">
                        © 2025 Education Design Co.
                    </div>
                </div>
            </footer>

        </div>
    );
};
