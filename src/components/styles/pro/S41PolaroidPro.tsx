import { useState } from 'react';
import { Menu, X, ChevronDown, Camera, Heart, Sun, Image, Aperture, Film, Star, ArrowRight, Sparkles } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S41PolaroidPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#F5F5F0', color: '#2C2C2C', fontFamily: '"Quicksand", "Helvetica Neue", sans-serif' }}>
            <style>{`
                .polaroid { background: #fff; padding: 12px 12px 48px 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); transform: rotate(var(--rotate, 0deg)); }
                .polaroid-caption { font-family: "Caveat", cursive; font-size: 1.25rem; color: #555; }
                .instant-border { border: 8px solid #fff; box-shadow: 0 8px 30px rgba(0,0,0,0.2); }
                .grain-overlay { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); opacity: 0.03; }
                .vintage-sepia { filter: sepia(20%) contrast(95%); }
            `}</style>

            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                            <Camera size={24} className="text-white" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">Instant<span className="text-amber-500">UI</span></span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Gallery', 'Memories', 'Albums', 'Print'].map((item) => (
                                <span key={item} className="text-sm font-medium cursor-pointer hover:text-amber-600 transition-colors">{item}</span>
                            ))}
                            <button className="px-6 py-2 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">Get Started</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="border-t border-gray-200 bg-white">
                        {['Gallery', 'Memories', 'Albums', 'Print'].map((item) => (
                            <div key={item} className="p-4 text-lg font-medium border-b border-gray-100">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            <section className="py-20 px-6 relative">
                <div className="absolute inset-0 grain-overlay pointer-events-none"></div>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-amber-50 rounded-full border border-amber-200">
                            <Sparkles size={16} className="text-amber-500" />
                            <span className="text-sm font-medium text-amber-700">Capture the Moment</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                            Instant<br /><span className="text-amber-500">Memories</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-lg mb-10 leading-relaxed">
                            Create nostalgic, beautiful interfaces inspired by vintage instant photography. Every frame tells a story.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2">
                                <Camera size={20} /> Start Creating
                            </button>
                            <button className="px-8 py-4 border-2 border-gray-300 font-medium rounded-full hover:border-gray-900 transition-colors">View Gallery</button>
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-center items-center">
                        <div className="relative">
                            <div className="polaroid" style={{ '--rotate': '-6deg' } as React.CSSProperties}>
                                <div className="w-64 h-64 bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center vintage-sepia">
                                    <Image size={64} className="text-amber-300" strokeWidth={1} />
                                </div>
                                <div className="polaroid-caption mt-3 text-center">Summer vibes ☀️</div>
                            </div>
                            <div className="polaroid absolute top-8 left-24" style={{ '--rotate': '8deg' } as React.CSSProperties}>
                                <div className="w-48 h-48 bg-gradient-to-br from-sky-100 to-indigo-100 flex items-center justify-center vintage-sepia">
                                    <Sun size={48} className="text-amber-300" strokeWidth={1} />
                                </div>
                                <div className="polaroid-caption mt-3 text-center">Good times</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Why Choose Instant</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Aperture, title: "Sharp Focus", desc: "Crisp, clear components" },
                            { icon: Film, title: "Vintage Feel", desc: "Nostalgic aesthetics" },
                            { icon: Heart, title: "Made with Love", desc: "Crafted with care" },
                            { icon: Camera, title: "Easy Capture", desc: "Simple to use" }
                        ].map((f, i) => (
                            <div key={i} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-colors">
                                <f.icon size={48} className="mx-auto mb-4 text-amber-500" strokeWidth={1.5} />
                                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                                <p className="text-gray-500">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Happy Moments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: "Alex M.", text: "Love the vintage aesthetic!", rotate: "-3deg" },
                            { name: "Jamie L.", text: "Perfect for my portfolio.", rotate: "2deg" },
                            { name: "Sam K.", text: "Beautiful and easy to use.", rotate: "-2deg" }
                        ].map((t, i) => (
                            <div key={i} className="polaroid mx-auto" style={{ '--rotate': t.rotate } as React.CSSProperties}>
                                <div className="w-full h-48 bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center">
                                    <div className="flex gap-1">{[...Array(5)].map((_, j) => <Star key={j} size={20} className="text-amber-400" fill="currentColor" />)}</div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-lg mb-2">"{t.text}"</p>
                                    <div className="polaroid-caption">— {t.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gray-900 text-white">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Choose Your Frame</h2>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                        {[
                            { name: 'Snapshot', price: '$19', features: ['Basic frames', 'Email support'] },
                            { name: 'Portrait', price: '$49', features: ['All frames', 'Priority support', 'Presets'], featured: true },
                            { name: 'Album', price: '$99', features: ['Unlimited', 'Custom frames', 'White label'] }
                        ].map((plan) => (
                            <div key={plan.name} className={`p-8 rounded-2xl text-center ${plan.featured ? 'bg-amber-500 scale-105' : 'bg-gray-800'}`}>
                                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                                <div className="text-5xl font-black mb-6">{plan.price}</div>
                                <ul className="space-y-3 mb-8">{plan.features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
                                <button className={`w-full py-3 font-medium rounded-full ${plan.featured ? 'bg-white text-gray-900' : 'bg-gray-700'}`}>Choose Plan</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'How do I get started?', a: 'Simply choose a plan and start creating beautiful memories.' },
                            { q: 'Can I print my designs?', a: 'Yes! Export high-resolution files ready for printing.' },
                            { q: 'Is there a free trial?', a: 'All plans come with a 14-day free trial.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-medium text-lg">{item.q}</span>
                                    <ChevronDown size={20} className={`text-amber-500 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && <div className="p-6 pt-0 text-gray-600">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-rose-50">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Capture Your Story</h2>
                    <button className="px-12 py-5 bg-gray-900 text-white font-medium rounded-full inline-flex items-center gap-3 hover:bg-gray-800 transition-colors">
                        Get Started <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-400 py-12 px-6">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Camera size={24} className="text-amber-500" />
                        <span className="text-xl font-bold text-white">InstantUI</span>
                    </div>
                    <div className="text-sm">© 2025 InstantUI. All rights reserved.</div>
                </div>
            </footer>
        </div>
    );
};
