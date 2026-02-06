import React, { useState } from 'react';
import {
    Palette,
    Smartphone,
    Shield,
    Cpu,
    Image as ImageIcon,
    Menu,
    X,
    Search,
    Plus,
    Play,
    Check,
    MoreVertical,
    Heart,
    Share2,
    Settings
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S99MaterialYouPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const responsive = useResponsive(deviceMode);
    const isMobile = deviceMode === 'mobile';
    const isTablet = deviceMode === 'tablet';
    const spacing = responsive.spacing;
    const [activeTheme, setActiveTheme] = useState('green');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const themes: any = {
        green: { bg: 'bg-[#FDFCF5]', primary: 'bg-[#386A20]', onPrimary: 'text-white', container: 'bg-[#B7F397]', onContainer: 'text-[#042100]' },
        blue: { bg: 'bg-[#FAFBFF]', primary: 'bg-[#0061A4]', onPrimary: 'text-white', container: 'bg-[#D1E4FF]', onContainer: 'text-[#001D36]' },
        purple: { bg: 'bg-[#FFFBFF]', primary: 'bg-[#6750A4]', onPrimary: 'text-white', container: 'bg-[#EADDFF]', onContainer: 'text-[#21005D]' },
    };

    const t = themes[activeTheme];

    return (
        <div className={`min-h-screen ${t.bg} transition-colors duration-500 font-sans selection:${t.container} selection:${t.onContainer}`}>
            {/* 
        MATERIAL YOU PRO
        - Dynamic Color System simulation
        - Large radii (28px+)
        - "Monet" theming engine
      */}

            {/* NAVBAR */}
            <nav className={`sticky top-0 z-50 ${t.bg}/80 backdrop-blur-md`}>
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${t.primary} flex items-center justify-center shadow-md`}>
                            <Palette size={20} className="text-white" />
                        </div>
                        <span className="text-xl font-medium tracking-tight text-black opacity-80">Pixel<span className="opacity-50">OS</span></span>
                    </div>

                    {!isMobile && (
                        <div className="flex items-center gap-2 p-1 bg-black/5 rounded-full">
                            <button onClick={() => setActiveTheme('green')} className={`w-6 h-6 rounded-full bg-[#386A20] ring-2 ring-offset-2 ring-transparent ${activeTheme === 'green' ? 'ring-black/20 scale-110' : ''} transition-all`}></button>
                            <button onClick={() => setActiveTheme('blue')} className={`w-6 h-6 rounded-full bg-[#0061A4] ring-2 ring-offset-2 ring-transparent ${activeTheme === 'blue' ? 'ring-black/20 scale-110' : ''} transition-all`}></button>
                            <button onClick={() => setActiveTheme('purple')} className={`w-6 h-6 rounded-full bg-[#6750A4] ring-2 ring-offset-2 ring-transparent ${activeTheme === 'purple' ? 'ring-black/20 scale-110' : ''} transition-all`}></button>
                        </div>
                    )}

                    {!isMobile && !isTablet && (
                        <div className="flex items-center gap-6 text-sm font-medium text-black/70">
                            {['Phone', 'Watch', 'Tablet', 'Buds'].map(item => (
                                <a key={item} href="#" className="hover:text-black transition-colors">{item}</a>
                            ))}
                            <button className={`px-6 py-2.5 rounded-full ${t.primary} ${t.onPrimary} hover:opacity-90 transition-opacity shadow-sm`}>
                                Buy Pixel
                            </button>
                        </div>
                    )}

                    {(isMobile || isTablet) && (
                        <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>
            </nav>

            <main>
                {/* HERO */}
                <section style={{ paddingTop: spacing.xl, paddingBottom: spacing.section, paddingLeft: spacing.md, paddingRight: spacing.md, overflow: 'hidden' }}>
                    <div className="max-w-7xl mx-auto grid gap-16 items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                        <div className="space-y-8 relative z-10">
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${t.container} ${t.onContainer} text-sm font-medium`}>
                                <Smartphone size={16} />
                                <span>Android 14 is here</span>
                            </div>

                            <h1 className="font-normal text-black tracking-tight leading-[0.95]" style={{ fontSize: isMobile ? responsive.fontSize['5xl'] : '80px' }}>
                                Auto <br />
                                <span className="font-light italic opacity-60">magically</span> <br />
                                yours.
                            </h1>

                            <p className="text-xl md:text-2xl text-black/60 max-w-lg leading-relaxed">
                                The most personal OS ever. Colors that adapt to your wallpaper. Security that puts you first. And AI that helps you do more.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className={`h-16 px-8 rounded-[24px] ${t.primary} ${t.onPrimary} text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-3`}>
                                    Get Started <Play size={20} fill="currentColor" />
                                </button>
                                <button className={`h-16 px-8 rounded-[24px] border border-black/10 hover:bg-black/5 text-lg font-medium text-black/80 transition-all`}>
                                    Extract Colors
                                </button>
                            </div>
                        </div>

                        {/* VISUALIZATION */}
                        <div className="relative h-[600px] flex items-center justify-center">
                            {/* Abstract Blobs */}
                            <div className={`absolute top-0 right-10 w-64 h-64 ${t.container} rounded-full blur-[80px] opacity-60 animate-pulse-slow`}></div>
                            <div className={`absolute bottom-0 left-10 w-80 h-80 ${t.primary} rounded-full blur-[100px] opacity-20 animate-pulse-slow delay-1000`}></div>

                            {/* Phone Mockups */}
                            <div className="relative z-10 flex gap-6">
                                {/* Phone 1 */}
                                <div className="w-[280px] h-[580px] bg-black rounded-[32px] border-[8px] border-black shadow-2xl relative overflow-hidden transform rotate-[-6deg] translate-y-12">
                                    <div className={`absolute inset-0 ${t.bg} flex flex-col p-4`}>
                                        {/* StatusBar */}
                                        <div className="flex justify-between text-xs font-medium opacity-60 mb-8 px-2">
                                            <span>9:30</span>
                                            <div className="flex gap-1.5"><div className="w-3 h-3 bg-black rounded-full"></div><div className="w-3 h-3 bg-black rounded-full"></div></div>
                                        </div>
                                        {/* Widget */}
                                        <div className={`aspect-[4/3] rounded-[24px] ${t.container} p-6 mb-4 flex flex-col justify-between`}>
                                            <div className="flex justify-between items-start">
                                                <span className={t.onContainer}>Tue, Oct 24</span>
                                                <div className={`w-8 h-8 rounded-full ${t.bg} flex items-center justify-center`}><div className="w-4 h-4 rounded-full bg-yellow-400"></div></div>
                                            </div>
                                            <div className={`text-5xl font-normal ${t.onContainer}`}>72°</div>
                                        </div>
                                        {/* Icons */}
                                        <div className="grid grid-cols-4 gap-4 mt-auto mb-8 px-2">
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                                <div key={i} className={`aspect-square rounded-[20px] ${t.container} opacity-${i * 10 + 20}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Phone 2 */}
                                <div className="w-[280px] h-[580px] bg-black rounded-[32px] border-[8px] border-black shadow-2xl relative overflow-hidden transform rotate-[6deg] -translate-y-4 hidden md:block">
                                    <div className={`absolute inset-0 ${t.bg} flex flex-col justify-center items-center`}>
                                        <div className={`w-24 h-24 rounded-[32px] ${t.primary} flex items-center justify-center mb-6 shadow-xl`}>
                                            <Palette size={40} className="text-white" />
                                        </div>
                                        <h3 className="text-2xl font-normal mb-2">Material You</h3>
                                        <p className="text-center px-8 text-black/60">Color extraction complete.</p>

                                        <div className="flex gap-2 mt-8">
                                            <div className={`w-12 h-12 rounded-full ${t.container}`}></div>
                                            <div className={`w-12 h-12 rounded-full ${t.primary}`}></div>
                                            <div className={`w-12 h-12 rounded-full bg-[#1a1a1a]`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COLOR CELLS */}
                <section style={{ padding: `${spacing.section} ${spacing.md}`, backgroundColor: 'rgba(0,0,0,0.05)' }}>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: spacing.xl }}>
                            <h2 className="font-normal" style={{ fontSize: responsive.fontSize['4xl'], marginBottom: spacing.lg }}>Colors naturally.</h2>
                            <p className="text-xl text-black/60">
                                We extract the dominant colors from your wallpaper and apply them across the entire OS. It's cohesive, accessible, and uniquely yours.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
                            <div className={`rounded-[32px] ${t.primary} col-span-2 row-span-2 p-8 flex flex-col justify-between`}>
                                <span className="text-white/80 font-medium text-lg">Primary</span>
                                <span className="text-white text-6xl">Aa</span>
                            </div>
                            <div className={`rounded-[32px] ${t.container} p-6 flex flex-col justify-between`}>
                                <span className={`${t.onContainer} opacity-80 font-medium`}>Secondary</span>
                                <div className={`w-8 h-8 rounded-full ${t.primary}`}></div>
                            </div>
                            <div className="rounded-[32px] bg-[#E0E2EC] p-6 flex flex-col justify-between">
                                <span className="text-[#44474F] font-medium">Surface</span>
                            </div>
                            <div className="rounded-[32px] bg-[#1a1a1a] p-6 text-white flex items-center justify-center">
                                <span className="font-medium">Dark Mode</span>
                            </div>
                            <div className={`rounded-[32px] bg-white p-6 flex items-center justify-center border border-black/5`}>
                                <Plus size={32} className="text-black/20" />
                            </div>
                        </div>
                    </div>
                </section>


                {/* WIDGETS SECTION */}
                <section style={{ padding: `${spacing.section} ${spacing.md}` }}>
                    <div className="max-w-7xl mx-auto grid gap-16 items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                        <div className="order-2 md:order-1 grid gap-6">
                            <div className={`bg-[#F2F0EB] p-6 rounded-[28px] flex items-center gap-4`}>
                                <div className="w-16 h-16 bg-[#FFD8E4] rounded-[20px] flex items-center justify-center text-[#31111D]">
                                    <Heart fill="currentColor" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-black">Health Connect</h3>
                                    <p className="text-black/60">Syncing with 4 apps</p>
                                </div>
                                <div className="ml-auto bg-white p-2 rounded-full"><Check size={20} /></div>
                            </div>

                            <div className={`bg-[#F2F0EB] p-6 rounded-[28px] flex items-center gap-4`}>
                                <div className="w-16 h-16 bg-[#E8DEF8] rounded-[20px] flex items-center justify-center text-[#1D192B]">
                                    <Shield fill="currentColor" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-black">Security Hub</h3>
                                    <p className="text-black/60">No issues found</p>
                                </div>
                                <div className="ml-auto bg-white p-2 rounded-full"><Check size={20} /></div>
                            </div>

                            <div className={`bg-[#F2F0EB] p-6 rounded-[28px] flex items-center gap-4 opacity-50`}>
                                <div className="w-16 h-16 bg-[#C4E7FF] rounded-[20px] flex items-center justify-center text-[#001D35]">
                                    <Settings size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-black">System</h3>
                                    <p className="text-black/60">Update available</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 space-y-8">
                            <h2 className="font-normal leading-tight text-black" style={{ fontSize: isMobile ? responsive.fontSize['4xl'] : responsive.fontSize['5xl'] }}>
                                Useful. <br />
                                Glanceable. <br />
                                Beautiful.
                            </h2>
                            <p className="text-xl text-black/60 leading-relaxed">
                                Widgets have been reimagined with rounded corners and dynamic coloring. They bring the most important information directly to your home screen.
                            </p>
                            <button className="underline font-medium text-lg decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">
                                See all widgets
                            </button>
                        </div>
                    </div>
                </section>


                {/* CTA */}
                <section className={`${t.container}`} style={{ padding: `${spacing.section} ${spacing.md}` }}>
                    <div className="max-w-4xl mx-auto text-center" style={{ display: 'flex', flexDirection: 'column', gap: spacing.xl }}>
                        <h2 className={`font-normal ${t.onContainer}`} style={{ fontSize: isMobile ? responsive.fontSize['4xl'] : responsive.fontSize['5xl'] }}>Make it yours.</h2>
                        <div className="flex justify-center gap-4">
                            <button className={`h-16 px-10 rounded-full ${t.primary} text-white font-medium text-xl shadow-xl hover:scale-105 transition-transform`}>
                                Switch to Android
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-12 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-black/60 bg-black/5">
                <div className="flex gap-6 mb-4 md:mb-0">
                    <span className="font-bold text-black/80">Google</span>
                    <a href="#" className="hover:text-black">About</a>
                    <a href="#" className="hover:text-black">Products</a>
                    <a href="#" className="hover:text-black">Commitments</a>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-black">Privacy</a>
                    <a href="#" className="hover:text-black">Terms</a>
                    <a href="#" className="hover:text-black">Help</a>
                </div>
            </footer>
        </div>
    );
}
