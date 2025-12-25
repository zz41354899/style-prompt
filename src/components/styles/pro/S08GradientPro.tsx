import { useState } from 'react';
import {
    Menu, X, PenTool, Image as ImageIcon, Layout, Type,
    ArrowRight, Check, Star, Coffee, Feather, BookOpen
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S08GradientPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const [menuOpen, setMenuOpen] = useState(false);

    // S08 Retro 70s Tokens
    const theme = {
        colors: {
            bg: '#F7E8D0',      // Beige
            brown: '#5D4037',   // Dark Brown
            orange: '#E65100',  // Vibrant Orange
            amber: '#FF8F00',   // Warm Amber
            cream: '#FFF8E1',   // Light Cream (Cards)
            lightBrown: '#8D6E63',
        }
    };

    return (
        <div
            className="min-h-screen relative font-serif"
            style={{
                backgroundColor: theme.colors.bg,
                color: theme.colors.brown,
            }}
        >
            {/* Grain Texture Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.08] z-0 fixed"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Header */}
            <header className="sticky top-0 z-50 border-b-2 border-[#5D4037] bg-[#F7E8D0]/90 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E65100] flex items-center justify-center text-[#F7E8D0]">
                            <PenTool size={20} />
                        </div>
                        <span className="text-2xl font-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>GROOVY</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Manifesto', 'Editions', 'Typography', 'Subscribe'].map(item => (
                                <a key={item} href="#" className="text-sm font-bold uppercase tracking-widest text-[#5D4037] hover:text-[#E65100] transition-colors">
                                    {item}
                                </a>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-4">
                        {!isMobile && (
                            <button className="px-6 py-2 rounded-full border-2 border-[#5D4037] font-bold text-sm uppercase tracking-wider hover:bg-[#5D4037] hover:text-[#F7E8D0] transition-all">
                                Get Started
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#5D4037]">
                                {menuOpen ? <X /> : <Menu />}
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className={`relative z-10 ${isMobile ? 'py-16' : 'py-32'} border-b-2 border-[#5D4037] overflow-hidden`}>
                <div className={`max-w-7xl mx-auto px-6 grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-16 items-center`}>
                    <div>
                        <span className="inline-block px-3 py-1 mb-6 rounded-full bg-[#E65100]/10 text-[#E65100] text-xs font-bold uppercase tracking-widest border border-[#E65100]/20">
                            Est. 1974
                        </span>
                        <h1 className={`${isMobile ? 'text-5xl' : 'text-8xl'} font-black leading-[0.9] mb-8`} style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.04em' }}>
                            Design <br />
                            <span className="text-[#E65100]">With Soul.</span>
                        </h1>
                        <p className={`${isMobile ? 'text-lg' : 'text-2xl'} text-[#8D6E63] mb-10 max-w-lg leading-relaxed font-sans`}>
                            Return to the warmth of analog. A design system inspired by the golden age of print editorial, typography, and grain.
                        </p>
                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
                            <button className="px-8 py-4 bg-[#5D4037] text-[#FFF8E1] font-bold text-lg rounded-lg shadow-[4px_4px_0px_#E65100] hover:translate-y-1 hover:shadow-none transition-all">
                                View Collection
                            </button>
                            <button className="px-8 py-4 border-2 border-[#5D4037] text-[#5D4037] font-bold text-lg rounded-lg hover:bg-[#5D4037]/5 transition-colors">
                                Read the Story
                            </button>
                        </div>
                    </div>

                    {/* Hero Visual - Abstract 70s Art */}
                    <div className={`relative ${isMobile ? 'aspect-square' : 'aspect-[4/3]'} rounded-t-full border-2 border-[#5D4037] overflow-hidden bg-[#FFF8E1]`}>
                        {/* Concentric Circles */}
                        {[100, 85, 70, 55, 40, 25, 10].map((size, i) => (
                            <div
                                key={i}
                                className="absolute left-1/2 bottom-0 -translate-x-1/2 rounded-full border-2 border-[#5D4037]"
                                style={{
                                    width: `${size}%`,
                                    paddingBottom: `${size / 2}%`, // Half-circle aspect
                                    backgroundColor: i % 2 === 0 ? '#FFB74D' : i % 3 === 0 ? '#E65100' : '#FFF8E1',
                                    zIndex: i
                                }}
                            />
                        ))}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="bg-[#FFF8E1] px-6 py-4 border-2 border-[#5D4037] shadow-[4px_4px_0px_#5D4037] rotate-[-5deg]">
                                <span className="font-black text-4xl text-[#5D4037]">GROOVY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features / Pillars */}
            <section className="relative z-10 py-24 bg-[#EFEBE9] border-b-2 border-[#5D4037]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-12`}>
                        {[
                            { icon: Type, title: 'Bold Typography', desc: 'Display fonts that demand attention, paired with highly readable serifs for long-form content.' },
                            { icon: Layout, title: 'Editorial Grids', desc: 'Break the mold with multi-column layouts inspired by vintage magazines and newspapers.' },
                            { icon: Feather, title: 'Organic Textures', desc: 'Subtle grain, noise, and paper textures that bring digital interfaces to life.' },
                        ].map((feature, i) => (
                            <div key={i} className="group">
                                <div className="w-16 h-16 rounded-full bg-[#FFF8E1] border-2 border-[#5D4037] flex items-center justify-center mb-6 shadow-[4px_4px_0px_#5D4037] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                                    <feature.icon className="text-[#E65100]" />
                                </div>
                                <h3 className="text-2xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>{feature.title}</h3>
                                <p className="text-[#8D6E63] font-sans leading-relaxed text-lg">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bento Grid / Gallery */}
            <section className="relative z-10 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>The Collection</h2>
                        <p className="text-[#8D6E63] font-sans">Curated layouts for the modern web.</p>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-4 grid-rows-2'} gap-6 ${isMobile ? 'h-auto' : 'h-[800px]'}`}>
                        {/* Large Main Feature */}
                        <div className={`${isMobile ? '' : 'col-span-2 row-span-2'} bg-[#FFCC80] rounded-xl border-2 border-[#5D4037] p-8 flex flex-col justify-between relative overflow-hidden group`}>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E65100] rounded-full blur-[80px] opacity-20 group-hover:scale-125 transition-transform duration-700" />
                            <div>
                                <div className="inline-block px-3 py-1 bg-[#5D4037] text-[#F7E8D0] text-xs font-bold uppercase tracking-wider rounded mb-4">Featured</div>
                                <h3 className="text-4xl font-black leading-tight text-[#5D4037] mb-4">The Sunday <br /> Edition Layout</h3>
                            </div>
                            <div className="bg-[#FFF8E1] p-6 border-2 border-[#5D4037] shadow-[8px_8px_0px_#5D4037] rotate-2 group-hover:rotate-0 transition-transform">
                                <div className="flex gap-4 mb-4">
                                    <div className="w-full h-32 bg-[#D7CCC8] rounded  animate-pulse" />
                                    <div className="w-full h-32 bg-[#D7CCC8] rounded  animate-pulse delay-75" />
                                </div>
                                <div className="h-4 bg-[#D7CCC8] rounded w-3/4 mb-2" />
                                <div className="h-4 bg-[#D7CCC8] rounded w-1/2" />
                            </div>
                        </div>

                        {/* Tall Vertical */}
                        <div className={`${isMobile ? '' : 'row-span-2'} bg-[#FFF8E1] rounded-xl border-2 border-[#5D4037] p-8 flex flex-col items-center text-center group hover:bg-[#FFE0B2] transition-colors`}>
                            <div className="w-20 h-20 rounded-full bg-[#E65100] text-[#FFF8E1] flex items-center justify-center mb-6">
                                <Coffee size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-2">Warm<br />Palette</h3>
                            <p className="text-sm text-[#8D6E63] mb-6">Earthy tones that comfort the eye.</p>
                            <div className="w-full space-y-2">
                                {['#5D4037', '#E65100', '#FF8F00', '#F7E8D0'].map(c => (
                                    <div key={c} className="w-full h-12 rounded border-2 border-[#5D4037]" style={{ backgroundColor: c }} />
                                ))}
                            </div>
                        </div>

                        {/* Small Square A */}
                        <div className="bg-[#A1887F] rounded-xl border-2 border-[#5D4037] p-6 flex flex-col justify-center text-[#FFF8E1]">
                            <Type size={48} className="mb-4" />
                            <h3 className="text-xl font-bold">Serif<br />Dominance</h3>
                        </div>

                        {/* Small Square B */}
                        <div className="bg-[#FFB74D] rounded-xl border-2 border-[#5D4037] p-6 flex flex-col justify-center text-[#5D4037]">
                            <ImageIcon size={48} className="mb-4" />
                            <h3 className="text-xl font-bold">Grain<br />Filters</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial / Quote */}
            <section className="relative z-10 py-32 bg-[#5D4037] text-[#F7E8D0]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Star className="mx-auto mb-8 text-[#E65100]" size={48} fill="currentColor" />
                    <blockquote className={`${isMobile ? 'text-2xl' : 'text-5xl'} font-black leading-tight mb-8`} style={{ fontFamily: 'Georgia, serif' }}>
                        "Finally, a design system that feels human. Groovy brings the tactile soul of print to the cold digital world."
                    </blockquote>
                    <cite className="not-italic text-[#A1887F] font-bold tracking-widest uppercase">
                        — Sarah J. Miller, Art Director
                    </cite>
                </div>
            </section>

            {/* Pricing */}
            <section className="relative z-10 py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[#E65100] font-bold uppercase tracking-widest">Membership</span>
                        <h2 className="text-5xl font-black" style={{ fontFamily: 'Georgia, serif' }}>Join the Club</h2>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-8 items-center`}>
                        {/* Free Tier */}
                        <div className="bg-[#FFF8E1] p-8 rounded-xl border-2 border-[#5D4037]">
                            <h3 className="text-2xl font-black mb-2 text-[#5D4037]">Reader</h3>
                            <div className="text-4xl font-black mb-6">$0<span className="text-lg text-[#8D6E63]">/mo</span></div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3"><Check size={18} /> Access to free articles</li>
                                <li className="flex items-center gap-3"><Check size={18} /> Weekly newsletter</li>
                            </ul>
                            <button className="w-full py-4 border-2 border-[#5D4037] font-bold rounded-lg hover:bg-[#5D4037] hover:text-[#FFF8E1] transition-colors">
                                Sign Up Free
                            </button>
                        </div>

                        {/* Pro Tier */}
                        <div className={`bg-[#E65100] p-10 rounded-xl border-2 border-[#5D4037] text-white shadow-[12px_12px_0px_#5D4037] ${isMobile ? '' : 'transform -translate-y-4'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-3xl font-black">Editor</h3>
                                <span className="bg-[#FFCC80] text-[#5D4037] text-xs font-bold px-3 py-1 rounded-full uppercase">Best Value</span>
                            </div>
                            <div className="text-5xl font-black mb-6">$29<span className="text-xl opacity-80">/mo</span></div>
                            <p className="mb-8 opacity-90 font-serif italic text-lg">For the true connoisseur of design.</p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Unlimited Template Access',
                                    'Custom Font Uploads',
                                    'Commercial License',
                                    'Priority Support'
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-3 font-bold"><Check size={18} /> {item}</li>
                                ))}
                            </ul>
                            <button className="w-full py-4 bg-[#FFF8E1] text-[#5D4037] font-black rounded-lg shadow-[4px_4px_0px_#5D4037] hover:translate-y-1 hover:shadow-none transition-all">
                                Get Full Access
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#5D4037] text-[#FFF8E1] py-16">
                <div className={`max-w-7xl mx-auto px-6 grid ${isMobile ? 'grid-cols-1' : 'grid-cols-4'} gap-12 text-sm`}>
                    <div className={`${isMobile ? '' : 'col-span-2'}`}>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-[#E65100] flex items-center justify-center text-[#F7E8D0]">
                                <PenTool size={16} />
                            </div>
                            <span className="text-xl font-black">GROOVY</span>
                        </div>
                        <p className="max-w-xs opacity-70 leading-relaxed">
                            Crafting digital experiences with the soul of analog print.
                            Established 2024.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-6 text-[#FFCC80]">Sitemap</h4>
                        <ul className="space-y-3 opacity-70">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Manifesto</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-6 text-[#FFCC80]">Social</h4>
                        <ul className="space-y-3 opacity-70">
                            <li><a href="#" className="hover:text-white">Twitter</a></li>
                            <li><a href="#" className="hover:text-white">Instagram</a></li>
                            <li><a href="#" className="hover:text-white">Dribbble</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};
