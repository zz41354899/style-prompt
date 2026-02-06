import { useState } from 'react';
import { Menu, X, ArrowRight, Check, Grid, Type, Layers, Maximize, Minus, Download, Share2 } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';

export const S04SwissPro = ({ deviceMode }: { deviceMode?: 'desktop' | 'tablet' | 'mobile' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
    const responsive = useResponsive(deviceMode);
    const isMobile = responsive.nav.showMobile;

    // S04 Swiss Design Tokens (International Style)
    const colors = {
        bg: '#FFFFFF',
        text: '#000000',
        accent: '#FF3300', // Swiss Red
        gray: '#CCCCCC',
        lightGray: '#F2F2F2',
        offWhite: '#FAFAFA'
    };
    const spacing = responsive.spacing;

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text, fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            {/* ========== 1. NAV ========== */}
            <header className="sticky top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-red-600 rounded-sm" />
                        <span className="text-xl font-bold tracking-tight">HELVETICA®</span>
                    </div>

                    {!isMobile && (
                        <nav className="flex gap-8">
                            {['Typefaces', 'Foundry', 'Licenses', 'About'].map(item => (
                                <a key={item} className="text-sm font-medium tracking-wide hover:text-red-600 transition-colors cursor-pointer uppercase">{item}</a>
                            ))}
                        </nav>
                    )}

                    <div className="flex items-center gap-4">
                        {!isMobile && <button className="text-sm font-bold uppercase tracking-wider">Log In</button>}
                        {!isMobile && <button className="bg-black text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-red-600 transition-colors">Get Trial</button>}
                        {isMobile && (
                            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                                {menuOpen ? <X /> : <Menu />}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && isMobile && (
                    <div className="bg-white p-6 flex flex-col gap-4 border-t border-gray-200">
                        {['Typefaces', 'Foundry', 'Licenses', 'About'].map(item => (
                            <a key={item} className="text-xl font-bold uppercase border-b-2 border-transparent hover:border-red-600 w-fit">{item}</a>
                        ))}
                        <button className="bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-red-600 transition-colors w-full mt-4">Get Trial</button>
                    </div>
                )}
            </header>

            {/* ========== 2. HERO ========== */}
            <section className="pt-20 pb-24 px-8 border-b-2 border-black">
                <div className="max-w-7xl mx-auto" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: '4rem' }}>
                    <div style={{ gridColumn: isMobile ? 'span 1' : 'span 8' }}>
                        <h1 style={{
                            fontSize: isMobile ? '80px' : '160px',
                            lineHeight: 0.8,
                            fontWeight: '700',
                            letterSpacing: '-0.06em',
                            marginBottom: '4rem',
                            marginLeft: '-0.04em' // Optical alignment
                        }}>
                            Design<br />
                            <span style={{ color: colors.accent }}>Is</span><br />
                            Order.
                        </h1>
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '4rem' }} className="max-w-3xl border-t-4 border-black pt-8">
                            <div>
                                <h3 className="text-sm font-bold uppercase mb-4 tracking-widest">Manifesto 2025</h3>
                                <p className="text-xl leading-tight font-medium">
                                    Objective clarity through grid systems. We provide the fundamental tools for rational design communication.
                                </p>
                            </div>
                            <div className="flex flex-col justify-between items-start">
                                <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 w-full`}>
                                    <button
                                        style={{ backgroundColor: colors.accent }}
                                        className="text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-black transition-colors text-sm w-full md:w-auto"
                                    >
                                        Start
                                    </button>
                                    <button className="border-2 border-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-sm w-full md:w-auto">
                                        Read
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual: The Grid */}
                    {!isMobile && (
                        <div style={{ gridColumn: 'span 4' }} className="relative h-full min-h-[500px] border-l-2 border-black pl-8">
                            <div className="h-full flex flex-col justify-between">
                                <div className="grid grid-cols-2 gap-4 h-1/2">
                                    <div className="bg-black w-full h-full"></div>
                                    <div style={{ backgroundColor: colors.accent }} className="w-full h-full rounded-full"></div>
                                </div>
                                <div className="space-y-4 font-mono text-xs font-bold uppercase">
                                    <div className="flex justify-between border-b border-black pb-1">
                                        <span>Grid Unit</span>
                                        <span>12pt</span>
                                    </div>
                                    <div className="flex justify-between border-b border-black pb-1">
                                        <span>Column</span>
                                        <span>60px</span>
                                    </div>
                                    <div className="flex justify-between border-b border-black pb-1">
                                        <span>Gutter</span>
                                        <span>20px</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ========== 9. TRUST TEXT ========== */}
            <section className="py-12 border-y border-gray-200 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '2rem' }}>
                        <div className="text-xs font-bold uppercase tracking-widest text-black/50 pt-2">Trusted By</div>
                        {['Braun', 'Lufthansa', 'SBB CFF FFS', 'Knoll'].map(brand => (
                            <div key={brand} className="text-3xl font-bold tracking-tighter text-black">{brand}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 3. PROBLEM ========== */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: '3rem' }}>
                    <div style={{ gridColumn: isMobile ? 'span 1' : 'span 4' }}>
                        <h2 className="text-4xl font-bold mb-8">The Chaos of<br />Arbitrariness</h2>
                        <div className="w-12 h-1 bg-red-600 mb-8" />
                        <p className="text-xl text-gray-600">Without a system, design becomes decoration. We restore order through mathematical relationships.</p>
                    </div>
                    <div style={{ gridColumn: isMobile ? 'span 1' : 'span 8', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem' }}>
                        {[
                            { title: 'Subjectivity', desc: 'Design should be objective and transmissible, not based on personal mood.' },
                            { title: 'Inconsistency', desc: 'Lack of grids leads to visual dissonance and poor readability.' },
                            { title: 'Noise', desc: 'Decoration distracts from the message. Essentialism is the only path.' },
                            { title: 'Entropy', desc: 'Systems naturally decay. Rigid structures are needed to maintain order.' }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-white border-l-4 border-black group hover:bg-black hover:text-white transition-colors cursor-default">
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide group-hover:text-white">{item.title}</h3>
                                <p className="text-black/70 leading-relaxed font-medium group-hover:text-white/80">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== 6. BENTO GRID (Typography) ========== */}
            <section className="py-32 bg-black text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16 border-b border-white/20 pb-8">
                        <h2 style={{ fontSize: isMobile ? '2.5rem' : '5rem', letterSpacing: '-0.04em' }} className="font-bold">The Foundry</h2>
                        <span className="font-mono text-sm tracking-widest">EST. 1957</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1px', backgroundColor: '#333', border: '1px solid #333' }}>
                        {/* Large Primary Box */}
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }} className="bg-white text-black p-12 min-h-[400px] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 text-xs font-bold uppercase bg-black text-white px-4 py-2">Best Seller</div>
                            <h3 className="text-9xl font-bold tracking-tighter mb-4 transition-all duration-500 transform origin-left group-hover:scale-105">Neue<br />Haas<br />Grotesk</h3>
                            <div className="absolute bottom-12 right-12 bg-black text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight size={32} />
                            </div>
                        </div>

                        <div className="bg-[#EFEEEE] text-black p-10 flex flex-col justify-between hover:bg-[#FF3300] hover:text-white transition-colors group">
                            <div className="text-8xl font-bold tracking-tighter">Aa</div>
                            <div>
                                <h4 className="text-xl font-bold uppercase mb-1">Glyph Set</h4>
                                <p className="text-sm font-mono opacity-70">724 Characters</p>
                            </div>
                        </div>

                        <div className="bg-[#111] text-white p-10 flex flex-col justify-between">
                            <Grid size={48} strokeWidth={1} className="mb-4 text-[#CCCCCC]" />
                            <div>
                                <h4 className="text-xl font-bold uppercase mb-1">Grid Builder</h4>
                                <p className="text-[#999] text-sm font-mono">Automated layouts</p>
                            </div>
                        </div>

                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }} className="bg-[#1a1a1a] p-12 flex items-center justify-between">
                            <div>
                                <h3 className="text-3xl font-bold mb-2 tracking-tight">Web Licensing</h3>
                                <p className="text-gray-400 font-medium max-w-md">Self-hosted WOFF2 files for uncompromising speed. Zero layout shift.</p>
                            </div>
                            <button className="bg-white text-black px-8 py-4 font-bold uppercase hover:bg-[#FF3300] hover:text-white transition-colors text-sm tracking-widest">View Plans</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== 5. SYSTEM ========== */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '6rem' }}>
                        <div>
                            <h2 className="text-4xl font-bold mb-12">The Method</h2>
                            <div className="space-y-12">
                                {[
                                    { num: '01', title: 'Grid', text: 'The underlying structure that organizes information.' },
                                    { num: '02', title: 'Typography', text: 'The primary vehicle for communication.' },
                                    { num: '03', title: 'Space', text: 'Negative space is an active element of design.' }
                                ].map(step => (
                                    <div key={step.num} className="flex gap-8 group">
                                        <div className="text-xs font-bold font-mono pt-2 text-red-600">{step.num}</div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">{step.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{step.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {!isMobile && (
                            <div className="bg-gray-100 p-12 relative">
                                {/* Abstract Visualization */}
                                <div className="absolute top-12 left-12 w-24 h-24 bg-red-600/20 mix-blend-multiply" />
                                <div className="absolute top-24 left-24 w-24 h-24 bg-blue-600/20 mix-blend-multiply" />
                                <div className="border border-black h-full w-full flex items-center justify-center">
                                    <span className="font-mono text-xs rotating-text">RATIO 1:1.618</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ========== 12. PRICING ========== */}
            <section className="py-32 px-6 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Access</h2>
                            <p className="text-gray-600 mb-8 text-lg">Choose your license type.</p>
                            <div className="flex flex-col gap-2 items-start">
                                <button onClick={() => setBillingCycle('monthly')} className={`text-xl font-bold uppercase transition-colors ${billingCycle === 'monthly' ? 'text-black' : 'text-gray-400'}`}>Desktop</button>
                                <button onClick={() => setBillingCycle('annual')} className={`text-xl font-bold uppercase transition-colors ${billingCycle === 'annual' ? 'text-black' : 'text-gray-400'}`}>Web + App</button>
                            </div>
                        </div>

                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem' }}>
                            {[
                                { name: 'Standard', price: '49', pl: 'per weight' },
                                { name: 'Family', price: '299', pl: 'full family', highlight: true }
                            ].map((plan, i) => (
                                <div key={i} className={`p-10 border-2 ${plan.highlight ? 'border-[#FF3300] bg-white' : 'border-black bg-transparent'} relative`}>
                                    {plan.highlight && <div className="absolute -top-3 left-10 bg-[#FF3300] text-white text-xs font-bold uppercase px-2 py-1">Recommended</div>}
                                    <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{plan.name}</h3>
                                    <div className="text-7xl font-bold mb-2 tracking-tighter">€{plan.price}</div>
                                    <div className="text-sm text-gray-400 uppercase mb-8 font-mono">{plan.pl}</div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3 text-sm font-bold"><div className="w-4 h-4 bg-black flex items-center justify-center text-white"><Check size={10} /></div> Commercial Use</li>
                                        <li className="flex items-center gap-3 text-sm font-bold"><div className="w-4 h-4 bg-black flex items-center justify-center text-white"><Check size={10} /></div> Perpetual License</li>
                                    </ul>
                                    <button className={`w-full py-5 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity ${plan.highlight ? 'bg-[#FF3300] text-white' : 'bg-black text-white'}`}>Purchase</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== 14. FOOTER ========== */}
            <section className="bg-white text-black py-20 px-6 border-t border-black">
                <div className="max-w-7xl mx-auto">
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '3rem' }} className="mb-20">
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Coordinates</h4>
                            <p className="text-sm leading-loose">Zurich, Switzerland<br />Bahnhofstrasse 12<br />CH-8001</p>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Index</h4>
                            <ul className="space-y-3 text-sm font-medium">
                                {['Typefaces', 'Posters', 'Books', 'Workshops'].map(l => <li key={l}><a className="hover:text-red-600 cursor-pointer">{l}</a></li>)}
                            </ul>
                        </div>
                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }}>
                            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Stay Updated</h4>
                            <div className="flex border-b-2 border-black pb-2">
                                <input type="email" placeholder="EMAIL ADDRESS" className="flex-1 bg-transparent outline-none uppercase font-bold text-lg placeholder-gray-300" />
                                <button className="font-bold uppercase hover:text-red-600">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className={`flex ${isMobile ? 'flex-col gap-4' : 'flex-row'} justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-400`}>
                        <div>© 1957—2025 Helvetica Inc.</div>
                        <div className="flex gap-6">
                            <span>Legal</span>
                            <span>Privacy</span>
                            <span>Impressum</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
