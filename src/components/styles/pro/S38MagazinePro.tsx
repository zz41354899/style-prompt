import { useState } from 'react';
import { Menu, X, ChevronDown, Sparkles, Heart, Star, Camera, Palette, Feather, ArrowRight } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S38MagazinePro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#FFFFFF', color: '#1A1A1A', fontFamily: '"Montserrat", sans-serif' }}>
            <style>{`
                .magazine-gradient { background: linear-gradient(135deg, #FF1493, #00CED1); }
                .text-gradient { background: linear-gradient(135deg, #FF1493, #00CED1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .hover-lift { transition: transform 0.3s, box-shadow 0.3s; }
                .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
            `}</style>

            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 magazine-gradient rounded-full flex items-center justify-center">
                            <Sparkles size={24} className="text-white" />
                        </div>
                        <span className="text-2xl font-black tracking-tight">VOGUE<span className="text-gradient">UI</span></span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Style', 'Culture', 'Beauty', 'Living'].map((item) => (
                                <span key={item} className="text-sm font-semibold uppercase tracking-widest cursor-pointer hover:text-pink-500 transition-colors">{item}</span>
                            ))}
                            <button className="px-8 py-3 magazine-gradient text-white font-bold text-sm uppercase tracking-widest rounded-full">Subscribe</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="border-t border-gray-100 bg-white">
                        {['Style', 'Culture', 'Beauty', 'Living'].map((item) => (
                            <div key={item} className="p-4 text-lg font-semibold uppercase tracking-widest border-b border-gray-100">{item}</div>
                        ))}
                    </div>
                )}
            </header>

            <section className="relative min-h-[90vh] flex items-center py-20 px-6">
                <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-pink-50 rounded-full">
                            <Star size={16} className="text-pink-500" fill="currentColor" />
                            <span className="text-sm font-semibold text-pink-600 uppercase tracking-widest">Editor's Pick</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8">
                            The Art of<br /><span className="text-gradient">Modern Design</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-lg mb-12 leading-relaxed">Discover the perfect blend of aesthetics and functionality.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-10 py-4 magazine-gradient text-white font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-2">
                                <Heart size={18} /> Explore Now
                            </button>
                            <button className="px-10 py-4 border-2 border-gray-900 font-bold uppercase tracking-widest rounded-full hover:bg-gray-900 hover:text-white transition-colors">Watch Film</button>
                        </div>
                    </div>
                    <div className="relative hidden lg:block">
                        <div className="aspect-[3/4] bg-gradient-to-br from-pink-100 to-cyan-100 rounded-3xl overflow-hidden relative hover-lift flex items-center justify-center">
                            <Camera size={80} className="text-pink-300" strokeWidth={1} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-pink-500 uppercase tracking-widest">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-black mt-4">Curated Excellence</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Palette, title: "Bold Aesthetics", desc: "Eye-catching designs" },
                            { icon: Feather, title: "Refined Details", desc: "Pixel-perfect crafting" },
                            { icon: Sparkles, title: "Trendsetting", desc: "Always ahead" },
                            { icon: Heart, title: "Made with Love", desc: "Passionate perfection" }
                        ].map((f, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl hover-lift border-t-4 border-pink-500">
                                <f.icon size={40} className="mb-6 text-pink-500" strokeWidth={1.5} />
                                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                                <p className="text-gray-500">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">What They're Saying</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { author: "Anna W.", role: "Creative Director", text: "Absolutely stunning framework." },
                            { author: "Marcus L.", role: "Design Lead", text: "Remarkable attention to detail." },
                            { author: "Sophie T.", role: "Brand Manager", text: "Transformed our digital presence." }
                        ].map((t, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-3xl hover-lift">
                                <div className="flex items-center gap-1 mb-6">{[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-yellow-400" fill="currentColor" />)}</div>
                                <p className="text-lg mb-6">"{t.text}"</p>
                                <div className="font-bold">{t.author}</div>
                                <div className="text-sm text-gray-500">{t.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-gray-900 text-white">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">Choose Your Style</h2>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                        {[
                            { name: 'Essential', price: '$29', features: ['Core components', 'Email support'] },
                            { name: 'Professional', price: '$79', features: ['All components', 'Priority support', 'Figma files'], featured: true },
                            { name: 'Agency', price: '$199', features: ['Unlimited projects', 'White label'] }
                        ].map((plan) => (
                            <div key={plan.name} className={`p-8 rounded-3xl ${plan.featured ? 'magazine-gradient scale-105' : 'bg-gray-800'}`}>
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-5xl font-black mb-6">{plan.price}<span className="text-lg opacity-60">/mo</span></div>
                                <ul className="space-y-3 mb-8">{plan.features.map((f) => <li key={f} className="flex items-center gap-2"><Star size={16} fill="currentColor" /> {f}</li>)}</ul>
                                <button className={`w-full py-4 font-bold uppercase tracking-widest rounded-full ${plan.featured ? 'bg-white text-gray-900' : 'bg-gray-700'}`}>Get Started</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-12">Got Questions?</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'What design software is required?', a: 'Our components work with any modern framework.' },
                            { q: 'Can I use this for client projects?', a: 'Yes! Professional and Agency plans include commercial licensing.' },
                            { q: 'Do you offer refunds?', a: 'We offer a 30-day money-back guarantee.' }
                        ].map((item, i) => (
                            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold text-lg">{item.q}</span>
                                    <ChevronDown size={20} className={`text-pink-500 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && <div className="p-6 pt-0 text-gray-600">{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-screen-lg mx-auto magazine-gradient rounded-3xl p-12 md:p-20 text-center text-white">
                    <Sparkles size={48} className="mx-auto mb-6" />
                    <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to Shine?</h2>
                    <button className="px-12 py-5 bg-white text-gray-900 font-bold uppercase tracking-widest rounded-full inline-flex items-center gap-3">
                        Get Started <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-400 py-16 px-6">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 magazine-gradient rounded-full flex items-center justify-center"><Sparkles size={20} className="text-white" /></div>
                        <span className="text-xl font-black text-white">VOGUEUI</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                        {['Products', 'Resources', 'Company', 'Legal'].map(col => (
                            <div key={col}>
                                <h4 className="font-bold text-white uppercase tracking-widest mb-4">{col}</h4>
                                <ul className="space-y-2"><li><a href="#" className="hover:text-white">Overview</a></li></ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto border-t border-gray-800 mt-12 pt-8 text-sm text-center">© 2025 VogueUI. All rights reserved.</div>
            </footer>
        </div>
    );
};
