import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Square, Circle, Triangle, Zap, Sparkles, Star, User } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S26Flat2Pro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#F8F9FA',
        surface: '#FFFFFF',
        text: '#212529',
        muted: '#6C757D',
        primary: '#4361EE',
        secondary: '#3F37C9',
        accent: '#4895EF',
        success: '#4CC9F0',
        warning: '#F72585',
        orange: '#FF9E00'
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Outfit", "Inter", sans-serif' }}>

            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-8">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                            style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
                            <Square size={20} color="white" strokeWidth={3} />
                        </div>
                        <span className="text-xl font-bold tracking-tight">Flat<span style={{ color: colors.primary }}>UI</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Features', 'Pricing', 'About'].map((item) => (
                                <span key={item} className="text-sm font-bold cursor-pointer transition-colors hover:text-blue-600"
                                    style={{ color: colors.muted }}>
                                    {item}
                                </span>
                            ))}
                            <button className="px-6 py-2.5 rounded-lg font-bold text-white transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 active:shadow-md"
                                style={{ background: colors.primary, boxShadow: `0 4px 14px 0 rgba(67, 97, 238, 0.39)` }}>
                                Get Started
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 shadow-xl animate-in slide-in-from-top-4">
                        {['Features', 'Pricing', 'About'].map((item) => (
                            <div key={item} className="py-4 font-bold text-lg border-b border-gray-50 last:border-0" style={{ color: colors.muted }}>{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 rounded-xl font-bold text-white shadow-lg" style={{ background: colors.primary }}>
                            Get Started
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="pt-20 pb-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-transform hover:scale-105"
                        style={{ backgroundColor: '#E0F2FE', color: colors.primary }}>
                        <Sparkles size={14} className="fill-current" />
                        New System v2.0
                    </div>

                    <h1 className="mb-8 font-extrabold leading-tight tracking-tight text-5xl md:text-8xl">
                        Clean. Colorful. <br />
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.warning})` }}>
                            Flat 2.0 Design.
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto mb-12 text-xl md:text-2xl font-medium leading-relaxed" style={{ color: colors.muted }}>
                        Depth without complexity. Shadows without clutter. The perfect balance for modern interfaces.
                    </p>

                    <div className="flex gap-4 justify-center flex-col sm:flex-row">
                        <button className="px-10 py-5 rounded-xl font-bold text-lg text-white flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                            style={{ background: colors.primary, boxShadow: `0 10px 20px -10px ${colors.primary}` }}>
                            Start Building <ArrowRight size={20} />
                        </button>
                        <button className="px-10 py-5 rounded-xl font-bold text-lg bg-white border-2 border-gray-200 transition-all hover:border-gray-300 hover:bg-gray-50 text-gray-700">
                            Documentation
                        </button>
                    </div>

                    {/* Hero Visuals */}
                    <div className="mt-24 grid gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
                        {[
                            { color: colors.primary, icon: Square, label: "Structure" },
                            { color: colors.success, icon: Circle, label: "Access" },
                            { color: colors.warning, icon: Triangle, label: "Impact" }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-50 pointer-events-none" />
                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg transition-transform group-hover:rotate-12 group-hover:scale-110"
                                    style={{ background: item.color }}>
                                    <item.icon size={40} color="white" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.label}</h3>
                                <div className="h-2 w-12 rounded-full mx-auto opacity-20" style={{ background: item.color }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 bg-white relative">
                {/* Decorative background circle */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Designed for Focus</h2>
                        <p className="text-xl font-medium max-w-2xl mx-auto" style={{ color: colors.muted }}>Everything you need to build consistent, clean user interfaces.</p>
                    </div>

                    <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
                        {[
                            { icon: Zap, title: 'Lightning Fast', color: colors.orange, desc: "Optimized for speed with zero bloat." },
                            { icon: Star, title: 'Pixel Perfect', color: colors.warning, desc: "Every pixel aligned to the grid." },
                            { icon: Sparkles, title: 'Modern A11y', color: colors.success, desc: "Accessible by default for everyone." }
                        ].map((item) => (
                            <div key={item.title} className="p-10 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 shadow-none hover:shadow-2xl transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300"
                                    style={{ background: item.color }}>
                                    <item.icon size={32} color="white" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-lg leading-relaxed" style={{ color: colors.muted }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Card Slider Style */}
            <section className="py-24 px-6" style={{ background: '#F0F4F8' }}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-4xl md:text-5xl font-black mb-16">Trusted by Makers</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah J.", role: "Product Designer", text: "The cleanest UI kit I've ever used. It makes my apps look instantly professional." },
                            { name: "David K.", role: "Developer", text: "Flat 2.0 is the real deal. Simple, effective, and beautiful." },
                            { name: "Emily R.", role: "Founder", text: "Our conversion rates doubled after switching to this design system." }
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                        <User size={24} className="text-gray-400" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">{t.name}</div>
                                        <div className="text-sm font-semibold opacity-60 text-blue-600 uppercase tracking-wider">{t.role}</div>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <p className="text-lg font-medium leading-relaxed text-gray-600">"{t.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-4xl md:text-5xl font-black mb-16">Simple Pricing</h2>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
                        {[
                            { name: 'Starter', price: '$0', hot: false },
                            { name: 'Pro', price: '$29', hot: true },
                            { name: 'Team', price: '$99', hot: false }
                        ].map((plan) => (
                            <div key={plan.name} className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${plan.hot ? 'hover:-translate-y-3' : 'hover:-translate-y-1'}`}
                                style={{
                                    borderColor: plan.hot ? colors.primary : '#E5E7EB',
                                    boxShadow: plan.hot ? `0 20px 40px -10px ${colors.primary}40` : 'none'
                                }}>
                                {plan.hot && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-sm font-bold text-white shadow-lg"
                                        style={{ background: colors.primary }}>
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                                <div className="text-5xl font-black mb-8">{plan.price}<span className="text-base font-bold text-gray-400">/mo</span></div>

                                <ul className="space-y-4 mb-10">
                                    {['Unlimited Projects', 'Cloud Storage', '24/7 Support', 'Analytics'].map((f) => (
                                        <li key={f} className="flex items-center gap-3 font-medium text-gray-600">
                                            <div className="p-1 rounded bg-green-100 text-green-600"><Check size={14} strokeWidth={4} /></div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 rounded-xl font-bold text-lg transition-all active:scale-95"
                                    style={{
                                        background: plan.hot ? colors.primary : '#F3F4F6',
                                        color: plan.hot ? 'white' : colors.text
                                    }}>
                                    Choose {plan.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6" style={{ background: '#F8F9FA' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-4xl font-black mb-16">Common Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'What is Flat 2.0 design?', a: 'Flat 2.0 is an evolution of flat design that adds subtle depth cues while maintaining clean aesthetics.' },
                            { q: 'Is it responsive?', a: 'Yes, all components are fully responsive and mobile-first.' },
                            { q: 'Can I customize colors?', a: 'Absolutely. Full color customization is built into the system.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <button className="w-full flex items-center justify-between p-6 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">{item.q}</span>
                                    <ChevronDown size={24} className={`text-gray-400 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180 text-blue-600' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="p-6 pt-0 text-lg leading-relaxed text-gray-600 animate-in slide-in-from-top-2 fade-in">
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
                <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] text-center overflow-hidden relative"
                    style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>

                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-white relative z-10">Start for free today.</h2>
                    <p className="mb-12 text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto relative z-10">
                        Join the design revolution with Flat 2.0. No credit card required.
                    </p>

                    <button className="px-12 py-5 rounded-2xl font-bold text-lg bg-white text-blue-600 transition-all hover:scale-105 hover:shadow-2xl relative z-10">
                        Get Your Account
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-100 py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ background: colors.primary }}>
                            <Square size={20} strokeWidth={3} />
                        </div>
                        <span className="font-bold text-xl">FlatUI</span>
                    </div>

                    <div className="flex gap-8 text-sm font-bold text-gray-500">
                        <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
                    </div>

                    <span className="text-sm font-medium text-gray-400">© 2025 FlatUI System.</span>
                </div>
            </footer>
        </div>
    );
};
