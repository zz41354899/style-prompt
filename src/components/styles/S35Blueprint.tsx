import { useState } from 'react';
import { PencilRuler, Ruler, FileInput, Grid, Menu, X, ArrowRight, MousePointer2 } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';

export const S35Blueprint = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';

    // Blueprint grid pattern
    const gridPattern = `
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
  `;
    const gridSize = "100px 100px, 100px 100px, 20px 20px, 20px 20px";

    const Line = ({ className }: { className?: string }) => (
        <div className={`absolute bg-white/30 ${className}`}>
            {/* Measurement ticks */}
            <div className="absolute top-0 left-0 w-1 h-2 bg-white/50 -translate-x-[1px] -translate-y-[2px]" />
            <div className="absolute top-0 right-0 w-1 h-2 bg-white/50 translate-x-[1px] -translate-y-[2px]" />
        </div>
    );

    return (
        <div
            className="min-h-screen bg-[#0048ba] font-mono text-white selection:bg-white selection:text-[#0048ba] overflow-x-hidden relative"
            style={{ backgroundImage: gridPattern, backgroundSize: gridSize }}
        >
            {/* Title Block (Bottom Right) */}
            <div className={`fixed bottom-4 right-4 z-0 border-2 border-white/40 p-2 w-64 bg-[#0048ba]/90 ${isMobile ? 'hidden' : 'block'} select-none pointer-events-none`}>
                <div className="border border-white/20 p-2">
                    <div className="grid grid-cols-2 text-xs border-b border-white/20 pb-1 mb-1">
                        <div className="font-bold opacity-50">AUTHOR</div>
                        <div>ANTIGRAVITY.AI</div>
                    </div>
                    <div className="grid grid-cols-2 text-xs border-b border-white/20 pb-1 mb-1">
                        <div className="font-bold opacity-50">DATE</div>
                        <div>2024-12-24</div>
                    </div>
                    <div className="text-xs">
                        <div className="font-bold opacity-50">PROJECT</div>
                        <div className="text-lg font-bold">BLUEPRINT UI</div>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/20 border-dashed backdrop-blur-sm bg-[#0048ba]/50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
                    <Line className="bottom-0 left-6 right-6 h-[1px]" />

                    <div className="flex items-center gap-3">
                        <div className="border-2 border-white p-1 rounded-sm">
                            <PencilRuler size={24} />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-bold text-xl tracking-widest">DRAFT</span>
                            <span className="text-[10px] opacity-70">REV. 0.1.2</span>
                        </div>
                    </div>

                    <div className={`${responsive.nav.showDesktop ? 'flex' : 'hidden'} items-center gap-12`}>
                        {['Specs', 'Materials', 'Assembly', 'Notes'].map((item, i) => (
                            <a key={item} href="#" className="text-sm font-bold uppercase tracking-wider opacity-70 hover:opacity-100 relative group py-2">
                                <span className="mr-1 opacity-50">0{i + 1}.</span>
                                {item}
                                {/* Hover dimension lines */}
                                <div className="absolute -left-2 top-0 h-full w-[1px] bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
                                <div className="absolute -right-2 top-0 h-full w-[1px] bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
                                <div className="absolute left-0 -bottom-1 w-full flex justify-center text-[8px] opacity-0 group-hover:opacity-100">
                                    <span className="bg-[#0048ba] px-1">120px</span>
                                </div>
                            </a>
                        ))}
                        <button className="px-6 py-2 border-2 border-white hover:bg-white hover:text-[#0048ba] transition-colors font-bold text-xs uppercase">
                            Download PDF
                        </button>
                    </div>

                    {responsive.nav.showMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X /> : <Menu />}
                        </button>
                    )}
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
                                Specs
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Materials
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Assembly
                            </a>
                            <a 
                                href="#" 
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-bold text-white hover:opacity-70 transition-opacity"
                            >
                                Notes
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10">
                <div className={`max-w-6xl mx-auto grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-16 items-center`}>

                    <div className="space-y-8 relative">
                        {/* Decorative measurement lines */}
                        <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-white/20 flex flex-col justify-between py-4">
                            <span className="bg-[#0048ba] text-[10px] -ml-2">TOP</span>
                            <span className="bg-[#0048ba] text-[10px] -ml-2">BTM</span>
                        </div>

                        <h1 className={`${isMobile ? 'text-5xl' : 'text-7xl'} font-bold font-handwriting tracking-normal leading-none`}>
                            Precision <br />
                            <span className="border-b-2 border-white/50 pb-2 inline-block">Architecture</span>
                        </h1>

                        <div className="flex items-start gap-4 p-4 border border-dashed border-white/30 bg-white/5 relative">
                            <div className="absolute -top-3 left-4 px-2 bg-[#0048ba] text-xs font-bold">NOTE A-1</div>
                            <MousePointer2 className="shrink-0 mt-1" />
                            <p className="font-handwriting text-lg leading-relaxed text-white/90">
                                Construct digital experiences with millimeter accuracy.
                                Every pixel accounted for. Every interaction measured.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button className="px-8 py-4 border-2 border-white bg-white text-[#0048ba] font-bold uppercase hover:bg-transparent hover:text-white transition-colors flex items-center gap-2 group shadow-[4px_4px_0_rgba(255,255,255,0.2)]">
                                View Plan <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 border-2 border-white/50 text-white font-bold uppercase hover:border-white transition-colors bg-white/5 backdrop-blur-sm">
                                System Specs
                            </button>
                        </div>
                    </div>

                    <div className={`relative aspect-square border-2 border-white ${isMobile ? '' : 'border-dashed'} p-8 flex items-center justify-center`}>
                        {/* Centerlines */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                            <div className="w-full h-[1px] bg-white border-t border-dashed" />
                            <div className="h-full w-[1px] bg-white border-l border-dashed absolute" />
                            <div className="w-4 h-4 rounded-full border border-white bg-[#0048ba]" />
                        </div>

                        {/* Isometric Cube (CSS) */}
                        <div className="relative w-48 h-48 transform rotate-x-60 rotate-z-45 border-4 border-white bg-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)] group hover:scale-110 transition-transform duration-500">
                            <div className="absolute -top-12 -left-12 opacity-50 text-xs">FIG. 1.0</div>

                            {/* Measurement lines for cube */}
                            <div className="absolute -bottom-8 left-0 w-full h-[1px] bg-white/50 flex justify-center">
                                <span className="bg-[#0048ba] px-1 text-xs -mt-2">200mm</span>
                            </div>
                            <div className="absolute top-0 -left-8 h-full w-[1px] bg-white/50 flex items-center">
                                <span className="bg-[#0048ba] px-1 text-xs -ml-4 rotate-90">200mm</span>
                            </div>
                        </div>

                        {/* Annotation */}
                        <div className="absolute top-10 right-10 w-32">
                            <div className="border-b border-white mb-1" />
                            <div className="text-[10px] uppercase leading-tight font-bold opacity-80">
                                Iso-metric projection of core module
                            </div>
                            <div className="w-[1px] h-20 bg-white absolute top-0 right-0 origin-bottom rotate-45" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features List */}
            <section className="py-20 px-4 border-t border-white/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-xs font-bold">02</div>
                        <h2 className="text-3xl font-bold uppercase tracking-widest">Specifications</h2>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-0 border border-white/30`}>
                        {[
                            { icon: Ruler, title: 'Calculated', desc: 'Every component aligned to the strict 8pt grid system.' },
                            { icon: Grid, title: 'Modular', desc: 'Interchangeable parts designed for rapid assembly.' },
                            { icon: FileInput, title: 'Documented', desc: 'Full schematic breakdown of all UI elements.' },
                        ].map((feat, i) => (
                            <div key={i} className={`p-8 border-r border-b border-white/30 ${isMobile ? '' : 'last:border-r-0'} hover:bg-white/10 transition-colors group`}>
                                <feat.icon size={32} className="mb-6 opacity-80 group-hover:opacity-100" />
                                <h3 className="font-bold text-xl mb-4 uppercase">{feat.title}</h3>
                                <p className="font-handwriting text-lg opacity-80 leading-relaxed border-l-2 border-white/30 pl-4">
                                    {feat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer is Title Block */}
            <footer className={`py-20 pb-32 px-4 ${isMobile ? 'text-center' : 'text-left'} relative z-10`}>
                <div className="max-w-6xl mx-auto">
                    <div className={`${isMobile ? 'w-full' : 'w-1/2'}`}>
                        <h3 className="text-2xl font-bold uppercase mb-4">Construction Notes</h3>
                        <ol className="list-decimal pl-5 space-y-2 font-handwriting text-sm opacity-80">
                            <li>All dimensions are in pixels unless otherwise noted.</li>
                            <li>Verify all field measurements before fabrication.</li>
                            <li>Do not scale drawings. Use written dimensions only.</li>
                            <li>Contractor to verify existing conditions.</li>
                        </ol>
                    </div>
                </div>
            </footer>
        </div>
    );
};
