import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, Cpu, CircuitBoard, Wifi, Bot } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S67CyberneticPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    const colors = { bg: '#0A0E14', surface: '#111820', text: '#E0F0FF', muted: '#6B8299', cyan: '#00D9FF', blue: '#0066FF', purple: '#8B5CF6', dark: '#050810' };
    const cyberGlow = '0 0 20px rgba(0,217,255,0.5)';
    const circuitPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h20M40 30h20M30 0v20M30 40v20M25 30h10M30 25v10' stroke='%2300D9FF' stroke-width='0.5' fill='none' opacity='0.1'/%3E%3Ccircle cx='30' cy='30' r='3' fill='%2300D9FF' opacity='0.2'/%3E%3C/svg%3E")`;

    return (
        <div className="min-h-screen relative" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Orbitron", "Share Tech Mono", monospace' }}>
            {/* Circuit Background */}
            <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage: circuitPattern, backgroundSize: '60px 60px' }} />

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b" style={{ borderColor: colors.cyan + '40', backgroundColor: `${colors.bg}E0`, backdropFilter: 'blur(10px)' }}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
                    <div className="flex items-center gap-3">
                        <Cpu size={24} style={{ color: colors.cyan }} />
                        <span className="tracking-widest">CYBER</span>
                    </div>
                    {!isMobile && (
                        <nav className="flex items-center gap-6">
                            {['NEURAL', 'SYSTEM', 'CORE'].map((item) => (<span key={item} className="text-sm tracking-wider cursor-pointer hover:text-cyan-400" style={{ color: colors.muted }}>{item}</span>))}
                            <button className="px-5 py-2 text-sm tracking-wider text-black" style={{ backgroundColor: colors.cyan, boxShadow: cyberGlow }}>CONNECT</button>
                        </nav>
                    )}
                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>
                {menuOpen && isMobile && (
                    <div className="p-4 border-t" style={{ borderColor: colors.cyan + '40', backgroundColor: colors.surface }}>
                        {['NEURAL', 'SYSTEM', 'CORE'].map((item) => (<div key={item} className="py-2 text-sm tracking-wider" style={{ color: colors.muted }}>{item}</div>))}
                        <button className="w-full mt-3 py-2 text-sm tracking-wider text-black" style={{ backgroundColor: colors.cyan }}>CONNECT</button>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section style={{ padding: '80px 24px' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 border" style={{ borderColor: colors.cyan + '60' }}>
                        <Wifi size={16} style={{ color: colors.cyan }} />
                        <span className="text-xs tracking-widest" style={{ color: colors.muted }}>SYSTEM ONLINE</span>
                    </div>
                    <h1 className="mb-4 tracking-wider leading-tight" style={{ fontSize: isMobile ? '40px' : '72px', textShadow: cyberGlow }}>
                        <span style={{ color: colors.cyan }}>CYBER</span>NETIC
                    </h1>
                    <p className="max-w-lg mx-auto mb-8 font-sans" style={{ color: colors.muted }}>Futuristic cybernetic interfaces with neural networks and digital consciousness.</p>
                    <div className="flex gap-4 justify-center" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                        <button className="px-8 py-3 text-sm tracking-wider text-black flex items-center justify-center gap-2" style={{ backgroundColor: colors.cyan, boxShadow: cyberGlow }}>INITIALIZE <ArrowRight size={16} /></button>
                        <button className="px-8 py-3 text-sm tracking-wider border" style={{ borderColor: colors.cyan, color: colors.cyan }}>EXPLORE</button>
                    </div>
                    {/* Cyber Icons */}
                    <div className="mt-12 flex justify-center gap-4">
                        {[Cpu, CircuitBoard, Wifi, Bot].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 flex items-center justify-center border" style={{ borderColor: colors.cyan + '60', backgroundColor: colors.surface }}><Icon size={24} style={{ color: colors.cyan }} /></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl tracking-widest mb-10" style={{ color: colors.cyan, textShadow: cyberGlow }}>MODULES</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ icon: Cpu, title: 'NEURAL NET' }, { icon: CircuitBoard, title: 'CIRCUIT DESIGN' }, { icon: Bot, title: 'AI CORE' }].map((item) => (
                            <div key={item.title} className="p-5 border" style={{ borderColor: colors.cyan + '40', backgroundColor: colors.bg }}>
                                <item.icon size={24} className="mb-3" style={{ color: colors.cyan }} />
                                <h3 className="text-sm tracking-wider mb-1">{item.title}</h3>
                                <p className="text-xs font-sans" style={{ color: colors.muted }}>Cybernetic interface.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-2xl tracking-widest mb-10" style={{ color: colors.cyan, textShadow: cyberGlow }}>PROTOCOLS</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                        {[{ name: 'BASIC', price: '$49', hot: false }, { name: 'NEURAL', price: '$99', hot: true }, { name: 'QUANTUM', price: '$199', hot: false }].map((plan) => (
                            <div key={plan.name} className="relative p-5 border" style={{ borderColor: plan.hot ? colors.cyan : colors.cyan + '40', backgroundColor: colors.surface, boxShadow: plan.hot ? cyberGlow : 'none' }}>
                                {plan.hot && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs tracking-widest text-black" style={{ backgroundColor: colors.cyan }}>ACTIVE</div>}
                                <h3 className="text-sm tracking-wider mb-1">{plan.name}</h3>
                                <div className="text-3xl tracking-wide mb-4" style={{ color: colors.cyan }}>{plan.price}</div>
                                <ul className="space-y-2 mb-5">
                                    {['All modules', 'Updates', 'Support'].map((f) => (<li key={f} className="flex items-center gap-2 text-xs font-sans" style={{ color: colors.muted }}><Check size={12} style={{ color: colors.cyan }} /> {f}</li>))}
                                </ul>
                                <button className="w-full py-2 text-xs tracking-wider" style={{ backgroundColor: plan.hot ? colors.cyan : 'transparent', color: plan.hot ? 'black' : colors.cyan, border: plan.hot ? 'none' : `1px solid ${colors.cyan}` }}>SELECT</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '60px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-2xl tracking-widest mb-10" style={{ color: colors.cyan, textShadow: cyberGlow }}>DATABASE</h2>
                    <div className="space-y-3">
                        {[{ q: 'WHAT IS CYBERNETIC?', a: 'Futuristic interfaces with neural network aesthetics and digital consciousness.' },
                        { q: 'CUSTOMIZABLE?', a: 'Full protocol access to all visual parameters.' },
                        { q: 'COMPATIBILITY?', a: 'Universal browser support enabled.' }
                        ].map((item, i) => (
                            <div key={i} className="border overflow-hidden" style={{ borderColor: colors.cyan + '40', backgroundColor: colors.bg }}>
                                <button className="w-full flex items-center justify-between p-4 text-left text-sm" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="tracking-wider">{item.q}</span>
                                    <ChevronDown size={16} style={{ color: colors.cyan, transform: expandedFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                                {expandedFaq === i && <div className="px-4 pb-4 text-xs font-sans" style={{ color: colors.muted }}>{item.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 24px' }}>
                <div className="max-w-3xl mx-auto p-10 text-center border" style={{ borderColor: colors.cyan, backgroundColor: colors.surface, boxShadow: cyberGlow }}>
                    <Bot size={40} className="mx-auto mb-4" style={{ color: colors.cyan }} />
                    <h2 className="text-2xl tracking-widest mb-4">INITIATE SEQUENCE</h2>
                    <button className="px-10 py-3 text-sm tracking-wider text-black" style={{ backgroundColor: colors.cyan }}>ACTIVATE</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: colors.cyan + '40', padding: '30px 24px', backgroundColor: colors.surface }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="tracking-widest">CYBER</span>
                    <span className="text-xs font-sans" style={{ color: colors.muted }}>© 2025 Cybernetic Systems</span>
                </div>
            </footer>
        </div>
    );
};
