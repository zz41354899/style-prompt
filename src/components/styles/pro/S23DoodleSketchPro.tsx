import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, PenTool, Palette, Coffee, Heart, Sparkles } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S23DoodleSketchPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const spacing = responsive.spacing;

    const colors = {
        bg: '#FDFCF6', // Warmer paper color
        surface: '#FFFFFF',
        text: '#2D3436',
        muted: '#636E72',
        pink: '#FF7675',
        cyan: '#74B9FF',
        yellow: '#FFEAA7',
        mint: '#55EFC4',
        purple: '#A29BFE',
        border: '#2D3436'
    };

    const sketchyBorder = '2px solid #2D3436';
    const blobShape = '60% 40% 30% 70% / 60% 30% 70% 40%';

    // SVG Filter for squiggly lines (to be used in style prop if needed, or just simulate with borders)
    // For now we stick to the CSS border-radius trick which works well for performance.

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Patrick Hand", cursive' }}>

            {/* Background elements - Graph Paper */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(${colors.border} 1px, transparent 1px),
                        linear-gradient(90deg, ${colors.border} 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
                }}
            />

            {/* Diagonal Scribbles background texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
                    backgroundSize: '10px 10px'
                }}
            />

            {/* Decorative Blobs */}
            <div className="absolute top-[-5%] right-[-5%] w-96 h-96 opacity-20 pointer-events-none animate-pulse"
                style={{ backgroundColor: colors.yellow, borderRadius: blobShape, filter: 'blur(60px)' }} />
            <div className="absolute bottom-[-5%] left-[-5%] w-96 h-96 opacity-20 pointer-events-none animate-pulse"
                style={{ backgroundColor: colors.pink, borderRadius: blobShape, filter: 'blur(60px)', animationDelay: '1s' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 p-4 transition-all duration-300">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-8 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                    style={{
                        border: sketchyBorder,
                        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                        boxShadow: '4px 4px 0px #2D3436'
                    }}>
                    <div className="flex items-center gap-4 cursor-pointer group">
                        <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:rotate-12"
                            style={{ backgroundColor: colors.pink, border: sketchyBorder, borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
                            <PenTool size={24} color="white" strokeWidth={3} />
                        </div>
                        <span className="text-2xl font-bold tracking-wide">Doodle<span style={{ color: colors.pink }}>UI</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Gallery', 'Brushes', 'Pricing'].map((item) => (
                                <span key={item} className="text-xl font-bold cursor-pointer hover:text-pink-500 transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-pink-400 transition-all duration-300 group-hover:w-full rounded-full opacity-60"
                                        style={{ borderRadius: '100% 0% 100% 0% / 100% 0% 100% 0%' }}></span>
                                </span>
                            ))}
                            <button className="px-6 py-2 text-xl font-bold text-white transition-transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
                                style={{
                                    backgroundColor: colors.text,
                                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                                    boxShadow: '3px 3px 0px rgba(0,0,0,0.2)'
                                }}>
                                Start Drawing
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    )}
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="absolute top-full left-4 right-4 mt-2 p-6 bg-white border-2 border-gray-800 rounded-2xl shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-4"
                        style={{ border: sketchyBorder, borderRadius: '15px 255px 15px 255px / 255px 15px 255px 15px' }}>
                        {['Gallery', 'Brushes', 'Pricing'].map((item) => (
                            <div key={item} className="text-xl font-bold border-b border-dashed border-gray-300 pb-2">{item}</div>
                        ))}
                        <button className="w-full py-3 text-white font-bold text-xl rounded-xl shadow-[4px_4px_0px_#000000]"
                            style={{ backgroundColor: colors.pink, border: '2px solid black' }}>
                            Start Drawing
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section style={{ padding: `80px ${spacing.xl} 120px` }}>
                <div className="max-w-7xl mx-auto grid gap-16 items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                    <div className="flex flex-col items-start text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] rotate-[-2deg]"
                            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}>
                            <Sparkles size={20} className="text-yellow-500 fill-yellow-500" />
                            <span className="font-bold">v2.0 Now Available!</span>
                        </div>

                        <h1 className="font-black leading-none relative" style={{ fontSize: isMobile ? responsive.fontSize['5xl'] : '80px', marginBottom: spacing.lg }}>
                            Sketch Your
                            <br />
                            <span className="relative inline-block mt-2 px-6" style={{ color: colors.pink }}>
                                <span className="relative z-10">Big Ideas</span>
                                <svg className="absolute inset-0 w-full h-full -z-10 text-yellow-200" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0,50 Q50,0 100,50 Q50,100 0,50 Z" fill={colors.yellow} opacity="0.5" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-2xl mb-10 leading-relaxed max-w-lg" style={{ color: colors.muted }}>
                            The most playful design system for creative minds. Hand-drawn components that bring joy to your interface.
                        </p>

                        <div className="flex flex-wrap gap-6 w-full">
                            <button className="px-8 py-4 text-2xl font-bold text-white transition-all hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-none"
                                style={{
                                    backgroundColor: colors.pink,
                                    border: sketchyBorder,
                                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                                    boxShadow: '6px 6px 0px #2D3436'
                                }}>
                                Get Started Free
                            </button>
                            <button className="px-8 py-4 text-2xl font-bold bg-white transition-all hover:-translate-y-1 hover:shadow-xl group"
                                style={{
                                    border: sketchyBorder,
                                    borderRadius: '15px 225px 15px 255px / 255px 15px 225px 15px',
                                    boxShadow: '6px 6px 0px #2D3436'
                                }}>
                                <span className="flex items-center gap-2">
                                    Watch Demo
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="relative p-2">
                        {/* Decorative background for image */}
                        <div className="absolute inset-0 translate-x-4 translate-y-4 bg-teal-200 border-2 border-black rounded-[3rem]" style={{ borderRadius: blobShape }} />

                        <div className="relative bg-white p-8 border-[3px] border-black rounded-[2rem] shadow-[8px_8px_0px_#2D3436] rotate-2 transition-transform hover:rotate-0"
                            style={{ borderRadius: '40px 30px 50px 30px' }}>
                            <div className="flex gap-2 mb-4 border-b-2 border-gray-100 pb-4">
                                <div className="w-4 h-4 rounded-full bg-red-400 border border-black" />
                                <div className="w-4 h-4 rounded-full bg-yellow-400 border border-black" />
                                <div className="w-4 h-4 rounded-full bg-green-400 border border-black" />
                            </div>
                            <div className="space-y-6 font-mono text-sm">
                                <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
                                <div className="h-32 bg-blue-50 rounded-xl border-2 border-blue-100 border-dashed flex items-center justify-center text-blue-400">
                                    Image Placeholder
                                </div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-100 rounded w-full" />
                                    <div className="h-4 bg-gray-100 rounded w-5/6" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-10 w-24 bg-pink-400 rounded-lg border-2 border-black shadow-[2px_2px_0px_#000] transform hover:-translate-y-1 transition-transform" />
                                    <div className="h-10 w-24 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_#000]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white border-y-[3px] border-black"
                style={{ padding: `${spacing.section} 0`, backgroundImage: `linear-gradient(45deg, ${colors.bg} 25%, transparent 25%, transparent 75%, ${colors.bg} 75%, ${colors.bg}), linear-gradient(45deg, ${colors.bg} 25%, transparent 25%, transparent 75%, ${colors.bg} 75%, ${colors.bg})`, backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-6 py-2 mb-4 text-2xl font-bold bg-yellow-300 border-2 border-black rotate-[-2deg]"
                            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', boxShadow: '4px 4px 0px #000' }}>
                            Why Choose Us?
                        </span>
                        <h2 className="text-6xl font-black mt-6" style={{ fontFamily: '"Permanent Marker", cursive' }}>Sketchy but Professional</h2>
                    </div>

                    <div className="grid gap-12" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { icon: Palette, title: 'Hand-picked Colors', desc: 'Vibrant palettes that feel organic and human.', color: colors.pink, rotate: '-2deg' },
                            { icon: PenTool, title: 'Vector Strokes', desc: 'Scalable imperfection. Works on any resolution.', color: colors.cyan, rotate: '1deg' },
                            { icon: Heart, title: 'Made with Love', desc: 'Crafted with care for delightful interactions.', color: colors.yellow, rotate: '-1deg' },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-10 border-[3px] border-black transition-all hover:scale-105 hover:z-10 relative group"
                                style={{
                                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                                    transform: `rotate(${feature.rotate})`,
                                    boxShadow: '10px 10px 0px #2D3436'
                                }}>
                                <div className="absolute -top-6 -left-6 transform -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Sparkles size={40} className="text-yellow-400 fill-yellow-400" />
                                </div>
                                <div className="w-20 h-20 mb-6 flex items-center justify-center border-2 border-black rounded-full shadow-[4px_4px 0px #000] -rotate-3 group-hover:rotate-6 transition-transform"
                                    style={{ backgroundColor: feature.color }}>
                                    <feature.icon size={36} color="white" strokeWidth={3} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-xl leading-relaxed" style={{ color: colors.muted }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="relative overflow-hidden" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 relative">
                        <h2 className="font-black relative inline-block transform -rotate-1"
                            style={{ fontSize: isMobile ? responsive.fontSize['4xl'] : responsive.fontSize['5xl'], fontFamily: '"Permanent Marker", cursive' }}>
                            Designers Love It!
                            <svg className="absolute w-full h-8 -bottom-4 left-0 text-pink-300 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </h2>
                    </div>

                    <div className="grid gap-10" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { name: "Alex Marker", role: "Illustrator", text: "Finally a design system that feels human! Love the wobbly borders.", color: '#FF7675' },
                            { name: "Sarah Pencil", role: "UX Designer", text: "It's so fun to use. My clients love the playful vibe.", color: '#74B9FF' },
                            { name: "Mike Sketch", role: "Product Manager", text: "Increased our engagement by 40%. The handwritten font is perfect.", color: '#FFEAA7' }
                        ].map((t, i) => (
                            <div key={i} className="p-8 bg-white border-2 border-black relative transition-transform hover:-translate-y-2"
                                style={{
                                    borderRadius: i % 2 === 0 ? '5px' : '5px',
                                    boxShadow: '8px 8px 0px rgba(0,0,0,0.8)',
                                    transform: `rotate(${i % 2 === 0 ? '1deg' : '-1deg'})`
                                }}>
                                {/* Tape effect */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/80 border border-white/50 shadow-sm transform rotate-1" />

                                <div className="absolute -top-6 -right-6 text-8xl text-gray-100 font-serif z-0">"</div>
                                <p className="text-xl mb-8 relative z-10 font-medium leading-relaxed" style={{ fontFamily: '"Patrick Hand", cursive' }}>{t.text}</p>

                                <div className="flex items-center gap-4 border-t-2 border-dashed border-gray-200 pt-6">
                                    <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-bold text-white text-xl"
                                        style={{ backgroundColor: t.color }}>
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">{t.name}</div>
                                        <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white border-t-[3px] border-black" style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: '#F0F3FA' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-12">Common Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Is this free to use?", a: "Yes! We have a generous free tier for personal projects." },
                            { q: "Can I use it for commercial apps?", a: "Absolutely. Our Pro license covers unlimited commercial projects." },
                            { q: "Does it support dark mode?", a: "Currently designed for light mode to maintain the paper feel, but dark mode is coming!" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border-2 border-black rounded-xl overflow-hidden transition-all"
                                style={{ boxShadow: expandedFaq === i ? '4px 4px 0px #000' : '2px 2px 0px #000' }}>
                                <button className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50"
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-xl font-bold">{item.q}</span>
                                    <ChevronDown size={24} className={`transform transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-6 pt-0 text-lg text-gray-600 animate-in fade-in slide-in-from-top-2">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-5xl mx-auto bg-pink-400 p-12 md:p-20 text-center relative border-[3px] border-black shadow-[12px_12px_0px_#000]"
                    style={{ borderRadius: blobShape }}>
                    <div className="relative z-10">
                        <h2 className="font-black text-white" style={{ fontSize: isMobile ? responsive.fontSize['4xl'] : responsive.fontSize['5xl'], marginBottom: spacing.lg, textShadow: '4px 4px 0px #000' }}>
                            Ready to get messy?
                        </h2>
                        <p className="text-2xl text-white font-bold mb-10 max-w-2xl mx-auto transform rotate-1">
                            Join 10,000+ creative developers building fun apps.
                        </p>
                        <button className="group relative px-10 py-5 bg-white text-black text-2xl font-bold border-2 border-black transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000]"
                            style={{ borderRadius: '255px 15px 225px 15px', boxShadow: '4px 4px 0px #000' }}>
                            <span className="relative z-10">Start Creating Now</span>
                            <div className="absolute inset-0 bg-yellow-200 -z-10 translate-x-2 translate-y-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderRadius: '255px 15px 225px 15px' }} />
                        </button>
                    </div>
                    {/* Floating doodle elements */}
                    <Coffee className="absolute top-10 left-10 text-white w-16 h-16 animate-bounce" style={{ animationDuration: '3s' }} />
                    <Sparkles className="absolute bottom-10 right-10 text-yellow-300 w-16 h-16 animate-pulse" />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16 px-6 border-t-[4px] border-black">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center border-2 border-white transform -rotate-6">
                            <PenTool size={24} color="white" />
                        </div>
                        <span className="text-2xl font-bold">DoodleUI</span>
                    </div>

                    <div className="flex gap-8 text-lg font-bold">
                        <a href="#" className="hover:text-pink-400 transition-colors">Stories</a>
                        <a href="#" className="hover:text-pink-400 transition-colors">Pricing</a>
                        <a href="#" className="hover:text-pink-400 transition-colors">Twitter</a>
                    </div>

                    <div className="text-gray-400 font-mono">
                        © 2025 Doodle Systems Inc.
                    </div>
                </div>
            </footer>
        </div>
    );
};
