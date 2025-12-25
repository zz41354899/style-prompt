import { useState } from 'react';
import { Palette, Home, Search, Heart, User, Menu, X, Bell, Plus, Layers, Grid3X3, Type, Shield, Check, Zap, ArrowRight, Star, Mail } from 'lucide-react';

export const S99MaterialYou = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = deviceMode === 'mobile';

    return (
        <div className="min-h-screen bg-[#FFFBFE] font-sans text-[#1D1B20] selection:bg-[#E8DEF8] selection:text-[#1D1B20]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,300;400;500;600;700&display=swap');
                .font-m3 { font-family: 'Roboto Flex', sans-serif; }
                
                .m3-surface { background: #FFFBFE; }
                .m3-surface-variant { background: #E7E0EC; }
                .m3-primary { background: #6750A4; color: white; }
                .m3-primary-container { background: #EADDFF; color: #21005D; }
                .m3-secondary-container { background: #E8DEF8; color: #1D192B; }
                
                .m3-elevation-1 { box-shadow: 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15); }
                .m3-elevation-2 { box-shadow: 0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15); }
                
                .m3-btn {
                    border-radius: 100px;
                    font-weight: 500;
                    transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
                }
                .m3-btn:hover { box-shadow: 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15); }
                .m3-btn:active { transform: scale(0.98); }
                
                .m3-card {
                    border-radius: 28px;
                    transition: background-color 0.2s ease;
                }
                .m3-card:hover { background: #F6F3F8; }
            `}</style>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-[#FFFBFE] border-b border-[#E7E0EC]">
                <div className={`max-w-6xl mx-auto px-4 h-16 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#EADDFF] flex items-center justify-center">
                            <Palette className="w-5 h-5 text-[#6750A4]" />
                        </div>
                        <span className="font-m3 font-semibold text-lg">Material You</span>
                    </div>

                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center gap-8`}>
                        {['Features', 'Components', 'Themes', 'Docs'].map((item) => (
                            <a key={item} href="#" className="font-m3 font-medium text-[#49454F] hover:text-[#6750A4] transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="m3-btn m3-primary px-6 py-2.5 font-m3 text-sm">
                            Get Started
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`${isMobile ? 'block' : 'hidden'} p-2 text-[#49454F] hover:bg-[#E8DEF8] rounded-full transition-colors`}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="bg-[#F3EDF7] border-t border-[#E7E0EC] p-4">
                        {['Features', 'Components', 'Themes', 'Docs'].map((item) => (
                            <a key={item} href="#" onClick={() => setMenuOpen(false)} className="block py-3 font-m3 font-medium text-[#49454F] hover:text-[#6750A4] border-b border-[#E7E0EC] last:border-0">
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className={`${isMobile ? 'py-16' : 'py-24'} px-4`}>
                <div className="max-w-6xl mx-auto">
                    <div className={`${isMobile ? '' : 'flex items-center gap-16'}`}>
                        <div className={`flex-1 ${isMobile ? 'text-center mb-12' : ''}`}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EADDFF] text-[#21005D] text-sm font-m3 font-medium mb-6">
                                <Zap size={16} /> Material Design 3
                            </div>
                            <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-m3 font-bold mb-6 tracking-tight leading-tight`}>
                                Dynamic Color<br />for Every App
                            </h1>
                            <p className={`font-m3 ${isMobile ? 'text-base' : 'text-xl'} text-[#49454F] mb-10 leading-relaxed ${isMobile ? '' : 'max-w-xl'}`}>
                                Material You brings personalization to every surface. Colors derived from your wallpaper, adaptive layouts, and expressive animations.
                            </p>
                            <div className={`flex gap-4 ${isMobile ? 'justify-center flex-col' : ''}`}>
                                <button className="m3-btn m3-primary px-8 py-4 font-m3 font-semibold flex items-center justify-center gap-2">
                                    Start Building <ArrowRight size={20} />
                                </button>
                                <button className="m3-btn px-8 py-4 font-m3 font-semibold text-[#6750A4] border border-[#79747E]">
                                    View Components
                                </button>
                            </div>
                        </div>

                        {/* Hero Visual */}
                        <div className={`flex-1 ${isMobile ? 'px-4' : ''}`}>
                            <div className="m3-card bg-white m3-elevation-2 p-6 relative overflow-hidden"
                                style={{ background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 50%, #D0BCFF 100%)' }}>
                                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                                <div className="relative z-10 text-white">
                                    <div className="text-xs font-m3 font-medium opacity-80 mb-2">MATERIAL YOU</div>
                                    <div className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-m3 font-bold mb-4`}>Expressive Design</div>
                                    <div className="flex gap-3 mt-6">
                                        {['#6750A4', '#625B71', '#7D5260'].map((color, i) => (
                                            <div key={i} className="w-10 h-10 rounded-2xl shadow-lg" style={{ background: color }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 bg-[#F3EDF7]">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-m3 font-bold text-center mb-4`}>Key Features</h2>
                    <p className="text-center text-[#49454F] mb-12 max-w-xl mx-auto font-m3">Everything you need to build beautiful, personalized interfaces</p>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-4'} gap-4`}>
                        {[
                            { icon: Palette, title: 'Dynamic Colors', desc: 'Colors extracted from user wallpapers', color: '#6750A4', bg: '#EADDFF' },
                            { icon: Grid3X3, title: '4dp Grid', desc: 'Consistent spacing and alignment', color: '#7D5260', bg: '#FFD8E4' },
                            { icon: Layers, title: 'Elevation', desc: 'Tonal color-based shadows', color: '#006A6A', bg: '#A8EFF0' },
                            { icon: Type, title: 'Type Scale', desc: 'Roboto Flex variable font', color: '#7D5700', bg: '#FFDDB3' },
                        ].map((item, i) => (
                            <div key={i} className="m3-card bg-white p-6 m3-elevation-1">
                                <div className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center" style={{ backgroundColor: item.bg, color: item.color }}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-m3 font-semibold text-lg mb-2">{item.title}</h3>
                                <p className="font-m3 text-sm text-[#49454F]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Components Showcase */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-m3 font-bold text-center mb-12`}>Component Library</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
                        {/* Buttons Card */}
                        <div className="m3-card bg-white p-8 m3-elevation-1">
                            <h3 className="font-m3 font-semibold text-lg mb-6">Buttons</h3>
                            <div className="flex flex-wrap gap-3">
                                <button className="m3-btn m3-primary px-6 py-2.5 text-sm">Filled</button>
                                <button className="m3-btn px-6 py-2.5 text-sm text-[#6750A4] border border-[#79747E]">Outlined</button>
                                <button className="m3-btn px-6 py-2.5 text-sm text-[#6750A4]">Text</button>
                                <button className="m3-btn m3-secondary-container px-6 py-2.5 text-sm">Tonal</button>
                            </div>
                        </div>

                        {/* Chips Card */}
                        <div className="m3-card bg-white p-8 m3-elevation-1">
                            <h3 className="font-m3 font-semibold text-lg mb-6">Chips</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Filter', 'Input', 'Suggestion', 'Assist'].map((chip, i) => (
                                    <span key={chip} className={`px-4 py-2 rounded-full text-sm font-m3 font-medium cursor-pointer transition-colors ${i === 0 ? 'bg-[#E8DEF8] text-[#6750A4]' : 'bg-[#E7E0EC] text-[#49454F] hover:bg-[#D0BCFF]/30'
                                        }`}>
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* FAB Card */}
                        <div className="m3-card bg-white p-8 m3-elevation-1">
                            <h3 className="font-m3 font-semibold text-lg mb-6">FABs</h3>
                            <div className="flex items-end gap-4">
                                <button className="w-14 h-14 rounded-2xl bg-[#EADDFF] text-[#21005D] flex items-center justify-center m3-elevation-1">
                                    <Plus size={24} />
                                </button>
                                <button className="w-16 h-16 rounded-[28px] bg-[#6750A4] text-white flex items-center justify-center m3-elevation-2">
                                    <Plus size={28} />
                                </button>
                                <button className="h-14 px-6 rounded-2xl bg-[#EADDFF] text-[#21005D] flex items-center gap-3 m3-elevation-1 font-m3 font-medium">
                                    <Plus size={20} /> Create
                                </button>
                            </div>
                        </div>

                        {/* Navigation Card */}
                        <div className="m3-card bg-white p-8 m3-elevation-1">
                            <h3 className="font-m3 font-semibold text-lg mb-6">Navigation</h3>
                            <div className="flex justify-around bg-[#F3EDF7] rounded-2xl p-2">
                                {[
                                    { icon: Home, label: 'Home', active: true },
                                    { icon: Search, label: 'Search' },
                                    { icon: Heart, label: 'Saved' },
                                    { icon: User, label: 'Profile' },
                                ].map((item, i) => (
                                    <button key={i} className="flex flex-col items-center py-2 px-4 rounded-2xl">
                                        <div className={`p-1 rounded-full ${item.active ? 'bg-[#EADDFF]' : ''}`}>
                                            <item.icon size={20} className={item.active ? 'text-[#6750A4]' : 'text-[#49454F]'} />
                                        </div>
                                        <span className={`text-xs mt-1 font-m3 font-medium ${item.active ? 'text-[#6750A4]' : 'text-[#49454F]'}`}>
                                            {item.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 bg-[#F3EDF7]">
                <div className="max-w-5xl mx-auto">
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-m3 font-bold text-center mb-12`}>Pricing</h2>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
                        {[
                            { name: 'Community', price: 'Free', features: ['Open source', 'Basic components', 'Community support'] },
                            { name: 'Pro', price: '$29/mo', features: ['All components', 'Premium themes', 'Priority support'], featured: true },
                            { name: 'Enterprise', price: 'Custom', features: ['Everything', 'Custom themes', 'SLA guarantee'] },
                        ].map((plan, i) => (
                            <div key={i} className={`m3-card p-8 ${plan.featured ? 'bg-[#6750A4] text-white' : 'bg-white'} m3-elevation-1`}>
                                <h3 className="font-m3 font-semibold text-xl mb-2">{plan.name}</h3>
                                <div className={`text-3xl font-m3 font-bold mb-6 ${plan.featured ? '' : 'text-[#6750A4]'}`}>{plan.price}</div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className={`flex items-center gap-3 text-sm ${plan.featured ? 'text-white/90' : 'text-[#49454F]'}`}>
                                            <Check size={16} className={plan.featured ? 'text-white' : 'text-[#6750A4]'} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 m3-btn font-m3 font-medium ${plan.featured ? 'bg-white text-[#6750A4]' : 'm3-primary'}`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="m3-card bg-[#6750A4] text-white p-12 text-center m3-elevation-2">
                        <Mail className="w-10 h-10 mx-auto mb-6" />
                        <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-m3 font-bold mb-4`}>Stay Updated</h2>
                        <p className="text-white/80 mb-8 max-w-lg mx-auto">Get the latest Material Design news and updates delivered to your inbox.</p>
                        <div className={`flex ${isMobile ? 'flex-col' : ''} gap-4 max-w-md mx-auto`}>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-6 py-4 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white font-m3"
                            />
                            <button className="px-8 py-4 bg-white text-[#6750A4] rounded-full font-m3 font-semibold hover:bg-white/90 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 bg-[#F3EDF7] border-t border-[#E7E0EC]">
                <div className="max-w-6xl mx-auto">
                    <div className={`${isMobile ? 'flex flex-col gap-8' : 'flex justify-between'} mb-8`}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-[#EADDFF] flex items-center justify-center">
                                <Palette className="w-5 h-5 text-[#6750A4]" />
                            </div>
                            <span className="font-m3 font-semibold text-lg">Material You</span>
                        </div>
                        <div className={`flex ${isMobile ? 'flex-wrap' : ''} gap-6 text-sm text-[#49454F] font-m3`}>
                            {['Components', 'Themes', 'Guidelines', 'Blog', 'GitHub'].map((item) => (
                                <a key={item} href="#" className="hover:text-[#6750A4] transition-colors">{item}</a>
                            ))}
                        </div>
                    </div>
                    <div className="text-center text-sm text-[#79747E] pt-8 border-t border-[#E7E0EC] font-m3">
                        © 2024 Material You. Designed with ❤️ for everyone.
                    </div>
                </div>
            </footer>
        </div>
    );
};
