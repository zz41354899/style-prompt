import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Droplets, Waves, Wind, Sparkles, Zap, Globe, Activity } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S48Fluid3DPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#0A0B1E] text-white selection:bg-pink-500 selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap');

                .font-fluid { font-family: 'Be Vietnam Pro', sans-serif; }

                /* Mesh Gradient Animation */
                .mesh-bg {
                    background: radial-gradient(at 0% 0%, #3B82F6 0px, transparent 50%),
                                radial-gradient(at 100% 0%, #EC4899 0px, transparent 50%),
                                radial-gradient(at 100% 100%, #8B5CF6 0px, transparent 50%),
                                radial-gradient(at 0% 100%, #06B6D4 0px, transparent 50%);
                    opacity: 0.3;
                    filter: blur(80px);
                    animation: pulse-mesh 10s ease-in-out infinite alternate;
                }

                @keyframes pulse-mesh {
                    0% { transform: scale(1); opacity: 0.3; }
                    100% { transform: scale(1.1); opacity: 0.5; }
                }

                /* Fluid Morphing Blobs */
                .fluid-blob {
                    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                    animation: morph 8s ease-in-out infinite;
                }
                
                @keyframes morph {
                    0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
                    100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                }

                /* Glassmorphism */
                .glass-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
                }
                
                .glass-card:hover {
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                }

                .gradient-text {
                    background: linear-gradient(135deg, #60A5FA 0%, #C084FC 50%, #F472B6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .button-glow {
                    position: relative;
                }
                .button-glow::after {
                    content: '';
                    position: absolute;
                    top: -2px; left: -2px; right: -2px; bottom: -2px;
                    background: linear-gradient(135deg, #60A5FA, #C084FC, #F472B6);
                    z-index: -1;
                    border-radius: 9999px;
                    opacity: 0.7;
                    filter: blur(10px);
                    transition: opacity 0.3s;
                }
                .button-glow:hover::after {
                    opacity: 1;
                    filter: blur(15px);
                }
            `}</style>

            <div className="absolute inset-0 mesh-bg pointer-events-none fixed"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 transition-all duration-300 border-b border-white/5 bg-[#0A0B1E]/70 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                            <Droplets size={20} className="text-white" fill="currentColor" fillOpacity={0.2} />
                        </div>
                        <span className="text-2xl font-fluid font-bold tracking-tight text-white">Fluid<span className="text-blue-400">UI</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Features', 'Marketplace', 'Resources'].map((item) => (
                                <a key={item} href="#" className="font-fluid text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-fluid text-sm font-semibold transition-all button-glow">
                                Get Started
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white/80 hover:text-white transition-colors">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-4 pb-4 backdrop-blur-xl bg-[#0A0B1E]/90 border-b border-white/5">
                        {['Features', 'Marketplace', 'Resources'].map((item) => (
                            <div key={item} className="py-4 text-center font-fluid font-medium text-gray-200 border-b border-white/5">{item}</div>
                        ))}
                        <button className="w-full mt-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg">
                            Get Started
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative overflow-visible">
                {/* Floating Blobs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
                        <Sparkles size={16} className="text-yellow-400" />
                        <span className="text-sm font-fluid font-medium text-blue-200">Introducing Version 2.0</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-fluid font-bold tracking-tight mb-8 leading-[1.1]">
                        Design that <br />
                        <span className="gradient-text italic pr-2">flows</span> like water.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300/80 max-w-2xl mb-12 font-fluid font-light leading-relaxed">
                        Create immersive, organic interfaces with our liquid motion engine.
                        Blurring the lines between functional UI and digital art.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                        <button className="px-10 py-4 rounded-full bg-white text-black font-fluid font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                            Start Creating
                        </button>
                        <button className="px-10 py-4 rounded-full glass-card text-white font-fluid font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            Watch Demo <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><ArrowRight size={14} /></div>
                        </button>
                    </div>

                    {/* Interactive Preview Card */}
                    <div className="mt-20 w-full max-w-4xl glass-card rounded-3xl p-1 border border-white/20 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative rounded-2xl overflow-hidden bg-black/40 aspect-video flex items-center justify-center">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay hover:scale-110 transition-transform duration-[10s]"></div>
                            <div className="text-center relative z-10 p-10">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-600 fluid-blob shadow-2xl shadow-purple-500/50 flex items-center justify-center">
                                    <Waves size={40} className="text-white" />
                                </div>
                                <h3 className="text-3xl font-bold font-fluid mb-2">Liquid Engine</h3>
                                <p className="text-white/60">Hover to see the flow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-fluid font-bold text-center mb-20">
                        Organic <span className="gradient-text">motion</span> features
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Wind, title: "Smooth Transitions", desc: "Physics-based animations that feel natural to touch.", color: "from-blue-400 to-cyan-300" },
                            { icon: Droplets, title: "Glassmorphism", desc: "Built-in blur filters and transparency controls.", color: "from-purple-400 to-pink-300" },
                            { icon: Activity, title: "Performance First", desc: "60fps rendering using GPU accelerated transforms.", color: "from-green-400 to-emerald-300" }
                        ].map((f, i) => (
                            <div key={i} className="glass-card p-10 rounded-[32px] group hover:-translate-y-2 transition-all duration-300">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} mb-8 flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-12 transition-transform duration-500`}>
                                    <f.icon className="text-white" size={32} strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold font-fluid mb-4 text-white group-hover:gradient-text transition-colors">{f.title}</h3>
                                <p className="text-gray-400 font-fluid leading-relaxed text-lg">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-fluid font-bold text-center mb-4">Pricing Plans</h2>
                    <p className="text-center text-gray-400 mb-20 max-w-xl mx-auto">Choose the flow that fits your needs.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                        {[
                            { name: 'Ripple', price: 'Free', features: ['Core Components', 'Community Support'], color: 'border-white/10' },
                            { name: 'Wave', price: '$29', features: ['Pro Animations', 'Advanced Blur', 'Priority Support'], color: 'border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.2)]', featured: true },
                            { name: 'Tsunami', price: '$99', features: ['Source Code', 'White Label', '24/7 Support'], color: 'border-white/10' }
                        ].map((plan, i) => (
                            <div key={i} className={`glass-card p-8 rounded-[32px] border ${plan.color} ${plan.featured ? 'scale-110 z-10 bg-white/5' : 'bg-transparent'} transition-transform duration-300 hover:bg-white/5`}>
                                {plan.featured && (
                                    <div className="text-center mb-6">
                                        <span className="px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">Most Popular</span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-fluid font-semibold mb-2">{plan.name}</h3>
                                <div className="text-5xl font-fluid font-bold mb-8 gradient-text inline-block">{plan.price}</div>

                                <ul className="space-y-4 mb-10">
                                    {[1, 2, 3, 4].map((_, j) => (
                                        <li key={j} className={`flex items-center gap-3 text-sm ${j < plan.features.length ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${j < plan.features.length ? 'bg-green-500/20 text-green-400' : 'bg-gray-800 text-gray-600'}`}>
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            {plan.features[j] || 'Feature Unavailable'}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-2xl font-fluid font-bold text-sm uppercase tracking-wide transition-all ${plan.featured ? 'bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
                                    Choose {plan.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 relative">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-fluid font-bold text-center mb-12">Common Questions</h2>

                    <div className="space-y-4">
                        {[{ q: 'Does this affect page load speed?', a: 'FluidUI is optimized to be lightweight. The CSS-only animations add negligible overhead compared to JavaScript libraries.' },
                        { q: 'Is it compatible with Tailwind?', a: 'Seamlessly. It is built as a set of Tailwind utility extensions and components.' },
                        { q: 'How do I customize the gradients?', a: 'Simply override the CSS variables for --primary, --secondary, and --accent colors.' }
                        ].map((item, i) => (
                            <div key={i} className="glass-card rounded-2xl overflow-hidden hover:bg-white/5 transition-colors">
                                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-fluid font-semibold text-lg text-gray-200">{item.q}</span>
                                    <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-6 pb-6 text-gray-400 font-fluid leading-relaxed border-t border-white/5 pt-4">
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
                <div className="max-w-5xl mx-auto glass-card rounded-[48px] p-12 lg:p-24 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    {/* Background blobs for CTA */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full filter blur-[60px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-[60px] animate-pulse" style={{ animationDelay: '1s' }}></div>

                    <div className="relative z-10">
                        <h2 className="text-5xl lg:text-7xl font-fluid font-bold mb-8">
                            Ready to <span className="gradient-text">flow?</span>
                        </h2>
                        <button className="px-12 py-5 rounded-full bg-white text-black font-fluid font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 pt-20 pb-10 px-6 bg-[#05060F]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-900/40">
                            <Droplets size={24} className="text-white" />
                        </div>
                        <span className="text-2xl font-fluid font-bold text-white">Fluid<span className="text-gray-500">UI</span></span>
                    </div>

                    <div className="flex gap-8 text-sm font-fluid font-medium text-gray-400 uppercase tracking-wider">
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="hover:text-white transition-colors">Discord</a>
                    </div>

                    <div className="text-gray-600 font-fluid text-sm">
                        © 2025 Fluid Design Systems.
                    </div>
                </div>
            </footer>
        </div>
    );
};
