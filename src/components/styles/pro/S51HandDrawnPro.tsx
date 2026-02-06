import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Pencil, Edit3, PenTool, Eraser, Pen, Highlighter, Sticker, Cloud } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S51HandDrawnPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#FFFCF5] text-[#2C2C2C] selection:bg-[#FFD166] selection:text-black">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&family=Kalam:wght@300;400;700&display=swap');

                .font-sketch-head { font-family: 'Shantell Sans', cursive; }
                .font-sketch-body { font-family: 'Kalam', cursive; }

                /* Grid Paper Background */
                .bg-grid-paper {
                    background-image: 
                        linear-gradient(#E5E5E5 1px, transparent 1px),
                        linear-gradient(90deg, #E5E5E5 1px, transparent 1px);
                    background-size: 40px 40px;
                    background-position: center;
                }

                /* SVG Filter for Wobbly Lines */
                .wobble-border {
                    position: relative;
                }
                .wobble-border::after {
                    content: '';
                    position: absolute;
                    inset: -3px;
                    background: transparent;
                    border: 3px solid currentColor;
                    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
                    pointer-events: none;
                }
                
                .wobble-box {
                    border: 3px solid #2C2C2C;
                    border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
                }
                
                /* Sketchy Shadow */
                .sketch-shadow {
                    position: relative;
                }
                .sketch-shadow::before {
                    content: '';
                    position: absolute;
                    top: 6px;
                    left: 6px;
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    border: inherit;
                    border-radius: inherit;
                    background: repeating-linear-gradient(
                        45deg,
                        rgba(0,0,0,0.1),
                        rgba(0,0,0,0.1) 2px,
                        transparent 2px,
                        transparent 6px
                    );
                    z-index: -1;
                }

                .scribble-highlight {
                     position: relative;
                     z-index: 0;
                }
                .scribble-highlight::after {
                    content: '';
                    position: absolute;
                    left: -5%;
                    bottom: 0px;
                    width: 110%;
                    height: 50%;
                    background: #FFD166;
                    opacity: 0.5;
                    z-index: -1;
                    transform: rotate(-1deg);
                    border-radius: 20% 80% 20% 80%;
                }

                .notebook-binding {
                    position: absolute;
                    left: 20px;
                    top: 0;
                    bottom: 0;
                    width: 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    padding-top: 40px;
                    z-index: 10;
                }
                .binding-hole {
                    width: 20px;
                    height: 20px;
                    background: #2C2C2C;
                    border-radius: 50%;
                    position: relative;
                }
                .binding-coil {
                    position: absolute;
                    top: 10px;
                    left: -10px;
                    width: 40px;
                    height: 15px;
                    border-top: 5px solid #555;
                    border-radius: 50%;
                    transform: rotate(-10deg);
                }
            `}</style>

            <div className="absolute inset-0 bg-grid-paper pointer-events-none z-0 opacity-40"></div>

            {/* Notebook Binding Graphic (Decorative) */}
            <div className="notebook-binding hidden lg:flex">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="relative">
                        <div className="binding-hole"></div>
                        <div className="binding-coil"></div>
                    </div>
                ))}
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-[#FFFCF5]/95 backdrop-blur-sm border-b-2 border-[#2C2C2C] border-dashed">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-12 pl-16">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center border-2 border-[#2C2C2C] sketch-shadow transform -rotate-3">
                            <Pencil size={24} className="text-white" />
                        </div>
                        <span className="text-3xl font-sketch-head font-bold tracking-tight text-[#2C2C2C]">SketchBook<span className="text-[#4D96FF]">.io</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Doodles', 'Canvas', 'Markers'].map((item) => (
                                <a key={item} href="#" className="font-sketch-head text-xl font-semibold text-[#555] hover:text-[#2C2C2C] hover:underline decoration-wavy decoration-[#FFD166] decoration-4 underline-offset-4 transition-all transform hover:-rotate-1">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-2 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] bg-[#2C2C2C] text-white font-sketch-head text-lg font-bold border-2 border-transparent hover:bg-[#FFD166] hover:text-[#2C2C2C] hover:border-[#2C2C2C] transition-all transform hover:rotate-1 shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
                                Sign Up
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border-2 border-[#2C2C2C] rounded-md hover:bg-[#EEE] transition-colors">{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 bg-[#FFFCF5] border-b-2 border-dashed border-[#2C2C2C] shadow-lg">
                        {['Doodles', 'Canvas', 'Markers'].map((item) => (
                            <div key={item} className="py-3 font-sketch-head text-2xl font-bold text-[#2C2C2C] border-b border-gray-200">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] bg-[#4D96FF] text-white font-sketch-head text-2xl font-bold border-2 border-[#2C2C2C]">
                            Sign Up
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative w-full overflow-hidden">
                {/* Background Doodles */}
                <div className="absolute top-20 right-[10%] opacity-20 transform rotate-12 animate-pulse">
                    <Cloud size={120} strokeWidth={1} />
                </div>
                <div className="absolute bottom-20 left-[5%] opacity-10 transform -rotate-12">
                    <div className="w-64 h-64 border-4 border-dashed border-black rounded-full"></div>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 pl-8 lg:pl-0">
                    <div className="inline-block relative mb-8 transform -rotate-2">
                        <div className="absolute inset-0 bg-[#FFD166] opacity-30 blur-lg rounded-full"></div>
                        <div className="relative px-6 py-2 border-2 border-[#2C2C2C] rounded-[255px_15px_225px_15px/15px_225px_15px_255px] bg-white text-lg font-sketch-body font-bold text-[#2C2C2C] flex items-center gap-2">
                            <Sticker className="text-[#FF6B6B]" size={20} />
                            <span>Voted #1 Creativity Tool</span>
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-sketch-head font-extrabold mb-8 text-[#2C2C2C] leading-[0.9]">
                        Imperfectly <br />
                        <span className="scribble-highlight text-[#4D96FF]">Perfect.</span>
                    </h1>

                    <p className="font-sketch-body text-2xl md:text-3xl text-[#555] max-w-2xl mx-auto mb-12 leading-relaxed transform rotate-1">
                        Embrace the WOBBLE. A design system that feels human, hand-crafted, and wonderfully messy.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                        <button className="px-10 py-4 bg-[#FF6B6B] text-white font-sketch-head text-2xl font-bold border-2 border-[#2C2C2C] rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[6px_6px_0px_#2C2C2C] hover:shadow-[3px_3px_0px_#2C2C2C] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center gap-3">
                            <PenTool size={24} />
                            Start Drawing
                        </button>
                        <button className="px-10 py-4 bg-white text-[#2C2C2C] font-sketch-head text-2xl font-bold border-2 border-[#2C2C2C] rounded-[15px_225px_15px_255px/225px_15px_255px_15px] hover:bg-[#F0F0F0] transition-colors relative">
                            Watch Demo
                            <div className="absolute -right-6 -top-6 text-[#4D96FF] transform rotate-12">
                                <ArrowRight className="transform rotate-45" size={40} strokeWidth={2.5} />
                            </div>
                        </button>
                    </div>

                    <div className="mt-16 flex gap-4 items-center font-sketch-body text-lg text-[#666]">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#2C2C2C] bg-[#EEE] flex items-center justify-center overflow-hidden">
                                    <div className={`w-full h-full bg-gradient-to-br ${['from-red-200 to-red-400', 'from-blue-200 to-blue-400', 'from-yellow-200 to-yellow-400', 'from-green-200 to-green-400'][i - 1]}`}></div>
                                </div>
                            ))}
                        </div>
                        <p>Join 10,000+ Sketchers</p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 relative border-t-2 border-dashed border-[#2C2C2C]">
                <div className="max-w-6xl mx-auto pl-8 lg:pl-0">
                    <h2 className="text-5xl font-sketch-head font-bold text-center mb-16 relative inline-block left-1/2 transform -translate-x-1/2">
                        <span className="relative z-10 wibbly-underline">Handy Tools</span>
                        <svg className="absolute -bottom-4 left-0 w-full h-4 text-[#FFD166]" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
                        </svg>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Pencil, title: "Pencil Sketch", desc: "Authentic graphite textures.", color: "#2C2C2C", bg: "#FFFFFF", rotate: "rotate-1" },
                            { icon: Highlighter, title: "Highlighter", desc: "Neon marker overlays.", color: "#FFD166", bg: "#FFFFFF", rotate: "-rotate-2" },
                            { icon: Eraser, title: "Rough Erase", desc: "Mistakes are features.", color: "#FF6B6B", bg: "#FFFFFF", rotate: "rotate-2" }
                        ].map((f, i) => (
                            <div key={i} className={`p-8 bg-white border-2 border-[#2C2C2C] rounded-[2%_6%_5%_4%/1%_1%_2%_4%] transform ${f.rotate} shadow-[8px_8px_0px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-transform duration-300 relative group`}>
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                    <div className="w-4 h-16 bg-[#E5E5E5] opacity-50 transform rotate-3"></div>
                                </div>
                                <f.icon className="w-16 h-16 mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300" style={{ color: f.color }} strokeWidth={2} />
                                <h3 className="text-3xl font-sketch-head font-bold mb-4 text-center">{f.title}</h3>
                                <p className="font-sketch-body text-xl text-[#555] text-center leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6 bg-[#F0F0F0] relative overflow-hidden border-t-2 border-[#2C2C2C]">
                {/* Paper Scraps Background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#2C2C2C 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="max-w-6xl mx-auto relative z-10 pl-8 lg:pl-0">
                    <h2 className="text-5xl font-sketch-head font-bold text-center mb-16">Simple Pricing</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {[
                            { name: 'Paper', price: 'Free', features: ['Basic Pencils', '1 Sketchbook'], color: 'border-gray-400', rotate: '-rotate-1' },
                            { name: 'Canvas', price: '$15', features: ['All Brushes', 'Unlimited Books', 'Export PNG'], color: 'border-[#4D96FF]', accent: true, rotate: 'rotate-2' },
                            { name: 'Mural', price: '$45', features: ['Vector Export', 'Team Collab', 'Cloud Sync'], color: 'border-gray-400', rotate: '-rotate-1' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 bg-white border-[3px] ${plan.color} rounded-[255px_15px_225px_15px/15px_225px_15px_255px] transform ${plan.rotate} ${plan.accent ? 'scale-105 shadow-[10px_10px_0px_rgba(77,150,255,0.2)] z-10' : 'shadow-sm'}`}>
                                {plan.accent && (
                                    <div className="absolute -top-5 right-10 transform rotate-12">
                                        <div className="bg-[#FF6B6B] text-white px-4 py-2 font-sketch-head font-bold text-lg rounded-[255px_15px_225px_15px/15px_225px_15px_255px] border-2 border-[#2C2C2C]">
                                            Best Value!
                                        </div>
                                    </div>
                                )}
                                <h3 className="text-3xl font-sketch-head font-bold mb-2 text-center">{plan.name}</h3>
                                <div className="text-6xl font-sketch-head font-bold mb-8 text-center text-[#2C2C2C] relative inline-block w-full">
                                    {plan.price}
                                    <span className="text-xl font-sketch-body text-[#777] ml-1">/mo</span>
                                    {plan.accent && <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-4 text-[#FFD166] opacity-60" viewBox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>}
                                </div>

                                <ul className="space-y-4 mb-10 pl-4">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-sketch-body text-xl text-[#555]">
                                            <Check className="text-[#5BA55B]" size={24} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 text-xl font-sketch-head font-bold border-2 border-[#2C2C2C] rounded-[255px_15px_225px_15px/15px_225px_15px_255px] transition-all transform hover:-translate-y-1 ${plan.accent ? 'bg-[#4D96FF] text-white shadow-[4px_4px_0px_#2C2C2C]' : 'bg-transparent text-[#2C2C2C] hover:bg-[#F0F0F0]'}`}>
                                    Choose {plan.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 relative border-t-2 border-[#2C2C2C] border-dashed">
                <div className="max-w-3xl mx-auto pl-8 lg:pl-0">
                    <h2 className="text-4xl font-sketch-head font-bold text-center mb-12">
                        Common Q's <span className="text-[#FF6B6B] text-6xl shadow-sm">?</span>
                    </h2>

                    <div className="space-y-6">
                        {[{ q: ' Is it really hand drawn?', a: 'Every icon and border radius mimics natural hand movement patterns.' },
                        { q: 'Can I export to Figma?', a: 'Yes! We have a plugin that syncs your doodles directly.' },
                        { q: 'What about dark mode?', a: 'Dark mode turns the paper into a blackboard with chalk textures!' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border-2 border-[#2C2C2C] rounded-[255px_15px_225px_15px/15px_225px_15px_255px] overflow-hidden">
                                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F9F9F9]" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-sketch-head text-xl font-bold text-[#2C2C2C]">{item.q}</span>
                                    <div className={`transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`}>
                                        <ChevronDown size={24} />
                                    </div>
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-6 pb-6 pt-2 font-sketch-body text-xl text-[#666] border-t-2 border-dashed border-[#EEE]">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-[#FFD166] border-t-2 border-[#2C2C2C]">
                <div className="max-w-4xl mx-auto text-center pl-8 lg:pl-0">
                    <div className="bg-white border-4 border-[#2C2C2C] p-12 rounded-[2%_1%_3%_2%/1%_4%_2%_2%] shadow-[12px_12px_0px_#2C2C2C] transform rotate-1">
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-[#2C2C2C] rounded-full flex items-center justify-center animate-bounce">
                                <Pen className="text-white transform rotate-12" size={40} />
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-sketch-head font-bold mb-6">Grab your sketchbook!</h2>
                        <p className="font-sketch-body text-2xl mb-8 max-w-lg mx-auto">Don't overthink it. Just start drawing lines and see where they go.</p>
                        <button className="px-12 py-5 bg-[#4D96FF] text-white font-sketch-head text-2xl font-bold border-4 border-[#2C2C2C] rounded-[255px_15px_225px_15px/15px_225px_15px_255px] hover:scale-105 transition-transform shadow-[6px_6px_0px_rgba(0,0,0,0.2)]">
                            Create Free Account
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-pattern pt-20 pb-10 px-6 border-t-4 border-[#2C2C2C] bg-[#2C2C2C] text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pl-8 lg:pl-0">
                    <div className="text-center md:text-left">
                        <span className="text-3xl font-sketch-head font-bold">SketchBook<span className="text-[#FFD166]">.io</span></span>
                        <p className="font-sketch-body text-xl text-gray-400 mt-2">Drawn in San Francisco.</p>
                    </div>

                    <div className="flex gap-8 font-sketch-head font-bold text-lg">
                        <a href="#" className="hover:text-[#FFD166] hover:underline decoration-wavy">Twitter</a>
                        <a href="#" className="hover:text-[#FFD166] hover:underline decoration-wavy">Instagram</a>
                        <a href="#" className="hover:text-[#FFD166] hover:underline decoration-wavy">Dribbble</a>
                    </div>

                    <div className="text-gray-500 font-sketch-body text-lg">
                        © 2025 Hand Drawn Systems.
                    </div>
                </div>
            </footer>
        </div>
    );
};
