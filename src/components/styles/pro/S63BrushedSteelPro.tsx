import { useState } from 'react';
import { Menu, X, ArrowRight, Check, ChevronDown, CircuitBoard, Cpu, Zap, Settings, Shield, Lock, Fingerprint } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S63BrushedSteelPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#2C3E50] text-[#D7DBDD] selection:bg-[#95A5A6] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;700&family=Orbitron:wght@400;700;900&display=swap');

                .font-steel-head { font-family: 'Orbitron', sans-serif; }
                .font-steel-body { font-family: 'Chakra Petch', sans-serif; }

                /* Brushed Metal Texture */
                .brushed-metal {
                    background-color: #5D6D7E;
                    background-image: 
                        linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent),
                        repeating-linear-gradient(180deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px),
                        repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 2px);
                    background-size: 4px 4px, 100% 100%, 100% 100%;
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
                }
                
                /* Anisotropic Reflection Gradient */
                .anisotropic-gradient {
                    background: linear-gradient(135deg, #7F8C8D 0%, #BDC3C7 25%, #95A5A6 50%, #4D5656 75%, #2C3E50 100%);
                }
                
                /* Engraved Text */
                .engraved {
                    color: rgba(0,0,0,0.6);
                    text-shadow: 1px 1px 0 rgba(255,255,255,0.1);
                    background: linear-gradient(180deg, #2C3E50 0%, #1A252F 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                /* Screw Head */
                .screw {
                    width: 12px;
                    height: 12px;
                    background: radial-gradient(circle, #BDC3C7, #7F8C8D);
                    border-radius: 50%;
                    box-shadow: 1px 1px 2px rgba(0,0,0,0.5), inset 1px 1px 1px rgba(255,255,255,0.8);
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                }
                .screw::after {
                    content: '';
                    width: 8px;
                    height: 2px;
                    background: #5D6D7E;
                    transform: rotate(45deg);
                    border-radius: 1px;
                }
                .screw::before {
                    content: '';
                    width: 2px;
                    height: 8px;
                    background: #5D6D7E;
                    transform: rotate(45deg);
                    border-radius: 1px;
                }
                
                /* Inner Shadow Container */
                .milled-panel {
                    box-shadow: 
                        inset 2px 2px 5px rgba(0,0,0,0.8),
                        inset -1px -1px 2px rgba(255,255,255,0.2),
                        5px 5px 15px rgba(0,0,0,0.5);
                }
            `}</style>

            <div className="absolute inset-0 bg-[#1A252F] fixed z-[-2]"></div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 brushed-metal border-b border-[#2C3E50]/50 shadow-2xl">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#2C3E50] p-2 rounded milled-panel">
                            <Settings size={20} className="text-[#BDC3C7] animate-spin-slow" />
                        </div>
                        <span className="text-2xl font-steel-head tracking-widest text-[#ECF0F1] drop-shadow-md">ALLOY<span className="text-[#95A5A6]">.SYS</span></span>
                    </div>

                    {!isMobile && (
                        <nav className="flex items-center gap-8">
                            {['Fabrication', 'Materials', 'Logistics'].map((item) => (
                                <a key={item} href="#" className="font-steel-body text-[#7F8C8D] hover:text-[#ECF0F1] text-sm font-bold uppercase tracking-wider transition-colors drop-shadow-sm">
                                    {item}
                                </a>
                            ))}
                            <button className="px-6 py-2 anisotropic-gradient text-[#1A252F] font-steel-head text-xs font-bold uppercase tracking-widest rounded shadow-[0_4px_10px_rgba(0,0,0,0.5)] border border-[#7F8C8D] hover:brightness-110 active:translate-y-px transition-all">
                                Request Quote
                            </button>
                        </nav>
                    )}

                    {isMobile && <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-[#BDC3C7] bg-[#2C3E50] milled-panel rounded">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>}
                </div>

                {menuOpen && isMobile && (
                    <div className="absolute w-full px-6 py-6 brushed-metal border-b border-[#2C3E50]/50 shadow-2xl">
                        {['Fabrication', 'Materials', 'Logistics'].map((item) => (
                            <div key={item} className="py-4 font-steel-head text-xl text-[#ECF0F1] border-b border-[#7F8C8D]/20 uppercase tracking-widest">{item}</div>
                        ))}
                        <button className="w-full mt-6 py-4 anisotropic-gradient text-[#1A252F] font-steel-head text-lg font-bold uppercase tracking-widest rounded shadow-lg">
                            Request Quote
                        </button>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="py-20 lg:py-32 px-6 relative">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-3 mb-8 px-4 py-1 bg-[#2C3E50] border border-[#7F8C8D] rounded shadow-lg">
                        <Cpu size={14} className="text-[#BDC3C7]" />
                        <span className="font-steel-body font-bold text-xs uppercase tracking-[0.2em] text-[#BDC3C7]">Heavy Industry Standard</span>
                    </div>

                    <div className="relative inline-block mb-6">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-steel-head text-[#ECF0F1] uppercase tracking-tighter leading-none relative z-10 drop-shadow-2xl">
                            Precision <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#BDC3C7] to-[#7F8C8D]">Machining</span>
                        </h1>
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 font-steel-head text-[#ECF0F1] uppercase tracking-tighter leading-none transform translate-x-2 translate-y-2 pointer-events-none">
                            Precision <br /> Machining
                        </div>
                    </div>

                    <p className="font-steel-body text-lg md:text-xl text-[#95A5A6] max-w-2xl mx-auto mb-12 font-medium tracking-wide">
                        Engineered for durability. Milled from a single block of aerospace-grade aluminum. The ultimate heavy-duty interface.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="px-10 py-5 anisotropic-gradient text-[#1A252F] font-steel-head text-lg uppercase tracking-widest rounded shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-t border-[#ECF0F1]/50 hover:brightness-110 transition-all w-full sm:w-auto relative group overflow-hidden">
                            <span className="relative z-10 font-bold">Initiate Build</span>
                            <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full skew-x-[-20deg] group-hover:translate-x-full transition-transform duration-500"></div>
                        </button>
                        <button className="px-10 py-5 brushed-metal text-[#ECF0F1] font-steel-head text-lg uppercase tracking-widest rounded border border-[#7F8C8D] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] hover:bg-[#5D6D7E] transition-colors w-full sm:w-auto">
                            Specs Sheet
                        </button>
                    </div>
                </div>
            </section>

            {/* Features (Engraved Panels) */}
            <section className="py-24 px-6 relative bg-[#17202A]">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Armored", desc: "Impact resistant chassis tested to military standards.", color: "#BDC3C7" },
                            { icon: Layers, title: "Modular", desc: "Hot-swappable components for rapid field repair.", color: "#BDC3C7" },
                            { icon: Zap, title: "High Voltage", desc: "Shielded electronics safe up to 10,000 volts.", color: "#BDC3C7" }
                        ].map((f, i) => (
                            <div key={i} className="relative p-1 bg-gradient-to-br from-[#7F8C8D] to-[#2C3E50] rounded shadow-2xl">
                                <div className="h-full brushed-metal p-8 rounded relative overflow-hidden">
                                    <div className="screw top-3 left-3"></div>
                                    <div className="screw top-3 right-3"></div>
                                    <div className="screw bottom-3 left-3"></div>
                                    <div className="screw bottom-3 right-3"></div>

                                    <div className="mb-6 w-16 h-16 bg-[#2C3E50] rounded-full flex items-center justify-center milled-panel mx-auto">
                                        <f.icon className="w-8 h-8 text-[#BDC3C7]" strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-2xl font-steel-head text-[#ECF0F1] mb-4 text-center uppercase tracking-wider">{f.title}</h3>
                                    <p className="font-steel-body text-sm text-[#BDC3C7] leading-relaxed text-center border-t border-[#7F8C8D] pt-4">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing (Industrial Plates) */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-steel-head text-[#BDC3C7] mb-4 uppercase tracking-tighter engraved">Procurement</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#7F8C8D] to-transparent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                        {[
                            { name: 'Sheet', price: '$490', features: ['Raw Material', 'Unfinished', 'Bulk Order'], type: 'Standard' },
                            { name: 'Billet', price: '$8900', features: ['CNC Machined', 'Bead Blasted', 'Anodized'], type: 'Industrial', highlight: true },
                            { name: 'Ingot', price: '$24K', features: ['Forged', 'Heat Treated', 'X-Ray Verified'], type: 'Aerospace' }
                        ].map((plan, i) => (
                            <div key={i} className={`relative p-8 rounded-sm transition-transform duration-300 ${plan.highlight ? 'bg-[#34495E] scale-105 z-10 shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-[#7F8C8D]' : 'bg-[#2C3E50] border border-[#2C3E50] opacity-80'}`}>
                                <div className="screw top-4 left-4"></div>
                                <div className="screw top-4 right-4"></div>

                                <div className="text-center border-b border-[#1A252F] pb-6 mb-6">
                                    <span className="font-steel-body text-xs font-bold bg-[#1A252F] text-[#7F8C8D] px-2 py-1 rounded mb-2 inline-block uppercase tracking-widest">{plan.type}</span>
                                    <h3 className="text-2xl font-steel-head text-[#ECF0F1] uppercase tracking-wide">{plan.name}</h3>
                                    <div className="text-4xl font-steel-head font-bold mt-4 text-[#BDC3C7]">{plan.price}</div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 font-steel-body font-bold text-[#95A5A6] text-sm uppercase">
                                            <div className="w-1.5 h-1.5 bg-[#7F8C8D] rounded-full"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-3 anisotropic-gradient text-[#1A252F] font-steel-head font-bold uppercase tracking-widest text-sm rounded shadow-lg hover:brightness-110 transition-all">
                                    Select
                                </button>

                                <div className="screw bottom-4 left-4"></div>
                                <div className="screw bottom-4 right-4"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Area */}
            <section className="py-24 px-6 bg-[#212F3C]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-steel-head text-center mb-16 text-[#BDC3C7] tracking-widest uppercase">
                        Tech Specs
                    </h2>

                    <div className="space-y-4">
                        {[{ q: 'Tolerance range?', a: 'Precision milled to within 0.001mm tolerances.' },
                        { q: 'Corrosion resistance?', a: 'Passivated surface treatment ensures 100 year durability.' },
                        { q: 'Load capacity?', a: 'Rated for 50 tons of static pressure.' }
                        ].map((item, i) => (
                            <div key={i} className="brushed-metal rounded border border-[#5D6D7E]">
                                <button className="w-full flex items-center justify-between p-5 text-left group" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                    <span className="font-steel-body font-bold text-sm text-[#ECF0F1] uppercase tracking-widest group-hover:text-white transition-colors">{'>'} {item.q}</span>
                                    <ChevronDown size={20} className={`text-[#BDC3C7] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedFaq === i && (
                                    <div className="px-5 pb-5 font-steel-body text-xs text-[#BDC3C7] leading-relaxed bg-[#2C3E50]/50 border-t border-[#5D6D7E] pt-4">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 relative bg-[#1A252F]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#34495E_0%,_transparent_70%)] opacity-30"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10 p-12 brushed-metal rounded-lg border border-[#7F8C8D] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                    <div className="screw top-4 left-4"></div>
                    <div className="screw top-4 right-4"></div>
                    <div className="screw bottom-4 left-4"></div>
                    <div className="screw bottom-4 right-4"></div>

                    <Fingerprint size={48} className="mx-auto mb-6 text-[#BDC3C7]" />
                    <h2 className="text-4xl md:text-5xl font-steel-head text-[#ECF0F1] mb-8 uppercase tracking-tighter">Secure Your Build</h2>
                    <p className="font-steel-body text-lg text-[#95A5A6] mb-10 max-w-lg mx-auto font-medium">
                        Biometric authentication required for access to schematic files.
                    </p>
                    <button className="px-16 py-5 anisotropic-gradient text-[#1A252F] font-steel-head text-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg rounded">
                        Authenticate
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-[#0E1318] text-[#566573] border-t-2 border-[#2C3E50]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Settings size={20} className="text-[#5D6D7E]" />
                        <span className="text-xl font-steel-head text-[#5D6D7E] tracking-widest uppercase">ALLOY<span className="text-[#2C3E50]">.SYS</span></span>
                    </div>

                    <div className="flex gap-10 text-xs font-steel-body font-bold uppercase tracking-[0.2em] text-[#2C3E50]">
                        <a href="#" className="hover:text-[#5D6D7E] transition-colors">Schematics</a>
                        <a href="#" className="hover:text-[#5D6D7E] transition-colors">Manifest</a>
                        <a href="#" className="hover:text-[#5D6D7E] transition-colors">Grid</a>
                    </div>

                    <div className="font-steel-body text-xs text-[#2C3E50] uppercase tracking-widest">
                        © 2025 Steel Industries.
                    </div>
                </div>
            </footer>
        </div>
    );
};

// Missing icon
function Layers(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
        </svg>
    )
}
