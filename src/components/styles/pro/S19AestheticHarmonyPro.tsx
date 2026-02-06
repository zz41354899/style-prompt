import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, ChevronUp, Sparkles, Palette, Wand2 } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S19AestheticHarmonyPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: {
            paper: '#FDFBF7', // Lighter, cleaner paper
            surface: '#F5F5F0',
            card: 'rgba(255, 255, 255, 0.6)'
        },
        text: {
            primary: '#2C2C2C', // Soft Black
            secondary: '#555555',
            muted: '#8C8C8C',
            accent: '#8CA093' // Eucalyptus
        },
        brand: {
            primary: '#708090', // Slate Grey
            secondary: '#C0C0B0', // Dried Sage
            accent: '#E0D0C0' // Pale Clay
        },
    };

    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{
                backgroundColor: colors.bg.paper,
                color: colors.text.primary,
                fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
                letterSpacing: '0.01em'
            }}>
            {/* Paper Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Organic Blurred Shapes */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-20 transition-all duration-[5000ms] animate-pulse"
                style={{ backgroundColor: colors.brand.secondary }} />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-[0.15]"
                style={{ backgroundColor: colors.brand.accent }} />
            {/* ========== NAVIGATION ========== */}
            <header className="sticky top-0 z-50 transition-all duration-700"
                style={{ backgroundColor: `${colors.bg.paper}CC`, backdropFilter: 'blur(10px)', borderBottom: `1px solid ${colors.text.accent}20` }}>
                <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ padding: '24px 40px' }}>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative">
                            <Sparkles size={24} className="text-stone-500 group-hover:rotate-12 transition-transform duration-700" style={{ color: colors.brand.primary }} />
                            <div className="absolute -inset-1 border border-stone-300 rounded-full scale-0 group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <span style={{ fontSize: '22px', fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Harmony.</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['Aesthetic', 'Philosophy', 'Craft', 'Enquiry'].map((item) => (
                                <span key={item} className="cursor-pointer relative group py-2" style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.text.secondary }}>
                                    {item}
                                    <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-stone-400 transition-all duration-500 group-hover:w-full group-hover:left-0" />
                                </span>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-8">
                        {!isMobile && (
                            <button className="text-[12px] font-bold tracking-[0.2em] uppercase border-b border-stone-800 pb-1 hover:opacity-50 transition-all">
                                BEGIN_JOURNEY
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                                {menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
                            </button>
                        )}
                    </div>
                </div>

                {menuOpen && isMobile && (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-1000 bg-[#F7F3EE] p-10 space-y-8">
                        {['AESTHETIC', 'PHILOSOPHY', 'CRAFT', 'ENQUIRY'].map((item) => (
                            <div key={item} className="text-3xl font-light tracking-widest border-b border-stone-200 pb-4">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            {/* ========== HERO ========== */}
            <section style={{ padding: `140px ${spacing.lg}`, position: 'relative' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center relative z-10">
                        <div className="mb-12 opacity-60 italic tracking-widest font-serif flex items-center gap-4" style={{ fontSize: '14px' }}>
                            <div className="w-8 h-[1px] bg-stone-400" />
                            <span>WABI-SABI AESTHETIC</span>
                            <div className="w-8 h-[1px] bg-stone-400" />
                        </div>

                        <h1 className="mb-12 font-serif leading-[1.05] max-w-5xl mix-blend-multiply"
                            style={{ fontSize: isMobile ? '64px' : '110px', fontWeight: 100, letterSpacing: '-0.03em', color: '#1a1a1a' }}>
                            <span className="block italic opacity-80" style={{ transform: 'translateX(-2rem)' }}>Seeking</span>
                            <span className="block font-normal">Equilibrium</span>
                            <span className="block italic opacity-80 text-right" style={{ fontSize: '0.6em', marginTop: '-0.2em' }}>in the digital void</span>
                        </h1>

                        <p className="max-w-xl font-sans"
                            style={{ fontSize: '18px', lineHeight: 2.2, color: colors.text.secondary, marginBottom: '64px', fontWeight: 300 }}>
                            A design system rooted in intentionality. We strip away the unnecessary to reveal the profound beauty of structure and space.
                        </p>

                        <div className="flex gap-16 items-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                            <button className="group relative px-6 py-2 border-b border-stone-800 text-stone-800 hover:opacity-60 transition-all duration-700 flex items-center gap-4"
                                style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                                Begin Journey
                            </button>
                            <button className="group relative px-6 py-2 border-b border-transparent hover:border-stone-300 text-stone-500 transition-all duration-700"
                                style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                                Read Philosophy
                            </button>
                        </div>
                    </div>

                    <div className="mt-40 grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative">
                        {/* Decorative Lines */}
                        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-stone-200" />
                        <div className="absolute top-1/4 right-0 w-full h-[1px] bg-stone-200" />

                        <div className="md:col-span-4 aspect-[3/4] bg-[#F0F0F0] p-8 group transition-all duration-1000 hover:-translate-y-4 shadow-sm" style={{ transform: 'rotate(-2deg) translateY(4rem)' }}>
                            <div className="w-full h-full bg-stone-200 opacity-50 overflow-hidden relative">
                                <div className="absolute inset-0 bg-stone-300/20" />
                                <div className="absolute bottom-4 left-4 font-serif italic text-stone-500">Fig. 01 — Stone</div>
                            </div>
                        </div>

                        <div className="md:col-span-4 md:col-start-6 aspect-[3/4] bg-white p-6 shadow-2xl z-10 transition-all duration-1000 hover:scale-105">
                            <div className="w-full h-full border border-stone-100 flex items-center justify-center bg-[#FAFAKA]">
                                <div className="w-32 h-32 rounded-full bg-stone-100 flex items-center justify-center opacity-50 blur-xl animate-pulse" />
                                <span className="absolute font-serif text-4xl italic opacity-30">Void</span>
                            </div>
                        </div>

                        <div className="md:col-span-3 md:col-start-10 aspect-[4/5] bg-[#F5F5F0] p-4 transition-all duration-1000 hover:rotate-2 shadow-sm" style={{ transform: 'translateY(-2rem)' }}>
                            <div className="w-full h-full border border-stone-200 flex items-center justify-center">
                                <span className="font-serif italic text-stone-400">Fig. 03</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            {/* ========== PRINCIPLES ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, position: 'relative' }}>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-stone-200" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-200 bg-white">
                        {[
                            { title: 'Natural Palette', desc: 'Colors derived from earth and stone, creating a seamless connection to the natural environment.' },
                            { title: 'Soft Shadows', desc: 'Depth redefined through subtle gradients and diffusion, mimicking the play of light on textured paper.' },
                            { title: 'Divine Proportions', desc: 'Layouts balanced on the golden ratio, ensuring every pixel feels intentional and grounded.' },
                        ].map((item, i) => (
                            <div key={item.title} className="group p-16 md:border-r border-stone-200 last:border-r-0 hover:bg-[#FDFBF7] transition-colors duration-700">
                                <div className="mb-12 font-serif italic text-stone-400">0{i + 1}</div>
                                <h3 className="font-serif mb-8 text-2xl tracking-wide">{item.title}</h3>
                                <p className="font-sans text-sm leading-loose opacity-60 max-w-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            {/* ========== OFFERINGS ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.bg.surface }}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="font-serif text-3xl tracking-[0.2em] uppercase mb-4 opacity-40">Offerings</h2>
                    </div>

                    <div className="bg-white p-16 shadow-sm border border-stone-100">
                        <div className="space-y-12">
                            {[
                                { name: 'Seed', price: '$19', features: 'Essential wisdom for the beginning seeker.', highlight: false },
                                { name: 'Sprout', price: '$49', features: 'Deepening roots with collective access.', highlight: true },
                                { name: 'Forest', price: '$99', features: 'Complete immersion in the sanctuary.', highlight: false },
                            ].map((plan) => (
                                <div key={plan.name} className="group flex items-center justify-between border-b border-stone-100 pb-12 hover:pl-8 transition-all duration-700 cursor-pointer">
                                    <div>
                                        <div className="flex items-center gap-4 mb-2">
                                            <h3 className="font-serif text-3xl italic">{plan.name}</h3>
                                            {plan.highlight && <span className="text-[10px] uppercase tracking-widest border border-stone-200 px-2 py-1 rounded-full text-stone-400">Recommended</span>}
                                        </div>
                                        <p className="font-sans text-sm opacity-50 tracking-wide">{plan.features}</p>
                                    </div>
                                    <div className="flex items-center gap-12">
                                        <span className="font-serif text-2xl opacity-40">{plan.price}</span>
                                        <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-800 group-hover:text-white transition-all duration-500">
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            {/* ========== ENQUIRY ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="mb-24 text-center">
                        <div className="w-px h-16 bg-stone-300 mx-auto mb-8" />
                        <h2 className="font-serif text-4xl italic text-stone-600">Common Enquiries</h2>
                    </div>

                    <div className="w-full border-t border-stone-200">
                        {[
                            { q: 'What defines this aesthetic?', a: 'A commitment to wabi-sabi principles, finding beauty in the natural, the simple, and the slightly irregular.' },
                            { q: 'Can the spirit be modified?', a: 'The system is built to be fluid. Every variable can be tuned to resonate with your unique creative vision.' },
                            { q: 'Is there a digital garden guide?', a: 'Full documentation on cultivating your digital presence is included in the sacred archives.' },
                        ].map((item, i) => (
                            <div key={i} className="group border-b border-stone-200">
                                <button className="w-full flex items-center justify-between py-12 text-left hover:pl-8 transition-all duration-500"
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-serif text-xl tracking-wide text-stone-700">{item.q}</span>
                                    <span className="font-serif italic opacity-30 group-hover:opacity-100 transition-opacity">{expandedFaq === i ? 'Close' : 'Read'}</span>
                                </button>
                                {expandedFaq === i && (
                                    <div className="pb-12 text-stone-500 leading-loose max-w-2xl font-light">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-6xl mx-auto">
                    <div className="relative p-24 text-center overflow-hidden rounded-[4rem] group"
                        style={{ backgroundColor: colors.brand.accent }}>
                        <div className="absolute inset-0 opacity-10 blur-3xl animate-pulse" style={{ background: colors.brand.secondary }} />
                        <h2 className="mb-12 font-serif relative z-10" style={{ fontSize: isMobile ? '48px' : '82px', fontWeight: 200, lineHeight: 1.1 }}>
                            Cultivate your <br />
                            <span className="italic">Digital Sanctuary</span>
                        </h2>
                        <p className="max-w-xl mx-auto mb-16 relative z-10 opacity-70 font-light italic" style={{ fontSize: '20px', lineHeight: 2 }}>
                            Join a collective dedicated to the pursuit of intentional design and aesthetic tranquility.
                        </p>
                        <button className="relative z-10 px-16 py-7 bg-stone-800 text-[#F7F3EE] hover:bg-stone-700 transition-all duration-700 box-shadow-xl"
                            style={{ borderRadius: '2px', fontSize: '14px', letterSpacing: '0.4em', fontWeight: 900 }}>
                            JOIN_COUNCIL
                        </button>
                    </div>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer style={{ padding: '120px 40px 60px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <Sparkles size={20} style={{ color: colors.brand.primary }} />
                            <span style={{ fontSize: '18px', fontWeight: 300, letterSpacing: '0.1em' }}>HARMONY.</span>
                        </div>
                        <p className="max-w-xs font-light italic opacity-40 text-[13px] leading-relaxed">
                            A sanctuary for intentional design and the pursuit of aesthetic equilibrium.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-24">
                        {['COLLECTIVE', 'STILLNESS'].map(cat => (
                            <div key={cat}>
                                <div className="text-[10px] font-black tracking-[0.2em] mb-8 opacity-40 uppercase">{cat}</div>
                                {['Archive', 'Counsel', 'Manifesto'].map(item => (
                                    <div key={item} className="mb-4 text-[13px] font-light hover:opacity-100 opacity-50 cursor-pointer transition-opacity underline decoration-stone-200 underline-offset-4">{item}</div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:items-end gap-1 font-serif italic text-[14px]">
                        <span className="opacity-40">Designed with Intent.</span>
                        <span style={{ color: colors.brand.primary }}>© 2025 Collective.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
