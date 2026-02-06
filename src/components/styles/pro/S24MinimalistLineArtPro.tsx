import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Square, Triangle, Grid3X3, Shield, Ruler, Quote } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S24MinimalistLineArtPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const spacing = responsive.spacing;

    const colors = {
        bg: '#ffffff',
        surface: '#FAFAFA',
        text: '#171717',
        muted: '#737373',
        accent: '#000000',
        border: '#E5E5E5'
    };

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Inter", sans-serif' }}>

            {/* Background Grid - Architectural */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, ${colors.border} 1px, transparent 1px),
                        linear-gradient(to bottom, ${colors.border} 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    opacity: 0.6
                }}
            />
            {/* Crosshairs at intersections (simulated) */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                    backgroundSize: '240px 240px',
                    backgroundPosition: '20px 20px'
                }}
            />

            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-8">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-10 h-10 border border-black flex items-center justify-center transition-all duration-500 group-hover:rotate-45 bg-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                            <Grid3X3 size={20} className="relative z-10 transition-colors duration-500 group-hover:text-white" />
                        </div>
                        <span className="text-xl font-light tracking-widest uppercase">Line<span className="font-bold">Art</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['Work', 'Service', 'About'].map((item) => (
                                <span key={item} className="text-sm tracking-[0.2em] font-medium cursor-pointer relative group uppercase hover:opacity-50 transition-opacity">
                                    {item}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full" />
                                </span>
                            ))}
                            <button className="px-8 py-3 text-xs font-bold tracking-[0.2em] border border-black hover:bg-black hover:text-white transition-all duration-500 uppercase">
                                Start Project
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border border-transparent hover:border-black transition-all">
                            {menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-8 animate-in slide-in-from-top-4">
                        <div className="flex flex-col gap-6 items-center">
                            {['Work', 'Service', 'About'].map((item) => (
                                <div key={item} className="text-lg tracking-[0.2em] uppercase">{item}</div>
                            ))}
                            <button className="w-full py-4 border border-black text-xs font-bold tracking-[0.2em] uppercase mt-4">
                                Start Project
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative border-b border-gray-100" style={{ paddingTop: spacing.section, paddingBottom: spacing.xl, paddingLeft: spacing.lg, paddingRight: spacing.lg }}>
                <div className="max-w-7xl mx-auto relative">
                    {/* Measurement Lines */}
                    <div className="absolute -left-8 top-0 bottom-0 w-px bg-black/10 hidden xl:block">
                        <div className="absolute top-1/2 -left-3 text-[10px] -rotate-90 text-gray-400">720px</div>
                    </div>
                    <div className="absolute left-0 right-0 -top-12 h-px bg-black/10 hidden xl:block">
                        <div className="absolute left-1/2 -top-4 text-[10px] text-gray-400">1280px</div>
                    </div>

                    <div className="text-center relative z-10">
                        <div className="inline-flex items-center gap-4 mb-16 border border-black px-6 py-2 bg-white duration-500 hover:tracking-[0.5em]">
                            <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                            <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase">System_State: Stable</span>
                        </div>

                        <h1 className="font-thin tracking-tighter leading-[0.85] mix-blend-multiply" style={{ fontSize: isMobile ? responsive.fontSize['5xl'] : '120px', marginBottom: spacing.lg }}>
                            PRECISION <br />
                            <span className="font-bold block mt-2">ARCHITECT</span>
                        </h1>

                        <p className="max-w-xl mx-auto text-lg font-light leading-relaxed mb-16 text-gray-500">
                            Defined by lines. Measured by pixels. We build digital structures with absolute clarity and zero redundancy.
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <button className="group relative px-16 py-6 border border-black bg-white overflow-hidden transition-all hover:bg-black hover:text-white">
                                <span className="relative z-10 text-xs font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-4">
                                    [ Initiate_Sequence ]
                                    <ArrowRight size={14} />
                                </span>
                            </button>
                            <button className="px-16 py-6 text-xs font-mono font-bold tracking-[0.2em] uppercase border border-gray-200 hover:border-black transition-colors">
                                View_Schematics
                            </button>
                        </div>
                    </div>

                    {/* Floating Technical Elements */}
                    <div className="absolute top-20 right-20 hidden lg:block opacity-30 animate-[spin_20s_linear_infinite]">
                        <Grid3X3 size={120} strokeWidth={0.5} />
                    </div>
                    <div className="absolute bottom-20 left-20 hidden lg:block opacity-30">
                        <Ruler size={80} strokeWidth={0.5} className="rotate-45" />
                    </div>
                </div>
            </section>

            {/* Features (Grid) */}
            <section className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid divide-y divide-gray-100" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                    {[
                        { icon: Square, title: 'Modular_Grid', desc: 'Content snaps to a rigid 8pt baseline. Absolute order.' },
                        { icon: Triangle, title: 'Geometric_Core', desc: 'Shapes calculated for perfect optical balance.' },
                        { icon: Shield, title: 'Vector_Guard', desc: 'Resolution independent interfaces. Scalable to infinity.' }
                    ].map((item, i) => (
                        <div key={i} className="p-16 group hover:bg-gray-50 transition-colors duration-500 relative">
                            <div className="absolute top-8 left-8 text-[10px] text-gray-300 font-mono">FIG_0{i + 1}</div>
                            <item.icon size={32} strokeWidth={1} className="mb-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-sm font-mono font-bold tracking-widest uppercase mb-4">{item.title}</h3>
                            <p className="font-light text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials - Minimal Slider style */}
            <section className="bg-black text-white" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-4xl mx-auto text-center">
                    <Quote size={48} className="mx-auto mb-12 opacity-50" />
                    <p className="text-2xl md:text-4xl font-light leading-tight mb-12 italic">
                        "The absolute precision in their work is unmatched. They turned our chaotic platform into a Zen garden of usability."
                    </p>
                    <div className="font-bold tracking-[0.2em] uppercase text-sm opacity-50">
                        Maria S. — Director of Design
                    </div>
                </div>
            </section>

            {/* Pricing - Technical Table */}
            <section className="border-b border-gray-100" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-5xl mx-auto">
                    <div className="mb-20 flex items-center justify-between border-b pb-8">
                        <h2 className="text-sm font-mono font-bold tracking-[0.3em] uppercase">Project_Scope</h2>
                        <div className="text-xs text-gray-400 font-mono">SELECT_CONFIGURATION</div>
                    </div>

                    <div className="grid gap-px bg-gray-200 border border-gray-200" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: 'M1_Basic', price: '2,500', features: ['Wireframes', 'Grid Setup', 'Static Export'] },
                            { name: 'M2_Pro', price: '5,000', features: ['Interactions', 'Component Lib', 'React Builds'], hot: true },
                            { name: 'M3_Ultra', price: '9,500', features: ['Full System', 'Backend API', 'Lifetime Support'] }
                        ].map((plan) => (
                            <div key={plan.name} className="relative p-12 bg-white transition-all hover:bg-gray-50 group">
                                {plan.hot && (
                                    <div className="absolute top-0 inset-x-0 h-1 bg-black" />
                                )}
                                <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-8 text-gray-500">{plan.name}</h3>
                                <div className="text-4xl font-light mb-2 tracking-tighter">${plan.price}</div>
                                <div className="text-[10px] text-gray-400 mb-12 uppercase tracking-widest">USD / Project</div>

                                <ul className="space-y-6 mb-12">
                                    {plan.features.map(f => (
                                        <li key={f} className="text-sm font-medium flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 border border-black rounded-full" />
                                            <span className="text-gray-600">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 text-[10px] font-mono font-bold tracking-[0.2em] uppercase border transition-all ${plan.hot ? 'bg-black text-white border-black hover:bg-white hover:text-black' : 'border-gray-200 hover:border-black'}`}>
                                    Configure
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ - Schematic List */}
            <section className="bg-white border-b border-gray-100" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-3xl mx-auto">
                    <div className="mb-16 pb-4 border-b border-black flex justify-between items-end">
                        <h2 className="text-sm font-mono font-bold tracking-[0.3em] uppercase">System_Log</h2>
                        <div className="text-xs font-mono text-gray-400">FAQ_MODULE</div>
                    </div>

                    <div className="space-y-0">
                        {[
                            { q: "PROTOCOL: How do you handle revisions?", a: "We operate in sprints. Each iteration is marked by a version number. Revisions are commits to the codebase." },
                            { q: "PROTOCOL: Is the design scalable?", a: "Affirmative. We use atomic design principles. Components scale from mobile viewports to 8K displays without degradation." },
                            { q: "PROTOCOL: What is the delivery format?", a: "You receive a complete Next.js repository, fully typed, linted, and ready for deployment." }
                        ].map((item, i) => (
                            <div key={i} className="group border-b border-gray-100">
                                <button className="w-full py-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors px-4 -mx-4"
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-sm font-mono font-medium text-gray-800">{item.q}</span>
                                    <span className={`text-xs font-mono transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`}>[ EXPAND ]</span>
                                </button>
                                {expandedFaq === i && (
                                    <div className="pb-8 px-4 text-gray-500 font-light leading-loose text-sm pl-8 border-l border-black ml-4">
                                        <span className="font-mono text-xs text-black block mb-2">{`>> RESPONSE:`}</span>
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="text-center" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-thin tracking-tighter" style={{ fontSize: isMobile ? responsive.fontSize['4xl'] : responsive.fontSize['5xl'], marginBottom: spacing.lg }}>
                        Let's build something <br />
                        <span className="font-bold">timeless.</span>
                    </h2>
                    <button className="px-16 py-6 bg-black text-white text-sm font-bold tracking-[0.3em] uppercase hover:scale-105 transition-transform duration-500">
                        Initiate
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-100 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Grid3X3 size={16} />
                        <span className="text-sm font-bold tracking-[0.2em] uppercase">LineArt</span>
                    </div>

                    <div className="flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
                        <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
                        <a href="#" className="hover:opacity-50 transition-opacity">Twitter</a>
                        <a href="#" className="hover:opacity-50 transition-opacity">Email</a>
                    </div>

                    <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                        © 2025 Minimal Systems.
                    </div>
                </div>
            </footer>
        </div>
    );
};
