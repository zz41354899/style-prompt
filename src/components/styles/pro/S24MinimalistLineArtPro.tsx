import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Square, Triangle, Grid3X3, Shield, Ruler, Quote } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S24MinimalistLineArtPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = {
        bg: '#ffffff',
        surface: '#FAFAFA',
        text: '#000000',
        muted: '#525252',
        accent: '#000000',
        border: '#E5E5E5'
    };

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Inter", sans-serif' }}>

            {/* Background Grid - Ultra subtle */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(${colors.border} 1px, transparent 1px), linear-gradient(90deg, ${colors.border} 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                    opacity: 0.5
                }}
            />

            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-8">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-10 h-10 border border-black flex items-center justify-center transition-all duration-500 group-hover:rotate-45 bg-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                            <Grid3X3 size={20} className="relative z-10 transition-colors duration-500 group-hover:text-white" />
                        </div>
                        <span className="text-xl font-light tracking-widest uppercase">Line<span className="font-bold">Art</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-12">
                            {['Work', 'Service', 'About'].map((item) => (
                                <span key={item} className="text-sm tracking-[0.2em] font-medium cursor-pointer relative group uppercase hover:opacity-50 transition-opacity">
                                    {item}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full" />
                                </span>
                            ))}
                            <button className="px-8 py-3 text-xs font-bold tracking-[0.2em] border border-black hover:bg-black hover:text-white transition-all duration-500 uppercase">
                                Start Project
                            </button>
                        </nav>
                    )}

                    {isMobile && (
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border border-transparent hover:border-black transition-all">
                            {menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
                        </button>
                    )}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-8 animate-in slide-in-from-top-4">
                        <div className="flex flex-col gap-6 items-center">
                            {['Work', 'Service', 'About'].map((item) => (
                                <div key={item} className="text-lg tracking-[0.2em] uppercase">{item}</div>
                            ))}
                            <button className="w-full py-4 border border-black text-xs font-bold tracking-[0.2em] uppercase mt-4">
                                Start Project
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 border-b border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block mb-12">
                        <div className="w-[1px] h-24 bg-black mx-auto mb-8" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase border border-black px-4 py-2">
                            Est. 2025
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-thin tracking-tighter mb-12 leading-[0.9]">
                        PURE <br />
                        <span className="font-bold italic">FORM</span>
                    </h1>

                    <p className="max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-16 text-gray-500">
                        Stripped back to the essential. We create digital products that honor function through form.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <button className="group relative px-12 py-5 overflow-hidden border border-black">
                            <div className="absolute inset-0 w-full h-full bg-black translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0" />
                            <span className="relative z-10 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-white flex items-center gap-2">
                                View Case Studies <ArrowRight size={14} />
                            </span>
                        </button>
                        <button className="px-12 py-5 text-xs font-bold tracking-[0.2em] uppercase border border-transparent hover:border-black transition-all">
                            Our Philosophy
                        </button>
                    </div>
                </div>

                {/* Animated Lines Decoration */}
                <svg className="absolute top-1/2 left-10 w-32 h-32 opacity-20 pointer-events-none hidden md:block" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="black" strokeWidth="0.5" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="black" strokeWidth="0.5" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="black" strokeWidth="0.5" />
                </svg>
                <svg className="absolute bottom-20 right-10 w-48 h-48 opacity-20 pointer-events-none hidden md:block animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                    <rect x="25" y="25" width="50" height="50" fill="none" stroke="black" strokeWidth="0.5" />
                    <rect x="35" y="35" width="30" height="30" fill="none" stroke="black" strokeWidth="0.5" transform="rotate(45 50 50)" />
                </svg>
            </section>

            {/* Features (Grid) */}
            <section className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    {[
                        { icon: Square, title: 'Structure', desc: 'Rigid grid systems ensuring perfect alignment.' },
                        { icon: Triangle, title: 'Balance', desc: 'Asymmetric layouts that maintain equilibrium.' },
                        { icon: Shield, title: 'Integrity', desc: 'Code that is as clean as the visual design.' }
                    ].map((item, i) => (
                        <div key={i} className="p-16 group hover:bg-gray-50 transition-colors duration-500">
                            <item.icon size={32} strokeWidth={1} className="mb-8" />
                            <h3 className="text-xl font-medium tracking-widest uppercase mb-4">{item.title}</h3>
                            <p className="font-light text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials - Minimal Slider style */}
            <section className="py-32 px-6 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <Quote size={48} className="mx-auto mb-12 opacity-50" />
                    <p className="text-2xl md:text-4xl font-light leading-tight mb-12 italic">
                        "The absolute precision in their work is unmatched. They turned our chaotic platform into a Zen garden of usability."
                    </p>
                    <div className="font-bold tracking-[0.2em] uppercase text-sm opacity-50">
                        Maria S. — Director of Design
                    </div>
                </div>
            </section>

            {/* Pricing - Table Style */}
            <section className="py-32 px-6 border-b border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-20 text-center">
                        <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4">Investment</h2>
                        <div className="w-12 h-[1px] bg-black mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: 'Essential', price: '2,500', features: ['Concept Phase', 'Basic Grid', 'Mobile Response'] },
                            { name: 'Standard', price: '5,000', features: ['Interaction Design', 'Advanced Layouts', 'Design System'], hot: true },
                            { name: 'Complete', price: '9,500', features: ['Full Product', 'Development', 'Maintenance'] }
                        ].map((plan) => (
                            <div key={plan.name} className={`relative p-8 border ${plan.hot ? 'border-black bg-gray-50' : 'border-gray-200'} transition-all hover:-translate-y-2`}>
                                {plan.hot && <div className="absolute top-0 right-0 bg-black text-white text-[10px] uppercase font-bold px-3 py-1 tracking-widest">Selected</div>}
                                <h3 className="text-lg font-light tracking-widest uppercase mb-8">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-2">${plan.price}</div>
                                <div className="text-xs text-gray-400 mb-12 tracking-widest uppercase">Starting at</div>

                                <ul className="space-y-6 mb-12">
                                    {plan.features.map(f => (
                                        <li key={f} className="text-sm font-medium flex items-center gap-3">
                                            <span className="w-1 h-1 bg-black rounded-full" /> {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 text-xs font-bold tracking-[0.2em] uppercase border transition-all ${plan.hot ? 'bg-black text-white border-black hover:bg-transparent hover:text-black' : 'border-black hover:bg-black hover:text-white'}`}>
                                    Select
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ - Accordion Minimal */}
            <section className="py-32 px-6 bg-gray-50 border-b border-gray-100">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-16 text-center">Inquiries</h2>

                    <div className="space-y-0 divide-y divide-gray-200 border-y border-gray-200">
                        {[
                            { q: "What is your design process?", a: "We strip away the non-essential. We start with content and structure, then apply visual form." },
                            { q: "Do you work with startups?", a: "Yes, we partner with visionary founders who value design integrity." },
                            { q: "Can you develop the backend too?", a: "We focus on frontend excellence but partner with backend experts." }
                        ].map((item, i) => (
                            <div key={i} className="bg-transparent">
                                <button className="w-full py-8 text-left flex justify-between items-center group"
                                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="text-lg font-medium transition-opacity group-hover:opacity-60">{item.q}</span>
                                    <span className={`text-2xl font-light transition-transform duration-300 ${expandedFaq === i ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                {expandedFaq === i && (
                                    <div className="pb-8 text-gray-500 font-light leading-relaxed animate-in fade-in slide-in-from-top-1">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-thin tracking-tighter mb-12">
                        Let's build something <br />
                        <span className="font-bold">timeless.</span>
                    </h2>
                    <button className="px-16 py-6 bg-black text-white text-sm font-bold tracking-[0.3em] uppercase hover:scale-105 transition-transform duration-500">
                        Initiate
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-100 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Grid3X3 size={16} />
                        <span className="text-sm font-bold tracking-[0.2em] uppercase">LineArt</span>
                    </div>

                    <div className="flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
                        <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
                        <a href="#" className="hover:opacity-50 transition-opacity">Twitter</a>
                        <a href="#" className="hover:opacity-50 transition-opacity">Email</a>
                    </div>

                    <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                        © 2025 Minimal Systems.
                    </div>
                </div>
            </footer>
        </div>
    );
};
