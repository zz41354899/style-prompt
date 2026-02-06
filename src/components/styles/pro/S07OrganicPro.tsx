import { useState } from 'react';
import {
    Zap, Globe, Shield, Activity, Cpu, Code, Server,
    ChevronDown, ArrowRight, Menu, X, Play, Music, Radio
} from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S07OrganicPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePlan, setActivePlan] = useState<'monthly' | 'lifetime'>('monthly');

    // S07 Organic Design Tokens
    const theme = {
        colors: {
            bg: '#FDFBF7',       // Cream
            primary: '#2C3333',  // Charcoal
            secondary: '#4A5D4F',// Sage Green
            accent: '#C46D5E',   // Terracotta
            surface: '#F4F1EA',  // Warm Grey/Beige
            text: {
                main: '#2C3333',
                muted: '#6B705C'
            }
        }
    };

    return (
        <div
            className="min-h-screen relative overflow-hidden font-sans text-[#2C3333] selection:bg-[#C46D5E] selection:text-white"
            style={{ backgroundColor: theme.colors.bg }}
        >
            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

                {/* Organic Blobs */}
                <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#4A5D4F] rounded-full mix-blend-multiply filter blur-[80px] opacity-10 animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#C46D5E] rounded-full mix-blend-multiply filter blur-[80px] opacity-10 animate-blob animation-delay-2000"></div>
            </div>

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#2C3333]/5">
                <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#2C3333] flex items-center justify-center text-[#FDFBF7]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
                        </div>
                        <span className="text-2xl font-serif font-bold tracking-tight text-[#2C3333]">
                            Oasis
                        </span>
                    </div>

                    {!isMobile && (
                        <div className="flex items-center gap-12 font-medium text-[#6B705C]">
                            {['Essence', 'Flow', 'Harmony', 'Growth'].map(item => (
                                <a key={item} href="#" className="hover:text-[#C46D5E] transition-colors relative group">
                                    {item}
                                    <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-[#C46D5E] group-hover:w-full transition-all duration-300 -translate-x-1/2" />
                                </a>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center gap-6">
                        {!isMobile && (
                            <button className="px-8 py-3 rounded-full bg-[#2C3333] text-[#FDFBF7] font-medium hover:bg-[#4A5D4F] transition-colors shadow-lg shadow-[#2C3333]/10">
                                Begin Journey
                            </button>
                        )}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#2C3333]">
                                {menuOpen ? <X /> : <Menu />}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="bg-[#FDFBF7] border-t border-[#2C3333]/5 p-8 flex flex-col gap-6 shadow-xl">
                        {['Essence', 'Flow', 'Harmony', 'Growth'].map(item => (
                            <a key={item} href="#" className="text-xl font-serif text-[#2C3333]">{item}</a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 pt-24 pb-32">
                <div className={`max-w-7xl mx-auto px-8 grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-20 items-center`}>
                    <div>
                        <span className="inline-block text-[#C46D5E] font-medium tracking-widest uppercase text-sm mb-6">
                            Natural Intelligence
                        </span>
                        <h1 className={`${isMobile ? 'text-5xl' : 'text-7xl'} font-serif font-medium leading-[1.1] mb-8 text-[#2C3333]`}>
                            Restore <br />
                            <i className="font-light text-[#4A5D4F]">Balance</i> to <br />
                            Your Flow.
                        </h1>
                        <p className="text-xl text-[#6B705C] mb-12 max-w-md leading-relaxed">
                            A digital sanctuary for your ideas. Cultivate your creativity in an environment designed for peace and focus.
                        </p>
                        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6`}>
                            <button className="px-8 py-4 bg-[#C46D5E] text-white rounded-full font-medium hover:bg-[#A85B4E] transition-colors shadow-xl shadow-[#C46D5E]/20">
                                Start Growing
                            </button>
                            <button className="px-8 py-4 text-[#2C3333] font-medium flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full border border-[#2C3333]/20 flex items-center justify-center group-hover:border-[#C46D5E] group-hover:text-[#C46D5E] transition-all">
                                    <Play size={16} fill="currentColor" />
                                </div>
                                Watch Film
                            </button>
                        </div>
                    </div>

                    {/* Hero Visual - Organic Shapes */}
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl shadow-[#4A5D4F]/20">
                            <img
                                src="https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=2574&auto=format&fit=crop"
                                alt="Abstract Organic Form"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3333]/40 to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8 bg-[#FDFBF7]/90 backdrop-blur p-6 rounded-3xl border border-white/50">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[#4A5D4F] flex items-center justify-center text-white">
                                        <Activity size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-[#6B705C]">Daily Rhythm</div>
                                        <div className="text-lg font-serif text-[#2C3333]">Optimal Flow State</div>
                                    </div>
                                </div>
                                <div className="h-16 flex items-end justify-between gap-1">
                                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                        <div key={i} className="w-full bg-[#E5E0D5] rounded-t-sm" style={{ height: '100%' }}>
                                            <div className="w-full bg-[#C46D5E] rounded-t-sm transition-all duration-1000" style={{ height: `${h}%` }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating Element */}
                        <div className="absolute -bottom-12 -right-12 bg-[#F4F1EA] p-8 rounded-[2rem] shadow-xl border border-white/50 hidden md:block">
                            <div className="text-4xl font-serif text-[#2C3333] mb-1">2.4m</div>
                            <div className="text-[#6B705C] text-sm">Mindful Users</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features (Values) */}
            <section className="relative z-10 py-32 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-24">
                        <span className="text-[#C46D5E] uppercase tracking-widest text-sm font-medium mb-4 block">Core Principles</span>
                        <h2 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-serif text-[#2C3333] mb-8`}>
                            Cultivated for <i className="font-light text-[#4A5D4F]">Clarity</i>
                        </h2>
                        <div className="h-px w-24 bg-[#C46D5E] mx-auto" />
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-12`}>
                        {[
                            { icon: Globe, title: 'Sustainable Growth', desc: 'Codebase architecture designed to scale naturally with your needs, reducing technical debt.' },
                            { icon: Shield, title: 'Visual Harmony', desc: 'A unified design system that brings peace and consistency to every interaction.' },
                            { icon: Zap, title: 'Fluid Performance', desc: 'Lightweight interactions that feel as natural as breathing.' }
                        ].map((feature, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-[#F4F1EA] hover:bg-white transition-all shadow-sm hover:shadow-xl hover:shadow-[#4A5D4F]/10 hover:-translate-y-2 duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-[#D6D0C4] flex items-center justify-center mb-8 text-[#2C3333] group-hover:bg-[#4A5D4F] group-hover:text-white transition-colors duration-500 rotate-3 group-hover:rotate-0">
                                    <feature.icon strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-serif text-[#2C3333] mb-4">{feature.title}</h3>
                                <p className="text-[#6B705C] leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bento Grid / Mood Board */}
            <section className="relative z-10 py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-12 grid-rows-2'} gap-8 h-auto md:h-[700px]`}>
                        {/* Large Quote Card */}
                        <div className="md:col-span-6 md:row-span-2 rounded-[3rem] bg-[#2C3333] p-12 flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A5D4F] rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity" />
                            <div className="relative z-10">
                                <div className="text-[#FDFBF7]/50 uppercase tracking-widest text-xs mb-8">Philosophy</div>
                                <blockquote className="text-4xl md:text-5xl font-serif text-[#FDFBF7] leading-tight">
                                    "Simplicity is the ultimate sophistication. Nature does not hurry, yet everything is accomplished."
                                </blockquote>
                            </div>
                            <div className="flex items-center gap-4 text-[#FDFBF7]/60">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                                    <span className="font-serif italic">L</span>
                                </div>
                                <div className="text-sm">
                                    <div>Leonardo Da Vinci</div>
                                    <div className="text-white/30">Master Architect</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Card */}
                        <div className="md:col-span-3 md:row-span-2 rounded-[3rem] overflow-hidden relative group shadow-2xl shadow-[#C46D5E]/10">
                            <img
                                src="https://images.unsplash.com/photo-1596328574345-2b22bb8fa810?q=80&w=2574&auto=format&fit=crop"
                                alt="Pottery Texture"
                                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-[#2C3333]/10 group-hover:bg-transparent transition-colors" />
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-[#2C3333]">
                                TEXTURE_01
                            </div>
                        </div>

                        {/* Stat Card A */}
                        <div className="md:col-span-3 bg-[#E8E2D2] rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-[#D6D0C4] transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full bg-[#C46D5E] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Activity size={18} />
                                </div>
                                <span className="text-[#6B705C] text-xs font-bold uppercase">Focus Time</span>
                            </div>
                            <div>
                                <div className="text-4xl font-serif text-[#2C3333] mb-1">4.5h</div>
                                <div className="w-full bg-[#2C3333]/10 h-1 rounded-full overflow-hidden">
                                    <div className="bg-[#2C3333] h-full w-[75%]" />
                                </div>
                            </div>
                        </div>

                        {/* Stat Card B */}
                        <div className="md:col-span-3 bg-[#C46D5E] rounded-[2.5rem] p-8 flex flex-col justify-between text-[#FDFBF7] relative overflow-hidden group">
                            <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-white rounded-full mix-blend-overlay blur-xl opacity-20 group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10">
                                <div className="text-white/70 text-xs font-bold uppercase mb-2">Projects in Bloom</div>
                                <div className="text-5xl font-serif">12</div>
                            </div>
                            <div className="relative z-10 flex -space-x-2">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#C46D5E] bg-white/20 backdrop-blur" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing (Membership) */}
            <section className="relative z-10 py-32 bg-[#2C3333] text-[#FDFBF7]">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-8">
                        <div>
                            <span className="text-[#C46D5E] uppercase tracking-widest text-sm font-medium mb-4 block">The Garden</span>
                            <h2 className="text-5xl font-serif">Cultivate Your Craft</h2>
                        </div>
                        <div className="hidden md:block text-right text-white/50 bg-[#FDFBF7]/5 px-6 py-4 rounded-full">
                            <span className="block text-xs uppercase tracking-widest mb-1">Current Cycle</span>
                            <span className="font-serif italic">Spring 2024</span>
                        </div>
                    </div>

                    <div className="flex justify-center mb-16">
                        <div className="bg-white/5 p-2 rounded-full flex gap-2 backdrop-blur-sm">
                            {['Monthly', 'Annually'].map(bill => (
                                <button
                                    key={bill}
                                    onClick={() => setActivePlan(bill.toLowerCase() as any)}
                                    className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activePlan === bill.toLowerCase() ? 'bg-[#FDFBF7] text-[#2C3333]' : 'text-white/50 hover:text-white'}`}
                                >
                                    {bill}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
                        {/* Seed */}
                        <div className="p-10 rounded-[2.5rem] bg-[#FDFBF7]/5 border border-white/10 hover:bg-[#FDFBF7]/10 transition-colors">
                            <h3 className="text-2xl font-serif mb-2">Seed</h3>
                            <div className="text-white/50 text-sm mb-8">For personal growth</div>
                            <div className="text-5xl font-serif mb-8">$0</div>
                            <ul className="space-y-4 mb-10 text-sm text-white/70">
                                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#4A5D4F]" /> Essential Tools</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#4A5D4F]" /> Community Access</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#4A5D4F]" /> 1 Project</li>
                            </ul>
                            <button className="w-full py-4 rounded-full border border-white/20 font-bold uppercase tracking-widest hover:bg-[#FDFBF7] hover:text-[#2C3333] transition-all">
                                Plant Seed
                            </button>
                        </div>

                        {/* Bloom */}
                        <div className="p-10 rounded-[2.5rem] bg-[#C46D5E] text-[#FDFBF7] relative transform md:-translate-y-8 shadow-2xl shadow-[#C46D5E]/20">
                            <div className="absolute top-6 right-6">
                                <Activity className="text-[#FDFBF7]" />
                            </div>
                            <h3 className="text-2xl font-serif mb-2">Bloom</h3>
                            <div className="text-[#FDFBF7]/80 text-sm mb-8">For flourishing creators</div>
                            <div className="text-5xl font-serif mb-8">
                                {activePlan === 'monthly' ? '$24' : '$199'}
                                <span className="text-lg opacity-50 font-sans ml-1">/{activePlan === 'monthly' ? 'mo' : 'yr'}</span>
                            </div>
                            <ul className="space-y-4 mb-10 text-sm">
                                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FDFBF7]" /> Unlimited Projects</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FDFBF7]" /> Advanced Analytics</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FDFBF7]" /> Priority Support</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FDFBF7]" /> Collaboration Tools</li>
                            </ul>
                            <button className="w-full py-4 rounded-full bg-[#FDFBF7] text-[#C46D5E] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg">
                                Start Blooming
                            </button>
                        </div>

                        {/* Grove */}
                        <div className="p-10 rounded-[2.5rem] bg-[#FDFBF7]/5 border border-white/10 hover:bg-[#FDFBF7]/10 transition-colors">
                            <h3 className="text-2xl font-serif mb-2">Grove</h3>
                            <div className="text-white/50 text-sm mb-8">For teams & ecosystems</div>
                            <div className="text-5xl font-serif mb-8">
                                {activePlan === 'monthly' ? '$99' : '$899'}
                                <span className="text-lg opacity-50 font-sans ml-1">/{activePlan === 'monthly' ? 'mo' : 'yr'}</span>
                            </div>
                            <ul className="space-y-4 mb-10 text-sm text-white/70">
                                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#4A5D4F]" /> Admin Controls</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#4A5D4F]" /> SSO Integration</li>
                                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#4A5D4F]" /> Dedicated Manager</li>
                            </ul>
                            <button className="w-full py-4 rounded-full border border-white/20 font-bold uppercase tracking-widest hover:bg-[#FDFBF7] hover:text-[#2C3333] transition-all">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-[#2C3333]/5 bg-[#FDFBF7] pt-24 pb-12 text-[#2C3333]">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
                        <div className="col-span-2">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                                <span className="text-2xl font-serif font-bold">Oasis.</span>
                            </div>
                            <p className="text-[#6B705C] max-w-sm mx-auto md:mx-0 leading-relaxed">
                                Designing digital environments that respect human attention and foster natural creativity.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Ecosystem</h4>
                            <ul className="space-y-4 text-[#6B705C]">
                                <li><a href="#" className="hover:text-[#C46D5E] transition-colors">Manifesto</a></li>
                                <li><a href="#" className="hover:text-[#C46D5E] transition-colors">Community</a></li>
                                <li><a href="#" className="hover:text-[#C46D5E] transition-colors">Sustainability</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Connect</h4>
                            <ul className="space-y-4 text-[#6B705C]">
                                <li><a href="#" className="hover:text-[#C46D5E] transition-colors">Twitter</a></li>
                                <li><a href="#" className="hover:text-[#C46D5E] transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-[#C46D5E] transition-colors">Newsletter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center md:flex justify-between items-center pt-8 border-t border-[#2C3333]/5">
                        <p className="text-[#2C3333]/40 text-sm">
                            © 2024 Oasis Design Systems. All rights reserved.
                        </p>
                        <div className="flex justify-center gap-8 mt-4 md:mt-0 text-sm text-[#2C3333]/40">
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
