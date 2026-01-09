import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Ruler, Grid3X3, PenTool, Compass, MousePointer, Scale, FileCode, Layers, Maximize } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S35BlueprintPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#002B36',
        surface: '#073642',
        text: '#FDF6E3',
        muted: '#839496',
        line: '#586E75',
        highlight: '#2AA198',
        danger: '#DC322F'
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Custom CSS for sketching animations
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Roboto+Mono:wght@300;400;700&display=swap');
            
            @keyframes drawLine {
                from { width: 0; }
                to { width: 100%; }
            }
            @keyframes drawBorder {
                0% { clip-path: inset(0 100% 0 0); }
                25% { clip-path: inset(0 0 0 0); }
                50% { clip-path: inset(0 0 100% 0); }
                75% { clip-path: inset(0 0 0 0); }
                100% { clip-path: inset(0 0 0 100%); }
            }
            @keyframes measure {
                0% { width: 0; opacity: 0; }
                100% { width: 100%; opacity: 1; }
            }
            .draw-in {
                animation: drawLine 1.5s ease-out forwards;
            }
            .blueprint-grid {
                background-image: 
                    linear-gradient(${colors.line}30 1px, transparent 1px),
                    linear-gradient(90deg, ${colors.line}30 1px, transparent 1px),
                    linear-gradient(${colors.line}10 1px, transparent 1px),
                    linear-gradient(90deg, ${colors.line}10 1px, transparent 1px);
                background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
                background-position: -1px -1px;
            }
            .measure-line::after {
                content: '';
                position: absolute;
                top: -5px;
                left: 0;
                width: 1px;
                height: 10px;
                background: ${colors.highlight};
            }
            .measure-line::before {
                content: '';
                position: absolute;
                top: -5px;
                right: 0;
                width: 1px;
                height: 10px;
                background: ${colors.highlight};
            }
            .handwritten {
                font-family: 'Architects Daughter', cursive;
            }
            .tech-font {
                font-family: 'Roboto Mono', monospace;
            }
            .construction-stripe {
                background: repeating-linear-gradient(
                    45deg,
                    ${colors.surface},
                    ${colors.surface} 10px,
                    ${colors.bg} 10px,
                    ${colors.bg} 20px
                );
            }
        `;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    return (
        <div className="min-h-screen relative overflow-x-hidden tech-font selection:bg-[#2AA198] selection:text-white"
            style={{ backgroundColor: colors.bg, color: colors.text }}>

            {/* Grid Background */}
            <div className="blueprint-grid fixed inset-0 pointer-events-none z-0 opacity-40"></div>

            {/* Compass Rose / Cursor Follower */}
            <div className="fixed pointer-events-none z-10 transition-opacity duration-300 opacity-20 hidden md:block"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: 'translate(-50%, -50%)'
                }}>
                <div className="relative w-[800px] h-[800px] border border-dashed border-[#2AA198] rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                    <div className="absolute w-full h-[1px] bg-[#2AA198]"></div>
                    <div className="absolute h-full w-[1px] bg-[#2AA198]"></div>
                    <div className="w-[600px] h-[600px] border border-[#2AA198] rounded-full opacity-50"></div>
                </div>
            </div>

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b-2 border-dashed" style={{ borderColor: colors.line, backgroundColor: `${colors.bg}F0`, backdropFilter: 'blur(5px)' }}>
                {/* Horizontal Measurement Line */}
                <div className="absolute top-full left-0 w-full flex justify-between px-2 text-[10px] text-[#2AA198] font-mono pointer-events-none opacity-60">
                    <span>0px</span>
                    <span>SECTION: HEADER</span>
                    <span>1920px</span>
                </div>

                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-8 border-l border-r border-[#2AA198]/20">
                    <div className="flex items-center gap-3 relative group cursor-pointer">
                        <div className="absolute -inset-2 border border-dashed border-transparent group-hover:border-[#2AA198] transition-colors rounded-lg"></div>
                        <div className="w-10 h-10 border-2 flex items-center justify-center bg-[#073642]" style={{ borderColor: colors.text }}>
                            <Compass size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-[0.2em] leading-none">BLUEPRINT</span>
                            <span className="text-[10px] tracking-widest text-[#2AA198]">VER 2.5.4</span>
                        </div>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-10">
                            {['SPECS', 'PLANS', 'ARCHIVE'].map((item) => (
                                <span key={item} className="text-sm tracking-[0.2em] cursor-pointer hover:text-[#2AA198] relative group transition-colors">
                                    {item}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#2AA198] group-hover:w-full transition-all duration-300"></span>
                                    <span className="absolute -top-3 -right-3 text-[8px] text-[#586E75] opacity-0 group-hover:opacity-100 font-mono"> REF-{item[0]}01 </span>
                                </span>
                            ))}
                            <button className="px-6 py-2 border-2 border-[#2AA198] font-bold tracking-widest text-[#2AA198] hover:bg-[#2AA198] hover:text-white transition-colors text-sm relative overflow-hidden group">
                                <span className="relative z-10 flex items-center gap-2"> <PenTool size={14} /> DRAFT_MODE</span>
                                <div className="absolute inset-0 construction-stripe opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            </button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border-2" style={{ borderColor: colors.text }}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="border-b-2 border-dashed p-4 bg-[#073642]" style={{ borderColor: colors.line }}>
                        {['SPECS', 'PLANS', 'ARCHIVE'].map((item) => (
                            <div key={item} className="py-3 px-4 border-l-2 border-[#2AA198]/20 text-sm tracking-widest hover:bg-[#002B36] hover:border-[#2AA198] transition-colors cursor-pointer">
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </header>

            {/* Hero */}
            <section className="relative pt-20 pb-32 px-6 overflow-hidden border-b border-[#2AA198]/30">
                {/* Decorative Dimension Lines */}
                <div className="absolute left-10 top-0 bottom-0 w-px border-l border-dashed border-[#586E75] hidden md:block">
                    <div className="absolute top-1/2 left-2 rotate-90 origin-left text-[10px] text-[#586E75] whitespace-nowrap">Y-AXIS DIMENSION</div>
                </div>
                <div className="absolute right-10 top-0 bottom-0 w-px border-l border-dashed border-[#586E75] hidden md:block"></div>

                <div className="max-w-6xl mx-auto text-center relative z-10">

                    <div className="inline-flex items-center gap-3 mb-10 px-6 py-2 border border-dashed border-[#839496] bg-[#073642]">
                        <Ruler size={16} className="text-[#2AA198]" />
                        <span className="text-xs tracking-[0.3em] text-[#839496]">TECHNICAL SPECIFICATION: 001</span>
                    </div>

                    <div className="relative inline-block mb-8">
                        {/* Corner markers */}
                        <div className="absolute -top-4 -left-4 w-4 h-4 border-t-2 border-l-2 border-[#2AA198]"></div>
                        <div className="absolute -top-4 -right-4 w-4 h-4 border-t-2 border-r-2 border-[#2AA198]"></div>
                        <div className="absolute -bottom-4 -left-4 w-4 h-4 border-b-2 border-l-2 border-[#2AA198]"></div>
                        <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b-2 border-r-2 border-[#2AA198]"></div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-wider leading-tight handwritten text-white">
                            PRECISION<br />ENGINEERING
                        </h1>
                    </div>

                    <p className="max-w-2xl mx-auto mb-12 text-[#839496] text-lg font-light relative">
                        <span className="absolute -left-8 top-0 text-[#2AA198] font-bold text-xl">“</span>
                        Every pixel calculated. Every interaction measured. Build with the accuracy of an architect.
                        <span className="absolute -right-8 bottom-0 text-[#2AA198] font-bold text-xl">”</span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <button className="group relative px-10 py-5 bg-[#2AA198] text-[#002B36] font-bold tracking-widest border border-[#2AA198] hover:bg-transparent hover:text-[#2AA198] transition-all overflow-hidden">
                            <span className="relative z-10 flex items-center gap-3">INITIALIZE <ArrowRight size={18} /></span>
                            <div className="absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-[#002B36] opacity-10"></div>
                        </button>

                        <button className="group px-10 py-5 border border-dashed border-[#839496] text-[#839496] font-bold tracking-widest hover:border-[#2AA198] hover:text-[#2AA198] transition-all relative">
                            <span className="flex items-center gap-2"><FileCode size={16} /> DOCUMENTATION</span>
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 bg-[#2AA198] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#2AA198] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    </div>

                    {/* Schematics Illustration */}
                    <div className="mt-20 mx-auto max-w-lg aspect-video relative border border-[#586E75] bg-[#073642]/50 backdrop-blur-sm p-4">
                        <div className="absolute inset-2 border border-dashed border-[#586E75]/50"></div>
                        {/* Main Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#2AA198] flex items-center justify-center">
                            <div className="w-40 h-40 rounded-full border border-dashed border-[#586E75] animate-[spin_20s_linear_infinite]"></div>
                            <div className="w-2 h-2 bg-[#dc322f] rounded-full absolute"></div>
                            {/* Radius Line */}
                            <div className="absolute top-1/2 left-1/2 w-24 h-[1px] bg-[#2AA198] origin-left animate-[spin_4s_linear_infinite]"></div>
                        </div>
                        {/* Data readout */}
                        <div className="absolute top-4 right-4 text-[10px] text-[#2AA198] font-mono text-right">
                            <div>R: 124.5mm</div>
                            <div>Ø: 249.0mm</div>
                            <div>Δ: 0.045</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specs Grid */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 relative">
                        <h2 className="text-3xl font-bold tracking-[0.5em] text-[#FDF6E3]">SPECIFICATIONS</h2>
                        <div className="h-1 w-24 bg-[#2AA198] mx-auto mt-4"></div>
                        <div className="absolute top-1/2 left-0 w-full h-px bg-[#586E75] -z-10 opacity-30"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#586E75]/30 border border-[#586E75]/30">
                        {[
                            { icon: Scale, title: 'SCALE_RATIO', val: '1:100', desc: "Vector fidelity independent of display resolution." },
                            { icon: Grid3X3, title: 'GRID_AXIS', val: 'XYZ', desc: "Three-dimensional snapping for precise layouts." },
                            { icon: Maximize, title: 'TOLERANCE', val: '±1px', desc: "Sub-pixel rendering mechanism for sharp edges." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#002B36] p-10 hover:bg-[#073642] transition-colors group relative overflow-hidden">
                                <item.icon className="text-[#2AA198] mb-6" size={32} />
                                <h3 className="text-lg font-bold tracking-widest text-[#FDF6E3] mb-2">{item.title}</h3>
                                <div className="text-4xl font-mono text-[#839496] mb-4 handwritten group-hover:text-[#2AA198] transition-colors">{item.val}</div>
                                <p className="text-sm text-[#586E75] font-mono leading-relaxed">{item.desc}</p>

                                {/* Hover measurement lines */}
                                <div className="absolute bottom-4 left-4 right-4 h-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="h-2 w-px bg-[#2AA198]"></div>
                                    <div className="h-px w-full bg-[#2AA198] measure-line"></div>
                                    <div className="h-2 w-px bg-[#2AA198]"></div>
                                    <span className="text-[9px] text-[#2AA198] absolute top-[-15px] left-1/2 -translate-x-1/2">WIDTH_CHK</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Table (Bill of Materials) */}
            <section className="py-24 px-6 border-t border-[#2AA198]/20 bg-[#073642]/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-12 border-b-2 border-[#FDF6E3] pb-4">
                        <h2 className="text-2xl font-bold tracking-[0.2em]">BILL_OF_MATERIALS</h2>
                        <span className="text-xs font-mono text-[#839496]">REF: PRICING_TBL_04</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'DRAFT', price: '29', unit: 'USD/mo', desc: 'Essential Tools' },
                            { name: 'ARCHITECT', price: '79', unit: 'USD/mo', desc: 'Advanced Suite', hot: true },
                            { name: 'ENGINEER', price: '149', unit: 'USD/mo', desc: 'Enterprise Sys' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 border-2 transition-all duration-300 group ${plan.hot ? 'border-[#2AA198] bg-[#073642]' : 'border-[#586E75] hover:border-[#839496]'}`}>
                                {plan.hot && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2AA198] text-[#002B36] text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
                                        Standard Issue
                                    </div>
                                )}

                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-lg font-bold tracking-widest">{plan.name}</h3>
                                        <div className="text-xs text-[#586E75]">{plan.desc}</div>
                                    </div>
                                    <Layers size={20} className={plan.hot ? 'text-[#2AA198]' : 'text-[#586E75]'} />
                                </div>

                                <div className="mb-8 border-b border-dashed border-[#586E75] pb-8">
                                    <div className="text-5xl font-mono handwritten text-[#FDF6E3] mb-1">{plan.price}</div>
                                    <div className="text-xs text-[#839496] uppercase">{plan.unit}</div>
                                </div>

                                <ul className="space-y-3 mb-8 text-sm font-mono text-[#839496]">
                                    {['Export to CAD', 'Cloud Storage', 'Collab Mode'].map(f => (
                                        <li key={f} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-[#2AA198]"></div> {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 font-bold tracking-widest uppercase text-xs border transition-colors ${plan.hot ? 'bg-[#2AA198] text-[#002B36] border-[#2AA198] hover:bg-[#002B36] hover:text-[#2AA198]' : 'border-[#586E75] text-[#839496] hover:border-[#FDF6E3] hover:text-[#FDF6E3]'}`}>
                                    Approve Quote
                                </button>

                                {/* Technical corners */}
                                <div className="absolute top-0 right-0 p-1">
                                    <div className="w-2 h-2 border-t border-r border-[#586E75] group-hover:border-[#2AA198]"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 p-1">
                                    <div className="w-2 h-2 border-b border-l border-[#586E75] group-hover:border-[#2AA198]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Field Notes (Testimonials) */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto border-2 border-[#586E75] p-8 md:p-12 relative bg-[#FDF6E3] text-[#002B36]">
                    <div className="absolute top-0 left-0 bg-[#DC322F] text-white text-[10px] font-bold px-4 py-1 tracking-widest transform -rotate-1 shadow-md">
                        CONFIDENTIAL
                    </div>
                    {/* Paper clips / binding */}
                    <div className="absolute -top-4 right-12 w-4 h-12 rounded-full border-2 border-[#aaa] bg-[#ccc] z-10 transform rotate-6"></div>

                    <h2 className="font-bold tracking-wider mb-8 text-center text-2xl uppercase border-b-2 border-dotted border-[#aaa] pb-4">Field Notes: User Reports</h2>

                    <div className="grid gap-8 handwritten text-lg">
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full border-2 border-[#002B36] flex items-center justify-center font-bold text-xs shrink-0">01</div>
                            <div>
                                <p className="mb-2">“The snapping grid in v2.5 is revolutionary. Saved our team 400 man-hours this quarter.”</p>
                                <div className="text-sm font-bold opacity-60">— Ch. Architect, BuildCorp</div>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full border-2 border-[#002B36] flex items-center justify-center font-bold text-xs shrink-0">02</div>
                            <div>
                                <p className="mb-2">“Finally, a design system that respects engineering tolerances. No more pixel drifting.”</p>
                                <div className="text-sm font-bold opacity-60">— Lead Eng., Structura</div>
                            </div>
                        </div>
                    </div>

                    {/* Coffee Stain */}
                    <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full border-[10px] border-[#91765c]/20 pointer-events-none filter blur-[1px]"></div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 tracking-widest">TECHNICAL_SUPPORT_FAQ</h2>
                    <div className="border-t border-[#586E75]">
                        {[{ q: 'Format Compatibility?', a: 'Supports DWG, DXF, and SVG vector exports.' },
                        { q: 'Dimension Standards?', a: 'ISO and ANSI standard toggles available in global settings.' }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-[#586E75] group">
                                <button className="w-full flex items-center justify-between py-6 text-left group-hover:text-[#2AA198] transition-colors" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-mono text-sm tracking-wider flex items-center gap-4">
                                        <span className="text-[#586E75]">0{i + 1}.</span> {item.q}
                                    </span>
                                    <ChevronDown size={16} className={`transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && <div className="pb-6 pl-10 text-sm font-light text-[#839496] border-l border-dashed border-[#586E75] ml-2 mb-4">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t-4 border-[#2AA198] bg-[#00252e]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 opacity-80">
                        <Compass size={24} className="text-[#2AA198]" />
                        <span className="font-bold tracking-[0.3em] text-white">BLUEPRINT</span>
                    </div>
                    <div className="flex gap-8 font-mono text-xs text-[#586E75]">
                        <span>ISO 9001:2015 CERTIFIED</span>
                        <span>PATENT PENDING</span>
                    </div>
                    <div className="text-xs text-[#586E75] tracking-widest">
                        © 2025 ENGINEERING SYSTEMS
                    </div>
                </div>
            </footer>
        </div>
    );
};
