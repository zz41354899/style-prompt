import React, { useState } from 'react';
import {
    BookOpen,
    Battery,
    Sun,
    Wifi,
    ChevronRight,
    Menu,
    X,
    Search,
    Bookmark,
    Coffee,
    Feather,
    Smartphone
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S91EInkPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';
    const isTablet = deviceMode === 'tablet';
    const spacing = responsive.spacing;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F7F5F0] text-[#111111] font-serif selection:bg-[#111111] selection:text-white">
            {/* 
        E-INK THEME (The Reader)
        - Paper-like background: #F7F5F0
        - High contrast ink color: #111111
        - Serif typography for body text (Times, Garamond style)
        - Sharp borders, no shadows (flat design simulating ink on paper)
        - Slow transitions to simulate refresh rate
      */}

            {/* NOISE TEXTURE OVERLAY */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-multiply"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* NAVIGATION */}
            <nav className="sticky top-0 z-40 bg-[#F7F5F0] border-b-2 border-[#111111]">
                <div
                    className="max-w-7xl mx-auto flex items-center justify-between"
                    style={{ height: '5rem', padding: `0 ${spacing.lg}` }}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 border-2 border-[#111111] flex items-center justify-center">
                            <BookOpen size={24} strokeWidth={2} />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">INK.</span>
                    </div>

                    {/* Desktop Nav */}
                    {!isMobile && !isTablet && (
                        <div className="flex items-center gap-8 font-sans font-medium uppercase tracking-wider text-sm">
                            {['Devices', 'Store', 'Publishing', 'About'].map((item) => (
                                <a key={item} href="#" className="hover:underline underline-offset-4 decoration-2">
                                    {item}
                                </a>
                            ))}
                            <button
                                className="bg-[#111111] text-white hover:bg-white hover:text-[#111111] border-2 border-[#111111] transition-colors duration-300"
                                style={{ padding: `${spacing.sm} ${spacing.xl}` }}
                            >
                                Buy Now
                            </button>
                        </div>
                    )}

                    {/* Mobile Menu Toggle */}
                    {(isMobile || isTablet) && (
                        <button
                            className="p-2 border-2 border-[#111111]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {/* Mobile Nav Dropdown */}
                {isMenuOpen && (isMobile || isTablet) && (
                    <div
                        className="border-b-2 border-[#111111] bg-[#F7F5F0] space-y-4 font-sans font-medium uppercase tracking-wider text-sm"
                        style={{ padding: spacing.lg }}
                    >
                        {['Devices', 'Store', 'Publishing', 'About'].map((item) => (
                            <a key={item} href="#" className="block py-2 border-b border-[#111111]/10">
                                {item}
                            </a>
                        ))}
                        <button
                            className="w-full bg-[#111111] text-white mt-4 border-2 border-[#111111]"
                            style={{ padding: spacing.md }}
                        >
                            Buy Now
                        </button>
                    </div>
                )}
            </nav>

            <main>
                {/* HERO SECTION */}
                <section className="border-b-2 border-[#111111]" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                    <div
                        className="max-w-7xl mx-auto grid gap-16 items-center"
                        style={{ gridTemplateColumns: (isMobile || isTablet) ? '1fr' : '1fr 1fr' }}
                    >

                        <div className="space-y-8" style={{ gap: spacing.lg }}>
                            <div
                                className="inline-block border border-[#111111] font-sans text-xs uppercase tracking-widest bg-white"
                                style={{ padding: `${spacing.xs} ${spacing.md}` }}
                            >
                                New Generation P7
                            </div>
                            <h1
                                className="font-serif font-medium leading-[0.9] tracking-tighter"
                                style={{ fontSize: isMobile ? responsive.fontSize['4xl'] : responsive.fontSize['5xl'] }}
                            >
                                Focus on <br />
                                <span className="italic">the words.</span>
                            </h1>
                            <p
                                className="leading-relaxed text-[#111111]/80 max-w-lg font-sans"
                                style={{
                                    fontSize: isMobile ? '1.125rem' : '1.5rem',
                                    marginBottom: spacing.lg
                                }}
                            >
                                A digital paper tablet designed for thinking. No glare, no distractions, just you and your ideas.
                            </p>

                            <div
                                className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4 pt-4`}
                                style={{ gap: spacing.md }}
                            >
                                <button
                                    className="bg-[#111111] text-white text-lg font-sans font-medium hover:bg-white hover:text-[#111111] border-2 border-[#111111] transition-colors duration-300 flex items-center justify-center gap-2 group"
                                    style={{ padding: `${spacing.md} ${spacing.xl}` }}
                                >
                                    Pre-order Paper Pro
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    className="bg-transparent text-[#111111] text-lg font-sans font-medium hover:bg-[#111111] hover:text-white border-2 border-[#111111] transition-colors duration-300"
                                    style={{ padding: `${spacing.md} ${spacing.xl}` }}
                                >
                                    Watch the Film
                                </button>
                            </div>
                        </div>

                        {/* Device Visualization (CSS only) */}
                        <div
                            className="relative aspect-[3/4] max-w-md mx-auto"
                            style={{ marginRight: (isMobile || isTablet) ? 'auto' : 0 }}
                        >
                            {/* Shadow */}
                            <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-[#111111] bg-[#111111]"></div>

                            {/* Device Frame */}
                            <div
                                className="absolute inset-0 bg-white border-2 border-[#111111] flex flex-col items-center justify-between"
                                style={{ padding: spacing.lg }}
                            >
                                {/* Screen Content */}
                                <div
                                    className="w-full h-full border border-[#111111]/10 bg-[#F7F5F0] overflow-hidden grayscale relative"
                                    style={{ padding: spacing.xl }}
                                >
                                    <div className="absolute top-4 right-4 text-xs font-sans">98%</div>
                                    <div className="mt-12 space-y-4" style={{ gap: spacing.md }}>
                                        <h3
                                            className="font-serif italic mb-6"
                                            style={{ fontSize: responsive.fontSize['3xl'], marginBottom: spacing.lg }}
                                        >Chapter 1: The Beginning</h3>
                                        <p
                                            className="font-serif leading-loose"
                                            style={{ fontSize: responsive.fontSize.lg }}
                                        >
                                            It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.
                                        </p>
                                        <p
                                            className="font-serif leading-loose"
                                            style={{ fontSize: responsive.fontSize.lg }}
                                        >
                                            The hallway smelt of boiled cabbage and old rag mats. At one end of it a coloured poster, too large for indoor display, had been tacked to the wall.
                                        </p>
                                    </div>
                                </div>
                                {/* Chin */}
                                <div className="h-12 w-full flex items-center justify-center pt-4 text-[10px] font-sans tracking-[0.2em] opacity-40">
                                    PAPER CORP
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                {/* FEATURES GRID */}
                <section className="border-b-2 border-[#111111]" style={{ padding: `${spacing.section} 0` }}>
                    <div
                        className="max-w-7xl mx-auto"
                        style={{ padding: `0 ${spacing.lg}` }}
                    >
                        <div className="grid gap-0 border-2 border-[#111111]" style={{ gridTemplateColumns: (isMobile || isTablet) ? '1fr' : 'repeat(3, 1fr)' }}>
                            {[
                                { icon: Sun, title: "Sunlight Readable", desc: "No glare, even in direct sunlight. Reads exactly like printed paper." },
                                { icon: Battery, title: "Weeks of Battery", desc: "One charge lasts up to 4 weeks based on 30 minutes of reading per day." },
                                { icon: Feather, title: "Ultra Lightweight", desc: "Thinner than a pencil, lighter than a paperback book." }
                            ].map((feature, i) => {
                                const isLast = i === 2;
                                const showRightBorder = !isMobile && !isTablet && !isLast;
                                const showBottomBorder = (isMobile || isTablet) && !isLast;

                                return (
                                    <div
                                        key={i}
                                        className="space-y-6"
                                        style={{
                                            padding: spacing.xl,
                                            borderRight: showRightBorder ? '2px solid #111111' : 'none',
                                            borderBottom: showBottomBorder ? '2px solid #111111' : 'none'
                                        }}
                                    >
                                        <feature.icon size={48} strokeWidth={1.5} />
                                        <h3
                                            className="font-bold font-serif"
                                            style={{ fontSize: responsive.fontSize['2xl'] }}
                                        >
                                            {feature.title}
                                        </h3>
                                        <p
                                            className="font-sans leading-relaxed opacity-80"
                                            style={{ fontSize: responsive.fontSize.lg }}
                                        >
                                            {feature.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>


                {/* BIG TEXT SECTION */}
                <section className="bg-[#111111] text-[#F7F5F0]" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <div className="w-16 h-1 bg-[#F7F5F0] mx-auto"></div>
                        <h2 className="font-serif leading-tight" style={{ fontSize: isMobile ? responsive.fontSize['4xl'] : responsive.fontSize['5xl'] }}>
                            "A room without books is like a body without a soul."
                        </h2>
                        <p className="font-sans text-sm uppercase tracking-widest opacity-60">
                            — Marcus Tullius Cicero
                        </p>
                    </div>
                </section>


                <section className="border-b-2 border-[#111111]" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                    <div
                        className="max-w-7xl mx-auto grid"
                        style={{ gridTemplateColumns: (isMobile || isTablet) ? '1fr' : '1fr 1fr', gap: spacing.xl }}
                    >
                        <div>
                            <h2
                                className="font-bold font-serif"
                                style={{
                                    fontSize: responsive.fontSize['4xl'],
                                    marginBottom: spacing.lg
                                }}
                            >Technical Specs</h2>
                            <p
                                className="font-sans leading-relaxed mb-8 max-w-md"
                                style={{
                                    fontSize: responsive.fontSize.lg,
                                    marginBottom: spacing.lg
                                }}
                            >
                                Engineered for the perfect reading experience. Every component was selected to minimize distraction and maximize comfort.
                            </p>
                            <button className="font-sans font-bold underline decoration-2 underline-offset-4 hover:bg-[#111111] hover:text-white transition-colors" style={{ padding: `${spacing.xs} ${spacing.sm}`, marginLeft: `-${spacing.xs}` }}>
                                Download full datasheet PDF
                            </button>
                        </div>

                        <div className="border-t-2 border-[#111111]">
                            {[
                                { label: "Display", value: "10.3” E Ink Carta 1250" },
                                { label: "Resolution", value: "1872 x 1404 (226 DPI)" },
                                { label: "Storage", value: "64 GB (approx. 20,000 books)" },
                                { label: "Connectivity", value: "Wi-Fi (2.4GHz + 5GHz), Bluetooth" },
                                { label: "Weight", value: "350g (0.77 lb)" }
                            ].map((spec, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between border-b border-[#111111]/20 font-sans"
                                    style={{ padding: `${spacing.md} 0` }}
                                >
                                    <span className="font-bold opacity-60 uppercase text-sm tracking-wider">{spec.label}</span>
                                    <span className="font-medium">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* CTA SECTION */}
                <section className="bg-[#F7F5F0]" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                    <div className="max-w-2xl mx-auto text-center" style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg }}>
                        <h2 className="font-bold font-serif tracking-tight" style={{ fontSize: isMobile ? responsive.fontSize['4xl'] : responsive.fontSize['5xl'] }}>Focus awaits.</h2>
                        <p
                            className="font-sans opacity-80"
                            style={{ fontSize: responsive.fontSize.xl }}
                        >
                            Join 500,000+ readers who have reclaimed their attention.
                        </p>
                        <div className="pt-4">
                            <button
                                className="bg-[#111111] text-white font-bold font-sans hover:bg-white hover:text-[#111111] border-2 border-[#111111] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                                style={{
                                    width: isMobile ? '100%' : 'auto',
                                    padding: `${spacing.lg} ${spacing.xxl}`,
                                    fontSize: responsive.fontSize.lg
                                }}
                            >
                                Order Ink Pro — $299
                            </button>
                        </div>
                        <p className="text-sm font-sans opacity-50 mt-4">
                            Free shipping worldwide. 30-day money back guarantee.
                        </p>
                    </div>
                </section>

            </main>

            <footer
                className="bg-[#111111] text-[#F7F5F0] font-sans"
                style={{ padding: `${spacing.xl} ${spacing.lg}` }}
            >
                <div
                    className="max-w-7xl mx-auto grid text-sm"
                    style={{ gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: spacing.xl }}
                >
                    <div
                        className="space-y-4"
                        style={{ gridColumn: isMobile ? 'span 2' : 'span 1' }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 border border-[#F7F5F0] flex items-center justify-center">
                                <BookOpen size={14} />
                            </div>
                            <span className="font-bold tracking-tight text-lg">INK.</span>
                        </div>
                        <p className="opacity-60 leading-relaxed">
                            Design for readers. Built for longevity.
                        </p>
                    </div>

                    {['Products', 'Company', 'Support'].map((col) => (
                        <div key={col} className="space-y-4" style={{ gap: spacing.md }}>
                            <h4 className="font-bold uppercase tracking-wider opacity-40">{col}</h4>
                            <ul className="space-y-2 opacity-80">
                                <li><a href="#" className="hover:underline decoration-1 underline-offset-4">Overview</a></li>
                                <li><a href="#" className="hover:underline decoration-1 underline-offset-4">Details</a></li>
                                <li><a href="#" className="hover:underline decoration-1 underline-offset-4">Stories</a></li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div
                    className={`max-w-7xl mx-auto border-t border-[#F7F5F0]/20 flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between opacity-40 text-xs`}
                    style={{ marginTop: spacing.xl, paddingTop: spacing.lg }}
                >
                    <p>© 2024 Ink Corporation. All rights reserved.</p>
                    <div className={`flex gap-6 ${isMobile ? 'mt-4' : 'mt-0'}`}>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}
