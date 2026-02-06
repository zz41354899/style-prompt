import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Box, Layers, ToggleLeft, Volume2, Settings } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S31SkeuomorphicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [toggleStates, setToggleStates] = useState([true, false, true]);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const spacing = responsive.spacing;

    const colors = { bg: '#2C2C2C', surface: '#3E3E3E', text: '#E0E0E0', muted: '#A0A0A0', leather: '#4A3B32', stitching: '#8B7355', gold: '#D4AF37' };

    // Leather Texture CSS
    const leatherTexture = `
        background-color: ${colors.leather};
        background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
    `;

    const shadows = {
        inset: 'inset 2px 2px 5px rgba(0,0,0,0.6), inset -1px -1px 2px rgba(255,255,255,0.1)',
        raised: '0 10px 20px rgba(0,0,0,0.5), inset 1px 1px 1px rgba(255,255,255,0.1)',
        button: '0 4px 8px rgba(0,0,0,0.4), inset 1px 1px 1px rgba(255,255,255,0.2)',
        text: '0 -1px 1px rgba(0,0,0,0.8)',
        glow: '0 0 10px rgba(212, 175, 55, 0.3)'
    };

    return (
        <div className="min-h-screen relative" style={{ color: colors.text, fontFamily: '"Segoe UI", sans-serif' }}>
            {/* Global Leather Style */}
            <style>{`
                .leather-bg {
                    ${leatherTexture}
                }
                .stitch-border {
                    border: 2px dashed ${colors.stitching};
                    box-shadow: 0 0 0 4px ${colors.leather}, inset 0 0 5px rgba(0,0,0,0.5);
                }
                .embossed-text {
                    text-shadow: ${shadows.text};
                }
                .metallic-gradient {
                    background: linear-gradient(180deg, #555 0%, #333 50%, #222 51%, #444 100%);
                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.3);
                }
                .metal-plate {
                    background: linear-gradient(135deg, #444 0%, #222 100%);
                    border: 1px solid #111;
                    box-shadow: inset 1px 1px 0 rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.5);
                }
                .screw {
                    width: 12px;
                    height: 12px;
                    background: radial-gradient(circle, #888 30%, #444 70%);
                    border-radius: 50%;
                    box-shadow: inset 1px 1px 2px black, 1px 1px 1px rgba(255,255,255,0.2);
                    position: relative;
                }
                .screw::after {
                    content: '';
                    position: absolute;
                    top: 50%; left: 50%;
                    width: 80%; height: 2px;
                    background: #222;
                    transform: translate(-50%, -50%) rotate(45deg);
                }
                .switch-track {
                     box-shadow: inset 0 2px 5px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.1);
                }
            `}</style>

            <div className="absolute inset-0 leather-bg z-0 pointer-events-none" />

            {/* Navigation */}
            <header className="sticky top-0 z-50 metallic-gradient border-b border-black shadow-lg">
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6 md:h-20">
                    <div className="flex items-center gap-3 p-2 rounded-lg" style={{ background: 'rgba(0,0,0,0.2)', boxShadow: shadows.inset }}>
                        <div className="relative">
                            <Layers size={24} className="text-yellow-500 relative z-10" style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.5))' }} />
                            <div className="absolute inset-0 bg-yellow-500/20 blur-md rounded-full"></div>
                        </div>
                        <span className="text-xl font-bold text-gray-200 embossed-text tracking-wider">SKEUO<span className="text-yellow-500">MASTER</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Features', 'Workflow', 'Pricing', 'Reviews'].map((item) => (
                                <span key={item} className="text-sm font-bold cursor-pointer hover:text-yellow-500 transition-colors embossed-text uppercase tracking-wide text-gray-400">
                                    {item}
                                </span>
                            ))}
                            <button className="px-6 py-2.5 rounded-md font-bold text-white metallic-gradient active:scale-95 transition-transform flex items-center gap-2"
                                style={{ border: '1px solid #111', boxShadow: shadows.button }}>
                                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
                                Start Building
                            </button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-lg metallic-gradient border border-black">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="metallic-gradient p-6 border-t border-black absolute w-full z-40 shadow-2xl">
                        {['Features', 'Workflow', 'Pricing', 'Reviews'].map((item) => (<div key={item} className="py-4 font-bold text-gray-300 border-b border-gray-700/50 hover:text-yellow-500">{item}</div>))}
                        <button className="w-full mt-6 py-4 rounded-md font-bold text-black bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg border-t border-white/20">Get Started</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section className="relative z-10 py-24 px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

                    <div className="inline-block p-8 rounded-2xl bg-[#333] relative mb-12" style={{ boxShadow: shadows.raised }}>
                        {/* Stitching Detail */}
                        <div className="absolute inset-3 border-2 dashed border-[#555] rounded-xl opacity-70 pointer-events-none"></div>

                        {/* Corner Screws */}
                        <div className="absolute top-3 left-3 screw"></div>
                        <div className="absolute top-3 right-3 screw"></div>
                        <div className="absolute bottom-3 left-3 screw"></div>
                        <div className="absolute bottom-3 right-3 screw"></div>

                        <h1 className="text-5xl md:text-8xl font-black mb-6 embossed-text text-gray-200 tracking-tight leading-tight">
                            DIGITAL<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>CRAFTSMANSHIP</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-medium embossed-text max-w-2xl mx-auto leading-relaxed">
                            Return to tactile UI. High-fidelity textures, realistic lighting, and physical interactions for the modern web.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <button className="group relative px-10 py-5 rounded-lg font-bold text-xl text-white border-2 border-[#111] active:translate-y-1 transition-all overflow-hidden"
                            style={{
                                background: 'linear-gradient(180deg, #D43F3F 0%, #A52A2A 100%)',
                                boxShadow: '0 8px 0 #5B1B1B, 0 15px 20px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.2)'
                            }}>
                            <span className="relative z-10 flex items-center gap-2">
                                GET ACCESS <ArrowRight size={24} />
                            </span>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>

                        <div className="flex items-center gap-4 text-gray-400 font-mono text-sm bg-[#222] px-4 py-2 rounded shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)] border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                            <span>SYSTEM OPERATIONAL</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof (Embossed Logos) */}
            <section className="py-16 px-6 relative z-10 border-y border-black/50" style={{ background: 'linear-gradient(180deg, #2a2a2a 0%, #222 100%)', boxShadow: shadows.inset }}>
                <div className="max-w-6xl mx-auto">
                    <p className="text-center text-gray-500 uppercase tracking-[0.2em] mb-10 text-xs font-bold embossed-text">Trusted by Analog Enthusiasts</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {['AudioTech', 'RetroCam', 'Vinyl.js', 'TapeDeck'].map((brand, i) => (
                            <div key={i} className="text-2xl md:text-3xl font-black text-[#333] embossed-text" style={{ textShadow: 'rgba(255,255,255,0.05) 1px 1px 0, rgba(0,0,0,1) -1px -1px 0' }}>
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow (Analog Switches) */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16 embossed-text text-gray-300">Control Your Environment</h2>

                    <div className="bg-[#292929] rounded-xl p-8 border-4 border-[#1a1a1a] shadow-2xl relative">
                        {/* Screws */}
                        <div className="absolute top-2 left-2 screw"></div>
                        <div className="absolute top-2 right-2 screw"></div>
                        <div className="absolute bottom-2 left-2 screw"></div>
                        <div className="absolute bottom-2 right-2 screw"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { label: 'TEXTURE QUALITY', val: 'ULTRA' },
                                { label: 'LIGHTING ENGINE', val: 'RAYTRACED' },
                                { label: 'HAPTIC FEEDBACK', val: 'ENABLED' }
                            ].map((control, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 bg-[#222] p-6 rounded shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] border-b border-white/5">
                                    <span className="text-xs font-bold text-gray-500 tracking-widest">{control.label}</span>

                                    {/* Toggle Switch */}
                                    <div
                                        onClick={() => {
                                            const newStates = [...toggleStates];
                                            newStates[i] = !newStates[i];
                                            setToggleStates(newStates);
                                        }}
                                        className={`w-16 h-24 rounded-lg cursor-pointer relative transition-all duration-100 ${toggleStates[i] ? 'bg-[#333]' : 'bg-[#222]'}`}
                                        style={{ boxShadow: 'inset 0 0 10px rgba(0,0,0,0.8)' }}
                                    >
                                        <div className={`absolute left-1 right-1 h-12 rounded-sm metallic-gradient border border-black transition-all duration-200 ${toggleStates[i] ? 'top-1' : 'bottom-1'}`}
                                            style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)' }}>
                                            <div className="w-full h-1 bg-black/20 mt-2"></div>
                                            <div className="w-full h-1 bg-black/20 mt-1"></div>
                                        </div>
                                    </div>

                                    <div className={`text-xs font-mono font-bold transition-colors ${toggleStates[i] ? 'text-green-500 text-shadow-glow' : 'text-red-900'}`}>
                                        {toggleStates[i] ? control.val : 'OFF'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Materials) */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center gap-6 mb-16">
                        <div className="h-px bg-black/50 w-24 border-b border-white/10"></div>
                        <h2 className="text-4xl font-bold embossed-text text-gray-300">Premium Materials</h2>
                        <div className="h-px bg-black/50 w-24 border-b border-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[{ title: 'Full Grain Leather', icon: Layers, desc: 'Procedural noise textures with stitching.' },
                        { title: 'Brushed Steel', icon: Settings, desc: 'Radial gradients and metallic sheens.' },
                        { title: 'Rich Mahogany', icon: Box, desc: 'Organic wood grain patterns.' }].map((item, i) => (
                            <div key={i} className="metal-plate p-1 rounded-xl relative group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-2 left-2 screw"></div>
                                <div className="absolute top-2 right-2 screw"></div>
                                <div className="absolute bottom-2 left-2 screw"></div>
                                <div className="absolute bottom-2 right-2 screw"></div>

                                <div className="h-full p-8 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-[#333] border-4 border-[#222] flex items-center justify-center mb-6 shadow-[inset_0_5px_10px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">
                                        <item.icon size={36} className="text-yellow-600" style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.5))' }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-200 mb-3 embossed-text">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials (Pinned Notes) */}
            <section className="py-24 px-6 relative z-10 bg-[#252525] border-y border-black shadow-inner">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')] opacity-10 pointer-events-none"></div>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-4xl font-bold mb-16 embossed-text text-gray-300">Field Reports</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { text: "The most satisfying UI kit I've ever used. The buttons feel real.", author: "Alex D.", role: "Product Designer" },
                            { text: "My users love the retro feel. It stands out in a sea of flat design.", author: "Sarah J.", role: "Frontend Dev" },
                            { text: "Incredible attention to detail. The lighting effects are top notch.", author: "Mike R.", role: "UX Lead" }
                        ].map((note, i) => (
                            <div key={i} className="bg-[#f0f0f0] p-6 text-gray-800 shadow-[0_10px_20px_rgba(0,0,0,0.4)] relative transform rotate-1 hover:rotate-0 transition-transform duration-300"
                                style={{ fontFamily: '"Courier New", monospace' }}>
                                {/* Pin */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 shadow-md border border-red-800 z-10"></div>
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-black/20 transform rotate-12"></div>

                                <p className="text-lg mb-6 leading-relaxed opacity-90">"{note.text}"</p>
                                <div className="border-t border-gray-300 pt-4 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full border border-gray-400"></div>
                                    <div>
                                        <div className="font-bold text-sm">{note.author}</div>
                                        <div className="text-xs text-gray-500 uppercase">{note.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Pocket Style) */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-4xl font-bold mb-16 embossed-text text-gray-300">Collection Access</h2>

                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        {[{ name: 'Standard', price: '$29' }, { name: 'Pro', price: '$59', active: true }, { name: 'Ultimate', price: '$99' }].map((plan, i) => (
                            <div key={i} className={`relative p-1 rounded-xl transition-transform hover:-translate-y-2 duration-300 ${plan.active ? 'transform scale-105 z-10' : 'bg-[#2a2a2a] mt-4'}`}>
                                <div className={`h-full rounded-lg relative overflow-hidden ${plan.active ? 'bg-[#3E3E3E] border-2 border-yellow-600' : 'bg-[#333] border border-black'}`}
                                    style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>

                                    {plan.active && (
                                        <div className="bg-yellow-600 text-white text-xs font-bold text-center py-1 uppercase tracking-widest shadow-md">Most Popular</div>
                                    )}

                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-center text-gray-200 embossed-text mb-2">{plan.name}</h3>
                                        <div className="text-center text-5xl font-black text-gray-200 mb-8 text-shadow-sm">{plan.price}</div>

                                        <div className="space-y-4 mb-8">
                                            {['4K Textures', 'Vector Sources', 'Commercial License', 'Priority Support'].slice(0, i + 2).map(f => (
                                                <div key={f} className="flex items-center gap-3 text-sm font-medium text-gray-400">
                                                    <div className="p-0.5 rounded-full bg-[#222] border border-white/10 shadow-inner">
                                                        <Check size={12} className="text-green-500" />
                                                    </div>
                                                    {f}
                                                </div>
                                            ))}
                                        </div>

                                        <button className={`w-full py-4 rounded font-bold shadow-lg border border-black active:translate-y-px transition-all uppercase tracking-wider ${plan.active ? 'metallic-gradient text-white' : 'bg-[#222] text-gray-500 hover:text-gray-300'}`}>
                                            {plan.active ? 'Purchase Now' : 'Select Plan'}
                                        </button>
                                    </div>

                                    {/* Bottom stitching */}
                                    <div className="absolute bottom-2 left-4 right-4 border-b-2 dashed border-[#000] opacity-30"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ using Accordion */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-[#333] p-10 rounded-xl border border-black shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-50 mix-blend-multiply"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-10 text-center text-gray-300 embossed-text">Technical Specifications</h2>
                            <div className="space-y-4">
                                {[{ q: "Are these vector based?", a: "Yes, fully scalable SVG elements." },
                                { q: "Do you support dark mode?", a: "Native support included in all components." },
                                { q: "Can I use this in React?", a: "Optimized for React 18+ and Next.js." }].map((item, i) => (
                                    <div key={i} className="bg-[#2a2a2a] rounded shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] border-b border-white/5">
                                        <button className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-400 hover:text-yellow-500 transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                            {item.q}
                                            <div className="p-1 rounded-full bg-[#222] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]">
                                                <ChevronDown size={16} className={`transition-transform duration-300 ${expandedFaq === i ? 'rotate-180 text-yellow-500' : ''}`} />
                                            </div>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${expandedFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="p-5 pt-0 text-sm text-gray-500 border-t border-black/20 leading-relaxed">
                                                {item.a}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 relative z-10 bg-[#1a1a1a] border-t border-[#111] shadow-[0_-5px_15px_rgba(0,0,0,0.8)]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
                        <Layers size={24} className="text-yellow-600" />
                        <span className="font-bold text-gray-500 tracking-widest">SKEUOMASTER</span>
                    </div>

                    <div className="flex gap-8 text-sm font-bold text-gray-600 uppercase tracking-wider">
                        <span className="hover:text-gray-400 cursor-pointer">License</span>
                        <span className="hover:text-gray-400 cursor-pointer">Support</span>
                        <span className="hover:text-gray-400 cursor-pointer">Twitter</span>
                    </div>

                    <div className="text-gray-700 text-xs font-mono">
                        © 2025 SKEUOMASTER. HANDCRAFTED PIXELS.
                    </div>
                </div>
            </footer>
        </div>
    );
};
