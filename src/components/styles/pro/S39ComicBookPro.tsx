import { useState } from 'react';
import { Menu, X, ChevronDown, Zap, Star, Sparkles, Flame, Shield, Rocket, Target, ArrowRight } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S39ComicBookPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#FFF9E6', color: '#1A1A1A', fontFamily: '"Bangers", "Comic Sans MS", cursive' }}>
            <style>{`
                .comic-border { border: 4px solid #000; box-shadow: 6px 6px 0 #000; }
                .halftone { background: radial-gradient(circle, #000 1px, transparent 1px); background-size: 4px 4px; }
                .speech-bubble { position: relative; background: #fff; border: 3px solid #000; border-radius: 20px; }
                .speech-bubble::after { content: ''; position: absolute; bottom: -20px; left: 30px; border: 10px solid transparent; border-top-color: #000; }
                .pow-effect { text-shadow: 4px 4px 0 #000, -2px -2px 0 #FFF; }
                .skew-panel { transform: skewX(-3deg); }
                @keyframes bounce-in { 0% { transform: scale(0); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
                .animate-bounce-in { animation: bounce-in 0.5s ease-out; }
            `}</style>

            <header className="sticky top-0 z-50 bg-red-600 border-b-8 border-black">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center transform rotate-12">
                            <Zap size={28} className="text-black" fill="currentColor" />
                        </div>
                        <span className="text-4xl font-bold text-yellow-400 pow-effect tracking-wider">HERO<span className="text-white">UI</span></span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['Powers', 'Heroes', 'Missions', 'HQ'].map((item) => (
                                <span key={item} className="text-xl text-white cursor-pointer hover:text-yellow-400 transition-colors tracking-wider">{item}</span>
                            ))}
                            <button className="px-8 py-3 bg-yellow-400 text-black border-4 border-black font-bold text-xl tracking-wider hover:bg-yellow-300 transform hover:-rotate-2 transition-all">JOIN!</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white">{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="border-t-4 border-black bg-yellow-400">
                        {['Powers', 'Heroes', 'Missions', 'HQ'].map((item) => (
                            <div key={item} className="p-4 text-2xl font-bold border-b-2 border-black">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            <section className="py-20 px-6 relative">
                <div className="absolute inset-0 halftone opacity-10"></div>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <div className="inline-block bg-red-600 text-white px-4 py-2 border-4 border-black transform -rotate-3 mb-6">
                            <span className="text-xl tracking-widest">★ NEW ISSUE ★</span>
                        </div>
                        <h1 className="text-7xl md:text-9xl leading-none mb-8 pow-effect">
                            <span className="text-red-600">SUPER</span><br />
                            <span className="text-blue-600">POWERS!</span>
                        </h1>
                        <div className="speech-bubble p-6 mb-8 max-w-md">
                            <p className="text-xl" style={{ fontFamily: 'Arial, sans-serif' }}>Build heroic interfaces with explosive components and action-packed animations!</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-10 py-5 bg-red-600 text-white border-4 border-black font-bold text-2xl tracking-wider comic-border hover:bg-red-500 transform hover:rotate-1 transition-all flex items-center gap-2">
                                <Zap fill="currentColor" /> ACTIVATE!
                            </button>
                            <button className="px-10 py-5 bg-blue-600 text-white border-4 border-black font-bold text-2xl tracking-wider comic-border hover:bg-blue-500">LEARN MORE</button>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 border-8 border-black p-12 transform rotate-3 skew-panel flex items-center justify-center" style={{ minHeight: '400px' }}>
                            <div className="text-center">
                                <Sparkles size={120} className="mx-auto text-white mb-4" strokeWidth={1.5} />
                                <div className="text-4xl text-white pow-effect">POW!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-blue-600">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-5xl md:text-6xl text-center text-yellow-400 mb-16 pow-effect">SUPER POWERS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Flame, title: "BLAZING FAST", desc: "Lightning speed", bg: "bg-red-500" },
                            { icon: Shield, title: "ULTRA SAFE", desc: "Bulletproof code", bg: "bg-green-500" },
                            { icon: Rocket, title: "SKY HIGH", desc: "Scalable power", bg: "bg-purple-500" },
                            { icon: Target, title: "PRECISION", desc: "Pixel perfect", bg: "bg-orange-500" }
                        ].map((f, i) => (
                            <div key={i} className={`${f.bg} p-8 border-4 border-black comic-border text-white text-center transform hover:-rotate-2 transition-transform`}>
                                <f.icon size={60} className="mx-auto mb-4" strokeWidth={2} />
                                <h3 className="text-2xl mb-2">{f.title}</h3>
                                <p className="text-lg opacity-90" style={{ fontFamily: 'Arial, sans-serif' }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-yellow-400">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-5xl text-center mb-16 pow-effect">HERO REVIEWS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Captain Code", text: "This framework saved my project!" },
                            { name: "Doctor Design", text: "Incredible components!" },
                            { name: "The Debugger", text: "Zero bugs, 100% power!" }
                        ].map((t, i) => (
                            <div key={i} className="speech-bubble p-6 bg-white">
                                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={20} className="text-yellow-500" fill="currentColor" />)}</div>
                                <p className="text-xl mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>"{t.text}"</p>
                                <div className="font-bold text-xl text-red-600">{t.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-black text-white">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-5xl text-center text-yellow-400 mb-16 pow-effect">CHOOSE YOUR POWER</h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                        {[
                            { name: 'SIDEKICK', price: '$29', color: 'bg-green-500' },
                            { name: 'HERO', price: '$79', color: 'bg-red-600', featured: true },
                            { name: 'LEGEND', price: '$199', color: 'bg-purple-600' }
                        ].map((plan) => (
                            <div key={plan.name} className={`${plan.color} p-8 border-4 border-white text-center transform ${plan.featured ? 'scale-110 z-10' : ''} comic-border`}>
                                <h3 className="text-3xl mb-4">{plan.name}</h3>
                                <div className="text-6xl font-bold mb-6">{plan.price}</div>
                                <ul className="space-y-2 mb-8 text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
                                    <li>✓ All Powers</li>
                                    <li>✓ Hero Support</li>
                                </ul>
                                <button className="w-full py-4 bg-yellow-400 text-black border-4 border-black font-bold text-xl">POWER UP!</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-5xl text-center mb-12 pow-effect">HERO FAQ</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'What powers do I get?', a: 'All the components you need to build heroic interfaces!' },
                            { q: 'Is there a sidekick plan?', a: 'Yes! Perfect for solo heroes starting their journey.' },
                            { q: 'Can I upgrade my powers?', a: 'Absolutely! Upgrade anytime to unlock more abilities.' }
                        ].map((item, i) => (
                            <div key={i} className="border-4 border-black comic-border bg-yellow-100">
                                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold text-xl">{item.q}</span>
                                    <ChevronDown size={24} className={`transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && <div className="p-6 pt-0 text-lg border-t-4 border-black" style={{ fontFamily: 'Arial, sans-serif' }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-red-600">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-6xl md:text-8xl text-yellow-400 mb-8 pow-effect">JOIN THE TEAM!</h2>
                    <button className="px-16 py-6 bg-yellow-400 text-black border-8 border-black font-bold text-3xl comic-border inline-flex items-center gap-4 hover:bg-yellow-300 transform hover:rotate-2 transition-all">
                        GET STARTED <ArrowRight size={32} />
                    </button>
                </div>
            </section>

            <footer className="bg-black text-white py-12 px-6 border-t-8 border-yellow-400">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-yellow-400 border-4 border-white rounded-full flex items-center justify-center">
                            <Zap size={24} className="text-black" fill="currentColor" />
                        </div>
                        <span className="text-3xl text-yellow-400">HEROUI</span>
                    </div>
                    <div className="text-center md:text-right">
                        <div className="text-sm opacity-60">© 2025 HeroUI. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
