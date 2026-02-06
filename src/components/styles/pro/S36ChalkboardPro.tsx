import { useState, useEffect } from 'react';
import { Menu, X, Check, ChevronDown, PenLine, GraduationCap, Eraser, Star, Ruler } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S36ChalkboardPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const spacing = responsive.spacing;

    // 經典綠色黑板配色
    const colors = {
        board: '#2B4C3F',
        boardLight: '#3A5F50',
        boardDark: '#1E3529',
        chalk: '#FFFEF5',
        chalkYellow: '#FFE066',
        chalkPink: '#FFB5B5',
        chalkBlue: '#A8D8FF',
        wood: '#8B5A2B',
        woodLight: '#A0724B',
        woodDark: '#5C3D1E',
        woodGrain: '#6B4423'
    };

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Architects+Daughter&display=swap');
            
            .chalk-font { 
                font-family: 'Architects Daughter', cursive;
                text-shadow: 0 0 5px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.3);
            }
            .hand-font { font-family: 'Caveat', cursive; }
            
            @keyframes dustFloat {
                0% { transform: translateY(0) translateX(0); opacity: 0.6; }
                50% { opacity: 0.3; }
                100% { transform: translateY(-60px) translateX(15px); opacity: 0; }
            }
            
            .wood-frame-realistic {
                background: linear-gradient(180deg, #A0724B 0%, #8B5A2B 30%, #5C3D1E 100%);
                box-shadow: inset 0 2px 4px rgba(255,255,255,0.15), inset 0 -2px 4px rgba(0,0,0,0.3), 0 4px 20px rgba(0,0,0,0.5);
            }
            
            .board-surface {
                background: radial-gradient(ellipse at 30% 20%, #3A5F50 0%, transparent 50%),
                            radial-gradient(ellipse at 70% 80%, #3A5F50 0%, transparent 40%),
                            linear-gradient(180deg, #1E3529 0%, #2B4C3F 30%, #2B4C3F 70%, #1E3529 100%);
            }
            
            .eraser-smudge {
                background: radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 70%);
            }
            
            .chalk-btn {
                transition: all 0.2s ease;
            }
            .chalk-btn:hover {
                transform: translateY(-2px) rotate(-1deg);
            }
        `;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden hand-font text-xl selection:bg-yellow-400/30"
            style={{ backgroundColor: '#1a1a1a' }}>

            {/* Wood Frame */}
            <div className="fixed inset-0 pointer-events-none z-50">
                <div className="absolute top-0 left-0 right-0 h-5 md:h-7 wood-frame-realistic"></div>
                <div className="absolute bottom-0 left-0 right-0 h-5 md:h-7 wood-frame-realistic"></div>
                <div className="absolute top-0 bottom-0 left-0 w-5 md:w-7 wood-frame-realistic"></div>
                <div className="absolute top-0 bottom-0 right-0 w-5 md:w-7 wood-frame-realistic"></div>
                <div className="absolute top-0 left-0 w-7 h-7 md:w-9 md:h-9" style={{ background: colors.woodDark }}></div>
                <div className="absolute top-0 right-0 w-7 h-7 md:w-9 md:h-9" style={{ background: colors.woodDark }}></div>
                <div className="absolute bottom-0 left-0 w-7 h-7 md:w-9 md:h-9" style={{ background: colors.woodDark }}></div>
                <div className="absolute bottom-0 right-0 w-7 h-7 md:w-9 md:h-9" style={{ background: colors.woodDark }}></div>
            </div>

            {/* Main Board Surface */}
            <div className="relative z-10 board-surface min-h-screen"
                style={{ margin: '20px', padding: '0', color: colors.chalk }}>

                {/* Eraser Smudges */}
                <div className="absolute top-32 left-[15%] w-48 h-24 eraser-smudge rounded-full transform rotate-12"></div>
                <div className="absolute top-[40%] right-[10%] w-64 h-32 eraser-smudge rounded-full transform -rotate-6"></div>
                <div className="absolute bottom-[30%] left-[20%] w-56 h-28 eraser-smudge rounded-full transform rotate-3"></div>

                {/* Floating Chalk Dust */}
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="absolute w-1 h-1 rounded-full pointer-events-none"
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${10 + Math.random() * 80}%`,
                            backgroundColor: colors.chalk,
                            opacity: 0.5,
                            animation: `dustFloat ${8 + Math.random() * 6}s infinite linear`,
                            animationDelay: `${Math.random() * 8}s`
                        }}></div>
                ))}

                {/* Navigation */}
                <header className="sticky top-0 z-30 mx-auto px-4 md:px-10 pt-6 md:pt-8 relative">
                    <div className="backdrop-blur-sm bg-black/20 rounded-xl border border-white/10 p-4 px-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <PenLine size={28} className="transform -rotate-12" style={{ color: colors.chalkYellow }} />
                                <span className="text-2xl md:text-3xl font-bold chalk-font tracking-wider">
                                    CHALK<span style={{ color: colors.chalkYellow }}>BOARD</span>
                                </span>
                            </div>

                            {!isMobile && (
                                <nav className="flex items-center gap-6 font-bold text-xl">
                                    {['Lessons', 'Library', 'Recess'].map((item) => (
                                        <button key={item} className="relative group hover:opacity-80 transition-opacity chalk-btn">
                                            {item}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300"></span>
                                        </button>
                                    ))}
                                    <button className="px-5 py-2 rounded-lg bg-white/10 border-2 border-dashed border-white/30 hover:bg-white/20 transition-all chalk-btn">
                                        ROLL CALL
                                    </button>
                                </nav>
                            )}
                            {isMobile && (
                                <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                                </button>
                            )}
                        </div>
                    </div>

                    {menuOpen && isMobile && (
                        <div className="mt-2 p-5 rounded-xl border-2 border-white/10 shadow-xl" style={{ background: colors.boardDark }}>
                            {['Lessons', 'Library', 'Recess'].map((item) => (
                                <div key={item} className="py-3 border-b border-white/10 text-xl font-bold hover:pl-2 transition-all cursor-pointer">{item}</div>
                            ))}
                            <button className="w-full mt-5 py-3 rounded-lg bg-white/10 border-2 border-dashed border-white/30 font-bold">ROLL CALL</button>
                        </div>
                    )}
                </header>

                {/* Hero */}
                <section className="relative z-10 pt-16 pb-24 px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center relative z-10">

                        <div className="inline-block transform -rotate-2 mb-8">
                            <div className="border px-5 py-2 rounded-full backdrop-blur-sm"
                                style={{ background: `${colors.chalkBlue}20`, borderColor: `${colors.chalkBlue}50` }}>
                                <span className="font-bold tracking-widest text-base" style={{ color: colors.chalkBlue }}>CLASS_ID: V2.0 // ART_101</span>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl leading-tight chalk-font mb-10">
                            Learn. Create.<br />
                            <span className="relative inline-block mt-2" style={{ color: colors.chalkPink }}>
                                Inspire.
                                <svg className="absolute w-full h-2 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q50,9 100,5" stroke={colors.chalkPink} strokeWidth="2" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="max-w-2xl mx-auto mb-12 text-xl md:text-2xl leading-relaxed opacity-90">
                            The nostalgia of the classroom, reimagined for the digital age.
                            Hand-crafted components with a dusty, authentic feel.
                        </p>

                        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                            <button className="px-8 py-3 text-xl font-bold rounded-lg shadow-lg hover:translate-y-1 hover:shadow-md transition-all flex items-center gap-3 chalk-font chalk-btn"
                                style={{ background: colors.chalk, color: colors.boardDark }}>
                                Start Drawing <PenLine size={22} />
                            </button>

                            <button className="px-8 py-3 bg-transparent border-2 border-white/30 text-xl font-bold rounded-lg hover:bg-white/10 transition-all flex items-center gap-3 chalk-btn">
                                Syllabus
                            </button>
                        </div>

                        {/* Chalk Arrow */}
                        <div className="absolute top-[55%] left-[8%] hidden lg:block opacity-50">
                            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="white" strokeWidth="2" className="transform rotate-12">
                                <path d="M10,10 C40,0 80,20 100,60" strokeDasharray="4,4" />
                                <path d="M100,60 L92,48 M100,60 L78,55" />
                            </svg>
                            <span className="absolute top-0 right-0 transform rotate-12 text-sm hand-font">Click here!</span>
                        </div>
                    </div>
                </section>

                {/* Social Proof */}
                <section className="py-8 px-4 border-y border-white/10 bg-white/5 relative">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 opacity-80">
                        <span className="text-lg chalk-font tracking-widest border-b border-dashed border-white/30 pb-1">HONOR ROLL:</span>
                        <div className="flex flex-wrap justify-center gap-8 font-bold text-xl hand-font">
                            {['ArtStation', 'Dribbble', 'Behance', 'Awwwards'].map((brand, i) => (
                                <div key={i} className="relative group cursor-pointer hover:opacity-100 transition-opacity opacity-70">
                                    {brand}
                                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colors.chalkYellow }}>
                                        <Star size={10} fill="currentColor" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow Steps */}
                <section className="py-20 px-4 relative">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-center text-3xl md:text-4xl chalk-font mb-16" style={{ color: colors.chalkYellow }}>Daily Schedule</h2>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-10 relative">
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 hidden md:block border-t border-dashed border-white/20 z-0"></div>

                            {[
                                { step: '01', title: 'Homeroom', desc: 'Sign up and pick your seat.' },
                                { step: '02', title: 'Study Hall', desc: 'Browse the library of styles.' },
                                { step: '03', title: 'Graduation', desc: 'Export your code with an A+.' }
                            ].map((item, i) => (
                                <div key={i} className="relative z-10 p-5 rounded-full border-4 border-dashed border-white/20 w-52 h-52 flex flex-col items-center justify-center text-center shadow-xl group hover:scale-105 transition-transform"
                                    style={{ background: colors.boardDark }}>
                                    <div className="text-3xl font-bold chalk-font mb-2" style={{ color: colors.chalkPink }}>{item.step}</div>
                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                    <p className="text-base leading-tight opacity-80 hand-font">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 px-4 relative">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-14">
                            <div className="h-0.5 w-12 bg-white/20"></div>
                            <h2 className="text-3xl md:text-4xl chalk-font" style={{ color: colors.chalkYellow }}>Course Curriculum</h2>
                            <div className="h-0.5 w-12 bg-white/20"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: PenLine, title: "Sketching", desc: "Hand-drawn SVG borders and rough edges that feel natural." },
                                { icon: Eraser, title: "Erasing", desc: "Interactive smudge effects that reveal content layers." },
                                { icon: Ruler, title: "Measuring", desc: "Imperfect, human-like layout structure." }
                            ].map((f, i) => (
                                <div key={i} className="group relative p-6 bg-white/5 rounded-sm border border-white/15 hover:bg-white/10 transition-all">
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-white/15 rotate-1 backdrop-blur-sm transform group-hover:-rotate-1 transition-transform"></div>

                                    <div className="mb-5 inline-block p-3 rounded-full border-2 border-dashed border-white/25 group-hover:border-white/50 group-hover:scale-105 transition-all">
                                        <f.icon size={28} style={{ color: colors.chalkPink }} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 chalk-font">{f.title}</h3>
                                    <p className="text-lg leading-relaxed opacity-85">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto bg-[#FDFCF0] text-[#2B4C3F] p-2 md:p-3 rounded-lg shadow-2xl transform rotate-1 md:rotate-0">
                        <div className="bg-white border-4 border-double border-[#2B4C3F]/20 p-6 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6">
                                <div className="w-20 h-20 border-4 border-red-500 rounded-full flex items-center justify-center transform -rotate-12 opacity-80">
                                    <span className="text-red-500 font-bold text-2xl chalk-font">A+</span>
                                </div>
                            </div>

                            <h2 className="text-3xl chalk-font mb-10 text-center underline decoration-wavy" style={{ textDecorationColor: colors.chalkPink }}>Tuition Fees</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { name: 'Freshman', price: '19', grade: 'B-' },
                                    { name: 'Senior', price: '49', grade: 'A', hot: true },
                                    { name: 'Alumni', price: '99', grade: 'A+' }
                                ].map((plan, i) => (
                                    <div key={i} className={`relative p-5 border-b-2 md:border-b-0 md:border-r-2 border-[#2B4C3F]/10 last:border-0 ${plan.hot ? 'bg-yellow-50/50 -m-3 p-8 rounded shadow-md' : ''}`}>
                                        {plan.hot && <div className="text-xs font-bold uppercase tracking-widest text-[#2B4C3F]/60 mb-2">Recommended</div>}
                                        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                        <div className="text-4xl font-bold chalk-font mb-5">${plan.price}</div>
                                        <ul className="space-y-2 mb-6 text-base">
                                            {['Access to Lab', 'Free Textbooks', 'Lunch Included'].map(f => (
                                                <li key={f} className="flex items-center gap-2">
                                                    <Check size={18} className="text-green-600" /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <button className={`w-full py-2.5 font-bold rounded border-2 transition-colors chalk-btn ${plan.hot ? 'bg-[#2B4C3F] text-white border-[#2B4C3F]' : 'border-[#2B4C3F] hover:bg-[#2B4C3F] hover:text-white'}`}>
                                            Enroll Now
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="absolute bottom-6 right-6 mix-blend-multiply opacity-40 pointer-events-none text-red-600 border-4 border-red-600 p-2 transform -rotate-6 font-bold text-lg uppercase tracking-widest">
                                Approved
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 px-4 relative overflow-hidden">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-center text-3xl chalk-font mb-12" style={{ color: colors.chalkBlue }}>Class Notes</h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            {[
                                { text: "My favorite theme so far. It brings back memories of simpler times.", author: "Billy, Grade 4" },
                                { text: "The dust effects are incredibly realistic. My GPU fans spun up just looking at it!", author: "Mr. Anderson, IT" }
                            ].map((note, i) => (
                                <div key={i} className={`bg-[#FDFCF0] text-[#2B4C3F] p-5 shadow-lg transform ${i % 2 === 0 ? '-rotate-2' : 'rotate-2'} hover:rotate-0 transition-transform relative`}>
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 shadow-sm border border-red-700"></div>
                                    <p className="text-xl leading-snug mb-3 hand-font">"{note.text}"</p>
                                    <div className="text-right font-bold text-base text-gray-600">- {note.author}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 px-4">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl chalk-font mb-6 border-b border-white/20 pb-3">Pop Quiz (FAQ)</h2>
                        <div className="space-y-3">
                            {[
                                { q: 'Is the chalk dust purely CSS?', a: 'Yes! SVG filters and particles.' },
                                { q: 'Can I write on it?', a: 'Interactive canvas coming in v2.1.' }
                            ].map((item, i) => (
                                <div key={i} className="border-2 border-dashed border-white/20 rounded-lg overflow-hidden group hover:border-white/40 transition-colors bg-white/5">
                                    <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                        <span className="text-lg font-bold flex items-center gap-3">
                                            <span className="bg-white/20 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">Q{i + 1}</span>
                                            {item.q}
                                        </span>
                                        <ChevronDown size={22} className={`transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    {expandedFaq === i && <div className="p-5 pt-0 text-lg opacity-85 pl-14">{item.a}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-10 px-4 md:px-10 relative z-10 border-t border-white/10" style={{ background: colors.boardDark }}>
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
                        <div className="flex items-center gap-3">
                            <GraduationCap size={28} />
                            <span className="text-xl font-bold chalk-font">CHALKBOARD</span>
                        </div>
                        <div className="text-base opacity-60">
                            Don't forget your homework!
                        </div>
                        <div className="text-sm opacity-50">
                            © 2025 Education Design Co.
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
};
