import { useState } from 'react';
import { Layers, Sparkles, Palette, Monitor, Smartphone, Cloud, Menu, X, ArrowRight, Check, Zap, Shield, Sun, Moon } from 'lucide-react';

export const S98AcrylicFluid = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className={`min-h-screen font-sans transition-colors duration-500 ${darkMode ? 'bg-[#0F0F0F] text-white' : 'bg-[#F3F3F3] text-[#1A1A1A]'} selection:bg-[#60CDFF]/40 selection:text-white`}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Segoe+UI:wght@300;400;600;700&display=swap');
                .font-fluent { font-family: 'Segoe UI', system-ui, sans-serif; }
                
                .acrylic-dark {
                    background: rgba(32, 32, 32, 0.6);
                    backdrop-filter: blur(40px) saturate(180%);
                    -webkit-backdrop-filter: blur(40px) saturate(180%);
                }
                .acrylic-light {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(40px) saturate(180%);
                    -webkit-backdrop-filter: blur(40px) saturate(180%);
                }
                
                .mica-dark { background: rgba(44, 44, 44, 0.96); }
                .mica-light { background: rgba(243, 243, 243, 0.96); }
                
                .fluent-glow {
                    box-shadow: 0 0 80px rgba(96, 205, 255, 0.15);
                }
            `}</style>

            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] ${darkMode ? 'bg-[#60CDFF]/10' : 'bg-[#0078D4]/10'}`} />
                <div className={`absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] ${darkMode ? 'bg-[#886CE4]/10' : 'bg-[#5C2D91]/10'}`} />
            </div>

            {/* Navigation */}
            <nav className={`sticky top-0 z-50 ${darkMode ? 'acrylic-dark' : 'acrylic-light'} border-b ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-[#60CDFF] to-[#0078D4] rounded-lg flex items-center justify-center">
                            <Layers size={20} className="text-white" />
                        </div>
                        <span className="font-fluent font-semibold text-lg">Fluent UI</span>
                    </div>

                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8`}>
                        {['Components', 'Design', 'Develop', 'Resources'].map((item) => (
                            <a key={item} href="#" className={`font-fluent text-sm ${darkMode ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'} transition-colors`}>
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'} transition-colors`}>
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button className="font-fluent text-sm bg-[#60CDFF] text-black px-5 py-2 rounded-lg hover:bg-[#60CDFF]/80 transition-colors font-semibold">
                            Get Started
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`${isMobile ? 'block' : 'hidden'} p-2`}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className={`${darkMode ? 'mica-dark' : 'mica-light'} border-t ${darkMode ? 'border-white/10' : 'border-black/10'} p-4`}>
                        {['Components', 'Design', 'Develop', 'Resources'].map((item) => (
                            <a key={item} href="#" onClick={() => setMenuOpen(false)} className={`block py-3 font-fluent ${darkMode ? 'text-white/70 hover:text-white border-white/10' : 'text-black/70 hover:text-black border-black/10'} border-b last:border-0`}>
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className={`${isMobile ? 'py-16' : 'py-24'} px-4 relative z-10`}>
                <div className="max-w-6xl mx-auto text-center">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-fluent mb-6 ${darkMode ? 'bg-white/10 text-[#60CDFF]' : 'bg-[#0078D4]/10 text-[#0078D4]'}`}>
                        <Sparkles size={14} /> Windows 11 Design Language
                    </div>
                    <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-fluent font-bold mb-6 leading-tight`}>
                        Beautiful, Fluid,<br />
                        <span className="bg-gradient-to-r from-[#60CDFF] to-[#886CE4] bg-clip-text text-transparent">Modern Design</span>
                    </h1>
                    <p className={`font-fluent ${isMobile ? 'text-base' : 'text-xl'} ${darkMode ? 'text-white/60' : 'text-black/60'} mb-10 max-w-2xl mx-auto leading-relaxed`}>
                        Build stunning apps with Microsoft's Fluent Design System. Acrylic materials, smooth animations, and adaptive layouts for every platform.
                    </p>
                    <div className={`flex gap-4 justify-center ${isMobile ? 'flex-col' : ''}`}>
                        <button className="font-fluent bg-[#60CDFF] text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#60CDFF]/80 transition-colors">
                            Explore Components <ArrowRight size={20} />
                        </button>
                        <button className={`font-fluent px-8 py-4 rounded-lg font-semibold border ${darkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-black/20 text-black hover:bg-black/5'} transition-colors`}>
                            View Gallery
                        </button>
                    </div>
                </div>
            </section>

            {/* Material Showcase */}
            <section className="py-20 px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-fluent font-bold text-center mb-4`}>Material System</h2>
                    <p className={`text-center ${darkMode ? 'text-white/60' : 'text-black/60'} mb-12 max-w-xl mx-auto font-fluent`}>Layered surfaces that respond to light and depth</p>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                        {[
                            { title: 'Acrylic', desc: 'Semi-transparent material with blur effect for floating surfaces', gradient: 'from-[#60CDFF]/30 to-[#0078D4]/30' },
                            { title: 'Mica', desc: 'Subtle tinting that adapts to the desktop wallpaper', gradient: 'from-[#886CE4]/30 to-[#5C2D91]/30' },
                            { title: 'Smoke', desc: 'Light dismissible layers for dialogs and flyouts', gradient: 'from-white/20 to-white/5' },
                        ].map((item, i) => (
                            <div key={i} className={`${darkMode ? 'acrylic-dark border-white/10' : 'acrylic-light border-black/10'} border rounded-2xl p-8 fluent-glow`}>
                                <div className={`h-32 rounded-xl bg-gradient-to-br ${item.gradient} mb-6 flex items-center justify-center`}>
                                    <Layers size={40} className={darkMode ? 'text-white/40' : 'text-black/40'} />
                                </div>
                                <h3 className="font-fluent font-semibold text-xl mb-2">{item.title}</h3>
                                <p className={`font-fluent text-sm ${darkMode ? 'text-white/60' : 'text-black/60'}`}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className={`py-20 px-4 ${darkMode ? 'mica-dark' : 'mica-light'}`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-fluent font-bold text-center mb-12`}>Design Principles</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-4'} gap-6`}>
                        {[
                            { icon: Palette, title: 'Light & Color', desc: 'Dynamic themes that adapt to user preferences' },
                            { icon: Layers, title: 'Depth & Shadow', desc: 'Elevation system for visual hierarchy' },
                            { icon: Zap, title: 'Motion', desc: 'Fluid animations that feel natural' },
                            { icon: Smartphone, title: 'Responsive', desc: 'Adaptive layouts for any screen size' },
                        ].map((item, i) => (
                            <div key={i} className={`p-6 rounded-xl ${darkMode ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/10'} border transition-colors`}>
                                <item.icon size={32} className="text-[#60CDFF] mb-4" />
                                <h3 className="font-fluent font-semibold text-lg mb-2">{item.title}</h3>
                                <p className={`font-fluent text-sm ${darkMode ? 'text-white/60' : 'text-black/60'}`}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-fluent font-bold text-center mb-12`}>Get Access</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                        {[
                            { name: 'Community', price: 'Free', features: ['Core components', 'Basic themes', 'Community support'] },
                            { name: 'Pro', price: '$49', features: ['All components', 'Premium themes', 'Figma files', 'Priority support'], featured: true },
                            { name: 'Enterprise', price: 'Custom', features: ['Everything', 'Custom components', 'Design consultation', 'SLA'] },
                        ].map((plan, i) => (
                            <div key={i} className={`rounded-2xl p-8 ${plan.featured ? 'bg-gradient-to-br from-[#60CDFF] to-[#0078D4] text-white' : darkMode ? 'acrylic-dark border border-white/10' : 'acrylic-light border border-black/10'}`}>
                                <h3 className="font-fluent font-semibold text-xl mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold font-fluent mb-6">{plan.price}</div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className={`flex items-center gap-3 text-sm font-fluent ${plan.featured ? 'text-white/90' : darkMode ? 'text-white/60' : 'text-black/60'}`}>
                                            <Check size={16} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-fluent font-semibold ${plan.featured ? 'bg-white text-[#0078D4]' : 'bg-[#60CDFF] text-black'} hover:opacity-90 transition-opacity`}>
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
                    <div className={`${darkMode ? 'acrylic-dark border-white/10' : 'acrylic-light border-black/10'} border rounded-3xl p-12 fluent-glow`}>
                        <Monitor className="w-12 h-12 mx-auto mb-6 text-[#60CDFF]" />
                        <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-fluent font-bold mb-6`}>Build Beautiful Apps Today</h2>
                        <p className={`${darkMode ? 'text-white/60' : 'text-black/60'} mb-8 max-w-lg mx-auto font-fluent`}>Join thousands of designers and developers using Fluent UI.</p>
                        <button className="font-fluent bg-[#60CDFF] text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#60CDFF]/80 transition-colors">
                            Start Building
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-12 px-4 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
                <div className="max-w-6xl mx-auto">
                    <div className={`${isMobile ? 'flex flex-col gap-8' : 'flex justify-between'} mb-8`}>
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-gradient-to-br from-[#60CDFF] to-[#0078D4] rounded-lg flex items-center justify-center">
                                <Layers size={20} className="text-white" />
                            </div>
                            <span className="font-fluent font-semibold text-lg">Fluent UI</span>
                        </div>
                        <div className={`flex ${isMobile ? 'flex-wrap' : ''} gap-6 text-sm font-fluent ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
                            {['Components', 'Design', 'Develop', 'Blog', 'GitHub'].map((item) => (
                                <a key={item} href="#" className={`${darkMode ? 'hover:text-white' : 'hover:text-black'} transition-colors`}>{item}</a>
                            ))}
                        </div>
                    </div>
                    <div className={`text-center text-sm ${darkMode ? 'text-white/40' : 'text-black/40'} pt-8 border-t ${darkMode ? 'border-white/10' : 'border-black/10'} font-fluent`}>
                        © 2024 Fluent UI. Designed by Microsoft.
                    </div>
                </div>
            </footer>
        </div>
    );
};
