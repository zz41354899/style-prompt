import { useState } from 'react';
import { Layers, Cloud, Droplets, Sparkles, Shield, Zap, Star, Menu, X, ArrowRight, Check, Mail } from 'lucide-react';

export const S97FrostedGlass = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] font-sans text-white overflow-x-hidden selection:bg-white/30 selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                .font-glass { font-family: 'Inter', sans-serif; }
                
                .glass-card {
                    background: rgba(255, 255, 255, 0.15);
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border-radius: 24px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .glass-button {
                    background: rgba(255, 255, 255, 0.25);
                    box-shadow: 0 4px 12px 0 rgba(31, 38, 135, 0.1);
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: all 0.3s ease;
                }
                .glass-button:hover {
                    background: rgba(255, 255, 255, 0.4);
                    transform: translateY(-2px);
                }
                
                .glass-solid {
                    background: rgba(255, 255, 255, 0.9);
                    color: #667eea;
                }
            `}</style>

            {/* Decorative Orbs */}
            <div className="fixed top-[-150px] left-[-150px] w-[500px] h-[500px] bg-[#ff9a9e] rounded-full blur-[120px] opacity-40 pointer-events-none" />
            <div className="fixed bottom-[-150px] right-[-150px] w-[600px] h-[600px] bg-[#a18cd1] rounded-full blur-[120px] opacity-40 pointer-events-none" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fbc2eb] rounded-full blur-[150px] opacity-20 pointer-events-none" />

            {/* Navigation */}
            <nav className="fixed w-full z-50 px-4 py-4">
                <div className={`max-w-6xl mx-auto glass-card ${isMobile ? 'h-16 px-4' : 'h-20 px-8'} flex justify-between items-center`}>
                    <div className="flex items-center gap-3">
                        <Layers size={isMobile ? 24 : 28} className="text-white drop-shadow-md" />
                        <span className="font-glass font-bold text-lg tracking-tight text-white drop-shadow-sm">Crystalline</span>
                    </div>

                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8`}>
                        {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
                            <a key={item} href="#" className="font-glass font-medium text-white/80 hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button className={`glass-button ${isMobile ? 'px-4 py-2 text-sm' : 'px-6 py-2'} font-glass font-semibold`}>
                            Get Started
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`${isMobile ? 'block' : 'hidden'} p-2 text-white`}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="glass-card mt-2 p-4">
                        {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
                            <a key={item} href="#" onClick={() => setMenuOpen(false)} className="block py-3 font-glass font-medium text-white/90 hover:text-white border-b border-white/10 last:border-0">
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 relative z-10">
                <div className={`max-w-4xl mx-auto glass-card ${isMobile ? 'p-8' : 'p-16'} text-center relative overflow-hidden`}>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-glass font-medium mb-8 border border-white/20">
                        <Sparkles size={16} /> New: Enhanced Blur Engine
                    </div>

                    <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-glass font-bold mb-6 tracking-tight text-white drop-shadow-lg leading-tight`}>
                        Crystal Clear<br />User Interfaces
                    </h1>

                    <p className={`font-glass ${isMobile ? 'text-base' : 'text-xl'} text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed`}>
                        Create stunning frosted glass effects that bring depth and elegance to your designs. Beautiful blur, transparency, and light.
                    </p>

                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center gap-4`}>
                        <button className="glass-button glass-solid px-8 py-4 font-glass font-bold flex items-center justify-center gap-2 group">
                            Start Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="glass-button px-8 py-4 font-glass font-bold">
                            View Examples
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-glass font-bold text-center mb-4`}>Why Choose Glass UI?</h2>
                    <p className="text-center text-white/70 mb-12 max-w-xl mx-auto">Elevate your designs with modern translucency</p>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                        {[
                            { icon: Droplets, title: "Fluid Design", desc: "Elements flow like water on glass, creating smooth visual transitions." },
                            { icon: Layers, title: "Multi-Layered", desc: "Stack translucent layers to create stunning depth effects." },
                            { icon: Cloud, title: "Lightweight", desc: "Visually light and airy interfaces that don't overwhelm." },
                            { icon: Shield, title: "Accessibility", desc: "Carefully crafted contrast ratios for readability." },
                            { icon: Zap, title: "Performance", desc: "GPU-accelerated blur effects for smooth animations." },
                            { icon: Sparkles, title: "Customizable", desc: "Adjust blur, opacity, and colors to match your brand." },
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-8 hover:bg-white/25 transition-all duration-300 group cursor-default">
                                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/20">
                                    <item.icon size={24} className="text-white" />
                                </div>
                                <h3 className="font-glass font-bold text-xl mb-3">{item.title}</h3>
                                <p className="font-glass text-white/70 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-glass font-bold text-center mb-12`}>Simple Pricing</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                        {[
                            { name: 'Starter', price: 'Free', features: ['5 Glass components', 'Basic blur effects', 'Community support'] },
                            { name: 'Pro', price: '$29/mo', features: ['Unlimited components', 'Advanced effects', 'Priority support', 'Custom themes'], featured: true },
                            { name: 'Team', price: '$99/mo', features: ['Everything in Pro', 'Team collaboration', 'Design system', 'API access'] },
                        ].map((plan, i) => (
                            <div key={i} className={`glass-card p-8 ${plan.featured ? 'ring-2 ring-white/50 scale-105' : ''}`}>
                                {plan.featured && (
                                    <div className="text-xs font-bold bg-white/30 px-3 py-1 rounded-full w-fit mb-4">MOST POPULAR</div>
                                )}
                                <h3 className="font-glass font-bold text-2xl mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-white/80">
                                            <Check size={16} className="text-white" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-xl font-glass font-bold ${plan.featured ? 'glass-solid' : 'glass-button'}`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="glass-card p-12">
                        <Star className="w-12 h-12 mx-auto mb-6 text-white/80" />
                        <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-glass font-bold mb-6`}>Ready to Get Started?</h2>
                        <p className="text-white/70 mb-8 max-w-xl mx-auto">Join thousands of designers creating beautiful glass UI experiences.</p>
                        <button className="glass-button glass-solid px-10 py-4 font-glass font-bold text-lg">
                            Start Free Trial
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 relative z-10 border-t border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className={`${isMobile ? 'flex flex-col gap-8' : 'flex justify-between'} mb-8`}>
                        <div className="flex items-center gap-3">
                            <Layers size={24} className="text-white" />
                            <span className="font-glass font-bold text-lg">Crystalline</span>
                        </div>
                        <div className={`flex ${isMobile ? 'flex-wrap' : ''} gap-6 text-sm text-white/60`}>
                            {['Features', 'Pricing', 'About', 'Blog', 'Contact', 'Privacy'].map((item) => (
                                <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
                            ))}
                        </div>
                    </div>
                    <div className="text-center text-sm text-white/40 pt-8 border-t border-white/10">
                        © 2024 Crystalline. Crafted with light and glass.
                    </div>
                </div>
            </footer>
        </div>
    );
};
