import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Leaf, Sun, Zap, Wind, Sprout, Bird, Droplets, Recycle } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S28SolarpunkPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#F2F8F1',
        glass: 'rgba(255, 255, 255, 0.65)',
        glassBorder: 'rgba(255, 255, 255, 0.8)',
        text: '#1C3A13',
        muted: '#5D7A5D',
        green: '#4CAF50',
        accentGreen: '#8BC34A',
        gold: '#FFD700',
        orange: '#FF9800',
        teal: '#26A69A'
    };

    const gradient = `linear-gradient(135deg, ${colors.green} 0%, ${colors.accentGreen} 100%)`;
    const goldGradient = `linear-gradient(135deg, ${colors.gold} 0%, ${colors.orange} 100%)`;

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Quicksand", "Nunito", sans-serif' }}>

            {/* Global Styles for Organic Shapes & Glassmorphism */}
            <style>{`
                .glass-panel {
                    background: ${colors.glass};
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid ${colors.glassBorder};
                    box-shadow: 0 8px 32px 0 rgba(76, 175, 80, 0.15);
                }
                .organic-radius {
                    border-radius: 20px 50px 30px 60px / 50px 30px 60px 20px;
                }
                .organic-radius-2 {
                    border-radius: 60px 20px 50px 30px / 30px 60px 20px 50px;
                }
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>

            {/* Background Organic Blurs */}
            <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-30 animate-pulse"
                style={{ background: colors.green }} />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[80px] opacity-30 animate-pulse"
                style={{ background: colors.gold, animationDelay: '2s' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 glass-panel border-b-0 m-4 rounded-full mx-4 md:mx-8 mt-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-3 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg"
                            style={{ background: gradient }}>
                            <Leaf size={20} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-extrabold tracking-tight text-green-900">Solar<span style={{ color: colors.green }}>Punk</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Vision', 'Technology', 'Community'].map((item) => (
                                <span key={item} className="font-bold text-sm uppercase tracking-wider cursor-pointer transition-colors hover:text-green-600"
                                    style={{ color: colors.muted }}>
                                    {item}
                                </span>
                            ))}
                            <button className="px-6 py-2.5 rounded-full font-bold text-white shadow-lg transform transition-transform hover:scale-105"
                                style={{ background: gradient }}>
                                Join The Future
                            </button>
                        </nav>
                    )}
                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-green-800 hover:bg-green-100 rounded-full transition-colors">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-full left-0 right-0 mt-2 glass-panel rounded-3xl p-6 mx-4 animate-in slide-in-from-top-4 fade-in">
                        {['Vision', 'Technology', 'Community'].map((item) => (
                            <div key={item} className="py-4 font-bold text-lg text-center border-b border-green-100 last:border-0" style={{ color: colors.text }}>
                                {item}
                            </div>
                        ))}
                        <button className="w-full mt-4 py-4 rounded-full font-bold text-white text-lg shadow-md" style={{ background: gradient }}>
                            Join The Future
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="pt-20 pb-32 px-6">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 glass-panel rounded-full text-sm font-bold shadow-sm animate-float">
                        <Sun size={18} className="text-yellow-500 fill-current" />
                        <span className="text-green-800">Powered by 100% Renewable Energy</span>
                    </div>

                    <h1 className="mb-6 text-5xl md:text-8xl font-black leading-tight tracking-tight text-green-900">
                        Design for a <br />
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text" style={{ backgroundImage: gradient }}>Thriving Planet</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-green-200/50 -rotate-1 rounded-full -z-10"></span>
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto mb-12 text-xl font-medium leading-relaxed" style={{ color: colors.muted }}>
                        Reimagining technology as a force for ecological regeneration. Beautiful, functional, and harmonious with nature.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <button className="px-10 py-5 rounded-full font-bold text-lg text-white flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                            style={{ background: gradient }}>
                            Start Creating <ArrowRight size={20} />
                        </button>
                        <button className="px-10 py-5 rounded-full font-bold text-lg text-green-700 bg-white border-2 border-green-100 hover:border-green-300 transition-all hover:bg-green-50">
                            Read Manifesto
                        </button>
                    </div>

                    {/* Floating Cards */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: Leaf, title: 'Biomimicry', desc: 'Inspired by natural systems.', color: colors.green },
                            { icon: Sun, title: 'Solar Core', desc: 'Infinite renewable power.', color: colors.gold },
                            { icon: Wind, title: 'Clean Air', desc: 'Zero emissions commitment.', color: colors.teal }
                        ].map((item, i) => (
                            <div key={i} className={`glass-panel p-8 flex flex-col items-center text-center transition-all hover:-translate-y-2 hover:shadow-xl ${i % 2 === 0 ? 'organic-radius' : 'organic-radius-2'}`}>
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md text-white transform transition-transform group-hover:rotate-12"
                                    style={{ background: item.color === colors.gold ? goldGradient : gradient }}>
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-green-900">{item.title}</h3>
                                <p className="text-green-700/80 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-6">Grown, Not Built</h2>
                        <p className="text-xl font-medium max-w-2xl mx-auto" style={{ color: colors.muted }}>
                            Our technology stack evolves organically to meet human needs without compromising the environment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Sprout, title: "Regenerative", text: "Codebase that improves over time." },
                            { icon: Bird, title: "Biodiverse", text: "Supporting a wide ecosystem of plugins." },
                            { icon: Droplets, title: "Efficient", text: "Minimal resource consumption." },
                            { icon: Recycle, title: "Circular", text: "Designed for reuse and modularity." }
                        ].map((f, i) => (
                            <div key={i} className="bg-white/50 hover:bg-white p-8 rounded-[2rem] border border-green-100 transition-all hover:shadow-lg group">
                                <div className="mb-6 inline-flex p-4 rounded-2xl bg-green-50 text-green-600 group-hover:bg-green-100 group-hover:text-green-800 transition-colors">
                                    <f.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-green-900">{f.title}</h3>
                                <p className="text-green-700/70 leading-relaxed">{f.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials (Community Voices) */}
            <section className="py-24 px-6 bg-gradient-to-b from-transparent to-green-50/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-4xl md:text-5xl font-black text-green-900 mb-16">Community Roots</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "EcoArchitect", role: "Urban Planner", text: "SolarUI helps us visualize green cities with incredible fidelity." },
                            { name: "GreenCoder", role: "Developer", text: "Finally, a design system that aligns with my values. Lightweight and beautiful." },
                            { name: "TerraFormer", role: "Artist", text: " The organic shapes and textures feel so much more human than flat design." }
                        ].map((t, i) => (
                            <div key={i} className="glass-panel p-8 rounded-3xl relative">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-black shadow-md">
                                    "
                                </div>
                                <p className="text-lg font-medium text-green-800 mb-6 italic leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <div className="font-bold text-green-900">{t.name}</div>
                                        <div className="text-sm font-semibold text-green-600 uppercase tracking-wider">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-4xl md:text-5xl font-black text-green-900 mb-16">Fair Trade Pricing</h2>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
                        {[
                            { name: 'Seedling', price: '$19', hot: false },
                            { name: 'Sapling', price: '$49', hot: true },
                            { name: 'Forest', price: '$99', hot: false }
                        ].map((plan) => (
                            <div key={plan.name} className={`relative glass-panel p-10 flex flex-col items-center text-center transition-all duration-300 ${plan.hot ? 'scale-105 z-10 organic-radius' : 'scale-100 rounded-[3rem]'}`}>
                                {plan.hot && (
                                    <div className="absolute -top-4 px-6 py-2 rounded-full text-sm font-bold text-white shadow-lg animate-bounce"
                                        style={{ background: goldGradient }}>
                                        ★ Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-4 text-green-900">{plan.name}</h3>
                                <div className="text-5xl font-black mb-8 text-green-800">{plan.price}<span className="text-lg font-bold text-green-600/60">/mo</span></div>

                                <ul className="space-y-4 mb-10 w-full text-left pl-4">
                                    {['Zero Carbon Hosting', 'Organic Updates', 'Community Voting', 'Seed Bank Access'].map((f) => (
                                        <li key={f} className="flex items-center gap-3 font-semibold text-green-700">
                                            <div className="p-1 rounded-full bg-green-100 text-green-600"><Check size={14} strokeWidth={3} /></div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 rounded-full font-bold text-lg transition-all active:scale-95 shadow-md hover:shadow-xl"
                                    style={{
                                        background: plan.hot ? gradient : 'white',
                                        color: plan.hot ? 'white' : colors.green,
                                        border: plan.hot ? 'none' : `2px solid ${colors.green}`
                                    }}>
                                    Plant Your {plan.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-center text-4xl font-black text-green-900 mb-16">Knowledge Garden</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'What makes this "Solarpunk"?', a: 'Solarpunk is a movement that envisions a sustainable future where technology and nature coexist. Our design reflects this blending organic layouts with clean tech.' },
                            { q: 'Is the code energy efficient?', a: 'Yes! We optimize every component to minimize CPU cycles and reduce the carbon footprint of your application.' },
                            { q: 'Can I use this for non-profits?', a: 'Absolutely. We offer special grants and free licenses for environmental non-profit organizations.' }
                        ].map((item, i) => (
                            <div key={i} className="glass-panel rounded-2xl overflow-hidden transition-all hover:bg-white/40">
                                <button className="w-full flex items-center justify-between p-6 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold text-lg text-green-900 group-hover:text-green-700 transition-colors">{item.q}</span>
                                    <ChevronDown size={24} className={`text-green-400 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180 text-green-700' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-6 pt-0 text-lg leading-relaxed text-green-800/80 animate-in slide-in-from-top-2 fade-in">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden shadow-2xl"
                    style={{ background: gradient }}>

                    {/* Decorative Leaves */}
                    <div className="absolute top-10 left-10 text-white/20 animate-float"><Leaf size={80} /></div>
                    <div className="absolute bottom-10 right-10 text-white/20 animate-float" style={{ animationDelay: '1s' }}><Sun size={100} /></div>

                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-white relative z-10">Ready to re-wild the web?</h2>
                    <p className="mb-12 text-xl md:text-2xl text-green-50 max-w-2xl mx-auto relative z-10 font-medium">
                        Join the Solarpunk movement and build a digital world worth living in.
                    </p>

                    <button className="px-12 py-5 rounded-full font-bold text-lg bg-white text-green-600 transition-all hover:scale-105 hover:shadow-2xl relative z-10 flex items-center gap-2 mx-auto">
                        <Sprout size={24} /> Get Started Free
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-green-100 py-16 px-6 bg-white/40 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: gradient }}>
                            <Leaf size={20} strokeWidth={2.5} />
                        </div>
                        <span className="font-bold text-xl text-green-900">SolarPunk</span>
                    </div>

                    <div className="flex gap-8 text-sm font-bold text-green-700/60">
                        <a href="#" className="hover:text-green-800 transition-colors">Manifesto</a>
                        <a href="#" className="hover:text-green-800 transition-colors">Ecosystem</a>
                        <a href="#" className="hover:text-green-800 transition-colors">Carbon Report</a>
                        <a href="#" className="hover:text-green-800 transition-colors">Contact</a>
                    </div>

                    <span className="text-sm font-medium text-green-700/40">© 2025 Sustainable Systems.</span>
                </div>
            </footer>
        </div>
    );
};
