import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Scissors, Layers, PenTool, FileText, Heart, Sticker, Star } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S25PaperCraftPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const spacing = responsive.spacing;

    const colors = {
        bg: '#fdfbf7',
        surface: '#ffffff',
        text: '#2c2c2c',
        muted: '#595959',
        coral: '#ff6b6b',
        teal: '#4ecdc4',
        yellow: '#ffe66d',
        navy: '#1a535c',
        kraft: '#e6dcd0'
    };

    const shadows = {
        sm: '2px 2px 5px rgba(0,0,0,0.05), -1px -1px 4px rgba(255,255,255,0.8)',
        md: '8px 8px 0px rgba(0,0,0,0.1), 2px 2px 5px rgba(0,0,0,0.05)',
        lg: '16px 16px 0px rgba(0,0,0,0.1), 4px 4px 10px rgba(0,0,0,0.05)',
        floating: '0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1)'
    };

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Merriweather", "Georgia", serif' }}>

            {/* Grain Texture Overlay - CSS Only */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-50 mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }} />

            {/* Navigation */}
            <header className="fixed top-0 w-full z-40 p-4 pt-6 transition-all">
                <div className="max-w-6xl mx-auto rounded-lg px-8 py-4 flex items-center justify-between relative transform -rotate-1 transition-transform hover:rotate-0"
                    style={{ backgroundColor: colors.surface, boxShadow: shadows.md, border: '1px solid rgba(0,0,0,0.05)' }}>

                    {/* Tape Effect */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100 opacity-80 transform -rotate-2 backdrop-blur-sm"
                        style={{
                            boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                            maskImage: 'linear-gradient(90deg, transparent 2%, black 5%, black 95%, transparent 98%)'
                        }} />

                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md text-white rotate-3" style={{ backgroundColor: colors.navy }}>
                            <Scissors size={20} />
                        </div>
                        <span className="text-xl font-black tracking-tight text-gray-800">PaperCuts</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Collection', 'About', 'Pricing'].map((item) => (
                                <a key={item} href="#" className="font-bold relative group" style={{ color: colors.muted }}>
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-3 bg-yellow-200 opacity-50 group-hover:w-full transition-all duration-300 transform -rotate-1" />
                                </a>
                            ))}
                            <button className="px-6 py-2 rounded font-bold text-white transform hover:-translate-y-1 active:translate-y-0 transition-all border-b-4 border-red-700 active:border-b-0"
                                style={{ backgroundColor: colors.coral }}>
                                Get Template
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                            {menuOpen ? <X /> : <Menu />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-24 left-4 right-4 p-6 rounded-lg animate-in slide-in-from-top-4"
                        style={{ backgroundColor: colors.surface, boxShadow: shadows.lg }}>
                        {['Collection', 'About', 'Pricing'].map((item) => (
                            <div key={item} className="py-3 font-bold border-b border-dashed border-gray-200">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative" style={{ paddingTop: '160px', paddingBottom: spacing.section, paddingLeft: spacing.lg, paddingRight: spacing.lg }}>
                <div className="max-w-6xl mx-auto grid gap-16 items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                    <div className="order-2 md:order-1 space-y-8">
                        <div className="inline-block px-4 py-1 bg-teal-100 text-teal-800 font-bold text-sm tracking-wider uppercase transform -rotate-2 border border-teal-200 rounded-sm shadow-sm">
                            Handmade Digital Assets
                        </div>

                        <h1 className="font-black text-gray-800 leading-[1.1]" style={{ fontSize: isMobile ? responsive.fontSize['4xl'] : responsive.fontSize['5xl'] }}>
                            Layers of <br />
                            <span className="relative inline-block mt-2">
                                <span className="relative z-10 text-white drop-shadow-md"
                                    style={{ textShadow: `4px 4px 0px ${colors.navy}` }}>Creativity</span>
                                <svg className="absolute -inset-1 -z-10 text-coral w-[105%] h-[105%]" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0,50 Q10,0 50,10 Q90,0 100,50 Q90,100 50,90 Q10,100 0,50 Z" fill={colors.coral} />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl leading-relaxed font-medium" style={{ color: colors.muted }}>
                            Add depth, texture, and a touch of nostalgia to your designs. Perfectly imperfect components for the web.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <button className="px-8 py-4 bg-gray-800 text-white text-lg font-bold rounded shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all border border-black">
                                Explore Collection
                            </button>
                            <button className="px-8 py-4 bg-white text-gray-800 text-lg font-bold rounded shadow-[4px_4px_0px_#ddd] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all border border-gray-200">
                                Watch Video
                            </button>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 relative">
                        {/* Abstract Paper Collage */}
                        <div className="relative w-full h-[500px]">
                            <div className="absolute top-10 left-10 w-64 h-80 bg-white p-4 transform -rotate-6 transition-transform hover:rotate-0 hover:z-20 duration-500"
                                style={{ boxShadow: shadows.md }}>
                                <div className="w-full h-40 bg-gray-100 mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-teal-200 opacity-20"></div>
                                    <Layers size={48} className="absolute center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-teal-400" />
                                </div>
                                <div className="h-4 bg-gray-100 rounded mb-2 w-3/4"></div>
                                <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                            </div>

                            <div className="absolute top-20 right-20 w-64 h-80 bg-white p-4 transform rotate-3 transition-transform hover:rotate-0 hover:z-20 duration-500"
                                style={{ boxShadow: shadows.md, backgroundColor: colors.kraft }}>
                                <div className="w-full h-40 bg-white/50 mb-4 flex items-center justify-center">
                                    <PenTool size={48} className="text-gray-400" />
                                </div>
                                <div className="h-4 bg-white/50 rounded mb-2 w-full"></div>
                                <div className="h-4 bg-white/50 rounded w-2/3"></div>
                                {/* Pin */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-sm border border-red-600"></div>
                            </div>

                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 h-auto bg-yellow-200 p-6 transform rotate-1 rounded-sm shadow-xl z-10 text-center font-handwriting">
                                <span className="font-bold text-yellow-800 text-xl transform -rotate-1 block font-sans">Special Offer!</span>
                                <div className="text-sm mt-2 text-yellow-900 font-sans">Get 50% off texture pack</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features with Torn Paper Effect */}
            <section className="bg-white relative" style={{ padding: `${spacing.section} 0` }}>
                {/* Torn Edge Top - CSS Generated */}
                <div className="absolute top-0 left-0 w-full h-4 bg-white"
                    style={{
                        maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 40 4\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 4 L5 0 L10 4 L15 0 L20 4 L25 0 L30 4 L35 0 L40 4 V4 H0 Z\' fill=\'black\'/%3E%3C/svg%3E")',
                        maskSize: '20px 100%',
                        backgroundColor: '#fdfbf7' // Match background color to hide the hard edge
                    }}
                />
                {/* Shadow for edge */}
                <div className="absolute top-0 left-0 w-full h-1 bg-black/10" />

                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4 flex items-center justify-center gap-4">
                            <Star className="text-yellow-400 fill-current" />
                            Crafted Details
                            <Star className="text-yellow-400 fill-current" />
                        </h2>
                    </div>

                    <div className="grid gap-10" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { icon: Layers, title: "Physical Depth", desc: "Shadows that feel created by light, not code." },
                            { icon: Sticker, title: "Texture Packs", desc: "Includes high-res paper, cardboard, and tape textures." },
                            { icon: Scissors, title: "Easy Customization", desc: "Cut, paste, and styles match your brand instantly." }
                        ].map((f, i) => (
                            <div key={i} className="group p-8 bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-2"
                                style={{ boxShadow: shadows.floating }}>
                                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                                    <f.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-sans">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Sticky Notes */}
            <section className="overflow-hidden relative" style={{ padding: `${spacing.section} ${spacing.lg}`, backgroundColor: colors.kraft }}>
                <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-center text-4xl font-black text-gray-800 mb-20">Community Notes</h2>

                    <div className="grid gap-8" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[
                            { text: "It's like scrapbooking but for websites. Absolutely love the vibe!", author: "Jamie L.", bg: "#feff9c", rotate: "-2deg" },
                            { text: "My portfolio went from flat to fantastic. The textures are so high quality.", author: "Sam K.", bg: "#ff7eb9", rotate: "1deg" },
                            { text: "Finally, a design system that doesn't feel like a bootstrap clone.", author: "Chris P.", bg: "#7afcff", rotate: "-1deg" }
                        ].map((note, i) => (
                            <div key={i} className="p-8 pb-12 shadow-xl relative transition-transform hover:scale-105"
                                style={{
                                    backgroundColor: note.bg,
                                    transform: `rotate(${note.rotate})`,
                                    fontFamily: '"Patrick Hand", cursive' // Assuming we can use cursive for notes
                                }}>
                                {/* Tape */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/60 transform rotate-1 shadow-sm backdrop-blur-[1px]"
                                    style={{ clipPath: 'polygon(2% 0, 98% 2%, 100% 100%, 0% 98%)' }}
                                />

                                <p className="text-2xl font-medium mb-6 leading-tight text-gray-800">"{note.text}"</p>
                                <div className="text-right font-bold text-gray-700 font-sans tracking-tight">- {note.author}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing - Cardboard Cards */}
            <section className="bg-white" style={{ padding: `${spacing.section} ${spacing.lg}` }}>
                <div className="max-w-5xl mx-auto">
                    <div className="grid gap-12 items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
                        <div className="p-10 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 relative">
                            <h3 className="text-2xl font-bold text-gray-400 mb-2">Free Tier</h3>
                            <div className="text-5xl font-black mb-6">$0</div>
                            <ul className="space-y-4 mb-8 text-gray-500 font-sans">
                                <li className="flex gap-2"><Check size={20} /> 5 Basic Textures</li>
                                <li className="flex gap-2"><Check size={20} /> Personal License</li>
                            </ul>
                            <button className="w-full py-3 font-bold text-gray-500 border-2 border-gray-300 rounded hover:bg-gray-100 transition-colors">
                                Download Free
                            </button>
                        </div>

                        <div className="p-10 text-white rounded-2xl transform scale-105 relative"
                            style={{
                                backgroundColor: colors.navy,
                                boxShadow: shadows.lg,
                                backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'
                            }}>
                            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Best Value
                            </div>
                            <h3 className="text-2xl font-bold text-white/80 mb-2">Complete Box</h3>
                            <div className="text-6xl font-black mb-6 flex items-baseline gap-2">
                                $49 <span className="text-xl font-medium opacity-50">/one-time</span>
                            </div>
                            <ul className="space-y-4 mb-10 font-sans text-lg">
                                <li className="flex gap-2"><Check size={20} className="text-teal-400" /> All 50+ Textures</li>
                                <li className="flex gap-2"><Check size={20} className="text-teal-400" /> Figma & React Files</li>
                                <li className="flex gap-2"><Check size={20} className="text-teal-400" /> Commercial License</li>
                            </ul>
                            <button className="w-full py-4 text-xl font-bold rounded shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                                style={{ backgroundColor: colors.coral }}>
                                Get Everything
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 relative overflow-hidden text-white" style={{ backgroundColor: '#2d3436' }}>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                    <div className="flex items-center gap-4">
                        <Scissors className="text-coral" />
                        <span className="text-2xl font-bold">PaperCuts</span>
                    </div>
                    <div className="flex gap-8 font-bold text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">License</a>
                        <a href="#" className="hover:text-white transition-colors">Support</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
